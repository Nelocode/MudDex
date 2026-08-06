import { SpawnEntry, TimeOfDay, WeatherCondition, SpawnBucket } from '../types/diosesmon';
import { COBBLEMON_SPAWNS, BIOME_CATEGORIES } from '../data/cobblemonSpawns';
import { getPokemonById } from '../data/cobblemonPokedex';

export interface SpawnFilter {
  biomeId?: string;
  categoryCategoryId?: string;
  timeOfDay?: TimeOfDay;
  weather?: WeatherCondition;
  bucket?: string;
  searchQuery?: string;
}

export function filterSpawns(filter: SpawnFilter): SpawnEntry[] {
  return COBBLEMON_SPAWNS.filter(entry => {
    // Biome filter
    if (filter.biomeId && filter.biomeId !== 'all') {
      const matchBiome = entry.condition.biomes.some(b =>
        b.toLowerCase().includes(filter.biomeId!.toLowerCase())
      );
      if (!matchBiome) return false;
    }

    // Category filter
    if (filter.categoryCategoryId && filter.categoryCategoryId !== 'all') {
      const cat = BIOME_CATEGORIES.find(c => c.id === filter.categoryCategoryId);
      if (cat) {
        const catBiomes = cat.biomes.flatMap(b => [b.id, b.tag || '']);
        const matchCat = entry.condition.biomes.some(b =>
          catBiomes.some(cb => cb && (b.toLowerCase().includes(cb.toLowerCase()) || b.toLowerCase().includes(cat.id)))
        );
        if (!matchCat) return false;
      }
    }

    // Time of Day
    if (filter.timeOfDay && filter.timeOfDay !== 'any') {
      if (entry.condition.timeOfDay && entry.condition.timeOfDay !== 'any' && entry.condition.timeOfDay !== filter.timeOfDay) {
        return false;
      }
    }

    // Weather
    if (filter.weather && filter.weather !== 'any') {
      if (entry.condition.weather && entry.condition.weather !== 'any' && entry.condition.weather !== filter.weather) {
        return false;
      }
    }

    // Bucket rarity
    if (filter.bucket && filter.bucket !== 'all') {
      if (entry.bucket !== filter.bucket) return false;
    }

    // Search Query
    if (filter.searchQuery && filter.searchQuery.trim() !== '') {
      const q = filter.searchQuery.toLowerCase();
      const pokemon = getPokemonById(entry.pokemonId);
      const nameMatch = pokemon ? pokemon.name.toLowerCase().includes(q) : false;
      const idMatch = entry.pokemonId.toLowerCase().includes(q);
      const biomeMatch = entry.condition.biomes.some(b => b.toLowerCase().includes(q));
      if (!nameMatch && !idMatch && !biomeMatch) return false;
    }

    return true;
  });
}

export interface HabitatRecipe {
  pokemonId: string;
  recommendedBiome: string;
  recommendedTime: string;
  recommendedWeather: string;
  altitudeHint: string;
  lightHint: string;
  skyHint: string;
  blockHackInstruction: string;
  neededBlocks: string[];
  bucket: SpawnBucket;
  weight: number;
}

