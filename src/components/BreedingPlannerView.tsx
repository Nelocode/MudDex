import React, { useState, useMemo, useEffect } from 'react';
import { Layers, Dna, ShoppingBag, CheckCircle2, AlertTriangle, Plus, Trash2, Download, Upload, Flame, Sparkles, RefreshCw, ChevronRight, Shield, Award } from 'lucide-react';
import { POKEMON_EGG_DATASET } from '../data/cobblemonEggGroups';
import { getSmogonBuildsForPokemon, SmogonBuild } from '../data/smogonBuilds';
import { OFFICIAL_POKEMON_NATURES } from '../data/pokemonNatures';
import { getAbilitiesAndEggMovesForDex } from '../data/cobblemonSpeciesAbilitiesAndEggMoves';
import { PokemonSearchSelect } from './PokemonSearchSelect';
import {
  generateBreedingPlan,
  BreederInventoryItem,
  GeneratedBreedingPlan,
  getGenderRatio
} from '../utils/breedingAlgorithm';

import { AiBreedingAssistantModal } from './AiBreedingAssistantModal';

export const BreedingPlannerView: React.FC = () => {
  const [currentWizardStep, setCurrentWizardStep] = useState<number>(1);
  const [isAiModalOpen, setIsAiModalOpen] = useState<boolean>(false);

  // Step 1: Goal State
  const [selectedSpeciesId, setSelectedSpeciesId] = useState<string>('eevee');
  const [selectedBuildIndex, setSelectedBuildIndex] = useState<number>(0);

  const smogonBuilds = useMemo(() => getSmogonBuildsForPokemon(selectedSpeciesId), [selectedSpeciesId]);
  const activeBuild = smogonBuilds[selectedBuildIndex] || smogonBuilds[0];

  const targetData = useMemo(() => POKEMON_EGG_DATASET.find(p => p.pokemonId === selectedSpeciesId) || POKEMON_EGG_DATASET[0], [selectedSpeciesId]);
  const speciesData = useMemo(() => getAbilitiesAndEggMovesForDex(targetData.dexNumber), [targetData.dexNumber]);

  const effectiveRecommendedAbility = useMemo(() => {
    if (activeBuild.recommendedAbility && !activeBuild.recommendedAbility.includes('Habilidad Primaria')) {
      return activeBuild.recommendedAbility;
    }
    return speciesData.abilities[0]?.label || speciesData.abilities[0]?.name || 'Habilidad Estándar';
  }, [activeBuild, speciesData]);

  const [targetIvs, setTargetIvs] = useState({
    hp: true,
    attack: false,
    defense: true,
    specialAttack: true,
    specialDefense: true,
    speed: true
  });
  const [targetNature, setTargetNature] = useState<string>('Modesta (+SpA, -Atk)');
  const [targetAbility, setTargetAbility] = useState<string>('Piel Feérica (Pixilate - HO)');
  const [eggMovesInput, setEggMovesInput] = useState<string>('Deseo, Bostezos');

  // Handle build preset change
  const handleSelectBuild = (idx: number) => {
    setSelectedBuildIndex(idx);
    const b = smogonBuilds[idx];
    if (b) {
      setTargetIvs(b.targetIvs);
      setTargetNature(b.recommendedNature);
      setTargetAbility(b.recommendedAbility);
      setEggMovesInput(b.recommendedEggMoves.join(', '));
    }
  };

  // Step 2 & 3: Pasture Inventory & Shopping Items State
  const [manualAcquiredItems, setManualAcquiredItems] = useState<Record<string, boolean>>({});
  const [pastura, setPastura] = useState<BreederInventoryItem[]>(() => {
    try {
      const k1 = localStorage.getItem('muddex_global_pastura');
      if (k1) return JSON.parse(k1);
      const k2 = localStorage.getItem('diosesmon_pastura');
      if (k2) return JSON.parse(k2);
      const k3 = localStorage.getItem('muddex_pastura');
      if (k3) return JSON.parse(k3);
      const k4 = localStorage.getItem('muddex_ai_pastura');
      if (k4) return JSON.parse(k4);
      return [];
    } catch (e) {
      return [];
    }
  });

  // Persist pastura globally across all breeding projects
  useEffect(() => {
    try {
      localStorage.setItem('muddex_global_pastura', JSON.stringify(pastura));
    } catch (e) {
      console.error('Error saving pastura to localStorage', e);
    }
  }, [pastura]);

  // Restore Default Pasture Preset
  const handleRestoreDefaultPastura = () => {
    const demoPastura: BreederInventoryItem[] = [
      {
        id: 'p_eevee_3x31_m',
        speciesId: 'eevee',
        speciesName: 'Eevee (Macho ♂ 3x31)',
        gender: 'male',
        ivs: { hp: true, attack: true, defense: false, specialAttack: false, specialDefense: false, speed: true },
        nature: 'Firme',
        notes: 'Caja 1 - Ejemplar 3x31'
      },
      {
        id: 'p_eevee_2x31_f',
        speciesId: 'eevee',
        speciesName: 'Eevee (Hembra ♀ 2x31)',
        gender: 'female',
        ivs: { hp: false, attack: false, defense: true, specialAttack: false, specialDefense: true, speed: false },
        nature: 'Cauta',
        notes: 'Caja 1 - Hembra para Crianza'
      },
      {
        id: 'p_eevee_2x31_m2',
        speciesId: 'eevee',
        speciesName: 'Eevee (Macho ♂ 2x31 SpA/Vel)',
        gender: 'male',
        ivs: { hp: false, attack: false, defense: false, specialAttack: true, specialDefense: false, speed: true },
        nature: 'Modesta',
        notes: 'Caja 1 - Criador Especial'
      },
      {
        id: 'p_slowpoke_2x31',
        speciesId: 'slowpoke',
        speciesName: 'Slowpoke (Macho ♂ 2x31)',
        gender: 'male',
        ivs: { hp: true, attack: false, defense: true, specialAttack: false, specialDefense: false, speed: false },
        nature: 'Plácida',
        notes: 'Puente Agua 1 / Monstruo'
      }
    ];
    setPastura(demoPastura);
  };

  // Export Pasture JSON
  const handleExportPasturaJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(pastura, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `muddex_pastura_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Import Pasture JSON
  const handleImportPasturaJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          if (Array.isArray(parsed)) {
            setPastura(parsed);
            alert(`✓ ¡Se importaron ${parsed.length} Pokémon a tu Pastura Global!`);
          } else {
            alert('⚠️ El archivo JSON no contiene un formato de pastura válido.');
          }
        } catch (err) {
          alert('⚠️ Error al leer el archivo JSON de la pastura.');
        }
      };
    }
  };

  // Form for adding breeder to Pasture
  const [newBreederSpecies, setNewBreederSpecies] = useState<string>('ditto');
  const [newBreederGender, setNewBreederGender] = useState<'male' | 'female' | 'genderless'>('genderless');
  const [newBreederNotes, setNewBreederNotes] = useState<string>('');
  const [pastureFilterEggGroup, setPastureFilterEggGroup] = useState<string>('all');
  const [pastureFilterGender, setPastureFilterGender] = useState<string>('all');
  const [pastureFilterSearch, setPastureFilterSearch] = useState<string>('');

  const [newBreederIvs, setNewBreederIvs] = useState({
    hp: false,
    attack: false,
    defense: false,
    specialAttack: false,
    specialDefense: false,
    speed: false
  });
  const [newBreederNature, setNewBreederNature] = useState<string>('');

  const handleAddBreederToPastura = () => {
    const data = POKEMON_EGG_DATASET.find(p => p.pokemonId === newBreederSpecies) || POKEMON_EGG_DATASET[0];
    const newItem: BreederInventoryItem = {
      id: `breeder_${Date.now()}`,
      speciesId: newBreederSpecies,
      speciesName: `${data.pokemonName} (${newBreederGender === 'male' ? '♂' : newBreederGender === 'female' ? '♀' : '⚲'})`,
      gender: newBreederGender,
      ivs: { ...newBreederIvs },
      nature: newBreederNature || undefined,
      notes: newBreederNotes.trim() || undefined
    };
    setPastura(prev => [...prev, newItem]);
    setNewBreederNotes('');
  };

  const handleRemoveBreeder = (id: string) => {
    setPastura(prev => prev.filter(item => item.id !== id));
  };

  const [useDestinyKnot, setUseDestinyKnot] = useState<boolean>(true);

  // Step 4 & 5: Breeding Plan & Progress State
  const generatedPlan: GeneratedBreedingPlan = useMemo(() => {
    const moves = eggMovesInput.split(',').map(m => m.trim()).filter(Boolean);
    return generateBreedingPlan(
      selectedSpeciesId,
      targetIvs,
      targetNature,
      targetAbility,
      moves,
      pastura,
      useDestinyKnot
    );
  }, [selectedSpeciesId, targetIvs, targetNature, targetAbility, eggMovesInput, pastura, useDestinyKnot]);

  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});

  const toggleStepCompleted = (stepNum: number) => {
    setCompletedSteps(prev => ({ ...prev, [stepNum]: !prev[stepNum] }));
  };

  // Export / Import Plan
  const handleExportJson = () => {
    const exportData = {
      selectedSpeciesId,
      targetIvs,
      targetNature,
      targetAbility,
      eggMovesInput,
      pastura,
      completedSteps
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Plan_Crianza_${selectedSpeciesId}.json`;
    a.click();
  };

  const handleImportJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
        if (data.selectedSpeciesId) setSelectedSpeciesId(data.selectedSpeciesId);
        if (data.targetIvs) setTargetIvs(data.targetIvs);
        if (data.targetNature) setTargetNature(data.targetNature);
        if (data.targetAbility) setTargetAbility(data.targetAbility);
        if (data.pastura) setPastura(data.pastura);
        if (data.completedSteps) setCompletedSteps(data.completedSteps);
      } catch (err) {
        alert('Error al importar archivo de plan de crianza.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-6">
      
      {/* Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-950/90 via-zinc-900 to-amber-950/70 border border-zinc-800 p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Asistente y Gestor de Crianza Competitiva Paso a Paso</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Planificador de Crianza Pokémon
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
            Diseña la ruta exacta sin saltos para criar tus Pokémon competitivos de 3x31 a 6x31. Incluye recomendaciones de Smogon, registro de tu Pastura, lista de compras y alertas de costo por sexo.
          </p>
        </div>

        <button
          onClick={() => setIsAiModalOpen(true)}
          className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-500 hover:to-red-500 text-white font-extrabold text-xs shadow-lg shadow-amber-600/20 transition-all flex items-center gap-2.5 shrink-0"
        >
          <Sparkles className="w-4 h-4 text-amber-200 animate-pulse" />
          <span>🤖 Maestro IA de Crianza (Gemini / GPT)</span>
        </button>
      </div>

      {/* 4-Step Unified Wizard Navigation Header */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-zinc-900/90 p-2 rounded-2xl border border-zinc-800 text-xs font-extrabold shadow-lg">
        <button
          onClick={() => setCurrentWizardStep(1)}
          className={`py-2.5 px-3 rounded-xl transition-all border flex items-center justify-center gap-2 ${
            currentWizardStep === 1
              ? 'bg-red-600 text-white border-red-500 shadow-md shadow-red-600/20'
              : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white'
          }`}
        >
          <span>1. Objetivo</span>
        </button>

        <button
          onClick={() => setCurrentWizardStep(2)}
          className={`py-2.5 px-3 rounded-xl transition-all border flex items-center justify-center gap-2 ${
            currentWizardStep === 2
              ? 'bg-red-600 text-white border-red-500 shadow-md shadow-red-600/20'
              : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white'
          }`}
        >
          <span>2. Pastura</span>
        </button>

        <button
          onClick={() => setCurrentWizardStep(3)}
          className={`py-2.5 px-3 rounded-xl transition-all border flex items-center justify-center gap-2 ${
            currentWizardStep === 3
              ? 'bg-red-600 text-white border-red-500 shadow-md shadow-red-600/20'
              : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white'
          }`}
        >
          <span>3. Compras</span>
        </button>

        <button
          onClick={() => setCurrentWizardStep(4)}
          className={`py-2.5 px-3 rounded-xl transition-all border flex items-center justify-center gap-2 ${
            currentWizardStep === 4
              ? 'bg-red-600 text-white border-red-500 shadow-md shadow-red-600/20'
              : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white'
          }`}
        >
          <span>4. Ruta Guía & Progreso</span>
        </button>
      </div>

      {/* STEP 1: Objetivo & Smogon Builds */}
      {currentWizardStep === 1 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Species & Build Selection */}
          <div className="lg:col-span-1 bg-zinc-900/90 border border-zinc-800 rounded-3xl p-5 sm:p-6 space-y-5 shadow-xl">
            <h3 className="text-sm font-extrabold text-white border-b border-zinc-800 pb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Especie & Recomendación Smogon</span>
            </h3>

            <PokemonSearchSelect
              value={selectedSpeciesId}
              onChange={(newId) => {
                setSelectedSpeciesId(newId);
                setSelectedBuildIndex(0);
              }}
              label="Pokémon Objetivo:"
              placeholder="Buscar por nombre o # Pokédex..."
            />

            {/* Smogon Presets List */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-400 block">Builds Smogon Disponibles:</label>
              <div className="space-y-2">
                {smogonBuilds.map((b, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectBuild(idx)}
                    className={`w-full p-3 rounded-2xl text-left border transition-all text-xs ${
                      selectedBuildIndex === idx
                        ? 'bg-red-600/20 border-red-500 text-white font-bold'
                        : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span className="font-extrabold text-amber-400 block mb-0.5">{b.buildName}</span>
                    <span className="text-[10px] text-zinc-300 block">{b.explanation}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Rich Smogon Strategy Guide Card */}
            <div className="bg-zinc-950 border border-amber-500/30 rounded-3xl p-4 sm:p-5 space-y-4 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 p-1 flex items-center justify-center shrink-0">
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${targetData.dexNumber}.png`}
                      alt={targetData.pokemonName}
                      className="w-11 h-11 object-contain drop-shadow"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
                      Ficha Guía Smogon • {activeBuild.tier || 'Competitivo SV'}
                    </span>
                    <h4 className="text-sm font-black text-white">{activeBuild.buildName}</h4>
                  </div>
                </div>
              </div>

              {/* Core Attributes: Item, Nature, Ability, EVs */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="bg-zinc-900/80 p-2.5 rounded-xl border border-zinc-800 space-y-0.5">
                  <span className="text-[10px] text-zinc-500 block font-bold">🎒 Objeto Recomendado:</span>
                  <strong className="text-amber-300 font-extrabold text-[11px]">{activeBuild.recommendedItem || 'Restos (Leftovers)'}</strong>
                </div>

                <div className="bg-zinc-900/80 p-2.5 rounded-xl border border-zinc-800 space-y-0.5">
                  <span className="text-[10px] text-zinc-500 block font-bold">🏋️ Distribución de EVs:</span>
                  <strong className="text-emerald-300 font-extrabold text-[11px]">{activeBuild.recommendedEvs || '252 HP / 4 Def / 252 SpD'}</strong>
                </div>

                <div className="bg-zinc-900/80 p-2.5 rounded-xl border border-zinc-800 space-y-0.5">
                  <span className="text-[10px] text-zinc-500 block font-bold">🌿 Naturaleza:</span>
                  <strong className="text-sky-300 font-extrabold text-[11px]">{activeBuild.recommendedNature}</strong>
                </div>

                <div className="bg-zinc-900/80 p-2.5 rounded-xl border border-zinc-800 space-y-0.5">
                  <span className="text-[10px] text-zinc-500 block font-bold">✨ Habilidad:</span>
                  <strong className="text-purple-300 font-extrabold text-[11px]">{effectiveRecommendedAbility}</strong>
                </div>
              </div>

              {/* Recommended Competitive Moveset (4 Slots) */}
              <div className="space-y-1.5 bg-zinc-900/80 p-3 rounded-2xl border border-zinc-800">
                <span className="text-[10px] font-bold text-zinc-400 block font-mono flex items-center gap-1.5">
                  ⚔️ Moveset Competitivo Recomendado:
                </span>
                <div className="grid grid-cols-2 gap-1.5 font-mono text-[11px]">
                  {(activeBuild.recommendedMoveset || ['Deseo (Wish) [Huevo]', 'Protección (Protect)', 'Juego Sucio (Foul Play)', 'Tóxico (Toxic) [Huevo]']).map((move, i) => {
                    const isEgg = move.toLowerCase().includes('huevo') || activeBuild.recommendedEggMoves.some(em => move.toLowerCase().includes(em.toLowerCase()));
                    return (
                      <div key={i} className={`p-2 rounded-xl border flex items-center justify-between ${isEgg ? 'bg-amber-950/40 border-amber-500/40 text-amber-300' : 'bg-zinc-950 border-zinc-800 text-zinc-300'}`}>
                        <span className="truncate font-bold">{move}</span>
                        {isEgg && <span className="text-[9px] font-extrabold px-1 py-0.2 rounded bg-amber-500/20 text-amber-400 shrink-0">🥚 Huevo</span>}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Egg Moves Badges */}
              {activeBuild.recommendedEggMoves.length > 0 && (
                <div className="space-y-1 bg-zinc-900/80 p-2.5 rounded-xl border border-zinc-800">
                  <span className="text-[10px] text-zinc-400 font-mono font-bold block">🥚 Movimientos Huevo Requeridos por la Build:</span>
                  <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                    {activeBuild.recommendedEggMoves.map((em, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 font-extrabold">
                        ⭐ {em}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Fast Apply Button */}
              <button
                type="button"
                onClick={() => handleSelectBuild(selectedBuildIndex)}
                className="w-full py-2.5 rounded-2xl bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-500 hover:to-red-500 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>⚡ Cargar esta Ficha Smogon en el Planificador</span>
              </button>

            </div>

          </div>

          {/* Target Configuration (Fully Editable) */}
          <div className="lg:col-span-2 bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
                <Dna className="w-4 h-4 text-red-500" />
                <span>Configuración Personalizable de la Build</span>
              </h3>
              <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-800">
                Totalmente Editable
              </span>
            </div>

            {/* IVs 31 Checklist */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-zinc-300 block">Estadísticas Objetivo de IVs en 31:</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { key: 'hp', label: 'HP (Puntos de Vida)' },
                  { key: 'attack', label: 'Ataque Físico' },
                  { key: 'defense', label: 'Defensa Física' },
                  { key: 'specialAttack', label: 'Ataque Especial' },
                  { key: 'specialDefense', label: 'Defensa Especial' },
                  { key: 'speed', label: 'Velocidad' }
                ].map(iv => (
                  <label key={iv.key} className="flex items-center gap-2.5 p-3 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs font-bold cursor-pointer">
                    <input
                      type="checkbox"
                      checked={targetIvs[iv.key as keyof typeof targetIvs]}
                      onChange={(e) => setTargetIvs(prev => ({ ...prev, [iv.key]: e.target.checked }))}
                      className="w-4 h-4 accent-red-600 rounded"
                    />
                    <span className={targetIvs[iv.key as keyof typeof targetIvs] ? 'text-amber-400' : 'text-zinc-500'}>
                      31 IV {iv.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Strategy Toggle (Destiny Knot vs 100% Pure Power Items) */}
            <div className="space-y-2 p-4 rounded-2xl bg-zinc-950 border border-zinc-800">
              <label className="text-xs font-extrabold text-white flex items-center justify-between">
                <span>⚙️ Estrategia de Herencia de IVs:</span>
                <span className="text-[10px] font-mono text-amber-400">
                  {useDestinyKnot ? '🎗️ Lazo Destino Activado' : '🛡️ 100% Sin Lazo Destino (Puro Objetos Recios)'}
                </span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setUseDestinyKnot(true)}
                  className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                    useDestinyKnot
                      ? 'bg-red-600/20 border-red-500 text-white shadow-sm ring-1 ring-red-500/30'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  <span className="font-extrabold text-amber-400 block mb-0.5">🎗️ Usar Lazo Destino en Fase Final</span>
                  <span className="text-[10px] text-zinc-300 block leading-tight">Transmite 5 IVs combinados en el cruce final. Rápido pero probabilístico en la última fase.</span>
                </button>

                <button
                  type="button"
                  onClick={() => setUseDestinyKnot(false)}
                  className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                    !useDestinyKnot
                      ? 'bg-emerald-600/20 border-emerald-500 text-white shadow-sm ring-1 ring-emerald-500/30'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  <span className="font-extrabold text-emerald-400 block mb-0.5">🛡️ 100% Sin Lazo Destino (Cero Azar)</span>
                  <span className="text-[10px] text-zinc-300 block leading-tight">0% Suerte / Zero RNG: Herencia 100% garantizada usando Objetos Recios en todas las fases.</span>
                </button>
              </div>
            </div>

            {/* Nature, Ability & Egg Moves Form */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Nature Dropdown Selector */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-bold text-zinc-400 block">Naturaleza Objetivo:</label>
                  <span className="text-[10px] text-amber-400 font-mono font-bold">💡 Rec. Smogon: {activeBuild.recommendedNature}</span>
                </div>
                <select
                  value={targetNature}
                  onChange={(e) => setTargetNature(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white font-bold text-xs focus:outline-none focus:border-red-500"
                >
                  {OFFICIAL_POKEMON_NATURES.map(n => {
                    const isRec = activeBuild.recommendedNature.toLowerCase().includes(n.nameEs.toLowerCase());
                    return (
                      <option key={n.nameEs} value={n.label}>
                        {isRec ? `⭐ ${n.label} [Recomendada por Smogon]` : n.label}
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* Ability Dropdown Selector */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-bold text-zinc-400 block">Habilidad Objetivo:</label>
                  <span className="text-[10px] text-amber-400 font-mono font-bold">💡 Rec. Smogon: {effectiveRecommendedAbility}</span>
                </div>
                <select
                  value={targetAbility}
                  onChange={(e) => setTargetAbility(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white font-bold text-xs focus:outline-none focus:border-red-500"
                >
                  {speciesData.abilities.map((a, idx) => {
                    const isRec = effectiveRecommendedAbility.toLowerCase().includes(a.name.toLowerCase()) || effectiveRecommendedAbility.toLowerCase().includes(a.label.toLowerCase());
                    return (
                      <option key={idx} value={a.label}>
                        {isRec ? `⭐ ${a.label} [Recomendada por Smogon]` : a.label}
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* Egg Moves Interactive Selector */}
              <div className="sm:col-span-2 space-y-2.5 pt-2 border-t border-zinc-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                  <label className="font-bold text-zinc-300 block">Movimientos Huevo Compatibles (Egg Moves):</label>
                  {activeBuild.recommendedEggMoves.length > 0 ? (
                    <span className="text-[10px] text-amber-400 font-mono font-bold">
                      💡 Recomendados por Smogon: {activeBuild.recommendedEggMoves.join(', ')}
                    </span>
                  ) : (
                    <span className="text-[10px] text-zinc-500 font-mono">
                      Sin sugerencia específica de Smogon
                    </span>
                  )}
                </div>

                {speciesData.eggMoves.length === 0 ? (
                  <div className="bg-zinc-950 p-3.5 rounded-xl border border-zinc-800 text-zinc-400 text-xs flex items-center gap-2">
                    <span>ℹ️ Esta especie ({targetData.pokemonName}) no puede aprender Movimientos Huevo.</span>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-2.5 text-[11px] text-amber-300 flex items-center gap-2 font-mono">
                      <span>💡 <strong>Regla de Herencia Cobblemon:</strong> Los movimientos huevo de <strong>{targetData.pokemonName}</strong> incluyen los de su forma base (ej. <em>Wish/Deseo, Toxic, Yawn, Curse</em>). El huevo nace como la forma base heredando los movimientos y luego evoluciona.</span>
                    </div>
                    <span className="text-[10px] text-zinc-400 block">Toca los movimientos compatibles para añadirlos o quitarlos:</span>
                    <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto p-2 bg-zinc-950 rounded-2xl border border-zinc-800 scrollbar-thin">
                      {speciesData.eggMoves.map(move => {
                        const isSelected = eggMovesInput.toLowerCase().includes(move.toLowerCase());
                        const isSmogonRec = activeBuild.recommendedEggMoves.some(rm => rm.toLowerCase().includes(move.toLowerCase()));

                        return (
                          <button
                            key={move}
                            type="button"
                            onClick={() => {
                              if (isSelected) {
                                const updated = eggMovesInput.split(',').map(m => m.trim()).filter(m => m.toLowerCase() !== move.toLowerCase()).join(', ');
                                setEggMovesInput(updated);
                              } else {
                                const currentList = eggMovesInput ? eggMovesInput.split(',').map(m => m.trim()) : [];
                                currentList.push(move);
                                setEggMovesInput(currentList.join(', '));
                              }
                            }}
                            className={`px-3 py-1 rounded-xl text-xs font-bold font-mono transition-all border flex items-center gap-1.5 ${
                              isSelected
                                ? 'bg-red-600/30 border-red-500 text-white shadow-sm'
                                : isSmogonRec
                                ? 'bg-amber-500/10 border-amber-500/40 text-amber-300 hover:bg-amber-500/20'
                                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-850'
                            }`}
                          >
                            {isSmogonRec && <span>⭐</span>}
                            <span>{move}</span>
                            {isSelected && <span className="text-red-400">✓</span>}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                <input
                  type="text"
                  value={eggMovesInput}
                  onChange={(e) => setEggMovesInput(e.target.value)}
                  placeholder="Movimientos seleccionados (editables libremente)..."
                  className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white font-mono text-xs focus:outline-none focus:border-red-500"
                />
              </div>

            </div>

            {/* Next Button */}
            <button
              onClick={() => setCurrentWizardStep(2)}
              className="w-full py-3 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs shadow-lg shadow-red-600/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Continuar al Paso 2: Registrar Pastura Inicial</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* STEP 2: Pastura / Caja de Crianza Inicial */}
      {currentWizardStep === 2 && (
        <div className="space-y-6">
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 space-y-5 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-3">
              <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-400" />
                <span>Pastura / Caja de Crianza (Tus Criadores Disponibles)</span>
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <label className="px-3 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5">
                  <Upload className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Importar Pastura JSON</span>
                  <input type="file" accept=".json" onChange={handleImportPasturaJson} className="hidden" />
                </label>

                {pastura.length > 0 && (
                  <>
                    <button
                      onClick={handleExportPasturaJson}
                      className="px-3 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-xs font-mono font-bold transition-all flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5 text-sky-400" />
                      <span>Exportar Pastura</span>
                    </button>

                    <button
                      onClick={() => {
                        if (confirm('¿Estás seguro de vaciar la pastura global?')) {
                          setPastura([]);
                        }
                      }}
                      className="px-3 py-1.5 rounded-xl bg-red-950/40 border border-red-800/50 text-red-300 hover:bg-red-900/40 text-xs font-mono font-bold transition-all flex items-center gap-1.5"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Vaciar Pastura</span>
                    </button>
                  </>
                )}

                <span className="text-xs text-zinc-400 font-mono pl-1">
                  ({pastura.length} en inventario)
                </span>
              </div>
            </div>

            {/* Add New Breeder Form */}
            <div className="bg-zinc-950 p-4 sm:p-5 rounded-2xl border border-zinc-800 space-y-4">
              <span className="text-xs font-extrabold text-zinc-300 block">➕ Añadir Nuevo Pokémon a tu Pastura:</span>
              
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div className="sm:col-span-1">
                  <PokemonSearchSelect
                    value={newBreederSpecies}
                    onChange={(newId) => setNewBreederSpecies(newId)}
                    label="Especie:"
                    placeholder="Buscar especie..."
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-zinc-400 block mb-1">Sexo:</label>
                  <select
                    value={newBreederGender}
                    onChange={(e) => setNewBreederGender(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-bold text-xs"
                  >
                    <option value="male">♂ Macho</option>
                    <option value="female">♀ Hembra</option>
                    <option value="genderless">⚲ Sin Género / Ditto</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-zinc-400 block mb-1">Naturaleza (Opcional):</label>
                  <select
                    value={newBreederNature}
                    onChange={(e) => setNewBreederNature(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-bold text-xs"
                  >
                    <option value="">Sin Naturaleza Específica</option>
                    {OFFICIAL_POKEMON_NATURES.map(n => (
                      <option key={n.nameEs} value={n.nameEs}>
                        {n.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-zinc-400 block mb-1">Ubicación / Apodo (Opcional):</label>
                  <input
                    type="text"
                    value={newBreederNotes}
                    onChange={(e) => setNewBreederNotes(e.target.value)}
                    placeholder="Ej: Caja 2 Columna 3, Pastura Norte..."
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-mono text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* IVs checkboxes */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-zinc-400 block">IVs de 31 que posee este Pokémon:</span>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-[10px] font-mono">
                  {[
                    { key: 'hp', label: 'HP 31' },
                    { key: 'attack', label: 'ATT 31' },
                    { key: 'defense', label: 'DEF 31' },
                    { key: 'specialAttack', label: 'SpA 31' },
                    { key: 'specialDefense', label: 'SpD 31' },
                    { key: 'speed', label: 'VEL 31' }
                  ].map(iv => (
                    <label key={iv.key} className="flex items-center gap-1.5 p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 cursor-pointer hover:border-red-500/40">
                      <input
                        type="checkbox"
                        checked={newBreederIvs[iv.key as keyof typeof newBreederIvs]}
                        onChange={(e) => setNewBreederIvs(prev => ({ ...prev, [iv.key]: e.target.checked }))}
                        className="w-3.5 h-3.5 accent-red-600 rounded"
                      />
                      <span className={newBreederIvs[iv.key as keyof typeof newBreederIvs] ? 'text-amber-400 font-bold' : 'text-zinc-400'}>
                        {iv.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={handleAddBreederToPastura}
                className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Agregar a la Pastura Global</span>
              </button>
            </div>

            {/* Pasture Interactive Filtering Toolbar */}
            <div className="bg-zinc-950 p-3 rounded-2xl border border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="font-bold text-zinc-300 flex items-center gap-2 text-xs">
                🔍 Filtrar Pastura Global ({pastura.length} Pokémon):
              </span>

              <div className="flex flex-wrap items-center gap-2">
                <input
                  type="text"
                  value={pastureFilterSearch}
                  onChange={(e) => setPastureFilterSearch(e.target.value)}
                  placeholder="Buscar por especie o nota..."
                  className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs font-mono focus:outline-none focus:border-amber-500"
                />

                <select
                  value={pastureFilterGender}
                  onChange={(e) => setPastureFilterGender(e.target.value)}
                  className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono"
                >
                  <option value="all">Todos los Sexos</option>
                  <option value="male">♂ Solo Machos</option>
                  <option value="female">♀ Solo Hembras</option>
                  <option value="genderless">⚲ Sin Género / Ditto</option>
                </select>
              </div>
            </div>

            {/* List of Pre-Owned Breeders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {pastura.length === 0 ? (
                <div className="sm:col-span-2 md:col-span-3 bg-zinc-950/60 border border-dashed border-zinc-800 rounded-2xl p-6 text-center text-zinc-500 text-xs space-y-1">
                  <p className="font-bold text-zinc-400">🌾 Pastura Global Vacía</p>
                  <p className="text-[11px]">Agrega los Pokémon de tu caja arriba. Permanecerán guardados automáticamente para todos tus proyectos de crianza.</p>
                </div>
              ) : (
                pastura
                  .filter(item => {
                    const data = POKEMON_EGG_DATASET.find(p => p.pokemonId === item.speciesId) || POKEMON_EGG_DATASET[0];
                    if (pastureFilterGender !== 'all' && item.gender !== pastureFilterGender) return false;
                    if (pastureFilterSearch.trim()) {
                      const q = pastureFilterSearch.toLowerCase();
                      const nameMatch = data.pokemonName.toLowerCase().includes(q) || item.speciesName.toLowerCase().includes(q);
                      const noteMatch = item.notes?.toLowerCase().includes(q);
                      if (!nameMatch && !noteMatch) return false;
                    }
                    return true;
                  })
                  .map(item => {
                    const data = POKEMON_EGG_DATASET.find(p => p.pokemonId === item.speciesId) || POKEMON_EGG_DATASET[0];
                    const iv31Count = Object.values(item.ivs).filter(Boolean).length;

                    return (
                      <div key={item.id} className="bg-zinc-950 border border-zinc-800 hover:border-amber-500/40 rounded-2xl p-3.5 space-y-2.5 relative shadow-md transition-all group">
                        
                        {/* Top Header: Sprite, Species Name, Gender & Remove */}
                        <div className="flex items-center justify-between gap-2 border-b border-zinc-800/80 pb-2">
                          <div className="flex items-center gap-2.5">
                            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 p-0.5 flex items-center justify-center shrink-0">
                              <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.dexNumber}.png`}
                                alt={data.pokemonName}
                                className="w-9 h-9 object-contain drop-shadow"
                              />
                            </div>
                            <div>
                              <strong className="text-xs font-black text-white block leading-tight">{data.pokemonName}</strong>
                              <div className="flex items-center gap-1.5 text-[10px] font-mono">
                                <span className={item.gender === 'male' ? 'text-sky-400 font-bold' : item.gender === 'female' ? 'text-pink-400 font-bold' : 'text-purple-400 font-bold'}>
                                  {item.gender === 'male' ? '♂ Macho' : item.gender === 'female' ? '♀ Hembra' : '⚲ Sin Género'}
                                </span>
                                <span className="text-zinc-600">•</span>
                                <span className="text-amber-400 font-bold">{iv31Count}x31 IVs</span>
                              </div>
                            </div>
                          </div>

                          <button
                            onClick={() => handleRemoveBreeder(item.id)}
                            className="p-1.5 rounded-lg hover:bg-red-500/20 text-zinc-500 hover:text-red-400 transition-colors shrink-0"
                            title="Eliminar de la pastura global"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Nature & Egg Groups Info */}
                        <div className="flex items-center justify-between text-[10px] font-mono">
                          {item.nature ? (
                            <span className="px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold">
                              🌿 {item.nature}
                            </span>
                          ) : (
                            <span className="text-zinc-500 italic">Sin Naturaleza</span>
                          )}

                          <span className="text-zinc-400 font-bold uppercase text-[9px]">
                            {data.eggGroups.join(' / ')}
                          </span>
                        </div>

                        {/* Custom Location / Notes Badge */}
                        {item.notes && (
                          <div className="bg-zinc-900 px-2 py-1 rounded-lg border border-zinc-800 text-[10px] font-mono text-zinc-300 truncate" title={item.notes}>
                            🏷️ <strong className="text-amber-400">Nota:</strong> {item.notes}
                          </div>
                        )}

                        {/* IVs Badges */}
                        <div className="flex flex-wrap gap-1 font-mono text-[10px] pt-0.5 border-t border-zinc-900">
                          {Object.entries(item.ivs).map(([k, v]) => v ? (
                            <span key={k} className="px-1.5 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-300 font-bold uppercase text-[9px]">
                              {k === 'hp' ? 'HP' : k === 'attack' ? 'ATT' : k === 'defense' ? 'DEF' : k === 'specialAttack' ? 'SpA' : k === 'specialDefense' ? 'SpD' : 'VEL'} 31
                            </span>
                          ) : null)}
                        </div>

                      </div>
                    );
                  })
              )}
            </div>

            <button
              onClick={() => setCurrentWizardStep(3)}
              className="w-full py-3 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs shadow-lg shadow-red-600/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Continuar al Paso 3: Lista de Compras y Requisitos</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Lista de Compras */}
      {currentWizardStep === 3 && (() => {
        const totalItems = generatedPlan.shoppingList.length;
        const acquiredCount = generatedPlan.shoppingList.filter(item => {
          return manualAcquiredItems[item.id] !== undefined ? manualAcquiredItems[item.id] : item.isAcquired;
        }).length;
        const percent = totalItems > 0 ? Math.round((acquiredCount / totalItems) * 100) : 0;

        return (
          <div className="space-y-6">
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 space-y-5 shadow-xl">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800 pb-3">
                <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-amber-400" />
                  <span>Lista de Compras & Requisitos Previos Necesarios</span>
                </h3>
                <span className="text-xs font-mono font-bold text-amber-400">
                  {acquiredCount} / {totalItems} Adquiridos ({percent}%)
                </span>
              </div>

              {/* Progress bar */}
              <div className="space-y-1">
                <div className="w-full h-2.5 bg-zinc-950 rounded-full border border-zinc-800 overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full transition-all duration-300"
                    style={{ width: `${percent}%` }}
                  />
                </div>
                <span className="text-[10px] text-zinc-400 block">💡 Toca cualquier objeto en la lista para marcarlo como Adquirido o Pendiente.</span>
              </div>

              <div className="space-y-3">
                {generatedPlan.shoppingList.map(item => {
                  const isItemAcquired = manualAcquiredItems[item.id] !== undefined ? manualAcquiredItems[item.id] : item.isAcquired;

                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        setManualAcquiredItems(prev => ({
                          ...prev,
                          [item.id]: !isItemAcquired
                        }));
                      }}
                      className={`p-4 rounded-2xl border flex items-center justify-between text-xs transition-all cursor-pointer ${
                        isItemAcquired ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300 shadow-sm' : 'bg-zinc-950 border-zinc-800 text-zinc-200 hover:border-red-500/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <div>
                          <strong className="font-extrabold block text-white">{item.name}</strong>
                          <span className="text-[10px] text-zinc-400">{item.notes}</span>
                        </div>
                      </div>

                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase border transition-colors ${
                        isItemAcquired ? 'bg-emerald-950 border-emerald-800 text-emerald-400' : 'bg-amber-950 border-amber-800 text-amber-400'
                      }`}>
                        {isItemAcquired ? '✓ Adquirido / En Inventario' : '⏳ Pendiente por Adquirir'}
                      </span>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => setCurrentWizardStep(4)}
                className="w-full py-3 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs shadow-lg shadow-red-600/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Generar Ruta Paso a Paso Determinista</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        );
      })()}

      {/* STEP 4: Unified Ruta Guía & Progreso Interactivo */}
      {currentWizardStep === 4 && (() => {
        const totalSteps = generatedPlan.steps.length;
        const completedCount = generatedPlan.steps.filter(s => !!completedSteps[s.stepNumber]).length;
        const percent = totalSteps > 0 ? Math.round((completedCount / totalSteps) * 100) : 0;

        return (
          <div className="space-y-6">
            
            {/* Header Controls & Export / Import */}
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 space-y-4 shadow-xl">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-zinc-800 pb-4">
                <div>
                  <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>Ruta Guía Paso a Paso & Progreso de Crianza</span>
                  </h3>
                  <span className="text-xs text-zinc-400">
                    Sigue la combinación determinista garantizada y marca los pasos completados conforme avanzas en Diosesmon.
                  </span>
                </div>

                {/* JSON Export / Import Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleExportJson}
                    className="px-3.5 py-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 text-xs font-bold transition-colors flex items-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-400" />
                    <span>Exportar Plan JSON</span>
                  </button>

                  <label className="px-3.5 py-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer">
                    <Upload className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Importar Plan JSON</span>
                    <input type="file" accept=".json" onChange={handleImportJson} className="hidden" />
                  </label>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-zinc-300 font-bold">Progreso de la Crianza:</span>
                  <span className="text-emerald-400 font-extrabold">{completedCount} / {totalSteps} Pasos Completados ({percent}%)</span>
                </div>
                <div className="w-full h-3 bg-zinc-950 rounded-full border border-zinc-800 overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-red-600 via-amber-500 to-emerald-500 rounded-full transition-all duration-500"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Handicap & Gender Special Alerts */}
            {(generatedPlan.genderAlertSummary || (generatedPlan.specialHandicapAlerts && generatedPlan.specialHandicapAlerts.length > 0)) && (
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-3xl p-5 text-amber-400 text-xs space-y-2 shadow-lg">
                <div className="flex items-center gap-2 font-extrabold text-xs text-amber-300">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400" />
                  <span>⚠️ Especificación Especial de Genética para {generatedPlan.targetPokemonName}:</span>
                </div>
                {generatedPlan.genderAlertSummary && (
                  <p className="text-zinc-300 leading-relaxed font-mono text-[11px] pl-6">{generatedPlan.genderAlertSummary}</p>
                )}
                {generatedPlan.specialHandicapAlerts?.map((note, idx) => (
                  <p key={idx} className="text-amber-200 font-mono text-[11px] leading-relaxed pl-6">{note}</p>
                ))}
              </div>
            )}

            {/* Steps Tree with Visual Sprites */}
            <div className="space-y-6">
              {generatedPlan.steps.map(step => {
                const isDone = !!completedSteps[step.stepNumber];

                return (
                  <div
                    key={step.stepNumber}
                    className={`border rounded-3xl p-6 space-y-5 shadow-2xl transition-all ${
                      isDone
                        ? 'bg-emerald-950/20 border-emerald-500/40 opacity-90'
                        : 'bg-zinc-900/90 border-zinc-800'
                    }`}
                  >
                    
                    {/* Step Card Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-3">
                      <div className="flex flex-col gap-1.5">
                        {step.chainName && (
                          <span className={`text-[10px] font-mono font-extrabold px-3 py-0.5 rounded-full border self-start ${
                            step.chainName.includes('CADENA 1')
                              ? 'bg-sky-950/90 text-sky-300 border-sky-800'
                              : step.chainName.includes('CADENA 2')
                              ? 'bg-pink-950/90 text-pink-300 border-pink-800'
                              : 'bg-amber-950/90 text-amber-300 border-amber-800'
                          }`}>
                            {step.chainName}
                          </span>
                        )}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => toggleStepCompleted(step.stepNumber)}
                            className={`w-7 h-7 rounded-xl border flex items-center justify-center font-extrabold text-xs transition-all ${
                              isDone
                                ? 'bg-emerald-600 border-emerald-400 text-white shadow-lg shadow-emerald-600/30'
                                : 'bg-zinc-950 border-zinc-700 text-zinc-400 hover:border-red-500'
                            }`}
                          >
                            {isDone ? '✓' : step.stepNumber}
                          </button>
                          <span className="font-black text-sm text-white tracking-wide">
                            {step.title}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-xs font-mono">
                        <div className="flex items-center gap-1.5 text-amber-400 bg-amber-950/50 px-3 py-1 rounded-xl border border-amber-800/50">
                          <Flame className="w-3.5 h-3.5" />
                          <span>~{step.flameBodyStepsEstimate} Pasos (Cuerpo Llama)</span>
                        </div>
                        <span className={`px-3 py-1 rounded-xl font-bold uppercase border text-[10px] ${
                          isDone ? 'bg-emerald-950 border-emerald-800 text-emerald-300' : 'bg-zinc-950 border-zinc-800 text-amber-400'
                        }`}>
                          {isDone ? '✓ Completado' : '⏳ Pendiente'}
                        </span>
                      </div>
                    </div>

                    {/* Visual Combination Grid (Parents A & B) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      
                      {/* Parent A Card */}
                      <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 flex items-center gap-4 relative overflow-hidden">
                        <div className="w-16 h-16 bg-zinc-900/80 rounded-2xl border border-zinc-800 p-1 flex items-center justify-center shrink-0">
                          <img
                            src={step.parentA.spriteUrl}
                            alt={step.parentA.name}
                            className="w-14 h-14 object-contain drop-shadow"
                          />
                        </div>
                        <div className="space-y-1 font-mono text-[11px] flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-1">
                            <span className="font-extrabold text-amber-400 block text-xs">Padre A: {step.parentA.name}</span>
                            <span className={`text-[9px] font-bold px-2 py-0.5 rounded border ${
                              step.parentA.originLabel.includes('Cría')
                                ? 'bg-amber-950/80 text-amber-300 border-amber-800'
                                : step.parentA.originLabel.includes('Pastura')
                                ? 'bg-emerald-950/80 text-emerald-300 border-emerald-800'
                                : 'bg-purple-950/80 text-purple-300 border-purple-800'
                            }`}>
                              {step.parentA.originLabel}
                            </span>
                          </div>
                          <div><span className="text-zinc-500">Objeto:</span> <strong className="text-white font-bold">{step.parentA.equippedItem}</strong></div>
                          <div><span className="text-zinc-500">IVs 31:</span> <strong className="text-emerald-400 font-bold">{step.parentA.ivSummary}</strong></div>
                        </div>
                      </div>

                      {/* Parent B Card */}
                      <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 flex items-center gap-4 relative overflow-hidden">
                        <div className="w-16 h-16 bg-zinc-900/80 rounded-2xl border border-zinc-800 p-1 flex items-center justify-center shrink-0">
                          <img
                            src={step.parentB.spriteUrl}
                            alt={step.parentB.name}
                            className="w-14 h-14 object-contain drop-shadow"
                          />
                        </div>
                        <div className="space-y-1 font-mono text-[11px] flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-1">
                            <span className="font-extrabold text-amber-400 block text-xs">Padre B: {step.parentB.name}</span>
                            <span className={`text-[9px] font-bold px-2 py-0.5 rounded border ${
                              step.parentB.originLabel.includes('Cría')
                                ? 'bg-amber-950/80 text-amber-300 border-amber-800'
                                : step.parentB.originLabel.includes('Pastura')
                                ? 'bg-emerald-950/80 text-emerald-300 border-emerald-800'
                                : 'bg-purple-950/80 text-purple-300 border-purple-800'
                            }`}>
                              {step.parentB.originLabel}
                            </span>
                          </div>
                          <div><span className="text-zinc-500">Objeto:</span> <strong className="text-white font-bold">{step.parentB.equippedItem}</strong></div>
                          <div><span className="text-zinc-500">IVs 31:</span> <strong className="text-emerald-400 font-bold">{step.parentB.ivSummary}</strong></div>
                        </div>
                      </div>

                    </div>

                    {/* Offspring Target Result Card */}
                    <div className="bg-zinc-950 p-4 sm:p-5 rounded-2xl border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500/10 to-red-500/10 rounded-2xl border border-amber-500/30 p-1 flex items-center justify-center shrink-0">
                        <img
                          src={step.offspringTarget.spriteUrl}
                          alt={step.offspringTarget.name}
                          className="w-14 h-14 object-contain drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]"
                        />
                      </div>

                      <div className="space-y-1 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <strong className="font-extrabold text-white text-xs flex items-center gap-2">
                            <span>🐣 Resultado Esperado:</span>
                            <span className="text-amber-400">{step.offspringTarget.name}</span>
                          </strong>
                          
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={`text-[10px] font-mono font-extrabold px-2.5 py-0.5 rounded-full border ${
                              step.offspringTarget.genderRequired === 'female'
                                ? 'bg-pink-950 text-pink-300 border-pink-800'
                                : step.offspringTarget.genderRequired === 'male'
                                ? 'bg-sky-950 text-sky-300 border-sky-800'
                                : 'bg-zinc-800 text-zinc-300 border-zinc-700'
                            }`}>
                              {step.offspringTarget.genderRequiredLabel}
                            </span>
                            <span className="text-[11px] font-mono text-emerald-400 font-extrabold bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-800">
                              {step.offspringTarget.expectedIvsSummary}
                            </span>
                          </div>
                        </div>

                        {step.offspringTarget.genderCostAlert && (
                          <p className="text-[11px] text-amber-400 bg-amber-500/10 p-2 rounded-xl border border-amber-500/30">
                            {step.offspringTarget.genderCostAlert}
                          </p>
                        )}
                        
                        <p className="text-zinc-400 text-[11px] leading-relaxed">{step.strategyNotes}</p>
                      </div>
                    </div>

                    {/* Interactive Actions: Register to Pasture & Completion Toggle */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <button
                        onClick={() => {
                          const genderVal = step.offspringTarget.genderRequired === 'female' ? 'female' : step.offspringTarget.genderRequired === 'male' ? 'male' : 'genderless';
                          const data = POKEMON_EGG_DATASET.find(p => p.pokemonId === selectedSpeciesId) || POKEMON_EGG_DATASET[0];
                          
                          // Determine IVs from step
                          const ivObj = { hp: false, attack: false, defense: false, specialAttack: false, specialDefense: false, speed: false };
                          if (step.offspringTarget.expectedIvsSummary.toLowerCase().includes('hp')) ivObj.hp = true;
                          if (step.offspringTarget.expectedIvsSummary.toLowerCase().includes('ataque')) ivObj.attack = true;
                          if (step.offspringTarget.expectedIvsSummary.toLowerCase().includes('defensa')) ivObj.defense = true;
                          if (step.offspringTarget.expectedIvsSummary.toLowerCase().includes('atk esp')) ivObj.specialAttack = true;
                          if (step.offspringTarget.expectedIvsSummary.toLowerCase().includes('def esp')) ivObj.specialDefense = true;
                          if (step.offspringTarget.expectedIvsSummary.toLowerCase().includes('velocidad')) ivObj.speed = true;

                          const newBreeder: BreederInventoryItem = {
                            id: `pasture_step_${step.stepNumber}_${Date.now()}`,
                            speciesId: data.pokemonId,
                            speciesName: `${data.pokemonName} (${step.offspringTarget.name})`,
                            gender: genderVal,
                            ivs: ivObj,
                            nature: targetNature
                          };

                          setPastura(prev => [...prev, newBreeder]);
                          alert(`✓ ¡${data.pokemonName} (${step.offspringTarget.name}) fue registrado exitosamente en tu Pastura Global!`);
                        }}
                        className="w-full py-3 rounded-2xl bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 border border-amber-500/40 font-extrabold text-xs transition-all flex items-center justify-center gap-2 shadow-md"
                      >
                        <Plus className="w-4 h-4 text-amber-400" />
                        <span>➕ Registrar Cría del Paso en mi Pastura Global</span>
                      </button>

                      <button
                        onClick={() => toggleStepCompleted(step.stepNumber)}
                        className={`w-full py-3 rounded-2xl font-extrabold text-xs transition-all flex items-center justify-center gap-2 shadow-md ${
                          isDone
                            ? 'bg-zinc-950 text-zinc-400 border border-zinc-800 hover:text-white'
                            : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>{isDone ? 'Marcar Paso como Pendiente' : '✓ Marcar Paso como Completado'}</span>
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        );
      })()}

      {/* AI Assistant Modal */}
      <AiBreedingAssistantModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        targetPokemonName={targetData.pokemonName}
        targetIvs={targetIvs}
        targetNature={targetNature}
        targetAbility={targetAbility}
        eggMoves={eggMovesInput.split(',').map(s => s.trim()).filter(Boolean)}
        pastura={pastura}
      />

    </div>
  );
};
