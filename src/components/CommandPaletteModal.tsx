import React, { useState, useEffect } from 'react';
import { Search, Compass, Target, BookOpen, Gem, ArrowRight } from 'lucide-react';
import { COBBLEMON_POKEDEX } from '../data/cobblemonPokedex';
import { COBBLEMON_POKEBALLS } from '../data/cobblemonPokeballs';
import { COBBLEMON_SPAWNS } from '../data/cobblemonSpawns';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPokemon: (id: string, view: 'spawns' | 'calculator' | 'pokedex') => void;
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  onSelectPokemon
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent or state toggle
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredMons = query.trim() === ''
    ? COBBLEMON_POKEDEX.slice(0, 5)
    : COBBLEMON_POKEDEX.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));

  const filteredBalls = query.trim() === ''
    ? []
    : COBBLEMON_POKEBALLS.filter(b => b.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden space-y-0">
        
        {/* Search Bar Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-800 bg-slate-950/50">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Buscar Pokémon, Pokébola o Comando (⌘K)..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm font-medium text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="text-xs text-slate-500 hover:text-slate-300 font-mono bg-slate-800 px-2 py-1 rounded"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-4">
          
          {/* Pokémon Section */}
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 px-3">
              Pokémon ({filteredMons.length})
            </span>

            {filteredMons.map(pokemon => (
              <div
                key={pokemon.id}
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/40 hover:bg-slate-800/80 border border-transparent hover:border-slate-700 transition-all cursor-pointer group"
                onClick={() => {
                  onSelectPokemon(pokemon.id, 'pokedex');
                  onClose();
                }}
              >
                <div className="flex items-center gap-3">
                  <img src={pokemon.artworkUrl || pokemon.spriteUrl} alt={pokemon.name} className="w-8 h-8 object-contain" />
                  <div>
                    <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {pokemon.name}
                    </h4>
                    <span className="text-[10px] text-slate-500 font-mono">Catch Rate: {pokemon.catchRate}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPokemon(pokemon.id, 'spawns');
                      onClose();
                    }}
                    className="px-2.5 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-[10px] font-bold border border-cyan-500/30 flex items-center gap-1"
                  >
                    <Compass className="w-3 h-3" /> Radar
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPokemon(pokemon.id, 'calculator');
                      onClose();
                    }}
                    className="px-2.5 py-1 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 text-[10px] font-bold border border-indigo-500/30 flex items-center gap-1"
                  >
                    <Target className="w-3 h-3" /> Captura
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pokéball Section */}
          {filteredBalls.length > 0 && (
            <div className="space-y-1 pt-2 border-t border-slate-800/60">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 px-3">
                Pokébolas
              </span>
              {filteredBalls.map(ball => (
                <div
                  key={ball.id}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-slate-950/40 hover:bg-slate-800/80 border border-transparent hover:border-slate-700 transition-all cursor-pointer"
                >
                  <img src={ball.icon} alt={ball.name} className="w-6 h-6 object-contain" />
                  <div>
                    <h4 className="text-xs font-bold text-white">{ball.name}</h4>
                    <p className="text-[10px] text-slate-400">{ball.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
