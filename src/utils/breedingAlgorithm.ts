import { POKEMON_EGG_DATASET, PokemonEggData } from '../data/cobblemonEggGroups';

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
  const hasDitto = pastura.some(b => b.speciesId === 'ditto');

  // Check if pastura contains compatible breeders from the same Egg Group (e.g. Spinda in Field group)
  const compatiblePasturaBreeders = pastura.filter(b => {
    const speciesInfo = POKEMON_EGG_DATASET.find(p => p.pokemonId === b.speciesId);
    if (!speciesInfo) return false;
    return speciesInfo.eggGroups.some(eg => targetData.eggGroups.includes(eg));
  });

  const parentABreeder = compatiblePasturaBreeders[0] || pastura[0];
  const parentBBreeder = compatiblePasturaBreeders[1] || pastura[1];

  const parentASpeciesData = parentABreeder ? POKEMON_EGG_DATASET.find(p => p.pokemonId === parentABreeder.speciesId) : targetData;
  const parentBSpeciesData = parentBBreeder ? POKEMON_EGG_DATASET.find(p => p.pokemonId === parentBBreeder.speciesId) : targetData;

  const parentASprite = parentASpeciesData ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${parentASpeciesData.dexNumber}.png` : targetSprite;
  const parentBSprite = parentBSpeciesData ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${parentBSpeciesData.dexNumber}.png` : (hasDitto ? dittoSprite : targetSprite);

  // 1. Phase 1: Initial 2x31 Merge using Pasture Breeders if compatible
  const ivKey1 = requiredIvKeys[0] || 'hp';
  const ivKey2 = requiredIvKeys[1] || 'speed';
  const item1 = POWER_ITEMS_MAP.find(p => p.ivKey === ivKey1);
  const item2 = POWER_ITEMS_MAP.find(p => p.ivKey === ivKey2);

  const parentAName = parentABreeder
    ? `🌉 ${parentABreeder.speciesName} (Pastura - Grupo Huevo Compatible)`
    : `${targetData.pokemonName} Macho`;

  const parentBName = parentBBreeder
    ? `🌉 ${parentBBreeder.speciesName} (Pastura - Grupo Huevo Compatible)`
    : (hasDitto ? 'Ditto (Pastura)' : `${targetData.pokemonName} Hembra`);

  steps.push({
    stepNumber: 1,
    title: `Fase 1: Cruce de Criadores Iniciales de Pastura (2x31 IVs)`,
    parentA: {
      name: parentAName,
      gender: parentABreeder ? parentABreeder.gender : 'male',
      equippedItem: item1 ? item1.name : 'Pesa Recia (Power Weight)',
      ivSummary: `31 en ${item1?.statName || 'HP'}`,
      isPreOwned: !!parentABreeder,
      spriteUrl: parentASprite
    },
    parentB: {
      name: parentBName,
      gender: parentBBreeder ? parentBBreeder.gender : (hasDitto ? 'genderless' : 'female'),
      equippedItem: item2 ? item2.name : 'Franja Recia (Power Anklet)',
      ivSummary: `31 en ${item2?.statName || 'Velocidad'}`,
      isPreOwned: !!parentBBreeder || hasDitto,
      spriteUrl: parentBSprite
    },
    offspringTarget: {
      name: parentABreeder && parentABreeder.speciesId !== targetSpeciesId
        ? `${targetData.pokemonName} (Hijo Puente 2x31)`
        : `${targetData.pokemonName} (Cría 2x31)`,
      genderRequired: genderInfo.femaleRate <= 0.15 ? 'female' : 'either',
      expectedIvsSummary: `2x31 IVs Garantizados 100% (${item1?.statName || 'HP'} + ${item2?.statName || 'Velocidad'})`,
      genderCostAlert: genderInfo.femaleRate <= 0.15 ? `⚠️ Requiere Cría Hembra (Tasa 12.5%): Se estiman ~8 huevos para obtener la Hembra.` : undefined,
      spriteUrl: targetSprite
    },
    strategyNotes: parentABreeder
      ? `Aprovecha los Pokémon de tu Pastura (${parentABreeder.speciesName}) del mismo grupo huevo para transferir IVs de 31 directamente a la especie ${targetData.pokemonName}.`
      : `Equipa a cada padre con su Objeto Recio para garantizar al 100% la herencia de ambos IVs sin azar.`,
    hatchStepsEstimate: 5120,
    flameBodyStepsEstimate: 2560
  });

  // 2. Phase 2: Nature Lock with Everstone + 3rd IV (3x31 IVs)
  if (ivCount >= 3) {
    const ivKey3 = requiredIvKeys[2] || 'attack';
    const item3 = POWER_ITEMS_MAP.find(p => p.ivKey === ivKey3);

    steps.push({
      stepNumber: 2,
      title: `Fase 2: Herencia de Naturaleza ${targetNature} con Piedra Eterna (3x31 IVs)`,
      parentA: {
        name: `${targetData.pokemonName} (Cría 2x31)`,
        gender: 'female',
        equippedItem: item1 ? item1.name : 'Pesa Recia',
        ivSummary: `2x31 IVs`,
        isPreOwned: false,
        spriteUrl: targetSprite
      },
      parentB: {
        name: `Criador Compatible con Naturaleza ${targetNature}`,
        gender: 'male',
        equippedItem: `Piedra Eterna (Everstone)`,
        ivSummary: `31 en ${item3?.statName || 'Ataque'} + Naturaleza ${targetNature}`,
        isPreOwned: hasEverstone,
        spriteUrl: targetSprite
      },
      offspringTarget: {
        name: `${targetData.pokemonName} (Cría 3x31)`,
        genderRequired: 'either',
        expectedIvsSummary: `3x31 IVs + Naturaleza ${targetNature} Fijada 100%`,
        spriteUrl: targetSprite
      },
      strategyNotes: `La Piedra Eterna garantiza la transmisión de la Naturaleza ${targetNature} al 100% mientras el Objeto Recio fija el 3er IV 31.`,
      hatchStepsEstimate: 5120,
      flameBodyStepsEstimate: 2560
    });
  }

  // 3. Phase 3: Final Merge Tree (With or Without Destiny Knot)
  if (ivCount >= 4) {
    const ivKey3 = requiredIvKeys[2] || 'attack';
    const item3 = POWER_ITEMS_MAP.find(p => p.ivKey === ivKey3);
    const ivKey4 = requiredIvKeys[3] || 'defense';
    const item4 = POWER_ITEMS_MAP.find(p => p.ivKey === ivKey4);

    if (useDestinyKnot) {
      // Destiny Knot Route (High Density Merge)
      steps.push({
        stepNumber: 3,
        title: `Fase 3: Combinación Lazo Destino de Alta Densidad (${ivCount}x31 IVs)`,
        parentA: {
          name: `${targetData.pokemonName} Macho (3x31/4x31)`,
          gender: 'male',
          equippedItem: 'Lazo Destino (Destiny Knot)',
          ivSummary: `3x31/4x31 IVs Complementarios`,
          isPreOwned: false,
          spriteUrl: targetSprite
        },
        parentB: {
          name: `${targetData.pokemonName} Hembra (3x31/4x31)`,
          gender: 'female',
          equippedItem: `Piedra Eterna (Everstone)`,
          ivSummary: `3x31/4x31 IVs + Naturaleza ${targetNature}`,
          isPreOwned: false,
          spriteUrl: targetSprite
        },
        offspringTarget: {
          name: `🏆 ${targetData.pokemonName} FINAL COMPETITIVO`,
          genderRequired: 'either',
          expectedIvsSummary: `${ivCount}x31 IVs Perfectos + Naturaleza ${targetNature} + Habilidad ${targetAbility}`,
          spriteUrl: targetSprite
        },
        strategyNotes: `Estrategia Lazo Destino activada: Se equipa entre padres 3x31/4x31 para transmitir 5 IVs combinados.`,
        hatchStepsEstimate: 5120,
        flameBodyStepsEstimate: 2560
      });
    } else {
      // PURE POWER ITEMS ROUTE (100% Deterministic, ZERO RNG!)
      steps.push({
        stepNumber: 3,
        title: `Fase 3: Cruce Determinista 100% Objetos Recios (4x31 IVs)`,
        parentA: {
          name: `${targetData.pokemonName} Macho (3x31)`,
          gender: 'male',
          equippedItem: item3 ? item3.name : 'Brazal Recio',
          ivSummary: `3x31 IVs`,
          isPreOwned: false,
          spriteUrl: targetSprite
        },
        parentB: {
          name: `${targetData.pokemonName} Hembra (3x31)`,
          gender: 'female',
          equippedItem: item4 ? item4.name : 'Cinto Recio',
          ivSummary: `3x31 IVs + Naturaleza ${targetNature}`,
          isPreOwned: false,
          spriteUrl: targetSprite
        },
        offspringTarget: {
          name: `${targetData.pokemonName} (Cría 4x31)`,
          genderRequired: 'either',
          expectedIvsSummary: `4x31 IVs Garantizados 100% Fijos`,
          spriteUrl: targetSprite
        },
        strategyNotes: `Ruta 100% Sin Azar: Se evitan Lazo Destino y herencias aleatorias equipando Objetos Recios en cada generación.`,
        hatchStepsEstimate: 5120,
        flameBodyStepsEstimate: 2560
      });

      if (ivCount >= 5) {
        steps.push({
          stepNumber: 4,
          title: `Fase 4: Cruce Final Determinista 100% (5x31/6x31 Competitivo)`,
          parentA: {
            name: `${targetData.pokemonName} Macho (4x31)`,
            gender: 'male',
            equippedItem: 'Pesa Recia (Power Weight)',
            ivSummary: `4x31 IVs`,
            isPreOwned: false,
            spriteUrl: targetSprite
          },
          parentB: {
            name: `${targetData.pokemonName} Hembra (4x31)`,
            gender: 'female',
            equippedItem: `Piedra Eterna (Everstone)`,
            ivSummary: `4x31 IVs + Naturaleza ${targetNature}`,
            isPreOwned: false,
            spriteUrl: targetSprite
          },
          offspringTarget: {
            name: `🏆 ${targetData.pokemonName} FINAL COMPETITIVO`,
            genderRequired: 'either',
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

  // 4. Build Shopping List strictly from equipped items in steps
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

  shoppingList.push({
    id: 'flame_body',
    name: 'Pokémon con Habilidad Cuerpo Llama (Flame Body)',
    category: 'flame_body',
    icon: '🔥',
    quantityNeeded: 1,
    isAcquired: pastura.some(b => b.ability?.toLowerCase().includes('cuerpo llama') || b.ability?.toLowerCase().includes('flame body')),
    notes: 'Reduce los pasos de eclosión en Minecraft un 50% (Talonflame, Coalossal, Magcargo).'
  });

  if (!compatiblePasturaBreeders.some(b => b.speciesId === targetSpeciesId) && pastura.length === 0) {
    shoppingList.push({
      id: `breeder_${targetSpeciesId}`,
      name: `Criador Base: ${targetData.pokemonName}`,
      category: 'breeder',
      icon: '🥚',
      quantityNeeded: 1,
      isAcquired: false,
      notes: `Especie objetivo ${targetData.pokemonName}.`
    });
  }

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
