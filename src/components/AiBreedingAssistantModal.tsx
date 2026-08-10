import React, { useState } from 'react';
import { Sparkles, Bot, Key, Send, AlertCircle, RefreshCw, X, Check, BookOpen } from 'lucide-react';
import { askAiBreedingMaster, AiConfig, AiBreedingAuditResult } from '../utils/aiBreedingService';
import { BreederInventoryItem } from '../utils/breedingAlgorithm';

interface AiBreedingAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetPokemonName: string;
  targetIvs: Record<string, boolean>;
  targetNature: string;
  targetAbility: string;
  eggMoves: string[];
  pastura: BreederInventoryItem[];
}

export const AiBreedingAssistantModal: React.FC<AiBreedingAssistantModalProps> = ({
  isOpen,
  onClose,
  targetPokemonName,
  targetIvs,
  targetNature,
  targetAbility,
  eggMoves,
  pastura
}) => {
  const [provider, setProvider] = useState<'gemini' | 'openai'>('gemini');
  const [apiKey, setApiKey] = useState<string>(() => localStorage.getItem('muddex_ai_key') || '');
  const [customQuestion, setCustomQuestion] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<AiBreedingAuditResult | null>(null);

  if (!isOpen) return null;

  const handleSaveKey = (key: string) => {
    setApiKey(key);
    localStorage.setItem('muddex_ai_key', key);
  };

  const handleRunAiAudit = async () => {
    setIsLoading(true);
    setResult(null);

    const config: AiConfig = {
      provider,
      apiKey,
      model: provider === 'gemini' ? 'gemini-1.5-flash' : 'gpt-4o-mini'
    };

    const res = await askAiBreedingMaster(
      targetPokemonName,
      targetIvs,
      targetNature,
      targetAbility,
      eggMoves,
      pastura,
      config,
      customQuestion
    );

    setResult(res);
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-950">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-red-500/20 border border-amber-500/30 text-amber-400">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base flex items-center gap-2">
                <span>Maestro de Crianza IA</span>
                <span className="text-[10px] font-mono text-amber-400 bg-amber-950 px-2 py-0.5 rounded-full border border-amber-800">
                  Gemini / GPT-4o
                </span>
              </h3>
              <p className="text-xs text-zinc-400">Asistente genético inteligente para auditar y resolver tus dudas de crianza</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto space-y-5 flex-1 scrollbar-thin">
          
          {/* API Key Configuration Section */}
          <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-zinc-300">
              <span className="flex items-center gap-2">
                <Key className="w-4 h-4 text-amber-400" />
                <span>Configurar Clave de API de IA:</span>
              </span>
              <div className="flex items-center gap-2 font-mono text-[10px]">
                <button
                  onClick={() => setProvider('gemini')}
                  className={`px-2.5 py-1 rounded-lg border transition-all ${
                    provider === 'gemini' ? 'bg-amber-600 border-amber-500 text-white font-bold' : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                  }`}
                >
                  Gemini (Gratis)
                </button>
                <button
                  onClick={() => setProvider('openai')}
                  className={`px-2.5 py-1 rounded-lg border transition-all ${
                    provider === 'openai' ? 'bg-emerald-600 border-emerald-500 text-white font-bold' : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                  }`}
                >
                  OpenAI GPT
                </button>
              </div>
            </div>

            <div className="relative">
              <input
                type="password"
                value={apiKey}
                onChange={(e) => handleSaveKey(e.target.value)}
                placeholder={provider === 'gemini' ? 'Ingresa tu Gemini API Key (ej: AIzaSy...)' : 'Ingresa tu OpenAI API Key (ej: sk-proj-...)'}
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-mono text-xs focus:outline-none focus:border-amber-500"
              />
            </div>
            <p className="text-[10px] text-zinc-400 leading-tight">
              💡 Tu API Key se guarda localmente en tu navegador. Puedes obtener una clave de Gemini 100% gratuita en <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-amber-400 underline">Google AI Studio</a>.
            </p>
          </div>

          {/* Custom Question Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-zinc-300 block">Pregunta o Consulta Específica (Opcional):</label>
            <textarea
              rows={3}
              value={customQuestion}
              onChange={(e) => setCustomQuestion(e.target.value)}
              placeholder="Ej: Tengo 2 Slowpokes y un Marill en mi pastura. ¿Cómo logro pasar los IVs a un Mudkip 5x31 Firme sin cruzar dos de la misma especie?"
              className="w-full p-3 rounded-2xl bg-zinc-950 border border-zinc-800 text-white font-mono text-xs focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Run Audit Button */}
          <button
            onClick={handleRunAiAudit}
            disabled={isLoading || !apiKey.trim()}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-500 hover:to-red-500 disabled:opacity-50 text-white font-extrabold text-xs shadow-lg shadow-amber-600/20 transition-all flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Consultando al Maestro Genético IA...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Auditar Crianza y Generar Plan IA</span>
              </>
            )}
          </button>

          {/* Results Output */}
          {result && (
            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
              {result.isSuccess ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-400 border-b border-zinc-800 pb-2">
                    <Check className="w-4 h-4" />
                    <span>Respuesta del Maestro IA de Crianza:</span>
                  </div>
                  <div className="prose prose-invert prose-xs font-mono text-xs text-zinc-200 whitespace-pre-wrap leading-relaxed">
                    {result.adviceMarkdown}
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-3 p-3 rounded-xl bg-red-950/50 border border-red-800/50 text-red-300 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{result.error}</span>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-950 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-extrabold transition-all"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
