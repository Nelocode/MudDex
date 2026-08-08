import React from 'react';
import { X, Server, ShieldCheck, Copy, Check, ExternalLink, Cpu, HardDrive } from 'lucide-react';
import { SERVER_IP } from './Header';

interface DiosesmonInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiosesmonInfoModal: React.FC<DiosesmonInfoModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopyIp = () => {
    navigator.clipboard.writeText(SERVER_IP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between border-b border-zinc-800 pb-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-red-600/15 border border-red-500/30 text-red-400">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Servidor Diosesmon</h3>
              <p className="text-xs text-zinc-400 font-mono">Fabric 1.21.1 • Cobblemon 1.7.3</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Server IP Card */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 flex items-center justify-between gap-4">
          <div className="space-y-0.5">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">Dirección IP Oficial:</span>
            <span className="text-base font-extrabold text-red-400 font-mono">{SERVER_IP}</span>
          </div>
          <button
            onClick={handleCopyIp}
            className="px-4 py-2 rounded-xl bg-red-600 text-white font-extrabold text-xs flex items-center gap-2 hover:bg-red-500 transition-colors shadow-lg shadow-red-600/20 active:scale-95"
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

        {/* Features List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-3.5 space-y-1">
            <span className="font-bold text-red-400 block">⚔️ Torneos & Gimnasios</span>
            <p className="text-zinc-400 leading-relaxed">Sistema de Líderes de Gimnasio activos y torneos semanales con recompensas.</p>
          </div>
          <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-3.5 space-y-1">
            <span className="font-bold text-amber-400 block">🧬 Crianza & IVs</span>
            <p className="text-zinc-400 leading-relaxed">Mecánicas de crianza activas con herencia de IVs mediante Lazo Destino.</p>
          </div>
        </div>

        {/* Essential Commands */}
        <div className="space-y-2 bg-zinc-950 p-4 rounded-2xl border border-zinc-800 text-xs font-mono">
          <span className="text-[10px] font-bold uppercase text-zinc-500 tracking-wider block">Comandos Esenciales en el Servidor:</span>
          <div className="space-y-1 text-zinc-300">
            <div><strong className="text-red-400">/spawn</strong> - Regresa al Spawn principal</div>
            <div><strong className="text-red-400">/pokedex</strong> - Abre tu Pokédex en el juego</div>
            <div><strong className="text-red-400">/pc</strong> - Abre tu PC de almacenamiento remoto</div>
            <div><strong className="text-red-400">/checkspawns</strong> - Consulta probabilidades de aparición actuales</div>
          </div>
        </div>

      </div>
    </div>
  );
};
