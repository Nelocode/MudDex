import { CompetitiveTierItem } from '../types/diosesmon';

export const COBBLEMON_TIER_LIST: CompetitiveTierItem[] = [
  {
    pokemonId: 'mewtwo',
    pokemonName: 'Mewtwo',
    tier: 'S+',
    role: 'Special Sweeper',
    types: ['psychic'],
    recommendedItem: 'Gafas Elegidas (Choice Specs) / Life Orb',
    recommendedNature: 'Miedosa (Timid: +Vel, -Atk)',
    keyMoves: ['Onda Mental', 'Rayo Hielo', 'Llamarada', 'Esfera Aural'],
    description: 'Atacante Especial dominante con Velocidad base 130 y Atk Esp 154. Capaz de destruir equipos enteros.'
  },
  {
    pokemonId: 'garchomp',
    pokemonName: 'Garchomp',
    tier: 'S+',
    role: 'Physical Sweeper',
    types: ['dragon', 'ground'],
    recommendedItem: 'Cinta Elegida (Choice Band) / Casco Dentado',
    recommendedNature: 'Alegre (Jolly: +Vel, -SpA)',
    keyMoves: ['Terremoto', 'Enfado', 'Roca Afilada', 'Danza Espada'],
    description: 'Pseudo-legendario definitivo con 102 de velocidad y STAB Terremoto devastador.'
  },
  {
    pokemonId: 'dragapult',
    pokemonName: 'Dragapult',
    tier: 'S',
    role: 'Lead Hazard',
    types: ['dragon', 'ghost'],
    recommendedItem: 'Pañuelo Elegido (Choice Scarf) / Banda Focus',
    recommendedNature: 'Miedosa (Timid: +Vel, -Atk)',
    keyMoves: ['Cometa Draco', 'Bola Sombra', 'Ida y Vuelta', 'Fuego Fatuo'],
    description: 'El Pokémon no legendario más veloz del servidor (Velocidad base 142). Excelente pivote.'
  },
  {
    pokemonId: 'snorlax',
    pokemonName: 'Snorlax',
    tier: 'S',
    role: 'Special Wall',
    types: ['normal'],
    recommendedItem: 'Restos (Leftovers) / Chaleco Asalto',
    recommendedNature: 'Cauta (Careful: +SpD, -SpA)',
    keyMoves: ['Tambor', 'Retribución', 'Terremoto', 'Descanso'],
    description: 'Tanque defensivo especial con 160 de HP base y habilidad Sebo para reducir Fuego y Hielo.'
  },
  {
    pokemonId: 'ceruledge',
    pokemonName: 'Ceruledge',
    tier: 'A',
    role: 'Physical Sweeper',
    types: ['fire', 'ghost'],
    recommendedItem: 'Vidaesfera (Life Orb)',
    recommendedNature: 'Firme (Adamant: +Atk, -SpA)',
    keyMoves: ['Espada Lamento', 'Sombra Vil', 'Danza Espada', 'Abocajarro'],
    description: 'Excelente atacante físico de Fuego/Fantasma que se cura vida con su movimiento firma Espada Lamento.'
  },
  {
    pokemonId: 'tinkaton',
    pokemonName: 'Tinkaton',
    tier: 'A',
    role: 'Support',
    types: ['fairy', 'steel'],
    recommendedItem: 'Botas Gruesas (Heavy-Duty Boots)',
    recommendedNature: 'Agitada (Impish: +Def, -SpA)',
    keyMoves: ['Martillo Gigante', 'Trampa Rocas', 'Onda Trueno', 'Desarme'],
    description: 'Combinación defensiva estelar Acero/Hada con 9 inmunidades/resistencias clave.'
  }
];
