import React, { useState } from 'react';
import { Target, CheckCircle2, ShieldAlert, Sparkles, HelpCircle, Award } from 'lucide-react';
import { PokemonSummary, GoalConfig, StatDict, StatName } from '../types/pokemon';
import { NATURES_LIST, STAT_NAMES_ES } from '../services/pokeapi';
import { getSmogonBuilds } from '../services/smogonData';

interface GoalConfiguratorProps {
  pokemon: PokemonSummary;
  onGeneratePlan: (goal: GoalConfig) => void;
  onBack: () => void;
}

export const GoalConfigurator: React.FC<GoalConfiguratorProps> = ({
  pokemon,
  onGeneratePlan,
  onBack
}) => {
  const smogonBuilds = getSmogonBuilds(pokemon.name);
  const defaultBuild = smogonBuilds[0];

  const [targetIvCount, setTargetIvCount] = useState<number>(5);
  const [targetIvs, setTargetIvs] = useState<StatDict>({
    hp: 31,
    atk: 31,
    def: 31,
    spa: 31,
    spd: 31,
    spe: 31
  });
  const [useZeroAtk, setUseZeroAtk] = useState<boolean>(
    pokemon.name === 'umbreon' || pokemon.name === 'gengar' || pokemon.name === 'gholdengo'
  );
  const [useZeroSpe, setUseZeroSpe] = useState<boolean>(false);
  const [useNature, setUseNature] = useState<boolean>(true);
  const [targetNature, setTargetNature] = useState<string>(
    defaultBuild ? defaultBuild.nature : 'Calm'
  );
  const [useAbility, setUseAbility] = useState<boolean>(true);
  const [targetAbility, setTargetAbility] = useState<string>(
    pokemon.abilities[0]?.spanishName || 'Estándar'
  );
  const [eggMoveInput, setEggMoveInput] = useState<string>('');
  const [eggMoves, setEggMoves] = useState<string[]>([]);

  // Apply Smogon preset build
  const applySmogonPreset = (buildIndex: number) => {
    const b = smogonBuilds[buildIndex];
    if (!b) return;
    setTargetNature(b.nature);
    setUseNature(true);
    if (b.targetIvs.atk === 0) setUseZeroAtk(true);
    if (b.targetIvs.spe === 0) setUseZeroSpe(true);
    setTargetIvCount(5);
  };

  const handleAddEggMove = () => {
    if (eggMoveInput.trim() && !eggMoves.includes(eggMoveInput.trim())) {
      setEggMoves([...eggMoves, eggMoveInput.trim()]);
      setEggMoveInput('');
    }
  };

  const handleRemoveEggMove = (move: string) => {
    setEggMoves(eggMoves.filter(m => m !== move));
  };

  const handleConfirmGoal = () => {
    const finalIvs: StatDict = { ...targetIvs };
    if (useZeroAtk) finalIvs.atk = 0;
    if (useZeroSpe) finalIvs.spe = 0;

    const goal: GoalConfig = {
      targetIvCount,
      targetIvs: finalIvs,
      useNature,
      targetNature,
      useAbility,
      targetAbility,
      isHiddenAbility: targetAbility.includes('HO') || targetAbility.includes('Oculta'),
      eggMoves,
      useZeroAtk,
      useZeroSpe
    };

    onGeneratePlan(goal);
  };

  return (
    <div className="goal-configurator-card glass-panel">
      <div className="step-badge">Paso 2</div>

      <div className="configurator-header">
        <img
          src={pokemon.officialArtwork || pokemon.sprite}
          alt={pokemon.spanishName}
          className="header-avatar"
        />
        <div>
          <h2 className="section-title">Fijar Objetivo de Crianza para {pokemon.spanishName}</h2>
          <p className="section-subtitle">
            Elige los IVs objetivo (2x31 a 6x31), fija la Naturaleza ideal y ajusta variantes como 0 IVs en Ataque para tanques/atacantes especiales.
          </p>
        </div>
      </div>

      {/* Smogon Presets Recomendados */}
      {smogonBuilds.length > 0 && (
        <div className="smogon-presets-box">
          <div className="preset-box-title">
            <Award size={18} color="#FFD700" />
            <span>Recomendaciones Competitivas de Smogon para {pokemon.spanishName}:</span>
          </div>
          <div className="smogon-preset-buttons">
            {smogonBuilds.map((b, idx) => (
              <button
                key={idx}
                className="btn-preset-smogon"
                onClick={() => applySmogonPreset(idx)}
              >
                <Sparkles size={16} />
                <span>{b.name} ({b.nature} / {b.itemSpanish})</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Selector de IVs Objetivo: 2x31, 3x31, 4x31, 5x31, 6x31 */}
      <div className="config-section">
        <label className="config-label">
          <Target size={18} /> 1. Cantidad de IVs Perfectos (31s) Deseada:
        </label>
        <div className="iv-count-selector">
          {[2, 3, 4, 5, 6].map(count => (
            <button
              key={count}
              className={`iv-btn ${targetIvCount === count ? 'active' : ''}`}
              onClick={() => setTargetIvCount(count)}
            >
              {count}x31 IVs
            </button>
          ))}
        </div>
      </div>

      {/* Ajustes Especiales de IVs (0 Atk / 0 Spe) */}
      <div className="config-section">
        <label className="config-label">2. Ajustes Finitos de Estadísticas (0 IVs):</label>
        <div className="toggles-row">
          <label className="toggle-card">
            <input
              type="checkbox"
              checked={useZeroAtk}
              onChange={e => setUseZeroAtk(e.target.checked)}
            />
            <div>
              <span className="toggle-title">🎯 0 IVs en Ataque Físico</span>
              <span className="toggle-desc">
                Ideal para Atacantes Especiales y Tanques (reducen el daño de Juego Sucio/Foul Play y Confusión).
              </span>
            </div>
          </label>

          <label className="toggle-card">
            <input
              type="checkbox"
              checked={useZeroSpe}
              onChange={e => setUseZeroSpe(e.target.checked)}
            />
            <div>
              <span className="toggle-title">⏳ 0 IVs en Velocidad</span>
              <span className="toggle-desc">
                Ideal para equipos de Espacio Raro (Trick Room) o pivotes lentos con Giro Bola.
              </span>
            </div>
          </label>
        </div>
      </div>

      {/* Interruptor y Selector de Naturaleza */}
      <div className="config-section">
        <div className="section-header-row">
          <label className="config-label">3. Naturaleza de {pokemon.spanishName}:</label>
          <label className="switch-toggle">
            <input
              type="checkbox"
              checked={useNature}
              onChange={e => setUseNature(e.target.checked)}
            />
            <span>{useNature ? 'Naturaleza Activada (Equipar Piedra Eterna)' : 'Naturaleza Aleatoria'}</span>
          </label>
        </div>

        {useNature && (
          <div className="nature-selector-grid">
            {NATURES_LIST.map(n => {
              const isRecommended = defaultBuild?.nature.toLowerCase() === n.name.toLowerCase();
              return (
                <button
                  key={n.name}
                  className={`nature-pill ${targetNature.toLowerCase() === n.name.toLowerCase() ? 'active' : ''} ${isRecommended ? 'recommended' : ''}`}
                  onClick={() => setTargetNature(n.name)}
                >
                  <span className="nature-name-es">{n.spanishName}</span>
                  <span className="nature-name-en">({n.name})</span>
                  {n.increasedStat && (
                    <span className="stat-mod mod-up">+{STAT_NAMES_ES[n.increasedStat]?.short}</span>
                  )}
                  {n.decreasedStat && (
                    <span className="stat-mod mod-down">-{STAT_NAMES_ES[n.decreasedStat]?.short}</span>
                  )}
                  {isRecommended && <span className="rec-badge">★ Recomendada</span>}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Selector de Habilidad */}
      <div className="config-section">
        <label className="config-label">4. Habilidad Objetivo:</label>
        <div className="ability-selector-row">
          {pokemon.abilities.map((ab, idx) => (
            <button
              key={idx}
              className={`ability-pill ${targetAbility === ab.spanishName ? 'active' : ''}`}
              onClick={() => setTargetAbility(ab.spanishName)}
            >
              <span>{ab.spanishName}</span>
              {ab.isHidden && <span className="ha-tag">Habilidad Oculta (HO)</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Movimientos de Huevo & Tip Gen 9 Mirror Herb */}
      <div className="config-section">
        <label className="config-label">5. Movimientos de Huevo (Egg Moves):</label>
        <div className="egg-move-input-row">
          <input
            type="text"
            className="search-input"
            placeholder="Añadir Movimiento de Huevo (ej. Wish / Deseo, Yawn / Bostezo)..."
            value={eggMoveInput}
            onChange={e => setEggMoveInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleAddEggMove()}
          />
          <button className="btn-secondary" onClick={handleAddEggMove}>
            Añadir
          </button>
        </div>

        {eggMoves.length > 0 && (
          <div className="egg-move-tags">
            {eggMoves.map((m, idx) => (
              <span key={idx} className="egg-move-tag">
                {m}
                <button onClick={() => handleRemoveEggMove(m)} className="tag-remove">×</button>
              </span>
            ))}
          </div>
        )}

        <div className="tip-box">
          <HelpCircle size={18} color="#00D2FF" />
          <span>
            <strong>Tip Maestro Gen 9 (Escarlata y Púrpura):</strong> En la novena generación no necesitas criar obligatoriamente para aprender Movimientos de Huevo. Puedes equipar una <strong>Hierba Copia (*Mirror Herb*)</strong> a tu Pokémon con un hueco libre en sus movimientos e iniciar un Picnic con cualquier Pokémon que conozca el movimiento.
          </span>
        </div>
      </div>

      {/* Botones de Acción */}
      <div className="configurator-actions">
        <button className="btn-secondary" onClick={onBack}>
          Volver a Selección
        </button>
        <button className="btn-success btn-large" onClick={handleConfirmGoal}>
          <CheckCircle2 size={20} />
          <span>Generar Árbol de Crianza y Flujo de Huevos</span>
        </button>
      </div>
    </div>
  );
};
