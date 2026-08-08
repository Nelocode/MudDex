import { EvSpot } from '../types/diosesmon';

export const COBBLEMON_EV_SPOTS: EvSpot[] = [
  {
    stat: 'attack',
    statNameEs: 'Ataque Físico (ATK)',
    icon: '⚔️',
    color: 'from-rose-500/20 border-rose-500/40 text-rose-400',
    powerItemName: 'Brazal Recio (+8 ATK por victoria)',
    bestTargets: [
      { pokemonId: 'arcanine', pokemonName: 'Arcanine', evYield: 2, biome: 'Badlands / Desierto', spawnTime: 'Día' },
      { pokemonId: 'machamp', pokemonName: 'Machamp', evYield: 3, biome: 'Picos Escarpados (Jagged Peaks)', spawnTime: 'Día' },
      { pokemonId: 'gyarados', pokemonName: 'Gyarados', evYield: 2, biome: 'Océano / Ríos', spawnTime: 'Lluvia' }
    ]
  },
  {
    stat: 'specialAttack',
    statNameEs: 'Ataque Especial (SPA)',
    icon: '🔮',
    color: 'from-purple-500/20 border-purple-500/40 text-purple-400',
    powerItemName: 'Lente Recia (+8 SPA por victoria)',
    bestTargets: [
      { pokemonId: 'alakazam', pokemonName: 'Alakazam', evYield: 3, biome: 'Montañas / Stony Peaks', spawnTime: 'Noche' },
      { pokemonId: 'gengar', pokemonName: 'Gengar', evYield: 3, biome: 'Bosque Oscuro (Dark Forest)', spawnTime: 'Noche' },
      { pokemonId: 'gardevoir', pokemonName: 'Gardevoir', evYield: 3, biome: 'Prados (Meadow)', spawnTime: 'Día' }
    ]
  },
  {
    stat: 'speed',
    statNameEs: 'Velocidad (VEL)',
    icon: '⚡',
    color: 'from-amber-500/20 border-amber-500/40 text-amber-400',
    powerItemName: 'Franja Recia (+8 VEL por victoria)',
    bestTargets: [
      { pokemonId: 'raichu', pokemonName: 'Raichu', evYield: 3, biome: 'Bosques (Forest)', spawnTime: 'Día' },
      { pokemonId: 'pidgeot', pokemonName: 'Pidgeot', evYield: 3, biome: 'Plains / Llanuras', spawnTime: 'Día' },
      { pokemonId: 'dragapult', pokemonName: 'Dragapult', evYield: 3, biome: 'Deep Dark / Cueva', spawnTime: 'Noche' }
    ]
  },
  {
    stat: 'hp',
    statNameEs: 'Salud / Puntos de Vida (HP)',
    icon: '❤️',
    color: 'from-emerald-500/20 border-emerald-500/40 text-emerald-400',
    powerItemName: 'Pesa Recia (+8 HP por victoria)',
    bestTargets: [
      { pokemonId: 'snorlax', pokemonName: 'Snorlax', evYield: 2, biome: 'Plains (Con Bloques de Heno)', spawnTime: 'Día' },
      { pokemonId: 'lapras', pokemonName: 'Lapras', evYield: 2, biome: 'Océano Cálido (Warm Ocean)', spawnTime: 'Día/Noche' },
      { pokemonId: 'blastoise', pokemonName: 'Blastoise', evYield: 3, biome: 'Océano Profundo', spawnTime: 'Día/Noche' }
    ]
  },
  {
    stat: 'defense',
    statNameEs: 'Defensa Física (DEF)',
    icon: '🛡️',
    color: 'from-sky-500/20 border-sky-500/40 text-sky-400',
    powerItemName: 'Cinto Recio (+8 DEF por victoria)',
    bestTargets: [
      { pokemonId: 'tinkaton', pokemonName: 'Tinkaton', evYield: 2, biome: 'Stony Peaks', spawnTime: 'Día' },
      { pokemonId: 'blastoise', pokemonName: 'Blastoise', evYield: 3, biome: 'Océano', spawnTime: 'Día' },
      { pokemonId: 'tyranitar', pokemonName: 'Tyranitar', evYield: 3, biome: 'Badlands', spawnTime: 'Cualquiera' }
    ]
  },
  {
    stat: 'specialDefense',
    statNameEs: 'Defensa Especial (SPD)',
    icon: '✨',
    color: 'from-indigo-500/20 border-indigo-500/40 text-indigo-400',
    powerItemName: 'Banda Recia (+8 SPD por victoria)',
    bestTargets: [
      { pokemonId: 'sylveon', pokemonName: 'Sylveon', evYield: 2, biome: 'Meadow', spawnTime: 'Día' },
      { pokemonId: 'gardevoir', pokemonName: 'Gardevoir', evYield: 3, biome: 'Meadow', spawnTime: 'Día' }
    ]
  }
];
