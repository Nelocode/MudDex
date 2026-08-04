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

  const bestDitto = userBox.find(p => p.isDitto);

  // STEP 1: Cruza Base con Objetos Recio -> RESULTADO: CRÍA 1
  const stat1 = selectedStats[0] || 'hp';
  const stat2 = selectedStats[1] || 'def';
  const stat3 = selectedStats[2] || 'spd';

  const parentA1: ParentPokemon = {
    pokemonId: targetPokemon.id,
    speciesName: targetPokemon.name,
    spanishName: natureParentInBox ? `${natureParentInBox.spanishName} (Naturaleza ${goal.targetNature} + Piedra Eterna)` : `Padre A (Hembra 1x31 ${stat1.toUpperCase()})`,
    sprite: natureParentInBox ? natureParentInBox.sprite : targetPokemon.sprite,
    gender: 'female',
    ivs: { hp: stat1 === 'hp' ? 31 : 10, atk: 10, def: stat1 === 'def' ? 31 : 10, spa: 10, spd: stat1 === 'spd' ? 31 : 10, spe: 10 },
    nature: natureParentInBox ? goal.targetNature : 'Aleatoria',
    heldItem: natureParentInBox ? BREEDING_ITEMS.everstone : getPowerItemForStat(stat1),
    eggGroups: targetPokemon.eggGroups,
    source: natureParentInBox ? 'box' : 'wild'
  };

  const parentB1: ParentPokemon = {
    pokemonId: bestDitto ? bestDitto.pokemonId : 132,
    speciesName: bestDitto ? bestDitto.speciesName : 'ditto',
    spanishName: bestDitto ? `Ditto (${bestDitto.spanishName})` : `Padre B / Ditto (Macho 1x31 ${stat2.toUpperCase()})`,
    sprite: bestDitto ? bestDitto.sprite : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    gender: 'male',
    ivs: { hp: stat2 === 'hp' ? 31 : 10, atk: 10, def: stat2 === 'def' ? 31 : 10, spa: 10, spd: stat2 === 'spd' ? 31 : 10, spe: 10 },
    heldItem: getPowerItemForStat(stat2),
    eggGroups: targetPokemon.eggGroups,
    isDitto: true,
    source: bestDitto ? 'box' : 'wild'
  };

  steps.push({
    stepNumber: 1,
    title: `Obtener CRÍA 1 (2x31 ${stat1.toUpperCase()} + ${stat2.toUpperCase()})`,
    description: natureParentInBox
      ? `Cruza inicial. Tu cría resultante será etiquetada como **CRÍA 1** (2x31 IVs + Naturaleza heredada).`
      : `Equipa a ambos padres con Objetos Recio (${parentA1.heldItem?.spanishName} y ${parentB1.heldItem?.spanishName}) para traspasar con 100% de certeza 31 IVs en ${stat1.toUpperCase()} y ${stat2.toUpperCase()}. La cría resultante será tu **CRÍA 1**.`,
    parentA: parentA1,
    parentB: parentB1,
    requiredItems: natureParentInBox ? [BREEDING_ITEMS.everstone, parentB1.heldItem!] : [parentA1.heldItem!, parentB1.heldItem!],
    targetChild: {
      pokemonId: targetPokemon.id,
      speciesName: targetPokemon.name,
      spanishName: `🥚 CRÍA 1 (${targetPokemon.spanishName} 2x31)`,
      sprite: targetPokemon.sprite,
      gender: 'female',
      ivs: { hp: stat1 === 'hp' || stat2 === 'hp' ? 31 : 15, atk: 15, def: stat1 === 'def' || stat2 === 'def' ? 31 : 15, spa: 15, spd: stat1 === 'spd' || stat2 === 'spd' ? 31 : 15, spe: 15 },
      nature: natureParentInBox ? goal.targetNature : undefined,
      eggGroups: targetPokemon.eggGroups,
      source: 'bred'
    },
    successChance: 100,
    expectedEggs: 1,
    hatchSteps: hatchBaseSteps,
    isCompleted: false
  });

  // STEP 2: Usar CRÍA 1 para obtener CRÍA 2
  if (goal.useNature) {
    const child1 = steps[0].targetChild;

    const parentA2: ParentPokemon = {
      ...child1,
      spanishName: `Madre A: CRÍA 1 (${targetPokemon.spanishName} 2x31 de Paso 1)`
    };

    if (natureParentInBox) {
      parentA2.heldItem = BREEDING_ITEMS.everstone;
      parentA2.nature = goal.targetNature;
    } else {
      // CRÍA 1 porta el Lazo Destino para herencia de 5 IVs
      // El Ditto/Macho porta la Piedra Eterna con la Naturaleza objetivo
      parentA2.heldItem = BREEDING_ITEMS.destinyKnot;
    }

    const parentB2: ParentPokemon = {
      pokemonId: 132,
      speciesName: 'ditto',
      spanishName: natureParentInBox
        ? `Padre B: Ditto / Macho Fértil (2x31 + Lazo Destino)`
        : `Padre B: Ditto / Macho con Naturaleza ${goal.targetNature} (Piedra Eterna)`,
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
      gender: 'male',
      ivs: { hp: 31, atk: 15, def: 31, spa: 15, spd: 31, spe: 15 },
      nature: goal.targetNature,
      heldItem: natureParentInBox ? BREEDING_ITEMS.destinyKnot : BREEDING_ITEMS.everstone,
      eggGroups: targetPokemon.eggGroups,
      isDitto: true,
      source: 'wild'
    };

    steps.push({
      stepNumber: 2,
      title: `Usar CRÍA 1 para obtener CRÍA 2 (3x31 IVs + Naturaleza ${goal.targetNature})`,
      description: natureParentInBox
        ? `Tu **CRÍA 1** ya tiene la Naturaleza **${goal.targetNature}** heredada (vía Piedra Eterna del paso anterior). Equípale de nuevo la **Piedra Eterna** y crúzala con el Ditto de tu caja (Lazo Destino). El resultado será tu **CRÍA 2** con 3x31 IVs y Naturaleza ${goal.targetNature} garantizada al 100%.`
        : `Equipa a tu **CRÍA 1** con el **Lazo Destino**. Necesitarás un Ditto o macho compatible que tenga la Naturaleza **${goal.targetNature}** — equípale la **Piedra Eterna** para que esa naturaleza se transfiera a la cría al 100%. Con ambos objetos equipados obtendrás tu **CRÍA 2** (3x31 IVs + Naturaleza ${goal.targetNature} fijada).`,

      parentA: parentA2,
      parentB: parentB2,
      requiredItems: [BREEDING_ITEMS.everstone, BREEDING_ITEMS.destinyKnot],
      targetChild: {
        pokemonId: targetPokemon.id,
        speciesName: targetPokemon.name,
        spanishName: `🥚 CRÍA 2 (${targetPokemon.spanishName} 3x31 - ${goal.targetNature})`,
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

  // STEP 3: Usar última CRÍA para obtener siguiente CRÍA con más IVs
  if (targetIvCount >= 4) {
    const child2 = steps[steps.length - 1].targetChild;
    const criaNumIn = steps.length;   // número de la CRÍA que entra como madre
    const criaNumOut = steps.length + 1; // número de la CRÍA que sale

    const parentA3: ParentPokemon = {
      ...child2,
      spanishName: `Madre A: CRÍA ${criaNumIn} (${targetPokemon.spanishName} ${goal.useNature ? `3x31 con Naturaleza ${goal.targetNature}` : '2x31 IVs'})`,
      heldItem: goal.useNature ? BREEDING_ITEMS.everstone : BREEDING_ITEMS.destinyKnot
    };

    const parentB3: ParentPokemon = {
      pokemonId: targetPokemon.id,
      speciesName: targetPokemon.name,
      spanishName: `Padre B: Macho Fértil Grupo ${targetPokemon.eggGroups[0] || 'Campo'} (4x31 IVs)`,
      sprite: targetPokemon.sprite,
      gender: 'male',
      ivs: { hp: 31, atk: 31, def: 31, spa: 15, spd: 31, spe: 15 },
      heldItem: BREEDING_ITEMS.destinyKnot,
      eggGroups: targetPokemon.eggGroups,
      source: 'bred'
    };


    steps.push({
      stepNumber: steps.length + 1,
      title: `Usar CRÍA ${criaNumIn} para obtener CRÍA ${criaNumOut} (4x31 / 5x31 IVs)`,
      description: goal.useNature
        ? `Equipa a tu **CRÍA ${criaNumIn}** con la **Piedra Eterna** (mantiene la Naturaleza ${goal.targetNature} al 100%) y crúzala con un padre o Ditto de 4x31 IVs con **Lazo Destino**. La cría resultante será tu **CRÍA ${criaNumOut}** con 4x31-5x31 IVs.`
        : `Equipa a tu **CRÍA ${criaNumIn}** con el **Lazo Destino** y crúzala con un padre o Ditto de 4x31 IVs. La cría resultante será tu **CRÍA ${criaNumOut}** con 4x31 IVs.`,
      parentA: parentA3,
      parentB: parentB3,
      requiredItems: [BREEDING_ITEMS.everstone, BREEDING_ITEMS.destinyKnot],
      targetChild: {
        pokemonId: targetPokemon.id,
        speciesName: targetPokemon.name,
        spanishName: `🥚 CRÍA ${criaNumOut} (${targetPokemon.spanishName} 4x31/5x31${goal.useNature ? ` - ${goal.targetNature}` : ''})`,
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

  // STEP FINAL: Usar última CRÍA para obtener la CRÍA FINAL PERFECTA
  const lastChild = steps[steps.length - 1].targetChild;
  const lastCriaNum = steps.length;

  const parentAFinal: ParentPokemon = {
    ...lastChild,
    spanishName: `Madre A: CRÍA ${lastCriaNum} (${targetPokemon.spanishName} ${goal.useNature ? `${targetIvCount - 1}x31 + Naturaleza ${goal.targetNature}` : `${targetIvCount - 1}x31 IVs`})`,
    heldItem: goal.useNature ? BREEDING_ITEMS.everstone : BREEDING_ITEMS.destinyKnot
  };

  const parentBFinal: ParentPokemon = {
    pokemonId: 132,
    speciesName: 'ditto',
    spanishName: `Padre B: Ditto 5x31 - 6x31 (Lazo Destino)`,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    gender: 'male',
    ivs: { hp: 31, atk: goal.useZeroAtk ? 0 : 31, def: 31, spa: 31, spd: 31, spe: 31 },
    heldItem: BREEDING_ITEMS.destinyKnot,
    eggGroups: targetPokemon.eggGroups,
    isDitto: true,
    source: 'bred'
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
      ? `Toma a tu **CRÍA ${lastCriaNum}** (con Naturaleza **${goal.targetNature}**), equípale la **Piedra Eterna** y crúzala con un Ditto de 5x31-6x31 con **Lazo Destino**. ¡El huevo resultante será tu **CRÍA FINAL** con ${targetIvCount}x31 IVs y Naturaleza ${goal.targetNature} garantizada!`
      : `Toma a tu **CRÍA ${lastCriaNum}**, equípale el **Lazo Destino** y crúzala con un Ditto de 5x31-6x31. ¡El huevo resultante será tu **CRÍA FINAL** con ${targetIvCount}x31 IVs perfectos!`,
    parentA: parentAFinal,
    parentB: parentBFinal,
    requiredItems: goal.useNature ? [BREEDING_ITEMS.destinyKnot, BREEDING_ITEMS.everstone] : [BREEDING_ITEMS.destinyKnot],
    targetChild: {
      pokemonId: targetPokemon.id,
      speciesName: targetPokemon.name,
      spanishName: `✨ CRÍA FINAL: ${targetPokemon.spanishName} Competitivo ${targetIvCount}x31 (${goal.targetNature})`,
      sprite: targetPokemon.officialArtwork || targetPokemon.sprite,
      gender: 'female',
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
