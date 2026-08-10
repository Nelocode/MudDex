import { Pokemon, PokemonType } from '../types/diosesmon';
import { AUTHENTIC_POKEMON_DATA } from './authenticPokedexData';

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

export function generateFullPokedex(): Pokemon[] {
  const pokedex: Pokemon[] = [];

  for (let dex = 1; dex <= 1025; dex++) {
    const auth = AUTHENTIC_POKEMON_DATA[dex - 1];
    const name = auth ? auth.name : `Pokémon #${dex}`;
    const id = name.toLowerCase().replace(/[^a-z0-9]/g, '');
    const gen = getGen(dex);

    const types = (auth ? auth.types : ['normal']) as PokemonType[];
    const catchRate = auth ? auth.catchRate : 45;
    const baseStats = auth ? auth.baseStats : { hp: 50, attack: 50, defense: 50, specialAttack: 50, specialDefense: 50, speed: 50 };
    const weightKg = auth ? auth.weightKg : 10.0;
    const heightM = auth ? auth.heightM : 1.0;

    pokedex.push({
      id,
      dexNumber: dex,
      name,
      generation: gen,
      categoryTitle: `Pokémon Especie #${dex}`,
      types,
      catchRate,
      baseHp: baseStats.hp,
      weightKg,
      heightM,
      baseStats,
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
