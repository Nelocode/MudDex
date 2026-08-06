export type PokemonType =
  | 'normal'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'bug'
  | 'rock'
  | 'ghost'
  | 'dragon'
  | 'dark'
  | 'steel'
  | 'fairy';

export interface BaseStats {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

export interface Pokemon {
  id: string; // e.g. 'pikachu'
  dexNumber: number;
  name: string;
  generation: number;
  types: PokemonType[];
  baseStats: BaseStats;
  catchRate: number; // 3 to 255
  baseHp: number;
  weightKg: number;
  heightM: number;
  abilities: {
    normal: string[];
    hidden?: string;
  };
  isAlphaAvailable?: boolean;
  spriteUrl: string;
  artworkUrl: string;
  forms?: string[];
}

export type SpawnBucket = 'common' | 'uncommon' | 'rare' | 'ultra-rare';

export type SpawnContext = 'grounded' | 'submerged' | 'surface';

export type TimeOfDay = 'any' | 'day' | 'night' | 'dawn' | 'dusk';

export type WeatherCondition = 'any' | 'clear' | 'rain' | 'thunder';

export interface SpawnCondition {
  biomes: string[]; // e.g. ['#cobblemon:is_jungle', 'minecraft:jungle']
  timeOfDay?: TimeOfDay;
  weather?: WeatherCondition;
  minY?: number;
  maxY?: number;
  minLight?: number;
  maxLight?: number;
  canSeeSky?: boolean;
  structures?: string[];
  moonPhase?: string;
  presetName?: string;
  neededBlocks?: string[];
  blockInstruction?: string;
}

export interface SpawnEntry {
  id: string;
  pokemonId: string;
  bucket: SpawnBucket;
  weight: number;
  context: SpawnContext;
  minLevel: number;
  maxLevel: number;
  condition: SpawnCondition;
}

export interface BiomeCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  biomes: {
    id: string;
    name: string;
    tag?: string;
  }[];
}

export type StatusCondition = 'none' | 'sleep' | 'freeze' | 'paralysis' | 'poison' | 'burn';

export interface CatchContext {
  pokemonId: string;
  currentHpPercent: number; // 1 to 100
  status: StatusCondition;
  isNightOrCave?: boolean;
  isWaterOrBugTarget?: boolean;
  isTurnOne?: boolean;
  hasCaughtBefore?: boolean;
  turnCount?: number;
  pokemonWeightKg?: number;
  speedStat?: number;
}

export interface PokeBall {
  id: string;
  name: string;
  icon: string;
  description: string;
  craftingRecipe?: string;
  getMultiplier: (context: CatchContext, pokemon: Pokemon) => number;
}

export interface BallCatchResult {
  ball: PokeBall;
  multiplier: number;
  catchChance: number; // 0 to 100
  expectedThrows: number;
  efficiencyRating: 's' | 'a' | 'b' | 'c' | 'd';
}

export interface DropItem {
  itemId: string;
  name: string;
  icon: string;
  percentage: number;
  minQuantity: number;
  maxQuantity: number;
  lootingEffect?: string;
}

export interface PokemonDrop {
  pokemonId: string;
  pokemonName: string;
  drops: DropItem[];
}

export interface ServerInfo {
  name: string;
  ip: string;
  version: string;
  modpack: string;
  status: 'online' | 'offline';
  playersOnline: number;
  maxPlayers: number;
}
