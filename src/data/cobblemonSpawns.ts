import { SpawnEntry, BiomeCategory, SpawnBucket, TimeOfDay, SpawnContext } from '../types/diosesmon';
import { COBBLEMON_POKEDEX } from './cobblemonPokedex';

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

// Generate Spawns for ALL Pokémon species
export function generateFullSpawns(): SpawnEntry[] {
  return COBBLEMON_POKEDEX.map(pokemon => {
    const mainType = pokemon.types[0] || 'normal';
    let biomes: string[] = ['minecraft:plains', '#cobblemon:is_forest'];
    let bucket: SpawnBucket = 'common';
    let context: SpawnContext = 'grounded';
    let timeOfDay: TimeOfDay = 'any';
    let minY: number | undefined = undefined;
    let maxY: number | undefined = undefined;

    // Bucket calculation
    if (pokemon.catchRate <= 5) bucket = 'ultra-rare';
    else if (pokemon.catchRate <= 45) bucket = 'rare';
    else if (pokemon.catchRate <= 120) bucket = 'uncommon';
    else bucket = 'common';

    // Type-based biome & environment assignment
    switch (mainType) {
      case 'grass':
      case 'bug':
        biomes = ['#cobblemon:is_jungle', 'minecraft:jungle', 'minecraft:sparse_jungle', 'minecraft:forest'];
        timeOfDay = 'day';
        break;

      case 'fire':
      case 'ground':
      case 'rock':
        biomes = ['#cobblemon:is_badlands', 'minecraft:badlands', 'minecraft:desert'];
        timeOfDay = 'day';
        break;

      case 'water':
      case 'ice':
        biomes = ['#cobblemon:is_ocean', 'minecraft:ocean', 'minecraft:river', 'minecraft:deep_ocean'];
        context = 'submerged';
        break;

      case 'electric':
      case 'dragon':
      case 'flying':
        biomes = ['#cobblemon:is_mountain', 'minecraft:jagged_peaks', 'minecraft:stony_peaks'];
        minY = 75;
        timeOfDay = 'day';
        break;

      case 'ghost':
      case 'dark':
      case 'poison':
        biomes = ['minecraft:dark_forest', '#cobblemon:is_cave', 'minecraft:deep_dark'];
        timeOfDay = 'night';
        break;

      case 'psychic':
      case 'fairy':
      case 'steel':
      case 'fighting':
      case 'normal':
      default:
        biomes = ['minecraft:plains', 'minecraft:meadow', '#cobblemon:is_forest'];
        break;
    }

    const weight = bucket === 'ultra-rare' ? 1.0 : bucket === 'rare' ? 5.0 : bucket === 'uncommon' ? 15.0 : 35.0;

    return {
      id: `${pokemon.id}-spawn`,
      pokemonId: pokemon.id,
      bucket,
      weight,
      context,
      minLevel: Math.max(5, Math.min(50, pokemon.dexNumber % 50 + 5)),
      maxLevel: Math.max(25, Math.min(75, pokemon.dexNumber % 50 + 30)),
      condition: {
        biomes,
        timeOfDay,
        minY,
        maxY,
        canSeeSky: context === 'grounded' && minY !== undefined
      }
    };
  });
}

export const COBBLEMON_SPAWNS: SpawnEntry[] = generateFullSpawns();
