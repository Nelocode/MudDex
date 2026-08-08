import React, { useState } from 'react';
import { Scroll, Search, Zap, ShieldAlert, Award } from 'lucide-react';
import { COBBLEMON_MOVES } from '../data/cobblemonMoves';
import { PokemonType } from '../types/diosesmon';

export const MovesCompendiumView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredMoves = COBBLEMON_MOVES.filter(m => {
    if (selectedType !== 'all' && m.type !== selectedType) return false;
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      m.name.toLowerCase().includes(q) ||
      m.effect.toLowerCase().includes(q) ||
      (m.tmItemName && m.tmItemName.toLowerCase().includes(q)) ||
      m.learnedBy.some(p => p.toLowerCase().includes(q))
    );
  });

  return (
    <div className="space-y-6">
      
      {/* Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-purple-950/40 border border-slate-800 p-6 sm:p-8">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold">
            <Scroll className="w-3.5 h-3.5" />
            <span>Compendio de MTs & Movimientos • Cobblemon</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Buscador de Movimientos, MTs y Movimientos Clave
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Encuentra movimientos esenciales para captura (ej: *Falsotorta*, *Espora*, *Onda Trueno*) y para combate en Diosesmon.
          </p>
        </div>
      </div>

      {/* Search & Type Filter */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar movimiento por nombre o Pokémon que lo aprende (ej: Falsotorta, Espora, Scizor)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
          />
        </div>
      </div>

      {/* Moves Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredMoves.map(move => (
          <div
            key={move.id}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-lg hover:border-purple-500/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-base font-bold text-white">{move.name}</h3>
                  {move.tmItemName && (
                    <span className="text-xs text-purple-400 font-mono font-bold block mt-0.5">
                      📜 {move.tmItemName}
                    </span>
                  )}
                </div>
                <span className="px-2.5 py-1 text-xs font-bold uppercase rounded-lg bg-slate-950 text-slate-300 border border-slate-800">
                  {move.type}
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span>Potencia: <strong className="text-white">{move.power !== null ? move.power : '—'}</strong></span>
                <span>Precisión: <strong className="text-white">{move.accuracy !== null ? `${move.accuracy}%` : '—'}</strong></span>
                <span>PP: <strong className="text-white">{move.pp}</strong></span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-800/80">
                {move.effect}
              </p>

              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-bold uppercase text-slate-500">Pokémon Principales que lo Aprenden:</span>
                <div className="flex flex-wrap gap-1">
                  {move.learnedBy.map(p => (
                    <span key={p} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-300">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
