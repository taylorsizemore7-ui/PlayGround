/* ============================================================================
   WORLD — chunk lifecycle, streaming, edits and collision helpers.
   ========================================================================== */
import * as THREE from 'three'
import { TerrainGen, CHUNK_SIZE, WORLD_HEIGHT, SEA_LEVEL } from './generation.js'
import { buildChunkMesh, disposeChunkMeshes, terrainMaterial, cutoutMaterial, glassMaterial, glowMaterial, waterMaterial, lavaMaterial } from './mesher.js'
import { BLOCK_BY_ID, AIR, blockByName } from '../data/blocks.js'
import { biomeById } from './biomes.js'

const MESH_MATERIALS = {
  opaque: terrainMaterial,
  cutout: cutoutMaterial,
  glass: glassMaterial,
  glow: glowMaterial,
  water: waterMaterial,
  lava: lavaMaterial
}
const NEIGHBOURS = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]

export class World {
  constructor(scene, seed = 1337, options = {}) {
    this.scene = scene
    this.seed = seed | 0
    this.gen = new TerrainGen(this.seed)
    this.chunks = new Map()
    this.edits = new Map()
    this.dirty = new Set()
    this.renderDistance = options.renderDistance || 5
    this.group = new THREE.Group()
    this.group.name = 'chunks'
    scene.add(this.group)
    this.meshBuilds = 0
    this.frustum = new THREE.Frustum()
    this._mat = new THREE.Matrix4()
    this._sphere = new THREE.Sphere()
    this._tmp = new THREE.Vector3()
    this.stats = { chunks: 0, meshed: 0, triangles: 0 }
    this.lastCenter = { cx: null, cz: null }
  }

  key(cx, cz) { return `${cx},${cz}` }

  getChunk(cx, cz) { return this.chunks.get(this.key(cx, cz)) || null }

  /* Generate chunk block data only. */
  ensureData(cx, cz) {
    const key = this.key(cx, cz)
    let chunk = this.chunks.get(key)
    if (chunk) return chunk
    const data = this.gen.generateChunk(cx, cz)
    chunk = {
      cx, cz, key,
      blocks: data.blocks,
      biomes: data.biomes,
      heights: data.heights,
      meshes: null,
      dirty: true,
      lastUsed: performance.now()
    }
    const edit = this.edits.get(key)
    if (edit) {
      for (const [i, id] of edit) chunk.blocks[i] = id
    }
    this.chunks.set(key, chunk)
    this.dirty.add(key)
    return chunk
  }

  /* Build (or rebuild) all visible layers for one chunk. */
  buildMesh(cx, cz) {
    const chunk = this.chunks.get(this.key(cx, cz))
    if (!chunk) return
    // Neighbour data is required for correct edge faces and AO.
    for (const [dx, dz] of NEIGHBOURS) this.ensureData(cx + dx, cz + dz)
    const geometries = buildChunkMesh(this, chunk)
    if (chunk.meshes) {
      for (const mesh of Object.values(chunk.meshes)) {
        if (!mesh) continue
        this.group.remove(mesh)
        mesh.geometry.dispose()
      }
    }
    chunk.meshes = {}
    let tris = 0
    for (const [layer, geometry] of Object.entries(geometries)) {
      if (!geometry) continue
      const material = MESH_MATERIALS[layer]
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(cx * CHUNK_SIZE, 0, cz * CHUNK_SIZE)
      if (layer === 'water') mesh.renderOrder = 2
      if (layer === 'lava') mesh.renderOrder = 1
      if (layer === 'glass') mesh.renderOrder = 3
      mesh.frustumCulled = true
      mesh.name = `chunk-${cx},${cz}-${layer}`
      this.group.add(mesh)
      chunk.meshes[layer] = mesh
      tris += geometry.index ? geometry.index.count / 3 : geometry.attributes.position.count / 3
    }
    chunk.dirty = false
    this.meshBuilds++
    this.dirty.delete(chunk.key)
    return tris
  }

  /* Synchronously prepare a square of chunks — used for the title backdrop. */
  async loadArea(radius, onProgress = null, yieldEvery = 4) {
    const list = []
    for (let dz = -radius; dz <= radius; dz++) {
      for (let dx = -radius; dx <= radius; dx++) {
        list.push([dx, dz, dx * dx + dz * dz])
      }
    }
    list.sort((a, b) => a[2] - b[2])
    let done = 0
    for (const [cx, cz] of list) {
      this.ensureData(cx, cz)
      done++
      if (done % yieldEvery === 0) {
        if (onProgress) onProgress((done / list.length) * 0.55, 'Generating terrain')
        await nextFrame()
      }
    }
    done = 0
    for (const [cx, cz] of list) {
      this.buildMesh(cx, cz)
      done++
      if (done % 2 === 0) {
        if (onProgress) onProgress(0.55 + (done / list.length) * 0.45, 'Building chunk meshes')
        await nextFrame()
      }
    }
    this.stats.chunks = this.chunks.size
    this.stats.meshed = [...this.chunks.values()].filter(c => c.meshes).length
    if (onProgress) onProgress(1, 'World ready')
  }

