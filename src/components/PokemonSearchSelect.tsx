import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, ChevronDown, Check, X } from 'lucide-react';
import { POKEMON_EGG_DATASET, PokemonEggData, EGG_GROUPS_INFO } from '../data/cobblemonEggGroups';

interface PokemonSearchSelectProps {
  value: string;
  onChange: (pokemonId: string) => void;
  label?: string;
  placeholder?: string;
}

export const PokemonSearchSelect: React.FC<PokemonSearchSelectProps> = ({
  value,
  onChange,
  label = 'Pokémon Objetivo:',
  placeholder = 'Buscar por nombre, # Pokédex o Grupo Huevo (ej: Eevee, #025, Bicho, Campo, Mineral)...'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedPokemon = useMemo(() => {
    return POKEMON_EGG_DATASET.find(p => p.pokemonId === value) || POKEMON_EGG_DATASET[0];
  }, [value]);

  const filteredList = useMemo(() => {
    if (!searchTerm.trim()) {
      return POKEMON_EGG_DATASET.slice(0, 50);
    }
    const term = searchTerm.toLowerCase().trim();
    return POKEMON_EGG_DATASET.filter(p => {
      const matchName = p.pokemonName.toLowerCase().includes(term);
      const matchDex = String(p.dexNumber).includes(term) || `#${String(p.dexNumber).padStart(3, '0')}`.includes(term);
      const matchId = p.pokemonId.includes(term);

      // Egg group matching (search by English or Spanish name)
      const matchEggGroup = p.eggGroups.some(eg => {
        const info = EGG_GROUPS_INFO[eg];
        if (!info) return eg.toLowerCase().includes(term);
        return eg.toLowerCase().includes(term) || info.nameEs.toLowerCase().includes(term);
      });

      return matchName || matchDex || matchId || matchEggGroup;
    }).slice(0, 60);
  }, [searchTerm]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="space-y-1.5 relative">
      {label && <label className="text-xs font-bold text-zinc-400 block">{label}</label>}

      {/* Selected Box / Search Input */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(prev => !prev)}
          className="w-full px-3.5 py-2.5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-red-500/50 text-white font-bold text-xs flex items-center justify-between transition-all shadow-md focus:outline-none"
        >
          <div className="flex items-center gap-3 overflow-hidden">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectedPokemon.dexNumber}.png`}
              alt={selectedPokemon.pokemonName}
              className="w-7 h-7 object-contain drop-shadow shrink-0"
            />
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="font-mono text-[10px] text-amber-400 bg-amber-950 px-2 py-0.5 rounded-md border border-amber-800 shrink-0">
                #{String(selectedPokemon.dexNumber).padStart(3, '0')}
              </span>
              <span className="font-extrabold text-white text-xs truncate">{selectedPokemon.pokemonName}</span>
              <div className="hidden md:flex items-center gap-1">
                {selectedPokemon.eggGroups.map(eg => {
                  const info = EGG_GROUPS_INFO[eg];
                  return (
                    <span key={eg} className="text-[9px] font-mono text-zinc-400 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">
                      {info ? `${info.icon} ${info.nameEs.split(' ')[0]}` : eg}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-zinc-400 shrink-0">
            <span className="text-[10px] text-zinc-500 font-mono hidden sm:inline">Cambiar</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180 text-red-500' : ''}`} />
          </div>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-900 border border-zinc-800 rounded-2xl p-3 shadow-2xl z-50 space-y-2 backdrop-blur-xl">
            {/* Search Input inside Dropdown */}
            <div className="relative">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                autoFocus
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={placeholder}
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white font-mono text-xs focus:outline-none focus:border-red-500"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Helper notice */}
            <div className="text-[10px] text-zinc-400 px-1 flex items-center justify-between font-mono">
              <span>💡 Puedes buscar por nombre, # Pokédex o Grupo Huevo.</span>
              <span>{filteredList.length} resultados</span>
            </div>

            {/* Results List */}
            <div className="max-h-64 overflow-y-auto space-y-1 scrollbar-thin pr-1">
              {filteredList.length === 0 ? (
                <div className="p-4 text-center text-zinc-500 text-xs font-mono">
                  No se encontraron Pokémon con "{searchTerm}"
                </div>
              ) : (
                filteredList.map(pokemon => {
                  const isSelected = pokemon.pokemonId === value;

                  return (
                    <button
                      key={pokemon.pokemonId}
                      type="button"
                      onClick={() => {
                        onChange(pokemon.pokemonId);
                        setIsOpen(false);
                        setSearchTerm('');
                      }}
                      className={`w-full p-2 rounded-xl border flex items-center justify-between text-xs transition-all ${
                        isSelected
                          ? 'bg-red-600/20 border-red-500 text-white font-bold'
                          : 'bg-zinc-950/60 border-zinc-800/80 hover:bg-zinc-800/80 hover:border-zinc-700 text-zinc-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <img
                          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.dexNumber}.png`}
                          alt={pokemon.pokemonName}
                          className="w-6 h-6 object-contain shrink-0"
                        />
                        <span className="font-mono text-[10px] text-zinc-400 shrink-0">
                          #{String(pokemon.dexNumber).padStart(3, '0')}
                        </span>
                        <span className="font-bold text-white truncate">{pokemon.pokemonName}</span>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {pokemon.eggGroups.map(eg => {
                          const info = EGG_GROUPS_INFO[eg];
                          return (
                            <span key={eg} className="text-[9px] font-mono text-zinc-400 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">
                              {info ? `${info.icon} ${info.nameEs.split(' ')[0]}` : eg}
                            </span>
                          );
                        })}
                        {isSelected && <Check className="w-4 h-4 text-red-500 ml-1" />}
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
