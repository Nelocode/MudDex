import { PokemonDrop, DropItem } from '../types/diosesmon';
import { COBBLEMON_POKEDEX } from './cobblemonPokedex';

// Helper to generate realistic Cobblemon drop tables for ALL 1,025 Pokémon species
export function generateFullDrops(): PokemonDrop[] {
  return COBBLEMON_POKEDEX.map(pokemon => {
    const drops: DropItem[] = [];
    const mainType = pokemon.types[0] || 'normal';
    const subType = pokemon.types[1];

    // Check if this Pokémon is known to drop Life Orb (Vidaesfera)
    const isLifeOrbHolder = [
      'absol', 'gengar', 'darkrai', 'ceruledge', 'sharpedo', 'mewtwo', 'yveltal', 'honchkrow',
      'zoroark', 'chandelure', 'dragonite', 'garchomp', 'rayquaza', 'tyranitar', 'greninja',
      'blaziken', 'lucario', 'dragapult', 'mimikyu'
    ].includes(pokemon.id.toLowerCase()) || (pokemon.catchRate <= 45 && (mainType === 'dark' || mainType === 'ghost' || mainType === 'dragon'));

    if (isLifeOrbHolder) {
      drops.push({
        itemId: 'cobblemon:life_orb',
        name: 'Life Orb (Vidaesfera)',
        icon: '🔮',
        percentage: pokemon.catchRate <= 5 ? 100 : 10,
        minQuantity: 1,
        maxQuantity: 1,
        lootingEffect: '+3% por nivel de Looting'
      });
    }

    // Type-specific competitive drops & evolution items
    if (mainType === 'normal' || subType === 'normal') {
      if (['snorlax', 'munchlax', 'slaking', 'blissey', 'swalot'].includes(pokemon.id.toLowerCase()) || pokemon.weightKg > 100) {
        drops.push({ itemId: 'cobblemon:leftovers', name: 'Leftovers (Restos)', icon: '🍎', percentage: 15, minQuantity: 1, maxQuantity: 1, lootingEffect: '+3% por Looting' });
      }
      drops.push({ itemId: 'minecraft:leather', name: 'Leather (Cuero)', icon: '🟫', percentage: 80, minQuantity: 1, maxQuantity: 3 });
    }

    if (mainType === 'fire' || subType === 'fire') {
      drops.push({ itemId: 'cobblemon:fire_stone', name: 'Fire Stone (Piedra Fuego)', icon: '🔥', percentage: 35, minQuantity: 1, maxQuantity: 1 });
      drops.push({ itemId: 'cobblemon:charcoal', name: 'Charcoal (Carbón)', icon: '🪵', percentage: 75, minQuantity: 1, maxQuantity: 4 });
    }

    if (mainType === 'water' || subType === 'water') {
      drops.push({ itemId: 'cobblemon:water_stone', name: 'Water Stone (Piedra Agua)', icon: '💧', percentage: 35, minQuantity: 1, maxQuantity: 1 });
      drops.push({ itemId: 'cobblemon:mystic_water', name: 'Mystic Water (Agua Mística)', icon: '🌊', percentage: 25, minQuantity: 1, maxQuantity: 1 });
    }

    if (mainType === 'grass' || subType === 'grass') {
      drops.push({ itemId: 'cobblemon:leaf_stone', name: 'Leaf Stone (Piedra Hoja)', icon: '🍃', percentage: 35, minQuantity: 1, maxQuantity: 1 });
      drops.push({ itemId: 'cobblemon:miracle_seed', name: 'Miracle Seed (Semilla Milagro)', icon: '🌱', percentage: 25, minQuantity: 1, maxQuantity: 1 });
    }

    if (mainType === 'electric' || subType === 'electric') {
      drops.push({ itemId: 'cobblemon:thunder_stone', name: 'Thunder Stone (Piedra Trueno)', icon: '⚡', percentage: 35, minQuantity: 1, maxQuantity: 1 });
      drops.push({ itemId: 'minecraft:redstone', name: 'Redstone Dust', icon: '🔴', percentage: 85, minQuantity: 2, maxQuantity: 5 });
    }

    if (mainType === 'fighting' || subType === 'fighting') {
      drops.push({ itemId: 'cobblemon:choice_band', name: 'Choice Band (Cinta Elegida)', icon: '🎗️', percentage: 10, minQuantity: 1, maxQuantity: 1 });
      drops.push({ itemId: 'cobblemon:black_belt', name: 'Black Belt (Cinturón Negro)', icon: '🥋', percentage: 25, minQuantity: 1, maxQuantity: 1 });
    }

    if (mainType === 'psychic' || subType === 'psychic') {
      drops.push({ itemId: 'cobblemon:choice_specs', name: 'Choice Specs (Gafas Elegidas)', icon: '👓', percentage: 10, minQuantity: 1, maxQuantity: 1 });
      drops.push({ itemId: 'cobblemon:twisted_spoon', name: 'Twisted Spoon (Cuchara Torcida)', icon: '🥄', percentage: 30, minQuantity: 1, maxQuantity: 1 });
    }

    if (mainType === 'ghost' || subType === 'ghost') {
      drops.push({ itemId: 'cobblemon:choice_scarf', name: 'Choice Scarf (Pañuelo Elegido)', icon: '🧣', percentage: 10, minQuantity: 1, maxQuantity: 1 });
      drops.push({ itemId: 'cobblemon:spell_tag', name: 'Spell Tag (Hechizo)', icon: '📜', percentage: 25, minQuantity: 1, maxQuantity: 1 });
    }

    if (mainType === 'dragon' || subType === 'dragon') {
      drops.push({ itemId: 'cobblemon:dragon_scale', name: 'Dragon Scale (Escama Dragón)', icon: '🐲', percentage: 30, minQuantity: 1, maxQuantity: 1 });
      drops.push({ itemId: 'cobblemon:dragon_fang', name: 'Dragon Fang (Diente Dragón)', icon: '🐉', percentage: 25, minQuantity: 1, maxQuantity: 1 });
    }

    if (mainType === 'steel' || subType === 'steel') {
      drops.push({ itemId: 'cobblemon:heavy_duty_boots', name: 'Heavy-Duty Boots (Botas Gruesas)', icon: '👢', percentage: 12, minQuantity: 1, maxQuantity: 1 });
      drops.push({ itemId: 'minecraft:iron_ingot', name: 'Iron Ingot (Lingote de Hierro)', icon: '🪙', percentage: 85, minQuantity: 2, maxQuantity: 4 });
    }

    if (mainType === 'rock' || mainType === 'ground' || subType === 'rock' || subType === 'ground') {
      drops.push({ itemId: 'cobblemon:rocky_helmet', name: 'Rocky Helmet (Casco Dentado)', icon: '🪖', percentage: 12, minQuantity: 1, maxQuantity: 1 });
      drops.push({ itemId: 'cobblemon:soft_sand', name: 'Soft Sand (Arena Fina)', icon: '⏳', percentage: 60, minQuantity: 2, maxQuantity: 5 });
    }

    if (mainType === 'fairy' || subType === 'fairy') {
      drops.push({ itemId: 'cobblemon:focus_sash', name: 'Focus Sash (Banda Focus)', icon: '🎗️', percentage: 12, minQuantity: 1, maxQuantity: 1 });
      drops.push({ itemId: 'cobblemon:fairy_feather', name: 'Fairy Feather (Pluma Hada)', icon: '🪶', percentage: 30, minQuantity: 1, maxQuantity: 1 });
    }

    // Default general drop
    if (drops.length < 2) {
      drops.push({ itemId: 'cobblemon:exp_candy_m', name: 'EXP Candy M (Caramelo Exp M)', icon: '🍬', percentage: 50, minQuantity: 1, maxQuantity: 2 });
    }

    return {
      pokemonId: pokemon.id,
      pokemonName: pokemon.name,
      drops
    };
  });
}

export const COBBLEMON_DROPS: PokemonDrop[] = generateFullDrops();

export const getDropsForPokemon = (pokemonId: string): DropItem[] => {
  const match = COBBLEMON_DROPS.find(d => d.pokemonId.toLowerCase() === pokemonId.toLowerCase());
  return match ? match.drops : [];
};
