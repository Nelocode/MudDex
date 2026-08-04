import { PokemonSummary } from '../types/pokemon';

/**
 * Movimientos de Huevo (Egg Moves) recomendados por Pokémon.
 * Basados en datos competitivos de Smogon y ética de cría de PokeAPI.
 * Cada entrada: array de movimientos de huevo útiles/comúnmente usados.
 */
export const EGG_MOVES: Record<string, { move: string; spanish: string; note: string }[]> = {
  // EEVEE Y EVOLUCIONES
  eevee: [
    { move: 'Wish', spanish: 'Deseo', note: 'Clave para soporte; cura a compañeros.' },
    { move: 'Yawn', spanish: 'Bostezo', note: 'Presión de estado en pivot defensivo.' },
    { move: 'Curse', spanish: 'Maldición', note: 'Potencia builds de Umbreon físico.' }
  ],
  umbreon: [
    { move: 'Wish', spanish: 'Deseo', note: 'Soporte esencial; pasa salud al equipo.' },
    { move: 'Yawn', spanish: 'Bostezo', note: 'Fuerza swaps; combinado con Protect/Sub.' },
    { move: 'Curse', spanish: 'Maldición', note: 'Umbreon física con +Def/+Atk.' }
  ],
  sylveon: [
    { move: 'Wish', spanish: 'Deseo', note: 'Soporte; cura a aliados con Vozarrón.' },
    { move: 'Yawn', spanish: 'Bostezo', note: 'Presión de estado.' }
  ],

  // GENGAR
  gengar: [
    { move: 'Perish Song', spanish: 'Canto Mortal', note: 'Presión de fin de combate en VGC.' },
    { move: 'Disable', spanish: 'Anular', note: 'Bloquea el movimiento ofensivo rival.' },
    { move: 'Haze', spanish: 'Neblina', note: 'Borra boosts rivales.' }
  ],

  // DRAGONITE
  dragonite: [
    { move: 'Extreme Speed', spanish: 'Velocidad Extrema', note: 'Prioridad +2; STAB igualado con Normal.' },
    { move: 'Aqua Jet', spanish: 'Acua Jet', note: 'Prioridad +1 cobertura de agua.' },
    { move: 'Dragon Dance', spanish: 'Danza Dragón', note: 'Sweeper físico.' },
    { move: 'Haze', spanish: 'Neblina', note: 'Anti-setup.' }
  ],

  // GHOLDENGO
  gholdengo: [
    { move: 'Recover', spanish: 'Recuperación', note: 'Sostenibilidad.' }
  ],

  // MIMIKYU
  mimikyu: [
    { move: 'Curse', spanish: 'Maldición', note: 'Alternativa de fin de juego.' }
  ],

  // GARCHOMP
  garchomp: [
    { move: 'Dragon Claw', spanish: 'Zarpa Dragón', note: 'STAB confiable y sin penalización.' },
    { move: 'Outrage', spanish: 'Enfado', note: 'STAB potente de doble objetivo.' }
  ],

  // TOXAPEX
  toxapex: [
    { move: 'Haze', spanish: 'Neblina', note: 'Anula boosts rivales; muralla.' },
    { move: 'Recover', spanish: 'Recuperación', note: 'Sostenibilidad defensiva.' },
    { move: 'Toxic Spikes', spanish: 'Trampa Tóxicas', note: 'Chip de veneno al entrar.' }
  ],

  // CORVIKNIGHT
  corviknight: [
    { move: 'Defog', spanish: 'Niebla Densa', note: 'Limpia hazards del campo.' },
    { move: 'Roost', spanish: 'Respiro', note: 'Recuperación.' }
  ],

  // IRON VALIANT
  'iron-valiant': [
    { move: 'Destiny Bond', spanish: 'Clavos Vínculo', note: 'Empate de fin de juego.' },
    { move: 'Encore', spanish: 'Repetición', note: 'Castiga a Pokémon de setup.' }
  ],

  // KINGAMBIT
  kingambit: [
    { move: 'Sucker Punch', spanish: 'Ataque Furtivo', note: 'Prioridad clave del late-game.' }
  ],

  // CLEFABLE
  clefable: [
    { move: 'Soft-Boiled', spanish: 'Huevo Misterio', note: 'Recuperación 100% segura.' },
    { move: 'Stealth Rock', spanish: 'Trampa Rocas', note: 'Hazard de entrada.' },
    { move: 'Wish', spanish: 'Deseo', note: 'Soporte curativo.' }
  ],

  // FLUTTER MANE
  'flutter-mane': [
    { move: 'Perish Song', spanish: 'Canto Mortal', note: 'Presión de fin en dobles.' },
    { move: 'Encore', spanish: 'Repetición', note: 'Castiga setup.' }
  ],

  // GREAT TUSK
  'great-tusk': [
    { move: 'Headlong Rush', spanish: 'Avalancha Temeraria', note: 'STAB Tierra devastador.' },
    { move: 'Close Combat', spanish: 'Combate Cerrado', note: 'STAB Lucha de cobertura.' }
  ],

  // DRAGAPULT
  dragapult: [
    { move: 'Dragon Dance', spanish: 'Danza Dragón', note: 'Sweeper físico con velocidad 142.' },
    { move: 'Confuse Ray', spanish: 'Rayo Confuso', note: 'Interrupción de setup.' }
  ],

  // Otros populares
  charmander: [
    { move: 'Dragon Dance', spanish: 'Danza Dragón', note: 'Sweeper físico.' },
    { move: 'Outrage', spanish: 'Enfado', note: 'STAB Dragón potente.' },
    { move: 'Belly Drum', spanish: 'Tambor', note: 'Offensive física extremo.' }
  ],
  squirtle: [
    { move: 'Aqua Jet', spanish: 'Acua Jet', note: 'Prioridad de agua.' },
    { move: 'Aura Sphere', spanish: 'Esfera Aural', note: 'Cobertura de lucha.' }
  ],
  bulbasaur: [
    { move: 'Leech Seed', spanish: 'Drenadoras', note: 'Chip y robo de salud.' },
    { move: 'Sludge', spanish: 'Residuos', note: 'STAB veneno.' },
    { move: 'Charm', spanish: 'Encanto', note: 'Reduce ataque físico rival.' }
  ],
  riolu: [
    { move: 'Bullet Punch', spanish: 'Puño Bala', note: 'Prioridad de acero.' },
    { move: 'Crunch', spanish: 'Triturar', note: 'Cobertura de siniestro.' },
    { move: 'High Jump Kick', spanish: 'Patada Salto Alta', note: 'STAB Lucha potente.' }
  ],
  beldum: [
    { move: 'Take Down', spanish: 'Derribo', note: 'STAB normal (pre-evolución).' }
  ],
  larvesta: [
    { move: 'Morning Sun', spanish: 'Luz Solar', note: 'Recuperación en equipos de sol.' },
    { move: 'Thrash', spanish: 'Arremeter', note: 'STAB Bicho potente.' }
  ],
  larvitar: [
    { move: 'Dragon Dance', spanish: 'Danza Dragón', note: 'Sweeper físico de Rock/Dark.' },
    { move: 'Pursuit', spanish: 'Persecución', note: 'Castiga swaps.' },
    { move: 'Iron Head', spanish: 'Cabeza de Hierro', note: 'Cobertura de acero.' }
  ],
  gible: [
    { move: 'Dragon Claw', spanish: 'Zarpa Dragón', note: 'STAB Dragón confiable.' },
    { move: 'Iron Head', spanish: 'Cabeza de Hierro', note: 'Cobertura de acero.' }
  ],
  bagon: [
    { move: 'Dragon Dance', spanish: 'Danza Dragón', note: 'Sweeper físico.' },
    { move: 'Hydro Pump', spanish: 'Hidrobomba', note: 'Cobertura de agua en mix.' }
  ],
  axew: [
    { move: 'First Impression', spanish: 'Primera Impresión', note: 'Golpe sorpresa prioritario.' },
    { move: 'Night Slash', spanish: 'Tajo Umbrío', note: 'Cobertura de siniestro.' }
  ],
  deino: [
    { move: 'Dark Pulse', spanish: 'Pulso Umbío', note: 'STAB siniestro.' },
    { move: 'Earth Power', spanish: 'Tierra Viva', note: 'Cobertura de tierra.' }
  ],
  // ===== FALLBACK INTELIGENTE POR TIPO =====
  // Para Pokémon sin entrada específica se usan movimientos huevo genéricos según su tipo
};

