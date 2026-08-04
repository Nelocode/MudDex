import React, { useState } from 'react';
import { Box, Plus, Trash2, X, Check, Sparkles } from 'lucide-react';
import { BoxPokemon, StatDict } from '../types/pokemon';
import { getUserBox, saveBoxPokemon, deleteBoxPokemon } from '../services/storage';

interface PokemonBoxModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBoxUpdated: () => void;
}

export const PokemonBoxModal: React.FC<PokemonBoxModalProps> = ({
  isOpen,
  onClose,
  onBoxUpdated
}) => {
  const [box, setBox] = useState<BoxPokemon[]>(getUserBox());
  const [showAddForm, setShowAddForm] = useState(false);

  // Form state for adding new Pokémon to box
  const [name, setName] = useState('Ditto');
  const [pokemonId, setPokemonId] = useState(132);
  const [gender, setGender] = useState<'male' | 'female' | 'genderless'>('genderless');
  const [nature, setNature] = useState('Jolly');
  const [ability, setAbility] = useState('Imposter');
  const [isDitto, setIsDitto] = useState(true);
  const [ivs, setIvs] = useState<StatDict>({ hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 });

  if (!isOpen) return null;

  const handleAddPokemon = () => {
    const newEntry: BoxPokemon = {
      id: `box-${Date.now()}`,
      pokemonId,
      speciesName: name.toLowerCase(),
      spanishName: name,
      sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
      gender,
      ivs,
      nature,
      ability,
      eggGroups: isDitto ? ['ditto'] : ['field'],
      isDitto,
      notes: 'Pokémon registrado en caja personal'
    };

    saveBoxPokemon(newEntry);
    setBox(getUserBox());
    setShowAddForm(false);
    onBoxUpdated();
  };

  const handleDelete = (id: string) => {
    deleteBoxPokemon(id);
    setBox(getUserBox());
    onBoxUpdated();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content glass-panel">
        <div className="modal-header">
          <div className="title-row">
            <Box size={24} color="#00D2FF" />
            <h3 className="modal-title">Mi Caja de Pokémon (Padres Disponibles)</h3>
          </div>
          <button className="btn-close" onClick={onClose}><X size={20} /></button>
        </div>

        <p className="modal-subtitle">
          Registra tus Pokémon padres (ej. Dittos 6x31, machos de grupos huevo con 4 IVs, etc.). Pokelinker los usará para acortar la ruta de cruzas.
        </p>

        {!showAddForm ? (
          <button className="btn-primary" onClick={() => setShowAddForm(true)} style={{ marginBottom: '1rem' }}>
            <Plus size={18} /> Registrar Nuevo Pokémon en Caja
          </button>
        ) : (
          <div className="add-box-form">
            <h4 className="form-title">Añadir Pokémon a tu Caja</h4>
            <div className="form-grid">
              <div>
                <label>Nombre / Especie:</label>
                <input
                  type="text"
                  className="search-input"
                  value={name}
                  onChange={e => {
                    setName(e.target.value);
                    if (e.target.value.toLowerCase() === 'ditto') {
                      setIsDitto(true);
                      setPokemonId(132);
                      setGender('genderless');
                    }
                  }}
                />
              </div>

              <div>
                <label>ID Dex (ej. 132 para Ditto, 133 para Eevee):</label>
                <input
                  type="number"
                  className="search-input"
                  value={pokemonId}
                  onChange={e => setPokemonId(parseInt(e.target.value, 10) || 132)}
                />
              </div>

              <div>
                <label>Naturaleza:</label>
                <input
                  type="text"
                  className="search-input"
                  value={nature}
                  onChange={e => setNature(e.target.value)}
                />
              </div>

              <div>
                <label>Género:</label>
                <select
                  className="project-select"
                  value={gender}
                  onChange={e => setGender(e.target.value as any)}
                >
                  <option value="male">♂ Masculino</option>
                  <option value="female">♀ Femenino</option>
                  <option value="genderless">⚪ Sin Género (Ditto)</option>
                </select>
              </div>
            </div>

            <div className="iv-inputs-row" style={{ marginTop: '0.8rem' }}>
              <label style={{ display: 'block', width: '100%', fontWeight: 600 }}>IVs Registrados:</label>
              {(['hp', 'atk', 'def', 'spa', 'spd', 'spe'] as const).map(st => (
                <div key={st} className="iv-input-item">
                  <span>{st.toUpperCase()}</span>
                  <input
                    type="number"
                    min="0"
                    max="31"
                    value={ivs[st]}
                    onChange={e => setIvs({ ...ivs, [st]: parseInt(e.target.value, 10) || 0 })}
                  />
                </div>
              ))}
            </div>

            <div className="form-actions">
              <button className="btn-secondary" onClick={() => setShowAddForm(false)}>Cancelar</button>
              <button className="btn-success" onClick={handleAddPokemon}>
                <Check size={18} /> Guardar en Caja
              </button>
            </div>
          </div>
        )}

        {/* Lista de Pokémon Guardados en Caja */}
        <div className="box-items-grid">
          {box.map(item => (
            <div key={item.id} className="box-pokemon-card">
              <div className="box-card-header">
                <img src={item.sprite} alt={item.spanishName} className="box-sprite" />
                <div>
                  <h4 className="box-pokemon-name">{item.spanishName}</h4>
                  <span className="box-meta">{item.nature} • {item.gender === 'male' ? '♂' : item.gender === 'female' ? '♀' : '⚪'}</span>
                </div>
                <button className="btn-icon-delete" onClick={() => handleDelete(item.id)}>
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="box-ivs-row">
                {(['hp', 'atk', 'def', 'spa', 'spd', 'spe'] as const).map(k => (
                  <span key={k} className={`iv-pill ${item.ivs[k] === 31 ? 'active-31' : ''}`}>
                    {k.toUpperCase()}: {item.ivs[k]}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
