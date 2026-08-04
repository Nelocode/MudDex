import React from 'react';
import { Flame, CheckCircle, Clock, Zap, Percent } from 'lucide-react';
import { BreedingStepNode } from '../types/pokemon';

interface StepTrackerProps {
  steps: BreedingStepNode[];
  onToggleStep: (stepNumber: number) => void;
}

export const StepTracker: React.FC<StepTrackerProps> = ({ steps, onToggleStep }) => {
  const completedCount = steps.filter(s => s.isCompleted).length;
  const progressPercentage = Math.round((completedCount / steps.length) * 100);

  const totalExpectedEggs = steps.reduce((sum, s) => sum + s.expectedEggs, 0);
  const sampleHatchSteps = steps[0]?.hatchSteps || 5120;
  const flameBodyHatchSteps = Math.round(sampleHatchSteps / 2);

  return (
    <div className="step-tracker-panel glass-panel">
      <div className="tracker-header">
        <div>
          <h3 className="section-title">📊 Progreso de Crianza Activo</h3>
          <p className="section-subtitle">
            Estadísticas en tiempo real, estimación de huevos y acelerador de eclosión.
          </p>
        </div>
        <div className="progress-percentage-badge">
          {progressPercentage}% Completado
        </div>
      </div>

      {/* Barra de Progreso */}
      <div className="progress-track-large">
        <div
          className="progress-fill-large"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Grid de Métricas y Cálculos */}
      <div className="metrics-grid">
        <div className="metric-card">
          <CheckCircle className="metric-icon" size={24} color="#00E676" />
          <div>
            <span className="metric-value">{completedCount} / {steps.length}</span>
            <span className="metric-label">Pasos de Cruza Completados</span>
          </div>
        </div>

        <div className="metric-card">
          <Percent className="metric-icon" size={24} color="#00D2FF" />
          <div>
            <span className="metric-value">~{totalExpectedEggs} Huevos</span>
            <span className="metric-label">Huevos Totales Estimados</span>
          </div>
        </div>

        <div className="metric-card flame-body-card">
          <Flame className="metric-icon" size={24} color="#FF6B00" />
          <div>
            <span className="metric-value">{flameBodyHatchSteps} Pasos / Huevo</span>
            <span className="metric-label">Con Cuerpo Llama (*Flame Body*) (-50%)</span>
          </div>
        </div>
      </div>

      {/* Resumen Guiado de Pasos */}
      <div className="tracker-checklist">
        <h4 className="checklist-title">Checklist Guiado Paso a Paso:</h4>
        <div className="checklist-items">
          {steps.map(s => (
            <div
              key={s.stepNumber}
              className={`checklist-item ${s.isCompleted ? 'completed' : ''}`}
              onClick={() => onToggleStep(s.stepNumber)}
            >
              <div className="checkbox-custom">
                {s.isCompleted && <span className="checkmark">✓</span>}
              </div>
              <div className="item-text">
                <span className="item-title">
                  Paso {s.stepNumber}: {s.title}
                </span>
                <span className="item-meta">
                  Probabilidad: {s.successChance}% • Huevos aprox: {s.expectedEggs}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
