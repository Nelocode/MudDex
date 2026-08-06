import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Header } from './components/Header';
import { PokemonSelector } from './components/PokemonSelector';
import { GoalConfigurator } from './components/GoalConfigurator';
import { BreedingTree } from './components/BreedingTree';
import { StepTracker } from './components/StepTracker';
import { PrerequisitesList } from './components/PrerequisitesList';
import { SmogonBuildCard } from './components/SmogonBuildCard';
import { PokemonBoxModal } from './components/PokemonBoxModal';
import { MasudaCalculatorModal } from './components/MasudaCalculatorModal';
import { MagicLoginModal } from './components/MagicLoginModal';
import { ProjectsManagerModal } from './components/ProjectsManagerModal';

import {
  PokemonSummary,
  GoalConfig,
  BreedingProject,
  ParentPokemon,
  MagicUserSession
} from './types/pokemon';
import { generateBreedingTree } from './services/breedingEngine';
import { getSmogonBuilds } from './services/smogonData';
import {
  getSavedProjects,
  saveProject,
  getActiveProjectId,
  setActiveProjectId,
  getUserBox,
  deleteProject,
  getMagicSession,
  saveMagicSession
} from './services/storage';

export const App: React.FC = () => {
  const [view, setView] = useState<'selector' | 'configurator' | 'project'>('selector');

  const [selectedPokemon, setSelectedPokemon] = useState<PokemonSummary | null>(null);
  const [activeProject, setActiveProject] = useState<BreedingProject | null>(null);
  const [savedProjects, setSavedProjects] = useState<BreedingProject[]>([]);
  const [magicSession, setMagicSession] = useState<MagicUserSession | null>(getMagicSession());

  const [selectedBuildIndex, setSelectedBuildIndex] = useState(0);

  // Modals
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [isMasudaOpen, setIsMasudaOpen] = useState(false);
  const [isMagicLoginOpen, setIsMagicLoginOpen] = useState(false);

  useEffect(() => {
    // Check URL parameters for magic key (e.g. ?magicKey=...&trainer=...)
    const params = new URLSearchParams(window.location.search);
    const trainerParam = params.get('trainer') || params.get('magicKey');
    if (trainerParam) {
      const newSess = saveMagicSession(trainerParam);
      setMagicSession(newSess);
    }

    const rawProjects = getSavedProjects();
    const box = getUserBox();
    const projects = rawProjects.map(p => {
      const freshSteps = generateBreedingTree(p.targetPokemon, p.goal, box);
      const mergedSteps = freshSteps.map((fs, idx) => ({
        ...fs,
        isCompleted: p.steps[idx]?.isCompleted || false
      }));
      return { ...p, steps: mergedSteps };
    });
    setSavedProjects(projects);

    const activeId = getActiveProjectId();
    if (activeId) {
      const found = projects.find(p => p.id === activeId);
      if (found) {
        setActiveProject(found);
        setView('project');
      }
    } else if (projects.length > 0) {
      setActiveProject(projects[0]);
      setView('project');
    }
  }, []);

  const handleSessionChanged = () => {
    setMagicSession(getMagicSession());
    const projects = getSavedProjects();
    setSavedProjects(projects);
    if (projects.length > 0) {
      setActiveProject(projects[0]);
      setActiveProjectId(projects[0].id);
      setView('project');
    } else {
      setActiveProject(null);
      setView('selector');
    }
  };

  const handleSelectPokemon = (pokemon: PokemonSummary) => {
    setSelectedPokemon(pokemon);
    setView('configurator');
  };

  const handleGeneratePlan = (goal: GoalConfig) => {
    if (!selectedPokemon) return;

    const box = getUserBox();
    const steps = generateBreedingTree(selectedPokemon, goal, box);
    const smogonBuilds = getSmogonBuilds(selectedPokemon.name);

    const newProject: BreedingProject = {
      id: `project-${Date.now()}`,
      title: `Crianza de ${selectedPokemon.spanishName} (${goal.targetIvCount}x31)`,
      targetPokemon: selectedPokemon,
      goal,
      steps,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isFinished: false,
      selectedSmogonBuild: smogonBuilds[0]
    };

    saveProject(newProject);
    setActiveProject(newProject);
    setSavedProjects(getSavedProjects());
    setView('project');
  };

  const handleToggleStep = (stepNumber: number) => {
    if (!activeProject) return;

    const updatedSteps = activeProject.steps.map(s => {
      if (s.stepNumber === stepNumber) {
        return { ...s, isCompleted: !s.isCompleted };
      }
      return s;
    });

    const isAllCompleted = updatedSteps.every(s => s.isCompleted);

    if (isAllCompleted && !activeProject.isFinished) {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    const updatedProject: BreedingProject = {
      ...activeProject,
      steps: updatedSteps,
      isFinished: isAllCompleted
    };

    saveProject(updatedProject);
    setActiveProject(updatedProject);
    setSavedProjects(getSavedProjects());
  };

  const handleUpdateStepParents = (
    stepNumber: number,
    newParentA?: ParentPokemon,
    newParentB?: ParentPokemon
  ) => {
    if (!activeProject) return;

    const updatedSteps = activeProject.steps.map(s => {
      if (s.stepNumber === stepNumber) {
        return {
          ...s,
          parentA: newParentA || s.parentA,
          parentB: newParentB || s.parentB
        };
      }
      return s;
    });

    const updatedProject: BreedingProject = {
      ...activeProject,
      steps: updatedSteps
    };

    saveProject(updatedProject);
    setActiveProject(updatedProject);
    setSavedProjects(getSavedProjects());
  };

  const handleSelectSavedProject = (id: string) => {
    const found = savedProjects.find(p => p.id === id);
    if (found) {
      setActiveProject(found);
      setActiveProjectId(found.id);
      setView('project');
    }
  };

  const handleNewProject = () => {
    setSelectedPokemon(null);
    setView('selector');
  };

  const [isProjectsManagerOpen, setIsProjectsManagerOpen] = useState(false);

  const handleDeleteProjectById = (id: string) => {
    deleteProject(id);
    const remaining = getSavedProjects();
    setSavedProjects(remaining);
    if (activeProject?.id === id) {
      if (remaining.length > 0) {
        setActiveProject(remaining[0]);
        setActiveProjectId(remaining[0].id);
        setView('project');
      } else {
        setActiveProject(null);
        setView('selector');
      }
    }
  };

  const handleEditProjectGoal = (id: string, updatedGoal: GoalConfig) => {
    const target = savedProjects.find(p => p.id === id);
    if (!target) return;

    const box = getUserBox();
    const newSteps = generateBreedingTree(target.targetPokemon, updatedGoal, box);

    // Merge completed status for matching step numbers
    const mergedSteps = newSteps.map((ns, idx) => ({
      ...ns,
      isCompleted: target.steps[idx]?.isCompleted || false
    }));

    const updatedProject: BreedingProject = {
      ...target,
      goal: updatedGoal,
      title: `Crianza de ${target.targetPokemon.spanishName} (${updatedGoal.targetIvCount}x31)`,
      steps: mergedSteps,
      updatedAt: new Date().toISOString()
    };

    saveProject(updatedProject);
    const updatedProjects = getSavedProjects();
    setSavedProjects(updatedProjects);

    if (activeProject?.id === id) {
      setActiveProject(updatedProject);
    }
  };

  const handleBoxUpdated = () => {
    if (activeProject) {
      const box = getUserBox();
      const newSteps = generateBreedingTree(activeProject.targetPokemon, activeProject.goal, box);
      const mergedSteps = newSteps.map((ns, idx) => ({
        ...ns,
        isCompleted: activeProject.steps[idx]?.isCompleted || false
      }));

      const updated = { ...activeProject, steps: mergedSteps };
      saveProject(updated);
      setActiveProject(updated);
    }
  };

  return (
    <div className="pokelinker-app">
      <Header
        activeProject={activeProject}
        savedProjects={savedProjects}
        magicSession={magicSession}
        onSelectProject={handleSelectSavedProject}
        onNewProject={handleNewProject}
        onOpenBox={() => setIsBoxOpen(true)}
        onOpenMasuda={() => setIsMasudaOpen(true)}
        onOpenMagicLogin={() => setIsMagicLoginOpen(true)}
        onOpenProjectsManager={() => setIsProjectsManagerOpen(true)}
      />

      <main className="main-content-container">
        {/* VISTA 1: SELECTOR DE POKÉMON */}
        {view === 'selector' && (
          <PokemonSelector onSelectPokemon={handleSelectPokemon} />
        )}

        {/* VISTA 2: CONFIGURADOR DE OBJETIVO */}
        {view === 'configurator' && selectedPokemon && (
          <GoalConfigurator
            pokemon={selectedPokemon}
            onGeneratePlan={handleGeneratePlan}
            onBack={() => setView('selector')}
          />
        )}

        {/* VISTA 3: PROYECTO ACTIVO (PREPARATIVOS + TRACKER + ÁRBOL + SMOGON) */}
        {view === 'project' && activeProject && (
          <div className="project-view-space">
            {/* Project Header Banner */}
            <div className="active-project-banner glass-panel">
              <div className="banner-info">
                <img
                  src={activeProject.targetPokemon.officialArtwork || activeProject.targetPokemon.sprite}
                  alt={activeProject.targetPokemon.spanishName}
                  className="banner-artwork"
                />
                <div>
                  <div className="banner-badges">
                    <span className="goal-badge">{activeProject.goal.targetIvCount}x31 IVs</span>
                    {activeProject.goal.useNature && (
                      <span className="nature-badge">Naturaleza: {activeProject.goal.targetNature}</span>
                    )}
                    {activeProject.goal.useZeroAtk && (
                      <span className="zero-badge">0 IVs ATK</span>
                    )}
                    {activeProject.goal.targetGender && activeProject.goal.targetGender !== 'any' && (
                      <span className="gender-badge">
                        {activeProject.goal.targetGender === 'female' ? '♀ Hembra' : '♂ Macho'}
                      </span>
                    )}
                    {activeProject.isFinished && (
                      <span className="finished-badge">🎉 Crianza Finalizada</span>
                    )}
                  </div>
                  <h2 className="banner-title">
                    Crianza Guiada de {activeProject.targetPokemon.spanishName}
                  </h2>
                  <p className="banner-subtitle">
                    Revisa la lista de preparativos, sigue el árbol de cruzas y evalúa la compatibilidad de grupos huevo.
                  </p>
                </div>
              </div>

              <div className="banner-actions">
                <button className="btn-danger" onClick={() => handleDeleteProjectById(activeProject.id)}>
                  Eliminar Proyecto
                </button>
              </div>
            </div>

            {/* LISTA DE PREPARATIVOS Y MATERIALES */}
            <PrerequisitesList
              targetPokemon={activeProject.targetPokemon}
              goal={activeProject.goal}
              steps={activeProject.steps}
            />

            {/* Tracker de Progreso */}
            <StepTracker
              steps={activeProject.steps}
              onToggleStep={handleToggleStep}
            />

            {/* Árbol Genealógico Interactivo */}
            <BreedingTree
              steps={activeProject.steps}
              onToggleStep={handleToggleStep}
              onUpdateStepParents={handleUpdateStepParents}
            />

            {/* Smogon Competitive Integration */}
            <SmogonBuildCard
              pokemon={activeProject.targetPokemon}
              builds={getSmogonBuilds(activeProject.targetPokemon.name)}
              selectedBuildIndex={selectedBuildIndex}
              onSelectBuildIndex={setSelectedBuildIndex}
            />
          </div>
        )}
      </main>

      {/* Modals */}
      <PokemonBoxModal
        isOpen={isBoxOpen}
        onClose={() => setIsBoxOpen(false)}
        onBoxUpdated={handleBoxUpdated}
      />

      <MasudaCalculatorModal
        isOpen={isMasudaOpen}
        onClose={() => setIsMasudaOpen(false)}
      />

      <MagicLoginModal
        isOpen={isMagicLoginOpen}
        onClose={() => setIsMagicLoginOpen(false)}
        onSessionChanged={handleSessionChanged}
      />

      <ProjectsManagerModal
        isOpen={isProjectsManagerOpen}
        onClose={() => setIsProjectsManagerOpen(false)}
        projects={savedProjects}
        activeProjectId={activeProject?.id}
        onSelectProject={handleSelectSavedProject}
        onDeleteProject={handleDeleteProjectById}
        onEditProjectGoal={handleEditProjectGoal}
        onNewProject={handleNewProject}
      />

      {/* Descargo Legal con Logo Mudkill */}
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-brand-row">
            <img src="/Mudkill.png" alt="Mudkill Logo" className="footer-brand-logo" />
          </div>
          <p className="footer-disclaimer">
            Nota de uso libre e informativo: Pokelinker es una herramienta desarrollada sin fines de lucro para la comunidad. Construida utilizando APIs abiertas y librerías de código abierto (PokeAPI, Smogon). Pokémon y sus respectivas marcas registradas, nombres de especies y recursos son propiedad de Nintendo, Game Freak y The Pokémon Company. Esta aplicación no posee afiliación comercial ni oficial con los titulares de los derechos de autor.
          </p>
        </div>
      </footer>
    </div>

  );
};

