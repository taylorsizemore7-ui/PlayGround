/* ============================================================================
   CHUNK MESHER
   Face-culled cube meshing with per-vertex ambient occlusion and biome tint,
   plus separate cutout, glass, glow and animated liquid layers.
   ========================================================================== */
import * as THREE from 'three'
import { BLOCK_BY_ID, AIR } from '../data/blocks.js'
import { CHUNK_SIZE, WORLD_HEIGHT } from './generation.js'
import { BIOMES, biomeById } from './biomes.js'
import { resolveTexSpec, uvFor } from '../render/textures.js'

/* Face tables: corners are (x,y,z) offsets, tangents are axes used for AO. */
const FACES = [
  { name: 'top', dir: [0, 1, 0], corners: [[0, 1, 0], [0, 1, 1], [1, 1, 1], [1, 1, 0]], tangents: [0, 2], shade: 1.0 },
  { name: 'bottom', dir: [0, -1, 0], corners: [[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]], tangents: [0, 2], shade: 0.52 },
  { name: 'south', dir: [0, 0, 1], corners: [[0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]], tangents: [0, 1], shade: 0.84 },
  { name: 'north', dir: [0, 0, -1], corners: [[1, 0, 0], [0, 0, 0], [0, 1, 0], [1, 1, 0]], tangents: [0, 1], shade: 0.72 },
  { name: 'east', dir: [1, 0, 0], corners: [[1, 0, 1], [1, 0, 0], [1, 1, 0], [1, 1, 1]], tangents: [2, 1], shade: 0.78 },
  { name: 'west', dir: [-1, 0, 0], corners: [[0, 0, 0], [0, 0, 1], [0, 1, 1], [0, 1, 0]], tangents: [2, 1], shade: 0.68 }
]
const FACE_UV = [[0, 0], [1, 0], [1, 1], [0, 1]]
const AO_OFFSETS = FACES.map(face => face.corners.map(corner => {
  const [t1, t2] = face.tangents
  const s1 = corner[t1] ? 1 : -1
  const s2 = corner[t2] ? 1 : -1
  const normal = face.dir
  const make = (a, b) => {
    const off = [normal[0], normal[1], normal[2]]
    off[t1] += a * s1
    off[t2] += b * s2
    return off
  }
  return { side1: make(1, 0), side2: make(0, 1), corner: make(1, 1) }
}))
const AO_LEVELS = [0.48, 0.7, 0.85, 1.0]

const TINTS = BIOMES.map(b => ({
  grass: new THREE.Color(b.grass).convertSRGBToLinear(),
  foliage: new THREE.Color(b.foliage).convertSRGBToLinear(),
  white: new THREE.Color(1, 1, 1)
}))

const uvCache = new Map()
function cachedUV(spec) {
  let uv = uvCache.get(spec)
  if (!uv) { uv = uvFor(spec); uvCache.set(spec, uv) }
  return uv
}

function isOpaqueDef(def) {
  return !!def && def.solid && def.shape !== 'liquid' && def.shape !== 'cross' && def.shape !== 'glass'
}

/* ---------------------------------------------------------------- materials */
export const terrainMaterial = new THREE.MeshBasicMaterial({
  map: null, vertexColors: true, fog: true
})
export const cutoutMaterial = new THREE.MeshBasicMaterial({
  map: null, vertexColors: true, fog: true, alphaTest: 0.35, side: THREE.DoubleSide
})
export const glassMaterial = new THREE.MeshBasicMaterial({
  map: null, vertexColors: true, fog: true, transparent: true, depthWrite: false, side: THREE.DoubleSide
})
export const glowMaterial = new THREE.MeshBasicMaterial({
  map: null, vertexColors: true, fog: true
})

