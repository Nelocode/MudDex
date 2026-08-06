import { PokeBall } from '../types/diosesmon';

export const COBBLEMON_POKEBALLS: PokeBall[] = [
  {
    id: 'poke-ball',
    name: 'Poké Ball',
    icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/pokeball.png',
    description: 'La Pokébola estándar para atrapar Pokémon salvajes.',
    craftingRecipe: 'Red Apricorn + Stone Button',
    getMultiplier: () => 1.0
  },
  {
    id: 'great-ball',
    name: 'Great Ball',
    icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png',
    description: 'Una bola de alto rendimiento que proporciona mayor tasa de éxito.',
    craftingRecipe: 'Blue Apricorn + Red Apricorn + Stone Button',
    getMultiplier: () => 1.5
  },
  {
    id: 'ultra-ball',
    name: 'Ultra Ball',
    icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png',
    description: 'Bola ultra eficiente con un multiplicador de 2.0x.',
    craftingRecipe: 'Black Apricorn + Yellow Apricorn + Stone Button',
    getMultiplier: () => 2.0
  },
  {
    id: 'dusk-ball',
    name: 'Dusk Ball (Malla Oscura)',
    icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dusk-ball.png',
    description: 'Multiplicador 3.0x si se utiliza de noche o dentro de cuevas (canSeeSky = false).',
    craftingRecipe: 'Green Apricorn + Black Apricorn',
    getMultiplier: (ctx) => (ctx.isNightOrCave ? 3.0 : 1.0)
  },
  {
    id: 'net-ball',
    name: 'Net Ball (Red Ball)',
    icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/net-ball.png',
    description: 'Multiplicador 3.5x al intentar capturar Pokémon de tipo Agua o Bicho.',
    craftingRecipe: 'Blue Apricorn + Black Apricorn',
    getMultiplier: (ctx, pokemon) =>
      pokemon.types.includes('water') || pokemon.types.includes('bug') ? 3.5 : 1.0
  },
  {
    id: 'quick-ball',
    name: 'Quick Ball (Veloz Ball)',
    icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/quick-ball.png',
    description: 'Multiplicador masivo de 5.0x si se lanza en el Turno 1 del combate.',
    craftingRecipe: 'Yellow Apricorn + Blue Apricorn',
    getMultiplier: (ctx) => (ctx.isTurnOne ? 5.0 : 1.0)
  },
  {
    id: 'heavy-ball',
    name: 'Heavy Ball (Pesada Ball)',
    icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/heavy-ball.png',
    description: 'Otorga bonificador masivo para Pokémon pesados (ej. Snorlax, Gyarados, Tyranitar).',
    craftingRecipe: 'Black Apricorn + Iron Ingot',
    getMultiplier: (ctx, pokemon) => {
      const weight = pokemon.weightKg || 10;
      if (weight >= 300) return 4.0;
      if (weight >= 200) return 3.0;
      if (weight >= 100) return 2.0;
      return 1.0;
    }
  },
  {
    id: 'fast-ball',
    name: 'Fast Ball (Rápida Ball)',
    icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fast-ball.png',
    description: 'Multiplicador 4.0x para Pokémon con estadística de Velocidad Base ≥ 100.',
    craftingRecipe: 'White Apricorn + Red Apricorn',
    getMultiplier: (ctx, pokemon) => (pokemon.baseStats.speed >= 100 ? 4.0 : 1.0)
  },
  {
    id: 'repeat-ball',
    name: 'Repeat Ball (Acopio Ball)',
    icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/repeat-ball.png',
    description: 'Multiplicador 3.5x si la especie de Pokémon ya fue capturada anteriormente.',
    craftingRecipe: 'Yellow Apricorn + Red Apricorn',
    getMultiplier: (ctx) => (ctx.hasCaughtBefore ? 3.5 : 1.0)
  },
  {
    id: 'lure-ball',
    name: 'Lure Ball (Cebo Ball)',
    icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lure-ball.png',
    description: 'Multiplicador 4.0x para Pokémon pescados en agua.',
    craftingRecipe: 'Blue Apricorn + Red Apricorn',
    getMultiplier: (ctx, pokemon) => (pokemon.types.includes('water') ? 4.0 : 1.2)
  },
  {
    id: 'master-ball',
    name: 'Master Ball',
    icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png',
    description: 'Captura garantizada (100%) sin fallo.',
    craftingRecipe: 'Drop raro de Boss / Eventos Diosesmon',
    getMultiplier: () => 255.0
  }
];
