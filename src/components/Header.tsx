import React, { useState } from 'react';
import { Search, Copy, Check, ShieldCheck, Sparkles, Compass, Target, BookOpen, Gem, Info } from 'lucide-react';

interface HeaderProps {
  activeTab: 'spawns' | 'calculator' | 'pokedex' | 'drops';
  setActiveTab: (tab: 'spawns' | 'calculator' | 'pokedex' | 'drops') => void;
  onOpenSearch: () => void;
  onOpenInfo: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenSearch,
  onOpenInfo
}) => {
  const [copied, setCopied] = useState(false);
  const SERVER_IP = 'mc.diosesmon.net';

  const handleCopyIp = () => {
    navigator.clipboard.writeText(SERVER_IP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Brand & Server IP Badge */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setActiveTab('spawns')}>
              {/* Pokelinker-style Pokeball Logo */}
              <div className="w-10 h-10 rounded-full bg-slate-950 border-2 border-slate-900 shadow-lg shadow-rose-500/25 group-hover:scale-110 transition-transform duration-300 relative flex items-center justify-center overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-rose-600 via-rose-500 to-rose-600 border-b-2 border-slate-950"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-slate-100"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-white z-10 shadow-sm group-hover:scale-125 transition-transform duration-300"></div>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-cyan-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">
                    Diosesmon
                  </span>
                  <span className="px-1.5 py-0.5 text-[10px] font-extrabold rounded-md bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-sm shadow-cyan-500/20">
                    DEX
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
                  Cobblemon 1.7.3 • Fabric 1.21.1
                </p>
              </div>
            </div>

            {/* Server IP Quick Copy Pill */}
            <button
              onClick={handleCopyIp}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-700/60 text-slate-300 text-xs font-semibold transition-all group relative overflow-hidden active:scale-95"
              title="Copiar dirección IP del servidor"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{SERVER_IP}</span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400 animate-in zoom-in" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              )}
              {copied && (
                <span className="absolute inset-0 bg-emerald-500/20 border border-emerald-500/40 rounded-lg flex items-center justify-center text-[10px] font-bold text-emerald-300 animate-in fade-in duration-200">
                  ¡IP Copiada!
                </span>
              )}
            </button>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab('spawns')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'spawns'
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span className="hidden sm:inline">Radar & Spawns</span>
              <span className="sm:hidden">Spawns</span>
            </button>

            <button
              onClick={() => setActiveTab('calculator')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'calculator'
                  ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/40 shadow-sm shadow-indigo-500/10'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
              }`}
            >
              <Target className="w-4 h-4" />
              <span className="hidden sm:inline">Calculador Captura</span>
              <span className="sm:hidden">Captura</span>
            </button>

            <button
              onClick={() => setActiveTab('pokedex')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'pokedex'
                  ? 'bg-sky-500/15 text-sky-300 border border-sky-500/40 shadow-sm shadow-sky-500/10'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Pokédex</span>
            </button>

            <button
              onClick={() => setActiveTab('drops')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'drops'
                  ? 'bg-amber-500/15 text-amber-300 border border-amber-500/40 shadow-sm shadow-amber-500/10'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
              }`}
            >
              <Gem className="w-4 h-4" />
              <span>Drops</span>
            </button>
          </nav>

          {/* Right Actions: Quick Search (⌘K) & Info */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 text-slate-400 hover:text-slate-200 text-xs font-medium transition-all group"
            >
              <Search className="w-3.5 h-3.5 group-hover:text-cyan-400 transition-colors" />
              <span className="hidden lg:inline">Buscar...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-semibold text-slate-500 bg-slate-950 border border-slate-800 rounded">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={onOpenInfo}
              className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 text-slate-400 hover:text-cyan-400 transition-colors"
              title="Información del Servidor Diosesmon"
            >
              <Info className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
