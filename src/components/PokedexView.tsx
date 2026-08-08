import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, Sparkles, Volume2, Target, Compass, BookOpen } from 'lucide-react';
import { COBBLEMON_POKEDEX } from '../data/cobblemonPokedex';
import { Pokemon, PokemonType } from '../types/diosesmon';

interface PokedexViewProps {
  onSelectPokemonForCalculator: (pokemonId: string) => void;
  onSelectPokemonForSpawns: (pokemonId: string) => void;
}

export const PokedexView: React.FC<PokedexViewProps> = ({
  onSelectPokemonForCalculator,
  onSelectPokemonForSpawns
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedGen, setSelectedGen] = useState<number | 'all'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [isShiny, setIsShiny] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const ITEMS_PER_PAGE = 24;

  const filteredPokemon = COBBLEMON_POKEDEX.filter(p => {
    if (selectedType !== 'all' && !p.types.includes(selectedType as PokemonType)) return false;
    if (selectedGen !== 'all' && p.generation !== selectedGen) return false;
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.id.toLowerCase().includes(q) ||
      String(p.dexNumber).includes(q)
    );
  });

  const totalPages = Math.ceil(filteredPokemon.length / ITEMS_PER_PAGE);

  const paginatedPokemon = filteredPokemon.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

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
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-red-950/40 border border-zinc-800 p-6 sm:p-8">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Directorio Oficial de Especies • 1,025 Pokémon</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Pokédex & Compendio de Diosesmon
          </h1>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Consulta estadísticas base, animaciones variocolor (Shiny), audios de grito y atajos de captura para todos los Pokémon del modpack.
          </p>
        </div>
      </div>

      {/* Control Bar: Type Pills & Search */}
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 space-y-4 backdrop-blur-md">
        
        {/* Search & Gen Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="sm:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Buscar por Nombre o Número de Dex (ej: Pikachu, 150)..."
              value={searchQuery}
              onChange={e => handleSearchChange(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>

          <select
            value={selectedGen}
            onChange={e => {
              setSelectedGen(e.target.value === 'all' ? 'all' : Number(e.target.value));
              setCurrentPage(1);
            }}
            className="bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs sm:text-sm text-zinc-300 focus:outline-none focus:border-red-500 cursor-pointer"
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
                ? 'bg-red-600 text-white font-bold'
                : 'bg-zinc-950 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
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
                  ? 'bg-red-600 text-white'
                  : 'bg-zinc-950 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

      </div>

      {/* Pagination Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-1">
        <span className="text-xs text-zinc-400">
          Mostrando <strong className="text-red-400 font-bold">{filteredPokemon.length}</strong> especie(s) Pokémon
        </span>

        {totalPages > 1 && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-zinc-400">
              Página <strong className="text-white">{currentPage}</strong> de {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed"
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
            className="group bg-zinc-900/80 hover:bg-zinc-900 border border-zinc-800 hover:border-red-500/50 rounded-2xl p-4 transition-all duration-300 cursor-pointer space-y-3 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-zinc-500">#{String(p.dexNumber).padStart(3, '0')}</span>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
                  Gen {p.generation}
                </span>
              </div>

              <div className="w-full h-28 bg-zinc-950/80 border border-zinc-800 rounded-xl p-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img
                  src={p.spriteUrl || p.artworkUrl}
                  alt={p.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow-md"
                />
              </div>

              <div>
                <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors">
                  {p.name}
                </h3>
                <span className="text-[10px] text-zinc-400 font-medium block">
                  {p.categoryTitle || 'Especie Pokémon'}
                </span>
                <div className="flex items-center gap-1.5 mt-1.5">
                  {p.types.map(t => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-zinc-800 text-zinc-300 border border-zinc-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2.5 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span>Catch Rate: <strong className="text-red-400">{p.catchRate}</strong></span>
              <span className="text-[10px] text-zinc-500">Ver Ficha →</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail */}
      {selectedPokemon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-3xl p-6 space-y-5 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono font-bold text-zinc-500">#{String(selectedPokemon.dexNumber).padStart(3, '0')}</span>
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedPokemon.name}</h3>
                  <span className="text-xs text-zinc-400">{selectedPokemon.categoryTitle || 'Especie Pokémon'}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedPokemon(null)}
                className="text-zinc-500 hover:text-zinc-300 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="w-full h-44 bg-zinc-950 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center justify-center relative group">
              <img
                src={isShiny && selectedPokemon.shinySpriteUrl ? selectedPokemon.shinySpriteUrl : (selectedPokemon.spriteUrl || selectedPokemon.artworkUrl)}
                alt={selectedPokemon.name}
                className="max-h-full object-contain filter drop-shadow-xl scale-125 transition-all duration-300"
              />

              <div className="absolute top-3 right-3 flex items-center gap-2">
                {selectedPokemon.audioCryUrl && (
                  <button
                    onClick={() => handlePlayCry(selectedPokemon.audioCryUrl)}
                    className={`p-2 rounded-xl border text-xs font-bold transition-all ${
                      isPlayingAudio
                        ? 'bg-amber-500 text-zinc-950 border-amber-400 animate-pulse'
                        : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-amber-500/50'
                    }`}
                    title="Escuchar Rugido / Grito del Pokémon"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                )}

                {selectedPokemon.shinySpriteUrl && (
                  <button
                    onClick={() => setIsShiny(!isShiny)}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isShiny
                        ? 'bg-amber-500 text-zinc-950 border-amber-400 shadow-md shadow-amber-500/20'
                        : 'bg-zinc-900 text-amber-400 border-zinc-800 hover:border-amber-500/50'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isShiny ? 'Shiny ✨' : 'Ver Shiny'}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => {
                  const id = selectedPokemon.id;
                  setSelectedPokemon(null);
                  onSelectPokemonForCalculator(id);
                }}
                className="py-2.5 px-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-red-500/50 text-xs font-bold text-zinc-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                <Target className="w-4 h-4 text-red-500" />
                <span>Calcular Captura</span>
              </button>

              <button
                onClick={() => {
                  const id = selectedPokemon.id;
                  setSelectedPokemon(null);
                  onSelectPokemonForSpawns(id);
                }}
                className="py-2.5 px-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-red-500/50 text-xs font-bold text-zinc-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                <Compass className="w-4 h-4 text-red-500" />
                <span>Ver Spawns</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
