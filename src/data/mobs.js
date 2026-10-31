/* ============================================================================
   MOB REGISTRY — every mob in Minecraft, with colours, stats and behaviour.
   ========================================================================== */

export const MOBS = []

let _id = 0
function mob(id, opts) {
  const m = {
    n: ++_id,
    id,
    name: opts.name || id.split('_').map(w => w[0].toUpperCase() + w.slice(1)).join(' '),
    category: opts.category || 'passive',
    hostile: opts.category === 'hostile' || opts.category === 'boss',
    boss: opts.category === 'boss',
    archetype: opts.archetype || 'quadruped',
    hp: opts.hp ?? 10,
    damage: opts.damage ?? 0,
    speed: opts.speed ?? 1.4,
    scale: opts.scale ?? 1,
    width: opts.width ?? 0.9,
    height: opts.height ?? 1.5,
    colors: Object.assign({ body: '#a06a3a', head: '#a06a3a', limb: '#7a4a28', accent: '#d8c8a8', eye: '#1a1a1a' }, opts.colors),
    flags: Object.assign({ horns: false, wings: false, tail: false, ears: false, nose: false, hat: false, shell: false, spikes: false, rods: false, tentacles: false, crown: false, saddle: false, robe: false, snout: false, fins: false, mane: false, armor: false }, opts.flags),
    egg: opts.egg || ['#c8b89a', '#8a6a4a'],
    desc: opts.desc || '',
    biomes: opts.biomes || ['plains'],
    time: opts.time || 'any',
    group: opts.group || 2,
    drops: opts.drops || [],
    ranged: opts.ranged || false,
    flying: opts.flying || false,
    aquatic: opts.aquatic || false,
    tameable: opts.tameable || false,
    light: opts.light || 0,
    sound: opts.sound || 'mob'
  }
  MOBS.push(m)
  return m
}

