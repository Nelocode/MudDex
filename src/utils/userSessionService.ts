import { BreederInventoryItem } from './breedingAlgorithm';

export interface TrainerSession {
  username: string;
  pinCode?: string;
  avatarUrl: string;
  isLoggedIn: boolean;
  createdAt: string;
  lastActive: string;
  pastura: BreederInventoryItem[];
  teams: any[];
  aiApiKey?: string;
  favorites: string[];
  shinyEncounters: number;
}

const ACTIVE_SESSION_KEY = 'muddex_active_trainer_session';
const SESSIONS_VAULT_KEY = 'muddex_trainer_sessions_vault';

export function getActiveTrainerSession(): TrainerSession | null {
  try {
    const raw = localStorage.getItem(ACTIVE_SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

export function getAllSavedTrainerSessions(): TrainerSession[] {
  try {
    const raw = localStorage.getItem(SESSIONS_VAULT_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

export function saveTrainerSession(session: TrainerSession): void {
  try {
    session.lastActive = new Date().toISOString();
    localStorage.setItem(ACTIVE_SESSION_KEY, JSON.stringify(session));
    localStorage.setItem('diosesmon_username', session.username);

    // Sync pasture data to active session key
    if (session.pastura) {
      localStorage.setItem('muddex_global_pastura', JSON.stringify(session.pastura));
    }

    // Sync AI API Key
    if (session.aiApiKey) {
      localStorage.setItem('muddex_ai_key', session.aiApiKey);
    }

    // Update vault
    const vault = getAllSavedTrainerSessions();
    const idx = vault.findIndex(s => s.username.toLowerCase() === session.username.toLowerCase());
    if (idx >= 0) {
      vault[idx] = session;
    } else {
      vault.push(session);
    }
    localStorage.setItem(SESSIONS_VAULT_KEY, JSON.stringify(vault));
  } catch (e) {
    console.error('Error saving trainer session', e);
  }
}

export function loginTrainerSession(username: string, pinCode?: string): TrainerSession {
  const cleanedName = username.trim();
  const vault = getAllSavedTrainerSessions();
  const existing = vault.find(s => s.username.toLowerCase() === cleanedName.toLowerCase());

  let activeSession: TrainerSession;

  if (existing) {
    activeSession = {
      ...existing,
      isLoggedIn: true,
      pinCode: pinCode || existing.pinCode,
      lastActive: new Date().toISOString()
    };
  } else {
    // Read current local storage as initial data
    let currentPastura: BreederInventoryItem[] = [];
    try {
      const rawP = localStorage.getItem('muddex_global_pastura');
      if (rawP) currentPastura = JSON.parse(rawP);
    } catch (e) {}

    let currentAiKey = localStorage.getItem('muddex_ai_key') || undefined;

    activeSession = {
      username: cleanedName,
      pinCode,
      avatarUrl: `https://minotar.net/avatar/${encodeURIComponent(cleanedName)}/64`,
      isLoggedIn: true,
      createdAt: new Date().toISOString(),
      lastActive: new Date().toISOString(),
      pastura: currentPastura,
      teams: [],
      aiApiKey: currentAiKey,
      favorites: [],
      shinyEncounters: 0
    };
  }

  saveTrainerSession(activeSession);
  return activeSession;
}

export function logoutTrainerSession(): void {
  try {
    const current = getActiveTrainerSession();
    if (current) {
      current.isLoggedIn = false;
      saveTrainerSession(current);
    }
    localStorage.removeItem(ACTIVE_SESSION_KEY);
  } catch (e) {
    console.error('Error logging out trainer', e);
  }
}
