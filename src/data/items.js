/* ============================================================================
   ITEM REGISTRY — tools, weapons, armour, food, ingredients, buckets & eggs.
   ========================================================================== */
import { MOBS } from './mobs.js'

export const ITEMS = []
export const itemByName = new Map()

let nextId = 1
function title(name) {
  return name.split('_').map(w => (w.length <= 2 ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1))).join(' ')
}

export function defineItem(name, opts = {}) {
  const item = {
    id: nextId++,
    name,
    display: opts.display || title(name),
    cat: opts.cat || 'misc',
    icon: opts.icon || { kind: 'gem', color: '#cfcfcf' },
    stack: opts.stack ?? 64,
    rarity: opts.rarity || 'common',
    desc: opts.desc || '',
    tool: opts.tool || null,
    damage: opts.damage || 0,
    speed: opts.speed || 1,
    durability: opts.durability || 0,
    tier: opts.tier || 0,
    food: opts.food || null,
    armor: opts.armor || null,
    ranged: opts.ranged || false,
    place: opts.place || null,
    use: opts.use || null,
    spawn: opts.spawn || null,
    value: opts.value || 0
  }
  ITEMS.push(item)
  itemByName.set(name, item)
  return item
}

export const MATERIALS = {
  wooden: { color: '#b08a52', dark: '#7b5c32', level: 1, speed: 2, bonus: 0, durability: 59, rarity: 'common' },
  stone: { color: '#9a9a9a', dark: '#6a6a6a', level: 2, speed: 4, bonus: 1, durability: 131, rarity: 'common' },
  iron: { color: '#d8d8d8', dark: '#9a9a9a', level: 3, speed: 6, bonus: 2, durability: 250, rarity: 'common' },
  golden: { color: '#f8c627', dark: '#c89a10', level: 1, speed: 12, bonus: 0, durability: 32, rarity: 'rare' },
  diamond: { color: '#4fe3dc', dark: '#2a9a94', level: 4, speed: 8, bonus: 3, durability: 1561, rarity: 'rare' },
  netherite: { color: '#5a4a52', dark: '#33272d', level: 5, speed: 9, bonus: 4, durability: 2031, rarity: 'epic' }
}

const TOOL_TYPES = {
  sword: { label: 'Sword', icon: 'sword', damage: [4, 5, 6, 4, 7, 8], desc: 'A balanced blade for close combat.' },
  pickaxe: { label: 'Pickaxe', icon: 'pickaxe', damage: [2, 3, 4, 2, 5, 6], desc: 'Mines stone, ore and deepslate.' },
  axe: { label: 'Axe', icon: 'axe', damage: [7, 9, 9, 7, 9, 10], desc: 'Chops wood — and hits hard.' },
  shovel: { label: 'Shovel', icon: 'shovel', damage: [2.5, 3.5, 4.5, 2.5, 5.5, 6.5], desc: 'Digs dirt, sand, gravel and snow.' },
  hoe: { label: 'Hoe', icon: 'hoe', damage: [1, 1, 1, 1, 1, 1], desc: 'Tills soil and harvests plants.' }
}

/* 30 tools, one for every material and type. */
const matKeys = Object.keys(MATERIALS)
const typeKeys = Object.keys(TOOL_TYPES)
for (const type of typeKeys) {
  for (let mi = 0; mi < matKeys.length; mi++) {
    const mat = matKeys[mi]
    const m = MATERIALS[mat]
    const t = TOOL_TYPES[type]
    const name = `${mat === 'wooden' ? 'wooden' : mat}_${type}`
    defineItem(name, {
      display: `${mat === 'golden' ? 'Golden' : title(mat)} ${t.label}`,
      cat: 'tools',
      icon: { kind: t.icon, color: m.color, dark: m.dark },
      stack: 1,
      rarity: m.rarity,
      damage: t.damage[mi],
      speed: type === 'sword' ? 1.5 : type === 'axe' ? m.speed * 0.8 : m.speed,
      durability: type === 'sword' ? Math.round(m.durability * 1.15) : m.durability,
      tier: m.level,
      tool: type,
      desc: t.desc
    })
  }
}