/* ---------------------------------------------------------------- passive & neutral */
mob('allay', {
  name: 'Allay', category: 'passive', archetype: 'allay', hp: 20, speed: 1.8, flying: true, width: 0.6, height: 0.9,
  colors: { body: '#3a9ad8', head: '#5ac8f0', limb: '#2a6aa8', accent: '#c8f0ff', eye: '#1a2a3a' },
  flags: { wings: true }, egg: ['#5ac8f0', '#2a6aa8'], time: 'any', biomes: ['dark', 'forest'],
  desc: 'A tiny blue helper that fetches items for those it trusts.', drops: []
})
mob('armadillo', {
  name: 'Armadillo', category: 'passive', archetype: 'armadillo', hp: 12, speed: 0.9, width: 0.9, height: 0.8,
  colors: { body: '#8a6a4a', head: '#9a7a5a', limb: '#6a4a32', accent: '#b89a72', eye: '#201810' },
  flags: { shell: true, ears: true }, egg: ['#a88a62', '#6a4a32'], biomes: ['savanna', 'badlands'],
  desc: 'A cautious armadillo that curls into an armoured ball when scared.', drops: ['armadillo_scute']
})
mob('axolotl', {
  name: 'Axolotl', category: 'passive', archetype: 'axolotl', hp: 14, speed: 1.2, width: 0.7, height: 0.55, aquatic: true,
  colors: { body: '#e8a8c8', head: '#f0b8d8', limb: '#d888a8', accent: '#c86a8a', eye: '#201018' },
  flags: { fins: true, tail: true, ears: true }, egg: ['#f0b8d8', '#c86a8a'], biomes: ['caves'],
  desc: 'A grinning amphibian that plays dead when hurt.', drops: []
})
mob('bat', {
  name: 'Bat', category: 'passive', archetype: 'bat', hp: 6, speed: 1.8, flying: true, width: 0.5, height: 0.5,
  colors: { body: '#4a3a32', head: '#5a463a', limb: '#2a1f1a', accent: '#8a6a5a', eye: '#d8c84a' },
  flags: { wings: true, ears: true }, egg: ['#5a463a', '#2a1f1a'], biomes: ['caves', 'forest'], time: 'night',
  desc: 'A restless cave dweller that squeaks through the dark.', drops: []
})
mob('bee', {
  name: 'Bee', category: 'neutral', archetype: 'bee', hp: 10, speed: 1.8, flying: true, width: 0.6, height: 0.55,
  colors: { body: '#e8b83a', head: '#f8c84a', limb: '#2a2a1a', accent: '#1a1a10', eye: '#101008' },
  flags: { wings: true, tail: true }, egg: ['#f8c84a', '#2a2a1a'], biomes: ['plains', 'forest', 'cherry', 'jungle'],
  desc: 'A busy pollinator. Disturb its hive and it will sting.', drops: []
})
mob('camel', {
  name: 'Camel', category: 'passive', archetype: 'camel', hp: 32, speed: 1.6, width: 1.4, height: 2.5,
  colors: { body: '#d8b87a', head: '#e8c88a', limb: '#b89a5a', accent: '#8a6a3a', eye: '#201810' },
  flags: { ears: true, tail: true, saddle: true }, egg: ['#e8c88a', '#b89a5a'], biomes: ['desert'],
  desc: 'A tall desert mount that can carry two riders.', drops: []
})
mob('cat', {
  name: 'Cat', category: 'passive', archetype: 'cat', hp: 10, speed: 1.7, width: 0.6, height: 0.8,
  colors: { body: '#c8a86a', head: '#d8b87a', limb: '#a88a4a', accent: '#f0e0c8', eye: '#5ac84a' },
  flags: { ears: true, tail: true }, egg: ['#d8b87a', '#a88a4a'], biomes: ['village'],
  desc: 'A independent feline that scares off creepers and phantoms.', drops: [], tameable: true
})
mob('chicken', {
  name: 'Chicken', category: 'passive', archetype: 'bird', hp: 4, speed: 1.3, width: 0.5, height: 0.8,
  colors: { body: '#f0f0e8', head: '#f8f8f0', limb: '#e8a83a', accent: '#d83a2a', eye: '#1a1a1a' },
  flags: { wings: true, tail: true }, egg: ['#f8f8f0', '#d83a2a'], biomes: ['plains', 'forest', 'village'],
  desc: 'Flaps about, lays eggs, and fears everything.', drops: ['chicken', 'feather']
})
mob('cod', {
  name: 'Cod', category: 'passive', archetype: 'fish', hp: 3, speed: 1.4, width: 0.5, height: 0.4, aquatic: true,
  colors: { body: '#c8b89a', head: '#d8c8aa', limb: '#a8987a', accent: '#e8d8b8', eye: '#101010' },
  flags: { fins: true, tail: true }, egg: ['#d8c8aa', '#a8987a'], biomes: ['ocean'],
  desc: 'A small silver fish that schools in the shallows.', drops: ['cod']
})
mob('copper_golem', {
  name: 'Copper Golem', category: 'passive', archetype: 'copper_golem', hp: 12, speed: 1.2, width: 0.7, height: 1.1,
  colors: { body: '#c06a3c', head: '#d87a4a', limb: '#8a4a2a', accent: '#4f9a84', eye: '#f8e8a0' },
  flags: { ears: true }, egg: ['#d87a4a', '#4f9a84'], biomes: ['village'],
  desc: 'A little copper automaton that sorts buttons and loves lightning.', drops: ['copper_ingot']
})
mob('cow', {
  name: 'Cow', category: 'passive', archetype: 'quadruped', hp: 10, speed: 1.1, width: 0.9, height: 1.4,
  colors: { body: '#4a3a32', head: '#5a463a', limb: '#3a2a22', accent: '#f0f0e8', eye: '#1a1a1a' },
  flags: { horns: true, ears: true, tail: true, snout: true }, egg: ['#5a463a', '#f0f0e8'], biomes: ['plains', 'forest', 'village'],
  desc: 'A placid grazer. Right-click with a bucket for milk.', drops: ['beef', 'leather']
})
mob('dolphin', {
  name: 'Dolphin', category: 'neutral', archetype: 'dolphin', hp: 10, speed: 2.4, width: 0.9, height: 0.6, aquatic: true,
  colors: { body: '#5a7a9a', head: '#6a8aaa', limb: '#4a6a8a', accent: '#d8e8f0', eye: '#0a1a2a' },
  flags: { fins: true, tail: true, nose: true }, egg: ['#6a8aaa', '#d8e8f0'], biomes: ['ocean'],
  desc: 'A playful swimmer that leads sailors to treasure.', drops: []
})
mob('donkey', {
  name: 'Donkey', category: 'passive', archetype: 'horse', hp: 22, speed: 1.5, width: 1, height: 1.9,
  colors: { body: '#8a7a6a', head: '#9a8a7a', limb: '#6a5a4a', accent: '#d8c8b8', eye: '#201810' },
  flags: { ears: true, tail: true, mane: true }, egg: ['#9a8a7a', '#6a5a4a'], biomes: ['plains', 'savanna'],
  desc: 'A stubborn pack animal that can carry a chest.', drops: ['leather'], tameable: true
})
mob('fox', {
  name: 'Fox', category: 'passive', archetype: 'canine', hp: 10, speed: 1.9, width: 0.7, height: 0.9,
  colors: { body: '#d87a3a', head: '#e88a4a', limb: '#8a4a2a', accent: '#f0f0e8', eye: '#101010' },
  flags: { ears: true, tail: true, snout: true }, egg: ['#e88a4a', '#f0f0e8'], biomes: ['taiga', 'forest', 'snow'],
  desc: 'A clever nocturnal hunter that pounces on chickens.', drops: []
})
mob('frog', {
  name: 'Frog', category: 'passive', archetype: 'frog', hp: 10, speed: 1.2, width: 0.6, height: 0.5,
  colors: { body: '#d87a3a', head: '#e88a4a', limb: '#b85a2a', accent: '#f0e0c8', eye: '#101008' },
  flags: { ears: true }, egg: ['#e88a4a', '#b85a2a'], biomes: ['swamp'],
  desc: 'A hopping amphibian that eats magma cubes whole.', drops: []
})
mob('glow_squid', {
  name: 'Glow Squid', category: 'passive', archetype: 'squid', hp: 10, speed: 1, width: 0.9, height: 0.9, aquatic: true,
  colors: { body: '#2a8a8a', head: '#3ab8b8', limb: '#1a6a6a', accent: '#8ae8e8', eye: '#0a2a2a' },
  flags: { tentacles: true }, egg: ['#3ab8b8', '#1a6a6a'], biomes: ['caves'], light: 1,
  desc: 'A squid that glows softly in the deepest water.', drops: ['glow_ink_sac']
})
mob('goat', {
  name: 'Goat', category: 'neutral', archetype: 'goat', hp: 10, speed: 1.5, width: 0.8, height: 1.3,
  colors: { body: '#b8b0a0', head: '#c8c0b0', limb: '#8a8270', accent: '#6a6250', eye: '#201810' },
  flags: { horns: true, ears: true, tail: true, nose: true }, egg: ['#c8c0b0', '#6a6250'], biomes: ['mountains'],
  desc: 'A sure-footed climber with a headbutt like a battering ram.', drops: ['goat_horn']
})
mob('happy_ghast', {
  name: 'Happy Ghast', category: 'passive', archetype: 'happy_ghast', hp: 20, speed: 1.1, flying: true, width: 2.2, height: 2.2,
  colors: { body: '#f0f0e8', head: '#f8f8f2', limb: '#d8d8d0', accent: '#a8c8d8', eye: '#3a3a3a' },
  flags: { tentacles: true }, egg: ['#f8f8f2', '#a8c8d8'], biomes: ['mountains', 'plains'], light: 1,
  desc: 'A gentle floating giant. Kids love it, and so do fireworks.', drops: []
})
mob('horse', {
  name: 'Horse', category: 'passive', archetype: 'horse', hp: 24, speed: 1.9, width: 1.1, height: 2,
  colors: { body: '#8a5a32', head: '#9a6a3a', limb: '#6a4222', accent: '#3a2410', eye: '#201810' },
  flags: { ears: true, tail: true, mane: true, saddle: true }, egg: ['#9a6a3a', '#3a2410'], biomes: ['plains', 'savanna'],
  desc: 'A swift steed. Saddle it, then ride across the world.', drops: ['leather'], tameable: true
})
mob('iron_golem', {
  name: 'Iron Golem', category: 'neutral', archetype: 'golem', hp: 100, speed: 1, width: 1.4, height: 2.7,
  colors: { body: '#c8c8c0', head: '#d8d8d0', limb: '#a8a8a0', accent: '#e8e8e0', eye: '#1a1a1a' },
  flags: { nose: true }, egg: ['#d8d8d0', '#a8a8a0'], biomes: ['village'],
  desc: 'A hulking guardian of villages. Do not make it angry.', drops: ['iron_ingot']
})
mob('llama', {
  name: 'Llama', category: 'neutral', archetype: 'llama', hp: 20, speed: 1.3, width: 1, height: 1.9,
  colors: { body: '#e8d8b8', head: '#f0e0c8', limb: '#c8b898', accent: '#8a6a4a', eye: '#201810' },
  flags: { ears: true, tail: true, nose: true, saddle: true }, egg: ['#f0e0c8', '#8a6a4a'], biomes: ['mountains', 'savanna'],
  desc: 'A woolly pack animal that spits when insulted.', drops: ['leather'], tameable: true
})
mob('mooshroom', {
  name: 'Mooshroom', category: 'passive', archetype: 'quadruped', hp: 10, speed: 1.1, width: 1, height: 1.5,
  colors: { body: '#b83a3a', head: '#c84a4a', limb: '#8a2a2a', accent: '#f0f0e8', eye: '#1a1a1a' },
  flags: { horns: true, ears: true, tail: true, snout: true }, egg: ['#c84a4a', '#f0f0e8'], biomes: ['mushroom'],
  desc: 'A cow covered in mushrooms. Suspiciously delicious.', drops: ['beef', 'leather']
})
mob('mule', {
  name: 'Mule', category: 'passive', archetype: 'horse', hp: 20, speed: 1.5, width: 1, height: 1.8,
  colors: { body: '#6a5a4a', head: '#7a6a5a', limb: '#4a3a2a', accent: '#2a2018', eye: '#201810' },
  flags: { ears: true, tail: true, mane: true, saddle: true }, egg: ['#7a6a5a', '#4a3a2a'], biomes: ['plains'],
  desc: 'A sturdy hybrid that carries a rider and a chest.', drops: ['leather'], tameable: true
})
mob('ocelot', {
  name: 'Ocelot', category: 'passive', archetype: 'cat', hp: 10, speed: 1.8, width: 0.6, height: 0.8,
  colors: { body: '#d8b85a', head: '#e8c86a', limb: '#b8983a', accent: '#f0e8c8', eye: '#3a7a2a' },
  flags: { ears: true, tail: true }, egg: ['#e8c86a', '#b8983a'], biomes: ['jungle'],
  desc: 'A wild jungle cat. Toss it a fish and it may trust you.', drops: [], tameable: true
})
mob('panda', {
  name: 'Panda', category: 'passive', archetype: 'panda', hp: 20, speed: 0.8, width: 1.1, height: 1.5,
  colors: { body: '#f0f0e8', head: '#f8f8f0', limb: '#2a2a2a', accent: '#1a1a1a', eye: '#101010' },
  flags: { ears: true, tail: true, nose: true }, egg: ['#f8f8f0', '#2a2a2a'], biomes: ['jungle'],
  desc: 'A bamboo-munching bear with an alarming amount of personality.', drops: ['bamboo']
})
mob('parrot', {
  name: 'Parrot', category: 'passive', archetype: 'parrot', hp: 6, speed: 1.8, width: 0.5, height: 0.8,
  colors: { body: '#d83a3a', head: '#e84a4a', limb: '#3a8ad8', accent: '#f8d83a', eye: '#101010' },
  flags: { wings: true, tail: true, nose: true }, egg: ['#e84a4a', '#3a8ad8'], biomes: ['jungle'],
  desc: 'A brightly coloured bird that mimics nearby sounds.', drops: ['feather'], tameable: true
})
mob('pig', {
  name: 'Pig', category: 'passive', archetype: 'quadruped', hp: 10, speed: 1.2, width: 0.9, height: 1.2,
  colors: { body: '#e8a8a8', head: '#f0b8b8', limb: '#c88888', accent: '#d88888', eye: '#1a1a1a' },
  flags: { ears: true, tail: true, snout: true }, egg: ['#f0b8b8', '#d88888'], biomes: ['plains', 'village'],
  desc: 'A snuffling oinker. Saddle it and steer with a carrot on a stick.', drops: ['porkchop']
})
mob('polar_bear', {
  name: 'Polar Bear', category: 'neutral', archetype: 'quadruped', hp: 30, speed: 1.2, width: 1.2, height: 1.7,
  colors: { body: '#f0f4f4', head: '#f8f8f8', limb: '#d8e0e0', accent: '#c8d0d0', eye: '#101010' },
  flags: { ears: true, tail: true, snout: true }, egg: ['#f8f8f8', '#d8e0e0'], biomes: ['snow', 'ocean'],
  desc: 'A powerful arctic hunter. Stay away from its cubs.', drops: ['cod']
})
mob('pufferfish', {
  name: 'Pufferfish', category: 'passive', archetype: 'pufferfish', hp: 3, speed: 0.8, width: 0.5, height: 0.5, aquatic: true,
  colors: { body: '#e8c83a', head: '#f0d84a', limb: '#c8a82a', accent: '#f0f0e0', eye: '#101010' },
  flags: { fins: true, tail: true, spikes: true }, egg: ['#f0d84a', '#c8a82a'], biomes: ['ocean'],
  desc: 'A spiky fish that puffs up when threatened.', drops: ['pufferfish']
})
mob('rabbit', {
  name: 'Rabbit', category: 'passive', archetype: 'rabbit', hp: 3, speed: 2, width: 0.5, height: 0.6,
  colors: { body: '#b89a7a', head: '#c8aa8a', limb: '#987a5a', accent: '#f0e8d8', eye: '#101010' },
  flags: { ears: true, tail: true }, egg: ['#c8aa8a', '#987a5a'], biomes: ['plains', 'desert', 'snow', 'forest'],
  desc: 'A twitchy hopper that is always one step from danger.', drops: ['rabbit', 'rabbit_hide']
})
mob('salmon', {
  name: 'Salmon', category: 'passive', archetype: 'fish', hp: 3, speed: 1.5, width: 0.6, height: 0.4, aquatic: true,
  colors: { body: '#c85a4a', head: '#d86a5a', limb: '#a84a3a', accent: '#e8a89a', eye: '#101010' },
  flags: { fins: true, tail: true }, egg: ['#d86a5a', '#a84a3a'], biomes: ['ocean'],
  desc: 'A pink fish that fights its way upstream.', drops: ['salmon']
})
mob('sheep', {
  name: 'Sheep', category: 'passive', archetype: 'quadruped', hp: 8, speed: 1.2, width: 0.9, height: 1.3,
  colors: { body: '#f0f0e8', head: '#e8d8c8', limb: '#d8c8b8', accent: '#f8f8f2', eye: '#1a1a1a' },
  flags: { ears: true, tail: true }, egg: ['#f8f8f2', '#e8d8c8'], biomes: ['plains', 'forest', 'mountains', 'village'],
  desc: 'A woolly cloud with legs. Shear it for wool.', drops: ['mutton', 'white_wool']
})
mob('sniffer', {
  name: 'Sniffer', category: 'passive', archetype: 'sniffer', hp: 14, speed: 0.9, width: 1.9, height: 1.8,
  colors: { body: '#8a5a3a', head: '#9a6a4a', limb: '#6a422a', accent: '#5a3a2a', eye: '#201810' },
  flags: { ears: true, tail: true, nose: true }, egg: ['#9a6a4a', '#5a3a2a'], biomes: ['plains', 'forest'],
  desc: 'An ancient giant that sniffs out seeds from a lost world.', drops: ['sniffer_egg']
})
mob('snow_golem', {
  name: 'Snow Golem', category: 'passive', archetype: 'snow_golem', hp: 4, speed: 1.2, width: 0.7, height: 1.8,
  colors: { body: '#f4f8f8', head: '#f8fafb', limb: '#e0e8ea', accent: '#e88a2a', eye: '#101010' },
  flags: { nose: true }, egg: ['#f8fafb', '#e88a2a'], biomes: ['snow'],
  desc: 'A cheerful snowman that hurls snowballs at monsters.', drops: ['snowball'], ranged: true
})
mob('squid', {
  name: 'Squid', category: 'passive', archetype: 'squid', hp: 10, speed: 1, width: 0.9, height: 0.9, aquatic: true,
  colors: { body: '#3a4a6a', head: '#4a5a7a', limb: '#2a3a5a', accent: '#8a9ab8', eye: '#0a0a1a' },
  flags: { tentacles: true }, egg: ['#4a5a7a', '#2a3a5a'], biomes: ['ocean'],
  desc: 'A soft-bodied swimmer that squirts ink when startled.', drops: ['ink_sac']
})
mob('strider', {
  name: 'Strider', category: 'passive', archetype: 'strider', hp: 20, speed: 1.2, width: 1.1, height: 1.6,
  colors: { body: '#c85a6a', head: '#d86a7a', limb: '#a84a5a', accent: '#f0a8b8', eye: '#f8f0f0' },
  flags: { tail: true, saddle: true, ears: true }, egg: ['#d86a7a', '#f0a8b8'], biomes: ['nether'],
  desc: 'A lava-walking mount with a face full of tentacles.', drops: ['string'], tameable: true
})
mob('tadpole', {
  name: 'Tadpole', category: 'passive', archetype: 'tadpole', hp: 6, speed: 1.2, width: 0.4, height: 0.3, aquatic: true,
  colors: { body: '#6a5a3a', head: '#7a6a4a', limb: '#5a4a2a', accent: '#8a7a5a', eye: '#101010' },
  flags: { tail: true }, egg: ['#7a6a4a', '#5a4a2a'], biomes: ['swamp'],
  desc: 'A wriggling little tadpole. One day it will be a frog.', drops: []
})
mob('trader_llama', {
  name: 'Trader Llama', category: 'neutral', archetype: 'llama', hp: 20, speed: 1.3, width: 1, height: 1.9,
  colors: { body: '#c8b8a0', head: '#d8c8b0', limb: '#a89880', accent: '#3a8ad8', eye: '#201810' },
  flags: { ears: true, tail: true, nose: true, saddle: true }, egg: ['#d8c8b0', '#3a8ad8'], biomes: ['plains'],
  desc: 'A decorated llama that guards a wandering trader.', drops: ['leather']
})
mob('tropical_fish', {
  name: 'Tropical Fish', category: 'passive', archetype: 'fish', hp: 3, speed: 1.4, width: 0.5, height: 0.4, aquatic: true,
  colors: { body: '#f8a83a', head: '#f8c84a', limb: '#d8882a', accent: '#3ac8e8', eye: '#101010' },
  flags: { fins: true, tail: true }, egg: ['#f8c84a', '#3ac8e8'], biomes: ['ocean'],
  desc: 'A riot of colour in the warm shallows.', drops: ['tropical_fish']
})
mob('turtle', {
  name: 'Turtle', category: 'passive', archetype: 'turtle', hp: 30, speed: 0.8, width: 1.1, height: 0.5, aquatic: true,
  colors: { body: '#5a8a4a', head: '#6a9a5a', limb: '#4a7a3a', accent: '#8ab86a', eye: '#101010' },
  flags: { shell: true, fins: true, tail: true }, egg: ['#6a9a5a', '#4a7a3a'], biomes: ['ocean', 'beach'],
  desc: 'An ancient mariner that returns to the beach to lay eggs.', drops: ['seagrass']
})
mob('villager', {
  name: 'Villager', category: 'passive', archetype: 'villager', hp: 20, speed: 1.2, width: 0.6, height: 1.9,
  colors: { body: '#8a6a4a', head: '#c8a07a', limb: '#6a4a2a', accent: '#4a8a4a', eye: '#1a1a1a' },
  flags: { nose: true, robe: true }, egg: ['#c8a07a', '#4a8a4a'], biomes: ['village'],
  desc: 'A tradesperson of the village. They love emeralds.', drops: []
})
mob('wandering_trader', {
  name: 'Wandering Trader', category: 'passive', archetype: 'villager', hp: 20, speed: 1.2, width: 0.6, height: 1.9,
  colors: { body: '#3a6a8a', head: '#c8a07a', limb: '#2a4a6a', accent: '#5a9ac8', eye: '#1a1a1a' },
  flags: { nose: true, robe: true }, egg: ['#c8a07a', '#3a6a8a'], biomes: ['plains'],
  desc: 'A mysterious merchant with rare goods and a llama or two.', drops: []
})
mob('wolf', {
  name: 'Wolf', category: 'neutral', archetype: 'canine', hp: 8, speed: 2, width: 0.6, height: 0.9,
  colors: { body: '#c8c8c0', head: '#d8d8d0', limb: '#a8a8a0', accent: '#e8e8e0', eye: '#3a6ac8' },
  flags: { ears: true, tail: true, snout: true }, egg: ['#d8d8d0', '#a8a8a0'], biomes: ['forest', 'taiga', 'snow'],
  desc: 'A loyal companion once tamed. Feed it bones to win its trust.', drops: [], tameable: true
})

