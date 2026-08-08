import React, { useState } from 'react';
import { Trophy, Award, Shield, Zap, Search } from 'lucide-react';
import { COBBLEMON_TIER_LIST } from '../data/cobblemonTierList';

export const TierListView: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTiers = COBBLEMON_TIER_LIST.filter(item => {
    if (selectedTier !== 'all' && item.tier !== selectedTier) return false;
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.pokemonName.toLowerCase().includes(q) ||
      item.role.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    );
  });

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case 'S+':
        return <span className="px-3 py-1 text-xs font-black uppercase rounded-xl bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30">S+ Tier</span>;
      case 'S':
        return <span className="px-3 py-1 text-xs font-bold uppercase rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/40">S Tier</span>;
      case 'A':
        return <span className="px-3 py-1 text-xs font-bold uppercase rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">A Tier</span>;
      default:
        return <span className="px-3 py-1 text-xs font-bold uppercase rounded-xl bg-slate-800 text-slate-400">B Tier</span>;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-purple-950/40 border border-slate-800 p-6 sm:p-8">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold">
            <Trophy className="w-3.5 h-3.5" />
            <span>Tier List Competitiva • Diosesmon PvP</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Tier List & Roles de Batalla Competitivos
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Clasificación oficial de los mejores Pokémon para PvP/PvE en Diosesmon: movsets recomendados, naturalezas e ítems de equipamiento.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar por Pokémon o rol (ej: Mewtwo, Garchomp, Sweeper, Tank)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {['all', 'S+', 'S', 'A', 'B'].map(tier => (
            <button
              key={tier}
              onClick={() => setSelectedTier(tier)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedTier === tier
                  ? 'bg-purple-500 text-white font-bold shadow-md shadow-purple-500/30'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {tier === 'all' ? 'Todas las Tiers' : `Tier ${tier}`}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTiers.map(item => (
          <div
            key={item.pokemonId}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-lg hover:border-purple-500/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-base font-extrabold text-white">{item.pokemonName}</h3>
                  <span className="text-xs text-purple-400 font-mono font-bold block">{item.role}</span>
                </div>
                {getTierBadge(item.tier)}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {item.description}
              </p>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 space-y-1.5 text-xs">
                <div><span className="text-slate-500">Naturaleza:</span> <strong className="text-slate-200">{item.recommendedNature}</strong></div>
                <div><span className="text-slate-500">Objeto:</span> <strong className="text-amber-400">{item.recommendedItem}</strong></div>
                <div>
                  <span className="text-slate-500 block mb-1">Movimientos Recomendados:</span>
                  <div className="flex flex-wrap gap-1">
                    {item.keyMoves.map(m => (
                      <span key={m} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-cyan-300">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