/* ---------------------------------------------------------------- ranged & special tools */
defineItem('bow', {
  cat: 'tools', icon: { kind: 'bow', color: '#b08a52', dark: '#6b4a22' }, stack: 1, rarity: 'common',
  damage: 6, ranged: true, durability: 384, desc: 'Draw and loose arrows at a distance.'
})
defineItem('crossbow', {
  cat: 'tools', icon: { kind: 'crossbow', color: '#8a6a3a', dark: '#4a3018' }, stack: 1, rarity: 'common',
  damage: 11, ranged: true, durability: 465, desc: 'A powerful crossbow with a slow, heavy shot.'
})
defineItem('trident', {
  cat: 'tools', icon: { kind: 'trident', color: '#3ac8c8', dark: '#1a7a7a' }, stack: 1, rarity: 'rare',
  damage: 9, speed: 1.2, durability: 250, desc: 'A legendary weapon of the drowned. Throwable.'
})
defineItem('mace', {
  cat: 'tools', icon: { kind: 'mace', color: '#5a5a62', dark: '#2a2a30' }, stack: 1, rarity: 'epic',
  damage: 13, speed: 1, durability: 500, desc: 'A heavy weapon that slams down from above.'
})
defineItem('shield', {
  cat: 'combat', icon: { kind: 'shield', color: '#8a6a3a', dark: '#4a3018' }, stack: 1, rarity: 'common',
  damage: 0, desc: 'Raise it to block incoming attacks.'
})
defineItem('fishing_rod', {
  cat: 'tools', icon: { kind: 'rod', color: '#b08a52', dark: '#6b4a22' }, stack: 1, damage: 0, durability: 64,
  desc: 'Cast into water for fish and treasure.'
})
defineItem('shears', {
  cat: 'tools', icon: { kind: 'shears', color: '#d8d8d8', dark: '#8a8a8a' }, stack: 1, tool: 'shears', speed: 5, durability: 238,
  desc: 'Shears wool and trims leaves.'
})
defineItem('flint_and_steel', {
  cat: 'tools', icon: { kind: 'flint', color: '#8a8a8a', dark: '#5a5a5a' }, stack: 1, durability: 64,
  desc: 'Strikes sparks to light fires.'
})
defineItem('brush', {
  cat: 'tools', icon: { kind: 'brush', color: '#b08a52', dark: '#d8b83a' }, stack: 1, durability: 64,
  desc: 'Brushes away sand and gravel to reveal treasures.'
})
defineItem('spyglass', {
  cat: 'tools', icon: { kind: 'spyglass', color: '#c8a83a', dark: '#3a3a40' }, stack: 1,
  desc: 'Zoom in on distant horizons.'
})
defineItem('goat_horn', {
  cat: 'tools', icon: { kind: 'horn', color: '#c8c0b0', dark: '#8a8270' }, stack: 1,
  desc: 'A haunting horn. It carries for miles.'
})
defineItem('elytra', {
  cat: 'combat', icon: { kind: 'elytra', color: '#b8b8c8', dark: '#6a6a7a' }, stack: 1, rarity: 'epic',
  desc: 'Glide across the world on insectile wings.'
})

