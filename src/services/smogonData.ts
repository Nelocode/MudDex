import { SmogonBuild } from '../types/pokemon';

export const SMOGON_BUILDS: Record<string, SmogonBuild[]> = {
  // UMBREON
  umbreon: [
    {
      tier: 'Gen 9 SV OU / UU',
      name: 'Pivot Defensivo Mixto (Clásico)',
      nature: 'Calm',
      item: 'Leftovers',
      itemSpanish: 'Restos',
      ability: 'Synchronize',
      evs: { hp: 252, def: 160, spd: 96 },
      targetIvs: { hp: 31, atk: 0, def: 31, spa: 31, spd: 31, spe: 31 },
      moves: [
        ['Wish', 'Deseo'],
        ['Protect', 'Protección'],
        ['Foul Play', 'Juego Sucio'],
        ['Yawn', 'Bostezo', 'Heal Bell', 'Campana Cura']
      ],
      description: 'Umbreon actúa como la muralla defensiva perfecta. Wish pasa salud a sus compañeros de equipo mientras Foul Play castiga atacantes físicos usando el propio stat de ataque del rival (¡por eso 0 IVs en Ataque son cruciales!).',
      teammates: [
        { name: 'Toxapex', id: 747, reason: 'Excelente sinergia defensiva veneno/agua regeneradora.' },
        { name: 'Gholdengo', id: 999, reason: 'Bloquea giros rápidos y hazards, resistente al tipo Hada.' },
        { name: 'Corviknight', id: 823, reason: 'Pivote de acero/volador para cubrir debilidad a Lucha y Bicho.' }
      ]
    },
    {
      tier: 'Gen 9 SV VGC / Dobles',
      name: 'Soporte Físico Defensivo',
      nature: 'Bold',
      item: 'Sitrus Berry',
      itemSpanish: 'Baya Zidra',
      ability: 'Inner Focus',
      evs: { hp: 252, def: 200, spd: 56 },
      targetIvs: { hp: 31, atk: 0, def: 31, spa: 31, spd: 31, spe: 31 },
      moves: [
        ['Foul Play', 'Juego Sucio'],
        ['Snarl', 'Alarido'],
        ['Helping Hand', 'Refuerzo'],
        ['Protect', 'Protección']
      ],
      description: 'Foco Interno lo inmuniza contra la intimidación y retroceso. Snarl reduce el ataque especial de ambos rivales al tiempo que apoya a atacantes aliados con Helping Hand.',
      teammates: [
        { name: 'Flutter Mane', id: 987, reason: 'Atacante especial brutal beneficiado por Refuerzo.' },
        { name: 'Garchomp', id: 445, reason: 'Atacante físico que aprecia el control de mapa y alarido de Umbreon.' }
      ]
    }
  ],

  // EEVEE
  eevee: [
    {
      tier: 'Gen 9 LC / NFE',
      name: 'Adaptabilidad Atacante Físico (Baton Pass / Last Resort)',
      nature: 'Jolly',
      item: 'Eviolite',
      itemSpanish: 'Mineral Evolutivo',
      ability: 'Adaptability',
      evs: { hp: 252, atk: 180, spe: 76 },
      targetIvs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
      moves: [
        ['Last Resort', 'Última Baza'],
        ['Quick Attack', 'Ataque Rápido'],
        ['Baton Pass', 'Relevo'],
        ['Protect', 'Protección']
      ],
      description: 'Con Adaptabilidad y Mineral Evolutivo, Eevee pega increíblemente fuerte con STAB Normal antes de evolucionar a Umbreon o Sylveon.',
      teammates: [
        { name: 'Sylveon', id: 700, reason: 'Evolución especial de soporte y voz cautivadora.' }
      ]
    }
  ],

  // SYLVEON
  sylveon: [
    {
      tier: 'Gen 9 SV OU',
      name: 'Specs Wallbreaker Hada',
      nature: 'Modest',
      item: 'Choice Specs',
      itemSpanish: 'Gafas Elegidas',
      ability: 'Pixilate',
      evs: { hp: 244, spa: 252, spe: 12 },
      targetIvs: { hp: 31, atk: 0, def: 31, spa: 31, spd: 31, spe: 31 },
      moves: [
        ['Hyper Voice', 'Vozarrón'],
        ['Psyshock', 'Psicocarga'],
        ['Shadow Ball', 'Bola Sombra'],
        ['Baton Pass', 'Relevo']
      ],
      description: 'Piel Feérica transforma Vozarrón en un ataque Hada devastador que atraviesa sustitutos.',
      teammates: [
        { name: 'Dragonite', id: 149, reason: 'Cubre la debilidad al Veneno y Acero.' },
        { name: 'Scizor', id: 212, reason: 'Forma un core de acero/hada pivote excepcional.' }
      ]
    }
  ],

  // GENGAR
  gengar: [
    {
      tier: 'Gen 9 SV NatDex OU',
      name: 'Nasty Plot Special Sweeper',
      nature: 'Timid',
      item: 'Life Orb',
      itemSpanish: 'Vidasfera',
      ability: 'Cursed Body',
      evs: { spa: 252, spd: 4, spe: 252 },
      targetIvs: { hp: 31, atk: 0, def: 31, spa: 31, spd: 31, spe: 31 },
      moves: [
        ['Shadow Ball', 'Bola Sombra'],
        ['Sludge Wave', 'Onda Tóxica'],
        ['Focus Blast', 'Onda Certera'],
        ['Nasty Plot', 'Maquinación']
      ],
      description: 'Velocidad y Ataque Especial máximos con 0 en Ataque Físico para evitar daño extremo de Foul Play o Confusión.',
      teammates: [
        { name: 'Dragapult', id: 887, reason: 'Crea un core de fantasmas híper ofensivo.' },
        { name: 'Tinkaton', id: 959, reason: 'Aporta trampa rocas y resistencia psíquica/siniestra.' }
      ]
    }
  ],

  // DRAGONITE
  dragonite: [
    {
      tier: 'Gen 9 SV OU',
      name: 'Dragon Dance Terastallize Sweeper',
      nature: 'Adamant',
      item: 'Heavy-Duty Boots',
      itemSpanish: 'Botas Gruesas',
      ability: 'Multiscale',
      evs: { hp: 144, atk: 252, spe: 112 },
      targetIvs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
      moves: [
        ['Dragon Dance', 'Danza Dragón'],
        ['Extreme Speed', 'Velocidad Extrema'],
        ['Earthquake', 'Terremoto'],
        ['Roost', 'Respiro']
      ],
      description: 'Multiescala reduce a la mitad el daño con PS llenos. Combina Danza Dragón con Velocidad Extrema prioridad +2.',
      teammates: [
        { name: 'Gholdengo', id: 999, reason: 'Bloquea la remoción de hazards del rival.' },
        { name: 'Iron Valiant', id: 988, reason: 'Presiona murallas físicas que resisten a Dragonite.' }
      ]
    }
  ],

  // GHOLDENGO
  gholdengo: [
    {
      tier: 'Gen 9 SV OU',
      name: 'Make It Rain Choice Scarf',
      nature: 'Timid',
      item: 'Choice Scarf',
      itemSpanish: 'Pañuelo Elegido',
      ability: 'Good as Gold',
      evs: { spa: 252, spd: 4, spe: 252 },
      targetIvs: { hp: 31, atk: 0, def: 31, spa: 31, spd: 31, spe: 31 },
      moves: [
        ['Make It Rain', 'Fiebre Dorada'],
        ['Shadow Ball', 'Bola Sombra'],
        ['Focus Blast', 'Onda Certera'],
        ['Trick', 'Truco']
      ],
      description: 'Cuerpo Puro inmuniza a Gholdengo contra todos los movimientos de estado rivales. Fiebre Dorada es su ataque insignia devastador.',
      teammates: [
        { name: 'Great Tusk', id: 984, reason: 'Limpia trampa rocas e inmuniza contra tierra.' },
        { name: 'Kingambit', id: 983, reason: 'Excelente compañero de tipo Acero/Siniestro para el late-game.' }
      ]
    }
  ],

  // MIMIKYU
  mimikyu: [
    {
      tier: 'Gen 9 SV OU / VGC',
      name: 'Swords Dance Disguise Sweeper',
      nature: 'Jolly',
      item: 'Life Orb',
      itemSpanish: 'Vidasfera',
      ability: 'Disguise',
      evs: { atk: 252, def: 4, spe: 252 },
      targetIvs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
      moves: [
        ['Shadow Sneak', 'Sombra Furtiva'],
        ['Play Rough', 'Juego Brusco'],
        ['Swords Dance', 'Danza Espada'],
        ['Shadow Claw', 'Garra Umbría']
      ],
      description: 'Disfraz absorbe el primer golpe garantizando al menos una Danza Espada gratuita. Shadow Sneak tiene prioridad +1 para rematar rivales debilitados. Con Vidasfera su daño es devastador tras +2.',
      teammates: [
        { name: 'Gholdengo', id: 999, reason: 'Bloquea hazards para que Mimikyu pueda entrar y subir.' },
        { name: 'Landorus', id: 645, reason: 'Cubre debilidades a Acero y Veneno de Mimikyu.' }
      ]
    }
  ],

  // GARCHOMP
  garchomp: [
    {
      tier: 'Gen 9 SV OU',
      name: 'Swords Dance / Rocky Helmet Physical Sweeper',
      nature: 'Jolly',
      item: 'Rocky Helmet',
      itemSpanish: 'Casco Férreo',
      ability: 'Rough Skin',
      evs: { atk: 252, def: 4, spe: 252 },
      targetIvs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
      moves: [
        ['Earthquake', 'Terremoto'],
        ['Dragon Rush', 'Embestida Dragón'],
        ['Swords Dance', 'Danza Espada'],
        ['Stone Edge', 'Roca Afilada']
      ],
      description: 'Piel Tosca + Casco Férreo castigan brutalmente a atacantes de contacto. Danza Espada + Terremoto es la combinación más poderosa en singles. Velocidad base 102 le permite superar a mucha amenazas.',
      teammates: [
        { name: 'Gholdengo', id: 999, reason: 'Bloquea la remoción de hazards para que Garchomp limpie.' },
        { name: 'Corviknight', id: 823, reason: 'Pivote defensivo que cubre debilidades a Hielo y Dragón.' }
      ]
    },
    {
      tier: 'Gen 9 VGC 2026',
      name: 'Choice Scarf VGC Sweeper',
      nature: 'Jolly',
      item: 'Choice Scarf',
      itemSpanish: 'Pañuelo Elegido',
      ability: 'Rough Skin',
      evs: { atk: 252, hp: 4, spe: 252 },
      targetIvs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
      moves: [
        ['Earthquake', 'Terremoto'],
        ['Dragon Claw', 'Zarpa Dragón'],
        ['Rock Slide', 'Avalancha'],
        ['Stomping Tantrum', 'Rabieta Pisotón']
      ],
      description: 'Con Pañuelo Elegido supera a los Pokémon más rápidos del meta VGC. Rock Slide en dobles tiene un 30% de flinch compartido entre ambos rivales, muy valioso en VGC.',
      teammates: [
        { name: 'Flutter Mane', id: 987, reason: 'Atacante especial que cubre los tipos resistentes a Tierra/Dragón.' }
      ]
    }
  ],

  // TOXAPEX
  toxapex: [
    {
      tier: 'Gen 9 SV OU',
      name: 'Regenerator Defensive Wall',
      nature: 'Bold',
      item: 'Heavy-Duty Boots',
      itemSpanish: 'Botas Gruesas',
      ability: 'Regenerator',
      evs: { hp: 252, def: 200, spd: 56 },
      targetIvs: { hp: 31, atk: 0, def: 31, spa: 31, spd: 31, spe: 31 },
      moves: [
        ['Scald', 'Escaldar'],
        ['Recover', 'Recuperación'],
        ['Knock Off', 'Golpe Bajo'],
        ['Haze', 'Neblina']
      ],
      description: 'Regenerador le recupera 1/3 de PS al cambiar. Muralla física prácticamente irrompible. Neblina anula las subidas de stats del rival. El mainstay defensivo de Gen 9 OU.',
      teammates: [
        { name: 'Corviknight', id: 823, reason: 'Core defensivo acero/veneno/agua clásico de Gen 9.' },
        { name: 'Dragonite', id: 149, reason: 'Sweeper físico que aprovecha el soporte defensivo de Toxapex.' }
      ]
    }
  ],

  // CORVIKNIGHT
  corviknight: [
    {
      tier: 'Gen 9 SV OU',
      name: 'Iron Defense + Body Press Physical Wall',
      nature: 'Impish',
      item: 'Leftovers',
      itemSpanish: 'Restos',
      ability: 'Pressure',
      evs: { hp: 252, def: 252, spd: 4 },
      targetIvs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
      moves: [
        ['Body Press', 'Golpe Corporal'],
        ['Roost', 'Respiro'],
        ['Iron Defense', 'Defensa Acerada'],
        ['Defog', 'Niebla Densa']
      ],
      description: 'Defensa Acerada + Golpe Corporal convierte a Corviknight en una muralla que también golpea con su propia DEF. Niebla Densa limpia las trampas del campo. Presión agota PP rivales.',
      teammates: [
        { name: 'Toxapex', id: 747, reason: 'Forma el core defensivo Water/Poison/Steel icónico.' },
        { name: 'Gholdengo', id: 999, reason: 'Bloquea Defog del rival y complementa typing acero.' }
      ]
    }
  ],

  // IRON VALIANT
  'iron-valiant': [
    {
      tier: 'Gen 9 SV OU (Paradox)',
      name: 'Quark Drive Mixed Attacker',
      nature: 'Jolly',
      item: 'Booster Energy',
      itemSpanish: 'Energía Potenciadora',
      ability: 'Quark Drive',
      evs: { atk: 252, hp: 4, spe: 252 },
      targetIvs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
      moves: [
        ['Close Combat', 'Combate Cerrado'],
        ['Knock Off', 'Golpe Bajo'],
        ['Spirit Break', 'Rotura Espiritual'],
        ['Swords Dance', 'Danza Espada']
      ],
      description: 'Motor Quark con Energía Potenciadora eleva su stat más alto (velocidad o ataque). Atacante Hada/Lucha mixto que presiona simultáneamente murallas físicas y especiales. Uno de los mejores wallbreakers de Gen 9.',
      teammates: [
        { name: 'Gholdengo', id: 999, reason: 'Bloquea hazards para que Iron Valiant pueda entrar libremente.' },
        { name: 'Great Tusk', id: 984, reason: 'Limpia hazards y crea oportunidades de entrada para Iron Valiant.' }
      ]
    }
  ],

  // KINGAMBIT
  kingambit: [
    {
      tier: 'Gen 9 SV OU',
      name: 'Supreme Overlord Late-Game Cleaner',
      nature: 'Adamant',
      item: 'Sitrus Berry',
      itemSpanish: 'Baya Zidra',
      ability: 'Supreme Overlord',
      evs: { hp: 100, atk: 252, spe: 156 },
      targetIvs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
      moves: [
        ['Kowtow Cleave', 'Corte Genuflexo'],
        ['Iron Head', 'Cabeza de Hierro'],
        ['Sucker Punch', 'Ataque Furtivo'],
        ['Swords Dance', 'Danza Espada']
      ],
      description: 'Gran Señor Supremo se potencia un 10% de ATK por cada aliado derrotado. En el late game con +30% de ATK extra y Danza Espada puede ser prácticamente imparable. Corte Genuflexo es un acero que siempre acierta.',
      teammates: [
        { name: 'Flutter Mane', id: 987, reason: 'Sus KOs potencian a Kingambit vía Gran Señor Supremo.' },
        { name: 'Gholdengo', id: 999, reason: 'Los KOs de Gholdengo también potencian a Kingambit.' }
      ]
    }
  ],

  // CLEFABLE
  clefable: [
    {
      tier: 'Gen 9 SV OU',
      name: 'Magic Guard Stealth Rock + Moonblast',
      nature: 'Bold',
      item: 'Life Orb',
      itemSpanish: 'Vidasfera',
      ability: 'Magic Guard',
      evs: { hp: 252, def: 172, spa: 84 },
      targetIvs: { hp: 31, atk: 0, def: 31, spa: 31, spd: 31, spe: 31 },
      moves: [
        ['Moonblast', 'Ráfaga Lunar'],
        ['Stealth Rock', 'Trampa Rocas'],
        ['Soft-Boiled', 'Huevo Misterio'],
        ['Flamethrower', 'Lanzallamas']
      ],
      description: 'Guardia Mágica anula el daño de Vidasfera y del campo (quemadura, arena, etc). Pone Trampa Rocas, ataca con STAB Hada y tiene recuperación sostenida con Huevo Misterio.',
      teammates: [
        { name: 'Corviknight', id: 823, reason: 'Core de Acero/Hada para cubrir Veneno y Acero.' },
        { name: 'Dragapult', id: 887, reason: 'Clefable cubre tipo Dragón que amenaza a Dragapult.' }
      ]
    }
  ],

  // FLUTTER MANE
  'flutter-mane': [
    {
      tier: 'Gen 9 SV OU (Paradox Restringido)',
      name: 'Choice Specs Special Sweeper',
      nature: 'Timid',
      item: 'Choice Specs',
      itemSpanish: 'Gafas Elegidas',
      ability: 'Protosynthesis',
      evs: { hp: 4, spa: 252, spe: 252 },
      targetIvs: { hp: 31, atk: 0, def: 31, spa: 31, spd: 31, spe: 31 },
      moves: [
        ['Moonblast', 'Ráfaga Lunar'],
        ['Shadow Ball', 'Bola Sombra'],
        ['Psyshock', 'Psicocarga'],
        ['Mystical Fire', 'Fuego Místico']
      ],
      description: 'Protosíntesis en Sol eleva el SPA. Con Gafas Elegidas, Ráfaga Lunar con STAB Hada causa daño masivo. Es uno de los atacantes especiales más poderosos de toda la Gen 9. Reservado para equipos con Niebla.',
      teammates: [
        { name: 'Torkoal', id: 324, reason: 'Activa Sol para Protosíntesis y debilita aceros.' },
        { name: 'Kingambit', id: 983, reason: 'Limpiador de fin de juego que se potencia con los KOs de Flutter Mane.' }
      ]
    }
  ],

  // GREAT TUSK
  'great-tusk': [
    {
      tier: 'Gen 9 SV OU (Paradox)',
      name: 'Rapid Spin + Hazard Control Lead',
      nature: 'Jolly',
      item: 'Heavy-Duty Boots',
      itemSpanish: 'Botas Gruesas',
      ability: 'Protosynthesis',
      evs: { hp: 248, atk: 84, spe: 176 },
      targetIvs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
      moves: [
        ['Headlong Rush', 'Avalancha Temeraria'],
        ['Close Combat', 'Combate Cerrado'],
        ['Ice Spinner', 'Giro Helado'],
        ['Rapid Spin', 'Giro Rápido']
      ],
      description: 'El mejor removedor de hazards de Gen 9. Giro Rápido elimina trampas y también hace daño. Ice Spinner destruye el campo del rival. Headlong Rush es su STAB Tierra devastador.',
      teammates: [
        { name: 'Gholdengo', id: 999, reason: 'Evita que el rival recupere sus hazards bloqueando Giro Rápido rival.' },
        { name: 'Kingambit', id: 983, reason: 'Kingambit se beneficia masivamente del soporte de Great Tusk.' }
      ]
    }
  ],

  // DRAGAPULT
  dragapult: [
    {
      tier: 'Gen 9 SV OU',
      name: 'Choice Specs Ghost/Dragon Special Sweeper',
      nature: 'Timid',
      item: 'Choice Specs',
      itemSpanish: 'Gafas Elegidas',
      ability: 'Cursed Body',
      evs: { spa: 252, hp: 4, spe: 252 },
      targetIvs: { hp: 31, atk: 0, def: 31, spa: 31, spd: 31, spe: 31 },
      moves: [
        ['Draco Meteor', 'Meteoro Dragón'],
        ['Shadow Ball', 'Bola Sombra'],
        ['U-turn', 'Ida y Vuelta'],
        ['Flamethrower', 'Lanzallamas']
      ],
      description: 'La velocidad más alta de todos los no-Paradox en Gen 9 (base 142). Meteoro Dragón con Gafas Elegidas es prácticamente irreversible. Cuerpo Maldito puede incapacitar el movimiento del oponente.',
      teammates: [
        { name: 'Toxapex', id: 747, reason: 'Soporte defensivo para cubrir las debilidades de Dragapult.' },
        { name: 'Kingambit', id: 983, reason: 'Kingambit remata lo que Dragapult debilita en mid-game.' }
      ]
    }
  ]
};

