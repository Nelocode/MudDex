import React from 'react';
import { Swords, ShieldAlert, Zap, Target, Award } from 'lucide-react';
import { COBBLEMON_BOSS_COUNTERS } from '../data/cobblemonBossCounters';

export const BossCountersView: React.FC = () => {
  return (
    <div className="space-y-6">
      
      {/* Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-rose-950/40 border border-zinc-800 p-4 sm:p-6 md:p-8">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-[11px] sm:text-xs font-semibold max-w-full truncate">
            <Swords className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Asistente de Batallas & Raid Counters • Diosesmon</span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
            Recomendador de Equipos & Counters para Bosses y Gimnasios
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Estrategias recomendadas, Pokémon inmunizados y movimientos STAB para derrotar a los jefes, Raids y Gimnasios del servidor Diosesmon.
          </p>
        </div>
      </div>

      {/* Boss Counters Cards */}
      <div className="space-y-6">
        {COBBLEMON_BOSS_COUNTERS.map(boss => (
          <div
            key={boss.id}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{boss.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-white">{boss.bossName}</h3>
                  <span className="text-xs text-slate-400 uppercase font-mono font-bold">
                    Tipo Principal: <strong className="text-rose-400">{boss.bossType}</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Recommended Team Grid */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                🛡️ Equipo Counter Sugerido:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {boss.recommendedTeam.map((member, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-3 space-y-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm capitalize">{member.pokemonId}</span>
                      <span className="text-[10px] text-slate-500 font-mono">Slot {idx + 1}</span>
                    </div>
                    <p className="text-rose-400 font-semibold text-[11px]">{member.role}</p>
                    <div className="pt-1 text-[11px] text-slate-400 space-y-0.5 border-t border-slate-900">
                      <div>Clave: <strong className="text-slate-200">{member.keyMove}</strong></div>
                      <div>Objeto: <strong className="text-amber-400">{member.heldItem}</strong></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategy Tips */}
            <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-4 space-y-2 text-xs text-rose-300">
              <span className="font-bold flex items-center gap-1.5 text-rose-400">
                ⚡ Consejos de Batalla:
              </span>
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                {boss.strategyTips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
