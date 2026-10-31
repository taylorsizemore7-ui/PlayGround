/* Tiny pooled particle system — block dust, hearts, splashes and explosions. */
import * as THREE from 'three'

const MAX = 420

export class Particles {
  constructor(scene) {
    this.scene = scene
    this.mesh = new THREE.InstancedMesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ vertexColors: false, color: 0xffffff }),
      MAX
    )
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
    this.mesh.frustumCulled = false
    this.mesh.count = 0
    this.mesh.setColorAt(0, new THREE.Color(1, 1, 1))
    scene.add(this.mesh)
    this.items = []
    this.dummy = new THREE.Object3D()
    this.color = new THREE.Color()
    this.initialized = false
  }

  spawn(x, y, z, color, count = 8, opts = {}) {
    const speed = opts.speed ?? 1.4
    const life = opts.life ?? 0.7
    const size = opts.size ?? 0.09
    const gravity = opts.gravity ?? 9
    for (let i = 0; i < count; i++) {
      if (this.items.length >= MAX) this.items.shift()
      const a = Math.random() * Math.PI * 2
      const up = Math.random() * 0.8 + 0.25
      this.items.push({
        x: x + (Math.random() - 0.5) * 0.45,
        y: y + (Math.random() - 0.5) * 0.4,
        z: z + (Math.random() - 0.5) * 0.45,
        vx: Math.cos(a) * speed * Math.random(),
        vy: up * speed,
        vz: Math.sin(a) * speed * Math.random(),
        life: life * (0.6 + Math.random() * 0.7),
        maxLife: life,
        size: size * (0.6 + Math.random() * 0.8),
        color: new THREE.Color(color),
        gravity
      })
      if (!this.initialized) {
        this.mesh.setColorAt(this.items.length - 1, this.items[this.items.length - 1].color)
      }
    }
    this.mesh.instanceColor.needsUpdate = true
  }

  update(dt) {
    let n = 0
    for (let i = 0; i < this.items.length; i++) {
      const p = this.items[i]
      p.life -= dt
      if (p.life <= 0) continue
      p.vy -= p.gravity * dt
      p.x += p.vx * dt
      p.y += p.vy * dt
      p.z += p.vz * dt
      if (p.y < -2) continue
      const scale = p.size * Math.min(1, p.life / p.maxLife * 2)
      this.dummy.position.set(p.x, p.y, p.z)
      this.dummy.rotation.set(p.life * 2, p.life * 3, 0)
      this.dummy.scale.setScalar(scale)
      this.dummy.updateMatrix()
      this.mesh.setMatrixAt(n, this.dummy.matrix)
      this.mesh.setColorAt(n, p.color)
      if (n !== i) this.items[n] = p
      n++
    }
    this.items.length = n
    this.mesh.count = n
    this.mesh.instanceMatrix.needsUpdate = true
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true
  }

  clear() {
    this.items.length = 0
    this.mesh.count = 0
  }
}
