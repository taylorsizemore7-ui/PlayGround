/* ============================================================================
   SPAWN VILLAGE — a hand-authored little settlement, clipped into chunks.
   ========================================================================== */
import { blockByName } from '../data/blocks.js'

const GROUND_TOP = 61
const BASE = 62
const entries = new Map()
let built = false

function put(x, y, z, name) {
  if (name === 'air') return
  const def = typeof name === 'string' ? blockByName.get(name) : null
  if (!def) return
  const cx = Math.floor(x / 16), cz = Math.floor(z / 16)
  const key = `${cx},${cz}`
  if (!entries.has(key)) entries.set(key, [])
  entries.get(key).push([((x % 16) + 16) % 16, y, ((z % 16) + 16) % 16, def.id])
}
function fill(x0, y0, z0, x1, y1, z1, name) {
  for (let y = y0; y <= y1; y++) for (let z = z0; z <= z1; z++) for (let x = x0; x <= x1; x++) put(x, y, z, name)
}
function hollow(x0, y0, z0, x1, y1, z1, name) {
  for (let y = y0; y <= y1; y++) for (let z = z0; z <= z1; z++) for (let x = x0; x <= x1; x++) {
    if (x === x0 || x === x1 || z === z0 || z === z1 || y === y0 || y === y1) put(x, y, z, name)
    else put(x, y, z, 'air')
  }
}

function house(cx, cz, w, d, style = 'oak') {
  const x0 = cx - Math.floor(w / 2), x1 = x0 + w - 1
  const z0 = cz - Math.floor(d / 2), z1 = z0 + d - 1
  const wall = `${style}_planks`, log = `${style}_log`
  // foundation + floor
  fill(x0, GROUND_TOP, z0, x1, GROUND_TOP, z1, 'cobblestone')
  // walls
  for (let y = BASE; y < BASE + 3; y++) {
    for (let z = z0; z <= z1; z++) {
      for (let x = x0; x <= x1; x++) {
        if (x !== x0 && x !== x1 && z !== z0 && z !== z1) continue
        const corner = (x === x0 || x === x1) && (z === z0 || z === z1)
        put(x, y, z, corner ? log : wall)
      }
    }
  }
  // windows
  for (const y of [BASE + 1, BASE + 2]) {
    for (let x = x0 + 2; x <= x1 - 2; x += 3) {
      put(x, y, z0, 'glass'); put(x, y, z1, 'glass')
    }
    for (let z = z0 + 2; z <= z1 - 2; z += 3) {
      put(x0, y, z, 'glass'); put(x1, y, z, 'glass')
    }
  }
  // door on the south face
  const doorX = cx
  put(doorX, BASE, z1, 'air'); put(doorX, BASE + 1, z1, 'air')
  put(doorX - 1, BASE + 2, z1, 'oak_planks'); put(doorX + 1, BASE + 2, z1, 'oak_planks')
  // interior
  fill(x0 + 1, BASE, z0 + 1, x1 - 1, BASE + 2, z1 - 1, 'air')
  // roof
  fill(x0 - 1, BASE + 3, z0 - 1, x1 + 1, BASE + 3, z1 + 1, `${style}_planks`)
  fill(x0, BASE + 4, z0, x1, BASE + 4, z1, `${style}_planks`)
  for (let x = x0; x <= x1; x++) { put(x, BASE + 5, z0, log); put(x, BASE + 5, z1, log) }
  for (let z = z0; z <= z1; z++) { put(x0, BASE + 5, z, log); put(x1, BASE + 5, z, log) }
  put(cx, BASE + 5, cz, 'lantern')
  // furniture
  put(x0 + 1, BASE, z0 + 1, 'crafting_table')
  put(x1 - 1, BASE, z0 + 1, 'furnace')
  put(x0 + 1, BASE, z1 - 1, 'bookshelf')
  put(x1 - 1, BASE, z1 - 1, 'chest')
  put(x0 + 1, BASE + 2, z0 + 1, 'torch')
  put(cx, BASE - 1, cz, 'hay_block')
}

function lampPost(x, z) {
  fill(x, BASE, z, x, BASE + 2, z, 'oak_log')
  put(x, BASE + 3, z, 'lantern')
}

function tree(x, z, wood = 'oak', height = 5) {
  const base = GROUND_TOP + 1
  for (let y = 0; y < height; y++) put(x, base + y, z, `${wood}_log`)
  const top = base + height
  for (let dy = -2; dy <= 1; dy++) {
    const r = dy <= -1 ? 3 : 2
    for (let dz = -r; dz <= r; dz++) {
      for (let dx = -r; dx <= r; dx++) {
        if (dx * dx + dz * dz > r * r + 1) continue
        if (dx === 0 && dz === 0 && dy < 1) continue
        put(x + dx, top + dy, z + dz, `${wood}_leaves`)
      }
    }
  }
}

