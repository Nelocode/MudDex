import {
  PokemonSummary,
  GoalConfig,
  BreedingStepNode,
  ItemRequired,
  ParentPokemon,
  StatName,
  BoxPokemon,
  EggGroupValidationResult,
  PrerequisiteCheckItem
} from '../types/pokemon';
import { EGG_GROUPS_ES } from './pokeapi';

export const BREEDING_ITEMS: Record<string, ItemRequired> = {
  destinyKnot: {
    id: 'destiny-knot',
    name: 'destiny-knot',
    spanishName: 'Lazo Destino',
    icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/destiny-knot.png',
    purpose: 'Garantiza heredar 5 IVs en total de entre ambos padres (en lugar de solo 3).'
  },
  everstone: {
    id: 'everstone',
    name: 'everstone',
    spanishName: 'Piedra Eterna',
    icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/everstone.png',
    purpose: 'Transfiere al 100% la Naturaleza del padre/madre que la lleva equipada.'
  },
  powerWeight: {
    id: 'power-weight',
    name: 'power-weight',
    spanishName: 'Pesa Recio',
    icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/power-weight.png',
    purpose: 'Asegura al 100% la herencia del IV de Puntos de Salud (PS) de este padre.',
    statTarget: 'hp'
  },
  powerBracer: {
    id: 'power-bracer',
    name: 'power-bracer',
    spanishName: 'Brazal Recio',
    icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/power-bracer.png',
    purpose: 'Asegura al 100% la herencia del IV de Ataque Físico de este padre.',
    statTarget: 'atk'
  },
  powerBelt: {
    id: 'power-belt',
    name: 'power-belt',
    spanishName: 'Cinto Recio',
    icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/power-belt.png',
    purpose: 'Asegura al 100% la herencia del IV de Defensa Física de este padre.',
    statTarget: 'def'
  },
  powerLens: {
    id: 'power-lens',
    name: 'power-lens',
    spanishName: 'Lente Recio',
    icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/power-lens.png',
    purpose: 'Asegura al 100% la herencia del IV de Ataque Especial de este padre.',
    statTarget: 'spa'
  },
  powerBand: {
    id: 'power-band',
    name: 'power-band',
    spanishName: 'Banda Recio',
    icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/power-band.png',
    purpose: 'Asegura al 100% la herencia del IV de Defensa Especial de este padre.',
    statTarget: 'spd'
  },
  powerAnklet: {
    id: 'power-anklet',
    name: 'power-anklet',
    spanishName: 'Franja Recio',
    icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/power-anklet.png',
    purpose: 'Asegura al 100% la herencia del IV de Velocidad de este padre.',
    statTarget: 'spe'
  },
  mirrorHerb: {
    id: 'mirror-herb',
    name: 'mirror-herb',
    spanishName: 'Hierba Copia (Gen 9)',
    icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mirror-herb.png',
    purpose: 'Enseña Movimientos de Huevo en Picnic sin necesidad de criar.'
  }
};

export function getPowerItemForStat(stat: StatName): ItemRequired {
  switch (stat) {
    case 'hp': return BREEDING_ITEMS.powerWeight;
    case 'atk': return BREEDING_ITEMS.powerBracer;
    case 'def': return BREEDING_ITEMS.powerBelt;
    case 'spa': return BREEDING_ITEMS.powerLens;
    case 'spd': return BREEDING_ITEMS.powerBand;
    case 'spe': return BREEDING_ITEMS.powerAnklet;
  }
}

