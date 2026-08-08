import React, { useState, useEffect } from 'react';
import { Sun, Moon, CloudRain, Zap, Clock } from 'lucide-react';

export const WorldClockWidget: React.FC = () => {
  const [ticks, setTicks] = useState<number>(6000); // Minecraft day starts at 0 (6:00 AM), 6000 is 12:00 PM (Noon), 13000 is Night
  const [weather, setWeather] = useState<'clear' | 'rain' | 'thunder'>('clear');

  // Simulate Minecraft tick cycle (1 full day = 20 minutes / 1200 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setTicks(prev => (prev + 20) % 24000);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const isNight = ticks >= 13000 && ticks < 23000;
  const mcHour = Math.floor(((ticks + 6000) % 24000) / 1000);
  const mcMinute = Math.floor((((ticks + 6000) % 24000) % 1000) * 0.06);

  const formattedTime = `${String(mcHour).padStart(2, '0')}:${String(mcMinute).padStart(2, '0')}`;

  return (
    <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-1.5 text-xs font-mono shadow-inner">
      <div className="flex items-center gap-1.5">
        {isNight ? (
          <Moon className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
        )}
        <span className="font-bold text-zinc-200">{formattedTime}</span>
        <span className="text-[10px] text-zinc-500 hidden sm:inline">({isNight ? 'Noche' : 'Día'})</span>
      </div>

      <div className="h-3 w-px bg-zinc-800" />

      <button
        onClick={() => {
          if (weather === 'clear') setWeather('rain');
          else if (weather === 'rain') setWeather('thunder');
          else setWeather('clear');
        }}
        className="flex items-center gap-1 text-[11px] font-bold text-zinc-300 hover:text-white transition-colors"
        title="Haz clic para simular el clima"
      >
        {weather === 'clear' && <span className="text-amber-400">☀️ Despejado</span>}
        {weather === 'rain' && <span className="text-emerald-400">🌧️ Lluvia</span>}
        {weather === 'thunder' && <span className="text-purple-400">⚡ Tormenta</span>}
      </button>
    </div>
  );
};
