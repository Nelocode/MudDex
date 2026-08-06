import React from 'react';
import { Sparkles, Box, PlusCircle, BookmarkCheck, Flame, Wand2, FolderKanban } from 'lucide-react';
import { BreedingProject, MagicUserSession } from '../types/pokemon';

interface HeaderProps {
  activeProject: BreedingProject | null;
  savedProjects: BreedingProject[];
  magicSession: MagicUserSession | null;
  onSelectProject: (id: string) => void;
  onNewProject: () => void;
  onOpenBox: () => void;
  onOpenMasuda: () => void;
  onOpenMagicLogin: () => void;
  onOpenProjectsManager: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeProject,
  savedProjects,
  magicSession,
  onSelectProject,
  onNewProject,
  onOpenBox,
  onOpenMasuda,
  onOpenMagicLogin,
  onOpenProjectsManager
}) => {
  return (
    <header className="pokelinker-header">
      <div className="header-container">
        <div className="logo-section" onClick={onNewProject} style={{ cursor: 'pointer' }}>
          <div className="pokeball-icon-wrapper">
            <span className="pokeball-inner"></span>
          </div>
          <div>
            <h1 className="logo-title">
              POKELINKER <span className="logo-badge">PRO</span>
            </h1>
            <p className="logo-subtitle">Asistente Maestro de Crianza & Competitivo Pokémon</p>
          </div>
        </div>

        <div className="header-actions">
          {savedProjects.length > 0 && (
            <div className="project-dropdown-wrapper">
              <label htmlFor="project-select" className="dropdown-label">
                <BookmarkCheck size={16} /> Proyecto Activo:
              </label>
              <select
                id="project-select"
                className="project-select"
                value={activeProject?.id || ''}
                onChange={e => {
                  if (e.target.value === '__manage__') {
                    onOpenProjectsManager();
                  } else {
                    onSelectProject(e.target.value);
                  }
                }}
              >
                <option value="" disabled>Seleccionar Proyecto Guardado...</option>
                {savedProjects.map(p => (
                  <option key={p.id} value={p.id}>
                    {p.targetPokemon.spanishName} ({p.goal.targetIvCount}x31) - {p.isFinished ? '✅ Completado' : '⏳ En Crianza'}
                  </option>
                ))}
                <option value="__manage__">⚙️ Gestionar todos los proyectos...</option>
              </select>
            </div>
          )}

          {savedProjects.length > 0 && (
            <button
              className="btn-secondary"
              onClick={onOpenProjectsManager}
              title="Ver, editar y administrar todos tus proyectos de crianza"
            >
              <FolderKanban size={18} color="#00D2FF" />
              <span>Mis Proyectos ({savedProjects.length})</span>
            </button>
          )}

          <button
            className={`btn-magic-login ${magicSession ? 'magic-active' : ''}`}
            onClick={onOpenMagicLogin}
            title="Guarda y sincroniza tus Pokémon en crianza y cajas"
          >
            <Wand2 size={18} color="#00D2FF" />
            <span>{magicSession ? `🪄 Sesión: ${magicSession.trainerName}` : '🔐 Iniciar Sesión / Magic Login'}</span>
          </button>

          <button className="btn-secondary" onClick={onOpenBox} title="Gestionar tu Caja de Pokémon">
            <Box size={18} />
            <span>Mi Caja Pokémon</span>
          </button>

          <button className="btn-secondary" onClick={onOpenMasuda} title="Calculadora Masuda y Eclosión">
            <Flame size={18} color="#FF6B00" />
            <span>Calculadora Masuda</span>
          </button>

          <button className="btn-primary" onClick={onNewProject}>
            <PlusCircle size={18} />
            <span>Nueva Crianza</span>
          </button>
        </div>
      </div>
    </header>
  );
};

