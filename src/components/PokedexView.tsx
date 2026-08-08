import React, { useState, useMemo } from 'react';
import { Search, BookOpen, Sparkles, Filter, ArrowUpRight, Compass, Volume2, Gem, ChevronLeft, ChevronRight } from 'lucide-react';
import { COBBLEMON_POKEDEX } from '../data/cobblemonPokedex';
import { PokemonType, Pokemon } from '../types/diosesmon';

interface PokedexViewProps {
  onSelectPokemonForCalculator: (pokemonId: string) => void;
  onSelectPokemonForSpawns: (pokemonId: string) => void;
}

const ITEMS_PER_PAGE = 24;

export const PokedexView: React.FC<PokedexViewProps> = ({
  onSelectPokemonForCalculator,
  onSelectPokemonForSpawns
}) => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedGen, setSelectedGen] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [isShiny, setIsShiny] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const filteredPokemon = useMemo(() => {
    return COBBLEMON_POKEDEX.filter(p => {
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
  }, [selectedType, selectedGen, searchQuery]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredPokemon.length / ITEMS_PER_PAGE);
  const paginatedPokemon = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPokemon.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredPokemon, currentPage]);

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  const handlePlayCry = (audioUrl?: string) => {
    if (!audioUrl) return;
    try {
      setIsPlayingAudio(true);
      const audio = new Audio(audioUrl);
      audio.volume = 0.6;
      audio.play().catch(() => {});
      audio.onended = () => setIsPlayingAudio(false);
    } catch (err) {
      setIsPlayingAudio(false);
    }
  };

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
            <span>Directorio Oficial de Especies • 1,025 Pokémon</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Pokédex & Compendio de Diosesmon
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Consulta estadísticas base, animaciones variocolor (Shiny), audios de grito y atajos de captura para todos los Pokémon del modpack.
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
              placeholder="Buscar por Nombre o Número de Dex (ej: Pikachu, 150)..."
              value={searchQuery}
              onChange={e => handleSearchChange(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>

          <select
            value={selectedGen}
            onChange={e => {
              setSelectedGen(e.target.value === 'all' ? 'all' : Number(e.target.value));
              setCurrentPage(1);
            }}
            className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-300 focus:outline-none focus:border-sky-500 cursor-pointer"
          >
            <option value="all">Todas las Generaciones (Gen 1 - 9)</option>
            <option value="1">Gen 1 - Kanto</option>
            <option value="2">Gen 2 - Johto</option>
            <option value="3">Gen 3 - Hoenn</option>
            <option value="4">Gen 4 - Sinnoh</option>
            <option value="5">Gen 5 - Unova</option>
            <option value="6">Gen 6 - Kalos</option>
            <option value="7">Gen 7 - Alola</option>
            <option value="8">Gen 8 - Galar</option>
            <option value="9">Gen 9 - Paldea</option>
          </select>
        </div>

        {/* Type Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => {
              setSelectedType('all');
              setCurrentPage(1);
            }}
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
              onClick={() => {
                setSelectedType(type);
                setCurrentPage(1);
              }}
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

      {/* Pagination Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-1">
        <span className="text-xs text-slate-400">
          Mostrando <strong className="text-sky-400 font-bold">{filteredPokemon.length}</strong> especie(s) Pokémon
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paginatedPokemon.map(p => (
          <div
            key={p.id}
            onClick={() => {
              setSelectedPokemon(p);
              setIsShiny(false);
            }}
            className="group bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-sky-500/50 rounded-2xl p-4 transition-all duration-300 cursor-pointer space-y-3 shadow-lg hover:shadow-sky-500/5 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-500">#{String(p.dexNumber).padStart(3, '0')}</span>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                  Gen {p.generation}
                </span>
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
                <span className="text-[10px] text-slate-400 font-medium block">
                  {p.categoryTitle || 'Especie Pokémon'}
                </span>
                <div className="flex items-center gap-1.5 mt-1.5">
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
            </div>

            <div className="pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Catch Rate: <strong className="text-sky-400">{p.catchRate}</strong></span>
              <span className="text-[10px] text-slate-500">Ver Ficha →</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail */}
      {selectedPokemon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono font-bold text-slate-500">#{String(selectedPokemon.dexNumber).padStart(3, '0')}</span>
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedPokemon.name}</h3>
                  <span className="text-xs text-slate-400">{selectedPokemon.categoryTitle || 'Especie Pokémon'}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedPokemon(null)}
                className="text-slate-500 hover:text-slate-300 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            {/* Display Box with Shiny & Audio Cry Toggles */}
            <div className="w-full h-44 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-center p-4 relative group">
              
              {/* Shiny Toggle */}
              <button
                onClick={() => setIsShiny(!isShiny)}
                className={`absolute top-3 left-3 px-2.5 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1 border ${
                  isShiny
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/30'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" /> {isShiny ? '✨ Variocolor (Shiny)' : 'Ver Shiny'}
              </button>

              {/* Audio Cry Button */}
              <button
                onClick={() => handlePlayCry(selectedPokemon.audioCryUrl)}
                className={`absolute top-3 right-3 p-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 border ${
                  isPlayingAudio
                    ? 'bg-sky-500 text-slate-950 border-sky-400 animate-pulse'
                    : 'bg-slate-900 text-sky-400 border-slate-800 hover:bg-slate-800'
                }`}
                title="Escuchar grito oficial del Pokémon"
              >
                <Volume2 className="w-4 h-4" />
              </button>

              <img
                src={
                  isShiny
                    ? (selectedPokemon.shinySpriteUrl || selectedPokemon.spriteUrl)
                    : (selectedPokemon.spriteUrl || selectedPokemon.artworkUrl)
                }
                alt={selectedPokemon.name}
                className="max-h-full object-contain filter drop-shadow-xl"
              />
            </div>

            {/* General Specs */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-500 block">Tasa de Captura (Catch Rate):</span>
                <span className="font-bold text-sky-400 text-sm">{selectedPokemon.catchRate} / 255</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-500 block">Peso & Altura:</span>
                <span className="font-bold text-slate-200 text-sm">{selectedPokemon.weightKg} kg • {selectedPokemon.heightM} m</span>
              </div>
            </div>

            {/* Base Stats Bars */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-400 font-bold mb-1">
                <span>Estadísticas Base</span>
                <span className="text-sky-400 font-mono">
                  Total: {Object.values(selectedPokemon.baseStats).reduce((a, b) => a + b, 0)}
                </span>
              </div>

              {Object.entries(selectedPokemon.baseStats).map(([stat, val]) => (
                <div key={stat} className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="uppercase text-slate-400 font-mono">{stat}:</span>
                    <span className="font-bold font-mono text-slate-200">{val}</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full"
                      style={{ width: `${Math.min(100, (val / 160) * 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Navigation Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => {
                  onSelectPokemonForCalculator(selectedPokemon.id);
                  setSelectedPokemon(null);
                }}
                className="py-2.5 px-3 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 font-bold text-xs border border-indigo-500/40 transition-colors flex items-center justify-center gap-1.5"
              >
                <ArrowUpRight className="w-4 h-4" /> Optimizador Pokébolas
              </button>

              <button
                onClick={() => {
                  onSelectPokemonForSpawns(selectedPokemon.id);
                  setSelectedPokemon(null);
                }}
                className="py-2.5 px-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-bold text-xs border border-cyan-500/40 transition-colors flex items-center justify-center gap-1.5"
              >
                <Compass className="w-4 h-4" /> Radar & Hábitat
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
