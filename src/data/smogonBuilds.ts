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
  explanation: string;
}

export const SMOGON_BUILDS: Record<string, SmogonBuild[]> = {
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
      recommendedEggMoves: 'Deseo (Wish), Bostezos (Yawn)'.split(', '),
      explanation: 'Optimizado para Sylveon. Requiere Habilidad Oculta transmitida por la madre.'
    },
    {
      pokemonId: 'eevee',
      pokemonName: 'Eevee (Umbreon Build)',
      dexNumber: 133,
      buildName: 'Umbreon Pared Defensiva',
      recommendedNature: 'Cauta (+SpD, -SpA)',
      recommendedAbility: 'Sincronía (Synchronize)',
      hiddenAbility: 'Foco Interno (Inner Focus)',
      recommendedIvTarget: '5x31',
      targetIvs: { hp: true, attack: true, defense: true, specialAttack: false, specialDefense: true, speed: true },
      recommendedEggMoves: ['Deseo (Wish)', 'Maldición (Curse)'],
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
  explanation: 'Configuración estándar recomendada de 5 IVs perfectos en 31.'
};

export function getSmogonBuildsForPokemon(pokemonId: string): SmogonBuild[] {
  const p = pokemonId.toLowerCase().trim();
  return SMOGON_BUILDS[p] || [DEFAULT_BUILD];
}
