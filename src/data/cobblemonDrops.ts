import { PokemonDrop, DropItem } from '../types/diosesmon';

export const COBBLEMON_DROPS: PokemonDrop[] = [
  {
    pokemonId: 'bulbasaur',
    pokemonName: 'Bulbasaur',
    drops: [
      { itemId: 'minecraft:vine', name: 'Vine', icon: '🌿', percentage: 70, minQuantity: 1, maxQuantity: 3, lootingEffect: '+1 por nivel de Looting' },
      { itemId: 'cobblemon:miracle_seed', name: 'Miracle Seed', icon: '🌱', percentage: 10, minQuantity: 1, maxQuantity: 1, lootingEffect: '+2% por Looting' }
    ]
  },
  {
    pokemonId: 'charmander',
    pokemonName: 'Charmander',
    drops: [
      { itemId: 'minecraft:blaze_powder', name: 'Blaze Powder', icon: '🔥', percentage: 65, minQuantity: 1, maxQuantity: 2, lootingEffect: '+1 por nivel de Looting' },
      { itemId: 'cobblemon:charcoal', name: 'Charcoal', icon: '🪵', percentage: 40, minQuantity: 1, maxQuantity: 3 }
    ]
  },
  {
    pokemonId: 'squirtle',
    pokemonName: 'Squirtle',
    drops: [
      { itemId: 'minecraft:scute', name: 'Turtle Scute', icon: '🐢', percentage: 35, minQuantity: 1, maxQuantity: 1 },
      { itemId: 'minecraft:prismarine_crystals', name: 'Prismarine Crystals', icon: '💎', percentage: 50, minQuantity: 1, maxQuantity: 2 }
    ]
  },
  {
    pokemonId: 'pikachu',
    pokemonName: 'Pikachu',
    drops: [
      { itemId: 'cobblemon:thunder_stone', name: 'Thunder Stone Fragment', icon: '⚡', percentage: 25, minQuantity: 1, maxQuantity: 2 },
      { itemId: 'minecraft:redstone', name: 'Redstone Dust', icon: '🔴', percentage: 80, minQuantity: 2, maxQuantity: 5 }
    ]
  },
  {
    pokemonId: 'gengar',
    pokemonName: 'Gengar',
    drops: [
      { itemId: 'minecraft:phantom_membrane', name: 'Phantom Membrane', icon: '👻', percentage: 75, minQuantity: 1, maxQuantity: 2 },
      { itemId: 'cobblemon:spell_tag', name: 'Spell Tag', icon: '📜', percentage: 15, minQuantity: 1, maxQuantity: 1 }
    ]
  },
  {
    pokemonId: 'gyarados',
    pokemonName: 'Gyarados',
    drops: [
      { itemId: 'cobblemon:dragon_scale', name: 'Dragon Scale', icon: '🐲', percentage: 20, minQuantity: 1, maxQuantity: 1 },
      { itemId: 'minecraft:cod', name: 'Raw Cod', icon: '🐟', percentage: 90, minQuantity: 3, maxQuantity: 8 }
    ]
  },
  {
    pokemonId: 'snorlax',
    pokemonName: 'Snorlax',
    drops: [
      { itemId: 'cobblemon:leftovers', name: 'Leftovers', icon: '🍎', percentage: 12, minQuantity: 1, maxQuantity: 1, lootingEffect: '+3% por Looting' },
      { itemId: 'minecraft:cooked_beef', name: 'Cooked Beef', icon: '🥩', percentage: 100, minQuantity: 4, maxQuantity: 10 }
    ]
  },
  {
    pokemonId: 'dragonite',
    pokemonName: 'Dragonite',
    drops: [
      { itemId: 'cobblemon:dragon_fang', name: 'Dragon Fang', icon: '🐉', percentage: 25, minQuantity: 1, maxQuantity: 1 },
      { itemId: 'minecraft:diamond', name: 'Diamond', icon: '💎', percentage: 30, minQuantity: 1, maxQuantity: 3 }
    ]
  },
  {
    pokemonId: 'lucario',
    pokemonName: 'Lucario',
    drops: [
      { itemId: 'cobblemon:black_belt', name: 'Black Belt', icon: '🥋', percentage: 20, minQuantity: 1, maxQuantity: 1 },
      { itemId: 'minecraft:iron_ingot', name: 'Iron Ingot', icon: '🪙', percentage: 85, minQuantity: 2, maxQuantity: 4 }
    ]
  },
  {
    pokemonId: 'garchomp',
    pokemonName: 'Garchomp',
    drops: [
      { itemId: 'cobblemon:soft_sand', name: 'Soft Sand', icon: '⏳', percentage: 60, minQuantity: 2, maxQuantity: 5 },
      { itemId: 'cobblemon:dragon_scale', name: 'Dragon Scale', icon: '🐲', percentage: 25, minQuantity: 1, maxQuantity: 1 }
    ]
  },
  {
    pokemonId: 'ceruledge',
    pokemonName: 'Ceruledge',
    drops: [
      { itemId: 'minecraft:netherite_scrap', name: 'Netherite Scrap', icon: '🧱', percentage: 5, minQuantity: 1, maxQuantity: 1, lootingEffect: '+1.5% por Looting' },
      { itemId: 'cobblemon:charcoal', name: 'Charcoal', icon: '🪵', percentage: 80, minQuantity: 2, maxQuantity: 6 }
    ]
  },
  {
    pokemonId: 'tinkaton',
    pokemonName: 'Tinkaton',
    drops: [
      { itemId: 'minecraft:iron_block', name: 'Iron Block', icon: '🧊', percentage: 40, minQuantity: 1, maxQuantity: 2 },
      { itemId: 'cobblemon:fairy_feather', name: 'Fairy Feather', icon: '🪶', percentage: 25, minQuantity: 1, maxQuantity: 1 }
    ]
  }
];

export const getDropsForPokemon = (pokemonId: string): DropItem[] => {
  const match = COBBLEMON_DROPS.find(d => d.pokemonId.toLowerCase() === pokemonId.toLowerCase());
  return match ? match.drops : [];
};
