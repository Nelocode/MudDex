import { POKEMON_EGG_DATASET, getEggGroupsForPokemon, EggGroup } from '../data/cobblemonEggGroups';

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
  hasHiddenAbility?: boolean;
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
  };
  parentB: {
    name: string;
    gender: 'male' | 'female' | 'genderless';
    equippedItem: string;
    ivSummary: string;
    isPreOwned: boolean;
  };
  offspringTarget: {
    name: string;
    genderRequired: 'male' | 'female' | 'either' | 'genderless';
    expectedIvsSummary: string;
    genderCostAlert?: string;
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
  shoppingList: ShoppingListItem[];
  steps: BreedingStepInstruction[];
  totalEstimatedEggs: number;
  genderAlertSummary?: string;
}

// Gender Ratio Data Lookup
export function getGenderRatio(speciesId: string): { maleRate: number; femaleRate: number; label: string } {
  const s = speciesId.toLowerCase();
  
  // 87.5% Male / 12.5% Female (Starters, Eevee, Snorlax, Lucario, Togepi, etc.)
  if (['eevee', 'snorlax', 'lucario', 'togepi', 'togetic', 'togekiss', 'bulbasaur', 'charmander', 'squirtle', 'chikorita', 'cyndaquil', 'totodile', 'treecko', 'torchic', 'mudkip', 'turtwig', 'chimchar', 'piplup', 'snivy', 'tepig', 'oshawoot', 'chespin', 'fennekin', 'froakie', 'rowlet', 'litten', 'popplio', 'grookey', 'scorbunny', 'sobble', 'sprigatito', 'fuecoco', 'quaxly'].includes(s)) {
    return { maleRate: 0.875, femaleRate: 0.125, label: '87.5% Macho / 12.5% Hembra (Alta dificultad de obtener Hembra)' };
  }

  // 100% Female
  if (['chansey', 'blissey', 'kangaskhan', 'miltank', 'flabebe', 'floette', 'florges', 'tinkatink', 'tinkatuff', 'tinkaton', 'bounsweet', 'steenee', 'tsareena', 'hatenna', 'hattrem', 'hatterene'].includes(s)) {
    return { maleRate: 0, femaleRate: 1.0, label: '100% Hembra (Solo cruza con Ditto o macho de grupo)' };
  }

  // 100% Male
  if (['tauros', 'hitmonlee', 'hitmonchan', 'hitmontop', 'gallade', 'sawk', 'throh', 'impidimp', 'morgrem', 'grimmsnarl'].includes(s)) {
    return { maleRate: 1.0, femaleRate: 0, label: '100% Macho (Requiere Ditto para conservar la especie)' };
  }

  // Genderless
  if (['ditto', 'magnemite', 'magneton', 'magnezone', 'voltorb', 'electrode', 'staryu', 'starmie', 'porygon', 'beldum', 'metang', 'metagross', 'bronzor', 'bronzong', 'rotom', 'falinks'].includes(s)) {
    return { maleRate: 0, femaleRate: 0, label: 'Sin Género (Solo puede criar obligatoriamente con Ditto)' };
  }

  // Standard 50/50
  return { maleRate: 0.5, femaleRate: 0.5, label: '50% Macho / 50% Hembra (Estándar)' };
}

