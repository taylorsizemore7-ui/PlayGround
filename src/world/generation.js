/* ============================================================================
   INFINITE WORLD GENERATION
   Continents, mountains, caves, ores, 20 biomes, trees, plants and the spawn
   village. Chunks are 16x16x112 and generated deterministically from a seed.
   ========================================================================== */
import { Noise } from '../core/noise.js'
import { hash2i, hash3i, clamp, smoothstep } from '../core/rng.js'
import { blockByName, AIR } from '../data/blocks.js'
import { BIOMES, BIOME, biomeById } from './biomes.js'
import { villageChunk } from './village.js'

export const CHUNK_SIZE = 16
export const WORLD_HEIGHT = 112
export const SEA_LEVEL = 42
export const VILLAGE_HEIGHT = 61

const ID = {}
for (const [name, def] of blockByName) ID[name] = def.id
const ORE_STONE = {
  coal_ore: 0.018, iron_ore: 0.013, copper_ore: 0.011, gold_ore: 0.006,
  redstone_ore: 0.009, lapis_ore: 0.006, diamond_ore: 0.0045, emerald_ore: 0.004
}
const DEEP_ORES = {
  deepslate_coal_ore: 0.018, deepslate_iron_ore: 0.014, deepslate_copper_ore: 0.011, deepslate_gold_ore: 0.007,
  deepslate_redstone_ore: 0.010, deepslate_lapis_ore: 0.006, deepslate_diamond_ore: 0.005, deepslate_emerald_ore: 0.004
}
const FLOWERS = ['dandelion', 'poppy', 'blue_orchid', 'allium', 'azure_bluet', 'red_tulip', 'orange_tulip', 'white_tulip', 'pink_tulip', 'oxeye_daisy', 'cornflower', 'lily_of_the_valley']
const TERRACOTTA = ['terracotta', 'orange_terracotta', 'yellow_terracotta', 'white_terracotta', 'brown_terracotta', 'red_terracotta']

export class TerrainGen {
  constructor(seed) {
    this.seed = seed | 0
    this.n = new Noise(this.seed)
    this.n2 = new Noise(this.seed ^ 0x9e3779b9)
    this.n3 = new Noise(this.seed ^ 0x51ed270b)
    this.n4 = new Noise(this.seed ^ 0x2c1b3c6d)
    this._lastHeightKey = null
    this._lastHeight = 0
  }

  heightAt(x, z) {
    const key = x * 100003 + z
    if (this._lastHeightKey === key) return this._lastHeight
    const cont = this.n.fbm2(x * 0.0021 + 17.3, z * 0.0021 - 9.7, 4)
    const ridge = this.n2.ridged2(x * 0.0052 - 41.1, z * 0.0052 + 23.9, 3)
    const detail = this.n3.fbm2(x * 0.019 + 5.5, z * 0.019 + 11.2, 3)
    let h = 26 + cont * 28
    const mountainMask = smoothstep(0.52, 0.88, cont)
    h += Math.pow(ridge, 2.15) * (14 + mountainMask * 49)
    h += (detail - 0.5) * 7
    // Spawn plateau / village clearing
    const dist = Math.sqrt(x * x + z * z)
    if (dist < 64) {
      const t = smoothstep(32, 64, dist)
      h = VILLAGE_HEIGHT * (1 - t) + h * t
    }
    h = clamp(h, 4, WORLD_HEIGHT - 10)
    const out = Math.floor(h)
    this._lastHeightKey = key
    this._lastHeight = out
    return out
  }

  tempAt(x, z) {
    return this.n3.fbm2(x * 0.0032 + 731, z * 0.0032 - 211, 3)
  }
  humidAt(x, z) {
    return this.n4.fbm2(x * 0.0032 - 423, z * 0.0032 + 517, 3)
  }