  /* Per-frame streaming using a small time budget. */
  update(px, pz, radius = this.renderDistance, budgetMs = 6) {
    this.renderDistance = radius
    const pcx = Math.floor(px / CHUNK_SIZE)
    const pcz = Math.floor(pz / CHUNK_SIZE)
    const start = performance.now()
    const needed = []
    for (let dz = -radius; dz <= radius; dz++) {
      for (let dx = -radius; dx <= radius; dx++) {
        const d2 = dx * dx + dz * dz
        if (d2 > (radius + 0.35) * (radius + 0.35)) continue
        const cx = pcx + dx, cz = pcz + dz
        const chunk = this.chunks.get(this.key(cx, cz))
        if (!chunk) needed.push({ cx, cz, d2, kind: 0 })
        else if (!chunk.meshes && !chunk.dirty) needed.push({ cx, cz, d2, kind: 1 })
        else if (chunk.dirty) needed.push({ cx, cz, d2, kind: 2 })
      }
    }
    needed.sort((a, b) => a.kind - b.kind || a.d2 - b.d2)
    for (const item of needed) {
      if (performance.now() - start > budgetMs) break
      if (item.kind === 0) {
        this.ensureData(item.cx, item.cz)
      } else {
        if (!this.chunks.has(this.key(item.cx, item.cz))) this.ensureData(item.cx, item.cz)
        this.buildMesh(item.cx, item.cz)
        if (performance.now() - start > budgetMs) break
      }
    }

    // Unload distant chunk meshes and data.
    const maxD = radius + 2.5
    for (const [key, chunk] of this.chunks) {
      const dx = chunk.cx - pcx, dz = chunk.cz - pcz
      if (Math.abs(dx) > maxD || Math.abs(dz) > maxD) {
        if (chunk.meshes) {
          for (const mesh of Object.values(chunk.meshes)) {
            if (!mesh) continue
            this.group.remove(mesh)
            mesh.geometry.dispose()
          }
        }
        this.chunks.delete(key)
        this.dirty.delete(key)
      } else if (chunk.meshes) {
        chunk.lastUsed = performance.now()
      }
    }
    this.stats.chunks = this.chunks.size
    this.stats.meshed = 0
    this.stats.triangles = 0
    for (const c of this.chunks.values()) {
      if (!c.meshes) continue
      this.stats.meshed++
      const m = c.meshes.opaque
      if (m && m.geometry.index) this.stats.triangles += m.geometry.index.count / 3
    }
  }

  /* ------------------------------------------------------------- block access */
  getBlock(x, y, z) {
    if (y < 0 || y >= WORLD_HEIGHT) return AIR
    const cx = Math.floor(x / CHUNK_SIZE), cz = Math.floor(z / CHUNK_SIZE)
    const chunk = this.chunks.get(this.key(cx, cz))
    if (!chunk) return AIR
    const lx = x - cx * CHUNK_SIZE, lz = z - cz * CHUNK_SIZE
    return chunk.blocks[(y * CHUNK_SIZE + lz) * CHUNK_SIZE + lx]
  }

  getDef(x, y, z) { return BLOCK_BY_ID[this.getBlock(x, y, z)] || null }

  isLoaded(x, z) {
    return this.chunks.has(this.key(Math.floor(x / CHUNK_SIZE), Math.floor(z / CHUNK_SIZE)))
  }

  setBlock(x, y, z, id, record = true) {
    if (y < 0 || y >= WORLD_HEIGHT) return false
    const cx = Math.floor(x / CHUNK_SIZE), cz = Math.floor(z / CHUNK_SIZE)
    const chunk = this.chunks.get(this.key(cx, cz))
    if (!chunk) return false
    const lx = x - cx * CHUNK_SIZE, lz = z - cz * CHUNK_SIZE
    const i = (y * CHUNK_SIZE + lz) * CHUNK_SIZE + lx
    if (chunk.blocks[i] === id) return false
    chunk.blocks[i] = id
    if (record) {
      const key = chunk.key
      let edits = this.edits.get(key)
      if (!edits) { edits = new Map(); this.edits.set(key, edits) }
      edits.set(i, id)
    }
    this.markDirty(cx, cz)
    if (lx === 0) this.markDirty(cx - 1, cz)
    if (lx === CHUNK_SIZE - 1) this.markDirty(cx + 1, cz)
    if (lz === 0) this.markDirty(cx, cz - 1)
    if (lz === CHUNK_SIZE - 1) this.markDirty(cx, cz + 1)
    return true
  }

  markDirty(cx, cz) {
    const chunk = this.chunks.get(this.key(cx, cz))
    if (!chunk) return
    chunk.dirty = true
    this.dirty.add(chunk.key)
  }