/* ---------------------------------------------------------------- armour */
const ARMOR_SETS = {
  leather: { color: '#a06a3a', dark: '#6a4220', def: [1, 3, 2, 1], dur: [55, 80, 75, 65], rarity: 'common' },
  chainmail: { color: '#b8b8c0', dark: '#7a7a84', def: [2, 5, 4, 1], dur: [165, 240, 225, 195], rarity: 'common' },
  iron: { color: '#d8d8d8', dark: '#8a8a8a', def: [2, 6, 5, 2], dur: [165, 240, 225, 195], rarity: 'common' },
  golden: { color: '#f8c627', dark: '#c89a10', def: [2, 5, 3, 1], dur: [77, 112, 105, 91], rarity: 'rare' },
  diamond: { color: '#4fe3dc', dark: '#2a9a94', def: [3, 8, 6, 3], dur: [363, 528, 495, 429], rarity: 'rare' },
  netherite: { color: '#5a4a52', dark: '#33272d', def: [3, 8, 6, 3], dur: [407, 592, 555, 481], rarity: 'epic' }
}
const ARMOR_PIECES = [['helmet', 0], ['chestplate', 1], ['leggings', 2], ['boots', 3]]
for (const [setName, set] of Object.entries(ARMOR_SETS)) {
  for (const [piece, idx] of ARMOR_PIECES) {
    defineItem(`${setName}_${piece}`, {
      display: `${setName === 'golden' ? 'Golden' : title(setName)} ${title(piece)}`,
      cat: 'combat', icon: { kind: 'armor', piece, color: set.color, dark: set.dark }, stack: 1,
      rarity: set.rarity, armor: { slot: piece, defense: set.def[idx], durability: set.dur[idx] },
      desc: `Protective ${setName} armour for your ${piece}.`
    })
  }
}

/* ---------------------------------------------------------------- food */
const FOODS = [
  ['apple', '#d83a3a', 4, 2.4, 'A crisp red apple.', 'food'],
  ['golden_apple', '#f8d83a', 4, 9.6, 'A shimmering golden apple. It heals and protects.', 'food'],
  ['enchanted_golden_apple', '#f8e88a', 4, 9.6, 'A legendary apple, humming with enchantment.', 'food'],
  ['bread', '#c89a4a', 5, 6, 'A warm loaf of bread.', 'food'],
  ['porkchop', '#e88a7a', 3, 1.8, 'Raw porkchop. Better cooked.', 'food'],
  ['cooked_porkchop', '#c87a4a', 8, 12.8, 'Juicy cooked porkchop.', 'food'],
  ['beef', '#c84a4a', 3, 1.8, 'Raw beef.', 'food'],
  ['steak', '#8a4a2a', 8, 12.8, 'A perfectly seared steak.', 'food'],
  ['chicken', '#e8b8a0', 2, 1.2, 'Raw chicken. Cook it first.', 'food'],
  ['cooked_chicken', '#c88a4a', 6, 7.2, 'Golden roast chicken.', 'food'],
  ['mutton', '#c86a6a', 2, 1.2, 'Raw mutton.', 'food'],
  ['cooked_mutton', '#a85a3a', 6, 9.6, 'A hearty cooked mutton chop.', 'food'],
  ['rabbit', '#c89a8a', 3, 1.8, 'Raw rabbit.', 'food'],
  ['cooked_rabbit', '#b87a4a', 5, 6, 'Tender cooked rabbit.', 'food'],
  ['cod', '#c8b89a', 2, 0.4, 'A raw cod.', 'fish'],
  ['salmon', '#e87a6a', 2, 0.4, 'A raw salmon.', 'fish'],
  ['tropical_fish', '#f8a83a', 1, 0.2, 'A colourful tropical fish.', 'fish'],
  ['pufferfish', '#d8c84a', 1, 0.2, 'A spiky pufferfish. Poisonous.', 'fish'],
  ['cooked_cod', '#d8b88a', 5, 6, 'Flaky cooked cod.', 'fish'],
  ['cooked_salmon', '#d87a5a', 6, 9.6, 'Cooked salmon, rich and savoury.', 'fish'],
  ['carrot', '#f08a2a', 3, 3.6, 'A crunchy orange carrot.', 'food'],
  ['golden_carrot', '#f8c83a', 6, 14.4, 'A golden carrot. Excellent for eyesight.', 'food'],
  ['potato', '#c8a86a', 1, 0.6, 'A raw potato.', 'food'],
  ['baked_potato', '#d8a84a', 5, 6, 'A fluffy baked potato.', 'food'],
  ['poisonous_potato', '#9a9a4a', 2, 1.2, 'A sickly green potato. Probably avoid.', 'food'],
  ['beetroot', '#a82a3a', 1, 1.2, 'A deep red beetroot.', 'food'],
  ['beetroot_soup', '#8a1a2a', 6, 7.2, 'A warming bowl of beetroot soup.', 'food'],
  ['mushroom_stew', '#b88a5a', 6, 7.2, 'A hearty mushroom stew.', 'food'],
  ['rabbit_stew', '#b87a4a', 10, 12, 'A rich rabbit stew.', 'food'],
  ['cookie', '#b87a3a', 2, 0.4, 'A sweet little cookie.', 'food'],
  ['cake', '#f0e0d0', 2, 0.4, 'A whole cake. Somehow fits in your pocket.', 'food'],
  ['pumpkin_pie', '#d88a3a', 8, 4.8, 'Spiced pumpkin pie.', 'food'],
  ['melon_slice', '#e85a4a', 2, 1.2, 'A cool, juicy melon slice.', 'food'],
  ['sweet_berries', '#c82a3a', 2, 0.4, 'Tart red berries.', 'food'],
  ['glow_berries', '#f8b83a', 2, 0.4, 'Berries that glow with soft light.', 'food'],
  ['honey_bottle', '#f8b83a', 6, 1.2, 'A bottle of sweet honey.', 'drink'],
  ['milk_bucket', '#f0f0f0', 0, 0, 'A bucket of milk. Clears all effects.', 'drink'],
  ['chorus_fruit', '#a86aa8', 4, 2.4, 'A strange fruit that teleports you.', 'food'],
  ['dried_kelp', '#3a6a3a', 1, 0.6, 'Chewy dried kelp.', 'food']
]
for (const [name, color, hunger, sat, desc, kind] of FOODS) {
  defineItem(name, {
    cat: 'food', icon: kind === 'fish' ? { kind: 'fish', color } : kind === 'drink' ? { kind: 'potion', color } : { kind: 'food', color },
    stack: ['mushroom_stew', 'beetroot_soup', 'rabbit_stew', 'honey_bottle', 'milk_bucket'].includes(name) ? 1 : 64,
    food: { hunger, saturation: sat, heal: name.includes('golden') ? 4 : name === 'apple' ? 1 : 0 },
    rarity: name.includes('enchanted') ? 'legendary' : name.includes('golden') ? 'rare' : 'common',
    desc
  })
}

