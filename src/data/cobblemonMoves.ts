import { MoveInfo } from '../types/diosesmon';

export const COBBLEMON_MOVES: MoveInfo[] = [
  {
    id: 'false_swipe',
    name: 'Falsotorta (False Swipe)',
    type: 'normal',
    category: 'physical',
    power: 40,
    accuracy: 100,
    pp: 40,
    effect: 'Movimiento #1 de Captura: Deja al Pokémon objetivo con al menos 1 PS (nunca debilita).',
    isTm: true,
    tmItemName: 'MT54 - Falsotorta',
    learnedBy: ['Scyther', 'Scizor', 'Garchomp', 'Ceruledge', 'Breloom', 'Decidueye', 'Gallade']
  },
  {
    id: 'spore',
    name: 'Espora (Spore)',
    type: 'grass',
    category: 'status',
    power: null,
    accuracy: 100,
    pp: 15,
    effect: 'Movimiento #1 de Estado: Duerme al objetivo con 100% de precisión (multiplicador 2.5x de captura).',
    isTm: false,
    learnedBy: ['Breloom', 'Amoonguss', 'Parasect', 'Shiinotic']
  },
  {
    id: 'thunder_wave',
    name: 'Onda Trueno (Thunder Wave)',
    type: 'electric',
    category: 'status',
    power: null,
    accuracy: 90,
    pp: 20,
    effect: 'Paraliza al objetivo inmediatamente (multiplicador 1.5x de captura).',
    isTm: true,
    tmItemName: 'MT73 - Onda Trueno',
    learnedBy: ['Pikachu', 'Raichu', 'Jolteon', 'Alakazam', 'Gardevoir', 'Dragonite', 'Gengar']
  },
  {
    id: 'earthquake',
    name: 'Terremoto (Earthquake)',
    type: 'ground',
    category: 'physical',
    power: 100,
    accuracy: 100,
    pp: 10,
    effect: 'Causa daño masivo físico a todos los Pokémon en batalla.',
    isTm: true,
    tmItemName: 'MT26 - Terremoto',
    learnedBy: ['Garchomp', 'Tyranitar', 'Swampert', 'Snorlax', 'Charizard', 'Lucario']
  },
  {
    id: 'swords_dance',
    name: 'Danza Espada (Swords Dance)',
    type: 'normal',
    category: 'status',
    power: null,
    accuracy: null,
    pp: 20,
    effect: 'Aumenta el Ataque Físico del usuario en 2 niveles (+100% Atk).',
    isTm: true,
    tmItemName: 'MT75 - Danza Espada',
    learnedBy: ['Scizor', 'Garchomp', 'Ceruledge', 'Blaziken', 'Lucario', 'Dragapult']
  },
  {
    id: 'draco_meteor',
    name: 'Cometa Draco (Draco Meteor)',
    type: 'dragon',
    category: 'special',
    power: 130,
    accuracy: 90,
    pp: 5,
    effect: 'Ataque especial devastador de tipo Dragón. Reduce el Atk Especial en 2 niveles.',
    isTm: false,
    learnedBy: ['Dragonite', 'Garchomp', 'Rayquaza', 'Dragapult', 'Giratina', 'Koraidon', 'Miraidon']
  }
];
