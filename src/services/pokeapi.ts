import { PokemonSummary, EggGroup, StatDict, StatName, Nature } from '../types/pokemon';

const POKEAPI_BASE = 'https://pokeapi.co/api/v2';

const pokemonCache = new Map<string | number, PokemonSummary>();

export interface BasicPokemonListItem {
  id: number;
  name: string;
  spanishName: string;
  generation: number;
  sprite: string;
  officialArtwork: string;
}

let masterPokemonList: BasicPokemonListItem[] | null = null;

export const STAT_NAMES_ES: Record<StatName, { full: string; short: string }> = {
  hp: { full: 'Puntos de Salud (PS)', short: 'PS' },
  atk: { full: 'Ataque Físico', short: 'ATK' },
  def: { full: 'Defensa Física', short: 'DEF' },
  spa: { full: 'Ataque Especial', short: 'SPA' },
  spd: { full: 'Defensa Especial', short: 'SPD' },
  spe: { full: 'Velocidad', short: 'VEL' }
};

export const EGG_GROUPS_ES: Record<EggGroup, string> = {
  monster: 'Monstruo',
  water1: 'Agua 1',
  bug: 'Bicho',
  flying: 'Volador',
  field: 'Campo',
  fairy: 'Hada',
  grass: 'Planta',
  'human-like': 'Humanoide',
  water3: 'Agua 3',
  mineral: 'Mineral',
  amorphous: 'Amorfo',
  water2: 'Agua 2',
  dragon: 'Dragón',
  ditto: 'Ditto',
  undiscovered: 'No descubierto (Incapaz de criar)'
};

export const NATURES_LIST: Nature[] = [
  { name: 'adamant', spanishName: 'Firme', increasedStat: 'atk', decreasedStat: 'spa', flavor: '+Atk, -SpA' },
  { name: 'bold', spanishName: 'Osada', increasedStat: 'def', decreasedStat: 'atk', flavor: '+Def, -Atk' },
  { name: 'brave', spanishName: 'Audaz', increasedStat: 'atk', decreasedStat: 'spe', flavor: '+Atk, -Vel' },
  { name: 'calm', spanishName: 'Cauta', increasedStat: 'spd', decreasedStat: 'atk', flavor: '+SpD, -Atk' },
  { name: 'careful', spanishName: 'Prudente', increasedStat: 'spd', decreasedStat: 'spa', flavor: '+SpD, -SpA' },
  { name: 'docile', spanishName: 'Dócil', increasedStat: null, decreasedStat: null, flavor: 'Neutra' },
  { name: 'gentle', spanishName: 'Amable', increasedStat: 'spd', decreasedStat: 'def', flavor: '+SpD, -Def' },
  { name: 'hardy', spanishName: 'Fuerte', increasedStat: null, decreasedStat: null, flavor: 'Neutra' },
  { name: 'hasty', spanishName: 'Activa', increasedStat: 'spe', decreasedStat: 'def', flavor: '+Vel, -Def' },
  { name: 'impish', spanishName: 'Agitada', increasedStat: 'def', decreasedStat: 'spa', flavor: '+Def, -SpA' },
  { name: 'jolly', spanishName: 'Alegre', increasedStat: 'spe', decreasedStat: 'spa', flavor: '+Vel, -SpA' },
  { name: 'lax', spanishName: 'Floja', increasedStat: 'def', decreasedStat: 'spd', flavor: '+Def, -SpD' },
  { name: 'lonely', spanishName: 'Huraña', increasedStat: 'atk', decreasedStat: 'def', flavor: '+Atk, -Def' },
  { name: 'mild', spanishName: 'Afable', increasedStat: 'spa', decreasedStat: 'def', flavor: '+SpA, -Def' },
  { name: 'modest', spanishName: 'Modesta', increasedStat: 'spa', decreasedStat: 'atk', flavor: '+SpA, -Atk' },
  { name: 'naive', spanishName: 'Ingenua', increasedStat: 'spe', decreasedStat: 'spd', flavor: '+Vel, -SpD' },
  { name: 'naughty', spanishName: 'Pícara', increasedStat: 'atk', decreasedStat: 'spd', flavor: '+Atk, -SpD' },
  { name: 'quiet', spanishName: 'Mansa', increasedStat: 'spa', decreasedStat: 'spe', flavor: '+SpA, -Vel' },
  { name: 'quirky', spanishName: 'Rara', increasedStat: null, decreasedStat: null, flavor: 'Neutra' },
  { name: 'rash', spanishName: 'Alocada', increasedStat: 'spa', decreasedStat: 'spd', flavor: '+SpA, -SpD' },
  { name: 'relaxed', spanishName: 'Plácida', increasedStat: 'def', decreasedStat: 'spe', flavor: '+Def, -Vel' },
  { name: 'sassy', spanishName: 'Grosera', increasedStat: 'spd', decreasedStat: 'spe', flavor: '+SpD, -Vel' },
  { name: 'serious', spanishName: 'Seria', increasedStat: null, decreasedStat: null, flavor: 'Neutra' },
  { name: 'timid', spanishName: 'Miedosa', increasedStat: 'spe', decreasedStat: 'atk', flavor: '+Vel, -Atk' }
];

