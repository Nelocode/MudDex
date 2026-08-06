import { SpawnEntry, BiomeCategory } from '../types/diosesmon';

export const BIOME_CATEGORIES: BiomeCategory[] = [
  {
    id: 'jungle',
    name: 'Jungla & Bosques Frondosos',
    description: 'Biomas tropicales con alta densidad de Pokémon de tipo Planta, Bicho y Veneno.',
    icon: '🌴',
    biomes: [
      { id: 'minecraft:jungle', name: 'Jungle', tag: '#cobblemon:is_jungle' },
      { id: 'minecraft:sparse_jungle', name: 'Sparse Jungle', tag: '#cobblemon:is_jungle' },
      { id: 'minecraft:bamboo_jungle', name: 'Bamboo Jungle', tag: '#cobblemon:is_jungle' }
    ]
  },
  {
    id: 'forest',
    name: 'Bosques & Arboledas',
    description: 'Bosques templados, taigas y arboledas.',
    icon: '🌲',
    biomes: [
      { id: 'minecraft:forest', name: 'Forest', tag: '#cobblemon:is_forest' },
      { id: 'minecraft:dark_forest', name: 'Dark Forest', tag: '#cobblemon:is_forest' },
      { id: 'minecraft:birch_forest', name: 'Birch Forest', tag: '#cobblemon:is_forest' },
      { id: 'minecraft:taiga', name: 'Taiga', tag: '#cobblemon:is_taiga' }
    ]
  },
  {
    id: 'ocean',
    name: 'Océanos & Ríos',
    description: 'Ambientes acuáticos con abundancia de Pokémon de tipo Agua y Hielo.',
    icon: '🌊',
    biomes: [
      { id: 'minecraft:ocean', name: 'Ocean', tag: '#cobblemon:is_ocean' },
      { id: 'minecraft:deep_ocean', name: 'Deep Ocean', tag: '#cobblemon:is_ocean' },
      { id: 'minecraft:warm_ocean', name: 'Warm Ocean', tag: '#cobblemon:is_ocean' },
      { id: 'minecraft:river', name: 'River', tag: '#cobblemon:is_river' }
    ]
  },
  {
    id: 'mountain',
    name: 'Montañas & Picos',
    description: 'Zonas elevadas con Pokémon de tipo Roca, Tierra, Dragón y Volador.',
    icon: '🏔️',
    biomes: [
      { id: 'minecraft:jagged_peaks', name: 'Jagged Peaks', tag: '#cobblemon:is_mountain' },
      { id: 'minecraft:stony_peaks', name: 'Stony Peaks', tag: '#cobblemon:is_mountain' },
      { id: 'minecraft:meadow', name: 'Meadow', tag: '#cobblemon:is_mountain' }
    ]
  },
  {
    id: 'caves',
    name: 'Cuevas & Profundidades',
    description: 'Subterráneo y Deep Dark con Pokémon de tipo Fantasma, Siniestro y Veneno.',
    icon: '⛏️',
    biomes: [
      { id: 'minecraft:dripstone_caves', name: 'Dripstone Caves', tag: '#cobblemon:is_cave' },
      { id: 'minecraft:lush_caves', name: 'Lush Caves', tag: '#cobblemon:is_cave' },
      { id: 'minecraft:deep_dark', name: 'Deep Dark', tag: '#cobblemon:is_deep_dark' }
    ]
  },
  {
    id: 'desert',
    name: 'Desiertos & Badlands',
    description: 'Zonas áridas y cálidas con Pokémon de tipo Fuego, Tierra y Roca.',
    icon: '🏜️',
    biomes: [
      { id: 'minecraft:desert', name: 'Desert', tag: '#cobblemon:is_desert' },
      { id: 'minecraft:badlands', name: 'Badlands', tag: '#cobblemon:is_badlands' },
      { id: 'minecraft:eroded_badlands', name: 'Eroded Badlands', tag: '#cobblemon:is_badlands' }
    ]
  }
];

