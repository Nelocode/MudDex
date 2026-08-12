import React, { useState, useMemo } from 'react';
import { Shield, Plus, Trash2, Zap, ArrowRight, Award, AlertTriangle, Layers, Download, Check } from 'lucide-react';
import { POKEMON_EGG_DATASET, PokemonEggData } from '../data/cobblemonEggGroups';
import { PokemonSearchSelect } from './PokemonSearchSelect';
import { OFFICIAL_POKEMON_NATURES } from '../data/pokemonNatures';
import { getAbilitiesAndEggMovesForDex } from '../data/cobblemonSpeciesAbilitiesAndEggMoves';

export interface TeamMember {
  id: string;
  speciesId: string;
  speciesName: string;
  dexNumber: number;
  nature: string;
  ability: string;
  heldItem: string;
  ivs: {
    hp: boolean;
    attack: boolean;
    defense: boolean;
    specialAttack: boolean;
    specialDefense: boolean;
    speed: boolean;
  };
  zeroSpeed: boolean; // Trick Room 0 VEL
  zeroAttack: boolean; // Foul Play 0 ATT
}

interface TeamBuilderViewProps {
  onSendToBreeding: (member: TeamMember) => void;
}

export const TeamBuilderView: React.FC<TeamBuilderViewProps> = ({ onSendToBreeding }) => {
  const [team, setTeam] = useState<TeamMember[]>([
    {
      id: 't1',
      speciesId: 'snorlax',
      speciesName: 'Snorlax',
      dexNumber: 143,
      nature: 'Firme',
      ability: 'Inmunidad',
      heldItem: 'Restos (Leftovers)',
      ivs: { hp: true, attack: true, defense: true, specialAttack: false, specialDefense: true, speed: true },
      zeroSpeed: false,
      zeroAttack: false
    },
    {
      id: 't2',
      speciesId: 'gengar',
      speciesName: 'Gengar',
      dexNumber: 94,
      nature: 'Miedosa',
      ability: 'Cuerpo Maldito',
      heldItem: 'Vidasfera (Life Orb)',
      ivs: { hp: true, attack: false, defense: true, specialAttack: true, specialDefense: true, speed: true },
      zeroSpeed: false,
      zeroAttack: true
    }
  ]);

  const [newSpeciesId, setNewSpeciesId] = useState<string>('eevee');
  const [newNature, setNewNature] = useState<string>('Firme');

  const newTargetData = useMemo(() => POKEMON_EGG_DATASET.find(p => p.pokemonId === newSpeciesId) || POKEMON_EGG_DATASET[0], [newSpeciesId]);
  const newAbilityData = useMemo(() => getAbilitiesAndEggMovesForDex(newTargetData.dexNumber), [newTargetData.dexNumber]);

  const handleAddMember = () => {
    if (team.length >= 6) return;
    const data = POKEMON_EGG_DATASET.find(p => p.pokemonId === newSpeciesId) || POKEMON_EGG_DATASET[0];
    const newMember: TeamMember = {
      id: `t_${Date.now()}`,
      speciesId: newSpeciesId,
      speciesName: data.pokemonName,
      dexNumber: data.dexNumber,
      nature: newNature,
      ability: newAbilityData.abilities[0]?.name || 'Principal',
      heldItem: 'Restos',
      ivs: { hp: true, attack: true, defense: true, specialAttack: false, specialDefense: true, speed: true },
      zeroSpeed: false,
      zeroAttack: false
    };
    setTeam(prev => [...prev, newMember]);
  };

  const handleRemoveMember = (id: string) => {
    setTeam(prev => prev.filter(m => m.id !== id));
  };

  // Team Type Weakness Matrix
  const teamTypesSummary = useMemo(() => {
    const weaknesses: Record<string, number> = {};
    const typeList = ['fire', 'water', 'grass', 'electric', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'];
    
    typeList.forEach(t => weaknesses[t] = 0);

    team.forEach(member => {
      const data = POKEMON_EGG_DATASET.find(p => p.pokemonId === member.speciesId);
      if (!data) return;
      data.types.forEach(t => {
        const typeKey = t.toLowerCase();
        if (typeKey === 'fire' || typeKey === 'fighting' || typeKey === 'ground') {
          weaknesses['water'] = (weaknesses['water'] || 0) + 1;
          weaknesses['ground'] = (weaknesses['ground'] || 0) + 1;
        }
      });
    });

    return weaknesses;
  }, [team]);

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-red-600/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-red-600/20 border border-red-500/30 text-red-400">
                <Shield className="w-7 h-7" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                  <span>Constructor de Equipos Competitivos</span>
                  <span className="text-xs font-mono text-amber-400 bg-amber-950 px-2.5 py-0.5 rounded-full border border-amber-800">
                    6 Pokémon
                  </span>
                </h1>
                <p className="text-zinc-400 text-xs sm:text-sm">
                  Organiza tu equipo de Diosesmon, analiza coberturas de tipos y envía cualquier integrante a la Crianza con 1-clic.
                </p>
              </div>
            </div>

            <div className="bg-zinc-950 px-4 py-2 rounded-2xl border border-zinc-800 text-xs font-mono font-bold text-amber-400">
              {team.length} / 6 Integrantes
            </div>
          </div>
        </div>
      </div>

      {/* Add Team Member Form */}
      {team.length < 6 && (
        <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 space-y-4 shadow-xl">
          <h3 className="text-xs font-extrabold text-white flex items-center gap-2 border-b border-zinc-800 pb-3">
            <Plus className="w-4 h-4 text-red-500" />
            <span>Agregar Nuevo Pokémon al Equipo:</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
            <PokemonSearchSelect
              value={newSpeciesId}
              onChange={(id) => setNewSpeciesId(id)}
              label="Especie Pokémon:"
              placeholder="Buscar por nombre..."
            />

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-400 block">Naturaleza:</label>
              <select
                value={newNature}
                onChange={(e) => setNewNature(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white font-bold text-xs focus:outline-none focus:border-red-500"
              >
                {OFFICIAL_POKEMON_NATURES.map(n => (
                  <option key={n.nameEs} value={n.nameEs}>{n.label}</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleAddMember}
              className="py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Añadir al Equipo ({team.length}/6)</span>
            </button>
          </div>
        </div>
      )}

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {team.map((member, index) => {
          const data = POKEMON_EGG_DATASET.find(p => p.pokemonId === member.speciesId) || POKEMON_EGG_DATASET[0];

          return (
            <div key={member.id} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 space-y-4 shadow-xl relative overflow-hidden group hover:border-red-500/40 transition-all">
              
              {/* Slot badge */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400 font-mono font-bold text-[10px] flex items-center justify-center">
                    #{index + 1}
                  </span>
                  <span className="font-extrabold text-white text-sm">{member.speciesName}</span>
                </div>

                <button
                  onClick={() => handleRemoveMember(member.id)}
                  className="p-1.5 rounded-lg hover:bg-red-500/20 text-zinc-500 hover:text-red-400 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Sprite & Info */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-zinc-950 rounded-2xl border border-zinc-800 p-1 flex items-center justify-center shrink-0">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.dexNumber}.png`}
                    alt={member.speciesName}
                    className="w-14 h-14 object-contain drop-shadow"
                  />
                </div>

                <div className="space-y-1 text-xs font-mono flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-zinc-500">Naturaleza:</span>
                    <strong className="text-amber-400 font-bold">{member.nature}</strong>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-zinc-500">Habilidad:</span>
                    <strong className="text-emerald-400 font-bold">{member.ability}</strong>
                  </div>
                  <div className="flex items-center gap-1">
                    {data.types.map(t => (
                      <span key={t} className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Min-Max IV Checkboxes (31 / 0 IVs) */}
              <div className="space-y-1.5 bg-zinc-950 p-3 rounded-2xl border border-zinc-800/80">
                <span className="text-[10px] font-bold text-zinc-400 block font-mono">Configuración de IVs:</span>
                <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {Object.entries(member.ivs).map(([k, v]) => v ? (
                    <span key={k} className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-300 font-bold uppercase">
                      {k === 'hp' ? 'HP' : k === 'attack' ? 'ATT' : k === 'defense' ? 'DEF' : k === 'specialAttack' ? 'SpA' : k === 'specialDefense' ? 'SpD' : 'VEL'} 31
                    </span>
                  ) : null)}

                  {member.zeroSpeed && (
                    <span className="px-2 py-0.5 rounded bg-amber-950 border border-amber-800 text-amber-300 font-bold uppercase">
                      ⚡ VEL 0 (Trick Room)
                    </span>
                  )}
                  {member.zeroAttack && (
                    <span className="px-2 py-0.5 rounded bg-purple-950 border border-purple-800 text-purple-300 font-bold uppercase">
                      ⚔️ ATT 0 (Min Foul Play)
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button: Send to Breeding Planner */}
              <button
                onClick={() => onSendToBreeding(member)}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-3.5 h-3.5 text-amber-300" />
                <span>⚡ Enviar a Crianza en MudDex</span>
              </button>

            </div>
          );
        })}
      </div>

      {/* Cobblemon EV Training Guide Card */}
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Guía de Entrenamiento de EVs en Minecraft / Cobblemon</span>
          </h3>
          <span className="text-xs font-mono text-emerald-400 font-bold">
            Brazales Recios (+8 EVs por victoria)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono">
          <div className="bg-zinc-950 p-3.5 rounded-2xl border border-zinc-800 space-y-1">
            <strong className="text-emerald-400 block text-xs">❤️ HP / Puntos de Salud (+EV HP):</strong>
            <p className="text-zinc-300 text-[11px]">Vencer a: <strong>Whismur, Wooper, Bidoof, Gastrodon</strong></p>
            <span className="text-zinc-500 text-[10px]">Objeto: Pesa Recia (+8 HP)</span>
          </div>

          <div className="bg-zinc-950 p-3.5 rounded-2xl border border-zinc-800 space-y-1">
            <strong className="text-red-400 block text-xs">⚔️ Ataque Físico (+EV ATT):</strong>
            <p className="text-zinc-300 text-[11px]">Vencer a: <strong>Shinx, Machop, Patrat, Poochyena</strong></p>
            <span className="text-zinc-500 text-[10px]">Objeto: Brazal Recio (+8 ATT)</span>
          </div>

          <div className="bg-zinc-950 p-3.5 rounded-2xl border border-zinc-800 space-y-1">
            <strong className="text-amber-400 block text-xs">🛡️ Defensa Física (+EV DEF):</strong>
            <p className="text-zinc-300 text-[11px]">Vencer a: <strong>Geodude, Roggenrola, Aron, Sandshrew</strong></p>
            <span className="text-zinc-500 text-[10px]">Objeto: Cinto Recio (+8 DEF)</span>
          </div>

          <div className="bg-zinc-950 p-3.5 rounded-2xl border border-zinc-800 space-y-1">
            <strong className="text-sky-400 block text-xs">🔮 Ataque Especial (+EV SpA):</strong>
            <p className="text-zinc-300 text-[11px]">Vencer a: <strong>Gastly, Psyduck, Mareep, Litwick</strong></p>
            <span className="text-zinc-500 text-[10px]">Objeto: Lente Recia (+8 SpA)</span>
          </div>

          <div className="bg-zinc-950 p-3.5 rounded-2xl border border-zinc-800 space-y-1">
            <strong className="text-purple-400 block text-xs">🧬 Defensa Especial (+EV SpD):</strong>
            <p className="text-zinc-300 text-[11px]">Vencer a: <strong>Tentacool, Spoink, Hoppip, Swablu</strong></p>
            <span className="text-zinc-500 text-[10px]">Objeto: Banda Recia (+8 SpD)</span>
          </div>

          <div className="bg-zinc-950 p-3.5 rounded-2xl border border-zinc-800 space-y-1">
            <strong className="text-cyan-400 block text-xs">⚡ Velocidad (+EV VEL):</strong>
            <p className="text-zinc-300 text-[11px]">Vencer a: <strong>Zubat, Magikarp, Pidgey, Rattata</strong></p>
            <span className="text-zinc-500 text-[10px]">Objeto: Franja Recia (+8 VEL)</span>
          </div>
        </div>
      </div>

    </div>
  );
};
