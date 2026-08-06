import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SpawnRadarView } from './components/SpawnRadarView';
import { CatchCalculatorView } from './components/CatchCalculatorView';
import { PokedexView } from './components/PokedexView';
import { DropsView } from './components/DropsView';
import { DiosesmonInfoModal } from './components/DiosesmonInfoModal';
import { CommandPaletteModal } from './components/CommandPaletteModal';
import { PwaInstallPrompt } from './components/PwaInstallPrompt';
import { Sparkles, ShieldCheck, Heart } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<'spawns' | 'calculator' | 'pokedex' | 'drops'>('spawns');
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
      
      {/* Background Decorative Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10">
        
        {/* Navigation Header */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenSearch={() => setIsSearchModalOpen(true)}
          onOpenInfo={() => setIsInfoModalOpen(true)}
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
        </main>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/90 py-8 px-4 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5 shadow-md shadow-cyan-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-white">Diosesmon Dex</h3>
              <p className="text-xs text-slate-500">Cobblemon 1.7.3 • Fabric 1.21.1 Companion Platform</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <button
              onClick={() => setIsInfoModalOpen(true)}
              className="hover:text-cyan-300 transition-colors flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> mc.diosesmon.net
            </button>
            <span>•</span>
            <span className="text-slate-500">No afiliado a Nintendo, Game Freak o Mojang.</span>
          </div>

          <div className="text-xs text-slate-500 flex items-center gap-1">
            <span>Hecho con</span> <Heart className="w-3.5 h-3.5 text-rose-500 inline fill-rose-500" /> <span>para la comunidad Diosesmon</span>
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
