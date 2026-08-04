import React, { useState } from 'react';
import { ShoppingBag, CheckSquare, Square, Package, Flame, Sparkles } from 'lucide-react';
import { PrerequisiteCheckItem, PokemonSummary, GoalConfig, BreedingStepNode } from '../types/pokemon';
import { generatePrerequisitesList } from '../services/breedingEngine';

interface PrerequisitesListProps {
  targetPokemon: PokemonSummary;
  goal: GoalConfig;
  steps: BreedingStepNode[];
}

export const PrerequisitesList: React.FC<PrerequisitesListProps> = ({
  targetPokemon,
  goal,
  steps
}) => {
  const [items, setItems] = useState<PrerequisiteCheckItem[]>(() =>
    generatePrerequisitesList(targetPokemon, goal, steps)
  );

  const toggleCheck = (id: string) => {
    setItems(items.map(it => (it.id === id ? { ...it, isChecked: !it.isChecked } : it)));
  };

  const checkedCount = items.filter(i => i.isChecked).length;
  const progressPercent = Math.round((checkedCount / items.length) * 100);

  const itemCategories = {
    item: items.filter(i => i.category === 'item'),
    parent: items.filter(i => i.category === 'parent'),
    helper: items.filter(i => i.category === 'helper')
  };

  return (
    <div className="prerequisites-panel glass-panel">
      <div className="prereq-header">
        <div>
          <div className="step-badge">Lista de Preparativos Iniciales</div>
          <h3 className="section-title">
            🎒 Materiales y Padres Necesarios Antes de Empezar
          </h3>
          <p className="section-subtitle">
            Asegúrate de reunir todos los objetos y Pokémon iniciales en tu juego antes de colocar la primera pareja en la Guardería o Picnic.
          </p>
        </div>
        <div className="prereq-progress-badge">
          {checkedCount} / {items.length} Listo ({progressPercent}%)
        </div>
      </div>

      <div className="progress-track-large" style={{ marginBottom: '1.5rem' }}>
        <div
          className="progress-fill-large"
          style={{ width: `${progressPercent}%`, background: 'linear-gradient(90deg, #FFD700, #00E676)' }}
        ></div>
      </div>

      <div className="prereq-sections-grid">
        {/* OBJETOS REQUERIDOS */}
        <div className="prereq-category-box">
          <h4 className="category-title">
            <Package size={18} color="#00D2FF" /> Objetos de Crianza Requeridos:
          </h4>
          <div className="category-items">
            {itemCategories.item.map(it => (
              <div
                key={it.id}
                className={`prereq-item-row ${it.isChecked ? 'checked-item' : ''}`}
                onClick={() => toggleCheck(it.id)}
              >
                <div className="checkbox-icon">
                  {it.isChecked ? <CheckSquare size={20} color="#00E676" /> : <Square size={20} color="#94A3B8" />}
                </div>
                {it.iconUrl && <img src={it.iconUrl} alt={it.title} className="prereq-item-icon" />}
                <div>
                  <span className="prereq-item-name">{it.title}</span>
                  <span className="prereq-item-desc">{it.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* POKÉMON INICIALES REQUERIDOS */}
        <div className="prereq-category-box">
          <h4 className="category-title">
            <Sparkles size={18} color="#FFD700" /> Padres Iniciales en Tu Caja/Salvaje:
          </h4>
          <div className="category-items">
            {itemCategories.parent.map(it => (
              <div
                key={it.id}
                className={`prereq-item-row ${it.isChecked ? 'checked-item' : ''}`}
                onClick={() => toggleCheck(it.id)}
              >
                <div className="checkbox-icon">
                  {it.isChecked ? <CheckSquare size={20} color="#00E676" /> : <Square size={20} color="#94A3B8" />}
                </div>
                {it.iconUrl && <img src={it.iconUrl} alt={it.title} className="prereq-item-icon" />}
                <div>
                  <span className="prereq-item-name">{it.title}</span>
                  <span className="prereq-item-desc">{it.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AYUDANTE DE ECLOSIÓN */}
        <div className="prereq-category-box">
          <h4 className="category-title">
            <Flame size={18} color="#FF6B00" /> Acelerador de Eclosión:
          </h4>
          <div className="category-items">
            {itemCategories.helper.map(it => (
              <div
                key={it.id}
                className={`prereq-item-row ${it.isChecked ? 'checked-item' : ''}`}
                onClick={() => toggleCheck(it.id)}
              >
                <div className="checkbox-icon">
                  {it.isChecked ? <CheckSquare size={20} color="#00E676" /> : <Square size={20} color="#94A3B8" />}
                </div>
                {it.iconUrl && <img src={it.iconUrl} alt={it.title} className="prereq-item-icon" />}
                <div>
                  <span className="prereq-item-name">{it.title}</span>
                  <span className="prereq-item-desc">{it.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
