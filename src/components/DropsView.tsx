import React, { useState } from 'react';
import { Gem, Search, Sparkles, Filter, ShieldCheck } from 'lucide-react';
import { COBBLEMON_DROPS } from '../data/cobblemonDrops';

export const DropsView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lootingLevel, setLootingLevel] = useState<number>(0);

  const filteredDrops = COBBLEMON_DROPS.filter(drop => {
    if (searchQuery.trim() === '') return true;
    const q = searchQuery.toLowerCase();
    const matchPokemon = drop.pokemonName.toLowerCase().includes(q);
    const matchItem = drop.drops.some(item => item.name.toLowerCase().includes(q) || item.itemId.toLowerCase().includes(q));
    return matchPokemon || matchItem;
  });

  return (
    <div className="space-y-6">
      
      {/* Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-amber-950/40 border border-slate-800 p-6 sm:p-8">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Gem className="w-3.5 h-3.5" />
            <span>Loot Tables & Recompensas • Cobblemon</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Tabla de Drops y Objetos de Pokémon
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Consulta qué materiales, piedras de evolución y objetos raros obtienes al derrotar o capturar Pokémon en Diosesmon.
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-4 backdrop-blur-md">
        
        {/* Search */}
        <div className="sm:col-span-2 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar por Pokémon o Ítem (ej: Leftovers, Diamond, Thunder Stone)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>

        {/* Looting Level */}
        <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1">
          <span className="text-[11px] font-bold text-slate-400 px-2">Saqueo:</span>
          {[0, 1, 2, 3].map(lvl => (
            <button
              key={lvl}
              onClick={() => setLootingLevel(lvl)}
              className={`flex-1 py-1 text-xs font-bold rounded-lg transition-all ${
                lootingLevel === lvl
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              Lvl {lvl}
            </button>
          ))}
        </div>

      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDrops.map(entry => (
          <div
            key={entry.pokemonId}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-lg hover:border-amber-500/40 transition-all"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="text-amber-400">💎</span> {entry.pokemonName}
              </h3>
              <span className="text-xs text-slate-500 font-mono">{entry.drops.length} ítems</span>
            </div>

            <div className="space-y-2.5">
              {entry.drops.map(item => {
                const effectiveChance = Math.min(100, item.percentage + lootingLevel * 3);

                return (
                  <div
                    key={item.itemId}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg">{item.icon}</span>
                      <div>
                        <h4 className="font-bold text-slate-200">{item.name}</h4>
                        <p className="text-[10px] text-slate-500 font-mono">
                          Cant: {item.minQuantity} - {item.maxQuantity + (lootingLevel > 0 ? 1 : 0)}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-mono font-bold text-amber-400 text-sm">
                        {effectiveChance}%
                      </span>
                      {lootingLevel > 0 && (
                        <div className="text-[9px] text-emerald-400 font-medium">
                          +{lootingLevel * 3}% Saqueo
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
