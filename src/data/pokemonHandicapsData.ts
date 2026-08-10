export interface SpeciesHandicap {
  dexNumber: number;
  name: string;
  genderType: 'standard' | 'genderless' | 'female_only' | 'male_only' | 'skewed_female' | 'skewed_female_75' | 'skewed_male_75';
  maleRate: number;
  femaleRate: number;
  genderLabel: string;
  isBaby: boolean;
  hatchSteps: number;
  specialNotes: string[];
}

export const AUTHENTIC_SPECIES_HANDICAPS: Record<number, SpeciesHandicap> = {
  "1": {
    "dexNumber": 1,
    "name": "Bulbasaur",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "2": {
    "dexNumber": 2,
    "name": "Ivysaur",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "3": {
    "dexNumber": 3,
    "name": "Venusaur",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "4": {
    "dexNumber": 4,
    "name": "Charmander",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "5": {
    "dexNumber": 5,
    "name": "Charmeleon",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "6": {
    "dexNumber": 6,
    "name": "Charizard",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "7": {
    "dexNumber": 7,
    "name": "Squirtle",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "8": {
    "dexNumber": 8,
    "name": "Wartortle",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "9": {
    "dexNumber": 9,
    "name": "Blastoise",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "10": {
    "dexNumber": 10,
    "name": "Caterpie",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "11": {
    "dexNumber": 11,
    "name": "Metapod",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "12": {
    "dexNumber": 12,
    "name": "Butterfree",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "13": {
    "dexNumber": 13,
    "name": "Weedle",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "14": {
    "dexNumber": 14,
    "name": "Kakuna",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "15": {
    "dexNumber": 15,
    "name": "Beedrill",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "16": {
    "dexNumber": 16,
    "name": "Pidgey",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "17": {
    "dexNumber": 17,
    "name": "Pidgeotto",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "18": {
    "dexNumber": 18,
    "name": "Pidgeot",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "19": {
    "dexNumber": 19,
    "name": "Rattata",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "20": {
    "dexNumber": 20,
    "name": "Raticate",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "21": {
    "dexNumber": 21,
    "name": "Spearow",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "22": {
    "dexNumber": 22,
    "name": "Fearow",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "23": {
    "dexNumber": 23,
    "name": "Ekans",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "24": {
    "dexNumber": 24,
    "name": "Arbok",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "25": {
    "dexNumber": 25,
    "name": "Pikachu",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 2816,
    "specialNotes": []
  },
  "26": {
    "dexNumber": 26,
    "name": "Raichu",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 2816,
    "specialNotes": []
  },
  "27": {
    "dexNumber": 27,
    "name": "Sandshrew",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "28": {
    "dexNumber": 28,
    "name": "Sandslash",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "29": {
    "dexNumber": 29,
    "name": "Nidoran-F",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "30": {
    "dexNumber": 30,
    "name": "Nidorina",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "31": {
    "dexNumber": 31,
    "name": "Nidoqueen",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "32": {
    "dexNumber": 32,
    "name": "Nidoran-M",
    "genderType": "male_only",
    "maleRate": 1.0,
    "femaleRate": 0.0,
    "genderLabel": "100% Macho (Solo Machos - Requiere Ditto para trasmitir especie)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Especie 100% Macho: Al criar con hembras de su grupo huevo, el huevo NUNCA ser\u00e1 de esta especie. Obligatoriamente requiere a DITTO para transmitir la especie."
    ]
  },
  "33": {
    "dexNumber": 33,
    "name": "Nidorino",
    "genderType": "male_only",
    "maleRate": 1.0,
    "femaleRate": 0.0,
    "genderLabel": "100% Macho (Solo Machos - Requiere Ditto para trasmitir especie)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Especie 100% Macho: Al criar con hembras de su grupo huevo, el huevo NUNCA ser\u00e1 de esta especie. Obligatoriamente requiere a DITTO para transmitir la especie."
    ]
  },
  "34": {
    "dexNumber": 34,
    "name": "Nidoking",
    "genderType": "male_only",
    "maleRate": 1.0,
    "femaleRate": 0.0,
    "genderLabel": "100% Macho (Solo Machos - Requiere Ditto para trasmitir especie)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Especie 100% Macho: Al criar con hembras de su grupo huevo, el huevo NUNCA ser\u00e1 de esta especie. Obligatoriamente requiere a DITTO para transmitir la especie."
    ]
  },
  "35": {
    "dexNumber": 35,
    "name": "Clefairy",
    "genderType": "skewed_male_75",
    "maleRate": 0.25,
    "femaleRate": 0.75,
    "genderLabel": "25% Macho / 75% Hembra",
    "isBaby": false,
    "hatchSteps": 2816,
    "specialNotes": []
  },
  "36": {
    "dexNumber": 36,
    "name": "Clefable",
    "genderType": "skewed_male_75",
    "maleRate": 0.25,
    "femaleRate": 0.75,
    "genderLabel": "25% Macho / 75% Hembra",
    "isBaby": false,
    "hatchSteps": 2816,
    "specialNotes": []
  },
  "37": {
    "dexNumber": 37,
    "name": "Vulpix",
    "genderType": "skewed_male_75",
    "maleRate": 0.25,
    "femaleRate": 0.75,
    "genderLabel": "25% Macho / 75% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "38": {
    "dexNumber": 38,
    "name": "Ninetales",
    "genderType": "skewed_male_75",
    "maleRate": 0.25,
    "femaleRate": 0.75,
    "genderLabel": "25% Macho / 75% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "39": {
    "dexNumber": 39,
    "name": "Jigglypuff",
    "genderType": "skewed_male_75",
    "maleRate": 0.25,
    "femaleRate": 0.75,
    "genderLabel": "25% Macho / 75% Hembra",
    "isBaby": false,
    "hatchSteps": 2816,
    "specialNotes": []
  },
  "40": {
    "dexNumber": 40,
    "name": "Wigglytuff",
    "genderType": "skewed_male_75",
    "maleRate": 0.25,
    "femaleRate": 0.75,
    "genderLabel": "25% Macho / 75% Hembra",
    "isBaby": false,
    "hatchSteps": 2816,
    "specialNotes": []
  },
  "41": {
    "dexNumber": 41,
    "name": "Zubat",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "42": {
    "dexNumber": 42,
    "name": "Golbat",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "43": {
    "dexNumber": 43,
    "name": "Oddish",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "44": {
    "dexNumber": 44,
    "name": "Gloom",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "45": {
    "dexNumber": 45,
    "name": "Vileplume",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "46": {
    "dexNumber": 46,
    "name": "Paras",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "47": {
    "dexNumber": 47,
    "name": "Parasect",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "48": {
    "dexNumber": 48,
    "name": "Venonat",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "49": {
    "dexNumber": 49,
    "name": "Venomoth",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "50": {
    "dexNumber": 50,
    "name": "Diglett",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "51": {
    "dexNumber": 51,
    "name": "Dugtrio",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "52": {
    "dexNumber": 52,
    "name": "Meowth",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "53": {
    "dexNumber": 53,
    "name": "Persian",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "54": {
    "dexNumber": 54,
    "name": "Psyduck",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "55": {
    "dexNumber": 55,
    "name": "Golduck",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "56": {
    "dexNumber": 56,
    "name": "Mankey",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "57": {
    "dexNumber": 57,
    "name": "Primeape",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "58": {
    "dexNumber": 58,
    "name": "Growlithe",
    "genderType": "skewed_female_75",
    "maleRate": 0.75,
    "femaleRate": 0.25,
    "genderLabel": "75% Macho / 25% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "59": {
    "dexNumber": 59,
    "name": "Arcanine",
    "genderType": "skewed_female_75",
    "maleRate": 0.75,
    "femaleRate": 0.25,
    "genderLabel": "75% Macho / 25% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "60": {
    "dexNumber": 60,
    "name": "Poliwag",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "61": {
    "dexNumber": 61,
    "name": "Poliwhirl",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "62": {
    "dexNumber": 62,
    "name": "Poliwrath",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "63": {
    "dexNumber": 63,
    "name": "Abra",
    "genderType": "skewed_female_75",
    "maleRate": 0.75,
    "femaleRate": 0.25,
    "genderLabel": "75% Macho / 25% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "64": {
    "dexNumber": 64,
    "name": "Kadabra",
    "genderType": "skewed_female_75",
    "maleRate": 0.75,
    "femaleRate": 0.25,
    "genderLabel": "75% Macho / 25% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "65": {
    "dexNumber": 65,
    "name": "Alakazam",
    "genderType": "skewed_female_75",
    "maleRate": 0.75,
    "femaleRate": 0.25,
    "genderLabel": "75% Macho / 25% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "66": {
    "dexNumber": 66,
    "name": "Machop",
    "genderType": "skewed_female_75",
    "maleRate": 0.75,
    "femaleRate": 0.25,
    "genderLabel": "75% Macho / 25% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "67": {
    "dexNumber": 67,
    "name": "Machoke",
    "genderType": "skewed_female_75",
    "maleRate": 0.75,
    "femaleRate": 0.25,
    "genderLabel": "75% Macho / 25% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "68": {
    "dexNumber": 68,
    "name": "Machamp",
    "genderType": "skewed_female_75",
    "maleRate": 0.75,
    "femaleRate": 0.25,
    "genderLabel": "75% Macho / 25% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "69": {
    "dexNumber": 69,
    "name": "Bellsprout",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "70": {
    "dexNumber": 70,
    "name": "Weepinbell",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "71": {
    "dexNumber": 71,
    "name": "Victreebel",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "72": {
    "dexNumber": 72,
    "name": "Tentacool",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "73": {
    "dexNumber": 73,
    "name": "Tentacruel",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "74": {
    "dexNumber": 74,
    "name": "Geodude",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "75": {
    "dexNumber": 75,
    "name": "Graveler",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "76": {
    "dexNumber": 76,
    "name": "Golem",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "77": {
    "dexNumber": 77,
    "name": "Ponyta",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "78": {
    "dexNumber": 78,
    "name": "Rapidash",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "79": {
    "dexNumber": 79,
    "name": "Slowpoke",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "80": {
    "dexNumber": 80,
    "name": "Slowbro",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "81": {
    "dexNumber": 81,
    "name": "Magnemite",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "82": {
    "dexNumber": 82,
    "name": "Magneton",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "83": {
    "dexNumber": 83,
    "name": "Farfetchd",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "84": {
    "dexNumber": 84,
    "name": "Doduo",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "85": {
    "dexNumber": 85,
    "name": "Dodrio",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "86": {
    "dexNumber": 86,
    "name": "Seel",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "87": {
    "dexNumber": 87,
    "name": "Dewgong",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "88": {
    "dexNumber": 88,
    "name": "Grimer",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "89": {
    "dexNumber": 89,
    "name": "Muk",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "90": {
    "dexNumber": 90,
    "name": "Shellder",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "91": {
    "dexNumber": 91,
    "name": "Cloyster",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "92": {
    "dexNumber": 92,
    "name": "Gastly",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "93": {
    "dexNumber": 93,
    "name": "Haunter",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "94": {
    "dexNumber": 94,
    "name": "Gengar",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "95": {
    "dexNumber": 95,
    "name": "Onix",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "96": {
    "dexNumber": 96,
    "name": "Drowzee",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "97": {
    "dexNumber": 97,
    "name": "Hypno",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "98": {
    "dexNumber": 98,
    "name": "Krabby",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "99": {
    "dexNumber": 99,
    "name": "Kingler",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "100": {
    "dexNumber": 100,
    "name": "Voltorb",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "101": {
    "dexNumber": 101,
    "name": "Electrode",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "102": {
    "dexNumber": 102,
    "name": "Exeggcute",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "103": {
    "dexNumber": 103,
    "name": "Exeggutor",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "104": {
    "dexNumber": 104,
    "name": "Cubone",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "105": {
    "dexNumber": 105,
    "name": "Marowak",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "106": {
    "dexNumber": 106,
    "name": "Hitmonlee",
    "genderType": "male_only",
    "maleRate": 1.0,
    "femaleRate": 0.0,
    "genderLabel": "100% Macho (Solo Machos - Requiere Ditto para trasmitir especie)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": [
      "\u26a0\ufe0f Especie 100% Macho: Al criar con hembras de su grupo huevo, el huevo NUNCA ser\u00e1 de esta especie. Obligatoriamente requiere a DITTO para transmitir la especie."
    ]
  },
  "107": {
    "dexNumber": 107,
    "name": "Hitmonchan",
    "genderType": "male_only",
    "maleRate": 1.0,
    "femaleRate": 0.0,
    "genderLabel": "100% Macho (Solo Machos - Requiere Ditto para trasmitir especie)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": [
      "\u26a0\ufe0f Especie 100% Macho: Al criar con hembras de su grupo huevo, el huevo NUNCA ser\u00e1 de esta especie. Obligatoriamente requiere a DITTO para transmitir la especie."
    ]
  },
  "108": {
    "dexNumber": 108,
    "name": "Lickitung",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "109": {
    "dexNumber": 109,
    "name": "Koffing",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "110": {
    "dexNumber": 110,
    "name": "Weezing",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "111": {
    "dexNumber": 111,
    "name": "Rhyhorn",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "112": {
    "dexNumber": 112,
    "name": "Rhydon",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "113": {
    "dexNumber": 113,
    "name": "Chansey",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "114": {
    "dexNumber": 114,
    "name": "Tangela",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "115": {
    "dexNumber": 115,
    "name": "Kangaskhan",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "116": {
    "dexNumber": 116,
    "name": "Horsea",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "117": {
    "dexNumber": 117,
    "name": "Seadra",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "118": {
    "dexNumber": 118,
    "name": "Goldeen",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "119": {
    "dexNumber": 119,
    "name": "Seaking",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "120": {
    "dexNumber": 120,
    "name": "Staryu",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "121": {
    "dexNumber": 121,
    "name": "Starmie",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "122": {
    "dexNumber": 122,
    "name": "Mr-Mime",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "123": {
    "dexNumber": 123,
    "name": "Scyther",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "124": {
    "dexNumber": 124,
    "name": "Jynx",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "125": {
    "dexNumber": 125,
    "name": "Electabuzz",
    "genderType": "skewed_female_75",
    "maleRate": 0.75,
    "femaleRate": 0.25,
    "genderLabel": "75% Macho / 25% Hembra",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "126": {
    "dexNumber": 126,
    "name": "Magmar",
    "genderType": "skewed_female_75",
    "maleRate": 0.75,
    "femaleRate": 0.25,
    "genderLabel": "75% Macho / 25% Hembra",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "127": {
    "dexNumber": 127,
    "name": "Pinsir",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "128": {
    "dexNumber": 128,
    "name": "Tauros",
    "genderType": "male_only",
    "maleRate": 1.0,
    "femaleRate": 0.0,
    "genderLabel": "100% Macho (Solo Machos - Requiere Ditto para trasmitir especie)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Especie 100% Macho: Al criar con hembras de su grupo huevo, el huevo NUNCA ser\u00e1 de esta especie. Obligatoriamente requiere a DITTO para transmitir la especie."
    ]
  },
  "129": {
    "dexNumber": 129,
    "name": "Magikarp",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 1536,
    "specialNotes": []
  },
  "130": {
    "dexNumber": 130,
    "name": "Gyarados",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 1536,
    "specialNotes": []
  },
  "131": {
    "dexNumber": 131,
    "name": "Lapras",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "132": {
    "dexNumber": 132,
    "name": "Ditto",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "133": {
    "dexNumber": 133,
    "name": "Eevee",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 9216,
    "specialNotes": []
  },
  "134": {
    "dexNumber": 134,
    "name": "Vaporeon",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 9216,
    "specialNotes": []
  },
  "135": {
    "dexNumber": 135,
    "name": "Jolteon",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 9216,
    "specialNotes": []
  },
  "136": {
    "dexNumber": 136,
    "name": "Flareon",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 9216,
    "specialNotes": []
  },
  "137": {
    "dexNumber": 137,
    "name": "Porygon",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "138": {
    "dexNumber": 138,
    "name": "Omanyte",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "139": {
    "dexNumber": 139,
    "name": "Omastar",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "140": {
    "dexNumber": 140,
    "name": "Kabuto",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "141": {
    "dexNumber": 141,
    "name": "Kabutops",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "142": {
    "dexNumber": 142,
    "name": "Aerodactyl",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 9216,
    "specialNotes": []
  },
  "143": {
    "dexNumber": 143,
    "name": "Snorlax",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "144": {
    "dexNumber": 144,
    "name": "Articuno",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 20736,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "145": {
    "dexNumber": 145,
    "name": "Zapdos",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 20736,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "146": {
    "dexNumber": 146,
    "name": "Moltres",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 20736,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "147": {
    "dexNumber": 147,
    "name": "Dratini",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "148": {
    "dexNumber": 148,
    "name": "Dragonair",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "149": {
    "dexNumber": 149,
    "name": "Dragonite",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "150": {
    "dexNumber": 150,
    "name": "Mewtwo",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "151": {
    "dexNumber": 151,
    "name": "Mew",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "152": {
    "dexNumber": 152,
    "name": "Chikorita",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "153": {
    "dexNumber": 153,
    "name": "Bayleef",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "154": {
    "dexNumber": 154,
    "name": "Meganium",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "155": {
    "dexNumber": 155,
    "name": "Cyndaquil",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "156": {
    "dexNumber": 156,
    "name": "Quilava",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "157": {
    "dexNumber": 157,
    "name": "Typhlosion",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "158": {
    "dexNumber": 158,
    "name": "Totodile",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "159": {
    "dexNumber": 159,
    "name": "Croconaw",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "160": {
    "dexNumber": 160,
    "name": "Feraligatr",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "161": {
    "dexNumber": 161,
    "name": "Sentret",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "162": {
    "dexNumber": 162,
    "name": "Furret",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "163": {
    "dexNumber": 163,
    "name": "Hoothoot",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "164": {
    "dexNumber": 164,
    "name": "Noctowl",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "165": {
    "dexNumber": 165,
    "name": "Ledyba",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "166": {
    "dexNumber": 166,
    "name": "Ledian",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "167": {
    "dexNumber": 167,
    "name": "Spinarak",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "168": {
    "dexNumber": 168,
    "name": "Ariados",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "169": {
    "dexNumber": 169,
    "name": "Crobat",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "170": {
    "dexNumber": 170,
    "name": "Chinchou",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "171": {
    "dexNumber": 171,
    "name": "Lanturn",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "172": {
    "dexNumber": 172,
    "name": "Pichu",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": true,
    "hatchSteps": 2816,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Beb\u00e9 (Grupo No Descubierto): No puede criar. Debe evolucionar a su forma adulta antes de colocar en la pastura."
    ]
  },
  "173": {
    "dexNumber": 173,
    "name": "Cleffa",
    "genderType": "skewed_male_75",
    "maleRate": 0.25,
    "femaleRate": 0.75,
    "genderLabel": "25% Macho / 75% Hembra",
    "isBaby": true,
    "hatchSteps": 2816,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Beb\u00e9 (Grupo No Descubierto): No puede criar. Debe evolucionar a su forma adulta antes de colocar en la pastura."
    ]
  },
  "174": {
    "dexNumber": 174,
    "name": "Igglybuff",
    "genderType": "skewed_male_75",
    "maleRate": 0.25,
    "femaleRate": 0.75,
    "genderLabel": "25% Macho / 75% Hembra",
    "isBaby": true,
    "hatchSteps": 2816,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Beb\u00e9 (Grupo No Descubierto): No puede criar. Debe evolucionar a su forma adulta antes de colocar en la pastura."
    ]
  },
  "175": {
    "dexNumber": 175,
    "name": "Togepi",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": true,
    "hatchSteps": 2816,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Beb\u00e9 (Grupo No Descubierto): No puede criar. Debe evolucionar a su forma adulta antes de colocar en la pastura."
    ]
  },
  "176": {
    "dexNumber": 176,
    "name": "Togetic",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 2816,
    "specialNotes": []
  },
  "177": {
    "dexNumber": 177,
    "name": "Natu",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "178": {
    "dexNumber": 178,
    "name": "Xatu",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "179": {
    "dexNumber": 179,
    "name": "Mareep",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "180": {
    "dexNumber": 180,
    "name": "Flaaffy",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "181": {
    "dexNumber": 181,
    "name": "Ampharos",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "182": {
    "dexNumber": 182,
    "name": "Bellossom",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "183": {
    "dexNumber": 183,
    "name": "Marill",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 2816,
    "specialNotes": []
  },
  "184": {
    "dexNumber": 184,
    "name": "Azumarill",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 2816,
    "specialNotes": []
  },
  "185": {
    "dexNumber": 185,
    "name": "Sudowoodo",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "186": {
    "dexNumber": 186,
    "name": "Politoed",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "187": {
    "dexNumber": 187,
    "name": "Hoppip",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "188": {
    "dexNumber": 188,
    "name": "Skiploom",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "189": {
    "dexNumber": 189,
    "name": "Jumpluff",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "190": {
    "dexNumber": 190,
    "name": "Aipom",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "191": {
    "dexNumber": 191,
    "name": "Sunkern",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "192": {
    "dexNumber": 192,
    "name": "Sunflora",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "193": {
    "dexNumber": 193,
    "name": "Yanma",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "194": {
    "dexNumber": 194,
    "name": "Wooper",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "195": {
    "dexNumber": 195,
    "name": "Quagsire",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "196": {
    "dexNumber": 196,
    "name": "Espeon",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 9216,
    "specialNotes": []
  },
  "197": {
    "dexNumber": 197,
    "name": "Umbreon",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 9216,
    "specialNotes": []
  },
  "198": {
    "dexNumber": 198,
    "name": "Murkrow",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "199": {
    "dexNumber": 199,
    "name": "Slowking",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "200": {
    "dexNumber": 200,
    "name": "Misdreavus",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "201": {
    "dexNumber": 201,
    "name": "Unown",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "202": {
    "dexNumber": 202,
    "name": "Wobbuffet",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "203": {
    "dexNumber": 203,
    "name": "Girafarig",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "204": {
    "dexNumber": 204,
    "name": "Pineco",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "205": {
    "dexNumber": 205,
    "name": "Forretress",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "206": {
    "dexNumber": 206,
    "name": "Dunsparce",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "207": {
    "dexNumber": 207,
    "name": "Gligar",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "208": {
    "dexNumber": 208,
    "name": "Steelix",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "209": {
    "dexNumber": 209,
    "name": "Snubbull",
    "genderType": "skewed_male_75",
    "maleRate": 0.25,
    "femaleRate": 0.75,
    "genderLabel": "25% Macho / 75% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "210": {
    "dexNumber": 210,
    "name": "Granbull",
    "genderType": "skewed_male_75",
    "maleRate": 0.25,
    "femaleRate": 0.75,
    "genderLabel": "25% Macho / 75% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "211": {
    "dexNumber": 211,
    "name": "Qwilfish",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "212": {
    "dexNumber": 212,
    "name": "Scizor",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "213": {
    "dexNumber": 213,
    "name": "Shuckle",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "214": {
    "dexNumber": 214,
    "name": "Heracross",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "215": {
    "dexNumber": 215,
    "name": "Sneasel",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "216": {
    "dexNumber": 216,
    "name": "Teddiursa",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "217": {
    "dexNumber": 217,
    "name": "Ursaring",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "218": {
    "dexNumber": 218,
    "name": "Slugma",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "219": {
    "dexNumber": 219,
    "name": "Magcargo",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "220": {
    "dexNumber": 220,
    "name": "Swinub",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "221": {
    "dexNumber": 221,
    "name": "Piloswine",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "222": {
    "dexNumber": 222,
    "name": "Corsola",
    "genderType": "skewed_male_75",
    "maleRate": 0.25,
    "femaleRate": 0.75,
    "genderLabel": "25% Macho / 75% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "223": {
    "dexNumber": 223,
    "name": "Remoraid",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "224": {
    "dexNumber": 224,
    "name": "Octillery",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "225": {
    "dexNumber": 225,
    "name": "Delibird",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "226": {
    "dexNumber": 226,
    "name": "Mantine",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "227": {
    "dexNumber": 227,
    "name": "Skarmory",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "228": {
    "dexNumber": 228,
    "name": "Houndour",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "229": {
    "dexNumber": 229,
    "name": "Houndoom",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "230": {
    "dexNumber": 230,
    "name": "Kingdra",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "231": {
    "dexNumber": 231,
    "name": "Phanpy",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "232": {
    "dexNumber": 232,
    "name": "Donphan",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "233": {
    "dexNumber": 233,
    "name": "Porygon2",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "234": {
    "dexNumber": 234,
    "name": "Stantler",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "235": {
    "dexNumber": 235,
    "name": "Smeargle",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "236": {
    "dexNumber": 236,
    "name": "Tyrogue",
    "genderType": "male_only",
    "maleRate": 1.0,
    "femaleRate": 0.0,
    "genderLabel": "100% Macho (Solo Machos - Requiere Ditto para trasmitir especie)",
    "isBaby": true,
    "hatchSteps": 6656,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Beb\u00e9 (Grupo No Descubierto): No puede criar. Debe evolucionar a su forma adulta antes de colocar en la pastura.",
      "\u26a0\ufe0f Especie 100% Macho: Al criar con hembras de su grupo huevo, el huevo NUNCA ser\u00e1 de esta especie. Obligatoriamente requiere a DITTO para transmitir la especie."
    ]
  },
  "237": {
    "dexNumber": 237,
    "name": "Hitmontop",
    "genderType": "male_only",
    "maleRate": 1.0,
    "femaleRate": 0.0,
    "genderLabel": "100% Macho (Solo Machos - Requiere Ditto para trasmitir especie)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": [
      "\u26a0\ufe0f Especie 100% Macho: Al criar con hembras de su grupo huevo, el huevo NUNCA ser\u00e1 de esta especie. Obligatoriamente requiere a DITTO para transmitir la especie."
    ]
  },
  "238": {
    "dexNumber": 238,
    "name": "Smoochum",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": true,
    "hatchSteps": 6656,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Beb\u00e9 (Grupo No Descubierto): No puede criar. Debe evolucionar a su forma adulta antes de colocar en la pastura.",
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "239": {
    "dexNumber": 239,
    "name": "Elekid",
    "genderType": "skewed_female_75",
    "maleRate": 0.75,
    "femaleRate": 0.25,
    "genderLabel": "75% Macho / 25% Hembra",
    "isBaby": true,
    "hatchSteps": 6656,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Beb\u00e9 (Grupo No Descubierto): No puede criar. Debe evolucionar a su forma adulta antes de colocar en la pastura."
    ]
  },
  "240": {
    "dexNumber": 240,
    "name": "Magby",
    "genderType": "skewed_female_75",
    "maleRate": 0.75,
    "femaleRate": 0.25,
    "genderLabel": "75% Macho / 25% Hembra",
    "isBaby": true,
    "hatchSteps": 6656,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Beb\u00e9 (Grupo No Descubierto): No puede criar. Debe evolucionar a su forma adulta antes de colocar en la pastura."
    ]
  },
  "241": {
    "dexNumber": 241,
    "name": "Miltank",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "242": {
    "dexNumber": 242,
    "name": "Blissey",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "243": {
    "dexNumber": 243,
    "name": "Raikou",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 20736,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "244": {
    "dexNumber": 244,
    "name": "Entei",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 20736,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "245": {
    "dexNumber": 245,
    "name": "Suicune",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 20736,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "246": {
    "dexNumber": 246,
    "name": "Larvitar",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "247": {
    "dexNumber": 247,
    "name": "Pupitar",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "248": {
    "dexNumber": 248,
    "name": "Tyranitar",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "249": {
    "dexNumber": 249,
    "name": "Lugia",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "250": {
    "dexNumber": 250,
    "name": "Ho-Oh",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "251": {
    "dexNumber": 251,
    "name": "Celebi",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "252": {
    "dexNumber": 252,
    "name": "Treecko",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "253": {
    "dexNumber": 253,
    "name": "Grovyle",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "254": {
    "dexNumber": 254,
    "name": "Sceptile",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "255": {
    "dexNumber": 255,
    "name": "Torchic",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "256": {
    "dexNumber": 256,
    "name": "Combusken",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "257": {
    "dexNumber": 257,
    "name": "Blaziken",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "258": {
    "dexNumber": 258,
    "name": "Mudkip",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "259": {
    "dexNumber": 259,
    "name": "Marshtomp",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "260": {
    "dexNumber": 260,
    "name": "Swampert",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "261": {
    "dexNumber": 261,
    "name": "Poochyena",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "262": {
    "dexNumber": 262,
    "name": "Mightyena",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "263": {
    "dexNumber": 263,
    "name": "Zigzagoon",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "264": {
    "dexNumber": 264,
    "name": "Linoone",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "265": {
    "dexNumber": 265,
    "name": "Wurmple",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "266": {
    "dexNumber": 266,
    "name": "Silcoon",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "267": {
    "dexNumber": 267,
    "name": "Beautifly",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "268": {
    "dexNumber": 268,
    "name": "Cascoon",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "269": {
    "dexNumber": 269,
    "name": "Dustox",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "270": {
    "dexNumber": 270,
    "name": "Lotad",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "271": {
    "dexNumber": 271,
    "name": "Lombre",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "272": {
    "dexNumber": 272,
    "name": "Ludicolo",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "273": {
    "dexNumber": 273,
    "name": "Seedot",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "274": {
    "dexNumber": 274,
    "name": "Nuzleaf",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "275": {
    "dexNumber": 275,
    "name": "Shiftry",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "276": {
    "dexNumber": 276,
    "name": "Taillow",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "277": {
    "dexNumber": 277,
    "name": "Swellow",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "278": {
    "dexNumber": 278,
    "name": "Wingull",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "279": {
    "dexNumber": 279,
    "name": "Pelipper",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "280": {
    "dexNumber": 280,
    "name": "Ralts",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "281": {
    "dexNumber": 281,
    "name": "Kirlia",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "282": {
    "dexNumber": 282,
    "name": "Gardevoir",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "283": {
    "dexNumber": 283,
    "name": "Surskit",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "284": {
    "dexNumber": 284,
    "name": "Masquerain",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "285": {
    "dexNumber": 285,
    "name": "Shroomish",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "286": {
    "dexNumber": 286,
    "name": "Breloom",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "287": {
    "dexNumber": 287,
    "name": "Slakoth",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "288": {
    "dexNumber": 288,
    "name": "Vigoroth",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "289": {
    "dexNumber": 289,
    "name": "Slaking",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "290": {
    "dexNumber": 290,
    "name": "Nincada",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "291": {
    "dexNumber": 291,
    "name": "Ninjask",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "292": {
    "dexNumber": 292,
    "name": "Shedinja",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "293": {
    "dexNumber": 293,
    "name": "Whismur",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "294": {
    "dexNumber": 294,
    "name": "Loudred",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "295": {
    "dexNumber": 295,
    "name": "Exploud",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "296": {
    "dexNumber": 296,
    "name": "Makuhita",
    "genderType": "skewed_female_75",
    "maleRate": 0.75,
    "femaleRate": 0.25,
    "genderLabel": "75% Macho / 25% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "297": {
    "dexNumber": 297,
    "name": "Hariyama",
    "genderType": "skewed_female_75",
    "maleRate": 0.75,
    "femaleRate": 0.25,
    "genderLabel": "75% Macho / 25% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "298": {
    "dexNumber": 298,
    "name": "Azurill",
    "genderType": "skewed_male_75",
    "maleRate": 0.25,
    "femaleRate": 0.75,
    "genderLabel": "25% Macho / 75% Hembra",
    "isBaby": true,
    "hatchSteps": 2816,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Beb\u00e9 (Grupo No Descubierto): No puede criar. Debe evolucionar a su forma adulta antes de colocar en la pastura."
    ]
  },
  "299": {
    "dexNumber": 299,
    "name": "Nosepass",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "300": {
    "dexNumber": 300,
    "name": "Skitty",
    "genderType": "skewed_male_75",
    "maleRate": 0.25,
    "femaleRate": 0.75,
    "genderLabel": "25% Macho / 75% Hembra",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "301": {
    "dexNumber": 301,
    "name": "Delcatty",
    "genderType": "skewed_male_75",
    "maleRate": 0.25,
    "femaleRate": 0.75,
    "genderLabel": "25% Macho / 75% Hembra",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "302": {
    "dexNumber": 302,
    "name": "Sableye",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "303": {
    "dexNumber": 303,
    "name": "Mawile",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "304": {
    "dexNumber": 304,
    "name": "Aron",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 9216,
    "specialNotes": []
  },
  "305": {
    "dexNumber": 305,
    "name": "Lairon",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 9216,
    "specialNotes": []
  },
  "306": {
    "dexNumber": 306,
    "name": "Aggron",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 9216,
    "specialNotes": []
  },
  "307": {
    "dexNumber": 307,
    "name": "Meditite",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "308": {
    "dexNumber": 308,
    "name": "Medicham",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "309": {
    "dexNumber": 309,
    "name": "Electrike",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "310": {
    "dexNumber": 310,
    "name": "Manectric",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "311": {
    "dexNumber": 311,
    "name": "Plusle",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "312": {
    "dexNumber": 312,
    "name": "Minun",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "313": {
    "dexNumber": 313,
    "name": "Volbeat",
    "genderType": "male_only",
    "maleRate": 1.0,
    "femaleRate": 0.0,
    "genderLabel": "100% Macho (Solo Machos - Requiere Ditto para trasmitir especie)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": [
      "\u26a0\ufe0f Especie 100% Macho: Al criar con hembras de su grupo huevo, el huevo NUNCA ser\u00e1 de esta especie. Obligatoriamente requiere a DITTO para transmitir la especie."
    ]
  },
  "314": {
    "dexNumber": 314,
    "name": "Illumise",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "315": {
    "dexNumber": 315,
    "name": "Roselia",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "316": {
    "dexNumber": 316,
    "name": "Gulpin",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "317": {
    "dexNumber": 317,
    "name": "Swalot",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "318": {
    "dexNumber": 318,
    "name": "Carvanha",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "319": {
    "dexNumber": 319,
    "name": "Sharpedo",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "320": {
    "dexNumber": 320,
    "name": "Wailmer",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "321": {
    "dexNumber": 321,
    "name": "Wailord",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "322": {
    "dexNumber": 322,
    "name": "Numel",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "323": {
    "dexNumber": 323,
    "name": "Camerupt",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "324": {
    "dexNumber": 324,
    "name": "Torkoal",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "325": {
    "dexNumber": 325,
    "name": "Spoink",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "326": {
    "dexNumber": 326,
    "name": "Grumpig",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "327": {
    "dexNumber": 327,
    "name": "Spinda",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "328": {
    "dexNumber": 328,
    "name": "Trapinch",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "329": {
    "dexNumber": 329,
    "name": "Vibrava",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "330": {
    "dexNumber": 330,
    "name": "Flygon",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "331": {
    "dexNumber": 331,
    "name": "Cacnea",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "332": {
    "dexNumber": 332,
    "name": "Cacturne",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "333": {
    "dexNumber": 333,
    "name": "Swablu",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "334": {
    "dexNumber": 334,
    "name": "Altaria",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "335": {
    "dexNumber": 335,
    "name": "Zangoose",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "336": {
    "dexNumber": 336,
    "name": "Seviper",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "337": {
    "dexNumber": 337,
    "name": "Lunatone",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "338": {
    "dexNumber": 338,
    "name": "Solrock",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "339": {
    "dexNumber": 339,
    "name": "Barboach",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "340": {
    "dexNumber": 340,
    "name": "Whiscash",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "341": {
    "dexNumber": 341,
    "name": "Corphish",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "342": {
    "dexNumber": 342,
    "name": "Crawdaunt",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "343": {
    "dexNumber": 343,
    "name": "Baltoy",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "344": {
    "dexNumber": 344,
    "name": "Claydol",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "345": {
    "dexNumber": 345,
    "name": "Lileep",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "346": {
    "dexNumber": 346,
    "name": "Cradily",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "347": {
    "dexNumber": 347,
    "name": "Anorith",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "348": {
    "dexNumber": 348,
    "name": "Armaldo",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "349": {
    "dexNumber": 349,
    "name": "Feebas",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "350": {
    "dexNumber": 350,
    "name": "Milotic",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "351": {
    "dexNumber": 351,
    "name": "Castform",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "352": {
    "dexNumber": 352,
    "name": "Kecleon",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "353": {
    "dexNumber": 353,
    "name": "Shuppet",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "354": {
    "dexNumber": 354,
    "name": "Banette",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "355": {
    "dexNumber": 355,
    "name": "Duskull",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "356": {
    "dexNumber": 356,
    "name": "Dusclops",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "357": {
    "dexNumber": 357,
    "name": "Tropius",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "358": {
    "dexNumber": 358,
    "name": "Chimecho",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "359": {
    "dexNumber": 359,
    "name": "Absol",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "360": {
    "dexNumber": 360,
    "name": "Wynaut",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": true,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Beb\u00e9 (Grupo No Descubierto): No puede criar. Debe evolucionar a su forma adulta antes de colocar en la pastura."
    ]
  },
  "361": {
    "dexNumber": 361,
    "name": "Snorunt",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "362": {
    "dexNumber": 362,
    "name": "Glalie",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "363": {
    "dexNumber": 363,
    "name": "Spheal",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "364": {
    "dexNumber": 364,
    "name": "Sealeo",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "365": {
    "dexNumber": 365,
    "name": "Walrein",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "366": {
    "dexNumber": 366,
    "name": "Clamperl",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "367": {
    "dexNumber": 367,
    "name": "Huntail",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "368": {
    "dexNumber": 368,
    "name": "Gorebyss",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "369": {
    "dexNumber": 369,
    "name": "Relicanth",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "370": {
    "dexNumber": 370,
    "name": "Luvdisc",
    "genderType": "skewed_male_75",
    "maleRate": 0.25,
    "femaleRate": 0.75,
    "genderLabel": "25% Macho / 75% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "371": {
    "dexNumber": 371,
    "name": "Bagon",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "372": {
    "dexNumber": 372,
    "name": "Shelgon",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "373": {
    "dexNumber": 373,
    "name": "Salamence",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "374": {
    "dexNumber": 374,
    "name": "Beldum",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "375": {
    "dexNumber": 375,
    "name": "Metang",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "376": {
    "dexNumber": 376,
    "name": "Metagross",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "377": {
    "dexNumber": 377,
    "name": "Regirock",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 20736,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "378": {
    "dexNumber": 378,
    "name": "Regice",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 20736,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "379": {
    "dexNumber": 379,
    "name": "Registeel",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 20736,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "380": {
    "dexNumber": 380,
    "name": "Latias",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "381": {
    "dexNumber": 381,
    "name": "Latios",
    "genderType": "male_only",
    "maleRate": 1.0,
    "femaleRate": 0.0,
    "genderLabel": "100% Macho (Solo Machos - Requiere Ditto para trasmitir especie)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Especie 100% Macho: Al criar con hembras de su grupo huevo, el huevo NUNCA ser\u00e1 de esta especie. Obligatoriamente requiere a DITTO para transmitir la especie."
    ]
  },
  "382": {
    "dexNumber": 382,
    "name": "Kyogre",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "383": {
    "dexNumber": 383,
    "name": "Groudon",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "384": {
    "dexNumber": 384,
    "name": "Rayquaza",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "385": {
    "dexNumber": 385,
    "name": "Jirachi",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "386": {
    "dexNumber": 386,
    "name": "Deoxys",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "387": {
    "dexNumber": 387,
    "name": "Turtwig",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "388": {
    "dexNumber": 388,
    "name": "Grotle",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "389": {
    "dexNumber": 389,
    "name": "Torterra",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "390": {
    "dexNumber": 390,
    "name": "Chimchar",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "391": {
    "dexNumber": 391,
    "name": "Monferno",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "392": {
    "dexNumber": 392,
    "name": "Infernape",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "393": {
    "dexNumber": 393,
    "name": "Piplup",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "394": {
    "dexNumber": 394,
    "name": "Prinplup",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "395": {
    "dexNumber": 395,
    "name": "Empoleon",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "396": {
    "dexNumber": 396,
    "name": "Starly",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "397": {
    "dexNumber": 397,
    "name": "Staravia",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "398": {
    "dexNumber": 398,
    "name": "Staraptor",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "399": {
    "dexNumber": 399,
    "name": "Bidoof",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "400": {
    "dexNumber": 400,
    "name": "Bibarel",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "401": {
    "dexNumber": 401,
    "name": "Kricketot",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "402": {
    "dexNumber": 402,
    "name": "Kricketune",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "403": {
    "dexNumber": 403,
    "name": "Shinx",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "404": {
    "dexNumber": 404,
    "name": "Luxio",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "405": {
    "dexNumber": 405,
    "name": "Luxray",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "406": {
    "dexNumber": 406,
    "name": "Budew",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": true,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Beb\u00e9 (Grupo No Descubierto): No puede criar. Debe evolucionar a su forma adulta antes de colocar en la pastura."
    ]
  },
  "407": {
    "dexNumber": 407,
    "name": "Roserade",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "408": {
    "dexNumber": 408,
    "name": "Cranidos",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "409": {
    "dexNumber": 409,
    "name": "Rampardos",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "410": {
    "dexNumber": 410,
    "name": "Shieldon",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "411": {
    "dexNumber": 411,
    "name": "Bastiodon",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "412": {
    "dexNumber": 412,
    "name": "Burmy",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "413": {
    "dexNumber": 413,
    "name": "Wormadam",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "414": {
    "dexNumber": 414,
    "name": "Mothim",
    "genderType": "male_only",
    "maleRate": 1.0,
    "femaleRate": 0.0,
    "genderLabel": "100% Macho (Solo Machos - Requiere Ditto para trasmitir especie)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": [
      "\u26a0\ufe0f Especie 100% Macho: Al criar con hembras de su grupo huevo, el huevo NUNCA ser\u00e1 de esta especie. Obligatoriamente requiere a DITTO para transmitir la especie."
    ]
  },
  "415": {
    "dexNumber": 415,
    "name": "Combee",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": [
      "\u26a0\ufe0f Crianza Asim\u00e9trica: Solo las Hembras (12.5%) pueden evolucionar (Salazzle/Vespiquen). Los Machos no evolucionan."
    ]
  },
  "416": {
    "dexNumber": 416,
    "name": "Vespiquen",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "417": {
    "dexNumber": 417,
    "name": "Pachirisu",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 2816,
    "specialNotes": []
  },
  "418": {
    "dexNumber": 418,
    "name": "Buizel",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "419": {
    "dexNumber": 419,
    "name": "Floatzel",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "420": {
    "dexNumber": 420,
    "name": "Cherubi",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "421": {
    "dexNumber": 421,
    "name": "Cherrim",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "422": {
    "dexNumber": 422,
    "name": "Shellos",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "423": {
    "dexNumber": 423,
    "name": "Gastrodon",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "424": {
    "dexNumber": 424,
    "name": "Ambipom",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "425": {
    "dexNumber": 425,
    "name": "Drifloon",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "426": {
    "dexNumber": 426,
    "name": "Drifblim",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "427": {
    "dexNumber": 427,
    "name": "Buneary",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "428": {
    "dexNumber": 428,
    "name": "Lopunny",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "429": {
    "dexNumber": 429,
    "name": "Mismagius",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "430": {
    "dexNumber": 430,
    "name": "Honchkrow",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "431": {
    "dexNumber": 431,
    "name": "Glameow",
    "genderType": "skewed_male_75",
    "maleRate": 0.25,
    "femaleRate": 0.75,
    "genderLabel": "25% Macho / 75% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "432": {
    "dexNumber": 432,
    "name": "Purugly",
    "genderType": "skewed_male_75",
    "maleRate": 0.25,
    "femaleRate": 0.75,
    "genderLabel": "25% Macho / 75% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "433": {
    "dexNumber": 433,
    "name": "Chingling",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": true,
    "hatchSteps": 6656,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Beb\u00e9 (Grupo No Descubierto): No puede criar. Debe evolucionar a su forma adulta antes de colocar en la pastura."
    ]
  },
  "434": {
    "dexNumber": 434,
    "name": "Stunky",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "435": {
    "dexNumber": 435,
    "name": "Skuntank",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "436": {
    "dexNumber": 436,
    "name": "Bronzor",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "437": {
    "dexNumber": 437,
    "name": "Bronzong",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "438": {
    "dexNumber": 438,
    "name": "Bonsly",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": true,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Beb\u00e9 (Grupo No Descubierto): No puede criar. Debe evolucionar a su forma adulta antes de colocar en la pastura."
    ]
  },
  "439": {
    "dexNumber": 439,
    "name": "Mime-Jr",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": true,
    "hatchSteps": 6656,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Beb\u00e9 (Grupo No Descubierto): No puede criar. Debe evolucionar a su forma adulta antes de colocar en la pastura."
    ]
  },
  "440": {
    "dexNumber": 440,
    "name": "Happiny",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": true,
    "hatchSteps": 10496,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Beb\u00e9 (Grupo No Descubierto): No puede criar. Debe evolucionar a su forma adulta antes de colocar en la pastura.",
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "441": {
    "dexNumber": 441,
    "name": "Chatot",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "442": {
    "dexNumber": 442,
    "name": "Spiritomb",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "443": {
    "dexNumber": 443,
    "name": "Gible",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "444": {
    "dexNumber": 444,
    "name": "Gabite",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "445": {
    "dexNumber": 445,
    "name": "Garchomp",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "446": {
    "dexNumber": 446,
    "name": "Munchlax",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": true,
    "hatchSteps": 10496,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Beb\u00e9 (Grupo No Descubierto): No puede criar. Debe evolucionar a su forma adulta antes de colocar en la pastura."
    ]
  },
  "447": {
    "dexNumber": 447,
    "name": "Riolu",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": true,
    "hatchSteps": 6656,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Beb\u00e9 (Grupo No Descubierto): No puede criar. Debe evolucionar a su forma adulta antes de colocar en la pastura."
    ]
  },
  "448": {
    "dexNumber": 448,
    "name": "Lucario",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "449": {
    "dexNumber": 449,
    "name": "Hippopotas",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "450": {
    "dexNumber": 450,
    "name": "Hippowdon",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "451": {
    "dexNumber": 451,
    "name": "Skorupi",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "452": {
    "dexNumber": 452,
    "name": "Drapion",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "453": {
    "dexNumber": 453,
    "name": "Croagunk",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 2816,
    "specialNotes": []
  },
  "454": {
    "dexNumber": 454,
    "name": "Toxicroak",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "455": {
    "dexNumber": 455,
    "name": "Carnivine",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "456": {
    "dexNumber": 456,
    "name": "Finneon",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "457": {
    "dexNumber": 457,
    "name": "Lumineon",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "458": {
    "dexNumber": 458,
    "name": "Mantyke",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": true,
    "hatchSteps": 6656,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Beb\u00e9 (Grupo No Descubierto): No puede criar. Debe evolucionar a su forma adulta antes de colocar en la pastura."
    ]
  },
  "459": {
    "dexNumber": 459,
    "name": "Snover",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "460": {
    "dexNumber": 460,
    "name": "Abomasnow",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "461": {
    "dexNumber": 461,
    "name": "Weavile",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "462": {
    "dexNumber": 462,
    "name": "Magnezone",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "463": {
    "dexNumber": 463,
    "name": "Lickilicky",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "464": {
    "dexNumber": 464,
    "name": "Rhyperior",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "465": {
    "dexNumber": 465,
    "name": "Tangrowth",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "466": {
    "dexNumber": 466,
    "name": "Electivire",
    "genderType": "skewed_female_75",
    "maleRate": 0.75,
    "femaleRate": 0.25,
    "genderLabel": "75% Macho / 25% Hembra",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "467": {
    "dexNumber": 467,
    "name": "Magmortar",
    "genderType": "skewed_female_75",
    "maleRate": 0.75,
    "femaleRate": 0.25,
    "genderLabel": "75% Macho / 25% Hembra",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "468": {
    "dexNumber": 468,
    "name": "Togekiss",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 2816,
    "specialNotes": []
  },
  "469": {
    "dexNumber": 469,
    "name": "Yanmega",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "470": {
    "dexNumber": 470,
    "name": "Leafeon",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 9216,
    "specialNotes": []
  },
  "471": {
    "dexNumber": 471,
    "name": "Glaceon",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 9216,
    "specialNotes": []
  },
  "472": {
    "dexNumber": 472,
    "name": "Gliscor",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "473": {
    "dexNumber": 473,
    "name": "Mamoswine",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "474": {
    "dexNumber": 474,
    "name": "Porygon-Z",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "475": {
    "dexNumber": 475,
    "name": "Gallade",
    "genderType": "male_only",
    "maleRate": 1.0,
    "femaleRate": 0.0,
    "genderLabel": "100% Macho (Solo Machos - Requiere Ditto para trasmitir especie)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Especie 100% Macho: Al criar con hembras de su grupo huevo, el huevo NUNCA ser\u00e1 de esta especie. Obligatoriamente requiere a DITTO para transmitir la especie."
    ]
  },
  "476": {
    "dexNumber": 476,
    "name": "Probopass",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "477": {
    "dexNumber": 477,
    "name": "Dusknoir",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "478": {
    "dexNumber": 478,
    "name": "Froslass",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "479": {
    "dexNumber": 479,
    "name": "Rotom",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "480": {
    "dexNumber": 480,
    "name": "Uxie",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 20736,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "481": {
    "dexNumber": 481,
    "name": "Mesprit",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 20736,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "482": {
    "dexNumber": 482,
    "name": "Azelf",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 20736,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "483": {
    "dexNumber": 483,
    "name": "Dialga",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "484": {
    "dexNumber": 484,
    "name": "Palkia",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "485": {
    "dexNumber": 485,
    "name": "Heatran",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 2816,
    "specialNotes": []
  },
  "486": {
    "dexNumber": 486,
    "name": "Regigigas",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "487": {
    "dexNumber": 487,
    "name": "Giratina",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "488": {
    "dexNumber": 488,
    "name": "Cresselia",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "489": {
    "dexNumber": 489,
    "name": "Phione",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "490": {
    "dexNumber": 490,
    "name": "Manaphy",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 2816,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "491": {
    "dexNumber": 491,
    "name": "Darkrai",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "492": {
    "dexNumber": 492,
    "name": "Shaymin",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "493": {
    "dexNumber": 493,
    "name": "Arceus",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "494": {
    "dexNumber": 494,
    "name": "Victini",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "495": {
    "dexNumber": 495,
    "name": "Snivy",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "496": {
    "dexNumber": 496,
    "name": "Servine",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "497": {
    "dexNumber": 497,
    "name": "Serperior",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "498": {
    "dexNumber": 498,
    "name": "Tepig",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "499": {
    "dexNumber": 499,
    "name": "Pignite",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "500": {
    "dexNumber": 500,
    "name": "Emboar",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "501": {
    "dexNumber": 501,
    "name": "Oshawott",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "502": {
    "dexNumber": 502,
    "name": "Dewott",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "503": {
    "dexNumber": 503,
    "name": "Samurott",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "504": {
    "dexNumber": 504,
    "name": "Patrat",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "505": {
    "dexNumber": 505,
    "name": "Watchog",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "506": {
    "dexNumber": 506,
    "name": "Lillipup",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "507": {
    "dexNumber": 507,
    "name": "Herdier",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "508": {
    "dexNumber": 508,
    "name": "Stoutland",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "509": {
    "dexNumber": 509,
    "name": "Purrloin",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "510": {
    "dexNumber": 510,
    "name": "Liepard",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "511": {
    "dexNumber": 511,
    "name": "Pansage",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "512": {
    "dexNumber": 512,
    "name": "Simisage",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "513": {
    "dexNumber": 513,
    "name": "Pansear",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "514": {
    "dexNumber": 514,
    "name": "Simisear",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "515": {
    "dexNumber": 515,
    "name": "Panpour",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "516": {
    "dexNumber": 516,
    "name": "Simipour",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "517": {
    "dexNumber": 517,
    "name": "Munna",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 2816,
    "specialNotes": []
  },
  "518": {
    "dexNumber": 518,
    "name": "Musharna",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 2816,
    "specialNotes": []
  },
  "519": {
    "dexNumber": 519,
    "name": "Pidove",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "520": {
    "dexNumber": 520,
    "name": "Tranquill",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "521": {
    "dexNumber": 521,
    "name": "Unfezant",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "522": {
    "dexNumber": 522,
    "name": "Blitzle",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "523": {
    "dexNumber": 523,
    "name": "Zebstrika",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "524": {
    "dexNumber": 524,
    "name": "Roggenrola",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "525": {
    "dexNumber": 525,
    "name": "Boldore",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "526": {
    "dexNumber": 526,
    "name": "Gigalith",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "527": {
    "dexNumber": 527,
    "name": "Woobat",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "528": {
    "dexNumber": 528,
    "name": "Swoobat",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "529": {
    "dexNumber": 529,
    "name": "Drilbur",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "530": {
    "dexNumber": 530,
    "name": "Excadrill",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "531": {
    "dexNumber": 531,
    "name": "Audino",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "532": {
    "dexNumber": 532,
    "name": "Timburr",
    "genderType": "skewed_female_75",
    "maleRate": 0.75,
    "femaleRate": 0.25,
    "genderLabel": "75% Macho / 25% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "533": {
    "dexNumber": 533,
    "name": "Gurdurr",
    "genderType": "skewed_female_75",
    "maleRate": 0.75,
    "femaleRate": 0.25,
    "genderLabel": "75% Macho / 25% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "534": {
    "dexNumber": 534,
    "name": "Conkeldurr",
    "genderType": "skewed_female_75",
    "maleRate": 0.75,
    "femaleRate": 0.25,
    "genderLabel": "75% Macho / 25% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "535": {
    "dexNumber": 535,
    "name": "Tympole",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "536": {
    "dexNumber": 536,
    "name": "Palpitoad",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "537": {
    "dexNumber": 537,
    "name": "Seismitoad",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "538": {
    "dexNumber": 538,
    "name": "Throh",
    "genderType": "male_only",
    "maleRate": 1.0,
    "femaleRate": 0.0,
    "genderLabel": "100% Macho (Solo Machos - Requiere Ditto para trasmitir especie)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Especie 100% Macho: Al criar con hembras de su grupo huevo, el huevo NUNCA ser\u00e1 de esta especie. Obligatoriamente requiere a DITTO para transmitir la especie."
    ]
  },
  "539": {
    "dexNumber": 539,
    "name": "Sawk",
    "genderType": "male_only",
    "maleRate": 1.0,
    "femaleRate": 0.0,
    "genderLabel": "100% Macho (Solo Machos - Requiere Ditto para trasmitir especie)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Especie 100% Macho: Al criar con hembras de su grupo huevo, el huevo NUNCA ser\u00e1 de esta especie. Obligatoriamente requiere a DITTO para transmitir la especie."
    ]
  },
  "540": {
    "dexNumber": 540,
    "name": "Sewaddle",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "541": {
    "dexNumber": 541,
    "name": "Swadloon",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "542": {
    "dexNumber": 542,
    "name": "Leavanny",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "543": {
    "dexNumber": 543,
    "name": "Venipede",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "544": {
    "dexNumber": 544,
    "name": "Whirlipede",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "545": {
    "dexNumber": 545,
    "name": "Scolipede",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "546": {
    "dexNumber": 546,
    "name": "Cottonee",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "547": {
    "dexNumber": 547,
    "name": "Whimsicott",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "548": {
    "dexNumber": 548,
    "name": "Petilil",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "549": {
    "dexNumber": 549,
    "name": "Lilligant",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "550": {
    "dexNumber": 550,
    "name": "Basculin",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "551": {
    "dexNumber": 551,
    "name": "Sandile",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "552": {
    "dexNumber": 552,
    "name": "Krokorok",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "553": {
    "dexNumber": 553,
    "name": "Krookodile",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "554": {
    "dexNumber": 554,
    "name": "Darumaka",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "555": {
    "dexNumber": 555,
    "name": "Darmanitan",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "556": {
    "dexNumber": 556,
    "name": "Maractus",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "557": {
    "dexNumber": 557,
    "name": "Dwebble",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "558": {
    "dexNumber": 558,
    "name": "Crustle",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "559": {
    "dexNumber": 559,
    "name": "Scraggy",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "560": {
    "dexNumber": 560,
    "name": "Scrafty",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "561": {
    "dexNumber": 561,
    "name": "Sigilyph",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "562": {
    "dexNumber": 562,
    "name": "Yamask",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "563": {
    "dexNumber": 563,
    "name": "Cofagrigus",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "564": {
    "dexNumber": 564,
    "name": "Tirtouga",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "565": {
    "dexNumber": 565,
    "name": "Carracosta",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "566": {
    "dexNumber": 566,
    "name": "Archen",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "567": {
    "dexNumber": 567,
    "name": "Archeops",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "568": {
    "dexNumber": 568,
    "name": "Trubbish",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "569": {
    "dexNumber": 569,
    "name": "Garbodor",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "570": {
    "dexNumber": 570,
    "name": "Zorua",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "571": {
    "dexNumber": 571,
    "name": "Zoroark",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "572": {
    "dexNumber": 572,
    "name": "Minccino",
    "genderType": "skewed_male_75",
    "maleRate": 0.25,
    "femaleRate": 0.75,
    "genderLabel": "25% Macho / 75% Hembra",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "573": {
    "dexNumber": 573,
    "name": "Cinccino",
    "genderType": "skewed_male_75",
    "maleRate": 0.25,
    "femaleRate": 0.75,
    "genderLabel": "25% Macho / 75% Hembra",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "574": {
    "dexNumber": 574,
    "name": "Gothita",
    "genderType": "skewed_male_75",
    "maleRate": 0.25,
    "femaleRate": 0.75,
    "genderLabel": "25% Macho / 75% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "575": {
    "dexNumber": 575,
    "name": "Gothorita",
    "genderType": "skewed_male_75",
    "maleRate": 0.25,
    "femaleRate": 0.75,
    "genderLabel": "25% Macho / 75% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "576": {
    "dexNumber": 576,
    "name": "Gothitelle",
    "genderType": "skewed_male_75",
    "maleRate": 0.25,
    "femaleRate": 0.75,
    "genderLabel": "25% Macho / 75% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "577": {
    "dexNumber": 577,
    "name": "Solosis",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "578": {
    "dexNumber": 578,
    "name": "Duosion",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "579": {
    "dexNumber": 579,
    "name": "Reuniclus",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "580": {
    "dexNumber": 580,
    "name": "Ducklett",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "581": {
    "dexNumber": 581,
    "name": "Swanna",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "582": {
    "dexNumber": 582,
    "name": "Vanillite",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "583": {
    "dexNumber": 583,
    "name": "Vanillish",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "584": {
    "dexNumber": 584,
    "name": "Vanilluxe",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "585": {
    "dexNumber": 585,
    "name": "Deerling",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "586": {
    "dexNumber": 586,
    "name": "Sawsbuck",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "587": {
    "dexNumber": 587,
    "name": "Emolga",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "588": {
    "dexNumber": 588,
    "name": "Karrablast",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "589": {
    "dexNumber": 589,
    "name": "Escavalier",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "590": {
    "dexNumber": 590,
    "name": "Foongus",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "591": {
    "dexNumber": 591,
    "name": "Amoonguss",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "592": {
    "dexNumber": 592,
    "name": "Frillish",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "593": {
    "dexNumber": 593,
    "name": "Jellicent",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "594": {
    "dexNumber": 594,
    "name": "Alomomola",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "595": {
    "dexNumber": 595,
    "name": "Joltik",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "596": {
    "dexNumber": 596,
    "name": "Galvantula",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "597": {
    "dexNumber": 597,
    "name": "Ferroseed",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "598": {
    "dexNumber": 598,
    "name": "Ferrothorn",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "599": {
    "dexNumber": 599,
    "name": "Klink",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "600": {
    "dexNumber": 600,
    "name": "Klang",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "601": {
    "dexNumber": 601,
    "name": "Klinklang",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "602": {
    "dexNumber": 602,
    "name": "Tynamo",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "603": {
    "dexNumber": 603,
    "name": "Eelektrik",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "604": {
    "dexNumber": 604,
    "name": "Eelektross",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "605": {
    "dexNumber": 605,
    "name": "Elgyem",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "606": {
    "dexNumber": 606,
    "name": "Beheeyem",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "607": {
    "dexNumber": 607,
    "name": "Litwick",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "608": {
    "dexNumber": 608,
    "name": "Lampent",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "609": {
    "dexNumber": 609,
    "name": "Chandelure",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "610": {
    "dexNumber": 610,
    "name": "Axew",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "611": {
    "dexNumber": 611,
    "name": "Fraxure",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "612": {
    "dexNumber": 612,
    "name": "Haxorus",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "613": {
    "dexNumber": 613,
    "name": "Cubchoo",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "614": {
    "dexNumber": 614,
    "name": "Beartic",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "615": {
    "dexNumber": 615,
    "name": "Cryogonal",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "616": {
    "dexNumber": 616,
    "name": "Shelmet",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "617": {
    "dexNumber": 617,
    "name": "Accelgor",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "618": {
    "dexNumber": 618,
    "name": "Stunfisk",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "619": {
    "dexNumber": 619,
    "name": "Mienfoo",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "620": {
    "dexNumber": 620,
    "name": "Mienshao",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "621": {
    "dexNumber": 621,
    "name": "Druddigon",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "622": {
    "dexNumber": 622,
    "name": "Golett",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "623": {
    "dexNumber": 623,
    "name": "Golurk",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "624": {
    "dexNumber": 624,
    "name": "Pawniard",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "625": {
    "dexNumber": 625,
    "name": "Bisharp",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "626": {
    "dexNumber": 626,
    "name": "Bouffalant",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "627": {
    "dexNumber": 627,
    "name": "Rufflet",
    "genderType": "male_only",
    "maleRate": 1.0,
    "femaleRate": 0.0,
    "genderLabel": "100% Macho (Solo Machos - Requiere Ditto para trasmitir especie)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Especie 100% Macho: Al criar con hembras de su grupo huevo, el huevo NUNCA ser\u00e1 de esta especie. Obligatoriamente requiere a DITTO para transmitir la especie."
    ]
  },
  "628": {
    "dexNumber": 628,
    "name": "Braviary",
    "genderType": "male_only",
    "maleRate": 1.0,
    "femaleRate": 0.0,
    "genderLabel": "100% Macho (Solo Machos - Requiere Ditto para trasmitir especie)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Especie 100% Macho: Al criar con hembras de su grupo huevo, el huevo NUNCA ser\u00e1 de esta especie. Obligatoriamente requiere a DITTO para transmitir la especie."
    ]
  },
  "629": {
    "dexNumber": 629,
    "name": "Vullaby",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "630": {
    "dexNumber": 630,
    "name": "Mandibuzz",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "631": {
    "dexNumber": 631,
    "name": "Heatmor",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "632": {
    "dexNumber": 632,
    "name": "Durant",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "633": {
    "dexNumber": 633,
    "name": "Deino",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "634": {
    "dexNumber": 634,
    "name": "Zweilous",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "635": {
    "dexNumber": 635,
    "name": "Hydreigon",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "636": {
    "dexNumber": 636,
    "name": "Larvesta",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "637": {
    "dexNumber": 637,
    "name": "Volcarona",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "638": {
    "dexNumber": 638,
    "name": "Cobalion",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 20736,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "639": {
    "dexNumber": 639,
    "name": "Terrakion",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 20736,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "640": {
    "dexNumber": 640,
    "name": "Virizion",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 20736,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "641": {
    "dexNumber": 641,
    "name": "Tornadus",
    "genderType": "male_only",
    "maleRate": 1.0,
    "femaleRate": 0.0,
    "genderLabel": "100% Macho (Solo Machos - Requiere Ditto para trasmitir especie)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Especie 100% Macho: Al criar con hembras de su grupo huevo, el huevo NUNCA ser\u00e1 de esta especie. Obligatoriamente requiere a DITTO para transmitir la especie."
    ]
  },
  "642": {
    "dexNumber": 642,
    "name": "Thundurus",
    "genderType": "male_only",
    "maleRate": 1.0,
    "femaleRate": 0.0,
    "genderLabel": "100% Macho (Solo Machos - Requiere Ditto para trasmitir especie)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Especie 100% Macho: Al criar con hembras de su grupo huevo, el huevo NUNCA ser\u00e1 de esta especie. Obligatoriamente requiere a DITTO para transmitir la especie."
    ]
  },
  "643": {
    "dexNumber": 643,
    "name": "Reshiram",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "644": {
    "dexNumber": 644,
    "name": "Zekrom",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "645": {
    "dexNumber": 645,
    "name": "Landorus",
    "genderType": "male_only",
    "maleRate": 1.0,
    "femaleRate": 0.0,
    "genderLabel": "100% Macho (Solo Machos - Requiere Ditto para trasmitir especie)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Especie 100% Macho: Al criar con hembras de su grupo huevo, el huevo NUNCA ser\u00e1 de esta especie. Obligatoriamente requiere a DITTO para transmitir la especie."
    ]
  },
  "646": {
    "dexNumber": 646,
    "name": "Kyurem",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "647": {
    "dexNumber": 647,
    "name": "Keldeo",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 20736,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "648": {
    "dexNumber": 648,
    "name": "Meloetta",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "649": {
    "dexNumber": 649,
    "name": "Genesect",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "650": {
    "dexNumber": 650,
    "name": "Chespin",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "651": {
    "dexNumber": 651,
    "name": "Quilladin",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "652": {
    "dexNumber": 652,
    "name": "Chesnaught",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "653": {
    "dexNumber": 653,
    "name": "Fennekin",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "654": {
    "dexNumber": 654,
    "name": "Braixen",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "655": {
    "dexNumber": 655,
    "name": "Delphox",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "656": {
    "dexNumber": 656,
    "name": "Froakie",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "657": {
    "dexNumber": 657,
    "name": "Frogadier",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "658": {
    "dexNumber": 658,
    "name": "Greninja",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "659": {
    "dexNumber": 659,
    "name": "Bunnelby",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "660": {
    "dexNumber": 660,
    "name": "Diggersby",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "661": {
    "dexNumber": 661,
    "name": "Fletchling",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "662": {
    "dexNumber": 662,
    "name": "Fletchinder",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "663": {
    "dexNumber": 663,
    "name": "Talonflame",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "664": {
    "dexNumber": 664,
    "name": "Scatterbug",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "665": {
    "dexNumber": 665,
    "name": "Spewpa",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "666": {
    "dexNumber": 666,
    "name": "Vivillon",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "667": {
    "dexNumber": 667,
    "name": "Litleo",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "668": {
    "dexNumber": 668,
    "name": "Pyroar",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "669": {
    "dexNumber": 669,
    "name": "Flabebe",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "670": {
    "dexNumber": 670,
    "name": "Floette",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "671": {
    "dexNumber": 671,
    "name": "Florges",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "672": {
    "dexNumber": 672,
    "name": "Skiddo",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "673": {
    "dexNumber": 673,
    "name": "Gogoat",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "674": {
    "dexNumber": 674,
    "name": "Pancham",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "675": {
    "dexNumber": 675,
    "name": "Pangoro",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "676": {
    "dexNumber": 676,
    "name": "Furfrou",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "677": {
    "dexNumber": 677,
    "name": "Espurr",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "678": {
    "dexNumber": 678,
    "name": "Meowstic",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "679": {
    "dexNumber": 679,
    "name": "Honedge",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "680": {
    "dexNumber": 680,
    "name": "Doublade",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "681": {
    "dexNumber": 681,
    "name": "Aegislash",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "682": {
    "dexNumber": 682,
    "name": "Spritzee",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "683": {
    "dexNumber": 683,
    "name": "Aromatisse",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "684": {
    "dexNumber": 684,
    "name": "Swirlix",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "685": {
    "dexNumber": 685,
    "name": "Slurpuff",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "686": {
    "dexNumber": 686,
    "name": "Inkay",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "687": {
    "dexNumber": 687,
    "name": "Malamar",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "688": {
    "dexNumber": 688,
    "name": "Binacle",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "689": {
    "dexNumber": 689,
    "name": "Barbaracle",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "690": {
    "dexNumber": 690,
    "name": "Skrelp",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "691": {
    "dexNumber": 691,
    "name": "Dragalge",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "692": {
    "dexNumber": 692,
    "name": "Clauncher",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "693": {
    "dexNumber": 693,
    "name": "Clawitzer",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "694": {
    "dexNumber": 694,
    "name": "Helioptile",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "695": {
    "dexNumber": 695,
    "name": "Heliolisk",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "696": {
    "dexNumber": 696,
    "name": "Tyrunt",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "697": {
    "dexNumber": 697,
    "name": "Tyrantrum",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "698": {
    "dexNumber": 698,
    "name": "Amaura",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "699": {
    "dexNumber": 699,
    "name": "Aurorus",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "700": {
    "dexNumber": 700,
    "name": "Sylveon",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 9216,
    "specialNotes": []
  },
  "701": {
    "dexNumber": 701,
    "name": "Hawlucha",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "702": {
    "dexNumber": 702,
    "name": "Dedenne",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "703": {
    "dexNumber": 703,
    "name": "Carbink",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "704": {
    "dexNumber": 704,
    "name": "Goomy",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "705": {
    "dexNumber": 705,
    "name": "Sliggoo",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "706": {
    "dexNumber": 706,
    "name": "Goodra",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "707": {
    "dexNumber": 707,
    "name": "Klefki",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "708": {
    "dexNumber": 708,
    "name": "Phantump",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "709": {
    "dexNumber": 709,
    "name": "Trevenant",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "710": {
    "dexNumber": 710,
    "name": "Pumpkaboo",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "711": {
    "dexNumber": 711,
    "name": "Gourgeist",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "712": {
    "dexNumber": 712,
    "name": "Bergmite",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "713": {
    "dexNumber": 713,
    "name": "Avalugg",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "714": {
    "dexNumber": 714,
    "name": "Noibat",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "715": {
    "dexNumber": 715,
    "name": "Noivern",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "716": {
    "dexNumber": 716,
    "name": "Xerneas",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "717": {
    "dexNumber": 717,
    "name": "Yveltal",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "718": {
    "dexNumber": 718,
    "name": "Zygarde",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "719": {
    "dexNumber": 719,
    "name": "Diancie",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "720": {
    "dexNumber": 720,
    "name": "Hoopa",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "721": {
    "dexNumber": 721,
    "name": "Volcanion",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "722": {
    "dexNumber": 722,
    "name": "Rowlet",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "723": {
    "dexNumber": 723,
    "name": "Dartrix",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "724": {
    "dexNumber": 724,
    "name": "Decidueye",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "725": {
    "dexNumber": 725,
    "name": "Litten",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "726": {
    "dexNumber": 726,
    "name": "Torracat",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "727": {
    "dexNumber": 727,
    "name": "Incineroar",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "728": {
    "dexNumber": 728,
    "name": "Popplio",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "729": {
    "dexNumber": 729,
    "name": "Brionne",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "730": {
    "dexNumber": 730,
    "name": "Primarina",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "731": {
    "dexNumber": 731,
    "name": "Pikipek",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "732": {
    "dexNumber": 732,
    "name": "Trumbeak",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "733": {
    "dexNumber": 733,
    "name": "Toucannon",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "734": {
    "dexNumber": 734,
    "name": "Yungoos",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "735": {
    "dexNumber": 735,
    "name": "Gumshoos",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "736": {
    "dexNumber": 736,
    "name": "Grubbin",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "737": {
    "dexNumber": 737,
    "name": "Charjabug",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "738": {
    "dexNumber": 738,
    "name": "Vikavolt",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "739": {
    "dexNumber": 739,
    "name": "Crabrawler",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "740": {
    "dexNumber": 740,
    "name": "Crabominable",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "741": {
    "dexNumber": 741,
    "name": "Oricorio",
    "genderType": "skewed_male_75",
    "maleRate": 0.25,
    "femaleRate": 0.75,
    "genderLabel": "25% Macho / 75% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "742": {
    "dexNumber": 742,
    "name": "Cutiefly",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "743": {
    "dexNumber": 743,
    "name": "Ribombee",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "744": {
    "dexNumber": 744,
    "name": "Rockruff",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "745": {
    "dexNumber": 745,
    "name": "Lycanroc",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "746": {
    "dexNumber": 746,
    "name": "Wishiwashi",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "747": {
    "dexNumber": 747,
    "name": "Mareanie",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "748": {
    "dexNumber": 748,
    "name": "Toxapex",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "749": {
    "dexNumber": 749,
    "name": "Mudbray",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "750": {
    "dexNumber": 750,
    "name": "Mudsdale",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "751": {
    "dexNumber": 751,
    "name": "Dewpider",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "752": {
    "dexNumber": 752,
    "name": "Araquanid",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "753": {
    "dexNumber": 753,
    "name": "Fomantis",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "754": {
    "dexNumber": 754,
    "name": "Lurantis",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "755": {
    "dexNumber": 755,
    "name": "Morelull",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "756": {
    "dexNumber": 756,
    "name": "Shiinotic",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "757": {
    "dexNumber": 757,
    "name": "Salandit",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Crianza Asim\u00e9trica: Solo las Hembras (12.5%) pueden evolucionar (Salazzle/Vespiquen). Los Machos no evolucionan."
    ]
  },
  "758": {
    "dexNumber": 758,
    "name": "Salazzle",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "759": {
    "dexNumber": 759,
    "name": "Stufful",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "760": {
    "dexNumber": 760,
    "name": "Bewear",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "761": {
    "dexNumber": 761,
    "name": "Bounsweet",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "762": {
    "dexNumber": 762,
    "name": "Steenee",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "763": {
    "dexNumber": 763,
    "name": "Tsareena",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "764": {
    "dexNumber": 764,
    "name": "Comfey",
    "genderType": "skewed_male_75",
    "maleRate": 0.25,
    "femaleRate": 0.75,
    "genderLabel": "25% Macho / 75% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "765": {
    "dexNumber": 765,
    "name": "Oranguru",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "766": {
    "dexNumber": 766,
    "name": "Passimian",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "767": {
    "dexNumber": 767,
    "name": "Wimpod",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "768": {
    "dexNumber": 768,
    "name": "Golisopod",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "769": {
    "dexNumber": 769,
    "name": "Sandygast",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "770": {
    "dexNumber": 770,
    "name": "Palossand",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "771": {
    "dexNumber": 771,
    "name": "Pyukumuku",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "772": {
    "dexNumber": 772,
    "name": "Type-Null",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "773": {
    "dexNumber": 773,
    "name": "Silvally",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "774": {
    "dexNumber": 774,
    "name": "Minior",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "775": {
    "dexNumber": 775,
    "name": "Komala",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "776": {
    "dexNumber": 776,
    "name": "Turtonator",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "777": {
    "dexNumber": 777,
    "name": "Togedemaru",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 2816,
    "specialNotes": []
  },
  "778": {
    "dexNumber": 778,
    "name": "Mimikyu",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "779": {
    "dexNumber": 779,
    "name": "Bruxish",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "780": {
    "dexNumber": 780,
    "name": "Drampa",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "781": {
    "dexNumber": 781,
    "name": "Dhelmise",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "782": {
    "dexNumber": 782,
    "name": "Jangmo-O",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "783": {
    "dexNumber": 783,
    "name": "Hakamo-O",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "784": {
    "dexNumber": 784,
    "name": "Kommo-O",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "785": {
    "dexNumber": 785,
    "name": "Tapu-Koko",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "786": {
    "dexNumber": 786,
    "name": "Tapu-Lele",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "787": {
    "dexNumber": 787,
    "name": "Tapu-Bulu",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "788": {
    "dexNumber": 788,
    "name": "Tapu-Fini",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "789": {
    "dexNumber": 789,
    "name": "Cosmog",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "790": {
    "dexNumber": 790,
    "name": "Cosmoem",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "791": {
    "dexNumber": 791,
    "name": "Solgaleo",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "792": {
    "dexNumber": 792,
    "name": "Lunala",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "793": {
    "dexNumber": 793,
    "name": "Nihilego",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "794": {
    "dexNumber": 794,
    "name": "Buzzwole",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "795": {
    "dexNumber": 795,
    "name": "Pheromosa",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "796": {
    "dexNumber": 796,
    "name": "Xurkitree",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "797": {
    "dexNumber": 797,
    "name": "Celesteela",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "798": {
    "dexNumber": 798,
    "name": "Kartana",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "799": {
    "dexNumber": 799,
    "name": "Guzzlord",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "800": {
    "dexNumber": 800,
    "name": "Necrozma",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "801": {
    "dexNumber": 801,
    "name": "Magearna",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "802": {
    "dexNumber": 802,
    "name": "Marshadow",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "803": {
    "dexNumber": 803,
    "name": "Poipole",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "804": {
    "dexNumber": 804,
    "name": "Naganadel",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "805": {
    "dexNumber": 805,
    "name": "Stakataka",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "806": {
    "dexNumber": 806,
    "name": "Blacephalon",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "807": {
    "dexNumber": 807,
    "name": "Zeraora",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "808": {
    "dexNumber": 808,
    "name": "Meltan",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "809": {
    "dexNumber": 809,
    "name": "Melmetal",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "810": {
    "dexNumber": 810,
    "name": "Grookey",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "811": {
    "dexNumber": 811,
    "name": "Thwackey",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "812": {
    "dexNumber": 812,
    "name": "Rillaboom",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "813": {
    "dexNumber": 813,
    "name": "Scorbunny",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "814": {
    "dexNumber": 814,
    "name": "Raboot",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "815": {
    "dexNumber": 815,
    "name": "Cinderace",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "816": {
    "dexNumber": 816,
    "name": "Sobble",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "817": {
    "dexNumber": 817,
    "name": "Drizzile",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "818": {
    "dexNumber": 818,
    "name": "Inteleon",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "819": {
    "dexNumber": 819,
    "name": "Skwovet",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "820": {
    "dexNumber": 820,
    "name": "Greedent",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "821": {
    "dexNumber": 821,
    "name": "Rookidee",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "822": {
    "dexNumber": 822,
    "name": "Corvisquire",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "823": {
    "dexNumber": 823,
    "name": "Corviknight",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "824": {
    "dexNumber": 824,
    "name": "Blipbug",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "825": {
    "dexNumber": 825,
    "name": "Dottler",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "826": {
    "dexNumber": 826,
    "name": "Orbeetle",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "827": {
    "dexNumber": 827,
    "name": "Nickit",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "828": {
    "dexNumber": 828,
    "name": "Thievul",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "829": {
    "dexNumber": 829,
    "name": "Gossifleur",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "830": {
    "dexNumber": 830,
    "name": "Eldegoss",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "831": {
    "dexNumber": 831,
    "name": "Wooloo",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "832": {
    "dexNumber": 832,
    "name": "Dubwool",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "833": {
    "dexNumber": 833,
    "name": "Chewtle",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "834": {
    "dexNumber": 834,
    "name": "Drednaw",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "835": {
    "dexNumber": 835,
    "name": "Yamper",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "836": {
    "dexNumber": 836,
    "name": "Boltund",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "837": {
    "dexNumber": 837,
    "name": "Rolycoly",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "838": {
    "dexNumber": 838,
    "name": "Carkol",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "839": {
    "dexNumber": 839,
    "name": "Coalossal",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "840": {
    "dexNumber": 840,
    "name": "Applin",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "841": {
    "dexNumber": 841,
    "name": "Flapple",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "842": {
    "dexNumber": 842,
    "name": "Appletun",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "843": {
    "dexNumber": 843,
    "name": "Silicobra",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "844": {
    "dexNumber": 844,
    "name": "Sandaconda",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "845": {
    "dexNumber": 845,
    "name": "Cramorant",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "846": {
    "dexNumber": 846,
    "name": "Arrokuda",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "847": {
    "dexNumber": 847,
    "name": "Barraskewda",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "848": {
    "dexNumber": 848,
    "name": "Toxel",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": true,
    "hatchSteps": 6656,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Beb\u00e9 (Grupo No Descubierto): No puede criar. Debe evolucionar a su forma adulta antes de colocar en la pastura."
    ]
  },
  "849": {
    "dexNumber": 849,
    "name": "Toxtricity",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "850": {
    "dexNumber": 850,
    "name": "Sizzlipede",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "851": {
    "dexNumber": 851,
    "name": "Centiskorch",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "852": {
    "dexNumber": 852,
    "name": "Clobbopus",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "853": {
    "dexNumber": 853,
    "name": "Grapploct",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "854": {
    "dexNumber": 854,
    "name": "Sinistea",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "855": {
    "dexNumber": 855,
    "name": "Polteageist",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "856": {
    "dexNumber": 856,
    "name": "Hatenna",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "857": {
    "dexNumber": 857,
    "name": "Hattrem",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "858": {
    "dexNumber": 858,
    "name": "Hatterene",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "859": {
    "dexNumber": 859,
    "name": "Impidimp",
    "genderType": "male_only",
    "maleRate": 1.0,
    "femaleRate": 0.0,
    "genderLabel": "100% Macho (Solo Machos - Requiere Ditto para trasmitir especie)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Especie 100% Macho: Al criar con hembras de su grupo huevo, el huevo NUNCA ser\u00e1 de esta especie. Obligatoriamente requiere a DITTO para transmitir la especie."
    ]
  },
  "860": {
    "dexNumber": 860,
    "name": "Morgrem",
    "genderType": "male_only",
    "maleRate": 1.0,
    "femaleRate": 0.0,
    "genderLabel": "100% Macho (Solo Machos - Requiere Ditto para trasmitir especie)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Especie 100% Macho: Al criar con hembras de su grupo huevo, el huevo NUNCA ser\u00e1 de esta especie. Obligatoriamente requiere a DITTO para transmitir la especie."
    ]
  },
  "861": {
    "dexNumber": 861,
    "name": "Grimmsnarl",
    "genderType": "male_only",
    "maleRate": 1.0,
    "femaleRate": 0.0,
    "genderLabel": "100% Macho (Solo Machos - Requiere Ditto para trasmitir especie)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Especie 100% Macho: Al criar con hembras de su grupo huevo, el huevo NUNCA ser\u00e1 de esta especie. Obligatoriamente requiere a DITTO para transmitir la especie."
    ]
  },
  "862": {
    "dexNumber": 862,
    "name": "Obstagoon",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "863": {
    "dexNumber": 863,
    "name": "Perrserker",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "864": {
    "dexNumber": 864,
    "name": "Cursola",
    "genderType": "skewed_male_75",
    "maleRate": 0.25,
    "femaleRate": 0.75,
    "genderLabel": "25% Macho / 75% Hembra",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "865": {
    "dexNumber": 865,
    "name": "Sirfetchd",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "866": {
    "dexNumber": 866,
    "name": "Mr-Rime",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "867": {
    "dexNumber": 867,
    "name": "Runerigus",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "868": {
    "dexNumber": 868,
    "name": "Milcery",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "869": {
    "dexNumber": 869,
    "name": "Alcremie",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "870": {
    "dexNumber": 870,
    "name": "Falinks",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "871": {
    "dexNumber": 871,
    "name": "Pincurchin",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "872": {
    "dexNumber": 872,
    "name": "Snom",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "873": {
    "dexNumber": 873,
    "name": "Frosmoth",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "874": {
    "dexNumber": 874,
    "name": "Stonjourner",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "875": {
    "dexNumber": 875,
    "name": "Eiscue",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "876": {
    "dexNumber": 876,
    "name": "Indeedee",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "877": {
    "dexNumber": 877,
    "name": "Morpeko",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 2816,
    "specialNotes": []
  },
  "878": {
    "dexNumber": 878,
    "name": "Cufant",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "879": {
    "dexNumber": 879,
    "name": "Copperajah",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "880": {
    "dexNumber": 880,
    "name": "Dracozolt",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 9216,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "881": {
    "dexNumber": 881,
    "name": "Arctozolt",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 9216,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "882": {
    "dexNumber": 882,
    "name": "Dracovish",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 9216,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "883": {
    "dexNumber": 883,
    "name": "Arctovish",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 9216,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "884": {
    "dexNumber": 884,
    "name": "Duraludon",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "885": {
    "dexNumber": 885,
    "name": "Dreepy",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "886": {
    "dexNumber": 886,
    "name": "Drakloak",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "887": {
    "dexNumber": 887,
    "name": "Dragapult",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "888": {
    "dexNumber": 888,
    "name": "Zacian",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "889": {
    "dexNumber": 889,
    "name": "Zamazenta",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "890": {
    "dexNumber": 890,
    "name": "Eternatus",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "891": {
    "dexNumber": 891,
    "name": "Kubfu",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": []
  },
  "892": {
    "dexNumber": 892,
    "name": "Urshifu",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": []
  },
  "893": {
    "dexNumber": 893,
    "name": "Zarude",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "894": {
    "dexNumber": 894,
    "name": "Regieleki",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "895": {
    "dexNumber": 895,
    "name": "Regidrago",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "896": {
    "dexNumber": 896,
    "name": "Glastrier",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "897": {
    "dexNumber": 897,
    "name": "Spectrier",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "898": {
    "dexNumber": 898,
    "name": "Calyrex",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 30976,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "899": {
    "dexNumber": 899,
    "name": "Wyrdeer",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "900": {
    "dexNumber": 900,
    "name": "Kleavor",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "901": {
    "dexNumber": 901,
    "name": "Ursaluna",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "902": {
    "dexNumber": 902,
    "name": "Basculegion",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "903": {
    "dexNumber": 903,
    "name": "Sneasler",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "904": {
    "dexNumber": 904,
    "name": "Overqwil",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "905": {
    "dexNumber": 905,
    "name": "Enamorus",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "906": {
    "dexNumber": 906,
    "name": "Sprigatito",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "907": {
    "dexNumber": 907,
    "name": "Floragato",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "908": {
    "dexNumber": 908,
    "name": "Meowscarada",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "909": {
    "dexNumber": 909,
    "name": "Fuecoco",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "910": {
    "dexNumber": 910,
    "name": "Crocalor",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "911": {
    "dexNumber": 911,
    "name": "Skeledirge",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "912": {
    "dexNumber": 912,
    "name": "Quaxly",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "913": {
    "dexNumber": 913,
    "name": "Quaxwell",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "914": {
    "dexNumber": 914,
    "name": "Quaquaval",
    "genderType": "skewed_female",
    "maleRate": 0.875,
    "femaleRate": 0.125,
    "genderLabel": "87.5% Macho / 12.5% Hembra (Hembras muy dif\u00edciles de obtener)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "915": {
    "dexNumber": 915,
    "name": "Lechonk",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "916": {
    "dexNumber": 916,
    "name": "Oinkologne",
    "genderType": "male_only",
    "maleRate": 1.0,
    "femaleRate": 0.0,
    "genderLabel": "100% Macho (Solo Machos - Requiere Ditto para trasmitir especie)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": [
      "\u26a0\ufe0f Especie 100% Macho: Al criar con hembras de su grupo huevo, el huevo NUNCA ser\u00e1 de esta especie. Obligatoriamente requiere a DITTO para transmitir la especie."
    ]
  },
  "917": {
    "dexNumber": 917,
    "name": "Tarountula",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "918": {
    "dexNumber": 918,
    "name": "Spidops",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "919": {
    "dexNumber": 919,
    "name": "Nymble",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "920": {
    "dexNumber": 920,
    "name": "Lokix",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "921": {
    "dexNumber": 921,
    "name": "Pawmi",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "922": {
    "dexNumber": 922,
    "name": "Pawmo",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "923": {
    "dexNumber": 923,
    "name": "Pawmot",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "924": {
    "dexNumber": 924,
    "name": "Tandemaus",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 2816,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "925": {
    "dexNumber": 925,
    "name": "Maushold",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 2816,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "926": {
    "dexNumber": 926,
    "name": "Fidough",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "927": {
    "dexNumber": 927,
    "name": "Dachsbun",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "928": {
    "dexNumber": 928,
    "name": "Smoliv",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "929": {
    "dexNumber": 929,
    "name": "Dolliv",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "930": {
    "dexNumber": 930,
    "name": "Arboliva",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "931": {
    "dexNumber": 931,
    "name": "Squawkabilly",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 4096,
    "specialNotes": []
  },
  "932": {
    "dexNumber": 932,
    "name": "Nacli",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "933": {
    "dexNumber": 933,
    "name": "Naclstack",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "934": {
    "dexNumber": 934,
    "name": "Garganacl",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "935": {
    "dexNumber": 935,
    "name": "Charcadet",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 9216,
    "specialNotes": []
  },
  "936": {
    "dexNumber": 936,
    "name": "Armarouge",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 9216,
    "specialNotes": []
  },
  "937": {
    "dexNumber": 937,
    "name": "Ceruledge",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 9216,
    "specialNotes": []
  },
  "938": {
    "dexNumber": 938,
    "name": "Tadbulb",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "939": {
    "dexNumber": 939,
    "name": "Bellibolt",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "940": {
    "dexNumber": 940,
    "name": "Wattrel",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "941": {
    "dexNumber": 941,
    "name": "Kilowattrel",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "942": {
    "dexNumber": 942,
    "name": "Maschiff",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "943": {
    "dexNumber": 943,
    "name": "Mabosstiff",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "944": {
    "dexNumber": 944,
    "name": "Shroodle",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "945": {
    "dexNumber": 945,
    "name": "Grafaiai",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "946": {
    "dexNumber": 946,
    "name": "Bramblin",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "947": {
    "dexNumber": 947,
    "name": "Brambleghast",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "948": {
    "dexNumber": 948,
    "name": "Toedscool",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "949": {
    "dexNumber": 949,
    "name": "Toedscruel",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "950": {
    "dexNumber": 950,
    "name": "Klawf",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 9216,
    "specialNotes": []
  },
  "951": {
    "dexNumber": 951,
    "name": "Capsakid",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "952": {
    "dexNumber": 952,
    "name": "Scovillain",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "953": {
    "dexNumber": 953,
    "name": "Rellor",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "954": {
    "dexNumber": 954,
    "name": "Rabsca",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "955": {
    "dexNumber": 955,
    "name": "Flittle",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "956": {
    "dexNumber": 956,
    "name": "Espathra",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "957": {
    "dexNumber": 957,
    "name": "Tinkatink",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "958": {
    "dexNumber": 958,
    "name": "Tinkatuff",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "959": {
    "dexNumber": 959,
    "name": "Tinkaton",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "960": {
    "dexNumber": 960,
    "name": "Wiglett",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "961": {
    "dexNumber": 961,
    "name": "Wugtrio",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "962": {
    "dexNumber": 962,
    "name": "Bombirdier",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 9216,
    "specialNotes": []
  },
  "963": {
    "dexNumber": 963,
    "name": "Finizen",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "964": {
    "dexNumber": 964,
    "name": "Palafin",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "965": {
    "dexNumber": 965,
    "name": "Varoom",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "966": {
    "dexNumber": 966,
    "name": "Revavroom",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "967": {
    "dexNumber": 967,
    "name": "Cyclizar",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "968": {
    "dexNumber": 968,
    "name": "Orthworm",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 9216,
    "specialNotes": []
  },
  "969": {
    "dexNumber": 969,
    "name": "Glimmet",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "970": {
    "dexNumber": 970,
    "name": "Glimmora",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "971": {
    "dexNumber": 971,
    "name": "Greavard",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "972": {
    "dexNumber": 972,
    "name": "Houndstone",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "973": {
    "dexNumber": 973,
    "name": "Flamigo",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "974": {
    "dexNumber": 974,
    "name": "Cetoddle",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "975": {
    "dexNumber": 975,
    "name": "Cetitan",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 6656,
    "specialNotes": []
  },
  "976": {
    "dexNumber": 976,
    "name": "Veluza",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "977": {
    "dexNumber": 977,
    "name": "Dondozo",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "978": {
    "dexNumber": 978,
    "name": "Tatsugiri",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 9216,
    "specialNotes": []
  },
  "979": {
    "dexNumber": 979,
    "name": "Annihilape",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "980": {
    "dexNumber": 980,
    "name": "Clodsire",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "981": {
    "dexNumber": 981,
    "name": "Farigiraf",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "982": {
    "dexNumber": 982,
    "name": "Dudunsparce",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "983": {
    "dexNumber": 983,
    "name": "Kingambit",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "984": {
    "dexNumber": 984,
    "name": "Great-Tusk",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "985": {
    "dexNumber": 985,
    "name": "Scream-Tail",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "986": {
    "dexNumber": 986,
    "name": "Brute-Bonnet",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "987": {
    "dexNumber": 987,
    "name": "Flutter-Mane",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "988": {
    "dexNumber": 988,
    "name": "Slither-Wing",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "989": {
    "dexNumber": 989,
    "name": "Sandy-Shocks",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "990": {
    "dexNumber": 990,
    "name": "Iron-Treads",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "991": {
    "dexNumber": 991,
    "name": "Iron-Bundle",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "992": {
    "dexNumber": 992,
    "name": "Iron-Hands",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "993": {
    "dexNumber": 993,
    "name": "Iron-Jugulis",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "994": {
    "dexNumber": 994,
    "name": "Iron-Moth",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "995": {
    "dexNumber": 995,
    "name": "Iron-Thorns",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "996": {
    "dexNumber": 996,
    "name": "Frigibax",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "997": {
    "dexNumber": 997,
    "name": "Arctibax",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "998": {
    "dexNumber": 998,
    "name": "Baxcalibur",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 10496,
    "specialNotes": []
  },
  "999": {
    "dexNumber": 999,
    "name": "Gimmighoul",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "1000": {
    "dexNumber": 1000,
    "name": "Gholdengo",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "1001": {
    "dexNumber": 1001,
    "name": "Wo-Chien",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "1002": {
    "dexNumber": 1002,
    "name": "Chien-Pao",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "1003": {
    "dexNumber": 1003,
    "name": "Ting-Lu",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "1004": {
    "dexNumber": 1004,
    "name": "Chi-Yu",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "1005": {
    "dexNumber": 1005,
    "name": "Roaring-Moon",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "1006": {
    "dexNumber": 1006,
    "name": "Iron-Valiant",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "1007": {
    "dexNumber": 1007,
    "name": "Koraidon",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "1008": {
    "dexNumber": 1008,
    "name": "Miraidon",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "1009": {
    "dexNumber": 1009,
    "name": "Walking-Wake",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "1010": {
    "dexNumber": 1010,
    "name": "Iron-Leaves",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "1011": {
    "dexNumber": 1011,
    "name": "Dipplin",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "1012": {
    "dexNumber": 1012,
    "name": "Poltchageist",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "1013": {
    "dexNumber": 1013,
    "name": "Sinistcha",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "1014": {
    "dexNumber": 1014,
    "name": "Okidogi",
    "genderType": "male_only",
    "maleRate": 1.0,
    "femaleRate": 0.0,
    "genderLabel": "100% Macho (Solo Machos - Requiere Ditto para trasmitir especie)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Especie 100% Macho: Al criar con hembras de su grupo huevo, el huevo NUNCA ser\u00e1 de esta especie. Obligatoriamente requiere a DITTO para transmitir la especie."
    ]
  },
  "1015": {
    "dexNumber": 1015,
    "name": "Munkidori",
    "genderType": "male_only",
    "maleRate": 1.0,
    "femaleRate": 0.0,
    "genderLabel": "100% Macho (Solo Machos - Requiere Ditto para trasmitir especie)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Especie 100% Macho: Al criar con hembras de su grupo huevo, el huevo NUNCA ser\u00e1 de esta especie. Obligatoriamente requiere a DITTO para transmitir la especie."
    ]
  },
  "1016": {
    "dexNumber": 1016,
    "name": "Fezandipiti",
    "genderType": "male_only",
    "maleRate": 1.0,
    "femaleRate": 0.0,
    "genderLabel": "100% Macho (Solo Machos - Requiere Ditto para trasmitir especie)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Especie 100% Macho: Al criar con hembras de su grupo huevo, el huevo NUNCA ser\u00e1 de esta especie. Obligatoriamente requiere a DITTO para transmitir la especie."
    ]
  },
  "1017": {
    "dexNumber": 1017,
    "name": "Ogerpon",
    "genderType": "female_only",
    "maleRate": 0.0,
    "femaleRate": 1.0,
    "genderLabel": "100% Hembra (Solo Hembras)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u2139\ufe0f Especie 100% Hembra: Al criar con cualquier macho de su grupo huevo, el huevo SIEMPRE eclosionar\u00e1 como esta especie."
    ]
  },
  "1018": {
    "dexNumber": 1018,
    "name": "Archaludon",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 7936,
    "specialNotes": []
  },
  "1019": {
    "dexNumber": 1019,
    "name": "Hydrapple",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": []
  },
  "1020": {
    "dexNumber": 1020,
    "name": "Gouging-Fire",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "1021": {
    "dexNumber": 1021,
    "name": "Raging-Bolt",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "1022": {
    "dexNumber": 1022,
    "name": "Iron-Boulder",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "1023": {
    "dexNumber": 1023,
    "name": "Iron-Crown",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 13056,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  },
  "1024": {
    "dexNumber": 1024,
    "name": "Terapagos",
    "genderType": "standard",
    "maleRate": 0.5,
    "femaleRate": 0.5,
    "genderLabel": "50% Macho / 50% Hembra (Est\u00e1ndar)",
    "isBaby": false,
    "hatchSteps": 1536,
    "specialNotes": []
  },
  "1025": {
    "dexNumber": 1025,
    "name": "Pecharunt",
    "genderType": "genderless",
    "maleRate": 0.0,
    "femaleRate": 0.0,
    "genderLabel": "Sin G\u00e9nero (Solo puede criar obligatoriamente con Ditto)",
    "isBaby": false,
    "hatchSteps": 5376,
    "specialNotes": [
      "\u26a0\ufe0f Pok\u00e9mon Sin G\u00e9nero: No puede criar con machos ni hembras. Obligatoriamente requiere a DITTO en la pastura."
    ]
  }
};

export function getSpeciesHandicapByDex(dexNumber: number): SpeciesHandicap {
  return AUTHENTIC_SPECIES_HANDICAPS[dexNumber] || {
    dexNumber,
    name: 'Desconocido',
    genderType: 'standard',
    maleRate: 0.5,
    femaleRate: 0.5,
    genderLabel: '50% Macho / 50% Hembra',
    isBaby: false,
    hatchSteps: 5120,
    specialNotes: []
  };
}
