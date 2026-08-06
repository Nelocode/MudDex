import React, { useState } from 'react';
import { Search, BookOpen, Sparkles, Filter, ArrowUpRight, Compass } from 'lucide-react';
import { COBBLEMON_POKEDEX } from '../data/cobblemonPokedex';
import { PokemonType, Pokemon } from '../types/diosesmon';

interface PokedexViewProps {
  onSelectPokemonForCalculator: (pokemonId: string) => void;
  onSelectPokemonForSpawns: (pokemonId: string) => void;
}

export const PokedexView: React.FC<PokedexViewProps> = ({
  onSelectPokemonForCalculator,
  onSelectPokemonForSpawns
}) => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedGen, setSelectedGen] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  const filteredPokemon = COBBLEMON_POKEDEX.filter(p => {
    if (selectedType !== 'all' && !p.types.includes(selectedType as PokemonType)) return false;
    if (selectedGen !== 'all' && p.generation !== selectedGen) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchDex = String(p.dexNumber).includes(q);
      if (!matchName && !matchDex) return false;
    }
    return true;
  });

  const TYPES: PokemonType[] = [
    'normal', 'fire', 'water', 'grass', 'electric', 'ice',
    'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug',
    'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
  ];

  return (
    <div className="space-y-6">
      
      {/* Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-sky-950/40 border border-slate-800 p-6 sm:p-8">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Directorio Oficial de Especies • Cobblemon</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Pokédex & Estadísticas de Diosesmon
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Explora las estadísticas base, habilidades, multiplicadores de captura y variantes Alpha disponibles en el modpack.
          </p>
        </div>
      </div>

      {/* Control Bar: Type Pills & Search */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-4 backdrop-blur-md">
        
        {/* Search & Gen Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="sm:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por Nombre o Número de Dex..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>

          <select
            value={selectedGen}
            onChange={e => setSelectedGen(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-300 focus:outline-none focus:border-sky-500 cursor-pointer"
          >
            <option value="all">Todas las Generaciones</option>
            <option value="1">Gen 1 - Kanto</option>
            <option value="2">Gen 2 - Johto</option>
            <option value="3">Gen 3 - Hoenn</option>
            <option value="4">Gen 4 - Sinnoh</option>
            <option value="6">Gen 6 - Kalos</option>
            <option value="7">Gen 7 - Alola</option>
            <option value="8">Gen 8 - Galar</option>
            <option value="9">Gen 9 - Paldea</option>
          </select>
        </div>

        {/* Type Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setSelectedType('all')}
            className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
              selectedType === 'all'
                ? 'bg-sky-500 text-slate-950 font-bold'
                : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            Todos los Tipos
          </button>
          {TYPES.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase whitespace-nowrap transition-all ${
                selectedType === type
                  ? 'bg-sky-500 text-slate-950'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPokemon.map(p => (
          <div
            key={p.id}
            onClick={() => setSelectedPokemon(p)}
            className="group bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-sky-500/50 rounded-2xl p-4 transition-all duration-300 cursor-pointer space-y-3 shadow-lg hover:shadow-sky-500/5"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-500">#{String(p.dexNumber).padStart(3, '0')}</span>
              {p.isAlphaAvailable && (
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40">
                  🔥 Alpha
                </span>
              )}
            </div>

            <div className="w-full h-28 bg-slate-950/80 border border-slate-800 rounded-xl p-2 flex items-center justify-center group-hover:scale-110 transition-transform">
              <img
                src={p.spriteUrl || p.artworkUrl}
                alt={p.name}
                className="max-h-full max-w-full object-contain filter drop-shadow-md"
              />
            </div>

            <div>
              <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                {p.name}
              </h3>
              <div className="flex items-center gap-1.5 mt-1">
                {p.types.map(t => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Catch Rate: <strong className="text-slate-200">{p.catchRate}</strong></span>
              <span>Gen {p.generation}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail */}
      {selectedPokemon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5 shadow-2xl relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono font-bold text-slate-500">#{String(selectedPokemon.dexNumber).padStart(3, '0')}</span>
                <h3 className="text-xl font-bold text-white">{selectedPokemon.name}</h3>
              </div>
              <button
                onClick={() => setSelectedPokemon(null)}
                className="text-slate-500 hover:text-slate-300 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="w-full h-40 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-center p-4">
              <img
                src={selectedPokemon.artworkUrl || selectedPokemon.spriteUrl}
                alt={selectedPokemon.name}
                className="max-h-full object-contain drop-shadow-xl"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-500 block">Tasa de Captura:</span>
                <span className="font-bold text-sky-400 text-sm">{selectedPokemon.catchRate} / 255</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-500 block">Peso & Altura:</span>
                <span className="font-bold text-slate-200 text-sm">{selectedPokemon.weightKg} kg • {selectedPokemon.heightM} m</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  onSelectPokemonForCalculator(selectedPokemon.id);
                  setSelectedPokemon(null);
                }}
                className="flex-1 py-2.5 px-3 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 font-bold text-xs border border-indigo-500/40 transition-colors flex items-center justify-center gap-1.5"
              >
                <ArrowUpRight className="w-4 h-4" /> Calcular Captura
              </button>

              <button
                onClick={() => {
                  onSelectPokemonForSpawns(selectedPokemon.id);
                  setSelectedPokemon(null);
                }}
                className="flex-1 py-2.5 px-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-bold text-xs border border-cyan-500/40 transition-colors flex items-center justify-center gap-1.5"
              >
                <Compass className="w-4 h-4" /> Ver Radar de Spawns
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
