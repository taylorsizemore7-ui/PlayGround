/* ============================================================================
   SKY — gradient dome, sun, moon, stars, drifting box clouds and lighting.
   ========================================================================== */
import * as THREE from 'three'
import { mulberry32 } from '../core/rng.js'

const skyVert = /* glsl */`
  varying vec3 vWorld;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`
const skyFrag = /* glsl */`
  uniform vec3 uTop;
  uniform vec3 uBottom;
  uniform vec3 uSunColor;
  uniform vec3 uSunDir;
  varying vec3 vWorld;
  void main() {
    vec3 dir = normalize(vWorld);
    float h = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);
    vec3 col = mix(uBottom, uTop, pow(h, 0.72));
    float sun = pow(max(dot(dir, normalize(uSunDir)), 0.0), 5.0);
    col += uSunColor * sun * 0.32;
    float horizon = exp(-abs(dir.y) * 5.5);
    col += uSunColor * horizon * 0.10;
    gl_FragColor = vec4(col, 1.0);
  }
`

export class Sky {
  constructor(scene, options = {}) {
    this.scene = scene
    this.time = options.time ?? 0.31
    this.dayLength = options.dayLength ?? 600
    this.fancy = true
    this.seed = options.seed || 1

    this.uniforms = {
      uTop: { value: new THREE.Color('#4a8fe0') },
      uBottom: { value: new THREE.Color('#b8dcff') },
      uSunColor: { value: new THREE.Color('#fff2c8') },
      uSunDir: { value: new THREE.Vector3(0, 1, 0) }
    }
    this.dome = new THREE.Mesh(
      new THREE.SphereGeometry(280, 24, 16),
      new THREE.ShaderMaterial({ uniforms: this.uniforms, vertexShader: skyVert, fragmentShader: skyFrag, side: THREE.BackSide, depthWrite: false, fog: false })
    )
    this.dome.frustumCulled = false
    scene.add(this.dome)

    this.sun = new THREE.Mesh(
      new THREE.CircleGeometry(12, 32),
      new THREE.MeshBasicMaterial({ color: '#fff4c0', fog: false, transparent: true, opacity: 0.95 })
    )
    this.sun.frustumCulled = false
    scene.add(this.sun)
    this.moon = new THREE.Mesh(
      new THREE.CircleGeometry(8.5, 32),
      new THREE.MeshBasicMaterial({ color: '#dfe8ff', fog: false, transparent: true, opacity: 0.9 })
    )
    this.moon.frustumCulled = false
    scene.add(this.moon)

    // stars
    const rng = mulberry32(this.seed ^ 0xa11ce)
    const positions = []
    for (let i = 0; i < 900; i++) {
      const theta = rng() * Math.PI * 2
      const phi = Math.acos(rng() * 0.95)
      const r = 240
      positions.push(Math.sin(phi) * Math.cos(theta) * r, Math.cos(phi) * r, Math.sin(phi) * Math.sin(theta) * r)
    }
    const starGeo = new THREE.BufferGeometry()
    starGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    this.stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: '#e8f0ff', size: 1.45, sizeAttenuation: true, transparent: true, opacity: 0, fog: false, depthWrite: false }))
    this.stars.frustumCulled = false
    scene.add(this.stars)

    // blocky clouds
    this.clouds = new THREE.Group()
    this.clouds.name = 'clouds'
    const cloudMat = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.62, depthWrite: false, fog: true })
    for (let i = 0; i < 34; i++) {
      const cluster = new THREE.Group()
      const n = 2 + Math.floor(rng() * 4)
      for (let j = 0; j < n; j++) {
        const w = 5 + rng() * 12, d = 5 + rng() * 10
        const m = new THREE.Mesh(new THREE.BoxGeometry(w, 2.2 + rng() * 1.6, d), cloudMat)
        m.position.set((rng() - 0.5) * 17, (rng() - 0.5) * 2.2, (rng() - 0.5) * 15)
        cluster.add(m)
      }
      cluster.position.set((rng() - 0.5) * 340, 76 + rng() * 18, (rng() - 0.5) * 340)
      cluster.userData.drift = 0.5 + rng() * 0.9
      this.clouds.add(cluster)
    }
    scene.add(this.clouds)

    this.hemi = new THREE.HemisphereLight('#cfe6ff', '#6f5a3e', 0.8)
    scene.add(this.hemi)
    this.sunLight = new THREE.DirectionalLight('#fff0cc', 1.25)
    this.sunLight.position.set(60, 100, 30)
    scene.add(this.sunLight)
    this.ambient = new THREE.AmbientLight('#ffffff', 0.22)
    scene.add(this.ambient)

    this.fog = new THREE.Fog('#a8d0f0', 38, 110)
    scene.fog = this.fog
    this.colors = {
      dayTop: new THREE.Color('#4a8fe0'), dayBottom: new THREE.Color('#b8dcff'),
      duskTop: new THREE.Color('#405080'), duskBottom: new THREE.Color('#f09a68'),
      nightTop: new THREE.Color('#050b16'), nightBottom: new THREE.Color('#17233a'),
      fogDay: new THREE.Color('#a8d0f0'), fogDusk: new THREE.Color('#d6a08a'), fogNight: new THREE.Color('#0d1624'),
      sunDay: new THREE.Color('#fff2c8'), sunDusk: new THREE.Color('#ff9a58'), fog: new THREE.Color('#a8d0f0')
    }
    this.target = new THREE.Vector3()
    this.update(0, null, 90)
  }

  update(dt, playerPos, renderDistance = 90) {
    this.time = (this.time + dt / this.dayLength) % 1
    const angle = (this.time - 0.25) * Math.PI * 2
    const sunDir = new THREE.Vector3(Math.cos(angle) * 0.75, Math.sin(angle), Math.cos(angle) * 0.3).normalize()
    const elev = sunDir.y
    const day = THREE.MathUtils.smoothstep(elev, -0.15, 0.25)
    const dusk = Math.max(0, 1 - Math.abs(elev) * 4) * (1 - Math.max(0, elev) * 0.3)
    const night = 1 - day

    const top = this.colors.nightTop.clone().lerp(this.colors.dayTop, day).lerp(this.colors.duskTop, dusk * 0.5)
    const bottom = this.colors.nightBottom.clone().lerp(this.colors.dayBottom, day).lerp(this.colors.duskBottom, dusk * 0.7)
    this.uniforms.uTop.value.copy(top)
    this.uniforms.uBottom.value.copy(bottom)
    this.uniforms.uSunColor.value.copy(this.colors.sunDay).lerp(this.colors.sunDusk, dusk)
    this.uniforms.uSunDir.value.copy(sunDir)

    const fog = this.colors.fogNight.clone().lerp(this.colors.fogDay, day).lerp(this.colors.fogDusk, dusk * 0.55)
    this.fog.color.copy(fog)
    this.colors.fog.copy(fog)
    this.fog.near = Math.max(18, renderDistance * 0.35)
    this.fog.far = renderDistance * 1.2

    this.hemi.intensity = 0.23 + day * 0.72
    this.hemi.color.set('#cfe6ff').lerp(new THREE.Color('#8596b8'), night * 0.5)
    this.hemi.groundColor.set('#4a3c2e')
    this.sunLight.intensity = 0.16 + day * 1.15
    this.sunLight.color.copy(this.colors.sunDay).lerp(this.colors.sunDusk, dusk)
    this.ambient.intensity = 0.16 + day * 0.15
    this.scene.background = fog

    const center = playerPos || new THREE.Vector3()
    this.dome.position.copy(center)
    this.sun.position.copy(center).addScaledVector(sunDir, 210)
    this.sun.lookAt(center)
    this.sun.material.opacity = Math.max(0, day * 0.95)
    this.sun.visible = elev > -0.15
    this.moon.position.copy(center).addScaledVector(sunDir, -210)
    this.moon.lookAt(center)
    this.moon.visible = elev < 0.15
    this.stars.position.copy(center)
    this.stars.rotation.y = this.time * Math.PI * 2
    this.stars.material.opacity = night * 0.9
    this.stars.visible = this.fancy
    this.clouds.position.x = center.x
    this.clouds.position.z = center.z
    this.clouds.visible = this.fancy
    for (const cloud of this.clouds.children) {
      cloud.position.x += cloud.userData.drift * dt
      if (cloud.position.x - center.x > 180) cloud.position.x = center.x - 180
    }
    this.sunLight.position.copy(center).addScaledVector(sunDir, 130)
    this.sunLight.target.position.copy(center)
    this.sunLight.target.updateMatrixWorld()
    return { day, night, dusk, fog, sunDir }
  }

  get isNight() { return this.time < 0.24 || this.time > 0.76 }

  setTime(time) { this.time = ((time % 1) + 1) % 1 }
}