// Utility to calculate exact stats at Level 50 or Level 100
export function calculateStatAtLevel(
  statName: StatName,
  base: number,
  iv: number,
  ev: number,
  level: number = 50,
  natureName?: string
): number {
  const natureObj = NATURES_LIST.find(n => n.name.toLowerCase() === natureName?.toLowerCase());
  let natureMult = 1.0;
  if (natureObj) {
    if (natureObj.increasedStat === statName) natureMult = 1.1;
    if (natureObj.decreasedStat === statName) natureMult = 0.9;
  }

  if (statName === 'hp') {
    if (base === 1) return 1; // Shedinja
    return Math.floor(((2 * base + iv + Math.floor(ev / 4)) * level) / 100) + level + 10;
  }

  const raw = Math.floor(((2 * base + iv + Math.floor(ev / 4)) * level) / 100) + 5;
  return Math.floor(raw * natureMult);
}

export function getGenerationFromId(id: number): number {
  if (id <= 151) return 1;
  if (id <= 251) return 2;
  if (id <= 386) return 3;
  if (id <= 493) return 4;
  if (id <= 649) return 5;
  if (id <= 721) return 6;
  if (id <= 809) return 7;
  if (id <= 905) return 8;
  return 9;
}

export async function getAllPokemonList(): Promise<BasicPokemonListItem[]> {
  if (masterPokemonList) return masterPokemonList;

  try {
    const res = await fetch(`${POKEAPI_BASE}/pokemon?limit=1025`);
    const data = await res.json();

    masterPokemonList = data.results.map((p: any, idx: number) => {
      const id = idx + 1;
      const gen = getGenerationFromId(id);
      const nameCap = capitalize(p.name);
      return {
        id,
        name: p.name,
        spanishName: nameCap,
        generation: gen,
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        officialArtwork: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      };
    });

    return masterPokemonList!;
  } catch (err) {
    masterPokemonList = Array.from({ length: 1025 }, (_, idx) => {
      const id = idx + 1;
      return {
        id,
        name: `pokemon-${id}`,
        spanishName: `Pokémon #${id}`,
        generation: getGenerationFromId(id),
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        officialArtwork: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      };
    });
    return masterPokemonList!;
  }
}