/* ---------------------------------------------------------------- ingredients & utility */
const INGREDIENTS = [
  ['stick', '#b08a52', 'A simple wooden stick.'],
  ['coal', '#222226', 'A lump of black coal. Fuel for furnaces.'],
  ['charcoal', '#2e2a26', 'Charcoal made by burning wood.'],
  ['iron_ingot', '#d8d8d8', 'A refined iron ingot.'],
  ['gold_ingot', '#f8c627', 'A gleaming gold ingot.'],
  ['copper_ingot', '#c06a3c', 'A conductive copper ingot.'],
  ['netherite_ingot', '#4a3a44', 'A rare and mighty netherite ingot.'],
  ['netherite_scrap', '#5a3a30', 'A shard of ancient debris.'],
  ['iron_nugget', '#c8c8c8', 'A tiny piece of iron.'],
  ['gold_nugget', '#e8b83a', 'A tiny piece of gold.'],
  ['diamond', '#4fe3dc', 'A brilliant blue diamond.'],
  ['emerald', '#35d15a', 'A vivid green emerald.'],
  ['lapis_lazuli', '#2a56b8', 'Deep blue lapis lazuli.'],
  ['redstone', '#c62828', 'A pinch of glowing redstone dust.'],
  ['quartz', '#ece6dd', 'A shard of nether quartz.'],
  ['amethyst_shard', '#a86ae8', 'A splinter of purple amethyst.'],
  ['clay_ball', '#9aa4b0', 'A ball of soft grey clay.'],
  ['brick', '#a05a3a', 'A fired clay brick.'],
  ['flint', '#5a5a5a', 'A sharp shard of flint.'],
  ['feather', '#f0f0e8', 'A soft white feather.'],
  ['leather', '#a06a3a', 'A cured piece of leather.'],
  ['rabbit_hide', '#b88a6a', 'A soft rabbit hide.'],
  ['string', '#e0e0e0', 'A length of spider silk.'],
  ['gunpowder', '#6a6a6a', 'Dark explosive powder.'],
  ['bone', '#e8e4d0', 'A dry white bone.'],
  ['bone_meal', '#e8e4d0', 'Crushed bone, good for plants.'],
  ['slime_ball', '#6aa84a', 'A wobbly ball of slime.'],
  ['magma_cream', '#d87a2a', 'A glowing glob of magma cream.'],
  ['blaze_rod', '#f8c83a', 'A rod wreathed in flame.'],
  ['blaze_powder', '#f8a83a', 'Ground blaze rod, hot to the touch.'],
  ['ender_pearl', '#1b6a5a', 'A pearl that hums with void energy.'],
  ['eye_of_ender', '#5a9a4a', 'An ender pearl fused with blaze powder.'],
  ['ghast_tear', '#e8e8f8', 'A cold tear from a ghast.'],
  ['phantom_membrane', '#8a7a6a', 'A thin, leathery membrane.'],
  ['shulker_shell', '#a87aa8', 'A fragment of a shulker shell.'],
  ['nether_star', '#e8e8b8', 'A star forged from a wither.'],
  ['echo_shard', '#1b4a5a', 'A shard that echoes the deep dark.'],
  ['heart_of_the_sea', '#2a6a9a', 'A heart-shaped crystal from the ocean.'],
  ['nautilus_shell', '#e8d8c8', 'A spiral shell of the nautilus.'],
  ['prismarine_shard', '#5a9a8a', 'A shard of prismarine.'],
  ['prismarine_crystals', '#8ac8b8', 'Glowing prismarine crystals.'],
  ['ink_sac', '#1a1a22', 'A sac of black ink.'],
  ['glow_ink_sac', '#3ad8c8', 'A sac of glowing ink.'],
  ['sugar', '#f0f0f0', 'Sweet white sugar.'],
  ['wheat', '#d8c85a', 'Golden wheat, ready to bake.'],
  ['wheat_seeds', '#8ac85a', 'Tiny green wheat seeds.'],
  ['paper', '#f0f0e8', 'A sheet of clean paper.'],
  ['book', '#b08a52', 'A bound book of blank pages.'],
  ['experience_bottle', '#a8e83a', 'A bottle of swirling experience.'],
  ['firework_rocket', '#e8e8e8', 'A firework rocket. Point away from face.'],
  ['firework_star', '#f8d83a', 'A firework star, ready to burst.'],
  ['wind_charge', '#b8e8e8', 'A charge of compressed wind.'],
  ['heart_of_the_sea_2', '#2a6a9a', 'A second heart of the sea.', 'heart_2'],
  ['music_disc_13', '#3a3a3a', 'A mysterious music disc.', 'disc'],
  ['music_disc_cat', '#4a6a3a', 'A music disc. C418 — Cat.', 'disc'],
  ['music_disc_blocks', '#6a4a2a', 'A music disc. C418 — Blocks.', 'disc'],
  ['music_disc_chirp', '#8a3a2a', 'A music disc. C418 — Chirp.', 'disc'],
  ['music_disc_far', '#3a6a4a', 'A music disc. C418 — Far.', 'disc'],
  ['music_disc_mall', '#5a3a6a', 'A music disc. C418 — Mall.', 'disc'],
  ['music_disc_mellohi', '#6a5a3a', 'A music disc. C418 — Mellohi.', 'disc'],
  ['music_disc_stal', '#3a3a4a', 'A music disc. C418 — Stal.', 'disc'],
  ['music_disc_strad', '#c8a85a', 'A music disc. C418 — Strad.', 'disc'],
  ['music_disc_ward', '#4a6a3a', 'A music disc. C418 — Ward.', 'disc'],
  ['music_disc_11', '#5a5a5a', 'A music disc. C418 — 11.', 'disc'],
  ['music_disc_wait', '#4a5a7a', 'A music disc. C418 — Wait.', 'disc'],
  ['music_disc_pigstep', '#8a2a2a', 'A music disc. Lena Raine — Pigstep.', 'disc'],
  ['music_disc_otherside', '#2a6a5a', 'A music disc. Lena Raine — Otherside.', 'disc'],
  ['music_disc_5', '#5a3a2a', 'A music disc. Samuel Åberg — 5.', 'disc'],
  ['music_disc_relic', '#6a5a3a', 'A music disc. Aaron Cherof — Relic.', 'disc'],
  ['music_disc_creator', '#6a4a6a', 'A music disc. Lena Raine — Creator.', 'disc'],
  ['music_disc_creator_music_box', '#8a6a4a', 'A music disc. Lena Raine — Creator (Music Box).', 'disc'],
  ['music_disc_precipice', '#4a4a6a', 'A music disc. Aaron Cherof — Precipice.', 'disc']
]
for (const [name, color, desc, kind] of INGREDIENTS) {
  const iconKind = kind === 'disc' ? 'disc' : /nugget/.test(name) ? 'nugget' : /ingot|scrap/.test(name) ? 'ingot' : /shard|crystal|pearl|diamond|emerald|lapis|quartz|amethyst|star|heart|shell/.test(name) ? 'gem' : /dust|powder|meal|sugar|redstone/.test(name) ? 'dust' : /seed/.test(name) ? 'seeds' : 'misc'
  defineItem(name, {
    cat: 'ingredients', icon: { kind: iconKind, color }, desc,
    rarity: /netherite|nether_star|echo|heart|eye|elytra/.test(name) ? 'epic' : /diamond|emerald|amethyst|blaze|ghast|shulker|prismarine/.test(name) ? 'rare' : 'common'
  })
}

