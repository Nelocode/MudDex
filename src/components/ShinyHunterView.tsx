import React, { useState, useEffect } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';

export const ShinyHunterView: React.FC = () => {
  const [encounters, setEncounters] = useState<number>(() => {
    const saved = localStorage.getItem('diosesmon_shiny_encounters');
    return saved ? Number(saved) : 0;
  });

  const [hasShinyCharm, setHasShinyCharm] = useState<boolean>(() => {
    const saved = localStorage.getItem('diosesmon_shiny_charm');
    return saved ? JSON.parse(saved) : false;
  });

  const [sparklingLevel, setSparklingLevel] = useState<number>(() => {
    const saved = localStorage.getItem('diosesmon_sparkling_level');
    return saved ? Number(saved) : 0;
  });

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('diosesmon_shiny_encounters', String(encounters));
  }, [encounters]);

  useEffect(() => {
    localStorage.setItem('diosesmon_shiny_charm', JSON.stringify(hasShinyCharm));
  }, [hasShinyCharm]);

  useEffect(() => {
    localStorage.setItem('diosesmon_sparkling_level', String(sparklingLevel));
  }, [sparklingLevel]);

  // Base odds in Cobblemon: 1/8192
  let baseDenominator = 8192;
  if (hasShinyCharm) baseDenominator = 4096;
  if (sparklingLevel === 1) baseDenominator = Math.floor(baseDenominator * 0.75);
  if (sparklingLevel === 2) baseDenominator = Math.floor(baseDenominator * 0.5);
  if (sparklingLevel === 3) baseDenominator = Math.floor(baseDenominator * 0.33);

  const singleEncounterChancePct = (1 / baseDenominator) * 100;
  const cumulativeOddsPct = (1 - Math.pow(1 - (1 / baseDenominator), encounters)) * 100;

  return (
    <div className="space-y-6">
      
      {/* Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-amber-950/40 border border-zinc-800 p-4 sm:p-6 md:p-8">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] sm:text-xs font-semibold max-w-full truncate">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Shiny Hunting & Probabilidades • Cobblemon</span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
            Calculadora de Caza de Pokémon Variocolor (Shiny)
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Calcula tus probabilidades matemáticas acumuladas de encontrar un Pokémon Shiny en Diosesmon según tu número de encuentros y modificadores activos. Tu progreso se guarda automáticamente.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Controls */}
        <div className="lg:col-span-5 bg-zinc-900/90 border border-zinc-800 rounded-2xl p-5 space-y-5 backdrop-blur-md">
          <h3 className="text-sm font-bold text-zinc-200">Parámetros de Caza</h3>

          {/* Encounters Counter */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-zinc-400">
              Número de Encuentros / Avistamientos:
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0"
                max="50000"
                value={encounters}
                onChange={e => setEncounters(Math.max(0, Number(e.target.value)))}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-sm font-mono font-bold text-amber-400 focus:outline-none focus:border-amber-500"
              />
              <button
                onClick={() => setEncounters(0)}
                className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white"
                title="Resetear contador"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
            <div className="flex gap-1.5 pt-1">
              {[+50, +100, +500, +1000].map(amt => (
                <button
                  key={amt}
                  onClick={() => setEncounters(prev => prev + amt)}
                  className="flex-1 py-1 text-xs font-bold rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 hover:border-amber-500/40"
                >
                  +{amt}
                </button>
              ))}
            </div>
          </div>

          {/* Shiny Charm Toggle */}
          <label className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-zinc-800/80 cursor-pointer hover:border-zinc-700">
            <span className="text-xs font-bold text-zinc-300 flex items-center gap-2">
              ✨ ¿Tiene Amuleto Iris (Shiny Charm)?
            </span>
            <input
              type="checkbox"
              checked={hasShinyCharm}
              onChange={e => setHasShinyCharm(e.target.checked)}
              className="w-4 h-4 accent-amber-500 rounded cursor-pointer"
            />
          </label>

          {/* Sparkling Power Level */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-zinc-400">
              Poder Variocolor (Sparkling Power Sandwich):
            </label>
            <div className="grid grid-cols-4 gap-1.5 text-xs font-bold">
              {[0, 1, 2, 3].map(lvl => (
                <button
                  key={lvl}
                  onClick={() => setSparklingLevel(lvl)}
                  className={`py-2 rounded-xl border transition-all ${
                    sparklingLevel === lvl
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                      : 'bg-zinc-950 text-zinc-500 border-zinc-800'
                  }`}
                >
                  Lvl {lvl}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Spotlight */}
        <div className="lg:col-span-7 space-y-5">
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 space-y-5 backdrop-blur-md">
            
            <div className="border-b border-zinc-800 pb-4 space-y-1">
              <span className="text-xs text-zinc-400 font-mono">Tasa de Probabilidad Resultante:</span>
              <h2 className="text-3xl font-extrabold text-amber-400 font-mono">
                1 / {baseDenominator.toLocaleString()}
              </h2>
              <p className="text-xs text-zinc-300">
                ({singleEncounterChancePct.toFixed(4)}% por cada encuentro individual)
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-zinc-300">Probabilidad Acumulada de Obtener al menos 1 Shiny:</span>
                <span className="text-amber-400 font-mono text-sm">{cumulativeOddsPct.toFixed(2)}%</span>
              </div>

              <div className="w-full h-3 bg-zinc-950 rounded-full overflow-hidden p-0.5 border border-zinc-800">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, cumulativeOddsPct)}%` }}
                />
              </div>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 space-y-2 text-xs text-amber-300">
              <span className="font-bold flex items-center gap-1.5 text-amber-400">
                💡 Consejos de Persistencia:
              </span>
              <p className="text-zinc-300 leading-relaxed">
                Tus encuentros y modificadores seleccionados se guardan automáticamente en tu celular. Puedes cerrar el navegador y regresar más tarde sin perder tu avance de Shiny Hunting.
              </p>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
