// Official 100% Authentic Pokémon Species Dataset (Gen 1 to Gen 9)
// Contains exact Catch Rates, Base Stats, Types, Weight and Height directly from official PokeAPI data
export interface AuthenticPokemonEntry {
  dexNumber: number;
  name: string;
  catchRate: number;
  weightKg: number;
  heightM: number;
  types: string[];
  baseStats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
}

export const AUTHENTIC_POKEMON_DATA: AuthenticPokemonEntry[] = [
  {
    "dexNumber": 1,
    "name": "Bulbasaur",
    "catchRate": 45,
    "weightKg": 6.9,
    "heightM": 0.7,
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 49,
      "defense": 49,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 45
    }
  },
  {
    "dexNumber": 2,
    "name": "Ivysaur",
    "catchRate": 45,
    "weightKg": 13.0,
    "heightM": 1.0,
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 62,
      "defense": 63,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 60
    }
  },
  {
    "dexNumber": 3,
    "name": "Venusaur",
    "catchRate": 45,
    "weightKg": 100.0,
    "heightM": 2.0,
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 82,
      "defense": 83,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 80
    }
  },
  {
    "dexNumber": 4,
    "name": "Charmander",
    "catchRate": 45,
    "weightKg": 8.5,
    "heightM": 0.6,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "specialAttack": 60,
      "specialDefense": 50,
      "speed": 65
    }
  },
  {
    "dexNumber": 5,
    "name": "Charmeleon",
    "catchRate": 45,
    "weightKg": 19.0,
    "heightM": 1.1,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "specialAttack": 80,
      "specialDefense": 65,
      "speed": 80
    }
  },
  {
    "dexNumber": 6,
    "name": "Charizard",
    "catchRate": 45,
    "weightKg": 90.5,
    "heightM": 1.7,
    "types": [
      "fire",
      "flying"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "specialAttack": 109,
      "specialDefense": 85,
      "speed": 100
    }
  },
  {
    "dexNumber": 7,
    "name": "Squirtle",
    "catchRate": 45,
    "weightKg": 9.0,
    "heightM": 0.5,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 44,
      "attack": 48,
      "defense": 65,
      "specialAttack": 50,
      "specialDefense": 64,
      "speed": 43
    }
  },
  {
    "dexNumber": 8,
    "name": "Wartortle",
    "catchRate": 45,
    "weightKg": 22.5,
    "heightM": 1.0,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 59,
      "attack": 63,
      "defense": 80,
      "specialAttack": 65,
      "specialDefense": 80,
      "speed": 58
    }
  },
  {
    "dexNumber": 9,
    "name": "Blastoise",
    "catchRate": 45,
    "weightKg": 85.5,
    "heightM": 1.6,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 79,
      "attack": 83,
      "defense": 100,
      "specialAttack": 85,
      "specialDefense": 105,
      "speed": 78
    }
  },
  {
    "dexNumber": 10,
    "name": "Caterpie",
    "catchRate": 255,
    "weightKg": 2.9,
    "heightM": 0.3,
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 30,
      "defense": 35,
      "specialAttack": 20,
      "specialDefense": 20,
      "speed": 45
    }
  },
  {
    "dexNumber": 11,
    "name": "Metapod",
    "catchRate": 120,
    "weightKg": 9.9,
    "heightM": 0.7,
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 20,
      "defense": 55,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 30
    }
  },
  {
    "dexNumber": 12,
    "name": "Butterfree",
    "catchRate": 45,
    "weightKg": 32.0,
    "heightM": 1.1,
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 45,
      "defense": 50,
      "specialAttack": 90,
      "specialDefense": 80,
      "speed": 70
    }
  },
  {
    "dexNumber": 13,
    "name": "Weedle",
    "catchRate": 255,
    "weightKg": 3.2,
    "heightM": 0.3,
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "specialAttack": 20,
      "specialDefense": 20,
      "speed": 50
    }
  },
  {
    "dexNumber": 14,
    "name": "Kakuna",
    "catchRate": 120,
    "weightKg": 10.0,
    "heightM": 0.6,
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 25,
      "defense": 50,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 35
    }
  },
  {
    "dexNumber": 15,
    "name": "Beedrill",
    "catchRate": 45,
    "weightKg": 29.5,
    "heightM": 1.0,
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 90,
      "defense": 40,
      "specialAttack": 45,
      "specialDefense": 80,
      "speed": 75
    }
  },
  {
    "dexNumber": 16,
    "name": "Pidgey",
    "catchRate": 255,
    "weightKg": 1.8,
    "heightM": 0.3,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 56
    }
  },
  {
    "dexNumber": 17,
    "name": "Pidgeotto",
    "catchRate": 120,
    "weightKg": 30.0,
    "heightM": 1.1,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 63,
      "attack": 60,
      "defense": 55,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 71
    }
  },
  {
    "dexNumber": 18,
    "name": "Pidgeot",
    "catchRate": 45,
    "weightKg": 39.5,
    "heightM": 1.5,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 83,
      "attack": 80,
      "defense": 75,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 101
    }
  },
  {
    "dexNumber": 20,
    "name": "Raticate",
    "catchRate": 127,
    "weightKg": 18.5,
    "heightM": 0.7,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 81,
      "defense": 60,
      "specialAttack": 50,
      "specialDefense": 70,
      "speed": 97
    }
  },
  {
    "dexNumber": 21,
    "name": "Spearow",
    "catchRate": 255,
    "weightKg": 2.0,
    "heightM": 0.3,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 60,
      "defense": 30,
      "specialAttack": 31,
      "specialDefense": 31,
      "speed": 70
    }
  },
  {
    "dexNumber": 22,
    "name": "Fearow",
    "catchRate": 90,
    "weightKg": 38.0,
    "heightM": 1.2,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 90,
      "defense": 65,
      "specialAttack": 61,
      "specialDefense": 61,
      "speed": 100
    }
  },
  {
    "dexNumber": 23,
    "name": "Ekans",
    "catchRate": 255,
    "weightKg": 6.9,
    "heightM": 2.0,
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 60,
      "defense": 44,
      "specialAttack": 40,
      "specialDefense": 54,
      "speed": 55
    }
  },
  {
    "dexNumber": 24,
    "name": "Arbok",
    "catchRate": 90,
    "weightKg": 65.0,
    "heightM": 3.5,
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 95,
      "defense": 69,
      "specialAttack": 65,
      "specialDefense": 79,
      "speed": 80
    }
  },
  {
    "dexNumber": 25,
    "name": "Pikachu",
    "catchRate": 190,
    "weightKg": 6.0,
    "heightM": 0.4,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90
    }
  },
  {
    "dexNumber": 26,
    "name": "Raichu",
    "catchRate": 75,
    "weightKg": 30.0,
    "heightM": 0.8,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 90,
      "defense": 55,
      "specialAttack": 90,
      "specialDefense": 80,
      "speed": 110
    }
  },
  {
    "dexNumber": 27,
    "name": "Sandshrew",
    "catchRate": 255,
    "weightKg": 12.0,
    "heightM": 0.6,
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 75,
      "defense": 85,
      "specialAttack": 20,
      "specialDefense": 30,
      "speed": 40
    }
  },
  {
    "dexNumber": 28,
    "name": "Sandslash",
    "catchRate": 90,
    "weightKg": 29.5,
    "heightM": 1.0,
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 100,
      "defense": 110,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 65
    }
  },
  {
    "dexNumber": 29,
    "name": "Nidoran F",
    "catchRate": 235,
    "weightKg": 7.0,
    "heightM": 0.4,
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 47,
      "defense": 52,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 41
    }
  },
  {
    "dexNumber": 30,
    "name": "Nidorina",
    "catchRate": 120,
    "weightKg": 20.0,
    "heightM": 0.8,
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 62,
      "defense": 67,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 56
    }
  },
  {
    "dexNumber": 31,
    "name": "Nidoqueen",
    "catchRate": 45,
    "weightKg": 60.0,
    "heightM": 1.3,
    "types": [
      "poison",
      "ground"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 92,
      "defense": 87,
      "specialAttack": 75,
      "specialDefense": 85,
      "speed": 76
    }
  },
  {
    "dexNumber": 32,
    "name": "Nidoran M",
    "catchRate": 235,
    "weightKg": 9.0,
    "heightM": 0.5,
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 46,
      "attack": 57,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 50
    }
  },
  {
    "dexNumber": 33,
    "name": "Nidorino",
    "catchRate": 120,
    "weightKg": 19.5,
    "heightM": 0.9,
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 61,
      "attack": 72,
      "defense": 57,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 65
    }
  },
  {
    "dexNumber": 34,
    "name": "Nidoking",
    "catchRate": 45,
    "weightKg": 62.0,
    "heightM": 1.4,
    "types": [
      "poison",
      "ground"
    ],
    "baseStats": {
      "hp": 81,
      "attack": 102,
      "defense": 77,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 85
    }
  },
  {
    "dexNumber": 35,
    "name": "Clefairy",
    "catchRate": 150,
    "weightKg": 7.5,
    "heightM": 0.6,
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 45,
      "defense": 48,
      "specialAttack": 60,
      "specialDefense": 65,
      "speed": 35
    }
  },
  {
    "dexNumber": 36,
    "name": "Clefable",
    "catchRate": 25,
    "weightKg": 40.0,
    "heightM": 1.3,
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 70,
      "defense": 73,
      "specialAttack": 95,
      "specialDefense": 90,
      "speed": 60
    }
  },
  {
    "dexNumber": 37,
    "name": "Vulpix",
    "catchRate": 190,
    "weightKg": 9.9,
    "heightM": 0.6,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 38,
      "attack": 41,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 65,
      "speed": 65
    }
  },
  {
    "dexNumber": 38,
    "name": "Ninetales",
    "catchRate": 75,
    "weightKg": 19.9,
    "heightM": 1.1,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 73,
      "attack": 76,
      "defense": 75,
      "specialAttack": 81,
      "specialDefense": 100,
      "speed": 100
    }
  },
  {
    "dexNumber": 39,
    "name": "Jigglypuff",
    "catchRate": 170,
    "weightKg": 5.5,
    "heightM": 0.5,
    "types": [
      "normal",
      "fairy"
    ],
    "baseStats": {
      "hp": 115,
      "attack": 45,
      "defense": 20,
      "specialAttack": 45,
      "specialDefense": 25,
      "speed": 20
    }
  },
  {
    "dexNumber": 40,
    "name": "Wigglytuff",
    "catchRate": 50,
    "weightKg": 12.0,
    "heightM": 1.0,
    "types": [
      "normal",
      "fairy"
    ],
    "baseStats": {
      "hp": 140,
      "attack": 70,
      "defense": 45,
      "specialAttack": 85,
      "specialDefense": 50,
      "speed": 45
    }
  },
  {
    "dexNumber": 41,
    "name": "Zubat",
    "catchRate": 255,
    "weightKg": 7.5,
    "heightM": 0.8,
    "types": [
      "poison",
      "flying"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "specialAttack": 30,
      "specialDefense": 40,
      "speed": 55
    }
  },
  {
    "dexNumber": 42,
    "name": "Golbat",
    "catchRate": 90,
    "weightKg": 55.0,
    "heightM": 1.6,
    "types": [
      "poison",
      "flying"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 80,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 75,
      "speed": 90
    }
  },
  {
    "dexNumber": 43,
    "name": "Oddish",
    "catchRate": 255,
    "weightKg": 5.4,
    "heightM": 0.5,
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 50,
      "defense": 55,
      "specialAttack": 75,
      "specialDefense": 65,
      "speed": 30
    }
  },
  {
    "dexNumber": 44,
    "name": "Gloom",
    "catchRate": 120,
    "weightKg": 8.6,
    "heightM": 0.8,
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 65,
      "defense": 70,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 40
    }
  },
  {
    "dexNumber": 45,
    "name": "Vileplume",
    "catchRate": 45,
    "weightKg": 18.6,
    "heightM": 1.2,
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 80,
      "defense": 85,
      "specialAttack": 110,
      "specialDefense": 90,
      "speed": 50
    }
  },
  {
    "dexNumber": 46,
    "name": "Paras",
    "catchRate": 190,
    "weightKg": 5.4,
    "heightM": 0.3,
    "types": [
      "bug",
      "grass"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 70,
      "defense": 55,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 25
    }
  },
  {
    "dexNumber": 47,
    "name": "Parasect",
    "catchRate": 75,
    "weightKg": 29.5,
    "heightM": 1.0,
    "types": [
      "bug",
      "grass"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 95,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 80,
      "speed": 30
    }
  },
  {
    "dexNumber": 48,
    "name": "Venonat",
    "catchRate": 190,
    "weightKg": 30.0,
    "heightM": 1.0,
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 55,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 55,
      "speed": 45
    }
  },
  {
    "dexNumber": 49,
    "name": "Venomoth",
    "catchRate": 75,
    "weightKg": 12.5,
    "heightM": 1.5,
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 65,
      "defense": 60,
      "specialAttack": 90,
      "specialDefense": 75,
      "speed": 90
    }
  },
  {
    "dexNumber": 50,
    "name": "Diglett",
    "catchRate": 255,
    "weightKg": 0.8,
    "heightM": 0.2,
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 10,
      "attack": 55,
      "defense": 25,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 95
    }
  },
  {
    "dexNumber": 51,
    "name": "Dugtrio",
    "catchRate": 50,
    "weightKg": 33.3,
    "heightM": 0.7,
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 100,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 70,
      "speed": 120
    }
  },
  {
    "dexNumber": 52,
    "name": "Meowth",
    "catchRate": 255,
    "weightKg": 4.2,
    "heightM": 0.4,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 90
    }
  },
  {
    "dexNumber": 53,
    "name": "Persian",
    "catchRate": 90,
    "weightKg": 32.0,
    "heightM": 1.0,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 70,
      "defense": 60,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 115
    }
  },
  {
    "dexNumber": 54,
    "name": "Psyduck",
    "catchRate": 190,
    "weightKg": 19.6,
    "heightM": 0.8,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 52,
      "defense": 48,
      "specialAttack": 65,
      "specialDefense": 50,
      "speed": 55
    }
  },
  {
    "dexNumber": 55,
    "name": "Golduck",
    "catchRate": 75,
    "weightKg": 76.6,
    "heightM": 1.7,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 82,
      "defense": 78,
      "specialAttack": 95,
      "specialDefense": 80,
      "speed": 85
    }
  },
  {
    "dexNumber": 56,
    "name": "Mankey",
    "catchRate": 190,
    "weightKg": 28.0,
    "heightM": 0.5,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 80,
      "defense": 35,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 70
    }
  },
  {
    "dexNumber": 57,
    "name": "Primeape",
    "catchRate": 75,
    "weightKg": 32.0,
    "heightM": 1.0,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 105,
      "defense": 60,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 95
    }
  },
  {
    "dexNumber": 58,
    "name": "Growlithe",
    "catchRate": 190,
    "weightKg": 19.0,
    "heightM": 0.7,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 70,
      "defense": 45,
      "specialAttack": 70,
      "specialDefense": 50,
      "speed": 60
    }
  },
  {
    "dexNumber": 59,
    "name": "Arcanine",
    "catchRate": 75,
    "weightKg": 155.0,
    "heightM": 1.9,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 110,
      "defense": 80,
      "specialAttack": 100,
      "specialDefense": 80,
      "speed": 95
    }
  },
  {
    "dexNumber": 60,
    "name": "Poliwag",
    "catchRate": 255,
    "weightKg": 12.4,
    "heightM": 0.6,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 50,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 90
    }
  },
  {
    "dexNumber": 61,
    "name": "Poliwhirl",
    "catchRate": 120,
    "weightKg": 20.0,
    "heightM": 1.0,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 65,
      "defense": 65,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90
    }
  },
  {
    "dexNumber": 62,
    "name": "Poliwrath",
    "catchRate": 45,
    "weightKg": 54.0,
    "heightM": 1.3,
    "types": [
      "water",
      "fighting"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 95,
      "defense": 95,
      "specialAttack": 70,
      "specialDefense": 90,
      "speed": 70
    }
  },
  {
    "dexNumber": 63,
    "name": "Abra",
    "catchRate": 200,
    "weightKg": 19.5,
    "heightM": 0.9,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 25,
      "attack": 20,
      "defense": 15,
      "specialAttack": 105,
      "specialDefense": 55,
      "speed": 90
    }
  },
  {
    "dexNumber": 64,
    "name": "Kadabra",
    "catchRate": 100,
    "weightKg": 56.5,
    "heightM": 1.3,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "specialAttack": 120,
      "specialDefense": 70,
      "speed": 105
    }
  },
  {
    "dexNumber": 65,
    "name": "Alakazam",
    "catchRate": 50,
    "weightKg": 48.0,
    "heightM": 1.5,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 50,
      "defense": 45,
      "specialAttack": 135,
      "specialDefense": 95,
      "speed": 120
    }
  },
  {
    "dexNumber": 66,
    "name": "Machop",
    "catchRate": 180,
    "weightKg": 19.5,
    "heightM": 0.8,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 80,
      "defense": 50,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 35
    }
  },
  {
    "dexNumber": 67,
    "name": "Machoke",
    "catchRate": 90,
    "weightKg": 70.5,
    "heightM": 1.5,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 100,
      "defense": 70,
      "specialAttack": 50,
      "specialDefense": 60,
      "speed": 45
    }
  },
  {
    "dexNumber": 68,
    "name": "Machamp",
    "catchRate": 45,
    "weightKg": 130.0,
    "heightM": 1.6,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 130,
      "defense": 80,
      "specialAttack": 65,
      "specialDefense": 85,
      "speed": 55
    }
  },
  {
    "dexNumber": 69,
    "name": "Bellsprout",
    "catchRate": 255,
    "weightKg": 4.0,
    "heightM": 0.7,
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 75,
      "defense": 35,
      "specialAttack": 70,
      "specialDefense": 30,
      "speed": 40
    }
  },
  {
    "dexNumber": 70,
    "name": "Weepinbell",
    "catchRate": 120,
    "weightKg": 6.4,
    "heightM": 1.0,
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 90,
      "defense": 50,
      "specialAttack": 85,
      "specialDefense": 45,
      "speed": 55
    }
  },
  {
    "dexNumber": 71,
    "name": "Victreebel",
    "catchRate": 45,
    "weightKg": 15.5,
    "heightM": 1.7,
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "specialAttack": 100,
      "specialDefense": 70,
      "speed": 70
    }
  },
  {
    "dexNumber": 72,
    "name": "Tentacool",
    "catchRate": 190,
    "weightKg": 45.5,
    "heightM": 0.9,
    "types": [
      "water",
      "poison"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "specialAttack": 50,
      "specialDefense": 100,
      "speed": 70
    }
  },
  {
    "dexNumber": 73,
    "name": "Tentacruel",
    "catchRate": 60,
    "weightKg": 55.0,
    "heightM": 1.6,
    "types": [
      "water",
      "poison"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 70,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 120,
      "speed": 100
    }
  },
  {
    "dexNumber": 74,
    "name": "Geodude",
    "catchRate": 255,
    "weightKg": 20.0,
    "heightM": 0.4,
    "types": [
      "rock",
      "ground"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 80,
      "defense": 100,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 20
    }
  },
  {
    "dexNumber": 75,
    "name": "Graveler",
    "catchRate": 120,
    "weightKg": 105.0,
    "heightM": 1.0,
    "types": [
      "rock",
      "ground"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 95,
      "defense": 115,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 35
    }
  },
  {
    "dexNumber": 76,
    "name": "Golem",
    "catchRate": 45,
    "weightKg": 300.0,
    "heightM": 1.4,
    "types": [
      "rock",
      "ground"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 120,
      "defense": 130,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 45
    }
  },
  {
    "dexNumber": 77,
    "name": "Ponyta",
    "catchRate": 190,
    "weightKg": 30.0,
    "heightM": 1.0,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 85,
      "defense": 55,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 90
    }
  },
  {
    "dexNumber": 78,
    "name": "Rapidash",
    "catchRate": 60,
    "weightKg": 95.0,
    "heightM": 1.7,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 100,
      "defense": 70,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 105
    }
  },
  {
    "dexNumber": 79,
    "name": "Slowpoke",
    "catchRate": 190,
    "weightKg": 36.0,
    "heightM": 1.2,
    "types": [
      "water",
      "psychic"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 65,
      "defense": 65,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 15
    }
  },
  {
    "dexNumber": 80,
    "name": "Slowbro",
    "catchRate": 75,
    "weightKg": 78.5,
    "heightM": 1.6,
    "types": [
      "water",
      "psychic"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 75,
      "defense": 110,
      "specialAttack": 100,
      "specialDefense": 80,
      "speed": 30
    }
  },
  {
    "dexNumber": 81,
    "name": "Magnemite",
    "catchRate": 190,
    "weightKg": 6.0,
    "heightM": 0.3,
    "types": [
      "electric",
      "steel"
    ],
    "baseStats": {
      "hp": 25,
      "attack": 35,
      "defense": 70,
      "specialAttack": 95,
      "specialDefense": 55,
      "speed": 45
    }
  },
  {
    "dexNumber": 82,
    "name": "Magneton",
    "catchRate": 60,
    "weightKg": 60.0,
    "heightM": 1.0,
    "types": [
      "electric",
      "steel"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 60,
      "defense": 95,
      "specialAttack": 120,
      "specialDefense": 70,
      "speed": 70
    }
  },
  {
    "dexNumber": 83,
    "name": "Farfetchd",
    "catchRate": 45,
    "weightKg": 15.0,
    "heightM": 0.8,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 52,
      "attack": 90,
      "defense": 55,
      "specialAttack": 58,
      "specialDefense": 62,
      "speed": 60
    }
  },
  {
    "dexNumber": 84,
    "name": "Doduo",
    "catchRate": 190,
    "weightKg": 39.2,
    "heightM": 1.4,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 85,
      "defense": 45,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 75
    }
  },
  {
    "dexNumber": 85,
    "name": "Dodrio",
    "catchRate": 45,
    "weightKg": 85.2,
    "heightM": 1.8,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 110,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 110
    }
  },
  {
    "dexNumber": 86,
    "name": "Seel",
    "catchRate": 190,
    "weightKg": 90.0,
    "heightM": 1.1,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 45,
      "defense": 55,
      "specialAttack": 45,
      "specialDefense": 70,
      "speed": 45
    }
  },
  {
    "dexNumber": 87,
    "name": "Dewgong",
    "catchRate": 75,
    "weightKg": 120.0,
    "heightM": 1.7,
    "types": [
      "water",
      "ice"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 70,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 95,
      "speed": 70
    }
  },
  {
    "dexNumber": 88,
    "name": "Grimer",
    "catchRate": 190,
    "weightKg": 30.0,
    "heightM": 0.9,
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 80,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 25
    }
  },
  {
    "dexNumber": 89,
    "name": "Muk",
    "catchRate": 75,
    "weightKg": 30.0,
    "heightM": 1.2,
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 105,
      "defense": 75,
      "specialAttack": 65,
      "specialDefense": 100,
      "speed": 50
    }
  },
  {
    "dexNumber": 90,
    "name": "Shellder",
    "catchRate": 190,
    "weightKg": 4.0,
    "heightM": 0.3,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 65,
      "defense": 100,
      "specialAttack": 45,
      "specialDefense": 25,
      "speed": 40
    }
  },
  {
    "dexNumber": 91,
    "name": "Cloyster",
    "catchRate": 60,
    "weightKg": 132.5,
    "heightM": 1.5,
    "types": [
      "water",
      "ice"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 95,
      "defense": 180,
      "specialAttack": 85,
      "specialDefense": 45,
      "speed": 70
    }
  },
  {
    "dexNumber": 92,
    "name": "Gastly",
    "catchRate": 190,
    "weightKg": 0.1,
    "heightM": 1.3,
    "types": [
      "ghost",
      "poison"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 35,
      "defense": 30,
      "specialAttack": 100,
      "specialDefense": 35,
      "speed": 80
    }
  },
  {
    "dexNumber": 93,
    "name": "Haunter",
    "catchRate": 90,
    "weightKg": 0.1,
    "heightM": 1.6,
    "types": [
      "ghost",
      "poison"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 50,
      "defense": 45,
      "specialAttack": 115,
      "specialDefense": 55,
      "speed": 95
    }
  },
  {
    "dexNumber": 94,
    "name": "Gengar",
    "catchRate": 45,
    "weightKg": 40.5,
    "heightM": 1.5,
    "types": [
      "ghost",
      "poison"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 65,
      "defense": 60,
      "specialAttack": 130,
      "specialDefense": 75,
      "speed": 110
    }
  },
  {
    "dexNumber": 95,
    "name": "Onix",
    "catchRate": 45,
    "weightKg": 210.0,
    "heightM": 8.8,
    "types": [
      "rock",
      "ground"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 45,
      "defense": 160,
      "specialAttack": 30,
      "specialDefense": 45,
      "speed": 70
    }
  },
  {
    "dexNumber": 96,
    "name": "Drowzee",
    "catchRate": 190,
    "weightKg": 32.4,
    "heightM": 1.0,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 48,
      "defense": 45,
      "specialAttack": 43,
      "specialDefense": 90,
      "speed": 42
    }
  },
  {
    "dexNumber": 97,
    "name": "Hypno",
    "catchRate": 75,
    "weightKg": 75.6,
    "heightM": 1.6,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 73,
      "defense": 70,
      "specialAttack": 73,
      "specialDefense": 115,
      "speed": 67
    }
  },
  {
    "dexNumber": 98,
    "name": "Krabby",
    "catchRate": 225,
    "weightKg": 6.5,
    "heightM": 0.4,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 105,
      "defense": 90,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 50
    }
  },
  {
    "dexNumber": 99,
    "name": "Kingler",
    "catchRate": 60,
    "weightKg": 60.0,
    "heightM": 1.3,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 130,
      "defense": 115,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 75
    }
  },
  {
    "dexNumber": 100,
    "name": "Voltorb",
    "catchRate": 190,
    "weightKg": 10.4,
    "heightM": 0.5,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 30,
      "defense": 50,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 100
    }
  },
  {
    "dexNumber": 101,
    "name": "Electrode",
    "catchRate": 60,
    "weightKg": 66.6,
    "heightM": 1.2,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 70,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 150
    }
  },
  {
    "dexNumber": 102,
    "name": "Exeggcute",
    "catchRate": 90,
    "weightKg": 2.5,
    "heightM": 0.4,
    "types": [
      "grass",
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 40,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 45,
      "speed": 40
    }
  },
  {
    "dexNumber": 103,
    "name": "Exeggutor",
    "catchRate": 45,
    "weightKg": 120.0,
    "heightM": 2.0,
    "types": [
      "grass",
      "psychic"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 95,
      "defense": 85,
      "specialAttack": 125,
      "specialDefense": 75,
      "speed": 55
    }
  },
  {
    "dexNumber": 104,
    "name": "Cubone",
    "catchRate": 190,
    "weightKg": 6.5,
    "heightM": 0.4,
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 50,
      "defense": 95,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 35
    }
  },
  {
    "dexNumber": 105,
    "name": "Marowak",
    "catchRate": 75,
    "weightKg": 45.0,
    "heightM": 1.0,
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 80,
      "defense": 110,
      "specialAttack": 50,
      "specialDefense": 80,
      "speed": 45
    }
  },
  {
    "dexNumber": 106,
    "name": "Hitmonlee",
    "catchRate": 45,
    "weightKg": 49.8,
    "heightM": 1.5,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 120,
      "defense": 53,
      "specialAttack": 35,
      "specialDefense": 110,
      "speed": 87
    }
  },
  {
    "dexNumber": 107,
    "name": "Hitmonchan",
    "catchRate": 45,
    "weightKg": 50.2,
    "heightM": 1.4,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 105,
      "defense": 79,
      "specialAttack": 35,
      "specialDefense": 110,
      "speed": 76
    }
  },
  {
    "dexNumber": 108,
    "name": "Lickitung",
    "catchRate": 45,
    "weightKg": 65.5,
    "heightM": 1.2,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 55,
      "defense": 75,
      "specialAttack": 60,
      "specialDefense": 75,
      "speed": 30
    }
  },
  {
    "dexNumber": 109,
    "name": "Koffing",
    "catchRate": 190,
    "weightKg": 1.0,
    "heightM": 0.6,
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 65,
      "defense": 95,
      "specialAttack": 60,
      "specialDefense": 45,
      "speed": 35
    }
  },
  {
    "dexNumber": 110,
    "name": "Weezing",
    "catchRate": 60,
    "weightKg": 9.5,
    "heightM": 1.2,
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 90,
      "defense": 120,
      "specialAttack": 85,
      "specialDefense": 70,
      "speed": 60
    }
  },
  {
    "dexNumber": 111,
    "name": "Rhyhorn",
    "catchRate": 120,
    "weightKg": 115.0,
    "heightM": 1.0,
    "types": [
      "ground",
      "rock"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 85,
      "defense": 95,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 25
    }
  },
  {
    "dexNumber": 112,
    "name": "Rhydon",
    "catchRate": 60,
    "weightKg": 120.0,
    "heightM": 1.9,
    "types": [
      "ground",
      "rock"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 130,
      "defense": 120,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 40
    }
  },
  {
    "dexNumber": 113,
    "name": "Chansey",
    "catchRate": 30,
    "weightKg": 34.6,
    "heightM": 1.1,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 250,
      "attack": 5,
      "defense": 5,
      "specialAttack": 35,
      "specialDefense": 105,
      "speed": 50
    }
  },
  {
    "dexNumber": 114,
    "name": "Tangela",
    "catchRate": 45,
    "weightKg": 35.0,
    "heightM": 1.0,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 55,
      "defense": 115,
      "specialAttack": 100,
      "specialDefense": 40,
      "speed": 60
    }
  },
  {
    "dexNumber": 115,
    "name": "Kangaskhan",
    "catchRate": 45,
    "weightKg": 80.0,
    "heightM": 2.2,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 95,
      "defense": 80,
      "specialAttack": 40,
      "specialDefense": 80,
      "speed": 90
    }
  },
  {
    "dexNumber": 116,
    "name": "Horsea",
    "catchRate": 225,
    "weightKg": 8.0,
    "heightM": 0.4,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 40,
      "defense": 70,
      "specialAttack": 70,
      "specialDefense": 25,
      "speed": 60
    }
  },
  {
    "dexNumber": 117,
    "name": "Seadra",
    "catchRate": 75,
    "weightKg": 25.0,
    "heightM": 1.2,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 65,
      "defense": 95,
      "specialAttack": 95,
      "specialDefense": 45,
      "speed": 85
    }
  },
  {
    "dexNumber": 118,
    "name": "Goldeen",
    "catchRate": 225,
    "weightKg": 15.0,
    "heightM": 0.6,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 67,
      "defense": 60,
      "specialAttack": 35,
      "specialDefense": 50,
      "speed": 63
    }
  },
  {
    "dexNumber": 119,
    "name": "Seaking",
    "catchRate": 60,
    "weightKg": 39.0,
    "heightM": 1.3,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 92,
      "defense": 65,
      "specialAttack": 65,
      "specialDefense": 80,
      "speed": 68
    }
  },
  {
    "dexNumber": 120,
    "name": "Staryu",
    "catchRate": 225,
    "weightKg": 34.5,
    "heightM": 0.8,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 45,
      "defense": 55,
      "specialAttack": 70,
      "specialDefense": 55,
      "speed": 85
    }
  },
  {
    "dexNumber": 121,
    "name": "Starmie",
    "catchRate": 60,
    "weightKg": 80.0,
    "heightM": 1.1,
    "types": [
      "water",
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 75,
      "defense": 85,
      "specialAttack": 100,
      "specialDefense": 85,
      "speed": 115
    }
  },
  {
    "dexNumber": 122,
    "name": "Mr Mime",
    "catchRate": 45,
    "weightKg": 54.5,
    "heightM": 1.3,
    "types": [
      "psychic",
      "fairy"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 65,
      "specialAttack": 100,
      "specialDefense": 120,
      "speed": 90
    }
  },
  {
    "dexNumber": 123,
    "name": "Scyther",
    "catchRate": 45,
    "weightKg": 56.0,
    "heightM": 1.5,
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 110,
      "defense": 80,
      "specialAttack": 55,
      "specialDefense": 80,
      "speed": 105
    }
  },
  {
    "dexNumber": 124,
    "name": "Jynx",
    "catchRate": 45,
    "weightKg": 40.6,
    "heightM": 1.4,
    "types": [
      "ice",
      "psychic"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 50,
      "defense": 35,
      "specialAttack": 115,
      "specialDefense": 95,
      "speed": 95
    }
  },
  {
    "dexNumber": 125,
    "name": "Electabuzz",
    "catchRate": 45,
    "weightKg": 30.0,
    "heightM": 1.1,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 83,
      "defense": 57,
      "specialAttack": 95,
      "specialDefense": 85,
      "speed": 105
    }
  },
  {
    "dexNumber": 126,
    "name": "Magmar",
    "catchRate": 45,
    "weightKg": 44.5,
    "heightM": 1.3,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 95,
      "defense": 57,
      "specialAttack": 100,
      "specialDefense": 85,
      "speed": 93
    }
  },
  {
    "dexNumber": 127,
    "name": "Pinsir",
    "catchRate": 45,
    "weightKg": 55.0,
    "heightM": 1.5,
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 125,
      "defense": 100,
      "specialAttack": 55,
      "specialDefense": 70,
      "speed": 85
    }
  },
  {
    "dexNumber": 128,
    "name": "Tauros",
    "catchRate": 45,
    "weightKg": 88.4,
    "heightM": 1.4,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 100,
      "defense": 95,
      "specialAttack": 40,
      "specialDefense": 70,
      "speed": 110
    }
  },
  {
    "dexNumber": 129,
    "name": "Magikarp",
    "catchRate": 255,
    "weightKg": 10.0,
    "heightM": 0.9,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 20,
      "attack": 10,
      "defense": 55,
      "specialAttack": 15,
      "specialDefense": 20,
      "speed": 80
    }
  },
  {
    "dexNumber": 130,
    "name": "Gyarados",
    "catchRate": 45,
    "weightKg": 235.0,
    "heightM": 6.5,
    "types": [
      "water",
      "flying"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 125,
      "defense": 79,
      "specialAttack": 60,
      "specialDefense": 100,
      "speed": 81
    }
  },
  {
    "dexNumber": 131,
    "name": "Lapras",
    "catchRate": 45,
    "weightKg": 220.0,
    "heightM": 2.5,
    "types": [
      "water",
      "ice"
    ],
    "baseStats": {
      "hp": 130,
      "attack": 85,
      "defense": 80,
      "specialAttack": 85,
      "specialDefense": 95,
      "speed": 60
    }
  },
  {
    "dexNumber": 132,
    "name": "Ditto",
    "catchRate": 35,
    "weightKg": 4.0,
    "heightM": 0.3,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 48,
      "attack": 48,
      "defense": 48,
      "specialAttack": 48,
      "specialDefense": 48,
      "speed": 48
    }
  },
  {
    "dexNumber": 133,
    "name": "Eevee",
    "catchRate": 45,
    "weightKg": 6.5,
    "heightM": 0.3,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 55,
      "defense": 50,
      "specialAttack": 45,
      "specialDefense": 65,
      "speed": 55
    }
  },
  {
    "dexNumber": 134,
    "name": "Vaporeon",
    "catchRate": 45,
    "weightKg": 29.0,
    "heightM": 1.0,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 130,
      "attack": 65,
      "defense": 60,
      "specialAttack": 110,
      "specialDefense": 95,
      "speed": 65
    }
  },
  {
    "dexNumber": 135,
    "name": "Jolteon",
    "catchRate": 45,
    "weightKg": 24.5,
    "heightM": 0.8,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "specialAttack": 110,
      "specialDefense": 95,
      "speed": 130
    }
  },
  {
    "dexNumber": 136,
    "name": "Flareon",
    "catchRate": 45,
    "weightKg": 25.0,
    "heightM": 0.9,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "specialAttack": 95,
      "specialDefense": 110,
      "speed": 65
    }
  },
  {
    "dexNumber": 137,
    "name": "Porygon",
    "catchRate": 45,
    "weightKg": 36.5,
    "heightM": 0.8,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 60,
      "defense": 70,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 40
    }
  },
  {
    "dexNumber": 138,
    "name": "Omanyte",
    "catchRate": 45,
    "weightKg": 7.5,
    "heightM": 0.4,
    "types": [
      "rock",
      "water"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 40,
      "defense": 100,
      "specialAttack": 90,
      "specialDefense": 55,
      "speed": 35
    }
  },
  {
    "dexNumber": 139,
    "name": "Omastar",
    "catchRate": 45,
    "weightKg": 35.0,
    "heightM": 1.0,
    "types": [
      "rock",
      "water"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 60,
      "defense": 125,
      "specialAttack": 115,
      "specialDefense": 70,
      "speed": 55
    }
  },
  {
    "dexNumber": 140,
    "name": "Kabuto",
    "catchRate": 45,
    "weightKg": 11.5,
    "heightM": 0.5,
    "types": [
      "rock",
      "water"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 80,
      "defense": 90,
      "specialAttack": 55,
      "specialDefense": 45,
      "speed": 55
    }
  },
  {
    "dexNumber": 141,
    "name": "Kabutops",
    "catchRate": 45,
    "weightKg": 40.5,
    "heightM": 1.3,
    "types": [
      "rock",
      "water"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 115,
      "defense": 105,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 80
    }
  },
  {
    "dexNumber": 142,
    "name": "Aerodactyl",
    "catchRate": 45,
    "weightKg": 59.0,
    "heightM": 1.8,
    "types": [
      "rock",
      "flying"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "specialAttack": 60,
      "specialDefense": 75,
      "speed": 130
    }
  },
  {
    "dexNumber": 143,
    "name": "Snorlax",
    "catchRate": 25,
    "weightKg": 460.0,
    "heightM": 2.1,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 160,
      "attack": 110,
      "defense": 65,
      "specialAttack": 65,
      "specialDefense": 110,
      "speed": 30
    }
  },
  {
    "dexNumber": 144,
    "name": "Articuno",
    "catchRate": 3,
    "weightKg": 55.4,
    "heightM": 1.7,
    "types": [
      "ice",
      "flying"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 85,
      "defense": 100,
      "specialAttack": 95,
      "specialDefense": 125,
      "speed": 85
    }
  },
  {
    "dexNumber": 145,
    "name": "Zapdos",
    "catchRate": 3,
    "weightKg": 52.6,
    "heightM": 1.6,
    "types": [
      "electric",
      "flying"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 90,
      "defense": 85,
      "specialAttack": 125,
      "specialDefense": 90,
      "speed": 100
    }
  },
  {
    "dexNumber": 146,
    "name": "Moltres",
    "catchRate": 3,
    "weightKg": 60.0,
    "heightM": 2.0,
    "types": [
      "fire",
      "flying"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "specialAttack": 125,
      "specialDefense": 85,
      "speed": 90
    }
  },
  {
    "dexNumber": 147,
    "name": "Dratini",
    "catchRate": 45,
    "weightKg": 3.3,
    "heightM": 1.8,
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 41,
      "attack": 64,
      "defense": 45,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 50
    }
  },
  {
    "dexNumber": 148,
    "name": "Dragonair",
    "catchRate": 45,
    "weightKg": 16.5,
    "heightM": 4.0,
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 61,
      "attack": 84,
      "defense": 65,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 70
    }
  },
  {
    "dexNumber": 149,
    "name": "Dragonite",
    "catchRate": 45,
    "weightKg": 210.0,
    "heightM": 2.2,
    "types": [
      "dragon",
      "flying"
    ],
    "baseStats": {
      "hp": 91,
      "attack": 134,
      "defense": 95,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 80
    }
  },
  {
    "dexNumber": 150,
    "name": "Mewtwo",
    "catchRate": 3,
    "weightKg": 122.0,
    "heightM": 2.0,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 106,
      "attack": 110,
      "defense": 90,
      "specialAttack": 154,
      "specialDefense": 90,
      "speed": 130
    }
  },
  {
    "dexNumber": 151,
    "name": "Mew",
    "catchRate": 45,
    "weightKg": 4.0,
    "heightM": 0.4,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100
    }
  },
  {
    "dexNumber": 152,
    "name": "Chikorita",
    "catchRate": 45,
    "weightKg": 6.4,
    "heightM": 0.9,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 49,
      "defense": 65,
      "specialAttack": 49,
      "specialDefense": 65,
      "speed": 45
    }
  },
  {
    "dexNumber": 153,
    "name": "Bayleef",
    "catchRate": 45,
    "weightKg": 15.8,
    "heightM": 1.2,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 62,
      "defense": 80,
      "specialAttack": 63,
      "specialDefense": 80,
      "speed": 60
    }
  },
  {
    "dexNumber": 154,
    "name": "Meganium",
    "catchRate": 45,
    "weightKg": 100.5,
    "heightM": 1.8,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 82,
      "defense": 100,
      "specialAttack": 83,
      "specialDefense": 100,
      "speed": 80
    }
  },
  {
    "dexNumber": 155,
    "name": "Cyndaquil",
    "catchRate": 45,
    "weightKg": 7.9,
    "heightM": 0.5,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "specialAttack": 60,
      "specialDefense": 50,
      "speed": 65
    }
  },
  {
    "dexNumber": 156,
    "name": "Quilava",
    "catchRate": 45,
    "weightKg": 19.0,
    "heightM": 0.9,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "specialAttack": 80,
      "specialDefense": 65,
      "speed": 80
    }
  },
  {
    "dexNumber": 157,
    "name": "Typhlosion",
    "catchRate": 45,
    "weightKg": 79.5,
    "heightM": 1.7,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "specialAttack": 109,
      "specialDefense": 85,
      "speed": 100
    }
  },
  {
    "dexNumber": 158,
    "name": "Totodile",
    "catchRate": 45,
    "weightKg": 9.5,
    "heightM": 0.6,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 65,
      "defense": 64,
      "specialAttack": 44,
      "specialDefense": 48,
      "speed": 43
    }
  },
  {
    "dexNumber": 159,
    "name": "Croconaw",
    "catchRate": 45,
    "weightKg": 25.0,
    "heightM": 1.1,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 80,
      "defense": 80,
      "specialAttack": 59,
      "specialDefense": 63,
      "speed": 58
    }
  },
  {
    "dexNumber": 160,
    "name": "Feraligatr",
    "catchRate": 45,
    "weightKg": 88.8,
    "heightM": 2.3,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 105,
      "defense": 100,
      "specialAttack": 79,
      "specialDefense": 83,
      "speed": 78
    }
  },
  {
    "dexNumber": 161,
    "name": "Sentret",
    "catchRate": 255,
    "weightKg": 6.0,
    "heightM": 0.8,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 46,
      "defense": 34,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 20
    }
  },
  {
    "dexNumber": 162,
    "name": "Furret",
    "catchRate": 90,
    "weightKg": 32.5,
    "heightM": 1.8,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 76,
      "defense": 64,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 90
    }
  },
  {
    "dexNumber": 163,
    "name": "Hoothoot",
    "catchRate": 255,
    "weightKg": 21.2,
    "heightM": 0.7,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 30,
      "defense": 30,
      "specialAttack": 36,
      "specialDefense": 56,
      "speed": 50
    }
  },
  {
    "dexNumber": 164,
    "name": "Noctowl",
    "catchRate": 90,
    "weightKg": 40.8,
    "heightM": 1.6,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 50,
      "defense": 50,
      "specialAttack": 86,
      "specialDefense": 96,
      "speed": 70
    }
  },
  {
    "dexNumber": 165,
    "name": "Ledyba",
    "catchRate": 255,
    "weightKg": 10.8,
    "heightM": 1.0,
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 20,
      "defense": 30,
      "specialAttack": 40,
      "specialDefense": 80,
      "speed": 55
    }
  },
  {
    "dexNumber": 166,
    "name": "Ledian",
    "catchRate": 90,
    "weightKg": 35.6,
    "heightM": 1.4,
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 35,
      "defense": 50,
      "specialAttack": 55,
      "specialDefense": 110,
      "speed": 85
    }
  },
  {
    "dexNumber": 167,
    "name": "Spinarak",
    "catchRate": 255,
    "weightKg": 8.5,
    "heightM": 0.5,
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 60,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 30
    }
  },
  {
    "dexNumber": 168,
    "name": "Ariados",
    "catchRate": 90,
    "weightKg": 33.5,
    "heightM": 1.1,
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 90,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 40
    }
  },
  {
    "dexNumber": 169,
    "name": "Crobat",
    "catchRate": 90,
    "weightKg": 75.0,
    "heightM": 1.8,
    "types": [
      "poison",
      "flying"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 90,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 130
    }
  },
  {
    "dexNumber": 170,
    "name": "Chinchou",
    "catchRate": 190,
    "weightKg": 12.0,
    "heightM": 0.5,
    "types": [
      "water",
      "electric"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 38,
      "defense": 38,
      "specialAttack": 56,
      "specialDefense": 56,
      "speed": 67
    }
  },
  {
    "dexNumber": 171,
    "name": "Lanturn",
    "catchRate": 75,
    "weightKg": 22.5,
    "heightM": 1.2,
    "types": [
      "water",
      "electric"
    ],
    "baseStats": {
      "hp": 125,
      "attack": 58,
      "defense": 58,
      "specialAttack": 76,
      "specialDefense": 76,
      "speed": 67
    }
  },
  {
    "dexNumber": 172,
    "name": "Pichu",
    "catchRate": 190,
    "weightKg": 2.0,
    "heightM": 0.3,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 20,
      "attack": 40,
      "defense": 15,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 60
    }
  },
  {
    "dexNumber": 173,
    "name": "Cleffa",
    "catchRate": 150,
    "weightKg": 3.0,
    "heightM": 0.3,
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 25,
      "defense": 28,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 15
    }
  },
  {
    "dexNumber": 174,
    "name": "Igglybuff",
    "catchRate": 170,
    "weightKg": 1.0,
    "heightM": 0.3,
    "types": [
      "normal",
      "fairy"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 30,
      "defense": 15,
      "specialAttack": 40,
      "specialDefense": 20,
      "speed": 15
    }
  },
  {
    "dexNumber": 175,
    "name": "Togepi",
    "catchRate": 190,
    "weightKg": 1.5,
    "heightM": 0.3,
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 20,
      "defense": 65,
      "specialAttack": 40,
      "specialDefense": 65,
      "speed": 20
    }
  },
  {
    "dexNumber": 176,
    "name": "Togetic",
    "catchRate": 75,
    "weightKg": 3.2,
    "heightM": 0.6,
    "types": [
      "fairy",
      "flying"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 40,
      "defense": 85,
      "specialAttack": 80,
      "specialDefense": 105,
      "speed": 40
    }
  },
  {
    "dexNumber": 177,
    "name": "Natu",
    "catchRate": 190,
    "weightKg": 2.0,
    "heightM": 0.2,
    "types": [
      "psychic",
      "flying"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 50,
      "defense": 45,
      "specialAttack": 70,
      "specialDefense": 45,
      "speed": 70
    }
  },
  {
    "dexNumber": 178,
    "name": "Xatu",
    "catchRate": 75,
    "weightKg": 15.0,
    "heightM": 1.5,
    "types": [
      "psychic",
      "flying"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 75,
      "defense": 70,
      "specialAttack": 95,
      "specialDefense": 70,
      "speed": 95
    }
  },
  {
    "dexNumber": 179,
    "name": "Mareep",
    "catchRate": 235,
    "weightKg": 7.8,
    "heightM": 0.6,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 40,
      "defense": 40,
      "specialAttack": 65,
      "specialDefense": 45,
      "speed": 35
    }
  },
  {
    "dexNumber": 180,
    "name": "Flaaffy",
    "catchRate": 120,
    "weightKg": 13.3,
    "heightM": 0.8,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 55,
      "defense": 55,
      "specialAttack": 80,
      "specialDefense": 60,
      "speed": 45
    }
  },
  {
    "dexNumber": 181,
    "name": "Ampharos",
    "catchRate": 45,
    "weightKg": 61.5,
    "heightM": 1.4,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 75,
      "defense": 85,
      "specialAttack": 115,
      "specialDefense": 90,
      "speed": 55
    }
  },
  {
    "dexNumber": 182,
    "name": "Bellossom",
    "catchRate": 45,
    "weightKg": 5.8,
    "heightM": 0.4,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 80,
      "defense": 95,
      "specialAttack": 90,
      "specialDefense": 100,
      "speed": 50
    }
  },
  {
    "dexNumber": 183,
    "name": "Marill",
    "catchRate": 190,
    "weightKg": 8.5,
    "heightM": 0.4,
    "types": [
      "water",
      "fairy"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 20,
      "defense": 50,
      "specialAttack": 20,
      "specialDefense": 50,
      "speed": 40
    }
  },
  {
    "dexNumber": 184,
    "name": "Azumarill",
    "catchRate": 75,
    "weightKg": 28.5,
    "heightM": 0.8,
    "types": [
      "water",
      "fairy"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 50,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 80,
      "speed": 50
    }
  },
  {
    "dexNumber": 185,
    "name": "Sudowoodo",
    "catchRate": 65,
    "weightKg": 38.0,
    "heightM": 1.2,
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 100,
      "defense": 115,
      "specialAttack": 30,
      "specialDefense": 65,
      "speed": 30
    }
  },
  {
    "dexNumber": 186,
    "name": "Politoed",
    "catchRate": 45,
    "weightKg": 33.9,
    "heightM": 1.1,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 75,
      "defense": 75,
      "specialAttack": 90,
      "specialDefense": 100,
      "speed": 70
    }
  },
  {
    "dexNumber": 187,
    "name": "Hoppip",
    "catchRate": 255,
    "weightKg": 0.5,
    "heightM": 0.4,
    "types": [
      "grass",
      "flying"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 35,
      "defense": 40,
      "specialAttack": 35,
      "specialDefense": 55,
      "speed": 50
    }
  },
  {
    "dexNumber": 188,
    "name": "Skiploom",
    "catchRate": 120,
    "weightKg": 1.0,
    "heightM": 0.6,
    "types": [
      "grass",
      "flying"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 45,
      "defense": 50,
      "specialAttack": 45,
      "specialDefense": 65,
      "speed": 80
    }
  },
  {
    "dexNumber": 189,
    "name": "Jumpluff",
    "catchRate": 45,
    "weightKg": 3.0,
    "heightM": 0.8,
    "types": [
      "grass",
      "flying"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 55,
      "defense": 70,
      "specialAttack": 55,
      "specialDefense": 95,
      "speed": 110
    }
  },
  {
    "dexNumber": 190,
    "name": "Aipom",
    "catchRate": 45,
    "weightKg": 11.5,
    "heightM": 0.8,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 70,
      "defense": 55,
      "specialAttack": 40,
      "specialDefense": 55,
      "speed": 85
    }
  },
  {
    "dexNumber": 191,
    "name": "Sunkern",
    "catchRate": 235,
    "weightKg": 1.8,
    "heightM": 0.3,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 30,
      "defense": 30,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 30
    }
  },
  {
    "dexNumber": 192,
    "name": "Sunflora",
    "catchRate": 120,
    "weightKg": 8.5,
    "heightM": 0.8,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 75,
      "defense": 55,
      "specialAttack": 105,
      "specialDefense": 85,
      "speed": 30
    }
  },
  {
    "dexNumber": 193,
    "name": "Yanma",
    "catchRate": 75,
    "weightKg": 38.0,
    "heightM": 1.2,
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 65,
      "defense": 45,
      "specialAttack": 75,
      "specialDefense": 45,
      "speed": 95
    }
  },
  {
    "dexNumber": 194,
    "name": "Wooper",
    "catchRate": 255,
    "weightKg": 8.5,
    "heightM": 0.4,
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 45,
      "defense": 45,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 15
    }
  },
  {
    "dexNumber": 195,
    "name": "Quagsire",
    "catchRate": 90,
    "weightKg": 75.0,
    "heightM": 1.4,
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 85,
      "defense": 85,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 35
    }
  },
  {
    "dexNumber": 196,
    "name": "Espeon",
    "catchRate": 45,
    "weightKg": 26.5,
    "heightM": 0.9,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "specialAttack": 130,
      "specialDefense": 95,
      "speed": 110
    }
  },
  {
    "dexNumber": 197,
    "name": "Umbreon",
    "catchRate": 45,
    "weightKg": 27.0,
    "heightM": 1.0,
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 65,
      "defense": 110,
      "specialAttack": 60,
      "specialDefense": 130,
      "speed": 65
    }
  },
  {
    "dexNumber": 198,
    "name": "Murkrow",
    "catchRate": 30,
    "weightKg": 2.1,
    "heightM": 0.5,
    "types": [
      "dark",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 85,
      "defense": 42,
      "specialAttack": 85,
      "specialDefense": 42,
      "speed": 91
    }
  },
  {
    "dexNumber": 199,
    "name": "Slowking",
    "catchRate": 70,
    "weightKg": 79.5,
    "heightM": 2.0,
    "types": [
      "water",
      "psychic"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 75,
      "defense": 80,
      "specialAttack": 100,
      "specialDefense": 110,
      "speed": 30
    }
  },
  {
    "dexNumber": 200,
    "name": "Misdreavus",
    "catchRate": 45,
    "weightKg": 1.0,
    "heightM": 0.7,
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "specialAttack": 85,
      "specialDefense": 85,
      "speed": 85
    }
  },
  {
    "dexNumber": 201,
    "name": "Unown",
    "catchRate": 225,
    "weightKg": 5.0,
    "heightM": 0.5,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 48,
      "attack": 72,
      "defense": 48,
      "specialAttack": 72,
      "specialDefense": 48,
      "speed": 48
    }
  },
  {
    "dexNumber": 202,
    "name": "Wobbuffet",
    "catchRate": 45,
    "weightKg": 28.5,
    "heightM": 1.3,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 190,
      "attack": 33,
      "defense": 58,
      "specialAttack": 33,
      "specialDefense": 58,
      "speed": 33
    }
  },
  {
    "dexNumber": 203,
    "name": "Girafarig",
    "catchRate": 60,
    "weightKg": 41.5,
    "heightM": 1.5,
    "types": [
      "normal",
      "psychic"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 80,
      "defense": 65,
      "specialAttack": 90,
      "specialDefense": 65,
      "speed": 85
    }
  },
  {
    "dexNumber": 204,
    "name": "Pineco",
    "catchRate": 190,
    "weightKg": 7.2,
    "heightM": 0.6,
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 65,
      "defense": 90,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 15
    }
  },
  {
    "dexNumber": 205,
    "name": "Forretress",
    "catchRate": 75,
    "weightKg": 125.8,
    "heightM": 1.2,
    "types": [
      "bug",
      "steel"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 90,
      "defense": 140,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 40
    }
  },
  {
    "dexNumber": 206,
    "name": "Dunsparce",
    "catchRate": 190,
    "weightKg": 14.0,
    "heightM": 1.5,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 70,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 45
    }
  },
  {
    "dexNumber": 207,
    "name": "Gligar",
    "catchRate": 60,
    "weightKg": 64.8,
    "heightM": 1.1,
    "types": [
      "ground",
      "flying"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 75,
      "defense": 105,
      "specialAttack": 35,
      "specialDefense": 65,
      "speed": 85
    }
  },
  {
    "dexNumber": 208,
    "name": "Steelix",
    "catchRate": 25,
    "weightKg": 400.0,
    "heightM": 9.2,
    "types": [
      "steel",
      "ground"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 85,
      "defense": 200,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 30
    }
  },
  {
    "dexNumber": 209,
    "name": "Snubbull",
    "catchRate": 190,
    "weightKg": 7.8,
    "heightM": 0.6,
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 80,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 30
    }
  },
  {
    "dexNumber": 210,
    "name": "Granbull",
    "catchRate": 75,
    "weightKg": 48.7,
    "heightM": 1.4,
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 120,
      "defense": 75,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 45
    }
  },
  {
    "dexNumber": 211,
    "name": "Qwilfish",
    "catchRate": 45,
    "weightKg": 3.9,
    "heightM": 0.5,
    "types": [
      "water",
      "poison"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 95,
      "defense": 85,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 85
    }
  },
  {
    "dexNumber": 212,
    "name": "Scizor",
    "catchRate": 25,
    "weightKg": 118.0,
    "heightM": 1.8,
    "types": [
      "bug",
      "steel"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 130,
      "defense": 100,
      "specialAttack": 55,
      "specialDefense": 80,
      "speed": 65
    }
  },
  {
    "dexNumber": 213,
    "name": "Shuckle",
    "catchRate": 190,
    "weightKg": 20.5,
    "heightM": 0.6,
    "types": [
      "bug",
      "rock"
    ],
    "baseStats": {
      "hp": 20,
      "attack": 10,
      "defense": 230,
      "specialAttack": 10,
      "specialDefense": 230,
      "speed": 5
    }
  },
  {
    "dexNumber": 214,
    "name": "Heracross",
    "catchRate": 45,
    "weightKg": 54.0,
    "heightM": 1.5,
    "types": [
      "bug",
      "fighting"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 125,
      "defense": 75,
      "specialAttack": 40,
      "specialDefense": 95,
      "speed": 85
    }
  },
  {
    "dexNumber": 215,
    "name": "Sneasel",
    "catchRate": 60,
    "weightKg": 28.0,
    "heightM": 0.9,
    "types": [
      "dark",
      "ice"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 95,
      "defense": 55,
      "specialAttack": 35,
      "specialDefense": 75,
      "speed": 115
    }
  },
  {
    "dexNumber": 216,
    "name": "Teddiursa",
    "catchRate": 120,
    "weightKg": 8.8,
    "heightM": 0.6,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 80,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 40
    }
  },
  {
    "dexNumber": 217,
    "name": "Ursaring",
    "catchRate": 60,
    "weightKg": 125.8,
    "heightM": 1.8,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 130,
      "defense": 75,
      "specialAttack": 75,
      "specialDefense": 75,
      "speed": 55
    }
  },
  {
    "dexNumber": 218,
    "name": "Slugma",
    "catchRate": 190,
    "weightKg": 35.0,
    "heightM": 0.7,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 40,
      "defense": 40,
      "specialAttack": 70,
      "specialDefense": 40,
      "speed": 20
    }
  },
  {
    "dexNumber": 219,
    "name": "Magcargo",
    "catchRate": 75,
    "weightKg": 55.0,
    "heightM": 0.8,
    "types": [
      "fire",
      "rock"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 120,
      "specialAttack": 90,
      "specialDefense": 80,
      "speed": 30
    }
  },
  {
    "dexNumber": 220,
    "name": "Swinub",
    "catchRate": 225,
    "weightKg": 6.5,
    "heightM": 0.4,
    "types": [
      "ice",
      "ground"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 50,
      "defense": 40,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 50
    }
  },
  {
    "dexNumber": 221,
    "name": "Piloswine",
    "catchRate": 75,
    "weightKg": 55.8,
    "heightM": 1.1,
    "types": [
      "ice",
      "ground"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 50
    }
  },
  {
    "dexNumber": 222,
    "name": "Corsola",
    "catchRate": 60,
    "weightKg": 5.0,
    "heightM": 0.6,
    "types": [
      "water",
      "rock"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 55,
      "defense": 95,
      "specialAttack": 65,
      "specialDefense": 95,
      "speed": 35
    }
  },
  {
    "dexNumber": 223,
    "name": "Remoraid",
    "catchRate": 190,
    "weightKg": 12.0,
    "heightM": 0.6,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 65,
      "defense": 35,
      "specialAttack": 65,
      "specialDefense": 35,
      "speed": 65
    }
  },
  {
    "dexNumber": 224,
    "name": "Octillery",
    "catchRate": 75,
    "weightKg": 28.5,
    "heightM": 0.9,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 105,
      "defense": 75,
      "specialAttack": 105,
      "specialDefense": 75,
      "speed": 45
    }
  },
  {
    "dexNumber": 225,
    "name": "Delibird",
    "catchRate": 45,
    "weightKg": 16.0,
    "heightM": 0.9,
    "types": [
      "ice",
      "flying"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 55,
      "defense": 45,
      "specialAttack": 65,
      "specialDefense": 45,
      "speed": 75
    }
  },
  {
    "dexNumber": 226,
    "name": "Mantine",
    "catchRate": 25,
    "weightKg": 220.0,
    "heightM": 2.1,
    "types": [
      "water",
      "flying"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 40,
      "defense": 70,
      "specialAttack": 80,
      "specialDefense": 140,
      "speed": 70
    }
  },
  {
    "dexNumber": 227,
    "name": "Skarmory",
    "catchRate": 25,
    "weightKg": 50.5,
    "heightM": 1.7,
    "types": [
      "steel",
      "flying"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 80,
      "defense": 140,
      "specialAttack": 40,
      "specialDefense": 70,
      "speed": 70
    }
  },
  {
    "dexNumber": 228,
    "name": "Houndour",
    "catchRate": 120,
    "weightKg": 10.8,
    "heightM": 0.6,
    "types": [
      "dark",
      "fire"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 60,
      "defense": 30,
      "specialAttack": 80,
      "specialDefense": 50,
      "speed": 65
    }
  },
  {
    "dexNumber": 229,
    "name": "Houndoom",
    "catchRate": 45,
    "weightKg": 35.0,
    "heightM": 1.4,
    "types": [
      "dark",
      "fire"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 90,
      "defense": 50,
      "specialAttack": 110,
      "specialDefense": 80,
      "speed": 95
    }
  },
  {
    "dexNumber": 230,
    "name": "Kingdra",
    "catchRate": 45,
    "weightKg": 152.0,
    "heightM": 1.8,
    "types": [
      "water",
      "dragon"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 95,
      "defense": 95,
      "specialAttack": 95,
      "specialDefense": 95,
      "speed": 85
    }
  },
  {
    "dexNumber": 231,
    "name": "Phanpy",
    "catchRate": 120,
    "weightKg": 33.5,
    "heightM": 0.5,
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 60,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 40
    }
  },
  {
    "dexNumber": 232,
    "name": "Donphan",
    "catchRate": 60,
    "weightKg": 120.0,
    "heightM": 1.1,
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 120,
      "defense": 120,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 50
    }
  },
  {
    "dexNumber": 233,
    "name": "Porygon2",
    "catchRate": 45,
    "weightKg": 32.5,
    "heightM": 0.6,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 80,
      "defense": 90,
      "specialAttack": 105,
      "specialDefense": 95,
      "speed": 60
    }
  },
  {
    "dexNumber": 234,
    "name": "Stantler",
    "catchRate": 45,
    "weightKg": 71.2,
    "heightM": 1.4,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 73,
      "attack": 95,
      "defense": 62,
      "specialAttack": 85,
      "specialDefense": 65,
      "speed": 85
    }
  },
  {
    "dexNumber": 235,
    "name": "Smeargle",
    "catchRate": 45,
    "weightKg": 58.0,
    "heightM": 1.2,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 20,
      "defense": 35,
      "specialAttack": 20,
      "specialDefense": 45,
      "speed": 75
    }
  },
  {
    "dexNumber": 236,
    "name": "Tyrogue",
    "catchRate": 75,
    "weightKg": 21.0,
    "heightM": 0.7,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 35,
      "defense": 35,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 35
    }
  },
  {
    "dexNumber": 237,
    "name": "Hitmontop",
    "catchRate": 45,
    "weightKg": 48.0,
    "heightM": 1.4,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 95,
      "defense": 95,
      "specialAttack": 35,
      "specialDefense": 110,
      "speed": 70
    }
  },
  {
    "dexNumber": 238,
    "name": "Smoochum",
    "catchRate": 45,
    "weightKg": 6.0,
    "heightM": 0.4,
    "types": [
      "ice",
      "psychic"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 30,
      "defense": 15,
      "specialAttack": 85,
      "specialDefense": 65,
      "speed": 65
    }
  },
  {
    "dexNumber": 239,
    "name": "Elekid",
    "catchRate": 45,
    "weightKg": 23.5,
    "heightM": 0.6,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 63,
      "defense": 37,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 95
    }
  },
  {
    "dexNumber": 240,
    "name": "Magby",
    "catchRate": 45,
    "weightKg": 21.4,
    "heightM": 0.7,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 75,
      "defense": 37,
      "specialAttack": 70,
      "specialDefense": 55,
      "speed": 83
    }
  },
  {
    "dexNumber": 241,
    "name": "Miltank",
    "catchRate": 45,
    "weightKg": 75.5,
    "heightM": 1.2,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 80,
      "defense": 105,
      "specialAttack": 40,
      "specialDefense": 70,
      "speed": 100
    }
  },
  {
    "dexNumber": 242,
    "name": "Blissey",
    "catchRate": 30,
    "weightKg": 46.8,
    "heightM": 1.5,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 255,
      "attack": 10,
      "defense": 10,
      "specialAttack": 75,
      "specialDefense": 135,
      "speed": 55
    }
  },
  {
    "dexNumber": 243,
    "name": "Raikou",
    "catchRate": 3,
    "weightKg": 178.0,
    "heightM": 1.9,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 85,
      "defense": 75,
      "specialAttack": 115,
      "specialDefense": 100,
      "speed": 115
    }
  },
  {
    "dexNumber": 244,
    "name": "Entei",
    "catchRate": 3,
    "weightKg": 198.0,
    "heightM": 2.1,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 115,
      "attack": 115,
      "defense": 85,
      "specialAttack": 90,
      "specialDefense": 75,
      "speed": 100
    }
  },
  {
    "dexNumber": 245,
    "name": "Suicune",
    "catchRate": 3,
    "weightKg": 187.0,
    "heightM": 2.0,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 75,
      "defense": 115,
      "specialAttack": 90,
      "specialDefense": 115,
      "speed": 85
    }
  },
  {
    "dexNumber": 246,
    "name": "Larvitar",
    "catchRate": 45,
    "weightKg": 72.0,
    "heightM": 0.6,
    "types": [
      "rock",
      "ground"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 64,
      "defense": 50,
      "specialAttack": 45,
      "specialDefense": 50,
      "speed": 41
    }
  },
  {
    "dexNumber": 247,
    "name": "Pupitar",
    "catchRate": 45,
    "weightKg": 152.0,
    "heightM": 1.2,
    "types": [
      "rock",
      "ground"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 84,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 51
    }
  },
  {
    "dexNumber": 248,
    "name": "Tyranitar",
    "catchRate": 45,
    "weightKg": 202.0,
    "heightM": 2.0,
    "types": [
      "rock",
      "dark"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 134,
      "defense": 110,
      "specialAttack": 95,
      "specialDefense": 100,
      "speed": 61
    }
  },
  {
    "dexNumber": 249,
    "name": "Lugia",
    "catchRate": 3,
    "weightKg": 216.0,
    "heightM": 5.2,
    "types": [
      "psychic",
      "flying"
    ],
    "baseStats": {
      "hp": 106,
      "attack": 90,
      "defense": 130,
      "specialAttack": 90,
      "specialDefense": 154,
      "speed": 110
    }
  },
  {
    "dexNumber": 250,
    "name": "Ho Oh",
    "catchRate": 3,
    "weightKg": 199.0,
    "heightM": 3.8,
    "types": [
      "fire",
      "flying"
    ],
    "baseStats": {
      "hp": 106,
      "attack": 130,
      "defense": 90,
      "specialAttack": 110,
      "specialDefense": 154,
      "speed": 90
    }
  },
  {
    "dexNumber": 251,
    "name": "Celebi",
    "catchRate": 45,
    "weightKg": 5.0,
    "heightM": 0.6,
    "types": [
      "psychic",
      "grass"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100
    }
  },
  {
    "dexNumber": 252,
    "name": "Treecko",
    "catchRate": 45,
    "weightKg": 5.0,
    "heightM": 0.5,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 70
    }
  },
  {
    "dexNumber": 253,
    "name": "Grovyle",
    "catchRate": 45,
    "weightKg": 21.6,
    "heightM": 0.9,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 65,
      "defense": 45,
      "specialAttack": 85,
      "specialDefense": 65,
      "speed": 95
    }
  },
  {
    "dexNumber": 254,
    "name": "Sceptile",
    "catchRate": 45,
    "weightKg": 52.2,
    "heightM": 1.7,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "specialAttack": 105,
      "specialDefense": 85,
      "speed": 120
    }
  },
  {
    "dexNumber": 255,
    "name": "Torchic",
    "catchRate": 45,
    "weightKg": 2.5,
    "heightM": 0.4,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 60,
      "defense": 40,
      "specialAttack": 70,
      "specialDefense": 50,
      "speed": 45
    }
  },
  {
    "dexNumber": 256,
    "name": "Combusken",
    "catchRate": 45,
    "weightKg": 19.5,
    "heightM": 0.9,
    "types": [
      "fire",
      "fighting"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 85,
      "defense": 60,
      "specialAttack": 85,
      "specialDefense": 60,
      "speed": 55
    }
  },
  {
    "dexNumber": 257,
    "name": "Blaziken",
    "catchRate": 45,
    "weightKg": 52.0,
    "heightM": 1.9,
    "types": [
      "fire",
      "fighting"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 120,
      "defense": 70,
      "specialAttack": 110,
      "specialDefense": 70,
      "speed": 80
    }
  },
  {
    "dexNumber": 258,
    "name": "Mudkip",
    "catchRate": 45,
    "weightKg": 7.6,
    "heightM": 0.4,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 70,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 40
    }
  },
  {
    "dexNumber": 259,
    "name": "Marshtomp",
    "catchRate": 45,
    "weightKg": 28.0,
    "heightM": 0.7,
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 50
    }
  },
  {
    "dexNumber": 260,
    "name": "Swampert",
    "catchRate": 45,
    "weightKg": 81.9,
    "heightM": 1.5,
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 110,
      "defense": 90,
      "specialAttack": 85,
      "specialDefense": 90,
      "speed": 60
    }
  },
  {
    "dexNumber": 261,
    "name": "Poochyena",
    "catchRate": 255,
    "weightKg": 13.6,
    "heightM": 0.5,
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 35,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 35
    }
  },
  {
    "dexNumber": 262,
    "name": "Mightyena",
    "catchRate": 127,
    "weightKg": 37.0,
    "heightM": 1.0,
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 90,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 70
    }
  },
  {
    "dexNumber": 263,
    "name": "Zigzagoon",
    "catchRate": 255,
    "weightKg": 17.5,
    "heightM": 0.4,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 38,
      "attack": 30,
      "defense": 41,
      "specialAttack": 30,
      "specialDefense": 41,
      "speed": 60
    }
  },
  {
    "dexNumber": 264,
    "name": "Linoone",
    "catchRate": 90,
    "weightKg": 32.5,
    "heightM": 0.5,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 70,
      "defense": 61,
      "specialAttack": 50,
      "specialDefense": 61,
      "speed": 100
    }
  },
  {
    "dexNumber": 265,
    "name": "Wurmple",
    "catchRate": 255,
    "weightKg": 3.6,
    "heightM": 0.3,
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 45,
      "defense": 35,
      "specialAttack": 20,
      "specialDefense": 30,
      "speed": 20
    }
  },
  {
    "dexNumber": 266,
    "name": "Silcoon",
    "catchRate": 120,
    "weightKg": 10.0,
    "heightM": 0.6,
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 35,
      "defense": 55,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 15
    }
  },
  {
    "dexNumber": 267,
    "name": "Beautifly",
    "catchRate": 45,
    "weightKg": 28.4,
    "heightM": 1.0,
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 70,
      "defense": 50,
      "specialAttack": 100,
      "specialDefense": 50,
      "speed": 65
    }
  },
  {
    "dexNumber": 268,
    "name": "Cascoon",
    "catchRate": 120,
    "weightKg": 11.5,
    "heightM": 0.7,
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 35,
      "defense": 55,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 15
    }
  },
  {
    "dexNumber": 269,
    "name": "Dustox",
    "catchRate": 45,
    "weightKg": 31.6,
    "heightM": 1.2,
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 70,
      "specialAttack": 50,
      "specialDefense": 90,
      "speed": 65
    }
  },
  {
    "dexNumber": 270,
    "name": "Lotad",
    "catchRate": 255,
    "weightKg": 2.6,
    "heightM": 0.5,
    "types": [
      "water",
      "grass"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 30,
      "defense": 30,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 30
    }
  },
  {
    "dexNumber": 271,
    "name": "Lombre",
    "catchRate": 120,
    "weightKg": 32.5,
    "heightM": 1.2,
    "types": [
      "water",
      "grass"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 50,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 50
    }
  },
  {
    "dexNumber": 272,
    "name": "Ludicolo",
    "catchRate": 45,
    "weightKg": 55.0,
    "heightM": 1.5,
    "types": [
      "water",
      "grass"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 70,
      "defense": 70,
      "specialAttack": 90,
      "specialDefense": 100,
      "speed": 70
    }
  },
  {
    "dexNumber": 273,
    "name": "Seedot",
    "catchRate": 255,
    "weightKg": 4.0,
    "heightM": 0.5,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 40,
      "defense": 50,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 30
    }
  },
  {
    "dexNumber": 274,
    "name": "Nuzleaf",
    "catchRate": 120,
    "weightKg": 28.0,
    "heightM": 1.0,
    "types": [
      "grass",
      "dark"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 70,
      "defense": 40,
      "specialAttack": 60,
      "specialDefense": 40,
      "speed": 60
    }
  },
  {
    "dexNumber": 275,
    "name": "Shiftry",
    "catchRate": 45,
    "weightKg": 59.6,
    "heightM": 1.3,
    "types": [
      "grass",
      "dark"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 100,
      "defense": 60,
      "specialAttack": 90,
      "specialDefense": 60,
      "speed": 80
    }
  },
  {
    "dexNumber": 276,
    "name": "Taillow",
    "catchRate": 200,
    "weightKg": 2.3,
    "heightM": 0.3,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 55,
      "defense": 30,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 85
    }
  },
  {
    "dexNumber": 277,
    "name": "Swellow",
    "catchRate": 45,
    "weightKg": 19.8,
    "heightM": 0.7,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 85,
      "defense": 60,
      "specialAttack": 75,
      "specialDefense": 50,
      "speed": 125
    }
  },
  {
    "dexNumber": 278,
    "name": "Wingull",
    "catchRate": 190,
    "weightKg": 9.5,
    "heightM": 0.6,
    "types": [
      "water",
      "flying"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 30,
      "defense": 30,
      "specialAttack": 55,
      "specialDefense": 30,
      "speed": 85
    }
  },
  {
    "dexNumber": 279,
    "name": "Pelipper",
    "catchRate": 45,
    "weightKg": 28.0,
    "heightM": 1.2,
    "types": [
      "water",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 100,
      "specialAttack": 95,
      "specialDefense": 70,
      "speed": 65
    }
  },
  {
    "dexNumber": 280,
    "name": "Ralts",
    "catchRate": 235,
    "weightKg": 6.6,
    "heightM": 0.4,
    "types": [
      "psychic",
      "fairy"
    ],
    "baseStats": {
      "hp": 28,
      "attack": 25,
      "defense": 25,
      "specialAttack": 45,
      "specialDefense": 35,
      "speed": 40
    }
  },
  {
    "dexNumber": 281,
    "name": "Kirlia",
    "catchRate": 120,
    "weightKg": 20.2,
    "heightM": 0.8,
    "types": [
      "psychic",
      "fairy"
    ],
    "baseStats": {
      "hp": 38,
      "attack": 35,
      "defense": 35,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 50
    }
  },
  {
    "dexNumber": 282,
    "name": "Gardevoir",
    "catchRate": 45,
    "weightKg": 48.4,
    "heightM": 1.6,
    "types": [
      "psychic",
      "fairy"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 65,
      "defense": 65,
      "specialAttack": 125,
      "specialDefense": 115,
      "speed": 80
    }
  },
  {
    "dexNumber": 283,
    "name": "Surskit",
    "catchRate": 200,
    "weightKg": 1.7,
    "heightM": 0.5,
    "types": [
      "bug",
      "water"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 30,
      "defense": 32,
      "specialAttack": 50,
      "specialDefense": 52,
      "speed": 65
    }
  },
  {
    "dexNumber": 284,
    "name": "Masquerain",
    "catchRate": 75,
    "weightKg": 3.6,
    "heightM": 0.8,
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 60,
      "defense": 62,
      "specialAttack": 100,
      "specialDefense": 82,
      "speed": 80
    }
  },
  {
    "dexNumber": 285,
    "name": "Shroomish",
    "catchRate": 255,
    "weightKg": 4.5,
    "heightM": 0.4,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 40,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 60,
      "speed": 35
    }
  },
  {
    "dexNumber": 286,
    "name": "Breloom",
    "catchRate": 90,
    "weightKg": 39.2,
    "heightM": 1.2,
    "types": [
      "grass",
      "fighting"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 130,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 70
    }
  },
  {
    "dexNumber": 287,
    "name": "Slakoth",
    "catchRate": 255,
    "weightKg": 24.0,
    "heightM": 0.8,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 30
    }
  },
  {
    "dexNumber": 288,
    "name": "Vigoroth",
    "catchRate": 120,
    "weightKg": 46.5,
    "heightM": 1.4,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 90
    }
  },
  {
    "dexNumber": 289,
    "name": "Slaking",
    "catchRate": 45,
    "weightKg": 130.5,
    "heightM": 2.0,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 150,
      "attack": 160,
      "defense": 100,
      "specialAttack": 95,
      "specialDefense": 65,
      "speed": 100
    }
  },
  {
    "dexNumber": 290,
    "name": "Nincada",
    "catchRate": 255,
    "weightKg": 5.5,
    "heightM": 0.5,
    "types": [
      "bug",
      "ground"
    ],
    "baseStats": {
      "hp": 31,
      "attack": 45,
      "defense": 90,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 40
    }
  },
  {
    "dexNumber": 291,
    "name": "Ninjask",
    "catchRate": 120,
    "weightKg": 12.0,
    "heightM": 0.8,
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 61,
      "attack": 90,
      "defense": 45,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 160
    }
  },
  {
    "dexNumber": 292,
    "name": "Shedinja",
    "catchRate": 45,
    "weightKg": 1.2,
    "heightM": 0.8,
    "types": [
      "bug",
      "ghost"
    ],
    "baseStats": {
      "hp": 1,
      "attack": 90,
      "defense": 45,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 40
    }
  },
  {
    "dexNumber": 293,
    "name": "Whismur",
    "catchRate": 190,
    "weightKg": 16.3,
    "heightM": 0.6,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 64,
      "attack": 51,
      "defense": 23,
      "specialAttack": 51,
      "specialDefense": 23,
      "speed": 28
    }
  },
  {
    "dexNumber": 294,
    "name": "Loudred",
    "catchRate": 120,
    "weightKg": 40.5,
    "heightM": 1.0,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 84,
      "attack": 71,
      "defense": 43,
      "specialAttack": 71,
      "specialDefense": 43,
      "speed": 48
    }
  },
  {
    "dexNumber": 295,
    "name": "Exploud",
    "catchRate": 45,
    "weightKg": 84.0,
    "heightM": 1.5,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 104,
      "attack": 91,
      "defense": 63,
      "specialAttack": 91,
      "specialDefense": 73,
      "speed": 68
    }
  },
  {
    "dexNumber": 296,
    "name": "Makuhita",
    "catchRate": 180,
    "weightKg": 86.4,
    "heightM": 1.0,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 60,
      "defense": 30,
      "specialAttack": 20,
      "specialDefense": 30,
      "speed": 25
    }
  },
  {
    "dexNumber": 297,
    "name": "Hariyama",
    "catchRate": 200,
    "weightKg": 253.8,
    "heightM": 2.3,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 144,
      "attack": 120,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 60,
      "speed": 50
    }
  },
  {
    "dexNumber": 298,
    "name": "Azurill",
    "catchRate": 150,
    "weightKg": 2.0,
    "heightM": 0.2,
    "types": [
      "normal",
      "fairy"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 20,
      "defense": 40,
      "specialAttack": 20,
      "specialDefense": 40,
      "speed": 20
    }
  },
  {
    "dexNumber": 299,
    "name": "Nosepass",
    "catchRate": 255,
    "weightKg": 97.0,
    "heightM": 1.0,
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 45,
      "defense": 135,
      "specialAttack": 45,
      "specialDefense": 90,
      "speed": 30
    }
  },
  {
    "dexNumber": 300,
    "name": "Skitty",
    "catchRate": 255,
    "weightKg": 11.0,
    "heightM": 0.6,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 45,
      "defense": 45,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 50
    }
  },
  {
    "dexNumber": 301,
    "name": "Delcatty",
    "catchRate": 60,
    "weightKg": 32.6,
    "heightM": 1.1,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 65,
      "defense": 65,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 90
    }
  },
  {
    "dexNumber": 302,
    "name": "Sableye",
    "catchRate": 45,
    "weightKg": 11.0,
    "heightM": 0.5,
    "types": [
      "dark",
      "ghost"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 75,
      "defense": 75,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 50
    }
  },
  {
    "dexNumber": 303,
    "name": "Mawile",
    "catchRate": 45,
    "weightKg": 11.5,
    "heightM": 0.6,
    "types": [
      "steel",
      "fairy"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 85,
      "defense": 85,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 50
    }
  },
  {
    "dexNumber": 304,
    "name": "Aron",
    "catchRate": 180,
    "weightKg": 60.0,
    "heightM": 0.4,
    "types": [
      "steel",
      "rock"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 70,
      "defense": 100,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 30
    }
  },
  {
    "dexNumber": 305,
    "name": "Lairon",
    "catchRate": 90,
    "weightKg": 120.0,
    "heightM": 0.9,
    "types": [
      "steel",
      "rock"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 90,
      "defense": 140,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 40
    }
  },
  {
    "dexNumber": 306,
    "name": "Aggron",
    "catchRate": 45,
    "weightKg": 360.0,
    "heightM": 2.1,
    "types": [
      "steel",
      "rock"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 110,
      "defense": 180,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 50
    }
  },
  {
    "dexNumber": 307,
    "name": "Meditite",
    "catchRate": 180,
    "weightKg": 11.2,
    "heightM": 0.6,
    "types": [
      "fighting",
      "psychic"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 40,
      "defense": 55,
      "specialAttack": 40,
      "specialDefense": 55,
      "speed": 60
    }
  },
  {
    "dexNumber": 308,
    "name": "Medicham",
    "catchRate": 90,
    "weightKg": 31.5,
    "heightM": 1.3,
    "types": [
      "fighting",
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 75,
      "specialAttack": 60,
      "specialDefense": 75,
      "speed": 80
    }
  },
  {
    "dexNumber": 309,
    "name": "Electrike",
    "catchRate": 120,
    "weightKg": 15.2,
    "heightM": 0.6,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "specialAttack": 65,
      "specialDefense": 40,
      "speed": 65
    }
  },
  {
    "dexNumber": 310,
    "name": "Manectric",
    "catchRate": 45,
    "weightKg": 40.2,
    "heightM": 1.5,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 75,
      "defense": 60,
      "specialAttack": 105,
      "specialDefense": 60,
      "speed": 105
    }
  },
  {
    "dexNumber": 311,
    "name": "Plusle",
    "catchRate": 200,
    "weightKg": 4.2,
    "heightM": 0.4,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 40,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 95
    }
  },
  {
    "dexNumber": 312,
    "name": "Minun",
    "catchRate": 200,
    "weightKg": 4.2,
    "heightM": 0.4,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 40,
      "defense": 50,
      "specialAttack": 75,
      "specialDefense": 85,
      "speed": 95
    }
  },
  {
    "dexNumber": 313,
    "name": "Volbeat",
    "catchRate": 150,
    "weightKg": 17.7,
    "heightM": 0.7,
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 73,
      "defense": 75,
      "specialAttack": 47,
      "specialDefense": 85,
      "speed": 85
    }
  },
  {
    "dexNumber": 314,
    "name": "Illumise",
    "catchRate": 150,
    "weightKg": 17.7,
    "heightM": 0.6,
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 47,
      "defense": 75,
      "specialAttack": 73,
      "specialDefense": 85,
      "speed": 85
    }
  },
  {
    "dexNumber": 315,
    "name": "Roselia",
    "catchRate": 150,
    "weightKg": 2.0,
    "heightM": 0.3,
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 60,
      "defense": 45,
      "specialAttack": 100,
      "specialDefense": 80,
      "speed": 65
    }
  },
  {
    "dexNumber": 316,
    "name": "Gulpin",
    "catchRate": 225,
    "weightKg": 10.3,
    "heightM": 0.4,
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 43,
      "defense": 53,
      "specialAttack": 43,
      "specialDefense": 53,
      "speed": 40
    }
  },
  {
    "dexNumber": 317,
    "name": "Swalot",
    "catchRate": 75,
    "weightKg": 80.0,
    "heightM": 1.7,
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 73,
      "defense": 83,
      "specialAttack": 73,
      "specialDefense": 83,
      "speed": 55
    }
  },
  {
    "dexNumber": 318,
    "name": "Carvanha",
    "catchRate": 225,
    "weightKg": 20.8,
    "heightM": 0.8,
    "types": [
      "water",
      "dark"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 90,
      "defense": 20,
      "specialAttack": 65,
      "specialDefense": 20,
      "speed": 65
    }
  },
  {
    "dexNumber": 319,
    "name": "Sharpedo",
    "catchRate": 60,
    "weightKg": 88.8,
    "heightM": 1.8,
    "types": [
      "water",
      "dark"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 120,
      "defense": 40,
      "specialAttack": 95,
      "specialDefense": 40,
      "speed": 95
    }
  },
  {
    "dexNumber": 320,
    "name": "Wailmer",
    "catchRate": 125,
    "weightKg": 130.0,
    "heightM": 2.0,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 130,
      "attack": 70,
      "defense": 35,
      "specialAttack": 70,
      "specialDefense": 35,
      "speed": 60
    }
  },
  {
    "dexNumber": 321,
    "name": "Wailord",
    "catchRate": 60,
    "weightKg": 398.0,
    "heightM": 14.5,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 170,
      "attack": 90,
      "defense": 45,
      "specialAttack": 90,
      "specialDefense": 45,
      "speed": 60
    }
  },
  {
    "dexNumber": 322,
    "name": "Numel",
    "catchRate": 255,
    "weightKg": 24.0,
    "heightM": 0.7,
    "types": [
      "fire",
      "ground"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 40,
      "specialAttack": 65,
      "specialDefense": 45,
      "speed": 35
    }
  },
  {
    "dexNumber": 323,
    "name": "Camerupt",
    "catchRate": 150,
    "weightKg": 220.0,
    "heightM": 1.9,
    "types": [
      "fire",
      "ground"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 100,
      "defense": 70,
      "specialAttack": 105,
      "specialDefense": 75,
      "speed": 40
    }
  },
  {
    "dexNumber": 324,
    "name": "Torkoal",
    "catchRate": 90,
    "weightKg": 80.4,
    "heightM": 0.5,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 140,
      "specialAttack": 85,
      "specialDefense": 70,
      "speed": 20
    }
  },
  {
    "dexNumber": 325,
    "name": "Spoink",
    "catchRate": 255,
    "weightKg": 30.6,
    "heightM": 0.7,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 25,
      "defense": 35,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 60
    }
  },
  {
    "dexNumber": 326,
    "name": "Grumpig",
    "catchRate": 60,
    "weightKg": 71.5,
    "heightM": 0.9,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 45,
      "defense": 65,
      "specialAttack": 90,
      "specialDefense": 110,
      "speed": 80
    }
  },
  {
    "dexNumber": 327,
    "name": "Spinda",
    "catchRate": 255,
    "weightKg": 5.0,
    "heightM": 1.1,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 60
    }
  },
  {
    "dexNumber": 328,
    "name": "Trapinch",
    "catchRate": 255,
    "weightKg": 15.0,
    "heightM": 0.7,
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 100,
      "defense": 45,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 10
    }
  },
  {
    "dexNumber": 329,
    "name": "Vibrava",
    "catchRate": 120,
    "weightKg": 15.3,
    "heightM": 1.1,
    "types": [
      "ground",
      "dragon"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 70,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 70
    }
  },
  {
    "dexNumber": 330,
    "name": "Flygon",
    "catchRate": 45,
    "weightKg": 82.0,
    "heightM": 2.0,
    "types": [
      "ground",
      "dragon"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 100,
      "defense": 80,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 100
    }
  },
  {
    "dexNumber": 331,
    "name": "Cacnea",
    "catchRate": 190,
    "weightKg": 51.3,
    "heightM": 0.4,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 85,
      "defense": 40,
      "specialAttack": 85,
      "specialDefense": 40,
      "speed": 35
    }
  },
  {
    "dexNumber": 332,
    "name": "Cacturne",
    "catchRate": 60,
    "weightKg": 77.4,
    "heightM": 1.3,
    "types": [
      "grass",
      "dark"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 115,
      "defense": 60,
      "specialAttack": 115,
      "specialDefense": 60,
      "speed": 55
    }
  },
  {
    "dexNumber": 333,
    "name": "Swablu",
    "catchRate": 255,
    "weightKg": 1.2,
    "heightM": 0.4,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 40,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 75,
      "speed": 50
    }
  },
  {
    "dexNumber": 334,
    "name": "Altaria",
    "catchRate": 45,
    "weightKg": 20.6,
    "heightM": 1.1,
    "types": [
      "dragon",
      "flying"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 70,
      "defense": 90,
      "specialAttack": 70,
      "specialDefense": 105,
      "speed": 80
    }
  },
  {
    "dexNumber": 335,
    "name": "Zangoose",
    "catchRate": 90,
    "weightKg": 40.3,
    "heightM": 1.3,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 73,
      "attack": 115,
      "defense": 60,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 90
    }
  },
  {
    "dexNumber": 336,
    "name": "Seviper",
    "catchRate": 90,
    "weightKg": 52.5,
    "heightM": 2.7,
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 73,
      "attack": 100,
      "defense": 60,
      "specialAttack": 100,
      "specialDefense": 60,
      "speed": 65
    }
  },
  {
    "dexNumber": 337,
    "name": "Lunatone",
    "catchRate": 45,
    "weightKg": 168.0,
    "heightM": 1.0,
    "types": [
      "rock",
      "psychic"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 55,
      "defense": 65,
      "specialAttack": 95,
      "specialDefense": 85,
      "speed": 70
    }
  },
  {
    "dexNumber": 338,
    "name": "Solrock",
    "catchRate": 45,
    "weightKg": 154.0,
    "heightM": 1.2,
    "types": [
      "rock",
      "psychic"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 95,
      "defense": 85,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 70
    }
  },
  {
    "dexNumber": 339,
    "name": "Barboach",
    "catchRate": 190,
    "weightKg": 1.9,
    "heightM": 0.4,
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 48,
      "defense": 43,
      "specialAttack": 46,
      "specialDefense": 41,
      "speed": 60
    }
  },
  {
    "dexNumber": 340,
    "name": "Whiscash",
    "catchRate": 75,
    "weightKg": 23.6,
    "heightM": 0.9,
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 78,
      "defense": 73,
      "specialAttack": 76,
      "specialDefense": 71,
      "speed": 60
    }
  },
  {
    "dexNumber": 341,
    "name": "Corphish",
    "catchRate": 205,
    "weightKg": 11.5,
    "heightM": 0.6,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 43,
      "attack": 80,
      "defense": 65,
      "specialAttack": 50,
      "specialDefense": 35,
      "speed": 35
    }
  },
  {
    "dexNumber": 342,
    "name": "Crawdaunt",
    "catchRate": 155,
    "weightKg": 32.8,
    "heightM": 1.1,
    "types": [
      "water",
      "dark"
    ],
    "baseStats": {
      "hp": 63,
      "attack": 120,
      "defense": 85,
      "specialAttack": 90,
      "specialDefense": 55,
      "speed": 55
    }
  },
  {
    "dexNumber": 343,
    "name": "Baltoy",
    "catchRate": 255,
    "weightKg": 21.5,
    "heightM": 0.5,
    "types": [
      "ground",
      "psychic"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 40,
      "defense": 55,
      "specialAttack": 40,
      "specialDefense": 70,
      "speed": 55
    }
  },
  {
    "dexNumber": 344,
    "name": "Claydol",
    "catchRate": 90,
    "weightKg": 108.0,
    "heightM": 1.5,
    "types": [
      "ground",
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 70,
      "defense": 105,
      "specialAttack": 70,
      "specialDefense": 120,
      "speed": 75
    }
  },
  {
    "dexNumber": 345,
    "name": "Lileep",
    "catchRate": 45,
    "weightKg": 23.8,
    "heightM": 1.0,
    "types": [
      "rock",
      "grass"
    ],
    "baseStats": {
      "hp": 66,
      "attack": 41,
      "defense": 77,
      "specialAttack": 61,
      "specialDefense": 87,
      "speed": 23
    }
  },
  {
    "dexNumber": 346,
    "name": "Cradily",
    "catchRate": 45,
    "weightKg": 60.4,
    "heightM": 1.5,
    "types": [
      "rock",
      "grass"
    ],
    "baseStats": {
      "hp": 86,
      "attack": 81,
      "defense": 97,
      "specialAttack": 81,
      "specialDefense": 107,
      "speed": 43
    }
  },
  {
    "dexNumber": 347,
    "name": "Anorith",
    "catchRate": 45,
    "weightKg": 12.5,
    "heightM": 0.7,
    "types": [
      "rock",
      "bug"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 95,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 75
    }
  },
  {
    "dexNumber": 348,
    "name": "Armaldo",
    "catchRate": 45,
    "weightKg": 68.2,
    "heightM": 1.5,
    "types": [
      "rock",
      "bug"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 125,
      "defense": 100,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 45
    }
  },
  {
    "dexNumber": 349,
    "name": "Feebas",
    "catchRate": 255,
    "weightKg": 7.4,
    "heightM": 0.6,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 20,
      "attack": 15,
      "defense": 20,
      "specialAttack": 10,
      "specialDefense": 55,
      "speed": 80
    }
  },
  {
    "dexNumber": 350,
    "name": "Milotic",
    "catchRate": 60,
    "weightKg": 162.0,
    "heightM": 6.2,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 60,
      "defense": 79,
      "specialAttack": 100,
      "specialDefense": 125,
      "speed": 81
    }
  },
  {
    "dexNumber": 351,
    "name": "Castform",
    "catchRate": 45,
    "weightKg": 0.8,
    "heightM": 0.3,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 70,
      "defense": 70,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 70
    }
  },
  {
    "dexNumber": 352,
    "name": "Kecleon",
    "catchRate": 200,
    "weightKg": 22.0,
    "heightM": 1.0,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 90,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 120,
      "speed": 40
    }
  },
  {
    "dexNumber": 353,
    "name": "Shuppet",
    "catchRate": 225,
    "weightKg": 2.3,
    "heightM": 0.6,
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 44,
      "attack": 75,
      "defense": 35,
      "specialAttack": 63,
      "specialDefense": 33,
      "speed": 45
    }
  },
  {
    "dexNumber": 354,
    "name": "Banette",
    "catchRate": 45,
    "weightKg": 12.5,
    "heightM": 1.1,
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 64,
      "attack": 115,
      "defense": 65,
      "specialAttack": 83,
      "specialDefense": 63,
      "speed": 65
    }
  },
  {
    "dexNumber": 355,
    "name": "Duskull",
    "catchRate": 190,
    "weightKg": 15.0,
    "heightM": 0.8,
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 20,
      "attack": 40,
      "defense": 90,
      "specialAttack": 30,
      "specialDefense": 90,
      "speed": 25
    }
  },
  {
    "dexNumber": 356,
    "name": "Dusclops",
    "catchRate": 90,
    "weightKg": 30.6,
    "heightM": 1.6,
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 70,
      "defense": 130,
      "specialAttack": 60,
      "specialDefense": 130,
      "speed": 25
    }
  },
  {
    "dexNumber": 357,
    "name": "Tropius",
    "catchRate": 200,
    "weightKg": 100.0,
    "heightM": 2.0,
    "types": [
      "grass",
      "flying"
    ],
    "baseStats": {
      "hp": 99,
      "attack": 68,
      "defense": 83,
      "specialAttack": 72,
      "specialDefense": 87,
      "speed": 51
    }
  },
  {
    "dexNumber": 358,
    "name": "Chimecho",
    "catchRate": 45,
    "weightKg": 1.0,
    "heightM": 0.6,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 50,
      "defense": 80,
      "specialAttack": 95,
      "specialDefense": 90,
      "speed": 65
    }
  },
  {
    "dexNumber": 359,
    "name": "Absol",
    "catchRate": 30,
    "weightKg": 47.0,
    "heightM": 1.2,
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "specialAttack": 75,
      "specialDefense": 60,
      "speed": 75
    }
  },
  {
    "dexNumber": 360,
    "name": "Wynaut",
    "catchRate": 125,
    "weightKg": 14.0,
    "heightM": 0.6,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 23,
      "defense": 48,
      "specialAttack": 23,
      "specialDefense": 48,
      "speed": 23
    }
  },
  {
    "dexNumber": 361,
    "name": "Snorunt",
    "catchRate": 190,
    "weightKg": 16.8,
    "heightM": 0.7,
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 50,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 50
    }
  },
  {
    "dexNumber": 362,
    "name": "Glalie",
    "catchRate": 75,
    "weightKg": 256.5,
    "heightM": 1.5,
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 80
    }
  },
  {
    "dexNumber": 363,
    "name": "Spheal",
    "catchRate": 255,
    "weightKg": 39.5,
    "heightM": 0.8,
    "types": [
      "ice",
      "water"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 40,
      "defense": 50,
      "specialAttack": 55,
      "specialDefense": 50,
      "speed": 25
    }
  },
  {
    "dexNumber": 364,
    "name": "Sealeo",
    "catchRate": 120,
    "weightKg": 87.6,
    "heightM": 1.1,
    "types": [
      "ice",
      "water"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 60,
      "defense": 70,
      "specialAttack": 75,
      "specialDefense": 70,
      "speed": 45
    }
  },
  {
    "dexNumber": 365,
    "name": "Walrein",
    "catchRate": 45,
    "weightKg": 150.6,
    "heightM": 1.4,
    "types": [
      "ice",
      "water"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 80,
      "defense": 90,
      "specialAttack": 95,
      "specialDefense": 90,
      "speed": 65
    }
  },
  {
    "dexNumber": 366,
    "name": "Clamperl",
    "catchRate": 255,
    "weightKg": 52.5,
    "heightM": 0.4,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 64,
      "defense": 85,
      "specialAttack": 74,
      "specialDefense": 55,
      "speed": 32
    }
  },
  {
    "dexNumber": 367,
    "name": "Huntail",
    "catchRate": 60,
    "weightKg": 27.0,
    "heightM": 1.7,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 104,
      "defense": 105,
      "specialAttack": 94,
      "specialDefense": 75,
      "speed": 52
    }
  },
  {
    "dexNumber": 368,
    "name": "Gorebyss",
    "catchRate": 60,
    "weightKg": 22.6,
    "heightM": 1.8,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 84,
      "defense": 105,
      "specialAttack": 114,
      "specialDefense": 75,
      "speed": 52
    }
  },
  {
    "dexNumber": 369,
    "name": "Relicanth",
    "catchRate": 25,
    "weightKg": 23.4,
    "heightM": 1.0,
    "types": [
      "water",
      "rock"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 90,
      "defense": 130,
      "specialAttack": 45,
      "specialDefense": 65,
      "speed": 55
    }
  },
  {
    "dexNumber": 370,
    "name": "Luvdisc",
    "catchRate": 225,
    "weightKg": 8.7,
    "heightM": 0.6,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 43,
      "attack": 30,
      "defense": 55,
      "specialAttack": 40,
      "specialDefense": 65,
      "speed": 97
    }
  },
  {
    "dexNumber": 371,
    "name": "Bagon",
    "catchRate": 45,
    "weightKg": 42.1,
    "heightM": 0.6,
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 75,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 30,
      "speed": 50
    }
  },
  {
    "dexNumber": 372,
    "name": "Shelgon",
    "catchRate": 45,
    "weightKg": 110.5,
    "heightM": 1.1,
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 95,
      "defense": 100,
      "specialAttack": 60,
      "specialDefense": 50,
      "speed": 50
    }
  },
  {
    "dexNumber": 373,
    "name": "Salamence",
    "catchRate": 45,
    "weightKg": 102.6,
    "heightM": 1.5,
    "types": [
      "dragon",
      "flying"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 135,
      "defense": 80,
      "specialAttack": 110,
      "specialDefense": 80,
      "speed": 100
    }
  },
  {
    "dexNumber": 374,
    "name": "Beldum",
    "catchRate": 3,
    "weightKg": 95.2,
    "heightM": 0.6,
    "types": [
      "steel",
      "psychic"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 55,
      "defense": 80,
      "specialAttack": 35,
      "specialDefense": 60,
      "speed": 30
    }
  },
  {
    "dexNumber": 375,
    "name": "Metang",
    "catchRate": 3,
    "weightKg": 202.5,
    "heightM": 1.2,
    "types": [
      "steel",
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 75,
      "defense": 100,
      "specialAttack": 55,
      "specialDefense": 80,
      "speed": 50
    }
  },
  {
    "dexNumber": 376,
    "name": "Metagross",
    "catchRate": 3,
    "weightKg": 550.0,
    "heightM": 1.6,
    "types": [
      "steel",
      "psychic"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 135,
      "defense": 130,
      "specialAttack": 95,
      "specialDefense": 90,
      "speed": 70
    }
  },
  {
    "dexNumber": 377,
    "name": "Regirock",
    "catchRate": 3,
    "weightKg": 230.0,
    "heightM": 1.7,
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 100,
      "defense": 200,
      "specialAttack": 50,
      "specialDefense": 100,
      "speed": 50
    }
  },
  {
    "dexNumber": 378,
    "name": "Regice",
    "catchRate": 3,
    "weightKg": 175.0,
    "heightM": 1.8,
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 50,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 200,
      "speed": 50
    }
  },
  {
    "dexNumber": 379,
    "name": "Registeel",
    "catchRate": 3,
    "weightKg": 205.0,
    "heightM": 1.9,
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 75,
      "defense": 150,
      "specialAttack": 75,
      "specialDefense": 150,
      "speed": 50
    }
  },
  {
    "dexNumber": 380,
    "name": "Latias",
    "catchRate": 3,
    "weightKg": 40.0,
    "heightM": 1.4,
    "types": [
      "dragon",
      "psychic"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 80,
      "defense": 90,
      "specialAttack": 110,
      "specialDefense": 130,
      "speed": 110
    }
  },
  {
    "dexNumber": 381,
    "name": "Latios",
    "catchRate": 3,
    "weightKg": 60.0,
    "heightM": 2.0,
    "types": [
      "dragon",
      "psychic"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 90,
      "defense": 80,
      "specialAttack": 130,
      "specialDefense": 110,
      "speed": 110
    }
  },
  {
    "dexNumber": 382,
    "name": "Kyogre",
    "catchRate": 3,
    "weightKg": 352.0,
    "heightM": 4.5,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 90,
      "specialAttack": 150,
      "specialDefense": 140,
      "speed": 90
    }
  },
  {
    "dexNumber": 383,
    "name": "Groudon",
    "catchRate": 3,
    "weightKg": 950.0,
    "heightM": 3.5,
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 150,
      "defense": 140,
      "specialAttack": 100,
      "specialDefense": 90,
      "speed": 90
    }
  },
  {
    "dexNumber": 384,
    "name": "Rayquaza",
    "catchRate": 45,
    "weightKg": 206.5,
    "heightM": 7.0,
    "types": [
      "dragon",
      "flying"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 150,
      "defense": 90,
      "specialAttack": 150,
      "specialDefense": 90,
      "speed": 95
    }
  },
  {
    "dexNumber": 385,
    "name": "Jirachi",
    "catchRate": 3,
    "weightKg": 1.1,
    "heightM": 0.3,
    "types": [
      "steel",
      "psychic"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100
    }
  },
  {
    "dexNumber": 386,
    "name": "Deoxys",
    "catchRate": 3,
    "weightKg": 60.8,
    "heightM": 1.7,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 150,
      "defense": 50,
      "specialAttack": 150,
      "specialDefense": 50,
      "speed": 150
    }
  },
  {
    "dexNumber": 387,
    "name": "Turtwig",
    "catchRate": 45,
    "weightKg": 10.2,
    "heightM": 0.4,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 68,
      "defense": 64,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 31
    }
  },
  {
    "dexNumber": 388,
    "name": "Grotle",
    "catchRate": 45,
    "weightKg": 97.0,
    "heightM": 1.1,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 89,
      "defense": 85,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 36
    }
  },
  {
    "dexNumber": 389,
    "name": "Torterra",
    "catchRate": 45,
    "weightKg": 310.0,
    "heightM": 2.2,
    "types": [
      "grass",
      "ground"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 109,
      "defense": 105,
      "specialAttack": 75,
      "specialDefense": 85,
      "speed": 56
    }
  },
  {
    "dexNumber": 390,
    "name": "Chimchar",
    "catchRate": 45,
    "weightKg": 6.2,
    "heightM": 0.5,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 44,
      "attack": 58,
      "defense": 44,
      "specialAttack": 58,
      "specialDefense": 44,
      "speed": 61
    }
  },
  {
    "dexNumber": 391,
    "name": "Monferno",
    "catchRate": 45,
    "weightKg": 22.0,
    "heightM": 0.9,
    "types": [
      "fire",
      "fighting"
    ],
    "baseStats": {
      "hp": 64,
      "attack": 78,
      "defense": 52,
      "specialAttack": 78,
      "specialDefense": 52,
      "speed": 81
    }
  },
  {
    "dexNumber": 392,
    "name": "Infernape",
    "catchRate": 45,
    "weightKg": 55.0,
    "heightM": 1.2,
    "types": [
      "fire",
      "fighting"
    ],
    "baseStats": {
      "hp": 76,
      "attack": 104,
      "defense": 71,
      "specialAttack": 104,
      "specialDefense": 71,
      "speed": 108
    }
  },
  {
    "dexNumber": 393,
    "name": "Piplup",
    "catchRate": 45,
    "weightKg": 5.2,
    "heightM": 0.4,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 53,
      "attack": 51,
      "defense": 53,
      "specialAttack": 61,
      "specialDefense": 56,
      "speed": 40
    }
  },
  {
    "dexNumber": 394,
    "name": "Prinplup",
    "catchRate": 45,
    "weightKg": 23.0,
    "heightM": 0.8,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 64,
      "attack": 66,
      "defense": 68,
      "specialAttack": 81,
      "specialDefense": 76,
      "speed": 50
    }
  },
  {
    "dexNumber": 395,
    "name": "Empoleon",
    "catchRate": 45,
    "weightKg": 84.5,
    "heightM": 1.7,
    "types": [
      "water",
      "steel"
    ],
    "baseStats": {
      "hp": 84,
      "attack": 86,
      "defense": 88,
      "specialAttack": 111,
      "specialDefense": 101,
      "speed": 60
    }
  },
  {
    "dexNumber": 396,
    "name": "Starly",
    "catchRate": 255,
    "weightKg": 2.0,
    "heightM": 0.3,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 55,
      "defense": 30,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 60
    }
  },
  {
    "dexNumber": 397,
    "name": "Staravia",
    "catchRate": 120,
    "weightKg": 15.5,
    "heightM": 0.6,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 75,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 80
    }
  },
  {
    "dexNumber": 398,
    "name": "Staraptor",
    "catchRate": 45,
    "weightKg": 24.9,
    "heightM": 1.2,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 120,
      "defense": 70,
      "specialAttack": 50,
      "specialDefense": 60,
      "speed": 100
    }
  },
  {
    "dexNumber": 399,
    "name": "Bidoof",
    "catchRate": 255,
    "weightKg": 20.0,
    "heightM": 0.5,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 59,
      "attack": 45,
      "defense": 40,
      "specialAttack": 35,
      "specialDefense": 40,
      "speed": 31
    }
  },
  {
    "dexNumber": 400,
    "name": "Bibarel",
    "catchRate": 127,
    "weightKg": 31.5,
    "heightM": 1.0,
    "types": [
      "normal",
      "water"
    ],
    "baseStats": {
      "hp": 79,
      "attack": 85,
      "defense": 60,
      "specialAttack": 55,
      "specialDefense": 60,
      "speed": 71
    }
  },
  {
    "dexNumber": 401,
    "name": "Kricketot",
    "catchRate": 255,
    "weightKg": 2.2,
    "heightM": 0.3,
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 37,
      "attack": 25,
      "defense": 41,
      "specialAttack": 25,
      "specialDefense": 41,
      "speed": 25
    }
  },
  {
    "dexNumber": 402,
    "name": "Kricketune",
    "catchRate": 45,
    "weightKg": 25.5,
    "heightM": 1.0,
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 77,
      "attack": 85,
      "defense": 51,
      "specialAttack": 55,
      "specialDefense": 51,
      "speed": 65
    }
  },
  {
    "dexNumber": 403,
    "name": "Shinx",
    "catchRate": 235,
    "weightKg": 9.5,
    "heightM": 0.5,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 65,
      "defense": 34,
      "specialAttack": 40,
      "specialDefense": 34,
      "speed": 45
    }
  },
  {
    "dexNumber": 404,
    "name": "Luxio",
    "catchRate": 120,
    "weightKg": 30.5,
    "heightM": 0.9,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 85,
      "defense": 49,
      "specialAttack": 60,
      "specialDefense": 49,
      "speed": 60
    }
  },
  {
    "dexNumber": 405,
    "name": "Luxray",
    "catchRate": 45,
    "weightKg": 42.0,
    "heightM": 1.4,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 120,
      "defense": 79,
      "specialAttack": 95,
      "specialDefense": 79,
      "speed": 70
    }
  },
  {
    "dexNumber": 406,
    "name": "Budew",
    "catchRate": 255,
    "weightKg": 1.2,
    "heightM": 0.2,
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 30,
      "defense": 35,
      "specialAttack": 50,
      "specialDefense": 70,
      "speed": 55
    }
  },
  {
    "dexNumber": 407,
    "name": "Roserade",
    "catchRate": 75,
    "weightKg": 14.5,
    "heightM": 0.9,
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 70,
      "defense": 65,
      "specialAttack": 125,
      "specialDefense": 105,
      "speed": 90
    }
  },
  {
    "dexNumber": 408,
    "name": "Cranidos",
    "catchRate": 45,
    "weightKg": 31.5,
    "heightM": 0.9,
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 67,
      "attack": 125,
      "defense": 40,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 58
    }
  },
  {
    "dexNumber": 409,
    "name": "Rampardos",
    "catchRate": 45,
    "weightKg": 102.5,
    "heightM": 1.6,
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 97,
      "attack": 165,
      "defense": 60,
      "specialAttack": 65,
      "specialDefense": 50,
      "speed": 58
    }
  },
  {
    "dexNumber": 410,
    "name": "Shieldon",
    "catchRate": 45,
    "weightKg": 57.0,
    "heightM": 0.5,
    "types": [
      "rock",
      "steel"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 42,
      "defense": 118,
      "specialAttack": 42,
      "specialDefense": 88,
      "speed": 30
    }
  },
  {
    "dexNumber": 411,
    "name": "Bastiodon",
    "catchRate": 45,
    "weightKg": 149.5,
    "heightM": 1.3,
    "types": [
      "rock",
      "steel"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 52,
      "defense": 168,
      "specialAttack": 47,
      "specialDefense": 138,
      "speed": 30
    }
  },
  {
    "dexNumber": 412,
    "name": "Burmy",
    "catchRate": 120,
    "weightKg": 3.4,
    "heightM": 0.2,
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 29,
      "defense": 45,
      "specialAttack": 29,
      "specialDefense": 45,
      "speed": 36
    }
  },
  {
    "dexNumber": 413,
    "name": "Wormadam",
    "catchRate": 45,
    "weightKg": 6.5,
    "heightM": 0.5,
    "types": [
      "bug",
      "grass"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 59,
      "defense": 85,
      "specialAttack": 79,
      "specialDefense": 105,
      "speed": 36
    }
  },
  {
    "dexNumber": 414,
    "name": "Mothim",
    "catchRate": 45,
    "weightKg": 23.3,
    "heightM": 0.9,
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 94,
      "defense": 50,
      "specialAttack": 94,
      "specialDefense": 50,
      "speed": 66
    }
  },
  {
    "dexNumber": 415,
    "name": "Combee",
    "catchRate": 120,
    "weightKg": 5.5,
    "heightM": 0.3,
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 30,
      "defense": 42,
      "specialAttack": 30,
      "specialDefense": 42,
      "speed": 70
    }
  },
  {
    "dexNumber": 416,
    "name": "Vespiquen",
    "catchRate": 45,
    "weightKg": 38.5,
    "heightM": 1.2,
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 80,
      "defense": 102,
      "specialAttack": 80,
      "specialDefense": 102,
      "speed": 40
    }
  },
  {
    "dexNumber": 417,
    "name": "Pachirisu",
    "catchRate": 200,
    "weightKg": 3.9,
    "heightM": 0.4,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 45,
      "defense": 70,
      "specialAttack": 45,
      "specialDefense": 90,
      "speed": 95
    }
  },
  {
    "dexNumber": 418,
    "name": "Buizel",
    "catchRate": 190,
    "weightKg": 29.5,
    "heightM": 0.7,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 65,
      "defense": 35,
      "specialAttack": 60,
      "specialDefense": 30,
      "speed": 85
    }
  },
  {
    "dexNumber": 419,
    "name": "Floatzel",
    "catchRate": 75,
    "weightKg": 33.5,
    "heightM": 1.1,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 105,
      "defense": 55,
      "specialAttack": 85,
      "specialDefense": 50,
      "speed": 115
    }
  },
  {
    "dexNumber": 420,
    "name": "Cherubi",
    "catchRate": 190,
    "weightKg": 3.3,
    "heightM": 0.4,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 35,
      "defense": 45,
      "specialAttack": 62,
      "specialDefense": 53,
      "speed": 35
    }
  },
  {
    "dexNumber": 421,
    "name": "Cherrim",
    "catchRate": 75,
    "weightKg": 9.3,
    "heightM": 0.5,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 60,
      "defense": 70,
      "specialAttack": 87,
      "specialDefense": 78,
      "speed": 85
    }
  },
  {
    "dexNumber": 422,
    "name": "Shellos",
    "catchRate": 190,
    "weightKg": 6.3,
    "heightM": 0.3,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 76,
      "attack": 48,
      "defense": 48,
      "specialAttack": 57,
      "specialDefense": 62,
      "speed": 34
    }
  },
  {
    "dexNumber": 423,
    "name": "Gastrodon",
    "catchRate": 75,
    "weightKg": 29.9,
    "heightM": 0.9,
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 111,
      "attack": 83,
      "defense": 68,
      "specialAttack": 92,
      "specialDefense": 82,
      "speed": 39
    }
  },
  {
    "dexNumber": 424,
    "name": "Ambipom",
    "catchRate": 45,
    "weightKg": 20.3,
    "heightM": 1.2,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 100,
      "defense": 66,
      "specialAttack": 60,
      "specialDefense": 66,
      "speed": 115
    }
  },
  {
    "dexNumber": 425,
    "name": "Drifloon",
    "catchRate": 125,
    "weightKg": 1.2,
    "heightM": 0.4,
    "types": [
      "ghost",
      "flying"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 50,
      "defense": 34,
      "specialAttack": 60,
      "specialDefense": 44,
      "speed": 70
    }
  },
  {
    "dexNumber": 426,
    "name": "Drifblim",
    "catchRate": 60,
    "weightKg": 15.0,
    "heightM": 1.2,
    "types": [
      "ghost",
      "flying"
    ],
    "baseStats": {
      "hp": 150,
      "attack": 80,
      "defense": 44,
      "specialAttack": 90,
      "specialDefense": 54,
      "speed": 80
    }
  },
  {
    "dexNumber": 427,
    "name": "Buneary",
    "catchRate": 190,
    "weightKg": 5.5,
    "heightM": 0.4,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 66,
      "defense": 44,
      "specialAttack": 44,
      "specialDefense": 56,
      "speed": 85
    }
  },
  {
    "dexNumber": 428,
    "name": "Lopunny",
    "catchRate": 60,
    "weightKg": 33.3,
    "heightM": 1.2,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 76,
      "defense": 84,
      "specialAttack": 54,
      "specialDefense": 96,
      "speed": 105
    }
  },
  {
    "dexNumber": 429,
    "name": "Mismagius",
    "catchRate": 45,
    "weightKg": 4.4,
    "heightM": 0.9,
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "specialAttack": 105,
      "specialDefense": 105,
      "speed": 105
    }
  },
  {
    "dexNumber": 430,
    "name": "Honchkrow",
    "catchRate": 30,
    "weightKg": 27.3,
    "heightM": 0.9,
    "types": [
      "dark",
      "flying"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 125,
      "defense": 52,
      "specialAttack": 105,
      "specialDefense": 52,
      "speed": 71
    }
  },
  {
    "dexNumber": 431,
    "name": "Glameow",
    "catchRate": 190,
    "weightKg": 3.9,
    "heightM": 0.5,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 49,
      "attack": 55,
      "defense": 42,
      "specialAttack": 42,
      "specialDefense": 37,
      "speed": 85
    }
  },
  {
    "dexNumber": 432,
    "name": "Purugly",
    "catchRate": 75,
    "weightKg": 43.8,
    "heightM": 1.0,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 71,
      "attack": 82,
      "defense": 64,
      "specialAttack": 64,
      "specialDefense": 59,
      "speed": 112
    }
  },
  {
    "dexNumber": 433,
    "name": "Chingling",
    "catchRate": 120,
    "weightKg": 0.6,
    "heightM": 0.2,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 30,
      "defense": 50,
      "specialAttack": 65,
      "specialDefense": 50,
      "speed": 45
    }
  },
  {
    "dexNumber": 434,
    "name": "Stunky",
    "catchRate": 225,
    "weightKg": 19.2,
    "heightM": 0.4,
    "types": [
      "poison",
      "dark"
    ],
    "baseStats": {
      "hp": 63,
      "attack": 63,
      "defense": 47,
      "specialAttack": 41,
      "specialDefense": 41,
      "speed": 74
    }
  },
  {
    "dexNumber": 435,
    "name": "Skuntank",
    "catchRate": 60,
    "weightKg": 38.0,
    "heightM": 1.0,
    "types": [
      "poison",
      "dark"
    ],
    "baseStats": {
      "hp": 103,
      "attack": 93,
      "defense": 67,
      "specialAttack": 71,
      "specialDefense": 61,
      "speed": 84
    }
  },
  {
    "dexNumber": 436,
    "name": "Bronzor",
    "catchRate": 255,
    "weightKg": 60.5,
    "heightM": 0.5,
    "types": [
      "steel",
      "psychic"
    ],
    "baseStats": {
      "hp": 57,
      "attack": 24,
      "defense": 86,
      "specialAttack": 24,
      "specialDefense": 86,
      "speed": 23
    }
  },
  {
    "dexNumber": 437,
    "name": "Bronzong",
    "catchRate": 90,
    "weightKg": 187.0,
    "heightM": 1.3,
    "types": [
      "steel",
      "psychic"
    ],
    "baseStats": {
      "hp": 67,
      "attack": 89,
      "defense": 116,
      "specialAttack": 79,
      "specialDefense": 116,
      "speed": 33
    }
  },
  {
    "dexNumber": 438,
    "name": "Bonsly",
    "catchRate": 255,
    "weightKg": 15.0,
    "heightM": 0.5,
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 80,
      "defense": 95,
      "specialAttack": 10,
      "specialDefense": 45,
      "speed": 10
    }
  },
  {
    "dexNumber": 439,
    "name": "Mime Jr",
    "catchRate": 145,
    "weightKg": 13.0,
    "heightM": 0.6,
    "types": [
      "psychic",
      "fairy"
    ],
    "baseStats": {
      "hp": 20,
      "attack": 25,
      "defense": 45,
      "specialAttack": 70,
      "specialDefense": 90,
      "speed": 60
    }
  },
  {
    "dexNumber": 440,
    "name": "Happiny",
    "catchRate": 130,
    "weightKg": 24.4,
    "heightM": 0.6,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 5,
      "defense": 5,
      "specialAttack": 15,
      "specialDefense": 65,
      "speed": 30
    }
  },
  {
    "dexNumber": 441,
    "name": "Chatot",
    "catchRate": 30,
    "weightKg": 1.9,
    "heightM": 0.5,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 76,
      "attack": 65,
      "defense": 45,
      "specialAttack": 92,
      "specialDefense": 42,
      "speed": 91
    }
  },
  {
    "dexNumber": 442,
    "name": "Spiritomb",
    "catchRate": 100,
    "weightKg": 108.0,
    "heightM": 1.0,
    "types": [
      "ghost",
      "dark"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 92,
      "defense": 108,
      "specialAttack": 92,
      "specialDefense": 108,
      "speed": 35
    }
  },
  {
    "dexNumber": 443,
    "name": "Gible",
    "catchRate": 45,
    "weightKg": 20.5,
    "heightM": 0.7,
    "types": [
      "dragon",
      "ground"
    ],
    "baseStats": {
      "hp": 58,
      "attack": 70,
      "defense": 45,
      "specialAttack": 40,
      "specialDefense": 45,
      "speed": 42
    }
  },
  {
    "dexNumber": 444,
    "name": "Gabite",
    "catchRate": 45,
    "weightKg": 56.0,
    "heightM": 1.4,
    "types": [
      "dragon",
      "ground"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 90,
      "defense": 65,
      "specialAttack": 50,
      "specialDefense": 55,
      "speed": 82
    }
  },
  {
    "dexNumber": 445,
    "name": "Garchomp",
    "catchRate": 45,
    "weightKg": 95.0,
    "heightM": 1.9,
    "types": [
      "dragon",
      "ground"
    ],
    "baseStats": {
      "hp": 108,
      "attack": 130,
      "defense": 95,
      "specialAttack": 80,
      "specialDefense": 85,
      "speed": 102
    }
  },
  {
    "dexNumber": 446,
    "name": "Munchlax",
    "catchRate": 50,
    "weightKg": 105.0,
    "heightM": 0.6,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 135,
      "attack": 85,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 85,
      "speed": 5
    }
  },
  {
    "dexNumber": 447,
    "name": "Riolu",
    "catchRate": 75,
    "weightKg": 20.2,
    "heightM": 0.7,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 70,
      "defense": 40,
      "specialAttack": 35,
      "specialDefense": 40,
      "speed": 60
    }
  },
  {
    "dexNumber": 448,
    "name": "Lucario",
    "catchRate": 45,
    "weightKg": 54.0,
    "heightM": 1.2,
    "types": [
      "fighting",
      "steel"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 110,
      "defense": 70,
      "specialAttack": 115,
      "specialDefense": 70,
      "speed": 90
    }
  },
  {
    "dexNumber": 449,
    "name": "Hippopotas",
    "catchRate": 140,
    "weightKg": 49.5,
    "heightM": 0.8,
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 72,
      "defense": 78,
      "specialAttack": 38,
      "specialDefense": 42,
      "speed": 32
    }
  },
  {
    "dexNumber": 450,
    "name": "Hippowdon",
    "catchRate": 60,
    "weightKg": 300.0,
    "heightM": 2.0,
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 108,
      "attack": 112,
      "defense": 118,
      "specialAttack": 68,
      "specialDefense": 72,
      "speed": 47
    }
  },
  {
    "dexNumber": 451,
    "name": "Skorupi",
    "catchRate": 120,
    "weightKg": 12.0,
    "heightM": 0.8,
    "types": [
      "poison",
      "bug"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 50,
      "defense": 90,
      "specialAttack": 30,
      "specialDefense": 55,
      "speed": 65
    }
  },
  {
    "dexNumber": 452,
    "name": "Drapion",
    "catchRate": 45,
    "weightKg": 61.5,
    "heightM": 1.3,
    "types": [
      "poison",
      "dark"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 90,
      "defense": 110,
      "specialAttack": 60,
      "specialDefense": 75,
      "speed": 95
    }
  },
  {
    "dexNumber": 453,
    "name": "Croagunk",
    "catchRate": 140,
    "weightKg": 23.0,
    "heightM": 0.7,
    "types": [
      "poison",
      "fighting"
    ],
    "baseStats": {
      "hp": 48,
      "attack": 61,
      "defense": 40,
      "specialAttack": 61,
      "specialDefense": 40,
      "speed": 50
    }
  },
  {
    "dexNumber": 454,
    "name": "Toxicroak",
    "catchRate": 75,
    "weightKg": 44.4,
    "heightM": 1.3,
    "types": [
      "poison",
      "fighting"
    ],
    "baseStats": {
      "hp": 83,
      "attack": 106,
      "defense": 65,
      "specialAttack": 86,
      "specialDefense": 65,
      "speed": 85
    }
  },
  {
    "dexNumber": 455,
    "name": "Carnivine",
    "catchRate": 200,
    "weightKg": 27.0,
    "heightM": 1.4,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 74,
      "attack": 100,
      "defense": 72,
      "specialAttack": 90,
      "specialDefense": 72,
      "speed": 46
    }
  },
  {
    "dexNumber": 456,
    "name": "Finneon",
    "catchRate": 190,
    "weightKg": 7.0,
    "heightM": 0.4,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 49,
      "attack": 49,
      "defense": 56,
      "specialAttack": 49,
      "specialDefense": 61,
      "speed": 66
    }
  },
  {
    "dexNumber": 457,
    "name": "Lumineon",
    "catchRate": 75,
    "weightKg": 24.0,
    "heightM": 1.2,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 69,
      "attack": 69,
      "defense": 76,
      "specialAttack": 69,
      "specialDefense": 86,
      "speed": 91
    }
  },
  {
    "dexNumber": 458,
    "name": "Mantyke",
    "catchRate": 25,
    "weightKg": 65.0,
    "heightM": 1.0,
    "types": [
      "water",
      "flying"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 20,
      "defense": 50,
      "specialAttack": 60,
      "specialDefense": 120,
      "speed": 50
    }
  },
  {
    "dexNumber": 459,
    "name": "Snover",
    "catchRate": 120,
    "weightKg": 50.5,
    "heightM": 1.0,
    "types": [
      "grass",
      "ice"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 62,
      "defense": 50,
      "specialAttack": 62,
      "specialDefense": 60,
      "speed": 40
    }
  },
  {
    "dexNumber": 460,
    "name": "Abomasnow",
    "catchRate": 60,
    "weightKg": 135.5,
    "heightM": 2.2,
    "types": [
      "grass",
      "ice"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 92,
      "defense": 75,
      "specialAttack": 92,
      "specialDefense": 85,
      "speed": 60
    }
  },
  {
    "dexNumber": 461,
    "name": "Weavile",
    "catchRate": 45,
    "weightKg": 34.0,
    "heightM": 1.1,
    "types": [
      "dark",
      "ice"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 120,
      "defense": 65,
      "specialAttack": 45,
      "specialDefense": 85,
      "speed": 125
    }
  },
  {
    "dexNumber": 462,
    "name": "Magnezone",
    "catchRate": 30,
    "weightKg": 180.0,
    "heightM": 1.2,
    "types": [
      "electric",
      "steel"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 70,
      "defense": 115,
      "specialAttack": 130,
      "specialDefense": 90,
      "speed": 60
    }
  },
  {
    "dexNumber": 463,
    "name": "Lickilicky",
    "catchRate": 30,
    "weightKg": 140.0,
    "heightM": 1.7,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 85,
      "defense": 95,
      "specialAttack": 80,
      "specialDefense": 95,
      "speed": 50
    }
  },
  {
    "dexNumber": 464,
    "name": "Rhyperior",
    "catchRate": 30,
    "weightKg": 282.8,
    "heightM": 2.4,
    "types": [
      "ground",
      "rock"
    ],
    "baseStats": {
      "hp": 115,
      "attack": 140,
      "defense": 130,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 40
    }
  },
  {
    "dexNumber": 465,
    "name": "Tangrowth",
    "catchRate": 30,
    "weightKg": 128.6,
    "heightM": 2.0,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 125,
      "specialAttack": 110,
      "specialDefense": 50,
      "speed": 50
    }
  },
  {
    "dexNumber": 466,
    "name": "Electivire",
    "catchRate": 30,
    "weightKg": 138.6,
    "heightM": 1.8,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 123,
      "defense": 67,
      "specialAttack": 95,
      "specialDefense": 85,
      "speed": 95
    }
  },
  {
    "dexNumber": 467,
    "name": "Magmortar",
    "catchRate": 30,
    "weightKg": 68.0,
    "heightM": 1.6,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 95,
      "defense": 67,
      "specialAttack": 125,
      "specialDefense": 95,
      "speed": 83
    }
  },
  {
    "dexNumber": 468,
    "name": "Togekiss",
    "catchRate": 30,
    "weightKg": 38.0,
    "heightM": 1.5,
    "types": [
      "fairy",
      "flying"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 50,
      "defense": 95,
      "specialAttack": 120,
      "specialDefense": 115,
      "speed": 80
    }
  },
  {
    "dexNumber": 469,
    "name": "Yanmega",
    "catchRate": 30,
    "weightKg": 51.5,
    "heightM": 1.9,
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 86,
      "attack": 76,
      "defense": 86,
      "specialAttack": 116,
      "specialDefense": 56,
      "speed": 95
    }
  },
  {
    "dexNumber": 470,
    "name": "Leafeon",
    "catchRate": 45,
    "weightKg": 25.5,
    "heightM": 1.0,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 110,
      "defense": 130,
      "specialAttack": 60,
      "specialDefense": 65,
      "speed": 95
    }
  },
  {
    "dexNumber": 471,
    "name": "Glaceon",
    "catchRate": 45,
    "weightKg": 25.9,
    "heightM": 0.8,
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 60,
      "defense": 110,
      "specialAttack": 130,
      "specialDefense": 95,
      "speed": 65
    }
  },
  {
    "dexNumber": 472,
    "name": "Gliscor",
    "catchRate": 30,
    "weightKg": 42.5,
    "heightM": 2.0,
    "types": [
      "ground",
      "flying"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 95,
      "defense": 125,
      "specialAttack": 45,
      "specialDefense": 75,
      "speed": 95
    }
  },
  {
    "dexNumber": 473,
    "name": "Mamoswine",
    "catchRate": 50,
    "weightKg": 291.0,
    "heightM": 2.5,
    "types": [
      "ice",
      "ground"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 130,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 60,
      "speed": 80
    }
  },
  {
    "dexNumber": 474,
    "name": "Porygon Z",
    "catchRate": 30,
    "weightKg": 34.0,
    "heightM": 0.9,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 80,
      "defense": 70,
      "specialAttack": 135,
      "specialDefense": 75,
      "speed": 90
    }
  },
  {
    "dexNumber": 475,
    "name": "Gallade",
    "catchRate": 45,
    "weightKg": 52.0,
    "heightM": 1.6,
    "types": [
      "psychic",
      "fighting"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 125,
      "defense": 65,
      "specialAttack": 65,
      "specialDefense": 115,
      "speed": 80
    }
  },
  {
    "dexNumber": 476,
    "name": "Probopass",
    "catchRate": 60,
    "weightKg": 340.0,
    "heightM": 1.4,
    "types": [
      "rock",
      "steel"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 55,
      "defense": 145,
      "specialAttack": 75,
      "specialDefense": 150,
      "speed": 40
    }
  },
  {
    "dexNumber": 477,
    "name": "Dusknoir",
    "catchRate": 45,
    "weightKg": 106.6,
    "heightM": 2.2,
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 100,
      "defense": 135,
      "specialAttack": 65,
      "specialDefense": 135,
      "speed": 45
    }
  },
  {
    "dexNumber": 478,
    "name": "Froslass",
    "catchRate": 75,
    "weightKg": 26.6,
    "heightM": 1.3,
    "types": [
      "ice",
      "ghost"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 80,
      "defense": 70,
      "specialAttack": 80,
      "specialDefense": 70,
      "speed": 110
    }
  },
  {
    "dexNumber": 479,
    "name": "Rotom",
    "catchRate": 45,
    "weightKg": 0.3,
    "heightM": 0.3,
    "types": [
      "electric",
      "ghost"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 50,
      "defense": 77,
      "specialAttack": 95,
      "specialDefense": 77,
      "speed": 91
    }
  },
  {
    "dexNumber": 480,
    "name": "Uxie",
    "catchRate": 3,
    "weightKg": 0.3,
    "heightM": 0.3,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 75,
      "defense": 130,
      "specialAttack": 75,
      "specialDefense": 130,
      "speed": 95
    }
  },
  {
    "dexNumber": 481,
    "name": "Mesprit",
    "catchRate": 3,
    "weightKg": 0.3,
    "heightM": 0.3,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 105,
      "defense": 105,
      "specialAttack": 105,
      "specialDefense": 105,
      "speed": 80
    }
  },
  {
    "dexNumber": 482,
    "name": "Azelf",
    "catchRate": 3,
    "weightKg": 0.3,
    "heightM": 0.3,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 125,
      "defense": 70,
      "specialAttack": 125,
      "specialDefense": 70,
      "speed": 115
    }
  },
  {
    "dexNumber": 483,
    "name": "Dialga",
    "catchRate": 3,
    "weightKg": 683.0,
    "heightM": 5.4,
    "types": [
      "steel",
      "dragon"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 120,
      "defense": 120,
      "specialAttack": 150,
      "specialDefense": 100,
      "speed": 90
    }
  },
  {
    "dexNumber": 484,
    "name": "Palkia",
    "catchRate": 3,
    "weightKg": 336.0,
    "heightM": 4.2,
    "types": [
      "water",
      "dragon"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 120,
      "defense": 100,
      "specialAttack": 150,
      "specialDefense": 120,
      "speed": 100
    }
  },
  {
    "dexNumber": 485,
    "name": "Heatran",
    "catchRate": 3,
    "weightKg": 430.0,
    "heightM": 1.7,
    "types": [
      "fire",
      "steel"
    ],
    "baseStats": {
      "hp": 91,
      "attack": 90,
      "defense": 106,
      "specialAttack": 130,
      "specialDefense": 106,
      "speed": 77
    }
  },
  {
    "dexNumber": 486,
    "name": "Regigigas",
    "catchRate": 3,
    "weightKg": 420.0,
    "heightM": 3.7,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 160,
      "defense": 110,
      "specialAttack": 80,
      "specialDefense": 110,
      "speed": 100
    }
  },
  {
    "dexNumber": 487,
    "name": "Giratina",
    "catchRate": 3,
    "weightKg": 750.0,
    "heightM": 4.5,
    "types": [
      "ghost",
      "dragon"
    ],
    "baseStats": {
      "hp": 150,
      "attack": 100,
      "defense": 120,
      "specialAttack": 100,
      "specialDefense": 120,
      "speed": 90
    }
  },
  {
    "dexNumber": 488,
    "name": "Cresselia",
    "catchRate": 3,
    "weightKg": 85.6,
    "heightM": 1.5,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 120,
      "attack": 70,
      "defense": 110,
      "specialAttack": 75,
      "specialDefense": 120,
      "speed": 85
    }
  },
  {
    "dexNumber": 489,
    "name": "Phione",
    "catchRate": 30,
    "weightKg": 3.1,
    "heightM": 0.4,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 80
    }
  },
  {
    "dexNumber": 490,
    "name": "Manaphy",
    "catchRate": 3,
    "weightKg": 1.4,
    "heightM": 0.3,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100
    }
  },
  {
    "dexNumber": 491,
    "name": "Darkrai",
    "catchRate": 3,
    "weightKg": 50.5,
    "heightM": 1.5,
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 90,
      "defense": 90,
      "specialAttack": 135,
      "specialDefense": 90,
      "speed": 125
    }
  },
  {
    "dexNumber": 492,
    "name": "Shaymin",
    "catchRate": 45,
    "weightKg": 2.1,
    "heightM": 0.2,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100
    }
  },
  {
    "dexNumber": 493,
    "name": "Arceus",
    "catchRate": 3,
    "weightKg": 320.0,
    "heightM": 3.2,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 120,
      "attack": 120,
      "defense": 120,
      "specialAttack": 120,
      "specialDefense": 120,
      "speed": 120
    }
  },
  {
    "dexNumber": 494,
    "name": "Victini",
    "catchRate": 3,
    "weightKg": 4.0,
    "heightM": 0.4,
    "types": [
      "psychic",
      "fire"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100
    }
  },
  {
    "dexNumber": 495,
    "name": "Snivy",
    "catchRate": 45,
    "weightKg": 8.1,
    "heightM": 0.6,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 45,
      "defense": 55,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 63
    }
  },
  {
    "dexNumber": 496,
    "name": "Servine",
    "catchRate": 45,
    "weightKg": 16.0,
    "heightM": 0.8,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 75,
      "specialAttack": 60,
      "specialDefense": 75,
      "speed": 83
    }
  },
  {
    "dexNumber": 497,
    "name": "Serperior",
    "catchRate": 45,
    "weightKg": 63.0,
    "heightM": 3.3,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 75,
      "defense": 95,
      "specialAttack": 75,
      "specialDefense": 95,
      "speed": 113
    }
  },
  {
    "dexNumber": 498,
    "name": "Tepig",
    "catchRate": 45,
    "weightKg": 9.9,
    "heightM": 0.5,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 63,
      "defense": 45,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 45
    }
  },
  {
    "dexNumber": 499,
    "name": "Pignite",
    "catchRate": 45,
    "weightKg": 55.5,
    "heightM": 1.0,
    "types": [
      "fire",
      "fighting"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 93,
      "defense": 55,
      "specialAttack": 70,
      "specialDefense": 55,
      "speed": 55
    }
  },
  {
    "dexNumber": 500,
    "name": "Emboar",
    "catchRate": 45,
    "weightKg": 150.0,
    "heightM": 1.6,
    "types": [
      "fire",
      "fighting"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 123,
      "defense": 65,
      "specialAttack": 100,
      "specialDefense": 65,
      "speed": 65
    }
  },
  {
    "dexNumber": 501,
    "name": "Oshawott",
    "catchRate": 45,
    "weightKg": 5.9,
    "heightM": 0.5,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 55,
      "defense": 45,
      "specialAttack": 63,
      "specialDefense": 45,
      "speed": 45
    }
  },
  {
    "dexNumber": 502,
    "name": "Dewott",
    "catchRate": 45,
    "weightKg": 24.5,
    "heightM": 0.8,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 75,
      "defense": 60,
      "specialAttack": 83,
      "specialDefense": 60,
      "speed": 60
    }
  },
  {
    "dexNumber": 503,
    "name": "Samurott",
    "catchRate": 45,
    "weightKg": 94.6,
    "heightM": 1.5,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 100,
      "defense": 85,
      "specialAttack": 108,
      "specialDefense": 70,
      "speed": 70
    }
  },
  {
    "dexNumber": 504,
    "name": "Patrat",
    "catchRate": 255,
    "weightKg": 11.6,
    "heightM": 0.5,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 55,
      "defense": 39,
      "specialAttack": 35,
      "specialDefense": 39,
      "speed": 42
    }
  },
  {
    "dexNumber": 505,
    "name": "Watchog",
    "catchRate": 255,
    "weightKg": 27.0,
    "heightM": 1.1,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 85,
      "defense": 69,
      "specialAttack": 60,
      "specialDefense": 69,
      "speed": 77
    }
  },
  {
    "dexNumber": 506,
    "name": "Lillipup",
    "catchRate": 255,
    "weightKg": 4.1,
    "heightM": 0.4,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 60,
      "defense": 45,
      "specialAttack": 25,
      "specialDefense": 45,
      "speed": 55
    }
  },
  {
    "dexNumber": 507,
    "name": "Herdier",
    "catchRate": 120,
    "weightKg": 14.7,
    "heightM": 0.9,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 80,
      "defense": 65,
      "specialAttack": 35,
      "specialDefense": 65,
      "speed": 60
    }
  },
  {
    "dexNumber": 508,
    "name": "Stoutland",
    "catchRate": 45,
    "weightKg": 61.0,
    "heightM": 1.2,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 110,
      "defense": 90,
      "specialAttack": 45,
      "specialDefense": 90,
      "speed": 80
    }
  },
  {
    "dexNumber": 509,
    "name": "Purrloin",
    "catchRate": 255,
    "weightKg": 10.1,
    "heightM": 0.4,
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 41,
      "attack": 50,
      "defense": 37,
      "specialAttack": 50,
      "specialDefense": 37,
      "speed": 66
    }
  },
  {
    "dexNumber": 510,
    "name": "Liepard",
    "catchRate": 90,
    "weightKg": 37.5,
    "heightM": 1.1,
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 64,
      "attack": 88,
      "defense": 50,
      "specialAttack": 88,
      "specialDefense": 50,
      "speed": 106
    }
  },
  {
    "dexNumber": 511,
    "name": "Pansage",
    "catchRate": 190,
    "weightKg": 10.5,
    "heightM": 0.6,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 53,
      "defense": 48,
      "specialAttack": 53,
      "specialDefense": 48,
      "speed": 64
    }
  },
  {
    "dexNumber": 512,
    "name": "Simisage",
    "catchRate": 75,
    "weightKg": 30.5,
    "heightM": 1.1,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "specialAttack": 98,
      "specialDefense": 63,
      "speed": 101
    }
  },
  {
    "dexNumber": 513,
    "name": "Pansear",
    "catchRate": 190,
    "weightKg": 11.0,
    "heightM": 0.6,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 53,
      "defense": 48,
      "specialAttack": 53,
      "specialDefense": 48,
      "speed": 64
    }
  },
  {
    "dexNumber": 514,
    "name": "Simisear",
    "catchRate": 75,
    "weightKg": 28.0,
    "heightM": 1.0,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "specialAttack": 98,
      "specialDefense": 63,
      "speed": 101
    }
  },
  {
    "dexNumber": 515,
    "name": "Panpour",
    "catchRate": 190,
    "weightKg": 13.5,
    "heightM": 0.6,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 53,
      "defense": 48,
      "specialAttack": 53,
      "specialDefense": 48,
      "speed": 64
    }
  },
  {
    "dexNumber": 516,
    "name": "Simipour",
    "catchRate": 75,
    "weightKg": 29.0,
    "heightM": 1.0,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "specialAttack": 98,
      "specialDefense": 63,
      "speed": 101
    }
  },
  {
    "dexNumber": 517,
    "name": "Munna",
    "catchRate": 190,
    "weightKg": 23.3,
    "heightM": 0.6,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 76,
      "attack": 25,
      "defense": 45,
      "specialAttack": 67,
      "specialDefense": 55,
      "speed": 24
    }
  },
  {
    "dexNumber": 518,
    "name": "Musharna",
    "catchRate": 75,
    "weightKg": 60.5,
    "heightM": 1.1,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 116,
      "attack": 55,
      "defense": 85,
      "specialAttack": 107,
      "specialDefense": 95,
      "speed": 29
    }
  },
  {
    "dexNumber": 519,
    "name": "Pidove",
    "catchRate": 255,
    "weightKg": 2.1,
    "heightM": 0.3,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 55,
      "defense": 50,
      "specialAttack": 36,
      "specialDefense": 30,
      "speed": 43
    }
  },
  {
    "dexNumber": 520,
    "name": "Tranquill",
    "catchRate": 120,
    "weightKg": 15.0,
    "heightM": 0.6,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 62,
      "attack": 77,
      "defense": 62,
      "specialAttack": 50,
      "specialDefense": 42,
      "speed": 65
    }
  },
  {
    "dexNumber": 521,
    "name": "Unfezant",
    "catchRate": 45,
    "weightKg": 29.0,
    "heightM": 1.2,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 115,
      "defense": 80,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 93
    }
  },
  {
    "dexNumber": 522,
    "name": "Blitzle",
    "catchRate": 190,
    "weightKg": 29.8,
    "heightM": 0.8,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 60,
      "defense": 32,
      "specialAttack": 50,
      "specialDefense": 32,
      "speed": 76
    }
  },
  {
    "dexNumber": 523,
    "name": "Zebstrika",
    "catchRate": 75,
    "weightKg": 79.5,
    "heightM": 1.6,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 100,
      "defense": 63,
      "specialAttack": 80,
      "specialDefense": 63,
      "speed": 116
    }
  },
  {
    "dexNumber": 524,
    "name": "Roggenrola",
    "catchRate": 255,
    "weightKg": 18.0,
    "heightM": 0.4,
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 75,
      "defense": 85,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 15
    }
  },
  {
    "dexNumber": 525,
    "name": "Boldore",
    "catchRate": 120,
    "weightKg": 102.0,
    "heightM": 0.9,
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 105,
      "defense": 105,
      "specialAttack": 50,
      "specialDefense": 40,
      "speed": 20
    }
  },
  {
    "dexNumber": 526,
    "name": "Gigalith",
    "catchRate": 45,
    "weightKg": 260.0,
    "heightM": 1.7,
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 135,
      "defense": 130,
      "specialAttack": 60,
      "specialDefense": 80,
      "speed": 25
    }
  },
  {
    "dexNumber": 527,
    "name": "Woobat",
    "catchRate": 190,
    "weightKg": 2.1,
    "heightM": 0.4,
    "types": [
      "psychic",
      "flying"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 45,
      "defense": 43,
      "specialAttack": 55,
      "specialDefense": 43,
      "speed": 72
    }
  },
  {
    "dexNumber": 528,
    "name": "Swoobat",
    "catchRate": 45,
    "weightKg": 10.5,
    "heightM": 0.9,
    "types": [
      "psychic",
      "flying"
    ],
    "baseStats": {
      "hp": 67,
      "attack": 57,
      "defense": 55,
      "specialAttack": 77,
      "specialDefense": 55,
      "speed": 114
    }
  },
  {
    "dexNumber": 529,
    "name": "Drilbur",
    "catchRate": 120,
    "weightKg": 8.5,
    "heightM": 0.3,
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 85,
      "defense": 40,
      "specialAttack": 30,
      "specialDefense": 45,
      "speed": 68
    }
  },
  {
    "dexNumber": 530,
    "name": "Excadrill",
    "catchRate": 60,
    "weightKg": 40.4,
    "heightM": 0.7,
    "types": [
      "ground",
      "steel"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 135,
      "defense": 60,
      "specialAttack": 50,
      "specialDefense": 65,
      "speed": 88
    }
  },
  {
    "dexNumber": 531,
    "name": "Audino",
    "catchRate": 255,
    "weightKg": 31.0,
    "heightM": 1.1,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 103,
      "attack": 60,
      "defense": 86,
      "specialAttack": 60,
      "specialDefense": 86,
      "speed": 50
    }
  },
  {
    "dexNumber": 532,
    "name": "Timburr",
    "catchRate": 180,
    "weightKg": 12.5,
    "heightM": 0.6,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 80,
      "defense": 55,
      "specialAttack": 25,
      "specialDefense": 35,
      "speed": 35
    }
  },
  {
    "dexNumber": 533,
    "name": "Gurdurr",
    "catchRate": 90,
    "weightKg": 40.0,
    "heightM": 1.2,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 105,
      "defense": 85,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 40
    }
  },
  {
    "dexNumber": 534,
    "name": "Conkeldurr",
    "catchRate": 45,
    "weightKg": 87.0,
    "heightM": 1.4,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 140,
      "defense": 95,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 45
    }
  },
  {
    "dexNumber": 535,
    "name": "Tympole",
    "catchRate": 255,
    "weightKg": 4.5,
    "heightM": 0.5,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 50,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 40,
      "speed": 64
    }
  },
  {
    "dexNumber": 536,
    "name": "Palpitoad",
    "catchRate": 120,
    "weightKg": 17.0,
    "heightM": 0.8,
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 65,
      "defense": 55,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 69
    }
  },
  {
    "dexNumber": 537,
    "name": "Seismitoad",
    "catchRate": 45,
    "weightKg": 62.0,
    "heightM": 1.5,
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 95,
      "defense": 75,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 74
    }
  },
  {
    "dexNumber": 538,
    "name": "Throh",
    "catchRate": 45,
    "weightKg": 55.5,
    "heightM": 1.3,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 120,
      "attack": 100,
      "defense": 85,
      "specialAttack": 30,
      "specialDefense": 85,
      "speed": 45
    }
  },
  {
    "dexNumber": 539,
    "name": "Sawk",
    "catchRate": 45,
    "weightKg": 51.0,
    "heightM": 1.4,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 125,
      "defense": 75,
      "specialAttack": 30,
      "specialDefense": 75,
      "speed": 85
    }
  },
  {
    "dexNumber": 540,
    "name": "Sewaddle",
    "catchRate": 255,
    "weightKg": 2.5,
    "heightM": 0.3,
    "types": [
      "bug",
      "grass"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 53,
      "defense": 70,
      "specialAttack": 40,
      "specialDefense": 60,
      "speed": 42
    }
  },
  {
    "dexNumber": 541,
    "name": "Swadloon",
    "catchRate": 120,
    "weightKg": 7.3,
    "heightM": 0.5,
    "types": [
      "bug",
      "grass"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 63,
      "defense": 90,
      "specialAttack": 50,
      "specialDefense": 80,
      "speed": 42
    }
  },
  {
    "dexNumber": 542,
    "name": "Leavanny",
    "catchRate": 45,
    "weightKg": 20.5,
    "heightM": 1.2,
    "types": [
      "bug",
      "grass"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 103,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 92
    }
  },
  {
    "dexNumber": 543,
    "name": "Venipede",
    "catchRate": 255,
    "weightKg": 5.3,
    "heightM": 0.4,
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 45,
      "defense": 59,
      "specialAttack": 30,
      "specialDefense": 39,
      "speed": 57
    }
  },
  {
    "dexNumber": 544,
    "name": "Whirlipede",
    "catchRate": 120,
    "weightKg": 58.5,
    "heightM": 1.2,
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 55,
      "defense": 99,
      "specialAttack": 40,
      "specialDefense": 79,
      "speed": 47
    }
  },
  {
    "dexNumber": 545,
    "name": "Scolipede",
    "catchRate": 45,
    "weightKg": 200.5,
    "heightM": 2.5,
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 100,
      "defense": 89,
      "specialAttack": 55,
      "specialDefense": 69,
      "speed": 112
    }
  },
  {
    "dexNumber": 546,
    "name": "Cottonee",
    "catchRate": 190,
    "weightKg": 0.6,
    "heightM": 0.3,
    "types": [
      "grass",
      "fairy"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 27,
      "defense": 60,
      "specialAttack": 37,
      "specialDefense": 50,
      "speed": 66
    }
  },
  {
    "dexNumber": 547,
    "name": "Whimsicott",
    "catchRate": 75,
    "weightKg": 6.6,
    "heightM": 0.7,
    "types": [
      "grass",
      "fairy"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 67,
      "defense": 85,
      "specialAttack": 77,
      "specialDefense": 75,
      "speed": 116
    }
  },
  {
    "dexNumber": 548,
    "name": "Petilil",
    "catchRate": 190,
    "weightKg": 6.6,
    "heightM": 0.5,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 35,
      "defense": 50,
      "specialAttack": 70,
      "specialDefense": 50,
      "speed": 30
    }
  },
  {
    "dexNumber": 549,
    "name": "Lilligant",
    "catchRate": 75,
    "weightKg": 16.3,
    "heightM": 1.1,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 60,
      "defense": 75,
      "specialAttack": 110,
      "specialDefense": 75,
      "speed": 90
    }
  },
  {
    "dexNumber": 550,
    "name": "Basculin",
    "catchRate": 25,
    "weightKg": 18.0,
    "heightM": 1.0,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 92,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 55,
      "speed": 98
    }
  },
  {
    "dexNumber": 551,
    "name": "Sandile",
    "catchRate": 180,
    "weightKg": 15.2,
    "heightM": 0.7,
    "types": [
      "ground",
      "dark"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 72,
      "defense": 35,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 65
    }
  },
  {
    "dexNumber": 552,
    "name": "Krokorok",
    "catchRate": 90,
    "weightKg": 33.4,
    "heightM": 1.0,
    "types": [
      "ground",
      "dark"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 82,
      "defense": 45,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 74
    }
  },
  {
    "dexNumber": 553,
    "name": "Krookodile",
    "catchRate": 45,
    "weightKg": 96.3,
    "heightM": 1.5,
    "types": [
      "ground",
      "dark"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 117,
      "defense": 80,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 92
    }
  },
  {
    "dexNumber": 554,
    "name": "Darumaka",
    "catchRate": 120,
    "weightKg": 37.5,
    "heightM": 0.6,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 90,
      "defense": 45,
      "specialAttack": 15,
      "specialDefense": 45,
      "speed": 50
    }
  },
  {
    "dexNumber": 555,
    "name": "Darmanitan",
    "catchRate": 60,
    "weightKg": 92.9,
    "heightM": 1.3,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 140,
      "defense": 55,
      "specialAttack": 30,
      "specialDefense": 55,
      "speed": 95
    }
  },
  {
    "dexNumber": 556,
    "name": "Maractus",
    "catchRate": 255,
    "weightKg": 28.0,
    "heightM": 1.0,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 86,
      "defense": 67,
      "specialAttack": 106,
      "specialDefense": 67,
      "speed": 60
    }
  },
  {
    "dexNumber": 557,
    "name": "Dwebble",
    "catchRate": 190,
    "weightKg": 14.5,
    "heightM": 0.3,
    "types": [
      "bug",
      "rock"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 65,
      "defense": 85,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 55
    }
  },
  {
    "dexNumber": 558,
    "name": "Crustle",
    "catchRate": 75,
    "weightKg": 200.0,
    "heightM": 1.4,
    "types": [
      "bug",
      "rock"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 105,
      "defense": 125,
      "specialAttack": 65,
      "specialDefense": 75,
      "speed": 45
    }
  },
  {
    "dexNumber": 559,
    "name": "Scraggy",
    "catchRate": 180,
    "weightKg": 11.8,
    "heightM": 0.6,
    "types": [
      "dark",
      "fighting"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 75,
      "defense": 70,
      "specialAttack": 35,
      "specialDefense": 70,
      "speed": 48
    }
  },
  {
    "dexNumber": 560,
    "name": "Scrafty",
    "catchRate": 90,
    "weightKg": 30.0,
    "heightM": 1.1,
    "types": [
      "dark",
      "fighting"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 90,
      "defense": 115,
      "specialAttack": 45,
      "specialDefense": 115,
      "speed": 58
    }
  },
  {
    "dexNumber": 561,
    "name": "Sigilyph",
    "catchRate": 45,
    "weightKg": 14.0,
    "heightM": 1.4,
    "types": [
      "psychic",
      "flying"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 58,
      "defense": 80,
      "specialAttack": 103,
      "specialDefense": 80,
      "speed": 97
    }
  },
  {
    "dexNumber": 562,
    "name": "Yamask",
    "catchRate": 190,
    "weightKg": 1.5,
    "heightM": 0.5,
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 38,
      "attack": 30,
      "defense": 85,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 30
    }
  },
  {
    "dexNumber": 563,
    "name": "Cofagrigus",
    "catchRate": 90,
    "weightKg": 76.5,
    "heightM": 1.7,
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 58,
      "attack": 50,
      "defense": 145,
      "specialAttack": 95,
      "specialDefense": 105,
      "speed": 30
    }
  },
  {
    "dexNumber": 564,
    "name": "Tirtouga",
    "catchRate": 45,
    "weightKg": 16.5,
    "heightM": 0.7,
    "types": [
      "water",
      "rock"
    ],
    "baseStats": {
      "hp": 54,
      "attack": 78,
      "defense": 103,
      "specialAttack": 53,
      "specialDefense": 45,
      "speed": 22
    }
  },
  {
    "dexNumber": 565,
    "name": "Carracosta",
    "catchRate": 45,
    "weightKg": 81.0,
    "heightM": 1.2,
    "types": [
      "water",
      "rock"
    ],
    "baseStats": {
      "hp": 74,
      "attack": 108,
      "defense": 133,
      "specialAttack": 83,
      "specialDefense": 65,
      "speed": 32
    }
  },
  {
    "dexNumber": 566,
    "name": "Archen",
    "catchRate": 45,
    "weightKg": 9.5,
    "heightM": 0.5,
    "types": [
      "rock",
      "flying"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 112,
      "defense": 45,
      "specialAttack": 74,
      "specialDefense": 45,
      "speed": 70
    }
  },
  {
    "dexNumber": 567,
    "name": "Archeops",
    "catchRate": 45,
    "weightKg": 32.0,
    "heightM": 1.4,
    "types": [
      "rock",
      "flying"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 140,
      "defense": 65,
      "specialAttack": 112,
      "specialDefense": 65,
      "speed": 110
    }
  },
  {
    "dexNumber": 568,
    "name": "Trubbish",
    "catchRate": 190,
    "weightKg": 31.0,
    "heightM": 0.6,
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 50,
      "defense": 62,
      "specialAttack": 40,
      "specialDefense": 62,
      "speed": 65
    }
  },
  {
    "dexNumber": 569,
    "name": "Garbodor",
    "catchRate": 60,
    "weightKg": 107.3,
    "heightM": 1.9,
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 95,
      "defense": 82,
      "specialAttack": 60,
      "specialDefense": 82,
      "speed": 75
    }
  },
  {
    "dexNumber": 570,
    "name": "Zorua",
    "catchRate": 75,
    "weightKg": 12.5,
    "heightM": 0.7,
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 65,
      "defense": 40,
      "specialAttack": 80,
      "specialDefense": 40,
      "speed": 65
    }
  },
  {
    "dexNumber": 571,
    "name": "Zoroark",
    "catchRate": 45,
    "weightKg": 81.1,
    "heightM": 1.6,
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 105,
      "defense": 60,
      "specialAttack": 120,
      "specialDefense": 60,
      "speed": 105
    }
  },
  {
    "dexNumber": 572,
    "name": "Minccino",
    "catchRate": 255,
    "weightKg": 5.8,
    "heightM": 0.4,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 50,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 75
    }
  },
  {
    "dexNumber": 573,
    "name": "Cinccino",
    "catchRate": 60,
    "weightKg": 7.5,
    "heightM": 0.5,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 95,
      "defense": 60,
      "specialAttack": 65,
      "specialDefense": 60,
      "speed": 115
    }
  },
  {
    "dexNumber": 574,
    "name": "Gothita",
    "catchRate": 200,
    "weightKg": 5.8,
    "heightM": 0.4,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 30,
      "defense": 50,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 45
    }
  },
  {
    "dexNumber": 575,
    "name": "Gothorita",
    "catchRate": 100,
    "weightKg": 18.0,
    "heightM": 0.7,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 45,
      "defense": 70,
      "specialAttack": 75,
      "specialDefense": 85,
      "speed": 55
    }
  },
  {
    "dexNumber": 576,
    "name": "Gothitelle",
    "catchRate": 50,
    "weightKg": 44.0,
    "heightM": 1.5,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 55,
      "defense": 95,
      "specialAttack": 95,
      "specialDefense": 110,
      "speed": 65
    }
  },
  {
    "dexNumber": 577,
    "name": "Solosis",
    "catchRate": 200,
    "weightKg": 1.0,
    "heightM": 0.3,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 30,
      "defense": 40,
      "specialAttack": 105,
      "specialDefense": 50,
      "speed": 20
    }
  },
  {
    "dexNumber": 578,
    "name": "Duosion",
    "catchRate": 100,
    "weightKg": 8.0,
    "heightM": 0.6,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 40,
      "defense": 50,
      "specialAttack": 125,
      "specialDefense": 60,
      "speed": 30
    }
  },
  {
    "dexNumber": 579,
    "name": "Reuniclus",
    "catchRate": 50,
    "weightKg": 20.1,
    "heightM": 1.0,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 65,
      "defense": 75,
      "specialAttack": 125,
      "specialDefense": 85,
      "speed": 30
    }
  },
  {
    "dexNumber": 580,
    "name": "Ducklett",
    "catchRate": 190,
    "weightKg": 5.5,
    "heightM": 0.5,
    "types": [
      "water",
      "flying"
    ],
    "baseStats": {
      "hp": 62,
      "attack": 44,
      "defense": 50,
      "specialAttack": 44,
      "specialDefense": 50,
      "speed": 55
    }
  },
  {
    "dexNumber": 581,
    "name": "Swanna",
    "catchRate": 45,
    "weightKg": 24.2,
    "heightM": 1.3,
    "types": [
      "water",
      "flying"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 87,
      "defense": 63,
      "specialAttack": 87,
      "specialDefense": 63,
      "speed": 98
    }
  },
  {
    "dexNumber": 582,
    "name": "Vanillite",
    "catchRate": 255,
    "weightKg": 5.7,
    "heightM": 0.4,
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 36,
      "attack": 50,
      "defense": 50,
      "specialAttack": 65,
      "specialDefense": 60,
      "speed": 44
    }
  },
  {
    "dexNumber": 583,
    "name": "Vanillish",
    "catchRate": 120,
    "weightKg": 41.0,
    "heightM": 1.1,
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 51,
      "attack": 65,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 75,
      "speed": 59
    }
  },
  {
    "dexNumber": 584,
    "name": "Vanilluxe",
    "catchRate": 45,
    "weightKg": 57.5,
    "heightM": 1.3,
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 71,
      "attack": 95,
      "defense": 85,
      "specialAttack": 110,
      "specialDefense": 95,
      "speed": 79
    }
  },
  {
    "dexNumber": 585,
    "name": "Deerling",
    "catchRate": 190,
    "weightKg": 19.5,
    "heightM": 0.6,
    "types": [
      "normal",
      "grass"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 75
    }
  },
  {
    "dexNumber": 586,
    "name": "Sawsbuck",
    "catchRate": 75,
    "weightKg": 92.5,
    "heightM": 1.9,
    "types": [
      "normal",
      "grass"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 100,
      "defense": 70,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 95
    }
  },
  {
    "dexNumber": 587,
    "name": "Emolga",
    "catchRate": 200,
    "weightKg": 5.0,
    "heightM": 0.4,
    "types": [
      "electric",
      "flying"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 75,
      "defense": 60,
      "specialAttack": 75,
      "specialDefense": 60,
      "speed": 103
    }
  },
  {
    "dexNumber": 588,
    "name": "Karrablast",
    "catchRate": 200,
    "weightKg": 5.9,
    "heightM": 0.5,
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 75,
      "defense": 45,
      "specialAttack": 40,
      "specialDefense": 45,
      "speed": 60
    }
  },
  {
    "dexNumber": 589,
    "name": "Escavalier",
    "catchRate": 75,
    "weightKg": 33.0,
    "heightM": 1.0,
    "types": [
      "bug",
      "steel"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 135,
      "defense": 105,
      "specialAttack": 60,
      "specialDefense": 105,
      "speed": 20
    }
  },
  {
    "dexNumber": 590,
    "name": "Foongus",
    "catchRate": 190,
    "weightKg": 1.0,
    "heightM": 0.2,
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 69,
      "attack": 55,
      "defense": 45,
      "specialAttack": 55,
      "specialDefense": 55,
      "speed": 15
    }
  },
  {
    "dexNumber": 591,
    "name": "Amoonguss",
    "catchRate": 75,
    "weightKg": 10.5,
    "heightM": 0.6,
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 114,
      "attack": 85,
      "defense": 70,
      "specialAttack": 85,
      "specialDefense": 80,
      "speed": 30
    }
  },
  {
    "dexNumber": 592,
    "name": "Frillish",
    "catchRate": 190,
    "weightKg": 33.0,
    "heightM": 1.2,
    "types": [
      "water",
      "ghost"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 40,
      "defense": 50,
      "specialAttack": 65,
      "specialDefense": 85,
      "speed": 40
    }
  },
  {
    "dexNumber": 593,
    "name": "Jellicent",
    "catchRate": 60,
    "weightKg": 135.0,
    "heightM": 2.2,
    "types": [
      "water",
      "ghost"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 60,
      "defense": 70,
      "specialAttack": 85,
      "specialDefense": 105,
      "speed": 60
    }
  },
  {
    "dexNumber": 594,
    "name": "Alomomola",
    "catchRate": 75,
    "weightKg": 31.6,
    "heightM": 1.2,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 165,
      "attack": 75,
      "defense": 80,
      "specialAttack": 40,
      "specialDefense": 45,
      "speed": 65
    }
  },
  {
    "dexNumber": 595,
    "name": "Joltik",
    "catchRate": 190,
    "weightKg": 0.6,
    "heightM": 0.1,
    "types": [
      "bug",
      "electric"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 47,
      "defense": 50,
      "specialAttack": 57,
      "specialDefense": 50,
      "speed": 65
    }
  },
  {
    "dexNumber": 596,
    "name": "Galvantula",
    "catchRate": 75,
    "weightKg": 14.3,
    "heightM": 0.8,
    "types": [
      "bug",
      "electric"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 77,
      "defense": 60,
      "specialAttack": 97,
      "specialDefense": 60,
      "speed": 108
    }
  },
  {
    "dexNumber": 597,
    "name": "Ferroseed",
    "catchRate": 255,
    "weightKg": 18.8,
    "heightM": 0.6,
    "types": [
      "grass",
      "steel"
    ],
    "baseStats": {
      "hp": 44,
      "attack": 50,
      "defense": 91,
      "specialAttack": 24,
      "specialDefense": 86,
      "speed": 10
    }
  },
  {
    "dexNumber": 598,
    "name": "Ferrothorn",
    "catchRate": 90,
    "weightKg": 110.0,
    "heightM": 1.0,
    "types": [
      "grass",
      "steel"
    ],
    "baseStats": {
      "hp": 74,
      "attack": 94,
      "defense": 131,
      "specialAttack": 54,
      "specialDefense": 116,
      "speed": 20
    }
  },
  {
    "dexNumber": 599,
    "name": "Klink",
    "catchRate": 130,
    "weightKg": 21.0,
    "heightM": 0.3,
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 55,
      "defense": 70,
      "specialAttack": 45,
      "specialDefense": 60,
      "speed": 30
    }
  },
  {
    "dexNumber": 600,
    "name": "Klang",
    "catchRate": 60,
    "weightKg": 51.0,
    "heightM": 0.6,
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 80,
      "defense": 95,
      "specialAttack": 70,
      "specialDefense": 85,
      "speed": 50
    }
  },
  {
    "dexNumber": 601,
    "name": "Klinklang",
    "catchRate": 30,
    "weightKg": 81.0,
    "heightM": 0.6,
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 100,
      "defense": 115,
      "specialAttack": 70,
      "specialDefense": 85,
      "speed": 90
    }
  },
  {
    "dexNumber": 602,
    "name": "Tynamo",
    "catchRate": 190,
    "weightKg": 0.3,
    "heightM": 0.2,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 45,
      "specialDefense": 40,
      "speed": 60
    }
  },
  {
    "dexNumber": 603,
    "name": "Eelektrik",
    "catchRate": 60,
    "weightKg": 22.0,
    "heightM": 1.2,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 85,
      "defense": 70,
      "specialAttack": 75,
      "specialDefense": 70,
      "speed": 40
    }
  },
  {
    "dexNumber": 604,
    "name": "Eelektross",
    "catchRate": 30,
    "weightKg": 80.5,
    "heightM": 2.1,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 115,
      "defense": 80,
      "specialAttack": 105,
      "specialDefense": 80,
      "speed": 50
    }
  },
  {
    "dexNumber": 605,
    "name": "Elgyem",
    "catchRate": 255,
    "weightKg": 9.0,
    "heightM": 0.5,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 55,
      "defense": 55,
      "specialAttack": 85,
      "specialDefense": 55,
      "speed": 30
    }
  },
  {
    "dexNumber": 606,
    "name": "Beheeyem",
    "catchRate": 90,
    "weightKg": 34.5,
    "heightM": 1.0,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 75,
      "defense": 75,
      "specialAttack": 125,
      "specialDefense": 95,
      "speed": 40
    }
  },
  {
    "dexNumber": 607,
    "name": "Litwick",
    "catchRate": 190,
    "weightKg": 3.1,
    "heightM": 0.3,
    "types": [
      "ghost",
      "fire"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 30,
      "defense": 55,
      "specialAttack": 65,
      "specialDefense": 55,
      "speed": 20
    }
  },
  {
    "dexNumber": 608,
    "name": "Lampent",
    "catchRate": 90,
    "weightKg": 13.0,
    "heightM": 0.6,
    "types": [
      "ghost",
      "fire"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 40,
      "defense": 60,
      "specialAttack": 95,
      "specialDefense": 60,
      "speed": 55
    }
  },
  {
    "dexNumber": 609,
    "name": "Chandelure",
    "catchRate": 45,
    "weightKg": 34.3,
    "heightM": 1.0,
    "types": [
      "ghost",
      "fire"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 55,
      "defense": 90,
      "specialAttack": 145,
      "specialDefense": 90,
      "speed": 80
    }
  },
  {
    "dexNumber": 610,
    "name": "Axew",
    "catchRate": 75,
    "weightKg": 18.0,
    "heightM": 0.6,
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 46,
      "attack": 87,
      "defense": 60,
      "specialAttack": 30,
      "specialDefense": 40,
      "speed": 57
    }
  },
  {
    "dexNumber": 611,
    "name": "Fraxure",
    "catchRate": 60,
    "weightKg": 36.0,
    "heightM": 1.0,
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 66,
      "attack": 117,
      "defense": 70,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 67
    }
  },
  {
    "dexNumber": 612,
    "name": "Haxorus",
    "catchRate": 45,
    "weightKg": 105.5,
    "heightM": 1.8,
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 76,
      "attack": 147,
      "defense": 90,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 97
    }
  },
  {
    "dexNumber": 613,
    "name": "Cubchoo",
    "catchRate": 120,
    "weightKg": 8.5,
    "heightM": 0.5,
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 70,
      "defense": 40,
      "specialAttack": 60,
      "specialDefense": 40,
      "speed": 40
    }
  },
  {
    "dexNumber": 614,
    "name": "Beartic",
    "catchRate": 60,
    "weightKg": 260.0,
    "heightM": 2.6,
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 130,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 50
    }
  },
  {
    "dexNumber": 615,
    "name": "Cryogonal",
    "catchRate": 25,
    "weightKg": 148.0,
    "heightM": 1.1,
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 50,
      "defense": 50,
      "specialAttack": 95,
      "specialDefense": 135,
      "speed": 105
    }
  },
  {
    "dexNumber": 616,
    "name": "Shelmet",
    "catchRate": 200,
    "weightKg": 7.7,
    "heightM": 0.4,
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 40,
      "defense": 85,
      "specialAttack": 40,
      "specialDefense": 65,
      "speed": 25
    }
  },
  {
    "dexNumber": 617,
    "name": "Accelgor",
    "catchRate": 75,
    "weightKg": 25.3,
    "heightM": 0.8,
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 70,
      "defense": 40,
      "specialAttack": 100,
      "specialDefense": 60,
      "speed": 145
    }
  },
  {
    "dexNumber": 618,
    "name": "Stunfisk",
    "catchRate": 75,
    "weightKg": 11.0,
    "heightM": 0.7,
    "types": [
      "ground",
      "electric"
    ],
    "baseStats": {
      "hp": 109,
      "attack": 66,
      "defense": 84,
      "specialAttack": 81,
      "specialDefense": 99,
      "speed": 32
    }
  },
  {
    "dexNumber": 619,
    "name": "Mienfoo",
    "catchRate": 180,
    "weightKg": 20.0,
    "heightM": 0.9,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 85,
      "defense": 50,
      "specialAttack": 55,
      "specialDefense": 50,
      "speed": 65
    }
  },
  {
    "dexNumber": 620,
    "name": "Mienshao",
    "catchRate": 45,
    "weightKg": 35.5,
    "heightM": 1.4,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 125,
      "defense": 60,
      "specialAttack": 95,
      "specialDefense": 60,
      "speed": 105
    }
  },
  {
    "dexNumber": 621,
    "name": "Druddigon",
    "catchRate": 45,
    "weightKg": 139.0,
    "heightM": 1.6,
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 77,
      "attack": 120,
      "defense": 90,
      "specialAttack": 60,
      "specialDefense": 90,
      "speed": 48
    }
  },
  {
    "dexNumber": 622,
    "name": "Golett",
    "catchRate": 190,
    "weightKg": 92.0,
    "heightM": 1.0,
    "types": [
      "ground",
      "ghost"
    ],
    "baseStats": {
      "hp": 59,
      "attack": 74,
      "defense": 50,
      "specialAttack": 35,
      "specialDefense": 50,
      "speed": 35
    }
  },
  {
    "dexNumber": 623,
    "name": "Golurk",
    "catchRate": 90,
    "weightKg": 330.0,
    "heightM": 2.8,
    "types": [
      "ground",
      "ghost"
    ],
    "baseStats": {
      "hp": 89,
      "attack": 124,
      "defense": 80,
      "specialAttack": 55,
      "specialDefense": 80,
      "speed": 55
    }
  },
  {
    "dexNumber": 624,
    "name": "Pawniard",
    "catchRate": 120,
    "weightKg": 10.2,
    "heightM": 0.5,
    "types": [
      "dark",
      "steel"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 85,
      "defense": 70,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 60
    }
  },
  {
    "dexNumber": 625,
    "name": "Bisharp",
    "catchRate": 45,
    "weightKg": 70.0,
    "heightM": 1.6,
    "types": [
      "dark",
      "steel"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 125,
      "defense": 100,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 70
    }
  },
  {
    "dexNumber": 626,
    "name": "Bouffalant",
    "catchRate": 45,
    "weightKg": 94.6,
    "heightM": 1.6,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 110,
      "defense": 95,
      "specialAttack": 40,
      "specialDefense": 95,
      "speed": 55
    }
  },
  {
    "dexNumber": 627,
    "name": "Rufflet",
    "catchRate": 190,
    "weightKg": 10.5,
    "heightM": 0.5,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 83,
      "defense": 50,
      "specialAttack": 37,
      "specialDefense": 50,
      "speed": 60
    }
  },
  {
    "dexNumber": 628,
    "name": "Braviary",
    "catchRate": 60,
    "weightKg": 41.0,
    "heightM": 1.5,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 123,
      "defense": 75,
      "specialAttack": 57,
      "specialDefense": 75,
      "speed": 80
    }
  },
  {
    "dexNumber": 629,
    "name": "Vullaby",
    "catchRate": 190,
    "weightKg": 9.0,
    "heightM": 0.5,
    "types": [
      "dark",
      "flying"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 55,
      "defense": 75,
      "specialAttack": 45,
      "specialDefense": 65,
      "speed": 60
    }
  },
  {
    "dexNumber": 630,
    "name": "Mandibuzz",
    "catchRate": 60,
    "weightKg": 39.5,
    "heightM": 1.2,
    "types": [
      "dark",
      "flying"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 65,
      "defense": 105,
      "specialAttack": 55,
      "specialDefense": 95,
      "speed": 80
    }
  },
  {
    "dexNumber": 631,
    "name": "Heatmor",
    "catchRate": 90,
    "weightKg": 58.0,
    "heightM": 1.4,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 97,
      "defense": 66,
      "specialAttack": 105,
      "specialDefense": 66,
      "speed": 65
    }
  },
  {
    "dexNumber": 632,
    "name": "Durant",
    "catchRate": 90,
    "weightKg": 33.0,
    "heightM": 0.3,
    "types": [
      "bug",
      "steel"
    ],
    "baseStats": {
      "hp": 58,
      "attack": 109,
      "defense": 112,
      "specialAttack": 48,
      "specialDefense": 48,
      "speed": 109
    }
  },
  {
    "dexNumber": 633,
    "name": "Deino",
    "catchRate": 45,
    "weightKg": 17.3,
    "heightM": 0.8,
    "types": [
      "dark",
      "dragon"
    ],
    "baseStats": {
      "hp": 52,
      "attack": 65,
      "defense": 50,
      "specialAttack": 45,
      "specialDefense": 50,
      "speed": 38
    }
  },
  {
    "dexNumber": 634,
    "name": "Zweilous",
    "catchRate": 45,
    "weightKg": 50.0,
    "heightM": 1.4,
    "types": [
      "dark",
      "dragon"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 85,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 58
    }
  },
  {
    "dexNumber": 635,
    "name": "Hydreigon",
    "catchRate": 45,
    "weightKg": 160.0,
    "heightM": 1.8,
    "types": [
      "dark",
      "dragon"
    ],
    "baseStats": {
      "hp": 92,
      "attack": 105,
      "defense": 90,
      "specialAttack": 125,
      "specialDefense": 90,
      "speed": 98
    }
  },
  {
    "dexNumber": 636,
    "name": "Larvesta",
    "catchRate": 45,
    "weightKg": 28.8,
    "heightM": 1.1,
    "types": [
      "bug",
      "fire"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 85,
      "defense": 55,
      "specialAttack": 50,
      "specialDefense": 55,
      "speed": 60
    }
  },
  {
    "dexNumber": 637,
    "name": "Volcarona",
    "catchRate": 15,
    "weightKg": 46.0,
    "heightM": 1.6,
    "types": [
      "bug",
      "fire"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 60,
      "defense": 65,
      "specialAttack": 135,
      "specialDefense": 105,
      "speed": 100
    }
  },
  {
    "dexNumber": 638,
    "name": "Cobalion",
    "catchRate": 3,
    "weightKg": 250.0,
    "heightM": 2.1,
    "types": [
      "steel",
      "fighting"
    ],
    "baseStats": {
      "hp": 91,
      "attack": 90,
      "defense": 129,
      "specialAttack": 90,
      "specialDefense": 72,
      "speed": 108
    }
  },
  {
    "dexNumber": 639,
    "name": "Terrakion",
    "catchRate": 3,
    "weightKg": 260.0,
    "heightM": 1.9,
    "types": [
      "rock",
      "fighting"
    ],
    "baseStats": {
      "hp": 91,
      "attack": 129,
      "defense": 90,
      "specialAttack": 72,
      "specialDefense": 90,
      "speed": 108
    }
  },
  {
    "dexNumber": 640,
    "name": "Virizion",
    "catchRate": 3,
    "weightKg": 200.0,
    "heightM": 2.0,
    "types": [
      "grass",
      "fighting"
    ],
    "baseStats": {
      "hp": 91,
      "attack": 90,
      "defense": 72,
      "specialAttack": 90,
      "specialDefense": 129,
      "speed": 108
    }
  },
  {
    "dexNumber": 641,
    "name": "Tornadus",
    "catchRate": 3,
    "weightKg": 63.0,
    "heightM": 1.5,
    "types": [
      "flying"
    ],
    "baseStats": {
      "hp": 79,
      "attack": 115,
      "defense": 70,
      "specialAttack": 125,
      "specialDefense": 80,
      "speed": 111
    }
  },
  {
    "dexNumber": 642,
    "name": "Thundurus",
    "catchRate": 3,
    "weightKg": 61.0,
    "heightM": 1.5,
    "types": [
      "electric",
      "flying"
    ],
    "baseStats": {
      "hp": 79,
      "attack": 115,
      "defense": 70,
      "specialAttack": 125,
      "specialDefense": 80,
      "speed": 111
    }
  },
  {
    "dexNumber": 643,
    "name": "Reshiram",
    "catchRate": 3,
    "weightKg": 330.0,
    "heightM": 3.2,
    "types": [
      "dragon",
      "fire"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 120,
      "defense": 100,
      "specialAttack": 150,
      "specialDefense": 120,
      "speed": 90
    }
  },
  {
    "dexNumber": 644,
    "name": "Zekrom",
    "catchRate": 3,
    "weightKg": 345.0,
    "heightM": 2.9,
    "types": [
      "dragon",
      "electric"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 150,
      "defense": 120,
      "specialAttack": 120,
      "specialDefense": 100,
      "speed": 90
    }
  },
  {
    "dexNumber": 645,
    "name": "Landorus",
    "catchRate": 3,
    "weightKg": 68.0,
    "heightM": 1.5,
    "types": [
      "ground",
      "flying"
    ],
    "baseStats": {
      "hp": 89,
      "attack": 125,
      "defense": 90,
      "specialAttack": 115,
      "specialDefense": 80,
      "speed": 101
    }
  },
  {
    "dexNumber": 646,
    "name": "Kyurem",
    "catchRate": 3,
    "weightKg": 325.0,
    "heightM": 3.0,
    "types": [
      "dragon",
      "ice"
    ],
    "baseStats": {
      "hp": 125,
      "attack": 130,
      "defense": 90,
      "specialAttack": 130,
      "specialDefense": 90,
      "speed": 95
    }
  },
  {
    "dexNumber": 647,
    "name": "Keldeo",
    "catchRate": 3,
    "weightKg": 48.5,
    "heightM": 1.4,
    "types": [
      "water",
      "fighting"
    ],
    "baseStats": {
      "hp": 91,
      "attack": 72,
      "defense": 90,
      "specialAttack": 129,
      "specialDefense": 90,
      "speed": 108
    }
  },
  {
    "dexNumber": 648,
    "name": "Meloetta",
    "catchRate": 3,
    "weightKg": 6.5,
    "heightM": 0.6,
    "types": [
      "normal",
      "psychic"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 77,
      "defense": 77,
      "specialAttack": 128,
      "specialDefense": 128,
      "speed": 90
    }
  },
  {
    "dexNumber": 649,
    "name": "Genesect",
    "catchRate": 3,
    "weightKg": 82.5,
    "heightM": 1.5,
    "types": [
      "bug",
      "steel"
    ],
    "baseStats": {
      "hp": 71,
      "attack": 120,
      "defense": 95,
      "specialAttack": 120,
      "specialDefense": 95,
      "speed": 99
    }
  },
  {
    "dexNumber": 650,
    "name": "Chespin",
    "catchRate": 45,
    "weightKg": 9.0,
    "heightM": 0.4,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 56,
      "attack": 61,
      "defense": 65,
      "specialAttack": 48,
      "specialDefense": 45,
      "speed": 38
    }
  },
  {
    "dexNumber": 651,
    "name": "Quilladin",
    "catchRate": 45,
    "weightKg": 29.0,
    "heightM": 0.7,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 61,
      "attack": 78,
      "defense": 95,
      "specialAttack": 56,
      "specialDefense": 58,
      "speed": 57
    }
  },
  {
    "dexNumber": 652,
    "name": "Chesnaught",
    "catchRate": 45,
    "weightKg": 90.0,
    "heightM": 1.6,
    "types": [
      "grass",
      "fighting"
    ],
    "baseStats": {
      "hp": 88,
      "attack": 107,
      "defense": 122,
      "specialAttack": 74,
      "specialDefense": 75,
      "speed": 64
    }
  },
  {
    "dexNumber": 653,
    "name": "Fennekin",
    "catchRate": 45,
    "weightKg": 9.4,
    "heightM": 0.4,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "specialAttack": 62,
      "specialDefense": 60,
      "speed": 60
    }
  },
  {
    "dexNumber": 654,
    "name": "Braixen",
    "catchRate": 45,
    "weightKg": 14.5,
    "heightM": 1.0,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 59,
      "attack": 59,
      "defense": 58,
      "specialAttack": 90,
      "specialDefense": 70,
      "speed": 73
    }
  },
  {
    "dexNumber": 655,
    "name": "Delphox",
    "catchRate": 45,
    "weightKg": 39.0,
    "heightM": 1.5,
    "types": [
      "fire",
      "psychic"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 69,
      "defense": 72,
      "specialAttack": 114,
      "specialDefense": 100,
      "speed": 104
    }
  },
  {
    "dexNumber": 656,
    "name": "Froakie",
    "catchRate": 45,
    "weightKg": 7.0,
    "heightM": 0.3,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 41,
      "attack": 56,
      "defense": 40,
      "specialAttack": 62,
      "specialDefense": 44,
      "speed": 71
    }
  },
  {
    "dexNumber": 657,
    "name": "Frogadier",
    "catchRate": 45,
    "weightKg": 10.9,
    "heightM": 0.6,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 54,
      "attack": 63,
      "defense": 52,
      "specialAttack": 83,
      "specialDefense": 56,
      "speed": 97
    }
  },
  {
    "dexNumber": 658,
    "name": "Greninja",
    "catchRate": 45,
    "weightKg": 40.0,
    "heightM": 1.5,
    "types": [
      "water",
      "dark"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 95,
      "defense": 67,
      "specialAttack": 103,
      "specialDefense": 71,
      "speed": 122
    }
  },
  {
    "dexNumber": 659,
    "name": "Bunnelby",
    "catchRate": 255,
    "weightKg": 5.0,
    "heightM": 0.4,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 38,
      "attack": 36,
      "defense": 38,
      "specialAttack": 32,
      "specialDefense": 36,
      "speed": 57
    }
  },
  {
    "dexNumber": 660,
    "name": "Diggersby",
    "catchRate": 127,
    "weightKg": 42.4,
    "heightM": 1.0,
    "types": [
      "normal",
      "ground"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 56,
      "defense": 77,
      "specialAttack": 50,
      "specialDefense": 77,
      "speed": 78
    }
  },
  {
    "dexNumber": 661,
    "name": "Fletchling",
    "catchRate": 255,
    "weightKg": 1.7,
    "heightM": 0.3,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 50,
      "defense": 43,
      "specialAttack": 40,
      "specialDefense": 38,
      "speed": 62
    }
  },
  {
    "dexNumber": 662,
    "name": "Fletchinder",
    "catchRate": 120,
    "weightKg": 16.0,
    "heightM": 0.7,
    "types": [
      "fire",
      "flying"
    ],
    "baseStats": {
      "hp": 62,
      "attack": 73,
      "defense": 55,
      "specialAttack": 56,
      "specialDefense": 52,
      "speed": 84
    }
  },
  {
    "dexNumber": 663,
    "name": "Talonflame",
    "catchRate": 45,
    "weightKg": 24.5,
    "heightM": 1.2,
    "types": [
      "fire",
      "flying"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 81,
      "defense": 71,
      "specialAttack": 74,
      "specialDefense": 69,
      "speed": 126
    }
  },
  {
    "dexNumber": 664,
    "name": "Scatterbug",
    "catchRate": 255,
    "weightKg": 2.5,
    "heightM": 0.3,
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 38,
      "attack": 35,
      "defense": 40,
      "specialAttack": 27,
      "specialDefense": 25,
      "speed": 35
    }
  },
  {
    "dexNumber": 665,
    "name": "Spewpa",
    "catchRate": 120,
    "weightKg": 8.4,
    "heightM": 0.3,
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 22,
      "defense": 60,
      "specialAttack": 27,
      "specialDefense": 30,
      "speed": 29
    }
  },
  {
    "dexNumber": 666,
    "name": "Vivillon",
    "catchRate": 45,
    "weightKg": 17.0,
    "heightM": 1.2,
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 52,
      "defense": 50,
      "specialAttack": 90,
      "specialDefense": 50,
      "speed": 89
    }
  },
  {
    "dexNumber": 667,
    "name": "Litleo",
    "catchRate": 220,
    "weightKg": 13.5,
    "heightM": 0.6,
    "types": [
      "fire",
      "normal"
    ],
    "baseStats": {
      "hp": 62,
      "attack": 50,
      "defense": 58,
      "specialAttack": 73,
      "specialDefense": 54,
      "speed": 72
    }
  },
  {
    "dexNumber": 668,
    "name": "Pyroar",
    "catchRate": 65,
    "weightKg": 81.5,
    "heightM": 1.5,
    "types": [
      "fire",
      "normal"
    ],
    "baseStats": {
      "hp": 86,
      "attack": 68,
      "defense": 72,
      "specialAttack": 109,
      "specialDefense": 66,
      "speed": 106
    }
  },
  {
    "dexNumber": 669,
    "name": "Flabebe",
    "catchRate": 225,
    "weightKg": 0.1,
    "heightM": 0.1,
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 44,
      "attack": 38,
      "defense": 39,
      "specialAttack": 61,
      "specialDefense": 79,
      "speed": 42
    }
  },
  {
    "dexNumber": 670,
    "name": "Floette",
    "catchRate": 120,
    "weightKg": 0.9,
    "heightM": 0.2,
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 54,
      "attack": 45,
      "defense": 47,
      "specialAttack": 75,
      "specialDefense": 98,
      "speed": 52
    }
  },
  {
    "dexNumber": 672,
    "name": "Skiddo",
    "catchRate": 200,
    "weightKg": 31.0,
    "heightM": 0.9,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 66,
      "attack": 65,
      "defense": 48,
      "specialAttack": 62,
      "specialDefense": 57,
      "speed": 52
    }
  },
  {
    "dexNumber": 673,
    "name": "Gogoat",
    "catchRate": 45,
    "weightKg": 91.0,
    "heightM": 1.7,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 123,
      "attack": 100,
      "defense": 62,
      "specialAttack": 97,
      "specialDefense": 81,
      "speed": 68
    }
  },
  {
    "dexNumber": 674,
    "name": "Pancham",
    "catchRate": 220,
    "weightKg": 8.0,
    "heightM": 0.6,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 67,
      "attack": 82,
      "defense": 62,
      "specialAttack": 46,
      "specialDefense": 48,
      "speed": 43
    }
  },
  {
    "dexNumber": 675,
    "name": "Pangoro",
    "catchRate": 65,
    "weightKg": 136.0,
    "heightM": 2.1,
    "types": [
      "fighting",
      "dark"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 124,
      "defense": 78,
      "specialAttack": 69,
      "specialDefense": 71,
      "speed": 58
    }
  },
  {
    "dexNumber": 676,
    "name": "Furfrou",
    "catchRate": 160,
    "weightKg": 28.0,
    "heightM": 1.2,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 80,
      "defense": 60,
      "specialAttack": 65,
      "specialDefense": 90,
      "speed": 102
    }
  },
  {
    "dexNumber": 677,
    "name": "Espurr",
    "catchRate": 190,
    "weightKg": 3.5,
    "heightM": 0.3,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 62,
      "attack": 48,
      "defense": 54,
      "specialAttack": 63,
      "specialDefense": 60,
      "speed": 68
    }
  },
  {
    "dexNumber": 678,
    "name": "Meowstic",
    "catchRate": 75,
    "weightKg": 8.5,
    "heightM": 0.6,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 74,
      "attack": 48,
      "defense": 76,
      "specialAttack": 83,
      "specialDefense": 81,
      "speed": 104
    }
  },
  {
    "dexNumber": 679,
    "name": "Honedge",
    "catchRate": 180,
    "weightKg": 2.0,
    "heightM": 0.8,
    "types": [
      "steel",
      "ghost"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 80,
      "defense": 100,
      "specialAttack": 35,
      "specialDefense": 37,
      "speed": 28
    }
  },
  {
    "dexNumber": 681,
    "name": "Aegislash",
    "catchRate": 45,
    "weightKg": 53.0,
    "heightM": 1.7,
    "types": [
      "steel",
      "ghost"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 140,
      "specialAttack": 50,
      "specialDefense": 140,
      "speed": 60
    }
  },
  {
    "dexNumber": 682,
    "name": "Spritzee",
    "catchRate": 200,
    "weightKg": 0.5,
    "heightM": 0.2,
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 52,
      "defense": 60,
      "specialAttack": 63,
      "specialDefense": 65,
      "speed": 23
    }
  },
  {
    "dexNumber": 683,
    "name": "Aromatisse",
    "catchRate": 140,
    "weightKg": 15.5,
    "heightM": 0.8,
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 101,
      "attack": 72,
      "defense": 72,
      "specialAttack": 99,
      "specialDefense": 89,
      "speed": 29
    }
  },
  {
    "dexNumber": 684,
    "name": "Swirlix",
    "catchRate": 200,
    "weightKg": 3.5,
    "heightM": 0.4,
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 62,
      "attack": 48,
      "defense": 66,
      "specialAttack": 59,
      "specialDefense": 57,
      "speed": 49
    }
  },
  {
    "dexNumber": 685,
    "name": "Slurpuff",
    "catchRate": 140,
    "weightKg": 5.0,
    "heightM": 0.8,
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 82,
      "attack": 80,
      "defense": 86,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 72
    }
  },
  {
    "dexNumber": 686,
    "name": "Inkay",
    "catchRate": 190,
    "weightKg": 3.5,
    "heightM": 0.4,
    "types": [
      "dark",
      "psychic"
    ],
    "baseStats": {
      "hp": 53,
      "attack": 54,
      "defense": 53,
      "specialAttack": 37,
      "specialDefense": 46,
      "speed": 45
    }
  },
  {
    "dexNumber": 687,
    "name": "Malamar",
    "catchRate": 80,
    "weightKg": 47.0,
    "heightM": 1.5,
    "types": [
      "dark",
      "psychic"
    ],
    "baseStats": {
      "hp": 86,
      "attack": 92,
      "defense": 88,
      "specialAttack": 68,
      "specialDefense": 75,
      "speed": 73
    }
  },
  {
    "dexNumber": 688,
    "name": "Binacle",
    "catchRate": 120,
    "weightKg": 31.0,
    "heightM": 0.5,
    "types": [
      "rock",
      "water"
    ],
    "baseStats": {
      "hp": 42,
      "attack": 52,
      "defense": 67,
      "specialAttack": 39,
      "specialDefense": 56,
      "speed": 50
    }
  },
  {
    "dexNumber": 689,
    "name": "Barbaracle",
    "catchRate": 45,
    "weightKg": 96.0,
    "heightM": 1.3,
    "types": [
      "rock",
      "water"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 105,
      "defense": 115,
      "specialAttack": 54,
      "specialDefense": 86,
      "speed": 68
    }
  },
  {
    "dexNumber": 690,
    "name": "Skrelp",
    "catchRate": 225,
    "weightKg": 7.3,
    "heightM": 0.5,
    "types": [
      "poison",
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 60,
      "defense": 60,
      "specialAttack": 60,
      "specialDefense": 60,
      "speed": 30
    }
  },
  {
    "dexNumber": 691,
    "name": "Dragalge",
    "catchRate": 55,
    "weightKg": 81.5,
    "heightM": 1.8,
    "types": [
      "poison",
      "dragon"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 75,
      "defense": 90,
      "specialAttack": 97,
      "specialDefense": 123,
      "speed": 44
    }
  },
  {
    "dexNumber": 692,
    "name": "Clauncher",
    "catchRate": 225,
    "weightKg": 8.3,
    "heightM": 0.5,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 53,
      "defense": 62,
      "specialAttack": 58,
      "specialDefense": 63,
      "speed": 44
    }
  },
  {
    "dexNumber": 693,
    "name": "Clawitzer",
    "catchRate": 55,
    "weightKg": 35.3,
    "heightM": 1.3,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 71,
      "attack": 73,
      "defense": 88,
      "specialAttack": 120,
      "specialDefense": 89,
      "speed": 59
    }
  },
  {
    "dexNumber": 694,
    "name": "Helioptile",
    "catchRate": 190,
    "weightKg": 6.0,
    "heightM": 0.5,
    "types": [
      "electric",
      "normal"
    ],
    "baseStats": {
      "hp": 44,
      "attack": 38,
      "defense": 33,
      "specialAttack": 61,
      "specialDefense": 43,
      "speed": 70
    }
  },
  {
    "dexNumber": 695,
    "name": "Heliolisk",
    "catchRate": 75,
    "weightKg": 21.0,
    "heightM": 1.0,
    "types": [
      "electric",
      "normal"
    ],
    "baseStats": {
      "hp": 62,
      "attack": 55,
      "defense": 52,
      "specialAttack": 109,
      "specialDefense": 94,
      "speed": 109
    }
  },
  {
    "dexNumber": 696,
    "name": "Tyrunt",
    "catchRate": 45,
    "weightKg": 26.0,
    "heightM": 0.8,
    "types": [
      "rock",
      "dragon"
    ],
    "baseStats": {
      "hp": 58,
      "attack": 89,
      "defense": 77,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 48
    }
  },
  {
    "dexNumber": 697,
    "name": "Tyrantrum",
    "catchRate": 45,
    "weightKg": 270.0,
    "heightM": 2.5,
    "types": [
      "rock",
      "dragon"
    ],
    "baseStats": {
      "hp": 82,
      "attack": 121,
      "defense": 119,
      "specialAttack": 69,
      "specialDefense": 59,
      "speed": 71
    }
  },
  {
    "dexNumber": 698,
    "name": "Amaura",
    "catchRate": 45,
    "weightKg": 25.2,
    "heightM": 1.3,
    "types": [
      "rock",
      "ice"
    ],
    "baseStats": {
      "hp": 77,
      "attack": 59,
      "defense": 50,
      "specialAttack": 67,
      "specialDefense": 63,
      "speed": 46
    }
  },
  {
    "dexNumber": 699,
    "name": "Aurorus",
    "catchRate": 45,
    "weightKg": 225.0,
    "heightM": 2.7,
    "types": [
      "rock",
      "ice"
    ],
    "baseStats": {
      "hp": 123,
      "attack": 77,
      "defense": 72,
      "specialAttack": 99,
      "specialDefense": 92,
      "speed": 58
    }
  },
  {
    "dexNumber": 700,
    "name": "Sylveon",
    "catchRate": 45,
    "weightKg": 23.5,
    "heightM": 1.0,
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 65,
      "defense": 65,
      "specialAttack": 110,
      "specialDefense": 130,
      "speed": 60
    }
  },
  {
    "dexNumber": 701,
    "name": "Hawlucha",
    "catchRate": 100,
    "weightKg": 21.5,
    "heightM": 0.8,
    "types": [
      "fighting",
      "flying"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 92,
      "defense": 75,
      "specialAttack": 74,
      "specialDefense": 63,
      "speed": 118
    }
  },
  {
    "dexNumber": 702,
    "name": "Dedenne",
    "catchRate": 180,
    "weightKg": 2.2,
    "heightM": 0.2,
    "types": [
      "electric",
      "fairy"
    ],
    "baseStats": {
      "hp": 67,
      "attack": 58,
      "defense": 57,
      "specialAttack": 81,
      "specialDefense": 67,
      "speed": 101
    }
  },
  {
    "dexNumber": 703,
    "name": "Carbink",
    "catchRate": 60,
    "weightKg": 5.7,
    "heightM": 0.3,
    "types": [
      "rock",
      "fairy"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 50,
      "defense": 150,
      "specialAttack": 50,
      "specialDefense": 150,
      "speed": 50
    }
  },
  {
    "dexNumber": 704,
    "name": "Goomy",
    "catchRate": 45,
    "weightKg": 2.8,
    "heightM": 0.3,
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 50,
      "defense": 35,
      "specialAttack": 55,
      "specialDefense": 75,
      "speed": 40
    }
  },
  {
    "dexNumber": 705,
    "name": "Sliggoo",
    "catchRate": 45,
    "weightKg": 17.5,
    "heightM": 0.8,
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 75,
      "defense": 53,
      "specialAttack": 83,
      "specialDefense": 113,
      "speed": 60
    }
  },
  {
    "dexNumber": 706,
    "name": "Goodra",
    "catchRate": 45,
    "weightKg": 150.5,
    "heightM": 2.0,
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 100,
      "defense": 70,
      "specialAttack": 110,
      "specialDefense": 150,
      "speed": 80
    }
  },
  {
    "dexNumber": 707,
    "name": "Klefki",
    "catchRate": 75,
    "weightKg": 3.0,
    "heightM": 0.2,
    "types": [
      "steel",
      "fairy"
    ],
    "baseStats": {
      "hp": 57,
      "attack": 80,
      "defense": 91,
      "specialAttack": 80,
      "specialDefense": 87,
      "speed": 75
    }
  },
  {
    "dexNumber": 708,
    "name": "Phantump",
    "catchRate": 120,
    "weightKg": 7.0,
    "heightM": 0.4,
    "types": [
      "ghost",
      "grass"
    ],
    "baseStats": {
      "hp": 43,
      "attack": 70,
      "defense": 48,
      "specialAttack": 50,
      "specialDefense": 60,
      "speed": 38
    }
  },
  {
    "dexNumber": 709,
    "name": "Trevenant",
    "catchRate": 60,
    "weightKg": 71.0,
    "heightM": 1.5,
    "types": [
      "ghost",
      "grass"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 110,
      "defense": 76,
      "specialAttack": 65,
      "specialDefense": 82,
      "speed": 56
    }
  },
  {
    "dexNumber": 710,
    "name": "Pumpkaboo",
    "catchRate": 120,
    "weightKg": 5.0,
    "heightM": 0.4,
    "types": [
      "ghost",
      "grass"
    ],
    "baseStats": {
      "hp": 49,
      "attack": 66,
      "defense": 70,
      "specialAttack": 44,
      "specialDefense": 55,
      "speed": 51
    }
  },
  {
    "dexNumber": 711,
    "name": "Gourgeist",
    "catchRate": 60,
    "weightKg": 12.5,
    "heightM": 0.9,
    "types": [
      "ghost",
      "grass"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 90,
      "defense": 122,
      "specialAttack": 58,
      "specialDefense": 75,
      "speed": 84
    }
  },
  {
    "dexNumber": 712,
    "name": "Bergmite",
    "catchRate": 190,
    "weightKg": 99.5,
    "heightM": 1.0,
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 69,
      "defense": 85,
      "specialAttack": 32,
      "specialDefense": 35,
      "speed": 28
    }
  },
  {
    "dexNumber": 713,
    "name": "Avalugg",
    "catchRate": 55,
    "weightKg": 505.0,
    "heightM": 2.0,
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 117,
      "defense": 184,
      "specialAttack": 44,
      "specialDefense": 46,
      "speed": 28
    }
  },
  {
    "dexNumber": 714,
    "name": "Noibat",
    "catchRate": 190,
    "weightKg": 8.0,
    "heightM": 0.5,
    "types": [
      "flying",
      "dragon"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 30,
      "defense": 35,
      "specialAttack": 45,
      "specialDefense": 40,
      "speed": 55
    }
  },
  {
    "dexNumber": 715,
    "name": "Noivern",
    "catchRate": 45,
    "weightKg": 85.0,
    "heightM": 1.5,
    "types": [
      "flying",
      "dragon"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 70,
      "defense": 80,
      "specialAttack": 97,
      "specialDefense": 80,
      "speed": 123
    }
  },
  {
    "dexNumber": 716,
    "name": "Xerneas",
    "catchRate": 45,
    "weightKg": 215.0,
    "heightM": 3.0,
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 126,
      "attack": 131,
      "defense": 95,
      "specialAttack": 131,
      "specialDefense": 98,
      "speed": 99
    }
  },
  {
    "dexNumber": 717,
    "name": "Yveltal",
    "catchRate": 45,
    "weightKg": 203.0,
    "heightM": 5.8,
    "types": [
      "dark",
      "flying"
    ],
    "baseStats": {
      "hp": 126,
      "attack": 131,
      "defense": 95,
      "specialAttack": 131,
      "specialDefense": 98,
      "speed": 99
    }
  },
  {
    "dexNumber": 718,
    "name": "Zygarde",
    "catchRate": 3,
    "weightKg": 305.0,
    "heightM": 5.0,
    "types": [
      "dragon",
      "ground"
    ],
    "baseStats": {
      "hp": 108,
      "attack": 100,
      "defense": 121,
      "specialAttack": 81,
      "specialDefense": 95,
      "speed": 95
    }
  },
  {
    "dexNumber": 719,
    "name": "Diancie",
    "catchRate": 3,
    "weightKg": 8.8,
    "heightM": 0.7,
    "types": [
      "rock",
      "fairy"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 100,
      "defense": 150,
      "specialAttack": 100,
      "specialDefense": 150,
      "speed": 50
    }
  },
  {
    "dexNumber": 720,
    "name": "Hoopa",
    "catchRate": 3,
    "weightKg": 9.0,
    "heightM": 0.5,
    "types": [
      "psychic",
      "ghost"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 110,
      "defense": 60,
      "specialAttack": 150,
      "specialDefense": 130,
      "speed": 70
    }
  },
  {
    "dexNumber": 721,
    "name": "Volcanion",
    "catchRate": 3,
    "weightKg": 195.0,
    "heightM": 1.7,
    "types": [
      "fire",
      "water"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 110,
      "defense": 120,
      "specialAttack": 130,
      "specialDefense": 90,
      "speed": 70
    }
  },
  {
    "dexNumber": 722,
    "name": "Rowlet",
    "catchRate": 45,
    "weightKg": 1.5,
    "heightM": 0.3,
    "types": [
      "grass",
      "flying"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 55,
      "defense": 55,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 42
    }
  },
  {
    "dexNumber": 723,
    "name": "Dartrix",
    "catchRate": 45,
    "weightKg": 16.0,
    "heightM": 0.7,
    "types": [
      "grass",
      "flying"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 75,
      "defense": 75,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 52
    }
  },
  {
    "dexNumber": 724,
    "name": "Decidueye",
    "catchRate": 45,
    "weightKg": 36.6,
    "heightM": 1.6,
    "types": [
      "grass",
      "ghost"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 107,
      "defense": 75,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 70
    }
  },
  {
    "dexNumber": 725,
    "name": "Litten",
    "catchRate": 45,
    "weightKg": 4.3,
    "heightM": 0.4,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 65,
      "defense": 40,
      "specialAttack": 60,
      "specialDefense": 40,
      "speed": 70
    }
  },
  {
    "dexNumber": 726,
    "name": "Torracat",
    "catchRate": 45,
    "weightKg": 25.0,
    "heightM": 0.7,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 85,
      "defense": 50,
      "specialAttack": 80,
      "specialDefense": 50,
      "speed": 90
    }
  },
  {
    "dexNumber": 727,
    "name": "Incineroar",
    "catchRate": 45,
    "weightKg": 83.0,
    "heightM": 1.8,
    "types": [
      "fire",
      "dark"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 115,
      "defense": 90,
      "specialAttack": 80,
      "specialDefense": 90,
      "speed": 60
    }
  },
  {
    "dexNumber": 728,
    "name": "Popplio",
    "catchRate": 45,
    "weightKg": 7.5,
    "heightM": 0.4,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 54,
      "defense": 54,
      "specialAttack": 66,
      "specialDefense": 56,
      "speed": 40
    }
  },
  {
    "dexNumber": 729,
    "name": "Brionne",
    "catchRate": 45,
    "weightKg": 17.5,
    "heightM": 0.6,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 69,
      "defense": 69,
      "specialAttack": 91,
      "specialDefense": 81,
      "speed": 50
    }
  },
  {
    "dexNumber": 730,
    "name": "Primarina",
    "catchRate": 45,
    "weightKg": 44.0,
    "heightM": 1.8,
    "types": [
      "water",
      "fairy"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 74,
      "defense": 74,
      "specialAttack": 126,
      "specialDefense": 116,
      "speed": 60
    }
  },
  {
    "dexNumber": 731,
    "name": "Pikipek",
    "catchRate": 255,
    "weightKg": 1.2,
    "heightM": 0.3,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 75,
      "defense": 30,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 65
    }
  },
  {
    "dexNumber": 732,
    "name": "Trumbeak",
    "catchRate": 120,
    "weightKg": 14.8,
    "heightM": 0.6,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 85,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 75
    }
  },
  {
    "dexNumber": 733,
    "name": "Toucannon",
    "catchRate": 45,
    "weightKg": 26.0,
    "heightM": 1.1,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 120,
      "defense": 75,
      "specialAttack": 75,
      "specialDefense": 75,
      "speed": 60
    }
  },
  {
    "dexNumber": 734,
    "name": "Yungoos",
    "catchRate": 255,
    "weightKg": 6.0,
    "heightM": 0.4,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 48,
      "attack": 70,
      "defense": 30,
      "specialAttack": 30,
      "specialDefense": 30,
      "speed": 45
    }
  },
  {
    "dexNumber": 735,
    "name": "Gumshoos",
    "catchRate": 127,
    "weightKg": 14.2,
    "heightM": 0.7,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 88,
      "attack": 110,
      "defense": 60,
      "specialAttack": 55,
      "specialDefense": 60,
      "speed": 45
    }
  },
  {
    "dexNumber": 736,
    "name": "Grubbin",
    "catchRate": 255,
    "weightKg": 4.4,
    "heightM": 0.4,
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 47,
      "attack": 62,
      "defense": 45,
      "specialAttack": 55,
      "specialDefense": 45,
      "speed": 46
    }
  },
  {
    "dexNumber": 737,
    "name": "Charjabug",
    "catchRate": 120,
    "weightKg": 10.5,
    "heightM": 0.5,
    "types": [
      "bug",
      "electric"
    ],
    "baseStats": {
      "hp": 57,
      "attack": 82,
      "defense": 95,
      "specialAttack": 55,
      "specialDefense": 75,
      "speed": 36
    }
  },
  {
    "dexNumber": 738,
    "name": "Vikavolt",
    "catchRate": 45,
    "weightKg": 45.0,
    "heightM": 1.5,
    "types": [
      "bug",
      "electric"
    ],
    "baseStats": {
      "hp": 77,
      "attack": 70,
      "defense": 90,
      "specialAttack": 145,
      "specialDefense": 75,
      "speed": 43
    }
  },
  {
    "dexNumber": 739,
    "name": "Crabrawler",
    "catchRate": 225,
    "weightKg": 7.0,
    "heightM": 0.6,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 47,
      "attack": 82,
      "defense": 57,
      "specialAttack": 42,
      "specialDefense": 47,
      "speed": 63
    }
  },
  {
    "dexNumber": 740,
    "name": "Crabominable",
    "catchRate": 60,
    "weightKg": 180.0,
    "heightM": 1.7,
    "types": [
      "fighting",
      "ice"
    ],
    "baseStats": {
      "hp": 97,
      "attack": 132,
      "defense": 77,
      "specialAttack": 62,
      "specialDefense": 67,
      "speed": 43
    }
  },
  {
    "dexNumber": 741,
    "name": "Oricorio",
    "catchRate": 45,
    "weightKg": 3.4,
    "heightM": 0.6,
    "types": [
      "fire",
      "flying"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 70,
      "defense": 70,
      "specialAttack": 98,
      "specialDefense": 70,
      "speed": 93
    }
  },
  {
    "dexNumber": 742,
    "name": "Cutiefly",
    "catchRate": 190,
    "weightKg": 0.2,
    "heightM": 0.1,
    "types": [
      "bug",
      "fairy"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "specialAttack": 55,
      "specialDefense": 40,
      "speed": 84
    }
  },
  {
    "dexNumber": 743,
    "name": "Ribombee",
    "catchRate": 75,
    "weightKg": 0.5,
    "heightM": 0.2,
    "types": [
      "bug",
      "fairy"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 55,
      "defense": 60,
      "specialAttack": 95,
      "specialDefense": 70,
      "speed": 124
    }
  },
  {
    "dexNumber": 744,
    "name": "Rockruff",
    "catchRate": 190,
    "weightKg": 9.2,
    "heightM": 0.5,
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 65,
      "defense": 40,
      "specialAttack": 30,
      "specialDefense": 40,
      "speed": 60
    }
  },
  {
    "dexNumber": 745,
    "name": "Lycanroc",
    "catchRate": 90,
    "weightKg": 25.0,
    "heightM": 0.8,
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 115,
      "defense": 65,
      "specialAttack": 55,
      "specialDefense": 65,
      "speed": 112
    }
  },
  {
    "dexNumber": 746,
    "name": "Wishiwashi",
    "catchRate": 60,
    "weightKg": 0.3,
    "heightM": 0.2,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 20,
      "defense": 20,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 40
    }
  },
  {
    "dexNumber": 747,
    "name": "Mareanie",
    "catchRate": 190,
    "weightKg": 8.0,
    "heightM": 0.4,
    "types": [
      "poison",
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 53,
      "defense": 62,
      "specialAttack": 43,
      "specialDefense": 52,
      "speed": 45
    }
  },
  {
    "dexNumber": 748,
    "name": "Toxapex",
    "catchRate": 75,
    "weightKg": 14.5,
    "heightM": 0.7,
    "types": [
      "poison",
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 63,
      "defense": 152,
      "specialAttack": 53,
      "specialDefense": 142,
      "speed": 35
    }
  },
  {
    "dexNumber": 749,
    "name": "Mudbray",
    "catchRate": 190,
    "weightKg": 110.0,
    "heightM": 1.0,
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 100,
      "defense": 70,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 45
    }
  },
  {
    "dexNumber": 750,
    "name": "Mudsdale",
    "catchRate": 60,
    "weightKg": 920.0,
    "heightM": 2.5,
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 125,
      "defense": 100,
      "specialAttack": 55,
      "specialDefense": 85,
      "speed": 35
    }
  },
  {
    "dexNumber": 751,
    "name": "Dewpider",
    "catchRate": 200,
    "weightKg": 4.0,
    "heightM": 0.3,
    "types": [
      "water",
      "bug"
    ],
    "baseStats": {
      "hp": 38,
      "attack": 40,
      "defense": 52,
      "specialAttack": 40,
      "specialDefense": 72,
      "speed": 27
    }
  },
  {
    "dexNumber": 752,
    "name": "Araquanid",
    "catchRate": 100,
    "weightKg": 82.0,
    "heightM": 1.8,
    "types": [
      "water",
      "bug"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 70,
      "defense": 92,
      "specialAttack": 50,
      "specialDefense": 132,
      "speed": 42
    }
  },
  {
    "dexNumber": 753,
    "name": "Fomantis",
    "catchRate": 190,
    "weightKg": 1.5,
    "heightM": 0.3,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 55,
      "defense": 35,
      "specialAttack": 50,
      "specialDefense": 35,
      "speed": 35
    }
  },
  {
    "dexNumber": 754,
    "name": "Lurantis",
    "catchRate": 75,
    "weightKg": 18.5,
    "heightM": 0.9,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 105,
      "defense": 90,
      "specialAttack": 80,
      "specialDefense": 90,
      "speed": 45
    }
  },
  {
    "dexNumber": 755,
    "name": "Morelull",
    "catchRate": 190,
    "weightKg": 1.5,
    "heightM": 0.2,
    "types": [
      "grass",
      "fairy"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 35,
      "defense": 55,
      "specialAttack": 65,
      "specialDefense": 75,
      "speed": 15
    }
  },
  {
    "dexNumber": 756,
    "name": "Shiinotic",
    "catchRate": 75,
    "weightKg": 11.5,
    "heightM": 1.0,
    "types": [
      "grass",
      "fairy"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 45,
      "defense": 80,
      "specialAttack": 90,
      "specialDefense": 100,
      "speed": 30
    }
  },
  {
    "dexNumber": 757,
    "name": "Salandit",
    "catchRate": 120,
    "weightKg": 4.8,
    "heightM": 0.6,
    "types": [
      "poison",
      "fire"
    ],
    "baseStats": {
      "hp": 48,
      "attack": 44,
      "defense": 40,
      "specialAttack": 71,
      "specialDefense": 40,
      "speed": 77
    }
  },
  {
    "dexNumber": 758,
    "name": "Salazzle",
    "catchRate": 45,
    "weightKg": 22.2,
    "heightM": 1.2,
    "types": [
      "poison",
      "fire"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 64,
      "defense": 60,
      "specialAttack": 111,
      "specialDefense": 60,
      "speed": 117
    }
  },
  {
    "dexNumber": 759,
    "name": "Stufful",
    "catchRate": 140,
    "weightKg": 6.8,
    "heightM": 0.5,
    "types": [
      "normal",
      "fighting"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 75,
      "defense": 50,
      "specialAttack": 45,
      "specialDefense": 50,
      "speed": 50
    }
  },
  {
    "dexNumber": 760,
    "name": "Bewear",
    "catchRate": 70,
    "weightKg": 135.0,
    "heightM": 2.1,
    "types": [
      "normal",
      "fighting"
    ],
    "baseStats": {
      "hp": 120,
      "attack": 125,
      "defense": 80,
      "specialAttack": 55,
      "specialDefense": 60,
      "speed": 60
    }
  },
  {
    "dexNumber": 761,
    "name": "Bounsweet",
    "catchRate": 235,
    "weightKg": 3.2,
    "heightM": 0.3,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 42,
      "attack": 30,
      "defense": 38,
      "specialAttack": 30,
      "specialDefense": 38,
      "speed": 32
    }
  },
  {
    "dexNumber": 762,
    "name": "Steenee",
    "catchRate": 120,
    "weightKg": 8.2,
    "heightM": 0.7,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 52,
      "attack": 40,
      "defense": 48,
      "specialAttack": 40,
      "specialDefense": 48,
      "speed": 62
    }
  },
  {
    "dexNumber": 763,
    "name": "Tsareena",
    "catchRate": 45,
    "weightKg": 21.4,
    "heightM": 1.2,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 120,
      "defense": 98,
      "specialAttack": 50,
      "specialDefense": 98,
      "speed": 72
    }
  },
  {
    "dexNumber": 764,
    "name": "Comfey",
    "catchRate": 60,
    "weightKg": 0.3,
    "heightM": 0.1,
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 51,
      "attack": 52,
      "defense": 90,
      "specialAttack": 82,
      "specialDefense": 110,
      "speed": 100
    }
  },
  {
    "dexNumber": 765,
    "name": "Oranguru",
    "catchRate": 45,
    "weightKg": 76.0,
    "heightM": 1.5,
    "types": [
      "normal",
      "psychic"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 60,
      "defense": 80,
      "specialAttack": 90,
      "specialDefense": 110,
      "speed": 60
    }
  },
  {
    "dexNumber": 766,
    "name": "Passimian",
    "catchRate": 45,
    "weightKg": 82.8,
    "heightM": 2.0,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 120,
      "defense": 90,
      "specialAttack": 40,
      "specialDefense": 60,
      "speed": 80
    }
  },
  {
    "dexNumber": 767,
    "name": "Wimpod",
    "catchRate": 90,
    "weightKg": 12.0,
    "heightM": 0.5,
    "types": [
      "bug",
      "water"
    ],
    "baseStats": {
      "hp": 25,
      "attack": 35,
      "defense": 40,
      "specialAttack": 20,
      "specialDefense": 30,
      "speed": 80
    }
  },
  {
    "dexNumber": 768,
    "name": "Golisopod",
    "catchRate": 45,
    "weightKg": 108.0,
    "heightM": 2.0,
    "types": [
      "bug",
      "water"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 125,
      "defense": 140,
      "specialAttack": 60,
      "specialDefense": 90,
      "speed": 40
    }
  },
  {
    "dexNumber": 769,
    "name": "Sandygast",
    "catchRate": 140,
    "weightKg": 70.0,
    "heightM": 0.5,
    "types": [
      "ghost",
      "ground"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 55,
      "defense": 80,
      "specialAttack": 70,
      "specialDefense": 45,
      "speed": 15
    }
  },
  {
    "dexNumber": 770,
    "name": "Palossand",
    "catchRate": 60,
    "weightKg": 250.0,
    "heightM": 1.3,
    "types": [
      "ghost",
      "ground"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 75,
      "defense": 110,
      "specialAttack": 100,
      "specialDefense": 75,
      "speed": 35
    }
  },
  {
    "dexNumber": 771,
    "name": "Pyukumuku",
    "catchRate": 60,
    "weightKg": 1.2,
    "heightM": 0.3,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 60,
      "defense": 130,
      "specialAttack": 30,
      "specialDefense": 130,
      "speed": 5
    }
  },
  {
    "dexNumber": 772,
    "name": "Type Null",
    "catchRate": 3,
    "weightKg": 120.5,
    "heightM": 1.9,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 95,
      "defense": 95,
      "specialAttack": 95,
      "specialDefense": 95,
      "speed": 59
    }
  },
  {
    "dexNumber": 773,
    "name": "Silvally",
    "catchRate": 3,
    "weightKg": 100.5,
    "heightM": 2.3,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 95,
      "defense": 95,
      "specialAttack": 95,
      "specialDefense": 95,
      "speed": 95
    }
  },
  {
    "dexNumber": 774,
    "name": "Minior",
    "catchRate": 30,
    "weightKg": 40.0,
    "heightM": 0.3,
    "types": [
      "rock",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 100,
      "specialAttack": 60,
      "specialDefense": 100,
      "speed": 60
    }
  },
  {
    "dexNumber": 775,
    "name": "Komala",
    "catchRate": 45,
    "weightKg": 19.9,
    "heightM": 0.4,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 115,
      "defense": 65,
      "specialAttack": 75,
      "specialDefense": 95,
      "speed": 65
    }
  },
  {
    "dexNumber": 776,
    "name": "Turtonator",
    "catchRate": 70,
    "weightKg": 212.0,
    "heightM": 2.0,
    "types": [
      "fire",
      "dragon"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 78,
      "defense": 135,
      "specialAttack": 91,
      "specialDefense": 85,
      "speed": 36
    }
  },
  {
    "dexNumber": 777,
    "name": "Togedemaru",
    "catchRate": 180,
    "weightKg": 3.3,
    "heightM": 0.3,
    "types": [
      "electric",
      "steel"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 98,
      "defense": 63,
      "specialAttack": 40,
      "specialDefense": 73,
      "speed": 96
    }
  },
  {
    "dexNumber": 778,
    "name": "Mimikyu",
    "catchRate": 45,
    "weightKg": 0.7,
    "heightM": 0.2,
    "types": [
      "ghost",
      "fairy"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 90,
      "defense": 80,
      "specialAttack": 50,
      "specialDefense": 105,
      "speed": 96
    }
  },
  {
    "dexNumber": 779,
    "name": "Bruxish",
    "catchRate": 80,
    "weightKg": 19.0,
    "heightM": 0.9,
    "types": [
      "water",
      "psychic"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 105,
      "defense": 70,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 92
    }
  },
  {
    "dexNumber": 780,
    "name": "Drampa",
    "catchRate": 70,
    "weightKg": 185.0,
    "heightM": 3.0,
    "types": [
      "normal",
      "dragon"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 60,
      "defense": 85,
      "specialAttack": 135,
      "specialDefense": 91,
      "speed": 36
    }
  },
  {
    "dexNumber": 781,
    "name": "Dhelmise",
    "catchRate": 25,
    "weightKg": 210.0,
    "heightM": 3.9,
    "types": [
      "ghost",
      "grass"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 131,
      "defense": 100,
      "specialAttack": 86,
      "specialDefense": 90,
      "speed": 40
    }
  },
  {
    "dexNumber": 782,
    "name": "Jangmo O",
    "catchRate": 45,
    "weightKg": 29.7,
    "heightM": 0.6,
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 55,
      "defense": 65,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 45
    }
  },
  {
    "dexNumber": 783,
    "name": "Hakamo O",
    "catchRate": 45,
    "weightKg": 47.0,
    "heightM": 1.2,
    "types": [
      "dragon",
      "fighting"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 75,
      "defense": 90,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 65
    }
  },
  {
    "dexNumber": 784,
    "name": "Kommo O",
    "catchRate": 45,
    "weightKg": 78.2,
    "heightM": 1.6,
    "types": [
      "dragon",
      "fighting"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 110,
      "defense": 125,
      "specialAttack": 100,
      "specialDefense": 105,
      "speed": 85
    }
  },
  {
    "dexNumber": 785,
    "name": "Tapu Koko",
    "catchRate": 3,
    "weightKg": 20.5,
    "heightM": 1.8,
    "types": [
      "electric",
      "fairy"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 115,
      "defense": 85,
      "specialAttack": 95,
      "specialDefense": 75,
      "speed": 130
    }
  },
  {
    "dexNumber": 786,
    "name": "Tapu Lele",
    "catchRate": 3,
    "weightKg": 18.6,
    "heightM": 1.2,
    "types": [
      "psychic",
      "fairy"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 75,
      "specialAttack": 130,
      "specialDefense": 115,
      "speed": 95
    }
  },
  {
    "dexNumber": 787,
    "name": "Tapu Bulu",
    "catchRate": 3,
    "weightKg": 45.5,
    "heightM": 1.9,
    "types": [
      "grass",
      "fairy"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 130,
      "defense": 115,
      "specialAttack": 85,
      "specialDefense": 95,
      "speed": 75
    }
  },
  {
    "dexNumber": 788,
    "name": "Tapu Fini",
    "catchRate": 3,
    "weightKg": 21.2,
    "heightM": 1.3,
    "types": [
      "water",
      "fairy"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 75,
      "defense": 115,
      "specialAttack": 95,
      "specialDefense": 130,
      "speed": 85
    }
  },
  {
    "dexNumber": 789,
    "name": "Cosmog",
    "catchRate": 45,
    "weightKg": 0.1,
    "heightM": 0.2,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 43,
      "attack": 29,
      "defense": 31,
      "specialAttack": 29,
      "specialDefense": 31,
      "speed": 37
    }
  },
  {
    "dexNumber": 790,
    "name": "Cosmoem",
    "catchRate": 45,
    "weightKg": 999.9,
    "heightM": 0.1,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 43,
      "attack": 29,
      "defense": 131,
      "specialAttack": 29,
      "specialDefense": 131,
      "speed": 37
    }
  },
  {
    "dexNumber": 791,
    "name": "Solgaleo",
    "catchRate": 45,
    "weightKg": 230.0,
    "heightM": 3.4,
    "types": [
      "psychic",
      "steel"
    ],
    "baseStats": {
      "hp": 137,
      "attack": 137,
      "defense": 107,
      "specialAttack": 113,
      "specialDefense": 89,
      "speed": 97
    }
  },
  {
    "dexNumber": 792,
    "name": "Lunala",
    "catchRate": 45,
    "weightKg": 120.0,
    "heightM": 4.0,
    "types": [
      "psychic",
      "ghost"
    ],
    "baseStats": {
      "hp": 137,
      "attack": 113,
      "defense": 89,
      "specialAttack": 137,
      "specialDefense": 107,
      "speed": 97
    }
  },
  {
    "dexNumber": 793,
    "name": "Nihilego",
    "catchRate": 45,
    "weightKg": 55.5,
    "heightM": 1.2,
    "types": [
      "rock",
      "poison"
    ],
    "baseStats": {
      "hp": 109,
      "attack": 53,
      "defense": 47,
      "specialAttack": 127,
      "specialDefense": 131,
      "speed": 103
    }
  },
  {
    "dexNumber": 794,
    "name": "Buzzwole",
    "catchRate": 45,
    "weightKg": 333.6,
    "heightM": 2.4,
    "types": [
      "bug",
      "fighting"
    ],
    "baseStats": {
      "hp": 107,
      "attack": 139,
      "defense": 139,
      "specialAttack": 53,
      "specialDefense": 53,
      "speed": 79
    }
  },
  {
    "dexNumber": 795,
    "name": "Pheromosa",
    "catchRate": 45,
    "weightKg": 25.0,
    "heightM": 1.8,
    "types": [
      "bug",
      "fighting"
    ],
    "baseStats": {
      "hp": 71,
      "attack": 137,
      "defense": 37,
      "specialAttack": 137,
      "specialDefense": 37,
      "speed": 151
    }
  },
  {
    "dexNumber": 796,
    "name": "Xurkitree",
    "catchRate": 45,
    "weightKg": 100.0,
    "heightM": 3.8,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 83,
      "attack": 89,
      "defense": 71,
      "specialAttack": 173,
      "specialDefense": 71,
      "speed": 83
    }
  },
  {
    "dexNumber": 797,
    "name": "Celesteela",
    "catchRate": 45,
    "weightKg": 999.9,
    "heightM": 9.2,
    "types": [
      "steel",
      "flying"
    ],
    "baseStats": {
      "hp": 97,
      "attack": 101,
      "defense": 103,
      "specialAttack": 107,
      "specialDefense": 101,
      "speed": 61
    }
  },
  {
    "dexNumber": 798,
    "name": "Kartana",
    "catchRate": 45,
    "weightKg": 0.1,
    "heightM": 0.3,
    "types": [
      "grass",
      "steel"
    ],
    "baseStats": {
      "hp": 59,
      "attack": 181,
      "defense": 131,
      "specialAttack": 59,
      "specialDefense": 31,
      "speed": 109
    }
  },
  {
    "dexNumber": 799,
    "name": "Guzzlord",
    "catchRate": 45,
    "weightKg": 888.0,
    "heightM": 5.5,
    "types": [
      "dark",
      "dragon"
    ],
    "baseStats": {
      "hp": 223,
      "attack": 101,
      "defense": 53,
      "specialAttack": 97,
      "specialDefense": 53,
      "speed": 43
    }
  },
  {
    "dexNumber": 800,
    "name": "Necrozma",
    "catchRate": 255,
    "weightKg": 230.0,
    "heightM": 2.4,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 97,
      "attack": 107,
      "defense": 101,
      "specialAttack": 127,
      "specialDefense": 89,
      "speed": 79
    }
  },
  {
    "dexNumber": 801,
    "name": "Magearna",
    "catchRate": 3,
    "weightKg": 80.5,
    "heightM": 1.0,
    "types": [
      "steel",
      "fairy"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 95,
      "defense": 115,
      "specialAttack": 130,
      "specialDefense": 115,
      "speed": 65
    }
  },
  {
    "dexNumber": 802,
    "name": "Marshadow",
    "catchRate": 3,
    "weightKg": 22.2,
    "heightM": 0.7,
    "types": [
      "fighting",
      "ghost"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 125,
      "defense": 80,
      "specialAttack": 90,
      "specialDefense": 90,
      "speed": 125
    }
  },
  {
    "dexNumber": 803,
    "name": "Poipole",
    "catchRate": 45,
    "weightKg": 1.8,
    "heightM": 0.6,
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 67,
      "attack": 73,
      "defense": 67,
      "specialAttack": 73,
      "specialDefense": 67,
      "speed": 73
    }
  },
  {
    "dexNumber": 804,
    "name": "Naganadel",
    "catchRate": 45,
    "weightKg": 150.0,
    "heightM": 3.6,
    "types": [
      "poison",
      "dragon"
    ],
    "baseStats": {
      "hp": 73,
      "attack": 73,
      "defense": 73,
      "specialAttack": 127,
      "specialDefense": 73,
      "speed": 121
    }
  },
  {
    "dexNumber": 805,
    "name": "Stakataka",
    "catchRate": 30,
    "weightKg": 820.0,
    "heightM": 5.5,
    "types": [
      "rock",
      "steel"
    ],
    "baseStats": {
      "hp": 61,
      "attack": 131,
      "defense": 211,
      "specialAttack": 53,
      "specialDefense": 101,
      "speed": 13
    }
  },
  {
    "dexNumber": 806,
    "name": "Blacephalon",
    "catchRate": 30,
    "weightKg": 13.0,
    "heightM": 1.8,
    "types": [
      "fire",
      "ghost"
    ],
    "baseStats": {
      "hp": 53,
      "attack": 127,
      "defense": 53,
      "specialAttack": 151,
      "specialDefense": 79,
      "speed": 107
    }
  },
  {
    "dexNumber": 807,
    "name": "Zeraora",
    "catchRate": 3,
    "weightKg": 44.5,
    "heightM": 1.5,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 88,
      "attack": 112,
      "defense": 75,
      "specialAttack": 102,
      "specialDefense": 80,
      "speed": 143
    }
  },
  {
    "dexNumber": 808,
    "name": "Meltan",
    "catchRate": 3,
    "weightKg": 8.0,
    "heightM": 0.2,
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 46,
      "attack": 65,
      "defense": 65,
      "specialAttack": 55,
      "specialDefense": 35,
      "speed": 34
    }
  },
  {
    "dexNumber": 809,
    "name": "Melmetal",
    "catchRate": 3,
    "weightKg": 800.0,
    "heightM": 2.5,
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 135,
      "attack": 143,
      "defense": 143,
      "specialAttack": 80,
      "specialDefense": 65,
      "speed": 34
    }
  },
  {
    "dexNumber": 810,
    "name": "Grookey",
    "catchRate": 45,
    "weightKg": 5.0,
    "heightM": 0.3,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 65,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 65
    }
  },
  {
    "dexNumber": 811,
    "name": "Thwackey",
    "catchRate": 45,
    "weightKg": 14.0,
    "heightM": 0.7,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 70,
      "specialAttack": 55,
      "specialDefense": 60,
      "speed": 80
    }
  },
  {
    "dexNumber": 812,
    "name": "Rillaboom",
    "catchRate": 45,
    "weightKg": 90.0,
    "heightM": 2.1,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 125,
      "defense": 90,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 85
    }
  },
  {
    "dexNumber": 813,
    "name": "Scorbunny",
    "catchRate": 45,
    "weightKg": 4.5,
    "heightM": 0.3,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 71,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 69
    }
  },
  {
    "dexNumber": 814,
    "name": "Raboot",
    "catchRate": 45,
    "weightKg": 9.0,
    "heightM": 0.6,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 86,
      "defense": 60,
      "specialAttack": 55,
      "specialDefense": 60,
      "speed": 94
    }
  },
  {
    "dexNumber": 815,
    "name": "Cinderace",
    "catchRate": 45,
    "weightKg": 33.0,
    "heightM": 1.4,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 116,
      "defense": 75,
      "specialAttack": 65,
      "specialDefense": 75,
      "speed": 119
    }
  },
  {
    "dexNumber": 816,
    "name": "Sobble",
    "catchRate": 45,
    "weightKg": 4.0,
    "heightM": 0.3,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 40,
      "defense": 40,
      "specialAttack": 70,
      "specialDefense": 40,
      "speed": 70
    }
  },
  {
    "dexNumber": 817,
    "name": "Drizzile",
    "catchRate": 45,
    "weightKg": 11.5,
    "heightM": 0.7,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 60,
      "defense": 55,
      "specialAttack": 95,
      "specialDefense": 55,
      "speed": 90
    }
  },
  {
    "dexNumber": 818,
    "name": "Inteleon",
    "catchRate": 45,
    "weightKg": 45.2,
    "heightM": 1.9,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "specialAttack": 125,
      "specialDefense": 65,
      "speed": 120
    }
  },
  {
    "dexNumber": 819,
    "name": "Skwovet",
    "catchRate": 255,
    "weightKg": 2.5,
    "heightM": 0.3,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 55,
      "defense": 55,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 25
    }
  },
  {
    "dexNumber": 820,
    "name": "Greedent",
    "catchRate": 90,
    "weightKg": 6.0,
    "heightM": 0.6,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 120,
      "attack": 95,
      "defense": 95,
      "specialAttack": 55,
      "specialDefense": 75,
      "speed": 20
    }
  },
  {
    "dexNumber": 821,
    "name": "Rookidee",
    "catchRate": 255,
    "weightKg": 1.8,
    "heightM": 0.2,
    "types": [
      "flying"
    ],
    "baseStats": {
      "hp": 38,
      "attack": 47,
      "defense": 35,
      "specialAttack": 33,
      "specialDefense": 35,
      "speed": 57
    }
  },
  {
    "dexNumber": 822,
    "name": "Corvisquire",
    "catchRate": 120,
    "weightKg": 16.0,
    "heightM": 0.8,
    "types": [
      "flying"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 67,
      "defense": 55,
      "specialAttack": 43,
      "specialDefense": 55,
      "speed": 77
    }
  },
  {
    "dexNumber": 823,
    "name": "Corviknight",
    "catchRate": 45,
    "weightKg": 75.0,
    "heightM": 2.2,
    "types": [
      "flying",
      "steel"
    ],
    "baseStats": {
      "hp": 98,
      "attack": 87,
      "defense": 105,
      "specialAttack": 53,
      "specialDefense": 85,
      "speed": 67
    }
  },
  {
    "dexNumber": 824,
    "name": "Blipbug",
    "catchRate": 255,
    "weightKg": 8.0,
    "heightM": 0.4,
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 25,
      "attack": 20,
      "defense": 20,
      "specialAttack": 25,
      "specialDefense": 45,
      "speed": 45
    }
  },
  {
    "dexNumber": 825,
    "name": "Dottler",
    "catchRate": 120,
    "weightKg": 19.5,
    "heightM": 0.4,
    "types": [
      "bug",
      "psychic"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 35,
      "defense": 80,
      "specialAttack": 50,
      "specialDefense": 90,
      "speed": 30
    }
  },
  {
    "dexNumber": 826,
    "name": "Orbeetle",
    "catchRate": 45,
    "weightKg": 40.8,
    "heightM": 0.4,
    "types": [
      "bug",
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 45,
      "defense": 110,
      "specialAttack": 80,
      "specialDefense": 120,
      "speed": 90
    }
  },
  {
    "dexNumber": 827,
    "name": "Nickit",
    "catchRate": 255,
    "weightKg": 8.9,
    "heightM": 0.6,
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 28,
      "defense": 28,
      "specialAttack": 47,
      "specialDefense": 52,
      "speed": 50
    }
  },
  {
    "dexNumber": 828,
    "name": "Thievul",
    "catchRate": 127,
    "weightKg": 19.9,
    "heightM": 1.2,
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 58,
      "defense": 58,
      "specialAttack": 87,
      "specialDefense": 92,
      "speed": 90
    }
  },
  {
    "dexNumber": 829,
    "name": "Gossifleur",
    "catchRate": 190,
    "weightKg": 2.2,
    "heightM": 0.4,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 40,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 60,
      "speed": 10
    }
  },
  {
    "dexNumber": 830,
    "name": "Eldegoss",
    "catchRate": 75,
    "weightKg": 2.5,
    "heightM": 0.5,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 50,
      "defense": 90,
      "specialAttack": 80,
      "specialDefense": 120,
      "speed": 60
    }
  },
  {
    "dexNumber": 831,
    "name": "Wooloo",
    "catchRate": 255,
    "weightKg": 6.0,
    "heightM": 0.6,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 42,
      "attack": 40,
      "defense": 55,
      "specialAttack": 40,
      "specialDefense": 45,
      "speed": 48
    }
  },
  {
    "dexNumber": 832,
    "name": "Dubwool",
    "catchRate": 127,
    "weightKg": 43.0,
    "heightM": 1.3,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 80,
      "defense": 100,
      "specialAttack": 60,
      "specialDefense": 90,
      "speed": 88
    }
  },
  {
    "dexNumber": 833,
    "name": "Chewtle",
    "catchRate": 255,
    "weightKg": 8.5,
    "heightM": 0.3,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 64,
      "defense": 50,
      "specialAttack": 38,
      "specialDefense": 38,
      "speed": 44
    }
  },
  {
    "dexNumber": 834,
    "name": "Drednaw",
    "catchRate": 75,
    "weightKg": 115.5,
    "heightM": 1.0,
    "types": [
      "water",
      "rock"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 115,
      "defense": 90,
      "specialAttack": 48,
      "specialDefense": 68,
      "speed": 74
    }
  },
  {
    "dexNumber": 835,
    "name": "Yamper",
    "catchRate": 255,
    "weightKg": 13.5,
    "heightM": 0.3,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 59,
      "attack": 45,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 26
    }
  },
  {
    "dexNumber": 836,
    "name": "Boltund",
    "catchRate": 45,
    "weightKg": 34.0,
    "heightM": 1.0,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 69,
      "attack": 90,
      "defense": 60,
      "specialAttack": 90,
      "specialDefense": 60,
      "speed": 121
    }
  },
  {
    "dexNumber": 837,
    "name": "Rolycoly",
    "catchRate": 255,
    "weightKg": 12.0,
    "heightM": 0.3,
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 40,
      "defense": 50,
      "specialAttack": 40,
      "specialDefense": 50,
      "speed": 30
    }
  },
  {
    "dexNumber": 838,
    "name": "Carkol",
    "catchRate": 120,
    "weightKg": 78.0,
    "heightM": 1.1,
    "types": [
      "rock",
      "fire"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 60,
      "defense": 90,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 50
    }
  },
  {
    "dexNumber": 839,
    "name": "Coalossal",
    "catchRate": 45,
    "weightKg": 310.5,
    "heightM": 2.8,
    "types": [
      "rock",
      "fire"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 80,
      "defense": 120,
      "specialAttack": 80,
      "specialDefense": 90,
      "speed": 30
    }
  },
  {
    "dexNumber": 840,
    "name": "Applin",
    "catchRate": 255,
    "weightKg": 0.5,
    "heightM": 0.2,
    "types": [
      "grass",
      "dragon"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 40,
      "defense": 80,
      "specialAttack": 40,
      "specialDefense": 40,
      "speed": 20
    }
  },
  {
    "dexNumber": 841,
    "name": "Flapple",
    "catchRate": 45,
    "weightKg": 1.0,
    "heightM": 0.3,
    "types": [
      "grass",
      "dragon"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 110,
      "defense": 80,
      "specialAttack": 95,
      "specialDefense": 60,
      "speed": 70
    }
  },
  {
    "dexNumber": 842,
    "name": "Appletun",
    "catchRate": 45,
    "weightKg": 13.0,
    "heightM": 0.4,
    "types": [
      "grass",
      "dragon"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 85,
      "defense": 80,
      "specialAttack": 100,
      "specialDefense": 80,
      "speed": 30
    }
  },
  {
    "dexNumber": 843,
    "name": "Silicobra",
    "catchRate": 255,
    "weightKg": 7.6,
    "heightM": 2.2,
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 52,
      "attack": 57,
      "defense": 75,
      "specialAttack": 35,
      "specialDefense": 50,
      "speed": 46
    }
  },
  {
    "dexNumber": 844,
    "name": "Sandaconda",
    "catchRate": 120,
    "weightKg": 65.5,
    "heightM": 3.8,
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 107,
      "defense": 125,
      "specialAttack": 65,
      "specialDefense": 70,
      "speed": 71
    }
  },
  {
    "dexNumber": 845,
    "name": "Cramorant",
    "catchRate": 45,
    "weightKg": 18.0,
    "heightM": 0.8,
    "types": [
      "flying",
      "water"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 55,
      "specialAttack": 85,
      "specialDefense": 95,
      "speed": 85
    }
  },
  {
    "dexNumber": 846,
    "name": "Arrokuda",
    "catchRate": 255,
    "weightKg": 1.0,
    "heightM": 0.5,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 41,
      "attack": 63,
      "defense": 40,
      "specialAttack": 40,
      "specialDefense": 30,
      "speed": 66
    }
  },
  {
    "dexNumber": 847,
    "name": "Barraskewda",
    "catchRate": 60,
    "weightKg": 30.0,
    "heightM": 1.3,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 61,
      "attack": 123,
      "defense": 60,
      "specialAttack": 60,
      "specialDefense": 50,
      "speed": 136
    }
  },
  {
    "dexNumber": 848,
    "name": "Toxel",
    "catchRate": 75,
    "weightKg": 11.0,
    "heightM": 0.4,
    "types": [
      "electric",
      "poison"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 38,
      "defense": 35,
      "specialAttack": 54,
      "specialDefense": 35,
      "speed": 40
    }
  },
  {
    "dexNumber": 849,
    "name": "Toxtricity",
    "catchRate": 45,
    "weightKg": 40.0,
    "heightM": 1.6,
    "types": [
      "electric",
      "poison"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 98,
      "defense": 70,
      "specialAttack": 114,
      "specialDefense": 70,
      "speed": 75
    }
  },
  {
    "dexNumber": 850,
    "name": "Sizzlipede",
    "catchRate": 190,
    "weightKg": 1.0,
    "heightM": 0.7,
    "types": [
      "fire",
      "bug"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 65,
      "defense": 45,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 45
    }
  },
  {
    "dexNumber": 851,
    "name": "Centiskorch",
    "catchRate": 75,
    "weightKg": 120.0,
    "heightM": 3.0,
    "types": [
      "fire",
      "bug"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 115,
      "defense": 65,
      "specialAttack": 90,
      "specialDefense": 90,
      "speed": 65
    }
  },
  {
    "dexNumber": 852,
    "name": "Clobbopus",
    "catchRate": 180,
    "weightKg": 4.0,
    "heightM": 0.6,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 68,
      "defense": 60,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 32
    }
  },
  {
    "dexNumber": 853,
    "name": "Grapploct",
    "catchRate": 45,
    "weightKg": 39.0,
    "heightM": 1.6,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 118,
      "defense": 90,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 42
    }
  },
  {
    "dexNumber": 854,
    "name": "Sinistea",
    "catchRate": 120,
    "weightKg": 0.2,
    "heightM": 0.1,
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 45,
      "specialAttack": 74,
      "specialDefense": 54,
      "speed": 50
    }
  },
  {
    "dexNumber": 855,
    "name": "Polteageist",
    "catchRate": 60,
    "weightKg": 0.4,
    "heightM": 0.2,
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 65,
      "defense": 65,
      "specialAttack": 134,
      "specialDefense": 114,
      "speed": 70
    }
  },
  {
    "dexNumber": 856,
    "name": "Hatenna",
    "catchRate": 235,
    "weightKg": 3.4,
    "heightM": 0.4,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 42,
      "attack": 30,
      "defense": 45,
      "specialAttack": 56,
      "specialDefense": 53,
      "speed": 39
    }
  },
  {
    "dexNumber": 857,
    "name": "Hattrem",
    "catchRate": 120,
    "weightKg": 4.8,
    "heightM": 0.6,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 57,
      "attack": 40,
      "defense": 65,
      "specialAttack": 86,
      "specialDefense": 73,
      "speed": 49
    }
  },
  {
    "dexNumber": 858,
    "name": "Hatterene",
    "catchRate": 45,
    "weightKg": 5.1,
    "heightM": 2.1,
    "types": [
      "psychic",
      "fairy"
    ],
    "baseStats": {
      "hp": 57,
      "attack": 90,
      "defense": 95,
      "specialAttack": 136,
      "specialDefense": 103,
      "speed": 29
    }
  },
  {
    "dexNumber": 859,
    "name": "Impidimp",
    "catchRate": 255,
    "weightKg": 5.5,
    "heightM": 0.4,
    "types": [
      "dark",
      "fairy"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 45,
      "defense": 30,
      "specialAttack": 55,
      "specialDefense": 40,
      "speed": 50
    }
  },
  {
    "dexNumber": 860,
    "name": "Morgrem",
    "catchRate": 120,
    "weightKg": 12.5,
    "heightM": 0.8,
    "types": [
      "dark",
      "fairy"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 60,
      "defense": 45,
      "specialAttack": 75,
      "specialDefense": 55,
      "speed": 70
    }
  },
  {
    "dexNumber": 861,
    "name": "Grimmsnarl",
    "catchRate": 45,
    "weightKg": 61.0,
    "heightM": 1.5,
    "types": [
      "dark",
      "fairy"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 120,
      "defense": 65,
      "specialAttack": 95,
      "specialDefense": 75,
      "speed": 60
    }
  },
  {
    "dexNumber": 862,
    "name": "Obstagoon",
    "catchRate": 45,
    "weightKg": 46.0,
    "heightM": 1.6,
    "types": [
      "dark",
      "normal"
    ],
    "baseStats": {
      "hp": 93,
      "attack": 90,
      "defense": 101,
      "specialAttack": 60,
      "specialDefense": 81,
      "speed": 95
    }
  },
  {
    "dexNumber": 863,
    "name": "Perrserker",
    "catchRate": 90,
    "weightKg": 28.0,
    "heightM": 0.8,
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 110,
      "defense": 100,
      "specialAttack": 50,
      "specialDefense": 60,
      "speed": 50
    }
  },
  {
    "dexNumber": 864,
    "name": "Cursola",
    "catchRate": 30,
    "weightKg": 0.4,
    "heightM": 1.0,
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 95,
      "defense": 50,
      "specialAttack": 145,
      "specialDefense": 130,
      "speed": 30
    }
  },
  {
    "dexNumber": 865,
    "name": "Sirfetchd",
    "catchRate": 45,
    "weightKg": 117.0,
    "heightM": 0.8,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 62,
      "attack": 135,
      "defense": 95,
      "specialAttack": 68,
      "specialDefense": 82,
      "speed": 65
    }
  },
  {
    "dexNumber": 866,
    "name": "Mr Rime",
    "catchRate": 45,
    "weightKg": 58.2,
    "heightM": 1.5,
    "types": [
      "ice",
      "psychic"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 85,
      "defense": 75,
      "specialAttack": 110,
      "specialDefense": 100,
      "speed": 70
    }
  },
  {
    "dexNumber": 867,
    "name": "Runerigus",
    "catchRate": 90,
    "weightKg": 66.6,
    "heightM": 1.6,
    "types": [
      "ground",
      "ghost"
    ],
    "baseStats": {
      "hp": 58,
      "attack": 95,
      "defense": 145,
      "specialAttack": 50,
      "specialDefense": 105,
      "speed": 30
    }
  },
  {
    "dexNumber": 868,
    "name": "Milcery",
    "catchRate": 200,
    "weightKg": 0.3,
    "heightM": 0.2,
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 40,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 61,
      "speed": 34
    }
  },
  {
    "dexNumber": 869,
    "name": "Alcremie",
    "catchRate": 100,
    "weightKg": 0.5,
    "heightM": 0.3,
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 60,
      "defense": 75,
      "specialAttack": 110,
      "specialDefense": 121,
      "speed": 64
    }
  },
  {
    "dexNumber": 870,
    "name": "Falinks",
    "catchRate": 45,
    "weightKg": 62.0,
    "heightM": 3.0,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 100,
      "defense": 100,
      "specialAttack": 70,
      "specialDefense": 60,
      "speed": 75
    }
  },
  {
    "dexNumber": 871,
    "name": "Pincurchin",
    "catchRate": 75,
    "weightKg": 1.0,
    "heightM": 0.3,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 48,
      "attack": 101,
      "defense": 95,
      "specialAttack": 91,
      "specialDefense": 85,
      "speed": 15
    }
  },
  {
    "dexNumber": 872,
    "name": "Snom",
    "catchRate": 190,
    "weightKg": 3.8,
    "heightM": 0.3,
    "types": [
      "ice",
      "bug"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 25,
      "defense": 35,
      "specialAttack": 45,
      "specialDefense": 30,
      "speed": 20
    }
  },
  {
    "dexNumber": 873,
    "name": "Frosmoth",
    "catchRate": 75,
    "weightKg": 42.0,
    "heightM": 1.3,
    "types": [
      "ice",
      "bug"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 65,
      "defense": 60,
      "specialAttack": 125,
      "specialDefense": 90,
      "speed": 65
    }
  },
  {
    "dexNumber": 874,
    "name": "Stonjourner",
    "catchRate": 60,
    "weightKg": 520.0,
    "heightM": 2.5,
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 125,
      "defense": 135,
      "specialAttack": 20,
      "specialDefense": 20,
      "speed": 70
    }
  },
  {
    "dexNumber": 875,
    "name": "Eiscue",
    "catchRate": 60,
    "weightKg": 89.0,
    "heightM": 1.4,
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 80,
      "defense": 110,
      "specialAttack": 65,
      "specialDefense": 90,
      "speed": 50
    }
  },
  {
    "dexNumber": 876,
    "name": "Indeedee",
    "catchRate": 30,
    "weightKg": 28.0,
    "heightM": 0.9,
    "types": [
      "psychic",
      "normal"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 65,
      "defense": 55,
      "specialAttack": 105,
      "specialDefense": 95,
      "speed": 95
    }
  },
  {
    "dexNumber": 877,
    "name": "Morpeko",
    "catchRate": 180,
    "weightKg": 3.0,
    "heightM": 0.3,
    "types": [
      "electric",
      "dark"
    ],
    "baseStats": {
      "hp": 58,
      "attack": 95,
      "defense": 58,
      "specialAttack": 70,
      "specialDefense": 58,
      "speed": 97
    }
  },
  {
    "dexNumber": 878,
    "name": "Cufant",
    "catchRate": 190,
    "weightKg": 100.0,
    "heightM": 1.2,
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 80,
      "defense": 49,
      "specialAttack": 40,
      "specialDefense": 49,
      "speed": 40
    }
  },
  {
    "dexNumber": 879,
    "name": "Copperajah",
    "catchRate": 90,
    "weightKg": 650.0,
    "heightM": 3.0,
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 122,
      "attack": 130,
      "defense": 69,
      "specialAttack": 80,
      "specialDefense": 69,
      "speed": 30
    }
  },
  {
    "dexNumber": 880,
    "name": "Dracozolt",
    "catchRate": 45,
    "weightKg": 190.0,
    "heightM": 1.8,
    "types": [
      "electric",
      "dragon"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "specialAttack": 80,
      "specialDefense": 70,
      "speed": 75
    }
  },
  {
    "dexNumber": 881,
    "name": "Arctozolt",
    "catchRate": 45,
    "weightKg": 150.0,
    "heightM": 2.3,
    "types": [
      "electric",
      "ice"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "specialAttack": 90,
      "specialDefense": 80,
      "speed": 55
    }
  },
  {
    "dexNumber": 882,
    "name": "Dracovish",
    "catchRate": 45,
    "weightKg": 215.0,
    "heightM": 2.3,
    "types": [
      "water",
      "dragon"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 90,
      "defense": 100,
      "specialAttack": 70,
      "specialDefense": 80,
      "speed": 75
    }
  },
  {
    "dexNumber": 883,
    "name": "Arctovish",
    "catchRate": 45,
    "weightKg": 175.0,
    "heightM": 2.0,
    "types": [
      "water",
      "ice"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 90,
      "defense": 100,
      "specialAttack": 80,
      "specialDefense": 90,
      "speed": 55
    }
  },
  {
    "dexNumber": 884,
    "name": "Duraludon",
    "catchRate": 45,
    "weightKg": 40.0,
    "heightM": 1.8,
    "types": [
      "steel",
      "dragon"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 95,
      "defense": 115,
      "specialAttack": 120,
      "specialDefense": 50,
      "speed": 85
    }
  },
  {
    "dexNumber": 885,
    "name": "Dreepy",
    "catchRate": 45,
    "weightKg": 2.0,
    "heightM": 0.5,
    "types": [
      "dragon",
      "ghost"
    ],
    "baseStats": {
      "hp": 28,
      "attack": 60,
      "defense": 30,
      "specialAttack": 40,
      "specialDefense": 30,
      "speed": 82
    }
  },
  {
    "dexNumber": 886,
    "name": "Drakloak",
    "catchRate": 45,
    "weightKg": 11.0,
    "heightM": 1.4,
    "types": [
      "dragon",
      "ghost"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 80,
      "defense": 50,
      "specialAttack": 60,
      "specialDefense": 50,
      "speed": 102
    }
  },
  {
    "dexNumber": 887,
    "name": "Dragapult",
    "catchRate": 45,
    "weightKg": 50.0,
    "heightM": 3.0,
    "types": [
      "dragon",
      "ghost"
    ],
    "baseStats": {
      "hp": 88,
      "attack": 120,
      "defense": 75,
      "specialAttack": 100,
      "specialDefense": 75,
      "speed": 142
    }
  },
  {
    "dexNumber": 888,
    "name": "Zacian",
    "catchRate": 10,
    "weightKg": 110.0,
    "heightM": 2.8,
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 92,
      "attack": 120,
      "defense": 115,
      "specialAttack": 80,
      "specialDefense": 115,
      "speed": 138
    }
  },
  {
    "dexNumber": 889,
    "name": "Zamazenta",
    "catchRate": 10,
    "weightKg": 210.0,
    "heightM": 2.9,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 92,
      "attack": 120,
      "defense": 115,
      "specialAttack": 80,
      "specialDefense": 115,
      "speed": 138
    }
  },
  {
    "dexNumber": 890,
    "name": "Eternatus",
    "catchRate": 255,
    "weightKg": 950.0,
    "heightM": 20.0,
    "types": [
      "poison",
      "dragon"
    ],
    "baseStats": {
      "hp": 140,
      "attack": 85,
      "defense": 95,
      "specialAttack": 145,
      "specialDefense": 95,
      "speed": 130
    }
  },
  {
    "dexNumber": 891,
    "name": "Kubfu",
    "catchRate": 3,
    "weightKg": 12.0,
    "heightM": 0.6,
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 90,
      "defense": 60,
      "specialAttack": 53,
      "specialDefense": 50,
      "speed": 72
    }
  },
  {
    "dexNumber": 892,
    "name": "Urshifu",
    "catchRate": 3,
    "weightKg": 105.0,
    "heightM": 1.9,
    "types": [
      "fighting",
      "dark"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 130,
      "defense": 100,
      "specialAttack": 63,
      "specialDefense": 60,
      "speed": 97
    }
  },
  {
    "dexNumber": 893,
    "name": "Zarude",
    "catchRate": 3,
    "weightKg": 70.0,
    "heightM": 1.8,
    "types": [
      "dark",
      "grass"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 120,
      "defense": 105,
      "specialAttack": 70,
      "specialDefense": 95,
      "speed": 105
    }
  },
  {
    "dexNumber": 894,
    "name": "Regieleki",
    "catchRate": 3,
    "weightKg": 145.0,
    "heightM": 1.2,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 100,
      "defense": 50,
      "specialAttack": 100,
      "specialDefense": 50,
      "speed": 200
    }
  },
  {
    "dexNumber": 895,
    "name": "Regidrago",
    "catchRate": 3,
    "weightKg": 200.0,
    "heightM": 2.1,
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 200,
      "attack": 100,
      "defense": 50,
      "specialAttack": 100,
      "specialDefense": 50,
      "speed": 80
    }
  },
  {
    "dexNumber": 896,
    "name": "Glastrier",
    "catchRate": 3,
    "weightKg": 800.0,
    "heightM": 2.2,
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 145,
      "defense": 130,
      "specialAttack": 65,
      "specialDefense": 110,
      "speed": 30
    }
  },
  {
    "dexNumber": 897,
    "name": "Spectrier",
    "catchRate": 3,
    "weightKg": 44.5,
    "heightM": 2.0,
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 65,
      "defense": 60,
      "specialAttack": 145,
      "specialDefense": 80,
      "speed": 130
    }
  },
  {
    "dexNumber": 898,
    "name": "Calyrex",
    "catchRate": 3,
    "weightKg": 7.7,
    "heightM": 1.1,
    "types": [
      "psychic",
      "grass"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 80,
      "defense": 80,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 80
    }
  },
  {
    "dexNumber": 899,
    "name": "Wyrdeer",
    "catchRate": 135,
    "weightKg": 95.1,
    "heightM": 1.8,
    "types": [
      "normal",
      "psychic"
    ],
    "baseStats": {
      "hp": 103,
      "attack": 105,
      "defense": 72,
      "specialAttack": 105,
      "specialDefense": 75,
      "speed": 65
    }
  },
  {
    "dexNumber": 900,
    "name": "Kleavor",
    "catchRate": 115,
    "weightKg": 89.0,
    "heightM": 1.8,
    "types": [
      "bug",
      "rock"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 135,
      "defense": 95,
      "specialAttack": 45,
      "specialDefense": 70,
      "speed": 85
    }
  },
  {
    "dexNumber": 901,
    "name": "Ursaluna",
    "catchRate": 75,
    "weightKg": 290.0,
    "heightM": 2.4,
    "types": [
      "ground",
      "normal"
    ],
    "baseStats": {
      "hp": 130,
      "attack": 140,
      "defense": 105,
      "specialAttack": 45,
      "specialDefense": 80,
      "speed": 50
    }
  },
  {
    "dexNumber": 902,
    "name": "Basculegion",
    "catchRate": 135,
    "weightKg": 110.0,
    "heightM": 3.0,
    "types": [
      "water",
      "ghost"
    ],
    "baseStats": {
      "hp": 120,
      "attack": 112,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 75,
      "speed": 78
    }
  },
  {
    "dexNumber": 903,
    "name": "Sneasler",
    "catchRate": 135,
    "weightKg": 43.0,
    "heightM": 1.3,
    "types": [
      "fighting",
      "poison"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 130,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 80,
      "speed": 120
    }
  },
  {
    "dexNumber": 904,
    "name": "Overqwil",
    "catchRate": 135,
    "weightKg": 60.5,
    "heightM": 2.5,
    "types": [
      "dark",
      "poison"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 115,
      "defense": 95,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 85
    }
  },
  {
    "dexNumber": 905,
    "name": "Enamorus",
    "catchRate": 3,
    "weightKg": 48.0,
    "heightM": 1.6,
    "types": [
      "fairy",
      "flying"
    ],
    "baseStats": {
      "hp": 74,
      "attack": 115,
      "defense": 70,
      "specialAttack": 135,
      "specialDefense": 80,
      "speed": 106
    }
  },
  {
    "dexNumber": 906,
    "name": "Sprigatito",
    "catchRate": 45,
    "weightKg": 4.1,
    "heightM": 0.4,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 61,
      "defense": 54,
      "specialAttack": 45,
      "specialDefense": 45,
      "speed": 65
    }
  },
  {
    "dexNumber": 907,
    "name": "Floragato",
    "catchRate": 45,
    "weightKg": 12.2,
    "heightM": 0.9,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 61,
      "attack": 80,
      "defense": 63,
      "specialAttack": 60,
      "specialDefense": 63,
      "speed": 83
    }
  },
  {
    "dexNumber": 908,
    "name": "Meowscarada",
    "catchRate": 45,
    "weightKg": 31.2,
    "heightM": 1.5,
    "types": [
      "grass",
      "dark"
    ],
    "baseStats": {
      "hp": 76,
      "attack": 110,
      "defense": 70,
      "specialAttack": 81,
      "specialDefense": 70,
      "speed": 123
    }
  },
  {
    "dexNumber": 909,
    "name": "Fuecoco",
    "catchRate": 45,
    "weightKg": 9.8,
    "heightM": 0.4,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 67,
      "attack": 45,
      "defense": 59,
      "specialAttack": 63,
      "specialDefense": 40,
      "speed": 36
    }
  },
  {
    "dexNumber": 910,
    "name": "Crocalor",
    "catchRate": 45,
    "weightKg": 30.7,
    "heightM": 1.0,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 81,
      "attack": 55,
      "defense": 78,
      "specialAttack": 90,
      "specialDefense": 58,
      "speed": 49
    }
  },
  {
    "dexNumber": 911,
    "name": "Skeledirge",
    "catchRate": 45,
    "weightKg": 326.5,
    "heightM": 1.6,
    "types": [
      "fire",
      "ghost"
    ],
    "baseStats": {
      "hp": 104,
      "attack": 75,
      "defense": 100,
      "specialAttack": 110,
      "specialDefense": 75,
      "speed": 66
    }
  },
  {
    "dexNumber": 912,
    "name": "Quaxly",
    "catchRate": 45,
    "weightKg": 6.1,
    "heightM": 0.5,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 65,
      "defense": 45,
      "specialAttack": 50,
      "specialDefense": 45,
      "speed": 50
    }
  },
  {
    "dexNumber": 913,
    "name": "Quaxwell",
    "catchRate": 45,
    "weightKg": 21.5,
    "heightM": 1.2,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "specialAttack": 65,
      "specialDefense": 60,
      "speed": 65
    }
  },
  {
    "dexNumber": 914,
    "name": "Quaquaval",
    "catchRate": 45,
    "weightKg": 61.9,
    "heightM": 1.8,
    "types": [
      "water",
      "fighting"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 120,
      "defense": 80,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 85
    }
  },
  {
    "dexNumber": 915,
    "name": "Lechonk",
    "catchRate": 255,
    "weightKg": 10.2,
    "heightM": 0.5,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 54,
      "attack": 45,
      "defense": 40,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 35
    }
  },
  {
    "dexNumber": 916,
    "name": "Oinkologne",
    "catchRate": 100,
    "weightKg": 120.0,
    "heightM": 1.0,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 100,
      "defense": 75,
      "specialAttack": 59,
      "specialDefense": 80,
      "speed": 65
    }
  },
  {
    "dexNumber": 917,
    "name": "Tarountula",
    "catchRate": 255,
    "weightKg": 4.0,
    "heightM": 0.3,
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 41,
      "defense": 45,
      "specialAttack": 29,
      "specialDefense": 40,
      "speed": 20
    }
  },
  {
    "dexNumber": 918,
    "name": "Spidops",
    "catchRate": 120,
    "weightKg": 16.5,
    "heightM": 1.0,
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 79,
      "defense": 92,
      "specialAttack": 52,
      "specialDefense": 86,
      "speed": 35
    }
  },
  {
    "dexNumber": 919,
    "name": "Nymble",
    "catchRate": 190,
    "weightKg": 1.0,
    "heightM": 0.2,
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 33,
      "attack": 46,
      "defense": 40,
      "specialAttack": 21,
      "specialDefense": 25,
      "speed": 45
    }
  },
  {
    "dexNumber": 920,
    "name": "Lokix",
    "catchRate": 30,
    "weightKg": 17.5,
    "heightM": 1.0,
    "types": [
      "bug",
      "dark"
    ],
    "baseStats": {
      "hp": 71,
      "attack": 102,
      "defense": 78,
      "specialAttack": 52,
      "specialDefense": 55,
      "speed": 92
    }
  },
  {
    "dexNumber": 921,
    "name": "Pawmi",
    "catchRate": 190,
    "weightKg": 2.5,
    "heightM": 0.3,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 50,
      "defense": 20,
      "specialAttack": 40,
      "specialDefense": 25,
      "speed": 60
    }
  },
  {
    "dexNumber": 922,
    "name": "Pawmo",
    "catchRate": 80,
    "weightKg": 6.5,
    "heightM": 0.4,
    "types": [
      "electric",
      "fighting"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 75,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 40,
      "speed": 85
    }
  },
  {
    "dexNumber": 923,
    "name": "Pawmot",
    "catchRate": 45,
    "weightKg": 41.0,
    "heightM": 0.9,
    "types": [
      "electric",
      "fighting"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 115,
      "defense": 70,
      "specialAttack": 70,
      "specialDefense": 60,
      "speed": 105
    }
  },
  {
    "dexNumber": 924,
    "name": "Tandemaus",
    "catchRate": 150,
    "weightKg": 1.8,
    "heightM": 0.3,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 50,
      "defense": 45,
      "specialAttack": 40,
      "specialDefense": 45,
      "speed": 75
    }
  },
  {
    "dexNumber": 925,
    "name": "Maushold",
    "catchRate": 75,
    "weightKg": 2.8,
    "heightM": 0.3,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 74,
      "attack": 75,
      "defense": 70,
      "specialAttack": 65,
      "specialDefense": 75,
      "speed": 111
    }
  },
  {
    "dexNumber": 926,
    "name": "Fidough",
    "catchRate": 190,
    "weightKg": 10.9,
    "heightM": 0.3,
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 37,
      "attack": 55,
      "defense": 70,
      "specialAttack": 30,
      "specialDefense": 55,
      "speed": 65
    }
  },
  {
    "dexNumber": 927,
    "name": "Dachsbun",
    "catchRate": 90,
    "weightKg": 14.9,
    "heightM": 0.5,
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 57,
      "attack": 80,
      "defense": 115,
      "specialAttack": 50,
      "specialDefense": 80,
      "speed": 95
    }
  },
  {
    "dexNumber": 928,
    "name": "Smoliv",
    "catchRate": 255,
    "weightKg": 6.5,
    "heightM": 0.3,
    "types": [
      "grass",
      "normal"
    ],
    "baseStats": {
      "hp": 41,
      "attack": 35,
      "defense": 45,
      "specialAttack": 58,
      "specialDefense": 51,
      "speed": 30
    }
  },
  {
    "dexNumber": 929,
    "name": "Dolliv",
    "catchRate": 120,
    "weightKg": 11.9,
    "heightM": 0.6,
    "types": [
      "grass",
      "normal"
    ],
    "baseStats": {
      "hp": 52,
      "attack": 53,
      "defense": 60,
      "specialAttack": 78,
      "specialDefense": 78,
      "speed": 33
    }
  },
  {
    "dexNumber": 930,
    "name": "Arboliva",
    "catchRate": 45,
    "weightKg": 48.2,
    "heightM": 1.4,
    "types": [
      "grass",
      "normal"
    ],
    "baseStats": {
      "hp": 78,
      "attack": 69,
      "defense": 90,
      "specialAttack": 125,
      "specialDefense": 109,
      "speed": 39
    }
  },
  {
    "dexNumber": 931,
    "name": "Squawkabilly",
    "catchRate": 190,
    "weightKg": 2.4,
    "heightM": 0.6,
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 82,
      "attack": 96,
      "defense": 51,
      "specialAttack": 45,
      "specialDefense": 51,
      "speed": 92
    }
  },
  {
    "dexNumber": 932,
    "name": "Nacli",
    "catchRate": 255,
    "weightKg": 16.0,
    "heightM": 0.4,
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 55,
      "defense": 75,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 25
    }
  },
  {
    "dexNumber": 933,
    "name": "Naclstack",
    "catchRate": 120,
    "weightKg": 105.0,
    "heightM": 0.6,
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 60,
      "defense": 100,
      "specialAttack": 35,
      "specialDefense": 65,
      "speed": 35
    }
  },
  {
    "dexNumber": 934,
    "name": "Garganacl",
    "catchRate": 45,
    "weightKg": 240.0,
    "heightM": 2.3,
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 130,
      "specialAttack": 45,
      "specialDefense": 90,
      "speed": 35
    }
  },
  {
    "dexNumber": 935,
    "name": "Charcadet",
    "catchRate": 90,
    "weightKg": 10.5,
    "heightM": 0.6,
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 50,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 40,
      "speed": 35
    }
  },
  {
    "dexNumber": 936,
    "name": "Armarouge",
    "catchRate": 25,
    "weightKg": 85.0,
    "heightM": 1.5,
    "types": [
      "fire",
      "psychic"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 60,
      "defense": 100,
      "specialAttack": 125,
      "specialDefense": 80,
      "speed": 75
    }
  },
  {
    "dexNumber": 937,
    "name": "Ceruledge",
    "catchRate": 25,
    "weightKg": 62.0,
    "heightM": 1.6,
    "types": [
      "fire",
      "ghost"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 125,
      "defense": 80,
      "specialAttack": 60,
      "specialDefense": 100,
      "speed": 85
    }
  },
  {
    "dexNumber": 938,
    "name": "Tadbulb",
    "catchRate": 190,
    "weightKg": 0.4,
    "heightM": 0.3,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 61,
      "attack": 31,
      "defense": 41,
      "specialAttack": 59,
      "specialDefense": 35,
      "speed": 45
    }
  },
  {
    "dexNumber": 939,
    "name": "Bellibolt",
    "catchRate": 50,
    "weightKg": 113.0,
    "heightM": 1.2,
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 109,
      "attack": 64,
      "defense": 91,
      "specialAttack": 103,
      "specialDefense": 83,
      "speed": 45
    }
  },
  {
    "dexNumber": 940,
    "name": "Wattrel",
    "catchRate": 180,
    "weightKg": 3.6,
    "heightM": 0.4,
    "types": [
      "electric",
      "flying"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "specialAttack": 55,
      "specialDefense": 40,
      "speed": 70
    }
  },
  {
    "dexNumber": 941,
    "name": "Kilowattrel",
    "catchRate": 90,
    "weightKg": 38.6,
    "heightM": 1.4,
    "types": [
      "electric",
      "flying"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 70,
      "defense": 60,
      "specialAttack": 105,
      "specialDefense": 60,
      "speed": 125
    }
  },
  {
    "dexNumber": 942,
    "name": "Maschiff",
    "catchRate": 150,
    "weightKg": 16.0,
    "heightM": 0.5,
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 60,
      "attack": 78,
      "defense": 60,
      "specialAttack": 40,
      "specialDefense": 51,
      "speed": 51
    }
  },
  {
    "dexNumber": 943,
    "name": "Mabosstiff",
    "catchRate": 75,
    "weightKg": 61.0,
    "heightM": 1.1,
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 120,
      "defense": 90,
      "specialAttack": 60,
      "specialDefense": 70,
      "speed": 85
    }
  },
  {
    "dexNumber": 944,
    "name": "Shroodle",
    "catchRate": 190,
    "weightKg": 0.7,
    "heightM": 0.2,
    "types": [
      "poison",
      "normal"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 65,
      "defense": 35,
      "specialAttack": 40,
      "specialDefense": 35,
      "speed": 75
    }
  },
  {
    "dexNumber": 945,
    "name": "Grafaiai",
    "catchRate": 90,
    "weightKg": 27.2,
    "heightM": 0.7,
    "types": [
      "poison",
      "normal"
    ],
    "baseStats": {
      "hp": 63,
      "attack": 95,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 72,
      "speed": 110
    }
  },
  {
    "dexNumber": 946,
    "name": "Bramblin",
    "catchRate": 190,
    "weightKg": 0.6,
    "heightM": 0.6,
    "types": [
      "grass",
      "ghost"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 65,
      "defense": 30,
      "specialAttack": 45,
      "specialDefense": 35,
      "speed": 60
    }
  },
  {
    "dexNumber": 947,
    "name": "Brambleghast",
    "catchRate": 45,
    "weightKg": 6.0,
    "heightM": 1.2,
    "types": [
      "grass",
      "ghost"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 115,
      "defense": 70,
      "specialAttack": 80,
      "specialDefense": 70,
      "speed": 90
    }
  },
  {
    "dexNumber": 948,
    "name": "Toedscool",
    "catchRate": 190,
    "weightKg": 33.0,
    "heightM": 0.9,
    "types": [
      "ground",
      "grass"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "specialAttack": 50,
      "specialDefense": 100,
      "speed": 70
    }
  },
  {
    "dexNumber": 949,
    "name": "Toedscruel",
    "catchRate": 90,
    "weightKg": 58.0,
    "heightM": 1.9,
    "types": [
      "ground",
      "grass"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 70,
      "defense": 65,
      "specialAttack": 80,
      "specialDefense": 120,
      "speed": 100
    }
  },
  {
    "dexNumber": 950,
    "name": "Klawf",
    "catchRate": 120,
    "weightKg": 79.0,
    "heightM": 1.3,
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 100,
      "defense": 115,
      "specialAttack": 35,
      "specialDefense": 55,
      "speed": 75
    }
  },
  {
    "dexNumber": 951,
    "name": "Capsakid",
    "catchRate": 190,
    "weightKg": 3.0,
    "heightM": 0.3,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 62,
      "defense": 40,
      "specialAttack": 62,
      "specialDefense": 40,
      "speed": 50
    }
  },
  {
    "dexNumber": 952,
    "name": "Scovillain",
    "catchRate": 75,
    "weightKg": 15.0,
    "heightM": 0.9,
    "types": [
      "grass",
      "fire"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 108,
      "defense": 65,
      "specialAttack": 108,
      "specialDefense": 65,
      "speed": 75
    }
  },
  {
    "dexNumber": 953,
    "name": "Rellor",
    "catchRate": 190,
    "weightKg": 1.0,
    "heightM": 0.2,
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 41,
      "attack": 50,
      "defense": 60,
      "specialAttack": 31,
      "specialDefense": 58,
      "speed": 30
    }
  },
  {
    "dexNumber": 954,
    "name": "Rabsca",
    "catchRate": 45,
    "weightKg": 3.5,
    "heightM": 0.3,
    "types": [
      "bug",
      "psychic"
    ],
    "baseStats": {
      "hp": 75,
      "attack": 50,
      "defense": 85,
      "specialAttack": 115,
      "specialDefense": 100,
      "speed": 45
    }
  },
  {
    "dexNumber": 955,
    "name": "Flittle",
    "catchRate": 120,
    "weightKg": 1.5,
    "heightM": 0.2,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 30,
      "attack": 35,
      "defense": 30,
      "specialAttack": 55,
      "specialDefense": 30,
      "speed": 75
    }
  },
  {
    "dexNumber": 956,
    "name": "Espathra",
    "catchRate": 60,
    "weightKg": 90.0,
    "heightM": 1.9,
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 95,
      "attack": 60,
      "defense": 60,
      "specialAttack": 101,
      "specialDefense": 60,
      "speed": 105
    }
  },
  {
    "dexNumber": 957,
    "name": "Tinkatink",
    "catchRate": 190,
    "weightKg": 8.9,
    "heightM": 0.4,
    "types": [
      "fairy",
      "steel"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 45,
      "defense": 45,
      "specialAttack": 35,
      "specialDefense": 64,
      "speed": 58
    }
  },
  {
    "dexNumber": 958,
    "name": "Tinkatuff",
    "catchRate": 90,
    "weightKg": 59.1,
    "heightM": 0.7,
    "types": [
      "fairy",
      "steel"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 55,
      "defense": 55,
      "specialAttack": 45,
      "specialDefense": 82,
      "speed": 78
    }
  },
  {
    "dexNumber": 959,
    "name": "Tinkaton",
    "catchRate": 45,
    "weightKg": 112.8,
    "heightM": 0.7,
    "types": [
      "fairy",
      "steel"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 75,
      "defense": 77,
      "specialAttack": 70,
      "specialDefense": 105,
      "speed": 94
    }
  },
  {
    "dexNumber": 960,
    "name": "Wiglett",
    "catchRate": 255,
    "weightKg": 1.8,
    "heightM": 1.2,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 10,
      "attack": 55,
      "defense": 25,
      "specialAttack": 35,
      "specialDefense": 25,
      "speed": 95
    }
  },
  {
    "dexNumber": 961,
    "name": "Wugtrio",
    "catchRate": 50,
    "weightKg": 5.4,
    "heightM": 1.2,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 35,
      "attack": 100,
      "defense": 50,
      "specialAttack": 50,
      "specialDefense": 70,
      "speed": 120
    }
  },
  {
    "dexNumber": 962,
    "name": "Bombirdier",
    "catchRate": 25,
    "weightKg": 42.9,
    "heightM": 1.5,
    "types": [
      "flying",
      "dark"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 103,
      "defense": 85,
      "specialAttack": 60,
      "specialDefense": 85,
      "speed": 82
    }
  },
  {
    "dexNumber": 963,
    "name": "Finizen",
    "catchRate": 200,
    "weightKg": 60.2,
    "heightM": 1.3,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 45,
      "defense": 40,
      "specialAttack": 45,
      "specialDefense": 40,
      "speed": 75
    }
  },
  {
    "dexNumber": 964,
    "name": "Palafin",
    "catchRate": 45,
    "weightKg": 60.2,
    "heightM": 1.3,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 70,
      "defense": 72,
      "specialAttack": 53,
      "specialDefense": 62,
      "speed": 100
    }
  },
  {
    "dexNumber": 965,
    "name": "Varoom",
    "catchRate": 190,
    "weightKg": 35.0,
    "heightM": 1.0,
    "types": [
      "steel",
      "poison"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 70,
      "defense": 63,
      "specialAttack": 30,
      "specialDefense": 45,
      "speed": 47
    }
  },
  {
    "dexNumber": 966,
    "name": "Revavroom",
    "catchRate": 75,
    "weightKg": 120.0,
    "heightM": 1.8,
    "types": [
      "steel",
      "poison"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 119,
      "defense": 90,
      "specialAttack": 54,
      "specialDefense": 67,
      "speed": 90
    }
  },
  {
    "dexNumber": 967,
    "name": "Cyclizar",
    "catchRate": 190,
    "weightKg": 63.0,
    "heightM": 1.6,
    "types": [
      "dragon",
      "normal"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 95,
      "defense": 65,
      "specialAttack": 85,
      "specialDefense": 65,
      "speed": 121
    }
  },
  {
    "dexNumber": 968,
    "name": "Orthworm",
    "catchRate": 25,
    "weightKg": 310.0,
    "heightM": 2.5,
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 70,
      "attack": 85,
      "defense": 145,
      "specialAttack": 60,
      "specialDefense": 55,
      "speed": 65
    }
  },
  {
    "dexNumber": 969,
    "name": "Glimmet",
    "catchRate": 70,
    "weightKg": 8.0,
    "heightM": 0.7,
    "types": [
      "rock",
      "poison"
    ],
    "baseStats": {
      "hp": 48,
      "attack": 35,
      "defense": 42,
      "specialAttack": 105,
      "specialDefense": 60,
      "speed": 60
    }
  },
  {
    "dexNumber": 970,
    "name": "Glimmora",
    "catchRate": 25,
    "weightKg": 45.0,
    "heightM": 1.5,
    "types": [
      "rock",
      "poison"
    ],
    "baseStats": {
      "hp": 83,
      "attack": 55,
      "defense": 90,
      "specialAttack": 130,
      "specialDefense": 81,
      "speed": 86
    }
  },
  {
    "dexNumber": 971,
    "name": "Greavard",
    "catchRate": 120,
    "weightKg": 35.0,
    "heightM": 0.6,
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 50,
      "attack": 61,
      "defense": 60,
      "specialAttack": 30,
      "specialDefense": 55,
      "speed": 34
    }
  },
  {
    "dexNumber": 972,
    "name": "Houndstone",
    "catchRate": 60,
    "weightKg": 15.0,
    "heightM": 2.0,
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 72,
      "attack": 101,
      "defense": 100,
      "specialAttack": 50,
      "specialDefense": 97,
      "speed": 68
    }
  },
  {
    "dexNumber": 973,
    "name": "Flamigo",
    "catchRate": 100,
    "weightKg": 37.0,
    "heightM": 1.6,
    "types": [
      "flying",
      "fighting"
    ],
    "baseStats": {
      "hp": 82,
      "attack": 115,
      "defense": 74,
      "specialAttack": 75,
      "specialDefense": 64,
      "speed": 90
    }
  },
  {
    "dexNumber": 974,
    "name": "Cetoddle",
    "catchRate": 150,
    "weightKg": 45.0,
    "heightM": 1.2,
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 108,
      "attack": 68,
      "defense": 45,
      "specialAttack": 30,
      "specialDefense": 40,
      "speed": 43
    }
  },
  {
    "dexNumber": 975,
    "name": "Cetitan",
    "catchRate": 50,
    "weightKg": 700.0,
    "heightM": 4.5,
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 170,
      "attack": 113,
      "defense": 65,
      "specialAttack": 45,
      "specialDefense": 55,
      "speed": 73
    }
  },
  {
    "dexNumber": 976,
    "name": "Veluza",
    "catchRate": 100,
    "weightKg": 90.0,
    "heightM": 2.5,
    "types": [
      "water",
      "psychic"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 102,
      "defense": 73,
      "specialAttack": 78,
      "specialDefense": 65,
      "speed": 70
    }
  },
  {
    "dexNumber": 977,
    "name": "Dondozo",
    "catchRate": 25,
    "weightKg": 220.0,
    "heightM": 12.0,
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 150,
      "attack": 100,
      "defense": 115,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 35
    }
  },
  {
    "dexNumber": 978,
    "name": "Tatsugiri",
    "catchRate": 100,
    "weightKg": 8.0,
    "heightM": 0.3,
    "types": [
      "dragon",
      "water"
    ],
    "baseStats": {
      "hp": 68,
      "attack": 50,
      "defense": 60,
      "specialAttack": 120,
      "specialDefense": 95,
      "speed": 82
    }
  },
  {
    "dexNumber": 979,
    "name": "Annihilape",
    "catchRate": 45,
    "weightKg": 56.0,
    "heightM": 1.2,
    "types": [
      "fighting",
      "ghost"
    ],
    "baseStats": {
      "hp": 110,
      "attack": 115,
      "defense": 80,
      "specialAttack": 50,
      "specialDefense": 90,
      "speed": 90
    }
  },
  {
    "dexNumber": 980,
    "name": "Clodsire",
    "catchRate": 90,
    "weightKg": 223.0,
    "heightM": 1.8,
    "types": [
      "poison",
      "ground"
    ],
    "baseStats": {
      "hp": 130,
      "attack": 75,
      "defense": 60,
      "specialAttack": 45,
      "specialDefense": 100,
      "speed": 20
    }
  },
  {
    "dexNumber": 981,
    "name": "Farigiraf",
    "catchRate": 45,
    "weightKg": 160.0,
    "heightM": 3.2,
    "types": [
      "normal",
      "psychic"
    ],
    "baseStats": {
      "hp": 120,
      "attack": 90,
      "defense": 70,
      "specialAttack": 110,
      "specialDefense": 70,
      "speed": 60
    }
  },
  {
    "dexNumber": 982,
    "name": "Dudunsparce",
    "catchRate": 45,
    "weightKg": 39.2,
    "heightM": 3.6,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 125,
      "attack": 100,
      "defense": 80,
      "specialAttack": 85,
      "specialDefense": 75,
      "speed": 55
    }
  },
  {
    "dexNumber": 983,
    "name": "Kingambit",
    "catchRate": 25,
    "weightKg": 120.0,
    "heightM": 2.0,
    "types": [
      "dark",
      "steel"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 135,
      "defense": 120,
      "specialAttack": 60,
      "specialDefense": 85,
      "speed": 50
    }
  },
  {
    "dexNumber": 984,
    "name": "Great Tusk",
    "catchRate": 30,
    "weightKg": 320.0,
    "heightM": 2.2,
    "types": [
      "ground",
      "fighting"
    ],
    "baseStats": {
      "hp": 115,
      "attack": 131,
      "defense": 131,
      "specialAttack": 53,
      "specialDefense": 53,
      "speed": 87
    }
  },
  {
    "dexNumber": 985,
    "name": "Scream Tail",
    "catchRate": 50,
    "weightKg": 8.0,
    "heightM": 1.2,
    "types": [
      "fairy",
      "psychic"
    ],
    "baseStats": {
      "hp": 115,
      "attack": 65,
      "defense": 99,
      "specialAttack": 65,
      "specialDefense": 115,
      "speed": 111
    }
  },
  {
    "dexNumber": 986,
    "name": "Brute Bonnet",
    "catchRate": 50,
    "weightKg": 21.0,
    "heightM": 1.2,
    "types": [
      "grass",
      "dark"
    ],
    "baseStats": {
      "hp": 111,
      "attack": 127,
      "defense": 99,
      "specialAttack": 79,
      "specialDefense": 99,
      "speed": 55
    }
  },
  {
    "dexNumber": 987,
    "name": "Flutter Mane",
    "catchRate": 30,
    "weightKg": 4.0,
    "heightM": 1.4,
    "types": [
      "ghost",
      "fairy"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 55,
      "defense": 55,
      "specialAttack": 135,
      "specialDefense": 135,
      "speed": 135
    }
  },
  {
    "dexNumber": 988,
    "name": "Slither Wing",
    "catchRate": 30,
    "weightKg": 92.0,
    "heightM": 3.2,
    "types": [
      "bug",
      "fighting"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 135,
      "defense": 79,
      "specialAttack": 85,
      "specialDefense": 105,
      "speed": 81
    }
  },
  {
    "dexNumber": 989,
    "name": "Sandy Shocks",
    "catchRate": 30,
    "weightKg": 60.0,
    "heightM": 2.3,
    "types": [
      "electric",
      "ground"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 81,
      "defense": 97,
      "specialAttack": 121,
      "specialDefense": 85,
      "speed": 101
    }
  },
  {
    "dexNumber": 990,
    "name": "Iron Treads",
    "catchRate": 30,
    "weightKg": 240.0,
    "heightM": 0.9,
    "types": [
      "ground",
      "steel"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 112,
      "defense": 120,
      "specialAttack": 72,
      "specialDefense": 70,
      "speed": 106
    }
  },
  {
    "dexNumber": 991,
    "name": "Iron Bundle",
    "catchRate": 50,
    "weightKg": 11.0,
    "heightM": 0.6,
    "types": [
      "ice",
      "water"
    ],
    "baseStats": {
      "hp": 56,
      "attack": 80,
      "defense": 114,
      "specialAttack": 124,
      "specialDefense": 60,
      "speed": 136
    }
  },
  {
    "dexNumber": 992,
    "name": "Iron Hands",
    "catchRate": 50,
    "weightKg": 380.7,
    "heightM": 1.8,
    "types": [
      "fighting",
      "electric"
    ],
    "baseStats": {
      "hp": 154,
      "attack": 140,
      "defense": 108,
      "specialAttack": 50,
      "specialDefense": 68,
      "speed": 50
    }
  },
  {
    "dexNumber": 993,
    "name": "Iron Jugulis",
    "catchRate": 30,
    "weightKg": 111.0,
    "heightM": 1.3,
    "types": [
      "dark",
      "flying"
    ],
    "baseStats": {
      "hp": 94,
      "attack": 80,
      "defense": 86,
      "specialAttack": 122,
      "specialDefense": 80,
      "speed": 108
    }
  },
  {
    "dexNumber": 994,
    "name": "Iron Moth",
    "catchRate": 30,
    "weightKg": 36.0,
    "heightM": 1.2,
    "types": [
      "fire",
      "poison"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 70,
      "defense": 60,
      "specialAttack": 140,
      "specialDefense": 110,
      "speed": 110
    }
  },
  {
    "dexNumber": 995,
    "name": "Iron Thorns",
    "catchRate": 30,
    "weightKg": 303.0,
    "heightM": 1.6,
    "types": [
      "rock",
      "electric"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 134,
      "defense": 110,
      "specialAttack": 70,
      "specialDefense": 84,
      "speed": 72
    }
  },
  {
    "dexNumber": 996,
    "name": "Frigibax",
    "catchRate": 45,
    "weightKg": 17.0,
    "heightM": 0.5,
    "types": [
      "dragon",
      "ice"
    ],
    "baseStats": {
      "hp": 65,
      "attack": 75,
      "defense": 45,
      "specialAttack": 35,
      "specialDefense": 45,
      "speed": 55
    }
  },
  {
    "dexNumber": 997,
    "name": "Arctibax",
    "catchRate": 25,
    "weightKg": 30.0,
    "heightM": 0.8,
    "types": [
      "dragon",
      "ice"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 95,
      "defense": 66,
      "specialAttack": 45,
      "specialDefense": 65,
      "speed": 62
    }
  },
  {
    "dexNumber": 998,
    "name": "Baxcalibur",
    "catchRate": 10,
    "weightKg": 210.0,
    "heightM": 2.1,
    "types": [
      "dragon",
      "ice"
    ],
    "baseStats": {
      "hp": 115,
      "attack": 145,
      "defense": 92,
      "specialAttack": 75,
      "specialDefense": 86,
      "speed": 87
    }
  },
  {
    "dexNumber": 999,
    "name": "Gimmighoul",
    "catchRate": 45,
    "weightKg": 5.0,
    "heightM": 0.3,
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 45,
      "attack": 30,
      "defense": 70,
      "specialAttack": 75,
      "specialDefense": 70,
      "speed": 10
    }
  },
  {
    "dexNumber": 1000,
    "name": "Gholdengo",
    "catchRate": 45,
    "weightKg": 30.0,
    "heightM": 1.2,
    "types": [
      "steel",
      "ghost"
    ],
    "baseStats": {
      "hp": 87,
      "attack": 60,
      "defense": 95,
      "specialAttack": 133,
      "specialDefense": 91,
      "speed": 84
    }
  },
  {
    "dexNumber": 1001,
    "name": "Wo Chien",
    "catchRate": 6,
    "weightKg": 74.2,
    "heightM": 1.5,
    "types": [
      "dark",
      "grass"
    ],
    "baseStats": {
      "hp": 85,
      "attack": 85,
      "defense": 100,
      "specialAttack": 95,
      "specialDefense": 135,
      "speed": 70
    }
  },
  {
    "dexNumber": 1002,
    "name": "Chien Pao",
    "catchRate": 6,
    "weightKg": 152.2,
    "heightM": 1.9,
    "types": [
      "dark",
      "ice"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 120,
      "defense": 80,
      "specialAttack": 90,
      "specialDefense": 65,
      "speed": 135
    }
  },
  {
    "dexNumber": 1003,
    "name": "Ting Lu",
    "catchRate": 6,
    "weightKg": 699.7,
    "heightM": 2.7,
    "types": [
      "dark",
      "ground"
    ],
    "baseStats": {
      "hp": 155,
      "attack": 110,
      "defense": 125,
      "specialAttack": 55,
      "specialDefense": 80,
      "speed": 45
    }
  },
  {
    "dexNumber": 1004,
    "name": "Chi Yu",
    "catchRate": 6,
    "weightKg": 4.9,
    "heightM": 0.4,
    "types": [
      "dark",
      "fire"
    ],
    "baseStats": {
      "hp": 55,
      "attack": 80,
      "defense": 80,
      "specialAttack": 135,
      "specialDefense": 120,
      "speed": 100
    }
  },
  {
    "dexNumber": 1005,
    "name": "Roaring Moon",
    "catchRate": 10,
    "weightKg": 380.0,
    "heightM": 2.0,
    "types": [
      "dragon",
      "dark"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 139,
      "defense": 71,
      "specialAttack": 55,
      "specialDefense": 101,
      "speed": 119
    }
  },
  {
    "dexNumber": 1006,
    "name": "Iron Valiant",
    "catchRate": 10,
    "weightKg": 35.0,
    "heightM": 1.4,
    "types": [
      "fairy",
      "fighting"
    ],
    "baseStats": {
      "hp": 74,
      "attack": 130,
      "defense": 90,
      "specialAttack": 120,
      "specialDefense": 60,
      "speed": 116
    }
  },
  {
    "dexNumber": 1007,
    "name": "Koraidon",
    "catchRate": 3,
    "weightKg": 303.0,
    "heightM": 2.5,
    "types": [
      "fighting",
      "dragon"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 135,
      "defense": 115,
      "specialAttack": 85,
      "specialDefense": 100,
      "speed": 135
    }
  },
  {
    "dexNumber": 1008,
    "name": "Miraidon",
    "catchRate": 3,
    "weightKg": 240.0,
    "heightM": 3.5,
    "types": [
      "electric",
      "dragon"
    ],
    "baseStats": {
      "hp": 100,
      "attack": 85,
      "defense": 100,
      "specialAttack": 135,
      "specialDefense": 115,
      "speed": 135
    }
  },
  {
    "dexNumber": 1009,
    "name": "Walking Wake",
    "catchRate": 5,
    "weightKg": 280.0,
    "heightM": 3.5,
    "types": [
      "water",
      "dragon"
    ],
    "baseStats": {
      "hp": 99,
      "attack": 83,
      "defense": 91,
      "specialAttack": 125,
      "specialDefense": 83,
      "speed": 109
    }
  },
  {
    "dexNumber": 1010,
    "name": "Iron Leaves",
    "catchRate": 5,
    "weightKg": 125.0,
    "heightM": 1.5,
    "types": [
      "grass",
      "psychic"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 130,
      "defense": 88,
      "specialAttack": 70,
      "specialDefense": 108,
      "speed": 104
    }
  },
  {
    "dexNumber": 1011,
    "name": "Dipplin",
    "catchRate": 45,
    "weightKg": 9.7,
    "heightM": 0.4,
    "types": [
      "grass",
      "dragon"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 80,
      "defense": 110,
      "specialAttack": 95,
      "specialDefense": 80,
      "speed": 40
    }
  },
  {
    "dexNumber": 1012,
    "name": "Poltchageist",
    "catchRate": 120,
    "weightKg": 1.1,
    "heightM": 0.1,
    "types": [
      "grass",
      "ghost"
    ],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 45,
      "specialAttack": 74,
      "specialDefense": 54,
      "speed": 50
    }
  },
  {
    "dexNumber": 1013,
    "name": "Sinistcha",
    "catchRate": 60,
    "weightKg": 2.2,
    "heightM": 0.2,
    "types": [
      "grass",
      "ghost"
    ],
    "baseStats": {
      "hp": 71,
      "attack": 60,
      "defense": 106,
      "specialAttack": 121,
      "specialDefense": 80,
      "speed": 70
    }
  },
  {
    "dexNumber": 1014,
    "name": "Okidogi",
    "catchRate": 3,
    "weightKg": 92.2,
    "heightM": 1.8,
    "types": [
      "poison",
      "fighting"
    ],
    "baseStats": {
      "hp": 88,
      "attack": 128,
      "defense": 115,
      "specialAttack": 58,
      "specialDefense": 86,
      "speed": 80
    }
  },
  {
    "dexNumber": 1015,
    "name": "Munkidori",
    "catchRate": 3,
    "weightKg": 12.2,
    "heightM": 1.0,
    "types": [
      "poison",
      "psychic"
    ],
    "baseStats": {
      "hp": 88,
      "attack": 75,
      "defense": 66,
      "specialAttack": 130,
      "specialDefense": 90,
      "speed": 106
    }
  },
  {
    "dexNumber": 1016,
    "name": "Fezandipiti",
    "catchRate": 3,
    "weightKg": 30.1,
    "heightM": 1.4,
    "types": [
      "poison",
      "fairy"
    ],
    "baseStats": {
      "hp": 88,
      "attack": 91,
      "defense": 82,
      "specialAttack": 70,
      "specialDefense": 125,
      "speed": 99
    }
  },
  {
    "dexNumber": 1017,
    "name": "Ogerpon",
    "catchRate": 5,
    "weightKg": 39.8,
    "heightM": 1.2,
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 80,
      "attack": 120,
      "defense": 84,
      "specialAttack": 60,
      "specialDefense": 96,
      "speed": 110
    }
  },
  {
    "dexNumber": 1018,
    "name": "Archaludon",
    "catchRate": 10,
    "weightKg": 60.0,
    "heightM": 2.0,
    "types": [
      "steel",
      "dragon"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 105,
      "defense": 130,
      "specialAttack": 125,
      "specialDefense": 65,
      "speed": 85
    }
  },
  {
    "dexNumber": 1019,
    "name": "Hydrapple",
    "catchRate": 10,
    "weightKg": 93.0,
    "heightM": 1.8,
    "types": [
      "grass",
      "dragon"
    ],
    "baseStats": {
      "hp": 106,
      "attack": 80,
      "defense": 110,
      "specialAttack": 120,
      "specialDefense": 80,
      "speed": 44
    }
  },
  {
    "dexNumber": 1020,
    "name": "Gouging Fire",
    "catchRate": 10,
    "weightKg": 590.0,
    "heightM": 3.5,
    "types": [
      "fire",
      "dragon"
    ],
    "baseStats": {
      "hp": 105,
      "attack": 115,
      "defense": 121,
      "specialAttack": 65,
      "specialDefense": 93,
      "speed": 91
    }
  },
  {
    "dexNumber": 1021,
    "name": "Raging Bolt",
    "catchRate": 10,
    "weightKg": 480.0,
    "heightM": 5.2,
    "types": [
      "electric",
      "dragon"
    ],
    "baseStats": {
      "hp": 125,
      "attack": 73,
      "defense": 91,
      "specialAttack": 137,
      "specialDefense": 89,
      "speed": 75
    }
  },
  {
    "dexNumber": 1022,
    "name": "Iron Boulder",
    "catchRate": 10,
    "weightKg": 162.5,
    "heightM": 1.5,
    "types": [
      "rock",
      "psychic"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 120,
      "defense": 80,
      "specialAttack": 68,
      "specialDefense": 108,
      "speed": 124
    }
  },
  {
    "dexNumber": 1023,
    "name": "Iron Crown",
    "catchRate": 10,
    "weightKg": 156.0,
    "heightM": 1.6,
    "types": [
      "steel",
      "psychic"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 72,
      "defense": 100,
      "specialAttack": 122,
      "specialDefense": 108,
      "speed": 98
    }
  },
  {
    "dexNumber": 1024,
    "name": "Terapagos",
    "catchRate": 255,
    "weightKg": 6.5,
    "heightM": 0.2,
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 90,
      "attack": 65,
      "defense": 85,
      "specialAttack": 65,
      "specialDefense": 85,
      "speed": 60
    }
  },
  {
    "dexNumber": 1025,
    "name": "Pecharunt",
    "catchRate": 3,
    "weightKg": 0.3,
    "heightM": 0.3,
    "types": [
      "poison",
      "ghost"
    ],
    "baseStats": {
      "hp": 88,
      "attack": 88,
      "defense": 160,
      "specialAttack": 88,
      "specialDefense": 88,
      "speed": 88
    }
  }
];
