import React, { useState, useEffect } from 'react';
import { Gamepad2, Sparkles, Volume2, Trophy, RefreshCw, CheckCircle, XCircle } from 'lucide-react';
import { COBBLEMON_POKEDEX } from '../data/cobblemonPokedex';
import { Pokemon } from '../types/diosesmon';

export const PokeQuizView: React.FC = () => {
  const [mode, setMode] = useState<'silhouette' | 'cry'>('silhouette');
  const [targetPokemon, setTargetPokemon] = useState<Pokemon | null>(null);
  const [options, setOptions] = useState<Pokemon[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);

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
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-amber-950/40 border border-slate-800 p-6 sm:p-8">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>Minijuego Interactivo • Diosesmon Dex</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            ¿Quién es este Pokémon? (PokéQuiz)
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Pon a prueba tus conocimientos sobre los 1,025 Pokémon adivinando la silueta oculta o identificando su rugido de audio.
          </p>
        </div>
      </div>

      {/* Mode Selector & Score Dashboard */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMode('silhouette')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              mode === 'silhouette'
                ? 'bg-amber-500 text-slate-950 border-amber-400 font-extrabold shadow-md shadow-amber-500/20'
                : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            🕶️ Modo Silueta
          </button>
          <button
            onClick={() => setMode('cry')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              mode === 'cry'
                ? 'bg-amber-500 text-slate-950 border-amber-400 font-extrabold shadow-md shadow-amber-500/20'
                : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            🔊 Modo Grito de Audio
          </button>
        </div>

        {/* Score & Streak Counters */}
        <div className="flex items-center gap-4 font-mono text-xs">
          <div className="bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
            <span className="text-slate-500">Puntos:</span> <strong className="text-amber-400 text-sm font-bold">{score}</strong>
          </div>
          <div className="bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
            <span className="text-slate-500">Racha:</span> <strong className="text-emerald-400 text-sm font-bold">🔥 {streak}</strong>
          </div>
          <div className="bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 hidden sm:block">
            <span className="text-slate-500">Máx Racha:</span> <strong className="text-sky-400 text-sm font-bold">{maxStreak}</strong>
          </div>
        </div>
      </div>

      {/* Quiz Card Box */}
      {targetPokemon && (
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden max-w-2xl mx-auto text-center">
          
          {/* Target Display Canvas */}
          <div className="w-full h-52 bg-slate-950 rounded-2xl border border-slate-800/80 flex flex-col items-center justify-center p-4 relative group">
            
            {mode === 'cry' && selectedAnswer === null ? (
              <button
                onClick={() => playAudio(targetPokemon.audioCryUrl)}
                className="flex flex-col items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors p-4"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center animate-bounce">
                  <Volume2 className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold font-mono">Pulsa para reproducir el rugido 🔊</span>
              </button>
            ) : (
              <img
                src={targetPokemon.spriteUrl || targetPokemon.artworkUrl}
                alt={targetPokemon.name}
                className={`max-h-full object-contain transition-all duration-500 ${
                  selectedAnswer === null && mode === 'silhouette'
                    ? 'brightness-0 invert-0 filter drop-shadow-lg scale-110'
                    : 'brightness-100 scale-125 filter drop-shadow-2xl animate-bounce'
                }`}
              />
            )}

            {selectedAnswer !== null && (
              <span className="absolute bottom-3 text-xs font-mono font-bold text-slate-400">
                #{String(targetPokemon.dexNumber).padStart(3, '0')} - {targetPokemon.name}
              </span>
            )}
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {options.map(option => {
              const isSelected = selectedAnswer === option.id;
              const isCorrectTarget = option.id === targetPokemon.id;

              let btnStyle = 'bg-slate-950 text-slate-200 border-slate-800 hover:border-amber-500/50 hover:bg-slate-900';

              if (selectedAnswer !== null) {
                if (isCorrectTarget) {
                  btnStyle = 'bg-emerald-500/20 text-emerald-300 border-emerald-500 font-bold shadow-lg shadow-emerald-500/20';
                } else if (isSelected && !isCorrectTarget) {
                  btnStyle = 'bg-rose-500/20 text-rose-300 border-rose-500 font-bold';
                } else {
                  btnStyle = 'bg-slate-950/40 text-slate-600 border-slate-900 opacity-50';
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
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
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
