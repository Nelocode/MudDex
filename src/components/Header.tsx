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
    <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-gradient-to-r from-red-950/95 via-rose-950/95 to-red-950/95 border-b-2 border-red-600/70 shadow-2xl shadow-red-950/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Authentic Pokédex Top Shell & Brand */}
          <div className="flex items-center gap-4">
            
            {/* Pokédex Sensor Eye & 3 LED Indicators */}
            <div className="hidden sm:flex items-center gap-2 shrink-0 pr-3 border-r border-red-800/60">
              {/* Blue Glass Camera Sensor Eye */}
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-sky-600 via-sky-300 to-cyan-100 border-2 border-white shadow-lg shadow-sky-400/60 relative flex items-center justify-center animate-pulse">
                <div className="w-3.5 h-3.5 rounded-full bg-white/90 shadow-sm"></div>
              </div>
              {/* 3 Pokédex LEDs */}
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500 border border-red-700 shadow-md shadow-red-500/80 animate-ping-slow"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400 border border-amber-600 shadow-md shadow-amber-400/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500 border border-emerald-700 shadow-md shadow-emerald-500/80"></div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 group cursor-pointer" onClick={() => setActiveTab('spawns')}>
              {/* Pokelinker-style Pokeball Logo */}
              <div className="w-10 h-10 rounded-full bg-slate-950 border-2 border-red-500 shadow-xl shadow-red-600/40 group-hover:scale-110 transition-transform duration-300 relative flex items-center justify-center overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-red-600 via-rose-500 to-red-600 border-b-2 border-slate-950"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-slate-100"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-white z-10 shadow-sm group-hover:scale-125 transition-transform duration-300"></div>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-xl tracking-tight bg-gradient-to-r from-white via-rose-100 to-amber-200 bg-clip-text text-transparent drop-shadow">
                    Diosesmon
                  </span>
                  <span className="px-2 py-0.5 text-[11px] font-black uppercase rounded-lg bg-red-600 text-white shadow-md shadow-red-600/40 border border-red-400">
                    POKÉDEX
                  </span>
                </div>
                <p className="text-[11px] text-rose-300/80 font-medium hidden sm:block">
                  Servidor Oficial • Cobblemon 1.7.3
                </p>
              </div>
            </div>

            {/* Server IP Quick Copy Pill */}
            <button
              onClick={handleCopyIp}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-xl bg-red-950/80 hover:bg-red-900/80 border border-red-800/80 text-xs font-mono text-rose-200 transition-all duration-200 group relative shadow-inner"
              title="Copiar dirección IP del servidor"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{SERVER_IP}</span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400 animate-in zoom-in" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-rose-400 group-hover:text-white transition-colors" />
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
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-red-950/80 hover:bg-red-900/80 border border-red-800/80 text-xs font-medium text-rose-200 hover:text-white transition-all duration-200"
            >
              <Search className="w-3.5 h-3.5 text-rose-400" />
              <span>Buscar...</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-red-950 rounded border border-red-800 text-rose-300">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={onOpenInfoModal}
              className="p-2 rounded-xl bg-red-950/80 hover:bg-red-900/80 border border-red-800/80 text-rose-300 hover:text-white transition-all duration-200"
              title="Información del Servidor Diosesmon"
            >
              <Info className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Pokédex Screen Tabs Bar */}
        <nav className="flex items-center gap-1.5 overflow-x-auto pb-2.5 pt-1 custom-scrollbar-horizontal border-t border-red-800/40">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-red-600 text-white border border-red-400 shadow-md shadow-red-600/40 font-black'
                    : 'text-rose-200/80 hover:text-white hover:bg-red-900/50 border border-transparent'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-rose-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
