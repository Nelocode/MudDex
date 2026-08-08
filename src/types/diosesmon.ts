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
  id: string;
  dexNumber: number;
  name: string;
  generation: number;
  types: PokemonType[];
  baseStats: BaseStats;
  catchRate: number;
  baseHp: number;
  weightKg: number;
  heightM: number;
  abilities: {
    normal: string[];
    hidden?: string;
  };
  isAlphaAvailable?: boolean;
  spriteUrl: string;
  shinySpriteUrl?: string;
  artworkUrl: string;
  audioCryUrl?: string;
  categoryTitle?: string;
  evolutionLine?: { stage: number; name: string; dexNumber: number; condition: string }[];
  forms?: string[];
}

export type SpawnBucket = 'common' | 'uncommon' | 'rare' | 'ultra-rare';

export type SpawnContext = 'grounded' | 'submerged' | 'surface';

export type TimeOfDay = 'any' | 'day' | 'night' | 'dawn' | 'dusk';

export type WeatherCondition = 'any' | 'clear' | 'rain' | 'thunder';

export interface SpawnCondition {
  biomes: string[];
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
  currentHpPercent: number;
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
  catchChance: number;
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

// 1. Biomes Guide Interface
export interface MinecraftBiome {
  id: string;
  name: string;
  dimension: 'Overworld' | 'Nether' | 'End';
  yRange: string;
  temperature: string;
  icon: string;
  description: string;
  keySpawns: string[];
  blockHacks: string[];
}

// 4. Shiny Hunting Interface
export interface ShinyMethod {
  id: string;
  name: string;
  odds: string;
  chanceFraction: number;
  description: string;
  requirements: string;
}

// 5. Moves Compendium Interface
export interface MoveInfo {
  id: string;
  name: string;
  type: PokemonType;
  category: 'physical' | 'special' | 'status';
  power: number | null;
  accuracy: number | null;
  pp: number;
  effect: string;
  isTm: boolean;
  tmItemName?: string;
  learnedBy: string[];
}

// 7. Boss & Gym Counters Interface
export interface BossCounter {
  id: string;
  bossName: string;
  bossType: PokemonType;
  icon: string;
  recommendedTeam: {
    pokemonId: string;
    role: string;
    keyMove: string;
    heldItem: string;
  }[];
  strategyTips: string[];
}

// 8. EV Training Guide Interface
export interface EvSpot {
  stat: 'hp' | 'attack' | 'defense' | 'specialAttack' | 'specialDefense' | 'speed';
  statNameEs: string;
  icon: string;
  color: string;
  bestTargets: {
    pokemonId: string;
    pokemonName: string;
    evYield: number;
    biome: string;
    spawnTime: string;
  }[];
  powerItemName: string;
}

// 7. Held Items & Berries Interface
export interface HeldItemInfo {
  id: string;
  name: string;
  category: 'competitive' | 'berry' | 'evolution' | 'utility';
  icon: string;
  description: string;
  battleEffect: string;
  howToObtain: string;
}

// 9. Type Effectiveness Result
export interface TypeEffectivenessResult {
  weaknesses4x: PokemonType[];
  weaknesses2x: PokemonType[];
  normal1x: PokemonType[];
  resistances05x: PokemonType[];
  resistances025x: PokemonType[];
  immunities0x: PokemonType[];
}

// 11. Competitive Tier List Item
export interface CompetitiveTierItem {
  pokemonId: string;
  pokemonName: string;
  tier: 'S+' | 'S' | 'A' | 'B';
  role: 'Physical Sweeper' | 'Special Sweeper' | 'Physical Wall' | 'Special Wall' | 'Lead Hazard' | 'Support';
  types: PokemonType[];
  recommendedItem: string;
  recommendedNature: string;
  keyMoves: string[];
  description: string;
}

// 12. PokéQuiz Question
export interface PokeQuizQuestion {
  pokemonId: string;
  pokemonName: string;
  spriteUrl: string;
  audioCryUrl: string;
  options: string[]; // 4 names
}
