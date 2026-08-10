import React, { useState, useMemo } from 'react';
import { Sparkles, Dna, Calculator, ArrowRight, ShieldCheck, Heart, Info, RefreshCw, Layers } from 'lucide-react';
import { POKEMON_EGG_DATASET, EGG_GROUPS_INFO, EggGroup, PokemonEggData } from '../data/cobblemonEggGroups';

export const ShinyBreedingView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'calculator' | 'bridge'>('calculator');

  // Calculator State
  const [useMasuda, setUseMasuda] = useState<boolean>(true);
  const [hasShinyCharm, setHasShinyCharm] = useState<boolean>(false);
  const [useDestinyKnot, setUseDestinyKnot] = useState<boolean>(true);
  const [useEverstone, setUseEverstone] = useState<boolean>(true);
  const [hatchedEggsInput, setHatchedEggsInput] = useState<number>(100);

  // Bridge Finder State
  const [parentAId, setParentAId] = useState<string>('lucario');
  const [parentBId, setParentBId] = useState<string>('togekiss');

  // Shiny Odds Calculation
  const shinyOddsFraction = useMemo(() => {
    if (useMasuda && hasShinyCharm) return 512;
    if (useMasuda && !hasShinyCharm) return 683;
    if (!useMasuda && hasShinyCharm) return 1365;
    return 4096;
  }, [useMasuda, hasShinyCharm]);

  const pOdds = 1 / shinyOddsFraction;
  const pOddsPercentage = (pOdds * 100).toFixed(3);

  // Cumulative Probability Calculator: 1 - (1 - p)^N
  const cumulativeProbability = useMemo(() => {
    if (hatchedEggsInput <= 0) return 0;
    const probNotShiny = Math.pow(1 - pOdds, hatchedEggsInput);
    return Math.min(99.99, (1 - probNotShiny) * 100);
  }, [pOdds, hatchedEggsInput]);

  // Eggs needed for target certainty thresholds
  const eggsFor50 = Math.ceil(Math.log(0.5) / Math.log(1 - pOdds));
  const eggsFor90 = Math.ceil(Math.log(0.1) / Math.log(1 - pOdds));
  const eggsFor99 = Math.ceil(Math.log(0.01) / Math.log(1 - pOdds));

  // Bridge Finder Calculations
  const parentA = useMemo(() => POKEMON_EGG_DATASET.find(p => p.pokemonId === parentAId) || POKEMON_EGG_DATASET[0], [parentAId]);
  const parentB = useMemo(() => POKEMON_EGG_DATASET.find(p => p.pokemonId === parentBId) || POKEMON_EGG_DATASET[1], [parentBId]);

  const sharedEggGroups = useMemo(() => {
    if (!parentA || !parentB) return [];
    return parentA.eggGroups.filter(g => parentB.eggGroups.includes(g) && g !== 'undiscovered');
  }, [parentA, parentB]);

  // Direct Bridge Pokemon (Dual egg group species that share 1 group with Parent A and 1 group with Parent B)
  const bridgePokemonList = useMemo(() => {
    if (!parentA || !parentB || sharedEggGroups.length > 0) return [];

    const groupsA = parentA.eggGroups.filter(g => g !== 'undiscovered');
    const groupsB = parentB.eggGroups.filter(g => g !== 'undiscovered');

    return POKEMON_EGG_DATASET.filter(p => {
      if (p.pokemonId === parentA.pokemonId || p.pokemonId === parentB.pokemonId) return false;
      const matchesA = p.eggGroups.some(g => (groupsA as string[]).includes(g));
      const matchesB = p.eggGroups.some(g => (groupsB as string[]).includes(g));
      return matchesA && matchesB && p.eggGroups.length >= 2;
    });
  }, [parentA, parentB, sharedEggGroups]);

  return (
    <div className="space-y-6">
      
      {/* Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-950/80 via-zinc-900 to-amber-950/60 border border-zinc-800 p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Crianza Competitiva & Shiny Hunting • Cobblemon 1.7.3</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Calculadora Shiny & Pokémon Puente
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
            Calcula las probabilidades matemáticas del **Método Masuda** en crianza y encuentra especies **Pokémon Puente** con doble grupo huevo para transmitir movimientos huevo, IVs y naturalezas.
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-zinc-800 pb-2 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveTab('calculator')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all border flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'calculator'
              ? 'bg-red-600 text-white border-red-500 shadow-md shadow-red-600/20'
              : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white hover:bg-zinc-800'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>Calculadora Masuda & Probabilidades</span>
        </button>

        <button
          onClick={() => setActiveTab('bridge')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all border flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'bridge'
              ? 'bg-red-600 text-white border-red-500 shadow-md shadow-red-600/20'
              : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white hover:bg-zinc-800'
          }`}
        >
          <Dna className="w-4 h-4" />
          <span>Buscador de Pokémon Puente</span>
        </button>
      </div>

      {/* TAB 1: Shiny Calculator */}
      {activeTab === 'calculator' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Controls Panel */}
          <div className="lg:col-span-1 bg-zinc-900/90 border border-zinc-800 rounded-3xl p-5 sm:p-6 space-y-5 shadow-xl">
            <h3 className="text-sm font-extrabold text-white flex items-center gap-2 border-b border-zinc-800 pb-3">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Configuración de Crianza</span>
            </h3>

            {/* Masuda Method Toggle */}
            <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-2">
              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <span className="text-xs font-bold text-white block">Método Masuda</span>
                  <span className="text-[10px] text-zinc-400 block">Padres de distinto idioma/origen</span>
                </div>
                <input
                  type="checkbox"
                  checked={useMasuda}
                  onChange={(e) => setUseMasuda(e.target.checked)}
                  className="w-4 h-4 accent-red-600 rounded"
                />
              </label>
            </div>

            {/* Shiny Charm Toggle */}
            <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-2">
              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <span className="text-xs font-bold text-white block">Amuleto Iris (Shiny Charm)</span>
                  <span className="text-[10px] text-zinc-400 block">Bonificador de tasa Shiny en Cobblemon</span>
                </div>
                <input
                  type="checkbox"
                  checked={hasShinyCharm}
                  onChange={(e) => setHasShinyCharm(e.target.checked)}
                  className="w-4 h-4 accent-red-600 rounded"
                />
              </label>
            </div>

            {/* Competitive Breeding Gear */}
            <div className="space-y-2 pt-2 border-t border-zinc-800">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Objetos de Herencia Competitiva:</span>
              
              <label className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs cursor-pointer">
                <span className="text-zinc-200">🎗️ Lazo Destino (Pasa 5 IVs)</span>
                <input
                  type="checkbox"
                  checked={useDestinyKnot}
                  onChange={(e) => setUseDestinyKnot(e.target.checked)}
                  className="w-4 h-4 accent-red-600 rounded"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs cursor-pointer">
                <span className="text-zinc-200">🪨 Piedra Eterna (Pasa Naturaleza 100%)</span>
                <input
                  type="checkbox"
                  checked={useEverstone}
                  onChange={(e) => setUseEverstone(e.target.checked)}
                  className="w-4 h-4 accent-red-600 rounded"
                />
              </label>
            </div>

            {/* Hatched Eggs Interactive Simulator Input */}
            <div className="space-y-2 pt-2 border-t border-zinc-800">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-zinc-300">Huevos Eclosionados:</span>
                <span className="font-mono text-amber-400 font-bold">{hatchedEggsInput} huevos</span>
              </div>
              <input
                type="range"
                min="1"
                max="2000"
                step="10"
                value={hatchedEggsInput}
                onChange={(e) => setHatchedEggsInput(Number(e.target.value))}
                className="w-full accent-red-600 cursor-pointer"
              />
            </div>
          </div>

          {/* Probability Dashboard */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Top Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 text-center space-y-1 shadow-lg">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">Probabilidad por Huevo</span>
                <strong className="text-xl sm:text-2xl font-black text-amber-400 font-mono block">1 / {shinyOddsFraction}</strong>
                <span className="text-xs text-zinc-400 block">({pOddsPercentage}% por intento)</span>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 text-center space-y-1 shadow-lg">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">Éxito Acumulado ({hatchedEggsInput} huevos)</span>
                <strong className="text-xl sm:text-2xl font-black text-emerald-400 font-mono block">{cumulativeProbability.toFixed(1)}%</strong>
                <span className="text-xs text-zinc-400 block">Probabilidad acumulada</span>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 text-center space-y-1 shadow-lg">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">Promedio Esperado (50%)</span>
                <strong className="text-xl sm:text-2xl font-black text-red-400 font-mono block">{eggsFor50}</strong>
                <span className="text-xs text-zinc-400 block">huevos para ~50% certeza</span>
              </div>
            </div>

            {/* Threshold Progress Bar & Table */}
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 space-y-5 shadow-xl">
              <h4 className="text-xs font-extrabold text-zinc-200 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-red-500" />
                <span>Tabla de Huevos Requeridos para Umbrales de Certeza</span>
              </h4>

              {/* Progress visual bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-zinc-400 font-mono">
                  <span>Progreso actual ({hatchedEggsInput} huevos)</span>
                  <span className="font-bold text-emerald-400">{cumulativeProbability.toFixed(1)}%</span>
                </div>
                <div className="w-full h-3 bg-zinc-950 rounded-full border border-zinc-800 overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-red-600 via-amber-500 to-emerald-500 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, cumulativeProbability)}%` }}
                  />
                </div>
              </div>

              {/* Threshold Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1">
                  <span className="text-zinc-400 font-bold block">🎯 50% de Probabilidad</span>
                  <p className="text-amber-400 font-mono font-bold text-base">{eggsFor50} huevos</p>
                  <span className="text-[10px] text-zinc-500 block">La mitad de los criadores obtendrán su Shiny aquí.</span>
                </div>

                <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1">
                  <span className="text-zinc-400 font-bold block">⚡ 90% de Probabilidad</span>
                  <p className="text-emerald-400 font-mono font-bold text-base">{eggsFor90} huevos</p>
                  <span className="text-[10px] text-zinc-500 block">Casi garantizado para el 90% de los intentos.</span>
                </div>

                <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-1">
                  <span className="text-zinc-400 font-bold block">🌟 99% de Probabilidad</span>
                  <p className="text-purple-400 font-mono font-bold text-base">{eggsFor99} huevos</p>
                  <span className="text-[10px] text-zinc-500 block">Certeza matemática virtualmente absoluta.</span>
                </div>
              </div>
            </div>

            {/* Competitive Inheritance Summary Box */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-3xl p-5 space-y-2 text-xs">
              <span className="font-extrabold text-amber-400 block flex items-center gap-1.5">
                💡 Reglas de Crianza Competitiva en Cobblemon:
              </span>
              <ul className="space-y-1.5 text-zinc-300 leading-relaxed list-disc list-inside">
                <li><strong>Lazo Destino (Destiny Knot)</strong>: Garantiza que la cría herede 5 de los 12 valores individuales (IVs) totales combinados de ambos padres.</li>
                <li><strong>Piedra Eterna (Everstone)</strong>: Garantiza en un 100% que la cría herede la Naturaleza exacta del Pokémon que la lleve equipada.</li>
                <li><strong>Método Masuda</strong>: Si los padres provienen de entrenadores con apodo/idioma distinto, la tasa aumenta de 1/4096 a 1/683 (o 1/512 con Amuleto Iris).</li>
              </ul>
            </div>

          </div>

        </div>
      )}

      {/* TAB 2: Bridge Pokemon Finder */}
      {activeTab === 'bridge' && (
        <div className="space-y-6">
          
          {/* Species Selection Bar */}
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 space-y-4 shadow-xl">
            <h3 className="text-sm font-extrabold text-white flex items-center gap-2 border-b border-zinc-800 pb-3">
              <Dna className="w-4 h-4 text-red-500" />
              <span>Selecciona las dos Especies a Cruzar</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Parent A Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 block">Padre A (Especie Origen / Portador de IVs):</label>
                <select
                  value={parentAId}
                  onChange={(e) => setParentAId(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-white font-bold text-xs focus:outline-none focus:border-red-500"
                >
                  {POKEMON_EGG_DATASET.map(p => (
                    <option key={p.pokemonId} value={p.pokemonId}>
                      #{String(p.dexNumber).padStart(3, '0')} - {p.pokemonName} ({p.eggGroups.map(g => EGG_GROUPS_INFO[g]?.nameEs || g).join(', ')})
                    </option>
                  ))}
                </select>
              </div>

              {/* Parent B Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 block">Padre B (Especie Objetivo):</label>
                <select
                  value={parentBId}
                  onChange={(e) => setParentBId(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-white font-bold text-xs focus:outline-none focus:border-red-500"
                >
                  {POKEMON_EGG_DATASET.map(p => (
                    <option key={p.pokemonId} value={p.pokemonId}>
                      #{String(p.dexNumber).padStart(3, '0')} - {p.pokemonName} ({p.eggGroups.map(g => EGG_GROUPS_INFO[g]?.nameEs || g).join(', ')})
                    </option>
                  ))}
                </select>
              </div>

            </div>
          </div>

          {/* Compatibility Results Display */}
          {sharedEggGroups.length > 0 ? (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-3xl p-6 text-center space-y-3">
              <span className="text-emerald-400 text-2xl block">🎉</span>
              <h3 className="text-lg font-extrabold text-white">¡Compatibilidad Directa de Crianza!</h3>
              <p className="text-xs text-zinc-300 max-w-lg mx-auto">
                <strong>{parentA.pokemonName}</strong> y <strong>{parentB.pokemonName}</strong> pertenecen directamente al mismo Grupo Huevo:
              </p>
              <div className="flex justify-center gap-2 pt-2">
                {sharedEggGroups.map(g => (
                  <span key={g} className="px-3 py-1.5 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-300 font-mono text-xs font-bold">
                    {EGG_GROUPS_INFO[g]?.icon} {EGG_GROUPS_INFO[g]?.nameEs || g}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              
              {/* Chain Overview Banner */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 p-1 flex items-center justify-center shrink-0">
                    <img src={parentA.spriteUrl} alt={parentA.pokemonName} className="max-h-full object-contain" />
                  </div>
                  <div>
                    <strong className="text-sm font-extrabold text-white block">{parentA.pokemonName}</strong>
                    <span className="text-[10px] text-zinc-400 font-mono">{parentA.eggGroups.map(g => EGG_GROUPS_INFO[g]?.nameEs || g).join(' + ')}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-zinc-500 font-bold text-xs uppercase tracking-widest">
                  <span>Conector Puente</span>
                  <ArrowRight className="w-4 h-4 text-red-500" />
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 p-1 flex items-center justify-center shrink-0">
                    <img src={parentB.spriteUrl} alt={parentB.pokemonName} className="max-h-full object-contain" />
                  </div>
                  <div>
                    <strong className="text-sm font-extrabold text-white block">{parentB.pokemonName}</strong>
                    <span className="text-[10px] text-zinc-400 font-mono">{parentB.eggGroups.map(g => EGG_GROUPS_INFO[g]?.nameEs || g).join(' + ')}</span>
                  </div>
                </div>
              </div>

              {/* Bridge Pokemon Cards Grid */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-extrabold text-zinc-300 uppercase tracking-wider">
                    Especies de Pokémon Puente Encontradas ({bridgePokemonList.length}):
                  </h4>
                  <span className="text-[10px] text-zinc-500 font-mono">Poseen ambos Grupos Huevo simultáneamente</span>
                </div>

                {bridgePokemonList.length === 0 ? (
                  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center space-y-2">
                    <p className="text-xs text-zinc-400">No se encontraron especies puente directas de 1 solo salto. Prueba usando a **Ditto** como comodín universal.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {bridgePokemonList.slice(0, 16).map(bridge => (
                      <div key={bridge.pokemonId} className="bg-zinc-900 border border-zinc-800 hover:border-red-500/50 rounded-2xl p-3.5 space-y-2.5 transition-all shadow-md">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 p-1 flex items-center justify-center shrink-0">
                            <img src={bridge.spriteUrl} alt={bridge.pokemonName} className="max-h-full object-contain" />
                          </div>
                          <div className="min-w-0">
                            <span className="text-[10px] font-mono text-zinc-500 block">#{String(bridge.dexNumber).padStart(3, '0')}</span>
                            <strong className="text-xs font-extrabold text-white truncate block">{bridge.pokemonName}</strong>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 pt-1 border-t border-zinc-800/80">
                          {bridge.eggGroups.map(g => (
                            <span key={g} className="px-2 py-0.5 text-[9px] font-mono font-bold rounded bg-zinc-950 text-zinc-300 border border-zinc-800">
                              {EGG_GROUPS_INFO[g]?.icon} {EGG_GROUPS_INFO[g]?.nameEs.split(' ')[0] || g}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          )}

        </div>
      )}

    </div>
  );
};
