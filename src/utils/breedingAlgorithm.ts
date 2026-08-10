import { POKEMON_EGG_DATASET, PokemonEggData, EggGroup } from '../data/cobblemonEggGroups';

export interface BreederInventoryItem {
  id: string;
  speciesId: string;
  speciesName: string;
  gender: 'male' | 'female' | 'genderless';
  ivs: {
    hp: boolean;
    attack: boolean;
    defense: boolean;
    specialAttack: boolean;
    specialDefense: boolean;
    speed: boolean;
  };
  nature?: string;
  ability?: string;
}

export interface BreedingStepInstruction {
  stepNumber: number;
  title: string;
  parentA: {
    name: string;
    gender: 'male' | 'female' | 'genderless';
    equippedItem: string;
    ivSummary: string;
    isPreOwned: boolean;
    spriteUrl: string;
  };
  parentB: {
    name: string;
    gender: 'male' | 'female' | 'genderless';
    equippedItem: string;
    ivSummary: string;
    isPreOwned: boolean;
    spriteUrl: string;
  };
  offspringTarget: {
    name: string;
    genderRequired: 'male' | 'female' | 'either' | 'genderless';
    genderRequiredLabel: string;
    expectedIvsSummary: string;
    genderCostAlert?: string;
    spriteUrl: string;
  };
  strategyNotes: string;
  hatchStepsEstimate: number;
  flameBodyStepsEstimate: number;
}

export interface ShoppingListItem {
  id: string;
  name: string;
  category: 'power_item' | 'everstone' | 'destiny_knot' | 'breeder' | 'flame_body';
  icon: string;
  quantityNeeded: number;
  isAcquired: boolean;
  notes: string;
}

export interface GeneratedBreedingPlan {
  targetPokemonName: string;
  targetNature: string;
  targetAbility: string;
  targetIvCount: number;
  strategyUsed: 'destiny_knot' | 'pure_power_items';
  shoppingList: ShoppingListItem[];
  steps: BreedingStepInstruction[];
  totalEstimatedEggs: number;
  genderAlertSummary?: string;
}

export function getGenderRatio(pokemonId: string): { maleRate: number; femaleRate: number; label: string } {
  const s = pokemonId.toLowerCase().trim();
  
  if (['eevee', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'bulbasaur', 'ivysaur', 'venusaur', 'torchic', 'mudkip', 'treecko', 'chimchar', 'piplup', 'turtwig', 'froakie', 'fennekin', 'chespin', 'litten', 'popplio', 'rowlet', 'grookey', 'scorbunny', 'sobble', 'sprigatito', 'fuecoco', 'quaxly', 'snorlax', 'munchlax', 'togepi', 'togetic', 'togekiss', 'lucario', 'riolu'].includes(s)) {
    return { maleRate: 0.875, femaleRate: 0.125, label: '87.5% Macho / 12.5% Hembra (Alta dificultad para Hembras)' };
  }

  if (['chansey', 'blissey', 'happiny', 'bounsweet', 'steenee', 'tsareena', 'milcery', 'alcremie', 'tinkatink', 'tinkatuff', 'tinkaton', 'flabebe', 'floette', 'florges', 'petilil', 'lilligant', 'vullaby', 'mandibuzz', 'hatenna', 'hattrem', 'hatterene', 'froslass'].includes(s)) {
    return { maleRate: 0, femaleRate: 1.0, label: '100% Hembra (Solo Hembras)' };
  }

  if (['hitmonlee', 'hitmonchan', 'hitmontop', 'tyrogue', 'gallade', 'tauros', 'braviary', 'rufflet', 'sawk', 'throh', 'grimmsnarl', 'impidimp', 'morgrem'].includes(s)) {
    return { maleRate: 1.0, femaleRate: 0, label: '100% Macho (Solo Machos)' };
  }

  if (['ditto', 'magnemite', 'magneton', 'magnezone', 'voltorb', 'electrode', 'staryu', 'starmie', 'porygon', 'beldum', 'metang', 'metagross', 'bronzor', 'bronzong', 'rotom', 'falinks'].includes(s)) {
    return { maleRate: 0, femaleRate: 0, label: 'Sin Género (Solo puede criar obligatoriamente con Ditto)' };
  }

  return { maleRate: 0.5, femaleRate: 0.5, label: '50% Macho / 50% Hembra (Estándar)' };
}

