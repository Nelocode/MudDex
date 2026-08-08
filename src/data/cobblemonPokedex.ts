import { Pokemon, PokemonType } from '../types/diosesmon';
import { POKEMON_NAMES_1025 } from './pokemonNamesList';

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

const POKEMON_NAMES_MAP: Record<number, { name: string; types: PokemonType[]; catchRate?: number; category?: string }> = {
  1: { name: 'Bulbasaur', types: ['grass', 'poison'], catchRate: 45, category: 'Pokémon Semilla' },
  2: { name: 'Ivysaur', types: ['grass', 'poison'], catchRate: 45, category: 'Pokémon Semilla' },
  3: { name: 'Venusaur', types: ['grass', 'poison'], catchRate: 45, category: 'Pokémon Semilla' },
  4: { name: 'Charmander', types: ['fire'], catchRate: 45, category: 'Pokémon Lagartija' },
  5: { name: 'Charmeleon', types: ['fire'], catchRate: 45, category: 'Pokémon Llama' },
  6: { name: 'Charizard', types: ['fire', 'flying'], catchRate: 45, category: 'Pokémon Llama' },
  7: { name: 'Squirtle', types: ['water'], catchRate: 45, category: 'Pokémon Tortuguita' },
  8: { name: 'Wartortle', types: ['water'], catchRate: 45, category: 'Pokémon Tortuga' },
  9: { name: 'Blastoise', types: ['water'], catchRate: 45, category: 'Pokémon Armazón' },
  10: { name: 'Caterpie', types: ['bug'], catchRate: 255, category: 'Pokémon Oruga' },
  12: { name: 'Butterfree', types: ['bug', 'flying'], catchRate: 45, category: 'Pokémon Mariposa' },
  15: { name: 'Beedrill', types: ['bug', 'poison'], catchRate: 45, category: 'Pokémon Abeja Venenosa' },
  18: { name: 'Pidgeot', types: ['normal', 'flying'], catchRate: 45, category: 'Pokémon Pájaro' },
  25: { name: 'Pikachu', types: ['electric'], catchRate: 190, category: 'Pokémon Ratón Electrico' },
  26: { name: 'Raichu', types: ['electric'], catchRate: 75, category: 'Pokémon Ratón' },
  38: { name: 'Ninetales', types: ['fire'], catchRate: 75, category: 'Pokémon Zorro' },
  59: { name: 'Arcanine', types: ['fire'], catchRate: 75, category: 'Pokémon Legendario' },
  65: { name: 'Alakazam', types: ['psychic'], catchRate: 50, category: 'Pokémon Psi' },
  68: { name: 'Machamp', types: ['fighting'], catchRate: 45, category: 'Pokémon Superpoder' },
  94: { name: 'Gengar', types: ['ghost', 'poison'], catchRate: 45, category: 'Pokémon Sombra' },
  130: { name: 'Gyarados', types: ['water', 'flying'], catchRate: 45, category: 'Pokémon Atrocidad' },
  131: { name: 'Lapras', types: ['water', 'ice'], catchRate: 45, category: 'Pokémon Transporte' },
  133: { name: 'Eevee', types: ['normal'], catchRate: 45, category: 'Pokémon Evolución' },
  134: { name: 'Vaporeon', types: ['water'], catchRate: 45, category: 'Pokémon Burbuja' },
  135: { name: 'Jolteon', types: ['electric'], catchRate: 45, category: 'Pokémon Relámpago' },
  136: { name: 'Flareon', types: ['fire'], catchRate: 45, category: 'Pokémon Llama' },
  143: { name: 'Snorlax', types: ['normal'], catchRate: 25, category: 'Pokémon Dormilón' },
  149: { name: 'Dragonite', types: ['dragon', 'flying'], catchRate: 45, category: 'Pokémon Dragón' },
  150: { name: 'Mewtwo', types: ['psychic'], catchRate: 3, category: 'Pokémon Genético' },
  151: { name: 'Mew', types: ['psychic'], catchRate: 45, category: 'Pokémon Nueva Especie' },
  152: { name: 'Chikorita', types: ['grass'], catchRate: 45, category: 'Pokémon Hoja' },
  155: { name: 'Cyndaquil', types: ['fire'], catchRate: 45, category: 'Pokémon Ratón Fuego' },
  158: { name: 'Totodile', types: ['water'], catchRate: 45, category: 'Pokémon Fauces' },
  196: { name: 'Espeon', types: ['psychic'], catchRate: 45, category: 'Pokémon Sol' },
  197: { name: 'Umbreon', types: ['dark'], catchRate: 45, category: 'Pokémon Luz Lunar' },
  212: { name: 'Scizor', types: ['bug', 'steel'], catchRate: 25, category: 'Pokémon Tenaza' },
  248: { name: 'Tyranitar', types: ['rock', 'dark'], catchRate: 45, category: 'Pokémon Coraza' },
  249: { name: 'Lugia', types: ['psychic', 'flying'], catchRate: 3, category: 'Pokémon Buceador' },
  250: { name: 'Ho-Oh', types: ['fire', 'flying'], catchRate: 3, category: 'Pokémon Arcoíris' },
  252: { name: 'Treecko', types: ['grass'], catchRate: 45, category: 'Pokémon Gecko' },
  255: { name: 'Torchic', types: ['fire'], catchRate: 45, category: 'Pokémon Polluelo' },
  257: { name: 'Blaziken', types: ['fire', 'fighting'], catchRate: 45, category: 'Pokémon Flameante' },
  258: { name: 'Mudkip', types: ['water'], catchRate: 45, category: 'Pokémon Pez Pez' },
  260: { name: 'Swampert', types: ['water', 'ground'], catchRate: 45, category: 'Pokémon Pez Lodo' },
  282: { name: 'Gardevoir', types: ['psychic', 'fairy'], catchRate: 45, category: 'Pokémon Envolvente' },
  384: { name: 'Rayquaza', types: ['dragon', 'flying'], catchRate: 3, category: 'Pokémon Cielo' },
  445: { name: 'Garchomp', types: ['dragon', 'ground'], catchRate: 45, category: 'Pokémon Mach' },
  448: { name: 'Lucario', types: ['fighting', 'steel'], catchRate: 45, category: 'Pokémon Aura' },
  470: { name: 'Leafeon', types: ['grass'], catchRate: 45, category: 'Pokémon Verdor' },
  471: { name: 'Glaceon', types: ['ice'], catchRate: 45, category: 'Pokémon Nieve Fresca' },
  487: { name: 'Giratina', types: ['ghost', 'dragon'], catchRate: 3, category: 'Pokémon Renegado' },
  493: { name: 'Arceus', types: ['normal'], catchRate: 3, category: 'Pokémon Alfa' },
  658: { name: 'Greninja', types: ['water', 'dark'], catchRate: 45, category: 'Pokémon Ninja' },
  700: { name: 'Sylveon', types: ['fairy'], catchRate: 45, category: 'Pokémon Vínculo' },
  778: { name: 'Mimikyu', types: ['ghost', 'fairy'], catchRate: 45, category: 'Pokémon Disfraz' },
  887: { name: 'Dragapult', types: ['dragon', 'ghost'], catchRate: 45, category: 'Pokémon Sigilo' },
  906: { name: 'Sprigatito', types: ['grass'], catchRate: 45, category: 'Pokémon Gato Planta' },
  909: { name: 'Fuecoco', types: ['fire'], catchRate: 45, category: 'Pokémon Cocodrilo Fuego' },
  912: { name: 'Quaxly', types: ['water'], catchRate: 45, category: 'Pokémon Patito' },
  937: { name: 'Ceruledge', types: ['fire', 'ghost'], catchRate: 90, category: 'Pokémon Espada Fuego' },
  959: { name: 'Tinkaton', types: ['fairy', 'steel'], catchRate: 45, category: 'Pokémon Martillo' },
  1007: { name: 'Koraidon', types: ['fighting', 'dragon'], catchRate: 3, category: 'Pokémon Paradoja' },
  1008: { name: 'Miraidon', types: ['electric', 'dragon'], catchRate: 3, category: 'Pokémon Paradoja' }
};

export function generateFullPokedex(): Pokemon[] {
  const pokedex: Pokemon[] = [];

  for (let dex = 1; dex <= 1025; dex++) {
    const known = POKEMON_NAMES_MAP[dex];
    const officialName = POKEMON_NAMES_1025[dex - 1] || `Pokémon #${dex}`;
    const name = known ? known.name : officialName;
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
      categoryTitle: known?.category || 'Especie Pokémon',
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
      abilities: { normal: ['Habilidad Primaria'], hidden: 'Habilidad Oculta (HO)' },
      spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${dex}.gif`,
      shinySpriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/${dex}.gif`,
      artworkUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dex}.png`,
      audioCryUrl: `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${dex}.ogg`
    });
  }

  return pokedex;
}

export const COBBLEMON_POKEDEX: Pokemon[] = generateFullPokedex();

export const getPokemonById = (id: string): Pokemon | undefined => {
  return COBBLEMON_POKEDEX.find(p => p.id.toLowerCase() === id.toLowerCase() || String(p.dexNumber) === id);
};
