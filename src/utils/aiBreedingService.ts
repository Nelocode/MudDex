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

import { POKEMON_BASE_SPECIES_MAP } from '../data/pokemonBaseEvolutions';
import { getSpeciesHandicapByDex } from '../data/pokemonHandicapsData';

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
  const effectiveApiKey = config.apiKey.trim() || (import.meta as any).env?.VITE_GEMINI_API_KEY || '';

  if (!effectiveApiKey) {
    return {
      isSuccess: false,
      adviceMarkdown: '',
      error: 'Por favor ingresa una Clave de API (Gemini o OpenAI) para consultar al Maestro de Crianza IA.'
    };
  }

  config = {
    ...config,
    apiKey: effectiveApiKey
  };

  const activeIvs = Object.entries(targetIvs).filter(([, v]) => v).map(([k]) => k).join(', ');

  // Lookup target species data from authentic dataset
  const targetData = POKEMON_EGG_DATASET.find(p => p.pokemonName.toLowerCase() === targetPokemonName.toLowerCase()) || POKEMON_EGG_DATASET[0];
  const targetHandicap = getSpeciesHandicapByDex(targetData.dexNumber);
  const targetBaseDex = POKEMON_BASE_SPECIES_MAP[targetData.dexNumber] || targetData.dexNumber;
  const targetBaseData = POKEMON_EGG_DATASET.find(p => p.dexNumber === targetBaseDex) || targetData;

  // Enrich pastura summary with authentic Egg Groups and metadata
  const pasturaSummary = pastura.length === 0
    ? 'Ninguno (Pastura Vacía - Iniciar desde criadores salvajes de bajo costo)'
    : pastura.map((b, i) => {
        const bData = POKEMON_EGG_DATASET.find(p => p.pokemonId === b.speciesId) || POKEMON_EGG_DATASET[0];
        const ivList = Object.entries(b.ivs).filter(([, v]) => v).map(([k]) => k).join('/') || 'Sin IVs 31';
        return `${i + 1}. ${bData.pokemonName} (#${bData.dexNumber}, Grupos Huevo: ${bData.eggGroups.join(', ')}), Sexo: ${b.gender === 'male' ? 'Macho ♂' : b.gender === 'female' ? 'Hembra ♀' : 'Sin Género ⚲'}, IVs 31: ${ivList}, Naturaleza: ${b.nature || 'Desconocida'}${b.notes ? `, Nota/Ubicación: "${b.notes}"` : ''}`;
      }).join('\n');

  const systemPrompt = `Eres el Gran Maestro Genético Supremo y Experto en Crianza Pokémon Competitiva para Cobblemon/Minecraft (Gen 9 / Mecánicas Clásicas de Crianza).
Posees acceso a la BASE DE DATOS COMPLETA DE LAS 1,025 ESPECIES, sus Grupos Huevo, Handicaps, Inciensos, Formas Regionales y Mecánicas de Crianza Oficiales.

REGLAS COMPLETAS DE LA BASE DE DATOS DE CRIANZA POKÉMON:
1. EVALUACIÓN Y REUSO DE LA PASTURA EXISTENTE (REGLA DE ORO): Debes examinar minuciosamente CADA Pokémon registrado en la Pastura del usuario. Si el usuario ya posee ejemplares de la misma especie (ej: Eevee 3x31) o del mismo grupo huevo, ES OBLIGATORIO Usar Esos Ejemplares de la pastura como Padres de partida para ahorrar pasos y tiempo. Jamás sugieras capturar un criador salvaje desde cero si la pastura ya tiene uno superior o equivalente.
2. RECURSIÓN Y ESPECIES PUENTE (DUAL EGG GROUPS): Si necesitas transferir IVs o Naturalezas entre dos grupos huevo distintos, analiza y sugiere especies con GRUPO HUEVO DUAL (ej: Shuckle/Dwebble para Bicho+Mineral, Rhyhorn/Mareep para Monstruo+Campo, Marill/Wooper para Agua 1+Hada, Geodude para Mineral, Slowpoke/Psyduck para Agua 1+Monstruo/Campo).
3. ESPECIES SIN GÉNERO (155 Especies): Pokémon como Beldum, Magnemite, Voltorb, Staryu, Porygon, Rotom no tienen género y OBLIGATORIAMENTE deben criar con DITTO.
4. ESPECIES 100% MACHO (26 Especies): Pokémon como Tauros, Hitmonlee, Braviary, Impidimp al criar con una hembra producen la especie de la madre. Para transmitir la especie Macho, OBLIGATORIAMENTE deben criar con DITTO.
5. ESPECIES 100% HEMBRA (37 Especies): Pokémon como Chansey, Blissey, Tinkatink, Hatenna, Petilil al criar con cualquier macho de su grupo huevo SIEMPRE producen la especie Hembra objetivo.
6. POKÉMON BEBÉ (19 Especies en Grupo No Descubierto): Riolu, Pichu, Togepi, Cleffa, Wynaut, Munchlax NO PUEDEN CRIAR. Deben evolucionarse a su forma adulta antes de colocarse en la pastura.
7. HERENCIA DE FORMAS REGIONALES (Alola, Galar, Hisui, Paldea): Si el progenitor es una forma regional no nativa (ej: Vulpix Alola, Meowth Galar, Zorua Hisui), DEBE EQUIPAR PIEDRA ETERNA para transmitir su forma regional; de lo contrario nacerá la forma estándar.
8. CRIANZA CON INCIENSOS: Snorlax requiere Incienso Lento para Munchlax, Marill requiere Incienso Suave para Azurill, Roselia requiere Incienso Floral para Budew, Sudowoodo requiere Incienso Roca para Bonsly, Mantine requiere Incienso Ola para Mantyke.
9. CRIANZA ASIMÉTRICA: En Salandit y Combee, solo las Hembras (12.5%) pueden evolucionar a Salazzle/Vespiquen. Los Machos no evolucionan.
10. MADRE DETERMINA ESPECIE: La cría nacerá SIEMPRE como la especie base de la MADRE (Hembra ♀). Los movimientos huevo se heredan en la forma base (ej: Eevee hereda Wish/Toxic antes de evolucionar a Umbreon).`;

  const userPrompt = `OBJETIVO DE CRIANZA SOLICITADO:
- Pokémon Objetivo: ${targetData.pokemonName} (#${targetData.dexNumber})
- Forma Base / Pre-evolución Huevo: ${targetBaseData.pokemonName} (#${targetBaseData.dexNumber})
- Grupos Huevo de la Especie: ${targetData.eggGroups.join(', ')}
- Handicap Genético / Ratio Género: ${targetHandicap.genderLabel} (${targetHandicap.genderType})
- IVs Objetivo (31): ${activeIvs}
- Naturaleza Objetivo: ${targetNature}
- Habilidad Objetivo: ${targetAbility}
- Movimientos Huevo Requeridos: ${eggMoves.join(', ') || 'Ninguno'}

INVENTARIO EN PASTURA GLOBAL DEL JUGADOR (EVALUAR Y PRIORIZAR CADA UNO):
${pasturaSummary}

${customQuestion ? `PREGUNTA / INSTRUCCIÓN ESPECÍFICA DEL JUGADOR:\n"${customQuestion}"` : 'Por favor genera un análisis y plan de crianza paso a paso en Markdown evaluando la pastura del usuario, indicando qué Pokémon de la pastura usar como Padres A/B en cada paso, los objetos a equipar (Objetos Recios / Piedra Eterna / Lazo Destino) y recomendaciones de eficiencia.'}`;

  try {
    if (config.provider === 'gemini') {
      const geminiCandidateModels = [
        config.model || 'gemini-1.5-flash',
        'gemini-1.5-flash-latest',
        'gemini-2.0-flash',
        'gemini-1.5-pro',
        'gemini-2.0-flash-exp',
        'gemini-pro'
      ];

      // Deduplicate model candidates
      const uniqueModels = Array.from(new Set(geminiCandidateModels.filter(Boolean)));
      let lastErrorMessage = '';

      for (const modelName of uniqueModels) {
        try {
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

          if (response.ok) {
            const data = await response.json();
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No se recibió respuesta de la IA.';

            return {
              isSuccess: true,
              adviceMarkdown: text,
              rawResponse: text
            };
          }

          const errJson = await response.json().catch(() => ({}));
          lastErrorMessage = errJson.error?.message || `Error de API Gemini HTTP ${response.status} en modelo ${modelName}`;
          console.warn(`Gemini model ${modelName} failed, trying next fallback...`, lastErrorMessage);
        } catch (e: any) {
          lastErrorMessage = e.message || `Error de conexión en modelo ${modelName}`;
        }
      }

      throw new Error(lastErrorMessage || 'No se pudo conectar con los modelos de Gemini. Verifica tu API Key.');
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

export async function generateAiDrivenBreedingPlan(
  targetPokemonName: string,
  targetIvs: Record<string, boolean>,
  targetNature: string,
  targetAbility: string,
  eggMoves: string[],
  pastura: BreederInventoryItem[],
  config: AiConfig
): Promise<{ isSuccess: boolean; aiAnalysis: string; plan?: GeneratedBreedingPlan; error?: string }> {
  const auditRes = await askAiBreedingMaster(
    targetPokemonName,
    targetIvs,
    targetNature,
    targetAbility,
    eggMoves,
    pastura,
    config,
    'Analiza la pastura y genera el plan óptimo de crianza usando razonamiento de IA.'
  );

  if (!auditRes.isSuccess) {
    return {
      isSuccess: false,
      aiAnalysis: '',
      error: auditRes.error || 'No se pudo generar el plan con IA.'
    };
  }

  return {
    isSuccess: true,
    aiAnalysis: auditRes.adviceMarkdown
  };
}