/* ---------------------------------------------------------------- buckets, potions & travel */
const buckets = [
  ['bucket', '#c8c8c8', 'An empty iron bucket.'],
  ['water_bucket', '#3a7ac8', 'A bucket full of water.'],
  ['lava_bucket', '#e86a1a', 'A bucket of molten lava. Handle with care.'],
  ['powder_snow_bucket', '#eef5f7', 'A bucket of powder snow.'],
  ['cod_bucket', '#c8b89a', 'A bucket with a cod in it.'],
  ['salmon_bucket', '#e87a6a', 'A bucket with a salmon in it.'],
  ['tropical_fish_bucket', '#f8a83a', 'A bucket with a tropical fish.'],
  ['pufferfish_bucket', '#d8c84a', 'A bucket with a pufferfish.'],
  ['axolotl_bucket', '#e8a8c8', 'A bucket with an axolotl.'],
  ['tadpole_bucket', '#6a8a4a', 'A bucket with a tadpole.']
]
for (const [name, color, desc] of buckets) {
  defineItem(name, { cat: 'tools', icon: { kind: 'bucket', color }, stack: 1, desc })
}
defineItem('water_bucket_place', { display: 'Water Bucket', cat: 'tools', icon: { kind: 'bucket', color: '#3a7ac8' }, stack: 1, desc: 'Places a block of water.', place: 'water' })

