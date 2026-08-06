import React, { useState } from 'react';
import { Wand2, X, Copy, Check, LogOut, Key, Link as LinkIcon, Download, Upload, Sparkles } from 'lucide-react';
import { MagicUserSession } from '../types/pokemon';
import {
  getMagicSession,
  saveMagicSession,
  logoutMagicSession,
  exportMagicStateBundle,
  importMagicStateBundle
} from '../services/storage';

interface MagicLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSessionChanged: () => void;
}

export const MagicLoginModal: React.FC<MagicLoginModalProps> = ({
  isOpen,
  onClose,
  onSessionChanged
}) => {
  const [session, setSession] = useState<MagicUserSession | null>(getMagicSession());
  const [inputVal, setInputVal] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedBundle, setCopiedBundle] = useState(false);
  const [importCode, setImportCode] = useState('');
  const [feedbackMsg, setFeedbackMsg] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const newSession = saveMagicSession(inputVal.trim());
    setSession(newSession);
    setInputVal('');
    setFeedbackMsg({ text: `¡Sesión Mágica iniciada como ${newSession.trainerName}!`, type: 'success' });
    onSessionChanged();
  };

  const handleLogout = () => {
    logoutMagicSession();
    setSession(null);
    setFeedbackMsg({ text: 'Sesión Mágica cerrada. Datos guardados localmente.', type: 'success' });
    onSessionChanged();
  };

  const handleCopyMagicLink = () => {
    if (!session) return;
    navigator.clipboard.writeText(session.magicLinkUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleExportBundle = () => {
    const bundle = exportMagicStateBundle();
    navigator.clipboard.writeText(bundle);
    setCopiedBundle(true);
    setTimeout(() => setCopiedBundle(false), 2500);
  };

  const handleImportBundle = () => {
    if (!importCode.trim()) return;
    const ok = importMagicStateBundle(importCode.trim());
    if (ok) {
      setSession(getMagicSession());
      setImportCode('');
      setFeedbackMsg({ text: '¡Tus Pokémon en crianza y cajas han sido restaurados con éxito!', type: 'success' });
      onSessionChanged();
    } else {
      setFeedbackMsg({ text: 'Código Mágico inválido o corrupto.', type: 'error' });
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-panel magic-login-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-row">
            <Wand2 className="magic-icon" size={24} color="#00D2FF" />
            <div>
              <h2 className="modal-title">Magic Login — Sincronización Mágica</h2>
              <p className="modal-subtitle">
                Guarda tu Pokémon en crianza y tu Caja de Padres sin contraseñas.
              </p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {feedbackMsg && (
          <div className={`magic-alert magic-alert-${feedbackMsg.type}`}>
            {feedbackMsg.text}
          </div>
        )}

        <div className="modal-body">
          {session ? (
            /* USUARIO CON SESIÓN MÁGICA ACTIVA */
            <div className="magic-session-active">
              <div className="session-card glass-panel">
                <div className="session-user-info">
                  <div className="user-avatar">
                    <Sparkles size={20} color="#FFD700" />
                  </div>
                  <div>
                    <span className="user-role-tag">Entrenador Autenticado</span>
                    <h3 className="user-name">{session.trainerName}</h3>
                    <span className="user-email">{session.email}</span>
                  </div>
                </div>
                <button className="btn-danger btn-small" onClick={handleLogout}>
                  <LogOut size={16} /> Cerrar Sesión
                </button>
              </div>

              {/* ENLACE MÁGICO PARA OTROS DISPOSITIVOS */}
              <div className="magic-section">
                <label className="section-label">
                  <LinkIcon size={16} color="#00D2FF" /> Tu Enlace Mágico de Acceso Directo:
                </label>
                <p className="section-desc">
                  Abre este enlace en cualquier otro computador o celular para cargar instantáneamente tus Pokémon y cajas.
                </p>
                <div className="magic-input-group">
                  <input
                    type="text"
                    readOnly
                    value={session.magicLinkUrl}
                    className="magic-input"
                  />
                  <button className="btn-primary" onClick={handleCopyMagicLink}>
                    {copiedLink ? <Check size={16} /> : <Copy size={16} />}
                    <span>{copiedLink ? '¡Copiado!' : 'Copiar Enlace'}</span>
                  </button>
                </div>
              </div>

              {/* RESPALDO MANUAL DE CÓDIGO */}
              <div className="magic-section">
                <label className="section-label">
                  <Download size={16} color="#00E676" /> Copia de Seguridad Rápida (Magic Code):
                </label>
                <div className="magic-actions-row">
                  <button className="btn-secondary" onClick={handleExportBundle}>
                    {copiedBundle ? <Check size={16} /> : <Copy size={16} />}
                    <span>{copiedBundle ? '¡Código Copiado!' : 'Copiar Código de Respaldo'}</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* USUARIO SIN SESIÓN — LOGIN RÁPIDO */
            <div className="magic-session-form">
              <form onSubmit={handleLogin} className="login-form-box">
                <label className="input-label">
                  <Key size={16} color="#00D2FF" /> Ingresa tu Correo o Nombre de Entrenador:
                </label>
                <p className="input-help">
                  Crea o ingresa con cualquier identificador (ej. <code>gabo@pokelinker.com</code> o <code>Gabo Master</code>). No requiere contraseña.
                </p>

                <div className="magic-input-group">
                  <input
                    type="text"
                    placeholder="ej. gabo@trainer.com o TuNombre..."
                    value={inputVal}
                    onChange={e => setInputVal(e.target.value)}
                    className="magic-input"
                    autoFocus
                  />
                  <button type="submit" className="btn-primary" disabled={!inputVal.trim()}>
                    <Wand2 size={16} />
                    <span>Entrar con Magic Login</span>
                  </button>
                </div>
              </form>

              <div className="magic-divider">
                <span>O RESTAURAR DESDE CÓDIGO</span>
              </div>

              {/* IMPORTAR DESDE CÓDIGO */}
              <div className="import-box">
                <label className="input-label">
                  <Upload size={16} color="#FF9900" /> Pegar Código de Respaldo (Magic Code):
                </label>
                <div className="magic-input-group">
                  <input
                    type="text"
                    placeholder="Pega aquí tu código de respaldo guardado..."
                    value={importCode}
                    onChange={e => setImportCode(e.target.value)}
                    className="magic-input"
                  />
                  <button className="btn-secondary" onClick={handleImportBundle} disabled={!importCode.trim()}>
                    Restaurar
                  </button>
                </div>
              </div>
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
