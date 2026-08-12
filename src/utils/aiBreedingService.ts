import { BreederInventoryItem, BreedingStepInstruction, GeneratedBreedingPlan } from './breedingAlgorithm';
import { POKEMON_EGG_DATASET } from '../data/cobblemonEggGroups';

export interface AiConfig {
  provider: 'gemini' | 'openai';
  apiKey: string;
  model?: string;
}

export interface AiBreedingAuditResult {
  isSuccess: boolean;
  adviceMarkdown: string;
  optimizedNotes?: string[];
  rawResponse?: string;
  error?: string;
}

export async function askAiBreedingMaster(
  targetPokemonName: string,
  targetIvs: Record<string, boolean>,
  targetNature: string,
  targetAbility: string,
  eggMoves: string[],
  pastura: BreederInventoryItem[],
  config: AiConfig,
  customQuestion?: string
): Promise<AiBreedingAuditResult> {
  if (!config.apiKey.trim()) {
    return {
      isSuccess: false,
      adviceMarkdown: '',
      error: 'Por favor ingresa una Clave de API (Gemini o OpenAI) para consultar al Maestro de Crianza IA.'
    };
  }

  const activeIvs = Object.entries(targetIvs).filter(([, v]) => v).map(([k]) => k).join(', ');

  const pasturaSummary = pastura.length === 0
    ? 'Ninguno (Pastura Vacía - Iniciar desde criadores salvajes)'
    : pastura.map((b, i) => `${i + 1}. ${b.speciesName} (${b.gender === 'male' ? 'Macho ♂' : b.gender === 'female' ? 'Hembra ♀' : 'Sin Género'}), IVs: ${Object.entries(b.ivs).filter(([, v]) => v).map(([k]) => k).join('/') || 'Ninguno'}, Naturaleza: ${b.nature || 'Desconocida'}`).join('\n');

  const systemPrompt = `Eres un Gran Maestro Genético e Experto en Crianza Pokémon Competitiva para Cobblemon/Minecraft (Gen 9 / Mecánicas Clásicas de Crianza).
Tu misión es auditar, optimizar y explicar con 100% de precisión biológica y genética la mejor cadena de crianza para obtener el Pokémon objetivo.

REGLAS INQUEBRANTABLES DE CRIANZA POKÉMON Y RAZONAMIENTO DE PASTURA:
1. EVALUACIÓN Y REUSO DE LA PASTURA EXISTENTE (REGLA DE ORO): Debes examinar minuciosamente CADA Pokémon registrado en la Pastura del usuario. Si el usuario ya posee ejemplares de la misma especie (ej: Eevee 3x31) o del mismo grupo huevo, ES OBLIGATORIO Usar Esos Ejemplares de la pastura como Padres de partida para ahorrar pasos y tiempo. Jamás sugieras capturar un criador salvaje desde cero si la pastura ya tiene uno superior o equivalente.
2. La especie de la cría SIEMPRE es idéntica a la especie de la MADRE (Hembra ♀). Jamás dos Pokémon de una especie (ej: Slowpoke ♂ + Slowpoke ♀) pueden dar un huevo de otra especie (ej: Mudkip).
3. Dos criadores del mismo sexo (♂+♂ o ♀+♀) JAMÁS pueden criar.
4. Si el usuario tiene dos Slowpoke en la pastura, cruzar Slowpoke ♂ + Slowpoke ♀ dará un SLOWPOKE. Para pasar esos IVs a un Mudkip, ese Slowpoke Macho debe cruzarse con una Mudkip Hembra (♀) (ya que comparten el grupo huevo Agua 1 / Monstruo).
5. La Piedra Eterna equipada en el padre/madre transmite su Naturaleza al 100%.
6. Los Objetos Recios garantizan al 100% la herencia del IV correspondiente.
7. El Lazo Destino transmite 5 IVs aleatorios entre ambos padres.`;

  const userPrompt = `OBJETIVO DE CRIANZA:
- Pokémon Objetivo: ${targetPokemonName}
- IVs Objetivo (31): ${activeIvs}
- Naturaleza: ${targetNature}
- Habilidad: ${targetAbility}
- Movimientos Huevo: ${eggMoves.join(', ') || 'Ninguno'}

INVENTARIO EN PASTURA DEL JUGADOR (EVALUAR Y PRIORIZAR CADA UNO):
${pasturaSummary}

${customQuestion ? `PREGUNTA ESPECÍFICA DEL JUGADOR:\n"${customQuestion}"` : 'Por favor genera un análisis paso a paso optimizado en Markdown evaluando la pastura del usuario, aprovechando sus ejemplares existentes (ej: Eevees con IVs) para construir la ruta más corta posible.'}`;

  try {
    if (config.provider === 'gemini') {
      const modelName = config.model || 'gemini-1.5-flash';
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${config.apiKey.trim()}`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: `${systemPrompt}\n\n${userPrompt}` }]
            }
          ],
          generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 1500
          }
        })
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        throw new Error(errJson.error?.message || `Error de API Gemini HTTP ${response.status}`);
      }

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No se recibió respuesta de la IA.';

      return {
        isSuccess: true,
        adviceMarkdown: text,
        rawResponse: text
      };
    } else {
      // OpenAI Provider
      const modelName = config.model || 'gpt-4o-mini';
      const endpoint = 'https://api.openai.com/v1/chat/completions';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.apiKey.trim()}`
        },
        body: JSON.stringify({
          model: modelName,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt }
          ],
          temperature: 0.2
        })
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        throw new Error(errJson.error?.message || `Error de API OpenAI HTTP ${response.status}`);
      }

      const data = await response.json();
      const text = data.choices?.[0]?.message?.content || 'No se recibió respuesta de OpenAI.';

      return {
        isSuccess: true,
        adviceMarkdown: text,
        rawResponse: text
      };
    }
  } catch (err: any) {
    return {
      isSuccess: false,
      adviceMarkdown: '',
      error: err.message || 'Error al conectar con la API de IA.'
    };
  }
}
