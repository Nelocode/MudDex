import { AUTHENTIC_POKEMON_DATA } from './authenticPokedexData';

export type EggGroup =
  | 'monster'
  | 'water1'
  | 'bug'
  | 'flying'
  | 'field'
  | 'fairy'
  | 'grass'
  | 'humanlike'
  | 'water3'
  | 'mineral'
  | 'amorphous'
  | 'water2'
  | 'dragon'
  | 'undiscovered'
  | 'ditto';

export interface EggGroupInfo {
  id: EggGroup;
  nameEs: string;
  icon: string;
  description: string;
}

export const EGG_GROUPS_INFO: Record<EggGroup, EggGroupInfo> = {
  monster: { id: 'monster', nameEs: 'Monstruo (Monster)', icon: '🦖', description: 'Pokémon de apariencia sauria o reptiliana.' },
  water1: { id: 'water1', nameEs: 'Agua 1 (Water 1)', icon: '🌊', description: 'Pokémon anfibios y semi-acuáticos.' },
  bug: { id: 'bug', nameEs: 'Bicho (Bug)', icon: '🐛', description: 'Insectos, arácnidos e invertebrados.' },
  flying: { id: 'flying', nameEs: 'Volador (Flying)', icon: '🦅', description: 'Aves y criaturas aladas.' },
  field: { id: 'field', nameEs: 'Campo (Field)', icon: '🦊', description: 'Mamíferos y criaturas terrestres (El grupo más numeroso).' },
  fairy: { id: 'fairy', nameEs: 'Hada (Fairy)', icon: '🧚', description: 'Pokémon pequeños, místico o encantadores.' },
  grass: { id: 'grass', nameEs: 'Planta (Grass)', icon: '🌿', description: 'Plantas, flores y criaturas fotosintéticas.' },
  humanlike: { id: 'humanlike', nameEs: 'Humanoide (Human-Like)', icon: '🥋', description: 'Bípedos y criaturas de apariencia humana.' },
  water3: { id: 'water3', nameEs: 'Agua 3 (Water 3)', icon: '🦀', description: 'Crustáceos, fósiles marinos e invertebrados acuáticos.' },
  mineral: { id: 'mineral', nameEs: 'Mineral', icon: '💎', description: 'Rocas, cristales, objetos animados y construcciones.' },
  amorphous: { id: 'amorphous', nameEs: 'Amorfo (Amorphous)', icon: '👻', description: 'Espíritus, fluidos, gases y masas amorfas.' },
  water2: { id: 'water2', nameEs: 'Agua 2 (Water 2)', icon: '🐟', description: 'Peces y grandes criaturas marinas.' },
  dragon: { id: 'dragon', nameEs: 'Dragón (Dragon)', icon: '🐲', description: 'Dragones y serpientes místicas.' },
  undiscovered: { id: 'undiscovered', nameEs: 'No Descubierto (Bebés/Legendarios)', icon: '🚫', description: 'No pueden criar (Bebés, Paradoja, Legendarios mayoritarios).' },
  ditto: { id: 'ditto', nameEs: 'Ditto', icon: '🫠', description: 'Puede criar con cualquier grupo excepto No Descubierto y Ditto.' }
};

// Default mapping rule based on Pokemon types and dex for species
export function getEggGroupsForPokemon(pokemonId: string, dexNumber: number, types: string[]): EggGroup[] {
  const p = pokemonId.toLowerCase();
  
  if (p === 'ditto' || dexNumber === 132) return ['ditto'];
  
  // Legendaries and babies
  if ([150, 151, 249, 250, 384, 487, 493, 643, 644, 716, 717, 785, 786, 787, 788, 888, 889, 890, 1007, 1008, 172, 173, 174, 175, 236, 238, 239, 240, 298, 360, 438, 439, 440, 446, 447, 458].includes(dexNumber)) {
    return ['undiscovered'];
  }

  const primaryType = types[0] || 'normal';
  const secondaryType = types[1];

  // Iconic Dual Egg Group Bridge Pokemon
  if (['pikachu', 'raichu', 'pichu'].includes(p)) return ['field', 'fairy'];
  if (['lucario'].includes(p)) return ['field', 'humanlike'];
  if (['togekiss', 'togetic'].includes(p)) return ['flying', 'fairy'];
  if (['dragonite', 'dragonair', 'dratini'].includes(p)) return ['water1', 'dragon'];
  if (['garchomp', 'gabite', 'gible'].includes(p)) return ['monster', 'dragon'];
  if (['charizard', 'charmeleon', 'charmander'].includes(p)) return ['monster', 'dragon'];
  if (['blastoise', 'wartortle', 'squirtle'].includes(p)) return ['monster', 'water1'];
  if (['venusaur', 'ivysaur', 'bulbasaur'].includes(p)) return ['monster', 'grass'];
  if (['gardevoir', 'kirlia', 'ralts'].includes(p)) return ['humanlike', 'amorphous'];
  if (['scizor', 'scyther'].includes(p)) return ['bug'];
  if (['tyranitar', 'pupitar', 'larvitar'].includes(p)) return ['monster'];
  if (['lapras'].includes(p)) return ['monster', 'water1'];
  if (['snorlax'].includes(p)) return ['monster'];
  if (['gengar', 'haunter', 'gastly'].includes(p)) return ['amorphous'];
  if (['mimikyu'].includes(p)) return ['amorphous', 'fairy'];

  // Type-based primary & secondary assignments
  const groups: Set<EggGroup> = new Set();

  if (primaryType === 'water' || secondaryType === 'water') {
    if (dexNumber % 3 === 0) groups.add('water2');
    else if (dexNumber % 5 === 0) groups.add('water3');
    else groups.add('water1');
  }

  if (primaryType === 'bug' || secondaryType === 'bug') groups.add('bug');
  if (primaryType === 'flying' || secondaryType === 'flying') groups.add('flying');
  if (primaryType === 'grass' || secondaryType === 'grass') groups.add('grass');
  if (primaryType === 'dragon' || secondaryType === 'dragon') groups.add('dragon');
  if (primaryType === 'ghost' || primaryType === 'poison' || secondaryType === 'ghost') groups.add('amorphous');
  if (primaryType === 'fighting' || primaryType === 'psychic' || secondaryType === 'humanlike') groups.add('humanlike');
  if (primaryType === 'steel' || primaryType === 'rock' || secondaryType === 'mineral') groups.add('mineral');
  if (primaryType === 'fairy' || secondaryType === 'fairy') groups.add('fairy');

  if (groups.size === 0) {
    if (primaryType === 'fire' || primaryType === 'ground') groups.add('monster');
    else groups.add('field');
  }

  return Array.from(groups);
}

export interface PokemonEggData {
  pokemonId: string;
  pokemonName: string;
  dexNumber: number;
  spriteUrl: string;
  types: string[];
  eggGroups: EggGroup[];
}

export const POKEMON_EGG_DATASET: PokemonEggData[] = AUTHENTIC_POKEMON_DATA.map(p => {
  const pId = p.name.toLowerCase().replace(/[^a-z0-9]/g, '');
  return {
    pokemonId: pId,
    pokemonName: p.name,
    dexNumber: p.dexNumber,
    spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${p.dexNumber}.gif`,
    types: p.types,
    eggGroups: getEggGroupsForPokemon(pId, p.dexNumber, p.types)
  };
});
