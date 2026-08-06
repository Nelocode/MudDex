import { BreedingProject, BoxPokemon, GoalConfig, MagicUserSession } from '../types/pokemon';

const STORAGE_KEYS = {
  PROJECTS: 'pokelinker_projects_v1',
  ACTIVE_PROJECT_ID: 'pokelinker_active_project_id_v1',
  BOX: 'pokelinker_user_box_v1',
  MAGIC_SESSION: 'pokelinker_magic_session_v1'
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
    const session = getMagicSession();
    const key = session ? `${STORAGE_KEYS.PROJECTS}_${session.userKey}` : STORAGE_KEYS.PROJECTS;
    const raw = localStorage.getItem(key) || localStorage.getItem(STORAGE_KEYS.PROJECTS);
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
  
  const session = getMagicSession();
  const key = session ? `${STORAGE_KEYS.PROJECTS}_${session.userKey}` : STORAGE_KEYS.PROJECTS;
  localStorage.setItem(key, JSON.stringify(projects));
  localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  setActiveProjectId(project.id);
}

export function deleteProject(id: string): void {
  const projects = getSavedProjects().filter(p => p.id !== id);
  const session = getMagicSession();
  const key = session ? `${STORAGE_KEYS.PROJECTS}_${session.userKey}` : STORAGE_KEYS.PROJECTS;
  localStorage.setItem(key, JSON.stringify(projects));
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
    const session = getMagicSession();
    const key = session ? `${STORAGE_KEYS.BOX}_${session.userKey}` : STORAGE_KEYS.BOX;
    const raw = localStorage.getItem(key) || localStorage.getItem(STORAGE_KEYS.BOX);
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
  const session = getMagicSession();
  const key = session ? `${STORAGE_KEYS.BOX}_${session.userKey}` : STORAGE_KEYS.BOX;
  localStorage.setItem(key, JSON.stringify(box));
  localStorage.setItem(STORAGE_KEYS.BOX, JSON.stringify(box));
}

export function deleteBoxPokemon(id: string): void {
  const box = getUserBox().filter(b => b.id !== id);
  const session = getMagicSession();
  const key = session ? `${STORAGE_KEYS.BOX}_${session.userKey}` : STORAGE_KEYS.BOX;
  localStorage.setItem(key, JSON.stringify(box));
  localStorage.setItem(STORAGE_KEYS.BOX, JSON.stringify(box));
}

/* ===============================================================
   MAGIC LOGIN SESSION HELPERS
   =============================================================== */

export function getMagicSession(): MagicUserSession | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.MAGIC_SESSION);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

export function saveMagicSession(trainerNameOrEmail: string): MagicUserSession {
  const cleanInput = trainerNameOrEmail.trim();
  const userKey = btoa(cleanInput.toLowerCase()).replace(/[^a-zA-Z0-9]/g, '').substring(0, 16);
  const origin = window.location.origin + window.location.pathname;
  const magicLinkUrl = `${origin}?magicKey=${encodeURIComponent(userKey)}&trainer=${encodeURIComponent(cleanInput)}`;

  const session: MagicUserSession = {
    userKey,
    trainerName: cleanInput.includes('@') ? cleanInput.split('@')[0] : cleanInput,
    email: cleanInput,
    loggedInAt: new Date().toISOString(),
    magicLinkUrl
  };

  localStorage.setItem(STORAGE_KEYS.MAGIC_SESSION, JSON.stringify(session));
  return session;
}

export function logoutMagicSession(): void {
  localStorage.removeItem(STORAGE_KEYS.MAGIC_SESSION);
}

export function exportMagicStateBundle(): string {
  const session = getMagicSession();
  const bundle = {
    version: '1.0',
    exportedAt: new Date().toISOString(),
    session,
    projects: getSavedProjects(),
    box: getUserBox()
  };
  return btoa(unescape(encodeURIComponent(JSON.stringify(bundle))));
}

export function importMagicStateBundle(base64Bundle: string): boolean {
  try {
    const jsonStr = decodeURIComponent(escape(atob(base64Bundle.trim())));
    const data = JSON.parse(jsonStr);
    if (data.session && data.session.email) {
      saveMagicSession(data.session.email);
    }
    if (Array.isArray(data.projects)) {
      const session = getMagicSession();
      const key = session ? `${STORAGE_KEYS.PROJECTS}_${session.userKey}` : STORAGE_KEYS.PROJECTS;
      localStorage.setItem(key, JSON.stringify(data.projects));
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(data.projects));
    }
    if (Array.isArray(data.box)) {
      const session = getMagicSession();
      const key = session ? `${STORAGE_KEYS.BOX}_${session.userKey}` : STORAGE_KEYS.BOX;
      localStorage.setItem(key, JSON.stringify(data.box));
      localStorage.setItem(STORAGE_KEYS.BOX, JSON.stringify(data.box));
    }
    return true;
  } catch (e) {
    console.error('Error importing Magic bundle:', e);
    return false;
  }
}