export const POWER_ITEMS_MAP = [
  { ivKey: 'hp', name: 'Pesa Recia (Power Weight)', statName: 'HP', icon: '🏋️' },
  { ivKey: 'attack', name: 'Brazal Recio (Power Bracer)', statName: 'Ataque', icon: '⚔️' },
  { ivKey: 'defense', name: 'Cinto Recio (Power Belt)', statName: 'Defensa', icon: '🛡️' },
  { ivKey: 'specialAttack', name: 'Lente Recia (Power Lens)', statName: 'Atk Esp', icon: '🔮' },
  { ivKey: 'specialDefense', name: 'Banda Recia (Power Band)', statName: 'Def Esp', icon: '✨' },
  { ivKey: 'speed', name: 'Franja Recia (Power Anklet)', statName: 'Velocidad', icon: '⚡' }
];

export function findBridgeSpecies(sourceEggGroups: EggGroup[], targetEggGroups: EggGroup[]): PokemonEggData | null {
  if (sourceEggGroups.some(s => targetEggGroups.includes(s))) {
    return null;
  }
  const bridge = POKEMON_EGG_DATASET.find(p => {
    if (p.eggGroups.includes('undiscovered') || p.eggGroups.includes('ditto')) return false;
    const hasSource = p.eggGroups.some(eg => sourceEggGroups.includes(eg));
    const hasTarget = p.eggGroups.some(eg => targetEggGroups.includes(eg));
    return hasSource && hasTarget;
  });

  if (bridge) return bridge;

  if (sourceEggGroups.includes('bug') && targetEggGroups.includes('mineral')) {
    return POKEMON_EGG_DATASET.find(p => p.pokemonId === 'shuckle') || POKEMON_EGG_DATASET.find(p => p.pokemonId === 'dwebble') || null;
  }

  return null;
}

