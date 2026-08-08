import React, { useState, useEffect } from 'react';
import { User, X, Check, ShieldCheck, Download, Upload, Copy, Sparkles, Trophy, Star, RefreshCw } from 'lucide-react';
import { UserProfile } from '../types/diosesmon';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState<string>(() => {
    return localStorage.getItem('diosesmon_username') || '';
  });

  const [inputUsername, setInputUsername] = useState<string>(username);
  const [copiedLink, setCopiedLink] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Load user metrics
  const shinyEncounters = Number(localStorage.getItem('diosesmon_shiny_encounters') || '0');
  const quizScore = Number(localStorage.getItem('diosesmon_quiz_score') || '0');
  const quizMaxStreak = Number(localStorage.getItem('diosesmon_quiz_max_streak') || '0');
  const favorites: string[] = JSON.parse(localStorage.getItem('diosesmon_favorites') || '[]');

  useEffect(() => {
    if (isOpen) {
      setInputUsername(username);
      setSavedSuccess(false);
    }
  }, [isOpen, username]);

  if (!isOpen) return null;

  const handleSaveProfile = () => {
    const cleaned = inputUsername.trim();
    if (!cleaned) return;
    setUsername(cleaned);
    localStorage.setItem('diosesmon_username', cleaned);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const avatarUrl = inputUsername.trim()
    ? `https://minotar.net/avatar/${encodeURIComponent(inputUsername.trim())}/64`
    : 'https://minotar.net/avatar/MHF_Steve/64';

  const handleExportBackup = () => {
    const profileData: UserProfile = {
      username: username || 'Entrenador',
      shinyEncounters,
      shinyCharm: JSON.parse(localStorage.getItem('diosesmon_shiny_charm') || 'false'),
      sparklingLevel: Number(localStorage.getItem('diosesmon_sparkling_level') || '0'),
      quizScore,
      quizMaxStreak,
      favorites,
      lastUpdated: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(profileData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Diosesmon_Profile_${username || 'Player'}.json`;
    a.click();
  };

  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = event => {
      try {
        const data: UserProfile = JSON.parse(event.target?.result as string);
        if (data.username) {
          localStorage.setItem('diosesmon_username', data.username);
          setUsername(data.username);
          setInputUsername(data.username);
        }
        if (typeof data.shinyEncounters === 'number') {
          localStorage.setItem('diosesmon_shiny_encounters', String(data.shinyEncounters));
        }
        if (typeof data.quizScore === 'number') {
          localStorage.setItem('diosesmon_quiz_score', String(data.quizScore));
        }
        if (typeof data.quizMaxStreak === 'number') {
          localStorage.setItem('diosesmon_quiz_max_streak', String(data.quizMaxStreak));
        }
        if (Array.isArray(data.favorites)) {
          localStorage.setItem('diosesmon_favorites', JSON.stringify(data.favorites));
        }
        alert('¡Perfil y datos restaurados con éxito!');
        window.location.reload();
      } catch (err) {
        alert('Error al leer el archivo de copia de seguridad.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-2 sm:p-4 bg-zinc-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-t-3xl sm:rounded-3xl p-5 sm:p-6 space-y-5 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-zinc-950 border border-zinc-800 p-1 flex items-center justify-center overflow-hidden shrink-0 shadow-inner">
              <img src={avatarUrl} alt="Minecraft Avatar" className="w-full h-full object-contain rounded-xl" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white">Perfil de Entrenador Minecraft</h3>
              <p className="text-xs text-zinc-400 font-mono">
                {username ? `@${username}` : 'Vincula tu Nickname de Diosesmon'}
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

        {/* Form Nickname */}
        <div className="space-y-3 bg-zinc-950/70 border border-zinc-800 rounded-2xl p-4">
          <label className="block text-xs font-bold uppercase text-zinc-300">
            Nickname de Minecraft (Diosesmon):
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Ej: Nelocode, Steve, Alex..."
              value={inputUsername}
              onChange={e => setInputUsername(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white font-mono placeholder-zinc-500 focus:outline-none focus:border-red-500"
            />
            <button
              onClick={handleSaveProfile}
              className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shrink-0 transition-all shadow-md shadow-red-600/20 active:scale-95 flex items-center gap-1.5"
            >
              {savedSuccess ? <Check className="w-4 h-4 text-white" /> : <span>Guardar</span>}
            </button>
          </div>
          {savedSuccess && (
            <p className="text-xs text-emerald-400 font-bold animate-in fade-in">
              ¡Nickname guardado y vinculado a tu cabeza de Minecraft!
            </p>
          )}
        </div>

        {/* Dashboard Progress Summary */}
        <div className="grid grid-cols-3 gap-2.5 text-center">
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-3 space-y-1">
            <Sparkles className="w-4 h-4 text-amber-400 mx-auto" />
            <span className="text-[10px] font-bold uppercase text-zinc-400 block">Encuentros</span>
            <strong className="text-sm sm:text-base font-extrabold text-amber-400 font-mono">{shinyEncounters}</strong>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-3 space-y-1">
            <Trophy className="w-4 h-4 text-emerald-400 mx-auto" />
            <span className="text-[10px] font-bold uppercase text-zinc-400 block">Racha Máx</span>
            <strong className="text-sm sm:text-base font-extrabold text-emerald-400 font-mono">🔥 {quizMaxStreak}</strong>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-3 space-y-1">
            <Star className="w-4 h-4 text-purple-400 mx-auto" />
            <span className="text-[10px] font-bold uppercase text-zinc-400 block">Favoritos</span>
            <strong className="text-sm sm:text-base font-extrabold text-purple-400 font-mono">{favorites.length}</strong>
          </div>
        </div>

        {/* Backup & Export Options */}
        <div className="space-y-2 pt-2 border-t border-zinc-800">
          <span className="text-xs font-bold text-zinc-400 uppercase block">Copia de Seguridad & Portabilidad:</span>
          
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleExportBackup}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-xs font-bold text-zinc-300 transition-all"
            >
              <Download className="w-4 h-4 text-red-500" />
              <span>Exportar Backup</span>
            </button>

            <label className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-xs font-bold text-zinc-300 transition-all cursor-pointer">
              <Upload className="w-4 h-4 text-emerald-400" />
              <span>Restaurar Backup</span>
              <input type="file" accept=".json" onChange={handleImportBackup} className="hidden" />
            </label>
          </div>
        </div>

      </div>
    </div>
  );
};