  biomeAt(x, z, h = this.heightAt(x, z)) {
    const dist = Math.sqrt(x * x + z * z)
    if (dist < 38) return BIOME.VILLAGE
    if (h < SEA_LEVEL - 2) return BIOME.OCEAN
    if (h <= SEA_LEVEL + 2) return BIOME.BEACH
    if (h > 83) return BIOME.SNOWY_PEAKS
    if (h > 71) return BIOME.MOUNTAINS
    const temp = this.tempAt(x, z)
    const hum = this.humidAt(x, z)
    const region = hash2i(x >> 4, z >> 4, this.seed ^ 0x77aa)
    if (temp > 0.69 && hum < 0.3) return BIOME.BADLANDS
    if (temp > 0.68 && hum < 0.44) return BIOME.DESERT
    if (hum > 0.73 && temp > 0.52) return region < 0.35 ? BIOME.SWAMP : BIOME.JUNGLE
    if (hum > 0.58 && temp > 0.58) return region < 0.14 ? BIOME.CHERRY_GROVE : BIOME.FOREST
    if (temp < 0.3) return region < 0.4 ? BIOME.SNOWY_TAIGA : BIOME.SNOWY_PLAINS
    if (temp < 0.42) return region < 0.3 ? BIOME.TAIGA : BIOME.FOREST
    if (temp > 0.6 && hum < 0.55) return BIOME.SAVANNA
    if (hum > 0.52 && region < 0.18) return BIOME.DARK_FOREST
    if (hum > 0.46 && region < 0.42) return BIOME.BIRCH_FOREST
    if (h > 56 && region < 0.22) return BIOME.MEADOW
    if (region < 0.05 && temp > 0.45 && hum > 0.4) return BIOME.MUSHROOM_FIELDS
    if (region < 0.28) return BIOME.FOREST
    return BIOME.PLAINS
  }

  surfaceFor(biome, h, x, z) {
    if (h < SEA_LEVEL - 1) {
      return { top: hash2i(x, z, 4) < 0.3 ? 'gravel' : 'sand', filler: 'sand', depth: 3 }
    }
    switch (biome) {
      case BIOME.OCEAN: return { top: 'sand', filler: 'sand', depth: 3 }
      case BIOME.BEACH: return { top: 'sand', filler: 'sand', depth: 3 }
      case BIOME.DESERT: return { top: 'sand', filler: 'sandstone', depth: 5 }
      case BIOME.BADLANDS: return { top: 'red_sand', filler: 'terracotta', depth: 8 }
      case BIOME.SNOWY_PLAINS:
      case BIOME.SNOWY_TAIGA:
      case BIOME.SNOWY_PEAKS: return { top: 'snow_block', filler: 'dirt', depth: 3 }
      case BIOME.MOUNTAINS: return { top: h > 78 ? 'snow_block' : 'stone', filler: 'stone', depth: 2 }
      case BIOME.MUSHROOM_FIELDS: return { top: 'mycelium', filler: 'dirt', depth: 3 }
      case BIOME.SWAMP: return { top: 'grass_block', filler: 'mud', depth: 3 }
      case BIOME.JUNGLE: return { top: 'grass_block', filler: 'dirt', depth: 3 }
      case BIOME.CHERRY_GROVE:
      case BIOME.MEADOW:
      case BIOME.VILLAGE: return { top: 'grass_block', filler: 'dirt', depth: 3 }
      default: return { top: 'grass_block', filler: 'dirt', depth: 3 }
    }
  }