export function generateBreedingPlan(
  targetSpeciesId: string,
  targetIvs: { hp: boolean; attack: boolean; defense: boolean; specialAttack: boolean; specialDefense: boolean; speed: boolean },
  targetNature: string,
  targetAbility: string,
  eggMoves: string[],
  pastura: BreederInventoryItem[],
  useDestinyKnot: boolean = true
): GeneratedBreedingPlan {
  const targetData = POKEMON_EGG_DATASET.find(p => p.pokemonId === targetSpeciesId) || POKEMON_EGG_DATASET[0];
  const genderInfo = getGenderRatio(targetSpeciesId);
  
  const requiredIvKeys = (Object.keys(targetIvs) as (keyof typeof targetIvs)[]).filter(k => targetIvs[k]);
  const ivCount = requiredIvKeys.length;

  const steps: BreedingStepInstruction[] = [];
  const targetSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${targetData.dexNumber}.png`;
  const dittoSprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png';

  const hasEverstone = pastura.some(b => b.nature === targetNature);
  const dittoBreeder = pastura.find(b => b.speciesId === 'ditto');
  const hasDitto = !!dittoBreeder;

  // Find Parent A from Pasture (if available)
  const pastureBreederA = pastura[0];

  // Biologically Enforce Parent B Gender (Must be opposite gender of Parent A or Ditto!)
  let pastureBreederB: BreederInventoryItem | undefined = undefined;
  if (pastureBreederA) {
    if (pastureBreederA.gender === 'genderless') {
      pastureBreederB = pastura.find(b => b.id !== pastureBreederA.id);
    } else {
      // Find opposite gender in pastura, or Ditto
      pastureBreederB = pastura.find(b => b.id !== pastureBreederA.id && (b.gender !== pastureBreederA.gender || b.gender === 'genderless'));
    }
  }

  let bridgeSpeciesData: PokemonEggData | null = null;
  let isDirectlyCompatible = false;

  if (pastureBreederA) {
    const pASpecies = POKEMON_EGG_DATASET.find(p => p.pokemonId === pastureBreederA.speciesId) || targetData;
    isDirectlyCompatible = pASpecies.eggGroups.some(eg => targetData.eggGroups.includes(eg));
    if (!isDirectlyCompatible) {
      bridgeSpeciesData = findBridgeSpecies(pASpecies.eggGroups, targetData.eggGroups) || POKEMON_EGG_DATASET.find(p => p.pokemonId === 'shuckle') || null;
    }
  }

  // 1. Phase 1: Merge Pasture Breeders
  const ivKey1 = requiredIvKeys[0] || 'hp';
  const ivKey2 = requiredIvKeys[1] || 'speed';
  const item1 = POWER_ITEMS_MAP.find(p => p.ivKey === ivKey1);
  const item2 = POWER_ITEMS_MAP.find(p => p.ivKey === ivKey2);

  const pASpeciesData = pastureBreederA ? POKEMON_EGG_DATASET.find(p => p.pokemonId === pastureBreederA.speciesId) : targetData;
  const pBSpeciesData = pastureBreederB ? POKEMON_EGG_DATASET.find(p => p.pokemonId === pastureBreederB.speciesId) : (hasDitto ? null : targetData);

  const pASprite = pASpeciesData ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pASpeciesData.dexNumber}.png` : targetSprite;
  const pBSprite = pBSpeciesData ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pBSpeciesData.dexNumber}.png` : (hasDitto ? dittoSprite : targetSprite);

  const parentAGender = pastureBreederA ? pastureBreederA.gender : 'male';
  const parentBGender = pastureBreederB ? pastureBreederB.gender : (parentAGender === 'male' ? 'female' : 'male');

  const parentAName = pastureBreederA
    ? `${pastureBreederA.speciesName} (Pastura)`
    : `${targetData.pokemonName} Macho (♂)`;

  const parentBName = pastureBreederB
    ? `${pastureBreederB.speciesName} (Pastura)`
    : (hasDitto ? 'Ditto (Pastura)' : `${targetData.pokemonName} ${parentAGender === 'male' ? 'Hembra (♀)' : 'Macho (♂)'}`);

  // Required gender for offspring in Step 1
  const requiredOffspringGenderInStep1 = bridgeSpeciesData ? 'male' : (genderInfo.femaleRate <= 0.15 ? 'female' : 'male');

  steps.push({
    stepNumber: 1,
    title: `Fase 1: Cruce Biológico Garantizado (2x31 IVs)`,
    parentA: {
      name: parentAName,
      gender: parentAGender,
      equippedItem: item1 ? item1.name : 'Pesa Recia (Power Weight)',
      ivSummary: `31 en ${item1?.statName || 'HP'}`,
      isPreOwned: !!pastureBreederA,
      spriteUrl: pASprite
    },
    parentB: {
      name: parentBName,
      gender: parentBGender,
      equippedItem: item2 ? item2.name : 'Franja Recia (Power Anklet)',
      ivSummary: `31 en ${item2?.statName || 'Velocidad'}`,
      isPreOwned: !!pastureBreederB || hasDitto,
      spriteUrl: pBSprite
    },
    offspringTarget: {
      name: pastureBreederA ? `${pASpeciesData?.pokemonName || targetData.pokemonName} (Cría 2x31)` : `${targetData.pokemonName} (Cría 2x31)`,
      genderRequired: requiredOffspringGenderInStep1,
      genderRequiredLabel: requiredOffspringGenderInStep1 === 'female'
        ? '♀ Hembra Requerida (para transmitir la especie al criar)'
        : '♂ Macho Requerido (para usar como Padre en la siguiente fase)',
      expectedIvsSummary: `2x31 IVs Garantizados 100% (${item1?.statName || 'HP'} + ${item2?.statName || 'Velocidad'})`,
      spriteUrl: pASprite
    },
    strategyNotes: pastureBreederA
      ? `Combina los criadores compatibles de tu Pastura (${pastureBreederA.speciesName} ${parentAGender === 'male' ? '♂' : '♀'} + ${pastureBreederB ? pastureBreederB.speciesName : 'Pareja Compatible'}) para consolidar los primeros IVs de 31.`
      : `Equipa a cada padre con su Objeto Recio para garantizar al 100% la herencia de ambos IVs sin azar.`,
    hatchStepsEstimate: 5120,
    flameBodyStepsEstimate: 2560
  });

  // 2. Phase 1.5: Inter-Egg Group Bridge Step if Pasture Species cannot breed directly with Target
  let stepOffset = 1;

  if (bridgeSpeciesData && !isDirectlyCompatible) {
    stepOffset = 2;
    const bridgeSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${bridgeSpeciesData.dexNumber}.png`;

    steps.push({
      stepNumber: 2,
      title: `Fase 2: Cruce de Transferencia con Pokémon Puente 🌉 (${bridgeSpeciesData.pokemonName})`,
      parentA: {
        name: `${pASpeciesData?.pokemonName || 'Criador Pastura'} Macho (♂) (2x31)`,
        gender: 'male',
        equippedItem: item1 ? item1.name : 'Pesa Recia',
        ivSummary: `2x31 IVs (${pASpeciesData?.eggGroups.join(', ')})`,
        isPreOwned: false,
        spriteUrl: pASprite
      },
      parentB: {
        name: `💡 ${bridgeSpeciesData.pokemonName} Hembra (♀) (Pokémon Puente)`,
        gender: 'female',
        equippedItem: item2 ? item2.name : 'Franja Recia',
        ivSummary: `Puente Dual (${bridgeSpeciesData.eggGroups.join(', ')})`,
        isPreOwned: false,
        spriteUrl: bridgeSprite
      },
      offspringTarget: {
        name: `${bridgeSpeciesData.pokemonName} Macho (Cría 2x31)`,
        genderRequired: 'male',
        genderRequiredLabel: '♂ Macho Requerido (para transferir los IVs de 31 al grupo objetivo)',
        expectedIvsSummary: `2x31 IVs + Grupo Huevo ${targetData.eggGroups.join(', ')}`,
        spriteUrl: bridgeSprite
      },
      strategyNotes: `🌉 ¡Paso Puente Crucial! Se cruza ${pASpeciesData?.pokemonName} Macho con ${bridgeSpeciesData.pokemonName} Hembra para obtener un Macho de ${bridgeSpeciesData.pokemonName} que herede el grupo ${targetData.eggGroups.join(', ')}.`,
      hatchStepsEstimate: 5120,
      flameBodyStepsEstimate: 2560
    });
  }

  // 3. Phase 2/3: Nature Lock with Everstone + 3rd IV (3x31 IVs)
  if (ivCount >= 3) {
    const ivKey3 = requiredIvKeys[2] || 'attack';
    const item3 = POWER_ITEMS_MAP.find(p => p.ivKey === ivKey3);

    steps.push({
      stepNumber: 1 + stepOffset,
      title: `Fase ${1 + stepOffset}: Herencia de Naturaleza ${targetNature} con Piedra Eterna (3x31 IVs)`,
      parentA: {
        name: bridgeSpeciesData && !isDirectlyCompatible
          ? `${bridgeSpeciesData.pokemonName} Macho (♂) (2x31 Grupo ${targetData.eggGroups[0]})`
          : `${targetData.pokemonName} Macho (♂) (2x31)`,
        gender: 'male',
        equippedItem: item1 ? item1.name : 'Pesa Recia',
        ivSummary: `2x31 IVs`,
        isPreOwned: false,
        spriteUrl: bridgeSpeciesData && !isDirectlyCompatible
          ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${bridgeSpeciesData.dexNumber}.png`
          : targetSprite
      },
      parentB: {
        name: `${targetData.pokemonName} Hembra (♀) con Naturaleza ${targetNature}`,
        gender: 'female',
        equippedItem: `Piedra Eterna (Everstone)`,
        ivSummary: `31 en ${item3?.statName || 'Ataque'} + Naturaleza ${targetNature}`,
        isPreOwned: hasEverstone,
        spriteUrl: targetSprite
      },
      offspringTarget: {
        name: `${targetData.pokemonName} (Cría 3x31)`,
        genderRequired: 'either',
        genderRequiredLabel: '♂ / ♀ Macho o Hembra Indiferente',
        expectedIvsSummary: `3x31 IVs + Naturaleza ${targetNature} Fijada 100%`,
        spriteUrl: targetSprite
      },
      strategyNotes: `La Piedra Eterna garantiza la transmisión de la Naturaleza ${targetNature} al 100% mientras el Objeto Recio fija el 3er IV 31.`,
      hatchStepsEstimate: 5120,
      flameBodyStepsEstimate: 2560
    });
  }

  // 4. Final Merge Tree (With or Without Destiny Knot)
  if (ivCount >= 4) {
    const ivKey3 = requiredIvKeys[2] || 'attack';
    const item3 = POWER_ITEMS_MAP.find(p => p.ivKey === ivKey3);
    const ivKey4 = requiredIvKeys[3] || 'defense';
    const item4 = POWER_ITEMS_MAP.find(p => p.ivKey === ivKey4);

    if (useDestinyKnot) {
      steps.push({
        stepNumber: 2 + stepOffset,
        title: `Fase ${2 + stepOffset}: Combinación Lazo Destino de Alta Densidad (${ivCount}x31 IVs)`,
        parentA: {
          name: `${targetData.pokemonName} Macho (♂) (3x31/4x31)`,
          gender: 'male',
          equippedItem: 'Lazo Destino (Destiny Knot)',
          ivSummary: `3x31/4x31 IVs Complementarios`,
          isPreOwned: false,
          spriteUrl: targetSprite
        },
        parentB: {
          name: `${targetData.pokemonName} Hembra (♀) (3x31/4x31)`,
          gender: 'female',
          equippedItem: `Piedra Eterna (Everstone)`,
          ivSummary: `3x31/4x31 IVs + Naturaleza ${targetNature}`,
          isPreOwned: false,
          spriteUrl: targetSprite
        },
        offspringTarget: {
          name: `🏆 ${targetData.pokemonName} FINAL COMPETITIVO`,
          genderRequired: 'either',
          genderRequiredLabel: '🏆 OBJETIVO FINAL ALCANZADO (Macho o Hembra)',
          expectedIvsSummary: `${ivCount}x31 IVs Perfectos + Naturaleza ${targetNature} + Habilidad ${targetAbility}`,
          spriteUrl: targetSprite
        },
        strategyNotes: `Estrategia Lazo Destino activada: Se equipa entre padres 3x31/4x31 para transmitir 5 IVs combinados.`,
        hatchStepsEstimate: 5120,
        flameBodyStepsEstimate: 2560
      });
    } else {
      steps.push({
        stepNumber: 2 + stepOffset,
        title: `Fase ${2 + stepOffset}: Cruce Determinista 100% Objetos Recios (4x31 IVs)`,
        parentA: {
          name: `${targetData.pokemonName} Macho (♂) (3x31)`,
          gender: 'male',
          equippedItem: item3 ? item3.name : 'Brazal Recio',
          ivSummary: `3x31 IVs`,
          isPreOwned: false,
          spriteUrl: targetSprite
        },
        parentB: {
          name: `${targetData.pokemonName} Hembra (♀) (3x31)`,
          gender: 'female',
          equippedItem: item4 ? item4.name : 'Cinto Recio',
          ivSummary: `3x31 IVs + Naturaleza ${targetNature}`,
          isPreOwned: false,
          spriteUrl: targetSprite
        },
        offspringTarget: {
          name: `${targetData.pokemonName} (Cría 4x31)`,
          genderRequired: 'male',
          genderRequiredLabel: '♂ Macho Requerido (para cruce final)',
          expectedIvsSummary: `4x31 IVs Garantizados 100% Fijos`,
          spriteUrl: targetSprite
        },
        strategyNotes: `Ruta 100% Sin Azar: Se evitan Lazo Destino y herencias aleatorias equipando Objetos Recios en cada generación.`,
        hatchStepsEstimate: 5120,
        flameBodyStepsEstimate: 2560
      });

      if (ivCount >= 5) {
        steps.push({
          stepNumber: 3 + stepOffset,
          title: `Fase ${3 + stepOffset}: Cruce Final Determinista 100% (${ivCount}x31 Competitivo)`,
          parentA: {
            name: `${targetData.pokemonName} Macho (♂) (4x31)`,
            gender: 'male',
            equippedItem: 'Pesa Recia (Power Weight)',
            ivSummary: `4x31 IVs`,
            isPreOwned: false,
            spriteUrl: targetSprite
          },
          parentB: {
            name: `${targetData.pokemonName} Hembra (♀) (4x31)`,
            gender: 'female',
            equippedItem: `Piedra Eterna (Everstone)`,
            ivSummary: `4x31 IVs + Naturaleza ${targetNature}`,
            isPreOwned: false,
            spriteUrl: targetSprite
          },
          offspringTarget: {
            name: `🏆 ${targetData.pokemonName} FINAL COMPETITIVO`,
            genderRequired: 'either',
            genderRequiredLabel: '🏆 OBJETIVO FINAL ALCANZADO (Macho o Hembra)',
            expectedIvsSummary: `${ivCount}x31 IVs Perfectos + Naturaleza ${targetNature} + Habilidad ${targetAbility}`,
            spriteUrl: targetSprite
          },
          strategyNotes: `¡Fase Final Determinista! Herencia garantizada con Objetos Recios y Piedra Eterna con 0% de aleatoriedad.`,
          hatchStepsEstimate: 5120,
          flameBodyStepsEstimate: 2560
        });
      }
    }
  }

  // 5. Build Shopping List strictly from equipped items in steps
  const shoppingList: ShoppingListItem[] = [];
  const equippedItemNames = new Set<string>();

  steps.forEach(st => {
    equippedItemNames.add(st.parentA.equippedItem);
    equippedItemNames.add(st.parentB.equippedItem);
  });

  if (Array.from(equippedItemNames).some(name => name.includes('Lazo Destino') || name.includes('Destiny Knot'))) {
    const hasDestinyKnotInPastura = pastura.some(b => (b as any).equippedItem === 'Lazo Destino' || (b as any).hasDestinyKnot);
    shoppingList.push({
      id: 'lazo_destino',
      name: 'Lazo Destino (Destiny Knot)',
      category: 'destiny_knot',
      icon: '🎗️',
      quantityNeeded: 1,
      isAcquired: hasDestinyKnotInPastura,
      notes: 'Requerido en la Fase Final para heredar 5 IVs combinados entre padres 3x31/4x31.'
    });
  }

  if (Array.from(equippedItemNames).some(name => name.includes('Piedra Eterna') || name.includes('Everstone'))) {
    shoppingList.push({
      id: 'piedra_eterna',
      name: `Piedra Eterna (Everstone) [Naturaleza ${targetNature}]`,
      category: 'everstone',
      icon: '🪨',
      quantityNeeded: 1,
      isAcquired: hasEverstone,
      notes: `Garantiza 100% la Herencia de la Naturaleza ${targetNature}.`
    });
  }

  POWER_ITEMS_MAP.forEach(item => {
    if (Array.from(equippedItemNames).some(name => name.includes(item.name) || name.includes(item.statName))) {
      shoppingList.push({
        id: `power_${item.ivKey}`,
        name: item.name,
        category: 'power_item',
        icon: item.icon,
        quantityNeeded: 1,
        isAcquired: false,
        notes: `Garantiza 100% la transmisión del IV 31 en ${item.statName}.`
      });
    }
  });

  if (bridgeSpeciesData && !isDirectlyCompatible) {
    shoppingList.push({
      id: `bridge_${bridgeSpeciesData.pokemonId}`,
      name: `Pokémon Puente: ${bridgeSpeciesData.pokemonName}`,
      category: 'breeder',
      icon: '🌉',
      quantityNeeded: 1,
      isAcquired: pastura.some(b => b.speciesId === bridgeSpeciesData?.pokemonId),
      notes: `Especie puente dual (${bridgeSpeciesData.eggGroups.join(', ')}) requerida para conectar el grupo ${pASpeciesData?.eggGroups.join(', ')} con ${targetData.eggGroups.join(', ')}.`
    });
  }

  shoppingList.push({
    id: 'flame_body',
    name: 'Pokémon con Habilidad Cuerpo Llama (Flame Body)',
    category: 'flame_body',
    icon: '🔥',
    quantityNeeded: 1,
    isAcquired: pastura.some(b => b.ability?.toLowerCase().includes('cuerpo llama') || b.ability?.toLowerCase().includes('flame body')),
    notes: 'Reduce los pasos de eclosión en Minecraft un 50% (Talonflame, Coalossal, Magcargo).'
  });

  return {
    targetPokemonName: targetData.pokemonName,
    targetNature,
    targetAbility,
    targetIvCount: ivCount,
    strategyUsed: useDestinyKnot ? 'destiny_knot' : 'pure_power_items',
    shoppingList,
    steps,
    totalEstimatedEggs: useDestinyKnot ? (ivCount >= 5 ? 24 : 12) : (ivCount >= 5 ? 18 : 8),
    genderAlertSummary: genderInfo.femaleRate <= 0.15 ? `⚠️ Atención: ${targetData.pokemonName} tiene un ratio de género de 87.5% Macho / 12.5% Hembra. Las fases que requieran Hembras tomarán más intentos.` : undefined
  };
}
