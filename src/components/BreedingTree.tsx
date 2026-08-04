import React, { useState } from 'react';
import {
  CheckCircle2,
  Circle,
  ArrowRight,
  Sparkles,
  AlertTriangle,
  Edit3,
  CheckCircle,
  X,
  RefreshCw
} from 'lucide-react';
import { BreedingStepNode, StatDict, ParentPokemon, BoxPokemon } from '../types/pokemon';
import { STAT_NAMES_ES, fetchPokemon, EGG_GROUPS_ES } from '../services/pokeapi';
import { validateEggGroupCompatibility } from '../services/breedingEngine';
import { getUserBox } from '../services/storage';

interface BreedingTreeProps {
  steps: BreedingStepNode[];
  onToggleStep: (stepNumber: number) => void;
  onUpdateStepParents?: (stepNumber: number, newParentA?: ParentPokemon, newParentB?: ParentPokemon) => void;
}

export const BreedingTree: React.FC<BreedingTreeProps> = ({
  steps,
  onToggleStep,
  onUpdateStepParents
}) => {
  const [editingStep, setEditingStep] = useState<number | null>(null);
  const [targetParentRole, setTargetParentRole] = useState<'A' | 'B'>('B');
  const [boxPokemonList] = useState<BoxPokemon[]>(getUserBox());
  const [customSearch, setCustomSearch] = useState('');
  const [loadingSearch, setLoadingSearch] = useState(false);

  const handleApplyBoxParent = (stepNumber: number, role: 'A' | 'B', boxItem: BoxPokemon) => {
    const newParent: ParentPokemon = {
      pokemonId: boxItem.pokemonId,
      speciesName: boxItem.speciesName,
      spanishName: boxItem.spanishName,
      sprite: boxItem.sprite,
      gender: boxItem.gender,
      ivs: boxItem.ivs,
      nature: boxItem.nature,
      ability: boxItem.ability,
      eggGroups: boxItem.eggGroups,
      isDitto: boxItem.isDitto,
      source: 'box'
    };

    const currentStep = steps.find(s => s.stepNumber === stepNumber);
    if (!currentStep) return;

    const parentA = role === 'A' ? newParent : currentStep.parentA;
    const parentB = role === 'B' ? newParent : currentStep.parentB;

    if (onUpdateStepParents) {
      onUpdateStepParents(stepNumber, parentA, parentB);
    }
    setEditingStep(null);
  };

  const handleCustomSearchParent = async (stepNumber: number, role: 'A' | 'B') => {
    if (!customSearch.trim()) return;
    setLoadingSearch(true);
    try {
      const poke = await fetchPokemon(customSearch.toLowerCase().trim());
      const newParent: ParentPokemon = {
        pokemonId: poke.id,
        speciesName: poke.name,
        spanishName: poke.spanishName,
        sprite: poke.sprite,
        gender: role === 'A' ? 'female' : 'male',
        ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
        eggGroups: poke.eggGroups,
        isDitto: poke.isDitto,
        source: 'wild'
      };

      const currentStep = steps.find(s => s.stepNumber === stepNumber);
      if (currentStep && onUpdateStepParents) {
        onUpdateStepParents(
          stepNumber,
          role === 'A' ? newParent : currentStep.parentA,
          role === 'B' ? newParent : currentStep.parentB
        );
      }
      setEditingStep(null);
    } catch (e) {
      alert('Pokémon no encontrado.');
    } finally {
      setLoadingSearch(false);
    }
  };

  return (
    <div className="breeding-tree-panel glass-panel">
      <div className="tree-header">
        <h3 className="section-title">🌳 Árbol Genealógico & Evaluación de Grupos Huevo</h3>
        <p className="section-subtitle">
          Sigue el diagrama paso a paso. Puedes personalizar o editar el padre/madre de cualquier paso para evaluar la compatibilidad de Grupo Huevo en tiempo real.
        </p>
      </div>

      <div className="tree-steps-flow">
        {steps.map((step, stepIdx) => {
          const validation = validateEggGroupCompatibility(step.parentA, step.parentB);
          const isLastStep = stepIdx === steps.length - 1;

          // Derivar el nombre de la cría: "Cría N" para intermedias, "Cría Final" para la última
          const matchCria = step.targetChild.spanishName.match(/CRÍA\s*(\d+)/i);
          const childLabel = isLastStep
            ? '🎯 Cría Final (Objetivo)'
            : matchCria
              ? `🥚 Cría ${matchCria[1]}`
              : '🥚 Cría';

          return (
            <div
              key={step.stepNumber}
              className={`step-node-card ${step.isCompleted ? 'completed-node' : ''} ${!validation.isCompatible ? 'incompatible-node' : ''}`}
            >
              {/* Header del Paso */}
              <div className="node-header">
                <div className="node-title-row">
                  <span className="node-step-badge">Paso {step.stepNumber}</span>
                  <h4 className="node-title">{step.title}</h4>
                </div>
                <button
                  className={`btn-check-step ${step.isCompleted ? 'checked' : ''}`}
                  onClick={() => onToggleStep(step.stepNumber)}
                >
                  {step.isCompleted ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                  <span>{step.isCompleted ? 'Paso Completado' : 'Marcar Completado'}</span>
                </button>
              </div>

              <p className="node-description">{step.description}</p>

              {/* Banner de Validación de Grupo Huevo */}
              <div className={`egg-validation-banner ${validation.isCompatible ? 'banner-compatible' : 'banner-incompatible'}`}>
                {validation.isCompatible ? (
                  <CheckCircle size={18} color="#00E676" />
                ) : (
                  <AlertTriangle size={20} color="#FF1744" className="animate-bounce" />
                )}
                <span>{validation.reason}</span>
              </div>

              {/* Gen 9 Mirror Herb Tip Banner */}
              {step.mirrorHerbTip && (
                <div className="mirror-herb-banner">
                  <Sparkles size={18} color="#FFD700" />
                  <span>{step.mirrorHerbTip}</span>
                </div>
              )}

              {/* Diagrama de Padres e Hijos */}
              <div className="lineage-diagram">
                {/* PADRE A */}
                <div className="parent-box parent-a">
                  <div className="parent-header">
                    <span className="gender-icon female">♀ Madre / Padre A</span>
                    <button
                      className="btn-edit-parent"
                      onClick={() => {
                        setEditingStep(step.stepNumber);
                        setTargetParentRole('A');
                      }}
                      title="Cambiar/Editar este Padre"
                    >
                      <Edit3 size={14} /> Editar
                    </button>
                  </div>

                  <div className="parent-content">
                    <img src={step.parentA.sprite} alt={step.parentA.spanishName} className="parent-sprite" />
                    <div>
                      <span className="parent-name">{step.parentA.spanishName}</span>
                      <span className="egg-groups-list">
                        Grupos: {step.parentA.eggGroups.map(g => EGG_GROUPS_ES[g] || g).join(', ')}
                      </span>
                      <div className="iv-summary-tags">
                        {renderIvTags(step.parentA.ivs)}
                      </div>
                    </div>
                  </div>

                  {step.parentA.heldItem && (
                    <div className="equipped-item-box">
                      <img src={step.parentA.heldItem.icon} alt={step.parentA.heldItem.spanishName} className="item-icon" />
                      <div>
                        <span className="item-name">{step.parentA.heldItem.spanishName}</span>
                        <span className="item-purpose">{step.parentA.heldItem.purpose}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* FLECHA DE CRUZA */}
                <div className="cross-connector">
                  <span className="plus-sign">+</span>
                  <ArrowRight className="arrow-icon" size={24} />
                </div>

                {/* PADRE B */}
                <div className="parent-box parent-b">
                  <div className="parent-header">
                    <span className="gender-icon male">♂ Padre B / Ditto</span>
                    <button
                      className="btn-edit-parent"
                      onClick={() => {
                        setEditingStep(step.stepNumber);
                        setTargetParentRole('B');
                      }}
                      title="Cambiar/Editar este Padre"
                    >
                      <Edit3 size={14} /> Editar
                    </button>
                  </div>

                  <div className="parent-content">
                    <img src={step.parentB.sprite} alt={step.parentB.spanishName} className="parent-sprite" />
                    <div>
                      <span className="parent-name">{step.parentB.spanishName}</span>
                      <span className="egg-groups-list">
                        Grupos: {step.parentB.eggGroups.map(g => EGG_GROUPS_ES[g] || g).join(', ')}
                      </span>
                      <div className="iv-summary-tags">
                        {renderIvTags(step.parentB.ivs)}
                      </div>
                    </div>
                  </div>

                  {step.parentB.heldItem && (
                    <div className="equipped-item-box">
                      <img src={step.parentB.heldItem.icon} alt={step.parentB.heldItem.spanishName} className="item-icon" />
                      <div>
                        <span className="item-name">{step.parentB.heldItem.spanishName}</span>
                        <span className="item-purpose">{step.parentB.heldItem.purpose}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* FLECHA AL RESULTADO */}
                <div className="result-connector">
                  <ArrowRight className="arrow-icon" size={28} />
                </div>

                {/* CRÍA RESULTANTE */}
                <div className="child-box">
                  <div className="child-header">
                    <span className={`child-badge ${isLastStep ? 'child-badge-final' : ''}`}>{childLabel}</span>
                  </div>
                  <div className="child-content">
                    <img src={step.targetChild.sprite} alt={step.targetChild.spanishName} className="child-sprite" />
                    <div>
                      <span className="child-name">{step.targetChild.spanishName}</span>
                      <div className="iv-summary-tags">
                        {renderIvTags(step.targetChild.ivs)}
                      </div>
                    </div>
                  </div>
                  <div className="step-stats-meta">
                    <span className="meta-pill success-rate">Probabilidad: {step.successChance}%</span>
                    <span className="meta-pill expected-eggs">Huevos: ~{step.expectedEggs}</span>
                  </div>
                </div>
              </div>

              {/* MODAL DE EDICIÓN DE PADRE */}
              {editingStep === step.stepNumber && (
                <div className="edit-parent-modal">
                  <div className="modal-inner">
                    <div className="modal-title-row">
                      <h5>Editar Padre {targetParentRole} en Paso {step.stepNumber}</h5>
                      <button className="btn-close-sm" onClick={() => setEditingStep(null)}><X size={16} /></button>
                    </div>

                    <p className="modal-desc">
                      Selecciona un Pokémon de tu <strong>Caja Personal</strong> o busca otra especie compatible para evaluar si pueden criar juntos.
                    </p>

                    <div className="box-selection-section">
                      <h6>1. Elegir desde Mi Caja Pokémon:</h6>
                      <div className="box-options-grid">
                        {boxPokemonList.map(b => (
                          <button
                            key={b.id}
                            className="box-select-card"
                            onClick={() => handleApplyBoxParent(step.stepNumber, targetParentRole, b)}
                          >
                            <img src={b.sprite} alt={b.spanishName} />
                            <span>{b.spanishName}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="custom-search-section">
                      <h6>2. Buscar Cualquier Otra Especie:</h6>
                      <div className="search-row">
                        <input
                          type="text"
                          className="search-input"
                          placeholder="Nombre o ID del Pokémon (ej. Pikachu, Dragonite...)"
                          value={customSearch}
                          onChange={e => setCustomSearch(e.target.value)}
                        />
                        <button
                          className="btn-primary"
                          onClick={() => handleCustomSearchParent(step.stepNumber, targetParentRole)}
                          disabled={loadingSearch || !customSearch.trim()}
                        >
                          Aplicar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

function renderIvTags(ivs: StatDict) {
  const keys: Array<keyof StatDict> = ['hp', 'atk', 'def', 'spa', 'spd', 'spe'];
  return keys.map(k => {
    const val = ivs[k];
    const is31 = val === 31;
    const is0 = val === 0;
    return (
      <span
        key={k}
        className={`iv-tag ${is31 ? 'iv-31' : is0 ? 'iv-0' : 'iv-normal'}`}
      >
        {STAT_NAMES_ES[k].short}: {val}
      </span>
    );
  });
}
