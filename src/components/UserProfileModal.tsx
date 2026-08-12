import React, { useState, useEffect } from 'react';
import { User, X, Check, ShieldCheck, Download, Upload, LogOut, Key, Sparkles, Trophy, Star, RefreshCw, Layers } from 'lucide-react';
import {
  getActiveTrainerSession,
  loginTrainerSession,
  logoutTrainerSession,
  getAllSavedTrainerSessions,
  TrainerSession
} from '../utils/userSessionService';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({ isOpen, onClose }) => {
  const [activeSession, setActiveSession] = useState<TrainerSession | null>(getActiveTrainerSession);
  const [savedVault, setSavedVault] = useState<TrainerSession[]>(getAllSavedTrainerSessions);

  const [inputUsername, setInputUsername] = useState<string>(activeSession?.username || '');
  const [inputPinCode, setInputPinCode] = useState<string>(activeSession?.pinCode || '');
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const sess = getActiveTrainerSession();
      setActiveSession(sess);
      setSavedVault(getAllSavedTrainerSessions());
      setInputUsername(sess?.username || '');
      setInputPinCode(sess?.pinCode || '');
      setSavedSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLoginOrRegister = () => {
    const cleaned = inputUsername.trim();
    if (!cleaned) return;

    const newSess = loginTrainerSession(cleaned, inputPinCode.trim() || undefined);
    setActiveSession(newSess);
    setSavedVault(getAllSavedTrainerSessions());
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const handleSwitchAccount = (username: string) => {
    const newSess = loginTrainerSession(username);
    setActiveSession(newSess);
    setInputUsername(newSess.username);
    setInputPinCode(newSess.pinCode || '');
    setSavedVault(getAllSavedTrainerSessions());
  };

  const handleLogout = () => {
    logoutTrainerSession();
    setActiveSession(null);
    setInputUsername('');
    setInputPinCode('');
  };

  const avatarUrl = inputUsername.trim()
    ? `https://minotar.net/avatar/${encodeURIComponent(inputUsername.trim())}/64`
    : 'https://minotar.net/avatar/MHF_Steve/64';

  const handleExportSessionVault = () => {
    const vault = getAllSavedTrainerSessions();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(vault, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `muddex_sessions_vault_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportSessionVault = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = event => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (Array.isArray(parsed) && parsed.length > 0) {
          localStorage.setItem('muddex_trainer_sessions_vault', JSON.stringify(parsed));
          loginTrainerSession(parsed[0].username, parsed[0].pinCode);
          alert(`✓ ¡Se importaron ${parsed.length} sesiones de entrenador exitosamente!`);
          window.location.reload();
        } else {
          alert('⚠️ El archivo no contiene un formato de bóveda de sesiones válido.');
        }
      } catch (err) {
        alert('⚠️ Error al leer el archivo de la bóveda de sesiones.');
      }
    };
    reader.readAsText(file);
  };

  const pastureCount = JSON.parse(localStorage.getItem('muddex_global_pastura') || '[]').length;
  const shinyEncounters = Number(localStorage.getItem('diosesmon_shiny_encounters') || '0');

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-2 sm:p-4 bg-zinc-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-t-3xl sm:rounded-3xl p-5 sm:p-6 space-y-5 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 p-1 flex items-center justify-center overflow-hidden shrink-0 shadow-inner">
              <img src={avatarUrl} alt="Minecraft Avatar" className="w-full h-full object-contain rounded-xl" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-extrabold text-white">Sesión de Entrenador Diosesmon</h3>
                <span className={`text-[9px] font-extrabold font-mono px-2 py-0.5 rounded-full border ${
                  activeSession?.isLoggedIn
                    ? 'bg-emerald-950 text-emerald-300 border-emerald-800'
                    : 'bg-zinc-950 text-zinc-400 border-zinc-800'
                }`}>
                  {activeSession?.isLoggedIn ? '🟢 Sesión Activa' : '⚪ Sin Sesión'}
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-mono">
                {activeSession?.username ? `@${activeSession.username}` : 'Inicia Sesión con tu Nick de Minecraft'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Login / Register & Session Form */}
        <div className="space-y-3 bg-zinc-950/90 border border-zinc-800 rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-extrabold uppercase text-zinc-300">
              Nickname de Minecraft (Diosesmon):
            </label>
            {activeSession?.isLoggedIn && (
              <button
                onClick={handleLogout}
                className="text-[10px] text-red-400 hover:text-red-300 font-mono font-bold flex items-center gap-1"
              >
                <LogOut className="w-3 h-3" />
                <span>Cerrar Sesión</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Ej: Mudkill, Nelocode..."
              value={inputUsername}
              onChange={e => setInputUsername(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-white font-mono placeholder-zinc-500 focus:outline-none focus:border-red-500"
            />
            <input
              type="password"
              placeholder="PIN de Seguridad (Opcional)"
              value={inputPinCode}
              onChange={e => setInputPinCode(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-white font-mono placeholder-zinc-500 focus:outline-none focus:border-red-500"
            />
          </div>

          <button
            onClick={handleLoginOrRegister}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-amber-300" />
            <span>{activeSession?.isLoggedIn ? '✓ Actualizar Sesión Persistente' : '🔑 Iniciar Sesión / Vincular Entrenador'}</span>
          </button>

          {savedSuccess && (
            <p className="text-xs text-emerald-400 font-bold text-center animate-in fade-in">
              ✓ ¡Sesión guardada y vinculada a la pastura del usuario @{inputUsername}!
            </p>
          )}
        </div>

        {/* Account Vault Switcher */}
        {savedVault.length > 0 && (
          <div className="space-y-2">
            <span className="text-xs font-bold text-zinc-400 uppercase block">Cuentas Guardadas en este Dispositivo:</span>
            <div className="grid grid-cols-2 gap-2 font-mono text-xs">
              {savedVault.map(s => (
                <button
                  key={s.username}
                  onClick={() => handleSwitchAccount(s.username)}
                  className={`p-2.5 rounded-2xl border flex items-center gap-2.5 transition-all text-left ${
                    activeSession?.username.toLowerCase() === s.username.toLowerCase()
                      ? 'bg-red-950/40 border-red-500/50 text-white font-extrabold'
                      : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  <img src={s.avatarUrl} alt={s.username} className="w-7 h-7 rounded-lg object-contain bg-zinc-900 shrink-0" />
                  <div className="truncate">
                    <span className="block truncate font-bold text-xs">@{s.username}</span>
                    <span className="text-[9px] text-zinc-500 block">{s.pastura?.length || 0} Pokémon</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Session Metrics */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-3 space-y-1">
            <Layers className="w-4 h-4 text-amber-400 mx-auto" />
            <span className="text-[10px] font-bold uppercase text-zinc-400 block">Pastura Global</span>
            <strong className="text-sm font-extrabold text-amber-400 font-mono">{pastureCount}</strong>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-3 space-y-1">
            <Sparkles className="w-4 h-4 text-emerald-400 mx-auto" />
            <span className="text-[10px] font-bold uppercase text-zinc-400 block">Encuentros</span>
            <strong className="text-sm font-extrabold text-emerald-400 font-mono">{shinyEncounters}</strong>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-3 space-y-1">
            <Key className="w-4 h-4 text-purple-400 mx-auto" />
            <span className="text-[10px] font-bold uppercase text-zinc-400 block">IA API Key</span>
            <strong className="text-xs font-extrabold text-purple-400 font-mono truncate block">
              {localStorage.getItem('muddex_ai_key') ? '✓ Configurada' : 'Sin Clave'}
            </strong>
          </div>
        </div>

        {/* Session Vault Export / Import */}
        <div className="space-y-2 pt-2 border-t border-zinc-800">
          <span className="text-xs font-bold text-zinc-400 uppercase block">Bóveda de Sesiones & Portabilidad:</span>
          
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleExportSessionVault}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-xs font-bold text-zinc-300 transition-all"
            >
              <Download className="w-4 h-4 text-sky-400" />
              <span>Exportar Bóveda (.json)</span>
            </button>

            <label className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-xs font-bold text-zinc-300 transition-all cursor-pointer">
              <Upload className="w-4 h-4 text-emerald-400" />
              <span>Importar Bóveda</span>
              <input type="file" accept=".json" onChange={handleImportSessionVault} className="hidden" />
            </label>
          </div>
        </div>

      </div>
    </div>
  );
};
