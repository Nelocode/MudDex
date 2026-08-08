import React, { useState, useEffect } from 'react';
import { Search, X, Compass, Target, BookOpen, ChevronRight } from 'lucide-react';
import { COBBLEMON_POKEDEX } from '../data/cobblemonPokedex';
import { Pokemon } from '../types/diosesmon';

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
    if (!isOpen) setQuery('');
  }, [isOpen]);

  if (!isOpen) return null;

  const results = query
    ? COBBLEMON_POKEDEX.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.id.toLowerCase().includes(query.toLowerCase()) ||
        String(p.dexNumber).includes(query)
      ).slice(0, 8)
    : COBBLEMON_POKEDEX.slice(0, 5);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-zinc-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-3xl space-y-0 shadow-2xl overflow-hidden">
        
        {/* Search Bar Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-zinc-800">
          <Search className="w-5 h-5 text-red-500 shrink-0" />
          <input
            type="text"
            placeholder="Buscar Pokémon por nombre o número (ej: Pikachu, Snorlax, 150)..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-500 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-3 max-h-96 overflow-y-auto space-y-1">
          {results.map(p => (
            <div
              key={p.id}
              className="flex items-center justify-between p-3 rounded-2xl bg-zinc-950/50 hover:bg-zinc-950 border border-transparent hover:border-zinc-800 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 p-1 flex items-center justify-center">
                  <img src={p.spriteUrl || p.artworkUrl} alt={p.name} className="max-h-full object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-white group-hover:text-red-400 transition-colors">
                      {p.name}
                    </h4>
                    <span className="text-[10px] font-mono text-zinc-500">#{String(p.dexNumber).padStart(3, '0')}</span>
                  </div>
                  <div className="flex gap-1 mt-0.5">
                    {p.types.map(t => (
                      <span key={t} className="px-1.5 py-0.2 text-[9px] font-bold uppercase rounded bg-zinc-900 text-zinc-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1.5 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => {
                    onSelectPokemon(p.id, 'spawns');
                    onClose();
                  }}
                  className="px-2.5 py-1 rounded-lg bg-red-600/10 hover:bg-red-600/20 text-red-400 text-[10px] font-bold border border-red-500/30 flex items-center gap-1"
                >
                  <Compass className="w-3 h-3" />
                  <span>Spawns</span>
                </button>

                <button
                  onClick={() => {
                    onSelectPokemon(p.id, 'calculator');
                    onClose();
                  }}
                  className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-[10px] font-bold border border-zinc-700 flex items-center gap-1"
                >
                  <Target className="w-3 h-3" />
                  <span>Captura</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
          <span>Usa los botones para navegar directo al módulo</span>
          <span>ESC para cerrar</span>
        </div>

      </div>
    </div>
  );
};