/* ---------------------------------------------------------------- hostile */
mob('blaze', {
  name: 'Blaze', category: 'hostile', archetype: 'blaze', hp: 20, damage: 6, speed: 1.2, flying: true, width: 0.7, height: 1.8, ranged: true,
  colors: { body: '#e8a02a', head: '#f8c83a', limb: '#c8781a', accent: '#f8e85a', eye: '#f8f8e8' },
  flags: { rods: true }, egg: ['#f8c83a', '#c8781a'], biomes: ['nether'], light: 8,
  desc: 'A floating pillar of fire that hurls fireballs.', drops: ['blaze_rod']
})
mob('bogged', {
  name: 'Bogged', category: 'hostile', archetype: 'skeleton', hp: 16, damage: 4, speed: 1.3, width: 0.6, height: 1.9, ranged: true,
  colors: { body: '#8a9a6a', head: '#9aaa7a', limb: '#6a7a4a', accent: '#5a6a3a', eye: '#d8e8a8' },
  flags: { ears: false }, egg: ['#9aaa7a', '#5a6a3a'], biomes: ['swamp', 'caves'],
  desc: 'A moss-covered skeleton that fires poisoned arrows.', drops: ['bone', 'arrow']
})
mob('breeze', {
  name: 'Breeze', category: 'hostile', archetype: 'breeze', hp: 30, damage: 4, speed: 1.8, flying: true, width: 0.8, height: 1.6, ranged: true,
  colors: { body: '#7a9ac8', head: '#8aaad8', limb: '#5a7aa8', accent: '#d8e8f8', eye: '#f8f8ff' },
  flags: { rods: true }, egg: ['#8aaad8', '#5a7aa8'], biomes: ['caves'], light: 2,
  desc: 'A whirlwind of blue wind that fires gusts of air.', drops: ['wind_charge']
})
mob('cave_spider', {
  name: 'Cave Spider', category: 'hostile', archetype: 'spider', hp: 12, damage: 2, speed: 1.7, width: 0.7, height: 0.5,
  colors: { body: '#2a4a3a', head: '#3a5a4a', limb: '#1a3a2a', accent: '#c82a2a', eye: '#e83a3a' },
  flags: {}, egg: ['#3a5a4a', '#c82a2a'], biomes: ['caves'],
  desc: 'A smaller, venomous spider that haunts abandoned mineshafts.', drops: ['string', 'spider_eye']
})
mob('creeper', {
  name: 'Creeper', category: 'hostile', archetype: 'creeper', hp: 20, damage: 22, speed: 1.3, width: 0.7, height: 1.7,
  colors: { body: '#5aa84a', head: '#66b84a', limb: '#4a8a3a', accent: '#2a4a2a', eye: '#101010' },
  flags: {}, egg: ['#66b84a', '#2a4a2a'], biomes: ['plains', 'forest', 'caves'],
  desc: 'A silent green stalker. It hisses, then it explodes.', drops: ['gunpowder']
})
mob('creaking', {
  name: 'Creaking', category: 'hostile', archetype: 'creaking', hp: 60, damage: 8, speed: 1.1, width: 1, height: 3,
  colors: { body: '#4a3a2a', head: '#5a4a32', limb: '#2a2018', accent: '#8a6a3a', eye: '#f8a83a' },
  flags: { horns: true, spikes: true }, egg: ['#5a4a32', '#f8a83a'], biomes: ['dark'], time: 'night',
  desc: 'A cursed tree-creature that only stops when you find its heart.', drops: ['resin_clump']
})
mob('drowned', {
  name: 'Drowned', category: 'hostile', archetype: 'zombie', hp: 20, damage: 3, speed: 1.2, width: 0.6, height: 1.9, aquatic: true,
  colors: { body: '#3a7a6a', head: '#4a8a7a', limb: '#2a5a4a', accent: '#5a9a8a', eye: '#2a2a1a' },
  flags: {}, egg: ['#4a8a7a', '#2a5a4a'], biomes: ['ocean'],
  desc: 'A waterlogged zombie that sometimes carries a trident.', drops: ['rotten_flesh', 'copper_ingot']
})
mob('elder_guardian', {
  name: 'Elder Guardian', category: 'hostile', archetype: 'guardian', hp: 80, damage: 8, speed: 0.9, width: 2, height: 2, aquatic: true, boss: true,
  colors: { body: '#8a9a7a', head: '#9aaa8a', limb: '#6a7a5a', accent: '#d8e8c8', eye: '#f8a83a' },
  flags: { spikes: true, fins: true }, egg: ['#9aaa8a', '#f8a83a'], biomes: ['ocean'],
  desc: 'A colossal guardian of the ocean monument. It curses those who enter.', drops: ['prismarine_shard', 'sponge']
})
mob('ender_dragon', {
  name: 'Ender Dragon', category: 'boss', archetype: 'dragon', hp: 200, damage: 12, speed: 2, flying: true, width: 6, height: 4,
  colors: { body: '#2a2a33', head: '#3a3a44', limb: '#1a1a22', accent: '#8a5ac8', eye: '#d85aff' },
  flags: { wings: true, horns: true, tail: true, spikes: true }, egg: ['#2a2a33', '#8a5ac8'], biomes: ['end'], light: 2,
  desc: 'The ancient ruler of the End. Break the end crystals, then bring it down.', drops: ['dragon_egg', 'experience_bottle']
})
mob('enderman', {
  name: 'Enderman', category: 'hostile', archetype: 'enderman', hp: 40, damage: 7, speed: 1.9, width: 0.7, height: 2.9,
  colors: { body: '#141418', head: '#1a1a20', limb: '#101014', accent: '#8a5ac8', eye: '#c86aff' },
  flags: {}, egg: ['#1a1a20', '#c86aff'], biomes: ['plains', 'forest', 'end', 'nether'], time: 'night',
  desc: 'A tall shadow that hates being looked in the eye. It teleports.', drops: ['ender_pearl']
})
mob('endermite', {
  name: 'Endermite', category: 'hostile', archetype: 'endermite', hp: 8, damage: 2, speed: 1.6, width: 0.4, height: 0.3,
  colors: { body: '#3a2a4a', head: '#4a3a5a', limb: '#2a1a3a', accent: '#8a6aa8', eye: '#c86aff' },
  flags: {}, egg: ['#4a3a5a', '#8a6aa8'], biomes: ['end'],
  desc: 'A tiny silverfish of the End, drawn to ender pearls.', drops: []
})
mob('evoker', {
  name: 'Evoker', category: 'hostile', archetype: 'illager', hp: 24, damage: 6, speed: 1.2, width: 0.6, height: 1.9, ranged: true,
  colors: { body: '#5a5a62', head: '#a8a8a0', limb: '#4a4a52', accent: '#3a3a42', eye: '#c82a2a' },
  flags: { robe: true, nose: true, hat: false }, egg: ['#a8a8a0', '#5a5a62'], biomes: ['dark'],
  desc: 'A spellcasting illager that summons vexes and fangs.', drops: ['totem_of_undying', 'emerald']
})
mob('ghast', {
  name: 'Ghast', category: 'hostile', archetype: 'ghast', hp: 10, damage: 8, speed: 1, flying: true, width: 3.2, height: 3.2, ranged: true,
  colors: { body: '#e8e4e0', head: '#f0ece8', limb: '#d0ccc8', accent: '#c8c4c0', eye: '#1a1a1a' },
  flags: { tentacles: true }, egg: ['#f0ece8', '#c8c4c0'], biomes: ['nether'],
  desc: 'A vast floating jellyfish that sobs and spits fireballs.', drops: ['ghast_tear', 'gunpowder']
})
mob('giant', {
  name: 'Giant', category: 'hostile', archetype: 'zombie', hp: 100, damage: 12, speed: 0.7, width: 3.6, height: 7.2,
  colors: { body: '#4a8a4a', head: '#5a9a5a', limb: '#3a6a3a', accent: '#6aaa6a', eye: '#101010' },
  flags: {}, egg: ['#5a9a5a', '#3a6a3a'], biomes: ['plains'],
  desc: 'A colossal zombie from an older world. Rarely seen, never forgotten.', drops: ['rotten_flesh']
})
mob('guardian', {
  name: 'Guardian', category: 'hostile', archetype: 'guardian', hp: 30, damage: 6, speed: 1.1, width: 1.2, height: 1.2, aquatic: true, ranged: true,
  colors: { body: '#6a8a6a', head: '#7a9a7a', limb: '#5a7a5a', accent: '#c8d8b8', eye: '#f8a83a' },
  flags: { spikes: true, fins: true }, egg: ['#7a9a7a', '#f8a83a'], biomes: ['ocean'],
  desc: 'A single-eyed sentinel that fires laser beams at intruders.', drops: ['prismarine_shard', 'prismarine_crystals']
})
mob('hoglin', {
  name: 'Hoglin', category: 'hostile', archetype: 'hoglin', hp: 40, damage: 8, speed: 1.5, width: 1.4, height: 1.6,
  colors: { body: '#c88a6a', head: '#d89a7a', limb: '#a86a4a', accent: '#f0d8c8', eye: '#2a1a1a' },
  flags: { horns: true, ears: true, tail: true, snout: true }, egg: ['#d89a7a', '#a86a4a'], biomes: ['nether'],
  desc: 'A hunched nether boar that charges anything that moves.', drops: ['porkchop', 'leather']
})
mob('husk', {
  name: 'Husk', category: 'hostile', archetype: 'zombie', hp: 20, damage: 3, speed: 1.2, width: 0.6, height: 1.9,
  colors: { body: '#c8b87a', head: '#d8c88a', limb: '#a8985a', accent: '#8a7a4a', eye: '#2a2a1a' },
  flags: {}, egg: ['#d8c88a', '#a8985a'], biomes: ['desert'],
  desc: 'A sand-dried zombie that does not burn in daylight.', drops: ['rotten_flesh']
})
mob('illusioner', {
  name: 'Illusioner', category: 'hostile', archetype: 'illager', hp: 32, damage: 5, speed: 1.2, width: 0.6, height: 1.9, ranged: true,
  colors: { body: '#3a5a8a', head: '#a8a8a0', limb: '#2a4a6a', accent: '#d8c85a', eye: '#2a2a8a' },
  flags: { robe: true, nose: true, hat: true }, egg: ['#a8a8a0', '#3a5a8a'], biomes: ['mountains'],
  desc: 'A master of mirrors and blindness. Its illusions fight for it.', drops: ['bow', 'emerald']
})
mob('magma_cube', {
  name: 'Magma Cube', category: 'hostile', archetype: 'magma', hp: 16, damage: 4, speed: 1.2, width: 0.9, height: 0.9,
  colors: { body: '#8a2a1a', head: '#a83a1a', limb: '#6a1a0a', accent: '#f8a83a', eye: '#f8e85a' },
  flags: {}, egg: ['#a83a1a', '#f8a83a'], biomes: ['nether'], light: 4,
  desc: 'A bouncing blob of molten rock. Fire does not hurt it.', drops: ['magma_cream']
})
mob('phantom', {
  name: 'Phantom', category: 'hostile', archetype: 'phantom', hp: 20, damage: 6, speed: 2.2, flying: true, width: 1.6, height: 0.8,
  colors: { body: '#3a5a5a', head: '#4a6a6a', limb: '#2a4a4a', accent: '#8ab8b8', eye: '#3af8e8' },
  flags: { wings: true, tail: true, fins: true }, egg: ['#4a6a6a', '#3af8e8'], biomes: ['plains', 'forest', 'ocean'], time: 'night',
  desc: 'A screaming manta that swoops at players who have not slept.', drops: ['phantom_membrane']
})
mob('piglin', {
  name: 'Piglin', category: 'hostile', archetype: 'piglin', hp: 16, damage: 5, speed: 1.3, width: 0.6, height: 1.9,
  colors: { body: '#c87a6a', head: '#d88a7a', limb: '#a85a4a', accent: '#f0d8c8', eye: '#3a2a1a' },
  flags: { ears: true, nose: true, robe: false }, egg: ['#d88a7a', '#a85a4a'], biomes: ['nether'],
  desc: 'A gold-obsessed nether warrior. Wear gold to avoid its wrath.', drops: ['gold_ingot', 'porkchop']
})
mob('piglin_brute', {
  name: 'Piglin Brute', category: 'hostile', archetype: 'piglin', hp: 50, damage: 7, speed: 1.3, width: 0.7, height: 2,
  colors: { body: '#b86a5a', head: '#c87a6a', limb: '#984a3a', accent: '#e8c8b8', eye: '#3a2a1a' },
  flags: { ears: true, nose: true, horns: true }, egg: ['#c87a6a', '#984a3a'], biomes: ['nether'],
  desc: 'A hulking piglin guard armed with a golden axe.', drops: ['gold_ingot']
})
mob('pillager', {
  name: 'Pillager', category: 'hostile', archetype: 'illager', hp: 24, damage: 5, speed: 1.3, width: 0.6, height: 1.9, ranged: true,
  colors: { body: '#6a6a72', head: '#a8a8a0', limb: '#5a5a62', accent: '#3a3a42', eye: '#2a2a2a' },
  flags: { robe: true, nose: true, hat: false }, egg: ['#a8a8a0', '#6a6a72'], biomes: ['plains', 'forest'],
  desc: 'A crossbow-wielding raider. It shoots first and never asks.', drops: ['crossbow', 'arrow']
})
mob('ravager', {
  name: 'Ravager', category: 'hostile', archetype: 'ravager', hp: 100, damage: 12, speed: 1.4, width: 1.9, height: 2.2,
  colors: { body: '#5a4a4a', head: '#6a5a5a', limb: '#4a3a3a', accent: '#3a2a2a', eye: '#c82a2a' },
  flags: { horns: true, ears: true, tail: true, nose: true, spikes: true }, egg: ['#6a5a5a', '#c82a2a'], biomes: ['plains'],
  desc: 'A monstrous raider beast that smashes through villages.', drops: ['saddle']
})
mob('shulker', {
  name: 'Shulker', category: 'hostile', archetype: 'shulker', hp: 30, damage: 4, speed: 0.4, width: 1, height: 1, ranged: true,
  colors: { body: '#8a6a8a', head: '#9a7a9a', limb: '#6a4a6a', accent: '#d8b8d8', eye: '#f8e85a' },
  flags: { shell: true }, egg: ['#9a7a9a', '#d8b8d8'], biomes: ['end'],
  desc: 'A stubborn shell that hides in the End and fires homing bullets.', drops: ['shulker_shell']
})
mob('silverfish', {
  name: 'Silverfish', category: 'hostile', archetype: 'silverfish', hp: 8, damage: 2, speed: 1.6, width: 0.4, height: 0.3,
  colors: { body: '#8a8a8a', head: '#9a9a9a', limb: '#6a6a6a', accent: '#b8b8b8', eye: '#1a1a1a' },
  flags: {}, egg: ['#9a9a9a', '#6a6a6a'], biomes: ['caves', 'mountains'],
  desc: 'A tiny insect that swarms from infested stone.', drops: []
})
mob('skeleton', {
  name: 'Skeleton', category: 'hostile', archetype: 'skeleton', hp: 20, damage: 4, speed: 1.3, width: 0.6, height: 1.9, ranged: true,
  colors: { body: '#c8c8c0', head: '#d8d8d0', limb: '#b8b8b0', accent: '#e8e8e0', eye: '#1a1a1a' },
  flags: {}, egg: ['#d8d8d0', '#1a1a1a'], biomes: ['plains', 'forest', 'snow', 'caves'], time: 'night',
  desc: 'A rattling archer that burns in sunlight and fires arrows at range.', drops: ['bone', 'arrow']
})
mob('skeleton_horse', {
  name: 'Skeleton Horse', category: 'hostile', archetype: 'horse', hp: 15, damage: 4, speed: 2, width: 1.1, height: 1.9,
  colors: { body: '#c8c8c0', head: '#d8d8d0', limb: '#a8a8a0', accent: '#8a8a82', eye: '#3a3a3a' },
  flags: { ears: true, tail: true, mane: true }, egg: ['#d8d8d0', '#a8a8a0'], biomes: ['plains'], time: 'night',
  desc: 'A bony steed that rises from lightning and rides across water.', drops: ['bone']
})
mob('slime', {
  name: 'Slime', category: 'hostile', archetype: 'slime', hp: 16, damage: 4, speed: 1.2, width: 0.9, height: 0.9,
  colors: { body: '#6aa84a', head: '#7ab85a', limb: '#5a8a3a', accent: '#a8e88a', eye: '#1a3a1a' },
  flags: {}, egg: ['#7ab85a', '#5a8a3a'], biomes: ['caves', 'swamp'],
  desc: 'A bouncing green cube that splits into smaller slimes.', drops: ['slime_ball']
})
mob('spider', {
  name: 'Spider', category: 'hostile', archetype: 'spider', hp: 16, damage: 3, speed: 1.7, width: 1.2, height: 0.9,
  colors: { body: '#3a2a2a', head: '#4a3a3a', limb: '#2a1a1a', accent: '#8a6a2a', eye: '#e83a3a' },
  flags: {}, egg: ['#4a3a3a', '#e83a3a'], biomes: ['plains', 'forest', 'caves'], time: 'night',
  desc: 'A night hunter with eight legs and a taste for flies — and you.', drops: ['string', 'spider_eye']
})
mob('stray', {
  name: 'Stray', category: 'hostile', archetype: 'skeleton', hp: 20, damage: 4, speed: 1.3, width: 0.6, height: 1.9, ranged: true,
  colors: { body: '#a8b8c8', head: '#b8c8d8', limb: '#8a9aa8', accent: '#d8e8f8', eye: '#3ac8e8' },
  flags: {}, egg: ['#b8c8d8', '#3ac8e8'], biomes: ['snow'], time: 'night',
  desc: 'A frozen skeleton whose arrows slow the blood.', drops: ['bone', 'arrow']
})
mob('vex', {
  name: 'Vex', category: 'hostile', archetype: 'vex', hp: 14, damage: 5, speed: 2.2, flying: true, width: 0.5, height: 0.8,
  colors: { body: '#8ab8d8', head: '#9ac8e8', limb: '#6a98b8', accent: '#d8e8f8', eye: '#f8f8ff' },
  flags: { wings: true }, egg: ['#9ac8e8', '#6a98b8'], biomes: ['dark'],
  desc: 'A tiny, furious spirit summoned by an evoker. It phases through walls.', drops: []
})
mob('vindicator', {
  name: 'Vindicator', category: 'hostile', archetype: 'illager', hp: 24, damage: 7, speed: 1.3, width: 0.6, height: 1.9,
  colors: { body: '#5a5a62', head: '#a8a8a0', limb: '#4a4a52', accent: '#3a3a42', eye: '#2a2a2a' },
  flags: { robe: true, nose: true, hat: false }, egg: ['#a8a8a0', '#5a5a62'], biomes: ['plains', 'dark'],
  desc: 'A axe-wielding illager. It opens doors and closes conversations.', drops: ['iron_axe', 'emerald']
})
mob('warden', {
  name: 'Warden', category: 'boss', archetype: 'warden', hp: 500, damage: 30, speed: 1.2, width: 1.6, height: 3.2,
  colors: { body: '#173a3a', head: '#1b4a4a', limb: '#0f2a2a', accent: '#2a8a7a', eye: '#3af8c8' },
  flags: { horns: true, spikes: true, tentacles: true }, egg: ['#1b4a4a', '#3af8c8'], biomes: ['dark'], light: 2,
  desc: 'The blind horror of the deep dark. It hunts by sound and never stops.', drops: ['sculk_catalyst', 'echo_shard']
})
mob('witch', {
  name: 'Witch', category: 'hostile', archetype: 'witch', hp: 26, damage: 5, speed: 1.2, width: 0.6, height: 1.9, ranged: true,
  colors: { body: '#4a2a5a', head: '#8a8a7a', limb: '#3a1a4a', accent: '#c84ab8', eye: '#2a1a2a' },
  flags: { robe: true, hat: true, nose: true }, egg: ['#8a8a7a', '#4a2a5a'], biomes: ['swamp', 'dark'],
  desc: 'A swamp hermit who throws potions and drinks healing brews.', drops: ['glowstone_dust_block', 'redstone', 'sugar']
})
mob('wither', {
  name: 'Wither', category: 'boss', archetype: 'wither', hp: 300, damage: 15, speed: 1.2, flying: true, width: 2.4, height: 3, ranged: true,
  colors: { body: '#2a2a2e', head: '#3a3a40', limb: '#1a1a1e', accent: '#5a5a62', eye: '#3a6aff' },
  flags: { crown: true, spikes: true }, egg: ['#3a3a40', '#3a6aff'], biomes: ['nether'], light: 2,
  desc: 'A three-headed horror built from soul sand and skulls. It destroys everything.', drops: ['nether_star']
})
mob('wither_skeleton', {
  name: 'Wither Skeleton', category: 'hostile', archetype: 'skeleton', hp: 20, damage: 8, speed: 1.3, width: 0.7, height: 2.2,
  colors: { body: '#2a2a2e', head: '#3a3a40', limb: '#1a1a1e', accent: '#4a4a52', eye: '#1a1a1a' },
  flags: {}, egg: ['#3a3a40', '#1a1a1e'], biomes: ['nether'],
  desc: 'A charred skeleton whose blade withers the living.', drops: ['coal', 'bone', 'stone_sword']
})
mob('zoglin', {
  name: 'Zoglin', category: 'hostile', archetype: 'hoglin', hp: 40, damage: 8, speed: 1.6, width: 1.4, height: 1.6,
  colors: { body: '#c8a8b8', head: '#d8b8c8', limb: '#a8889a', accent: '#8a6a7a', eye: '#c82a2a' },
  flags: { horns: true, ears: true, tail: true, snout: true }, egg: ['#d8b8c8', '#c82a2a'], biomes: ['nether'],
  desc: 'A zombified hoglin that attacks everything on sight.', drops: ['rotten_flesh']
})
mob('zombie', {
  name: 'Zombie', category: 'hostile', archetype: 'zombie', hp: 20, damage: 3, speed: 1.2, width: 0.6, height: 1.9,
  colors: { body: '#4a8a4a', head: '#5a9a5a', limb: '#3a6a3a', accent: '#6aaa6a', eye: '#101010' },
  flags: {}, egg: ['#5a9a5a', '#3a6a3a'], biomes: ['plains', 'forest', 'village', 'caves'], time: 'night',
  desc: 'A shambling undead villager. It burns in daylight and hunts in packs.', drops: ['rotten_flesh']
})
mob('zombie_horse', {
  name: 'Zombie Horse', category: 'hostile', archetype: 'horse', hp: 15, damage: 4, speed: 1.8, width: 1.1, height: 1.9,
  colors: { body: '#4a6a4a', head: '#5a7a5a', limb: '#3a5a3a', accent: '#2a3a2a', eye: '#f8a83a' },
  flags: { ears: true, tail: true, mane: true }, egg: ['#5a7a5a', '#2a3a2a'], biomes: ['plains'], time: 'night',
  desc: 'A rotting steed with a taste for open plains.', drops: ['rotten_flesh']
})
mob('zombie_villager', {
  name: 'Zombie Villager', category: 'hostile', archetype: 'villager', hp: 20, damage: 3, speed: 1.2, width: 0.6, height: 1.9,
  colors: { body: '#4a6a4a', head: '#6a8a5a', limb: '#3a5a3a', accent: '#5a7a4a', eye: '#101010' },
  flags: { nose: true, robe: true }, egg: ['#6a8a5a', '#3a5a3a'], biomes: ['village', 'plains'], time: 'night',
  desc: 'A villager lost to the plague. A golden apple can cure it.', drops: ['rotten_flesh']
})
mob('zombified_piglin', {
  name: 'Zombified Piglin', category: 'neutral', archetype: 'piglin', hp: 20, damage: 5, speed: 1.3, width: 0.6, height: 1.9,
  colors: { body: '#6a8a5a', head: '#7a9a6a', limb: '#5a7a4a', accent: '#8aaa7a', eye: '#101010' },
  flags: { ears: true, nose: true }, egg: ['#7a9a6a', '#5a7a4a'], biomes: ['nether'],
  desc: 'A golden sword and a short temper. Angering one angers them all.', drops: ['gold_nugget', 'rotten_flesh']
})
mob('killer_rabbit', {
  name: 'Killer Rabbit', category: 'hostile', archetype: 'rabbit', hp: 3, damage: 5, speed: 2.4, width: 0.5, height: 0.6,
  colors: { body: '#f0f0f0', head: '#f8f8f8', limb: '#d8d8d8', accent: '#e8e8e8', eye: '#c82a2a' },
  flags: { ears: true, tail: true }, egg: ['#f8f8f8', '#c82a2a'], biomes: ['desert'],
  desc: 'A white rabbit with red eyes. It is absolutely not cute.', drops: ['rabbit', 'rabbit_hide']
})

export const MOB_BY_ID = new Map(MOBS.map(m => [m.id, m]))
export const MOB_COUNT = MOBS.length
export const PASSIVE_MOBS = MOBS.filter(m => !m.hostile)
export const HOSTILE_MOBS = MOBS.filter(m => m.hostile)

export function mobsForBiome(biome, night = false) {
  return MOBS.filter(m => {
    if (m.boss) return false
    if (!m.biomes.includes(biome) && !m.biomes.includes('any')) return false
    if (m.time === 'night' && !night) return false
    if (m.time === 'day' && night) return false
    return true
  })
}