const potions = [
  ['potion', '#c84ab8', 'A mysterious potion.'],
  ['splash_potion', '#c84ab8', 'A potion that splashes on impact.'],
  ['lingering_potion', '#c84ab8', 'A potion that leaves a cloud behind.'],
  ['potion_of_healing', '#e84a6a', 'Restores health instantly.'],
  ['potion_of_swiftness', '#4ae8c8', 'Grants a burst of speed.'],
  ['potion_of_strength', '#c82a2a', 'Increases attack damage.'],
  ['potion_of_night_vision', '#3a5ac8', 'See clearly in the dark.'],
  ['potion_of_fire_resistance', '#e8a03a', 'Protects against fire and lava.'],
  ['potion_of_water_breathing', '#3a8ae8', 'Breathe underwater.'],
  ['potion_of_invisibility', '#c8c8d8', 'Become unseen.']
]
for (const [name, color, desc] of potions) {
  defineItem(name, { cat: 'ingredients', icon: { kind: 'potion', color }, stack: 1, rarity: 'rare', desc })
}

defineItem('compass', { cat: 'tools', icon: { kind: 'compass', color: '#c8c8c8' }, stack: 1, desc: 'Points toward your spawn point.' })
defineItem('recovery_compass', { cat: 'tools', icon: { kind: 'compass', color: '#3a8a8a' }, stack: 1, rarity: 'rare', desc: 'Points to where you last died.' })
defineItem('clock', { cat: 'tools', icon: { kind: 'clock', color: '#e8c85a' }, stack: 1, desc: 'Shows the time of day.' })
defineItem('map', { cat: 'tools', icon: { kind: 'map', color: '#d8d0b0' }, stack: 1, desc: 'A map of the surrounding land.' })
defineItem('empty_map', { cat: 'tools', icon: { kind: 'map', color: '#e8e0c8' }, stack: 1, desc: 'A blank map waiting to be filled.' })
defineItem('spyglass_zoom', { display: 'Spyglass Lens', cat: 'tools', icon: { kind: 'gem', color: '#8ae8e8' }, stack: 1, desc: 'A polished lens.' })
defineItem('saddle', { cat: 'tools', icon: { kind: 'saddle', color: '#a06a3a' }, stack: 1, desc: 'Saddle a horse, pig or strider.' })
defineItem('name_tag', { cat: 'tools', icon: { kind: 'tag', color: '#e8d8b0' }, stack: 1, desc: 'Give a mob a custom name.' })
defineItem('lead', { cat: 'tools', icon: { kind: 'lead', color: '#c8a86a' }, stack: 1, desc: 'Lead a friendly mob on a leash.' })
defineItem('totem_of_undying', { cat: 'combat', icon: { kind: 'totem', color: '#f8d83a' }, stack: 1, rarity: 'legendary', desc: 'Cheats death once when held.' })
defineItem('end_crystal', { cat: 'combat', icon: { kind: 'gem', color: '#e87ae8' }, stack: 64, rarity: 'epic', desc: 'A crystal of the End. Heals the Ender Dragon.' })
defineItem('arrow', { cat: 'combat', icon: { kind: 'arrow', color: '#c8a86a' }, stack: 64, desc: 'A sharp arrow.' })
defineItem('spectral_arrow', { cat: 'combat', icon: { kind: 'arrow', color: '#e8c83a' }, stack: 64, desc: 'An arrow that reveals invisible foes.' })
defineItem('tipped_arrow', { cat: 'combat', icon: { kind: 'arrow', color: '#8ac84a' }, stack: 64, desc: 'An arrow coated in potion.' })
defineItem('fire_charge', { cat: 'combat', icon: { kind: 'dust', color: '#e86a1a' }, stack: 64, desc: 'A ball of fire, ready to throw.' })
defineItem('snowball', { cat: 'combat', icon: { kind: 'gem', color: '#f0f8f8' }, stack: 16, desc: 'A packed snowball.' })
defineItem('egg', { cat: 'combat', icon: { kind: 'egg', color: '#f0ead8', spots: '#d8c8a8' }, stack: 16, desc: 'A chicken egg. Throwable.' })
defineItem('ender_eye_use', { display: 'Eye of Ender', cat: 'tools', icon: { kind: 'gem', color: '#5a9a4a' }, stack: 64, rarity: 'rare', desc: 'Points toward the nearest stronghold.' })

/* ---------------------------------------------------------------- spawn eggs */
for (const mob of MOBS) {
  defineItem(`${mob.id}_spawn_egg`, {
    display: `${mob.name} Spawn Egg`,
    cat: 'eggs',
    icon: { kind: 'egg', color: mob.egg[0], spots: mob.egg[1] },
    stack: 64,
    rarity: mob.boss ? 'legendary' : mob.hostile ? 'rare' : 'common',
    desc: `Spawn a ${mob.name}. ${mob.desc}`,
    spawn: mob.id
  })
}

export const ITEM_BY_ID = new Array(ITEMS.length + 1).fill(null)
for (const i of ITEMS) ITEM_BY_ID[i.id] = i

export function getItem(name) { return itemByName.get(name) || null }
export const TOOL_COUNT = ITEMS.filter(i => i.cat === 'tools' && i.tool).length
export const MOB_EGG_COUNT = ITEMS.filter(i => i.cat === 'eggs').length
