import React, { useState } from 'react';
import { Award, Zap, ShieldCheck, Users, Sparkles, BookOpen, Filter } from 'lucide-react';
import { SmogonBuild, PokemonSummary } from '../types/pokemon';
import { STAT_NAMES_ES, getGenerationFromId } from '../services/pokeapi';

interface SmogonBuildCardProps {
  pokemon: PokemonSummary;
  builds: SmogonBuild[];
  selectedBuildIndex: number;
  onSelectBuildIndex: (idx: number) => void;
}

export const SmogonBuildCard: React.FC<SmogonBuildCardProps> = ({
  pokemon,
  builds,
  selectedBuildIndex,
  onSelectBuildIndex
}) => {
  // Filtro de generaciones de compañeros: solo muestra compañeros de gen <= maxGen
  const [maxGen, setMaxGen] = useState<number | 'all'>('all');

  const currentBuild = builds[selectedBuildIndex] || builds[0];

  // Compañeros filtrados por generación
  const baseTeammates = currentBuild.teammates || [];
  const filteredTeammates = maxGen === 'all'
    ? baseTeammates
    : baseTeammates.filter(tm => getGenerationFromId(tm.id) <= maxGen);

  return (
    <div className="smogon-card glass-panel">
      <div className="smogon-header">
        <div>
          <div className="smogon-badge-row">
            <span className="smogon-tier-badge">{currentBuild.tier}</span>
            <span className="smogon-title-badge">Smogon Competitivo</span>
          </div>
          <h3 className="section-title">Construcción Recomendada para {pokemon.spanishName}</h3>
          <p className="section-subtitle">
            Una vez finalizada la crianza, entrena sus EVs, equipa estos objetos competitivos y enseña este moveset.
          </p>
        </div>

        {/* Tab Selector de Builds */}
        {builds.length > 1 && (
          <div className="build-tabs">
            {builds.map((b, idx) => (
              <button
                key={idx}
                className={`tab-btn ${selectedBuildIndex === idx ? 'active' : ''}`}
                onClick={() => onSelectBuildIndex(idx)}
              >
                {b.name}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="smogon-grid">
        {/* COLUMNA IZQUIERDA: MOVESET & OBJETOS */}
        <div className="smogon-left-col">
          <div className="build-summary-box">
            <div className="summary-row">
              <span className="summary-label">Naturaleza Recomendada:</span>
              <span className="summary-val highlight">{currentBuild.nature}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Objeto Equipado Recomendado:</span>
              <span className="summary-val highlight">{currentBuild.itemSpanish} ({currentBuild.item})</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Habilidad:</span>
              <span className="summary-val">{currentBuild.ability}</span>
            </div>
          </div>

          <h4 className="card-subtitle">
            <Zap size={18} color="#FFD700" /> Moveset Competitivo Recomendado
          </h4>
          <div className="moveset-list">
            {currentBuild.moves.map((slot, idx) => (
              <div key={idx} className="move-slot">
                <span className="slot-number">Slot {idx + 1}:</span>
                <div className="slot-moves">
                  {slot.map((m, mIdx) => (
                    <span key={mIdx} className="move-chip">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="build-description">{currentBuild.description}</p>
        </div>

        {/* COLUMNA DERECHA: REPARTICIÓN DE EVS & EQUIPO */}
        <div className="smogon-right-col">
          <h4 className="card-subtitle">
            <ShieldCheck size={18} color="#00D2FF" /> Repartición Recomendada de EVs
          </h4>
          <div className="ev-spread-bars">
            {(['hp', 'atk', 'def', 'spa', 'spd', 'spe'] as const).map(st => {
              const val = currentBuild.evs[st] || 0;
              const max = 252;
              const percentage = Math.round((val / max) * 100);
              return (
                <div key={st} className="ev-row">
                  <span className="ev-name">{STAT_NAMES_ES[st].short}</span>
                  <span className="ev-val">{val} EVs</span>
                  <div className="ev-track">
                    <div
                      className={`ev-fill ev-${st}`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* COMPAÑEROS DE EQUIPO Y SINERGIAS RECOMENDADAS */}
          <h4 className="card-subtitle" style={{ marginTop: '1.5rem' }}>
            <Users size={18} color="#00E676" /> Compañeros de Equipo & Sinergias Sugeridas
          </h4>

          {/* Filtro por Generación del Jugador */}
          <div className="teammate-gen-filter">
            <span className="teammate-filter-label"><Filter size={14} /> Mostrar compañeros hasta Gen:</span>
            <div className="teammate-gen-pills">
              <button
                className={`gen-pill teammate-gen-pill ${maxGen === 'all' ? 'active' : ''}`}
                onClick={() => setMaxGen('all')}
              >
                Todas
              </button>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(g => (
                <button
                  key={g}
                  className={`gen-pill teammate-gen-pill ${maxGen === g ? 'active' : ''}`}
                  onClick={() => setMaxGen(g)}
                  title={`Solo compañeros de la Gen 1 a la ${g}`}
                >
                  ≤Gen {g}
                </button>
              ))}
            </div>
            <p className="teammate-filter-hint">
              Ajusta el filtro según tu progreso en el juego: si apenas vas por la Gen {Math.max(1, pokemon.generation === 9 ? 6 : pokemon.generation)} o similar, elige esa generación para ver compañeros que ya puedes conseguir.
            </p>
          </div>

          <div className="teammates-grid">
            {filteredTeammates.length > 0 ? (
              filteredTeammates.map((tm, idx) => (
                <div key={idx} className="teammate-card">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${tm.id}.png`}
                    alt={tm.name}
                    className="teammate-sprite"
                  />
                  <div>
                    <span className="teammate-name">{tm.name} <span className="teammate-gen">(Gen {getGenerationFromId(tm.id)})</span></span>
                    <span className="teammate-reason">{tm.reason}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="teammates-empty">
                ⚠️ Ningún compañero de la build original está disponible en esa generación. Para equipos realistas con tu progreso, sube el filtro o considera compañeros alternativos.
              </div>
            )}
          </div>

          {filteredTeammates.length < baseTeammates.length && baseTeammates.length >= 2 && (
            <p className="teammate-filtered-note">
              Se ocultaron compañeros de generaciones posteriores a la Gen {maxGen} para que el equipo sea realista con tu progreso.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
