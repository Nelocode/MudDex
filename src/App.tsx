import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SpawnRadarView } from './components/SpawnRadarView';
import { CatchCalculatorView } from './components/CatchCalculatorView';
import { PokedexView } from './components/PokedexView';
import { DropsView } from './components/DropsView';
import { BiomeGuideView } from './components/BiomeGuideView';
import { ShinyHunterView } from './components/ShinyHunterView';
import { MovesCompendiumView } from './components/MovesCompendiumView';
import { BossCountersView } from './components/BossCountersView';
import { EvTrainingView } from './components/EvTrainingView';
import { HeldItemsView } from './components/HeldItemsView';
import { TypeMatrixView } from './components/TypeMatrixView';
import { TierListView } from './components/TierListView';
import { PokeQuizView } from './components/PokeQuizView';
import { DiosesmonInfoModal } from './components/DiosesmonInfoModal';
import { CommandPaletteModal } from './components/CommandPaletteModal';
import { PwaInstallPrompt } from './components/PwaInstallPrompt';
import { Sparkles, ShieldCheck, Heart } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('spawns');
  const [selectedPokemonId, setSelectedPokemonId] = useState<string>('snorlax');
  const [isInfoModalOpen, setIsInfoModalOpen] = useState<boolean>(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);

  // Keyboard shortcut for Command Palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchModalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectPokemonForCalculator = (pokemonId: string) => {
    setSelectedPokemonId(pokemonId);
    setActiveTab('calculator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPokemonForSpawns = (pokemonId: string) => {
    setSelectedPokemonId(pokemonId);
    setActiveTab('spawns');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePaletteSelectPokemon = (id: string, view: 'spawns' | 'calculator' | 'pokedex') => {
    setSelectedPokemonId(id);
    setActiveTab(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 flex flex-col justify-between">
      
      {/* Background Decorative Pokédex Red & Amber Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-[160px]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10">
        
        {/* Navigation Header */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenCommandPalette={() => setIsSearchModalOpen(true)}
          onOpenInfoModal={() => setIsInfoModalOpen(true)}
        />

        {/* View Router */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {activeTab === 'spawns' && (
            <SpawnRadarView
              onSelectPokemonForCalculator={handleSelectPokemonForCalculator}
            />
          )}

          {activeTab === 'calculator' && (
            <CatchCalculatorView
              initialPokemonId={selectedPokemonId}
            />
          )}

          {activeTab === 'pokedex' && (
            <PokedexView
              onSelectPokemonForCalculator={handleSelectPokemonForCalculator}
              onSelectPokemonForSpawns={handleSelectPokemonForSpawns}
            />
          )}

          {activeTab === 'drops' && (
            <DropsView />
          )}

          {activeTab === 'helditems' && (
            <HeldItemsView />
          )}

          {activeTab === 'typematrix' && (
            <TypeMatrixView />
          )}

          {activeTab === 'tierlist' && (
            <TierListView />
          )}

          {activeTab === 'quiz' && (
            <PokeQuizView />
          )}

          {activeTab === 'biomes' && (
            <BiomeGuideView />
          )}

          {activeTab === 'shinies' && (
            <ShinyHunterView />
          )}

          {activeTab === 'moves' && (
            <MovesCompendiumView />
          )}

          {activeTab === 'bosses' && (
            <BossCountersView />
          )}

          {activeTab === 'evs' && (
            <EvTrainingView />
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/90 py-10 px-4 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-6 text-center">
          
          {/* Mudkill Logo & Brand */}
          <div className="flex flex-col items-center gap-3">
            <img
              src="/Mudkill.png"
              alt="Mudkill Logo"
              className="h-16 w-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
            />
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                Diosesmon Dex
              </span>
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                PRO 1.7.3
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <button
              onClick={() => setIsInfoModalOpen(true)}
              className="hover:text-cyan-300 transition-colors flex items-center gap-1 font-semibold"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Servidor Oficial: mc.diosesmon.net
            </button>
            <span>•</span>
            <span className="text-slate-500 max-w-lg leading-relaxed">
              No oficial. Diosesmon Dex es un proyecto independiente y no está afiliado, avalado ni patrocinado por Pokémon, Nintendo, Game Freak ni Mojang.
            </span>
          </div>

          <div className="text-xs text-slate-500 flex items-center gap-1.5 pt-2 border-t border-slate-900 w-full justify-center">
            <span>Desarrollado con</span> <Heart className="w-4 h-4 text-rose-500 inline fill-rose-500 animate-pulse" /> <span>para la comunidad de Diosesmon & Cobblemon</span>
          </div>

        </div>
      </footer>

      {/* Modals & Prompts */}
      <DiosesmonInfoModal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
      />

      <CommandPaletteModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectPokemon={handlePaletteSelectPokemon}
      />

      <PwaInstallPrompt />

    </div>
  );
}

export default App;
