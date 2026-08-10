import React, { useState, useMemo } from 'react';
import { Layers, Dna, ShoppingBag, CheckCircle2, AlertTriangle, Plus, Trash2, Download, Upload, Flame, Sparkles, RefreshCw, ChevronRight, Shield, Award } from 'lucide-react';
import { POKEMON_EGG_DATASET } from '../data/cobblemonEggGroups';
import { getSmogonBuildsForPokemon, SmogonBuild } from '../data/smogonBuilds';
import { OFFICIAL_POKEMON_NATURES } from '../data/pokemonNatures';
import { getAbilitiesAndEggMovesForDex } from '../data/cobblemonSpeciesAbilitiesAndEggMoves';
import {
  generateBreedingPlan,
  BreederInventoryItem,
  GeneratedBreedingPlan,
  getGenderRatio
} from '../utils/breedingAlgorithm';

export const BreedingPlannerView: React.FC = () => {
  const [currentWizardStep, setCurrentWizardStep] = useState<number>(1);

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
  const [pastura, setPastura] = useState<BreederInventoryItem[]>([
    {
      id: 'p1',
      speciesId: 'spinda',
      speciesName: 'Spinda 1',
      gender: 'male',
      ivs: { hp: true, attack: false, defense: false, specialAttack: false, specialDefense: false, speed: false }
    },
    {
      id: 'p2',
      speciesId: 'spinda',
      speciesName: 'Spinda 2',
      gender: 'female',
      ivs: { hp: false, attack: false, defense: false, specialAttack: false, specialDefense: false, speed: true }
    },
    {
      id: 'p3',
      speciesId: 'eevee',
      speciesName: 'Eevee Macho Inicial',
      gender: 'male',
      ivs: { hp: false, attack: false, defense: false, specialAttack: false, specialDefense: false, speed: false }
    }
  ]);

  // Form for adding breeder to Pasture
  const [newBreederSpecies, setNewBreederSpecies] = useState<string>('ditto');
  const [newBreederGender, setNewBreederGender] = useState<'male' | 'female' | 'genderless'>('genderless');
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
      nature: newBreederNature || undefined
    };
    setPastura(prev => [...prev, newItem]);
  };

  const handleRemoveBreeder = (id: string) => {
    setPastura(prev => prev.filter(item => item.id !== id));
  };

  // Step 4 & 5: Breeding Plan & Progress State
  const generatedPlan: GeneratedBreedingPlan = useMemo(() => {
    const moves = eggMovesInput.split(',').map(m => m.trim()).filter(Boolean);
    return generateBreedingPlan(
      selectedSpeciesId,
      targetIvs,
      targetNature,
      targetAbility,
      moves,
      pastura
    );
  }, [selectedSpeciesId, targetIvs, targetNature, targetAbility, eggMovesInput, pastura]);

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

            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-400 block">Pokémon Objetivo:</label>
              <select
                value={selectedSpeciesId}
                onChange={(e) => {
                  setSelectedSpeciesId(e.target.value);
                  setSelectedBuildIndex(0);
                }}
                className="w-full px-4 py-2.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-white font-bold text-xs focus:outline-none focus:border-red-500"
              >
                {POKEMON_EGG_DATASET.map(p => (
                  <option key={p.pokemonId} value={p.pokemonId}>
                    #{String(p.dexNumber).padStart(3, '0')} - {p.pokemonName}
                  </option>
                ))}
              </select>
            </div>

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
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-400" />
                <span>Pastura / Caja de Crianza (Tus Criadores Disponibles)</span>
              </h3>
              <span className="text-xs text-zinc-400 font-mono">
                {pastura.length} Pokémon registrados en tu inventario
              </span>
            </div>

            {/* Add New Breeder Form */}
            <div className="bg-zinc-950 p-4 sm:p-5 rounded-2xl border border-zinc-800 space-y-4">
              <span className="text-xs font-extrabold text-zinc-300 block">➕ Añadir Nuevo Pokémon a tu Pastura:</span>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-zinc-400 block mb-1">Especie:</label>
                  <select
                    value={newBreederSpecies}
                    onChange={(e) => setNewBreederSpecies(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-bold text-xs"
                  >
                    {POKEMON_EGG_DATASET.map(p => (
                      <option key={p.pokemonId} value={p.pokemonId}>
                        {p.pokemonName}
                      </option>
                    ))}
                  </select>
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
              </div>

              {/* IVs checkboxes */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-zinc-400 block">IVs de 31 que posee este Pokémon:</span>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-[10px] font-mono">
                  {['hp', 'attack', 'defense', 'specialAttack', 'specialDefense', 'speed'].map(key => (
                    <label key={key} className="flex items-center gap-1.5 p-2 rounded-lg bg-zinc-900 border border-zinc-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={newBreederIvs[key as keyof typeof newBreederIvs]}
                        onChange={(e) => setNewBreederIvs(prev => ({ ...prev, [key]: e.target.checked }))}
                        className="accent-red-600"
                      />
                      <span className="uppercase text-zinc-300">{key.slice(0, 3)} 31</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={handleAddBreederToPastura}
                className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Agregar a la Pastura</span>
              </button>
            </div>

            {/* List of Pre-Owned Breeders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {pastura.map(item => (
                <div key={item.id} className="bg-zinc-950 border border-zinc-800 rounded-2xl p-3.5 space-y-2 relative shadow-md">
                  <div className="flex items-center justify-between">
                    <strong className="text-xs font-extrabold text-white">{item.speciesName}</strong>
                    <button
                      onClick={() => handleRemoveBreeder(item.id)}
                      className="p-1 rounded-lg hover:bg-red-500/20 text-zinc-500 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                    {Object.entries(item.ivs).map(([k, v]) => v ? (
                      <span key={k} className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-300 font-bold uppercase">
                        {k.slice(0, 3)} 31
                      </span>
                    ) : null)}
                  </div>
                </div>
              ))}
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

            {/* Summary Alert */}
            {generatedPlan.genderAlertSummary && (
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-3xl p-5 text-amber-400 text-xs flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-amber-400" />
                <div>
                  <strong className="font-bold block mb-1">Alerta de Dificultad y Género:</strong>
                  <p className="text-zinc-300 leading-relaxed">{generatedPlan.genderAlertSummary}</p>
                </div>
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
                          <span className="font-extrabold text-amber-400 block text-xs">Padre A: {step.parentA.name}</span>
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
                          <span className="font-extrabold text-amber-400 block text-xs">Padre B: {step.parentB.name}</span>
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
                          <span className="text-[11px] font-mono text-emerald-400 font-extrabold bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-800">
                            {step.offspringTarget.expectedIvsSummary}
                          </span>
                        </div>

                        {step.offspringTarget.genderCostAlert && (
                          <p className="text-[11px] text-amber-400 bg-amber-500/10 p-2 rounded-xl border border-amber-500/30">
                            {step.offspringTarget.genderCostAlert}
                          </p>
                        )}
                        
                        <p className="text-zinc-400 text-[11px] leading-relaxed">{step.strategyNotes}</p>
                      </div>
                    </div>

                    {/* Interactive Completion Toggle Button */}
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
                );
              })}
            </div>

          </div>
        );
      })()}

    </div>
  );
};
