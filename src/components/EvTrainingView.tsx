import React, { useState } from 'react';
import { Activity } from 'lucide-react';
import { COBBLEMON_EV_SPOTS } from '../data/cobblemonEvGuide';

export const EvTrainingView: React.FC = () => {
  const [selectedStat, setSelectedStat] = useState<string>('all');

  const filteredSpots = COBBLEMON_EV_SPOTS.filter(spot => {
    if (selectedStat !== 'all' && spot.stat !== selectedStat) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      
      {/* Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-red-950/40 border border-zinc-800 p-4 sm:p-6 md:p-8">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-[11px] sm:text-xs font-semibold max-w-full truncate">
            <Activity className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Entrenamiento de EVs • Cobblemon</span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
            Guía de Farming de Puntos de Esfuerzo (EVs)
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Descubre en qué biomas y qué Pokémon salvajes derrotar en Diosesmon para subir rápidamente tus estadísticas de Atk, Vel, SpA, HP o Def (+2 a +10 EVs por combate con Objetos Recios).
          </p>
        </div>
      </div>

      {/* Stat Selector Pills */}
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 flex items-center gap-2 overflow-x-auto">
        <button
          onClick={() => setSelectedStat('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            selectedStat === 'all'
              ? 'bg-red-600 text-white font-bold'
              : 'bg-zinc-950 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
          }`}
        >
          Todas las Estadísticas
        </button>
        {COBBLEMON_EV_SPOTS.map(spot => (
          <button
            key={spot.stat}
            onClick={() => setSelectedStat(spot.stat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              selectedStat === spot.stat
                ? 'bg-red-600 text-white font-bold'
                : 'bg-zinc-950 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
            }`}
          >
            <span>{spot.icon}</span>
            <span>{spot.statNameEs}</span>
          </button>
        ))}
      </div>

      {/* EV Spots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredSpots.map(spot => (
          <div
            key={spot.stat}
            className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-5 space-y-4 shadow-lg hover:border-red-500/40 transition-all"
          >
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{spot.icon}</span>
                <div>
                  <h3 className="text-base font-bold text-white">{spot.statNameEs}</h3>
                  <span className="text-xs text-red-400 font-mono font-bold">{spot.powerItemName}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">Pokémon Recomendados para Farmear:</span>
              <div className="space-y-2">
                {spot.bestTargets.map(t => (
                  <div key={t.pokemonId} className="flex items-center justify-between bg-zinc-950 border border-zinc-800/80 rounded-xl p-3 text-xs">
                    <div>
                      <h4 className="font-bold text-zinc-200">{t.pokemonName}</h4>
                      <span className="text-[10px] text-zinc-400 font-mono">{t.biome} • {t.spawnTime}</span>
                    </div>
                    <span className="px-2.5 py-1 text-xs font-mono font-extrabold rounded-lg bg-red-600/20 text-red-300 border border-red-500/30">
                      +{t.evYield} EV
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
