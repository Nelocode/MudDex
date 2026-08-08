import React, { useState } from 'react';
import { Compass, Target, BookOpen, Gem, Search, Info, Copy, Check, ShieldCheck, Map, Sparkles, Scroll, Swords, Activity, Package, Trophy, Gamepad2 } from 'lucide-react';
import { WorldClockWidget } from './WorldClockWidget';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenInfoModal: () => void;
  onOpenCommandPalette: () => void;
}

export const SERVER_IP = 'mc.diosesmon.net';

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenInfoModal,
  onOpenCommandPalette
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyIp = () => {
    navigator.clipboard.writeText(SERVER_IP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const tabs = [
    { id: 'spawns', label: 'Radar & Spawns', icon: Compass },
    { id: 'calculator', label: 'Calculador Captura', icon: Target },
    { id: 'pokedex', label: 'Pokédex', icon: BookOpen },
    { id: 'drops', label: 'Drops', icon: Gem },
    { id: 'helditems', label: 'Objetos & Bayas', icon: Package },
    { id: 'typematrix', label: 'Matriz de Tipos', icon: Target },
    { id: 'tierlist', label: 'Tier List PvP', icon: Trophy },
    { id: 'quiz', label: 'PokéQuiz', icon: Gamepad2 },
    { id: 'biomes', label: 'Biomas 1.21.1', icon: Map },
    { id: 'shinies', label: 'Shiny Hunting', icon: Sparkles },
    { id: 'moves', label: 'MTs & Movs', icon: Scroll },
    { id: 'bosses', label: 'Boss Counters', icon: Swords },
    { id: 'evs', label: 'EV Training', icon: Activity }
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-slate-950/90 border-b border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* WikiDex Clean Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2.5 group cursor-pointer" onClick={() => setActiveTab('spawns')}>
              {/* Pokeball Icon Badge */}
              <div className="w-9 h-9 rounded-full bg-slate-900 border border-slate-700 shadow-sm group-hover:border-cyan-500 transition-colors relative flex items-center justify-center overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-red-600 border-b border-slate-950"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-slate-200"></div>
                <div className="w-3 h-3 rounded-full bg-slate-950 border-2 border-white z-10"></div>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-lg tracking-tight text-white">
                    Diosesmon <span className="text-cyan-400">Dex</span>
                  </span>
                  <span className="px-1.5 py-0.5 text-[10px] font-extrabold uppercase rounded bg-slate-800 text-slate-300 border border-slate-700">
                    Wiki
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
              className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-xs font-mono text-slate-300 transition-all group relative"
              title="Copiar dirección IP del servidor"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{SERVER_IP}</span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400 animate-in zoom-in" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              )}
              {copied && (
                <span className="absolute inset-0 bg-emerald-500/20 border border-emerald-500/40 rounded-lg flex items-center justify-center text-[10px] font-bold text-emerald-300 animate-in fade-in duration-200">
                  ¡IP Copiada!
                </span>
              )}
            </button>

            {/* Minecraft World Clock & Weather Widget */}
            <div className="hidden xl:block">
              <WorldClockWidget />
            </div>
          </div>

          {/* Search Trigger Button & Info */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-xs font-medium text-slate-300 transition-all"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span>Buscar...</span>
              <kbd className="hidden sm:inline px-1.5 py-0.5 text-[10px] font-mono bg-slate-950 rounded border border-slate-800 text-slate-400">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={onOpenInfoModal}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-400 hover:text-white transition-all"
              title="Información del Servidor Diosesmon"
            >
              <Info className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* WikiDex Horizontal Navigation Tabs */}
        <nav className="flex items-center gap-1 overflow-x-auto pb-2 pt-1 custom-scrollbar-horizontal border-t border-slate-800/80">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-slate-800 text-cyan-400 border border-cyan-500/40 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
