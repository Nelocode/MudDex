import React, { useState, useRef, useEffect } from 'react';
import { Target, Sparkles, Heart, Activity, Search, X, Check, ArrowRight } from 'lucide-react';
import { COBBLEMON_POKEDEX } from '../data/cobblemonPokedex';
import { calculateCatchRate } from '../services/catchCalculator';
import { StatusCondition, CatchContext, Pokemon } from '../types/diosesmon';

interface CatchCalculatorViewProps {
  initialPokemonId?: string;
}

export const CatchCalculatorView: React.FC<CatchCalculatorViewProps> = ({ initialPokemonId }) => {
  const [selectedPokemonId, setSelectedPokemonId] = useState<string>(initialPokemonId || 'snorlax');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [hpPercent, setHpPercent] = useState<number>(20);
  const [status, setStatus] = useState<StatusCondition>('sleep');
  const [isNightOrCave, setIsNightOrCave] = useState<boolean>(true);
  const [isTurnOne, setIsTurnOne] = useState<boolean>(false);
  const [hasCaughtBefore, setHasCaughtBefore] = useState<boolean>(true);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentPokemon = COBBLEMON_POKEDEX.find(p => p.id === selectedPokemonId) || COBBLEMON_POKEDEX[0];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filtered Pokémon list for instant autocomplete
  const filteredOptions = searchQuery.trim() === ''
    ? COBBLEMON_POKEDEX.slice(0, 8)
    : COBBLEMON_POKEDEX.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        String(p.dexNumber).includes(searchQuery)
      ).slice(0, 8);

  const popularPresets = [
    { id: 'snorlax', name: 'Snorlax', icon: '🍎' },
    { id: 'charizard', name: 'Charizard', icon: '🔥' },
    { id: 'pikachu', name: 'Pikachu', icon: '⚡' },
    { id: 'garchomp', name: 'Garchomp', icon: '🐲' },
    { id: 'dragonite', name: 'Dragonite', icon: '🐉' },
    { id: 'mewtwo', name: 'Mewtwo', icon: '🔮' },
    { id: 'gengar', name: 'Gengar', icon: '👻' },
    { id: 'lucario', name: 'Lucario', icon: '🥋' },
    { id: 'ceruledge', name: 'Ceruledge', icon: '✨' }
  ];

  const catchContext: CatchContext = {
    pokemonId: currentPokemon.id,
    currentHpPercent: hpPercent,
    status,
    isNightOrCave,
    isTurnOne,
    hasCaughtBefore,
    pokemonWeightKg: currentPokemon.weightKg,
    speedStat: currentPokemon.baseStats.speed
  };

  const ballRankings = calculateCatchRate(currentPokemon, catchContext);
  const bestBall = ballRankings[0];

  const handleSelectPokemon = (pokemon: Pokemon) => {
    setSelectedPokemonId(pokemon.id);
    setSearchQuery('');
    setIsDropdownOpen(false);
  };

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-indigo-950/40 border border-slate-800 p-6 sm:p-8">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
            <Target className="w-3.5 h-3.5" />
            <span>Calculador de Captura Gen 8/9 • Cobblemon</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Optimizador de Pokébolas & Tasa de Éxito
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Calcula las probabilidades matemáticas de captura y descubre qué Pokéball te dará el mayor multiplicador para no malgastar recursos en Diosesmon.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Configuration Controls */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Target Pokemon Selector */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-4 backdrop-blur-md relative" ref={dropdownRef}>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400">
              1. Selecciona el Pokémon Objetivo
            </label>

            {/* Selected Active Pokemon Card Header */}
            <div className="flex items-center gap-3 bg-slate-950 border border-slate-800/80 rounded-xl p-3.5 shadow-inner">
              <img
                src={currentPokemon.spriteUrl || currentPokemon.artworkUrl}
                alt={currentPokemon.name}
                className="w-14 h-14 object-contain filter drop-shadow-md animate-pulse shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-slate-500">#{String(currentPokemon.dexNumber).padStart(3, '0')}</span>
                  <h3 className="text-base font-extrabold text-white truncate">{currentPokemon.name}</h3>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[11px] text-indigo-400 font-mono font-bold bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                    Catch Rate: {currentPokemon.catchRate}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    Peso: {currentPokemon.weightKg} kg
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Popular Presets Pills */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">Acceso Rápido:</span>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {popularPresets.map(preset => (
                  <button
                    key={preset.id}
                    onClick={() => {
                      const found = COBBLEMON_POKEDEX.find(p => p.id === preset.id);
                      if (found) handleSelectPokemon(found);
                    }}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedPokemonId === preset.id
                        ? 'bg-indigo-500 text-white font-bold shadow-md shadow-indigo-500/20'
                        : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    <span>{preset.icon}</span>
                    <span>{preset.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Autocomplete Input */}
            <div className="relative pt-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Escribe para buscar cualquier Pokémon (ej: Pikachu, 150)..."
                  value={searchQuery}
                  onFocus={() => setIsDropdownOpen(true)}
                  onChange={e => {
                    setSearchQuery(e.target.value);
                    setIsDropdownOpen(true);
                  }}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-9 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Floating Results Popover */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl z-50 max-h-64 overflow-y-auto divide-y divide-slate-800/60 animate-in fade-in duration-150">
                  {filteredOptions.length === 0 ? (
                    <div className="p-4 text-center text-xs text-slate-400">
                      No se encontraron Pokémon con ese nombre o número.
                    </div>
                  ) : (
                    filteredOptions.map(p => (
                      <div
                        key={p.id}
                        onClick={() => handleSelectPokemon(p)}
                        className={`flex items-center justify-between p-3 cursor-pointer transition-colors ${
                          p.id === selectedPokemonId
                            ? 'bg-indigo-500/20 text-white font-bold'
                            : 'hover:bg-slate-800/80 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img src={p.spriteUrl || p.artworkUrl} alt={p.name} className="w-8 h-8 object-contain" />
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[11px] font-mono text-slate-500">#{String(p.dexNumber).padStart(3, '0')}</span>
                              <span className="text-xs font-bold">{p.name}</span>
                            </div>
                            <div className="flex items-center gap-1 mt-0.5">
                              {p.types.map(t => (
                                <span key={t} className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-slate-800 text-slate-300">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-[11px] font-mono font-bold text-indigo-400">Rate: {p.catchRate}</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

          </div>

          {/* HP & Status Sliders */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-5 backdrop-blur-md">
            
            {/* HP Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-300 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-400" /> Salud Restante del Pokémon (HP)
                </span>
                <span className="font-mono font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                  {hpPercent}% HP
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={hpPercent}
                onChange={e => setHpPercent(Number(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>1% (Rojo)</span>
                <span>50% (Amarillo)</span>
                <span>100% (Verde)</span>
              </div>
            </div>

            {/* Status Condition Selector */}
            <div className="space-y-2 pt-3 border-t border-slate-800/80">
              <label className="block text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-indigo-400" /> Estado Alterado Aplicado
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs font-semibold">
                <button
                  onClick={() => setStatus('none')}
                  className={`py-2 px-2 rounded-xl border transition-all ${
                    status === 'none'
                      ? 'bg-slate-800 text-white border-slate-600'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  Ninguno (1.0x)
                </button>

                <button
                  onClick={() => setStatus('sleep')}
                  className={`py-2 px-2 rounded-xl border transition-all ${
                    status === 'sleep' || status === 'freeze'
                      ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/50 font-bold'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  😴 Sueño (2.5x)
                </button>

                <button
                  onClick={() => setStatus('paralysis')}
                  className={`py-2 px-2 rounded-xl border transition-all ${
                    status === 'paralysis' || status === 'poison' || status === 'burn'
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 font-bold'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  ⚡ Parálisis (1.5x)
                </button>
              </div>
            </div>

            {/* Context Toggles */}
            <div className="space-y-2 pt-3 border-t border-slate-800/80">
              <label className="block text-xs font-bold text-slate-300">
                Condiciones de Entorno & Combate
              </label>

              <div className="space-y-2 text-xs">
                <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 cursor-pointer hover:border-slate-700">
                  <span className="text-slate-300 flex items-center gap-2">
                    🌙 ¿Es de Noche o dentro de Cueva?
                  </span>
                  <input
                    type="checkbox"
                    checked={isNightOrCave}
                    onChange={e => setIsNightOrCave(e.target.checked)}
                    className="w-4 h-4 accent-cyan-500 rounded cursor-pointer"
                  />
                </label>

                <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 cursor-pointer hover:border-slate-700">
                  <span className="text-slate-300 flex items-center gap-2">
                    ⚡ ¿Lanzar en Turno 1? (Quick Ball)
                  </span>
                  <input
                    type="checkbox"
                    checked={isTurnOne}
                    onChange={e => setIsTurnOne(e.target.checked)}
                    className="w-4 h-4 accent-cyan-500 rounded cursor-pointer"
                  />
                </label>

                <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 cursor-pointer hover:border-slate-700">
                  <span className="text-slate-300 flex items-center gap-2">
                    📖 ¿Especie ya registrada previamente?
                  </span>
                  <input
                    type="checkbox"
                    checked={hasCaughtBefore}
                    onChange={e => setHasCaughtBefore(e.target.checked)}
                    className="w-4 h-4 accent-cyan-500 rounded cursor-pointer"
                  />
                </label>
              </div>
            </div>

          </div>

        </div>

        {/* Right Column: Ranked Recommendations & Best Ball Banner */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Best Ball Recommendation Spotlight */}
          {bestBall && (
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-900 border border-emerald-500/40 p-5 shadow-xl shadow-emerald-500/10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-2 flex items-center justify-center shrink-0">
                  <img src={bestBall.ball.icon} alt={bestBall.ball.name} className="w-12 h-12 object-contain animate-bounce" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      🏆 Mejor Elección Recomendada
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Mult: {bestBall.multiplier}x</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white">
                    {bestBall.ball.name}
                  </h3>
                  <p className="text-xs text-slate-300">
                    Probabilidad de captura de <strong className="text-emerald-400 text-sm font-extrabold">{bestBall.catchChance}%</strong> (~{bestBall.expectedThrows} {bestBall.expectedThrows === 1 ? 'lanzamiento' : 'lanzamientos'})
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Full Ranked Table */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-4 backdrop-blur-md">
            <h3 className="text-sm font-bold text-slate-200 flex items-center justify-between">
              <span>Ranking Completo de Pokébolas para {currentPokemon.name}</span>
              <span className="text-xs text-slate-500 font-normal">Gen 8/9 Formula</span>
            </h3>

            <div className="space-y-2.5">
              {ballRankings.map((item, idx) => (
                <div
                  key={item.ball.id}
                  className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                    idx === 0
                      ? 'bg-slate-950 border-emerald-500/40 shadow-sm shadow-emerald-500/10'
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-slate-500 w-4 text-center">#{idx + 1}</span>
                    <img src={item.ball.icon} alt={item.ball.name} className="w-8 h-8 object-contain" />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-white">{item.ball.name}</h4>
                        <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300">
                          {item.multiplier}x
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                        {item.ball.description}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-sm font-extrabold text-cyan-400 font-mono">
                      {item.catchChance}%
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">
                      ~{item.expectedThrows} {item.expectedThrows === 1 ? 'tiro' : 'tiros'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
