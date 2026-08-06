import React, { useState } from 'react';
import { ShieldCheck, Copy, Check, ExternalLink, Terminal, Cpu, Sparkles } from 'lucide-react';

interface DiosesmonInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiosesmonInfoModal: React.FC<DiosesmonInfoModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const SERVER_IP = 'mc.diosesmon.net';

  if (!isOpen) return null;

  const handleCopyIp = () => {
    navigator.clipboard.writeText(SERVER_IP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white">Servidor Diosesmon PRO</h2>
              <p className="text-xs text-slate-400">Cobblemon 1.7.3 • Minecraft 1.21.1 Fabric</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-300 text-sm font-bold p-1"
          >
            ✕
          </button>
        </div>

        {/* IP Copy Section */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Dirección IP de Conexión</span>
            <span className="text-base font-extrabold text-cyan-300 font-mono">{SERVER_IP}</span>
          </div>
          <button
            onClick={handleCopyIp}
            className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-extrabold text-xs flex items-center gap-2 hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20 active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>¡Copiada!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copiar IP</span>
              </>
            )}
          </button>
        </div>

        {/* Server Features */}
        <div className="space-y-3 text-xs">
          <h3 className="font-extrabold text-slate-300 uppercase text-[11px] tracking-wider">
            Mecánicas y Funciones de Diosesmon
          </h3>
          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 space-y-1">
              <span className="font-bold text-cyan-400 block">⚔️ Torneos & Gimnasios</span>
              <span className="text-slate-400 text-[11px]">Sistema de medallas, líderes y eventos semanales.</span>
            </div>
            <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 space-y-1">
              <span className="font-bold text-indigo-400 block">🧬 Crianza & IVs</span>
              <span className="text-slate-400 text-[11px]">Mecánica de pastel y compatibilidad de grupos huevo.</span>
            </div>
            <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 space-y-1">
              <span className="font-bold text-emerald-400 block">💰 Economía & Tiendas</span>
              <span className="text-slate-400 text-[11px]">Mercado entre jugadores y trabajos del servidor.</span>
            </div>
            <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 space-y-1">
              <span className="font-bold text-amber-400 block">👑 Pokémon Alphas</span>
              <span className="text-slate-400 text-[11px]">Apariciones especiales de tamaño gigante y stats mejorados.</span>
            </div>
          </div>
        </div>

        {/* Commands Reference */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-2 text-xs font-mono">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-sans">
            Comandos Útiles en el Servidor
          </span>
          <div className="space-y-1 text-slate-300">
            <div><strong className="text-cyan-400">/spawn</strong> - Regresa al Spawn principal</div>
            <div><strong className="text-cyan-400">/pokedex</strong> - Abre tu Pokédex en el juego</div>
            <div><strong className="text-cyan-400">/pc</strong> - Abre tu PC de almacenamiento remoto</div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
        >
          Cerrar
        </button>

      </div>
    </div>
  );
};
