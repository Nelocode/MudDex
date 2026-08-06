import { Pokemon, PokemonType } from '../types/diosesmon';

// Helper to determine generation from dex number
export function getGen(dex: number): number {
  if (dex <= 151) return 1;
  if (dex <= 251) return 2;
  if (dex <= 386) return 3;
  if (dex <= 493) return 4;
  if (dex <= 649) return 5;
  if (dex <= 721) return 6;
  if (dex <= 809) return 7;
  if (dex <= 905) return 8;
  return 9;
}

// Well-known Pokémon names map for display
const POKEMON_NAMES_MAP: Record<number, { name: string; types: PokemonType[]; catchRate?: number; isAlpha?: boolean }> = {
  1: { name: 'Bulbasaur', types: ['grass', 'poison'], catchRate: 45, isAlpha: true },
  2: { name: 'Ivysaur', types: ['grass', 'poison'], catchRate: 45, isAlpha: true },
  3: { name: 'Venusaur', types: ['grass', 'poison'], catchRate: 45, isAlpha: true },
  4: { name: 'Charmander', types: ['fire'], catchRate: 45, isAlpha: true },
  5: { name: 'Charmeleon', types: ['fire'], catchRate: 45, isAlpha: true },
  6: { name: 'Charizard', types: ['fire', 'flying'], catchRate: 45, isAlpha: true },
  7: { name: 'Squirtle', types: ['water'], catchRate: 45, isAlpha: true },
  8: { name: 'Wartortle', types: ['water'], catchRate: 45, isAlpha: true },
  9: { name: 'Blastoise', types: ['water'], catchRate: 45, isAlpha: true },
  10: { name: 'Caterpie', types: ['bug'], catchRate: 255 },
  12: { name: 'Butterfree', types: ['bug', 'flying'], catchRate: 45, isAlpha: true },
  15: { name: 'Beedrill', types: ['bug', 'poison'], catchRate: 45, isAlpha: true },
  18: { name: 'Pidgeot', types: ['normal', 'flying'], catchRate: 45, isAlpha: true },
  25: { name: 'Pikachu', types: ['electric'], catchRate: 190, isAlpha: true },
  26: { name: 'Raichu', types: ['electric'], catchRate: 75, isAlpha: true },
  38: { name: 'Ninetales', types: ['fire'], catchRate: 75, isAlpha: true },
  59: { name: 'Arcanine', types: ['fire'], catchRate: 75, isAlpha: true },
  65: { name: 'Alakazam', types: ['psychic'], catchRate: 50, isAlpha: true },
  68: { name: 'Machamp', types: ['fighting'], catchRate: 45, isAlpha: true },
  94: { name: 'Gengar', types: ['ghost', 'poison'], catchRate: 45, isAlpha: true },
  130: { name: 'Gyarados', types: ['water', 'flying'], catchRate: 45, isAlpha: true },
  131: { name: 'Lapras', types: ['water', 'ice'], catchRate: 45, isAlpha: true },
  133: { name: 'Eevee', types: ['normal'], catchRate: 45, isAlpha: true },
  134: { name: 'Vaporeon', types: ['water'], catchRate: 45, isAlpha: true },
  135: { name: 'Jolteon', types: ['electric'], catchRate: 45, isAlpha: true },
  136: { name: 'Flareon', types: ['fire'], catchRate: 45, isAlpha: true },
  143: { name: 'Snorlax', types: ['normal'], catchRate: 25, isAlpha: true },
  149: { name: 'Dragonite', types: ['dragon', 'flying'], catchRate: 45, isAlpha: true },
  150: { name: 'Mewtwo', types: ['psychic'], catchRate: 3, isAlpha: true },
  151: { name: 'Mew', types: ['psychic'], catchRate: 45, isAlpha: true },
  152: { name: 'Chikorita', types: ['grass'], catchRate: 45, isAlpha: true },
  155: { name: 'Cyndaquil', types: ['fire'], catchRate: 45, isAlpha: true },
  158: { name: 'Totodile', types: ['water'], catchRate: 45, isAlpha: true },
  196: { name: 'Espeon', types: ['psychic'], catchRate: 45, isAlpha: true },
  197: { name: 'Umbreon', types: ['dark'], catchRate: 45, isAlpha: true },
  212: { name: 'Scizor', types: ['bug', 'steel'], catchRate: 25, isAlpha: true },
  248: { name: 'Tyranitar', types: ['rock', 'dark'], catchRate: 45, isAlpha: true },
  249: { name: 'Lugia', types: ['psychic', 'flying'], catchRate: 3, isAlpha: true },
  250: { name: 'Ho-Oh', types: ['fire', 'flying'], catchRate: 3, isAlpha: true },
  252: { name: 'Treecko', types: ['grass'], catchRate: 45, isAlpha: true },
  255: { name: 'Torchic', types: ['fire'], catchRate: 45, isAlpha: true },
  257: { name: 'Blaziken', types: ['fire', 'fighting'], catchRate: 45, isAlpha: true },
  258: { name: 'Mudkip', types: ['water'], catchRate: 45, isAlpha: true },
  260: { name: 'Swampert', types: ['water', 'ground'], catchRate: 45, isAlpha: true },
  282: { name: 'Gardevoir', types: ['psychic', 'fairy'], catchRate: 45, isAlpha: true },
  384: { name: 'Rayquaza', types: ['dragon', 'flying'], catchRate: 3, isAlpha: true },
  445: { name: 'Garchomp', types: ['dragon', 'ground'], catchRate: 45, isAlpha: true },
  448: { name: 'Lucario', types: ['fighting', 'steel'], catchRate: 45, isAlpha: true },
  470: { name: 'Leafeon', types: ['grass'], catchRate: 45, isAlpha: true },
  471: { name: 'Glaceon', types: ['ice'], catchRate: 45, isAlpha: true },
  487: { name: 'Giratina', types: ['ghost', 'dragon'], catchRate: 3, isAlpha: true },
  493: { name: 'Arceus', types: ['normal'], catchRate: 3, isAlpha: true },
  658: { name: 'Greninja', types: ['water', 'dark'], catchRate: 45, isAlpha: true },
  700: { name: 'Sylveon', types: ['fairy'], catchRate: 45, isAlpha: true },
  778: { name: 'Mimikyu', types: ['ghost', 'fairy'], catchRate: 45, isAlpha: true },
  887: { name: 'Dragapult', types: ['dragon', 'ghost'], catchRate: 45, isAlpha: true },
  906: { name: 'Sprigatito', types: ['grass'], catchRate: 45, isAlpha: true },
  909: { name: 'Fuecoco', types: ['fire'], catchRate: 45, isAlpha: true },
  912: { name: 'Quaxly', types: ['water'], catchRate: 45, isAlpha: true },
  937: { name: 'Ceruledge', types: ['fire', 'ghost'], catchRate: 90, isAlpha: true },
  959: { name: 'Tinkaton', types: ['fairy', 'steel'], catchRate: 45, isAlpha: true },
  1007: { name: 'Koraidon', types: ['fighting', 'dragon'], catchRate: 3, isAlpha: true },
  1008: { name: 'Miraidon', types: ['electric', 'dragon'], catchRate: 3, isAlpha: true }
};

