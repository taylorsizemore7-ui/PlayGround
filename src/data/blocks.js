/* ============================================================================
   BLOCK REGISTRY
   Every block family in Minecraft, described with compact procedural texture
   recipes. Ids start at 1; 0 is air.
   ========================================================================== */

export const BLOCKS = []
export const blockByName = new Map()
export const CATEGORIES = {
  building: { label: 'Building', icon: '▦' },
  nature: { label: 'Nature', icon: '🌿' },
  decoration: { label: 'Decoration', icon: '🏮' },
  redstone: { label: 'Redstone', icon: '🔴' },
  nether: { label: 'Nether', icon: '🔥' },
  end: { label: 'The End', icon: '🌌' },
  ocean: { label: 'Ocean', icon: '🌊' },
  colors: { label: 'Colours', icon: '🎨' }
}

const textureAliases = new Map()

function title(name) {
  return name
    .split('_')
    .map(w => w.length <= 3 && w === w.toUpperCase() ? w : w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

let nextId = 1
export function defineBlock(name, opts = {}) {
  const def = {
    id: nextId++,
    name,
    display: opts.display || title(name),
    cat: opts.cat || 'building',
    tex: opts.tex || `stone:#8d8d8d`,
    shape: opts.shape || 'cube',
    hard: opts.hard ?? 1,
    tool: opts.tool || null,
    tier: opts.tier ?? 0,
    light: opts.light ?? 0,
    tint: opts.tint || null,
    desc: opts.desc || '',
    drops: opts.drops === undefined ? name : opts.drops,
    sound: opts.sound || 'stone',
    solid: opts.solid ?? true,
    flammable: opts.flammable || false,
    placeable: opts.placeable !== false
  }
  if (def.shape === 'cross' || def.shape === 'liquid') def.solid = false
  if (def.shape === 'cross') def.hard = opts.hard ?? 0
  BLOCKS.push(def)
  blockByName.set(name, def)
  return def
}

/* texture recipe helpers */
const tx = (style, ...colors) => `${style}:${colors.join(':')}`
const ALL = (spec) => spec
const TSB = (top, side, bottom) => ({ top, side, bottom })
const TSF = (top, side, front, bottom = null) => ({ top, side, front, bottom })

function makeWood(key, planks, dark, bark, leaf, leafDark, opts = {}) {
  const plankSpec = tx('planks', planks, dark)
  const barkSpec = tx('log', bark, dark)
  const topSpec = tx('log_top', bark, planks)
  defineBlock(`${key}_planks`, {
    tex: plankSpec, cat: 'building', hard: 2, tool: 'axe', flammable: true, sound: 'wood',
    desc: 'Sawn planks. Warm, workable and endlessly useful.'
  })
  defineBlock(`${key}_log`, {
    tex: TSB(topSpec, barkSpec, topSpec), cat: 'nature', hard: 2, tool: 'axe', flammable: true, sound: 'wood',
    desc: 'A full log with bark and growth rings.'
  })
  defineBlock(`${key}_wood`, {
    tex: TSB(barkSpec, barkSpec, barkSpec), cat: 'building', hard: 2, tool: 'axe', flammable: true, sound: 'wood',
    desc: 'Bark on every face — the log without its rings.'
  })
  defineBlock(`${key}_stripped_log`, {
    tex: TSB(tx('planks', dark, planks), tx('log', dark, planks), tx('planks', dark, planks)),
    cat: 'building', hard: 2, tool: 'axe', flammable: true, sound: 'wood',
    desc: 'Bark stripped away to reveal smooth wood.'
  })
  defineBlock(`${key}_stripped_wood`, {
    tex: tx('log', dark, planks), cat: 'building', hard: 2, tool: 'axe', flammable: true, sound: 'wood',
    desc: 'Stripped log, bark-free on every side.'
  })
  if (!opts.fungus) {
    defineBlock(`${key}_leaves`, {
      tex: tx('leaves', leaf, leafDark), cat: 'nature', shape: 'leaves', hard: 0.3, tool: 'hoe',
      tint: opts.leafTint === false ? null : 'foliage', flammable: true, sound: 'grass',
      drops: `${key}_sapling`, desc: 'A canopy of leaves. Foliage colour shifts with the biome.'
    })
    defineBlock(`${key}_sapling`, {
      tex: tx('sapling', leaf, bark), cat: 'nature', shape: 'cross', hard: 0,
      desc: 'A young tree waiting to grow.'
    })
  } else {
    defineBlock(`${key}_fungus`, {
      tex: tx('mushroom', leaf, leafDark), cat: 'nether', shape: 'cross', hard: 0,
      desc: 'A strange fungus from the Nether.'
    })
    defineBlock(`${key}_roots`, {
      tex: tx('roots', leaf, leafDark), cat: 'nether', shape: 'cross', hard: 0,
      desc: 'Twisting roots that thrive in the crimson and warped forests.'
    })
  }
}

/* ---------------------------------------------------------------- woods */
makeWood('oak', '#b08a52', '#7b5c32', '#6b5233', '#4f8a2e', '#3a6b22')
makeWood('spruce', '#7a5a37', '#553c24', '#4a3522', '#2f5a37', '#22432a')
makeWood('birch', '#d5c08a', '#b19c6b', '#e3ddcf', '#7a9a48', '#5c7a32')
makeWood('jungle', '#a8754c', '#7a5232', '#5a4426', '#3f8a2a', '#2c661d')
makeWood('acacia', '#b76a3c', '#8a4d2a', '#5f4028', '#6a9a3a', '#4e7429')
makeWood('dark_oak', '#5a3f24', '#3d2a17', '#3a2915', '#356b2b', '#24501e')
makeWood('mangrove', '#8a4f3d', '#64372a', '#5a3527', '#4a7a2e', '#345c20')
makeWood('cherry', '#d9a3a0', '#b47c7a', '#4d2f36', '#e8a6c2', '#c97fa1')
makeWood('bamboo', '#c9a85a', '#a5863f', '#8a8a3a', '#5a8a3a', '#3f6a28')
makeWood('crimson', '#6b3a4a', '#4a2632', '#5c2a38', '#a03050', '#7a2038', { fungus: true })
makeWood('warped', '#2f6b66', '#204a47', '#2a4f52', '#3a8a7a', '#28665a', { fungus: true })

/* ---------------------------------------------------------------- stones */
const stones = [
  ['stone', 'stone:#8d8d8d', 1.5, 'pickaxe', 'The ubiquitous grey building block.'],
  ['cobblestone', 'cobble:#8a8a8a:#626262', 2, 'pickaxe', 'Rough, rustic and blast resistant.'],
  ['mossy_cobblestone', 'cobble:#7f8a6c:#55603f', 2, 'pickaxe', 'Cobblestone with a coat of moss.'],
  ['smooth_stone', 'stone:#9d9d9d', 2, 'pickaxe', 'Polished stone with a clean face.'],
  ['stone_bricks', 'brick:#8d8d8d:#6f6f6f', 1.5, 'pickaxe', 'Tidy stone masonry.'],
  ['mossy_stone_bricks', 'brick:#7f8a6c:#5c6848', 1.5, 'pickaxe', 'Old bricks sprouting moss.'],
  ['cracked_stone_bricks', 'brick:#858585:#5f5f5f', 1.5, 'pickaxe', 'Weathered stone bricks with cracks.'],
  ['chiseled_stone_bricks', 'chisel:#8d8d8d:#6a6a6a', 1.5, 'pickaxe', 'Ornately carved stone.'],
  ['granite', 'stone:#9a6a58', 1.5, 'pickaxe', 'Speckled pink-orange rock.'],
  ['polished_granite', 'stone:#a5796a', 1.5, 'pickaxe', 'Granite with a smooth finish.'],
  ['diorite', 'stone:#cfcfcf', 1.5, 'pickaxe', 'Pale, speckled igneous rock.'],
  ['polished_diorite', 'stone:#dcdcdc', 1.5, 'pickaxe', 'Diorite polished to a shine.'],
  ['andesite', 'stone:#888888', 1.5, 'pickaxe', 'Durable grey volcanic rock.'],
  ['polished_andesite', 'stone:#999999', 1.5, 'pickaxe', 'Andesite with a clean, smooth face.'],
  ['deepslate', 'deepslate:#4a4a50', 3, 'pickaxe', 'Dark stone from the depths.'],
  ['cobbled_deepslate', 'cobble:#4a4a50:#303036', 3.5, 'pickaxe', 'Rough deepslate rubble.'],
  ['polished_deepslate', 'stone:#55555c', 3.5, 'pickaxe', 'Deepslate, smoothed for building.'],
  ['deepslate_bricks', 'brick:#4a4a50:#35353a', 3.5, 'pickaxe', 'Bricks cut from deepslate.'],
  ['cracked_deepslate_bricks', 'brick:#46464c:#29292d', 3.5, 'pickaxe', 'Cracked deepslate masonry.'],
  ['deepslate_tiles', 'brick:#424248:#2c2c31', 3.5, 'pickaxe', 'Small, dark tiles.'],
  ['chiseled_deepslate', 'chisel:#4a4a50:#323237', 3.5, 'pickaxe', 'Deepslate with a carved pattern.'],
  ['tuff', 'stone:#6d6f5f', 1.5, 'pickaxe', 'Soft volcanic stone.'],
  ['polished_tuff', 'stone:#777a69', 1.5, 'pickaxe', 'Tuff with a smooth finish.'],
  ['chiseled_tuff', 'chisel:#6d6f5f:#515342', 1.5, 'pickaxe', 'Carved volcanic stone.'],
  ['tuff_bricks', 'brick:#6d6f5f:#4f5143', 1.5, 'pickaxe', 'Bricks of compacted ash.'],
  ['calcite', 'stone:#d8d6cc', 1.5, 'pickaxe', 'Bright, crystalline carbonate.'],
  ['dripstone_block', 'stone:#88685a', 1.5, 'pickaxe', 'A block of ancient stone spikes.'],
  ['bedrock', 'stone:#2f2f33', -1, null, 'The unbreakable edge of the world.'],
  ['obsidian', 'obsidian:#1b1428', 12, 'pickaxe', 'Volcanic glass. Extremely tough.'],
  ['crying_obsidian', 'obsidian:#2a1e40', 12, 'pickaxe', 'Obsidian that weeps purple light.', { light: 1 }]
]
for (const [name, tex, hard, tool, desc, extra = {}] of stones) {
  defineBlock(name, { tex, hard, tool, desc, cat: name.includes('deepslate') ? 'building' : 'building', ...extra })
}

/* ---------------------------------------------------------------- ores */
const ores = [
  ['coal_ore', '#2e2e31', 3, 0, 96], ['iron_ore', '#c8a184', 3, 0, 72],
  ['copper_ore', '#c06a3c', 3, 0, 64], ['gold_ore', '#f5cf45', 3, 0, 40],
  ['redstone_ore', '#c62828', 3, 0, 24], ['lapis_ore', '#2a56b8', 3, 0, 32],
  ['diamond_ore', '#4fe3dc', 3, 0, 20], ['emerald_ore', '#35d15a', 3, 8, 96]
]
for (const [name, oreColor, hard] of ores) {
  defineBlock(name, {
    tex: tx('ore', '#8d8d8d', oreColor), hard, tool: 'pickaxe', tier: 1, cat: 'nature',
    desc: `A vein of ${name.replace('_ore', '').replace('_', ' ')} in stone.`
  })
  defineBlock(`deepslate_${name}`, {
    tex: tx('ore', '#4a4a50', oreColor), hard: hard + 1.5, tool: 'pickaxe', tier: 1, cat: 'nature',
    desc: `A deep vein of ${name.replace('_ore', '').replace('_', ' ')}.`
  })
}
defineBlock('nether_gold_ore', { tex: tx('ore', '#6a3030', '#f5cf45'), hard: 3, tool: 'pickaxe', cat: 'nether', desc: 'Gold embedded in netherrack.' })
defineBlock('nether_quartz_ore', { tex: tx('ore', '#6a3030', '#e8dfd4'), hard: 3, tool: 'pickaxe', cat: 'nether', desc: 'Pale quartz in crimson rock.' })
defineBlock('ancient_debris', { tex: tx('debris', '#5a3a30', '#8a5a3a'), hard: 30, tool: 'pickaxe', tier: 4, cat: 'nether', desc: 'The rarest ore. Burns in lava, survives everything.' })

const metalBlocks = [
  ['coal_block', '#202024', 'A compact block of coal.'],
  ['iron_block', '#d8d8d8', 'A heavy block of iron.'],
  ['gold_block', '#f5cf45', 'A soft, lustrous block of gold.'],
  ['redstone_block', '#b71c1c', 'A block crackling with redstone energy.'],
  ['lapis_block', '#2a56b8', 'Deep blue lapis lazuli.'],
  ['diamond_block', '#4fe3dc', 'A dazzling block of diamond.'],
  ['emerald_block', '#35d15a', 'A block of vivid green emerald.'],
  ['netherite_block', '#3e353c', 'Indestructible netherite.'],
  ['quartz_block', '#ece6dd', 'A clean block of nether quartz.'],
  ['raw_iron_block', '#cbb59d', 'Raw iron, waiting to be smelted.'],
  ['raw_copper_block', '#b9835b', 'Raw copper in a rough block.'],
  ['raw_gold_block', '#e8c13f', 'Raw gold, gleaming dully.']
]
for (const [name, color, desc] of metalBlocks) {
  defineBlock(name, { tex: tx('metal', color), hard: 5, tool: 'pickaxe', tier: 2, cat: 'building', desc, sound: 'metal' })
}

const copperStates = [
  ['copper', '#c06a3c'], ['exposed_copper', '#b07a5c'], ['weathered_copper', '#7a9a78'], ['oxidized_copper', '#4f9a84']
]
for (const [key, color] of copperStates) {
  defineBlock(`${key}_block`, { tex: tx('copper', color), hard: 3, tool: 'pickaxe', cat: 'building', desc: 'Copper, slowly weathering with age.' })
  defineBlock(`cut_${key}`, { tex: tx('metal', color), hard: 3, tool: 'pickaxe', cat: 'building', desc: 'Cut copper with crisp edges.' })
}
defineBlock('amethyst_block', { tex: tx('amethyst', '#8a5ac8', '#c9a6f0'), hard: 1.5, tool: 'pickaxe', cat: 'building', desc: 'A translucent purple crystal block.' })
defineBlock('budding_amethyst', { tex: tx('amethyst', '#7a4ab8', '#e0c8ff'), hard: 1.5, tool: 'pickaxe', cat: 'building', desc: 'A crystal cluster that grows amethyst buds.', light: 1 })

/* ---------------------------------------------------------------- earth */
const earth = [
  ['dirt', 'dirt:#8a5a3c', 0.5, 'shovel', 'Simple brown earth.'],
  ['coarse_dirt', 'dirt:#75503a', 0.5, 'shovel', 'Dry, gritty dirt.'],
  ['rooted_dirt', 'dirt:#8a5a3c', 0.5, 'shovel', 'Dirt threaded with pale roots.'],
  ['grass_block', null, 0.6, 'shovel', 'Earth crowned with living grass.'],
  ['podzol', null, 0.6, 'shovel', 'Acidic forest soil.'],
  ['mycelium', null, 0.6, 'shovel', 'A spreading purple fungal mat.'],
  ['farmland', null, 0.6, 'shovel', 'Tilled soil ready for crops.'],
  ['dirt_path', null, 0.6, 'shovel', 'A worn path through the grass.'],
  ['mud', 'mud:#4a3a33', 0.6, 'shovel', 'Thick, squelchy mud.'],
  ['packed_mud', 'stone:#8a6a4a', 1, 'pickaxe', 'Mud compressed into sturdy blocks.'],
  ['mud_bricks', 'brick:#8a6a4a:#6a4e34', 1.5, 'pickaxe', 'Bricks of dried mud.'],
  ['clay', 'stone:#9aa4b0', 0.6, 'shovel', 'A soft block of grey clay.'],
  ['gravel', 'gravel:#8a8580:#5f5b57', 0.6, 'shovel', 'Loose stones that slide and fall.'],
  ['sand', 'sand:#e0d3a0', 0.5, 'shovel', 'Warm, shifting sand.'],
  ['red_sand', 'sand:#b86b32', 0.5, 'shovel', 'Iron-rich desert sand.'],
  ['sandstone', null, 0.8, 'pickaxe', 'Compacted desert sand.'],
  ['chiseled_sandstone', null, 0.8, 'pickaxe', 'Carved sandstone.'],
  ['cut_sandstone', null, 0.8, 'pickaxe', 'Smooth, clean sandstone.'],
  ['smooth_sandstone', null, 0.8, 'pickaxe', 'Sandstone polished smooth.'],
  ['red_sandstone', null, 0.8, 'pickaxe', 'Compacted red sand.'],
  ['chiseled_red_sandstone', null, 0.8, 'pickaxe', 'Carved red sandstone.'],
  ['cut_red_sandstone', null, 0.8, 'pickaxe', 'Clean-cut red sandstone.'],
  ['smooth_red_sandstone', null, 0.8, 'pickaxe', 'Red sandstone polished smooth.'],
  ['snow_block', 'snow:#f2f7f8', 0.4, 'shovel', 'A crisp block of snow.'],
  ['powder_snow', 'snow:#eef5f7', 0.4, 'shovel', 'Soft snow that swallows you whole.'],
  ['ice', 'ice:#9ed6f0', 0.5, 'pickaxe', 'Slippery, translucent ice.'],
  ['packed_ice', 'ice:#8ec6ea', 0.5, 'pickaxe', 'Dense ice that never melts.'],
  ['blue_ice', 'ice:#6aa8e8', 0.5, 'pickaxe', 'Ancient, impossibly dense ice.'],
  ['moss_block', 'moss:#5a8a3a', 0.6, 'hoe', 'A bouncy carpet of living moss.'],
  ['moss_carpet', 'moss:#5a8a3a', 0.2, 'hoe', 'A thin layer of moss.'],
  ['sculk', 'sculk:#16363a', 1.5, 'hoe', 'A dark, pulsing growth from the deep dark.'],
  ['sculk_catalyst', 'sculk:#173a3e', 1.5, 'hoe', 'A sculk growth that spreads and feeds.'],
  ['sculk_sensor', 'sensor:#1b4044', 1.5, 'hoe', 'It listens for footsteps.'],
  ['sculk_shrieker', 'shrieker:#14333a', 1.5, 'hoe', 'Let out a scream and summon the Warden.'],
  ['bone_block', 'bone:#d8d2bd', 1.5, 'pickaxe', 'A stack of polished bone.'],
  ['honey_block', 'honey:#e8a33a', 0.5, 'axe', 'Sticky honey that slows everything.'],
  ['slime_block', 'slime:#6aa84a', 0.5, 'axe', 'A bouncy green gel.'],
  ['honeycomb_block', 'honey:#d8942a', 0.5, 'axe', 'Waxy honeycomb packed tight.'],
  ['sponge', 'sponge:#c9c45a', 0.6, 'hoe', 'A porous sponge that soaks up water.'],
  ['wet_sponge', 'sponge:#9a9a52', 0.6, 'hoe', 'A sponge heavy with water.'],
  ['soul_sand', 'soulsand:#5a4433', 0.5, 'shovel', 'Sand that traps and slows the living.'],
  ['soul_soil', 'soulsand:#4a3a2e', 0.5, 'shovel', 'Dark soil of the soul sand valley.']
]
for (const [name, tex, hard, tool, desc] of earth) {
  let finalTex = tex
  if (name === 'grass_block') finalTex = TSB(tx('grass_top', '#6d9e46'), tx('grass_side', '#6d9e46:#8a5a3c'), tx('dirt', '#8a5a3c'))
  if (name === 'podzol') finalTex = TSB(tx('grass_top', '#6a4a2a'), tx('grass_side', '#6a4a2a:#8a5a3c'), tx('dirt', '#8a5a3c'))
  if (name === 'mycelium') finalTex = TSB(tx('grass_top', '#8a7a8a'), tx('grass_side', '#8a7a8a:#8a5a3c'), tx('dirt', '#8a5a3c'))
  if (name === 'farmland') finalTex = TSB(tx('dirt', '#6a442e'), tx('farmland', '#6a442e'), tx('dirt', '#8a5a3c'))
  if (name === 'dirt_path') finalTex = TSB(tx('dirt', '#9a7a4a'), tx('dirt', '#9a7a4a'), tx('dirt', '#8a5a3c'))
  if (name === 'sandstone') finalTex = TSB(tx('sandstone', '#e0d3a0'), tx('sandstone_side', '#e0d3a0'), tx('sandstone', '#d8c890'))
  if (name.startsWith('chiseled_sandstone')) finalTex = TSB(tx('sandstone', '#e8dbaa'), tx('chisel', '#e0d3a0:#c9b982'), tx('sandstone', '#d8c890'))
  if (name === 'cut_sandstone' || name === 'smooth_sandstone') finalTex = TSB(tx('sandstone', '#e8dbaa'), tx('stone', '#e0d3a0'), tx('sandstone', '#d8c890'))
  if (name === 'red_sandstone') finalTex = TSB(tx('sandstone', '#b86b32'), tx('sandstone_side', '#b86b32'), tx('sandstone', '#a05a2a'))
  if (name.startsWith('chiseled_red_sandstone')) finalTex = TSB(tx('sandstone', '#c47a3c'), tx('chisel', '#b86b32:#96522a'), tx('sandstone', '#a05a2a'))
  if (name === 'cut_red_sandstone' || name === 'smooth_red_sandstone') finalTex = TSB(tx('sandstone', '#c47a3c'), tx('stone', '#b86b32'), tx('sandstone', '#a05a2a'))
  if (name === 'moss_carpet') finalTex = tx('carpet', '#5a8a3a')
  defineBlock(name, {
    tex: finalTex, hard, tool, cat: 'nature', desc,
    sound: name.includes('grass') || name.includes('moss') ? 'grass' : name.includes('sand') || name.includes('gravel') ? 'gravel' : 'stone',
    tint: name === 'grass_block' ? 'grass' : null,
    drops: name === 'grass_block' ? 'dirt' : name === 'farmland' || name === 'dirt_path' ? 'dirt' : name
  })
}
/* grasses/leaf tint is applied only to the top face by the mesher. */

/* ---------------------------------------------------------------- nether */
const nether = [
  ['netherrack', 'netherrack:#6a3030', 0.4, 'pickaxe', 'Crumbling crimson rock.'],
  ['nether_bricks', 'brick:#3a1f24:#261316', 2, 'pickaxe', 'Bricks of netherrack.'],
  ['cracked_nether_bricks', 'brick:#372025:#221113', 2, 'pickaxe', 'Cracked nether brick.'],
  ['chiseled_nether_bricks', 'chisel:#3a1f24:#241316', 2, 'pickaxe', 'Ornate nether brick.'],
  ['red_nether_bricks', 'brick:#4a1f1f:#2e1212', 2, 'pickaxe', 'Bricks dyed a deep blood red.'],
  ['basalt', 'basalt:#4a4a50:#303036', 1.5, 'pickaxe', 'Columnar volcanic rock.'],
  ['polished_basalt', 'basalt:#55555c:#38383e', 1.5, 'pickaxe', 'Basalt with a smooth face.'],
  ['smooth_basalt', 'stone:#48484e', 1.5, 'pickaxe', 'Basalt polished completely smooth.'],
  ['blackstone', 'blackstone:#2e2a2e:#1c191c', 1.5, 'pickaxe', 'Dark, hard volcanic stone.'],
  ['polished_blackstone', 'stone:#353136', 1.5, 'pickaxe', 'Blackstone with a matte polish.'],
  ['polished_blackstone_bricks', 'brick:#353136:#201d21', 1.5, 'pickaxe', 'Neat bricks of blackstone.'],
  ['chiseled_polished_blackstone', 'chisel:#353136:#201d21', 1.5, 'pickaxe', 'Carved blackstone.'],
  ['gilded_blackstone', 'gilded:#2e2a2e:#e8b83a', 1.5, 'pickaxe', 'Blackstone veined with gold.'],
  ['crimson_nylium', 'grass_top:#8a2f3a', 0.6, 'pickaxe', 'Crimson fungal turf.'],
  ['warped_nylium', 'grass_top:#2f7a6a', 0.6, 'pickaxe', 'Teal fungal turf.'],
  ['nether_wart_block', 'wart:#7a1f2a', 1, 'hoe', 'A fleshy red growth.'],
  ['warped_wart_block', 'wart:#2a6a7a', 1, 'hoe', 'A fleshy teal growth.'],
  ['shroomlight', 'glow:#e8a03a', 1, 'hoe', 'A warm, glowing fungal bulb.', { light: 15 }],
  ['glowstone', 'glow:#e8c85a', 0.3, 'pickaxe', 'Glowing crystals that light the Nether.', { light: 15 }],
  ['magma_block', 'magma:#8a3a1a:#e8a03a', 0.5, 'pickaxe', 'Molten rock that burns underfoot.', { light: 3 }],
  ['soul_fire_lantern', 'lantern:#3a7a8a', 0.5, 'pickaxe', 'A lantern lit by soul fire.', { light: 10 }]
]
for (const [name, tex, hard, tool, desc, extra = {}] of nether) {
  defineBlock(name, { tex, hard, tool, cat: 'nether', desc, ...extra })
}

/* ---------------------------------------------------------------- end */
defineBlock('end_stone', { tex: tx('endstone', '#d6d6a8'), hard: 3, tool: 'pickaxe', cat: 'end', desc: 'Pale yellow stone from the End.' })
defineBlock('end_stone_bricks', { tex: tx('brick', '#d6d6a8:#b0b088'), hard: 3, tool: 'pickaxe', cat: 'end', desc: 'End stone cut into bricks.' })
defineBlock('purpur_block', { tex: tx('purpur', '#a86aa8'), hard: 1.5, tool: 'pickaxe', cat: 'end', desc: 'A strange violet block.' })
defineBlock('purpur_pillar', { tex: TSB(tx('purpur', '#b47ab4'), tx('purpur_side', '#a86aa8'), tx('purpur', '#b47ab4')), hard: 1.5, tool: 'pickaxe', cat: 'end', desc: 'A tall pillar of purpur.' })
defineBlock('dragon_egg', { tex: tx('egg', '#2a2a33:#8a5ac8'), hard: 3, tool: 'pickaxe', cat: 'end', desc: 'A trophy from the Ender Dragon.', light: 2 })
defineBlock('chorus_flower', { tex: tx('purpur', '#a86aa8'), hard: 0.4, cat: 'end', desc: 'A blooming chorus flower.' })
defineBlock('chorus_plant', { tex: tx('purpur', '#8a4a8a'), hard: 0.4, cat: 'end', desc: 'A twisting chorus stem.' })
defineBlock('end_rod', { tex: tx('rod', '#e8e0d0'), shape: 'cross', hard: 0, cat: 'end', light: 14, desc: 'A floating rod of end light.' })

/* ---------------------------------------------------------------- ocean */
const ocean = [
  ['prismarine', 'bricks:#5a9a8a:#3a6a60', 1.5, 'pickaxe', 'Green-blue ocean stone.'],
  ['prismarine_bricks', 'brick:#5a9a8a:#3a6a60', 1.5, 'pickaxe', 'Neatly cut prismarine.'],
  ['dark_prismarine', 'stone:#3a5a4a', 1.5, 'pickaxe', 'Dark, polished ocean stone.'],
  ['sea_lantern', 'sealantern:#b8e8d8', 0.3, 'pickaxe', 'A glowing block of the sea.', { light: 15 }],
  ['tube_coral_block', 'coral:#2a6ab8', 1.5, 'pickaxe', 'A living blue coral colony.'],
  ['brain_coral_block', 'coral:#c86a8a', 1.5, 'pickaxe', 'A living pink coral colony.'],
  ['bubble_coral_block', 'coral:#a84ab8', 1.5, 'pickaxe', 'A living purple coral colony.'],
  ['fire_coral_block', 'coral:#b83a3a', 1.5, 'pickaxe', 'A living red coral colony.'],
  ['horn_coral_block', 'coral:#d8b83a', 1.5, 'pickaxe', 'A living yellow coral colony.'],
  ['dead_tube_coral_block', 'coral:#8a8a7a', 1.5, 'pickaxe', 'Bleached dead coral.'],
  ['dead_brain_coral_block', 'coral:#8a8a7a', 1.5, 'pickaxe', 'Bleached dead coral.'],
  ['dead_bubble_coral_block', 'coral:#8a8a7a', 1.5, 'pickaxe', 'Bleached dead coral.'],
  ['dead_fire_coral_block', 'coral:#8a8a7a', 1.5, 'pickaxe', 'Bleached dead coral.'],
  ['dead_horn_coral_block', 'coral:#8a8a7a', 1.5, 'pickaxe', 'Bleached dead coral.']
]
for (const [name, tex, hard, tool, desc, extra = {}] of ocean) {
  defineBlock(name, { tex, hard, tool, cat: 'ocean', desc, ...extra })
}
defineBlock('turtle_egg', { tex: tx('egg', '#e8e0c8:#8a8a6a'), hard: 0.5, shape: 'cross', cat: 'ocean', desc: 'A clutch of turtle eggs.' })

/* ---------------------------------------------------------------- colours */
const COLORS = [
  ['white', '#e9ecec', '#d8dcdc'], ['orange', '#f07613', '#d86408'], ['magenta', '#bd44b3', '#a03098'],
  ['light_blue', '#3aafd9', '#2898c0'], ['yellow', '#f8c627', '#e0ae10'], ['lime', '#70b919', '#5a9e0a'],
  ['pink', '#ed8dac', '#d87494'], ['gray', '#3e4447', '#2e3336'], ['light_gray', '#8e8e86', '#77776f'],
  ['cyan', '#158991', '#0a727a'], ['purple', '#792aac', '#621c94'], ['blue', '#35399d', '#252a86'],
  ['brown', '#724728', '#5c371c'], ['green', '#546d1b', '#435a10'], ['red', '#a12722', '#861a16'],
  ['black', '#141519', '#0a0b0e']
]
for (const [key, color, dark] of COLORS) {
  const label = title(key)
  defineBlock(`${key}_wool`, {
    tex: tx('wool', color, dark), hard: 0.8, tool: 'shears', cat: 'colors', flammable: true,
    desc: `${label} wool, soft and warm.`
  })
  defineBlock(`${key}_concrete`, {
    tex: tx('concrete', color, dark), hard: 1.8, tool: 'pickaxe', cat: 'colors',
    desc: `Smooth ${label.toLowerCase()} concrete.`
  })
  defineBlock(`${key}_concrete_powder`, {
    tex: tx('powder', color, dark), hard: 0.5, tool: 'shovel', cat: 'colors',
    desc: `${label} concrete powder. It hardens when wet.`
  })
  defineBlock(`${key}_terracotta`, {
    tex: tx('terracotta', color, dark), hard: 1.25, tool: 'pickaxe', cat: 'colors',
    desc: `Fired ${label.toLowerCase()} clay.`
  })
  defineBlock(`${key}_glazed_terracotta`, {
    tex: tx('glazed', color, dark), hard: 1.4, tool: 'pickaxe', cat: 'colors',
    desc: `A patterned ${label.toLowerCase()} glaze.`
  })
  defineBlock(`${key}_stained_glass`, {
    tex: tx('glass', color), shape: 'glass', hard: 0.3, cat: 'colors',
    desc: `Translucent ${label.toLowerCase()} glass.`
  })
  defineBlock(`${key}_shulker_box`, {
    tex: TSB(tx('shulker', color), tx('shulker_side', color, dark), tx('shulker', dark)),
    hard: 2, tool: 'pickaxe', cat: 'decoration', desc: `A ${label.toLowerCase()} shulker box.`
  })
}
defineBlock('terracotta', { tex: tx('terracotta', '#a05a3a', '#8a4a2e'), hard: 1.25, tool: 'pickaxe', cat: 'colors', desc: 'Fired clay, warm and earthen.' })
defineBlock('glass', { tex: tx('glass', '#bfe8f0'), shape: 'glass', hard: 0.3, cat: 'building', desc: 'Clear, fragile glass.' })
defineBlock('tinted_glass', { tex: tx('glass', '#3a3a44'), shape: 'glass', hard: 0.3, cat: 'building', desc: 'Smoked glass that blocks light.' })


/* ---------------------------------------------------------------- functional */
const functional = [
  ['crafting_table', TSB(tx('planks', '#b08a52', '#7b5c32'), tx('crafting', '#b08a52', '#7b5c32'), tx('planks', '#b08a52', '#7b5c32')), 2.5, 'axe', 'A workbench for crafting recipes.'],
  ['furnace', TSF(tx('stone', '#8d8d8d'), tx('stone', '#8d8d8d'), tx('furnace', '#8d8d8d:#3a3a3a'), tx('stone', '#8d8d8d')), 3.5, 'pickaxe', 'Smelts ore and cooks food.'],
  ['blast_furnace', TSF(tx('stone', '#8d8d8d'), tx('stone', '#8d8d8d'), tx('furnace', '#8d8d8d:#2a2a2a'), tx('stone', '#8d8d8d')), 3.5, 'pickaxe', 'A faster furnace for ore and metal.'],
  ['smoker', TSF(tx('stone', '#8d8d8d'), tx('stone', '#8d8d8d'), tx('furnace', '#8d8d8d:#5a3a2a'), tx('stone', '#8d8d8d')), 3.5, 'pickaxe', 'Cooks food twice as fast.'],
  ['chest', TSB(tx('planks', '#b08a52', '#7b5c32'), tx('chest', '#b08a52', '#5a3a1a'), tx('planks', '#b08a52', '#7b5c32')), 2.5, 'axe', 'Stores your treasures.'],
  ['trapped_chest', TSB(tx('planks', '#b08a52', '#7b5c32'), tx('chest', '#b08a52', '#5a3a1a'), tx('planks', '#b08a52', '#7b5c32')), 2.5, 'axe', 'A chest with a hidden tripwire.'],
  ['barrel', TSB(tx('planks', '#8a6a3a', '#6a4a24'), tx('barrel', '#8a6a3a', '#5a3a1a'), tx('planks', '#8a6a3a', '#6a4a24')), 2.5, 'axe', 'A wooden storage barrel.'],
  ['bookshelf', TSB(tx('planks', '#b08a52', '#7b5c32'), tx('bookshelf', '#b08a52', '#7b5c32'), tx('planks', '#b08a52', '#7b5c32')), 1.5, 'axe', 'Holds books for enchanting.'],
  ['chiseled_bookshelf', TSB(tx('planks', '#b08a52', '#7b5c32'), tx('bookshelf', '#b08a52', '#7b5c32'), tx('planks', '#b08a52', '#7b5c32')), 1.5, 'axe', 'A carved bookshelf.'],
  ['lectern', TSB(tx('planks', '#b08a52', '#7b5c32'), tx('bookshelf', '#b08a52', '#7b5c32'), tx('planks', '#b08a52', '#7b5c32')), 2, 'axe', 'A reading stand for books.'],
  ['cartography_table', TSB(tx('planks', '#b08a52', '#7b5c32'), tx('crafting', '#b08a52', '#7b5c32'), tx('planks', '#b08a52', '#7b5c32')), 2.5, 'axe', 'Used to copy and zoom maps.'],
  ['fletching_table', TSB(tx('planks', '#b08a52', '#7b5c32'), tx('crafting', '#b08a52', '#7b5c32'), tx('planks', '#b08a52', '#7b5c32')), 2.5, 'axe', 'A table for making arrows.'],
  ['smithing_table', TSB(tx('metal', '#4a4a50'), tx('smithing', '#4a4a50:#8a6a3a'), tx('planks', '#8a6a3a', '#5a3a1a')), 2.5, 'axe', 'Upgrade gear with netherite.'],
  ['loom', TSB(tx('planks', '#b08a52', '#7b5c32'), tx('loom', '#b08a52', '#7b5c32'), tx('planks', '#b08a52', '#7b5c32')), 2.5, 'axe', 'Weave banners and patterns.'],
  ['stonecutter', TSB(tx('stone', '#8d8d8d'), tx('stonecutter', '#8d8d8d'), tx('stone', '#8d8d8d')), 3.5, 'pickaxe', 'Cuts stone into precise shapes.'],
  ['grindstone', TSB(tx('stone', '#8d8d8d'), tx('stonecutter', '#8d8d8d'), tx('planks', '#5a3a1a', '#3a2410')), 2, 'pickaxe', 'Repairs tools and removes enchantments.'],
  ['anvil', TSB(tx('metal', '#3a3a40'), tx('anvil', '#3a3a40'), tx('metal', '#3a3a40')), 5, 'pickaxe', 'Repairs and combines gear.'],
  ['chipped_anvil', TSB(tx('metal', '#3a3a40'), tx('anvil', '#3a3a40'), tx('metal', '#3a3a40')), 5, 'pickaxe', 'A damaged anvil.'],
  ['damaged_anvil', TSB(tx('metal', '#3a3a40'), tx('anvil', '#3a3a40'), tx('metal', '#3a3a40')), 5, 'pickaxe', 'An anvil on its last legs.'],
  ['enchanting_table', TSB(tx('enchant', '#2a1a3a:#c88aff'), tx('enchant', '#2a1a3a:#c88aff'), tx('obsidian', '#1b1428')), 5, 'pickaxe', 'Infuse gear with arcane power.', 7],
  ['beacon', TSB(tx('glass', '#c8f0e8'), tx('beacon', '#3a8a8a:#c8f0e8'), tx('obsidian', '#1b1428')), 3, 'pickaxe', 'Projects a beam of light. Place on a pyramid.', 15],
  ['respawn_anchor', TSB(tx('obsidian', '#2a1e40'), tx('anchor', '#2a1e40:#c86aff'), tx('obsidian', '#2a1e40')), 50, 'pickaxe', 'Sets your respawn point in the Nether.', 10],
  ['lodestone', TSB(tx('stone', '#8d8d8d'), tx('lodestone', '#8d8d8d:#6a5a7a'), tx('stone', '#8d8d8d')), 3.5, 'pickaxe', 'A magnet for compasses.'],
  ['jukebox', TSB(tx('planks', '#5a3a1a', '#3a2410'), tx('jukebox', '#5a3a1a:#8a6a3a'), tx('planks', '#5a3a1a', '#3a2410')), 2, 'axe', 'Plays music discs.'],
  ['note_block', TSB(tx('planks', '#5a3a1a', '#3a2410'), tx('note', '#5a3a1a:#8a6a3a'), tx('planks', '#5a3a1a', '#3a2410')), 0.8, 'axe', 'Plays a note when powered.'],
  ['target', TSB(tx('target', '#e8d8c8'), tx('target_side', '#e8d8c8:#c84a3a'), tx('target', '#e8d8c8')), 0.5, 'hoe', 'A red-and-white target block.'],
  ['tnt', TSB(tx('tnt_top', '#c83a2a'), tx('tnt_side', '#c83a2a:#e8e0d0'), tx('tnt_top', '#c83a2a')), 0, null, 'Primed by fire or redstone. Stand back.'],
  ['redstone_lamp', { top: tx('glow', '#8a4a2a'), side: tx('lamp', '#6a3a2a'), bottom: tx('glow', '#8a4a2a') }, 0.3, 'pickaxe', 'Lights up when powered.'],
  ['observer', TSB(tx('stone', '#6a6a70'), tx('observer', '#6a6a70:#3a3a40'), tx('stone', '#6a6a70')), 3, 'pickaxe', 'Watches the block in front of it.'],
  ['piston', TSB(tx('planks', '#8a6a3a', '#5a3a1a'), tx('piston', '#8a6a3a:#9a9a9a'), tx('stone', '#8d8d8d')), 1.5, 'pickaxe', 'Pushes blocks when powered.'],
  ['sticky_piston', TSB(tx('planks', '#8a6a3a', '#5a3a1a'), tx('piston', '#8a6a3a:#6a9a4a'), tx('stone', '#8d8d8d')), 1.5, 'pickaxe', 'Pushes and pulls blocks.'],
  ['dropper', TSB(tx('stone', '#6a6a70'), tx('observer', '#6a6a70:#3a3a40'), tx('stone', '#6a6a70')), 3.5, 'pickaxe', 'Drops items when powered.'],
  ['dispenser', TSB(tx('stone', '#6a6a70'), tx('observer', '#6a6a70:#3a3a40'), tx('stone', '#6a6a70')), 3.5, 'pickaxe', 'Fires items and arrows.'],
  ['hopper', TSB(tx('metal', '#3a3a40'), tx('hopper', '#3a3a40'), tx('metal', '#3a3a40')), 3, 'pickaxe', 'Moves items into containers.'],
  ['cauldron', TSB(tx('metal', '#3a3a40'), tx('cauldron', '#3a3a40'), tx('metal', '#3a3a40')), 2, 'pickaxe', 'Holds water, lava or powder snow.'],
  ['composter', TSB(tx('planks', '#8a6a3a', '#5a3a1a'), tx('barrel', '#8a6a3a:#5a3a1a'), tx('planks', '#8a6a3a', '#5a3a1a')), 0.6, 'axe', 'Turns plants into bone meal.'],
  ['bell', TSB(tx('metal', '#c8a83a'), tx('bell', '#c8a83a:#8a6a1a'), tx('metal', '#c8a83a')), 5, 'pickaxe', 'Rings out across the village.'],
  ['campfire', TSB(tx('planks', '#5a3a1a'), tx('campfire', '#5a3a1a:#e8a03a'), tx('planks', '#5a3a1a')), 2, 'axe', 'A crackling campfire.', 12],
  ['soul_campfire', TSB(tx('planks', '#3a2a1a'), tx('campfire', '#3a2a1a:#3ac8e8'), tx('planks', '#3a2a1a')), 2, 'axe', 'A campfire burning soul fire.', 10],
  ['lantern', { top: tx('metal', '#3a3a40'), side: tx('lantern', '#e8c85a'), bottom: tx('metal', '#3a3a40') }, 0.5, 'pickaxe', 'A warm hanging light.', 14],
  ['chain', { top: tx('metal', '#3a3a40'), side: tx('chain', '#3a3a40'), bottom: tx('metal', '#3a3a40') }, 0.5, 'pickaxe', 'A hanging metal chain.']
]
for (const [name, tex, hard, tool, desc, light = 0] of functional) {
  defineBlock(name, { tex, hard, tool, desc, cat: name.includes('piston') || name.includes('observer') || name.includes('dispenser') || name.includes('dropper') || name.includes('hopper') || name.includes('lamp') || name === 'tnt' ? 'redstone' : 'decoration', light })
}

/* ---------------------------------------------------------------- farm & food blocks */
const farmBlocks = [
  ['pumpkin', TSB(tx('pumpkin_top', '#d88a2a'), tx('pumpkin_side', '#d88a2a'), tx('pumpkin_top', '#d88a2a')), 0.4, 'axe', 'A plump orange pumpkin.'],
  ['carved_pumpkin', TSF(tx('pumpkin_top', '#d88a2a'), tx('pumpkin_side', '#d88a2a'), tx('pumpkin_face', '#d88a2a:#2a1a0a'), tx('pumpkin_top', '#d88a2a')), 0.4, 'axe', 'A pumpkin with a carved face.'],
  ['jack_o_lantern', TSF(tx('pumpkin_top', '#d88a2a'), tx('pumpkin_side', '#d88a2a'), tx('pumpkin_face', '#d88a2a:#e8b83a'), tx('pumpkin_top', '#d88a2a')), 0.4, 'axe', 'A glowing jack o\'lantern.', 15],
  ['melon', TSB(tx('melon_top', '#5a9a3a'), tx('melon_side', '#5a9a3a:#3a6a2a'), tx('melon_top', '#5a9a3a')), 0.5, 'axe', 'A juicy green melon.'],
  ['hay_block', TSB(tx('hay_top', '#c8a83a'), tx('hay_side', '#c8a83a:#a5861a'), tx('hay_top', '#c8a83a')), 0.5, 'hoe', 'A bale of golden hay.'],
  ['dried_kelp_block', TSB(tx('kelp_top', '#3a6a3a'), tx('kelp_side', '#3a6a3a:#2a4a2a'), tx('kelp_top', '#3a6a3a')), 0.5, 'hoe', 'Compressed dried kelp.'],
  ['cactus', TSB(tx('cactus_top', '#3a7a2a'), tx('cactus_side', '#3a7a2a:#2a5a1a'), tx('cactus_top', '#3a7a2a')), 0.4, 'axe', 'A prickly desert cactus.'],
  ['sugar_cane', { top: tx('sugarcane', '#8ac85a'), side: tx('sugarcane', '#8ac85a'), bottom: tx('sugarcane', '#6a9a3a') }, 0.2, 'hoe', 'Tall sweet cane.'],
  ['bamboo', { top: tx('bamboo_top', '#8ac85a'), side: tx('bamboo', '#8ac85a:#5a8a3a'), bottom: tx('bamboo_top', '#8ac85a') }, 0.3, 'axe', 'Fast-growing bamboo.'],
  ['wheat', 'crop:#d8c85a:#8a9a3a', 0, null, 'Golden wheat ready to harvest.', 0, 'cross'],
  ['carrots', 'crop:#f08a2a:#3a8a3a', 0, null, 'Orange carrots poking from the soil.', 0, 'cross'],
  ['potatoes', 'crop:#a8a85a:#3a8a3a', 0, null, 'Leafy potato plants.', 0, 'cross'],
  ['beetroots', 'crop:#b83a3a:#3a8a3a', 0, null, 'Deep red beetroots.', 0, 'cross'],
  ['nether_wart', 'crop:#8a1f2a:#5a1a1a', 0, null, 'Crimson nether wart.', 0, 'cross'],
  ['cocoa', 'crop:#a86a2a:#5a3a1a', 0, null, 'A cocoa pod full of beans.', 0, 'cross']
]
for (const [name, tex, hard, tool, desc, light = 0, shape = 'cube'] of farmBlocks) {
  defineBlock(name, { tex, hard, tool, desc, light, shape, cat: 'nature', sound: 'grass' })
}

/* ---------------------------------------------------------------- plants */
const plants = [
  ['short_grass', 'grassplant:#6a9a3a:#4a7a2a', 'A tuft of wild grass.'],
  ['fern', 'grassplant:#5a8a4a:#3a6a2a', 'A feathery forest fern.'],
  ['dead_bush', 'bush:#8a6a3a:#6a4a2a', 'A dry, brittle bush.'],
  ['dandelion', 'flower:#f8d83a:#4a8a2a', 'A cheerful yellow flower.'],
  ['poppy', 'flower:#d83a2a:#4a8a2a', 'A bright red poppy.'],
  ['blue_orchid', 'flower:#3ac8e8:#4a8a2a', 'A vivid blue orchid.'],
  ['allium', 'flower:#b85ac8:#4a8a2a', 'A round purple allium.'],
  ['azure_bluet', 'flower:#e8e8d8:#4a8a2a', 'A tiny white azure bluet.'],
  ['red_tulip', 'flower:#d83a3a:#4a8a2a', 'A red tulip.'],
  ['orange_tulip', 'flower:#e88a2a:#4a8a2a', 'An orange tulip.'],
  ['white_tulip', 'flower:#e8e8e0:#4a8a2a', 'A white tulip.'],
  ['pink_tulip', 'flower:#e88ab8:#4a8a2a', 'A pink tulip.'],
  ['oxeye_daisy', 'flower:#f0f0e0:#4a8a2a', 'A white daisy with a golden centre.'],
  ['cornflower', 'flower:#3a5ac8:#4a8a2a', 'A deep blue cornflower.'],
  ['lily_of_the_valley', 'flower:#f0f0e8:#4a8a2a', 'Delicate white bell flowers.'],
  ['wither_rose', 'flower:#2a2a2a:#3a3a2a', 'A rose that withers all it touches.'],
  ['sunflower', 'flower:#f8d83a:#4a8a2a', 'A tall sunflower facing the sun.'],
  ['lilac', 'flower:#b88ac8:#4a8a2a', 'A fragrant lilac bloom.'],
  ['rose_bush', 'flower:#c82a3a:#4a8a2a', 'A bush covered in roses.'],
  ['peony', 'flower:#e89ab8:#4a8a2a', 'A big pink peony.'],
  ['torchflower', 'flower:#f0a03a:#4a8a2a', 'A flower that glows like a torch.', 12],
  ['pitcher_plant', 'flower:#5a8ac8:#4a8a2a', 'A strange blue pitcher plant.'],
  ['brown_mushroom', 'mushroom:#8a6a4a:#5a3a2a', 'A humble brown mushroom.'],
  ['red_mushroom', 'mushroom:#d83a2a:#e8e0d0', 'A spotted red mushroom.'],
  ['azalea', 'flower:#b86a9a:#4a8a2a', 'A flowering azalea bush.'],
  ['flowering_azalea', 'flower:#e87aa8:#4a8a2a', 'An azalea covered in pink blooms.'],
  ['seagrass', 'grassplant:#3a8a5a:#2a6a4a', 'Waving seagrass.'],
  ['kelp', 'kelp:#3a7a4a:#2a5a3a', 'A tall strand of kelp.'],
  ['lily_pad', 'lily:#3a8a3a:#2a6a2a', 'A flat green lily pad.'],
  ['vine', 'vine:#3a7a2a:#2a5a1a', 'Creeping jungle vines.'],
  ['glow_lichen', 'lichen:#8ac8b8', 'A faintly glowing lichen.'],
  ['sculk_vein', 'vein:#1b4a4a:#2a7a6a', 'Spreading sculk veins.'],
  ['cave_vines', 'vine:#8ab83a:#5a8a2a', 'Vines that dangle in caves.'],
  ['hanging_roots', 'roots:#8a6a4a:#5a3a2a', 'Roots hanging from cave ceilings.'],
  ['mangrove_roots', 'roots:#5a3a2a:#3a241a', 'Tangled mangrove roots.'],
  ['nether_sprouts', 'grassplant:#3a8a6a:#2a5a4a', 'Small teal sprouts.'],
  ['big_dripleaf', 'flower:#5a9a3a:#3a7a2a', 'A broad, springy leaf.'],
  ['small_dripleaf', 'flower:#5a9a3a:#3a7a2a', 'A small dripleaf.'],
  ['spore_blossom', 'flower:#e87ab8:#5a3a4a', 'A blossom that releases spores.', 6],
  ['torch', 'torch:#e8b83a', 'A simple torch that lights the dark.', 14],
  ['soul_torch', 'torch:#3ac8e8', 'A torch burning soul fire.', 10],
  ['redstone_torch', 'torch:#e83a2a', 'A torch that emits redstone power.', 7],
  ['end_rod_plant', 'rod:#e8e0d0', 'A slender rod of end light.', 14]
]
for (const [name, tex, desc, light = 0] of plants) {
  let shape = 'cross'
  if (name === 'lily_pad') shape = 'cross'
  defineBlock(name, { tex: tx(tex.split(':')[0], ...tex.split(':').slice(1)), shape, hard: 0, cat: 'nature', desc, light, sound: 'grass' })
}
defineBlock('cobweb', { tex: tx('web', '#e8e8e8'), shape: 'cross', hard: 4, cat: 'decoration', desc: 'A sticky web that slows you down.' })

/* coral fans */
const fans = [
  ['tube', '#2a6ab8'], ['brain', '#c86a8a'], ['bubble', '#a84ab8'], ['fire', '#b83a3a'], ['horn', '#d8b83a']
]
for (const [key, color] of fans) {
  defineBlock(`${key}_coral`, { tex: tx('coral_fan', color), shape: 'cross', hard: 0, cat: 'ocean', desc: `A living ${key} coral fan.` })
  defineBlock(`dead_${key}_coral`, { tex: tx('coral_fan', '#8a8a7a'), shape: 'cross', hard: 0, cat: 'ocean', desc: `A bleached ${key} coral fan.` })
}
defineBlock('sea_pickle', { tex: tx('seapickle', '#5a9a5a:#8ac86a'), hard: 0.5, cat: 'ocean', desc: 'A pickle that glows in the dark.', light: 6 })

/* liquids (placeable items exist as buckets, blocks only in world) */
defineBlock('water', { tex: tx('water', '#2a6ac8'), shape: 'liquid', hard: -1, cat: 'nature', drops: null, placeable: false, desc: 'Cool, clear water.' })
defineBlock('lava', { tex: tx('lava', '#e86a1a:#f8c83a'), shape: 'liquid', hard: -1, cat: 'nether', drops: null, placeable: false, light: 12, desc: 'Molten rock. Do not swim.' })

/* aliases used by the rest of the game */
export const AIR = 0
export const WATER = blockByName.get('water').id
export const LAVA = blockByName.get('lava').id
export const GRASS = blockByName.get('grass_block').id
export const BEDROCK = blockByName.get('bedrock').id

export const BLOCK_BY_ID = new Array(BLOCKS.length + 1).fill(null)
for (const b of BLOCKS) BLOCK_BY_ID[b.id] = b

export function getBlockDef(nameOrId) {
  if (typeof nameOrId === 'number') return BLOCK_BY_ID[nameOrId] || null
  return blockByName.get(nameOrId) || null
}

/* Block item counts for the title screen. */
export const BLOCK_COUNT = BLOCKS.filter(b => b.placeable).length

/* Expose a few handy lists for generation. */
export const ORE_BLOCKS = BLOCKS.filter(b => b.name.endsWith('_ore') && !b.name.startsWith('deepslate_') && !b.name.startsWith('nether_'))
