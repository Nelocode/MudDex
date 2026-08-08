import React, { useState } from 'react';
import { Map, Search, MapPin, Layers, Boxes, Sparkles } from 'lucide-react';
import { MINECRAFT_BIOMES } from '../data/cobblemonBiomes';

export const BiomeGuideView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredBiomes = MINECRAFT_BIOMES.filter(b => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      b.name.toLowerCase().includes(q) ||
      b.description.toLowerCase().includes(q) ||
      b.keySpawns.some(s => s.toLowerCase().includes(q))
    );
  });

  return (
    <div className="space-y-6">
      
      {/* Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-emerald-950/40 border border-slate-800 p-4 sm:p-6 md:p-8">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] sm:text-xs font-semibold max-w-full truncate">
            <Map className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Biomas Minecraft 1.21.1 • Diosesmon</span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
            Guía Interactiva de Biomas & Coordenadas Y
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Explora las capas de altura Y, temperaturas, trucos de colocación de bloques y especies clave que habitan en cada bioma de Diosesmon.
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 relative">
        <Search className="absolute left-7 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Buscar bioma o Pokémon habitante (ej: Jungla, Deep Dark, Garchomp, Badlands)..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
        />
      </div>

      {/* Biomes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredBiomes.map(biome => (
          <div
            key={biome.id}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-lg hover:border-emerald-500/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{biome.icon}</span>
                  <div>
                    <h3 className="text-base font-bold text-white">{biome.name}</h3>
                    <span className="text-xs text-slate-400 font-mono">{biome.dimension} • {biome.temperature}</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-mono font-bold rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  {biome.yRange}
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {biome.description}
              </p>

              {/* Key Spawns */}
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Especies Clave que Habitan Aquí:</span>
                <div className="flex flex-wrap gap-1.5">
                  {biome.keySpawns.map(p => (
                    <span key={p} className="px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-200">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Block Hacks */}
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 space-y-1 text-xs text-emerald-300">
                <span className="font-bold text-emerald-400 flex items-center gap-1">
                  <Boxes className="w-3.5 h-3.5" /> Bloques para Granja de Spawns:
                </span>
                <p className="text-slate-300 text-[11px]">
                  {biome.blockHacks.join(' • ')}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
