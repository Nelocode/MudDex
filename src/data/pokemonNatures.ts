export interface PokemonNatureInfo {
  nameEs: string;
  nameEn: string;
  increasedStat: 'hp' | 'attack' | 'defense' | 'specialAttack' | 'specialDefense' | 'speed' | 'none';
  decreasedStat: 'hp' | 'attack' | 'defense' | 'specialAttack' | 'specialDefense' | 'speed' | 'none';
  label: string;
}

export const OFFICIAL_POKEMON_NATURES: PokemonNatureInfo[] = [
  { nameEs: 'Firme', nameEn: 'Adamant', increasedStat: 'attack', decreasedStat: 'specialAttack', label: 'Firme (+Atk, -SpA)' },
  { nameEs: 'Alegre', nameEn: 'Jolly', increasedStat: 'speed', decreasedStat: 'specialAttack', label: 'Alegre (+Vel, -SpA)' },
  { nameEs: 'Modesta', nameEn: 'Modest', increasedStat: 'specialAttack', decreasedStat: 'attack', label: 'Modesta (+SpA, -Atk)' },
  { nameEs: 'Miedosa', nameEn: 'Timid', increasedStat: 'speed', decreasedStat: 'attack', label: 'Miedosa (+Vel, -Atk)' },
  { nameEs: 'Cauta', nameEn: 'Careful', increasedStat: 'specialDefense', decreasedStat: 'specialAttack', label: 'Cauta (+SpD, -SpA)' },
  { nameEs: 'Agitada', nameEn: 'Impish', increasedStat: 'defense', decreasedStat: 'specialAttack', label: 'Agitada (+Def, -SpA)' },
  { nameEs: 'Osada', nameEn: 'Bold', increasedStat: 'defense', decreasedStat: 'attack', label: 'Osada (+Def, -Atk)' },
  { nameEs: 'Serena', nameEn: 'Calm', increasedStat: 'specialDefense', decreasedStat: 'attack', label: 'Serena (+SpD, -Atk)' },
  { nameEs: 'Plácida', nameEn: 'Relaxed', increasedStat: 'defense', decreasedStat: 'speed', label: 'Plácida (+Def, -Vel)' },
  { nameEs: 'Audaz', nameEn: 'Brave', increasedStat: 'attack', decreasedStat: 'speed', label: 'Audaz (+Atk, -Vel)' },
  { nameEs: 'Mansa', nameEn: 'Quiet', increasedStat: 'specialAttack', decreasedStat: 'speed', label: 'Mansa (+SpA, -Vel)' },
  { nameEs: 'Grosera', nameEn: 'Sassy', increasedStat: 'specialDefense', decreasedStat: 'speed', label: 'Grosera (+SpD, -Vel)' },
  { nameEs: 'Ingenua', nameEn: 'Naive', increasedStat: 'speed', decreasedStat: 'specialDefense', label: 'Ingenua (+Vel, -SpD)' },
  { nameEs: 'Activa', nameEn: 'Hasty', increasedStat: 'speed', decreasedStat: 'defense', label: 'Activa (+Vel, -Def)' },
  { nameEs: 'Pícara', nameEn: 'Naughty', increasedStat: 'attack', decreasedStat: 'specialDefense', label: 'Pícara (+Atk, -SpD)' },
  { nameEs: 'Alocada', nameEn: 'Rash', increasedStat: 'specialAttack', decreasedStat: 'specialDefense', label: 'Alocada (+SpA, -SpD)' },
  { nameEs: 'Floja', nameEn: 'Lax', increasedStat: 'defense', decreasedStat: 'specialDefense', label: 'Floja (+Def, -SpD)' },
  { nameEs: 'Fuerte', nameEn: 'Hardy', increasedStat: 'none', decreasedStat: 'none', label: 'Fuerte (Neutra)' },
  { nameEs: 'Dócil', nameEn: 'Docile', increasedStat: 'none', decreasedStat: 'none', label: 'Dócil (Neutra)' },
  { nameEs: 'Tímida', nameEn: 'Bashful', increasedStat: 'none', decreasedStat: 'none', label: 'Tímida (Neutra)' },
  { nameEs: 'Rara', nameEn: 'Quirky', increasedStat: 'none', decreasedStat: 'none', label: 'Rara (Neutra)' },
  { nameEs: 'Seria', nameEn: 'Serious', increasedStat: 'none', decreasedStat: 'none', label: 'Seria (Neutra)' }
];