export function getSmogonBuilds(pokemonName: string): SmogonBuild[] {
  const key = pokemonName.toLowerCase();
  if (SMOGON_BUILDS[key]) {
    return SMOGON_BUILDS[key];
  }

  // Generar un build por defecto inteligente según stats si no está en la base de datos previa
  // Compañeros variados para que no se repitan siempre los mismos para distintos Pokémon
  const TEAMMATE_POOL = [
    { name: 'Gholdengo', id: 999, reason: 'Excelente pivote y bloqueo de hazards.' },
    { name: 'Toxapex', id: 747, reason: 'Soporte defensivo y regeneración.' },
    { name: 'Corviknight', id: 823, reason: 'Pivote de acero/volador para cubrir debilidades.' },
    { name: 'Great Tusk', id: 984, reason: 'Limpia hazards y aporta presión física.' },
    { name: 'Kingambit', id: 983, reason: 'Limpiador de late-game de tipo Acero/Siniestro.' },
    { name: 'Dragapult', id: 887, reason: 'Sweeper de alta velocidad con cobertura de Fantasma/Dragón.' },
    { name: 'Flutter Mane', id: 987, reason: 'Atacante especial devastador.' },
    { name: 'Garchomp', id: 445, reason: 'Atacante físico con STAB Tierra/Dragón.' },
    { name: 'Clefable', id: 35, reason: 'Support versátil con Guardia Mágica.' },
    { name: 'Landorus-Therian', id: 645, reason: 'Intimidación y presión ofensiva de tierra.' },
    { name: 'Scizor', id: 212, reason: 'Pivote de acero que resiste ataques físicos.' },
    { name: 'Tinkaton', id: 959, reason: 'Aporta trampa rocas y resistencia Psíquica/Siniestra.' },
    { name: 'Dragonite', id: 149, reason: 'Sweeper físico con Multiescala.' },
    { name: 'Rotom-Wash', id: 479, reason: 'Pivote de agua/eléctrico con Levitación.' }
  ];

  // Selecciona 2 compañeros distintos de forma determinista según el nombre del Pokémon
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
  }
  const idx1 = hash % TEAMMATE_POOL.length;
  const idx2 = (hash * 7 + 13) % TEAMMATE_POOL.length;
  const friends = [
    TEAMMATE_POOL[idx1],
    TEAMMATE_POOL[idx2 !== idx1 ? idx2 : (idx2 + 1) % TEAMMATE_POOL.length]
  ];

  return [
    {
      tier: 'Competitivo Estándar Gen 9',
      name: 'Configuración Balanceada Competitiva',
      nature: 'Jolly',
      item: 'Leftovers',
      itemSpanish: 'Restos',
      ability: 'Standard',
      evs: { hp: 4, atk: 252, spe: 252 },
      targetIvs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
      moves: [
        ['STAB Move 1', 'Movimiento STAB Principal'],
        ['Coverage Move', 'Cobertura Elemental'],
        ['Utility / Status', 'Utilidad / Estado'],
        ['Protect / Substitute', 'Protección / Sustituto']
      ],
      description: 'Build recomendado para maximizar el rendimiento competitivo en combates de liga.',
      teammates: friends
    }
  ];
}
