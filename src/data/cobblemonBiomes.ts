import { MinecraftBiome } from '../types/diosesmon';

export const MINECRAFT_BIOMES: MinecraftBiome[] = [
  {
    id: 'jungle',
    name: 'Jungla / Sparse Jungle',
    dimension: 'Overworld',
    yRange: 'Y = 62 a 120',
    temperature: 'Cálido (Tropical)',
    icon: '🌴',
    description: 'Bosque tropical frondoso con árboles gigantes y lianas. Hábitat principal de tipo Planta, Bicho y Veneno.',
    keySpawns: ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Caterpie', 'Butterfree', 'Oddish'],
    blockHacks: ['Plataforma de Bloques de Musgo', 'Hojas de Selva', 'Fuentes de Agua']
  },
  {
    id: 'badlands',
    name: 'Badlands / Meseta de Terracota',
    dimension: 'Overworld',
    yRange: 'Y = 70 a 140',
    temperature: 'Árido / Seco',
    icon: '🏜️',
    description: 'Cañones rojizos de terracota. Hábitat perfecto para Pokémon de tipo Fuego, Tierra y Dragón.',
    keySpawns: ['Charmander', 'Charmeleon', 'Charizard', 'Cyndaquil', 'Typhlosion', 'Garchomp', 'Tyranitar'],
    blockHacks: ['Plataforma de Bloques de Magma', 'Terracota Roja', 'Arenisca']
  },
  {
    id: 'deep_dark',
    name: 'Deep Dark / Profundidades Oscuras',
    dimension: 'Overworld',
    yRange: 'Y = -64 a 0',
    temperature: 'Frío Subterráneo',
    icon: '🖤',
    description: 'Zonas abisales infestadas de Sculk. Lugar de aparición de Pokémon míticos, Fantasma, Siniestro y Psíquico.',
    keySpawns: ['Mewtwo', 'Dragapult', 'Gengar', 'Darkrai', 'Mimikyu'],
    blockHacks: ['Obsidiana Llorosa', 'Arena de Almas', 'Bloques de Purpur', 'Luz 0']
  },
  {
    id: 'ocean',
    name: 'Océanos & Ríos',
    dimension: 'Overworld',
    yRange: 'Y = 30 a 62',
    temperature: 'Acuático',
    icon: '🌊',
    description: 'Biomas acuáticos marinos y fluviales. Abundancia masiva de tipo Agua y Hielo.',
    keySpawns: ['Squirtle', 'Blastoise', 'Gyarados', 'Lapras', 'Greninja', 'Swampert'],
    blockHacks: ['Plataforma de Prismarina', 'Linternas Marinas', 'Estanque Profundo 7x7']
  },
  {
    id: 'jagged_peaks',
    name: 'Picos Escarpados (Jagged Peaks)',
    dimension: 'Overworld',
    yRange: 'Y = 100 a 256',
    temperature: 'Helado Elevado',
    icon: '🏔️',
    description: 'Cumbres nevadas y rocosas de alta montaña. Hábitat exclusivo de tipo Volador, Dragón, Acero y Eléctrico.',
    keySpawns: ['Dragonite', 'Rayquaza', 'Lucario', 'Tinkaton', 'Pidgeot', 'Machamp'],
    blockHacks: ['Plataforma de Piedra Pulida', 'Yunques', 'Bloques de Cobre', 'Pararrayos']
  },
  {
    id: 'dark_forest',
    name: 'Bosque Oscuro (Dark Forest)',
    dimension: 'Overworld',
    yRange: 'Y = 62 a 90',
    temperature: 'Templado Umbrío',
    icon: '🌲',
    description: 'Bosque denso de robles oscuros con techos cerrados. Ideal para cazar tipo Fantasma, Veneno y Siniestro durante la noche.',
    keySpawns: ['Gengar', 'Umbreon', 'Ceruledge', 'Mimikyu', 'Ninetales'],
    blockHacks: ['Plataforma de Madera Oscura', 'Ladrillos del Nether', 'Noche / Sin Luz']
  }
];