// Generate Full Pokédex Array for all 1,025 Pokémon species
export function generateFullPokedex(): Pokemon[] {
  const pokedex: Pokemon[] = [];

  for (let dex = 1; dex <= 1025; dex++) {
    const known = POKEMON_NAMES_MAP[dex];
    const name = known ? known.name : `Pokémon #${dex}`;
    const id = name.toLowerCase().replace(/[^a-z0-9]/g, '');
    const gen = getGen(dex);

    let types: PokemonType[] = known ? known.types : ['normal'];
    if (!known) {
      if (dex % 18 === 0) types = ['dragon'];
      else if (dex % 17 === 0) types = ['ghost'];
      else if (dex % 16 === 0) types = ['dark'];
      else if (dex % 15 === 0) types = ['steel'];
      else if (dex % 14 === 0) types = ['fairy'];
      else if (dex % 13 === 0) types = ['psychic'];
      else if (dex % 12 === 0) types = ['fire'];
      else if (dex % 11 === 0) types = ['water'];
      else if (dex % 10 === 0) types = ['grass'];
      else if (dex % 9 === 0) types = ['electric'];
      else if (dex % 8 === 0) types = ['ice'];
      else if (dex % 7 === 0) types = ['fighting'];
      else if (dex % 6 === 0) types = ['poison'];
      else if (dex % 5 === 0) types = ['ground'];
      else if (dex % 4 === 0) types = ['flying'];
      else if (dex % 3 === 0) types = ['bug'];
      else if (dex % 2 === 0) types = ['rock'];
      else types = ['normal'];
    }

    const catchRate = known?.catchRate || (dex > 1000 || [150, 151, 249, 250, 384, 487, 493].includes(dex) ? 3 : 45);

    pokedex.push({
      id,
      dexNumber: dex,
      name,
      generation: gen,
      types,
      catchRate,
      baseHp: 60 + (dex % 40),
      weightKg: 10 + (dex % 150),
      heightM: 0.5 + (dex % 3),
      baseStats: {
        hp: 60 + (dex % 50),
        attack: 70 + (dex % 60),
        defense: 65 + (dex % 55),
        specialAttack: 70 + (dex % 60),
        specialDefense: 65 + (dex % 55),
        speed: 60 + (dex % 70)
      },
      abilities: { normal: ['Ability 1'], hidden: 'Hidden Ability' },
      isAlphaAvailable: known?.isAlpha ?? true,
      spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${dex}.gif`,
      artworkUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dex}.png`
    });
  }

  return pokedex;
}

export const COBBLEMON_POKEDEX: Pokemon[] = generateFullPokedex();

export const getPokemonById = (id: string): Pokemon | undefined => {
  return COBBLEMON_POKEDEX.find(p => p.id.toLowerCase() === id.toLowerCase() || String(p.dexNumber) === id);
};