  generateChunk(cx, cz) {
    const blocks = new Uint16Array(CHUNK_SIZE * CHUNK_SIZE * WORLD_HEIGHT)
    const biomes = new Uint8Array(CHUNK_SIZE * CHUNK_SIZE)
    const heights = new Uint8Array(CHUNK_SIZE * CHUNK_SIZE)
    const bx = cx * CHUNK_SIZE, bz = cz * CHUNK_SIZE

    const setLocal = (x, y, z, id, overwrite = true) => {
      if (x < 0 || z < 0 || x >= CHUNK_SIZE || z >= CHUNK_SIZE || y < 0 || y >= WORLD_HEIGHT) return
      const i = (y * CHUNK_SIZE + z) * CHUNK_SIZE + x
      if (overwrite || blocks[i] === AIR) blocks[i] = id
    }
    const getLocal = (x, y, z) => {
      if (x < 0 || z < 0 || x >= CHUNK_SIZE || z >= CHUNK_SIZE || y < 0 || y >= WORLD_HEIGHT) return 0
      return blocks[(y * CHUNK_SIZE + z) * CHUNK_SIZE + x]
    }

    /* ---- terrain columns ---- */
    for (let z = 0; z < CHUNK_SIZE; z++) {
      for (let x = 0; x < CHUNK_SIZE; x++) {
        const wx = bx + x, wz = bz + z
        const h = this.heightAt(wx, wz)
        const biome = this.biomeAt(wx, wz, h)
        biomes[z * CHUNK_SIZE + x] = biome
        heights[z * CHUNK_SIZE + x] = h
        const surf = this.surfaceFor(biome, h, wx, wz)
        const topId = ID[surf.top] || ID.stone
        const fillerId = ID[surf.filler] || ID.dirt
        const stoneId = ID.stone

        for (let y = 0; y <= h; y++) {
          let id
          if (y === 0) id = ID.bedrock
          else if (y === 1 && hash3i(wx, y, wz, 3) < 0.55) id = ID.bedrock
          else if (y >= h - surf.depth) id = y === h ? topId : fillerId
          else if (biome === BIOME.BADLANDS && y > h - 16) id = ID[TERRACOTTA[(y / 2 | 0) % TERRACOTTA.length]]
          else if (y < 22) id = ID.deepslate
          else id = stoneId

          // caves (skip the very top crust and the bottom few layers)
          if (y > 2 && y < h - 1 && y < WORLD_HEIGHT - 4) {
            const cave = this.n.fbm3(wx * 0.043, y * 0.061, wz * 0.043, 2)
            const tunnel = Math.abs(this.n2.fbm3(wx * 0.021 + 90, y * 0.034, wz * 0.021 - 50, 2) - 0.5)
            if (cave > 0.625 || tunnel < 0.043) {
              id = y < 8 ? ID.lava : AIR
            }
          }
          if (id !== AIR) setLocal(x, y, z, id, true)
        }

        // ore veins, keyed on 2x2x2 cells for a chunky vein look
        for (let y = 2; y < h - 3; y++) {
          const cur = getLocal(x, y, z)
          if (cur !== stoneId && cur !== ID.deepslate) continue
          const hsh = hash3i(wx >> 1, y >> 1, wz >> 1, this.seed ^ 0x00c0ffee)
          if (cur === ID.deepslate) {
            let ore = null
            if (y < 58) {
              if (hsh < DEEP_ORES.deepslate_iron_ore) ore = 'deepslate_iron_ore'
              else if (hsh < DEEP_ORES.deepslate_coal_ore) ore = 'deepslate_coal_ore'
              else if (hsh < DEEP_ORES.deepslate_copper_ore) ore = 'deepslate_copper_ore'
              else if (hsh < DEEP_ORES.deepslate_gold_ore && y < 34) ore = 'deepslate_gold_ore'
              else if (hsh < DEEP_ORES.deepslate_redstone_ore && y < 24) ore = 'deepslate_redstone_ore'
              else if (hsh < DEEP_ORES.deepslate_lapis_ore && y < 28) ore = 'deepslate_lapis_ore'
              else if (hsh < DEEP_ORES.deepslate_diamond_ore && y < 16) ore = 'deepslate_diamond_ore'
            }
            if (ore) setLocal(x, y, z, ID[ore], true)
            if (hsh > 0.9975) setLocal(x, y, z, ID.ancient_debris, true)
          } else {
            let ore = null
            if (hsh < ORE_STONE.coal_ore) ore = 'coal_ore'
            else if (hsh < ORE_STONE.iron_ore && y < 56) ore = 'iron_ore'
            else if (hsh < ORE_STONE.copper_ore && y < 52) ore = 'copper_ore'
            else if (hsh < ORE_STONE.gold_ore && y < 34) ore = 'gold_ore'
            else if (hsh < ORE_STONE.redstone_ore && y < 24) ore = 'redstone_ore'
            else if (hsh < ORE_STONE.lapis_ore && y < 28) ore = 'lapis_ore'
            else if (hsh < ORE_STONE.diamond_ore && y < 16) ore = 'diamond_ore'
            else if (hsh < ORE_STONE.emerald_ore && y < 40 && biome === BIOME.MOUNTAINS) ore = 'emerald_ore'
            if (ore) setLocal(x, y, z, ID[ore], true)
          }
        }

        // water
        if (h < SEA_LEVEL) {
          for (let y = h + 1; y <= SEA_LEVEL; y++) if (getLocal(x, y, z) === AIR) setLocal(x, y, z, ID.water, true)
        }
        // snow caps on mountains
        if (biome === BIOME.MOUNTAINS && h > 76) {
          setLocal(x, h, z, ID.snow_block, true)
          if (h > 80 && getLocal(x, h + 1, z) === AIR && hash2i(wx, wz, 7) < 0.3) setLocal(x, h + 1, z, ID.snow_block, true)
        }
      }
    }

    /* ---- surface plants ---- */
    for (let z = 0; z < CHUNK_SIZE; z++) {
      for (let x = 0; x < CHUNK_SIZE; x++) {
        const wx = bx + x, wz = bz + z
        const h = heights[z * CHUNK_SIZE + x]
        const biome = biomes[z * CHUNK_SIZE + x]
        if (getLocal(x, h + 1, z) !== AIR) continue
        const top = getLocal(x, h, z)
        const isWater = h < SEA_LEVEL
        const r = hash2i(wx, wz, this.seed ^ 0x1234)

        if (isWater) {
          if (h < SEA_LEVEL - 1 && r < 0.008) setLocal(x, SEA_LEVEL + 1, z, ID.lily_pad, true)
          if (r > 0.993 && biome === BIOME.OCEAN) setLocal(x, SEA_LEVEL + 1, z, ID.seagrass, true)
          continue
        }

        if (biome === BIOME.DESERT || biome === BIOME.BADLANDS) {
          if (r < 0.012) {
            const height = 1 + Math.floor(hash2i(wx, wz, 9) * 3)
            for (let i = 1; i <= height; i++) setLocal(x, h + i, z, ID.cactus, true)
          } else if (r < 0.03) setLocal(x, h + 1, z, ID.dead_bush, true)
          continue
        }
        if (biome === BIOME.SNOWY_PLAINS || biome === BIOME.SNOWY_TAIGA || biome === BIOME.SNOWY_PEAKS) continue
        if (biome === BIOME.MUSHROOM_FIELDS) {
          if (r < 0.02) setLocal(x, h + 1, z, r < 0.01 ? ID.red_mushroom : ID.brown_mushroom, true)
          continue
        }
        const b = biomeById(biome)
        if (r < b.flowers) setLocal(x, h + 1, z, ID[FLOWERS[Math.floor(hash2i(wx, wz, 11) * FLOWERS.length) % FLOWERS.length]], true)
        else if (r < b.flowers + 0.09) setLocal(x, h + 1, z, ID.short_grass, true)
        else if (biome === BIOME.JUNGLE && r < 0.13) setLocal(x, h + 1, z, ID.fern, true)
        else if (biome === BIOME.SWAMP && r < 0.14) setLocal(x, h + 1, z, ID.short_grass, true)
        else if (biome === BIOME.PLAINS && r > 0.996) setLocal(x, h + 1, z, ID.pumpkin, true)
        else if (biome === BIOME.JUNGLE && r > 0.994) setLocal(x, h + 1, z, ID.bamboo, true)
        else if (biome === BIOME.VILLAGE && r > 0.97) setLocal(x, h + 1, z, ID.short_grass, true)
        // sugar cane near the shoreline
        if ((biome === BIOME.BEACH || biome === BIOME.SWAMP || biome === BIOME.JUNGLE) && h >= SEA_LEVEL && h <= SEA_LEVEL + 1 && r > 0.984) {
          const height = 2 + Math.floor(hash2i(wx, wz, 13) * 2)
          for (let i = 1; i <= height; i++) setLocal(x, h + i, z, ID.sugar_cane, true)
        }
      }
    }

    /* ---- trees (origin may be outside this chunk so canopies connect) ---- */
    for (let oz = -3; oz < CHUNK_SIZE + 3; oz++) {
      for (let ox = -3; ox < CHUNK_SIZE + 3; ox++) {
        const wx = bx + ox, wz = bz + oz
        const dist = Math.sqrt(wx * wx + wz * wz)
        if (dist < 34) continue
        const h = this.heightAt(wx, wz)
        if (h < SEA_LEVEL) continue
        const biome = biomeById(this.biomeAt(wx, wz, h))
        if (!biome.trees) continue
        const r = hash2i(wx, wz, this.seed ^ 0xabcd)
        if (r > biome.treeChance) continue
        this.growTree(wx, h + 1, wz, biome.trees, setLocal, getLocal, hash2i(wx, wz, this.seed))
      }
    }

    /* ---- village ---- */
    const village = villageChunk(cx, cz)
    if (village) {
      for (const [x, y, z, id] of village) {
        if (y >= 0 && y < WORLD_HEIGHT) setLocal(x, y, z, id, true)
      }
    }

    return { blocks, biomes, heights }
  }

