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
  bucket: SpawnBucket;
  weight: number;
}

export function getSpawnRecipeForPokemon(pokemonId: string): HabitatRecipe | null {
  const entry = COBBLEMON_SPAWNS.find(s => s.pokemonId.toLowerCase() === pokemonId.toLowerCase());
  if (!entry) return null;

  const mainBiome = entry.condition.biomes[0] || 'Cualquier bioma habitual';
  const cleanBiome = mainBiome.replace('#cobblemon:', '').replace('minecraft:', '').replace('_', ' ').toUpperCase();

  return {
    pokemonId: entry.pokemonId,
    recommendedBiome: cleanBiome,
    recommendedTime: entry.condition.timeOfDay ? entry.condition.timeOfDay.toUpperCase() : 'Día o Noche (Cualquiera)',
    recommendedWeather: entry.condition.weather ? entry.condition.weather.toUpperCase() : 'Despejado o Lluvia',
    altitudeHint: entry.condition.minY !== undefined ? `Capa Y entre ${entry.condition.minY} y ${entry.condition.maxY || 256}` : 'Cualquier altura Y',
    lightHint: entry.condition.minLight !== undefined ? `Luz mínima: ${entry.condition.minLight}` : 'Sin restricción de luz',
    skyHint: entry.condition.canSeeSky ? 'Requiere vista directa al cielo (Superficie)' : 'En cueva / bajo techo',
    bucket: entry.bucket,
    weight: entry.weight
  };
}