// Power Item IV Mapping
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
  pastura: BreederInventoryItem[]
): GeneratedBreedingPlan {
  const targetData = POKEMON_EGG_DATASET.find(p => p.pokemonId === targetSpeciesId) || POKEMON_EGG_DATASET[0];
  const genderInfo = getGenderRatio(targetSpeciesId);
  
  const requiredIvKeys = (Object.keys(targetIvs) as (keyof typeof targetIvs)[]).filter(k => targetIvs[k]);
  const ivCount = requiredIvKeys.length;

  const shoppingList: ShoppingListItem[] = [];
  const steps: BreedingStepInstruction[] = [];

  // Check pre-owned items/breeders in Pastura
  const hasEverstone = pastura.some(b => b.nature === targetNature);
  const hasDitto = pastura.some(b => b.speciesId === 'ditto');
  const targetSpeciesBreeders = pastura.filter(b => b.speciesId === targetSpeciesId);

  // 1. Shopping List Building
  shoppingList.push({
    id: 'lazo_destino',
    name: 'Lazo Destino (Destiny Knot)',
    category: 'destiny_knot',
    icon: '🎗️',
    quantityNeeded: 1,
    isAcquired: true,
    notes: 'Transmite 5 IVs combinados de ambos padres.'
  });

  shoppingList.push({
    id: 'piedra_eterna',
    name: `Piedra Eterna (Everstone) [Naturaleza ${targetNature}]`,
    category: 'everstone',
    icon: '🪨',
    quantityNeeded: 1,
    isAcquired: hasEverstone,
    notes: `Garantiza 100% la Herencia de Naturaleza ${targetNature}.`
  });

  shoppingList.push({
    id: 'flame_body',
    name: 'Pokémon con Habilidad Cuerpo Llama (Flame Body)',
    category: 'flame_body',
    icon: '🔥',
    quantityNeeded: 1,
    isAcquired: pastura.some(b => b.ability?.toLowerCase().includes('cuerpo llama') || b.ability?.toLowerCase().includes('flame body')),
    notes: 'Reduce los pasos de eclosión en Minecraft en un 50% (Talonflame, Coalossal, Magcargo).'
  });

  requiredIvKeys.forEach(key => {
    const item = POWER_ITEMS_MAP.find(p => p.ivKey === key);
    if (item) {
      shoppingList.push({
        id: `power_${key}`,
        name: item.name,
        category: 'power_item',
        icon: item.icon,
        quantityNeeded: 1,
        isAcquired: false,
        notes: `Garantiza la transmisión del IV 31 en ${item.statName}.`
      });
    }
  });

  if (targetSpeciesBreeders.length === 0) {
    shoppingList.push({
      id: `breeder_${targetSpeciesId}`,
      name: `Criador Inicial: ${targetData.pokemonName}`,
      category: 'breeder',
      icon: '🥚',
      quantityNeeded: 1,
      isAcquired: false,
      notes: `Base de la especie ${targetData.pokemonName}.`
    });
  }

  // 2. Step-by-step Plan Tree Construction
  // Step 1: Fixed 2-IV merge using Power Items
  const ivKey1 = requiredIvKeys[0] || 'hp';
  const ivKey2 = requiredIvKeys[1] || 'speed';
  const item1 = POWER_ITEMS_MAP.find(p => p.ivKey === ivKey1);
  const item2 = POWER_ITEMS_MAP.find(p => p.ivKey === ivKey2);

  steps.push({
    stepNumber: 1,
    title: `Fase 1: Cruce de Garantía Inicial (2x31 IVs)`,
    parentA: {
      name: targetSpeciesBreeders[0] ? targetSpeciesBreeders[0].speciesName : `${targetData.pokemonName} Macho`,
      gender: 'male',
      equippedItem: item1 ? item1.name : 'Pesa Recia',
      ivSummary: `31 en ${item1?.statName || 'HP'}`,
      isPreOwned: targetSpeciesBreeders.length > 0
    },
    parentB: {
      name: hasDitto ? 'Ditto (Pastura)' : `${targetData.pokemonName} Hembra`,
      gender: 'female',
      equippedItem: item2 ? item2.name : 'Franja Recia',
      ivSummary: `31 en ${item2?.statName || 'Velocidad'}`,
      isPreOwned: hasDitto
    },
    offspringTarget: {
      name: `${targetData.pokemonName} (Hijo Fase 1)`,
      genderRequired: genderInfo.femaleRate <= 0.15 ? 'female' : 'either',
      expectedIvsSummary: `2x31 Garantizados (${item1?.statName || 'HP'} + ${item2?.statName || 'Velocidad'})`,
      genderCostAlert: genderInfo.femaleRate <= 0.15 ? `⚠️ Requiere Cría Hembra (Tasa 12.5%): Se estiman ~8 huevos para obtener la Hembra.` : undefined
    },
    strategyNotes: `Equipa a cada padre con su Objeto Recio correspondiente. Esto garantiza al 100% que la cría herede ambos IVs de 31 sin depender del azar.`,
    hatchStepsEstimate: 5120,
    flameBodyStepsEstimate: 2560
  });

  // Step 2: Accumulating 3x31 / 4x31
  if (ivCount >= 3) {
    const ivKey3 = requiredIvKeys[2] || 'attack';
    const item3 = POWER_ITEMS_MAP.find(p => p.ivKey === ivKey3);

    steps.push({
      stepNumber: 2,
      title: `Fase 2: Expansión a 3x31 IVs con Piedra Eterna`,
      parentA: {
        name: `${targetData.pokemonName} (Hijo Fase 1 - 2x31)`,
        gender: 'female',
        equippedItem: 'Lazo Destino (Destiny Knot)',
        ivSummary: `2x31 IVs`,
        isPreOwned: false
      },
      parentB: {
        name: `Criador Compatible con Naturaleza ${targetNature}`,
        gender: 'male',
        equippedItem: `Piedra Eterna (Everstone)`,
        ivSummary: `31 en ${item3?.statName || 'Atk'} + Naturaleza ${targetNature}`,
        isPreOwned: hasEverstone
      },
      offspringTarget: {
        name: `${targetData.pokemonName} (Hijo Fase 2)`,
        genderRequired: 'either',
        expectedIvsSummary: `3x31 IVs + Naturaleza ${targetNature} Fijada 100%`,
      },
      strategyNotes: `La Piedra Eterna asegura la Naturaleza ${targetNature} mientras el Lazo Destino transmite 5 IVs combinados.`,
      hatchStepsEstimate: 5120,
      flameBodyStepsEstimate: 2560
    });
  }

  // Step 3: Final 5x31 / 6x31 Merge
  if (ivCount >= 5) {
    steps.push({
      stepNumber: 3,
      title: `Fase 3: Cruce Final por el Objetivo ${targetIvs.specialAttack && targetIvs.attack ? '6x31 Perfect' : '5x31 Competitivo'}`,
      parentA: {
        name: `${targetData.pokemonName} Macho (3x31/4x31)`,
        gender: 'male',
        equippedItem: 'Lazo Destino (Destiny Knot)',
        ivSummary: `4x31 IVs Complementarios`,
        isPreOwned: false
      },
      parentB: {
        name: `${targetData.pokemonName} Hembra (3x31/4x31)`,
        gender: 'female',
        equippedItem: `Piedra Eterna (Everstone)`,
        ivSummary: `4x31 IVs + Naturaleza ${targetNature}`,
        isPreOwned: false
      },
      offspringTarget: {
        name: `🏆 ${targetData.pokemonName} FINAL COMPETITIVO`,
        genderRequired: 'either',
        expectedIvsSummary: `${ivCount}x31 IVs Perfectos + Naturaleza ${targetNature} + Habilidad ${targetAbility}`,
      },
      strategyNotes: `¡Fase Final! Ambos padres con 4x31 garantizarán una probabilidad del 16.6% por huevo de obtener la cría perfecta de ${ivCount}x31.`,
      hatchStepsEstimate: 5120,
      flameBodyStepsEstimate: 2560
    });
  }

  return {
    targetPokemonName: targetData.pokemonName,
    targetNature,
    targetAbility,
    targetIvCount: ivCount,
    shoppingList,
    steps,
    totalEstimatedEggs: ivCount >= 5 ? 24 : ivCount >= 4 ? 12 : 6,
    genderAlertSummary: genderInfo.femaleRate <= 0.15 ? `⚠️ Atención: ${targetData.pokemonName} tiene un ratio de género de 87.5% Macho / 12.5% Hembra. Las fases que requieran Hembras tomarán más intentos.` : undefined
  };
}
