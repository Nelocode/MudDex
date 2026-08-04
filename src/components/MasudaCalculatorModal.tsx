import React, { useState } from 'react';
import { Flame, Sparkles, X, Calculator, ShieldCheck } from 'lucide-react';

interface MasudaCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MasudaCalculatorModal: React.FC<MasudaCalculatorModalProps> = ({
  isOpen,
  onClose
}) => {
  const [hasMasuda, setHasMasuda] = useState(true);
  const [hasShinyCharm, setHasShinyCharm] = useState(true);
  const [hasFlameBody, setHasFlameBody] = useState(true);
  const [eggsHatched, setEggsHatched] = useState(0);

  if (!isOpen) return null;

  // Odds calculation
  // Base odds: 1/4096
  // Masuda only: 6/4096 (~1/683)
  // Shiny charm only: 3/4096 (~1/1365)
  // Masuda + Charm: 8/4096 = 1/512
  let numerator = 1;
  if (hasMasuda) numerator += 5;
  if (hasShinyCharm) numerator += 2;

  const oddsFraction = `1 / ${Math.round(4096 / numerator)}`;
  const oddsPercentage = ((numerator / 4096) * 100).toFixed(3);

  // Cumulative probability of getting at least 1 shiny in N eggs: 1 - (1 - p)^N
  const p = numerator / 4096;
  const cumulativeProb = (1 - Math.pow(1 - p, eggsHatched)) * 100;

  return (
    <div className="modal-overlay">
      <div className="modal-content glass-panel">
        <div className="modal-header">
          <div className="title-row">
            <Flame size={24} color="#FF6B00" />
            <h3 className="modal-title">Calculadora de Crianza Variocolor (Masuda & Shiny Charm)</h3>
          </div>
          <button className="btn-close" onClick={onClose}><X size={20} /></button>
        </div>

        <p className="modal-subtitle">
          Calcula tus probabilidades exactas de obtener un Pokémon Variocolor (*Shiny*) durante el proceso de crianza.
        </p>

        <div className="toggles-column">
          <label className="toggle-card">
            <input
              type="checkbox"
              checked={hasMasuda}
              onChange={e => setHasMasuda(e.target.checked)}
            />
            <div>
              <span className="toggle-title">🌐 Método Masuda (Padre Extranjero / Idioma Distinto)</span>
              <span className="toggle-desc">Suma +5 rolles adicionales de variocolor por cada huevo.</span>
            </div>
          </label>

          <label className="toggle-card">
            <input
              type="checkbox"
              checked={hasShinyCharm}
              onChange={e => setHasShinyCharm(e.target.checked)}
            />
            <div>
              <span className="toggle-title">✨ Amuleto Iris (*Shiny Charm*)</span>
              <span className="toggle-desc">Suma +2 rolles adicionales por completar la Pokédex.</span>
            </div>
          </label>

          <label className="toggle-card">
            <input
              type="checkbox"
              checked={hasFlameBody}
              onChange={e => setHasFlameBody(e.target.checked)}
            />
            <div>
              <span className="toggle-title">🔥 Habilidad Cuerpo Llama (*Flame Body*)</span>
              <span className="toggle-desc">Reduce los pasos de eclosión a la mitad (-50%).</span>
            </div>
          </label>
        </div>

        <div className="shiny-result-box">
          <div className="odds-display">
            <span className="odds-label">Probabilidad por Huevo:</span>
            <span className="odds-value">{oddsFraction} ({oddsPercentage}%)</span>
          </div>

          <div className="hatch-counter-section">
            <label htmlFor="hatched-counter-input">Huevos Eclosionados Hasta Ahora:</label>
            <div className="counter-controls">
              <button className="btn-secondary" onClick={() => setEggsHatched(Math.max(0, eggsHatched - 10))}>-10</button>
              <button className="btn-secondary" onClick={() => setEggsHatched(Math.max(0, eggsHatched - 1))}>-1</button>
              <input
                id="hatched-counter-input"
                type="number"
                value={eggsHatched}
                onChange={e => setEggsHatched(parseInt(e.target.value, 10) || 0)}
                className="search-input"
                style={{ width: '90px', textAlign: 'center' }}
              />
              <button className="btn-secondary" onClick={() => setEggsHatched(eggsHatched + 1)}>+1</button>
              <button className="btn-secondary" onClick={() => setEggsHatched(eggsHatched + 10)}>+10</button>
            </div>
          </div>

          <div className="cumulative-prob-box">
            <span className="cum-title">Probabilidad Acumulada de Haber Obtenido al Menos 1 Shiny:</span>
            <span className="cum-value">{cumulativeProb.toFixed(1)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
