import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { PokedexView } from './components/PokedexView';
import { SpawnRadarView } from './components/SpawnRadarView';
import { CatchCalculatorView } from './components/CatchCalculatorView';
import { BreedingPlannerView } from './components/BreedingPlannerView';
import { DropsView } from './components/DropsView';
import { HeldItemsView } from './components/HeldItemsView';
import { TypeMatrixView } from './components/TypeMatrixView';
import { TierListView } from './components/TierListView';
import { PokeQuizView } from './components/PokeQuizView';
import { BiomeGuideView } from './components/BiomeGuideView';
import { ShinyHunterView } from './components/ShinyHunterView';
import { MovesCompendiumView } from './components/MovesCompendiumView';
import { BossCountersView } from './components/BossCountersView';
import { EvTrainingView } from './components/EvTrainingView';
import { DiosesmonInfoModal } from './components/DiosesmonInfoModal';
import { CommandPaletteModal } from './components/CommandPaletteModal';
import { UserProfileModal } from './components/UserProfileModal';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('spawns');
  const [selectedPokemonId, setSelectedPokemonId] = useState<string>('snorlax');
  const [isInfoModalOpen, setIsInfoModalOpen] = useState<boolean>(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);

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

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-red-600 selection:text-white flex flex-col justify-between">
      
      {/* Background Decorative Pure Neutral Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-zinc-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Navigation Bar */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenInfoModal={() => setIsInfoModalOpen(true)}
          onOpenCommandPalette={() => setIsSearchModalOpen(true)}
          onOpenProfileModal={() => setIsProfileModalOpen(true)}
        />

        {/* View Router */}
        <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
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
              onSelectPokemonForSpawns={handleSelectPokemonForSpawns}
              onSelectPokemonForCalculator={handleSelectPokemonForCalculator}
            />
          )}

          {activeTab === 'breeding' && <BreedingPlannerView />}

          {activeTab === 'drops' && <DropsView />}

          {activeTab === 'helditems' && <HeldItemsView />}

          {activeTab === 'typematrix' && <TypeMatrixView />}

          {activeTab === 'tierlist' && <TierListView />}

          {activeTab === 'quiz' && <PokeQuizView />}

          {activeTab === 'biomes' && <BiomeGuideView />}

          {activeTab === 'shinies' && <ShinyHunterView />}

          {activeTab === 'moves' && <MovesCompendiumView />}

          {activeTab === 'bosses' && <BossCountersView />}

          {activeTab === 'evs' && <EvTrainingView />}
        </main>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-800 bg-zinc-950/90 py-6 px-3 sm:py-10 text-center text-xs text-zinc-400 space-y-2">
        <p className="font-medium text-zinc-300">
          MudDex • Plataforma Oficial creada por <strong className="text-amber-400 font-extrabold">Mudkill</strong> para Diosesmon (Fabric 1.21.1)
        </p>
        <p className="text-zinc-400">
          Desarrollado para el servidor Diosesmon. Pokémon y sus nombres son marcas registradas de Nintendo / Creatures Inc. / GAME FREAK inc.
        </p>
      </footer>

      {/* Modals */}
      <DiosesmonInfoModal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
      />

      <CommandPaletteModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectPokemon={(pokemonId, targetTab) => {
          setSelectedPokemonId(pokemonId);
          setActiveTab(targetTab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <UserProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />

    </div>
  );
}
