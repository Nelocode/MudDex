import { PokemonDrop, DropItem } from '../types/diosesmon';

export const COBBLEMON_DROPS: PokemonDrop[] = [
  {
    pokemonId: 'absol',
    pokemonName: 'Absol',
    drops: [
      { itemId: 'cobblemon:life_orb', name: 'Life Orb (Vidaesfera)', icon: '🔮', percentage: 10, minQuantity: 1, maxQuantity: 1, lootingEffect: '+3% por nivel de Looting' },
      { itemId: 'minecraft:dark_prismarine', name: 'Dark Prismarine', icon: '🌑', percentage: 50, minQuantity: 1, maxQuantity: 2 }
    ]
  },
  {
    pokemonId: 'gengar',
    pokemonName: 'Gengar',
    drops: [
      { itemId: 'cobblemon:life_orb', name: 'Life Orb (Vidaesfera)', icon: '🔮', percentage: 8, minQuantity: 1, maxQuantity: 1, lootingEffect: '+2% por nivel de Looting' },
      { itemId: 'cobblemon:choice_specs', name: 'Choice Specs (Gafas Elegidas)', icon: '👓', percentage: 10, minQuantity: 1, maxQuantity: 1 },
      { itemId: 'cobblemon:spell_tag', name: 'Spell Tag', icon: '📜', percentage: 20, minQuantity: 1, maxQuantity: 1 }
    ]
  },
  {
    pokemonId: 'darkrai',
    pokemonName: 'Darkrai',
    drops: [
      { itemId: 'cobblemon:life_orb', name: 'Life Orb (Vidaesfera)', icon: '🔮', percentage: 100, minQuantity: 1, maxQuantity: 1 },
      { itemId: 'minecraft:nether_star', name: 'Nether Star', icon: '⭐', percentage: 100, minQuantity: 1, maxQuantity: 1 }
    ]
  },
  {
    pokemonId: 'ceruledge',
    pokemonName: 'Ceruledge',
    drops: [
      { itemId: 'cobblemon:life_orb', name: 'Life Orb (Vidaesfera)', icon: '🔮', percentage: 12, minQuantity: 1, maxQuantity: 1, lootingEffect: '+3% por nivel de Looting' },
      { itemId: 'minecraft:netherite_scrap', name: 'Netherite Scrap', icon: '🧱', percentage: 10, minQuantity: 1, maxQuantity: 1 },
      { itemId: 'cobblemon:charcoal', name: 'Charcoal', icon: '🪵', percentage: 80, minQuantity: 2, maxQuantity: 6 }
    ]
  },
  {
    pokemonId: 'sharpedo',
    pokemonName: 'Sharpedo',
    drops: [
      { itemId: 'cobblemon:life_orb', name: 'Life Orb (Vidaesfera)', icon: '🔮', percentage: 10, minQuantity: 1, maxQuantity: 1 },
      { itemId: 'minecraft:cod', name: 'Raw Cod', icon: '🐟', percentage: 90, minQuantity: 3, maxQuantity: 6 }
    ]
  },
  {
    pokemonId: 'snorlax',
    pokemonName: 'Snorlax',
    drops: [
      { itemId: 'cobblemon:leftovers', name: 'Leftovers (Restos)', icon: '🍎', percentage: 15, minQuantity: 1, maxQuantity: 1, lootingEffect: '+3% por Looting' },
      { itemId: 'cobblemon:assault_vest', name: 'Assault Vest (Chaleco Asalto)', icon: '🎽', percentage: 10, minQuantity: 1, maxQuantity: 1 },
      { itemId: 'minecraft:cooked_beef', name: 'Cooked Beef', icon: '🥩', percentage: 100, minQuantity: 4, maxQuantity: 10 }
    ]
  },
  {
    pokemonId: 'machamp',
    pokemonName: 'Machamp',
    drops: [
      { itemId: 'cobblemon:choice_band', name: 'Choice Band (Cinta Elegida)', icon: '🎗️', percentage: 12, minQuantity: 1, maxQuantity: 1 },
      { itemId: 'cobblemon:black_belt', name: 'Black Belt (Cinturón Negro)', icon: '🥋', percentage: 25, minQuantity: 1, maxQuantity: 1 }
    ]
  },
  {
    pokemonId: 'dragapult',
    pokemonName: 'Dragapult',
    drops: [
      { itemId: 'cobblemon:choice_scarf', name: 'Choice Scarf (Pañuelo Elegido)', icon: '🧣', percentage: 12, minQuantity: 1, maxQuantity: 1 },
      { itemId: 'cobblemon:dragon_scale', name: 'Dragon Scale (Escama Dragón)', icon: '🐲', percentage: 30, minQuantity: 1, maxQuantity: 1 }
    ]
  },
  {
    pokemonId: 'gardevoir',
    pokemonName: 'Gardevoir',
    drops: [
      { itemId: 'cobblemon:choice_specs', name: 'Choice Specs (Gafas Elegidas)', icon: '👓', percentage: 12, minQuantity: 1, maxQuantity: 1 },
      { itemId: 'cobblemon:dawn_stone', name: 'Dawn Stone (Piedra Alba)', icon: '✨', percentage: 25, minQuantity: 1, maxQuantity: 1 }
    ]
  },
  {
    pokemonId: 'lucario',
    pokemonName: 'Lucario',
    drops: [
      { itemId: 'cobblemon:focus_sash', name: 'Focus Sash (Banda Focus)', icon: '🎗️', percentage: 15, minQuantity: 1, maxQuantity: 1 },
      { itemId: 'minecraft:iron_ingot', name: 'Iron Ingot', icon: '🪙', percentage: 85, minQuantity: 2, maxQuantity: 4 }
    ]
  },
  {
    pokemonId: 'pikachu',
    pokemonName: 'Pikachu',
    drops: [
      { itemId: 'cobblemon:thunder_stone', name: 'Thunder Stone (Piedra Trueno)', icon: '⚡', percentage: 30, minQuantity: 1, maxQuantity: 1 },
      { itemId: 'cobblemon:light_ball', name: 'Light Ball (Bolaguardo)', icon: '🔮', percentage: 5, minQuantity: 1, maxQuantity: 1 },
      { itemId: 'minecraft:redstone', name: 'Redstone Dust', icon: '🔴', percentage: 80, minQuantity: 2, maxQuantity: 5 }
    ]
  },
  {
    pokemonId: 'charizard',
    pokemonName: 'Charizard',
    drops: [
      { itemId: 'cobblemon:fire_stone', name: 'Fire Stone (Piedra Fuego)', icon: '🔥', percentage: 40, minQuantity: 1, maxQuantity: 1 },
      { itemId: 'cobblemon:charcoal', name: 'Charcoal (Carbón)', icon: '🪵', percentage: 70, minQuantity: 2, maxQuantity: 5 }
    ]
  },
  {
    pokemonId: 'blastoise',
    pokemonName: 'Blastoise',
    drops: [
      { itemId: 'cobblemon:water_stone', name: 'Water Stone (Piedra Agua)', icon: '💧', percentage: 40, minQuantity: 1, maxQuantity: 1 },
      { itemId: 'cobblemon:mystic_water', name: 'Mystic Water (Agua Mística)', icon: '🌊', percentage: 25, minQuantity: 1, maxQuantity: 1 }
    ]
  },
  {
    pokemonId: 'venusaur',
    pokemonName: 'Venusaur',
    drops: [
      { itemId: 'cobblemon:leaf_stone', name: 'Leaf Stone (Piedra Hoja)', icon: '🍃', percentage: 40, minQuantity: 1, maxQuantity: 1 },
      { itemId: 'cobblemon:miracle_seed', name: 'Miracle Seed (Semilla Milagro)', icon: '🌱', percentage: 25, minQuantity: 1, maxQuantity: 1 }
    ]
  },
  {
    pokemonId: 'garchomp',
    pokemonName: 'Garchomp',
    drops: [
      { itemId: 'cobblemon:rocky_helmet', name: 'Rocky Helmet (Casco Dentado)', icon: '🪖', percentage: 15, minQuantity: 1, maxQuantity: 1 },
      { itemId: 'cobblemon:dragon_fang', name: 'Dragon Fang (Diente Dragón)', icon: '🐉', percentage: 25, minQuantity: 1, maxQuantity: 1 }
    ]
  },
  {
    pokemonId: 'tinkaton',
    pokemonName: 'Tinkaton',
    drops: [
      { itemId: 'cobblemon:heavy_duty_boots', name: 'Heavy-Duty Boots (Botas Gruesas)', icon: '👢', percentage: 15, minQuantity: 1, maxQuantity: 1 },
      { itemId: 'minecraft:iron_block', name: 'Iron Block', icon: '🧊', percentage: 40, minQuantity: 1, maxQuantity: 2 }
    ]
  },
  {
    pokemonId: 'gyarados',
    pokemonName: 'Gyarados',
    drops: [
      { itemId: 'cobblemon:dragon_scale', name: 'Dragon Scale (Escama Dragón)', icon: '🐲', percentage: 25, minQuantity: 1, maxQuantity: 1 },
      { itemId: 'minecraft:prismarine_shard', name: 'Prismarine Shard', icon: '💎', percentage: 70, minQuantity: 2, maxQuantity: 4 }
    ]
  },
  {
    pokemonId: 'mewtwo',
    pokemonName: 'Mewtwo',
    drops: [
      { itemId: 'cobblemon:life_orb', name: 'Life Orb (Vidaesfera)', icon: '🔮', percentage: 100, minQuantity: 1, maxQuantity: 1 },
      { itemId: 'cobblemon:choice_specs', name: 'Choice Specs (Gafas Elegidas)', icon: '👓', percentage: 100, minQuantity: 1, maxQuantity: 1 }
    ]
  }
];

export const getDropsForPokemon = (pokemonId: string): DropItem[] => {
  const match = COBBLEMON_DROPS.find(d => d.pokemonId.toLowerCase() === pokemonId.toLowerCase());
  return match ? match.drops : [];
};