function makeLiquidMaterial(deepHex, shallowHex, alpha) {
  return new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    uniforms: {
      uDeep: { value: new THREE.Color(deepHex).convertSRGBToLinear() },
      uShallow: { value: new THREE.Color(shallowHex).convertSRGBToLinear() },
      uFogColor: { value: new THREE.Color('#8fc7ff') },
      uFogNear: { value: 40 },
      uFogFar: { value: 110 },
      uTime: { value: 0 },
      uAlpha: { value: alpha },
      uWave: { value: 1 }
    },
    vertexShader: /* glsl */`
      uniform float uTime;
      uniform float uWave;
      varying vec3 vWorld;
      varying vec3 vNormal;
      varying float vDepth;
      void main() {
        vec3 p = position;
        vec3 world = (modelMatrix * vec4(p, 1.0)).xyz;
        if (normal.y > 0.5) {
          p.y += sin(world.x * 0.55 + uTime * 1.1) * 0.035 * uWave + sin(world.z * 0.72 - uTime * 0.85) * 0.028 * uWave;
        }
        vWorld = (modelMatrix * vec4(p, 1.0)).xyz;
        vNormal = normal;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vDepth = -mv.z;
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: /* glsl */`
      uniform vec3 uDeep;
      uniform vec3 uShallow;
      uniform vec3 uFogColor;
      uniform float uFogNear;
      uniform float uFogFar;
      uniform float uTime;
      uniform float uAlpha;
      uniform float uWave;
      varying vec3 vWorld;
      varying vec3 vNormal;
      varying float vDepth;
      void main() {
        float wave = sin(vWorld.x * 0.85 + uTime * 1.2) * 0.5 + sin(vWorld.z * 1.05 - uTime * 0.9) * 0.5;
        float ripple = smoothstep(0.72, 0.99, sin(vWorld.x * 2.4 + uTime * 1.7) * sin(vWorld.z * 2.1 - uTime * 1.3));
        vec3 col = mix(uDeep, uShallow, 0.5 + wave * 0.2);
        col += ripple * 0.16 * uWave;
        if (vNormal.y > 0.5) col += 0.06;
        float fogFactor = smoothstep(uFogNear, uFogFar, vDepth);
        col = mix(col, uFogColor, fogFactor);
        gl_FragColor = vec4(col, uAlpha);
      }
    `
  })
}
export const waterMaterial = makeLiquidMaterial('#1c4f9e', '#4a9ae8', 0.78)
export const lavaMaterial = makeLiquidMaterial('#7a1a04', '#f8a83a', 0.96)
lavaMaterial.uniforms.uWave.value = 0.35

export function setMaterialsAtlas(texture) {
  terrainMaterial.map = texture
  cutoutMaterial.map = texture
  glassMaterial.map = texture
  glowMaterial.map = texture
  for (const m of [terrainMaterial, cutoutMaterial, glassMaterial, glowMaterial]) m.needsUpdate = true
}

export function updateLiquidUniforms(time, fogColor, fogNear, fogFar) {
  for (const m of [waterMaterial, lavaMaterial]) {
    m.uniforms.uTime.value = time
    if (fogColor) m.uniforms.uFogColor.value.copy(fogColor)
    m.uniforms.uFogNear.value = fogNear
    m.uniforms.uFogFar.value = fogFar
  }
}

/* ---------------------------------------------------------------- mesh build */
class MeshBuffers {
  constructor() { this.pos = []; this.norm = []; this.uv = []; this.col = []; this.idx = [] }
  get empty() { return this.idx.length === 0 }
  geometry(withNormals = false) {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3))
    if (withNormals) g.setAttribute('normal', new THREE.Float32BufferAttribute(this.norm, 3))
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2))
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3))
    g.setIndex(this.idx)
    g.computeBoundingSphere()
    return g
  }
  liquidGeometry() {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3))
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.norm, 3))
    g.computeBoundingSphere()
    return g
  }
}

function computeAO(getOpaque, x, y, z, faceIndex, cornerIndex) {
  const ao = AO_OFFSETS[faceIndex][cornerIndex]
  const s1 = getOpaque(x + ao.side1[0], y + ao.side1[1], z + ao.side1[2]) ? 1 : 0
  const s2 = getOpaque(x + ao.side2[0], y + ao.side2[1], z + ao.side2[2]) ? 1 : 0
  const c = getOpaque(x + ao.corner[0], y + ao.corner[1], z + ao.corner[2]) ? 1 : 0
  if (s1 && s2) return AO_LEVELS[0]
  return AO_LEVELS[3 - s1 - s2 - c]
}

function pushCubeFace(buf, def, x, y, z, faceIndex, tint, getOpaque, bright = 1) {
  const face = FACES[faceIndex]
  const specKey = face.name === 'top' ? 'top' : face.name === 'bottom' ? 'bottom' : face.name === 'south' ? 'front' : face.name === 'north' ? 'back' : 'side'
  const spec = def._faceSpecs ? (def._faceSpecs[specKey] || def._faceSpecs.side || def._faceSpecs.top) : null
  const uv = cachedUV(spec)
  const start = buf.pos.length / 3
  const lightBoost = def.light > 0 ? 1.16 : bright
  for (let i = 0; i < 4; i++) {
    const c = face.corners[i]
    buf.pos.push(x + c[0], y + c[1], z + c[2])
    buf.norm.push(face.dir[0], face.dir[1], face.dir[2])
    const [uu, vv] = FACE_UV[i]
    buf.uv.push(uu ? uv.u1 : uv.u0, vv ? uv.v1 : uv.v0)
    const a = computeAO(getOpaque, x, y, z, faceIndex, i)
    const s = face.shade * a * lightBoost
    buf.col.push(tint.r * s, tint.g * s, tint.b * s)
  }
  buf.idx.push(start, start + 1, start + 2, start, start + 2, start + 3)
}

function pushPlant(buf, def, x, y, z, tint, seed) {
  const spec = def._faceSpecs.side
  const uv = cachedUV(spec)
  const ox = (seed * 0.4) % 0.5 - 0.25
  const oz = (seed * 0.7) % 0.5 - 0.25
  const h = 1
  const quads = [
    [[0.15 + ox, 0, 0.15 + oz], [0.85 + ox, 0, 0.85 + oz]],
    [[0.85 + ox, 0, 0.15 + oz], [0.15 + ox, 0, 0.85 + oz]]
  ]
  for (const q of quads) {
    const start = buf.pos.length / 3
    const pts = [
      [q[0][0], 0, q[0][2]], [q[1][0], 0, q[1][2]], [q[1][0], h, q[1][2]], [q[0][0], h, q[0][2]]
    ]
    for (let i = 0; i < 4; i++) {
      buf.pos.push(x + pts[i][0], y + pts[i][1], z + pts[i][2])
      buf.norm.push(0, 1, 0)
      const [uu, vv] = FACE_UV[i]
      buf.uv.push(uu ? uv.u1 : uv.u0, vv ? uv.v1 : uv.v0)
      buf.col.push(tint.r, tint.g, tint.b)
    }
    buf.idx.push(start, start + 1, start + 2, start, start + 2, start + 3)
  }
}

function pushFlatPlant(buf, def, x, y, z, tint) {
  const spec = def._faceSpecs.side
  const uv = cachedUV(spec)
  const start = buf.pos.length / 3
  const pts = [[0.06, 0.06], [0.94, 0.06], [0.94, 0.94], [0.06, 0.94]]
  for (let i = 0; i < 4; i++) {
    buf.pos.push(x + pts[i][0], y + 0.02, z + pts[i][1])
    buf.norm.push(0, 1, 0)
    const [uu, vv] = FACE_UV[i]
    buf.uv.push(uu ? uv.u1 : uv.u0, vv ? uv.v1 : uv.v0)
    buf.col.push(tint.r, tint.g, tint.b)
  }
  buf.idx.push(start, start + 1, start + 2, start, start + 2, start + 3)
}

function pushLiquidFace(buf, x, y, z, faceIndex, topOffset) {
  const face = FACES[faceIndex]
  const start = buf.pos.length / 3
  for (let i = 0; i < 4; i++) {
    const c = face.corners[i]
    const yy = c[1] ? topOffset : 0
    buf.pos.push(x + c[0], y + yy, z + c[2])
    buf.norm.push(face.dir[0], face.dir[1], face.dir[2])
  }
  buf.idx.push(start, start + 1, start + 2, start, start + 2, start + 3)
}

export function buildChunkMesh(world, chunk) {
  const { cx, cz, blocks, biomes } = chunk
  const buffers = {
    opaque: new MeshBuffers(), cutout: new MeshBuffers(), glass: new MeshBuffers(),
    glow: new MeshBuffers(), water: new MeshBuffers(), lava: new MeshBuffers()
  }
  const bx = cx * CHUNK_SIZE, bz = cz * CHUNK_SIZE

  const blockAt = (x, y, z) => {
    if (y < 0 || y >= WORLD_HEIGHT) return 0
    if (x >= 0 && x < CHUNK_SIZE && z >= 0 && z < CHUNK_SIZE) {
      return blocks[(y * CHUNK_SIZE + z) * CHUNK_SIZE + x]
    }
    return world.getBlock(bx + x, y, bz + z)
  }
  const defAt = (x, y, z) => BLOCK_BY_ID[blockAt(x, y, z)] || null
  const opaqueAt = (x, y, z) => isOpaqueDef(defAt(x, y, z))
  const getOpaque = (gx, gy, gz) => {
    const d = defAt(gx, gy, gz)
    return isOpaqueDef(d)
  }

  for (let y = 0; y < WORLD_HEIGHT; y++) {
    for (let z = 0; z < CHUNK_SIZE; z++) {
      for (let x = 0; x < CHUNK_SIZE; x++) {
        const i = (y * CHUNK_SIZE + z) * CHUNK_SIZE + x
        const id = blocks[i]
        if (id === AIR) continue
        const def = BLOCK_BY_ID[id]
        if (!def) continue
        if (!def._faceSpecs) def._faceSpecs = resolveTexSpec(def)
        const biomeTint = TINTS[biomes[z * CHUNK_SIZE + x]] || TINTS[2]
        const white = biomeTint.white
        const wx = bx + x, wz = bz + z

        if (def.shape === 'liquid') {
          const buf = def.name === 'lava' ? buffers.lava : buffers.water
          const top = y + 0.9
          const above = blockAt(x, y + 1, z)
          if (!isLiquidDef(above)) pushLiquidFace(buf, x, y, z, 0, 0.9)
          if (!isLiquidDef(blockAt(x - 1, y, z)) && !opaqueAt(x - 1, y, z)) pushLiquidFace(buf, x, y, z, 5, 0.9)
          if (!isLiquidDef(blockAt(x + 1, y, z)) && !opaqueAt(x + 1, y, z)) pushLiquidFace(buf, x, y, z, 4, 0.9)
          if (!isLiquidDef(blockAt(x, y, z - 1)) && !opaqueAt(x, y, z - 1)) pushLiquidFace(buf, x, y, z, 3, 0.9)
          if (!isLiquidDef(blockAt(x, y, z + 1)) && !opaqueAt(x, y, z + 1)) pushLiquidFace(buf, x, y, z, 2, 0.9)
          continue
        }

        if (def.shape === 'cross') {
          const tint = def.tint === 'grass' ? biomeTint.grass : def.tint === 'foliage' ? biomeTint.foliage : white
          if (def.name === 'lily_pad') pushFlatPlant(buffers.cutout, def, x, y, z, tint)
          else pushPlant(buffers.cutout, def, x, y, z, tint, (x * 13 + z * 7 + y) % 7)
          continue
        }

        const isLeaf = def.shape === 'leaves'
        const isGlass = def.shape === 'glass'
        const tint = def.tint === 'foliage' ? biomeTint.foliage : white
        const target = isGlass ? buffers.glass : isLeaf ? buffers.cutout : def.light > 0 ? buffers.glow : buffers.opaque

        for (let f = 0; f < 6; f++) {
          const face = FACES[f]
          const nx = x + face.dir[0], ny = y + face.dir[1], nz = z + face.dir[2]
          const nd = defAt(nx, ny, nz)
          if (nd) {
            if (nd.shape === 'liquid' || nd.shape === 'cross') {
              // transparent neighbours never occlude
            } else if (isGlass) {
              if (nd.shape === 'glass' || isOpaqueDef(nd)) continue
            } else if (isOpaqueDef(nd) || (isLeaf && nd.shape === 'leaves')) {
              continue
            }
          }
          const faceTint = def.tint === 'grass' ? (f === 0 ? biomeTint.grass : white) : tint
          pushCubeFace(target, def, x, y, z, f, faceTint, getOpaque)
        }
      }
    }
  }

  const result = {}
  for (const [key, buf] of Object.entries(buffers)) {
    if (buf.empty) { result[key] = null; continue }
    result[key] = key === 'water' || key === 'lava' ? buf.liquidGeometry() : buf.geometry()
  }
  return result
}

function isLiquidDef(id) {
  const d = BLOCK_BY_ID[id]
  return !!d && d.shape === 'liquid'
}

export function disposeChunkMeshes(meshes) {
  for (const m of Object.values(meshes || {})) {
    if (!m) continue
    m.geometry.dispose()
    if (m.parent) m.parent.remove(m)
  }
}
