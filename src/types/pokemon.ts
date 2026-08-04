export type StatName = 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe';

export type StatDict = Record<StatName, number>;

export interface Nature {
  name: string;
  spanishName: string;
  increasedStat: StatName | null;
  decreasedStat: StatName | null;
  flavor: string;
}

export type EggGroup =
  | 'monster'
  | 'water1'
  | 'bug'
  | 'flying'
  | 'field'
  | 'fairy'
  | 'grass'
  | 'human-like'
  | 'water3'
  | 'mineral'
  | 'amorphous'
  | 'water2'
  | 'dragon'
  | 'ditto'
  | 'undiscovered';

export interface Ability {
  name: string;
  spanishName: string;
  isHidden: boolean;
  effect: string;
}

export interface PokemonSummary {
  id: number;
  name: string;
  spanishName: string;
  sprite: string;
  officialArtwork: string;
  shinySprite: string;
  types: string[];
  baseStats: StatDict;
  eggGroups: EggGroup[];
  abilities: Ability[];
  height: number;
  weight: number;
  isDitto: boolean;
  genderRate: number;
  hatchCounter: number;
  generation: number;
}

export interface SmogonBuild {
  tier: string;
  name: string;
  nature: string;
  item: string;
  itemSpanish: string;
  ability: string;
  evs: Partial<Record<StatName, number>>;
  targetIvs: StatDict;
  moves: string[][];
  description: string;
  teammates: { name: string; id: number; reason: string }[];
}

export interface GoalConfig {
  targetIvCount: number;
  targetIvs: StatDict;
  useNature: boolean;
  targetNature: string;
  useAbility: boolean;
  targetAbility: string;
  isHiddenAbility: boolean;
  eggMoves: string[];
  useZeroAtk: boolean;
  useZeroSpe: boolean;
  targetGender: 'male' | 'female' | 'any';
}

export interface ItemRequired {
  id: string;
  name: string;
  spanishName: string;
  icon: string;
  purpose: string;
  statTarget?: StatName;
}

export interface ParentPokemon {
  id?: string;
  pokemonId: number;
  speciesName: string;
  spanishName: string;
  sprite: string;
  gender: 'male' | 'female' | 'genderless';
  ivs: StatDict;
  nature?: string;
  ability?: string;
  heldItem?: ItemRequired;
  eggGroups: EggGroup[];
  isDitto?: boolean;
  source: 'wild' | 'bred' | 'box';
}

export interface EggGroupValidationResult {
  isCompatible: boolean;
  reason: string;
  commonEggGroups: EggGroup[];
}

export interface PrerequisiteCheckItem {
  id: string;
  title: string;
  category: 'item' | 'parent' | 'helper';
  iconUrl?: string;
  description: string;
  isChecked: boolean;
}

export interface BreedingStepNode {
  stepNumber: number;
  title: string;
  description: string;
  parentA: ParentPokemon;
  parentB: ParentPokemon;
  requiredItems: ItemRequired[];
  targetChild: ParentPokemon;
  successChance: number;
  expectedEggs: number;
  hatchSteps: number;
  eggMoveNote?: string;
  mirrorHerbTip?: string;
  isCompleted: boolean;
}

export interface BreedingProject {
  id: string;
  title: string;
  targetPokemon: PokemonSummary;
  goal: GoalConfig;
  steps: BreedingStepNode[];
  prerequisites?: PrerequisiteCheckItem[];
  createdAt: string;
  updatedAt: string;
  isFinished: boolean;
  selectedSmogonBuild?: SmogonBuild;
}

export interface BoxPokemon {
  id: string;
  pokemonId: number;
  speciesName: string;
  spanishName: string;
  sprite: string;
  gender: 'male' | 'female' | 'genderless';
  ivs: StatDict;
  nature: string;
  ability: string;
  eggGroups: EggGroup[];
  isDitto: boolean;
  notes?: string;
}
