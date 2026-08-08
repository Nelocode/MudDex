import React, { useState } from 'react';
import { Package, Search, Sparkles, Shield, Zap } from 'lucide-react';
import { COBBLEMON_HELD_ITEMS } from '../data/cobblemonHeldItems';

export const HeldItemsView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const filteredItems = COBBLEMON_HELD_ITEMS.filter(item => {
    if (selectedCat !== 'all' && item.category !== selectedCat) return false;
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.battleEffect.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6">
      
      {/* Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-amber-950/40 border border-slate-800 p-6 sm:p-8">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Package className="w-3.5 h-3.5" />
            <span>Objetos & Bayas • Cobblemon</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Enciclopedia de Objetos Equipables & Bayas
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Efectos en combate, bonificadores de daño y métodos de obtención en Diosesmon para objetos clave (*Vidaesfera, Restos, Gafas Elegidas, Banda Focus, Bayas*).
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar objeto o efecto (ej: Vidaesfera, Restos, Gafas, Baya)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {[
            { id: 'all', label: 'Todos los Objetos' },
            { id: 'competitive', label: '⚔️ Competitivos' },
            { id: 'berry', label: '🫐 Bayas Curativas' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCat === cat.id
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map(item => (
          <div
            key={item.id}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-lg hover:border-amber-500/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="text-base font-bold text-white">{item.name}</h3>
                    <span className="text-xs text-amber-400 font-mono capitalize">{item.category}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {item.description}
              </p>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 space-y-1 text-xs">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">⚔️ Efecto en Batalla:</span>
                <p className="text-slate-200 font-medium">{item.battleEffect}</p>
              </div>

              <div className="bg-slate-950/60 border border-slate-800/60 rounded-xl p-2.5 text-xs text-slate-400">
                <strong className="text-slate-300">Obtención:</strong> {item.howToObtain}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
