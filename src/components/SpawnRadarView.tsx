import React, { useState } from 'react';
import { Compass, Sun, Moon, CloudRain, Search, Sparkles, SlidersHorizontal, ArrowUpRight, ShieldCheck, MapPin, Zap } from 'lucide-react';
import { BIOME_CATEGORIES } from '../data/cobblemonSpawns';
import { filterSpawns, getSpawnRecipeForPokemon, HabitatRecipe } from '../services/spawnEngine';
import { getPokemonById } from '../data/cobblemonPokedex';
import { TimeOfDay, WeatherCondition, SpawnBucket } from '../types/diosesmon';

interface SpawnRadarViewProps {
  onSelectPokemonForCalculator: (pokemonId: string) => void;
}

export const SpawnRadarView: React.FC<SpawnRadarViewProps> = ({ onSelectPokemonForCalculator }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('any');
  const [weather, setWeather] = useState<WeatherCondition>('any');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeRecipe, setActiveRecipe] = useState<HabitatRecipe | null>(null);

  const spawns = filterSpawns({
    categoryCategoryId: selectedCategory,
    timeOfDay,
    weather,
    searchQuery
  });

  const getBucketBadge = (bucket: SpawnBucket) => {
    switch (bucket) {
      case 'ultra-rare':
        return (
          <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm shadow-amber-500/20 animate-pulse">
            ✨ Ultra-Raro
          </span>
        );
      case 'rare':
        return (
          <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
            🟣 Raro
          </span>
        );
      case 'uncommon':
        return (
          <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
            🔷 Poco Común
          </span>
        );
      default:
        return (
          <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            🟢 Común
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Banner & Introduction */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-slate-800 p-6 sm:p-8">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>Radar de Spawns • Cobblemon 1.7.3</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Localizador de Hábitat & Aparición de Pokémon
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Filtra los parámetros del servidor Diosesmon para encontrar la ubicación exacta, hora, bioma y nivel de altura Y necesarios para forzar la aparición de cualquier Pokémon.
          </p>
        </div>
      </div>

      {/* Control Bar: Category Filters, Time, Weather, Search */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4 backdrop-blur-md">
        
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            🌐 Todos los Biomas
          </button>
          {BIOME_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Filters Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          {/* Search Query */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por Pokémon o Bioma..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          {/* Time of Day */}
          <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1">
            <button
              onClick={() => setTimeOfDay('any')}
              className={`flex-1 py-1 text-[11px] font-bold rounded-lg transition-all ${
                timeOfDay === 'any' ? 'bg-slate-800 text-cyan-300' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Cualquiera
            </button>
            <button
              onClick={() => setTimeOfDay('day')}
              className={`flex-1 py-1 text-[11px] font-bold rounded-lg flex items-center justify-center gap-1 transition-all ${
                timeOfDay === 'day' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sun className="w-3 h-3" /> Día
            </button>
            <button
              onClick={() => setTimeOfDay('night')}
              className={`flex-1 py-1 text-[11px] font-bold rounded-lg flex items-center justify-center gap-1 transition-all ${
                timeOfDay === 'night' ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Moon className="w-3 h-3" /> Noche
            </button>
          </div>

          {/* Weather */}
          <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1">
            <button
              onClick={() => setWeather('any')}
              className={`flex-1 py-1 text-[11px] font-bold rounded-lg transition-all ${
                weather === 'any' ? 'bg-slate-800 text-cyan-300' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Clima: Todo
            </button>
            <button
              onClick={() => setWeather('clear')}
              className={`flex-1 py-1 text-[11px] font-bold rounded-lg transition-all ${
                weather === 'clear' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Despejado
            </button>
            <button
              onClick={() => setWeather('rain')}
              className={`flex-1 py-1 text-[11px] font-bold rounded-lg flex items-center justify-center gap-1 transition-all ${
                weather === 'rain' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <CloudRain className="w-3 h-3" /> Lluvia
            </button>
          </div>

        </div>
      </div>

      {/* Results Count & Spawns Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
          <span>Mostrando {spawns.length} registros de aparecimiento</span>
          <span className="text-slate-500">Servidor Diosesmon PRO</span>
        </div>

        {spawns.length === 0 ? (
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-12 text-center space-y-3">
            <Compass className="w-10 h-10 text-slate-600 mx-auto animate-spin duration-1000" />
            <h3 className="text-base font-bold text-slate-300">No se encontraron Pokémon con estos parámetros</h3>
            <p className="text-xs text-slate-500">Intenta cambiando los filtros de bioma, hora o clima.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {spawns.map(entry => {
              const pokemon = getPokemonById(entry.pokemonId);
              if (!pokemon) return null;

              return (
                <div
                  key={entry.id}
                  className="group relative bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-cyan-500/5"
                >
                  <div className="space-y-4">
                    
                    {/* Card Top: Image, Name & Bucket Badge */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-xl bg-slate-950 border border-slate-800 p-1 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <img
                            src={pokemon.artworkUrl || pokemon.spriteUrl}
                            alt={pokemon.name}
                            className="w-12 h-12 object-contain drop-shadow-md"
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
                        <span className="text-slate-500">Nivel Nivel Y / Altura:</span>
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

                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-800/60">
                    <button
                      onClick={() => setActiveRecipe(getSpawnRecipeForPokemon(entry.pokemonId))}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-xs font-bold border border-cyan-500/30 transition-all"
                    >
                      <Zap className="w-3.5 h-3.5" /> Receta de Aparecimiento
                    </button>
                    
                    <button
                      onClick={() => onSelectPokemonForCalculator(entry.pokemonId)}
                      className="p-2 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 transition-all"
                      title="Calcular Tasa de Captura"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Habitat Optimization Modal */}
      {activeRecipe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5 shadow-2xl shadow-cyan-500/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Receta para Forzar Spawn</h3>
                  <p className="text-xs text-slate-400">Optimización de hábitat en Diosesmon</p>
                </div>
              </div>
              <button
                onClick={() => setActiveRecipe(null)}
                className="text-slate-500 hover:text-slate-300 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-3 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">Bioma Objetivo:</span>
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
                <span className="font-mono text-emerald-400">{activeRecipe.altitudeHint}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Vista al Cielo:</span>
                <span className="font-medium text-slate-200">{activeRecipe.skyHint}</span>
              </div>
            </div>

            <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-xs text-cyan-300 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                <strong>Consejo PRO:</strong> Para maximizar spawns de la categoría <strong>{activeRecipe.bucket}</strong>, mantén libre un área de 15x15 bloques limpia de mob cap a tu alrededor.
              </span>
            </div>

            <button
              onClick={() => setActiveRecipe(null)}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
            >
              Entendido
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