export function validateEggGroupCompatibility(
  parentA: ParentPokemon,
  parentB: ParentPokemon
): EggGroupValidationResult {
  if (parentA.eggGroups.includes('undiscovered')) {
    return {
      isCompatible: false,
      reason: `⚠️ ¡Imposible criar! ${parentA.spanishName} pertenece al Grupo "No Descubierto" (bebé Pokémon o legendario). Debes evolucionarlo antes de criar.`,
      commonEggGroups: []
    };
  }
  if (parentB.eggGroups.includes('undiscovered')) {
    return {
      isCompatible: false,
      reason: `⚠️ ¡Imposible criar! ${parentB.spanishName} pertenece al Grupo "No Descubierto" (bebé Pokémon o legendario). Debes evolucionarlo antes de criar.`,
      commonEggGroups: []
    };
  }

  if (parentA.isDitto || parentB.isDitto) {
    if (parentA.isDitto && parentB.isDitto) {
      return {
        isCompatible: false,
        reason: '⚠️ Dos Ditto NO pueden criar entre sí.',
        commonEggGroups: []
      };
    }
    return {
      isCompatible: true,
      reason: '✓ Compatible (Ditto puede criar con cualquier Pokémon de grupo fértil).',
      commonEggGroups: ['ditto']
    };
  }

  const common = parentA.eggGroups.filter(eg => parentB.eggGroups.includes(eg));

  if (common.length > 0) {
    const groupNames = common.map(g => EGG_GROUPS_ES[g] || g).join(', ');
    return {
      isCompatible: true,
      reason: `✓ Compatibles. Ambos comparten el Grupo Huevo: ${groupNames}.`,
      commonEggGroups: common
    };
  }

  const groupsA = parentA.eggGroups.map(g => EGG_GROUPS_ES[g] || g).join(', ');
  const groupsB = parentB.eggGroups.map(g => EGG_GROUPS_ES[g] || g).join(', ');

  return {
    isCompatible: false,
    reason: `🚨 ¡INCOMPATIBLES! ${parentA.spanishName} (Grupo: ${groupsA}) y ${parentB.spanishName} (Grupo: ${groupsB}) NO comparten ningún Grupo Huevo y NO podrán poner huevos.`,
    commonEggGroups: []
  };
}

export function generatePrerequisitesList(
  targetPokemon: PokemonSummary,
  goal: GoalConfig,
  steps: BreedingStepNode[]
): PrerequisiteCheckItem[] {
  const items: PrerequisiteCheckItem[] = [];

  items.push({
    id: 'prereq-destiny-knot',
    title: 'Lazo Destino (Destiny Knot)',
    category: 'item',
    iconUrl: BREEDING_ITEMS.destinyKnot.icon,
    description: 'Equipable para asegurar la herencia de 5 IVs combinados entre ambos padres.',
    isChecked: false
  });

  if (goal.useNature) {
    items.push({
      id: 'prereq-everstone',
      title: 'Piedra Eterna (Everstone)',
      category: 'item',
      iconUrl: BREEDING_ITEMS.everstone.icon,
      description: `Equipable en el padre con Naturaleza ${goal.targetNature} para fijarla al 100%.`,
      isChecked: false
    });
  }

  const powerItemsUsed = new Map<string, ItemRequired>();
  steps.forEach(s => {
    s.requiredItems.forEach(it => {
      if (it.statTarget) powerItemsUsed.set(it.id, it);
    });
  });

  powerItemsUsed.forEach((it) => {
    items.push({
      id: `prereq-${it.id}`,
      title: `${it.spanishName} (${it.purpose})`,
      category: 'item',
      iconUrl: it.icon,
      description: `Necesario para heredar 31 IVs garantizados en el primer paso.`,
      isChecked: false
    });
  });

  if (goal.eggMoves && goal.eggMoves.length > 0) {
    items.push({
      id: 'prereq-mirror-herb',
      title: 'Hierba Copia (Mirror Herb - Gen 9)',
      category: 'item',
      iconUrl: BREEDING_ITEMS.mirrorHerb.icon,
      description: `Para enseñar al instante el movimiento ${goal.eggMoves[0]} en un Picnic.`,
      isChecked: false
    });
  }

  items.push({
    id: 'prereq-parent-female',
    title: `Padre Base / Hembra de ${targetPokemon.spanishName}`,
    category: 'parent',
    iconUrl: targetPokemon.sprite,
    description: `1x Hembra de la especie de ${targetPokemon.spanishName} (o Ditto) para definir la especie resultante.`,
    isChecked: false
  });

  if (goal.useNature) {
    items.push({
      id: 'prereq-parent-nature',
      title: `Padre o Ditto con Naturaleza ${goal.targetNature}`,
      category: 'parent',
      iconUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
      description: `Padre compatible del grupo ${EGG_GROUPS_ES[targetPokemon.eggGroups[0]] || 'Campo'} o Ditto con Naturaleza ${goal.targetNature}.`,
      isChecked: false
    });
  }

  items.push({
    id: 'prereq-ditto-ivs',
    title: 'Ditto de 4x31 a 6x31 IVs (o Padres Fértiles)',
    category: 'parent',
    iconUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    description: 'Padre sustituto con IVs perfectos para la cruza final.',
    isChecked: false
  });

  items.push({
    id: 'prereq-flame-body',
    title: 'Pokémon Acelerador con Cuerpo Llama (Flame Body)',
    category: 'helper',
    iconUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png',
    description: 'Talonflame, Volcarona, Carkol o Magmar en tu equipo para reducir los pasos de eclosión a la mitad (-50%).',
    isChecked: false
  });

  return items;
}

