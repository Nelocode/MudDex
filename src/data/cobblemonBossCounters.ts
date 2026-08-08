import { BossCounter } from '../types/diosesmon';

export const COBBLEMON_BOSS_COUNTERS: BossCounter[] = [
  {
    id: 'fire_gym',
    bossName: 'Gimnasio de Fuego / Boss Volcánico',
    bossType: 'fire',
    icon: '🔥',
    recommendedTeam: [
      { pokemonId: 'swampert', role: 'Tanque Físico & Terremoto', keyMove: 'Terremoto / Cascada', heldItem: 'Restos' },
      { pokemonId: 'gyarados', role: 'Sweeper Físico', keyMove: 'Danza Dragón + Cascada', heldItem: 'Vidaesfera' },
      { pokemonId: 'garchomp', role: 'Atacante Mach', keyMove: 'Terremoto + Roca Afilada', heldItem: 'Cinta Elegida' }
    ],
    strategyTips: [
      'Inicia con Danza Dragón con Gyarados o Terremoto STAB de Swampert.',
      'Usa Agua Mística o Restos para sostener el combate.',
      'Lleva Pokéballs de tipo Malla (Net Ball) o Buceo (Dive Ball) para captura inmediata.'
    ]
  },
  {
    id: 'dragon_gym',
    bossName: 'Gimnasio Dragón / Raid Legendario',
    bossType: 'dragon',
    icon: '🐉',
    recommendedTeam: [
      { pokemonId: 'tinkaton', role: 'Inmune a Dragón (Hada/Acero)', keyMove: 'Martillazo / Carantoña', heldItem: 'Restos' },
      { pokemonId: 'gardevoir', role: 'Especialista Hada (STAB)', keyMove: 'Fuerza Lunar', heldItem: 'Gafas Elegidas' },
      { pokemonId: 'dragapult', role: 'Relevo Veloz', keyMove: 'Cometa Draco / Bola Sombra', heldItem: 'Pañuelo Elegido' }
    ],
    strategyTips: [
      'Tinkaton es completamente inmune al tipo Dragón y al tipo Veneno.',
      'Aprovecha Fuerza Lunar de Gardevoir para causar daño supereficaz 2x.',
      'Usa Peso Ball o Ultra Ball si el Boss es de tamaño grande.'
    ]
  },
  {
    id: 'ghost_boss',
    bossName: 'Boss Alfa Fantasma / Deep Dark Raid',
    bossType: 'ghost',
    icon: '👻',
    recommendedTeam: [
      { pokemonId: 'umbreon', role: 'Pared Defensiva Siniestra', keyMove: 'Juego Sucio / Deseo', heldItem: 'Restos' },
      { pokemonId: 'tyranitar', role: 'Invocador de Arena (Sand Stream)', keyMove: 'Triturar / Roca Afilada', heldItem: 'Chaleco Asalto' },
      { pokemonId: 'ceruledge', role: 'Atacante Fuego/Fantasma', keyMove: 'Espada Lamento', heldItem: 'Vidaesfera' }
    ],
    strategyTips: [
      'Umbreon resiste todos los ataques de tipo Fantasma y Psíquico.',
      'Aplica Ocaso Ball (Dusk Ball) ya que el combate ocurrirá de noche o en cuevas (3.5x multiplicador).'
    ]
  }
];
