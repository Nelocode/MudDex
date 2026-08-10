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
  chainName?: string;
  title: string;
  parentA: {
    name: string;
    gender: 'male' | 'female' | 'genderless';
    equippedItem: string;
    ivSummary: string;
    isPreOwned: boolean;
    originLabel: string;
    spriteUrl: string;
  };
  parentB: {
    name: string;
    gender: 'male' | 'female' | 'genderless';
    equippedItem: string;
    ivSummary: string;
    isPreOwned: boolean;
    originLabel: string;
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

  const pastureNatureBreeder = pastura.find(b => b.nature === targetNature);
  const hasEverstone = pastura.some(b => b.nature === targetNature);
  const dittoBreeder = pastura.find(b => b.speciesId === 'ditto');
  const hasDitto = !!dittoBreeder;

  const pastureBreederA = pastura[0];
  let pastureBreederB: BreederInventoryItem | undefined = undefined;
  if (pastureBreederA) {
    if (pastureBreederA.gender === 'genderless') {
      pastureBreederB = pastura.find(b => b.id !== pastureBreederA.id);
    } else {
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

  const ivKey1 = requiredIvKeys[0] || 'hp';
  const ivKey2 = requiredIvKeys[1] || 'attack';
  const ivKey3 = requiredIvKeys[2] || 'defense';
  const ivKey4 = requiredIvKeys[3] || 'specialDefense';
  const ivKey5 = requiredIvKeys[4] || 'speed';

  const item1 = POWER_ITEMS_MAP.find(p => p.ivKey === ivKey1);
  const item2 = POWER_ITEMS_MAP.find(p => p.ivKey === ivKey2);
  const item3 = POWER_ITEMS_MAP.find(p => p.ivKey === ivKey3);
  const item4 = POWER_ITEMS_MAP.find(p => p.ivKey === ivKey4);
  const item5 = POWER_ITEMS_MAP.find(p => p.ivKey === ivKey5);

  const pASpeciesData = pastureBreederA ? POKEMON_EGG_DATASET.find(p => p.pokemonId === pastureBreederA.speciesId) : targetData;
  const pBSpeciesData = pastureBreederB ? POKEMON_EGG_DATASET.find(p => p.pokemonId === pastureBreederB.speciesId) : (hasDitto ? null : targetData);

  const pASprite = pASpeciesData ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pASpeciesData.dexNumber}.png` : targetSprite;
  const pBSprite = pBSpeciesData ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pBSpeciesData.dexNumber}.png` : (hasDitto ? dittoSprite : targetSprite);

  // --- CADENA 1: LÍNEA PATERNA (MACHO ♂) ---
  steps.push({
    stepNumber: 1,
    chainName: '🌱 CADENA 1: Línea Paterna Macho (♂)',
    title: `Paso 1A: Construcción de Padre Macho 2x31 (${item1?.statName || 'HP'} + ${item2?.statName || 'Ataque'})`,
    parentA: {
      name: pastureBreederA ? `${pastureBreederA.speciesName} (Pastura)` : `${targetData.pokemonName} Macho (♂)`,
      gender: pastureBreederA ? pastureBreederA.gender : 'male',
      equippedItem: item1 ? item1.name : 'Pesa Recia',
      ivSummary: `31 en ${item1?.statName || 'HP'}`,
      isPreOwned: !!pastureBreederA,
      originLabel: pastureBreederA ? '🌾 Registrado en tu Pastura' : '🛒 Capturar / Conseguir en Salvaje',
      spriteUrl: pASprite
    },
    parentB: {
      name: pastureBreederB ? `${pastureBreederB.speciesName} (Pastura)` : (hasDitto ? 'Ditto (Pastura)' : `${targetData.pokemonName} Hembra (♀)`),
      gender: pastureBreederB ? pastureBreederB.gender : (hasDitto ? 'genderless' : 'female'),
      equippedItem: item2 ? item2.name : 'Brazal Recio',
      ivSummary: `31 en ${item2?.statName || 'Ataque'}`,
      isPreOwned: !!pastureBreederB || hasDitto,
      originLabel: (pastureBreederB || hasDitto) ? '🌾 Registrado en tu Pastura' : '🛒 Capturar / Conseguir en Salvaje',
      spriteUrl: pBSprite
    },
    offspringTarget: {
      name: `${targetData.pokemonName} Macho (Cría 2x31 Cadena 1)`,
      genderRequired: 'male',
      genderRequiredLabel: '♂ Macho Requerido (Resultado de Cadena 1 para cruzar en la Cadena Final)',
      expectedIvsSummary: `2x31 IVs Garantizados (${item1?.statName || 'HP'} + ${item2?.statName || 'Ataque'})`,
      spriteUrl: targetSprite
    },
    strategyNotes: `Construcción de la Cadena 1: Se combinan dos criadores para asegurar los primeros 2 IVs de 31 en un progenitor Macho.`,
    hatchStepsEstimate: 5120,
    flameBodyStepsEstimate: 2560
  });

  let stepOffset = 1;

  // Optional Inter-Egg Group Bridge Step if needed for Pasture species
  if (bridgeSpeciesData && !isDirectlyCompatible) {
    stepOffset = 2;
    const bridgeSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${bridgeSpeciesData.dexNumber}.png`;

    steps.push({
      stepNumber: 2,
      chainName: '🌉 CADENA PUENTE: Transferencia de Grupos Huevo',
      title: `Paso Puente: Cruce de Transferencia con ${bridgeSpeciesData.pokemonName}`,
      parentA: {
        name: `${pASpeciesData?.pokemonName || 'Criador'} Macho (♂) (2x31)`,
        gender: 'male',
        equippedItem: item1 ? item1.name : 'Pesa Recia',
        ivSummary: `2x31 IVs (${pASpeciesData?.eggGroups.join(', ')})`,
        isPreOwned: false,
        originLabel: '🐣 Cría Obtenida en el Paso 1A',
        spriteUrl: pASprite
      },
      parentB: {
        name: `💡 ${bridgeSpeciesData.pokemonName} Hembra (♀) (Pokémon Puente)`,
        gender: 'female',
        equippedItem: item2 ? item2.name : 'Franja Recia',
        ivSummary: `Puente Dual (${bridgeSpeciesData.eggGroups.join(', ')})`,
        isPreOwned: false,
        originLabel: '🛒 Conseguir Especie Puente',
        spriteUrl: bridgeSprite
      },
      offspringTarget: {
        name: `${bridgeSpeciesData.pokemonName} Macho (Cría 2x31)`,
        genderRequired: 'male',
        genderRequiredLabel: '♂ Macho Requerido (Transferencia de IVs al grupo objetivo)',
        expectedIvsSummary: `2x31 IVs + Grupo Huevo ${targetData.eggGroups.join(', ')}`,
        spriteUrl: bridgeSprite
      },
      strategyNotes: `Paso Puente: Permite transferir los IVs de tu criador de Pastura al grupo huevo compatible de ${targetData.pokemonName}.`,
      hatchStepsEstimate: 5120,
      flameBodyStepsEstimate: 2560
    });
  }

  // --- CADENA 2: LÍNEA MATERNA (HEMBRA ♀ + NATURALEZA) ---
  const natureParentBName = pastureNatureBreeder
    ? `${pastureNatureBreeder.speciesName} Hembra (♀) (Pastura)`
    : `💡 Pareja Compatible (Hembra ♀ de Grupo ${targetData.eggGroups.join('/')}) con Naturaleza ${targetNature}`;

  const natureParentBOrigin = pastureNatureBreeder
    ? '🌾 Registrada en tu Pastura'
    : `💡 Cualquier Pokémon Hembra del Grupo ${targetData.eggGroups.join('/')} con Naturaleza ${targetNature}`;

  steps.push({
    stepNumber: 1 + stepOffset,
    chainName: '🌸 CADENA 2: Línea Materna Hembra (♀ + Naturaleza)',
    title: `Paso 2A: Construcción de Madre Hembra 2x31 con Naturaleza ${targetNature}`,
    parentA: {
      name: `${targetData.pokemonName} Macho (♂)`,
      gender: 'male',
      equippedItem: item3 ? item3.name : 'Cinto Recio',
      ivSummary: `31 en ${item3?.statName || 'Defensa'}`,
      isPreOwned: false,
      originLabel: '🛒 Capturar / Conseguir en Salvaje',
      spriteUrl: targetSprite
    },
    parentB: {
      name: natureParentBName,
      gender: 'female',
      equippedItem: `Piedra Eterna (Everstone)`,
      ivSummary: `Naturaleza ${targetNature} Fijada 100%`,
      isPreOwned: hasEverstone,
      originLabel: natureParentBOrigin,
      spriteUrl: targetSprite
    },
    offspringTarget: {
      name: `${targetData.pokemonName} Hembra (Cría 2x31 Cadena 2)`,
      genderRequired: 'female',
      genderRequiredLabel: `♀ Hembra Requerida (Resultado de Cadena 2 con Naturaleza ${targetNature})`,
      expectedIvsSummary: `2x31 IVs + Naturaleza ${targetNature} Fijada 100%`,
      spriteUrl: targetSprite
    },
    strategyNotes: `Construcción de la Cadena 2: La Piedra Eterna en la Madre transmite la Naturaleza ${targetNature} al 100% mientras el Objeto Recio fija el 3er IV de 31 en una cría Hembra.`,
    hatchStepsEstimate: 5120,
    flameBodyStepsEstimate: 2560
  });

  // --- CADENA FINAL: FUSIÓN DE CADENAS 1 Y 2 ---
  if (useDestinyKnot) {
    steps.push({
      stepNumber: 2 + stepOffset,
      chainName: '🏆 CADENA FINAL: Cruce y Fusión de Cadenas',
      title: `Fase Final: Combinación Lazo Destino de Cadenas 1 & 2 (${ivCount}x31 IVs)`,
      parentA: {
        name: bridgeSpeciesData && !isDirectlyCompatible
          ? `${bridgeSpeciesData.pokemonName} Macho (♂) (Cadena 1)`
          : `${targetData.pokemonName} Macho (♂) (Cadena 1)`,
        gender: 'male',
        equippedItem: 'Lazo Destino (Destiny Knot)',
        ivSummary: `2x31/3x31 IVs (HP + Ataque)`,
        isPreOwned: false,
        originLabel: `🐣 Cría Obtenida en la Cadena 1 (Macho ♂)`,
        spriteUrl: bridgeSpeciesData && !isDirectlyCompatible
          ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${bridgeSpeciesData.dexNumber}.png`
          : targetSprite
      },
      parentB: {
        name: `${targetData.pokemonName} Hembra (♀) (Cadena 2)`,
        gender: 'female',
        equippedItem: `Piedra Eterna (Everstone)`,
        ivSummary: `2x31/3x31 IVs + Naturaleza ${targetNature}`,
        isPreOwned: false,
        originLabel: `🐣 Cría Obtenida en la Cadena 2 (Hembra ♀)`,
        spriteUrl: targetSprite
      },
      offspringTarget: {
        name: `🏆 ${targetData.pokemonName} FINAL COMPETITIVO`,
        genderRequired: 'either',
        genderRequiredLabel: '🏆 OBJETIVO FINAL ALCANZADO (Macho o Hembra)',
        expectedIvsSummary: `${ivCount}x31 IVs Perfectos + Naturaleza ${targetNature} + Habilidad ${targetAbility}`,
        spriteUrl: targetSprite
      },
      strategyNotes: `🏆 Fusión de Cadenas: Se cruza el Macho obtenido en la Cadena 1 con la Hembra obtenida en la Cadena 2 utilizando Lazo Destino y Piedra Eterna para consolidar la cría final perfecta.`,
      hatchStepsEstimate: 5120,
      flameBodyStepsEstimate: 2560
    });
  } else {
    // Pure Power Items Branch
    steps.push({
      stepNumber: 2 + stepOffset,
      chainName: '🏆 CADENA FINAL: Cruce y Fusión 100% Determinista',
      title: `Paso Fusión: Cruce Determinista con Objetos Recios (4x31 IVs)`,
      parentA: {
        name: `${targetData.pokemonName} Macho (♂) (Cadena 1)`,
        gender: 'male',
        equippedItem: item3 ? item3.name : 'Cinto Recio',
        ivSummary: `2x31 IVs (Cadena 1)`,
        isPreOwned: false,
        originLabel: `🐣 Cría Obtenida en la Cadena 1 (Macho ♂)`,
        spriteUrl: targetSprite
      },
      parentB: {
        name: `${targetData.pokemonName} Hembra (♀) (Cadena 2)`,
        gender: 'female',
        equippedItem: item4 ? item4.name : 'Banda Recia',
        ivSummary: `2x31 IVs + Naturaleza ${targetNature}`,
        isPreOwned: false,
        originLabel: `🐣 Cría Obtenida en la Cadena 2 (Hembra ♀)`,
        spriteUrl: targetSprite
      },
      offspringTarget: {
        name: `${targetData.pokemonName} (Cría 4x31)`,
        genderRequired: 'male',
        genderRequiredLabel: '♂ Macho Requerido (para cruce final)',
        expectedIvsSummary: `4x31 IVs Garantizados 100% Fijos`,
        spriteUrl: targetSprite
      },
      strategyNotes: `Ruta 100% Sin Azar: Cruce directo entre las crías de la Cadena 1 y Cadena 2 con Objetos Recios.`,
      hatchStepsEstimate: 5120,
      flameBodyStepsEstimate: 2560
    });

    if (ivCount >= 5) {
      steps.push({
        stepNumber: 3 + stepOffset,
        chainName: '🏆 CADENA FINAL: Cruce Final Competitivo',
        title: `Cruce Final 100% Sin Azar (${ivCount}x31 Competitivo)`,
        parentA: {
          name: `${targetData.pokemonName} Macho (♂) (4x31)`,
          gender: 'male',
          equippedItem: item5 ? item5.name : 'Franja Recia',
          ivSummary: `4x31 IVs`,
          isPreOwned: false,
          originLabel: `🐣 Cría Resultante de la Cadena Final`,
          spriteUrl: targetSprite
        },
        parentB: {
          name: `${targetData.pokemonName} Hembra (♀) (4x31)`,
          gender: 'female',
          equippedItem: `Piedra Eterna (Everstone)`,
          ivSummary: `4x31 IVs + Naturaleza ${targetNature}`,
          isPreOwned: false,
          originLabel: `🐣 Cría Resultante de la Cadena 2`,
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

  // Build Shopping List strictly from equipped items
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