export async function fetchPokemon(nameOrId: string | number): Promise<PokemonSummary> {
  const cacheKey = String(nameOrId).toLowerCase();
  if (pokemonCache.has(cacheKey)) {
    return pokemonCache.get(cacheKey)!;
  }

  try {
    const res = await fetch(`${POKEAPI_BASE}/pokemon/${cacheKey}`);
    if (!res.ok) throw new Error(`Pokémon ${nameOrId} no encontrado`);
    const data = await res.json();

    const speciesRes = await fetch(data.species.url);
    const speciesData = await speciesRes.json();

    const spanishNameObj = speciesData.names?.find((n: any) => n.language.name === 'es');
    const spanishName = spanishNameObj ? spanishNameObj.name : capitalize(data.name);

    const stats: StatDict = {
      hp: data.stats.find((s: any) => s.stat.name === 'hp')?.base_stat || 50,
      atk: data.stats.find((s: any) => s.stat.name === 'attack')?.base_stat || 50,
      def: data.stats.find((s: any) => s.stat.name === 'defense')?.base_stat || 50,
      spa: data.stats.find((s: any) => s.stat.name === 'special-attack')?.base_stat || 50,
      spd: data.stats.find((s: any) => s.stat.name === 'special-defense')?.base_stat || 50,
      spe: data.stats.find((s: any) => s.stat.name === 'speed')?.base_stat || 50
    };

    const eggGroups: EggGroup[] = speciesData.egg_groups.map((eg: any) => eg.name as EggGroup);

    const abilities = data.abilities.map((a: any) => ({
      name: a.ability.name,
      spanishName: capitalize(a.ability.name.replace('-', ' ')),
      isHidden: a.is_hidden,
      effect: ''
    }));

    const officialArtwork =
      data.sprites.other?.['official-artwork']?.front_default ||
      data.sprites.other?.home?.front_default ||
      data.sprites.front_default;

    const sprite = data.sprites.front_default || officialArtwork;
    const shinySprite =
      data.sprites.other?.['official-artwork']?.front_shiny ||
      data.sprites.front_shiny ||
      sprite;

    const summary: PokemonSummary = {
      id: data.id,
      name: data.name,
      spanishName,
      sprite,
      officialArtwork,
      shinySprite,
      types: data.types.map((t: any) => t.type.name),
      baseStats: stats,
      eggGroups,
      abilities,
      height: data.height / 10,
      weight: data.weight / 10,
      isDitto: data.id === 132 || data.name === 'ditto',
      genderRate: speciesData.gender_rate ?? 4,
      hatchCounter: speciesData.hatch_counter ?? 20,
      generation: getGenerationFromId(data.id)
    };

    pokemonCache.set(summary.id, summary);
    pokemonCache.set(summary.name, summary);
    return summary;
  } catch (err) {
    return getFallbackPokemon(nameOrId);
  }
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getFallbackPokemon(nameOrId: string | number): PokemonSummary {
  const idNum = typeof nameOrId === 'number' ? nameOrId : 133;
  const isDitto = idNum === 132 || String(nameOrId).toLowerCase() === 'ditto';

  return {
    id: isDitto ? 132 : 197,
    name: isDitto ? 'ditto' : 'umbreon',
    spanishName: isDitto ? 'Ditto' : 'Umbreon',
    sprite: isDitto
      ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
      : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png',
    officialArtwork: isDitto
      ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png'
      : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png',
    shinySprite: isDitto
      ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png'
      : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/197.png',
    types: isDitto ? ['normal'] : ['dark'],
    baseStats: isDitto
      ? { hp: 48, atk: 48, def: 48, spa: 48, spd: 48, spe: 48 }
      : { hp: 95, atk: 65, def: 110, spa: 60, spd: 130, spe: 65 },
    eggGroups: isDitto ? ['ditto'] : ['field'],
    abilities: [
      { name: 'sincronia', spanishName: 'Sincronía', isHidden: false, effect: '' },
      { name: 'foco-interno', spanishName: 'Foco Interno (HO)', isHidden: true, effect: '' }
    ],
    height: 1.0,
    weight: 27.0,
    isDitto,
    genderRate: isDitto ? -1 : 4,
    hatchCounter: 35,
    generation: isDitto ? 1 : 2
  };
}
