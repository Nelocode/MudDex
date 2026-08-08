import React, { useState } from 'react';
import { Target, Shield, Zap, Sparkles, X } from 'lucide-react';
import { ALL_TYPES, calculateTypeEffectiveness } from '../data/cobblemonTypeMatrix';
import { PokemonType } from '../types/diosesmon';

export const TypeMatrixView: React.FC = () => {
  const [type1, setType1] = useState<PokemonType>('fire');
  const [type2, setType2] = useState<PokemonType | 'none'>('flying');

  const result = calculateTypeEffectiveness(type1, type2 === 'none' ? undefined : type2);

  return (
    <div className="space-y-6">
      
      {/* Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-slate-800 p-6 sm:p-8">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Target className="w-3.5 h-3.5" />
            <span>Matriz de Tipos 18x18 • Diosesmon</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Calculadora de Debilidades & Resistencias de Tipos
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Selecciona el tipo individual o combinación de doble tipo de tu Pokémon para calcular al instante sus debilidades (4x, 2x), resistencias (0.5x, 0.25x) e inmunidades (0x).
          </p>
        </div>
      </div>

      {/* Selectors */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-4 backdrop-blur-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Primary Type */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase text-slate-400">Tipo Primario:</label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
              {ALL_TYPES.map(t => (
                <button
                  key={t}
                  onClick={() => setType1(t)}
                  className={`py-1.5 text-xs font-bold uppercase rounded-lg border transition-all ${
                    type1 === t
                      ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-extrabold shadow-md shadow-cyan-500/20'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Secondary Type */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase text-slate-400">Tipo Secundario (Opcional):</label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
              <button
                onClick={() => setType2('none')}
                className={`py-1.5 text-xs font-bold uppercase rounded-lg border transition-all ${
                  type2 === 'none'
                    ? 'bg-slate-800 text-white border-slate-600'
                    : 'bg-slate-950 text-slate-500 border-slate-800'
                }`}
              >
                Ninguno
              </button>
              {ALL_TYPES.map(t => (
                <button
                  key={t}
                  onClick={() => setType2(t)}
                  className={`py-1.5 text-xs font-bold uppercase rounded-lg border transition-all ${
                    type2 === t
                      ? 'bg-indigo-500 text-white border-indigo-400 font-extrabold shadow-md shadow-indigo-500/20'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Target Combination Display */}
      <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-2xl p-4">
        <span className="text-xs font-bold text-slate-400 uppercase">Combinación Evaluada:</span>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 text-xs font-extrabold uppercase rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
            {type1}
          </span>
          {type2 !== 'none' && type2 !== type1 && (
            <span className="px-3 py-1 text-xs font-extrabold uppercase rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
              {type2}
            </span>
          )}
        </div>
      </div>

      {/* Results Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* 4x & 2x Weaknesses */}
        <div className="bg-slate-900/80 border border-rose-500/30 rounded-2xl p-5 space-y-3">
          <h3 className="text-xs font-extrabold uppercase text-rose-400 tracking-wider flex items-center gap-1.5">
            🚨 Debilidades (Daño Recibido 4x y 2x):
          </h3>
          <div className="space-y-2">
            {result.weaknesses4x.length > 0 && (
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-rose-400 uppercase">Super Debilidades (4x):</span>
                <div className="flex flex-wrap gap-1.5">
                  {result.weaknesses4x.map(t => (
                    <span key={t} className="px-2.5 py-1 text-xs font-bold uppercase rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/50">
                      {t} 4x
                    </span>
                  ))}
                </div>
              </div>
            )}
            {result.weaknesses2x.length > 0 && (
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-rose-300 uppercase">Debilidades (2x):</span>
                <div className="flex flex-wrap gap-1.5">
                  {result.weaknesses2x.map(t => (
                    <span key={t} className="px-2.5 py-1 text-xs font-bold uppercase rounded-lg bg-rose-500/10 text-rose-300 border border-rose-500/30">
                      {t} 2x
                    </span>
                  ))}
                </div>
              </div>
            )}
            {result.weaknesses4x.length === 0 && result.weaknesses2x.length === 0 && (
              <p className="text-xs text-slate-500 font-mono">¡Sin debilidades!</p>
            )}
          </div>
        </div>

        {/* Resistances 0.5x & 0.25x */}
        <div className="bg-slate-900/80 border border-emerald-500/30 rounded-2xl p-5 space-y-3">
          <h3 className="text-xs font-extrabold uppercase text-emerald-400 tracking-wider flex items-center gap-1.5">
            🛡️ Resistencias (Daño Recibido 0.5x y 0.25x):
          </h3>
          <div className="space-y-2">
            {result.resistances025x.length > 0 && (
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-emerald-400 uppercase">Super Resistencias (0.25x):</span>
                <div className="flex flex-wrap gap-1.5">
                  {result.resistances025x.map(t => (
                    <span key={t} className="px-2.5 py-1 text-xs font-bold uppercase rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/50">
                      {t} 0.25x
                    </span>
                  ))}
                </div>
              </div>
            )}
            {result.resistances05x.length > 0 && (
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-emerald-300 uppercase">Resistencias (0.5x):</span>
                <div className="flex flex-wrap gap-1.5">
                  {result.resistances05x.map(t => (
                    <span key={t} className="px-2.5 py-1 text-xs font-bold uppercase rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                      {t} 0.5x
                    </span>
                  ))}
                </div>
              </div>
            )}
            {result.resistances05x.length === 0 && result.resistances025x.length === 0 && (
              <p className="text-xs text-slate-500 font-mono">Sin resistencias especiales.</p>
            )}
          </div>
        </div>

        {/* Immunities 0x */}
        <div className="bg-slate-900/80 border border-sky-500/30 rounded-2xl p-5 space-y-3">
          <h3 className="text-xs font-extrabold uppercase text-sky-400 tracking-wider flex items-center gap-1.5">
            ✨ Inmunidades (Daño Recibido 0x):
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {result.immunities0x.length > 0 ? (
              result.immunities0x.map(t => (
                <span key={t} className="px-2.5 py-1 text-xs font-extrabold uppercase rounded-lg bg-sky-500/20 text-sky-300 border border-sky-500/50">
                  {t} 0x (Inmune)
                </span>
              ))
            ) : (
              <p className="text-xs text-slate-500 font-mono">Sin inmunidades de tipo.</p>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
