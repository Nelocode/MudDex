import React, { useState } from 'react';
import {
  FolderKanban,
  X,
  Play,
  Edit3,
  Trash2,
  CheckCircle2,
  PlusCircle,
  Sparkles,
  Search,
  RotateCcw,
  Check,
  Flame
} from 'lucide-react';
import { BreedingProject, GoalConfig } from '../types/pokemon';
import { NATURES_LIST } from '../services/pokeapi';

interface ProjectsManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: BreedingProject[];
  activeProjectId?: string;
  onSelectProject: (id: string) => void;
  onDeleteProject: (id: string) => void;
  onEditProjectGoal: (id: string, updatedGoal: GoalConfig) => void;
  onNewProject: () => void;
}

export const ProjectsManagerModal: React.FC<ProjectsManagerModalProps> = ({
  isOpen,
  onClose,
  projects,
  activeProjectId,
  onSelectProject,
  onDeleteProject,
  onEditProjectGoal,
  onNewProject
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'finished'>('all');
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);

  // Draft state for editing a project's goal
  const [editGoal, setEditGoal] = useState<GoalConfig | null>(null);

  if (!isOpen) return null;

  const filteredProjects = projects.filter(p => {
    const matchesSearch = p.targetPokemon.spanishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.targetPokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' ||
      (filterStatus === 'finished' && p.isFinished) ||
      (filterStatus === 'active' && !p.isFinished);
    return matchesSearch && matchesStatus;
  });

  const handleStartEdit = (p: BreedingProject) => {
    setEditingProjectId(p.id);
    setEditGoal({ ...p.goal });
  };

  const handleSaveEdit = (p: BreedingProject) => {
    if (!editGoal) return;
    onEditProjectGoal(p.id, editGoal);
    setEditingProjectId(null);
    setEditGoal(null);
  };

  const handleCancelEdit = () => {
    setEditingProjectId(null);
    setEditGoal(null);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-panel projects-manager-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-row">
            <FolderKanban className="header-icon" size={24} color="#00D2FF" />
            <div>
              <h2 className="modal-title">Gestión de Proyectos de Crianza</h2>
              <p className="modal-subtitle">
                Revisa, continúa, edita objetivos o elimina tus planes de crianza guardados.
              </p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Barra de Filtros y Búsqueda */}
        <div className="projects-filter-bar">
          <div className="search-bar-inline">
            <Search size={16} color="#88A0C0" />
            <input
              type="text"
              placeholder="Buscar por Pokémon..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-pills-row">
            <button
              className={`filter-pill ${filterStatus === 'all' ? 'active' : ''}`}
              onClick={() => setFilterStatus('all')}
            >
              Todos ({projects.length})
            </button>
            <button
              className={`filter-pill ${filterStatus === 'active' ? 'active' : ''}`}
              onClick={() => setFilterStatus('active')}
            >
              ⏳ En Crianza ({projects.filter(p => !p.isFinished).length})
            </button>
            <button
              className={`filter-pill ${filterStatus === 'finished' ? 'active' : ''}`}
              onClick={() => setFilterStatus('finished')}
            >
              🎉 Completados ({projects.filter(p => p.isFinished).length})
            </button>
          </div>

          <button className="btn-primary btn-small" onClick={() => { onClose(); onNewProject(); }}>
            <PlusCircle size={16} />
            <span>Nueva Crianza</span>
          </button>
        </div>

        <div className="modal-body projects-list-body">
          {filteredProjects.length === 0 ? (
            <div className="empty-projects-state">
              <Sparkles size={40} color="#00D2FF" />
              <h3>No se encontraron proyectos</h3>
              <p>Comienza creando un nuevo proyecto de crianza para tu Pokémon favorito.</p>
              <button className="btn-primary" onClick={() => { onClose(); onNewProject(); }}>
                <PlusCircle size={18} /> Iniciar Nueva Crianza
              </button>
            </div>
          ) : (
            <div className="projects-grid">
              {filteredProjects.map(p => {
                const isCurrent = p.id === activeProjectId;
                const isEditing = p.id === editingProjectId;
                const completedSteps = p.steps.filter(s => s.isCompleted).length;
                const totalSteps = p.steps.length;
                const pct = totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 0;

                return (
                  <div
                    key={p.id}
                    className={`project-card glass-panel ${isCurrent ? 'active-project-card' : ''}`}
                  >
                    <div className="project-card-header">
                      <div className="project-pokemon-info">
                        <img
                          src={p.targetPokemon.sprite}
                          alt={p.targetPokemon.spanishName}
                          className="project-sprite"
                        />
                        <div>
                          <h3 className="project-title">
                            {p.targetPokemon.spanishName}
                            {isCurrent && <span className="current-badge">Activo</span>}
                          </h3>
                          <div className="project-badges">
                            <span className="badge-iv">{p.goal.targetIvCount}x31 IVs</span>
                            {p.goal.useNature && (
                              <span className="badge-nature">{p.goal.targetNature}</span>
                            )}
                            {p.goal.useZeroAtk && <span className="badge-zero">0 ATK</span>}
                            {p.goal.targetGender && p.goal.targetGender !== 'any' && (
                              <span className="badge-gender">
                                {p.goal.targetGender === 'female' ? '♀ Hembra' : '♂ Macho'}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="project-status-tag">
                        {p.isFinished ? (
                          <span className="status-finished"><CheckCircle2 size={14} /> Completado</span>
                        ) : (
                          <span className="status-in-progress">⏳ {pct}% ({completedSteps}/{totalSteps})</span>
                        )}
                      </div>
                    </div>

                    {/* Barra de Progreso */}
                    <div className="project-progress-track">
                      <div className="project-progress-fill" style={{ width: `${pct}%` }}></div>
                    </div>

                    {/* MODO EDICIÓN INLINE */}
                    {isEditing && editGoal ? (
                      <div className="inline-edit-form">
                        <h4 className="edit-form-title">✏️ Editar Objetivo de Crianza</h4>

                        <div className="edit-form-row">
                          <label>IVs Objetivo:</label>
                          <select
                            value={editGoal.targetIvCount}
                            onChange={e => setEditGoal({ ...editGoal, targetIvCount: Number(e.target.value) })}
                          >
                            <option value={3}>3x31 IVs</option>
                            <option value={4}>4x31 IVs</option>
                            <option value={5}>5x31 IVs (Competitivo)</option>
                            <option value={6}>6x31 IVs (Perfecto)</option>
                          </select>
                        </div>

                        <div className="edit-form-row">
                          <label>Naturaleza:</label>
                          <select
                            value={editGoal.targetNature}
                            onChange={e => setEditGoal({ ...editGoal, targetNature: e.target.value })}
                          >
                            {NATURES_LIST.map(n => (
                              <option key={n.name} value={n.name}>
                                {n.spanishName} ({n.name}) {n.flavor}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="edit-form-row">
                          <label>Sexo Objetivo:</label>
                          <select
                            value={editGoal.targetGender}
                            onChange={e => setEditGoal({ ...editGoal, targetGender: e.target.value as any })}
                          >
                            <option value="any">Cualquiera (Indiferente)</option>
                            <option value="female">♀ Hembra</option>
                            <option value="male">♂ Macho</option>
                          </select>
                        </div>

                        <div className="edit-form-toggles">
                          <label className="checkbox-label">
                            <input
                              type="checkbox"
                              checked={editGoal.useZeroAtk}
                              onChange={e => setEditGoal({ ...editGoal, useZeroAtk: e.target.checked })}
                            />
                            <span>0 IVs en Ataque (Defensivo / Especial)</span>
                          </label>
                        </div>

                        <div className="edit-actions-row">
                          <button className="btn-secondary btn-small" onClick={handleCancelEdit}>
                            Cancelar
                          </button>
                          <button className="btn-success btn-small" onClick={() => handleSaveEdit(p)}>
                            <Check size={14} /> Guardar y Recalcular
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* ACCIONES NORMALES */
                      <div className="project-card-actions">
                        <button
                          className="btn-primary btn-small"
                          onClick={() => {
                            onSelectProject(p.id);
                            onClose();
                          }}
                        >
                          <Play size={14} />
                          <span>{isCurrent ? 'Continuar Crianza' : 'Cargar Proyecto'}</span>
                        </button>

                        <button
                          className="btn-secondary btn-small"
                          onClick={() => handleStartEdit(p)}
                          title="Editar objetivo de IVs, Naturaleza o Sexo"
                        >
                          <Edit3 size={14} />
                          <span>Editar</span>
                        </button>

                        <button
                          className="btn-danger btn-small"
                          onClick={() => {
                            if (confirm(`¿Eliminar el proyecto de crianza de ${p.targetPokemon.spanishName}?`)) {
                              onDeleteProject(p.id);
                            }
                          }}
                          title="Eliminar proyecto"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
