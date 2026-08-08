import React, { useState, useEffect } from 'react';
import { Gamepad2, Volume2, RefreshCw, CheckCircle, XCircle } from 'lucide-react';
import { COBBLEMON_POKEDEX } from '../data/cobblemonPokedex';
import { Pokemon } from '../types/diosesmon';

export const PokeQuizView: React.FC = () => {
  const [mode, setMode] = useState<'silhouette' | 'cry'>('silhouette');
  const [targetPokemon, setTargetPokemon] = useState<Pokemon | null>(null);
  const [options, setOptions] = useState<Pokemon[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const [score, setScore] = useState<number>(() => {
    const saved = localStorage.getItem('diosesmon_quiz_score');
    return saved ? Number(saved) : 0;
  });

  const [streak, setStreak] = useState<number>(0);

  const [maxStreak, setMaxStreak] = useState<number>(() => {
    const saved = localStorage.getItem('diosesmon_quiz_max_streak');
    return saved ? Number(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem('diosesmon_quiz_score', String(score));
  }, [score]);

  useEffect(() => {
    localStorage.setItem('diosesmon_quiz_max_streak', String(maxStreak));
  }, [maxStreak]);

  // Generate a random question from COBBLEMON_POKEDEX
  const generateQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);

    const randomIndex = Math.floor(Math.random() * COBBLEMON_POKEDEX.length);
    const correctTarget = COBBLEMON_POKEDEX[randomIndex];

    // Pick 3 random wrong options
    const wrongOptions: Pokemon[] = [];
    while (wrongOptions.length < 3) {
      const idx = Math.floor(Math.random() * COBBLEMON_POKEDEX.length);
      const candidate = COBBLEMON_POKEDEX[idx];
      if (candidate.id !== correctTarget.id && !wrongOptions.some(o => o.id === candidate.id)) {
        wrongOptions.push(candidate);
      }
    }

    // Shuffle options
    const allOpts = [correctTarget, ...wrongOptions].sort(() => Math.random() - 0.5);

    setTargetPokemon(correctTarget);
    setOptions(allOpts);

    if (mode === 'cry' && correctTarget.audioCryUrl) {
      playAudio(correctTarget.audioCryUrl);
    }
  };

  useEffect(() => {
    generateQuestion();
  }, [mode]);

  const playAudio = (url?: string) => {
    if (!url) return;
    try {
      const audio = new Audio(url);
      audio.volume = 0.6;
      audio.play().catch(() => {});
    } catch (err) {}
  };

  const handleAnswer = (option: Pokemon) => {
    if (selectedAnswer !== null || !targetPokemon) return;

    setSelectedAnswer(option.id);
    const correct = option.id === targetPokemon.id;
    setIsCorrect(correct);

    if (correct) {
      const newScore = score + 100 + streak * 20;
      const newStreak = streak + 1;
      setScore(newScore);
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);
      if (targetPokemon.audioCryUrl) playAudio(targetPokemon.audioCryUrl);
    } else {
      setStreak(0);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-red-950/40 border border-zinc-800 p-4 sm:p-6 md:p-8">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-[11px] sm:text-xs font-semibold max-w-full truncate">
            <Gamepad2 className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Minijuego Interactivo • Diosesmon Dex</span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
            ¿Quién es este Pokémon? (PokéQuiz)
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Pon a prueba tus conocimientos sobre los 1,025 Pokémon adivinando la silueta oculta o identificando su rugido de audio. Tu puntuación y racha máxima se guardan en tu navegador.
          </p>
        </div>
      </div>

      {/* Mode Selector & Score Dashboard */}
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMode('silhouette')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              mode === 'silhouette'
                ? 'bg-red-600 text-white border-red-500 font-extrabold shadow-md shadow-red-600/20'
                : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white'
            }`}
          >
            🕶️ Modo Silueta
          </button>
          <button
            onClick={() => setMode('cry')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              mode === 'cry'
                ? 'bg-red-600 text-white border-red-500 font-extrabold shadow-md shadow-red-600/20'
                : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white'
            }`}
          >
            🔊 Modo Grito de Audio
          </button>
        </div>

        {/* Score & Streak Counters */}
        <div className="flex items-center gap-4 font-mono text-xs">
          <div className="bg-zinc-950 px-3 py-1.5 rounded-xl border border-zinc-800">
            <span className="text-zinc-500">Puntos:</span> <strong className="text-amber-400 text-sm font-bold">{score}</strong>
          </div>
          <div className="bg-zinc-950 px-3 py-1.5 rounded-xl border border-zinc-800">
            <span className="text-zinc-500">Racha:</span> <strong className="text-emerald-400 text-sm font-bold">🔥 {streak}</strong>
          </div>
          <div className="bg-zinc-950 px-3 py-1.5 rounded-xl border border-zinc-800 hidden sm:block">
            <span className="text-zinc-500">Máx Racha:</span> <strong className="text-amber-400 text-sm font-bold">{maxStreak}</strong>
          </div>
        </div>
      </div>

      {/* Quiz Card Box */}
      {targetPokemon && (
        <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden max-w-2xl mx-auto text-center">
          
          {/* Target Display Canvas */}
          <div className="w-full h-60 bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-950 rounded-3xl border-2 border-zinc-700/80 flex flex-col items-center justify-center p-4 relative overflow-hidden group shadow-inner">
            
            {/* High-Contrast Center Spotlight */}
            <div className="absolute w-48 h-48 rounded-full bg-zinc-700/50 border border-zinc-600/30 blur-2xl pointer-events-none" />
            <div className="absolute w-36 h-36 rounded-full bg-white/10 blur-xl pointer-events-none" />

            {mode === 'cry' && selectedAnswer === null ? (
              <button
                onClick={() => playAudio(targetPokemon.audioCryUrl)}
                className="flex flex-col items-center gap-3 text-red-400 hover:text-red-300 transition-colors p-4 relative z-10"
              >
                <div className="w-16 h-16 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center animate-bounce shadow-lg">
                  <Volume2 className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold font-mono">Pulsa para reproducir el rugido 🔊</span>
              </button>
            ) : (
              <img
                src={targetPokemon.spriteUrl || targetPokemon.artworkUrl}
                alt={targetPokemon.name}
                className={`max-h-44 object-contain transition-all duration-500 relative z-10 ${
                  selectedAnswer === null && mode === 'silhouette'
                    ? 'brightness-0 contrast-200 filter drop-shadow-[0_0_12px_rgba(255,255,255,0.85)] drop-shadow-[0_0_24px_rgba(255,255,255,0.4)] scale-125'
                    : 'brightness-100 scale-125 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] animate-bounce'
                }`}
              />
            )}

            {selectedAnswer !== null && (
              <span className="absolute bottom-3 text-xs font-mono font-bold text-zinc-300 bg-zinc-950/80 px-3 py-1 rounded-full border border-zinc-800 relative z-10">
                #{String(targetPokemon.dexNumber).padStart(3, '0')} - {targetPokemon.name}
              </span>
            )}
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {options.map(option => {
              const isSelected = selectedAnswer === option.id;
              const isCorrectTarget = option.id === targetPokemon.id;

              let btnStyle = 'bg-zinc-950 text-zinc-200 border-zinc-800 hover:border-red-500/50 hover:bg-zinc-900';

              if (selectedAnswer !== null) {
                if (isCorrectTarget) {
                  btnStyle = 'bg-emerald-500/20 text-emerald-300 border-emerald-500 font-bold shadow-lg shadow-emerald-500/20';
                } else if (isSelected && !isCorrectTarget) {
                  btnStyle = 'bg-rose-500/20 text-rose-300 border-rose-500 font-bold';
                } else {
                  btnStyle = 'bg-zinc-950/40 text-zinc-600 border-zinc-900 opacity-50';
                }
              }

              return (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(option)}
                  disabled={selectedAnswer !== null}
                  className={`py-3 px-4 rounded-xl border text-sm font-bold transition-all text-center flex items-center justify-between ${btnStyle}`}
                >
                  <span>{option.name}</span>
                  {selectedAnswer !== null && isCorrectTarget && <CheckCircle className="w-4 h-4 text-emerald-400" />}
                  {selectedAnswer !== null && isSelected && !isCorrectTarget && <XCircle className="w-4 h-4 text-rose-400" />}
                </button>
              );
            })}
          </div>

          {/* Next Question Button */}
          {selectedAnswer !== null && (
            <div className="pt-2 animate-in fade-in duration-200">
              <button
                onClick={generateQuestion}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-extrabold text-sm shadow-lg shadow-red-600/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Siguiente Pokémon</span>
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      )}

    </div>
  );
};
