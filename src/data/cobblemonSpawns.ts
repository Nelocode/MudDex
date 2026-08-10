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

    // Authentic Bucket calculation from catch rate and legendaries
    if (pokemon.catchRate <= 5 || [150, 151, 249, 250, 384, 487, 493, 643, 644, 716, 717, 785, 786, 787, 788, 888, 889, 890, 1007, 1008].includes(pokemon.dexNumber)) {
      bucket = 'ultra-rare';
    } else if (pokemon.catchRate <= 45) {
      bucket = 'rare';
    } else if (pokemon.catchRate <= 120) {
      bucket = 'uncommon';
    } else {
      bucket = 'common';
    }

    // Authentic Type-based biome & environment assignment
    switch (mainType) {
      case 'grass':
        biomes = ['#cobblemon:is_forest', 'minecraft:jungle', 'minecraft:sparse_jungle', 'minecraft:meadow', 'minecraft:plains'];
        timeOfDay = 'day';
        break;

      case 'bug':
        biomes = ['#cobblemon:is_forest', 'minecraft:jungle', 'minecraft:dark_forest', 'minecraft:birch_forest'];
        timeOfDay = 'day';
        break;

      case 'fire':
        biomes = ['#cobblemon:is_badlands', 'minecraft:badlands', 'minecraft:desert', 'minecraft:nether_wastes', 'minecraft:basalt_deltas'];
        timeOfDay = 'day';
        break;

      case 'water':
        biomes = ['#cobblemon:is_ocean', 'minecraft:ocean', 'minecraft:deep_ocean', 'minecraft:river', 'minecraft:warm_ocean'];
        context = 'submerged';
        break;

      case 'ice':
        biomes = ['minecraft:snowy_plains', 'minecraft:frozen_ocean', 'minecraft:jagged_peaks', 'minecraft:ice_spikes'];
        timeOfDay = 'any';
        break;

      case 'electric':
        biomes = ['minecraft:stony_peaks', 'minecraft:savanna', 'minecraft:windswept_hills', '#cobblemon:is_mountain'];
        minY = 70;
        timeOfDay = 'day';
        break;

      case 'ground':
      case 'rock':
        biomes = ['#cobblemon:is_badlands', 'minecraft:dripstone_caves', 'minecraft:desert', 'minecraft:stony_shore'];
        break;

      case 'ghost':
      case 'dark':
        biomes = ['minecraft:dark_forest', '#cobblemon:is_cave', 'minecraft:deep_dark', 'minecraft:soul_sand_valley'];
        timeOfDay = 'night';
        break;

      case 'poison':
        biomes = ['minecraft:swamp', 'minecraft:mangrove_swamp', 'minecraft:dark_forest'];
        timeOfDay = 'night';
        break;

      case 'dragon':
        biomes = ['minecraft:jagged_peaks', 'minecraft:stony_peaks', 'minecraft:deep_dark', 'minecraft:end_barrens'];
        minY = 80;
        timeOfDay = 'any';
        break;

      case 'steel':
        biomes = ['minecraft:dripstone_caves', '#cobblemon:is_mountain', 'minecraft:deepslate'];
        minY = -30;
        maxY = 30;
        break;

      case 'psychic':
      case 'fairy':
        biomes = ['minecraft:cherry_grove', 'minecraft:meadow', 'minecraft:dark_forest', 'minecraft:old_growth_birch_taiga'];
        timeOfDay = 'any';
        break;

      case 'flying':
        biomes = ['minecraft:windswept_hills', 'minecraft:jagged_peaks', 'minecraft:meadow', 'minecraft:cherry_grove'];
        minY = 64;
        timeOfDay = 'day';
        break;

      case 'fighting':
        biomes = ['minecraft:bamboo_jungle', 'minecraft:stony_peaks', 'minecraft:windswept_hills'];
        timeOfDay = 'day';
        break;

      case 'normal':
      default:
        biomes = ['minecraft:plains', 'minecraft:meadow', 'minecraft:savanna', 'minecraft:sunflower_plains'];
        timeOfDay = 'any';
        break;
    }

    const weight = bucket === 'ultra-rare' ? 0.5 : bucket === 'rare' ? 3.5 : bucket === 'uncommon' ? 12.0 : 30.0;

    // Authentic level scaling based on species BST (Base Stat Total)
    const bst = pokemon.baseStats.hp + pokemon.baseStats.attack + pokemon.baseStats.defense + pokemon.baseStats.specialAttack + pokemon.baseStats.specialDefense + pokemon.baseStats.speed;
    let minLevel = 3;
    let maxLevel = 22;

    if (bucket === 'ultra-rare' || bst >= 540) {
      minLevel = 50;
      maxLevel = 75;
    } else if (bucket === 'rare' || bst >= 450) {
      minLevel = 30;
      maxLevel = 55;
    } else if (bucket === 'uncommon' || bst >= 340) {
      minLevel = 18;
      maxLevel = 38;
    }

    return {
      id: `${pokemon.id}-spawn`,
      pokemonId: pokemon.id,
      bucket,
      weight,
      context,
      minLevel,
      maxLevel,
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

export function getSpawnRecipeForPokemon(pokemonId: string) {
  const spawn = COBBLEMON_SPAWNS.find(s => s.pokemonId.toLowerCase() === pokemonId.toLowerCase());
  if (!spawn) return null;

  const biomesStr = spawn.condition.biomes.map(b => b.replace('#cobblemon:', '').replace('minecraft:', '')).join(', ');
  let blockTip = `Construye una plataforma plana de al menos 9x9 bloques despejada en los biomas de ${biomesStr}.`;
  let requiredBlocks = ['Grass Block', 'Moss Block', 'Oak Leaves'];
  let steps = [
    `Ubicación: Dirígete a los biomas recomendados (${biomesStr}).`,
    `Estructura: Coloca una plataforma plana de 9x9 bloques de pasto/musgo despejada.`,
    `Condiciones: Asegúrate de tener visibilidad directa al cielo durante el horario de ${spawn.condition.timeOfDay === 'night' ? 'Noche' : 'Día'}.`,
    `Consejo: Mantén un radio de 24 a 32 bloques de distancia para que el motor de Cobblemon genere los spawns.`
  ];

  if (spawn.condition.biomes.some(b => b.includes('badlands') || b.includes('desert'))) {
    blockTip = `⚡ TRUCO DE GRANJA: Construye una plataforma industrial con Terracota Roja, Arena de Alma o bloques de Magma.`;
    requiredBlocks = ['Red Terracotta', 'Sand', 'Magma Block', 'Netherrack'];
    steps = [
      `Ubicación: Encuentra biomas cálidos como Badlands, Desierto o zonas rocosas.`,
      `Estructura: Construye una plataforma de 11x11 bloques de Terracota Roja o Arena con Magma en el centro.`,
      `Condiciones: Iluminación natural sin bloqueos de techo durante el día.`,
      `Consejo: Limpia mobs hostiles cercanos para liberar el límite de spawns (cap de entidades).`
    ];
  } else if (spawn.condition.biomes.some(b => b.includes('cave') || b.includes('dark'))) {
    blockTip = `⚡ TRUCO DE GRANJA: Diseña una cámara subterránea oscura a capa profunda (Y < 0) usando Piedra Profunda (Deepslate) y bloques de Pizarra.`;
    requiredBlocks = ['Deepslate', 'Cobbled Deepslate', 'Sculk', 'Obsidian'];
    steps = [
      `Ubicación: Desciende por debajo del nivel Y=0 en cuevas profundas o Deep Dark.`,
      `Estructura: Crea un recinto cerrado de 9x9x4 de alto con suelo de Deepslate o Sculk.`,
      `Condiciones: Mantiene el nivel de luz en 0 (oscuridad total).`,
      `Consejo: Usa antorchas en las zonas exteriores adyacentes para canalizar las apariciones en tu plataforma.`
    ];
  } else if (spawn.context === 'submerged') {
    blockTip = `⚡ TRUCO DE GRANJA: Sumerge un tanque acuático de 7x7x5 de profundidad decorado con Coral, Prismarina y Linternas Marinas.`;
    requiredBlocks = ['Prismarine', 'Brain Coral', 'Sea Lantern', 'Kelp'];
    steps = [
      `Ubicación: Ve a biomas de Océano, Océano Profundo o Ríos.`,
      `Estructura: Construye una piscina o recinto acuático sumergido de 7x7x5 de profundidad con Prismarina en el fondo.`,
      `Condiciones: Totalmente lleno de agua (bloques fuente) decorado con Coral y Algas.`,
      `Consejo: Mantén la zona libre de construcciones terrestres flotantes.`
    ];
  }

  return {
    pokemonId,
    naturalLanguageInstruction: blockTip,
    requiredBlocks,
    steps,
    spawn
  };
}
