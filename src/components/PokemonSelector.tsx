import React, { useState, useEffect } from 'react';
import { Search, Loader2, Filter, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { PokemonSummary } from '../types/pokemon';
import { fetchPokemon, getAllPokemonList, BasicPokemonListItem, EGG_GROUPS_ES, STAT_NAMES_ES } from '../services/pokeapi';

interface PokemonSelectorProps {
  onSelectPokemon: (pokemon: PokemonSummary) => void;
}

const ITEMS_PER_PAGE = 30;

export const PokemonSelector: React.FC<PokemonSelectorProps> = ({ onSelectPokemon }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLoadingList, setIsLoadingList] = useState(true);
  const [selectedGen, setSelectedGen] = useState<number | 'all'>('all');
  const [allPokemon, setAllPokemon] = useState<BasicPokemonListItem[]>([]);
  const [page, setPage] = useState(1);
  const [previewPokemon, setPreviewPokemon] = useState<PokemonSummary | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Load all 1025 Pokémon on mount
  useEffect(() => {
    async function loadMasterList() {
      setIsLoadingList(true);
      const list = await getAllPokemonList();
      setAllPokemon(list);
      setIsLoadingList(false);
    }
    loadMasterList();
  }, []);

  const handleSearch = async (query: string) => {
    if (!query.trim()) return;
    setLoading(true);
    setErrorMsg(null);
    try {
      const poke = await fetchPokemon(query.toLowerCase().trim());
      setPreviewPokemon(poke);
    } catch (err) {
      setErrorMsg('No se encontró ningún Pokémon con ese nombre o ID.');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectCard = async (id: number) => {
    setLoading(true);
    setErrorMsg(null);
    try {
      const poke = await fetchPokemon(id);
      setPreviewPokemon(poke);
    } catch (err) {
      setErrorMsg('Error al cargar la información del Pokémon.');
    } finally {
      setLoading(false);
    }
  };

  // Filter list by Search term and Generation
  const filteredList = allPokemon.filter(p => {
    const matchesGen = selectedGen === 'all' || p.generation === selectedGen;
    const matchesSearch =
      !searchTerm.trim() ||
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.spanishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(p.id).includes(searchTerm.trim());
    return matchesGen && matchesSearch;
  });

  const totalPages = Math.ceil(filteredList.length / ITEMS_PER_PAGE) || 1;
  const currentPageList = filteredList.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [searchTerm, selectedGen]);

  return (
    <div className="pokemon-selector-card glass-panel">
      <div className="step-badge">Paso 1</div>
      <h2 className="section-title">Elige el Pokémon Objetivo de tu Crianza</h2>
      <p className="section-subtitle">
        Catálogo Completo Nacional de 1,025 Pokémon (Generaciones 1 a 9). Explora, filtra o busca el Pokémon que deseas criar.
      </p>

      {/* Input de Búsqueda */}
      <div className="search-bar-wrapper">
        <div className="input-with-icon">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            className="search-input"
            placeholder="Buscar en los 1,025 Pokémon (ej. Eevee, Umbreon, 197, Gholdengo, Sprigatito...)"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSearch(searchTerm)}
          />
        </div>
        <button
          className="btn-primary"
          onClick={() => handleSearch(searchTerm)}
          disabled={loading || !searchTerm.trim()}
        >
          {loading ? <Loader2 className="animate-spin" size={18} /> : 'Buscar'}
        </button>
      </div>

      {errorMsg && <div className="error-alert">{errorMsg}</div>}

      {/* Filtro por Generación */}
      <div className="gen-filter-bar">
        <span className="filter-label"><Filter size={16} /> Generación:</span>
        <button className={`gen-pill ${selectedGen === 'all' ? 'active' : ''}`} onClick={() => setSelectedGen('all')}>Todas (1,025)</button>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(g => (
          <button
            key={g}
            className={`gen-pill ${selectedGen === g ? 'active' : ''}`}
            onClick={() => setSelectedGen(g)}
          >
            Gen {g}
          </button>
        ))}
      </div>

      {/* Controles de Paginación */}
      <div className="pagination-bar">
        <span className="pagination-info">
          Mostrando {filteredList.length} Pokémon (Página {page} de {totalPages})
        </span>
        <div className="pagination-controls">
          <button
            className="btn-secondary btn-small"
            disabled={page <= 1}
            onClick={() => setPage(p => Math.max(1, p - 1))}
          >
            <ChevronLeft size={16} /> Anterior
          </button>
          <span className="page-number-display">{page} / {totalPages}</span>
          <button
            className="btn-secondary btn-small"
            disabled={page >= totalPages}
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
          >
            Siguiente <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Grilla Completa de 1025 Pokémon */}
      {isLoadingList ? (
        <div className="presets-grid">
          {Array.from({ length: 30 }, (_, i) => (
            <div key={i} className="preset-card skeleton-card" />
          ))}
          <div className="loading-list-overlay">
            <Loader2 className="animate-spin" size={28} color="#00D2FF" />
            <span>Cargando Pokédex Nacional — 1.025 Pokémon...</span>
          </div>
        </div>
      ) : (
        <div className="presets-grid">
          {currentPageList.map(p => (
            <button
              key={p.id}
              className={`preset-card ${previewPokemon?.id === p.id ? 'selected' : ''}`}
              onClick={() => handleSelectCard(p.id)}
            >
              <img
                src={p.sprite}
                alt={p.spanishName}
                className="preset-sprite"
                loading="lazy"
              />
              <span className="preset-name">{p.spanishName}</span>
              <span className="preset-id">#{String(p.id).padStart(3, '0')} (Gen {p.generation})</span>
            </button>
          ))}
        </div>
      )}

      {/* Vista Previa del Pokémon Seleccionado */}
      {previewPokemon && (
        <div className="pokemon-preview-card">
          <div className="preview-header">
            <div className="preview-image-box">
              <img
                src={previewPokemon.officialArtwork || previewPokemon.sprite}
                alt={previewPokemon.spanishName}
                className="preview-artwork"
              />
              <div className="type-badges">
                {previewPokemon.types.map(t => (
                  <span key={t} className={`type-badge type-${t}`}>
                    {t.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

            <div className="preview-info">
              <div className="preview-title-row">
                <h3 className="preview-name">{previewPokemon.spanishName}</h3>
                <span className="preview-number">#{String(previewPokemon.id).padStart(3, '0')}</span>
              </div>

              <div className="info-pills">
                <span className="info-pill">
                  <strong>Grupos Huevo:</strong>{' '}
                  {previewPokemon.eggGroups.map(eg => EGG_GROUPS_ES[eg] || eg).join(', ')}
                </span>
                <span className="info-pill">
                  <strong>Habilidad Princ.:</strong> {previewPokemon.abilities[0]?.spanishName || 'Estándar'}
                </span>
              </div>

              {/* Stats Base Visual Bar */}
              <div className="stats-bars-container">
                <h4 className="stats-title">Estadísticas Base</h4>
                {(Object.keys(previewPokemon.baseStats) as Array<keyof typeof previewPokemon.baseStats>).map(st => {
                  const val = previewPokemon.baseStats[st];
                  const percentage = Math.min(100, Math.round((val / 160) * 100));
                  return (
                    <div key={st} className="stat-row">
                      <span className="stat-name">{STAT_NAMES_ES[st].short}</span>
                      <span className="stat-val">{val}</span>
                      <div className="stat-track">
                        <div className={`stat-fill stat-fill-${st}`} style={{ width: `${percentage}%` }}></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                className="btn-success btn-large"
                style={{ marginTop: '1.2rem', width: '100%' }}
                onClick={() => onSelectPokemon(previewPokemon)}
              >
                <Sparkles size={20} />
                <span>Confirmar a {previewPokemon.spanishName} e Iniciar Configuración</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
