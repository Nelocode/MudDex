import { BreedingProject, BoxPokemon, GoalConfig } from '../types/pokemon';

const STORAGE_KEYS = {
  PROJECTS: 'pokelinker_projects_v1',
  ACTIVE_PROJECT_ID: 'pokelinker_active_project_id_v1',
  BOX: 'pokelinker_user_box_v1'
};

// Normaliza proyectos guardados de versiones anteriores (añade campos nuevos con defaults)
function normalizeProject(p: BreedingProject): BreedingProject {
  if (!p.goal) return p;
  const goal = { ...p.goal } as GoalConfig & { targetGender?: string };
  if (!goal.targetGender) goal.targetGender = 'any';
  return { ...p, goal: goal as GoalConfig };
}

// Default initial box data for new users so they can start instantly
const DEFAULT_BOX: BoxPokemon[] = [
  {
    id: 'ditto-6iv-default',
    pokemonId: 132,
    speciesName: 'ditto',
    spanishName: 'Ditto 6x31 (Caja Maestra)',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    gender: 'genderless',
    ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
    nature: 'Jolly',
    ability: 'Imposter',
    eggGroups: ['ditto'],
    isDitto: true,
    notes: 'Ditto perfecto para traspasar 5 IVs con Lazo Destino'
  },
  {
    id: 'eevee-4iv-default',
    pokemonId: 133,
    speciesName: 'eevee',
    spanishName: 'Eevee 4x31 (Grupo Campo)',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
    gender: 'male',
    ivs: { hp: 31, atk: 12, def: 31, spa: 15, spd: 31, spe: 31 },
    nature: 'Calm',
    ability: 'Adaptability',
    eggGroups: ['field'],
    isDitto: false,
    notes: 'Padre del grupo Campo con Naturaleza Cauta'
  }
];

export function getSavedProjects(): BreedingProject[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    if (!raw) return [];
    const parsed: BreedingProject[] = JSON.parse(raw);
    return parsed.map(p => normalizeProject(p));
  } catch (e) {
    console.error('Error al leer proyectos guardados:', e);
    return [];
  }
}

export function saveProject(project: BreedingProject): void {
  const projects = getSavedProjects();
  const index = projects.findIndex(p => p.id === project.id);
  if (index >= 0) {
    projects[index] = { ...project, updatedAt: new Date().toISOString() };
  } else {
    projects.unshift({ ...project, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
  }
  localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  setActiveProjectId(project.id);
}

export function deleteProject(id: string): void {
  const projects = getSavedProjects().filter(p => p.id !== id);
  localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  if (getActiveProjectId() === id) {
    localStorage.removeItem(STORAGE_KEYS.ACTIVE_PROJECT_ID);
  }
}

export function getActiveProjectId(): string | null {
  return localStorage.getItem(STORAGE_KEYS.ACTIVE_PROJECT_ID);
}

export function setActiveProjectId(id: string): void {
  localStorage.setItem(STORAGE_KEYS.ACTIVE_PROJECT_ID, id);
}

export function getUserBox(): BoxPokemon[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.BOX);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.BOX, JSON.stringify(DEFAULT_BOX));
      return DEFAULT_BOX;
    }
    return JSON.parse(raw);
  } catch (e) {
    return DEFAULT_BOX;
  }
}

export function saveBoxPokemon(pokemon: BoxPokemon): void {
  const box = getUserBox();
  const existing = box.findIndex(b => b.id === pokemon.id);
  if (existing >= 0) {
    box[existing] = pokemon;
  } else {
    box.unshift(pokemon);
  }
  localStorage.setItem(STORAGE_KEYS.BOX, JSON.stringify(box));
}

export function deleteBoxPokemon(id: string): void {
  const box = getUserBox().filter(b => b.id !== id);
  localStorage.setItem(STORAGE_KEYS.BOX, JSON.stringify(box));
}