  /* Highest non-air, non-plant block at column. */
  getHeight(x, z, includeWater = false) {
    const ix = Math.floor(x), iz = Math.floor(z)
    const chunk = this.chunks.get(this.key(Math.floor(ix / CHUNK_SIZE), Math.floor(iz / CHUNK_SIZE)))
    if (!chunk) {
      let h = this.gen.heightAt(ix, iz)
      if (h < SEA_LEVEL) h = SEA_LEVEL
      return h
    }
    for (let y = WORLD_HEIGHT - 1; y >= 0; y--) {
      const def = BLOCK_BY_ID[this.getBlock(ix, y, iz)]
      if (!def) continue
      if (!includeWater && def.shape === 'liquid') continue
      if (def.shape === 'cross' || def.shape === 'liquid') {
        if (includeWater) return y
        continue
      }
      return y
    }
    return 0
  }

  surfaceY(x, z) {
    return this.getHeight(x, z) + 1
  }

  biomeAt(x, z) {
    const chunk = this.chunks.get(this.key(Math.floor(x / CHUNK_SIZE), Math.floor(z / CHUNK_SIZE)))
    if (!chunk) return biomeById(this.gen.biomeAt(Math.floor(x), Math.floor(z)))
    const lx = ((Math.floor(x) % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE
    const lz = ((Math.floor(z) % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE
    return biomeById(chunk.biomes[lz * CHUNK_SIZE + lx])
  }

  /* Solid collision test for a box (player / mob feet). */
  collides(minX, minY, minZ, maxX, maxY, maxZ) {
    const x0 = Math.floor(minX), x1 = Math.floor(maxX - 1e-5)
    const y0 = Math.floor(minY), y1 = Math.floor(maxY - 1e-5)
    const z0 = Math.floor(minZ), z1 = Math.floor(maxZ - 1e-5)
    for (let y = y0; y <= y1; y++) {
      for (let z = z0; z <= z1; z++) {
        for (let x = x0; x <= x1; x++) {
          const def = this.getDef(x, y, z)
          if (def && def.solid && def.shape !== 'liquid') return true
        }
      }
    }
    return false
  }

  /* Voxel DDA raycast. Returns {x,y,z,def,normal,distance} or null. */
  raycast(origin, direction, maxDistance = 7, hitLiquid = false) {
    let x = Math.floor(origin.x), y = Math.floor(origin.y), z = Math.floor(origin.z)
    const stepX = direction.x > 0 ? 1 : -1
    const stepY = direction.y > 0 ? 1 : -1
    const stepZ = direction.z > 0 ? 1 : -1
    const tDeltaX = direction.x === 0 ? Infinity : Math.abs(1 / direction.x)
    const tDeltaY = direction.y === 0 ? Infinity : Math.abs(1 / direction.y)
    const tDeltaZ = direction.z === 0 ? Infinity : Math.abs(1 / direction.z)
    const nextBoundary = (p, step) => step > 0 ? Math.floor(p) + 1 : Math.floor(p)
    let tMaxX = direction.x === 0 ? Infinity : (nextBoundary(origin.x, stepX) - origin.x) / direction.x
    let tMaxY = direction.y === 0 ? Infinity : (nextBoundary(origin.y, stepY) - origin.y) / direction.y
    let tMaxZ = direction.z === 0 ? Infinity : (nextBoundary(origin.z, stepZ) - origin.z) / direction.z
    let nx = 0, ny = 0, nz = 0
    let t = 0
    for (let i = 0; i < 256 && t <= maxDistance; i++) {
      if (y >= 0 && y < WORLD_HEIGHT) {
        const def = this.getDef(x, y, z)
        if (def && def.shape !== 'cross' && (hitLiquid || def.shape !== 'liquid')) {
          return { x, y, z, def, normal: { x: nx, y: ny, z: nz }, distance: t }
        }
      }
      if (tMaxX < tMaxY && tMaxX < tMaxZ) {
        x += stepX; t = tMaxX; tMaxX += tDeltaX; nx = -stepX; ny = 0; nz = 0
      } else if (tMaxY < tMaxZ) {
        y += stepY; t = tMaxY; tMaxY += tDeltaY; nx = 0; ny = -stepY; nz = 0
      } else {
        z += stepZ; t = tMaxZ; tMaxZ += tDeltaZ; nx = 0; ny = 0; nz = -stepZ
      }
    }
    return null
  }

  /* Save modified voxels only. */
  serializeEdits() {
    const out = {}
    for (const [key, edits] of this.edits) out[key] = [...edits]
    return out
  }

  loadEdits(data) {
    this.edits.clear()
    if (!data) return
    for (const [key, edits] of Object.entries(data)) {
      this.edits.set(key, new Map(edits))
      const chunk = this.chunks.get(key)
      if (chunk) {
        for (const [i, id] of edits) chunk.blocks[i] = id
        this.markDirty(Math.floor(chunk.cx), Math.floor(chunk.cz))
      }
    }
  }

  dispose() {
    this.scene.remove(this.group)
    for (const chunk of this.chunks.values()) {
      for (const mesh of Object.values(chunk.meshes || {})) {
        if (!mesh) continue
        mesh.geometry.dispose()
      }
    }
    this.chunks.clear()
  }
}

function nextFrame() {
  return new Promise(resolve => requestAnimationFrame(() => resolve()))
}

export { CHUNK_SIZE, WORLD_HEIGHT, SEA_LEVEL }