export const COBBLEMON_SPAWNS: SpawnEntry[] = [
  {
    id: 'bulbasaur-jungle',
    pokemonId: 'bulbasaur',
    bucket: 'rare',
    weight: 8.5,
    context: 'grounded',
    minLevel: 5,
    maxLevel: 25,
    condition: {
      biomes: ['#cobblemon:is_jungle', 'minecraft:jungle', 'minecraft:sparse_jungle'],
      timeOfDay: 'day',
      canSeeSky: true,
      minLight: 8
    }
  },
  {
    id: 'charmander-badlands',
    pokemonId: 'charmander',
    bucket: 'rare',
    weight: 8.0,
    context: 'grounded',
    minLevel: 5,
    maxLevel: 25,
    condition: {
      biomes: ['#cobblemon:is_badlands', 'minecraft:desert'],
      timeOfDay: 'day',
      weather: 'clear',
      canSeeSky: true
    }
  },
  {
    id: 'squirtle-river',
    pokemonId: 'squirtle',
    bucket: 'rare',
    weight: 8.5,
    context: 'submerged',
    minLevel: 5,
    maxLevel: 25,
    condition: {
      biomes: ['#cobblemon:is_river', 'minecraft:river', '#cobblemon:is_ocean']
    }
  },
  {
    id: 'pikachu-forest',
    pokemonId: 'pikachu',
    bucket: 'uncommon',
    weight: 25.0,
    context: 'grounded',
    minLevel: 10,
    maxLevel: 30,
    condition: {
      biomes: ['#cobblemon:is_forest', 'minecraft:forest', 'minecraft:birch_forest'],
      timeOfDay: 'day',
      minLight: 9
    }
  },
  {
    id: 'gengar-dark-forest',
    pokemonId: 'gengar',
    bucket: 'ultra-rare',
    weight: 2.0,
    context: 'grounded',
    minLevel: 36,
    maxLevel: 55,
    condition: {
      biomes: ['minecraft:dark_forest', '#cobblemon:is_cave', 'minecraft:deep_dark'],
      timeOfDay: 'night',
      canSeeSky: false,
      maxLight: 4
    }
  },
  {
    id: 'gyarados-ocean',
    pokemonId: 'gyarados',
    bucket: 'rare',
    weight: 5.0,
    context: 'submerged',
    minLevel: 20,
    maxLevel: 50,
    condition: {
      biomes: ['#cobblemon:is_ocean', 'minecraft:deep_ocean'],
      weather: 'rain'
    }
  },
  {
    id: 'snorlax-forest',
    pokemonId: 'snorlax',
    bucket: 'ultra-rare',
    weight: 1.5,
    context: 'grounded',
    minLevel: 30,
    maxLevel: 50,
    condition: {
      biomes: ['#cobblemon:is_forest', 'minecraft:plains'],
      timeOfDay: 'day',
      canSeeSky: true
    }
  },
  {
    id: 'dragonite-peaks',
    pokemonId: 'dragonite',
    bucket: 'ultra-rare',
    weight: 1.0,
    context: 'grounded',
    minLevel: 55,
    maxLevel: 70,
    condition: {
      biomes: ['#cobblemon:is_mountain', 'minecraft:jagged_peaks'],
      minY: 120,
      canSeeSky: true
    }
  },
  {
    id: 'tyranitar-badlands',
    pokemonId: 'tyranitar',
    bucket: 'ultra-rare',
    weight: 1.2,
    context: 'grounded',
    minLevel: 55,
    maxLevel: 70,
    condition: {
      biomes: ['#cobblemon:is_badlands', 'minecraft:eroded_badlands'],
      canSeeSky: true
    }
  },
  {
    id: 'gardevoir-meadow',
    pokemonId: 'gardevoir',
    bucket: 'rare',
    weight: 4.0,
    context: 'grounded',
    minLevel: 30,
    maxLevel: 50,
    condition: {
      biomes: ['minecraft:meadow', '#cobblemon:is_forest'],
      timeOfDay: 'day'
    }
  },
  {
    id: 'lucario-peaks',
    pokemonId: 'lucario',
    bucket: 'rare',
    weight: 3.5,
    context: 'grounded',
    minLevel: 32,
    maxLevel: 52,
    condition: {
      biomes: ['#cobblemon:is_mountain', 'minecraft:stony_peaks'],
      timeOfDay: 'day',
      minY: 80
    }
  },
  {
    id: 'garchomp-badlands',
    pokemonId: 'garchomp',
    bucket: 'ultra-rare',
    weight: 1.0,
    context: 'grounded',
    minLevel: 48,
    maxLevel: 65,
    condition: {
      biomes: ['#cobblemon:is_badlands', '#cobblemon:is_desert'],
      timeOfDay: 'dusk'
    }
  },
  {
    id: 'greninja-swamp',
    pokemonId: 'greninja',
    bucket: 'ultra-rare',
    weight: 1.5,
    context: 'grounded',
    minLevel: 36,
    maxLevel: 55,
    condition: {
      biomes: ['minecraft:swamp', 'minecraft:mangrove_swamp'],
      timeOfDay: 'night'
    }
  },
  {
    id: 'mimikyu-dark-forest',
    pokemonId: 'mimikyu',
    bucket: 'rare',
    weight: 3.0,
    context: 'grounded',
    minLevel: 25,
    maxLevel: 45,
    condition: {
      biomes: ['minecraft:dark_forest', '#cobblemon:is_cave'],
      timeOfDay: 'night',
      maxLight: 5
    }
  },
  {
    id: 'dragapult-deep-dark',
    pokemonId: 'dragapult',
    bucket: 'ultra-rare',
    weight: 0.8,
    context: 'grounded',
    minLevel: 60,
    maxLevel: 75,
    condition: {
      biomes: ['minecraft:deep_dark', 'minecraft:dripstone_caves'],
      maxY: 0,
      canSeeSky: false
    }
  },
  {
    id: 'ceruledge-nether-volcano',
    pokemonId: 'ceruledge',
    bucket: 'rare',
    weight: 3.0,
    context: 'grounded',
    minLevel: 35,
    maxLevel: 55,
    condition: {
      biomes: ['minecraft:basalt_deltas', 'minecraft:nether_wastes', 'minecraft:dark_forest'],
      timeOfDay: 'night'
    }
  },
  {
    id: 'tinkaton-stony-peaks',
    pokemonId: 'tinkaton',
    bucket: 'rare',
    weight: 4.0,
    context: 'grounded',
    minLevel: 38,
    maxLevel: 55,
    condition: {
      biomes: ['minecraft:stony_peaks', '#cobblemon:is_mountain'],
      timeOfDay: 'day'
    }
  }
];
