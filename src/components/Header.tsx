import React, { useState, useEffect } from 'react';
import { Compass, Target, BookOpen, Gem, Search, Info, Copy, Check, ShieldCheck, Map, Sparkles, Scroll, Swords, Activity, Package, Trophy, Gamepad2, User } from 'lucide-react';
import { WorldClockWidget } from './WorldClockWidget';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenInfoModal: () => void;
  onOpenCommandPalette: () => void;
  onOpenProfileModal: () => void;
}

export const SERVER_IP = 'mc.diosesmon.net';

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenInfoModal,
  onOpenCommandPalette,
  onOpenProfileModal
}) => {
  const [copied, setCopied] = useState(false);
  const [username, setUsername] = useState<string>(() => {
    return localStorage.getItem('diosesmon_username') || '';
  });

  useEffect(() => {
    const handleStorage = () => {
      setUsername(localStorage.getItem('diosesmon_username') || '');
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleCopyIp = () => {
    navigator.clipboard.writeText(SERVER_IP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const avatarUrl = username
    ? `https://minotar.net/avatar/${encodeURIComponent(username)}/32`
    : null;

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
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-zinc-950/95 border-b border-zinc-800 shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-4">
          
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setActiveTab('spawns')}>
              {/* Pokeball Icon Badge */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-zinc-900 border border-zinc-700 shadow-sm group-hover:border-red-500 transition-colors relative flex items-center justify-center overflow-hidden shrink-0">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-red-600 border-b border-zinc-950"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-zinc-200"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-950 border-2 border-white z-10"></div>
              </div>

              <div>
                <div className="flex items-center gap-1">
                  <span className="font-extrabold text-base sm:text-lg tracking-tight text-white">
                    Diosesmon <span className="text-red-500">Dex</span>
                  </span>
                  <span className="px-1.5 py-0.5 text-[9px] sm:text-[10px] font-extrabold uppercase rounded bg-red-600 text-white shadow-sm">
                    Wiki
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-zinc-400 font-medium hidden sm:block">
                  Cobblemon 1.7.3 • Fabric 1.21.1
                </p>
              </div>
            </div>

            {/* Server IP Quick Copy Pill */}
            <button
              onClick={handleCopyIp}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-300 transition-all group relative"
              title="Copiar dirección IP del servidor"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{SERVER_IP}</span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400 animate-in zoom-in" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-red-400 transition-colors" />
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

          {/* Right Action Controls: Search, Profile & Info */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            
            {/* User Profile Minecraft Badge Button */}
            <button
              onClick={onOpenProfileModal}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-bold text-zinc-200 transition-all active:scale-95"
              title="Perfil de Jugador Minecraft"
            >
              {avatarUrl ? (
                <img src={avatarUrl} alt={username} className="w-5 h-5 rounded-md object-contain shrink-0" />
              ) : (
                <User className="w-4 h-4 text-red-500 shrink-0" />
              )}
              <span className="max-w-[70px] sm:max-w-[100px] truncate font-mono">
                {username || 'Perfil'}
              </span>
            </button>

            {/* Search Palette Button */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-300 transition-all active:scale-95"
            >
              <Search className="w-4 h-4 text-red-500" />
              <span className="text-xs hidden sm:inline">Buscar...</span>
              <kbd className="hidden sm:inline px-1.5 py-0.5 text-[10px] font-mono bg-zinc-950 rounded border border-zinc-800 text-zinc-400">
                ⌘K
              </kbd>
            </button>

            {/* Info Modal Button */}
            <button
              onClick={onOpenInfoModal}
              className="p-2 sm:p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-all active:scale-95"
              title="Información del Servidor Diosesmon"
            >
              <Info className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Mobile-Optimized Horizontal Touch Navigation Tabs */}
        <nav className="flex items-center gap-1.5 overflow-x-auto pb-2 pt-1.5 scrollbar-none touch-pan-x border-t border-zinc-800/80">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all touch-manipulation min-h-[38px] ${
                  isActive
                    ? 'bg-red-600 text-white border border-red-500 shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 border border-transparent'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-zinc-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
