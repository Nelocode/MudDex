import { HeldItemInfo } from '../types/diosesmon';

export const COBBLEMON_HELD_ITEMS: HeldItemInfo[] = [
  {
    id: 'life_orb',
    name: 'Life Orb (Vidaesfera)',
    category: 'competitive',
    icon: '🔮',
    description: 'Incremente la potencia de todos los ataques del portador en un 30%, pero pierde un 10% de su PS máximo en cada ataque directo.',
    battleEffect: '+30% de daño en todos los ataques directos (-10% PS por turno atacado).',
    howToObtain: 'Drop raro de Absol (10%), Darkrai (100%), Ceruledge (10%), Gengar (8%) o Cobre/Cueva.'
  },
  {
    id: 'leftovers',
    name: 'Leftovers (Restos)',
    category: 'competitive',
    icon: '🍎',
    description: 'Restaura una fracción de la salud del Pokémon en cada turno de batalla.',
    battleEffect: 'Recupera 1/16 del PS máximo al final de cada turno.',
    howToObtain: 'Drop de Snorlax (15%), Munchlax, Swalot o Garbodor.'
  },
  {
    id: 'choice_specs',
    name: 'Choice Specs (Gafas Elegidas)',
    category: 'competitive',
    icon: '👓',
    description: 'Aumenta enormemente el Ataque Especial, pero limita al Pokémon a usar solo el primer movimiento seleccionado.',
    battleEffect: '+50% de Ataque Especial (Bloquea en 1 solo movimiento).',
    howToObtain: 'Drop de Alakazam (10%), Gengar (10%), Gardevoir (10%) o Mewtwo (100%).'
  },
  {
    id: 'choice_band',
    name: 'Choice Band (Cinta Elegida)',
    category: 'competitive',
    icon: '🎗️',
    description: 'Aumenta el Ataque Físico, pero limita al usuario al primer movimiento seleccionado.',
    battleEffect: '+50% de Ataque Físico (Bloquea en 1 movimiento).',
    howToObtain: 'Drop de Machamp (12%), Slaking, Hariyama o Tyranitar.'
  },
  {
    id: 'choice_scarf',
    name: 'Choice Scarf (Pañuelo Elegido)',
    category: 'competitive',
    icon: '🧣',
    description: 'Aumenta la Velocidad del usuario en un 50%, pero limita al primer movimiento seleccionado.',
    battleEffect: '+50% de Velocidad (Bloquea en 1 movimiento).',
    howToObtain: 'Drop de Dragapult (12%), Ninjask, Weavile.'
  },
  {
    id: 'focus_sash',
    name: 'Focus Sash (Banda Focus)',
    category: 'competitive',
    icon: '🎗️',
    description: 'Evita que el usuario caiga debilitado de 1 solo golpe cuando tiene la salud al 100%, dejándolo con 1 PS.',
    battleEffect: 'Sobrevive con 1 PS a cualquier ataque fulminante si tenía 100% PS.',
    howToObtain: 'Drop de Lucario (15%), Shedinja (50%), Alakazam.'
  },
  {
    id: 'sitrus_berry',
    name: 'Baya Zidra (Sitrus Berry)',
    category: 'berry',
    icon: '🫐',
    description: 'Baya curativa de uso automático en combate cuando la salud del portador cae por debajo del 50%.',
    battleEffect: 'Restaura instantáneamente un 25% del PS máximo.',
    howToObtain: 'Cultivo de arbustos de Bayas Zidra en Minecraft.'
  },
  {
    id: 'lum_berry',
    name: 'Baya Caqui / Baya Lum',
    category: 'berry',
    icon: '🍇',
    description: 'Cura automáticamente cualquier estado alterado (Sueño, Parálisis, Quemadura, Veneno, Congelación).',
    battleEffect: 'Cura cualquier estado alterado en el turno que ocurre.',
    howToObtain: 'Cultivo de arbustos de Bayas Lum en tierra fertilizada.'
  }
];