function buildVillage() {
  if (built) return
  built = true

  // paths
  for (let z = 2; z <= 22; z++) for (let x = -1; x <= 1; x++) put(x, GROUND_TOP, z, 'dirt_path')
  for (let x = -18; x <= 18; x++) for (let z = 0; z <= 2; z++) put(x, GROUND_TOP, z, 'dirt_path')
  for (let z = -14; z <= 0; z++) for (let x = -1; x <= 1; x++) put(x, GROUND_TOP, z, 'dirt_path')

  // well
  fill(-2, GROUND_TOP, -2, 2, GROUND_TOP, 2, 'cobblestone')
  fill(-1, BASE, -1, 1, BASE, 1, 'cobblestone')
  put(0, BASE, 0, 'water')
  fill(-1, BASE + 1, -1, -1, BASE + 2, -1, 'oak_log')
  fill(1, BASE + 1, -1, 1, BASE + 2, -1, 'oak_log')
  fill(-1, BASE + 1, 1, -1, BASE + 2, 1, 'oak_log')
  fill(1, BASE + 1, 1, 1, BASE + 2, 1, 'oak_log')
  fill(-2, BASE + 3, -2, 2, BASE + 3, 2, 'oak_planks')
  put(0, BASE + 4, 0, 'lantern')
  put(0, BASE + 1, -1, 'oak_log'); put(0, BASE + 2, -1, 'oak_log')

  // houses
  house(-10, -9, 9, 7, 'oak')
  house(9, -13, 9, 7, 'spruce')
  house(-13, 8, 9, 7, 'birch')
  house(14, 8, 8, 7, 'oak')

  // farm
  fill(7, GROUND_TOP, -1, 16, GROUND_TOP, 5, 'dirt')
  for (let x = 7; x <= 16; x++) {
    put(x, GROUND_TOP, -1, 'oak_log'); put(x, GROUND_TOP, 5, 'oak_log')
  }
  for (let z = -1; z <= 5; z++) { put(7, GROUND_TOP, z, 'oak_log'); put(16, GROUND_TOP, z, 'oak_log') }
  for (let x = 8; x <= 15; x++) {
    put(x, GROUND_TOP, 2, 'water')
    put(x, GROUND_TOP, 0, 'farmland'); put(x, GROUND_TOP, 1, 'farmland'); put(x, GROUND_TOP, 3, 'farmland'); put(x, GROUND_TOP, 4, 'farmland')
    put(x, BASE, 0, 'wheat'); put(x, BASE, 1, 'carrots'); put(x, BASE, 3, 'potatoes'); put(x, BASE, 4, 'beetroots')
  }
  put(17, BASE, 0, 'composter')
  put(17, BASE, 1, 'hay_block')
  fill(7, BASE, -1, 7, BASE + 1, -1, 'oak_log')
  fill(16, BASE, -1, 16, BASE + 1, -1, 'oak_log')

  // animal pen
  fill(-19, GROUND_TOP, 8, -8, GROUND_TOP, 15, 'grass_block')
  for (let x = -19; x <= -8; x++) { put(x, BASE, 8, 'oak_log'); put(x, BASE, 15, 'oak_log') }
  for (let z = 8; z <= 15; z++) { put(-19, BASE, z, 'oak_log'); put(-8, BASE, z, 'oak_log') }
  put(-18, BASE, 9, 'hay_block'); put(-17, BASE, 9, 'hay_block')
  put(-14, BASE, 14, 'water')

  // market stalls
  const stall = (x, z) => {
    fill(x, BASE, z, x + 3, BASE, z + 2, 'oak_planks')
    fill(x, BASE + 1, z, x, BASE + 2, z, 'oak_log')
    fill(x + 3, BASE + 1, z, x + 3, BASE + 2, z, 'oak_log')
    fill(x - 1, BASE + 3, z - 1, x + 4, BASE + 3, z + 3, 'oak_planks')
    put(x, BASE + 1, z + 2, 'barrel'); put(x + 3, BASE + 1, z + 2, 'chest')
    put(x + 1, BASE + 1, z + 1, 'melon'); put(x + 2, BASE + 1, z + 1, 'pumpkin')
  }
  stall(5, 13)
  stall(-6, 12)

  // lamp posts and flowers
  lampPost(4, 5); lampPost(-4, 5); lampPost(4, 17); lampPost(-4, 17)
  for (const [x, z] of [[3, 8], [-3, 8], [3, 15], [-3, 15], [5, 3], [-5, 3], [7, 9], [-7, 9]]) {
    put(x, GROUND_TOP, z, 'grass_block')
    put(x, BASE, z, ['dandelion', 'poppy', 'oxeye_daisy', 'cornflower', 'azure_bluet'][Math.floor(Math.random() * 5)])
  }

  // a small nether portal ruin to the west
  const px = -23, pz = -6
  fill(px, GROUND_TOP, pz, px + 4, GROUND_TOP, pz + 5, 'blackstone')
  fill(px, BASE, pz, px + 4, BASE + 3, pz + 5, 'air')
  fill(px, BASE, pz, px, BASE + 4, pz, 'obsidian')
  fill(px + 4, BASE, pz, px + 4, BASE + 4, pz, 'obsidian')
  fill(px, BASE + 4, pz, px + 4, BASE + 4, pz, 'obsidian')
  fill(px, BASE, pz + 4, px, BASE + 4, pz + 4, 'obsidian')
  fill(px + 4, BASE, pz + 4, px + 4, BASE + 4, pz + 4, 'obsidian')
  fill(px, BASE + 4, pz + 4, px + 4, BASE + 4, pz + 4, 'obsidian')
  fill(px + 1, BASE, pz + 1, px + 3, BASE + 2, pz + 3, 'lava')

  // trees framing the clearing
  tree(-22, -17, 'oak', 6)
  tree(22, -19, 'cherry', 5)
  tree(24, 14, 'oak', 5)
  tree(-24, 18, 'spruce', 7)
  tree(19, 20, 'birch', 5)
  tree(-18, -22, 'dark_oak', 6)
}

export function villageChunk(cx, cz) {
  buildVillage()
  return entries.get(`${cx},${cz}`) || null
}

export const VILLAGE = { BASE, GROUND_TOP, SPAWN: { x: 0.5, y: BASE, z: 22.5 } }
