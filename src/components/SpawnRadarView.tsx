import React, { useState } from 'react';
import { Compass, Search, Filter, Layers, Sun, Moon, CloudRain, Clock, MapPin, Sparkles, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import { COBBLEMON_SPAWNS, getSpawnRecipeForPokemon, BIOME_CATEGORIES } from '../data/cobblemonSpawns';
import { getPokemonById } from '../data/cobblemonPokedex';
import { SpawnEntry, SpawnBucket, TimeOfDay, WeatherCondition } from '../types/diosesmon';

interface SpawnRadarViewProps {
  onSelectPokemonForCalculator: (pokemonId: string) => void;
}

export const SpawnRadarView: React.FC<SpawnRadarViewProps> = ({
  onSelectPokemonForCalculator
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTime, setSelectedTime] = useState<TimeOfDay>('any');
  const [selectedWeather, setSelectedWeather] = useState<WeatherCondition>('any');
  const [selectedBucket, setSelectedBucket] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize] = useState<number>(24);

  const [selectedRecipePokemon, setSelectedRecipePokemon] = useState<string | null>(null);

  // Filter spawns
  const filteredSpawns = COBBLEMON_SPAWNS.filter(spawn => {
    const pokemon = getPokemonById(spawn.pokemonId);
    if (!pokemon) return false;

    // Search query filter (name or dex number)
    if (searchQuery) {
      const q = searchQuery.toLowerCase().trim();
      const matchName = pokemon.name.toLowerCase().includes(q);
      const matchDex = String(pokemon.dexNumber).includes(q);
      if (!matchName && !matchDex) return false;
    }

    // Bucket filter
    if (selectedBucket !== 'all' && spawn.bucket !== selectedBucket) {
      return false;
    }

    // Time filter
    if (selectedTime !== 'any') {
      const t = spawn.condition.timeOfDay || 'any';
      if (t !== 'any' && t !== selectedTime) return false;
    }

    // Category filter
    if (selectedCategory !== 'all') {
      const cat = BIOME_CATEGORIES.find(c => c.id === selectedCategory);
      if (cat) {
        const catBiomeIds = cat.biomes.flatMap(b => [b.id, b.tag]);
        const matchesBiome = spawn.condition.biomes.some(b =>
          catBiomeIds.some(cb => cb && (b.includes(cb) || cb.includes(b)))
        );
        if (!matchesBiome) return false;
      }
    }

    return true;
  });

  const totalPages = Math.ceil(filteredSpawns.length / pageSize) || 1;
  const paginatedSpawns = filteredSpawns.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handleFilterChange = (setter: (val: any) => void, val: any) => {
    setter(val);
    setCurrentPage(1);
  };

  const getBucketBadge = (bucket: SpawnBucket) => {
    switch (bucket) {
      case 'ultra-rare':
        return (
          <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" /> ULTRA RARO
          </span>
        );
      case 'rare':
        return (
          <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center gap-1">
            ♦️ RARO
          </span>
        );
      case 'uncommon':
        return (
          <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase rounded-full bg-red-600/20 text-red-300 border border-red-500/30">
            POCO COMÚN
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase rounded-full bg-zinc-800 text-zinc-400">
            COMÚN
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Banner & Introduction */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-red-950/40 border border-zinc-800 p-4 sm:p-6 md:p-8">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-[11px] sm:text-xs font-semibold max-w-full truncate">
            <Compass className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Radar de Spawns & Trucos de Bloques • Cobblemon</span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
            Localizador de Hábitat & Recetas de Bloques
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Descubre las condiciones exactas y los <strong>trucos de colocación de bloques</strong> en lenguaje natural para construir granjas/trampas de aparición y forzar spawns de cualquier Pokémon en Diosesmon.
          </p>
        </div>
      </div>

      {/* Control Bar: Category Filters, Time, Weather, Search */}
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 sm:p-5 space-y-4 backdrop-blur-md">
        
        {/* Category Pills (Horizontal Scrollable) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => handleFilterChange(setSelectedCategory, 'all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-red-600 text-white font-bold shadow-md shadow-red-600/20'
                : 'bg-zinc-950 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
            }`}
          >
            🗺️ Todos los Biomas
          </button>
          {BIOME_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleFilterChange(setSelectedCategory, cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-red-600 text-white font-bold shadow-md shadow-red-600/20'
                  : 'bg-zinc-950 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
            >
              <span>{cat.icon}</span> <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Buscar Pokémon (ej: Pikachu, Snorlax, 143)..."
              value={searchQuery}
              onChange={e => handleFilterChange(setSearchQuery, e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-3 py-2 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Time Filter */}
          <div className="flex items-center bg-zinc-950 border border-zinc-800 rounded-xl p-1">
            {(['any', 'day', 'night'] as TimeOfDay[]).map(t => (
              <button
                key={t}
                onClick={() => handleFilterChange(setSelectedTime, t)}
                className={`flex-1 py-1 text-xs font-semibold rounded-lg transition-all capitalize ${
                  selectedTime === t
                    ? 'bg-red-600/20 text-red-300 font-bold border border-red-500/30'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {t === 'any' ? 'Cualquiera' : t === 'day' ? '☀️ Día' : '🌙 Noche'}
              </button>
            ))}
          </div>

          {/* Weather Filter */}
          <div className="flex items-center bg-zinc-950 border border-zinc-800 rounded-xl p-1">
            {(['any', 'clear', 'rain'] as WeatherCondition[]).map(w => (
              <button
                key={w}
                onClick={() => handleFilterChange(setSelectedWeather, w)}
                className={`flex-1 py-1 text-xs font-semibold rounded-lg transition-all capitalize ${
                  selectedWeather === w
                    ? 'bg-red-600/20 text-red-300 font-bold border border-red-500/30'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {w === 'any' ? 'Clima: Todo' : w === 'clear' ? 'Despejado' : '🌧️ Lluvia'}
              </button>
            ))}
          </div>

          {/* Bucket Filter */}
          <div className="flex items-center bg-zinc-950 border border-zinc-800 rounded-xl p-1">
            {['all', 'ultra-rare', 'rare'].map(b => (
              <button
                key={b}
                onClick={() => handleFilterChange(setSelectedBucket, b)}
                className={`flex-1 py-1 text-xs font-semibold rounded-lg transition-all capitalize ${
                  selectedBucket === b
                    ? 'bg-red-600/20 text-red-300 font-bold border border-red-500/30'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {b === 'all' ? 'Rareza: Todas' : b === 'ultra-rare' ? '⭐ Ultra' : '💎 Raras'}
              </button>
            ))}
          </div>

        </div>

      </div>

      {/* Pagination Bar Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-1">
        <span className="text-xs text-zinc-400">
          Mostrando <strong className="text-red-400">{filteredSpawns.length}</strong> hábitat(s) encontrados
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

      {/* Spawns Grid */}
      <div className="space-y-4">
        {filteredSpawns.length === 0 ? (
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-12 text-center space-y-3">
            <Compass className="w-10 h-10 text-zinc-600 mx-auto animate-pulse" />
            <h3 className="text-base font-bold text-zinc-300">No se encontraron spawns con estos criterios</h3>
            <p className="text-xs text-zinc-500">Prueba cambiando los filtros de bioma, horario o término de búsqueda.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginatedSpawns.map(entry => {
              const pokemon = getPokemonById(entry.pokemonId);
              if (!pokemon) return null;

              const recipe = getSpawnRecipeForPokemon(entry.pokemonId);

              return (
                <div
                  key={entry.id}
                  className="group relative bg-zinc-900/80 hover:bg-zinc-900 border border-zinc-800 hover:border-red-500/50 rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between shadow-lg"
                >
                  <div className="space-y-4">
                    
                    {/* Card Top: Image, Name & Bucket Badge */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-xl bg-zinc-950 border border-zinc-800 p-1 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <img
                            src={pokemon.spriteUrl || pokemon.artworkUrl}
                            alt={pokemon.name}
                            className="w-12 h-12 object-contain filter drop-shadow-md"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs text-zinc-500 font-mono">#{String(pokemon.dexNumber).padStart(3, '0')}</span>
                            <h3 className="text-base font-extrabold text-white group-hover:text-red-400 transition-colors">
                              {pokemon.name}
                            </h3>
                          </div>
                          <div className="flex gap-1 mt-1">
                            {pokemon.types.map(t => (
                              <span key={t} className="px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-zinc-950 text-zinc-400 border border-zinc-800">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {getBucketBadge(entry.bucket)}
                    </div>

                    {/* Habitat Summary Specs */}
                    <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-xl p-3 space-y-2 text-xs">
                      
                      {/* Biomes list */}
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-zinc-500 flex items-center gap-1 shrink-0">
                          <MapPin className="w-3.5 h-3.5 text-red-500" /> Biomas:
                        </span>
                        <div className="text-right font-mono font-medium text-zinc-200 max-w-[180px] truncate">
                          {entry.condition.biomes.slice(0, 2).map(b => b.replace('#cobblemon:', '').replace('minecraft:', '')).join(', ')}
                          {entry.condition.biomes.length > 2 && '...'}
                        </div>
                      </div>

                      {/* Y Level / Height */}
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-500">Nivel Y / Altura:</span>
                        <span className="font-mono text-red-400 font-bold">
                          {entry.condition.minY !== undefined && entry.condition.maxY !== undefined
                            ? `Y: ${entry.condition.minY} a ${entry.condition.maxY}`
                            : entry.context === 'submerged'
                            ? 'Bajo el Agua'
                            : 'Superficie'}
                        </span>
                      </div>

                      {/* Time & Weather */}
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-500">Hora & Clima:</span>
                        <span className="font-mono text-zinc-300 capitalize">
                          {entry.condition.timeOfDay || 'any'} • Todo clima
                        </span>
                      </div>

                      {/* Level Range */}
                      <div className="flex items-center justify-between border-t border-zinc-800/60 pt-1.5">
                        <span className="text-zinc-500">Rango de Nivel:</span>
                        <span className="font-mono font-bold text-amber-400">
                          Lv. {entry.minLevel} – {entry.maxLevel}
                        </span>
                      </div>

                    </div>

                    {/* Block Placement Tip Box */}
                    {recipe && (
                      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 space-y-1 text-xs">
                        <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                          <Layers className="w-3.5 h-3.5 shrink-0" />
                          <span>Instrucción de Bloques para Granja:</span>
                        </div>
                        <p className="text-zinc-300 text-[11px] leading-relaxed line-clamp-2">
                          {recipe.naturalLanguageInstruction}
                        </p>
                      </div>
                    )}

                  </div>

                  {/* Card Action Footer */}
                  <div className="pt-4 mt-4 border-t border-zinc-800 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedRecipePokemon(pokemon.id)}
                      className="w-full py-2 px-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-xs font-bold text-zinc-300 hover:text-white transition-all flex items-center justify-center gap-1.5 active:scale-95"
                    >
                      <Layers className="w-3.5 h-3.5 text-red-500" />
                      <span>Ver Receta de Bloques Completa</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Pagination Footer */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 pt-4 border-t border-zinc-800">
          <button
            onClick={() => {
              setCurrentPage(p => Math.max(1, p - 1));
              window.scrollTo({ top: 300, behavior: 'smooth' });
            }}
            disabled={currentPage === 1}
            className="flex items-center gap-1 px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" /> Anterior
          </button>

          <span className="text-xs font-mono text-zinc-400">
            Página <strong className="text-white">{currentPage}</strong> de {totalPages}
          </span>

          <button
            onClick={() => {
              setCurrentPage(p => Math.min(totalPages, p + 1));
              window.scrollTo({ top: 300, behavior: 'smooth' });
            }}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Siguiente <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Full Block Recipe Modal */}
      {selectedRecipePokemon && (() => {
        const p = getPokemonById(selectedRecipePokemon);
        const recipe = getSpawnRecipeForPokemon(selectedRecipePokemon);
        if (!p || !recipe) return null;

        return (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-2 sm:p-4 bg-zinc-950/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-t-3xl sm:rounded-3xl p-5 sm:p-6 space-y-4 shadow-2xl relative max-h-[92vh] overflow-y-auto">
              
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 p-1 flex items-center justify-center">
                    <img src={p.spriteUrl || p.artworkUrl} alt={p.name} className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-white">{p.name}</h3>
                    <span className="text-xs font-mono text-zinc-400">Receta de Granja de Spawns</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedRecipePokemon(null)}
                  className="p-1.5 rounded-xl text-zinc-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-2">
                  <span className="font-bold text-amber-400 block">💡 Instrucción de Colocación de Bloques:</span>
                  <p className="text-zinc-200 leading-relaxed text-xs">{recipe.naturalLanguageInstruction}</p>
                </div>

                <div className="space-y-1.5">
                  <span className="font-bold text-zinc-400 uppercase text-[10px]">Bloques Requeridos / Recomendados:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {recipe.requiredBlocks.map(b => (
                      <span key={b} className="px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 font-mono text-[11px]">
                        🧱 {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  onSelectPokemonForCalculator(p.id);
                  setSelectedRecipePokemon(null);
                }}
                className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs shadow-md shadow-red-600/20 transition-all flex items-center justify-center gap-2"
              >
                <Target className="w-4 h-4" />
                <span>Calcular Probabilidad de Captura de {p.name}</span>
              </button>

            </div>
          </div>
        );
      })()}

    </div>
  );
};