/**
 * Fallback: mueve por tipo primario que suelen ser egg moves útiles.
 */
const TYPE_DEFAULT_EGG_MOVES: Record<string, { move: string; spanish: string }[]> = {
  dragon: [
    { move: 'Dragon Dance', spanish: 'Danza Dragón' },
    { move: 'Outrage', spanish: 'Enfado' }
  ],
  fire: [
    { move: 'Belly Drum', spanish: 'Tambor' },
    { move: 'Dragon Dance', spanish: 'Danza Dragón' }
  ],
  water: [
    { move: 'Aqua Jet', spanish: 'Acua Jet' },
    { move: 'Haze', spanish: 'Neblina' }
  ],
  grass: [
    { move: 'Leech Seed', spanish: 'Drenadoras' },
    { move: 'Synthesis', spanish: 'Síntesis' }
  ],
  normal: [
    { move: 'Wish', spanish: 'Deseo' },
    { move: 'Curse', spanish: 'Maldición' }
  ],
  dark: [
    { move: 'Pursuit', spanish: 'Persecución' },
    { move: 'Sucker Punch', spanish: 'Ataque Furtivo' }
  ],
  fighting: [
    { move: 'Bullet Punch', spanish: 'Puño Bala' },
    { move: 'High Jump Kick', spanish: 'Patada Salto Alta' }
  ],
  rock: [
    { move: 'Stealth Rock', spanish: 'Trampa Rocas' },
    { move: 'Curse', spanish: 'Maldición' }
  ],
  steel: [
    { move: 'Bullet Punch', spanish: 'Puño Bala' }
  ],
  fairy: [
    { move: 'Wish', spanish: 'Deseo' },
    { move: 'Yawn', spanish: 'Bostezo' }
  ],
  ghost: [
    { move: 'Perish Song', spanish: 'Canto Mortal' },
    { move: 'Destiny Bond', spanish: 'Clavos Vínculo' }
  ],
  poison: [
    { move: 'Haze', spanish: 'Neblina' }
  ],
  electric: [
    { move: 'Eerie Impulse', spanish: 'Impulso Alarmante' }
  ],
  ice: [
    { move: 'Icicle Crash', spanish: 'Chuzos Helados' }
  ],
  bug: [
    { move: 'First Impression', spanish: 'Primera Impresión' }
  ],
  psychic: [
    { move: 'Psychic Terrain', spanish: 'Campo Psíquico' },
    { move: 'Encore', spanish: 'Repetición' }
  ],
  ground: [
    { move: 'Headlong Rush', spanish: 'Avalancha Temeraria' }
  ],
  flying: [
    { move: 'Defog', spanish: 'Niebla Densa' },
    { move: 'Roost', spanish: 'Respiro' }
  ]
};

/**
 * Obtiene los movimientos de huevo sugeridos para un Pokémon.
 * Prioriza la entrada específica; si no existe, usa fallback por tipo.
 */
export function getSuggestedEggMoves(pokemon: PokemonSummary): { move: string; spanish: string; note?: string }[] {
  const key = pokemon.name.toLowerCase();
  if (EGG_MOVES[key]) {
    return EGG_MOVES[key].map(e => ({ move: e.move, spanish: e.spanish, note: e.note }));
  }

  // Fallback por tipo primario
  const primaryType = pokemon.types[0]?.toLowerCase() || 'normal';
  const typeMoves = TYPE_DEFAULT_EGG_MOVES[primaryType];
  if (typeMoves) {
    return typeMoves.map(m => ({
      move: m.move,
      spanish: m.spanish,
      note: `Movimiento de huevo útil para Pokémon de tipo ${primaryType}.`
    }));
  }

  return [];
}