export function generateBreedingTree(
  targetPokemon: PokemonSummary,
  goal: GoalConfig,
  userBox: BoxPokemon[] = []
): BreedingStepNode[] {
  const steps: BreedingStepNode[] = [];
  const targetIvCount = goal.targetIvCount;
  const hatchBaseSteps = (targetPokemon.hatchCounter + 1) * 256;

  // Order stats to build up: hp -> def -> spd -> spa/atk -> spe
  const selectedStats: StatName[] = [];
  if (goal.targetIvs.hp === 31) selectedStats.push('hp');
  if (goal.targetIvs.def === 31) selectedStats.push('def');
  if (goal.targetIvs.spd === 31) selectedStats.push('spd');
  if (goal.targetIvs.spa === 31 && !goal.useZeroAtk) selectedStats.push('spa');
  if (goal.targetIvs.atk === 31 && goal.targetIvCount >= 3) selectedStats.push('atk');
  if (goal.targetIvs.spe === 31 || goal.useZeroSpe) selectedStats.push('spe');

  const allStats: StatName[] = ['hp', 'def', 'spd', 'spa', 'atk', 'spe'];
  for (const s of allStats) {
    if (selectedStats.length < targetIvCount && !selectedStats.includes(s)) {
      selectedStats.push(s);
    }
  }

  const natureParentInBox = userBox.find(p =>
    p.nature.toLowerCase() === goal.targetNature?.toLowerCase() &&
    (p.isDitto || p.eggGroups.some(eg => targetPokemon.eggGroups.includes(eg)))
  );

  const bestDitto = userBox.find(p => p.isDitto && Object.values(p.ivs).filter(v => v === 31).length >= 5);

  const stat1 = selectedStats[0] || 'hp';
  const stat2 = selectedStats[1] || 'def';
  const stat3 = selectedStats[2] || 'spd';
  const stat4 = selectedStats[3] || 'spa';

  // =========================================================================
  // PASO 1: Cruza 1x31 + 1x31 -> CRÍA 1 (2x31)
  // =========================================================================
  const parentA1: ParentPokemon = {
    pokemonId: targetPokemon.id,
    speciesName: targetPokemon.name,
    spanishName: `Padre A (Salvaje 1x31 ${stat1.toUpperCase()})`,
    sprite: targetPokemon.sprite,
    gender: 'female',
    ivs: { hp: stat1 === 'hp' ? 31 : 10, atk: 10, def: stat1 === 'def' ? 31 : 10, spa: 10, spd: stat1 === 'spd' ? 31 : 10, spe: 10 },
    nature: 'Aleatoria',
    heldItem: getPowerItemForStat(stat1),
    eggGroups: targetPokemon.eggGroups,
    source: 'wild'
  };

  const parentB1: ParentPokemon = {
    pokemonId: 132,
    speciesName: 'ditto',
    spanishName: `Padre B / Ditto (Salvaje 1x31 ${stat2.toUpperCase()})`,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    gender: 'male',
    ivs: { hp: stat2 === 'hp' ? 31 : 10, atk: 10, def: stat2 === 'def' ? 31 : 10, spa: 10, spd: stat2 === 'spd' ? 31 : 10, spe: 10 },
    heldItem: getPowerItemForStat(stat2),
    eggGroups: targetPokemon.eggGroups,
    isDitto: true,
    source: 'wild'
  };

  steps.push({
    stepNumber: 1,
    title: `Paso 1: Obtener CRÍA 1 (2x31 ${stat1.toUpperCase()} + ${stat2.toUpperCase()})`,
    description: `Captura dos Pokémon o Ditto salvajes con 1x31 IV cada uno. Equipa a Madre A con **${parentA1.heldItem?.spanishName}** y al Padre B con **${parentB1.heldItem?.spanishName}**. Heredarás con 100% de certeza ambos IVs, obteniendo tu **CRÍA 1** (2x31).`,
    parentA: parentA1,
    parentB: parentB1,
    requiredItems: [parentA1.heldItem!, parentB1.heldItem!],
    targetChild: {
      pokemonId: targetPokemon.id,
      speciesName: targetPokemon.name,
      spanishName: `🥚 CRÍA 1 (${targetPokemon.spanishName} 2x31 ${stat1.toUpperCase()}/${stat2.toUpperCase()})`,
      sprite: targetPokemon.sprite,
      gender: 'female',
      ivs: { hp: stat1 === 'hp' || stat2 === 'hp' ? 31 : 15, atk: 15, def: stat1 === 'def' || stat2 === 'def' ? 31 : 15, spa: 15, spd: stat1 === 'spd' || stat2 === 'spd' ? 31 : 15, spe: 15 },
      nature: undefined,
      eggGroups: targetPokemon.eggGroups,
      source: 'bred'
    },
    successChance: 100,
    expectedEggs: 1,
    hatchSteps: hatchBaseSteps,
    isCompleted: false
  });

  // =========================================================================
  // PASO 2: Cruza 1x31 + 1x31 (segunda pareja) -> CRÍA 2 (2x31 en stats 3 y 4)
  // =========================================================================
  if (targetIvCount >= 3) {
    const parentA2: ParentPokemon = {
      pokemonId: targetPokemon.id,
      speciesName: targetPokemon.name,
      spanishName: `Padre C (Salvaje 1x31 ${stat3.toUpperCase()})`,
      sprite: targetPokemon.sprite,
      gender: 'female',
      ivs: { hp: stat3 === 'hp' ? 31 : 10, atk: 10, def: stat3 === 'def' ? 31 : 10, spa: 10, spd: stat3 === 'spd' ? 31 : 10, spe: 10 },
      nature: 'Aleatoria',
      heldItem: getPowerItemForStat(stat3),
      eggGroups: targetPokemon.eggGroups,
      source: 'wild'
    };

    const parentB2: ParentPokemon = {
      pokemonId: 132,
      speciesName: 'ditto',
      spanishName: `Padre D / Ditto (Salvaje 1x31 ${stat4.toUpperCase()})`,
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
      gender: 'male',
      ivs: { hp: stat4 === 'hp' ? 31 : 10, atk: 10, def: stat4 === 'def' ? 31 : 10, spa: 10, spd: stat4 === 'spd' ? 31 : 10, spe: 10 },
      heldItem: getPowerItemForStat(stat4),
      eggGroups: targetPokemon.eggGroups,
      isDitto: true,
      source: 'wild'
    };

    steps.push({
      stepNumber: 2,
      title: `Paso 2: Obtener CRÍA 2 (2x31 ${stat3.toUpperCase()} + ${stat4.toUpperCase()})`,
      description: `Captura una segunda pareja de padres 1x31 salvajes. Equipa a la Madre C con **${parentA2.heldItem?.spanishName}** y al Padre D con **${parentB2.heldItem?.spanishName}**. Obtendrás tu **CRÍA 2** (2x31) con 100% de garantía.`,
      parentA: parentA2,
      parentB: parentB2,
      requiredItems: [parentA2.heldItem!, parentB2.heldItem!],
      targetChild: {
        pokemonId: targetPokemon.id,
        speciesName: targetPokemon.name,
        spanishName: `🥚 CRÍA 2 (${targetPokemon.spanishName} 2x31 ${stat3.toUpperCase()}/${stat4.toUpperCase()})`,
        sprite: targetPokemon.sprite,
        gender: 'male',
        ivs: { hp: stat3 === 'hp' || stat4 === 'hp' ? 31 : 15, atk: 15, def: stat3 === 'def' || stat4 === 'def' ? 31 : 15, spa: 15, spd: stat3 === 'spd' || stat4 === 'spd' ? 31 : 15, spe: 15 },
        nature: undefined,
        eggGroups: targetPokemon.eggGroups,
        source: 'bred'
      },
      successChance: 100,
      expectedEggs: 1,
      hatchSteps: hatchBaseSteps,
      isCompleted: false
    });
  }

  // =========================================================================
  // PASO 3: Combinar CRÍA 1 (2x31) + CRÍA 2 (2x31) -> CRÍA 3 (3x31)
  // =========================================================================
  if (targetIvCount >= 3) {
    const child1 = steps[0].targetChild;
    const child2 = steps[1].targetChild;

    const parentA3: ParentPokemon = {
      ...child1,
      spanishName: `Madre A: CRÍA 1 (${targetPokemon.spanishName} 2x31 de Paso 1)`,
      heldItem: BREEDING_ITEMS.destinyKnot
    };

    const parentB3: ParentPokemon = {
      ...child2,
      spanishName: `Padre B: CRÍA 2 (${targetPokemon.spanishName} 2x31 de Paso 2)`,
      heldItem: getPowerItemForStat(stat3)
    };

    steps.push({
      stepNumber: 3,
      title: `Paso 3: Cruza de CRÍA 1 + CRÍA 2 para obtener CRÍA 3 (3x31 IVs)`,
      description: `Equipa a tu **CRÍA 1** con el **Lazo Destino** y a tu **CRÍA 2** con **${parentB3.heldItem?.spanishName}**. Al combinar los IVs de ambas crías de 2x31, obtendrás tu **CRÍA 3** con 3x31 IVs (~25% de probabilidad).`,
      parentA: parentA3,
      parentB: parentB3,
      requiredItems: [BREEDING_ITEMS.destinyKnot, parentB3.heldItem!],
      targetChild: {
        pokemonId: targetPokemon.id,
        speciesName: targetPokemon.name,
        spanishName: `🥚 CRÍA 3 (${targetPokemon.spanishName} 3x31)`,
        sprite: targetPokemon.sprite,
        gender: 'female',
        ivs: { hp: 31, atk: 15, def: 31, spa: 15, spd: 31, spe: 15 },
        nature: undefined,
        eggGroups: targetPokemon.eggGroups,
        source: 'bred'
      },
      successChance: 25,
      expectedEggs: 4,
      hatchSteps: hatchBaseSteps,
      isCompleted: false
    });
  }

  // =========================================================================
  // PASO 4: Transferir y Fijar Naturaleza (si useNature = true)
  // =========================================================================
  if (goal.useNature) {
    const lastChild = steps[steps.length - 1].targetChild;
    const prevCriaNum = steps.length;
    const currentCriaNum = steps.length + 1;

    const parentA4: ParentPokemon = {
      ...lastChild,
      spanishName: `Madre A: CRÍA ${prevCriaNum} (${targetPokemon.spanishName} 3x31 de Paso ${prevCriaNum})`,
      heldItem: BREEDING_ITEMS.destinyKnot
    };

    const parentB4: ParentPokemon = {
      pokemonId: natureParentInBox ? natureParentInBox.pokemonId : 132,
      speciesName: natureParentInBox ? natureParentInBox.speciesName : 'ditto',
      spanishName: natureParentInBox
        ? `Padre B: ${natureParentInBox.spanishName} (Caja - Naturaleza ${goal.targetNature})`
        : `Padre B: Ditto / Macho Salvaje (Naturaleza ${goal.targetNature})`,
      sprite: natureParentInBox ? natureParentInBox.sprite : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
      gender: 'male',
      ivs: { hp: 31, atk: 15, def: 31, spa: 15, spd: 31, spe: 15 },
      nature: goal.targetNature,
      heldItem: BREEDING_ITEMS.everstone,
      eggGroups: targetPokemon.eggGroups,
      isDitto: true,
      source: natureParentInBox ? 'box' : 'wild'
    };

    steps.push({
      stepNumber: steps.length + 1,
      title: `Paso ${currentCriaNum}: Fijar Naturaleza ${goal.targetNature} -> CRÍA ${currentCriaNum}`,
      description: `Equipa a tu **CRÍA ${prevCriaNum}** con el **Lazo Destino** y al Padre con la Naturaleza **${goal.targetNature}** con la **Piedra Eterna**. La cría resultante será tu **CRÍA ${currentCriaNum}** con 3x31 IVs y Naturaleza ${goal.targetNature} fija al 100%.`,
      parentA: parentA4,
      parentB: parentB4,
      requiredItems: [BREEDING_ITEMS.destinyKnot, BREEDING_ITEMS.everstone],
      targetChild: {
        pokemonId: targetPokemon.id,
        speciesName: targetPokemon.name,
        spanishName: `🥚 CRÍA ${currentCriaNum} (${targetPokemon.spanishName} 3x31 - ${goal.targetNature})`,
        sprite: targetPokemon.sprite,
        gender: 'female',
        ivs: { hp: 31, atk: 15, def: 31, spa: 15, spd: 31, spe: 15 },
        nature: goal.targetNature,
        eggGroups: targetPokemon.eggGroups,
        source: 'bred'
      },
      successChance: 25,
      expectedEggs: 4,
      hatchSteps: hatchBaseSteps,
      isCompleted: false
    });
  }

  // =========================================================================
  // PASO 5: Elevar de 3x31 a 4x31
  // =========================================================================
  if (targetIvCount >= 4) {
    const lastChild = steps[steps.length - 1].targetChild;
    const prevCriaNum = steps.length;
    const currentCriaNum = steps.length + 1;

    const parentA5: ParentPokemon = {
      ...lastChild,
      spanishName: `Madre A: CRÍA ${prevCriaNum} (${targetPokemon.spanishName} 3x31 con Naturaleza ${goal.targetNature || ''})`,
      heldItem: goal.useNature ? BREEDING_ITEMS.everstone : BREEDING_ITEMS.destinyKnot
    };

    const parentB5: ParentPokemon = {
      pokemonId: targetPokemon.id,
      speciesName: targetPokemon.name,
      spanishName: `Padre B: CRÍA 2 / Macho Fértil (2x31/3x31 en stats secundarios)`,
      sprite: targetPokemon.sprite,
      gender: 'male',
      ivs: { hp: 31, atk: 31, def: 31, spa: 15, spd: 31, spe: 15 },
      heldItem: BREEDING_ITEMS.destinyKnot,
      eggGroups: targetPokemon.eggGroups,
      source: 'bred'
    };

    steps.push({
      stepNumber: steps.length + 1,
      title: `Paso ${currentCriaNum}: Elevar a 4x31 IVs -> CRÍA ${currentCriaNum}`,
      description: goal.useNature
        ? `Equipa a tu **CRÍA ${prevCriaNum}** con la **Piedra Eterna** y al Padre B con el **Lazo Destino**. La cría resultante será tu **CRÍA ${currentCriaNum}** con 4x31 IVs y Naturaleza ${goal.targetNature} al 100%.`
        : `Equipa a tu **CRÍA ${prevCriaNum}** con el **Lazo Destino** y al Padre B con **${parentB5.heldItem?.spanishName}**. Obtendrás tu **CRÍA ${currentCriaNum}** con 4x31 IVs.`,
      parentA: parentA5,
      parentB: parentB5,
      requiredItems: goal.useNature ? [BREEDING_ITEMS.everstone, BREEDING_ITEMS.destinyKnot] : [BREEDING_ITEMS.destinyKnot],
      targetChild: {
        pokemonId: targetPokemon.id,
        speciesName: targetPokemon.name,
        spanishName: `🥚 CRÍA ${currentCriaNum} (${targetPokemon.spanishName} 4x31${goal.useNature ? ` - ${goal.targetNature}` : ''})`,
        sprite: targetPokemon.sprite,
        gender: 'female',
        ivs: { hp: 31, atk: goal.useZeroAtk ? 0 : 31, def: 31, spa: 31, spd: 31, spe: 15 },
        nature: goal.useNature ? goal.targetNature : undefined,
        eggGroups: targetPokemon.eggGroups,
        source: 'bred'
      },
      successChance: 16.6,
      expectedEggs: 6,
      hatchSteps: hatchBaseSteps,
      isCompleted: false
    });
  }

  // =========================================================================
  // PASO FINAL: Elevar a 5x31 / 6x31 -> CRÍA FINAL PERFECTA
  // =========================================================================
  const lastChild = steps[steps.length - 1].targetChild;
  const lastCriaNum = steps.length;

  const parentAFinal: ParentPokemon = {
    ...lastChild,
    spanishName: `Madre A: CRÍA ${lastCriaNum} (${targetPokemon.spanishName} ${targetIvCount - 1}x31 ${goal.useNature ? `+ Naturaleza ${goal.targetNature}` : ''})`,
    heldItem: goal.useNature ? BREEDING_ITEMS.everstone : BREEDING_ITEMS.destinyKnot
  };

  const parentBFinal: ParentPokemon = {
    pokemonId: bestDitto ? bestDitto.pokemonId : 132,
    speciesName: bestDitto ? bestDitto.speciesName : 'ditto',
    spanishName: bestDitto
      ? `Padre B: ${bestDitto.spanishName} (Ditto 6x31 de tu Caja Maestra)`
      : `Padre B: Macho Fértil / Ditto Obtencion Final (4x31-5x31 IVs)`,
    sprite: bestDitto ? bestDitto.sprite : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    gender: 'male',
    ivs: { hp: 31, atk: goal.useZeroAtk ? 0 : 31, def: 31, spa: 31, spd: 31, spe: goal.useZeroSpe ? 0 : 31 },
    heldItem: BREEDING_ITEMS.destinyKnot,
    eggGroups: targetPokemon.eggGroups,
    isDitto: true,
    source: bestDitto ? 'box' : 'bred'
  };

  const finalProb = targetIvCount === 6 ? 3.125 : (goal.useZeroAtk ? 16.6 : 16.6);
  const finalEggs = targetIvCount === 6 ? 32 : 6;

  let eggMoveNote: string | undefined;
  let mirrorHerbTip: string | undefined;

  if (goal.eggMoves && goal.eggMoves.length > 0) {
    eggMoveNote = `Movimientos de Huevo incluidos: ${goal.eggMoves.join(', ')}.`;
    mirrorHerbTip = `💡 Tip Gen 9 (Escarlata y Púrpura): ¡No necesitas criar para este movimiento! Equipa una Hierba Copia (Mirror Herb) a tu ${targetPokemon.spanishName} con un espacio libre e inicia un Picnic con un Pokémon que conozca ${goal.eggMoves[0]}. ¡Lo aprenderá instantáneamente!`;
  }

  steps.push({
    stepNumber: steps.length + 1,
    title: `🎯 Paso Final: Usar CRÍA ${lastCriaNum} para obtener la CRÍA FINAL (${targetIvCount}x31 IVs)`,
    description: goal.useNature
      ? `Toma a tu **CRÍA ${lastCriaNum}** (con Naturaleza **${goal.targetNature}**), equípale la **Piedra Eterna** y crúzala con el Padre B con **Lazo Destino**. ¡El huevo resultante será tu **CRÍA FINAL** con ${targetIvCount}x31 IVs y Naturaleza ${goal.targetNature} garantizada!`
      : `Toma a tu **CRÍA ${lastCriaNum}**, equípale el **Lazo Destino** y crúzala con el Padre B. ¡El huevo resultante será tu **CRÍA FINAL** con ${targetIvCount}x31 IVs perfectos!`,
    parentA: parentAFinal,
    parentB: parentBFinal,
    requiredItems: goal.useNature ? [BREEDING_ITEMS.destinyKnot, BREEDING_ITEMS.everstone] : [BREEDING_ITEMS.destinyKnot],
    targetChild: {
      pokemonId: targetPokemon.id,
      speciesName: targetPokemon.name,
      spanishName: `✨ CRÍA FINAL: ${targetPokemon.spanishName} Competitivo ${targetIvCount}x31 (${goal.targetNature || 'Perfecto'})`,
      sprite: targetPokemon.officialArtwork || targetPokemon.sprite,
      gender: goal.targetGender === 'female' ? 'female' : goal.targetGender === 'male' ? 'male' : 'female',
      ivs: {
        hp: goal.targetIvs.hp,
        atk: goal.useZeroAtk ? 0 : goal.targetIvs.atk,
        def: goal.targetIvs.def,
        spa: goal.targetIvs.spa,
        spd: goal.targetIvs.spd,
        spe: goal.useZeroSpe ? 0 : goal.targetIvs.spe
      },
      nature: goal.targetNature,
      ability: goal.targetAbility,
      eggGroups: targetPokemon.eggGroups,
      source: 'bred'
    },
    successChance: finalProb,
    expectedEggs: finalEggs,
    hatchSteps: hatchBaseSteps,
    eggMoveNote,
    mirrorHerbTip,
    isCompleted: false
  });

  return steps;
}

