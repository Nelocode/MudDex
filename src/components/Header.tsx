import React, { useState } from 'react';
import { Compass, Target, BookOpen, Gem, Search, Info, Copy, Check, ShieldCheck, Map, Sparkles, Scroll, Swords, Activity } from 'lucide-react';
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
    { id: 'spawns', label: 'Radar & Spawns', icon: Compass, color: 'cyan' },
    { id: 'calculator', label: 'Calculador Captura', icon: Target, color: 'indigo' },
    { id: 'pokedex', label: 'Pokédex', icon: BookOpen, color: 'sky' },
    { id: 'drops', label: 'Drops', icon: Gem, color: 'amber' },
    { id: 'biomes', label: 'Biomas 1.21.1', icon: Map, color: 'emerald' },
    { id: 'shinies', label: 'Shiny Hunting', icon: Sparkles, color: 'amber' },
    { id: 'moves', label: 'MTs & Movs', icon: Scroll, color: 'purple' },
    { id: 'bosses', label: 'Boss Counters', icon: Swords, color: 'rose' },
    { id: 'evs', label: 'EV Training', icon: Activity, color: 'blue' }
  ];

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
              className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-300 transition-all duration-200 group relative"
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

            {/* Minecraft World Clock & Weather Widget */}
            <div className="hidden xl:block">
              <WorldClockWidget />
            </div>
          </div>

          {/* Quick Action Buttons & Command Palette Trigger */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCommandPalette}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-400 hover:text-slate-200 transition-all duration-200"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Buscar...</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-slate-950 rounded border border-slate-800 text-slate-400">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={onOpenInfoModal}
              className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-all duration-200"
              title="Información del Servidor Diosesmon"
            >
              <Info className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Navigation Tabs Bar */}
        <nav className="flex items-center gap-1.5 overflow-x-auto pb-2.5 pt-1 custom-scrollbar-horizontal border-t border-slate-800/60">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
