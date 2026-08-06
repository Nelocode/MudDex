import React, { useState, useMemo } from 'react';
import { Gem, Search, Sparkles, Filter, ShieldCheck, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { COBBLEMON_DROPS } from '../data/cobblemonDrops';

const ITEMS_PER_PAGE = 24;

export const DropsView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lootingLevel, setLootingLevel] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const popularItemFilters = [
    { label: '🔮 Vidaesfera (Life Orb)', query: 'Vidaesfera' },
    { label: '🍎 Restos (Leftovers)', query: 'Restos' },
    { label: '👓 Gafas Elegidas', query: 'Gafas Elegidas' },
    { label: '🎗️ Cinta Elegida', query: 'Cinta Elegida' },
    { label: '🧣 Pañuelo Elegido', query: 'Pañuelo' },
    { label: '🪖 Casco Dentado', query: 'Casco Dentado' },
    { label: '👢 Botas Gruesas', query: 'Botas Gruesas' },
    { label: '⚡ Piedras Evolutivas', query: 'Piedra' }
  ];

  const filteredDrops = useMemo(() => {
    if (searchQuery.trim() === '') return COBBLEMON_DROPS;
    const q = searchQuery.toLowerCase();
    return COBBLEMON_DROPS.filter(drop => {
      const matchPokemon = drop.pokemonName.toLowerCase().includes(q) || drop.pokemonId.toLowerCase().includes(q);
      const matchItem = drop.drops.some(item =>
        item.name.toLowerCase().includes(q) ||
        item.itemId.toLowerCase().includes(q)
      );
      return matchPokemon || matchItem;
    });
  }, [searchQuery]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredDrops.length / ITEMS_PER_PAGE);
  const paginatedDrops = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredDrops.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredDrops, currentPage]);

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-6">
      
      {/* Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-amber-950/40 border border-slate-800 p-6 sm:p-8">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Gem className="w-3.5 h-3.5" />
            <span>Loot Tables & Recompensas • 1,025 Pokémon</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Tabla de Drops y Objetos de Pokémon
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Explora los drops completos de los 1,025 Pokémon de Diosesmon. Filtra por Vidaesfera, Piedras de Evolución, Objetos Competitivos o por el nombre de cualquier especie.
          </p>
        </div>
      </div>

      {/* Controls & Quick Filters */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4 backdrop-blur-md">
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Search Input */}
          <div className="sm:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por Pokémon u objeto (ej: Vidaesfera, Pikachu, Restos, Piedra Fuego)..."
              value={searchQuery}
              onChange={e => handleSearchChange(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-9 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => handleSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Looting Level */}
          <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1">
            <span className="text-[11px] font-bold text-slate-400 px-2">Saqueo:</span>
            {[0, 1, 2, 3].map(lvl => (
              <button
                key={lvl}
                onClick={() => setLootingLevel(lvl)}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
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

        {/* Quick Item Filter Pills */}
        <div className="space-y-1.5 pt-1">
          <span className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">Filtro Rápido de Objetos Competitivos:</span>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {popularItemFilters.map(filter => (
              <button
                key={filter.query}
                onClick={() => handleSearchChange(filter.query)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  searchQuery.toLowerCase() === filter.query.toLowerCase()
                    ? 'bg-amber-500 text-slate-950 font-extrabold border-amber-400 shadow-md shadow-amber-500/20'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border-slate-800'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Results Bar & Pagination Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-1">
        <span className="text-xs text-slate-400">
          Encontrados <strong className="text-amber-400 font-bold">{filteredDrops.length}</strong> Pokémon con tabla de drops {searchQuery && `para "${searchQuery}"`}
        </span>

        {totalPages > 1 && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-slate-400">
              Página <strong className="text-white">{currentPage}</strong> de {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedDrops.length === 0 ? (
          <div className="col-span-full bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center space-y-2">
            <p className="text-sm font-bold text-slate-300">No se encontraron Pokémon con ese objeto o nombre.</p>
            <p className="text-xs text-slate-500">Intenta buscar "Vidaesfera", "Restos", "Piedra Trueno" o el nombre de cualquier Pokémon.</p>
          </div>
        ) : (
          paginatedDrops.map(entry => (
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
          ))
        )}
      </div>

      {/* Bottom Pagination controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 pt-4 border-t border-slate-800/80">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> Anterior
          </button>

          <span className="text-xs font-mono text-slate-400">
            Página <strong className="text-amber-400 font-bold">{currentPage}</strong> de {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
          >
            Siguiente <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
};
