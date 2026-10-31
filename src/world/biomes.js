/* Biome palette and surface rules. */

export const BIOMES = [
  { id: 0, name: 'Ocean', top: 'sand', filler: 'sand', grass: '#71a84a', foliage: '#5a9e3a', water: '#2a6ac8', sky: '#8fc7ff', trees: null, treeChance: 0, flowers: 0 },
  { id: 1, name: 'Beach', top: 'sand', filler: 'sand', grass: '#8fbf55', foliage: '#6aa83a', water: '#2a7ad8', sky: '#9fd0ff', trees: null, treeChance: 0.0005, flowers: 0 },
  { id: 2, name: 'Plains', top: 'grass_block', filler: 'dirt', grass: '#7cbd55', foliage: '#59ae30', water: '#2a6ac8', sky: '#8fc7ff', trees: 'oak', treeChance: 0.005, flowers: 0.06 },
  { id: 3, name: 'Forest', top: 'grass_block', filler: 'dirt', grass: '#6aab46', foliage: '#4e9e2a', water: '#2a6ac8', sky: '#8fc7ff', trees: 'oak', treeChance: 0.05, flowers: 0.03 },
  { id: 4, name: 'Birch Forest', top: 'grass_block', filler: 'dirt', grass: '#8ac25a', foliage: '#6ab840', water: '#2a6ac8', sky: '#9fd0ff', trees: 'birch', treeChance: 0.045, flowers: 0.025 },
  { id: 5, name: 'Dark Forest', top: 'grass_block', filler: 'dirt', grass: '#4f8a3a', foliage: '#3a6e26', water: '#2a5a9a', sky: '#7a9ab8', trees: 'dark_oak', treeChance: 0.07, flowers: 0.005 },
  { id: 6, name: 'Taiga', top: 'grass_block', filler: 'dirt', grass: '#5a9a4a', foliage: '#3a7a32', water: '#2a5a9a', sky: '#93c2e0', trees: 'spruce', treeChance: 0.06, flowers: 0.01 },
  { id: 7, name: 'Snowy Plains', top: 'snow_block', filler: 'dirt', grass: '#9ac8a0', foliage: '#7aaa7a', water: '#4a8ac8', sky: '#c3dbe8', trees: 'spruce', treeChance: 0.004, flowers: 0 },
  { id: 8, name: 'Snowy Taiga', top: 'snow_block', filler: 'dirt', grass: '#8ab894', foliage: '#6a9a6a', water: '#3a7ab8', sky: '#b8d4e4', trees: 'spruce', treeChance: 0.06, flowers: 0 },
  { id: 9, name: 'Desert', top: 'sand', filler: 'sandstone', grass: '#c8b85a', foliage: '#a89a3a', water: '#2a7ad8', sky: '#f0dfa8', trees: null, treeChance: 0, flowers: 0 },
  { id: 10, name: 'Savanna', top: 'grass_block', filler: 'dirt', grass: '#c8b84a', foliage: '#a8a038', water: '#2a7ad8', sky: '#f0e0a0', trees: 'acacia', treeChance: 0.012, flowers: 0.015 },
  { id: 11, name: 'Badlands', top: 'red_sand', filler: 'terracotta', grass: '#c8a04a', foliage: '#a88038', water: '#2a6ac8', sky: '#f0c890', trees: null, treeChance: 0, flowers: 0 },
  { id: 12, name: 'Jungle', top: 'grass_block', filler: 'dirt', grass: '#4a9a2a', foliage: '#2f8a1a', water: '#2a7ab8', sky: '#8fd0c0', trees: 'jungle', treeChance: 0.09, flowers: 0.03 },
  { id: 13, name: 'Swamp', top: 'grass_block', filler: 'mud', grass: '#6a8a3a', foliage: '#4a7a2a', water: '#3a5a4a', sky: '#9ab8a8', trees: 'oak', treeChance: 0.03, flowers: 0.01 },
  { id: 14, name: 'Cherry Grove', top: 'grass_block', filler: 'dirt', grass: '#8ac86a', foliage: '#e8a6c2', water: '#2a6ac8', sky: '#ffd8e8', trees: 'cherry', treeChance: 0.045, flowers: 0.08 },
  { id: 15, name: 'Meadow', top: 'grass_block', filler: 'dirt', grass: '#8ac85a', foliage: '#6ab840', water: '#2a6ac8', sky: '#a8d8ff', trees: 'oak', treeChance: 0.002, flowers: 0.16 },
  { id: 16, name: 'Mountains', top: 'stone', filler: 'stone', grass: '#8aa87a', foliage: '#6a9a5a', water: '#2a6ac8', sky: '#a8c8e8', trees: 'spruce', treeChance: 0.006, flowers: 0.01 },
  { id: 17, name: 'Snowy Peaks', top: 'snow_block', filler: 'stone', grass: '#c8d8d0', foliage: '#a8c8b8', water: '#5a8ac8', sky: '#d8e8f0', trees: null, treeChance: 0, flowers: 0 },
  { id: 18, name: 'Mushroom Fields', top: 'mycelium', filler: 'dirt', grass: '#8a7a8a', foliage: '#7a6a7a', water: '#2a6ac8', sky: '#c8b8d8', trees: null, treeChance: 0, flowers: 0.02 },
  { id: 19, name: 'Village', top: 'grass_block', filler: 'dirt', grass: '#7cbd55', foliage: '#59ae30', water: '#2a6ac8', sky: '#8fc7ff', trees: null, treeChance: 0, flowers: 0.02 }
]

export const BIOME_COUNT = BIOMES.length
export function biomeById(id) { return BIOMES[id] || BIOMES[2] }

export const BIOME = Object.fromEntries(BIOMES.map(b => [b.name.toUpperCase().replace(/ /g, '_'), b.id]))