export function getSpawnRecipeForPokemon(pokemonId: string): HabitatRecipe | null {
  const entry = COBBLEMON_SPAWNS.find(s => s.pokemonId.toLowerCase() === pokemonId.toLowerCase());
  const pokemon = getPokemonById(pokemonId);
  if (!entry || !pokemon) return null;

  const mainBiome = entry.condition.biomes[0] || 'Cualquier bioma habitual';
  const cleanBiome = mainBiome.replace('#cobblemon:', '').replace('minecraft:', '').replace('_', ' ').toUpperCase();

  const mainType = pokemon.types[0] || 'normal';

  let neededBlocks: string[] = ['Bloques de Pasto'];
  let blockHackInstruction = 'Construye una plataforma plana de pasto natural despejada de al menos 9x9 bloques en la superficie.';

  // Natural language block placement recipes per type & species
  if (pokemon.id === 'snorlax' || pokemon.id === 'munchlax') {
    neededBlocks = ['Bloques de Heno (Hay Bales)', 'Pasto'];
    blockHackInstruction = '🧱 TRUCO DE GRANJA: Coloca una plataforma de 5x5 de Bloques de Heno (Hay Bales) sobre pasto natural en Llanuras (Plains). Esto eleva la tasa de spawns de Snorlax en un 90%.';
  } else if (pokemon.id === 'pikachu' || pokemon.id === 'raichu') {
    neededBlocks = ['Bloques de Cobre', 'Pararrayos', 'Hojas de Roble'];
    blockHackInstruction = '⚡ TRUCO DE GRANJA: Coloca un Pararrayos sobre Bloques de Cobre en un bioma de Bosque a altura Y > 70 para forzar el pool eléctrico.';
  } else if (pokemon.id === 'gengar' || pokemon.id === 'gastly' || pokemon.id === 'darkrai' || pokemon.id === 'mimikyu') {
    neededBlocks = ['Obsidiana Llorosa', 'Arena de Almas (Soul Sand)', 'Ladrillos del Nether'];
    blockHackInstruction = '👻 TRUCO DE GRANJA: Construye una sala subterránea a nivel de luz 0 rodeada de Obsidiana Llorosa o Arena de Almas a capa Y < 40 sin vista al cielo.';
  } else if (pokemon.id === 'ceruledge' || pokemon.id === 'charizard' || mainType === 'fire') {
    neededBlocks = ['Bloques de Magma', 'Terracota Roja', 'Ladrillos del Nether'];
    blockHackInstruction = '🔥 TRUCO DE GRANJA: Construye una plataforma horizontal de Bloques de Magma o Terracota Roja en Badlands/Desierto a capa Y > 85 con clima despejado.';
  } else if (mainType === 'water') {
    neededBlocks = ['Prismarina', 'Linternas Marinas', 'Agua de Manantial'];
    blockHackInstruction = '🌊 TRUCO DE GRANJA: Construye una piscina o estanque de 7x7 de profundidad 3 acuñado con Bloques de Prismarina y Linternas Marinas en Océano o Río.';
  } else if (mainType === 'grass' || mainType === 'bug') {
    neededBlocks = ['Bloques de Musgo (Moss)', 'Hojas de Selva', 'Flores'];
    blockHackInstruction = '🌿 TRUCO DE GRANJA: Cubre una plataforma con Bloques de Musgo y Hojas de Selva rodeadas de flores en un bioma de Jungla para priorizar la aparición de tipo Planta.';
  } else if (mainType === 'dragon' || mainType === 'flying') {
    neededBlocks = ['Piedra Pulida', 'Bloques de Prismarina'];
    blockHackInstruction = '🐉 TRUCO DE GRANJA: Construye una torre o altar despejado en los picos de las montañas a una altura elevada Y = 100 a Y = 160 con vista directa al cielo.';
  } else if (mainType === 'steel' || mainType === 'fighting') {
    neededBlocks = ['Bloques de Hierro', 'Yunques', 'Piedra Lisa'];
    blockHackInstruction = '⚙️ TRUCO DE GRANJA: Coloca una plataforma industrial con Bloques de Hierro o Yunques en Picos Pedregosos (Stony Peaks) a capa Y > 80.';
  } else if (mainType === 'ghost' || mainType === 'dark') {
    neededBlocks = ['Arena de Almas', 'Madera Oscura', 'Obsidiana'];
    blockHackInstruction = '🌘 TRUCO DE GRANJA: Construye un altar de Madera Oscura y Arena de Almas en Bosque Oscuro (Dark Forest) durante la noche.';
  }

  return {
    pokemonId: entry.pokemonId,
    recommendedBiome: cleanBiome,
    recommendedTime: entry.condition.timeOfDay ? entry.condition.timeOfDay.toUpperCase() : 'Día o Noche (Cualquiera)',
    recommendedWeather: entry.condition.weather ? entry.condition.weather.toUpperCase() : 'Despejado o Lluvia',
    altitudeHint: entry.condition.minY !== undefined ? `Capa Y entre ${entry.condition.minY} y ${entry.condition.maxY || 256}` : 'Cualquier altura Y',
    lightHint: entry.condition.minLight !== undefined ? `Luz mínima: ${entry.condition.minLight}` : 'Sin restricción de luz',
    skyHint: entry.condition.canSeeSky ? 'Requiere vista directa al cielo (Superficie)' : 'En cueva / bajo techo',
    blockHackInstruction,
    neededBlocks,
    bucket: entry.bucket,
    weight: entry.weight
  };
}
