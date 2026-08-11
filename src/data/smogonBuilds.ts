export interface SmogonBuild {
  pokemonId: string;
  pokemonName: string;
  dexNumber: number;
  buildName: string;
  recommendedNature: string;
  recommendedAbility: string;
  hiddenAbility: string;
  recommendedIvTarget: '5x31' | '6x31' | '4x31' | '3x31';
  targetIvs: {
    hp: boolean;
    attack: boolean;
    defense: boolean;
    specialAttack: boolean;
    specialDefense: boolean;
    speed: boolean;
  };
  recommendedEggMoves: string[];
  recommendedItem?: string;
  recommendedEvs?: string;
  recommendedMoveset?: string[];
  tier?: string;
  explanation: string;
}

export const SMOGON_BUILDS: Record<string, SmogonBuild[]> = {
  umbreon: [
    {
      pokemonId: 'umbreon',
      pokemonName: 'Umbreon',
      dexNumber: 197,
      buildName: 'Umbreon Pared Defensiva / Wish Passer',
      recommendedNature: 'Cauta (+SpD, -SpA)',
      recommendedAbility: 'Sincronía (Synchronize)',
      hiddenAbility: 'Foco Interno (Inner Focus)',
      recommendedIvTarget: '5x31',
      targetIvs: { hp: true, attack: true, defense: true, specialAttack: false, specialDefense: true, speed: true },
      recommendedEggMoves: ['Deseo (Wish)', 'Tóxico (Toxic)', 'Bostezo (Yawn)', 'Maldición (Curse)'],
      recommendedItem: 'Restos (Leftovers)',
      recommendedEvs: '252 HP / 4 Def / 252 SpD',
      recommendedMoveset: ['Deseo (Wish) [Huevo]', 'Protección (Protect)', 'Juego Sucio (Foul Play)', 'Tóxico (Toxic) / Bostezo [Huevo]'],
      tier: 'Smogon SV OU / Competitivo',
      explanation: 'Tanque especial masivo y soporte de equipo. Pasa salud masiva con Deseo (Wish) y presiona con Juego Sucio y Tóxico.'
    },
    {
      pokemonId: 'umbreon',
      pokemonName: 'Umbreon',
      dexNumber: 197,
      buildName: 'Umbreon Physical Wall (Tanque Físico)',
      recommendedNature: 'Agitada (+Def, -SpA)',
      recommendedAbility: 'Sincronía (Synchronize)',
      hiddenAbility: 'Foco Interno (Inner Focus)',
      recommendedIvTarget: '5x31',
      targetIvs: { hp: true, attack: true, defense: true, specialAttack: false, specialDefense: true, speed: true },
      recommendedEggMoves: ['Deseo (Wish)', 'Maldición (Curse)'],
      recommendedItem: 'Casco Dentado (Rocky Helmet)',
      recommendedEvs: '252 HP / 252 Def / 4 SpD',
      recommendedMoveset: ['Deseo (Wish) [Huevo]', 'Protección (Protect)', 'Juego Sucio (Foul Play)', 'Maldición (Curse) [Huevo]'],
      tier: 'Smogon SV UU / Competitivo',
      explanation: 'Variante de pared física diseñada para frenar atacantes físicos y devolver daño con Casco Dentado y Juego Sucio.'
    }
  ],
  eevee: [
    {
      pokemonId: 'eevee',
      pokemonName: 'Eevee (Sylveon Build)',
      dexNumber: 133,
      buildName: 'Sylveon Atacante Especial Defensivo',
      recommendedNature: 'Modesta (+SpA, -Atk)',
      recommendedAbility: 'Piel Feérica (Pixilate - HO)',
      hiddenAbility: 'Anticipación (Anticipation)',
      recommendedIvTarget: '5x31',
      targetIvs: { hp: true, attack: false, defense: true, specialAttack: true, specialDefense: true, speed: true },
      recommendedEggMoves: ['Deseo (Wish)', 'Bostezos (Yawn)'],
      recommendedItem: 'Gafas Elegidas (Choice Specs)',
      recommendedEvs: '252 HP / 252 SpA / 4 SpD',
      recommendedMoveset: ['Vozarrón (Hyper Voice)', 'Fuerza Lunar (Moonblast)', 'Psíquico (Psyshock)', 'Deseo (Wish) [Huevo]'],
      tier: 'Smogon SV UU',
      explanation: 'Optimizado para Sylveon. Requiere Habilidad Oculta Piel Feérica transmitida por la madre.'
    },
    {
      pokemonId: 'eevee',
      pokemonName: 'Eevee (Umbreon Build)',
      dexNumber: 133,
      buildName: 'Umbreon Pared Defensiva / Wish Passer',
      recommendedNature: 'Cauta (+SpD, -SpA)',
      recommendedAbility: 'Sincronía (Synchronize)',
      hiddenAbility: 'Foco Interno (Inner Focus)',
      recommendedIvTarget: '5x31',
      targetIvs: { hp: true, attack: true, defense: true, specialAttack: false, specialDefense: true, speed: true },
      recommendedEggMoves: ['Deseo (Wish)', 'Tóxico (Toxic)', 'Maldición (Curse)'],
      recommendedItem: 'Restos (Leftovers)',
      recommendedEvs: '252 HP / 4 Def / 252 SpD',
      recommendedMoveset: ['Deseo (Wish) [Huevo]', 'Protección (Protect)', 'Juego Sucio (Foul Play)', 'Tóxico (Toxic) [Huevo]'],
      tier: 'Smogon SV OU',
      explanation: 'Tanque especial masivo con 5 IVs en salud y defensas.'
    }
  ],
  garchomp: [
    {
      pokemonId: 'garchomp',
      pokemonName: 'Garchomp',
      dexNumber: 445,
      buildName: 'Sweeper Físico Competitivo',
      recommendedNature: 'Alegre (+Vel, -SpA)',
      recommendedAbility: 'Piel Tosca (Rough Skin - HO)',
      hiddenAbility: 'Piel Tosca (Rough Skin)',
      recommendedIvTarget: '5x31',
      targetIvs: { hp: true, attack: true, defense: true, specialAttack: false, specialDefense: true, speed: true },
      recommendedEggMoves: ['Enfado (Outrage)', 'Cabeza de Hierro (Iron Head)'],
      recommendedItem: 'Vidasfera (Life Orb)',
      recommendedEvs: '252 Atk / 4 Def / 252 Vel',
      recommendedMoveset: ['Terremoto (Earthquake)', 'Enfado (Outrage) [Huevo]', 'Danza Espada (Swords Dance)', 'Cabeza de Hierro [Huevo]'],
      tier: 'Smogon SV OU',
      explanation: 'Máxima velocidad y daño físico con Terremoto y Enfado.'
    }
  ],
  lucario: [
    {
      pokemonId: 'lucario',
      pokemonName: 'Lucario',
      dexNumber: 448,
      buildName: 'Sweeper Físico de Danza Espada',
      recommendedNature: 'Firme (+Atk, -SpA)',
      recommendedAbility: 'Foco Interno (Inner Focus)',
      hiddenAbility: 'Justiciero (Justified)',
      recommendedIvTarget: '5x31',
      targetIvs: { hp: true, attack: true, defense: true, specialAttack: false, specialDefense: true, speed: true },
      recommendedEggMoves: ['Patada Salto Alta (High Jump Kick)', 'Puño Bala (Bullet Punch)'],
      recommendedItem: 'Cinta Elegida (Choice Band)',
      recommendedEvs: '252 Atk / 4 Def / 252 Vel',
      recommendedMoveset: ['A bocajarro (Close Combat)', 'Puño Bala (Bullet Punch) [Huevo]', 'Velocidad Extrema (Extreme Speed)', 'Triturar (Crunch)'],
      tier: 'Smogon SV UU',
      explanation: 'Prioridad física con Puño Bala y cobertura destructiva.'
    }
  ],
  tinkaton: [
    {
      pokemonId: 'tinkaton',
      pokemonName: 'Tinkaton',
      dexNumber: 959,
      buildName: 'Support Hazard Lead',
      recommendedNature: 'Agitada (+Def, -SpA)',
      recommendedAbility: 'Rompemoldes (Mold Breaker)',
      hiddenAbility: 'Hurtadillas (Pickpocket)',
      recommendedIvTarget: '5x31',
      targetIvs: { hp: true, attack: true, defense: true, specialAttack: false, specialDefense: true, speed: true },
      recommendedEggMoves: ['Trampa Rocas (Stealth Rock)'],
      recommendedItem: 'Globo Helio (Air Balloon)',
      recommendedEvs: '252 HP / 80 Def / 176 SpD',
      recommendedMoveset: ['Martillo Gigante (Gigaton Hammer)', 'Trampa Rocas [Huevo]', 'Otra Vez (Encore)', 'Onda Trueno (Thunder Wave)'],
      tier: 'Smogon SV OU',
      explanation: 'Pared física y soporte con Trampa Rocas y Martillo Gigante.'
    }
  ],
  dragapult: [
    {
      pokemonId: 'dragapult',
      pokemonName: 'Dragapult',
      dexNumber: 887,
      buildName: 'Special Attacker Fast Pivot',
      recommendedNature: 'Miedosa (+Vel, -Atk)',
      recommendedAbility: 'Allanamiento (Infiltrator)',
      hiddenAbility: 'Cuerpo Maldito (Cursed Body)',
      recommendedIvTarget: '5x31',
      targetIvs: { hp: true, attack: false, defense: true, specialAttack: true, specialDefense: true, speed: true },
      recommendedEggMoves: ['Incursión Dragón (Dragon Rush)'],
      recommendedItem: 'Gafas Elegidas (Choice Specs)',
      recommendedEvs: '252 SpA / 4 SpD / 252 Vel',
      recommendedMoveset: ['Cometa Draco (Draco Meteor)', 'Bola Sombra (Shadow Ball)', 'Lanzallamas (Flamethrower)', 'Ida y Vuelta (U-turn)'],
      tier: 'Smogon SV OU',
      explanation: 'Velocidad base 142 para superar a todo el formato.'
    }
  ],
  ceruledge: [
    {
      pokemonId: 'ceruledge',
      pokemonName: 'Ceruledge',
      dexNumber: 937,
      buildName: 'Physical Life Orb Sweeper',
      recommendedNature: 'Firme (+Atk, -SpA)',
      recommendedAbility: 'Absorbe Fuego (Flash Fire)',
      hiddenAbility: 'Armadura Frágil (Weak Armor)',
      recommendedIvTarget: '5x31',
      targetIvs: { hp: true, attack: true, defense: true, specialAttack: false, specialDefense: true, speed: true },
      recommendedEggMoves: ['Sombra Vil (Shadow Sneak)'],
      recommendedItem: 'Vidasfera (Life Orb)',
      recommendedEvs: '252 Atk / 4 Def / 252 Vel',
      recommendedMoveset: ['Espada Lamento (Bitter Blade)', 'A bocajarro (Close Combat)', 'Sombra Vil [Huevo]', 'Danza Espada (Swords Dance)'],
      tier: 'Smogon SV OU',
      explanation: 'Ataque sostenido con Espada Lamento y cura de salud.'
    }
  ]
};

export const DEFAULT_BUILD: SmogonBuild = {
  pokemonId: 'default',
  pokemonName: 'Build Personalizada',
  dexNumber: 1,
  buildName: 'Build Estándar Competitiva 5x31',
  recommendedNature: 'Firme (+Atk, -SpA)',
  recommendedAbility: 'Habilidad Primaria',
  hiddenAbility: 'Habilidad Oculta',
  recommendedIvTarget: '5x31',
  targetIvs: { hp: true, attack: true, defense: true, specialAttack: false, specialDefense: true, speed: true },
  recommendedEggMoves: [],
  recommendedItem: 'Restos (Leftovers)',
  recommendedEvs: '252 Atk / 4 Def / 252 Vel',
  recommendedMoveset: ['Movimiento 1', 'Movimiento 2', 'Movimiento 3', 'Movimiento 4'],
  tier: 'Smogon SV Competitivo',
  explanation: 'Configuración estándar recomendada de 5 IVs perfectos en 31.'
};

export function getSmogonBuildsForPokemon(pokemonId: string): SmogonBuild[] {
  const p = pokemonId.toLowerCase().trim();
  return SMOGON_BUILDS[p] || [DEFAULT_BUILD];
}