  growTree(wx, wy, wz, type, set, get, r) {
    const h = 5 + Math.floor(r * 5)
    if (type === 'spruce') {
      for (let y = 0; y < h; y++) set(wx, wy + y, wz, ID.spruce_log, true)
      let layer = 0
      for (let y = h - 1; y >= 1; y--) {
        const radius = Math.min(3, Math.floor((h - y) / 2) + (layer % 2))
        for (let dz = -radius; dz <= radius; dz++) {
          for (let dx = -radius; dx <= radius; dx++) {
            if (dx * dx + dz * dz > radius * radius + 1) continue
            if (dx === 0 && dz === 0) continue
            set(wx + dx, wy + y, wz + dz, ID.spruce_leaves, false)
          }
        }
        layer++
      }
      set(wx, wy + h, wz, ID.spruce_leaves, false)
      return
    }
    if (type === 'jungle') {
      for (let y = 0; y < h + 3; y++) set(wx, wy + y, wz, ID.jungle_log, true)
      const top = wy + h + 2
      for (let dy = -2; dy <= 2; dy++) {
        const radius = dy === 2 ? 1 : dy === -2 ? 3 : 4
        for (let dz = -radius; dz <= radius; dz++) for (let dx = -radius; dx <= radius; dx++) {
          if (dx * dx + dz * dz > radius * radius + 1) continue
          set(wx + dx, top + dy, wz + dz, ID.jungle_leaves, false)
        }
      }
      return
    }
    if (type === 'acacia') {
      let bx = wx, bz = wz
      const bend = r < 0.5 ? 1 : 0
      for (let y = 0; y < h; y++) {
        if (y === 3) { if (bend) bx += 1; else bz += 1 }
        set(bx, wy + y, bz, ID.acacia_log, true)
      }
      const top = wy + h
      for (let dy = 0; dy <= 1; dy++) {
        const radius = 3 - dy
        for (let dz = -radius; dz <= radius; dz++) for (let dx = -radius; dx <= radius; dx++) {
          if (Math.abs(dx) + Math.abs(dz) > radius + 1) continue
          set(bx + dx, top + dy, bz + dz, ID.acacia_leaves, false)
        }
      }
      return
    }
    if (type === 'dark_oak') {
      for (let y = 0; y < h; y++) {
        set(wx, wy + y, wz, ID.dark_oak_log, true)
        set(wx + 1, wy + y, wz, ID.dark_oak_log, true)
        set(wx, wy + y, wz + 1, ID.dark_oak_log, true)
        set(wx + 1, wy + y, wz + 1, ID.dark_oak_log, true)
      }
      const top = wy + h
      for (let dy = -1; dy <= 1; dy++) {
        const radius = dy === 1 ? 2 : 3
        for (let dz = -radius; dz <= radius + 1; dz++) for (let dx = -radius; dx <= radius + 1; dx++) {
          if (dx * dx + dz * dz > (radius + 1) * (radius + 1)) continue
          set(wx + dx, top + dy, wz + dz, ID.dark_oak_leaves, false)
        }
      }
      return
    }
    const wood = type === 'birch' ? 'birch' : type === 'cherry' ? 'cherry' : 'oak'
    for (let y = 0; y < h; y++) set(wx, wy + y, wz, ID[`${wood}_log`], true)
    const top = wy + h
    for (let dy = -2; dy <= 1; dy++) {
      const radius = dy <= -1 ? 2 : 1
      for (let dz = -radius; dz <= radius; dz++) for (let dx = -radius; dx <= radius; dx++) {
        if (dx === 0 && dz === 0 && dy < 1) continue
        if (dx * dx + dz * dz > radius * radius + 1) continue
        set(wx + dx, top + dy, wz + dz, ID[`${wood}_leaves`], false)
      }
    }
    set(wx, top + 2, wz, ID[`${wood}_leaves`], false)
  }
}
