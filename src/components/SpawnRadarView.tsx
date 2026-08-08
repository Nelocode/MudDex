import React, { useState } from 'react';
import { Compass, Search, Filter, MapPin, Sun, Moon, CloudRain, Sparkles, ShieldCheck, Zap, Layers, Boxes } from 'lucide-react';
import { BIOME_CATEGORIES } from '../data/cobblemonSpawns';
import { filterSpawns, getSpawnRecipeForPokemon, HabitatRecipe } from '../services/spawnEngine';
import { getPokemonById } from '../data/cobblemonPokedex';
import { SpawnBucket, TimeOfDay, WeatherCondition } from '../types/diosesmon';

interface SpawnRadarViewProps {
  onSelectPokemonForCalculator?: (pokemonId: string) => void;
}

export const SpawnRadarView: React.FC<SpawnRadarViewProps> = ({ onSelectPokemonForCalculator }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTime, setSelectedTime] = useState<TimeOfDay>('any');
  const [selectedWeather, setSelectedWeather] = useState<WeatherCondition>('any');
  const [selectedBucket, setSelectedBucket] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeRecipe, setActiveRecipe] = useState<HabitatRecipe | null>(null);

  const filteredSpawns = filterSpawns({
    categoryCategoryId: selectedCategory,
    timeOfDay: selectedTime,
    weather: selectedWeather,
    bucket: selectedBucket,
    searchQuery
  });

  const getBucketBadge = (bucket: SpawnBucket) => {
    switch (bucket) {
      case 'ultra-rare':
        return (
          <span className="px-2.5 py-1 text-[10px] font-extrabold uppercase rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm shadow-amber-500/20">
            ⭐ Ultra-Raro
          </span>
        );
      case 'rare':
        return (
          <span className="px-2.5 py-1 text-[10px] font-extrabold uppercase rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
            💎 Raro
          </span>
        );
      case 'uncommon':
        return (
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            🔹 Poco Común
          </span>
        );
      case 'common':
      default:
        return (
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase rounded-full bg-slate-800 text-slate-400 border border-slate-700">
            ⚪ Común
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Banner & Introduction */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-red-950/40 border border-zinc-800 p-6 sm:p-8">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>Radar de Spawns & Trucos de Bloques • Cobblemon</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Localizador de Hábitat & Recetas de Bloques
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Descubre las condiciones exactas y los <strong>trucos de colocación de bloques</strong> en lenguaje natural para construir granjas/trampas de aparición y forzar spawns de cualquier Pokémon en Diosesmon.
          </p>
        </div>
      </div>

      {/* Control Bar: Category Filters, Time, Weather, Search */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4 backdrop-blur-md">
        
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 custom-scrollbar-horizontal">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            🌐 Todos los Biomas
          </button>
          {BIOME_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Secondary Filters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-slate-800/80">
          
          {/* Search Query */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por Pokémon o Bioma..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Time Filter */}
          <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1">
            {(['any', 'day', 'night'] as TimeOfDay[]).map(t => (
              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                className={`flex-1 py-1 text-xs font-semibold rounded-lg transition-all capitalize ${
                  selectedTime === t
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {t === 'any' ? 'Cualquiera' : t === 'day' ? '☀️ Día' : '🌙 Noche'}
              </button>
            ))}
          </div>

          {/* Weather Filter */}
          <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1">
            {(['any', 'clear', 'rain'] as WeatherCondition[]).map(w => (
              <button
                key={w}
                onClick={() => setSelectedWeather(w)}
                className={`flex-1 py-1 text-xs font-semibold rounded-lg transition-all capitalize ${
                  selectedWeather === w
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {w === 'any' ? 'Clima: Todo' : w === 'clear' ? 'Despejado' : '🌧️ Lluvia'}
              </button>
            ))}
          </div>

          {/* Bucket Filter */}
          <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1">
            {['all', 'ultra-rare', 'rare'].map(b => (
              <button
                key={b}
                onClick={() => setSelectedBucket(b)}
                className={`flex-1 py-1 text-xs font-semibold rounded-lg transition-all capitalize ${
                  selectedBucket === b
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {b === 'all' ? 'Rareza: Todas' : b === 'ultra-rare' ? '⭐ Ultra' : '💎 Raras'}
              </button>
            ))}
          </div>

        </div>

      </div>

      {/* Spawns Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs text-slate-400">
            Mostrando <strong className="text-cyan-400">{filteredSpawns.length}</strong> hábitat(s) encontrados
          </span>
        </div>

        {filteredSpawns.length === 0 ? (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-12 text-center space-y-3">
            <Compass className="w-10 h-10 text-slate-600 mx-auto animate-pulse" />
            <h3 className="text-base font-bold text-slate-300">No se encontraron spawns con estos criterios</h3>
            <p className="text-xs text-slate-500">Prueba cambiando los filtros de bioma, horario o término de búsqueda.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSpawns.map(entry => {
              const pokemon = getPokemonById(entry.pokemonId);
              if (!pokemon) return null;

              const recipe = getSpawnRecipeForPokemon(entry.pokemonId);

              return (
                <div
                  key={entry.id}
                  className="group relative bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-cyan-500/5"
                >
                  <div className="space-y-4">
                    
                    {/* Card Top: Image, Name & Bucket Badge */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-xl bg-slate-950 border border-slate-800 p-1 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <img
                            src={pokemon.spriteUrl || pokemon.artworkUrl}
                            alt={pokemon.name}
                            className="w-12 h-12 object-contain filter drop-shadow-md"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs text-slate-500 font-mono">#{String(pokemon.dexNumber).padStart(3, '0')}</span>
                            <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {pokemon.name}
                            </h3>
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            {pokemon.types.map(t => (
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
                      {getBucketBadge(entry.bucket)}
                    </div>

                    {/* Conditions Box */}
                    <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-3 space-y-2 text-xs">
                      
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-slate-500 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Biomas:
                        </span>
                        <span className="font-semibold text-slate-200 text-right truncate max-w-[170px]" title={entry.condition.biomes.join(', ')}>
                          {entry.condition.biomes[0]?.replace('#cobblemon:', '').replace('minecraft:', '')}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-slate-500">Nivel Y / Altura:</span>
                        <span className="font-mono text-cyan-400 font-bold">
                          {entry.condition.minY !== undefined ? `Y=${entry.condition.minY}+` : 'Superficie'}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-slate-500">Hora & Clima:</span>
                        <span className="font-medium text-slate-300">
                          {entry.condition.timeOfDay || 'Día/Noche'} • {entry.condition.weather || 'Todo clima'}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-slate-300 pt-1 border-t border-slate-800/60">
                        <span className="text-slate-500">Rango de Nivel:</span>
                        <span className="font-semibold text-slate-300">Lv. {entry.minLevel} - {entry.maxLevel}</span>
                      </div>

                    </div>

                    {/* Block Placement Hack Preview */}
                    {recipe && (
                      <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 rounded-xl p-2.5 text-[11px] text-amber-300 space-y-1">
                        <div className="flex items-center gap-1.5 font-bold text-amber-400">
                          <Boxes className="w-3.5 h-3.5" />
                          <span>Instrucción de Bloques para Granja:</span>
                        </div>
                        <p className="text-slate-300 leading-snug line-clamp-2">
                          {recipe.blockHackInstruction}
                        </p>
                      </div>
                    )}

                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-800/60">
                    <button
                      onClick={() => setActiveRecipe(recipe)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-xs font-bold border border-cyan-500/30 transition-all"
                    >
                      <Zap className="w-3.5 h-3.5" /> Ver Receta de Bloques Completa
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Habitat Optimization & Block Hack Modal */}
      {activeRecipe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5 shadow-2xl shadow-cyan-500/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
                  <Boxes className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Instrucciones de Bloques & Trampa de Spawn</h3>
                  <p className="text-xs text-slate-400">Guía en lenguaje natural para forzar apariciones en Diosesmon</p>
                </div>
              </div>
              <button
                onClick={() => setActiveRecipe(null)}
                className="text-slate-500 hover:text-slate-300 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            {/* Natural Language Block Placement Guide */}
            <div className="bg-gradient-to-r from-amber-500/15 via-slate-950 to-slate-950 border border-amber-500/40 rounded-2xl p-4 space-y-2">
              <span className="text-xs font-extrabold uppercase text-amber-400 flex items-center gap-1.5">
                🧱 Guía de Construcción Paso a Paso:
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                {activeRecipe.blockHackInstruction}
              </p>
            </div>

            {/* Needed Blocks List Pills */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-slate-400">Bloques Recomendados para la Plataforma:</span>
              <div className="flex flex-wrap gap-2">
                {activeRecipe.neededBlocks.map(block => (
                  <span
                    key={block}
                    className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-semibold text-cyan-300 flex items-center gap-1"
                  >
                    <span>🧱</span> {block}
                  </span>
                ))}
              </div>
            </div>

            {/* Environmental Requirements */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-2.5 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">Bioma Requerido:</span>
                <span className="font-bold text-cyan-400">{activeRecipe.recommendedBiome}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">Momento del Día:</span>
                <span className="font-bold text-amber-400">{activeRecipe.recommendedTime}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">Clima Necesario:</span>
                <span className="font-bold text-sky-400">{activeRecipe.recommendedWeather}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">Altura / Capa Y:</span>
                <span className="font-mono text-emerald-400 font-bold">{activeRecipe.altitudeHint}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Vista Abierta al Cielo:</span>
                <span className="font-medium text-slate-200">{activeRecipe.skyHint}</span>
              </div>
            </div>

            <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-xs text-cyan-300 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                <strong>Tip de Eficiencia:</strong> Al construir esta plataforma, aléjate 24-32 bloques para que los spawns se activen sin bloquear el mob cap a tu alrededor.
              </span>
            </div>

            <button
              onClick={() => setActiveRecipe(null)}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
            >
              Cerrar Guía
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
