export interface SpeciesAbility {
  name: string;
  isHidden: boolean;
  label: string;
}

export interface SpeciesAbilitiesAndEggMoves {
  dexNumber: number;
  abilities: SpeciesAbility[];
  eggMoves: string[];
}

export const SPECIES_ABILITIES_AND_EGG_MOVES: SpeciesAbilitiesAndEggMoves[] = [
  {
    "dexNumber": 1,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Chlorophyll",
        "isHidden": true,
        "label": "Chlorophyll (HO)"
      }
    ],
    "eggMoves": [
      "Razor Wind",
      "Petal Dance",
      "Light Screen",
      "Skull Bash",
      "Charm",
      "Safeguard",
      "Curse",
      "Grass Whistle",
      "Magical Leaf",
      "Amnesia",
      "Nature Power",
      "Ingrain",
      "Leaf Storm",
      "Sludge",
      "Power Whip",
      "Giga Drain",
      "Endure",
      "Grassy Terrain",
      "Toxic"
    ]
  },
  {
    "dexNumber": 2,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Chlorophyll",
        "isHidden": true,
        "label": "Chlorophyll (HO)"
      }
    ],
    "eggMoves": [
      "Petal Dance",
      "Toxic",
      "Curse",
      "Ingrain"
    ]
  },
  {
    "dexNumber": 3,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Chlorophyll",
        "isHidden": true,
        "label": "Chlorophyll (HO)"
      }
    ],
    "eggMoves": [
      "Petal Dance",
      "Toxic",
      "Curse",
      "Ingrain"
    ]
  },
  {
    "dexNumber": 4,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Solar Power",
        "isHidden": true,
        "label": "Solar Power (HO)"
      }
    ],
    "eggMoves": [
      "Bite",
      "Rock Slide",
      "Belly Drum",
      "Outrage",
      "Ancient Power",
      "Beat Up",
      "Swords Dance",
      "Dragon Dance",
      "Metal Claw",
      "Crunch",
      "Flare Blitz",
      "Dragon Rush",
      "Counter",
      "Focus Punch",
      "Dragon Pulse",
      "Air Cutter",
      "Wing Attack",
      "Dragon Tail",
      "Iron Tail"
    ]
  },
  {
    "dexNumber": 5,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Solar Power",
        "isHidden": true,
        "label": "Solar Power (HO)"
      }
    ],
    "eggMoves": [
      "Bite",
      "Counter",
      "Belly Drum",
      "Iron Tail",
      "Metal Claw",
      "Ancient Power",
      "Dragon Rush",
      "Dragon Tail"
    ]
  },
  {
    "dexNumber": 6,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Solar Power",
        "isHidden": true,
        "label": "Solar Power (HO)"
      }
    ],
    "eggMoves": [
      "Bite",
      "Counter",
      "Belly Drum",
      "Iron Tail",
      "Metal Claw",
      "Ancient Power",
      "Dragon Rush",
      "Dragon Tail"
    ]
  },
  {
    "dexNumber": 7,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Rain Dish",
        "isHidden": true,
        "label": "Rain Dish (HO)"
      }
    ],
    "eggMoves": [
      "Mist",
      "Confusion",
      "Haze",
      "Flail",
      "Foresight",
      "Mirror Coat",
      "Yawn",
      "Refresh",
      "Mud Sport",
      "Fake Out",
      "Muddy Water",
      "Aqua Ring",
      "Aqua Jet",
      "Water Spout",
      "Brine",
      "Aura Sphere",
      "Dragon Pulse",
      "Life Dew"
    ]
  },
  {
    "dexNumber": 8,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Rain Dish",
        "isHidden": true,
        "label": "Rain Dish (HO)"
      }
    ],
    "eggMoves": [
      "Mist",
      "Flail",
      "Mirror Coat",
      "Fake Out",
      "Yawn",
      "Water Spout",
      "Aqua Ring",
      "Aqua Jet",
      "Life Dew"
    ]
  },
  {
    "dexNumber": 9,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Rain Dish",
        "isHidden": true,
        "label": "Rain Dish (HO)"
      }
    ],
    "eggMoves": [
      "Mist",
      "Flail",
      "Mirror Coat",
      "Fake Out",
      "Yawn",
      "Water Spout",
      "Aqua Ring",
      "Aqua Jet",
      "Life Dew"
    ]
  },
  {
    "dexNumber": 10,
    "abilities": [
      {
        "name": "Shield Dust",
        "isHidden": false,
        "label": "Shield Dust"
      },
      {
        "name": "Run Away",
        "isHidden": true,
        "label": "Run Away (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 11,
    "abilities": [
      {
        "name": "Shed Skin",
        "isHidden": false,
        "label": "Shed Skin"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 12,
    "abilities": [
      {
        "name": "Compound Eyes",
        "isHidden": false,
        "label": "Compound Eyes"
      },
      {
        "name": "Tinted Lens",
        "isHidden": true,
        "label": "Tinted Lens (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 13,
    "abilities": [
      {
        "name": "Shield Dust",
        "isHidden": false,
        "label": "Shield Dust"
      },
      {
        "name": "Run Away",
        "isHidden": true,
        "label": "Run Away (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 14,
    "abilities": [
      {
        "name": "Shed Skin",
        "isHidden": false,
        "label": "Shed Skin"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 15,
    "abilities": [
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      },
      {
        "name": "Sniper",
        "isHidden": true,
        "label": "Sniper (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 16,
    "abilities": [
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Tangled Feet",
        "isHidden": false,
        "label": "Tangled Feet"
      },
      {
        "name": "Big Pecks",
        "isHidden": true,
        "label": "Big Pecks (HO)"
      }
    ],
    "eggMoves": [
      "Feint Attack",
      "Foresight",
      "Steel Wing",
      "Pursuit",
      "Air Cutter",
      "Uproar",
      "Air Slash",
      "Brave Bird",
      "Defog"
    ]
  },
  {
    "dexNumber": 17,
    "abilities": [
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Tangled Feet",
        "isHidden": false,
        "label": "Tangled Feet"
      },
      {
        "name": "Big Pecks",
        "isHidden": true,
        "label": "Big Pecks (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 18,
    "abilities": [
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Tangled Feet",
        "isHidden": false,
        "label": "Tangled Feet"
      },
      {
        "name": "Big Pecks",
        "isHidden": true,
        "label": "Big Pecks (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 19,
    "abilities": [
      {
        "name": "Run Away",
        "isHidden": false,
        "label": "Run Away"
      },
      {
        "name": "Guts",
        "isHidden": false,
        "label": "Guts"
      },
      {
        "name": "Hustle",
        "isHidden": true,
        "label": "Hustle (HO)"
      }
    ],
    "eggMoves": [
      "Bite",
      "Counter",
      "Screech",
      "Fury Swipes",
      "Flame Wheel",
      "Reversal",
      "Swagger",
      "Uproar",
      "Me First",
      "Last Resort",
      "Revenge",
      "Final Gambit"
    ]
  },
  {
    "dexNumber": 20,
    "abilities": [
      {
        "name": "Run Away",
        "isHidden": false,
        "label": "Run Away"
      },
      {
        "name": "Guts",
        "isHidden": false,
        "label": "Guts"
      },
      {
        "name": "Hustle",
        "isHidden": true,
        "label": "Hustle (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 21,
    "abilities": [
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Sniper",
        "isHidden": true,
        "label": "Sniper (HO)"
      }
    ],
    "eggMoves": [
      "Quick Attack",
      "Tri Attack",
      "Scary Face",
      "Feint Attack",
      "False Swipe",
      "Sky Attack",
      "Astonish",
      "Whirlwind",
      "Uproar",
      "Feather Dance",
      "Razor Wind",
      "Steel Wing"
    ]
  },
  {
    "dexNumber": 22,
    "abilities": [
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Sniper",
        "isHidden": true,
        "label": "Sniper (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 23,
    "abilities": [
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Shed Skin",
        "isHidden": false,
        "label": "Shed Skin"
      },
      {
        "name": "Unnerve",
        "isHidden": true,
        "label": "Unnerve (HO)"
      }
    ],
    "eggMoves": [
      "Slam",
      "Spite",
      "Pursuit",
      "Beat Up",
      "Crunch",
      "Poison Fang",
      "Disable",
      "Scary Face",
      "Poison Tail",
      "Switcheroo",
      "Iron Tail",
      "Snatch",
      "Sucker Punch"
    ]
  },
  {
    "dexNumber": 24,
    "abilities": [
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Shed Skin",
        "isHidden": false,
        "label": "Shed Skin"
      },
      {
        "name": "Unnerve",
        "isHidden": true,
        "label": "Unnerve (HO)"
      }
    ],
    "eggMoves": [
      "Spite",
      "Scary Face",
      "Poison Fang",
      "Poison Tail",
      "Sucker Punch",
      "Switcheroo"
    ]
  },
  {
    "dexNumber": 25,
    "abilities": [
      {
        "name": "Static",
        "isHidden": false,
        "label": "Static"
      },
      {
        "name": "Lightning Rod",
        "isHidden": true,
        "label": "Lightning Rod (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 26,
    "abilities": [
      {
        "name": "Static",
        "isHidden": false,
        "label": "Static"
      },
      {
        "name": "Lightning Rod",
        "isHidden": true,
        "label": "Lightning Rod (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 27,
    "abilities": [
      {
        "name": "Sand Veil",
        "isHidden": false,
        "label": "Sand Veil"
      },
      {
        "name": "Sand Rush",
        "isHidden": true,
        "label": "Sand Rush (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "Flail",
      "Safeguard",
      "Rapid Spin",
      "Metal Claw",
      "Swords Dance",
      "Rock Slide",
      "Crush Claw",
      "Night Slash",
      "Mud Shot",
      "Endure",
      "Rock Climb",
      "Chip Away",
      "Rototiller",
      "Hone Claws",
      "Mud Slap"
    ]
  },
  {
    "dexNumber": 28,
    "abilities": [
      {
        "name": "Sand Veil",
        "isHidden": false,
        "label": "Sand Veil"
      },
      {
        "name": "Sand Rush",
        "isHidden": true,
        "label": "Sand Rush (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "Flail",
      "Mud Slap",
      "Metal Claw",
      "Night Slash",
      "Hone Claws"
    ]
  },
  {
    "dexNumber": 29,
    "abilities": [
      {
        "name": "Poison Point",
        "isHidden": false,
        "label": "Poison Point"
      },
      {
        "name": "Rivalry",
        "isHidden": false,
        "label": "Rivalry"
      },
      {
        "name": "Hustle",
        "isHidden": true,
        "label": "Hustle (HO)"
      }
    ],
    "eggMoves": [
      "Take Down",
      "Supersonic",
      "Disable",
      "Counter",
      "Focus Energy",
      "Charm",
      "Beat Up",
      "Pursuit",
      "Skull Bash",
      "Endure",
      "Iron Tail",
      "Poison Tail",
      "Chip Away",
      "Venom Drench",
      "Poison Fang"
    ]
  },
  {
    "dexNumber": 30,
    "abilities": [
      {
        "name": "Poison Point",
        "isHidden": false,
        "label": "Poison Point"
      },
      {
        "name": "Rivalry",
        "isHidden": false,
        "label": "Rivalry"
      },
      {
        "name": "Hustle",
        "isHidden": true,
        "label": "Hustle (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 31,
    "abilities": [
      {
        "name": "Poison Point",
        "isHidden": false,
        "label": "Poison Point"
      },
      {
        "name": "Rivalry",
        "isHidden": false,
        "label": "Rivalry"
      },
      {
        "name": "Sheer Force",
        "isHidden": true,
        "label": "Sheer Force (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 32,
    "abilities": [
      {
        "name": "Poison Point",
        "isHidden": false,
        "label": "Poison Point"
      },
      {
        "name": "Rivalry",
        "isHidden": false,
        "label": "Rivalry"
      },
      {
        "name": "Hustle",
        "isHidden": true,
        "label": "Hustle (HO)"
      }
    ],
    "eggMoves": [
      "Take Down",
      "Supersonic",
      "Disable",
      "Counter",
      "Confusion",
      "Amnesia",
      "Beat Up",
      "Sucker Punch",
      "Head Smash",
      "Endure",
      "Iron Tail",
      "Poison Tail",
      "Chip Away",
      "Venom Drench",
      "Horn Drill",
      "Thrash"
    ]
  },
  {
    "dexNumber": 33,
    "abilities": [
      {
        "name": "Poison Point",
        "isHidden": false,
        "label": "Poison Point"
      },
      {
        "name": "Rivalry",
        "isHidden": false,
        "label": "Rivalry"
      },
      {
        "name": "Hustle",
        "isHidden": true,
        "label": "Hustle (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 34,
    "abilities": [
      {
        "name": "Poison Point",
        "isHidden": false,
        "label": "Poison Point"
      },
      {
        "name": "Rivalry",
        "isHidden": false,
        "label": "Rivalry"
      },
      {
        "name": "Sheer Force",
        "isHidden": true,
        "label": "Sheer Force (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 35,
    "abilities": [
      {
        "name": "Cute Charm",
        "isHidden": false,
        "label": "Cute Charm"
      },
      {
        "name": "Magic Guard",
        "isHidden": false,
        "label": "Magic Guard"
      },
      {
        "name": "Friend Guard",
        "isHidden": true,
        "label": "Friend Guard (HO)"
      }
    ],
    "eggMoves": [
      "Present",
      "Wish",
      "Tickle",
      "Heal Pulse"
    ]
  },
  {
    "dexNumber": 36,
    "abilities": [
      {
        "name": "Cute Charm",
        "isHidden": false,
        "label": "Cute Charm"
      },
      {
        "name": "Magic Guard",
        "isHidden": false,
        "label": "Magic Guard"
      },
      {
        "name": "Unaware",
        "isHidden": true,
        "label": "Unaware (HO)"
      }
    ],
    "eggMoves": [
      "Pound",
      "Growl",
      "Sing",
      "Defense Curl",
      "Splash",
      "Sweet Kiss",
      "Charm",
      "Present",
      "Encore",
      "Moonlight",
      "Follow Me",
      "Wish",
      "Tickle",
      "Cosmic Power",
      "Gravity",
      "Healing Wish",
      "Copycat",
      "After You",
      "Stored Power",
      "Heal Pulse",
      "Disarming Voice"
    ]
  },
  {
    "dexNumber": 37,
    "abilities": [
      {
        "name": "Flash Fire",
        "isHidden": false,
        "label": "Flash Fire"
      },
      {
        "name": "Drought",
        "isHidden": true,
        "label": "Drought (HO)"
      }
    ],
    "eggMoves": [
      "Disable",
      "Hypnosis",
      "Flail",
      "Spite",
      "Feint Attack",
      "Psych Up",
      "Heat Wave",
      "Howl",
      "Extrasensory",
      "Flare Blitz",
      "Energy Ball",
      "Power Swap",
      "Secret Power",
      "Hex",
      "Tail Slap",
      "Captivate",
      "Roar",
      "Memento",
      "Flame Charge",
      "Baby Doll Eyes",
      "Healing Wish"
    ]
  },
  {
    "dexNumber": 38,
    "abilities": [
      {
        "name": "Flash Fire",
        "isHidden": false,
        "label": "Flash Fire"
      },
      {
        "name": "Drought",
        "isHidden": true,
        "label": "Drought (HO)"
      }
    ],
    "eggMoves": [
      "Roar",
      "Hypnosis",
      "Flail",
      "Memento",
      "Howl",
      "Healing Wish",
      "Flame Charge",
      "Baby Doll Eyes"
    ]
  },
  {
    "dexNumber": 39,
    "abilities": [
      {
        "name": "Cute Charm",
        "isHidden": false,
        "label": "Cute Charm"
      },
      {
        "name": "Competitive",
        "isHidden": false,
        "label": "Competitive"
      },
      {
        "name": "Friend Guard",
        "isHidden": true,
        "label": "Friend Guard (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 40,
    "abilities": [
      {
        "name": "Cute Charm",
        "isHidden": false,
        "label": "Cute Charm"
      },
      {
        "name": "Competitive",
        "isHidden": false,
        "label": "Competitive"
      },
      {
        "name": "Frisk",
        "isHidden": true,
        "label": "Frisk (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 41,
    "abilities": [
      {
        "name": "Inner Focus",
        "isHidden": false,
        "label": "Inner Focus"
      },
      {
        "name": "Infiltrator",
        "isHidden": true,
        "label": "Infiltrator (HO)"
      }
    ],
    "eggMoves": [
      "Gust",
      "Whirlwind",
      "Quick Attack",
      "Feint Attack",
      "Pursuit",
      "Curse",
      "Hypnosis",
      "Brave Bird",
      "Nasty Plot",
      "Zen Headbutt",
      "Giga Drain",
      "Steel Wing",
      "Defog",
      "Venom Drench",
      "Wing Attack"
    ]
  },
  {
    "dexNumber": 42,
    "abilities": [
      {
        "name": "Inner Focus",
        "isHidden": false,
        "label": "Inner Focus"
      },
      {
        "name": "Infiltrator",
        "isHidden": true,
        "label": "Infiltrator (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 43,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Run Away",
        "isHidden": true,
        "label": "Run Away (HO)"
      }
    ],
    "eggMoves": [
      "Swords Dance",
      "Razor Leaf",
      "Flail",
      "Charm",
      "Synthesis",
      "Ingrain",
      "Tickle",
      "Teeter Dance",
      "Nature Power",
      "Secret Power",
      "After You",
      "Strength Sap",
      "Leech Seed"
    ]
  },
  {
    "dexNumber": 44,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Stench",
        "isHidden": true,
        "label": "Stench (HO)"
      }
    ],
    "eggMoves": [
      "Leech Seed",
      "Razor Leaf",
      "Flail",
      "Synthesis",
      "Ingrain",
      "Teeter Dance",
      "Tickle",
      "After You",
      "Strength Sap"
    ]
  },
  {
    "dexNumber": 45,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Effect Spore",
        "isHidden": true,
        "label": "Effect Spore (HO)"
      }
    ],
    "eggMoves": [
      "Leech Seed",
      "Razor Leaf",
      "Flail",
      "Synthesis",
      "Ingrain",
      "Teeter Dance",
      "Tickle",
      "After You",
      "Strength Sap"
    ]
  },
  {
    "dexNumber": 46,
    "abilities": [
      {
        "name": "Effect Spore",
        "isHidden": false,
        "label": "Effect Spore"
      },
      {
        "name": "Dry Skin",
        "isHidden": false,
        "label": "Dry Skin"
      },
      {
        "name": "Damp",
        "isHidden": true,
        "label": "Damp (HO)"
      }
    ],
    "eggMoves": [
      "Psybeam",
      "Counter",
      "Screech",
      "Light Screen",
      "Flail",
      "False Swipe",
      "Pursuit",
      "Sweet Scent",
      "Metal Claw",
      "Cross Poison",
      "Bug Bite",
      "Agility",
      "Leech Seed",
      "Endure",
      "Natural Gift",
      "Wide Guard",
      "Rototiller",
      "Fell Stinger",
      "Grassy Terrain"
    ]
  },
  {
    "dexNumber": 47,
    "abilities": [
      {
        "name": "Effect Spore",
        "isHidden": false,
        "label": "Effect Spore"
      },
      {
        "name": "Dry Skin",
        "isHidden": false,
        "label": "Dry Skin"
      },
      {
        "name": "Damp",
        "isHidden": true,
        "label": "Damp (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 48,
    "abilities": [
      {
        "name": "Compound Eyes",
        "isHidden": false,
        "label": "Compound Eyes"
      },
      {
        "name": "Tinted Lens",
        "isHidden": false,
        "label": "Tinted Lens"
      },
      {
        "name": "Run Away",
        "isHidden": true,
        "label": "Run Away (HO)"
      }
    ],
    "eggMoves": [
      "Screech",
      "Giga Drain",
      "Baton Pass",
      "Signal Beam",
      "Agility",
      "Morning Sun",
      "Toxic Spikes",
      "Bug Bite",
      "Skill Swap",
      "Secret Power",
      "Rage Powder",
      "Venoshock"
    ]
  },
  {
    "dexNumber": 49,
    "abilities": [
      {
        "name": "Shield Dust",
        "isHidden": false,
        "label": "Shield Dust"
      },
      {
        "name": "Tinted Lens",
        "isHidden": false,
        "label": "Tinted Lens"
      },
      {
        "name": "Wonder Skin",
        "isHidden": true,
        "label": "Wonder Skin (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 50,
    "abilities": [
      {
        "name": "Sand Veil",
        "isHidden": false,
        "label": "Sand Veil"
      },
      {
        "name": "Arena Trap",
        "isHidden": false,
        "label": "Arena Trap"
      },
      {
        "name": "Sand Force",
        "isHidden": true,
        "label": "Sand Force (HO)"
      }
    ],
    "eggMoves": [
      "Screech",
      "Feint Attack",
      "Pursuit",
      "Ancient Power",
      "Beat Up",
      "Rock Slide",
      "Uproar",
      "Astonish",
      "Mud Bomb",
      "Reversal",
      "Headbutt",
      "Endure",
      "Memento",
      "Final Gambit",
      "Hone Claws"
    ]
  },
  {
    "dexNumber": 51,
    "abilities": [
      {
        "name": "Sand Veil",
        "isHidden": false,
        "label": "Sand Veil"
      },
      {
        "name": "Arena Trap",
        "isHidden": false,
        "label": "Arena Trap"
      },
      {
        "name": "Sand Force",
        "isHidden": true,
        "label": "Sand Force (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 52,
    "abilities": [
      {
        "name": "Pickup",
        "isHidden": false,
        "label": "Pickup"
      },
      {
        "name": "Technician",
        "isHidden": false,
        "label": "Technician"
      },
      {
        "name": "Unnerve",
        "isHidden": true,
        "label": "Unnerve (HO)"
      }
    ],
    "eggMoves": [
      "Hypnosis",
      "Amnesia",
      "Spite",
      "Charm",
      "Psych Up",
      "Assist",
      "Flail",
      "Odor Sleuth",
      "Punishment",
      "Last Resort",
      "Tail Whip",
      "Iron Tail",
      "Snatch",
      "Foul Play",
      "Covet"
    ]
  },
  {
    "dexNumber": 53,
    "abilities": [
      {
        "name": "Limber",
        "isHidden": false,
        "label": "Limber"
      },
      {
        "name": "Technician",
        "isHidden": false,
        "label": "Technician"
      },
      {
        "name": "Unnerve",
        "isHidden": true,
        "label": "Unnerve (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 54,
    "abilities": [
      {
        "name": "Damp",
        "isHidden": false,
        "label": "Damp"
      },
      {
        "name": "Cloud Nine",
        "isHidden": false,
        "label": "Cloud Nine"
      },
      {
        "name": "Swift Swim",
        "isHidden": true,
        "label": "Swift Swim (HO)"
      }
    ],
    "eggMoves": [
      "Ice Beam",
      "Psybeam",
      "Psychic",
      "Hypnosis",
      "Light Screen",
      "Foresight",
      "Future Sight",
      "Cross Chop",
      "Refresh",
      "Confuse Ray",
      "Yawn",
      "Mud Bomb",
      "Encore",
      "Sleep Talk",
      "Secret Power",
      "Synchronoise",
      "Simple Beam",
      "Clear Smog"
    ]
  },
  {
    "dexNumber": 55,
    "abilities": [
      {
        "name": "Damp",
        "isHidden": false,
        "label": "Damp"
      },
      {
        "name": "Cloud Nine",
        "isHidden": false,
        "label": "Cloud Nine"
      },
      {
        "name": "Swift Swim",
        "isHidden": true,
        "label": "Swift Swim (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 56,
    "abilities": [
      {
        "name": "Vital Spirit",
        "isHidden": false,
        "label": "Vital Spirit"
      },
      {
        "name": "Anger Point",
        "isHidden": false,
        "label": "Anger Point"
      },
      {
        "name": "Defiant",
        "isHidden": true,
        "label": "Defiant (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "Meditate",
      "Rock Slide",
      "Reversal",
      "Foresight",
      "Beat Up",
      "Smelling Salts",
      "Revenge",
      "Close Combat",
      "Encore",
      "Sleep Talk",
      "Focus Punch",
      "Night Slash",
      "Power Trip",
      "Curse",
      "Spite"
    ]
  },
  {
    "dexNumber": 57,
    "abilities": [
      {
        "name": "Vital Spirit",
        "isHidden": false,
        "label": "Vital Spirit"
      },
      {
        "name": "Anger Point",
        "isHidden": false,
        "label": "Anger Point"
      },
      {
        "name": "Defiant",
        "isHidden": true,
        "label": "Defiant (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 58,
    "abilities": [
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Flash Fire",
        "isHidden": false,
        "label": "Flash Fire"
      },
      {
        "name": "Justified",
        "isHidden": true,
        "label": "Justified (HO)"
      }
    ],
    "eggMoves": [
      "Body Slam",
      "Thrash",
      "Fire Spin",
      "Safeguard",
      "Crunch",
      "Heat Wave",
      "Howl",
      "Double Edge",
      "Flare Blitz",
      "Morning Sun",
      "Double Kick",
      "Iron Tail",
      "Covet",
      "Close Combat",
      "Burn Up",
      "Raging Fury"
    ]
  },
  {
    "dexNumber": 59,
    "abilities": [
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Flash Fire",
        "isHidden": false,
        "label": "Flash Fire"
      },
      {
        "name": "Justified",
        "isHidden": true,
        "label": "Justified (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 60,
    "abilities": [
      {
        "name": "Water Absorb",
        "isHidden": false,
        "label": "Water Absorb"
      },
      {
        "name": "Damp",
        "isHidden": false,
        "label": "Damp"
      },
      {
        "name": "Swift Swim",
        "isHidden": true,
        "label": "Swift Swim (HO)"
      }
    ],
    "eggMoves": [
      "Mist",
      "Bubble Beam",
      "Haze",
      "Splash",
      "Mind Reader",
      "Ice Ball",
      "Water Sport",
      "Endeavor",
      "Refresh",
      "Mud Shot",
      "Encore",
      "Endure",
      "Water Pulse",
      "Muddy Water"
    ]
  },
  {
    "dexNumber": 61,
    "abilities": [
      {
        "name": "Water Absorb",
        "isHidden": false,
        "label": "Water Absorb"
      },
      {
        "name": "Damp",
        "isHidden": false,
        "label": "Damp"
      },
      {
        "name": "Swift Swim",
        "isHidden": true,
        "label": "Swift Swim (HO)"
      }
    ],
    "eggMoves": [
      "Mist",
      "Splash",
      "Endeavor",
      "Muddy Water",
      "Water Pulse"
    ]
  },
  {
    "dexNumber": 62,
    "abilities": [
      {
        "name": "Water Absorb",
        "isHidden": false,
        "label": "Water Absorb"
      },
      {
        "name": "Damp",
        "isHidden": false,
        "label": "Damp"
      },
      {
        "name": "Swift Swim",
        "isHidden": true,
        "label": "Swift Swim (HO)"
      }
    ],
    "eggMoves": [
      "Pound",
      "Double Edge",
      "Mist",
      "Water Gun",
      "Hydro Pump",
      "Splash",
      "Belly Drum",
      "Rain Dance",
      "Endeavor",
      "Muddy Water",
      "Mud Shot",
      "Water Pulse",
      "Earth Power",
      "Circle Throw"
    ]
  },
  {
    "dexNumber": 63,
    "abilities": [
      {
        "name": "Synchronize",
        "isHidden": false,
        "label": "Synchronize"
      },
      {
        "name": "Inner Focus",
        "isHidden": false,
        "label": "Inner Focus"
      },
      {
        "name": "Magic Guard",
        "isHidden": true,
        "label": "Magic Guard (HO)"
      }
    ],
    "eggMoves": [
      "Barrier",
      "Light Screen",
      "Encore",
      "Fire Punch",
      "Ice Punch",
      "Thunder Punch",
      "Knock Off",
      "Power Trick",
      "Guard Swap",
      "Skill Swap",
      "Guard Split",
      "Psycho Shift",
      "Ally Switch",
      "Psychic Terrain",
      "Confusion",
      "Magic Coat"
    ]
  },
  {
    "dexNumber": 64,
    "abilities": [
      {
        "name": "Synchronize",
        "isHidden": false,
        "label": "Synchronize"
      },
      {
        "name": "Inner Focus",
        "isHidden": false,
        "label": "Inner Focus"
      },
      {
        "name": "Magic Guard",
        "isHidden": true,
        "label": "Magic Guard (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 65,
    "abilities": [
      {
        "name": "Synchronize",
        "isHidden": false,
        "label": "Synchronize"
      },
      {
        "name": "Inner Focus",
        "isHidden": false,
        "label": "Inner Focus"
      },
      {
        "name": "Magic Guard",
        "isHidden": true,
        "label": "Magic Guard (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 66,
    "abilities": [
      {
        "name": "Guts",
        "isHidden": false,
        "label": "Guts"
      },
      {
        "name": "No Guard",
        "isHidden": false,
        "label": "No Guard"
      },
      {
        "name": "Steadfast",
        "isHidden": true,
        "label": "Steadfast (HO)"
      }
    ],
    "eggMoves": [
      "Rolling Kick",
      "Meditate",
      "Light Screen",
      "Encore",
      "Counter",
      "Rock Slide",
      "Smelling Salts",
      "Fire Punch",
      "Ice Punch",
      "Thunder Punch",
      "Close Combat",
      "Bullet Punch",
      "Power Trick",
      "Knock Off",
      "Tickle",
      "Heavy Slam",
      "Quick Guard",
      "Submission"
    ]
  },
  {
    "dexNumber": 67,
    "abilities": [
      {
        "name": "Guts",
        "isHidden": false,
        "label": "Guts"
      },
      {
        "name": "No Guard",
        "isHidden": false,
        "label": "No Guard"
      },
      {
        "name": "Steadfast",
        "isHidden": true,
        "label": "Steadfast (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 68,
    "abilities": [
      {
        "name": "Guts",
        "isHidden": false,
        "label": "Guts"
      },
      {
        "name": "No Guard",
        "isHidden": false,
        "label": "No Guard"
      },
      {
        "name": "Steadfast",
        "isHidden": true,
        "label": "Steadfast (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 69,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Gluttony",
        "isHidden": true,
        "label": "Gluttony (HO)"
      }
    ],
    "eggMoves": [
      "Swords Dance",
      "Reflect",
      "Leech Life",
      "Encore",
      "Synthesis",
      "Ingrain",
      "Magical Leaf",
      "Tickle",
      "Worry Seed",
      "Weather Ball",
      "Giga Drain",
      "Bullet Seed",
      "Natural Gift",
      "Power Whip",
      "Clear Smog",
      "Acid Spray",
      "Belch",
      "Strength Sap",
      "Sucker Punch"
    ]
  },
  {
    "dexNumber": 70,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Gluttony",
        "isHidden": true,
        "label": "Gluttony (HO)"
      }
    ],
    "eggMoves": [
      "Synthesis",
      "Ingrain",
      "Tickle",
      "Worry Seed",
      "Sucker Punch",
      "Clear Smog",
      "Strength Sap"
    ]
  },
  {
    "dexNumber": 71,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Gluttony",
        "isHidden": true,
        "label": "Gluttony (HO)"
      }
    ],
    "eggMoves": [
      "Synthesis",
      "Stockpile",
      "Spit Up",
      "Swallow",
      "Ingrain",
      "Tickle",
      "Gastro Acid",
      "Worry Seed",
      "Sucker Punch",
      "Power Whip",
      "Clear Smog",
      "Strength Sap"
    ]
  },
  {
    "dexNumber": 72,
    "abilities": [
      {
        "name": "Clear Body",
        "isHidden": false,
        "label": "Clear Body"
      },
      {
        "name": "Liquid Ooze",
        "isHidden": false,
        "label": "Liquid Ooze"
      },
      {
        "name": "Rain Dish",
        "isHidden": true,
        "label": "Rain Dish (HO)"
      }
    ],
    "eggMoves": [
      "Aurora Beam",
      "Haze",
      "Safeguard",
      "Rapid Spin",
      "Mirror Coat",
      "Confuse Ray",
      "Knock Off",
      "Acupressure",
      "Muddy Water",
      "Bubble",
      "Tickle",
      "Aqua Ring"
    ]
  },
  {
    "dexNumber": 73,
    "abilities": [
      {
        "name": "Clear Body",
        "isHidden": false,
        "label": "Clear Body"
      },
      {
        "name": "Liquid Ooze",
        "isHidden": false,
        "label": "Liquid Ooze"
      },
      {
        "name": "Rain Dish",
        "isHidden": true,
        "label": "Rain Dish (HO)"
      }
    ],
    "eggMoves": [
      "Aurora Beam",
      "Confuse Ray",
      "Haze",
      "Rapid Spin",
      "Mirror Coat",
      "Knock Off",
      "Tickle",
      "Acupressure",
      "Aqua Ring"
    ]
  },
  {
    "dexNumber": 74,
    "abilities": [
      {
        "name": "Rock Head",
        "isHidden": false,
        "label": "Rock Head"
      },
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Sand Veil",
        "isHidden": true,
        "label": "Sand Veil (HO)"
      }
    ],
    "eggMoves": [
      "Mega Punch",
      "Rock Slide",
      "Block",
      "Flail",
      "Hammer Arm",
      "Curse",
      "Endure",
      "Focus Punch",
      "Rock Climb",
      "Autotomize",
      "Wide Guard",
      "Dynamic Punch"
    ]
  },
  {
    "dexNumber": 75,
    "abilities": [
      {
        "name": "Rock Head",
        "isHidden": false,
        "label": "Rock Head"
      },
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Sand Veil",
        "isHidden": true,
        "label": "Sand Veil (HO)"
      }
    ],
    "eggMoves": [
      "Mega Punch",
      "Curse",
      "Flail",
      "Dynamic Punch",
      "Block",
      "Hammer Arm",
      "Wide Guard"
    ]
  },
  {
    "dexNumber": 76,
    "abilities": [
      {
        "name": "Rock Head",
        "isHidden": false,
        "label": "Rock Head"
      },
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Sand Veil",
        "isHidden": true,
        "label": "Sand Veil (HO)"
      }
    ],
    "eggMoves": [
      "Mega Punch",
      "Curse",
      "Flail",
      "Dynamic Punch",
      "Block",
      "Hammer Arm",
      "Wide Guard"
    ]
  },
  {
    "dexNumber": 77,
    "abilities": [
      {
        "name": "Run Away",
        "isHidden": false,
        "label": "Run Away"
      },
      {
        "name": "Flash Fire",
        "isHidden": false,
        "label": "Flash Fire"
      },
      {
        "name": "Flame Body",
        "isHidden": true,
        "label": "Flame Body (HO)"
      }
    ],
    "eggMoves": [
      "Double Kick",
      "Thrash",
      "Hypnosis",
      "Quick Attack",
      "Flame Wheel",
      "Charm",
      "Double Edge",
      "Horn Drill",
      "Morning Sun",
      "Low Kick",
      "Captivate",
      "Ally Switch",
      "High Horsepower"
    ]
  },
  {
    "dexNumber": 78,
    "abilities": [
      {
        "name": "Run Away",
        "isHidden": false,
        "label": "Run Away"
      },
      {
        "name": "Flash Fire",
        "isHidden": false,
        "label": "Flash Fire"
      },
      {
        "name": "Flame Body",
        "isHidden": true,
        "label": "Flame Body (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 79,
    "abilities": [
      {
        "name": "Oblivious",
        "isHidden": false,
        "label": "Oblivious"
      },
      {
        "name": "Own Tempo",
        "isHidden": false,
        "label": "Own Tempo"
      },
      {
        "name": "Regenerator",
        "isHidden": true,
        "label": "Regenerator (HO)"
      }
    ],
    "eggMoves": [
      "Stomp",
      "Belly Drum",
      "Safeguard",
      "Future Sight",
      "Snore",
      "Sleep Talk",
      "Mud Sport",
      "Block",
      "Me First",
      "Zen Headbutt",
      "Wonder Room",
      "Belch"
    ]
  },
  {
    "dexNumber": 80,
    "abilities": [
      {
        "name": "Oblivious",
        "isHidden": false,
        "label": "Oblivious"
      },
      {
        "name": "Own Tempo",
        "isHidden": false,
        "label": "Own Tempo"
      },
      {
        "name": "Regenerator",
        "isHidden": true,
        "label": "Regenerator (HO)"
      }
    ],
    "eggMoves": [
      "Future Sight"
    ]
  },
  {
    "dexNumber": 81,
    "abilities": [
      {
        "name": "Magnet Pull",
        "isHidden": false,
        "label": "Magnet Pull"
      },
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Analytic",
        "isHidden": true,
        "label": "Analytic (HO)"
      }
    ],
    "eggMoves": [
      "Explosion",
      "Electroweb"
    ]
  },
  {
    "dexNumber": 82,
    "abilities": [
      {
        "name": "Magnet Pull",
        "isHidden": false,
        "label": "Magnet Pull"
      },
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Analytic",
        "isHidden": true,
        "label": "Analytic (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 83,
    "abilities": [
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Inner Focus",
        "isHidden": false,
        "label": "Inner Focus"
      },
      {
        "name": "Defiant",
        "isHidden": true,
        "label": "Defiant (HO)"
      }
    ],
    "eggMoves": [
      "Gust",
      "Quick Attack",
      "Mirror Move",
      "Flail",
      "Foresight",
      "Steel Wing",
      "Curse",
      "Feather Dance",
      "Mud Slap",
      "Covet",
      "Night Slash",
      "Leaf Blade",
      "Revenge",
      "Roost",
      "Trump Card",
      "Simple Beam",
      "Final Gambit",
      "First Impression",
      "Sky Attack",
      "Feint"
    ]
  },
  {
    "dexNumber": 84,
    "abilities": [
      {
        "name": "Run Away",
        "isHidden": false,
        "label": "Run Away"
      },
      {
        "name": "Early Bird",
        "isHidden": false,
        "label": "Early Bird"
      },
      {
        "name": "Tangled Feet",
        "isHidden": true,
        "label": "Tangled Feet (HO)"
      }
    ],
    "eggMoves": [
      "Supersonic",
      "Quick Attack",
      "Haze",
      "Flail",
      "Feint Attack",
      "Endeavor",
      "Mirror Move",
      "Brave Bird",
      "Natural Gift",
      "Assurance",
      "Whirlwind",
      "Sky Attack"
    ]
  },
  {
    "dexNumber": 85,
    "abilities": [
      {
        "name": "Run Away",
        "isHidden": false,
        "label": "Run Away"
      },
      {
        "name": "Early Bird",
        "isHidden": false,
        "label": "Early Bird"
      },
      {
        "name": "Tangled Feet",
        "isHidden": true,
        "label": "Tangled Feet (HO)"
      }
    ],
    "eggMoves": [
      "Whirlwind",
      "Sky Attack",
      "Flail",
      "Assurance"
    ]
  },
  {
    "dexNumber": 86,
    "abilities": [
      {
        "name": "Thick Fat",
        "isHidden": false,
        "label": "Thick Fat"
      },
      {
        "name": "Hydration",
        "isHidden": false,
        "label": "Hydration"
      },
      {
        "name": "Ice Body",
        "isHidden": true,
        "label": "Ice Body (HO)"
      }
    ],
    "eggMoves": [
      "Slam",
      "Disable",
      "Peck",
      "Lick",
      "Perish Song",
      "Encore",
      "Horn Drill",
      "Fake Out",
      "Icicle Spear",
      "Signal Beam",
      "Stockpile",
      "Spit Up",
      "Swallow",
      "Sleep Talk",
      "Iron Tail",
      "Water Pulse",
      "Entrainment",
      "Belch"
    ]
  },
  {
    "dexNumber": 87,
    "abilities": [
      {
        "name": "Thick Fat",
        "isHidden": false,
        "label": "Thick Fat"
      },
      {
        "name": "Hydration",
        "isHidden": false,
        "label": "Hydration"
      },
      {
        "name": "Ice Body",
        "isHidden": true,
        "label": "Ice Body (HO)"
      }
    ],
    "eggMoves": [
      "Horn Drill",
      "Disable",
      "Lick",
      "Perish Song",
      "Fake Out",
      "Stockpile",
      "Spit Up",
      "Swallow",
      "Entrainment",
      "Belch"
    ]
  },
  {
    "dexNumber": 88,
    "abilities": [
      {
        "name": "Stench",
        "isHidden": false,
        "label": "Stench"
      },
      {
        "name": "Sticky Hold",
        "isHidden": false,
        "label": "Sticky Hold"
      },
      {
        "name": "Poison Touch",
        "isHidden": true,
        "label": "Poison Touch (HO)"
      }
    ],
    "eggMoves": [
      "Haze",
      "Lick",
      "Mean Look",
      "Explosion",
      "Curse",
      "Imprison",
      "Shadow Punch",
      "Stockpile",
      "Spit Up",
      "Swallow",
      "Shadow Sneak",
      "Scary Face",
      "Acid Spray",
      "Power Up Punch"
    ]
  },
  {
    "dexNumber": 89,
    "abilities": [
      {
        "name": "Stench",
        "isHidden": false,
        "label": "Stench"
      },
      {
        "name": "Sticky Hold",
        "isHidden": false,
        "label": "Sticky Hold"
      },
      {
        "name": "Poison Touch",
        "isHidden": true,
        "label": "Poison Touch (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 90,
    "abilities": [
      {
        "name": "Shell Armor",
        "isHidden": false,
        "label": "Shell Armor"
      },
      {
        "name": "Skill Link",
        "isHidden": false,
        "label": "Skill Link"
      },
      {
        "name": "Overcoat",
        "isHidden": true,
        "label": "Overcoat (HO)"
      }
    ],
    "eggMoves": [
      "Take Down",
      "Bubble Beam",
      "Screech",
      "Barrier",
      "Rapid Spin",
      "Icicle Spear",
      "Mud Shot",
      "Rock Blast",
      "Twineedle",
      "Water Pulse",
      "Aqua Ring",
      "Avalanche",
      "Life Dew"
    ]
  },
  {
    "dexNumber": 91,
    "abilities": [
      {
        "name": "Shell Armor",
        "isHidden": false,
        "label": "Shell Armor"
      },
      {
        "name": "Skill Link",
        "isHidden": false,
        "label": "Skill Link"
      },
      {
        "name": "Overcoat",
        "isHidden": true,
        "label": "Overcoat (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 92,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": [
      "Haze",
      "Psywave",
      "Perish Song",
      "Explosion",
      "Will O Wisp",
      "Grudge",
      "Astonish",
      "Fire Punch",
      "Ice Punch",
      "Thunder Punch",
      "Disable",
      "Smog",
      "Scary Face",
      "Clear Smog",
      "Reflect Type",
      "Toxic"
    ]
  },
  {
    "dexNumber": 93,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 94,
    "abilities": [
      {
        "name": "Cursed Body",
        "isHidden": false,
        "label": "Cursed Body"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 95,
    "abilities": [
      {
        "name": "Rock Head",
        "isHidden": false,
        "label": "Rock Head"
      },
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Weak Armor",
        "isHidden": true,
        "label": "Weak Armor (HO)"
      }
    ],
    "eggMoves": [
      "Rock Slide",
      "Flail",
      "Explosion",
      "Block",
      "Defense Curl",
      "Rollout",
      "Rock Blast",
      "Rock Climb",
      "Stealth Rock",
      "Heavy Slam",
      "Rototiller",
      "Wide Guard",
      "Head Smash",
      "Dragon Tail"
    ]
  },
  {
    "dexNumber": 96,
    "abilities": [
      {
        "name": "Insomnia",
        "isHidden": false,
        "label": "Insomnia"
      },
      {
        "name": "Forewarn",
        "isHidden": false,
        "label": "Forewarn"
      },
      {
        "name": "Inner Focus",
        "isHidden": true,
        "label": "Inner Focus (HO)"
      }
    ],
    "eggMoves": [
      "Barrier",
      "Light Screen",
      "Fire Punch",
      "Ice Punch",
      "Thunder Punch",
      "Role Play",
      "Assist",
      "Flatter",
      "Nasty Plot",
      "Psycho Cut",
      "Guard Swap",
      "Skill Swap",
      "Secret Power",
      "Power Split",
      "Psychic Terrain"
    ]
  },
  {
    "dexNumber": 97,
    "abilities": [
      {
        "name": "Insomnia",
        "isHidden": false,
        "label": "Insomnia"
      },
      {
        "name": "Forewarn",
        "isHidden": false,
        "label": "Forewarn"
      },
      {
        "name": "Inner Focus",
        "isHidden": true,
        "label": "Inner Focus (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 98,
    "abilities": [
      {
        "name": "Hyper Cutter",
        "isHidden": false,
        "label": "Hyper Cutter"
      },
      {
        "name": "Shell Armor",
        "isHidden": false,
        "label": "Shell Armor"
      },
      {
        "name": "Sheer Force",
        "isHidden": true,
        "label": "Sheer Force (HO)"
      }
    ],
    "eggMoves": [
      "Slam",
      "Dig",
      "Haze",
      "Amnesia",
      "Flail",
      "Swords Dance",
      "Knock Off",
      "Ancient Power",
      "Tickle",
      "Agility",
      "Bide",
      "Endure",
      "Chip Away",
      "Ally Switch",
      "Slash",
      "Hammer Arm",
      "Night Slash"
    ]
  },
  {
    "dexNumber": 99,
    "abilities": [
      {
        "name": "Hyper Cutter",
        "isHidden": false,
        "label": "Hyper Cutter"
      },
      {
        "name": "Shell Armor",
        "isHidden": false,
        "label": "Shell Armor"
      },
      {
        "name": "Sheer Force",
        "isHidden": true,
        "label": "Sheer Force (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 100,
    "abilities": [
      {
        "name": "Soundproof",
        "isHidden": false,
        "label": "Soundproof"
      },
      {
        "name": "Static",
        "isHidden": false,
        "label": "Static"
      },
      {
        "name": "Aftermath",
        "isHidden": true,
        "label": "Aftermath (HO)"
      }
    ],
    "eggMoves": [
      "Recycle",
      "Metal Sound"
    ]
  },
  {
    "dexNumber": 101,
    "abilities": [
      {
        "name": "Soundproof",
        "isHidden": false,
        "label": "Soundproof"
      },
      {
        "name": "Static",
        "isHidden": false,
        "label": "Static"
      },
      {
        "name": "Aftermath",
        "isHidden": true,
        "label": "Aftermath (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 102,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Harvest",
        "isHidden": true,
        "label": "Harvest (HO)"
      }
    ],
    "eggMoves": [
      "Mega Drain",
      "Reflect",
      "Synthesis",
      "Moonlight",
      "Ancient Power",
      "Curse",
      "Psych Up",
      "Ingrain",
      "Nature Power",
      "Lucky Chant",
      "Leaf Storm",
      "Power Swap",
      "Giga Drain",
      "Skill Swap",
      "Block",
      "Natural Gift",
      "Grassy Terrain",
      "Poison Powder",
      "Stun Spore",
      "Sleep Powder"
    ]
  },
  {
    "dexNumber": 103,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Harvest",
        "isHidden": true,
        "label": "Harvest (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 104,
    "abilities": [
      {
        "name": "Rock Head",
        "isHidden": false,
        "label": "Rock Head"
      },
      {
        "name": "Lightning Rod",
        "isHidden": false,
        "label": "Lightning Rod"
      },
      {
        "name": "Battle Armor",
        "isHidden": true,
        "label": "Battle Armor (HO)"
      }
    ],
    "eggMoves": [
      "Screech",
      "Skull Bash",
      "Rock Slide",
      "Belly Drum",
      "Perish Song",
      "Ancient Power",
      "Swords Dance",
      "Double Kick",
      "Iron Head",
      "Detect",
      "Endure",
      "Chip Away",
      "Curse",
      "Leer"
    ]
  },
  {
    "dexNumber": 105,
    "abilities": [
      {
        "name": "Rock Head",
        "isHidden": false,
        "label": "Rock Head"
      },
      {
        "name": "Lightning Rod",
        "isHidden": false,
        "label": "Lightning Rod"
      },
      {
        "name": "Battle Armor",
        "isHidden": true,
        "label": "Battle Armor (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 106,
    "abilities": [
      {
        "name": "Limber",
        "isHidden": false,
        "label": "Limber"
      },
      {
        "name": "Reckless",
        "isHidden": false,
        "label": "Reckless"
      },
      {
        "name": "Unburden",
        "isHidden": true,
        "label": "Unburden (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "High Jump Kick",
      "Mach Punch",
      "Rapid Spin",
      "Feint",
      "Vacuum Wave",
      "Bullet Punch"
    ]
  },
  {
    "dexNumber": 107,
    "abilities": [
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Iron Fist",
        "isHidden": false,
        "label": "Iron Fist"
      },
      {
        "name": "Inner Focus",
        "isHidden": true,
        "label": "Inner Focus (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "High Jump Kick",
      "Mach Punch",
      "Rapid Spin",
      "Feint",
      "Vacuum Wave",
      "Bullet Punch"
    ]
  },
  {
    "dexNumber": 108,
    "abilities": [
      {
        "name": "Own Tempo",
        "isHidden": false,
        "label": "Own Tempo"
      },
      {
        "name": "Oblivious",
        "isHidden": false,
        "label": "Oblivious"
      },
      {
        "name": "Cloud Nine",
        "isHidden": true,
        "label": "Cloud Nine (HO)"
      }
    ],
    "eggMoves": [
      "Body Slam",
      "Belly Drum",
      "Magnitude",
      "Substitute",
      "Snore",
      "Curse",
      "Sleep Talk",
      "Smelling Salts",
      "Amnesia",
      "Hammer Arm",
      "Muddy Water",
      "Zen Headbutt",
      "Belch",
      "Thrash"
    ]
  },
  {
    "dexNumber": 109,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      },
      {
        "name": "Neutralizing Gas",
        "isHidden": false,
        "label": "Neutralizing Gas"
      },
      {
        "name": "Stench",
        "isHidden": true,
        "label": "Stench (HO)"
      }
    ],
    "eggMoves": [
      "Psybeam",
      "Screech",
      "Psywave",
      "Destiny Bond",
      "Pain Split",
      "Will O Wisp",
      "Curse",
      "Spite",
      "Grudge",
      "Stockpile",
      "Spit Up",
      "Swallow",
      "Toxic Spikes",
      "Venom Drench"
    ]
  },
  {
    "dexNumber": 110,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      },
      {
        "name": "Neutralizing Gas",
        "isHidden": false,
        "label": "Neutralizing Gas"
      },
      {
        "name": "Stench",
        "isHidden": true,
        "label": "Stench (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 111,
    "abilities": [
      {
        "name": "Lightning Rod",
        "isHidden": false,
        "label": "Lightning Rod"
      },
      {
        "name": "Rock Head",
        "isHidden": false,
        "label": "Rock Head"
      },
      {
        "name": "Reckless",
        "isHidden": true,
        "label": "Reckless (HO)"
      }
    ],
    "eggMoves": [
      "Thrash",
      "Counter",
      "Rock Slide",
      "Reversal",
      "Magnitude",
      "Pursuit",
      "Crunch",
      "Swords Dance",
      "Curse",
      "Crush Claw",
      "Dragon Rush",
      "Thunder Fang",
      "Ice Fang",
      "Fire Fang",
      "Skull Bash",
      "Iron Tail",
      "Rock Climb",
      "Metal Burst",
      "Guard Split",
      "Rototiller",
      "Rock Polish"
    ]
  },
  {
    "dexNumber": 112,
    "abilities": [
      {
        "name": "Lightning Rod",
        "isHidden": false,
        "label": "Lightning Rod"
      },
      {
        "name": "Rock Head",
        "isHidden": false,
        "label": "Rock Head"
      },
      {
        "name": "Reckless",
        "isHidden": true,
        "label": "Reckless (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "Curse",
      "Metal Burst",
      "Rock Polish",
      "Dragon Rush",
      "Guard Split"
    ]
  },
  {
    "dexNumber": 113,
    "abilities": [
      {
        "name": "Natural Cure",
        "isHidden": false,
        "label": "Natural Cure"
      },
      {
        "name": "Serene Grace",
        "isHidden": false,
        "label": "Serene Grace"
      },
      {
        "name": "Healer",
        "isHidden": true,
        "label": "Healer (HO)"
      }
    ],
    "eggMoves": [
      "Metronome",
      "Heal Bell",
      "Present",
      "Substitute",
      "Aromatherapy",
      "Counter",
      "Helping Hand",
      "Gravity",
      "Mud Bomb",
      "Endure",
      "Natural Gift",
      "Seismic Toss"
    ]
  },
  {
    "dexNumber": 114,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Leaf Guard",
        "isHidden": false,
        "label": "Leaf Guard"
      },
      {
        "name": "Regenerator",
        "isHidden": true,
        "label": "Regenerator (HO)"
      }
    ],
    "eggMoves": [
      "Mega Drain",
      "Confusion",
      "Reflect",
      "Amnesia",
      "Flail",
      "Leech Seed",
      "Nature Power",
      "Endeavor",
      "Leaf Storm",
      "Power Swap",
      "Giga Drain",
      "Natural Gift",
      "Rage Powder",
      "Wake Up Slap"
    ]
  },
  {
    "dexNumber": 115,
    "abilities": [
      {
        "name": "Early Bird",
        "isHidden": false,
        "label": "Early Bird"
      },
      {
        "name": "Scrappy",
        "isHidden": false,
        "label": "Scrappy"
      },
      {
        "name": "Inner Focus",
        "isHidden": true,
        "label": "Inner Focus (HO)"
      }
    ],
    "eggMoves": [
      "Stomp",
      "Disable",
      "Focus Energy",
      "Foresight",
      "Safeguard",
      "Counter",
      "Substitute",
      "Crush Claw",
      "Double Edge",
      "Endeavor",
      "Hammer Arm",
      "Uproar",
      "Focus Punch",
      "Trump Card",
      "Circle Throw"
    ]
  },
  {
    "dexNumber": 116,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Sniper",
        "isHidden": false,
        "label": "Sniper"
      },
      {
        "name": "Damp",
        "isHidden": true,
        "label": "Damp (HO)"
      }
    ],
    "eggMoves": [
      "Disable",
      "Aurora Beam",
      "Dragon Rage",
      "Splash",
      "Flail",
      "Octazooka",
      "Dragon Breath",
      "Signal Beam",
      "Razor Wind",
      "Muddy Water",
      "Outrage",
      "Water Pulse",
      "Clear Smog"
    ]
  },
  {
    "dexNumber": 117,
    "abilities": [
      {
        "name": "Poison Point",
        "isHidden": false,
        "label": "Poison Point"
      },
      {
        "name": "Sniper",
        "isHidden": false,
        "label": "Sniper"
      },
      {
        "name": "Damp",
        "isHidden": true,
        "label": "Damp (HO)"
      }
    ],
    "eggMoves": [
      "Disable",
      "Aurora Beam",
      "Splash",
      "Flail",
      "Clear Smog"
    ]
  },
  {
    "dexNumber": 118,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Water Veil",
        "isHidden": false,
        "label": "Water Veil"
      },
      {
        "name": "Lightning Rod",
        "isHidden": true,
        "label": "Lightning Rod (HO)"
      }
    ],
    "eggMoves": [
      "Hydro Pump",
      "Psybeam",
      "Haze",
      "Sleep Talk",
      "Mud Sport",
      "Mud Slap",
      "Aqua Tail",
      "Body Slam",
      "Skull Bash",
      "Signal Beam",
      "Mud Shot",
      "Acupressure"
    ]
  },
  {
    "dexNumber": 119,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Water Veil",
        "isHidden": false,
        "label": "Water Veil"
      },
      {
        "name": "Lightning Rod",
        "isHidden": true,
        "label": "Lightning Rod (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 120,
    "abilities": [
      {
        "name": "Illuminate",
        "isHidden": false,
        "label": "Illuminate"
      },
      {
        "name": "Natural Cure",
        "isHidden": false,
        "label": "Natural Cure"
      },
      {
        "name": "Analytic",
        "isHidden": true,
        "label": "Analytic (HO)"
      }
    ],
    "eggMoves": [
      "Supersonic",
      "Aurora Beam",
      "Barrier"
    ]
  },
  {
    "dexNumber": 121,
    "abilities": [
      {
        "name": "Illuminate",
        "isHidden": false,
        "label": "Illuminate"
      },
      {
        "name": "Natural Cure",
        "isHidden": false,
        "label": "Natural Cure"
      },
      {
        "name": "Analytic",
        "isHidden": true,
        "label": "Analytic (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 122,
    "abilities": [
      {
        "name": "Soundproof",
        "isHidden": false,
        "label": "Soundproof"
      },
      {
        "name": "Filter",
        "isHidden": false,
        "label": "Filter"
      },
      {
        "name": "Technician",
        "isHidden": true,
        "label": "Technician (HO)"
      }
    ],
    "eggMoves": [
      "Hypnosis",
      "Mimic",
      "Future Sight",
      "Psych Up",
      "Fake Out",
      "Trick",
      "Confuse Ray",
      "Teeter Dance",
      "Wake Up Slap",
      "Nasty Plot",
      "Icy Wind",
      "Power Split",
      "Magic Room",
      "Psychic Terrain",
      "Tickle"
    ]
  },
  {
    "dexNumber": 123,
    "abilities": [
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      },
      {
        "name": "Technician",
        "isHidden": false,
        "label": "Technician"
      },
      {
        "name": "Steadfast",
        "isHidden": true,
        "label": "Steadfast (HO)"
      }
    ],
    "eggMoves": [
      "Razor Wind",
      "Counter",
      "Light Screen",
      "Reversal",
      "Safeguard",
      "Baton Pass",
      "Endure",
      "Silver Wind",
      "Night Slash",
      "Bug Buzz",
      "Steel Wing",
      "Defog",
      "Quick Guard",
      "Feint"
    ]
  },
  {
    "dexNumber": 124,
    "abilities": [
      {
        "name": "Oblivious",
        "isHidden": false,
        "label": "Oblivious"
      },
      {
        "name": "Forewarn",
        "isHidden": false,
        "label": "Forewarn"
      },
      {
        "name": "Dry Skin",
        "isHidden": true,
        "label": "Dry Skin (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 125,
    "abilities": [
      {
        "name": "Static",
        "isHidden": false,
        "label": "Static"
      },
      {
        "name": "Vital Spirit",
        "isHidden": true,
        "label": "Vital Spirit (HO)"
      }
    ],
    "eggMoves": [
      "Dynamic Punch",
      "Cross Chop",
      "Focus Punch",
      "Follow Me",
      "Hammer Arm",
      "Feint"
    ]
  },
  {
    "dexNumber": 126,
    "abilities": [
      {
        "name": "Flame Body",
        "isHidden": false,
        "label": "Flame Body"
      },
      {
        "name": "Vital Spirit",
        "isHidden": true,
        "label": "Vital Spirit (HO)"
      }
    ],
    "eggMoves": [
      "Mach Punch",
      "Belly Drum",
      "Dynamic Punch",
      "Cross Chop",
      "Focus Punch",
      "Follow Me",
      "Belch"
    ]
  },
  {
    "dexNumber": 127,
    "abilities": [
      {
        "name": "Hyper Cutter",
        "isHidden": false,
        "label": "Hyper Cutter"
      },
      {
        "name": "Mold Breaker",
        "isHidden": false,
        "label": "Mold Breaker"
      },
      {
        "name": "Moxie",
        "isHidden": true,
        "label": "Moxie (HO)"
      }
    ],
    "eggMoves": [
      "Fury Attack",
      "Flail",
      "Feint Attack",
      "False Swipe",
      "Quick Attack",
      "Feint",
      "Close Combat",
      "Superpower",
      "Me First",
      "Bug Bite",
      "Thrash"
    ]
  },
  {
    "dexNumber": 128,
    "abilities": [
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Anger Point",
        "isHidden": false,
        "label": "Anger Point"
      },
      {
        "name": "Sheer Force",
        "isHidden": true,
        "label": "Sheer Force (HO)"
      }
    ],
    "eggMoves": [
      "Curse",
      "Endeavor"
    ]
  },
  {
    "dexNumber": 129,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Rattled",
        "isHidden": true,
        "label": "Rattled (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 130,
    "abilities": [
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Moxie",
        "isHidden": true,
        "label": "Moxie (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 131,
    "abilities": [
      {
        "name": "Water Absorb",
        "isHidden": false,
        "label": "Water Absorb"
      },
      {
        "name": "Shell Armor",
        "isHidden": false,
        "label": "Shell Armor"
      },
      {
        "name": "Hydration",
        "isHidden": true,
        "label": "Hydration (HO)"
      }
    ],
    "eggMoves": [
      "Aurora Beam",
      "Foresight",
      "Horn Drill",
      "Substitute",
      "Curse",
      "Sleep Talk",
      "Refresh",
      "Tickle",
      "Dragon Dance",
      "Fissure",
      "Ancient Power",
      "Whirlpool",
      "Future Sight",
      "Dragon Pulse",
      "Avalanche",
      "Freeze Dry",
      "Sparkling Aria"
    ]
  },
  {
    "dexNumber": 132,
    "abilities": [
      {
        "name": "Limber",
        "isHidden": false,
        "label": "Limber"
      },
      {
        "name": "Imposter",
        "isHidden": true,
        "label": "Imposter (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 133,
    "abilities": [
      {
        "name": "Run Away",
        "isHidden": false,
        "label": "Run Away"
      },
      {
        "name": "Adaptability",
        "isHidden": false,
        "label": "Adaptability"
      },
      {
        "name": "Anticipation",
        "isHidden": true,
        "label": "Anticipation (HO)"
      }
    ],
    "eggMoves": [
      "Flail",
      "Charm",
      "Curse",
      "Endure",
      "Wish",
      "Tickle",
      "Yawn",
      "Fake Tears",
      "Covet",
      "Detect",
      "Natural Gift",
      "Synchronoise",
      "Stored Power",
      "Captivate",
      "Double Kick",
      "Mud Slap"
    ]
  },
  {
    "dexNumber": 134,
    "abilities": [
      {
        "name": "Water Absorb",
        "isHidden": false,
        "label": "Water Absorb"
      },
      {
        "name": "Hydration",
        "isHidden": true,
        "label": "Hydration (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 135,
    "abilities": [
      {
        "name": "Volt Absorb",
        "isHidden": false,
        "label": "Volt Absorb"
      },
      {
        "name": "Quick Feet",
        "isHidden": true,
        "label": "Quick Feet (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 136,
    "abilities": [
      {
        "name": "Flash Fire",
        "isHidden": false,
        "label": "Flash Fire"
      },
      {
        "name": "Guts",
        "isHidden": true,
        "label": "Guts (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 137,
    "abilities": [
      {
        "name": "Trace",
        "isHidden": false,
        "label": "Trace"
      },
      {
        "name": "Download",
        "isHidden": false,
        "label": "Download"
      },
      {
        "name": "Analytic",
        "isHidden": true,
        "label": "Analytic (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 138,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Shell Armor",
        "isHidden": false,
        "label": "Shell Armor"
      },
      {
        "name": "Weak Armor",
        "isHidden": true,
        "label": "Weak Armor (HO)"
      }
    ],
    "eggMoves": [
      "Slam",
      "Supersonic",
      "Bubble Beam",
      "Aurora Beam",
      "Haze",
      "Rock Slide",
      "Spikes",
      "Knock Off",
      "Wring Out",
      "Toxic Spikes",
      "Muddy Water",
      "Bide",
      "Whirlpool",
      "Water Pulse",
      "Reflect Type",
      "Bite",
      "Tickle"
    ]
  },
  {
    "dexNumber": 139,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Shell Armor",
        "isHidden": false,
        "label": "Shell Armor"
      },
      {
        "name": "Weak Armor",
        "isHidden": true,
        "label": "Weak Armor (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 140,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Battle Armor",
        "isHidden": false,
        "label": "Battle Armor"
      },
      {
        "name": "Weak Armor",
        "isHidden": true,
        "label": "Weak Armor (HO)"
      }
    ],
    "eggMoves": [
      "Bubble Beam",
      "Aurora Beam",
      "Dig",
      "Flail",
      "Rapid Spin",
      "Confuse Ray",
      "Knock Off",
      "Screech",
      "Icy Wind",
      "Mud Shot",
      "Foresight",
      "Giga Drain",
      "Take Down",
      "Mega Drain"
    ]
  },
  {
    "dexNumber": 141,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Battle Armor",
        "isHidden": false,
        "label": "Battle Armor"
      },
      {
        "name": "Weak Armor",
        "isHidden": true,
        "label": "Weak Armor (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 142,
    "abilities": [
      {
        "name": "Rock Head",
        "isHidden": false,
        "label": "Rock Head"
      },
      {
        "name": "Pressure",
        "isHidden": false,
        "label": "Pressure"
      },
      {
        "name": "Unnerve",
        "isHidden": true,
        "label": "Unnerve (HO)"
      }
    ],
    "eggMoves": [
      "Whirlwind",
      "Foresight",
      "Steel Wing",
      "Pursuit",
      "Curse",
      "Dragon Breath",
      "Assurance",
      "Roost",
      "Tailwind",
      "Wide Guard"
    ]
  },
  {
    "dexNumber": 143,
    "abilities": [
      {
        "name": "Immunity",
        "isHidden": false,
        "label": "Immunity"
      },
      {
        "name": "Thick Fat",
        "isHidden": false,
        "label": "Thick Fat"
      },
      {
        "name": "Gluttony",
        "isHidden": true,
        "label": "Gluttony (HO)"
      }
    ],
    "eggMoves": [
      "Lick",
      "Charm",
      "Double Edge",
      "Fissure",
      "Substitute",
      "Curse",
      "Whirlwind",
      "Pursuit",
      "Counter",
      "Natural Gift",
      "After You",
      "Belch",
      "Power Up Punch",
      "Gastro Acid"
    ]
  },
  {
    "dexNumber": 144,
    "abilities": [
      {
        "name": "Pressure",
        "isHidden": false,
        "label": "Pressure"
      },
      {
        "name": "Snow Cloak",
        "isHidden": true,
        "label": "Snow Cloak (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 145,
    "abilities": [
      {
        "name": "Pressure",
        "isHidden": false,
        "label": "Pressure"
      },
      {
        "name": "Static",
        "isHidden": true,
        "label": "Static (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 146,
    "abilities": [
      {
        "name": "Pressure",
        "isHidden": false,
        "label": "Pressure"
      },
      {
        "name": "Flame Body",
        "isHidden": true,
        "label": "Flame Body (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 147,
    "abilities": [
      {
        "name": "Shed Skin",
        "isHidden": false,
        "label": "Shed Skin"
      },
      {
        "name": "Marvel Scale",
        "isHidden": true,
        "label": "Marvel Scale (HO)"
      }
    ],
    "eggMoves": [
      "Supersonic",
      "Mist",
      "Light Screen",
      "Haze",
      "Dragon Breath",
      "Dragon Dance",
      "Dragon Rush",
      "Extreme Speed",
      "Iron Tail",
      "Water Pulse",
      "Dragon Pulse",
      "Aqua Jet"
    ]
  },
  {
    "dexNumber": 148,
    "abilities": [
      {
        "name": "Shed Skin",
        "isHidden": false,
        "label": "Shed Skin"
      },
      {
        "name": "Marvel Scale",
        "isHidden": true,
        "label": "Marvel Scale (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 149,
    "abilities": [
      {
        "name": "Inner Focus",
        "isHidden": false,
        "label": "Inner Focus"
      },
      {
        "name": "Multiscale",
        "isHidden": true,
        "label": "Multiscale (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 150,
    "abilities": [
      {
        "name": "Pressure",
        "isHidden": false,
        "label": "Pressure"
      },
      {
        "name": "Unnerve",
        "isHidden": true,
        "label": "Unnerve (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 151,
    "abilities": [
      {
        "name": "Synchronize",
        "isHidden": false,
        "label": "Synchronize"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 152,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Leaf Guard",
        "isHidden": true,
        "label": "Leaf Guard (HO)"
      }
    ],
    "eggMoves": [
      "Vine Whip",
      "Counter",
      "Leech Seed",
      "Flail",
      "Ancient Power",
      "Swords Dance",
      "Nature Power",
      "Ingrain",
      "Grass Whistle",
      "Aromatherapy",
      "Wring Out",
      "Leaf Storm",
      "Body Slam",
      "Refresh",
      "Heal Pulse",
      "Grassy Terrain"
    ]
  },
  {
    "dexNumber": 153,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Leaf Guard",
        "isHidden": true,
        "label": "Leaf Guard (HO)"
      }
    ],
    "eggMoves": [
      "Vine Whip",
      "Counter",
      "Flail",
      "Ancient Power",
      "Ingrain",
      "Heal Pulse"
    ]
  },
  {
    "dexNumber": 154,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Leaf Guard",
        "isHidden": true,
        "label": "Leaf Guard (HO)"
      }
    ],
    "eggMoves": [
      "Vine Whip",
      "Counter",
      "Flail",
      "Ancient Power",
      "Ingrain",
      "Heal Pulse"
    ]
  },
  {
    "dexNumber": 155,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Flash Fire",
        "isHidden": true,
        "label": "Flash Fire (HO)"
      }
    ],
    "eggMoves": [
      "Thrash",
      "Quick Attack",
      "Fury Swipes",
      "Reversal",
      "Foresight",
      "Submission",
      "Crush Claw",
      "Howl",
      "Covet",
      "Double Kick",
      "Double Edge",
      "Flare Blitz",
      "Extrasensory",
      "Nature Power",
      "Flame Burst",
      "Curse"
    ]
  },
  {
    "dexNumber": 156,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Flash Fire",
        "isHidden": true,
        "label": "Flash Fire (HO)"
      }
    ],
    "eggMoves": [
      "Double Kick",
      "Curse",
      "Reversal",
      "Extrasensory",
      "Howl",
      "Covet"
    ]
  },
  {
    "dexNumber": 157,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Flash Fire",
        "isHidden": true,
        "label": "Flash Fire (HO)"
      }
    ],
    "eggMoves": [
      "Double Kick",
      "Curse",
      "Reversal",
      "Extrasensory",
      "Howl",
      "Covet"
    ]
  },
  {
    "dexNumber": 158,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Sheer Force",
        "isHidden": true,
        "label": "Sheer Force (HO)"
      }
    ],
    "eggMoves": [
      "Razor Wind",
      "Thrash",
      "Hydro Pump",
      "Rock Slide",
      "Crunch",
      "Ancient Power",
      "Mud Sport",
      "Dragon Claw",
      "Water Sport",
      "Ice Punch",
      "Metal Claw",
      "Dragon Dance",
      "Aqua Jet",
      "Fake Tears",
      "Block",
      "Water Pulse",
      "Flatter",
      "Counter"
    ]
  },
  {
    "dexNumber": 159,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Sheer Force",
        "isHidden": true,
        "label": "Sheer Force (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "Ancient Power",
      "Flatter",
      "Block",
      "Aqua Jet"
    ]
  },
  {
    "dexNumber": 160,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Sheer Force",
        "isHidden": true,
        "label": "Sheer Force (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "Ancient Power",
      "Flatter",
      "Block",
      "Aqua Jet"
    ]
  },
  {
    "dexNumber": 161,
    "abilities": [
      {
        "name": "Run Away",
        "isHidden": false,
        "label": "Run Away"
      },
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Frisk",
        "isHidden": true,
        "label": "Frisk (HO)"
      }
    ],
    "eggMoves": [
      "Double Edge",
      "Focus Energy",
      "Slash",
      "Reversal",
      "Pursuit",
      "Substitute",
      "Trick",
      "Assist",
      "Charm",
      "Covet",
      "Last Resort",
      "Iron Tail",
      "Natural Gift",
      "Captivate",
      "Baby Doll Eyes",
      "Tidy Up"
    ]
  },
  {
    "dexNumber": 162,
    "abilities": [
      {
        "name": "Run Away",
        "isHidden": false,
        "label": "Run Away"
      },
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Frisk",
        "isHidden": true,
        "label": "Frisk (HO)"
      }
    ],
    "eggMoves": [
      "Focus Energy",
      "Slash",
      "Reversal",
      "Last Resort",
      "Baby Doll Eyes",
      "Tidy Up"
    ]
  },
  {
    "dexNumber": 163,
    "abilities": [
      {
        "name": "Insomnia",
        "isHidden": false,
        "label": "Insomnia"
      },
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Tinted Lens",
        "isHidden": true,
        "label": "Tinted Lens (HO)"
      }
    ],
    "eggMoves": [
      "Wing Attack",
      "Whirlwind",
      "Supersonic",
      "Mirror Move",
      "Feint Attack",
      "Sky Attack",
      "Feather Dance",
      "Agility",
      "Night Shade",
      "Defog",
      "Mean Look",
      "Hurricane"
    ]
  },
  {
    "dexNumber": 164,
    "abilities": [
      {
        "name": "Insomnia",
        "isHidden": false,
        "label": "Insomnia"
      },
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Tinted Lens",
        "isHidden": true,
        "label": "Tinted Lens (HO)"
      }
    ],
    "eggMoves": [
      "Wing Attack",
      "Whirlwind",
      "Supersonic",
      "Night Shade",
      "Feather Dance"
    ]
  },
  {
    "dexNumber": 165,
    "abilities": [
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      },
      {
        "name": "Early Bird",
        "isHidden": false,
        "label": "Early Bird"
      },
      {
        "name": "Rattled",
        "isHidden": true,
        "label": "Rattled (HO)"
      }
    ],
    "eggMoves": [
      "Psybeam",
      "Light Screen",
      "Bide",
      "Silver Wind",
      "Screech",
      "Encore",
      "Knock Off",
      "Bug Buzz",
      "Bug Bite",
      "Dizzy Punch",
      "Focus Punch",
      "Drain Punch",
      "Tailwind",
      "Counter",
      "Endure"
    ]
  },
  {
    "dexNumber": 166,
    "abilities": [
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      },
      {
        "name": "Early Bird",
        "isHidden": false,
        "label": "Early Bird"
      },
      {
        "name": "Iron Fist",
        "isHidden": true,
        "label": "Iron Fist (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 167,
    "abilities": [
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      },
      {
        "name": "Insomnia",
        "isHidden": false,
        "label": "Insomnia"
      },
      {
        "name": "Sniper",
        "isHidden": true,
        "label": "Sniper (HO)"
      }
    ],
    "eggMoves": [
      "Sonic Boom",
      "Disable",
      "Psybeam",
      "Baton Pass",
      "Pursuit",
      "Signal Beam",
      "Toxic Spikes",
      "Poison Jab",
      "Twineedle",
      "Night Slash",
      "Rage Powder",
      "Electroweb",
      "Megahorn",
      "Lunge"
    ]
  },
  {
    "dexNumber": 168,
    "abilities": [
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      },
      {
        "name": "Insomnia",
        "isHidden": false,
        "label": "Insomnia"
      },
      {
        "name": "Sniper",
        "isHidden": true,
        "label": "Sniper (HO)"
      }
    ],
    "eggMoves": [
      "Disable",
      "Megahorn",
      "Night Slash",
      "Rage Powder",
      "Lunge"
    ]
  },
  {
    "dexNumber": 169,
    "abilities": [
      {
        "name": "Inner Focus",
        "isHidden": false,
        "label": "Inner Focus"
      },
      {
        "name": "Infiltrator",
        "isHidden": true,
        "label": "Infiltrator (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 170,
    "abilities": [
      {
        "name": "Volt Absorb",
        "isHidden": false,
        "label": "Volt Absorb"
      },
      {
        "name": "Illuminate",
        "isHidden": false,
        "label": "Illuminate"
      },
      {
        "name": "Water Absorb",
        "isHidden": true,
        "label": "Water Absorb (HO)"
      }
    ],
    "eggMoves": [
      "Supersonic",
      "Screech",
      "Flail",
      "Amnesia",
      "Mist",
      "Psybeam",
      "Agility",
      "Whirlpool",
      "Shock Wave",
      "Water Pulse",
      "Brine",
      "Soak",
      "Sucker Punch"
    ]
  },
  {
    "dexNumber": 171,
    "abilities": [
      {
        "name": "Volt Absorb",
        "isHidden": false,
        "label": "Volt Absorb"
      },
      {
        "name": "Illuminate",
        "isHidden": false,
        "label": "Illuminate"
      },
      {
        "name": "Water Absorb",
        "isHidden": true,
        "label": "Water Absorb (HO)"
      }
    ],
    "eggMoves": [
      "Mist",
      "Psybeam",
      "Water Pulse",
      "Sucker Punch",
      "Soak"
    ]
  },
  {
    "dexNumber": 172,
    "abilities": [
      {
        "name": "Static",
        "isHidden": false,
        "label": "Static"
      },
      {
        "name": "Lightning Rod",
        "isHidden": true,
        "label": "Lightning Rod (HO)"
      }
    ],
    "eggMoves": [
      "Double Slap",
      "Bide",
      "Reversal",
      "Present",
      "Encore",
      "Charge",
      "Wish",
      "Thunder Punch",
      "Fake Out",
      "Tickle",
      "Flail",
      "Endure",
      "Lucky Chant",
      "Bestow",
      "Disarming Voice",
      "Electric Terrain"
    ]
  },
  {
    "dexNumber": 173,
    "abilities": [
      {
        "name": "Cute Charm",
        "isHidden": false,
        "label": "Cute Charm"
      },
      {
        "name": "Magic Guard",
        "isHidden": false,
        "label": "Magic Guard"
      },
      {
        "name": "Friend Guard",
        "isHidden": true,
        "label": "Friend Guard (HO)"
      }
    ],
    "eggMoves": [
      "Mimic",
      "Metronome",
      "Amnesia",
      "Splash",
      "Belly Drum",
      "Present",
      "Substitute",
      "Wish",
      "Fake Tears",
      "Covet",
      "Aromatherapy",
      "Tickle",
      "Stored Power",
      "Heal Pulse",
      "Misty Terrain"
    ]
  },
  {
    "dexNumber": 174,
    "abilities": [
      {
        "name": "Cute Charm",
        "isHidden": false,
        "label": "Cute Charm"
      },
      {
        "name": "Competitive",
        "isHidden": false,
        "label": "Competitive"
      },
      {
        "name": "Friend Guard",
        "isHidden": true,
        "label": "Friend Guard (HO)"
      }
    ],
    "eggMoves": [
      "Feint Attack",
      "Perish Song",
      "Present",
      "Wish",
      "Fake Tears",
      "Covet",
      "Gravity",
      "Last Resort",
      "Sleep Talk",
      "Punishment",
      "Captivate",
      "Heal Pulse",
      "Misty Terrain",
      "Rollout"
    ]
  },
  {
    "dexNumber": 175,
    "abilities": [
      {
        "name": "Hustle",
        "isHidden": false,
        "label": "Hustle"
      },
      {
        "name": "Serene Grace",
        "isHidden": false,
        "label": "Serene Grace"
      },
      {
        "name": "Super Luck",
        "isHidden": true,
        "label": "Super Luck (HO)"
      }
    ],
    "eggMoves": [
      "Peck",
      "Mirror Move",
      "Foresight",
      "Present",
      "Future Sight",
      "Substitute",
      "Psych Up",
      "Psycho Shift",
      "Lucky Chant",
      "Nasty Plot",
      "Extrasensory",
      "Morning Sun",
      "Secret Power",
      "Stored Power",
      "Aerial Ace"
    ]
  },
  {
    "dexNumber": 176,
    "abilities": [
      {
        "name": "Hustle",
        "isHidden": false,
        "label": "Hustle"
      },
      {
        "name": "Serene Grace",
        "isHidden": false,
        "label": "Serene Grace"
      },
      {
        "name": "Super Luck",
        "isHidden": true,
        "label": "Super Luck (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 177,
    "abilities": [
      {
        "name": "Synchronize",
        "isHidden": false,
        "label": "Synchronize"
      },
      {
        "name": "Early Bird",
        "isHidden": false,
        "label": "Early Bird"
      },
      {
        "name": "Magic Bounce",
        "isHidden": true,
        "label": "Magic Bounce (HO)"
      }
    ],
    "eggMoves": [
      "Drill Peck",
      "Quick Attack",
      "Haze",
      "Feint Attack",
      "Steel Wing",
      "Psych Up",
      "Refresh",
      "Feather Dance",
      "Sucker Punch",
      "Zen Headbutt",
      "Skill Swap",
      "Roost",
      "Synchronoise",
      "Simple Beam",
      "Ally Switch"
    ]
  },
  {
    "dexNumber": 178,
    "abilities": [
      {
        "name": "Synchronize",
        "isHidden": false,
        "label": "Synchronize"
      },
      {
        "name": "Early Bird",
        "isHidden": false,
        "label": "Early Bird"
      },
      {
        "name": "Magic Bounce",
        "isHidden": true,
        "label": "Magic Bounce (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 179,
    "abilities": [
      {
        "name": "Static",
        "isHidden": false,
        "label": "Static"
      },
      {
        "name": "Plus",
        "isHidden": true,
        "label": "Plus (HO)"
      }
    ],
    "eggMoves": [
      "Body Slam",
      "Take Down",
      "Thunderbolt",
      "Screech",
      "Reflect",
      "Safeguard",
      "Charge",
      "Odor Sleuth",
      "Sand Attack",
      "Flatter",
      "Agility",
      "Iron Tail",
      "After You",
      "Eerie Impulse",
      "Electric Terrain",
      "Electroweb"
    ]
  },
  {
    "dexNumber": 180,
    "abilities": [
      {
        "name": "Static",
        "isHidden": false,
        "label": "Static"
      },
      {
        "name": "Plus",
        "isHidden": true,
        "label": "Plus (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 181,
    "abilities": [
      {
        "name": "Static",
        "isHidden": false,
        "label": "Static"
      },
      {
        "name": "Plus",
        "isHidden": true,
        "label": "Plus (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 182,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Healer",
        "isHidden": true,
        "label": "Healer (HO)"
      }
    ],
    "eggMoves": [
      "Leech Seed",
      "Razor Leaf",
      "Flail",
      "Synthesis",
      "Ingrain",
      "Teeter Dance",
      "Tickle",
      "After You",
      "Strength Sap"
    ]
  },
  {
    "dexNumber": 183,
    "abilities": [
      {
        "name": "Thick Fat",
        "isHidden": false,
        "label": "Thick Fat"
      },
      {
        "name": "Huge Power",
        "isHidden": false,
        "label": "Huge Power"
      },
      {
        "name": "Sap Sipper",
        "isHidden": true,
        "label": "Sap Sipper (HO)"
      }
    ],
    "eggMoves": [
      "Supersonic",
      "Light Screen",
      "Amnesia",
      "Belly Drum",
      "Foresight",
      "Perish Song",
      "Present",
      "Future Sight",
      "Substitute",
      "Superpower",
      "Refresh",
      "Aqua Jet",
      "Body Slam",
      "Muddy Water",
      "Water Sport",
      "Camouflage",
      "Sing",
      "Tickle",
      "Copycat",
      "Soak"
    ]
  },
  {
    "dexNumber": 184,
    "abilities": [
      {
        "name": "Thick Fat",
        "isHidden": false,
        "label": "Thick Fat"
      },
      {
        "name": "Huge Power",
        "isHidden": false,
        "label": "Huge Power"
      },
      {
        "name": "Sap Sipper",
        "isHidden": true,
        "label": "Sap Sipper (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 185,
    "abilities": [
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Rock Head",
        "isHidden": false,
        "label": "Rock Head"
      },
      {
        "name": "Rattled",
        "isHidden": true,
        "label": "Rattled (HO)"
      }
    ],
    "eggMoves": [
      "Self Destruct",
      "Headbutt",
      "Harden",
      "Defense Curl",
      "Rollout",
      "Sand Tomb",
      "Curse",
      "Endure",
      "Stealth Rock",
      "Rock Polish"
    ]
  },
  {
    "dexNumber": 186,
    "abilities": [
      {
        "name": "Water Absorb",
        "isHidden": false,
        "label": "Water Absorb"
      },
      {
        "name": "Damp",
        "isHidden": false,
        "label": "Damp"
      },
      {
        "name": "Drizzle",
        "isHidden": true,
        "label": "Drizzle (HO)"
      }
    ],
    "eggMoves": [
      "Body Slam",
      "Double Edge",
      "Mist",
      "Water Gun",
      "Bubble Beam",
      "Hypnosis",
      "Splash",
      "Perish Song",
      "Swagger",
      "Endeavor",
      "Hyper Voice",
      "Muddy Water",
      "Mud Shot",
      "Water Pulse",
      "Earth Power"
    ]
  },
  {
    "dexNumber": 187,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Leaf Guard",
        "isHidden": false,
        "label": "Leaf Guard"
      },
      {
        "name": "Infiltrator",
        "isHidden": true,
        "label": "Infiltrator (HO)"
      }
    ],
    "eggMoves": [
      "Pay Day",
      "Double Edge",
      "Growl",
      "Confusion",
      "Reflect",
      "Amnesia",
      "Encore",
      "Psych Up",
      "Helping Hand",
      "Aromatherapy",
      "Worry Seed",
      "Endure",
      "Seed Bomb",
      "Cotton Guard",
      "Grassy Terrain",
      "Strength Sap",
      "Switcheroo",
      "Rage Powder"
    ]
  },
  {
    "dexNumber": 188,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Leaf Guard",
        "isHidden": false,
        "label": "Leaf Guard"
      },
      {
        "name": "Infiltrator",
        "isHidden": true,
        "label": "Infiltrator (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 189,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Leaf Guard",
        "isHidden": false,
        "label": "Leaf Guard"
      },
      {
        "name": "Infiltrator",
        "isHidden": true,
        "label": "Infiltrator (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 190,
    "abilities": [
      {
        "name": "Run Away",
        "isHidden": false,
        "label": "Run Away"
      },
      {
        "name": "Pickup",
        "isHidden": false,
        "label": "Pickup"
      },
      {
        "name": "Skill Link",
        "isHidden": true,
        "label": "Skill Link (HO)"
      }
    ],
    "eggMoves": [
      "Double Slap",
      "Slam",
      "Counter",
      "Agility",
      "Screech",
      "Spite",
      "Pursuit",
      "Beat Up",
      "Fake Out",
      "Bounce",
      "Covet",
      "Revenge",
      "Switcheroo",
      "Quick Guard",
      "Tail Slap",
      "Iron Tail"
    ]
  },
  {
    "dexNumber": 191,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Solar Power",
        "isHidden": false,
        "label": "Solar Power"
      },
      {
        "name": "Early Bird",
        "isHidden": true,
        "label": "Early Bird (HO)"
      }
    ],
    "eggMoves": [
      "Leech Seed",
      "Curse",
      "Encore",
      "Nature Power",
      "Helping Hand",
      "Grass Whistle",
      "Sweet Scent",
      "Ingrain",
      "Bide",
      "Endure",
      "Morning Sun",
      "Natural Gift",
      "Grassy Terrain"
    ]
  },
  {
    "dexNumber": 192,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Solar Power",
        "isHidden": false,
        "label": "Solar Power"
      },
      {
        "name": "Early Bird",
        "isHidden": true,
        "label": "Early Bird (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 193,
    "abilities": [
      {
        "name": "Speed Boost",
        "isHidden": false,
        "label": "Speed Boost"
      },
      {
        "name": "Compound Eyes",
        "isHidden": false,
        "label": "Compound Eyes"
      },
      {
        "name": "Frisk",
        "isHidden": true,
        "label": "Frisk (HO)"
      }
    ],
    "eggMoves": [
      "Whirlwind",
      "Leech Life",
      "Reversal",
      "Silver Wind",
      "Signal Beam",
      "Feint Attack",
      "Pursuit",
      "Feint",
      "Double Edge",
      "Secret Power"
    ]
  },
  {
    "dexNumber": 194,
    "abilities": [
      {
        "name": "Damp",
        "isHidden": false,
        "label": "Damp"
      },
      {
        "name": "Water Absorb",
        "isHidden": false,
        "label": "Water Absorb"
      },
      {
        "name": "Unaware",
        "isHidden": true,
        "label": "Unaware (HO)"
      }
    ],
    "eggMoves": [
      "Body Slam",
      "Safeguard",
      "Ancient Power",
      "Curse",
      "Stockpile",
      "Spit Up",
      "Swallow",
      "Mud Sport",
      "Double Kick",
      "Counter",
      "Encore",
      "Recover",
      "Sleep Talk",
      "Acid Spray",
      "After You",
      "Guard Swap",
      "Eerie Impulse",
      "Power Up Punch"
    ]
  },
  {
    "dexNumber": 195,
    "abilities": [
      {
        "name": "Damp",
        "isHidden": false,
        "label": "Damp"
      },
      {
        "name": "Water Absorb",
        "isHidden": false,
        "label": "Water Absorb"
      },
      {
        "name": "Unaware",
        "isHidden": true,
        "label": "Unaware (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 196,
    "abilities": [
      {
        "name": "Synchronize",
        "isHidden": false,
        "label": "Synchronize"
      },
      {
        "name": "Magic Bounce",
        "isHidden": true,
        "label": "Magic Bounce (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 197,
    "abilities": [
      {
        "name": "Synchronize",
        "isHidden": false,
        "label": "Synchronize"
      },
      {
        "name": "Inner Focus",
        "isHidden": true,
        "label": "Inner Focus (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 198,
    "abilities": [
      {
        "name": "Insomnia",
        "isHidden": false,
        "label": "Insomnia"
      },
      {
        "name": "Super Luck",
        "isHidden": false,
        "label": "Super Luck"
      },
      {
        "name": "Prankster",
        "isHidden": true,
        "label": "Prankster (HO)"
      }
    ],
    "eggMoves": [
      "Wing Attack",
      "Whirlwind",
      "Drill Peck",
      "Quick Attack",
      "Mirror Move",
      "Sky Attack",
      "Confuse Ray",
      "Perish Song",
      "Feather Dance",
      "Screech",
      "Feint Attack",
      "Psycho Shift",
      "Brave Bird",
      "Roost",
      "Assurance",
      "Flatter",
      "Punishment"
    ]
  },
  {
    "dexNumber": 199,
    "abilities": [
      {
        "name": "Oblivious",
        "isHidden": false,
        "label": "Oblivious"
      },
      {
        "name": "Own Tempo",
        "isHidden": false,
        "label": "Own Tempo"
      },
      {
        "name": "Regenerator",
        "isHidden": true,
        "label": "Regenerator (HO)"
      }
    ],
    "eggMoves": [
      "Future Sight",
      "Chilly Reception"
    ]
  },
  {
    "dexNumber": 200,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": [
      "Screech",
      "Destiny Bond",
      "Psych Up",
      "Imprison",
      "Curse",
      "Spite",
      "Memento",
      "Sucker Punch",
      "Shadow Sneak",
      "Ominous Wind",
      "Nasty Plot",
      "Skill Swap",
      "Wonder Room",
      "Me First"
    ]
  },
  {
    "dexNumber": 201,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 202,
    "abilities": [
      {
        "name": "Shadow Tag",
        "isHidden": false,
        "label": "Shadow Tag"
      },
      {
        "name": "Telepathy",
        "isHidden": true,
        "label": "Telepathy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 203,
    "abilities": [
      {
        "name": "Inner Focus",
        "isHidden": false,
        "label": "Inner Focus"
      },
      {
        "name": "Early Bird",
        "isHidden": false,
        "label": "Early Bird"
      },
      {
        "name": "Sap Sipper",
        "isHidden": true,
        "label": "Sap Sipper (HO)"
      }
    ],
    "eggMoves": [
      "Take Down",
      "Amnesia",
      "Foresight",
      "Future Sight",
      "Beat Up",
      "Psych Up",
      "Wish",
      "Magic Coat",
      "Double Kick",
      "Mirror Coat",
      "Razor Wind",
      "Mean Look",
      "Skill Swap",
      "Secret Power",
      "Psychic Terrain",
      "Psychic Fangs",
      "Uproar",
      "Ally Switch"
    ]
  },
  {
    "dexNumber": 204,
    "abilities": [
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Overcoat",
        "isHidden": true,
        "label": "Overcoat (HO)"
      }
    ],
    "eggMoves": [
      "Pin Missile",
      "Reflect",
      "Swift",
      "Flail",
      "Counter",
      "Sand Tomb",
      "Double Edge",
      "Revenge",
      "Toxic Spikes",
      "Power Trick",
      "Endure",
      "Stealth Rock"
    ]
  },
  {
    "dexNumber": 205,
    "abilities": [
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Overcoat",
        "isHidden": true,
        "label": "Overcoat (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 206,
    "abilities": [
      {
        "name": "Serene Grace",
        "isHidden": false,
        "label": "Serene Grace"
      },
      {
        "name": "Run Away",
        "isHidden": false,
        "label": "Run Away"
      },
      {
        "name": "Rattled",
        "isHidden": true,
        "label": "Rattled (HO)"
      }
    ],
    "eggMoves": [
      "Bite",
      "Rage",
      "Bide",
      "Rock Slide",
      "Ancient Power",
      "Headbutt",
      "Curse",
      "Astonish",
      "Snore",
      "Magic Coat",
      "Trump Card",
      "Agility",
      "Sleep Talk",
      "Secret Power",
      "Hex",
      "Last Resort",
      "Aqua Tail"
    ]
  },
  {
    "dexNumber": 207,
    "abilities": [
      {
        "name": "Hyper Cutter",
        "isHidden": false,
        "label": "Hyper Cutter"
      },
      {
        "name": "Sand Veil",
        "isHidden": false,
        "label": "Sand Veil"
      },
      {
        "name": "Immunity",
        "isHidden": true,
        "label": "Immunity (HO)"
      }
    ],
    "eggMoves": [
      "Razor Wind",
      "Wing Attack",
      "Counter",
      "Metal Claw",
      "Sand Tomb",
      "Double Edge",
      "Agility",
      "Baton Pass",
      "Feint",
      "Night Slash",
      "Cross Poison",
      "Power Trick",
      "Poison Tail",
      "Rock Climb"
    ]
  },
  {
    "dexNumber": 208,
    "abilities": [
      {
        "name": "Rock Head",
        "isHidden": false,
        "label": "Rock Head"
      },
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Sheer Force",
        "isHidden": true,
        "label": "Sheer Force (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 209,
    "abilities": [
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Run Away",
        "isHidden": false,
        "label": "Run Away"
      },
      {
        "name": "Rattled",
        "isHidden": true,
        "label": "Rattled (HO)"
      }
    ],
    "eggMoves": [
      "Leer",
      "Reflect",
      "Metronome",
      "Lick",
      "Feint Attack",
      "Heal Bell",
      "Present",
      "Crunch",
      "Snore",
      "Smelling Salts",
      "Close Combat",
      "Thunder Fang",
      "Ice Fang",
      "Fire Fang",
      "Double Edge",
      "Mimic",
      "Focus Punch",
      "Fake Tears",
      "Counter",
      "Retaliate"
    ]
  },
  {
    "dexNumber": 210,
    "abilities": [
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Quick Feet",
        "isHidden": false,
        "label": "Quick Feet"
      },
      {
        "name": "Rattled",
        "isHidden": true,
        "label": "Rattled (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "Mimic",
      "Snore",
      "Present",
      "Retaliate"
    ]
  },
  {
    "dexNumber": 211,
    "abilities": [
      {
        "name": "Poison Point",
        "isHidden": false,
        "label": "Poison Point"
      },
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Intimidate",
        "isHidden": true,
        "label": "Intimidate (HO)"
      }
    ],
    "eggMoves": [
      "Supersonic",
      "Bubble Beam",
      "Haze",
      "Flail",
      "Astonish",
      "Signal Beam",
      "Poison Jab",
      "Aqua Jet",
      "Water Pulse",
      "Brine",
      "Acid Spray",
      "Self Destruct",
      "Barb Barrage"
    ]
  },
  {
    "dexNumber": 212,
    "abilities": [
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      },
      {
        "name": "Technician",
        "isHidden": false,
        "label": "Technician"
      },
      {
        "name": "Light Metal",
        "isHidden": true,
        "label": "Light Metal (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 213,
    "abilities": [
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Gluttony",
        "isHidden": false,
        "label": "Gluttony"
      },
      {
        "name": "Contrary",
        "isHidden": true,
        "label": "Contrary (HO)"
      }
    ],
    "eggMoves": [
      "Sweet Scent",
      "Mud Slap",
      "Helping Hand",
      "Knock Off",
      "Sand Tomb",
      "Acupressure",
      "Acid",
      "Rock Blast",
      "Final Gambit",
      "Toxic",
      "Defense Curl",
      "Covet",
      "Infestation"
    ]
  },
  {
    "dexNumber": 214,
    "abilities": [
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      },
      {
        "name": "Guts",
        "isHidden": false,
        "label": "Guts"
      },
      {
        "name": "Moxie",
        "isHidden": true,
        "label": "Moxie (HO)"
      }
    ],
    "eggMoves": [
      "Harden",
      "Bide",
      "Flail",
      "False Swipe",
      "Double Edge",
      "Pursuit",
      "Revenge",
      "Seismic Toss",
      "Megahorn",
      "Focus Punch",
      "Rock Blast",
      "Take Down",
      "Feint",
      "Night Slash"
    ]
  },
  {
    "dexNumber": 215,
    "abilities": [
      {
        "name": "Inner Focus",
        "isHidden": false,
        "label": "Inner Focus"
      },
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Pickpocket",
        "isHidden": true,
        "label": "Pickpocket (HO)"
      }
    ],
    "eggMoves": [
      "Bite",
      "Counter",
      "Reflect",
      "Spite",
      "Foresight",
      "Fake Out",
      "Crush Claw",
      "Ice Punch",
      "Pursuit",
      "Punishment",
      "Ice Shard",
      "Double Hit",
      "Assist",
      "Feint",
      "Avalanche",
      "Icicle Crash",
      "Throat Chop"
    ]
  },
  {
    "dexNumber": 216,
    "abilities": [
      {
        "name": "Pickup",
        "isHidden": false,
        "label": "Pickup"
      },
      {
        "name": "Quick Feet",
        "isHidden": false,
        "label": "Quick Feet"
      },
      {
        "name": "Honey Gather",
        "isHidden": true,
        "label": "Honey Gather (HO)"
      }
    ],
    "eggMoves": [
      "Take Down",
      "Counter",
      "Seismic Toss",
      "Focus Energy",
      "Crunch",
      "Metal Claw",
      "Sleep Talk",
      "Yawn",
      "Fake Tears",
      "Double Edge",
      "Cross Chop",
      "Close Combat",
      "Night Slash",
      "Belly Drum",
      "Chip Away",
      "Play Rough",
      "Fury Cutter"
    ]
  },
  {
    "dexNumber": 217,
    "abilities": [
      {
        "name": "Guts",
        "isHidden": false,
        "label": "Guts"
      },
      {
        "name": "Quick Feet",
        "isHidden": false,
        "label": "Quick Feet"
      },
      {
        "name": "Unnerve",
        "isHidden": true,
        "label": "Unnerve (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 218,
    "abilities": [
      {
        "name": "Magma Armor",
        "isHidden": false,
        "label": "Magma Armor"
      },
      {
        "name": "Flame Body",
        "isHidden": false,
        "label": "Flame Body"
      },
      {
        "name": "Weak Armor",
        "isHidden": true,
        "label": "Weak Armor (HO)"
      }
    ],
    "eggMoves": [
      "Acid Armor",
      "Heat Wave",
      "Smokescreen",
      "Curse",
      "Stockpile",
      "Spit Up",
      "Swallow",
      "Memento",
      "Rollout",
      "Earth Power",
      "Inferno",
      "Guard Swap"
    ]
  },
  {
    "dexNumber": 219,
    "abilities": [
      {
        "name": "Magma Armor",
        "isHidden": false,
        "label": "Magma Armor"
      },
      {
        "name": "Flame Body",
        "isHidden": false,
        "label": "Flame Body"
      },
      {
        "name": "Weak Armor",
        "isHidden": true,
        "label": "Weak Armor (HO)"
      }
    ],
    "eggMoves": [
      "Smokescreen",
      "Acid Armor",
      "Curse",
      "Rollout",
      "Stockpile",
      "Memento",
      "Guard Swap",
      "Inferno"
    ]
  },
  {
    "dexNumber": 220,
    "abilities": [
      {
        "name": "Oblivious",
        "isHidden": false,
        "label": "Oblivious"
      },
      {
        "name": "Snow Cloak",
        "isHidden": false,
        "label": "Snow Cloak"
      },
      {
        "name": "Thick Fat",
        "isHidden": true,
        "label": "Thick Fat (HO)"
      }
    ],
    "eggMoves": [
      "Body Slam",
      "Take Down",
      "Bite",
      "Rock Slide",
      "Ancient Power",
      "Double Edge",
      "Icicle Spear",
      "Mud Shot",
      "Fissure",
      "Curse",
      "Avalanche",
      "Stealth Rock",
      "Icicle Crash",
      "Freeze Dry"
    ]
  },
  {
    "dexNumber": 221,
    "abilities": [
      {
        "name": "Oblivious",
        "isHidden": false,
        "label": "Oblivious"
      },
      {
        "name": "Snow Cloak",
        "isHidden": false,
        "label": "Snow Cloak"
      },
      {
        "name": "Thick Fat",
        "isHidden": true,
        "label": "Thick Fat (HO)"
      }
    ],
    "eggMoves": [
      "Double Edge",
      "Bite",
      "Fissure",
      "Curse",
      "Ancient Power",
      "Icicle Crash",
      "Freeze Dry"
    ]
  },
  {
    "dexNumber": 222,
    "abilities": [
      {
        "name": "Hustle",
        "isHidden": false,
        "label": "Hustle"
      },
      {
        "name": "Natural Cure",
        "isHidden": false,
        "label": "Natural Cure"
      },
      {
        "name": "Regenerator",
        "isHidden": true,
        "label": "Regenerator (HO)"
      }
    ],
    "eggMoves": [
      "Mist",
      "Screech",
      "Amnesia",
      "Rock Slide",
      "Safeguard",
      "Confuse Ray",
      "Barrier",
      "Ingrain",
      "Icicle Spear",
      "Nature Power",
      "Aqua Ring",
      "Curse",
      "Bide",
      "Water Pulse",
      "Head Smash",
      "Camouflage",
      "Liquidation"
    ]
  },
  {
    "dexNumber": 223,
    "abilities": [
      {
        "name": "Hustle",
        "isHidden": false,
        "label": "Hustle"
      },
      {
        "name": "Sniper",
        "isHidden": false,
        "label": "Sniper"
      },
      {
        "name": "Moody",
        "isHidden": true,
        "label": "Moody (HO)"
      }
    ],
    "eggMoves": [
      "Supersonic",
      "Aurora Beam",
      "Screech",
      "Haze",
      "Octazooka",
      "Thunder Wave",
      "Rock Blast",
      "Snore",
      "Flail",
      "Water Spout",
      "Swift",
      "Mud Shot",
      "Water Pulse",
      "Acid Spray",
      "Entrainment"
    ]
  },
  {
    "dexNumber": 224,
    "abilities": [
      {
        "name": "Suction Cups",
        "isHidden": false,
        "label": "Suction Cups"
      },
      {
        "name": "Sniper",
        "isHidden": false,
        "label": "Sniper"
      },
      {
        "name": "Moody",
        "isHidden": true,
        "label": "Moody (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 225,
    "abilities": [
      {
        "name": "Vital Spirit",
        "isHidden": false,
        "label": "Vital Spirit"
      },
      {
        "name": "Hustle",
        "isHidden": false,
        "label": "Hustle"
      },
      {
        "name": "Insomnia",
        "isHidden": true,
        "label": "Insomnia (HO)"
      }
    ],
    "eggMoves": [
      "Aurora Beam",
      "Quick Attack",
      "Splash",
      "Rapid Spin",
      "Future Sight",
      "Ice Ball",
      "Ice Punch",
      "Ice Shard",
      "Fake Out",
      "Icy Wind",
      "Bestow",
      "Spikes",
      "Destiny Bond",
      "Freeze Dry",
      "Counter",
      "Memento",
      "Aurora Veil"
    ]
  },
  {
    "dexNumber": 226,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Water Absorb",
        "isHidden": false,
        "label": "Water Absorb"
      },
      {
        "name": "Water Veil",
        "isHidden": true,
        "label": "Water Veil (HO)"
      }
    ],
    "eggMoves": [
      "Slam",
      "Hydro Pump",
      "Haze",
      "Twister",
      "Rock Slide",
      "Mud Sport",
      "Splash",
      "Mirror Coat",
      "Water Sport",
      "Amnesia",
      "Wide Guard",
      "Confuse Ray",
      "Tailwind"
    ]
  },
  {
    "dexNumber": 227,
    "abilities": [
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Weak Armor",
        "isHidden": true,
        "label": "Weak Armor (HO)"
      }
    ],
    "eggMoves": [
      "Whirlwind",
      "Drill Peck",
      "Pursuit",
      "Sky Attack",
      "Curse",
      "Assurance",
      "Brave Bird",
      "Guard Swap",
      "Endure",
      "Stealth Rock",
      "Air Cutter",
      "Roost",
      "Feint",
      "Night Slash"
    ]
  },
  {
    "dexNumber": 228,
    "abilities": [
      {
        "name": "Early Bird",
        "isHidden": false,
        "label": "Early Bird"
      },
      {
        "name": "Flash Fire",
        "isHidden": false,
        "label": "Flash Fire"
      },
      {
        "name": "Unnerve",
        "isHidden": true,
        "label": "Unnerve (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "Fire Spin",
      "Rage",
      "Reversal",
      "Spite",
      "Pursuit",
      "Beat Up",
      "Will O Wisp",
      "Punishment",
      "Nasty Plot",
      "Thunder Fang",
      "Fire Fang",
      "Feint",
      "Sucker Punch",
      "Destiny Bond"
    ]
  },
  {
    "dexNumber": 229,
    "abilities": [
      {
        "name": "Early Bird",
        "isHidden": false,
        "label": "Early Bird"
      },
      {
        "name": "Flash Fire",
        "isHidden": false,
        "label": "Flash Fire"
      },
      {
        "name": "Unnerve",
        "isHidden": true,
        "label": "Unnerve (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 230,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Sniper",
        "isHidden": false,
        "label": "Sniper"
      },
      {
        "name": "Damp",
        "isHidden": true,
        "label": "Damp (HO)"
      }
    ],
    "eggMoves": [
      "Disable",
      "Aurora Beam",
      "Splash",
      "Flail",
      "Clear Smog"
    ]
  },
  {
    "dexNumber": 231,
    "abilities": [
      {
        "name": "Pickup",
        "isHidden": false,
        "label": "Pickup"
      },
      {
        "name": "Sand Veil",
        "isHidden": true,
        "label": "Sand Veil (HO)"
      }
    ],
    "eggMoves": [
      "Body Slam",
      "Focus Energy",
      "Ancient Power",
      "Water Gun",
      "Counter",
      "Fissure",
      "Snore",
      "Endeavor",
      "Ice Shard",
      "Head Smash",
      "Mud Slap",
      "Heavy Slam",
      "Play Rough",
      "High Horsepower"
    ]
  },
  {
    "dexNumber": 232,
    "abilities": [
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Sand Veil",
        "isHidden": true,
        "label": "Sand Veil (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 233,
    "abilities": [
      {
        "name": "Trace",
        "isHidden": false,
        "label": "Trace"
      },
      {
        "name": "Download",
        "isHidden": false,
        "label": "Download"
      },
      {
        "name": "Analytic",
        "isHidden": true,
        "label": "Analytic (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 234,
    "abilities": [
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Frisk",
        "isHidden": false,
        "label": "Frisk"
      },
      {
        "name": "Sap Sipper",
        "isHidden": true,
        "label": "Sap Sipper (HO)"
      }
    ],
    "eggMoves": [
      "Bite",
      "Disable",
      "Light Screen",
      "Reflect",
      "Spite",
      "Swagger",
      "Psych Up",
      "Extrasensory",
      "Double Kick",
      "Thrash",
      "Zen Headbutt",
      "Megahorn",
      "Rage",
      "Mud Sport",
      "Me First",
      "Psyshield Bash"
    ]
  },
  {
    "dexNumber": 235,
    "abilities": [
      {
        "name": "Own Tempo",
        "isHidden": false,
        "label": "Own Tempo"
      },
      {
        "name": "Technician",
        "isHidden": false,
        "label": "Technician"
      },
      {
        "name": "Moody",
        "isHidden": true,
        "label": "Moody (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 236,
    "abilities": [
      {
        "name": "Guts",
        "isHidden": false,
        "label": "Guts"
      },
      {
        "name": "Steadfast",
        "isHidden": false,
        "label": "Steadfast"
      },
      {
        "name": "Vital Spirit",
        "isHidden": true,
        "label": "Vital Spirit (HO)"
      }
    ],
    "eggMoves": [
      "High Jump Kick",
      "Mind Reader",
      "Mach Punch",
      "Rapid Spin",
      "Helping Hand",
      "Counter",
      "Vacuum Wave",
      "Bullet Punch",
      "Endure",
      "Pursuit",
      "Feint",
      "Ally Switch"
    ]
  },
  {
    "dexNumber": 237,
    "abilities": [
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Technician",
        "isHidden": false,
        "label": "Technician"
      },
      {
        "name": "Steadfast",
        "isHidden": true,
        "label": "Steadfast (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "High Jump Kick",
      "Mach Punch",
      "Rapid Spin",
      "Feint",
      "Vacuum Wave",
      "Bullet Punch"
    ]
  },
  {
    "dexNumber": 238,
    "abilities": [
      {
        "name": "Oblivious",
        "isHidden": false,
        "label": "Oblivious"
      },
      {
        "name": "Forewarn",
        "isHidden": false,
        "label": "Forewarn"
      },
      {
        "name": "Hydration",
        "isHidden": true,
        "label": "Hydration (HO)"
      }
    ],
    "eggMoves": [
      "Meditate",
      "Lovely Kiss",
      "Ice Punch",
      "Psych Up",
      "Fake Out",
      "Wish",
      "Miracle Eye",
      "Nasty Plot",
      "Wake Up Slap",
      "Captivate",
      "Role Play"
    ]
  },
  {
    "dexNumber": 239,
    "abilities": [
      {
        "name": "Static",
        "isHidden": false,
        "label": "Static"
      },
      {
        "name": "Vital Spirit",
        "isHidden": true,
        "label": "Vital Spirit (HO)"
      }
    ],
    "eggMoves": [
      "Karate Chop",
      "Rolling Kick",
      "Meditate",
      "Barrier",
      "Cross Chop",
      "Fire Punch",
      "Ice Punch",
      "Dynamic Punch",
      "Feint",
      "Focus Punch",
      "Hammer Arm",
      "Follow Me"
    ]
  },
  {
    "dexNumber": 240,
    "abilities": [
      {
        "name": "Flame Body",
        "isHidden": false,
        "label": "Flame Body"
      },
      {
        "name": "Vital Spirit",
        "isHidden": true,
        "label": "Vital Spirit (HO)"
      }
    ],
    "eggMoves": [
      "Karate Chop",
      "Mega Punch",
      "Screech",
      "Barrier",
      "Cross Chop",
      "Thunder Punch",
      "Mach Punch",
      "Dynamic Punch",
      "Flare Blitz",
      "Belly Drum",
      "Focus Energy",
      "Iron Tail",
      "Power Swap",
      "Belch",
      "Focus Punch",
      "Follow Me"
    ]
  },
  {
    "dexNumber": 241,
    "abilities": [
      {
        "name": "Thick Fat",
        "isHidden": false,
        "label": "Thick Fat"
      },
      {
        "name": "Scrappy",
        "isHidden": false,
        "label": "Scrappy"
      },
      {
        "name": "Sap Sipper",
        "isHidden": true,
        "label": "Sap Sipper (HO)"
      }
    ],
    "eggMoves": [
      "Seismic Toss",
      "Reversal",
      "Present",
      "Curse",
      "Endure",
      "Sleep Talk",
      "Psych Up",
      "Helping Hand",
      "Double Edge",
      "Dizzy Punch",
      "Hammer Arm",
      "Punishment",
      "Natural Gift",
      "Heart Stamp",
      "Belch",
      "Focus Punch"
    ]
  },
  {
    "dexNumber": 242,
    "abilities": [
      {
        "name": "Natural Cure",
        "isHidden": false,
        "label": "Natural Cure"
      },
      {
        "name": "Serene Grace",
        "isHidden": false,
        "label": "Serene Grace"
      },
      {
        "name": "Healer",
        "isHidden": true,
        "label": "Healer (HO)"
      }
    ],
    "eggMoves": [
      "Seismic Toss",
      "Heal Bell",
      "Present",
      "Gravity"
    ]
  },
  {
    "dexNumber": 243,
    "abilities": [
      {
        "name": "Pressure",
        "isHidden": false,
        "label": "Pressure"
      },
      {
        "name": "Inner Focus",
        "isHidden": true,
        "label": "Inner Focus (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 244,
    "abilities": [
      {
        "name": "Pressure",
        "isHidden": false,
        "label": "Pressure"
      },
      {
        "name": "Inner Focus",
        "isHidden": true,
        "label": "Inner Focus (HO)"
      }
    ],
    "eggMoves": [
      "Sacred Fire",
      "Extreme Speed"
    ]
  },
  {
    "dexNumber": 245,
    "abilities": [
      {
        "name": "Pressure",
        "isHidden": false,
        "label": "Pressure"
      },
      {
        "name": "Inner Focus",
        "isHidden": true,
        "label": "Inner Focus (HO)"
      }
    ],
    "eggMoves": [
      "Extreme Speed",
      "Sheer Cold"
    ]
  },
  {
    "dexNumber": 246,
    "abilities": [
      {
        "name": "Guts",
        "isHidden": false,
        "label": "Guts"
      },
      {
        "name": "Sand Veil",
        "isHidden": true,
        "label": "Sand Veil (HO)"
      }
    ],
    "eggMoves": [
      "Stomp",
      "Focus Energy",
      "Outrage",
      "Pursuit",
      "Ancient Power",
      "Curse",
      "Dragon Dance",
      "Iron Defense",
      "Assurance",
      "Iron Head",
      "Iron Tail",
      "Stealth Rock"
    ]
  },
  {
    "dexNumber": 247,
    "abilities": [
      {
        "name": "Shed Skin",
        "isHidden": false,
        "label": "Shed Skin"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 248,
    "abilities": [
      {
        "name": "Sand Stream",
        "isHidden": false,
        "label": "Sand Stream"
      },
      {
        "name": "Unnerve",
        "isHidden": true,
        "label": "Unnerve (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 249,
    "abilities": [
      {
        "name": "Pressure",
        "isHidden": false,
        "label": "Pressure"
      },
      {
        "name": "Multiscale",
        "isHidden": true,
        "label": "Multiscale (HO)"
      }
    ],
    "eggMoves": [
      "Dragon Rush"
    ]
  },
  {
    "dexNumber": 250,
    "abilities": [
      {
        "name": "Pressure",
        "isHidden": false,
        "label": "Pressure"
      },
      {
        "name": "Regenerator",
        "isHidden": true,
        "label": "Regenerator (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 251,
    "abilities": [
      {
        "name": "Natural Cure",
        "isHidden": false,
        "label": "Natural Cure"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 252,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Unburden",
        "isHidden": true,
        "label": "Unburden (HO)"
      }
    ],
    "eggMoves": [
      "Leech Seed",
      "Dragon Breath",
      "Crunch",
      "Endeavor",
      "Mud Sport",
      "Crush Claw",
      "Double Kick",
      "Synthesis",
      "Grass Whistle",
      "Magical Leaf",
      "Worry Seed",
      "Leaf Storm",
      "Razor Wind",
      "Bullet Seed",
      "Natural Gift",
      "Grassy Terrain",
      "Absorb",
      "Slash",
      "Night Slash"
    ]
  },
  {
    "dexNumber": 253,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Unburden",
        "isHidden": true,
        "label": "Unburden (HO)"
      }
    ],
    "eggMoves": [
      "Double Kick",
      "Absorb",
      "Leech Seed",
      "Slash",
      "False Swipe",
      "Fury Cutter",
      "Dragon Breath",
      "Synthesis",
      "Worry Seed",
      "Night Slash",
      "X Scissor",
      "Energy Ball"
    ]
  },
  {
    "dexNumber": 254,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Unburden",
        "isHidden": true,
        "label": "Unburden (HO)"
      }
    ],
    "eggMoves": [
      "Double Kick",
      "Absorb",
      "Leech Seed",
      "Slash",
      "False Swipe",
      "Fury Cutter",
      "Dragon Breath",
      "Synthesis",
      "Worry Seed",
      "Night Slash",
      "X Scissor",
      "Energy Ball",
      "Shed Tail"
    ]
  },
  {
    "dexNumber": 255,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Speed Boost",
        "isHidden": true,
        "label": "Speed Boost (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "Rock Slide",
      "Reversal",
      "Endure",
      "Swagger",
      "Smelling Salts",
      "Agility",
      "Baton Pass",
      "Crush Claw",
      "Feint",
      "Last Resort",
      "Night Slash",
      "Feather Dance",
      "Low Kick",
      "Curse",
      "Flame Burst",
      "Peck"
    ]
  },
  {
    "dexNumber": 256,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Speed Boost",
        "isHidden": true,
        "label": "Speed Boost (HO)"
      }
    ],
    "eggMoves": [
      "Flamethrower",
      "Peck",
      "Counter",
      "Feather Dance",
      "Crush Claw",
      "Feint",
      "Last Resort",
      "Night Slash"
    ]
  },
  {
    "dexNumber": 257,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Speed Boost",
        "isHidden": true,
        "label": "Speed Boost (HO)"
      }
    ],
    "eggMoves": [
      "Fire Punch",
      "Ember",
      "Flamethrower",
      "Peck",
      "Counter",
      "Feather Dance",
      "Crush Claw",
      "Feint",
      "Last Resort",
      "Night Slash"
    ]
  },
  {
    "dexNumber": 258,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Damp",
        "isHidden": true,
        "label": "Damp (HO)"
      }
    ],
    "eggMoves": [
      "Stomp",
      "Curse",
      "Mirror Coat",
      "Uproar",
      "Refresh",
      "Ice Ball",
      "Double Edge",
      "Bite",
      "Counter",
      "Ancient Power",
      "Whirlpool",
      "Mud Bomb",
      "Sludge",
      "Yawn",
      "Avalanche",
      "Wide Guard",
      "Barrier",
      "Mud Slap"
    ]
  },
  {
    "dexNumber": 259,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Damp",
        "isHidden": true,
        "label": "Damp (HO)"
      }
    ],
    "eggMoves": [
      "Stomp",
      "Double Edge",
      "Bite",
      "Counter",
      "Sludge",
      "Curse",
      "Mud Slap",
      "Mirror Coat",
      "Ancient Power",
      "Rock Smash",
      "Yawn",
      "Wide Guard"
    ]
  },
  {
    "dexNumber": 260,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Damp",
        "isHidden": true,
        "label": "Damp (HO)"
      }
    ],
    "eggMoves": [
      "Stomp",
      "Double Edge",
      "Bite",
      "Surf",
      "Counter",
      "Earthquake",
      "Sludge",
      "Curse",
      "Mud Slap",
      "Mirror Coat",
      "Ancient Power",
      "Rock Smash",
      "Yawn",
      "Hammer Arm",
      "Wide Guard"
    ]
  },
  {
    "dexNumber": 261,
    "abilities": [
      {
        "name": "Run Away",
        "isHidden": false,
        "label": "Run Away"
      },
      {
        "name": "Quick Feet",
        "isHidden": false,
        "label": "Quick Feet"
      },
      {
        "name": "Rattled",
        "isHidden": true,
        "label": "Rattled (HO)"
      }
    ],
    "eggMoves": [
      "Leer",
      "Yawn",
      "Poison Fang",
      "Astonish",
      "Covet",
      "Me First",
      "Sucker Punch",
      "Thunder Fang",
      "Ice Fang",
      "Fire Fang",
      "Sleep Talk",
      "Snatch",
      "Play Rough"
    ]
  },
  {
    "dexNumber": 262,
    "abilities": [
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Quick Feet",
        "isHidden": false,
        "label": "Quick Feet"
      },
      {
        "name": "Moxie",
        "isHidden": true,
        "label": "Moxie (HO)"
      }
    ],
    "eggMoves": [
      "Poison Fang",
      "Astonish",
      "Covet"
    ]
  },
  {
    "dexNumber": 263,
    "abilities": [
      {
        "name": "Pickup",
        "isHidden": false,
        "label": "Pickup"
      },
      {
        "name": "Gluttony",
        "isHidden": false,
        "label": "Gluttony"
      },
      {
        "name": "Quick Feet",
        "isHidden": true,
        "label": "Quick Feet (HO)"
      }
    ],
    "eggMoves": [
      "Substitute",
      "Charm",
      "Pursuit",
      "Trick",
      "Tickle",
      "Mud Slap",
      "Helping Hand",
      "Sleep Talk",
      "Rock Climb",
      "Simple Beam",
      "Extreme Speed"
    ]
  },
  {
    "dexNumber": 264,
    "abilities": [
      {
        "name": "Pickup",
        "isHidden": false,
        "label": "Pickup"
      },
      {
        "name": "Gluttony",
        "isHidden": false,
        "label": "Gluttony"
      },
      {
        "name": "Quick Feet",
        "isHidden": true,
        "label": "Quick Feet (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 265,
    "abilities": [
      {
        "name": "Shield Dust",
        "isHidden": false,
        "label": "Shield Dust"
      },
      {
        "name": "Run Away",
        "isHidden": true,
        "label": "Run Away (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 266,
    "abilities": [
      {
        "name": "Shed Skin",
        "isHidden": false,
        "label": "Shed Skin"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 267,
    "abilities": [
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      },
      {
        "name": "Rivalry",
        "isHidden": true,
        "label": "Rivalry (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 268,
    "abilities": [
      {
        "name": "Shed Skin",
        "isHidden": false,
        "label": "Shed Skin"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 269,
    "abilities": [
      {
        "name": "Shield Dust",
        "isHidden": false,
        "label": "Shield Dust"
      },
      {
        "name": "Compound Eyes",
        "isHidden": true,
        "label": "Compound Eyes (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 270,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Rain Dish",
        "isHidden": false,
        "label": "Rain Dish"
      },
      {
        "name": "Own Tempo",
        "isHidden": true,
        "label": "Own Tempo (HO)"
      }
    ],
    "eggMoves": [
      "Water Gun",
      "Leech Seed",
      "Razor Leaf",
      "Flail",
      "Sweet Scent",
      "Synthesis",
      "Tickle",
      "Counter",
      "Giga Drain",
      "Teeter Dance"
    ]
  },
  {
    "dexNumber": 271,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Rain Dish",
        "isHidden": false,
        "label": "Rain Dish"
      },
      {
        "name": "Own Tempo",
        "isHidden": true,
        "label": "Own Tempo (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "Razor Leaf",
      "Sweet Scent",
      "Synthesis",
      "Teeter Dance",
      "Tickle"
    ]
  },
  {
    "dexNumber": 272,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Rain Dish",
        "isHidden": false,
        "label": "Rain Dish"
      },
      {
        "name": "Own Tempo",
        "isHidden": true,
        "label": "Own Tempo (HO)"
      }
    ],
    "eggMoves": [
      "Growl",
      "Mist",
      "Water Gun",
      "Hydro Pump",
      "Counter",
      "Absorb",
      "Mega Drain",
      "Razor Leaf",
      "Fury Swipes",
      "Flail",
      "Sweet Scent",
      "Synthesis",
      "Knock Off",
      "Teeter Dance",
      "Astonish",
      "Tickle",
      "Energy Ball",
      "Zen Headbutt"
    ]
  },
  {
    "dexNumber": 273,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Early Bird",
        "isHidden": false,
        "label": "Early Bird"
      },
      {
        "name": "Pickpocket",
        "isHidden": true,
        "label": "Pickpocket (HO)"
      }
    ],
    "eggMoves": [
      "Razor Wind",
      "Take Down",
      "Leech Seed",
      "Quick Attack",
      "Amnesia",
      "False Swipe",
      "Worry Seed",
      "Nasty Plot",
      "Power Swap",
      "Beat Up",
      "Bullet Seed",
      "Defog",
      "Foul Play",
      "Grassy Terrain",
      "Night Slash"
    ]
  },
  {
    "dexNumber": 274,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Early Bird",
        "isHidden": false,
        "label": "Early Bird"
      },
      {
        "name": "Pickpocket",
        "isHidden": true,
        "label": "Pickpocket (HO)"
      }
    ],
    "eggMoves": [
      "Take Down",
      "Leech Seed",
      "Quick Attack",
      "Worry Seed",
      "Night Slash",
      "Defog"
    ]
  },
  {
    "dexNumber": 275,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Wind Rider",
        "isHidden": false,
        "label": "Wind Rider"
      },
      {
        "name": "Pickpocket",
        "isHidden": true,
        "label": "Pickpocket (HO)"
      }
    ],
    "eggMoves": [
      "Whirlwind",
      "Tackle",
      "Take Down",
      "Absorb",
      "Mega Drain",
      "Leech Seed",
      "Growth",
      "Razor Leaf",
      "Quick Attack",
      "Harden",
      "Explosion",
      "Rollout",
      "Swagger",
      "Synthesis",
      "Beat Up",
      "Fake Out",
      "Torment",
      "Astonish",
      "Extrasensory",
      "Worry Seed",
      "Sucker Punch",
      "Night Slash",
      "Defog"
    ]
  },
  {
    "dexNumber": 276,
    "abilities": [
      {
        "name": "Guts",
        "isHidden": false,
        "label": "Guts"
      },
      {
        "name": "Scrappy",
        "isHidden": true,
        "label": "Scrappy (HO)"
      }
    ],
    "eggMoves": [
      "Supersonic",
      "Rage",
      "Mirror Move",
      "Sky Attack",
      "Pursuit",
      "Refresh",
      "Whirlwind",
      "Brave Bird",
      "Steel Wing",
      "Roost",
      "Defog",
      "Boomburst",
      "Hurricane"
    ]
  },
  {
    "dexNumber": 277,
    "abilities": [
      {
        "name": "Guts",
        "isHidden": false,
        "label": "Guts"
      },
      {
        "name": "Scrappy",
        "isHidden": true,
        "label": "Scrappy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 278,
    "abilities": [
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Hydration",
        "isHidden": false,
        "label": "Hydration"
      },
      {
        "name": "Rain Dish",
        "isHidden": true,
        "label": "Rain Dish (HO)"
      }
    ],
    "eggMoves": [
      "Gust",
      "Mist",
      "Agility",
      "Twister",
      "Water Sport",
      "Knock Off",
      "Aqua Ring",
      "Roost",
      "Brine",
      "Wide Guard",
      "Soak",
      "Air Cutter",
      "Aerial Ace"
    ]
  },
  {
    "dexNumber": 279,
    "abilities": [
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Drizzle",
        "isHidden": false,
        "label": "Drizzle"
      },
      {
        "name": "Rain Dish",
        "isHidden": true,
        "label": "Rain Dish (HO)"
      }
    ],
    "eggMoves": [
      "Wide Guard"
    ]
  },
  {
    "dexNumber": 280,
    "abilities": [
      {
        "name": "Synchronize",
        "isHidden": false,
        "label": "Synchronize"
      },
      {
        "name": "Trace",
        "isHidden": false,
        "label": "Trace"
      },
      {
        "name": "Telepathy",
        "isHidden": true,
        "label": "Telepathy (HO)"
      }
    ],
    "eggMoves": [
      "Disable",
      "Destiny Bond",
      "Mean Look",
      "Will O Wisp",
      "Memento",
      "Confuse Ray",
      "Grudge",
      "Shadow Sneak",
      "Encore",
      "Skill Swap",
      "Synchronoise",
      "Ally Switch",
      "Misty Terrain",
      "Knock Off",
      "Mystical Fire"
    ]
  },
  {
    "dexNumber": 281,
    "abilities": [
      {
        "name": "Synchronize",
        "isHidden": false,
        "label": "Synchronize"
      },
      {
        "name": "Trace",
        "isHidden": false,
        "label": "Trace"
      },
      {
        "name": "Telepathy",
        "isHidden": true,
        "label": "Telepathy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 282,
    "abilities": [
      {
        "name": "Synchronize",
        "isHidden": false,
        "label": "Synchronize"
      },
      {
        "name": "Trace",
        "isHidden": false,
        "label": "Trace"
      },
      {
        "name": "Telepathy",
        "isHidden": true,
        "label": "Telepathy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 283,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Rain Dish",
        "isHidden": true,
        "label": "Rain Dish (HO)"
      }
    ],
    "eggMoves": [
      "Hydro Pump",
      "Psybeam",
      "Mind Reader",
      "Foresight",
      "Mud Shot",
      "Signal Beam",
      "Bug Bite",
      "Endure",
      "Aqua Jet",
      "Power Split",
      "Fell Stinger",
      "Lunge"
    ]
  },
  {
    "dexNumber": 284,
    "abilities": [
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Unnerve",
        "isHidden": true,
        "label": "Unnerve (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 285,
    "abilities": [
      {
        "name": "Effect Spore",
        "isHidden": false,
        "label": "Effect Spore"
      },
      {
        "name": "Poison Heal",
        "isHidden": false,
        "label": "Poison Heal"
      },
      {
        "name": "Quick Feet",
        "isHidden": true,
        "label": "Quick Feet (HO)"
      }
    ],
    "eggMoves": [
      "Charm",
      "False Swipe",
      "Swagger",
      "Helping Hand",
      "Fake Tears",
      "Wake Up Slap",
      "Worry Seed",
      "Seed Bomb",
      "Focus Punch",
      "Bullet Seed",
      "Natural Gift",
      "Drain Punch"
    ]
  },
  {
    "dexNumber": 286,
    "abilities": [
      {
        "name": "Effect Spore",
        "isHidden": false,
        "label": "Effect Spore"
      },
      {
        "name": "Poison Heal",
        "isHidden": false,
        "label": "Poison Heal"
      },
      {
        "name": "Technician",
        "isHidden": true,
        "label": "Technician (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 287,
    "abilities": [
      {
        "name": "Truant",
        "isHidden": false,
        "label": "Truant"
      }
    ],
    "eggMoves": [
      "Body Slam",
      "Slash",
      "Snore",
      "Curse",
      "Sleep Talk",
      "Pursuit",
      "Crush Claw",
      "Hammer Arm",
      "Night Slash",
      "Tickle",
      "After You"
    ]
  },
  {
    "dexNumber": 288,
    "abilities": [
      {
        "name": "Vital Spirit",
        "isHidden": false,
        "label": "Vital Spirit"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 289,
    "abilities": [
      {
        "name": "Truant",
        "isHidden": false,
        "label": "Truant"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 290,
    "abilities": [
      {
        "name": "Compound Eyes",
        "isHidden": false,
        "label": "Compound Eyes"
      },
      {
        "name": "Run Away",
        "isHidden": true,
        "label": "Run Away (HO)"
      }
    ],
    "eggMoves": [
      "Gust",
      "Feint Attack",
      "Endure",
      "Silver Wind",
      "Night Slash",
      "Bug Buzz",
      "Bug Bite",
      "Final Gambit",
      "Flail"
    ]
  },
  {
    "dexNumber": 291,
    "abilities": [
      {
        "name": "Speed Boost",
        "isHidden": false,
        "label": "Speed Boost"
      },
      {
        "name": "Infiltrator",
        "isHidden": true,
        "label": "Infiltrator (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 292,
    "abilities": [
      {
        "name": "Wonder Guard",
        "isHidden": false,
        "label": "Wonder Guard"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 293,
    "abilities": [
      {
        "name": "Soundproof",
        "isHidden": false,
        "label": "Soundproof"
      },
      {
        "name": "Rattled",
        "isHidden": true,
        "label": "Rattled (HO)"
      }
    ],
    "eggMoves": [
      "Take Down",
      "Snore",
      "Swagger",
      "Smelling Salts",
      "Extrasensory",
      "Smokescreen",
      "Endeavor",
      "Hammer Arm",
      "Fake Tears",
      "Circle Throw",
      "Disarming Voice",
      "Whirlwind"
    ]
  },
  {
    "dexNumber": 294,
    "abilities": [
      {
        "name": "Soundproof",
        "isHidden": false,
        "label": "Soundproof"
      },
      {
        "name": "Scrappy",
        "isHidden": true,
        "label": "Scrappy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 295,
    "abilities": [
      {
        "name": "Soundproof",
        "isHidden": false,
        "label": "Soundproof"
      },
      {
        "name": "Scrappy",
        "isHidden": true,
        "label": "Scrappy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 296,
    "abilities": [
      {
        "name": "Thick Fat",
        "isHidden": false,
        "label": "Thick Fat"
      },
      {
        "name": "Guts",
        "isHidden": false,
        "label": "Guts"
      },
      {
        "name": "Sheer Force",
        "isHidden": true,
        "label": "Sheer Force (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "Feint Attack",
      "Foresight",
      "Detect",
      "Dynamic Punch",
      "Cross Chop",
      "Helping Hand",
      "Revenge",
      "Wake Up Slap",
      "Bullet Punch",
      "Feint",
      "Focus Punch",
      "Wide Guard",
      "Chip Away"
    ]
  },
  {
    "dexNumber": 297,
    "abilities": [
      {
        "name": "Thick Fat",
        "isHidden": false,
        "label": "Thick Fat"
      },
      {
        "name": "Guts",
        "isHidden": false,
        "label": "Guts"
      },
      {
        "name": "Sheer Force",
        "isHidden": true,
        "label": "Sheer Force (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 298,
    "abilities": [
      {
        "name": "Thick Fat",
        "isHidden": false,
        "label": "Thick Fat"
      },
      {
        "name": "Huge Power",
        "isHidden": false,
        "label": "Huge Power"
      },
      {
        "name": "Sap Sipper",
        "isHidden": true,
        "label": "Sap Sipper (HO)"
      }
    ],
    "eggMoves": [
      "Slam",
      "Sing",
      "Encore",
      "Refresh",
      "Tickle",
      "Fake Tears",
      "Body Slam",
      "Muddy Water",
      "Water Sport",
      "Soak",
      "Camouflage",
      "Copycat",
      "Supersonic",
      "Belly Drum",
      "Perish Song",
      "Present",
      "Aqua Jet"
    ]
  },
  {
    "dexNumber": 299,
    "abilities": [
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Magnet Pull",
        "isHidden": false,
        "label": "Magnet Pull"
      },
      {
        "name": "Sand Force",
        "isHidden": true,
        "label": "Sand Force (HO)"
      }
    ],
    "eggMoves": [
      "Explosion",
      "Rollout",
      "Magnitude",
      "Double Edge",
      "Block",
      "Head Smash",
      "Endure",
      "Stealth Rock",
      "Wide Guard"
    ]
  },
  {
    "dexNumber": 300,
    "abilities": [
      {
        "name": "Cute Charm",
        "isHidden": false,
        "label": "Cute Charm"
      },
      {
        "name": "Normalize",
        "isHidden": false,
        "label": "Normalize"
      },
      {
        "name": "Wonder Skin",
        "isHidden": true,
        "label": "Wonder Skin (HO)"
      }
    ],
    "eggMoves": [
      "Substitute",
      "Baton Pass",
      "Psych Up",
      "Uproar",
      "Helping Hand",
      "Wish",
      "Fake Tears",
      "Tickle",
      "Fake Out",
      "Last Resort",
      "Sucker Punch",
      "Zen Headbutt",
      "Mud Bomb",
      "Captivate",
      "Simple Beam",
      "Cosmic Power"
    ]
  },
  {
    "dexNumber": 301,
    "abilities": [
      {
        "name": "Cute Charm",
        "isHidden": false,
        "label": "Cute Charm"
      },
      {
        "name": "Normalize",
        "isHidden": false,
        "label": "Normalize"
      },
      {
        "name": "Wonder Skin",
        "isHidden": true,
        "label": "Wonder Skin (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 302,
    "abilities": [
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Stall",
        "isHidden": false,
        "label": "Stall"
      },
      {
        "name": "Prankster",
        "isHidden": true,
        "label": "Prankster (HO)"
      }
    ],
    "eggMoves": [
      "Recover",
      "Moonlight",
      "Psych Up",
      "Flatter",
      "Nasty Plot",
      "Feint",
      "Mean Look",
      "Trick",
      "Metal Burst",
      "Sucker Punch",
      "Captivate",
      "Imprison",
      "Torment"
    ]
  },
  {
    "dexNumber": 303,
    "abilities": [
      {
        "name": "Hyper Cutter",
        "isHidden": false,
        "label": "Hyper Cutter"
      },
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Sheer Force",
        "isHidden": true,
        "label": "Sheer Force (HO)"
      }
    ],
    "eggMoves": [
      "Swords Dance",
      "False Swipe",
      "Psych Up",
      "Ancient Power",
      "Poison Fang",
      "Tickle",
      "Punishment",
      "Sucker Punch",
      "Thunder Fang",
      "Ice Fang",
      "Fire Fang",
      "Guard Swap",
      "Slam",
      "Metal Burst",
      "Captivate",
      "Seismic Toss",
      "Misty Terrain",
      "Power Up Punch"
    ]
  },
  {
    "dexNumber": 304,
    "abilities": [
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Rock Head",
        "isHidden": false,
        "label": "Rock Head"
      },
      {
        "name": "Heavy Metal",
        "isHidden": true,
        "label": "Heavy Metal (HO)"
      }
    ],
    "eggMoves": [
      "Stomp",
      "Body Slam",
      "Smelling Salts",
      "Endeavor",
      "Screech",
      "Curse",
      "Dragon Rush",
      "Iron Head",
      "Head Smash",
      "Superpower",
      "Stealth Rock",
      "Reversal",
      "Mud Slap"
    ]
  },
  {
    "dexNumber": 305,
    "abilities": [
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Rock Head",
        "isHidden": false,
        "label": "Rock Head"
      },
      {
        "name": "Heavy Metal",
        "isHidden": true,
        "label": "Heavy Metal (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 306,
    "abilities": [
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Rock Head",
        "isHidden": false,
        "label": "Rock Head"
      },
      {
        "name": "Heavy Metal",
        "isHidden": true,
        "label": "Heavy Metal (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 307,
    "abilities": [
      {
        "name": "Pure Power",
        "isHidden": false,
        "label": "Pure Power"
      },
      {
        "name": "Telepathy",
        "isHidden": true,
        "label": "Telepathy (HO)"
      }
    ],
    "eggMoves": [
      "Fire Punch",
      "Ice Punch",
      "Thunder Punch",
      "Foresight",
      "Dynamic Punch",
      "Baton Pass",
      "Fake Out",
      "Power Swap",
      "Guard Swap",
      "Bullet Punch",
      "Psycho Cut",
      "Secret Power",
      "Drain Punch",
      "Quick Guard"
    ]
  },
  {
    "dexNumber": 308,
    "abilities": [
      {
        "name": "Pure Power",
        "isHidden": false,
        "label": "Pure Power"
      },
      {
        "name": "Telepathy",
        "isHidden": true,
        "label": "Telepathy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 309,
    "abilities": [
      {
        "name": "Static",
        "isHidden": false,
        "label": "Static"
      },
      {
        "name": "Lightning Rod",
        "isHidden": false,
        "label": "Lightning Rod"
      },
      {
        "name": "Minus",
        "isHidden": true,
        "label": "Minus (HO)"
      }
    ],
    "eggMoves": [
      "Headbutt",
      "Swift",
      "Curse",
      "Crunch",
      "Uproar",
      "Thunder Fang",
      "Ice Fang",
      "Fire Fang",
      "Discharge",
      "Switcheroo",
      "Shock Wave",
      "Flame Burst",
      "Electro Ball",
      "Eerie Impulse",
      "Spark"
    ]
  },
  {
    "dexNumber": 310,
    "abilities": [
      {
        "name": "Static",
        "isHidden": false,
        "label": "Static"
      },
      {
        "name": "Lightning Rod",
        "isHidden": false,
        "label": "Lightning Rod"
      },
      {
        "name": "Minus",
        "isHidden": true,
        "label": "Minus (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 311,
    "abilities": [
      {
        "name": "Plus",
        "isHidden": false,
        "label": "Plus"
      },
      {
        "name": "Lightning Rod",
        "isHidden": true,
        "label": "Lightning Rod (HO)"
      }
    ],
    "eggMoves": [
      "Substitute",
      "Wish",
      "Sing",
      "Sweet Kiss",
      "Discharge",
      "Lucky Chant",
      "Charm",
      "Fake Tears",
      "Tearful Look",
      "Nuzzle"
    ]
  },
  {
    "dexNumber": 312,
    "abilities": [
      {
        "name": "Minus",
        "isHidden": false,
        "label": "Minus"
      },
      {
        "name": "Volt Absorb",
        "isHidden": true,
        "label": "Volt Absorb (HO)"
      }
    ],
    "eggMoves": [
      "Substitute",
      "Wish",
      "Sing",
      "Sweet Kiss",
      "Discharge",
      "Lucky Chant",
      "Charm",
      "Fake Tears",
      "Tearful Look",
      "Nuzzle"
    ]
  },
  {
    "dexNumber": 313,
    "abilities": [
      {
        "name": "Illuminate",
        "isHidden": false,
        "label": "Illuminate"
      },
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      },
      {
        "name": "Prankster",
        "isHidden": true,
        "label": "Prankster (HO)"
      }
    ],
    "eggMoves": [
      "Baton Pass",
      "Trick",
      "Silver Wind",
      "Encore",
      "Bug Buzz",
      "Seismic Toss",
      "Dizzy Punch",
      "Lunge",
      "Counter",
      "Swagger",
      "Roost"
    ]
  },
  {
    "dexNumber": 314,
    "abilities": [
      {
        "name": "Oblivious",
        "isHidden": false,
        "label": "Oblivious"
      },
      {
        "name": "Tinted Lens",
        "isHidden": false,
        "label": "Tinted Lens"
      },
      {
        "name": "Prankster",
        "isHidden": true,
        "label": "Prankster (HO)"
      }
    ],
    "eggMoves": [
      "Growth",
      "Baton Pass",
      "Silver Wind",
      "Encore",
      "Bug Buzz",
      "Confuse Ray",
      "Fake Tears",
      "Captivate",
      "Aromatherapy",
      "Attract",
      "Roost"
    ]
  },
  {
    "dexNumber": 315,
    "abilities": [
      {
        "name": "Natural Cure",
        "isHidden": false,
        "label": "Natural Cure"
      },
      {
        "name": "Poison Point",
        "isHidden": false,
        "label": "Poison Point"
      },
      {
        "name": "Leaf Guard",
        "isHidden": true,
        "label": "Leaf Guard (HO)"
      }
    ],
    "eggMoves": [
      "Pin Missile",
      "Cotton Spore",
      "Spikes",
      "Synthesis",
      "Razor Leaf",
      "Sleep Powder",
      "Mind Reader",
      "Leaf Storm",
      "Giga Drain",
      "Grass Whistle",
      "Natural Gift",
      "Seed Bomb",
      "Bullet Seed",
      "Power Whip",
      "Extrasensory",
      "Life Dew"
    ]
  },
  {
    "dexNumber": 316,
    "abilities": [
      {
        "name": "Liquid Ooze",
        "isHidden": false,
        "label": "Liquid Ooze"
      },
      {
        "name": "Sticky Hold",
        "isHidden": false,
        "label": "Sticky Hold"
      },
      {
        "name": "Gluttony",
        "isHidden": true,
        "label": "Gluttony (HO)"
      }
    ],
    "eggMoves": [
      "Smog",
      "Dream Eater",
      "Acid Armor",
      "Pain Split",
      "Curse",
      "Destiny Bond",
      "Mud Slap",
      "Gunk Shot",
      "Venom Drench",
      "Clear Smog",
      "Stuff Cheeks"
    ]
  },
  {
    "dexNumber": 317,
    "abilities": [
      {
        "name": "Liquid Ooze",
        "isHidden": false,
        "label": "Liquid Ooze"
      },
      {
        "name": "Sticky Hold",
        "isHidden": false,
        "label": "Sticky Hold"
      },
      {
        "name": "Gluttony",
        "isHidden": true,
        "label": "Gluttony (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 318,
    "abilities": [
      {
        "name": "Rough Skin",
        "isHidden": false,
        "label": "Rough Skin"
      },
      {
        "name": "Speed Boost",
        "isHidden": true,
        "label": "Speed Boost (HO)"
      }
    ],
    "eggMoves": [
      "Thrash",
      "Double Edge",
      "Hydro Pump",
      "Ancient Power",
      "Swift",
      "Brine",
      "Destiny Bond",
      "Psychic Fangs",
      "Water Pulse"
    ]
  },
  {
    "dexNumber": 319,
    "abilities": [
      {
        "name": "Rough Skin",
        "isHidden": false,
        "label": "Rough Skin"
      },
      {
        "name": "Speed Boost",
        "isHidden": true,
        "label": "Speed Boost (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 320,
    "abilities": [
      {
        "name": "Water Veil",
        "isHidden": false,
        "label": "Water Veil"
      },
      {
        "name": "Oblivious",
        "isHidden": false,
        "label": "Oblivious"
      },
      {
        "name": "Pressure",
        "isHidden": true,
        "label": "Pressure (HO)"
      }
    ],
    "eggMoves": [
      "Thrash",
      "Double Edge",
      "Fissure",
      "Snore",
      "Curse",
      "Swagger",
      "Sleep Talk",
      "Tickle",
      "Body Slam",
      "Defense Curl",
      "Aqua Ring",
      "Zen Headbutt",
      "Soak",
      "Clear Smog",
      "Rollout"
    ]
  },
  {
    "dexNumber": 321,
    "abilities": [
      {
        "name": "Water Veil",
        "isHidden": false,
        "label": "Water Veil"
      },
      {
        "name": "Oblivious",
        "isHidden": false,
        "label": "Oblivious"
      },
      {
        "name": "Pressure",
        "isHidden": true,
        "label": "Pressure (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 322,
    "abilities": [
      {
        "name": "Oblivious",
        "isHidden": false,
        "label": "Oblivious"
      },
      {
        "name": "Simple",
        "isHidden": false,
        "label": "Simple"
      },
      {
        "name": "Own Tempo",
        "isHidden": true,
        "label": "Own Tempo (HO)"
      }
    ],
    "eggMoves": [
      "Stomp",
      "Body Slam",
      "Defense Curl",
      "Scary Face",
      "Rollout",
      "Howl",
      "Ancient Power",
      "Heat Wave",
      "Yawn",
      "Mud Bomb",
      "Stockpile",
      "Spit Up",
      "Swallow",
      "Endure",
      "Iron Head",
      "Growth",
      "Heavy Slam"
    ]
  },
  {
    "dexNumber": 323,
    "abilities": [
      {
        "name": "Magma Armor",
        "isHidden": false,
        "label": "Magma Armor"
      },
      {
        "name": "Solid Rock",
        "isHidden": false,
        "label": "Solid Rock"
      },
      {
        "name": "Anger Point",
        "isHidden": true,
        "label": "Anger Point (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 324,
    "abilities": [
      {
        "name": "White Smoke",
        "isHidden": false,
        "label": "White Smoke"
      },
      {
        "name": "Drought",
        "isHidden": false,
        "label": "Drought"
      },
      {
        "name": "Shell Armor",
        "isHidden": true,
        "label": "Shell Armor (HO)"
      }
    ],
    "eggMoves": [
      "Endure",
      "Sleep Talk",
      "Yawn",
      "Eruption",
      "Earthquake",
      "Fissure",
      "Skull Bash",
      "Flame Burst",
      "Clear Smog",
      "Superpower",
      "Flail",
      "Ancient Power"
    ]
  },
  {
    "dexNumber": 325,
    "abilities": [
      {
        "name": "Thick Fat",
        "isHidden": false,
        "label": "Thick Fat"
      },
      {
        "name": "Own Tempo",
        "isHidden": false,
        "label": "Own Tempo"
      },
      {
        "name": "Gluttony",
        "isHidden": true,
        "label": "Gluttony (HO)"
      }
    ],
    "eggMoves": [
      "Substitute",
      "Future Sight",
      "Trick",
      "Extrasensory",
      "Amnesia",
      "Mirror Coat",
      "Zen Headbutt",
      "Whirlwind",
      "Endure",
      "Skill Swap",
      "Lucky Chant",
      "Simple Beam"
    ]
  },
  {
    "dexNumber": 326,
    "abilities": [
      {
        "name": "Thick Fat",
        "isHidden": false,
        "label": "Thick Fat"
      },
      {
        "name": "Own Tempo",
        "isHidden": false,
        "label": "Own Tempo"
      },
      {
        "name": "Gluttony",
        "isHidden": true,
        "label": "Gluttony (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 327,
    "abilities": [
      {
        "name": "Own Tempo",
        "isHidden": false,
        "label": "Own Tempo"
      },
      {
        "name": "Tangled Feet",
        "isHidden": false,
        "label": "Tangled Feet"
      },
      {
        "name": "Contrary",
        "isHidden": true,
        "label": "Contrary (HO)"
      }
    ],
    "eggMoves": [
      "Disable",
      "Rock Slide",
      "Baton Pass",
      "Encore",
      "Smelling Salts",
      "Trick",
      "Wish",
      "Assist",
      "Fake Out",
      "Role Play",
      "Psycho Cut",
      "Icy Wind",
      "Rapid Spin",
      "Fake Tears",
      "Water Pulse",
      "Psycho Shift",
      "Guard Split",
      "Spotlight"
    ]
  },
  {
    "dexNumber": 328,
    "abilities": [
      {
        "name": "Hyper Cutter",
        "isHidden": false,
        "label": "Hyper Cutter"
      },
      {
        "name": "Arena Trap",
        "isHidden": false,
        "label": "Arena Trap"
      },
      {
        "name": "Sheer Force",
        "isHidden": true,
        "label": "Sheer Force (HO)"
      }
    ],
    "eggMoves": [
      "Gust",
      "Quick Attack",
      "Focus Energy",
      "Flail",
      "Fury Cutter",
      "Mud Shot",
      "Endure",
      "Signal Beam",
      "Earth Power",
      "Bug Bite",
      "Feint",
      "First Impression"
    ]
  },
  {
    "dexNumber": 329,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": [
      "Gust",
      "Supersonic",
      "Fissure",
      "Quick Attack",
      "Flail",
      "Fury Cutter",
      "Crunch",
      "Superpower",
      "Astonish",
      "Feint",
      "Bug Bite",
      "Bulldoze",
      "First Impression"
    ]
  },
  {
    "dexNumber": 330,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": [
      "Gust",
      "Bite",
      "Fissure",
      "Dig",
      "Quick Attack",
      "Flail",
      "Fury Cutter",
      "Crunch",
      "Superpower",
      "Astonish",
      "Dragon Dance",
      "Feint",
      "Bug Bite",
      "First Impression"
    ]
  },
  {
    "dexNumber": 331,
    "abilities": [
      {
        "name": "Sand Veil",
        "isHidden": false,
        "label": "Sand Veil"
      },
      {
        "name": "Water Absorb",
        "isHidden": true,
        "label": "Water Absorb (HO)"
      }
    ],
    "eggMoves": [
      "Acid",
      "Counter",
      "Dynamic Punch",
      "Teeter Dance",
      "Grass Whistle",
      "Low Kick",
      "Smelling Salts",
      "Magical Leaf",
      "Seed Bomb",
      "Nasty Plot",
      "Disable",
      "Block",
      "Worry Seed",
      "Switcheroo",
      "Belch",
      "Rototiller",
      "Fell Stinger",
      "Power Up Punch"
    ]
  },
  {
    "dexNumber": 332,
    "abilities": [
      {
        "name": "Sand Veil",
        "isHidden": false,
        "label": "Sand Veil"
      },
      {
        "name": "Water Absorb",
        "isHidden": true,
        "label": "Water Absorb (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 333,
    "abilities": [
      {
        "name": "Natural Cure",
        "isHidden": false,
        "label": "Natural Cure"
      },
      {
        "name": "Cloud Nine",
        "isHidden": true,
        "label": "Cloud Nine (HO)"
      }
    ],
    "eggMoves": [
      "Agility",
      "Rage",
      "Haze",
      "Pursuit",
      "Feather Dance",
      "Dragon Rush",
      "Power Swap",
      "Steel Wing",
      "Hyper Voice",
      "Roost",
      "Play Rough",
      "Astonish",
      "Tailwind",
      "Defog"
    ]
  },
  {
    "dexNumber": 334,
    "abilities": [
      {
        "name": "Natural Cure",
        "isHidden": false,
        "label": "Natural Cure"
      },
      {
        "name": "Cloud Nine",
        "isHidden": true,
        "label": "Cloud Nine (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 335,
    "abilities": [
      {
        "name": "Immunity",
        "isHidden": false,
        "label": "Immunity"
      },
      {
        "name": "Toxic Boost",
        "isHidden": true,
        "label": "Toxic Boost (HO)"
      }
    ],
    "eggMoves": [
      "Razor Wind",
      "Double Kick",
      "Roar",
      "Counter",
      "Curse",
      "Flail",
      "Fury Swipes",
      "Metal Claw",
      "Night Slash",
      "Double Hit",
      "Disable",
      "Iron Tail",
      "Feint",
      "Final Gambit",
      "Quick Guard",
      "Belly Drum"
    ]
  },
  {
    "dexNumber": 336,
    "abilities": [
      {
        "name": "Shed Skin",
        "isHidden": false,
        "label": "Shed Skin"
      },
      {
        "name": "Infiltrator",
        "isHidden": true,
        "label": "Infiltrator (HO)"
      }
    ],
    "eggMoves": [
      "Body Slam",
      "Stockpile",
      "Spit Up",
      "Swallow",
      "Scary Face",
      "Assurance",
      "Night Slash",
      "Switcheroo",
      "Iron Tail",
      "Wring Out",
      "Punishment",
      "Final Gambit"
    ]
  },
  {
    "dexNumber": 337,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 338,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 339,
    "abilities": [
      {
        "name": "Oblivious",
        "isHidden": false,
        "label": "Oblivious"
      },
      {
        "name": "Anticipation",
        "isHidden": false,
        "label": "Anticipation"
      },
      {
        "name": "Hydration",
        "isHidden": true,
        "label": "Hydration (HO)"
      }
    ],
    "eggMoves": [
      "Thrash",
      "Spark",
      "Whirlpool",
      "Take Down",
      "Hydro Pump",
      "Flail",
      "Dragon Dance",
      "Muddy Water",
      "Mud Shot",
      "Earth Power"
    ]
  },
  {
    "dexNumber": 340,
    "abilities": [
      {
        "name": "Oblivious",
        "isHidden": false,
        "label": "Oblivious"
      },
      {
        "name": "Anticipation",
        "isHidden": false,
        "label": "Anticipation"
      },
      {
        "name": "Hydration",
        "isHidden": true,
        "label": "Hydration (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 341,
    "abilities": [
      {
        "name": "Hyper Cutter",
        "isHidden": false,
        "label": "Hyper Cutter"
      },
      {
        "name": "Shell Armor",
        "isHidden": false,
        "label": "Shell Armor"
      },
      {
        "name": "Adaptability",
        "isHidden": true,
        "label": "Adaptability (HO)"
      }
    ],
    "eggMoves": [
      "Body Slam",
      "Ancient Power",
      "Endeavor",
      "Mud Sport",
      "Metal Claw",
      "Superpower",
      "Knock Off",
      "Dragon Dance",
      "Double Edge",
      "Trump Card",
      "Chip Away",
      "Switcheroo",
      "Aqua Jet",
      "Slash"
    ]
  },
  {
    "dexNumber": 342,
    "abilities": [
      {
        "name": "Hyper Cutter",
        "isHidden": false,
        "label": "Hyper Cutter"
      },
      {
        "name": "Shell Armor",
        "isHidden": false,
        "label": "Shell Armor"
      },
      {
        "name": "Adaptability",
        "isHidden": true,
        "label": "Adaptability (HO)"
      }
    ],
    "eggMoves": [
      "Double Edge",
      "Slash",
      "Metal Claw",
      "Ancient Power",
      "Switcheroo",
      "Aqua Jet"
    ]
  },
  {
    "dexNumber": 343,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 344,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 345,
    "abilities": [
      {
        "name": "Suction Cups",
        "isHidden": false,
        "label": "Suction Cups"
      },
      {
        "name": "Storm Drain",
        "isHidden": true,
        "label": "Storm Drain (HO)"
      }
    ],
    "eggMoves": [
      "Recover",
      "Barrier",
      "Rock Slide",
      "Mirror Coat",
      "Tickle",
      "Wring Out",
      "Curse",
      "Mega Drain",
      "Endure",
      "Stealth Rock",
      "Bind"
    ]
  },
  {
    "dexNumber": 346,
    "abilities": [
      {
        "name": "Suction Cups",
        "isHidden": false,
        "label": "Suction Cups"
      },
      {
        "name": "Storm Drain",
        "isHidden": true,
        "label": "Storm Drain (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 347,
    "abilities": [
      {
        "name": "Battle Armor",
        "isHidden": false,
        "label": "Battle Armor"
      },
      {
        "name": "Swift Swim",
        "isHidden": true,
        "label": "Swift Swim (HO)"
      }
    ],
    "eggMoves": [
      "Swords Dance",
      "Rock Slide",
      "Rapid Spin",
      "Knock Off",
      "Sand Attack",
      "Screech",
      "Cross Poison",
      "Curse",
      "Iron Defense",
      "Water Pulse",
      "Aqua Jet"
    ]
  },
  {
    "dexNumber": 348,
    "abilities": [
      {
        "name": "Battle Armor",
        "isHidden": false,
        "label": "Battle Armor"
      },
      {
        "name": "Swift Swim",
        "isHidden": true,
        "label": "Swift Swim (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 349,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Oblivious",
        "isHidden": false,
        "label": "Oblivious"
      },
      {
        "name": "Adaptability",
        "isHidden": true,
        "label": "Adaptability (HO)"
      }
    ],
    "eggMoves": [
      "Hypnosis",
      "Confuse Ray",
      "Light Screen",
      "Dragon Breath",
      "Mirror Coat",
      "Mud Sport",
      "Mist",
      "Haze",
      "Tickle",
      "Iron Tail",
      "Brine",
      "Dragon Pulse",
      "Captivate"
    ]
  },
  {
    "dexNumber": 350,
    "abilities": [
      {
        "name": "Marvel Scale",
        "isHidden": false,
        "label": "Marvel Scale"
      },
      {
        "name": "Competitive",
        "isHidden": false,
        "label": "Competitive"
      },
      {
        "name": "Cute Charm",
        "isHidden": true,
        "label": "Cute Charm (HO)"
      }
    ],
    "eggMoves": [
      "Mist",
      "Hypnosis",
      "Confuse Ray",
      "Haze",
      "Dragon Breath",
      "Mirror Coat",
      "Tickle"
    ]
  },
  {
    "dexNumber": 351,
    "abilities": [
      {
        "name": "Forecast",
        "isHidden": false,
        "label": "Forecast"
      }
    ],
    "eggMoves": [
      "Psych Up",
      "Future Sight",
      "Disable",
      "Amnesia",
      "Lucky Chant",
      "Ominous Wind",
      "Clear Smog",
      "Hex",
      "Cosmic Power",
      "Guard Swap",
      "Reflect Type"
    ]
  },
  {
    "dexNumber": 352,
    "abilities": [
      {
        "name": "Color Change",
        "isHidden": false,
        "label": "Color Change"
      },
      {
        "name": "Protean",
        "isHidden": true,
        "label": "Protean (HO)"
      }
    ],
    "eggMoves": [
      "Disable",
      "Trick",
      "Magic Coat",
      "Dizzy Punch",
      "Fake Out",
      "Nasty Plot",
      "Recover",
      "Skill Swap",
      "Snatch",
      "Foul Play",
      "Camouflage",
      "Power Up Punch"
    ]
  },
  {
    "dexNumber": 353,
    "abilities": [
      {
        "name": "Insomnia",
        "isHidden": false,
        "label": "Insomnia"
      },
      {
        "name": "Frisk",
        "isHidden": false,
        "label": "Frisk"
      },
      {
        "name": "Cursed Body",
        "isHidden": true,
        "label": "Cursed Body (HO)"
      }
    ],
    "eggMoves": [
      "Disable",
      "Foresight",
      "Destiny Bond",
      "Imprison",
      "Astonish",
      "Confuse Ray",
      "Pursuit",
      "Payback",
      "Shadow Sneak",
      "Gunk Shot",
      "Ominous Wind",
      "Phantom Force"
    ]
  },
  {
    "dexNumber": 354,
    "abilities": [
      {
        "name": "Insomnia",
        "isHidden": false,
        "label": "Insomnia"
      },
      {
        "name": "Frisk",
        "isHidden": false,
        "label": "Frisk"
      },
      {
        "name": "Cursed Body",
        "isHidden": true,
        "label": "Cursed Body (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 355,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      },
      {
        "name": "Frisk",
        "isHidden": true,
        "label": "Frisk (HO)"
      }
    ],
    "eggMoves": [
      "Feint Attack",
      "Destiny Bond",
      "Pain Split",
      "Memento",
      "Imprison",
      "Grudge",
      "Ominous Wind",
      "Skill Swap",
      "Dark Pulse",
      "Haze"
    ]
  },
  {
    "dexNumber": 356,
    "abilities": [
      {
        "name": "Pressure",
        "isHidden": false,
        "label": "Pressure"
      },
      {
        "name": "Frisk",
        "isHidden": true,
        "label": "Frisk (HO)"
      }
    ],
    "eggMoves": [
      "Haze",
      "Pain Split",
      "Memento"
    ]
  },
  {
    "dexNumber": 357,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Solar Power",
        "isHidden": false,
        "label": "Solar Power"
      },
      {
        "name": "Harvest",
        "isHidden": true,
        "label": "Harvest (HO)"
      }
    ],
    "eggMoves": [
      "Razor Wind",
      "Slam",
      "Headbutt",
      "Leech Seed",
      "Nature Power",
      "Curse",
      "Synthesis",
      "Leaf Blade",
      "Leaf Storm",
      "Dragon Dance",
      "Bullet Seed",
      "Natural Gift",
      "Dragon Hammer"
    ]
  },
  {
    "dexNumber": 358,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": [
      "Disable",
      "Hypnosis",
      "Dream Eater",
      "Curse",
      "Future Sight",
      "Wish",
      "Skill Swap",
      "Stored Power",
      "Recover",
      "Cosmic Power",
      "Perish Song",
      "Crafty Shield",
      "Recycle",
      "Ally Switch"
    ]
  },
  {
    "dexNumber": 359,
    "abilities": [
      {
        "name": "Pressure",
        "isHidden": false,
        "label": "Pressure"
      },
      {
        "name": "Super Luck",
        "isHidden": false,
        "label": "Super Luck"
      },
      {
        "name": "Justified",
        "isHidden": true,
        "label": "Justified (HO)"
      }
    ],
    "eggMoves": [
      "Double Edge",
      "Substitute",
      "Curse",
      "Feint Attack",
      "Baton Pass",
      "Magic Coat",
      "Mean Look",
      "Assurance",
      "Me First",
      "Punishment",
      "Sucker Punch",
      "Zen Headbutt",
      "Megahorn",
      "Perish Song",
      "Hex",
      "Play Rough",
      "Bite",
      "Feint"
    ]
  },
  {
    "dexNumber": 360,
    "abilities": [
      {
        "name": "Shadow Tag",
        "isHidden": false,
        "label": "Shadow Tag"
      },
      {
        "name": "Telepathy",
        "isHidden": true,
        "label": "Telepathy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 361,
    "abilities": [
      {
        "name": "Inner Focus",
        "isHidden": false,
        "label": "Inner Focus"
      },
      {
        "name": "Ice Body",
        "isHidden": false,
        "label": "Ice Body"
      },
      {
        "name": "Moody",
        "isHidden": true,
        "label": "Moody (HO)"
      }
    ],
    "eggMoves": [
      "Spikes",
      "Block",
      "Disable",
      "Bide",
      "Rollout",
      "Weather Ball",
      "Fake Tears",
      "Avalanche",
      "Hex",
      "Switcheroo",
      "Icicle Crash"
    ]
  },
  {
    "dexNumber": 362,
    "abilities": [
      {
        "name": "Inner Focus",
        "isHidden": false,
        "label": "Inner Focus"
      },
      {
        "name": "Ice Body",
        "isHidden": false,
        "label": "Ice Body"
      },
      {
        "name": "Moody",
        "isHidden": true,
        "label": "Moody (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 363,
    "abilities": [
      {
        "name": "Thick Fat",
        "isHidden": false,
        "label": "Thick Fat"
      },
      {
        "name": "Ice Body",
        "isHidden": false,
        "label": "Ice Body"
      },
      {
        "name": "Oblivious",
        "isHidden": true,
        "label": "Oblivious (HO)"
      }
    ],
    "eggMoves": [
      "Fissure",
      "Rock Slide",
      "Curse",
      "Stockpile",
      "Spit Up",
      "Swallow",
      "Yawn",
      "Water Sport",
      "Signal Beam",
      "Aqua Ring",
      "Rollout",
      "Sleep Talk",
      "Water Pulse",
      "Belly Drum"
    ]
  },
  {
    "dexNumber": 364,
    "abilities": [
      {
        "name": "Thick Fat",
        "isHidden": false,
        "label": "Thick Fat"
      },
      {
        "name": "Ice Body",
        "isHidden": false,
        "label": "Ice Body"
      },
      {
        "name": "Oblivious",
        "isHidden": true,
        "label": "Oblivious (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 365,
    "abilities": [
      {
        "name": "Thick Fat",
        "isHidden": false,
        "label": "Thick Fat"
      },
      {
        "name": "Ice Body",
        "isHidden": false,
        "label": "Ice Body"
      },
      {
        "name": "Oblivious",
        "isHidden": true,
        "label": "Oblivious (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 366,
    "abilities": [
      {
        "name": "Shell Armor",
        "isHidden": false,
        "label": "Shell Armor"
      },
      {
        "name": "Rattled",
        "isHidden": true,
        "label": "Rattled (HO)"
      }
    ],
    "eggMoves": [
      "Body Slam",
      "Supersonic",
      "Confuse Ray",
      "Barrier",
      "Refresh",
      "Mud Sport",
      "Aqua Ring",
      "Muddy Water",
      "Endure",
      "Water Pulse",
      "Brine"
    ]
  },
  {
    "dexNumber": 367,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Water Veil",
        "isHidden": true,
        "label": "Water Veil (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 368,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Hydration",
        "isHidden": true,
        "label": "Hydration (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 369,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Rock Head",
        "isHidden": false,
        "label": "Rock Head"
      },
      {
        "name": "Sturdy",
        "isHidden": true,
        "label": "Sturdy (HO)"
      }
    ],
    "eggMoves": [
      "Skull Bash",
      "Amnesia",
      "Rock Slide",
      "Sleep Talk",
      "Magnitude",
      "Water Sport",
      "Snore",
      "Mud Slap",
      "Aqua Tail",
      "Muddy Water",
      "Mud Shot",
      "Brine",
      "Zen Headbutt"
    ]
  },
  {
    "dexNumber": 370,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Hydration",
        "isHidden": true,
        "label": "Hydration (HO)"
      }
    ],
    "eggMoves": [
      "Supersonic",
      "Splash",
      "Mud Sport",
      "Water Sport",
      "Aqua Ring",
      "Captivate",
      "Aqua Jet",
      "Brine",
      "Heal Pulse",
      "Entrainment"
    ]
  },
  {
    "dexNumber": 371,
    "abilities": [
      {
        "name": "Rock Head",
        "isHidden": false,
        "label": "Rock Head"
      },
      {
        "name": "Sheer Force",
        "isHidden": true,
        "label": "Sheer Force (HO)"
      }
    ],
    "eggMoves": [
      "Thrash",
      "Hydro Pump",
      "Dragon Rage",
      "Twister",
      "Dragon Dance",
      "Dragon Rush",
      "Shadow Claw",
      "Fire Fang",
      "Defense Curl",
      "Endure",
      "Dragon Pulse"
    ]
  },
  {
    "dexNumber": 372,
    "abilities": [
      {
        "name": "Rock Head",
        "isHidden": false,
        "label": "Rock Head"
      },
      {
        "name": "Overcoat",
        "isHidden": true,
        "label": "Overcoat (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 373,
    "abilities": [
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Moxie",
        "isHidden": true,
        "label": "Moxie (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 374,
    "abilities": [
      {
        "name": "Clear Body",
        "isHidden": false,
        "label": "Clear Body"
      },
      {
        "name": "Light Metal",
        "isHidden": true,
        "label": "Light Metal (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 375,
    "abilities": [
      {
        "name": "Clear Body",
        "isHidden": false,
        "label": "Clear Body"
      },
      {
        "name": "Light Metal",
        "isHidden": true,
        "label": "Light Metal (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 376,
    "abilities": [
      {
        "name": "Clear Body",
        "isHidden": false,
        "label": "Clear Body"
      },
      {
        "name": "Light Metal",
        "isHidden": true,
        "label": "Light Metal (HO)"
      }
    ],
    "eggMoves": [
      "Explosion",
      "Hone Claws"
    ]
  },
  {
    "dexNumber": 377,
    "abilities": [
      {
        "name": "Clear Body",
        "isHidden": false,
        "label": "Clear Body"
      },
      {
        "name": "Sturdy",
        "isHidden": true,
        "label": "Sturdy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 378,
    "abilities": [
      {
        "name": "Clear Body",
        "isHidden": false,
        "label": "Clear Body"
      },
      {
        "name": "Ice Body",
        "isHidden": true,
        "label": "Ice Body (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 379,
    "abilities": [
      {
        "name": "Clear Body",
        "isHidden": false,
        "label": "Clear Body"
      },
      {
        "name": "Light Metal",
        "isHidden": true,
        "label": "Light Metal (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 380,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 381,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 382,
    "abilities": [
      {
        "name": "Drizzle",
        "isHidden": false,
        "label": "Drizzle"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 383,
    "abilities": [
      {
        "name": "Drought",
        "isHidden": false,
        "label": "Drought"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 384,
    "abilities": [
      {
        "name": "Air Lock",
        "isHidden": false,
        "label": "Air Lock"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 385,
    "abilities": [
      {
        "name": "Serene Grace",
        "isHidden": false,
        "label": "Serene Grace"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 386,
    "abilities": [
      {
        "name": "Pressure",
        "isHidden": false,
        "label": "Pressure"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 387,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Shell Armor",
        "isHidden": true,
        "label": "Shell Armor (HO)"
      }
    ],
    "eggMoves": [
      "Body Slam",
      "Thrash",
      "Double Edge",
      "Growth",
      "Amnesia",
      "Superpower",
      "Tickle",
      "Sand Tomb",
      "Worry Seed",
      "Seed Bomb",
      "Stockpile",
      "Spit Up",
      "Swallow",
      "Earth Power",
      "Wide Guard",
      "Grassy Terrain",
      "Heavy Slam",
      "Shell Smash"
    ]
  },
  {
    "dexNumber": 388,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Shell Armor",
        "isHidden": true,
        "label": "Shell Armor (HO)"
      }
    ],
    "eggMoves": [
      "Thrash",
      "Double Edge",
      "Growth",
      "Stockpile",
      "Spit Up",
      "Swallow",
      "Superpower",
      "Tickle",
      "Worry Seed",
      "Wide Guard",
      "Shell Smash"
    ]
  },
  {
    "dexNumber": 389,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Shell Armor",
        "isHidden": true,
        "label": "Shell Armor (HO)"
      }
    ],
    "eggMoves": [
      "Thrash",
      "Double Edge",
      "Growth",
      "Stockpile",
      "Spit Up",
      "Swallow",
      "Superpower",
      "Tickle",
      "Worry Seed",
      "Wide Guard",
      "Shell Smash"
    ]
  },
  {
    "dexNumber": 390,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Iron Fist",
        "isHidden": true,
        "label": "Iron Fist (HO)"
      }
    ],
    "eggMoves": [
      "Fire Punch",
      "Thunder Punch",
      "Double Kick",
      "Counter",
      "Focus Energy",
      "Encore",
      "Fake Out",
      "Heat Wave",
      "Helping Hand",
      "Blaze Kick",
      "Assist",
      "Submission",
      "Focus Punch",
      "Quick Guard",
      "Power Up Punch",
      "Switcheroo"
    ]
  },
  {
    "dexNumber": 391,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Iron Fist",
        "isHidden": true,
        "label": "Iron Fist (HO)"
      }
    ],
    "eggMoves": [
      "Fire Punch",
      "Thunder Punch",
      "Double Kick",
      "Counter",
      "Focus Energy",
      "Encore",
      "Fake Out",
      "Heat Wave",
      "Helping Hand",
      "Switcheroo"
    ]
  },
  {
    "dexNumber": 392,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Iron Fist",
        "isHidden": true,
        "label": "Iron Fist (HO)"
      }
    ],
    "eggMoves": [
      "Fire Punch",
      "Thunder Punch",
      "Double Kick",
      "Counter",
      "Focus Energy",
      "Encore",
      "Fake Out",
      "Heat Wave",
      "Taunt",
      "Helping Hand",
      "Slack Off",
      "Switcheroo"
    ]
  },
  {
    "dexNumber": 393,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Competitive",
        "isHidden": true,
        "label": "Competitive (HO)"
      }
    ],
    "eggMoves": [
      "Supersonic",
      "Hydro Pump",
      "Agility",
      "Snore",
      "Flail",
      "Mud Slap",
      "Yawn",
      "Mud Sport",
      "Aqua Ring",
      "Double Hit",
      "Feather Dance",
      "Bide",
      "Icy Wind",
      "Power Trip",
      "Roost"
    ]
  },
  {
    "dexNumber": 394,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Competitive",
        "isHidden": true,
        "label": "Competitive (HO)"
      }
    ],
    "eggMoves": [
      "Supersonic",
      "Snore",
      "Yawn",
      "Feather Dance",
      "Roost",
      "Aqua Ring",
      "Power Trip"
    ]
  },
  {
    "dexNumber": 395,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Competitive",
        "isHidden": true,
        "label": "Competitive (HO)"
      }
    ],
    "eggMoves": [
      "Supersonic",
      "Snore",
      "Yawn",
      "Feather Dance",
      "Roost",
      "Aqua Ring",
      "Power Trip"
    ]
  },
  {
    "dexNumber": 396,
    "abilities": [
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Reckless",
        "isHidden": true,
        "label": "Reckless (HO)"
      }
    ],
    "eggMoves": [
      "Sand Attack",
      "Fury Attack",
      "Double Edge",
      "Foresight",
      "Pursuit",
      "Feather Dance",
      "Astonish",
      "Detect",
      "Steel Wing",
      "Uproar",
      "Revenge",
      "Roost",
      "Mirror Move"
    ]
  },
  {
    "dexNumber": 397,
    "abilities": [
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Reckless",
        "isHidden": true,
        "label": "Reckless (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 398,
    "abilities": [
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Reckless",
        "isHidden": true,
        "label": "Reckless (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 399,
    "abilities": [
      {
        "name": "Simple",
        "isHidden": false,
        "label": "Simple"
      },
      {
        "name": "Unaware",
        "isHidden": false,
        "label": "Unaware"
      },
      {
        "name": "Moody",
        "isHidden": true,
        "label": "Moody (HO)"
      }
    ],
    "eggMoves": [
      "Double Edge",
      "Quick Attack",
      "Defense Curl",
      "Fury Swipes",
      "Rollout",
      "Odor Sleuth",
      "Water Sport",
      "Aqua Tail",
      "Skull Bash",
      "Endure",
      "Sleep Talk",
      "Rock Climb",
      "Mud Sport"
    ]
  },
  {
    "dexNumber": 400,
    "abilities": [
      {
        "name": "Simple",
        "isHidden": false,
        "label": "Simple"
      },
      {
        "name": "Unaware",
        "isHidden": false,
        "label": "Unaware"
      },
      {
        "name": "Moody",
        "isHidden": true,
        "label": "Moody (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 401,
    "abilities": [
      {
        "name": "Shed Skin",
        "isHidden": false,
        "label": "Shed Skin"
      },
      {
        "name": "Run Away",
        "isHidden": true,
        "label": "Run Away (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 402,
    "abilities": [
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      },
      {
        "name": "Technician",
        "isHidden": true,
        "label": "Technician (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 403,
    "abilities": [
      {
        "name": "Rivalry",
        "isHidden": false,
        "label": "Rivalry"
      },
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Guts",
        "isHidden": true,
        "label": "Guts (HO)"
      }
    ],
    "eggMoves": [
      "Take Down",
      "Quick Attack",
      "Howl",
      "Thunder Fang",
      "Ice Fang",
      "Fire Fang",
      "Night Slash",
      "Double Kick",
      "Swift",
      "Helping Hand",
      "Signal Beam",
      "Shock Wave",
      "Fake Tears",
      "Eerie Impulse",
      "Baby Doll Eyes"
    ]
  },
  {
    "dexNumber": 404,
    "abilities": [
      {
        "name": "Rivalry",
        "isHidden": false,
        "label": "Rivalry"
      },
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Guts",
        "isHidden": true,
        "label": "Guts (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 405,
    "abilities": [
      {
        "name": "Rivalry",
        "isHidden": false,
        "label": "Rivalry"
      },
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Guts",
        "isHidden": true,
        "label": "Guts (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 406,
    "abilities": [
      {
        "name": "Natural Cure",
        "isHidden": false,
        "label": "Natural Cure"
      },
      {
        "name": "Poison Point",
        "isHidden": false,
        "label": "Poison Point"
      },
      {
        "name": "Leaf Guard",
        "isHidden": true,
        "label": "Leaf Guard (HO)"
      }
    ],
    "eggMoves": [
      "Pin Missile",
      "Razor Leaf",
      "Sleep Powder",
      "Mind Reader",
      "Cotton Spore",
      "Spikes",
      "Synthesis",
      "Extrasensory",
      "Leaf Storm",
      "Giga Drain",
      "Grass Whistle",
      "Natural Gift",
      "Seed Bomb",
      "Life Dew"
    ]
  },
  {
    "dexNumber": 407,
    "abilities": [
      {
        "name": "Natural Cure",
        "isHidden": false,
        "label": "Natural Cure"
      },
      {
        "name": "Poison Point",
        "isHidden": false,
        "label": "Poison Point"
      },
      {
        "name": "Technician",
        "isHidden": true,
        "label": "Technician (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 408,
    "abilities": [
      {
        "name": "Mold Breaker",
        "isHidden": false,
        "label": "Mold Breaker"
      },
      {
        "name": "Sheer Force",
        "isHidden": true,
        "label": "Sheer Force (HO)"
      }
    ],
    "eggMoves": [
      "Whirlwind",
      "Slam",
      "Stomp",
      "Thrash",
      "Double Edge",
      "Leer",
      "Crunch",
      "Hammer Arm",
      "Curse",
      "Iron Tail",
      "Iron Head"
    ]
  },
  {
    "dexNumber": 409,
    "abilities": [
      {
        "name": "Mold Breaker",
        "isHidden": false,
        "label": "Mold Breaker"
      },
      {
        "name": "Sheer Force",
        "isHidden": true,
        "label": "Sheer Force (HO)"
      }
    ],
    "eggMoves": [
      "Whirlwind",
      "Stomp",
      "Thrash",
      "Hammer Arm"
    ]
  },
  {
    "dexNumber": 410,
    "abilities": [
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Soundproof",
        "isHidden": true,
        "label": "Soundproof (HO)"
      }
    ],
    "eggMoves": [
      "Headbutt",
      "Body Slam",
      "Double Edge",
      "Fissure",
      "Screech",
      "Focus Energy",
      "Curse",
      "Scary Face",
      "Rock Blast",
      "Counter",
      "Stealth Rock",
      "Wide Guard",
      "Guard Split"
    ]
  },
  {
    "dexNumber": 411,
    "abilities": [
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Soundproof",
        "isHidden": true,
        "label": "Soundproof (HO)"
      }
    ],
    "eggMoves": [
      "Headbutt",
      "Counter",
      "Fissure",
      "Screech",
      "Focus Energy",
      "Wide Guard",
      "Guard Split"
    ]
  },
  {
    "dexNumber": 412,
    "abilities": [
      {
        "name": "Shed Skin",
        "isHidden": false,
        "label": "Shed Skin"
      },
      {
        "name": "Overcoat",
        "isHidden": true,
        "label": "Overcoat (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 413,
    "abilities": [
      {
        "name": "Anticipation",
        "isHidden": false,
        "label": "Anticipation"
      },
      {
        "name": "Overcoat",
        "isHidden": true,
        "label": "Overcoat (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 414,
    "abilities": [
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      },
      {
        "name": "Tinted Lens",
        "isHidden": true,
        "label": "Tinted Lens (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 415,
    "abilities": [
      {
        "name": "Honey Gather",
        "isHidden": false,
        "label": "Honey Gather"
      },
      {
        "name": "Hustle",
        "isHidden": true,
        "label": "Hustle (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 416,
    "abilities": [
      {
        "name": "Pressure",
        "isHidden": false,
        "label": "Pressure"
      },
      {
        "name": "Unnerve",
        "isHidden": true,
        "label": "Unnerve (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 417,
    "abilities": [
      {
        "name": "Run Away",
        "isHidden": false,
        "label": "Run Away"
      },
      {
        "name": "Pickup",
        "isHidden": false,
        "label": "Pickup"
      },
      {
        "name": "Volt Absorb",
        "isHidden": true,
        "label": "Volt Absorb (HO)"
      }
    ],
    "eggMoves": [
      "Bite",
      "Defense Curl",
      "Flail",
      "Rollout",
      "Flatter",
      "Fake Tears",
      "Covet",
      "Tail Whip",
      "Iron Tail",
      "Follow Me",
      "Charge",
      "Bestow",
      "Ion Deluge",
      "Baby Doll Eyes"
    ]
  },
  {
    "dexNumber": 418,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Water Veil",
        "isHidden": true,
        "label": "Water Veil (HO)"
      }
    ],
    "eggMoves": [
      "Double Slap",
      "Headbutt",
      "Fury Swipes",
      "Slash",
      "Mud Slap",
      "Fury Cutter",
      "Baton Pass",
      "Odor Sleuth",
      "Me First",
      "Aqua Ring",
      "Aqua Tail",
      "Switcheroo",
      "Tail Slap",
      "Soak",
      "Helping Hand"
    ]
  },
  {
    "dexNumber": 419,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Water Veil",
        "isHidden": true,
        "label": "Water Veil (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 420,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      }
    ],
    "eggMoves": [
      "Razor Leaf",
      "Sweet Scent",
      "Nature Power",
      "Aromatherapy",
      "Grass Whistle",
      "Tickle",
      "Weather Ball",
      "Defense Curl",
      "Rollout",
      "Healing Wish",
      "Natural Gift",
      "Seed Bomb",
      "Heal Pulse",
      "Flower Shield",
      "Grassy Terrain"
    ]
  },
  {
    "dexNumber": 421,
    "abilities": [
      {
        "name": "Flower Gift",
        "isHidden": false,
        "label": "Flower Gift"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 422,
    "abilities": [
      {
        "name": "Sticky Hold",
        "isHidden": false,
        "label": "Sticky Hold"
      },
      {
        "name": "Storm Drain",
        "isHidden": false,
        "label": "Storm Drain"
      },
      {
        "name": "Sand Force",
        "isHidden": true,
        "label": "Sand Force (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "Fissure",
      "Amnesia",
      "Curse",
      "Mirror Coat",
      "Stockpile",
      "Spit Up",
      "Swallow",
      "Memento",
      "Yawn",
      "Sludge",
      "Trump Card",
      "Mist",
      "Brine",
      "Clear Smog",
      "Acid Armor"
    ]
  },
  {
    "dexNumber": 423,
    "abilities": [
      {
        "name": "Sticky Hold",
        "isHidden": false,
        "label": "Sticky Hold"
      },
      {
        "name": "Storm Drain",
        "isHidden": false,
        "label": "Storm Drain"
      },
      {
        "name": "Sand Force",
        "isHidden": true,
        "label": "Sand Force (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 424,
    "abilities": [
      {
        "name": "Technician",
        "isHidden": false,
        "label": "Technician"
      },
      {
        "name": "Pickup",
        "isHidden": false,
        "label": "Pickup"
      },
      {
        "name": "Skill Link",
        "isHidden": true,
        "label": "Skill Link (HO)"
      }
    ],
    "eggMoves": [
      "Slam",
      "Counter",
      "Iron Tail",
      "Beat Up",
      "Fake Out",
      "Bounce",
      "Covet",
      "Switcheroo",
      "Quick Guard"
    ]
  },
  {
    "dexNumber": 425,
    "abilities": [
      {
        "name": "Aftermath",
        "isHidden": false,
        "label": "Aftermath"
      },
      {
        "name": "Unburden",
        "isHidden": false,
        "label": "Unburden"
      },
      {
        "name": "Flare Boost",
        "isHidden": true,
        "label": "Flare Boost (HO)"
      }
    ],
    "eggMoves": [
      "Body Slam",
      "Disable",
      "Hypnosis",
      "Haze",
      "Destiny Bond",
      "Memento",
      "Weather Ball",
      "Defog",
      "Clear Smog",
      "Tailwind"
    ]
  },
  {
    "dexNumber": 426,
    "abilities": [
      {
        "name": "Aftermath",
        "isHidden": false,
        "label": "Aftermath"
      },
      {
        "name": "Unburden",
        "isHidden": false,
        "label": "Unburden"
      },
      {
        "name": "Flare Boost",
        "isHidden": true,
        "label": "Flare Boost (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 427,
    "abilities": [
      {
        "name": "Run Away",
        "isHidden": false,
        "label": "Run Away"
      },
      {
        "name": "Klutz",
        "isHidden": false,
        "label": "Klutz"
      },
      {
        "name": "Limber",
        "isHidden": true,
        "label": "Limber (HO)"
      }
    ],
    "eggMoves": [
      "Fire Punch",
      "Ice Punch",
      "Thunder Punch",
      "Low Kick",
      "Sweet Kiss",
      "Attract",
      "Encore",
      "Fake Out",
      "Fake Tears",
      "Sky Uppercut",
      "Switcheroo",
      "Double Hit",
      "Flail",
      "Focus Punch",
      "Copycat",
      "Circle Throw",
      "Teeter Dance",
      "Mud Sport",
      "Cosmic Power",
      "Power Up Punch"
    ]
  },
  {
    "dexNumber": 428,
    "abilities": [
      {
        "name": "Cute Charm",
        "isHidden": false,
        "label": "Cute Charm"
      },
      {
        "name": "Klutz",
        "isHidden": false,
        "label": "Klutz"
      },
      {
        "name": "Limber",
        "isHidden": true,
        "label": "Limber (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 429,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 430,
    "abilities": [
      {
        "name": "Insomnia",
        "isHidden": false,
        "label": "Insomnia"
      },
      {
        "name": "Super Luck",
        "isHidden": false,
        "label": "Super Luck"
      },
      {
        "name": "Moxie",
        "isHidden": true,
        "label": "Moxie (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 431,
    "abilities": [
      {
        "name": "Limber",
        "isHidden": false,
        "label": "Limber"
      },
      {
        "name": "Own Tempo",
        "isHidden": false,
        "label": "Own Tempo"
      },
      {
        "name": "Keen Eye",
        "isHidden": true,
        "label": "Keen Eye (HO)"
      }
    ],
    "eggMoves": [
      "Sand Attack",
      "Tail Whip",
      "Bite",
      "Quick Attack",
      "Fake Tears",
      "Assurance",
      "Flail",
      "Snatch",
      "Wake Up Slap",
      "Last Resort"
    ]
  },
  {
    "dexNumber": 432,
    "abilities": [
      {
        "name": "Thick Fat",
        "isHidden": false,
        "label": "Thick Fat"
      },
      {
        "name": "Own Tempo",
        "isHidden": false,
        "label": "Own Tempo"
      },
      {
        "name": "Defiant",
        "isHidden": true,
        "label": "Defiant (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 433,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": [
      "Disable",
      "Hypnosis",
      "Recover",
      "Dream Eater",
      "Curse",
      "Future Sight",
      "Wish",
      "Skill Swap",
      "Stored Power",
      "Cosmic Power",
      "Recycle",
      "Ally Switch"
    ]
  },
  {
    "dexNumber": 434,
    "abilities": [
      {
        "name": "Stench",
        "isHidden": false,
        "label": "Stench"
      },
      {
        "name": "Aftermath",
        "isHidden": false,
        "label": "Aftermath"
      },
      {
        "name": "Keen Eye",
        "isHidden": true,
        "label": "Keen Eye (HO)"
      }
    ],
    "eggMoves": [
      "Double Edge",
      "Leer",
      "Smog",
      "Scary Face",
      "Pursuit",
      "Crunch",
      "Astonish",
      "Punishment",
      "Haze",
      "Iron Tail",
      "Flame Burst",
      "Foul Play",
      "Play Rough",
      "Slash"
    ]
  },
  {
    "dexNumber": 435,
    "abilities": [
      {
        "name": "Stench",
        "isHidden": false,
        "label": "Stench"
      },
      {
        "name": "Aftermath",
        "isHidden": false,
        "label": "Aftermath"
      },
      {
        "name": "Keen Eye",
        "isHidden": true,
        "label": "Keen Eye (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 436,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      },
      {
        "name": "Heatproof",
        "isHidden": false,
        "label": "Heatproof"
      },
      {
        "name": "Heavy Metal",
        "isHidden": true,
        "label": "Heavy Metal (HO)"
      }
    ],
    "eggMoves": [
      "Recycle",
      "Gravity"
    ]
  },
  {
    "dexNumber": 437,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      },
      {
        "name": "Heatproof",
        "isHidden": false,
        "label": "Heatproof"
      },
      {
        "name": "Heavy Metal",
        "isHidden": true,
        "label": "Heavy Metal (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 438,
    "abilities": [
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Rock Head",
        "isHidden": false,
        "label": "Rock Head"
      },
      {
        "name": "Rattled",
        "isHidden": true,
        "label": "Rattled (HO)"
      }
    ],
    "eggMoves": [
      "Headbutt",
      "Harden",
      "Defense Curl",
      "Self Destruct",
      "Rollout",
      "Sand Tomb",
      "Curse",
      "Endure",
      "Stealth Rock",
      "Rock Polish"
    ]
  },
  {
    "dexNumber": 439,
    "abilities": [
      {
        "name": "Soundproof",
        "isHidden": false,
        "label": "Soundproof"
      },
      {
        "name": "Filter",
        "isHidden": false,
        "label": "Filter"
      },
      {
        "name": "Technician",
        "isHidden": true,
        "label": "Technician (HO)"
      }
    ],
    "eggMoves": [
      "Hypnosis",
      "Mimic",
      "Confuse Ray",
      "Charm",
      "Psych Up",
      "Future Sight",
      "Fake Out",
      "Trick",
      "Teeter Dance",
      "Wake Up Slap",
      "Healing Wish",
      "Nasty Plot",
      "Icy Wind",
      "Power Split",
      "Magic Room",
      "Psychic Terrain",
      "Tickle"
    ]
  },
  {
    "dexNumber": 440,
    "abilities": [
      {
        "name": "Natural Cure",
        "isHidden": false,
        "label": "Natural Cure"
      },
      {
        "name": "Serene Grace",
        "isHidden": false,
        "label": "Serene Grace"
      },
      {
        "name": "Friend Guard",
        "isHidden": true,
        "label": "Friend Guard (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "Metronome",
      "Substitute",
      "Heal Bell",
      "Present",
      "Helping Hand",
      "Aromatherapy",
      "Gravity",
      "Last Resort",
      "Mud Bomb",
      "Endure",
      "Natural Gift",
      "Seismic Toss"
    ]
  },
  {
    "dexNumber": 441,
    "abilities": [
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Tangled Feet",
        "isHidden": false,
        "label": "Tangled Feet"
      },
      {
        "name": "Big Pecks",
        "isHidden": true,
        "label": "Big Pecks (HO)"
      }
    ],
    "eggMoves": [
      "Supersonic",
      "Agility",
      "Night Shade",
      "Encore",
      "Nasty Plot",
      "Steel Wing",
      "Sleep Talk",
      "Air Cutter",
      "Defog",
      "Boomburst"
    ]
  },
  {
    "dexNumber": 442,
    "abilities": [
      {
        "name": "Pressure",
        "isHidden": false,
        "label": "Pressure"
      },
      {
        "name": "Infiltrator",
        "isHidden": true,
        "label": "Infiltrator (HO)"
      }
    ],
    "eggMoves": [
      "Smokescreen",
      "Destiny Bond",
      "Pain Split",
      "Imprison",
      "Grudge",
      "Shadow Sneak",
      "Nightmare",
      "Captivate",
      "Foul Play",
      "Disable",
      "Ally Switch"
    ]
  },
  {
    "dexNumber": 443,
    "abilities": [
      {
        "name": "Sand Veil",
        "isHidden": false,
        "label": "Sand Veil"
      },
      {
        "name": "Rough Skin",
        "isHidden": true,
        "label": "Rough Skin (HO)"
      }
    ],
    "eggMoves": [
      "Body Slam",
      "Thrash",
      "Double Edge",
      "Scary Face",
      "Outrage",
      "Dragon Breath",
      "Metal Claw",
      "Twister",
      "Sand Tomb",
      "Iron Head",
      "Mud Shot",
      "Iron Tail",
      "Rock Climb"
    ]
  },
  {
    "dexNumber": 444,
    "abilities": [
      {
        "name": "Sand Veil",
        "isHidden": false,
        "label": "Sand Veil"
      },
      {
        "name": "Rough Skin",
        "isHidden": true,
        "label": "Rough Skin (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 445,
    "abilities": [
      {
        "name": "Sand Veil",
        "isHidden": false,
        "label": "Sand Veil"
      },
      {
        "name": "Rough Skin",
        "isHidden": true,
        "label": "Rough Skin (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 446,
    "abilities": [
      {
        "name": "Pickup",
        "isHidden": false,
        "label": "Pickup"
      },
      {
        "name": "Thick Fat",
        "isHidden": false,
        "label": "Thick Fat"
      },
      {
        "name": "Gluttony",
        "isHidden": true,
        "label": "Gluttony (HO)"
      }
    ],
    "eggMoves": [
      "Whirlwind",
      "Double Edge",
      "Lick",
      "Substitute",
      "Curse",
      "Charm",
      "Pursuit",
      "Zen Headbutt",
      "Counter",
      "Self Destruct",
      "Natural Gift",
      "After You",
      "Belch",
      "Fissure"
    ]
  },
  {
    "dexNumber": 447,
    "abilities": [
      {
        "name": "Steadfast",
        "isHidden": false,
        "label": "Steadfast"
      },
      {
        "name": "Inner Focus",
        "isHidden": false,
        "label": "Inner Focus"
      },
      {
        "name": "Prankster",
        "isHidden": true,
        "label": "Prankster (HO)"
      }
    ],
    "eggMoves": [
      "Bite",
      "Low Kick",
      "Agility",
      "High Jump Kick",
      "Mind Reader",
      "Detect",
      "Cross Chop",
      "Crunch",
      "Blaze Kick",
      "Sky Uppercut",
      "Iron Defense",
      "Vacuum Wave",
      "Bullet Punch",
      "Follow Me",
      "Circle Throw",
      "Meteor Mash",
      "Howl"
    ]
  },
  {
    "dexNumber": 448,
    "abilities": [
      {
        "name": "Steadfast",
        "isHidden": false,
        "label": "Steadfast"
      },
      {
        "name": "Inner Focus",
        "isHidden": false,
        "label": "Inner Focus"
      },
      {
        "name": "Justified",
        "isHidden": true,
        "label": "Justified (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 449,
    "abilities": [
      {
        "name": "Sand Stream",
        "isHidden": false,
        "label": "Sand Stream"
      },
      {
        "name": "Sand Force",
        "isHidden": true,
        "label": "Sand Force (HO)"
      }
    ],
    "eggMoves": [
      "Body Slam",
      "Curse",
      "Stockpile",
      "Spit Up",
      "Swallow",
      "Slack Off",
      "Sand Tomb",
      "Revenge",
      "Whirlwind",
      "Sleep Talk"
    ]
  },
  {
    "dexNumber": 450,
    "abilities": [
      {
        "name": "Sand Stream",
        "isHidden": false,
        "label": "Sand Stream"
      },
      {
        "name": "Sand Force",
        "isHidden": true,
        "label": "Sand Force (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 451,
    "abilities": [
      {
        "name": "Battle Armor",
        "isHidden": false,
        "label": "Battle Armor"
      },
      {
        "name": "Sniper",
        "isHidden": false,
        "label": "Sniper"
      },
      {
        "name": "Keen Eye",
        "isHidden": true,
        "label": "Keen Eye (HO)"
      }
    ],
    "eggMoves": [
      "Whirlwind",
      "Sand Attack",
      "Agility",
      "Screech",
      "Confuse Ray",
      "Slash",
      "Feint Attack",
      "Pursuit",
      "Night Slash",
      "Twineedle",
      "Iron Tail",
      "Poison Tail"
    ]
  },
  {
    "dexNumber": 452,
    "abilities": [
      {
        "name": "Battle Armor",
        "isHidden": false,
        "label": "Battle Armor"
      },
      {
        "name": "Sniper",
        "isHidden": false,
        "label": "Sniper"
      },
      {
        "name": "Keen Eye",
        "isHidden": true,
        "label": "Keen Eye (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 453,
    "abilities": [
      {
        "name": "Anticipation",
        "isHidden": false,
        "label": "Anticipation"
      },
      {
        "name": "Dry Skin",
        "isHidden": false,
        "label": "Dry Skin"
      },
      {
        "name": "Poison Touch",
        "isHidden": true,
        "label": "Poison Touch (HO)"
      }
    ],
    "eggMoves": [
      "Headbutt",
      "Meditate",
      "Dynamic Punch",
      "Cross Chop",
      "Fake Out",
      "Smelling Salts",
      "Wake Up Slap",
      "Feint",
      "Me First",
      "Vacuum Wave",
      "Bullet Punch",
      "Counter",
      "Acupressure",
      "Drain Punch",
      "Quick Guard"
    ]
  },
  {
    "dexNumber": 454,
    "abilities": [
      {
        "name": "Anticipation",
        "isHidden": false,
        "label": "Anticipation"
      },
      {
        "name": "Dry Skin",
        "isHidden": false,
        "label": "Dry Skin"
      },
      {
        "name": "Poison Touch",
        "isHidden": true,
        "label": "Poison Touch (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 455,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": [
      "Slam",
      "Leech Seed",
      "Razor Leaf",
      "Stun Spore",
      "Sleep Powder",
      "Synthesis",
      "Magical Leaf",
      "Worry Seed",
      "Giga Drain",
      "Grass Whistle",
      "Rage Powder",
      "Acid Spray"
    ]
  },
  {
    "dexNumber": 456,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Storm Drain",
        "isHidden": false,
        "label": "Storm Drain"
      },
      {
        "name": "Water Veil",
        "isHidden": true,
        "label": "Water Veil (HO)"
      }
    ],
    "eggMoves": [
      "Psybeam",
      "Agility",
      "Splash",
      "Flail",
      "Sweet Kiss",
      "Charm",
      "Tickle",
      "Aqua Tail",
      "Aurora Beam",
      "Signal Beam",
      "Brine",
      "Confuse Ray"
    ]
  },
  {
    "dexNumber": 457,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Storm Drain",
        "isHidden": false,
        "label": "Storm Drain"
      },
      {
        "name": "Water Veil",
        "isHidden": true,
        "label": "Water Veil (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 458,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Water Absorb",
        "isHidden": false,
        "label": "Water Absorb"
      },
      {
        "name": "Water Veil",
        "isHidden": true,
        "label": "Water Veil (HO)"
      }
    ],
    "eggMoves": [
      "Slam",
      "Hydro Pump",
      "Haze",
      "Splash",
      "Rock Slide",
      "Twister",
      "Mirror Coat",
      "Mud Sport",
      "Signal Beam",
      "Water Sport",
      "Amnesia",
      "Wide Guard",
      "Tailwind",
      "Confuse Ray"
    ]
  },
  {
    "dexNumber": 459,
    "abilities": [
      {
        "name": "Snow Warning",
        "isHidden": false,
        "label": "Snow Warning"
      },
      {
        "name": "Soundproof",
        "isHidden": true,
        "label": "Soundproof (HO)"
      }
    ],
    "eggMoves": [
      "Stomp",
      "Double Edge",
      "Mist",
      "Leech Seed",
      "Growth",
      "Magical Leaf",
      "Seed Bomb",
      "Skull Bash",
      "Bullet Seed",
      "Natural Gift",
      "Avalanche",
      "Weather Ball"
    ]
  },
  {
    "dexNumber": 460,
    "abilities": [
      {
        "name": "Snow Warning",
        "isHidden": false,
        "label": "Snow Warning"
      },
      {
        "name": "Soundproof",
        "isHidden": true,
        "label": "Soundproof (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 461,
    "abilities": [
      {
        "name": "Pressure",
        "isHidden": false,
        "label": "Pressure"
      },
      {
        "name": "Pickpocket",
        "isHidden": true,
        "label": "Pickpocket (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 462,
    "abilities": [
      {
        "name": "Magnet Pull",
        "isHidden": false,
        "label": "Magnet Pull"
      },
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Analytic",
        "isHidden": true,
        "label": "Analytic (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 463,
    "abilities": [
      {
        "name": "Own Tempo",
        "isHidden": false,
        "label": "Own Tempo"
      },
      {
        "name": "Oblivious",
        "isHidden": false,
        "label": "Oblivious"
      },
      {
        "name": "Cloud Nine",
        "isHidden": true,
        "label": "Cloud Nine (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 464,
    "abilities": [
      {
        "name": "Lightning Rod",
        "isHidden": false,
        "label": "Lightning Rod"
      },
      {
        "name": "Solid Rock",
        "isHidden": false,
        "label": "Solid Rock"
      },
      {
        "name": "Reckless",
        "isHidden": true,
        "label": "Reckless (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "Curse",
      "Metal Burst",
      "Rock Polish",
      "Dragon Rush",
      "Guard Split"
    ]
  },
  {
    "dexNumber": 465,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Leaf Guard",
        "isHidden": false,
        "label": "Leaf Guard"
      },
      {
        "name": "Regenerator",
        "isHidden": true,
        "label": "Regenerator (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 466,
    "abilities": [
      {
        "name": "Motor Drive",
        "isHidden": false,
        "label": "Motor Drive"
      },
      {
        "name": "Vital Spirit",
        "isHidden": true,
        "label": "Vital Spirit (HO)"
      }
    ],
    "eggMoves": [
      "Dynamic Punch",
      "Cross Chop",
      "Focus Punch",
      "Follow Me",
      "Hammer Arm",
      "Feint"
    ]
  },
  {
    "dexNumber": 467,
    "abilities": [
      {
        "name": "Flame Body",
        "isHidden": false,
        "label": "Flame Body"
      },
      {
        "name": "Vital Spirit",
        "isHidden": true,
        "label": "Vital Spirit (HO)"
      }
    ],
    "eggMoves": [
      "Mach Punch",
      "Belly Drum",
      "Dynamic Punch",
      "Cross Chop",
      "Focus Punch",
      "Follow Me",
      "Belch"
    ]
  },
  {
    "dexNumber": 468,
    "abilities": [
      {
        "name": "Hustle",
        "isHidden": false,
        "label": "Hustle"
      },
      {
        "name": "Serene Grace",
        "isHidden": false,
        "label": "Serene Grace"
      },
      {
        "name": "Super Luck",
        "isHidden": true,
        "label": "Super Luck (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 469,
    "abilities": [
      {
        "name": "Speed Boost",
        "isHidden": false,
        "label": "Speed Boost"
      },
      {
        "name": "Tinted Lens",
        "isHidden": false,
        "label": "Tinted Lens"
      },
      {
        "name": "Frisk",
        "isHidden": true,
        "label": "Frisk (HO)"
      }
    ],
    "eggMoves": [
      "Whirlwind",
      "Double Edge",
      "Feint"
    ]
  },
  {
    "dexNumber": 470,
    "abilities": [
      {
        "name": "Leaf Guard",
        "isHidden": false,
        "label": "Leaf Guard"
      },
      {
        "name": "Chlorophyll",
        "isHidden": true,
        "label": "Chlorophyll (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 471,
    "abilities": [
      {
        "name": "Snow Cloak",
        "isHidden": false,
        "label": "Snow Cloak"
      },
      {
        "name": "Ice Body",
        "isHidden": true,
        "label": "Ice Body (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 472,
    "abilities": [
      {
        "name": "Hyper Cutter",
        "isHidden": false,
        "label": "Hyper Cutter"
      },
      {
        "name": "Sand Veil",
        "isHidden": false,
        "label": "Sand Veil"
      },
      {
        "name": "Poison Heal",
        "isHidden": true,
        "label": "Poison Heal (HO)"
      }
    ],
    "eggMoves": [
      "Wing Attack",
      "Double Edge",
      "Counter",
      "Feint",
      "Night Slash",
      "Cross Poison"
    ]
  },
  {
    "dexNumber": 473,
    "abilities": [
      {
        "name": "Oblivious",
        "isHidden": false,
        "label": "Oblivious"
      },
      {
        "name": "Snow Cloak",
        "isHidden": false,
        "label": "Snow Cloak"
      },
      {
        "name": "Thick Fat",
        "isHidden": true,
        "label": "Thick Fat (HO)"
      }
    ],
    "eggMoves": [
      "Double Edge",
      "Bite",
      "Fissure",
      "Curse",
      "Ancient Power",
      "Icicle Crash",
      "Freeze Dry"
    ]
  },
  {
    "dexNumber": 474,
    "abilities": [
      {
        "name": "Adaptability",
        "isHidden": false,
        "label": "Adaptability"
      },
      {
        "name": "Download",
        "isHidden": false,
        "label": "Download"
      },
      {
        "name": "Analytic",
        "isHidden": true,
        "label": "Analytic (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 475,
    "abilities": [
      {
        "name": "Steadfast",
        "isHidden": false,
        "label": "Steadfast"
      },
      {
        "name": "Sharpness",
        "isHidden": false,
        "label": "Sharpness"
      },
      {
        "name": "Justified",
        "isHidden": true,
        "label": "Justified (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 476,
    "abilities": [
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Magnet Pull",
        "isHidden": false,
        "label": "Magnet Pull"
      },
      {
        "name": "Sand Force",
        "isHidden": true,
        "label": "Sand Force (HO)"
      }
    ],
    "eggMoves": [
      "Double Edge",
      "Rollout",
      "Head Smash",
      "Wide Guard"
    ]
  },
  {
    "dexNumber": 477,
    "abilities": [
      {
        "name": "Pressure",
        "isHidden": false,
        "label": "Pressure"
      },
      {
        "name": "Frisk",
        "isHidden": true,
        "label": "Frisk (HO)"
      }
    ],
    "eggMoves": [
      "Haze",
      "Pain Split",
      "Memento"
    ]
  },
  {
    "dexNumber": 478,
    "abilities": [
      {
        "name": "Snow Cloak",
        "isHidden": false,
        "label": "Snow Cloak"
      },
      {
        "name": "Cursed Body",
        "isHidden": true,
        "label": "Cursed Body (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 479,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 480,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 481,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 482,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 483,
    "abilities": [
      {
        "name": "Pressure",
        "isHidden": false,
        "label": "Pressure"
      },
      {
        "name": "Telepathy",
        "isHidden": true,
        "label": "Telepathy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 484,
    "abilities": [
      {
        "name": "Pressure",
        "isHidden": false,
        "label": "Pressure"
      },
      {
        "name": "Telepathy",
        "isHidden": true,
        "label": "Telepathy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 485,
    "abilities": [
      {
        "name": "Flash Fire",
        "isHidden": false,
        "label": "Flash Fire"
      },
      {
        "name": "Flame Body",
        "isHidden": true,
        "label": "Flame Body (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 486,
    "abilities": [
      {
        "name": "Slow Start",
        "isHidden": false,
        "label": "Slow Start"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 487,
    "abilities": [
      {
        "name": "Pressure",
        "isHidden": false,
        "label": "Pressure"
      },
      {
        "name": "Telepathy",
        "isHidden": true,
        "label": "Telepathy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 488,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 489,
    "abilities": [
      {
        "name": "Hydration",
        "isHidden": false,
        "label": "Hydration"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 490,
    "abilities": [
      {
        "name": "Hydration",
        "isHidden": false,
        "label": "Hydration"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 491,
    "abilities": [
      {
        "name": "Bad Dreams",
        "isHidden": false,
        "label": "Bad Dreams"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 492,
    "abilities": [
      {
        "name": "Natural Cure",
        "isHidden": false,
        "label": "Natural Cure"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 493,
    "abilities": [
      {
        "name": "Multitype",
        "isHidden": false,
        "label": "Multitype"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 494,
    "abilities": [
      {
        "name": "Victory Star",
        "isHidden": false,
        "label": "Victory Star"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 495,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Contrary",
        "isHidden": true,
        "label": "Contrary (HO)"
      }
    ],
    "eggMoves": [
      "Glare",
      "Mean Look",
      "Pursuit",
      "Sweet Scent",
      "Iron Tail",
      "Twister",
      "Mirror Coat",
      "Magical Leaf",
      "Natural Gift",
      "Captivate",
      "Grassy Terrain",
      "Synthesis"
    ]
  },
  {
    "dexNumber": 496,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Contrary",
        "isHidden": true,
        "label": "Contrary (HO)"
      }
    ],
    "eggMoves": [
      "Glare",
      "Mean Look",
      "Sweet Scent",
      "Iron Tail",
      "Synthesis",
      "Twister",
      "Mirror Coat"
    ]
  },
  {
    "dexNumber": 497,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Contrary",
        "isHidden": true,
        "label": "Contrary (HO)"
      }
    ],
    "eggMoves": [
      "Glare",
      "Mean Look",
      "Sweet Scent",
      "Iron Tail",
      "Synthesis",
      "Twister",
      "Mirror Coat"
    ]
  },
  {
    "dexNumber": 498,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Thick Fat",
        "isHidden": true,
        "label": "Thick Fat (HO)"
      }
    ],
    "eggMoves": [
      "Body Slam",
      "Thrash",
      "Curse",
      "Sleep Talk",
      "Magnitude",
      "Superpower",
      "Yawn",
      "Endeavor",
      "Covet",
      "Heavy Slam",
      "Sucker Punch",
      "Burn Up"
    ]
  },
  {
    "dexNumber": 499,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Thick Fat",
        "isHidden": true,
        "label": "Thick Fat (HO)"
      }
    ],
    "eggMoves": [
      "Thrash",
      "Superpower",
      "Yawn",
      "Sucker Punch"
    ]
  },
  {
    "dexNumber": 500,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Reckless",
        "isHidden": true,
        "label": "Reckless (HO)"
      }
    ],
    "eggMoves": [
      "Thrash",
      "Endure",
      "Superpower",
      "Yawn",
      "Hammer Arm",
      "Sucker Punch"
    ]
  },
  {
    "dexNumber": 501,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Shell Armor",
        "isHidden": true,
        "label": "Shell Armor (HO)"
      }
    ],
    "eggMoves": [
      "Screech",
      "Detect",
      "Brine",
      "Assurance",
      "Trump Card",
      "Copycat",
      "Night Slash",
      "Air Slash",
      "Sacred Sword",
      "Knock Off",
      "Aqua Cutter"
    ]
  },
  {
    "dexNumber": 502,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Shell Armor",
        "isHidden": true,
        "label": "Shell Armor (HO)"
      }
    ],
    "eggMoves": [
      "Screech",
      "Detect",
      "Knock Off",
      "Copycat",
      "Night Slash",
      "Air Slash",
      "Sacred Sword",
      "Aqua Cutter"
    ]
  },
  {
    "dexNumber": 503,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Shell Armor",
        "isHidden": true,
        "label": "Shell Armor (HO)"
      }
    ],
    "eggMoves": [
      "Screech",
      "Detect",
      "Knock Off",
      "Copycat",
      "Night Slash",
      "Air Slash",
      "Sacred Sword",
      "Aqua Cutter"
    ]
  },
  {
    "dexNumber": 504,
    "abilities": [
      {
        "name": "Run Away",
        "isHidden": false,
        "label": "Run Away"
      },
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Analytic",
        "isHidden": true,
        "label": "Analytic (HO)"
      }
    ],
    "eggMoves": [
      "Screech",
      "Flail",
      "Foresight",
      "Pursuit",
      "Iron Tail",
      "Revenge",
      "Assurance",
      "Bullet Seed",
      "Tearful Look"
    ]
  },
  {
    "dexNumber": 505,
    "abilities": [
      {
        "name": "Illuminate",
        "isHidden": false,
        "label": "Illuminate"
      },
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Analytic",
        "isHidden": true,
        "label": "Analytic (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 506,
    "abilities": [
      {
        "name": "Vital Spirit",
        "isHidden": false,
        "label": "Vital Spirit"
      },
      {
        "name": "Pickup",
        "isHidden": false,
        "label": "Pickup"
      },
      {
        "name": "Run Away",
        "isHidden": true,
        "label": "Run Away (HO)"
      }
    ],
    "eggMoves": [
      "Sand Attack",
      "Lick",
      "Mud Slap",
      "Endure",
      "Charm",
      "Pursuit",
      "Yawn",
      "Howl",
      "Thunder Fang",
      "Ice Fang",
      "Fire Fang",
      "After You",
      "Psychic Fangs",
      "Covet"
    ]
  },
  {
    "dexNumber": 507,
    "abilities": [
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Sand Rush",
        "isHidden": false,
        "label": "Sand Rush"
      },
      {
        "name": "Scrappy",
        "isHidden": true,
        "label": "Scrappy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 508,
    "abilities": [
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Sand Rush",
        "isHidden": false,
        "label": "Sand Rush"
      },
      {
        "name": "Scrappy",
        "isHidden": true,
        "label": "Scrappy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 509,
    "abilities": [
      {
        "name": "Limber",
        "isHidden": false,
        "label": "Limber"
      },
      {
        "name": "Unburden",
        "isHidden": false,
        "label": "Unburden"
      },
      {
        "name": "Prankster",
        "isHidden": true,
        "label": "Prankster (HO)"
      }
    ],
    "eggMoves": [
      "Pay Day",
      "Feint Attack",
      "Charm",
      "Encore",
      "Yawn",
      "Fake Tears",
      "Covet",
      "Foul Play",
      "Copycat",
      "Quick Attack",
      "Double Team",
      "Slash"
    ]
  },
  {
    "dexNumber": 510,
    "abilities": [
      {
        "name": "Limber",
        "isHidden": false,
        "label": "Limber"
      },
      {
        "name": "Unburden",
        "isHidden": false,
        "label": "Unburden"
      },
      {
        "name": "Prankster",
        "isHidden": true,
        "label": "Prankster (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 511,
    "abilities": [
      {
        "name": "Gluttony",
        "isHidden": false,
        "label": "Gluttony"
      },
      {
        "name": "Overgrow",
        "isHidden": true,
        "label": "Overgrow (HO)"
      }
    ],
    "eggMoves": [
      "Low Kick",
      "Role Play",
      "Astonish",
      "Grass Whistle",
      "Tickle",
      "Bullet Seed",
      "Covet",
      "Magical Leaf",
      "Nasty Plot",
      "Leaf Storm",
      "Disarming Voice",
      "Spiky Shield"
    ]
  },
  {
    "dexNumber": 512,
    "abilities": [
      {
        "name": "Gluttony",
        "isHidden": false,
        "label": "Gluttony"
      },
      {
        "name": "Overgrow",
        "isHidden": true,
        "label": "Overgrow (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 513,
    "abilities": [
      {
        "name": "Gluttony",
        "isHidden": false,
        "label": "Gluttony"
      },
      {
        "name": "Blaze",
        "isHidden": true,
        "label": "Blaze (HO)"
      }
    ],
    "eggMoves": [
      "Fire Punch",
      "Low Kick",
      "Fire Spin",
      "Sleep Talk",
      "Heat Wave",
      "Role Play",
      "Astonish",
      "Tickle",
      "Covet",
      "Nasty Plot",
      "Disarming Voice",
      "Flare Blitz",
      "Belch"
    ]
  },
  {
    "dexNumber": 514,
    "abilities": [
      {
        "name": "Gluttony",
        "isHidden": false,
        "label": "Gluttony"
      },
      {
        "name": "Blaze",
        "isHidden": true,
        "label": "Blaze (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 515,
    "abilities": [
      {
        "name": "Gluttony",
        "isHidden": false,
        "label": "Gluttony"
      },
      {
        "name": "Torrent",
        "isHidden": true,
        "label": "Torrent (HO)"
      }
    ],
    "eggMoves": [
      "Hydro Pump",
      "Low Kick",
      "Role Play",
      "Mud Sport",
      "Astonish",
      "Tickle",
      "Covet",
      "Aqua Ring",
      "Aqua Tail",
      "Nasty Plot",
      "Disarming Voice"
    ]
  },
  {
    "dexNumber": 516,
    "abilities": [
      {
        "name": "Gluttony",
        "isHidden": false,
        "label": "Gluttony"
      },
      {
        "name": "Torrent",
        "isHidden": true,
        "label": "Torrent (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 517,
    "abilities": [
      {
        "name": "Forewarn",
        "isHidden": false,
        "label": "Forewarn"
      },
      {
        "name": "Synchronize",
        "isHidden": false,
        "label": "Synchronize"
      },
      {
        "name": "Telepathy",
        "isHidden": true,
        "label": "Telepathy (HO)"
      }
    ],
    "eggMoves": [
      "Sonic Boom",
      "Barrier",
      "Swift",
      "Curse",
      "Sleep Talk",
      "Baton Pass",
      "Helping Hand",
      "Magic Coat",
      "Secret Power",
      "Healing Wish"
    ]
  },
  {
    "dexNumber": 518,
    "abilities": [
      {
        "name": "Forewarn",
        "isHidden": false,
        "label": "Forewarn"
      },
      {
        "name": "Synchronize",
        "isHidden": false,
        "label": "Synchronize"
      },
      {
        "name": "Telepathy",
        "isHidden": true,
        "label": "Telepathy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 519,
    "abilities": [
      {
        "name": "Big Pecks",
        "isHidden": false,
        "label": "Big Pecks"
      },
      {
        "name": "Super Luck",
        "isHidden": false,
        "label": "Super Luck"
      },
      {
        "name": "Rivalry",
        "isHidden": true,
        "label": "Rivalry (HO)"
      }
    ],
    "eggMoves": [
      "Hypnosis",
      "Steel Wing",
      "Morning Sun",
      "Uproar",
      "Wish",
      "Lucky Chant",
      "Bestow",
      "Night Slash",
      "Defog"
    ]
  },
  {
    "dexNumber": 520,
    "abilities": [
      {
        "name": "Big Pecks",
        "isHidden": false,
        "label": "Big Pecks"
      },
      {
        "name": "Super Luck",
        "isHidden": false,
        "label": "Super Luck"
      },
      {
        "name": "Rivalry",
        "isHidden": true,
        "label": "Rivalry (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 521,
    "abilities": [
      {
        "name": "Big Pecks",
        "isHidden": false,
        "label": "Big Pecks"
      },
      {
        "name": "Super Luck",
        "isHidden": false,
        "label": "Super Luck"
      },
      {
        "name": "Rivalry",
        "isHidden": true,
        "label": "Rivalry (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 522,
    "abilities": [
      {
        "name": "Lightning Rod",
        "isHidden": false,
        "label": "Lightning Rod"
      },
      {
        "name": "Motor Drive",
        "isHidden": false,
        "label": "Motor Drive"
      },
      {
        "name": "Sap Sipper",
        "isHidden": true,
        "label": "Sap Sipper (HO)"
      }
    ],
    "eggMoves": [
      "Double Kick",
      "Sand Attack",
      "Take Down",
      "Double Edge",
      "Rage",
      "Screech",
      "Endure",
      "Shock Wave",
      "Me First",
      "Snatch",
      "Feint"
    ]
  },
  {
    "dexNumber": 523,
    "abilities": [
      {
        "name": "Lightning Rod",
        "isHidden": false,
        "label": "Lightning Rod"
      },
      {
        "name": "Motor Drive",
        "isHidden": false,
        "label": "Motor Drive"
      },
      {
        "name": "Sap Sipper",
        "isHidden": true,
        "label": "Sap Sipper (HO)"
      }
    ],
    "eggMoves": [
      "Double Kick",
      "Sand Attack",
      "Screech",
      "Feint"
    ]
  },
  {
    "dexNumber": 524,
    "abilities": [
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Weak Armor",
        "isHidden": false,
        "label": "Weak Armor"
      },
      {
        "name": "Sand Force",
        "isHidden": true,
        "label": "Sand Force (HO)"
      }
    ],
    "eggMoves": [
      "Take Down",
      "Curse",
      "Lock On",
      "Magnitude",
      "Rock Tomb",
      "Gravity",
      "Autotomize",
      "Heavy Slam",
      "Wide Guard"
    ]
  },
  {
    "dexNumber": 525,
    "abilities": [
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Weak Armor",
        "isHidden": false,
        "label": "Weak Armor"
      },
      {
        "name": "Sand Force",
        "isHidden": true,
        "label": "Sand Force (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 526,
    "abilities": [
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Sand Stream",
        "isHidden": false,
        "label": "Sand Stream"
      },
      {
        "name": "Sand Force",
        "isHidden": true,
        "label": "Sand Force (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 527,
    "abilities": [
      {
        "name": "Unaware",
        "isHidden": false,
        "label": "Unaware"
      },
      {
        "name": "Klutz",
        "isHidden": false,
        "label": "Klutz"
      },
      {
        "name": "Simple",
        "isHidden": true,
        "label": "Simple (HO)"
      }
    ],
    "eggMoves": [
      "Supersonic",
      "Charm",
      "Flatter",
      "Helping Hand",
      "Knock Off",
      "Fake Tears",
      "Roost",
      "Synchronoise",
      "Stored Power",
      "Psycho Shift",
      "Captivate",
      "Venom Drench"
    ]
  },
  {
    "dexNumber": 528,
    "abilities": [
      {
        "name": "Unaware",
        "isHidden": false,
        "label": "Unaware"
      },
      {
        "name": "Klutz",
        "isHidden": false,
        "label": "Klutz"
      },
      {
        "name": "Simple",
        "isHidden": true,
        "label": "Simple (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 529,
    "abilities": [
      {
        "name": "Sand Rush",
        "isHidden": false,
        "label": "Sand Rush"
      },
      {
        "name": "Sand Force",
        "isHidden": false,
        "label": "Sand Force"
      },
      {
        "name": "Mold Breaker",
        "isHidden": true,
        "label": "Mold Breaker (HO)"
      }
    ],
    "eggMoves": [
      "Submission",
      "Skull Bash",
      "Rapid Spin",
      "Crush Claw",
      "Metal Sound",
      "Iron Defense",
      "Earth Power",
      "Rock Climb",
      "Slash"
    ]
  },
  {
    "dexNumber": 530,
    "abilities": [
      {
        "name": "Sand Rush",
        "isHidden": false,
        "label": "Sand Rush"
      },
      {
        "name": "Sand Force",
        "isHidden": false,
        "label": "Sand Force"
      },
      {
        "name": "Mold Breaker",
        "isHidden": true,
        "label": "Mold Breaker (HO)"
      }
    ],
    "eggMoves": [
      "Slash",
      "Metal Sound"
    ]
  },
  {
    "dexNumber": 531,
    "abilities": [
      {
        "name": "Healer",
        "isHidden": false,
        "label": "Healer"
      },
      {
        "name": "Regenerator",
        "isHidden": false,
        "label": "Regenerator"
      },
      {
        "name": "Klutz",
        "isHidden": true,
        "label": "Klutz (HO)"
      }
    ],
    "eggMoves": [
      "Amnesia",
      "Sweet Kiss",
      "Sleep Talk",
      "Heal Bell",
      "Encore",
      "Wish",
      "Yawn",
      "Healing Wish",
      "Lucky Chant",
      "Bestow",
      "Draining Kiss"
    ]
  },
  {
    "dexNumber": 532,
    "abilities": [
      {
        "name": "Guts",
        "isHidden": false,
        "label": "Guts"
      },
      {
        "name": "Sheer Force",
        "isHidden": false,
        "label": "Sheer Force"
      },
      {
        "name": "Iron Fist",
        "isHidden": true,
        "label": "Iron Fist (HO)"
      }
    ],
    "eggMoves": [
      "Comet Punch",
      "Counter",
      "Reversal",
      "Mach Punch",
      "Foresight",
      "Detect",
      "Endure",
      "Smelling Salts",
      "Force Palm",
      "Drain Punch",
      "Wide Guard",
      "Power Up Punch",
      "Defog"
    ]
  },
  {
    "dexNumber": 533,
    "abilities": [
      {
        "name": "Guts",
        "isHidden": false,
        "label": "Guts"
      },
      {
        "name": "Sheer Force",
        "isHidden": false,
        "label": "Sheer Force"
      },
      {
        "name": "Iron Fist",
        "isHidden": true,
        "label": "Iron Fist (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "Mach Punch",
      "Detect",
      "Defog",
      "Wide Guard"
    ]
  },
  {
    "dexNumber": 534,
    "abilities": [
      {
        "name": "Guts",
        "isHidden": false,
        "label": "Guts"
      },
      {
        "name": "Sheer Force",
        "isHidden": false,
        "label": "Sheer Force"
      },
      {
        "name": "Iron Fist",
        "isHidden": true,
        "label": "Iron Fist (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "Mach Punch",
      "Detect",
      "Defog",
      "Wide Guard"
    ]
  },
  {
    "dexNumber": 535,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Hydration",
        "isHidden": false,
        "label": "Hydration"
      },
      {
        "name": "Water Absorb",
        "isHidden": true,
        "label": "Water Absorb (HO)"
      }
    ],
    "eggMoves": [
      "Mist",
      "Snore",
      "Sleep Talk",
      "Refresh",
      "Mud Sport",
      "Water Pulse",
      "Earth Power",
      "Mud Bomb",
      "After You",
      "Venom Drench",
      "Toxic",
      "Mud Slap"
    ]
  },
  {
    "dexNumber": 536,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Hydration",
        "isHidden": false,
        "label": "Hydration"
      },
      {
        "name": "Water Absorb",
        "isHidden": true,
        "label": "Water Absorb (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 537,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Poison Touch",
        "isHidden": false,
        "label": "Poison Touch"
      },
      {
        "name": "Water Absorb",
        "isHidden": true,
        "label": "Water Absorb (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 538,
    "abilities": [
      {
        "name": "Guts",
        "isHidden": false,
        "label": "Guts"
      },
      {
        "name": "Inner Focus",
        "isHidden": false,
        "label": "Inner Focus"
      },
      {
        "name": "Mold Breaker",
        "isHidden": true,
        "label": "Mold Breaker (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 539,
    "abilities": [
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Inner Focus",
        "isHidden": false,
        "label": "Inner Focus"
      },
      {
        "name": "Mold Breaker",
        "isHidden": true,
        "label": "Mold Breaker (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 540,
    "abilities": [
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      },
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Overcoat",
        "isHidden": true,
        "label": "Overcoat (HO)"
      }
    ],
    "eggMoves": [
      "Razor Wind",
      "Agility",
      "Screech",
      "Mind Reader",
      "Baton Pass",
      "Camouflage",
      "Silver Wind",
      "Me First",
      "Air Slash",
      "Grassy Terrain",
      "Snore",
      "Synthesis",
      "Worry Seed",
      "Switcheroo"
    ]
  },
  {
    "dexNumber": 541,
    "abilities": [
      {
        "name": "Leaf Guard",
        "isHidden": false,
        "label": "Leaf Guard"
      },
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Overcoat",
        "isHidden": true,
        "label": "Overcoat (HO)"
      }
    ],
    "eggMoves": [
      "Screech",
      "Snore",
      "Synthesis",
      "Worry Seed",
      "Switcheroo"
    ]
  },
  {
    "dexNumber": 542,
    "abilities": [
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      },
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Overcoat",
        "isHidden": true,
        "label": "Overcoat (HO)"
      }
    ],
    "eggMoves": [
      "Screech",
      "Snore",
      "Synthesis",
      "Worry Seed",
      "Switcheroo",
      "Bug Bite"
    ]
  },
  {
    "dexNumber": 543,
    "abilities": [
      {
        "name": "Poison Point",
        "isHidden": false,
        "label": "Poison Point"
      },
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      },
      {
        "name": "Speed Boost",
        "isHidden": true,
        "label": "Speed Boost (HO)"
      }
    ],
    "eggMoves": [
      "Take Down",
      "Twineedle",
      "Pin Missile",
      "Spikes",
      "Toxic Spikes",
      "Rock Climb",
      "Bite",
      "Fury Cutter"
    ]
  },
  {
    "dexNumber": 544,
    "abilities": [
      {
        "name": "Poison Point",
        "isHidden": false,
        "label": "Poison Point"
      },
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      },
      {
        "name": "Speed Boost",
        "isHidden": true,
        "label": "Speed Boost (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 545,
    "abilities": [
      {
        "name": "Poison Point",
        "isHidden": false,
        "label": "Poison Point"
      },
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      },
      {
        "name": "Speed Boost",
        "isHidden": true,
        "label": "Speed Boost (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 546,
    "abilities": [
      {
        "name": "Prankster",
        "isHidden": false,
        "label": "Prankster"
      },
      {
        "name": "Infiltrator",
        "isHidden": false,
        "label": "Infiltrator"
      },
      {
        "name": "Chlorophyll",
        "isHidden": true,
        "label": "Chlorophyll (HO)"
      }
    ],
    "eggMoves": [
      "Encore",
      "Beat Up",
      "Memento",
      "Fake Tears",
      "Grass Whistle",
      "Tickle",
      "Natural Gift",
      "Worry Seed",
      "Switcheroo",
      "Captivate",
      "Misty Terrain",
      "Nature Power"
    ]
  },
  {
    "dexNumber": 547,
    "abilities": [
      {
        "name": "Prankster",
        "isHidden": false,
        "label": "Prankster"
      },
      {
        "name": "Infiltrator",
        "isHidden": false,
        "label": "Infiltrator"
      },
      {
        "name": "Chlorophyll",
        "isHidden": true,
        "label": "Chlorophyll (HO)"
      }
    ],
    "eggMoves": [
      "Beat Up",
      "Memento",
      "Tickle",
      "Worry Seed",
      "Switcheroo"
    ]
  },
  {
    "dexNumber": 548,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Own Tempo",
        "isHidden": false,
        "label": "Own Tempo"
      },
      {
        "name": "Leaf Guard",
        "isHidden": true,
        "label": "Leaf Guard (HO)"
      }
    ],
    "eggMoves": [
      "Bide",
      "Endure",
      "Charm",
      "Sweet Scent",
      "Ingrain",
      "Grass Whistle",
      "Healing Wish",
      "Natural Gift",
      "Worry Seed",
      "Encore"
    ]
  },
  {
    "dexNumber": 549,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Own Tempo",
        "isHidden": false,
        "label": "Own Tempo"
      },
      {
        "name": "Leaf Guard",
        "isHidden": true,
        "label": "Leaf Guard (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 550,
    "abilities": [
      {
        "name": "Reckless",
        "isHidden": false,
        "label": "Reckless"
      },
      {
        "name": "Adaptability",
        "isHidden": false,
        "label": "Adaptability"
      },
      {
        "name": "Mold Breaker",
        "isHidden": true,
        "label": "Mold Breaker (HO)"
      }
    ],
    "eggMoves": [
      "Bubble Beam",
      "Agility",
      "Rage",
      "Swift",
      "Whirlpool",
      "Revenge",
      "Muddy Water",
      "Mud Shot",
      "Brine",
      "Head Smash",
      "Endeavor"
    ]
  },
  {
    "dexNumber": 551,
    "abilities": [
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Moxie",
        "isHidden": false,
        "label": "Moxie"
      },
      {
        "name": "Anger Point",
        "isHidden": true,
        "label": "Anger Point (HO)"
      }
    ],
    "eggMoves": [
      "Double Edge",
      "Counter",
      "Focus Energy",
      "Mean Look",
      "Pursuit",
      "Beat Up",
      "Uproar",
      "Thunder Fang",
      "Fire Fang",
      "Rock Climb",
      "Me First",
      "Power Trip",
      "Spite",
      "Aqua Tail"
    ]
  },
  {
    "dexNumber": 552,
    "abilities": [
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Moxie",
        "isHidden": false,
        "label": "Moxie"
      },
      {
        "name": "Anger Point",
        "isHidden": true,
        "label": "Anger Point (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 553,
    "abilities": [
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Moxie",
        "isHidden": false,
        "label": "Moxie"
      },
      {
        "name": "Anger Point",
        "isHidden": true,
        "label": "Anger Point (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 554,
    "abilities": [
      {
        "name": "Hustle",
        "isHidden": false,
        "label": "Hustle"
      },
      {
        "name": "Inner Focus",
        "isHidden": true,
        "label": "Inner Focus (HO)"
      }
    ],
    "eggMoves": [
      "Take Down",
      "Focus Energy",
      "Flame Wheel",
      "Endure",
      "Sleep Talk",
      "Encore",
      "Focus Punch",
      "Yawn",
      "Hammer Arm",
      "Snatch",
      "Extrasensory"
    ]
  },
  {
    "dexNumber": 555,
    "abilities": [
      {
        "name": "Sheer Force",
        "isHidden": false,
        "label": "Sheer Force"
      },
      {
        "name": "Zen Mode",
        "isHidden": true,
        "label": "Zen Mode (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 556,
    "abilities": [
      {
        "name": "Water Absorb",
        "isHidden": false,
        "label": "Water Absorb"
      },
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Storm Drain",
        "isHidden": true,
        "label": "Storm Drain (HO)"
      }
    ],
    "eggMoves": [
      "Leech Seed",
      "Spikes",
      "Grass Whistle",
      "Bullet Seed",
      "Bounce",
      "Worry Seed",
      "Seed Bomb",
      "Wood Hammer",
      "Grassy Terrain"
    ]
  },
  {
    "dexNumber": 557,
    "abilities": [
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Shell Armor",
        "isHidden": false,
        "label": "Shell Armor"
      },
      {
        "name": "Weak Armor",
        "isHidden": true,
        "label": "Weak Armor (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "Curse",
      "Spikes",
      "Endure",
      "Sand Tomb",
      "Iron Defense",
      "Block",
      "Night Slash",
      "Wide Guard",
      "Rototiller",
      "Knock Off"
    ]
  },
  {
    "dexNumber": 558,
    "abilities": [
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Shell Armor",
        "isHidden": false,
        "label": "Shell Armor"
      },
      {
        "name": "Weak Armor",
        "isHidden": true,
        "label": "Weak Armor (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 559,
    "abilities": [
      {
        "name": "Shed Skin",
        "isHidden": false,
        "label": "Shed Skin"
      },
      {
        "name": "Moxie",
        "isHidden": false,
        "label": "Moxie"
      },
      {
        "name": "Intimidate",
        "isHidden": true,
        "label": "Intimidate (HO)"
      }
    ],
    "eggMoves": [
      "Fire Punch",
      "Ice Punch",
      "Thunder Punch",
      "Counter",
      "Amnesia",
      "Feint Attack",
      "Detect",
      "Fake Out",
      "Dragon Dance",
      "Drain Punch",
      "Zen Headbutt",
      "Quick Guard",
      "Acid Spray",
      "Power Up Punch"
    ]
  },
  {
    "dexNumber": 560,
    "abilities": [
      {
        "name": "Shed Skin",
        "isHidden": false,
        "label": "Shed Skin"
      },
      {
        "name": "Moxie",
        "isHidden": false,
        "label": "Moxie"
      },
      {
        "name": "Intimidate",
        "isHidden": true,
        "label": "Intimidate (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "Detect",
      "Fake Out",
      "Quick Guard"
    ]
  },
  {
    "dexNumber": 561,
    "abilities": [
      {
        "name": "Wonder Skin",
        "isHidden": false,
        "label": "Wonder Skin"
      },
      {
        "name": "Magic Guard",
        "isHidden": false,
        "label": "Magic Guard"
      },
      {
        "name": "Tinted Lens",
        "isHidden": true,
        "label": "Tinted Lens (HO)"
      }
    ],
    "eggMoves": [
      "Steel Wing",
      "Ancient Power",
      "Skill Swap",
      "Roost",
      "Psycho Shift",
      "Stored Power",
      "Future Sight"
    ]
  },
  {
    "dexNumber": 562,
    "abilities": [
      {
        "name": "Mummy",
        "isHidden": false,
        "label": "Mummy"
      }
    ],
    "eggMoves": [
      "Disable",
      "Nightmare",
      "Endure",
      "Memento",
      "Imprison",
      "Fake Tears",
      "Heal Block",
      "Nasty Plot",
      "Toxic Spikes",
      "Ally Switch",
      "Crafty Shield"
    ]
  },
  {
    "dexNumber": 563,
    "abilities": [
      {
        "name": "Mummy",
        "isHidden": false,
        "label": "Mummy"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 564,
    "abilities": [
      {
        "name": "Solid Rock",
        "isHidden": false,
        "label": "Solid Rock"
      },
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Swift Swim",
        "isHidden": true,
        "label": "Swift Swim (HO)"
      }
    ],
    "eggMoves": [
      "Slam",
      "Body Slam",
      "Rock Throw",
      "Bide",
      "Flail",
      "Whirlpool",
      "Knock Off",
      "Iron Defense",
      "Water Pulse",
      "Guard Swap",
      "Liquidation",
      "Rollout",
      "Block"
    ]
  },
  {
    "dexNumber": 565,
    "abilities": [
      {
        "name": "Solid Rock",
        "isHidden": false,
        "label": "Solid Rock"
      },
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Swift Swim",
        "isHidden": true,
        "label": "Swift Swim (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 566,
    "abilities": [
      {
        "name": "Defeatist",
        "isHidden": false,
        "label": "Defeatist"
      }
    ],
    "eggMoves": [
      "Bite",
      "Steel Wing",
      "Knock Off",
      "Dragon Pulse",
      "Earth Power",
      "Defog",
      "Head Smash",
      "Switcheroo",
      "Ally Switch",
      "Double Team"
    ]
  },
  {
    "dexNumber": 567,
    "abilities": [
      {
        "name": "Defeatist",
        "isHidden": false,
        "label": "Defeatist"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 568,
    "abilities": [
      {
        "name": "Stench",
        "isHidden": false,
        "label": "Stench"
      },
      {
        "name": "Sticky Hold",
        "isHidden": false,
        "label": "Sticky Hold"
      },
      {
        "name": "Aftermath",
        "isHidden": true,
        "label": "Aftermath (HO)"
      }
    ],
    "eggMoves": [
      "Sand Attack",
      "Haze",
      "Self Destruct",
      "Curse",
      "Spikes",
      "Rollout",
      "Mud Sport",
      "Rock Blast",
      "Autotomize"
    ]
  },
  {
    "dexNumber": 569,
    "abilities": [
      {
        "name": "Stench",
        "isHidden": false,
        "label": "Stench"
      },
      {
        "name": "Weak Armor",
        "isHidden": false,
        "label": "Weak Armor"
      },
      {
        "name": "Aftermath",
        "isHidden": true,
        "label": "Aftermath (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 570,
    "abilities": [
      {
        "name": "Illusion",
        "isHidden": false,
        "label": "Illusion"
      }
    ],
    "eggMoves": [
      "Counter",
      "Detect",
      "Memento",
      "Snatch",
      "Extrasensory",
      "Sucker Punch",
      "Dark Pulse",
      "Captivate",
      "Copycat"
    ]
  },
  {
    "dexNumber": 571,
    "abilities": [
      {
        "name": "Illusion",
        "isHidden": false,
        "label": "Illusion"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 572,
    "abilities": [
      {
        "name": "Cute Charm",
        "isHidden": false,
        "label": "Cute Charm"
      },
      {
        "name": "Technician",
        "isHidden": false,
        "label": "Technician"
      },
      {
        "name": "Skill Link",
        "isHidden": true,
        "label": "Skill Link (HO)"
      }
    ],
    "eggMoves": [
      "Tail Whip",
      "Flail",
      "Mud Slap",
      "Endure",
      "Sleep Talk",
      "Iron Tail",
      "Knock Off",
      "Fake Tears",
      "Aqua Tail",
      "Tidy Up"
    ]
  },
  {
    "dexNumber": 573,
    "abilities": [
      {
        "name": "Cute Charm",
        "isHidden": false,
        "label": "Cute Charm"
      },
      {
        "name": "Technician",
        "isHidden": false,
        "label": "Technician"
      },
      {
        "name": "Skill Link",
        "isHidden": true,
        "label": "Skill Link (HO)"
      }
    ],
    "eggMoves": [
      "Slam",
      "Tail Whip",
      "Swift",
      "Flail",
      "Encore",
      "Helping Hand",
      "Knock Off",
      "Hyper Voice",
      "Tickle",
      "Rock Blast",
      "Last Resort",
      "Aqua Tail",
      "After You",
      "Echoed Voice",
      "Baby Doll Eyes",
      "Tidy Up"
    ]
  },
  {
    "dexNumber": 574,
    "abilities": [
      {
        "name": "Frisk",
        "isHidden": false,
        "label": "Frisk"
      },
      {
        "name": "Competitive",
        "isHidden": false,
        "label": "Competitive"
      },
      {
        "name": "Shadow Tag",
        "isHidden": true,
        "label": "Shadow Tag (HO)"
      }
    ],
    "eggMoves": [
      "Mean Look",
      "Mirror Coat",
      "Uproar",
      "Miracle Eye",
      "Dark Pulse",
      "Captivate",
      "Heal Pulse",
      "Fake Out",
      "Torment"
    ]
  },
  {
    "dexNumber": 575,
    "abilities": [
      {
        "name": "Frisk",
        "isHidden": false,
        "label": "Frisk"
      },
      {
        "name": "Competitive",
        "isHidden": false,
        "label": "Competitive"
      },
      {
        "name": "Shadow Tag",
        "isHidden": true,
        "label": "Shadow Tag (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 576,
    "abilities": [
      {
        "name": "Frisk",
        "isHidden": false,
        "label": "Frisk"
      },
      {
        "name": "Competitive",
        "isHidden": false,
        "label": "Competitive"
      },
      {
        "name": "Shadow Tag",
        "isHidden": true,
        "label": "Shadow Tag (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 577,
    "abilities": [
      {
        "name": "Overcoat",
        "isHidden": false,
        "label": "Overcoat"
      },
      {
        "name": "Magic Guard",
        "isHidden": false,
        "label": "Magic Guard"
      },
      {
        "name": "Regenerator",
        "isHidden": true,
        "label": "Regenerator (HO)"
      }
    ],
    "eggMoves": [
      "Night Shade",
      "Confuse Ray",
      "Acid Armor",
      "Trick",
      "Imprison",
      "Secret Power",
      "Astonish",
      "Helping Hand"
    ]
  },
  {
    "dexNumber": 578,
    "abilities": [
      {
        "name": "Overcoat",
        "isHidden": false,
        "label": "Overcoat"
      },
      {
        "name": "Magic Guard",
        "isHidden": false,
        "label": "Magic Guard"
      },
      {
        "name": "Regenerator",
        "isHidden": true,
        "label": "Regenerator (HO)"
      }
    ],
    "eggMoves": [
      "Confuse Ray",
      "Acid Armor",
      "Astonish"
    ]
  },
  {
    "dexNumber": 579,
    "abilities": [
      {
        "name": "Overcoat",
        "isHidden": false,
        "label": "Overcoat"
      },
      {
        "name": "Magic Guard",
        "isHidden": false,
        "label": "Magic Guard"
      },
      {
        "name": "Regenerator",
        "isHidden": true,
        "label": "Regenerator (HO)"
      }
    ],
    "eggMoves": [
      "Confuse Ray",
      "Acid Armor",
      "Astonish"
    ]
  },
  {
    "dexNumber": 580,
    "abilities": [
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Big Pecks",
        "isHidden": false,
        "label": "Big Pecks"
      },
      {
        "name": "Hydration",
        "isHidden": true,
        "label": "Hydration (HO)"
      }
    ],
    "eggMoves": [
      "Gust",
      "Mirror Move",
      "Steel Wing",
      "Air Cutter",
      "Brine",
      "Lucky Chant",
      "Me First",
      "Mud Sport",
      "Aqua Jet",
      "Endeavor",
      "Dive"
    ]
  },
  {
    "dexNumber": 581,
    "abilities": [
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Big Pecks",
        "isHidden": false,
        "label": "Big Pecks"
      },
      {
        "name": "Hydration",
        "isHidden": true,
        "label": "Hydration (HO)"
      }
    ],
    "eggMoves": [
      "Gust",
      "Steel Wing",
      "Endeavor",
      "Dive",
      "Brine",
      "Aqua Jet"
    ]
  },
  {
    "dexNumber": 582,
    "abilities": [
      {
        "name": "Ice Body",
        "isHidden": false,
        "label": "Ice Body"
      },
      {
        "name": "Snow Cloak",
        "isHidden": false,
        "label": "Snow Cloak"
      },
      {
        "name": "Weak Armor",
        "isHidden": true,
        "label": "Weak Armor (HO)"
      }
    ],
    "eggMoves": [
      "Powder Snow",
      "Imprison",
      "Iron Defense",
      "Water Pulse",
      "Natural Gift",
      "Magnet Rise",
      "Ice Shard",
      "Autotomize",
      "Explosion",
      "Icicle Crash",
      "Aurora Veil"
    ]
  },
  {
    "dexNumber": 583,
    "abilities": [
      {
        "name": "Ice Body",
        "isHidden": false,
        "label": "Ice Body"
      },
      {
        "name": "Snow Cloak",
        "isHidden": false,
        "label": "Snow Cloak"
      },
      {
        "name": "Weak Armor",
        "isHidden": true,
        "label": "Weak Armor (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 584,
    "abilities": [
      {
        "name": "Ice Body",
        "isHidden": false,
        "label": "Ice Body"
      },
      {
        "name": "Snow Warning",
        "isHidden": false,
        "label": "Snow Warning"
      },
      {
        "name": "Weak Armor",
        "isHidden": true,
        "label": "Weak Armor (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 585,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Sap Sipper",
        "isHidden": false,
        "label": "Sap Sipper"
      },
      {
        "name": "Serene Grace",
        "isHidden": true,
        "label": "Serene Grace (HO)"
      }
    ],
    "eggMoves": [
      "Agility",
      "Sleep Talk",
      "Baton Pass",
      "Synthesis",
      "Fake Tears",
      "Odor Sleuth",
      "Grass Whistle",
      "Natural Gift",
      "Worry Seed",
      "Headbutt"
    ]
  },
  {
    "dexNumber": 586,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Sap Sipper",
        "isHidden": false,
        "label": "Sap Sipper"
      },
      {
        "name": "Serene Grace",
        "isHidden": true,
        "label": "Serene Grace (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 587,
    "abilities": [
      {
        "name": "Static",
        "isHidden": false,
        "label": "Static"
      },
      {
        "name": "Motor Drive",
        "isHidden": true,
        "label": "Motor Drive (HO)"
      }
    ],
    "eggMoves": [
      "Charm",
      "Baton Pass",
      "Iron Tail",
      "Astonish",
      "Tickle",
      "Covet",
      "Shock Wave",
      "Roost",
      "Air Slash",
      "Ion Deluge",
      "Speed Swap",
      "Defog"
    ]
  },
  {
    "dexNumber": 588,
    "abilities": [
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      },
      {
        "name": "Shed Skin",
        "isHidden": false,
        "label": "Shed Skin"
      },
      {
        "name": "No Guard",
        "isHidden": true,
        "label": "No Guard (HO)"
      }
    ],
    "eggMoves": [
      "Horn Attack",
      "Counter",
      "Screech",
      "Feint Attack",
      "Megahorn",
      "Pursuit",
      "Knock Off",
      "Bug Bite",
      "Drill Run",
      "Slash",
      "Night Slash"
    ]
  },
  {
    "dexNumber": 589,
    "abilities": [
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      },
      {
        "name": "Shell Armor",
        "isHidden": false,
        "label": "Shell Armor"
      },
      {
        "name": "Overcoat",
        "isHidden": true,
        "label": "Overcoat (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 590,
    "abilities": [
      {
        "name": "Effect Spore",
        "isHidden": false,
        "label": "Effect Spore"
      },
      {
        "name": "Regenerator",
        "isHidden": true,
        "label": "Regenerator (HO)"
      }
    ],
    "eggMoves": [
      "Body Slam",
      "Growth",
      "Poison Powder",
      "Stun Spore",
      "Defense Curl",
      "Endure",
      "Rollout",
      "Gastro Acid",
      "Worry Seed"
    ]
  },
  {
    "dexNumber": 591,
    "abilities": [
      {
        "name": "Effect Spore",
        "isHidden": false,
        "label": "Effect Spore"
      },
      {
        "name": "Regenerator",
        "isHidden": true,
        "label": "Regenerator (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 592,
    "abilities": [
      {
        "name": "Water Absorb",
        "isHidden": false,
        "label": "Water Absorb"
      },
      {
        "name": "Cursed Body",
        "isHidden": false,
        "label": "Cursed Body"
      },
      {
        "name": "Damp",
        "isHidden": true,
        "label": "Damp (HO)"
      }
    ],
    "eggMoves": [
      "Mist",
      "Recover",
      "Confuse Ray",
      "Constrict",
      "Acid Armor",
      "Pain Split",
      "Bubble Beam",
      "Strength Sap"
    ]
  },
  {
    "dexNumber": 593,
    "abilities": [
      {
        "name": "Water Absorb",
        "isHidden": false,
        "label": "Water Absorb"
      },
      {
        "name": "Cursed Body",
        "isHidden": false,
        "label": "Cursed Body"
      },
      {
        "name": "Damp",
        "isHidden": true,
        "label": "Damp (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 594,
    "abilities": [
      {
        "name": "Healer",
        "isHidden": false,
        "label": "Healer"
      },
      {
        "name": "Hydration",
        "isHidden": false,
        "label": "Hydration"
      },
      {
        "name": "Regenerator",
        "isHidden": true,
        "label": "Regenerator (HO)"
      }
    ],
    "eggMoves": [
      "Mist",
      "Endure",
      "Pain Split",
      "Mirror Coat",
      "Refresh",
      "Tickle",
      "Bounce"
    ]
  },
  {
    "dexNumber": 595,
    "abilities": [
      {
        "name": "Compound Eyes",
        "isHidden": false,
        "label": "Compound Eyes"
      },
      {
        "name": "Unnerve",
        "isHidden": false,
        "label": "Unnerve"
      },
      {
        "name": "Swarm",
        "isHidden": true,
        "label": "Swarm (HO)"
      }
    ],
    "eggMoves": [
      "Poison Sting",
      "Pin Missile",
      "Disable",
      "Feint Attack",
      "Pursuit",
      "Rock Climb",
      "Cross Poison",
      "Camouflage",
      "Lunge",
      "Double Team",
      "Struggle Bug",
      "Infestation"
    ]
  },
  {
    "dexNumber": 596,
    "abilities": [
      {
        "name": "Compound Eyes",
        "isHidden": false,
        "label": "Compound Eyes"
      },
      {
        "name": "Unnerve",
        "isHidden": false,
        "label": "Unnerve"
      },
      {
        "name": "Swarm",
        "isHidden": true,
        "label": "Swarm (HO)"
      }
    ],
    "eggMoves": [
      "Poison Sting",
      "Double Team",
      "Struggle Bug",
      "Infestation",
      "Lunge"
    ]
  },
  {
    "dexNumber": 597,
    "abilities": [
      {
        "name": "Iron Barbs",
        "isHidden": false,
        "label": "Iron Barbs"
      }
    ],
    "eggMoves": [
      "Leech Seed",
      "Spikes",
      "Bullet Seed",
      "Gravity",
      "Worry Seed",
      "Seed Bomb",
      "Rock Climb",
      "Stealth Rock",
      "Acid Spray",
      "Toxic",
      "Knock Off"
    ]
  },
  {
    "dexNumber": 598,
    "abilities": [
      {
        "name": "Iron Barbs",
        "isHidden": false,
        "label": "Iron Barbs"
      },
      {
        "name": "Anticipation",
        "isHidden": true,
        "label": "Anticipation (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 599,
    "abilities": [
      {
        "name": "Plus",
        "isHidden": false,
        "label": "Plus"
      },
      {
        "name": "Minus",
        "isHidden": false,
        "label": "Minus"
      },
      {
        "name": "Clear Body",
        "isHidden": true,
        "label": "Clear Body (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 600,
    "abilities": [
      {
        "name": "Plus",
        "isHidden": false,
        "label": "Plus"
      },
      {
        "name": "Minus",
        "isHidden": false,
        "label": "Minus"
      },
      {
        "name": "Clear Body",
        "isHidden": true,
        "label": "Clear Body (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 601,
    "abilities": [
      {
        "name": "Plus",
        "isHidden": false,
        "label": "Plus"
      },
      {
        "name": "Minus",
        "isHidden": false,
        "label": "Minus"
      },
      {
        "name": "Clear Body",
        "isHidden": true,
        "label": "Clear Body (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 602,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 603,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 604,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 605,
    "abilities": [
      {
        "name": "Telepathy",
        "isHidden": false,
        "label": "Telepathy"
      },
      {
        "name": "Synchronize",
        "isHidden": false,
        "label": "Synchronize"
      },
      {
        "name": "Analytic",
        "isHidden": true,
        "label": "Analytic (HO)"
      }
    ],
    "eggMoves": [
      "Disable",
      "Teleport",
      "Barrier",
      "Skill Swap",
      "Astonish",
      "Power Swap",
      "Guard Swap",
      "Nasty Plot",
      "Cosmic Power",
      "Ally Switch",
      "Destiny Bond",
      "Psych Up"
    ]
  },
  {
    "dexNumber": 606,
    "abilities": [
      {
        "name": "Telepathy",
        "isHidden": false,
        "label": "Telepathy"
      },
      {
        "name": "Synchronize",
        "isHidden": false,
        "label": "Synchronize"
      },
      {
        "name": "Analytic",
        "isHidden": true,
        "label": "Analytic (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 607,
    "abilities": [
      {
        "name": "Flash Fire",
        "isHidden": false,
        "label": "Flash Fire"
      },
      {
        "name": "Flame Body",
        "isHidden": false,
        "label": "Flame Body"
      },
      {
        "name": "Infiltrator",
        "isHidden": true,
        "label": "Infiltrator (HO)"
      }
    ],
    "eggMoves": [
      "Acid",
      "Haze",
      "Acid Armor",
      "Endure",
      "Heat Wave",
      "Captivate",
      "Clear Smog",
      "Power Split"
    ]
  },
  {
    "dexNumber": 608,
    "abilities": [
      {
        "name": "Flash Fire",
        "isHidden": false,
        "label": "Flash Fire"
      },
      {
        "name": "Flame Body",
        "isHidden": false,
        "label": "Flame Body"
      },
      {
        "name": "Infiltrator",
        "isHidden": true,
        "label": "Infiltrator (HO)"
      }
    ],
    "eggMoves": [
      "Haze",
      "Acid Armor",
      "Power Split",
      "Clear Smog"
    ]
  },
  {
    "dexNumber": 609,
    "abilities": [
      {
        "name": "Flash Fire",
        "isHidden": false,
        "label": "Flash Fire"
      },
      {
        "name": "Flame Body",
        "isHidden": false,
        "label": "Flame Body"
      },
      {
        "name": "Infiltrator",
        "isHidden": true,
        "label": "Infiltrator (HO)"
      }
    ],
    "eggMoves": [
      "Haze",
      "Acid Armor",
      "Power Split",
      "Clear Smog"
    ]
  },
  {
    "dexNumber": 610,
    "abilities": [
      {
        "name": "Rivalry",
        "isHidden": false,
        "label": "Rivalry"
      },
      {
        "name": "Mold Breaker",
        "isHidden": false,
        "label": "Mold Breaker"
      },
      {
        "name": "Unnerve",
        "isHidden": true,
        "label": "Unnerve (HO)"
      }
    ],
    "eggMoves": [
      "Razor Wind",
      "Counter",
      "Harden",
      "Focus Energy",
      "Reversal",
      "Endure",
      "Iron Tail",
      "Endeavor",
      "Night Slash",
      "Dragon Pulse",
      "First Impression",
      "Aqua Tail"
    ]
  },
  {
    "dexNumber": 611,
    "abilities": [
      {
        "name": "Rivalry",
        "isHidden": false,
        "label": "Rivalry"
      },
      {
        "name": "Mold Breaker",
        "isHidden": false,
        "label": "Mold Breaker"
      },
      {
        "name": "Unnerve",
        "isHidden": true,
        "label": "Unnerve (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 612,
    "abilities": [
      {
        "name": "Rivalry",
        "isHidden": false,
        "label": "Rivalry"
      },
      {
        "name": "Mold Breaker",
        "isHidden": false,
        "label": "Mold Breaker"
      },
      {
        "name": "Unnerve",
        "isHidden": true,
        "label": "Unnerve (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 613,
    "abilities": [
      {
        "name": "Snow Cloak",
        "isHidden": false,
        "label": "Snow Cloak"
      },
      {
        "name": "Slush Rush",
        "isHidden": false,
        "label": "Slush Rush"
      },
      {
        "name": "Rattled",
        "isHidden": true,
        "label": "Rattled (HO)"
      }
    ],
    "eggMoves": [
      "Ice Punch",
      "Sleep Talk",
      "Encore",
      "Focus Punch",
      "Yawn",
      "Assurance",
      "Night Slash",
      "Avalanche",
      "Play Rough"
    ]
  },
  {
    "dexNumber": 614,
    "abilities": [
      {
        "name": "Snow Cloak",
        "isHidden": false,
        "label": "Snow Cloak"
      },
      {
        "name": "Slush Rush",
        "isHidden": false,
        "label": "Slush Rush"
      },
      {
        "name": "Swift Swim",
        "isHidden": true,
        "label": "Swift Swim (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 615,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": [
      "Explosion",
      "Frost Breath",
      "Aurora Veil"
    ]
  },
  {
    "dexNumber": 616,
    "abilities": [
      {
        "name": "Hydration",
        "isHidden": false,
        "label": "Hydration"
      },
      {
        "name": "Shell Armor",
        "isHidden": false,
        "label": "Shell Armor"
      },
      {
        "name": "Overcoat",
        "isHidden": true,
        "label": "Overcoat (HO)"
      }
    ],
    "eggMoves": [
      "Double Edge",
      "Mind Reader",
      "Mud Slap",
      "Spikes",
      "Endure",
      "Baton Pass",
      "Encore",
      "Pursuit",
      "Feint",
      "Guard Split",
      "Toxic Spikes"
    ]
  },
  {
    "dexNumber": 617,
    "abilities": [
      {
        "name": "Hydration",
        "isHidden": false,
        "label": "Hydration"
      },
      {
        "name": "Sticky Hold",
        "isHidden": false,
        "label": "Sticky Hold"
      },
      {
        "name": "Unburden",
        "isHidden": true,
        "label": "Unburden (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 618,
    "abilities": [
      {
        "name": "Static",
        "isHidden": false,
        "label": "Static"
      },
      {
        "name": "Limber",
        "isHidden": false,
        "label": "Limber"
      },
      {
        "name": "Sand Veil",
        "isHidden": true,
        "label": "Sand Veil (HO)"
      }
    ],
    "eggMoves": [
      "Curse",
      "Spite",
      "Spark",
      "Sleep Talk",
      "Pain Split",
      "Yawn",
      "Astonish",
      "Shock Wave",
      "Earth Power",
      "Me First",
      "Reflect Type",
      "Eerie Impulse"
    ]
  },
  {
    "dexNumber": 619,
    "abilities": [
      {
        "name": "Inner Focus",
        "isHidden": false,
        "label": "Inner Focus"
      },
      {
        "name": "Regenerator",
        "isHidden": false,
        "label": "Regenerator"
      },
      {
        "name": "Reckless",
        "isHidden": true,
        "label": "Reckless (HO)"
      }
    ],
    "eggMoves": [
      "Low Kick",
      "Endure",
      "Baton Pass",
      "Vital Throw",
      "Smelling Salts",
      "Knock Off",
      "Feint",
      "Me First",
      "Ally Switch",
      "Focus Punch"
    ]
  },
  {
    "dexNumber": 620,
    "abilities": [
      {
        "name": "Inner Focus",
        "isHidden": false,
        "label": "Inner Focus"
      },
      {
        "name": "Regenerator",
        "isHidden": false,
        "label": "Regenerator"
      },
      {
        "name": "Reckless",
        "isHidden": true,
        "label": "Reckless (HO)"
      }
    ],
    "eggMoves": [
      "Focus Punch",
      "Knock Off",
      "Feint"
    ]
  },
  {
    "dexNumber": 621,
    "abilities": [
      {
        "name": "Rough Skin",
        "isHidden": false,
        "label": "Rough Skin"
      },
      {
        "name": "Sheer Force",
        "isHidden": false,
        "label": "Sheer Force"
      },
      {
        "name": "Mold Breaker",
        "isHidden": true,
        "label": "Mold Breaker (HO)"
      }
    ],
    "eggMoves": [
      "Glare",
      "Feint Attack",
      "Pursuit",
      "Iron Tail",
      "Metal Claw",
      "Snatch",
      "Crush Claw",
      "Poison Tail",
      "Sucker Punch",
      "Thunder Fang",
      "Fire Fang",
      "Night Slash"
    ]
  },
  {
    "dexNumber": 622,
    "abilities": [
      {
        "name": "Iron Fist",
        "isHidden": false,
        "label": "Iron Fist"
      },
      {
        "name": "Klutz",
        "isHidden": false,
        "label": "Klutz"
      },
      {
        "name": "No Guard",
        "isHidden": true,
        "label": "No Guard (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 623,
    "abilities": [
      {
        "name": "Iron Fist",
        "isHidden": false,
        "label": "Iron Fist"
      },
      {
        "name": "Klutz",
        "isHidden": false,
        "label": "Klutz"
      },
      {
        "name": "No Guard",
        "isHidden": true,
        "label": "No Guard (HO)"
      }
    ],
    "eggMoves": [
      "Mud Slap",
      "Focus Punch"
    ]
  },
  {
    "dexNumber": 624,
    "abilities": [
      {
        "name": "Defiant",
        "isHidden": false,
        "label": "Defiant"
      },
      {
        "name": "Inner Focus",
        "isHidden": false,
        "label": "Inner Focus"
      },
      {
        "name": "Pressure",
        "isHidden": true,
        "label": "Pressure (HO)"
      }
    ],
    "eggMoves": [
      "Headbutt",
      "Mean Look",
      "Pursuit",
      "Revenge",
      "Sucker Punch",
      "Psycho Cut",
      "Stealth Rock",
      "Quick Guard"
    ]
  },
  {
    "dexNumber": 625,
    "abilities": [
      {
        "name": "Defiant",
        "isHidden": false,
        "label": "Defiant"
      },
      {
        "name": "Inner Focus",
        "isHidden": false,
        "label": "Inner Focus"
      },
      {
        "name": "Pressure",
        "isHidden": true,
        "label": "Pressure (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 626,
    "abilities": [
      {
        "name": "Reckless",
        "isHidden": false,
        "label": "Reckless"
      },
      {
        "name": "Sap Sipper",
        "isHidden": false,
        "label": "Sap Sipper"
      },
      {
        "name": "Soundproof",
        "isHidden": true,
        "label": "Soundproof (HO)"
      }
    ],
    "eggMoves": [
      "Stomp",
      "Headbutt",
      "Skull Bash",
      "Amnesia",
      "Mud Slap",
      "Mud Shot",
      "Rock Climb",
      "Iron Head",
      "Belch",
      "Cotton Guard",
      "Endeavor"
    ]
  },
  {
    "dexNumber": 627,
    "abilities": [
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Sheer Force",
        "isHidden": false,
        "label": "Sheer Force"
      },
      {
        "name": "Hustle",
        "isHidden": true,
        "label": "Hustle (HO)"
      }
    ],
    "eggMoves": [
      "Rock Smash",
      "Roost"
    ]
  },
  {
    "dexNumber": 628,
    "abilities": [
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Sheer Force",
        "isHidden": false,
        "label": "Sheer Force"
      },
      {
        "name": "Defiant",
        "isHidden": true,
        "label": "Defiant (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 629,
    "abilities": [
      {
        "name": "Big Pecks",
        "isHidden": false,
        "label": "Big Pecks"
      },
      {
        "name": "Overcoat",
        "isHidden": false,
        "label": "Overcoat"
      },
      {
        "name": "Weak Armor",
        "isHidden": true,
        "label": "Weak Armor (HO)"
      }
    ],
    "eggMoves": [
      "Scary Face",
      "Steel Wing",
      "Mean Look",
      "Knock Off",
      "Fake Tears",
      "Roost",
      "Foul Play",
      "Toxic"
    ]
  },
  {
    "dexNumber": 630,
    "abilities": [
      {
        "name": "Big Pecks",
        "isHidden": false,
        "label": "Big Pecks"
      },
      {
        "name": "Overcoat",
        "isHidden": false,
        "label": "Overcoat"
      },
      {
        "name": "Weak Armor",
        "isHidden": true,
        "label": "Weak Armor (HO)"
      }
    ],
    "eggMoves": [
      "Toxic",
      "Mean Look",
      "Roost"
    ]
  },
  {
    "dexNumber": 631,
    "abilities": [
      {
        "name": "Gluttony",
        "isHidden": false,
        "label": "Gluttony"
      },
      {
        "name": "Flash Fire",
        "isHidden": false,
        "label": "Flash Fire"
      },
      {
        "name": "White Smoke",
        "isHidden": true,
        "label": "White Smoke (HO)"
      }
    ],
    "eggMoves": [
      "Body Slam",
      "Wrap",
      "Curse",
      "Feint Attack",
      "Sleep Talk",
      "Pursuit",
      "Heat Wave",
      "Tickle",
      "Sucker Punch",
      "Night Slash",
      "Belch"
    ]
  },
  {
    "dexNumber": 632,
    "abilities": [
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      },
      {
        "name": "Hustle",
        "isHidden": false,
        "label": "Hustle"
      },
      {
        "name": "Truant",
        "isHidden": true,
        "label": "Truant (HO)"
      }
    ],
    "eggMoves": [
      "Screech",
      "Feint Attack",
      "Endure",
      "Baton Pass",
      "Thunder Fang",
      "Rock Climb",
      "Flail",
      "Metal Burst",
      "Struggle Bug",
      "Infestation",
      "First Impression"
    ]
  },
  {
    "dexNumber": 633,
    "abilities": [
      {
        "name": "Hustle",
        "isHidden": false,
        "label": "Hustle"
      }
    ],
    "eggMoves": [
      "Screech",
      "Astonish",
      "Assurance",
      "Dark Pulse",
      "Earth Power",
      "Thunder Fang",
      "Ice Fang",
      "Fire Fang",
      "Head Smash",
      "Double Hit",
      "Belch"
    ]
  },
  {
    "dexNumber": 634,
    "abilities": [
      {
        "name": "Hustle",
        "isHidden": false,
        "label": "Hustle"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 635,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 636,
    "abilities": [
      {
        "name": "Flame Body",
        "isHidden": false,
        "label": "Flame Body"
      },
      {
        "name": "Swarm",
        "isHidden": true,
        "label": "Swarm (HO)"
      }
    ],
    "eggMoves": [
      "String Shot",
      "Harden",
      "Foresight",
      "Endure",
      "Morning Sun",
      "Magnet Rise",
      "Zen Headbutt",
      "Thrash",
      "Absorb"
    ]
  },
  {
    "dexNumber": 637,
    "abilities": [
      {
        "name": "Flame Body",
        "isHidden": false,
        "label": "Flame Body"
      },
      {
        "name": "Swarm",
        "isHidden": true,
        "label": "Swarm (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 638,
    "abilities": [
      {
        "name": "Justified",
        "isHidden": false,
        "label": "Justified"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 639,
    "abilities": [
      {
        "name": "Justified",
        "isHidden": false,
        "label": "Justified"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 640,
    "abilities": [
      {
        "name": "Justified",
        "isHidden": false,
        "label": "Justified"
      }
    ],
    "eggMoves": [
      "Take Down"
    ]
  },
  {
    "dexNumber": 641,
    "abilities": [
      {
        "name": "Prankster",
        "isHidden": false,
        "label": "Prankster"
      },
      {
        "name": "Defiant",
        "isHidden": true,
        "label": "Defiant (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 642,
    "abilities": [
      {
        "name": "Prankster",
        "isHidden": false,
        "label": "Prankster"
      },
      {
        "name": "Defiant",
        "isHidden": true,
        "label": "Defiant (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 643,
    "abilities": [
      {
        "name": "Turboblaze",
        "isHidden": false,
        "label": "Turboblaze"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 644,
    "abilities": [
      {
        "name": "Teravolt",
        "isHidden": false,
        "label": "Teravolt"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 645,
    "abilities": [
      {
        "name": "Sand Force",
        "isHidden": false,
        "label": "Sand Force"
      },
      {
        "name": "Sheer Force",
        "isHidden": true,
        "label": "Sheer Force (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 646,
    "abilities": [
      {
        "name": "Pressure",
        "isHidden": false,
        "label": "Pressure"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 647,
    "abilities": [
      {
        "name": "Justified",
        "isHidden": false,
        "label": "Justified"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 648,
    "abilities": [
      {
        "name": "Serene Grace",
        "isHidden": false,
        "label": "Serene Grace"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 649,
    "abilities": [
      {
        "name": "Download",
        "isHidden": false,
        "label": "Download"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 650,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Bulletproof",
        "isHidden": true,
        "label": "Bulletproof (HO)"
      }
    ],
    "eggMoves": [
      "Defense Curl",
      "Curse",
      "Belly Drum",
      "Spikes",
      "Rollout",
      "Synthesis",
      "Quick Guard",
      "Power Up Punch",
      "Super Fang",
      "Wide Guard"
    ]
  },
  {
    "dexNumber": 651,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Bulletproof",
        "isHidden": true,
        "label": "Bulletproof (HO)"
      }
    ],
    "eggMoves": [
      "Super Fang",
      "Curse",
      "Belly Drum",
      "Spikes",
      "Synthesis",
      "Wide Guard",
      "Quick Guard"
    ]
  },
  {
    "dexNumber": 652,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Bulletproof",
        "isHidden": true,
        "label": "Bulletproof (HO)"
      }
    ],
    "eggMoves": [
      "Super Fang",
      "Curse",
      "Belly Drum",
      "Spikes",
      "Synthesis",
      "Wide Guard",
      "Quick Guard"
    ]
  },
  {
    "dexNumber": 653,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Magician",
        "isHidden": true,
        "label": "Magician (HO)"
      }
    ],
    "eggMoves": [
      "Hypnosis",
      "Heat Wave",
      "Wish",
      "Magic Coat",
      "Psychic Terrain",
      "Copycat",
      "Magic Room"
    ]
  },
  {
    "dexNumber": 654,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Magician",
        "isHidden": true,
        "label": "Magician (HO)"
      }
    ],
    "eggMoves": [
      "Hypnosis",
      "Heat Wave",
      "Wish",
      "Copycat",
      "Magic Room"
    ]
  },
  {
    "dexNumber": 655,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Magician",
        "isHidden": true,
        "label": "Magician (HO)"
      }
    ],
    "eggMoves": [
      "Hypnosis",
      "Heat Wave",
      "Wish",
      "Copycat",
      "Magic Room"
    ]
  },
  {
    "dexNumber": 656,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Protean",
        "isHidden": true,
        "label": "Protean (HO)"
      }
    ],
    "eggMoves": [
      "Mind Reader",
      "Camouflage",
      "Mud Sport",
      "Water Sport",
      "Toxic Spikes",
      "Bestow",
      "Power Up Punch",
      "Counter",
      "Spikes",
      "Switcheroo",
      "Retaliate"
    ]
  },
  {
    "dexNumber": 657,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Protean",
        "isHidden": true,
        "label": "Protean (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "Spikes",
      "Toxic Spikes",
      "Switcheroo",
      "Retaliate"
    ]
  },
  {
    "dexNumber": 658,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Protean",
        "isHidden": true,
        "label": "Protean (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "Spikes",
      "Toxic Spikes",
      "Switcheroo",
      "Retaliate"
    ]
  },
  {
    "dexNumber": 659,
    "abilities": [
      {
        "name": "Pickup",
        "isHidden": false,
        "label": "Pickup"
      },
      {
        "name": "Cheek Pouch",
        "isHidden": false,
        "label": "Cheek Pouch"
      },
      {
        "name": "Huge Power",
        "isHidden": true,
        "label": "Huge Power (HO)"
      }
    ],
    "eggMoves": [
      "Defense Curl",
      "Spikes",
      "Rollout"
    ]
  },
  {
    "dexNumber": 660,
    "abilities": [
      {
        "name": "Pickup",
        "isHidden": false,
        "label": "Pickup"
      },
      {
        "name": "Cheek Pouch",
        "isHidden": false,
        "label": "Cheek Pouch"
      },
      {
        "name": "Huge Power",
        "isHidden": true,
        "label": "Huge Power (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 661,
    "abilities": [
      {
        "name": "Big Pecks",
        "isHidden": false,
        "label": "Big Pecks"
      },
      {
        "name": "Gale Wings",
        "isHidden": true,
        "label": "Gale Wings (HO)"
      }
    ],
    "eggMoves": [
      "Snatch",
      "Tailwind",
      "Quick Guard",
      "Defog",
      "Flame Charge"
    ]
  },
  {
    "dexNumber": 662,
    "abilities": [
      {
        "name": "Flame Body",
        "isHidden": false,
        "label": "Flame Body"
      },
      {
        "name": "Gale Wings",
        "isHidden": true,
        "label": "Gale Wings (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 663,
    "abilities": [
      {
        "name": "Flame Body",
        "isHidden": false,
        "label": "Flame Body"
      },
      {
        "name": "Gale Wings",
        "isHidden": true,
        "label": "Gale Wings (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 664,
    "abilities": [
      {
        "name": "Shield Dust",
        "isHidden": false,
        "label": "Shield Dust"
      },
      {
        "name": "Compound Eyes",
        "isHidden": false,
        "label": "Compound Eyes"
      },
      {
        "name": "Friend Guard",
        "isHidden": true,
        "label": "Friend Guard (HO)"
      }
    ],
    "eggMoves": [
      "Poison Powder",
      "Stun Spore",
      "Rage Powder"
    ]
  },
  {
    "dexNumber": 665,
    "abilities": [
      {
        "name": "Shed Skin",
        "isHidden": false,
        "label": "Shed Skin"
      },
      {
        "name": "Friend Guard",
        "isHidden": true,
        "label": "Friend Guard (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 666,
    "abilities": [
      {
        "name": "Shield Dust",
        "isHidden": false,
        "label": "Shield Dust"
      },
      {
        "name": "Compound Eyes",
        "isHidden": false,
        "label": "Compound Eyes"
      },
      {
        "name": "Friend Guard",
        "isHidden": true,
        "label": "Friend Guard (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 667,
    "abilities": [
      {
        "name": "Rivalry",
        "isHidden": false,
        "label": "Rivalry"
      },
      {
        "name": "Unnerve",
        "isHidden": false,
        "label": "Unnerve"
      },
      {
        "name": "Moxie",
        "isHidden": true,
        "label": "Moxie (HO)"
      }
    ],
    "eggMoves": [
      "Fire Spin",
      "Yawn",
      "Snatch",
      "Entrainment",
      "Flare Blitz"
    ]
  },
  {
    "dexNumber": 668,
    "abilities": [
      {
        "name": "Rivalry",
        "isHidden": false,
        "label": "Rivalry"
      },
      {
        "name": "Unnerve",
        "isHidden": false,
        "label": "Unnerve"
      },
      {
        "name": "Moxie",
        "isHidden": true,
        "label": "Moxie (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 669,
    "abilities": [
      {
        "name": "Flower Veil",
        "isHidden": false,
        "label": "Flower Veil"
      },
      {
        "name": "Symbiosis",
        "isHidden": true,
        "label": "Symbiosis (HO)"
      }
    ],
    "eggMoves": [
      "Camouflage",
      "Copycat",
      "Captivate",
      "Tearful Look",
      "Endeavor"
    ]
  },
  {
    "dexNumber": 670,
    "abilities": [
      {
        "name": "Flower Veil",
        "isHidden": false,
        "label": "Flower Veil"
      },
      {
        "name": "Symbiosis",
        "isHidden": true,
        "label": "Symbiosis (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 671,
    "abilities": [
      {
        "name": "Flower Veil",
        "isHidden": false,
        "label": "Flower Veil"
      },
      {
        "name": "Symbiosis",
        "isHidden": true,
        "label": "Symbiosis (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 672,
    "abilities": [
      {
        "name": "Sap Sipper",
        "isHidden": false,
        "label": "Sap Sipper"
      },
      {
        "name": "Grass Pelt",
        "isHidden": true,
        "label": "Grass Pelt (HO)"
      }
    ],
    "eggMoves": [
      "Defense Curl",
      "Rollout",
      "Milk Drink",
      "Grassy Terrain"
    ]
  },
  {
    "dexNumber": 673,
    "abilities": [
      {
        "name": "Sap Sipper",
        "isHidden": false,
        "label": "Sap Sipper"
      },
      {
        "name": "Grass Pelt",
        "isHidden": true,
        "label": "Grass Pelt (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 674,
    "abilities": [
      {
        "name": "Iron Fist",
        "isHidden": false,
        "label": "Iron Fist"
      },
      {
        "name": "Mold Breaker",
        "isHidden": false,
        "label": "Mold Breaker"
      },
      {
        "name": "Scrappy",
        "isHidden": true,
        "label": "Scrappy (HO)"
      }
    ],
    "eggMoves": [
      "Me First",
      "Storm Throw",
      "Foul Play",
      "Quick Guard",
      "Quash",
      "Power Trip",
      "Seismic Toss"
    ]
  },
  {
    "dexNumber": 675,
    "abilities": [
      {
        "name": "Iron Fist",
        "isHidden": false,
        "label": "Iron Fist"
      },
      {
        "name": "Mold Breaker",
        "isHidden": false,
        "label": "Mold Breaker"
      },
      {
        "name": "Scrappy",
        "isHidden": true,
        "label": "Scrappy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 676,
    "abilities": [
      {
        "name": "Fur Coat",
        "isHidden": false,
        "label": "Fur Coat"
      }
    ],
    "eggMoves": [
      "Mimic",
      "Role Play",
      "Refresh",
      "Captivate",
      "Work Up"
    ]
  },
  {
    "dexNumber": 677,
    "abilities": [
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Infiltrator",
        "isHidden": false,
        "label": "Infiltrator"
      },
      {
        "name": "Own Tempo",
        "isHidden": true,
        "label": "Own Tempo (HO)"
      }
    ],
    "eggMoves": [
      "Barrier",
      "Trick",
      "Assist",
      "Yawn",
      "Tickle"
    ]
  },
  {
    "dexNumber": 678,
    "abilities": [
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Infiltrator",
        "isHidden": false,
        "label": "Infiltrator"
      },
      {
        "name": "Prankster",
        "isHidden": true,
        "label": "Prankster (HO)"
      }
    ],
    "eggMoves": [
      "Yawn",
      "Tickle"
    ]
  },
  {
    "dexNumber": 679,
    "abilities": [
      {
        "name": "No Guard",
        "isHidden": false,
        "label": "No Guard"
      }
    ],
    "eggMoves": [
      "Destiny Bond",
      "Metal Sound",
      "Shadow Sneak",
      "Wide Guard",
      "Block"
    ]
  },
  {
    "dexNumber": 680,
    "abilities": [
      {
        "name": "No Guard",
        "isHidden": false,
        "label": "No Guard"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 681,
    "abilities": [
      {
        "name": "Stance Change",
        "isHidden": false,
        "label": "Stance Change"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 682,
    "abilities": [
      {
        "name": "Healer",
        "isHidden": false,
        "label": "Healer"
      },
      {
        "name": "Aroma Veil",
        "isHidden": true,
        "label": "Aroma Veil (HO)"
      }
    ],
    "eggMoves": [
      "Disable",
      "Wish",
      "Refresh",
      "Captivate",
      "Nasty Plot",
      "After You"
    ]
  },
  {
    "dexNumber": 683,
    "abilities": [
      {
        "name": "Healer",
        "isHidden": false,
        "label": "Healer"
      },
      {
        "name": "Aroma Veil",
        "isHidden": true,
        "label": "Aroma Veil (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 684,
    "abilities": [
      {
        "name": "Sweet Veil",
        "isHidden": false,
        "label": "Sweet Veil"
      },
      {
        "name": "Unburden",
        "isHidden": true,
        "label": "Unburden (HO)"
      }
    ],
    "eggMoves": [
      "Belly Drum",
      "Yawn",
      "Copycat",
      "After You",
      "Sticky Web"
    ]
  },
  {
    "dexNumber": 685,
    "abilities": [
      {
        "name": "Sweet Veil",
        "isHidden": false,
        "label": "Sweet Veil"
      },
      {
        "name": "Unburden",
        "isHidden": true,
        "label": "Unburden (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 686,
    "abilities": [
      {
        "name": "Contrary",
        "isHidden": false,
        "label": "Contrary"
      },
      {
        "name": "Suction Cups",
        "isHidden": false,
        "label": "Suction Cups"
      },
      {
        "name": "Infiltrator",
        "isHidden": true,
        "label": "Infiltrator (HO)"
      }
    ],
    "eggMoves": [
      "Destiny Bond",
      "Flatter",
      "Camouflage",
      "Power Split",
      "Simple Beam",
      "Guard Swap",
      "Disable",
      "Acupressure"
    ]
  },
  {
    "dexNumber": 687,
    "abilities": [
      {
        "name": "Contrary",
        "isHidden": false,
        "label": "Contrary"
      },
      {
        "name": "Suction Cups",
        "isHidden": false,
        "label": "Suction Cups"
      },
      {
        "name": "Infiltrator",
        "isHidden": true,
        "label": "Infiltrator (HO)"
      }
    ],
    "eggMoves": [
      "Disable",
      "Destiny Bond",
      "Acupressure"
    ]
  },
  {
    "dexNumber": 688,
    "abilities": [
      {
        "name": "Tough Claws",
        "isHidden": false,
        "label": "Tough Claws"
      },
      {
        "name": "Sniper",
        "isHidden": false,
        "label": "Sniper"
      },
      {
        "name": "Pickpocket",
        "isHidden": true,
        "label": "Pickpocket (HO)"
      }
    ],
    "eggMoves": [
      "Helping Hand",
      "Tickle",
      "Water Sport",
      "Switcheroo",
      "Sand Attack",
      "Night Slash"
    ]
  },
  {
    "dexNumber": 689,
    "abilities": [
      {
        "name": "Tough Claws",
        "isHidden": false,
        "label": "Tough Claws"
      },
      {
        "name": "Sniper",
        "isHidden": false,
        "label": "Sniper"
      },
      {
        "name": "Pickpocket",
        "isHidden": true,
        "label": "Pickpocket (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 690,
    "abilities": [
      {
        "name": "Poison Point",
        "isHidden": false,
        "label": "Poison Point"
      },
      {
        "name": "Poison Touch",
        "isHidden": false,
        "label": "Poison Touch"
      },
      {
        "name": "Adaptability",
        "isHidden": true,
        "label": "Adaptability (HO)"
      }
    ],
    "eggMoves": [
      "Haze",
      "Acid Armor",
      "Toxic Spikes",
      "Play Rough",
      "Venom Drench",
      "Twister",
      "Dragon Tail"
    ]
  },
  {
    "dexNumber": 691,
    "abilities": [
      {
        "name": "Poison Point",
        "isHidden": false,
        "label": "Poison Point"
      },
      {
        "name": "Poison Touch",
        "isHidden": false,
        "label": "Poison Touch"
      },
      {
        "name": "Adaptability",
        "isHidden": true,
        "label": "Adaptability (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 692,
    "abilities": [
      {
        "name": "Mega Launcher",
        "isHidden": false,
        "label": "Mega Launcher"
      }
    ],
    "eggMoves": [
      "Crabhammer",
      "Endure",
      "Helping Hand",
      "Aqua Jet",
      "Entrainment",
      "Bubble Beam",
      "Aqua Tail"
    ]
  },
  {
    "dexNumber": 693,
    "abilities": [
      {
        "name": "Mega Launcher",
        "isHidden": false,
        "label": "Mega Launcher"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 694,
    "abilities": [
      {
        "name": "Dry Skin",
        "isHidden": false,
        "label": "Dry Skin"
      },
      {
        "name": "Sand Veil",
        "isHidden": false,
        "label": "Sand Veil"
      },
      {
        "name": "Solar Power",
        "isHidden": true,
        "label": "Solar Power (HO)"
      }
    ],
    "eggMoves": [
      "Agility",
      "Glare",
      "Camouflage",
      "Electric Terrain",
      "Dragon Rush",
      "Dragon Tail"
    ]
  },
  {
    "dexNumber": 695,
    "abilities": [
      {
        "name": "Dry Skin",
        "isHidden": false,
        "label": "Dry Skin"
      },
      {
        "name": "Sand Veil",
        "isHidden": false,
        "label": "Sand Veil"
      },
      {
        "name": "Solar Power",
        "isHidden": true,
        "label": "Solar Power (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 696,
    "abilities": [
      {
        "name": "Strong Jaw",
        "isHidden": false,
        "label": "Strong Jaw"
      },
      {
        "name": "Sturdy",
        "isHidden": true,
        "label": "Sturdy (HO)"
      }
    ],
    "eggMoves": [
      "Curse",
      "Poison Fang",
      "Dragon Dance",
      "Rock Polish",
      "Thunder Fang",
      "Ice Fang",
      "Fire Fang",
      "Rock Throw"
    ]
  },
  {
    "dexNumber": 697,
    "abilities": [
      {
        "name": "Strong Jaw",
        "isHidden": false,
        "label": "Strong Jaw"
      },
      {
        "name": "Rock Head",
        "isHidden": true,
        "label": "Rock Head (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 698,
    "abilities": [
      {
        "name": "Refrigerate",
        "isHidden": false,
        "label": "Refrigerate"
      },
      {
        "name": "Snow Warning",
        "isHidden": true,
        "label": "Snow Warning (HO)"
      }
    ],
    "eggMoves": [
      "Barrier",
      "Haze",
      "Mirror Coat",
      "Magnet Rise",
      "Discharge",
      "Take Down",
      "Rock Throw",
      "Aurora Veil"
    ]
  },
  {
    "dexNumber": 699,
    "abilities": [
      {
        "name": "Refrigerate",
        "isHidden": false,
        "label": "Refrigerate"
      },
      {
        "name": "Snow Warning",
        "isHidden": true,
        "label": "Snow Warning (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 700,
    "abilities": [
      {
        "name": "Cute Charm",
        "isHidden": false,
        "label": "Cute Charm"
      },
      {
        "name": "Pixilate",
        "isHidden": true,
        "label": "Pixilate (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 701,
    "abilities": [
      {
        "name": "Limber",
        "isHidden": false,
        "label": "Limber"
      },
      {
        "name": "Unburden",
        "isHidden": false,
        "label": "Unburden"
      },
      {
        "name": "Mold Breaker",
        "isHidden": true,
        "label": "Mold Breaker (HO)"
      }
    ],
    "eggMoves": [
      "Agility",
      "Baton Pass",
      "Mud Sport",
      "Me First",
      "Entrainment",
      "Quick Guard",
      "Ally Switch",
      "Feint",
      "Mean Look",
      "Cross Chop",
      "Defog"
    ]
  },
  {
    "dexNumber": 702,
    "abilities": [
      {
        "name": "Cheek Pouch",
        "isHidden": false,
        "label": "Cheek Pouch"
      },
      {
        "name": "Pickup",
        "isHidden": false,
        "label": "Pickup"
      },
      {
        "name": "Plus",
        "isHidden": true,
        "label": "Plus (HO)"
      }
    ],
    "eggMoves": [
      "Helping Hand",
      "Covet",
      "Natural Gift",
      "Eerie Impulse",
      "Tearful Look",
      "Magnet Rise"
    ]
  },
  {
    "dexNumber": 703,
    "abilities": [
      {
        "name": "Clear Body",
        "isHidden": false,
        "label": "Clear Body"
      },
      {
        "name": "Sturdy",
        "isHidden": true,
        "label": "Sturdy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 704,
    "abilities": [
      {
        "name": "Sap Sipper",
        "isHidden": false,
        "label": "Sap Sipper"
      },
      {
        "name": "Hydration",
        "isHidden": false,
        "label": "Hydration"
      },
      {
        "name": "Gooey",
        "isHidden": true,
        "label": "Gooey (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "Acid Armor",
      "Curse",
      "Endure",
      "Iron Tail",
      "Poison Tail",
      "Life Dew"
    ]
  },
  {
    "dexNumber": 705,
    "abilities": [
      {
        "name": "Sap Sipper",
        "isHidden": false,
        "label": "Sap Sipper"
      },
      {
        "name": "Hydration",
        "isHidden": false,
        "label": "Hydration"
      },
      {
        "name": "Gooey",
        "isHidden": true,
        "label": "Gooey (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 706,
    "abilities": [
      {
        "name": "Sap Sipper",
        "isHidden": false,
        "label": "Sap Sipper"
      },
      {
        "name": "Hydration",
        "isHidden": false,
        "label": "Hydration"
      },
      {
        "name": "Gooey",
        "isHidden": true,
        "label": "Gooey (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 707,
    "abilities": [
      {
        "name": "Prankster",
        "isHidden": false,
        "label": "Prankster"
      },
      {
        "name": "Magician",
        "isHidden": true,
        "label": "Magician (HO)"
      }
    ],
    "eggMoves": [
      "Thief",
      "Lock On",
      "Iron Defense",
      "Switcheroo",
      "Magnet Rise"
    ]
  },
  {
    "dexNumber": 708,
    "abilities": [
      {
        "name": "Natural Cure",
        "isHidden": false,
        "label": "Natural Cure"
      },
      {
        "name": "Frisk",
        "isHidden": false,
        "label": "Frisk"
      },
      {
        "name": "Harvest",
        "isHidden": true,
        "label": "Harvest (HO)"
      }
    ],
    "eggMoves": [
      "Imprison",
      "Grudge",
      "Bestow",
      "Venom Drench",
      "Power Up Punch",
      "Disable",
      "Sucker Punch",
      "Ally Switch"
    ]
  },
  {
    "dexNumber": 709,
    "abilities": [
      {
        "name": "Natural Cure",
        "isHidden": false,
        "label": "Natural Cure"
      },
      {
        "name": "Frisk",
        "isHidden": false,
        "label": "Frisk"
      },
      {
        "name": "Harvest",
        "isHidden": true,
        "label": "Harvest (HO)"
      }
    ],
    "eggMoves": [
      "Disable",
      "Sucker Punch",
      "Ally Switch"
    ]
  },
  {
    "dexNumber": 710,
    "abilities": [
      {
        "name": "Pickup",
        "isHidden": false,
        "label": "Pickup"
      },
      {
        "name": "Frisk",
        "isHidden": false,
        "label": "Frisk"
      },
      {
        "name": "Insomnia",
        "isHidden": true,
        "label": "Insomnia (HO)"
      }
    ],
    "eggMoves": [
      "Disable",
      "Destiny Bond",
      "Bestow",
      "Curse"
    ]
  },
  {
    "dexNumber": 711,
    "abilities": [
      {
        "name": "Pickup",
        "isHidden": false,
        "label": "Pickup"
      },
      {
        "name": "Frisk",
        "isHidden": false,
        "label": "Frisk"
      },
      {
        "name": "Insomnia",
        "isHidden": true,
        "label": "Insomnia (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 712,
    "abilities": [
      {
        "name": "Own Tempo",
        "isHidden": false,
        "label": "Own Tempo"
      },
      {
        "name": "Ice Body",
        "isHidden": false,
        "label": "Ice Body"
      },
      {
        "name": "Sturdy",
        "isHidden": true,
        "label": "Sturdy (HO)"
      }
    ],
    "eggMoves": [
      "Mist",
      "Recover",
      "Barrier",
      "Mirror Coat",
      "Aurora Veil"
    ]
  },
  {
    "dexNumber": 713,
    "abilities": [
      {
        "name": "Own Tempo",
        "isHidden": false,
        "label": "Own Tempo"
      },
      {
        "name": "Ice Body",
        "isHidden": false,
        "label": "Ice Body"
      },
      {
        "name": "Sturdy",
        "isHidden": true,
        "label": "Sturdy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 714,
    "abilities": [
      {
        "name": "Frisk",
        "isHidden": false,
        "label": "Frisk"
      },
      {
        "name": "Infiltrator",
        "isHidden": false,
        "label": "Infiltrator"
      },
      {
        "name": "Telepathy",
        "isHidden": true,
        "label": "Telepathy (HO)"
      }
    ],
    "eggMoves": [
      "Outrage",
      "Snatch",
      "Tailwind",
      "Switcheroo",
      "Dragon Rush",
      "Defog"
    ]
  },
  {
    "dexNumber": 715,
    "abilities": [
      {
        "name": "Frisk",
        "isHidden": false,
        "label": "Frisk"
      },
      {
        "name": "Infiltrator",
        "isHidden": false,
        "label": "Infiltrator"
      },
      {
        "name": "Telepathy",
        "isHidden": true,
        "label": "Telepathy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 716,
    "abilities": [
      {
        "name": "Fairy Aura",
        "isHidden": false,
        "label": "Fairy Aura"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 717,
    "abilities": [
      {
        "name": "Dark Aura",
        "isHidden": false,
        "label": "Dark Aura"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 718,
    "abilities": [
      {
        "name": "Aura Break",
        "isHidden": false,
        "label": "Aura Break"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 719,
    "abilities": [
      {
        "name": "Clear Body",
        "isHidden": false,
        "label": "Clear Body"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 720,
    "abilities": [
      {
        "name": "Magician",
        "isHidden": false,
        "label": "Magician"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 721,
    "abilities": [
      {
        "name": "Water Absorb",
        "isHidden": false,
        "label": "Water Absorb"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 722,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Long Reach",
        "isHidden": true,
        "label": "Long Reach (HO)"
      }
    ],
    "eggMoves": [
      "Confuse Ray",
      "Haze",
      "Curse",
      "Baton Pass",
      "Defog",
      "Ominous Wind",
      "Double Team",
      "Knock Off",
      "Roost"
    ]
  },
  {
    "dexNumber": 723,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Long Reach",
        "isHidden": true,
        "label": "Long Reach (HO)"
      }
    ],
    "eggMoves": [
      "Double Team",
      "Confuse Ray",
      "Knock Off",
      "Roost",
      "Defog"
    ]
  },
  {
    "dexNumber": 724,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Long Reach",
        "isHidden": true,
        "label": "Long Reach (HO)"
      }
    ],
    "eggMoves": [
      "Double Team",
      "Confuse Ray",
      "Knock Off",
      "Roost",
      "Defog"
    ]
  },
  {
    "dexNumber": 725,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Intimidate",
        "isHidden": true,
        "label": "Intimidate (HO)"
      }
    ],
    "eggMoves": [
      "Body Slam",
      "Crunch",
      "Fake Out",
      "Heat Wave",
      "Revenge",
      "Nasty Plot",
      "Power Trip",
      "Parting Shot"
    ]
  },
  {
    "dexNumber": 726,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Intimidate",
        "isHidden": true,
        "label": "Intimidate (HO)"
      }
    ],
    "eggMoves": [
      "Fake Out",
      "Parting Shot",
      "Power Trip"
    ]
  },
  {
    "dexNumber": 727,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Intimidate",
        "isHidden": true,
        "label": "Intimidate (HO)"
      }
    ],
    "eggMoves": [
      "Scratch",
      "Growl",
      "Fake Out",
      "Parting Shot",
      "Throat Chop",
      "Power Trip"
    ]
  },
  {
    "dexNumber": 728,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Liquid Voice",
        "isHidden": true,
        "label": "Liquid Voice (HO)"
      }
    ],
    "eggMoves": [
      "Amnesia",
      "Perish Song",
      "Charm",
      "Aqua Ring",
      "Wonder Room",
      "Aromatic Mist",
      "Life Dew"
    ]
  },
  {
    "dexNumber": 729,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Liquid Voice",
        "isHidden": true,
        "label": "Liquid Voice (HO)"
      }
    ],
    "eggMoves": [
      "Perish Song",
      "Aqua Ring",
      "Life Dew"
    ]
  },
  {
    "dexNumber": 730,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Liquid Voice",
        "isHidden": true,
        "label": "Liquid Voice (HO)"
      }
    ],
    "eggMoves": [
      "Perish Song",
      "Aqua Ring",
      "Life Dew"
    ]
  },
  {
    "dexNumber": 731,
    "abilities": [
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Skill Link",
        "isHidden": false,
        "label": "Skill Link"
      },
      {
        "name": "Pickup",
        "isHidden": true,
        "label": "Pickup (HO)"
      }
    ],
    "eggMoves": [
      "Mirror Move",
      "Uproar",
      "Tailwind",
      "Brave Bird",
      "Boomburst",
      "Sky Attack",
      "Gunk Shot"
    ]
  },
  {
    "dexNumber": 732,
    "abilities": [
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Skill Link",
        "isHidden": false,
        "label": "Skill Link"
      },
      {
        "name": "Pickup",
        "isHidden": true,
        "label": "Pickup (HO)"
      }
    ],
    "eggMoves": [
      "Sky Attack",
      "Gunk Shot",
      "Echoed Voice",
      "Boomburst"
    ]
  },
  {
    "dexNumber": 733,
    "abilities": [
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Skill Link",
        "isHidden": false,
        "label": "Skill Link"
      },
      {
        "name": "Sheer Force",
        "isHidden": true,
        "label": "Sheer Force (HO)"
      }
    ],
    "eggMoves": [
      "Sky Attack",
      "Gunk Shot",
      "Boomburst"
    ]
  },
  {
    "dexNumber": 734,
    "abilities": [
      {
        "name": "Stakeout",
        "isHidden": false,
        "label": "Stakeout"
      },
      {
        "name": "Strong Jaw",
        "isHidden": false,
        "label": "Strong Jaw"
      },
      {
        "name": "Adaptability",
        "isHidden": true,
        "label": "Adaptability (HO)"
      }
    ],
    "eggMoves": [
      "Revenge",
      "Last Resort",
      "Thunder Fang",
      "Ice Fang",
      "Fire Fang",
      "Endeavor"
    ]
  },
  {
    "dexNumber": 735,
    "abilities": [
      {
        "name": "Stakeout",
        "isHidden": false,
        "label": "Stakeout"
      },
      {
        "name": "Strong Jaw",
        "isHidden": false,
        "label": "Strong Jaw"
      },
      {
        "name": "Adaptability",
        "isHidden": true,
        "label": "Adaptability (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 736,
    "abilities": [
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      }
    ],
    "eggMoves": [
      "Harden",
      "Endure",
      "Mud Shot",
      "Electroweb",
      "Discharge"
    ]
  },
  {
    "dexNumber": 737,
    "abilities": [
      {
        "name": "Battery",
        "isHidden": false,
        "label": "Battery"
      }
    ],
    "eggMoves": [
      "Harden",
      "Discharge"
    ]
  },
  {
    "dexNumber": 738,
    "abilities": [
      {
        "name": "Levitate",
        "isHidden": false,
        "label": "Levitate"
      }
    ],
    "eggMoves": [
      "Vice Grip",
      "Dig",
      "Harden",
      "Mud Slap",
      "Iron Defense",
      "X Scissor",
      "Discharge",
      "Bug Bite"
    ]
  },
  {
    "dexNumber": 739,
    "abilities": [
      {
        "name": "Hyper Cutter",
        "isHidden": false,
        "label": "Hyper Cutter"
      },
      {
        "name": "Iron Fist",
        "isHidden": false,
        "label": "Iron Fist"
      },
      {
        "name": "Anger Point",
        "isHidden": true,
        "label": "Anger Point (HO)"
      }
    ],
    "eggMoves": [
      "Amnesia",
      "Superpower",
      "Endeavor",
      "Wide Guard",
      "Focus Punch"
    ]
  },
  {
    "dexNumber": 740,
    "abilities": [
      {
        "name": "Hyper Cutter",
        "isHidden": false,
        "label": "Hyper Cutter"
      },
      {
        "name": "Iron Fist",
        "isHidden": false,
        "label": "Iron Fist"
      },
      {
        "name": "Anger Point",
        "isHidden": true,
        "label": "Anger Point (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 741,
    "abilities": [
      {
        "name": "Dancer",
        "isHidden": false,
        "label": "Dancer"
      }
    ],
    "eggMoves": [
      "Safeguard",
      "Pluck",
      "Tailwind",
      "Captivate",
      "Attract",
      "Defog",
      "Quiver Dance"
    ]
  },
  {
    "dexNumber": 742,
    "abilities": [
      {
        "name": "Honey Gather",
        "isHidden": false,
        "label": "Honey Gather"
      },
      {
        "name": "Shield Dust",
        "isHidden": false,
        "label": "Shield Dust"
      },
      {
        "name": "Sweet Veil",
        "isHidden": true,
        "label": "Sweet Veil (HO)"
      }
    ],
    "eggMoves": [
      "Baton Pass",
      "Skill Swap",
      "Bestow",
      "Moonblast",
      "Speed Swap",
      "Sticky Web",
      "Powder",
      "Aromatic Mist"
    ]
  },
  {
    "dexNumber": 743,
    "abilities": [
      {
        "name": "Honey Gather",
        "isHidden": false,
        "label": "Honey Gather"
      },
      {
        "name": "Shield Dust",
        "isHidden": false,
        "label": "Shield Dust"
      },
      {
        "name": "Sweet Veil",
        "isHidden": true,
        "label": "Sweet Veil (HO)"
      }
    ],
    "eggMoves": [
      "Sticky Web",
      "Moonblast",
      "Aromatic Mist"
    ]
  },
  {
    "dexNumber": 744,
    "abilities": [
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Vital Spirit",
        "isHidden": false,
        "label": "Vital Spirit"
      },
      {
        "name": "Steadfast",
        "isHidden": true,
        "label": "Steadfast (HO)"
      }
    ],
    "eggMoves": [
      "Thrash",
      "Crush Claw",
      "Sucker Punch",
      "Thunder Fang",
      "Fire Fang",
      "Endeavor",
      "Last Resort"
    ]
  },
  {
    "dexNumber": 745,
    "abilities": [
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Sand Rush",
        "isHidden": false,
        "label": "Sand Rush"
      },
      {
        "name": "Steadfast",
        "isHidden": true,
        "label": "Steadfast (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 746,
    "abilities": [
      {
        "name": "Schooling",
        "isHidden": false,
        "label": "Schooling"
      }
    ],
    "eggMoves": [
      "Mist",
      "Muddy Water",
      "Water Sport",
      "Water Pulse",
      "Whirlpool",
      "Take Down"
    ]
  },
  {
    "dexNumber": 747,
    "abilities": [
      {
        "name": "Merciless",
        "isHidden": false,
        "label": "Merciless"
      },
      {
        "name": "Limber",
        "isHidden": false,
        "label": "Limber"
      },
      {
        "name": "Regenerator",
        "isHidden": true,
        "label": "Regenerator (HO)"
      }
    ],
    "eggMoves": [
      "Haze",
      "Stockpile",
      "Spit Up",
      "Swallow",
      "Infestation"
    ]
  },
  {
    "dexNumber": 748,
    "abilities": [
      {
        "name": "Merciless",
        "isHidden": false,
        "label": "Merciless"
      },
      {
        "name": "Limber",
        "isHidden": false,
        "label": "Limber"
      },
      {
        "name": "Regenerator",
        "isHidden": true,
        "label": "Regenerator (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 749,
    "abilities": [
      {
        "name": "Own Tempo",
        "isHidden": false,
        "label": "Own Tempo"
      },
      {
        "name": "Stamina",
        "isHidden": false,
        "label": "Stamina"
      },
      {
        "name": "Inner Focus",
        "isHidden": true,
        "label": "Inner Focus (HO)"
      }
    ],
    "eggMoves": [
      "Body Slam",
      "Double Edge",
      "Magnitude",
      "Close Combat",
      "Mud Bomb",
      "Roar",
      "Fissure",
      "Smack Down",
      "Endeavor"
    ]
  },
  {
    "dexNumber": 750,
    "abilities": [
      {
        "name": "Own Tempo",
        "isHidden": false,
        "label": "Own Tempo"
      },
      {
        "name": "Stamina",
        "isHidden": false,
        "label": "Stamina"
      },
      {
        "name": "Inner Focus",
        "isHidden": true,
        "label": "Inner Focus (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 751,
    "abilities": [
      {
        "name": "Water Bubble",
        "isHidden": false,
        "label": "Water Bubble"
      },
      {
        "name": "Water Absorb",
        "isHidden": true,
        "label": "Water Absorb (HO)"
      }
    ],
    "eggMoves": [
      "Aurora Beam",
      "Stockpile",
      "Spit Up",
      "Power Split",
      "Sticky Web"
    ]
  },
  {
    "dexNumber": 752,
    "abilities": [
      {
        "name": "Water Bubble",
        "isHidden": false,
        "label": "Water Bubble"
      },
      {
        "name": "Water Absorb",
        "isHidden": true,
        "label": "Water Absorb (HO)"
      }
    ],
    "eggMoves": [
      "Stockpile",
      "Spit Up",
      "Power Split",
      "Sticky Web"
    ]
  },
  {
    "dexNumber": 753,
    "abilities": [
      {
        "name": "Leaf Guard",
        "isHidden": false,
        "label": "Leaf Guard"
      },
      {
        "name": "Contrary",
        "isHidden": true,
        "label": "Contrary (HO)"
      }
    ],
    "eggMoves": [
      "Giga Drain",
      "Weather Ball",
      "Aromatherapy",
      "Defog",
      "Leaf Storm",
      "Worry Seed"
    ]
  },
  {
    "dexNumber": 754,
    "abilities": [
      {
        "name": "Leaf Guard",
        "isHidden": false,
        "label": "Leaf Guard"
      },
      {
        "name": "Contrary",
        "isHidden": true,
        "label": "Contrary (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 755,
    "abilities": [
      {
        "name": "Illuminate",
        "isHidden": false,
        "label": "Illuminate"
      },
      {
        "name": "Effect Spore",
        "isHidden": false,
        "label": "Effect Spore"
      },
      {
        "name": "Rain Dish",
        "isHidden": true,
        "label": "Rain Dish (HO)"
      }
    ],
    "eggMoves": [
      "Leech Seed",
      "Growth",
      "Poison Powder",
      "Stun Spore",
      "Amnesia"
    ]
  },
  {
    "dexNumber": 756,
    "abilities": [
      {
        "name": "Illuminate",
        "isHidden": false,
        "label": "Illuminate"
      },
      {
        "name": "Effect Spore",
        "isHidden": false,
        "label": "Effect Spore"
      },
      {
        "name": "Rain Dish",
        "isHidden": true,
        "label": "Rain Dish (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 757,
    "abilities": [
      {
        "name": "Corrosion",
        "isHidden": false,
        "label": "Corrosion"
      },
      {
        "name": "Oblivious",
        "isHidden": true,
        "label": "Oblivious (HO)"
      }
    ],
    "eggMoves": [
      "Sand Attack",
      "Fake Out",
      "Knock Off",
      "Snatch",
      "Belch",
      "Mud Slap"
    ]
  },
  {
    "dexNumber": 758,
    "abilities": [
      {
        "name": "Corrosion",
        "isHidden": false,
        "label": "Corrosion"
      },
      {
        "name": "Oblivious",
        "isHidden": true,
        "label": "Oblivious (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 759,
    "abilities": [
      {
        "name": "Fluffy",
        "isHidden": false,
        "label": "Fluffy"
      },
      {
        "name": "Klutz",
        "isHidden": false,
        "label": "Klutz"
      },
      {
        "name": "Cute Charm",
        "isHidden": true,
        "label": "Cute Charm (HO)"
      }
    ],
    "eggMoves": [
      "Ice Punch",
      "Thunder Punch",
      "Mega Kick",
      "Endure",
      "Force Palm",
      "Wide Guard",
      "Stomping Tantrum",
      "Stomp",
      "Defense Curl",
      "Rollout"
    ]
  },
  {
    "dexNumber": 760,
    "abilities": [
      {
        "name": "Fluffy",
        "isHidden": false,
        "label": "Fluffy"
      },
      {
        "name": "Klutz",
        "isHidden": false,
        "label": "Klutz"
      },
      {
        "name": "Unnerve",
        "isHidden": true,
        "label": "Unnerve (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 761,
    "abilities": [
      {
        "name": "Leaf Guard",
        "isHidden": false,
        "label": "Leaf Guard"
      },
      {
        "name": "Oblivious",
        "isHidden": false,
        "label": "Oblivious"
      },
      {
        "name": "Sweet Veil",
        "isHidden": true,
        "label": "Sweet Veil (HO)"
      }
    ],
    "eggMoves": [
      "Charm",
      "Synthesis",
      "Grass Whistle",
      "Feint",
      "Acupressure",
      "Play Rough",
      "Endeavor"
    ]
  },
  {
    "dexNumber": 762,
    "abilities": [
      {
        "name": "Leaf Guard",
        "isHidden": false,
        "label": "Leaf Guard"
      },
      {
        "name": "Oblivious",
        "isHidden": false,
        "label": "Oblivious"
      },
      {
        "name": "Sweet Veil",
        "isHidden": true,
        "label": "Sweet Veil (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 763,
    "abilities": [
      {
        "name": "Leaf Guard",
        "isHidden": false,
        "label": "Leaf Guard"
      },
      {
        "name": "Queenly Majesty",
        "isHidden": false,
        "label": "Queenly Majesty"
      },
      {
        "name": "Sweet Veil",
        "isHidden": true,
        "label": "Sweet Veil (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 764,
    "abilities": [
      {
        "name": "Flower Veil",
        "isHidden": false,
        "label": "Flower Veil"
      },
      {
        "name": "Triage",
        "isHidden": false,
        "label": "Triage"
      },
      {
        "name": "Natural Cure",
        "isHidden": true,
        "label": "Natural Cure (HO)"
      }
    ],
    "eggMoves": [
      "Amnesia",
      "Endure",
      "Lucky Chant",
      "After You",
      "Worry Seed",
      "Leaf Tornado"
    ]
  },
  {
    "dexNumber": 765,
    "abilities": [
      {
        "name": "Inner Focus",
        "isHidden": false,
        "label": "Inner Focus"
      },
      {
        "name": "Telepathy",
        "isHidden": false,
        "label": "Telepathy"
      },
      {
        "name": "Symbiosis",
        "isHidden": true,
        "label": "Symbiosis (HO)"
      }
    ],
    "eggMoves": [
      "Extrasensory",
      "Wonder Room",
      "Psychic Terrain",
      "Dream Eater",
      "Yawn",
      "Last Resort"
    ]
  },
  {
    "dexNumber": 766,
    "abilities": [
      {
        "name": "Receiver",
        "isHidden": false,
        "label": "Receiver"
      },
      {
        "name": "Defiant",
        "isHidden": true,
        "label": "Defiant (HO)"
      }
    ],
    "eggMoves": [
      "Seismic Toss",
      "Quick Attack",
      "Vital Throw",
      "Feint",
      "Iron Head",
      "Quick Guard",
      "Counter",
      "Knock Off"
    ]
  },
  {
    "dexNumber": 767,
    "abilities": [
      {
        "name": "Wimp Out",
        "isHidden": false,
        "label": "Wimp Out"
      }
    ],
    "eggMoves": [
      "Harden",
      "Spikes",
      "Metal Claw",
      "Aqua Jet",
      "Wide Guard",
      "Rollout"
    ]
  },
  {
    "dexNumber": 768,
    "abilities": [
      {
        "name": "Emergency Exit",
        "isHidden": false,
        "label": "Emergency Exit"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 769,
    "abilities": [
      {
        "name": "Water Compaction",
        "isHidden": false,
        "label": "Water Compaction"
      },
      {
        "name": "Sand Veil",
        "isHidden": true,
        "label": "Sand Veil (HO)"
      }
    ],
    "eggMoves": [
      "Amnesia",
      "Destiny Bond",
      "Ancient Power",
      "Stockpile",
      "Spit Up",
      "Swallow",
      "Curse"
    ]
  },
  {
    "dexNumber": 770,
    "abilities": [
      {
        "name": "Water Compaction",
        "isHidden": false,
        "label": "Water Compaction"
      },
      {
        "name": "Sand Veil",
        "isHidden": true,
        "label": "Sand Veil (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 771,
    "abilities": [
      {
        "name": "Innards Out",
        "isHidden": false,
        "label": "Innards Out"
      },
      {
        "name": "Unaware",
        "isHidden": true,
        "label": "Unaware (HO)"
      }
    ],
    "eggMoves": [
      "Endure",
      "Tickle",
      "Bestow",
      "Venom Drench",
      "Spite",
      "Swagger",
      "Mirror Coat"
    ]
  },
  {
    "dexNumber": 772,
    "abilities": [
      {
        "name": "Battle Armor",
        "isHidden": false,
        "label": "Battle Armor"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 773,
    "abilities": [
      {
        "name": "Rks System",
        "isHidden": false,
        "label": "Rks System"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 774,
    "abilities": [
      {
        "name": "Shields Down",
        "isHidden": false,
        "label": "Shields Down"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 775,
    "abilities": [
      {
        "name": "Comatose",
        "isHidden": false,
        "label": "Comatose"
      }
    ],
    "eggMoves": [
      "Sing",
      "Charm",
      "Wish",
      "Play Rough",
      "Superpower"
    ]
  },
  {
    "dexNumber": 776,
    "abilities": [
      {
        "name": "Shell Armor",
        "isHidden": false,
        "label": "Shell Armor"
      }
    ],
    "eggMoves": [
      "Fire Spin",
      "Revenge",
      "Head Smash",
      "Wide Guard",
      "Curse",
      "Rapid Spin"
    ]
  },
  {
    "dexNumber": 777,
    "abilities": [
      {
        "name": "Iron Barbs",
        "isHidden": false,
        "label": "Iron Barbs"
      },
      {
        "name": "Lightning Rod",
        "isHidden": false,
        "label": "Lightning Rod"
      },
      {
        "name": "Sturdy",
        "isHidden": true,
        "label": "Sturdy (HO)"
      }
    ],
    "eggMoves": [
      "Twineedle",
      "Flail",
      "Reversal",
      "Present",
      "Encore",
      "Fake Out",
      "Wish",
      "Tickle",
      "Disarming Voice"
    ]
  },
  {
    "dexNumber": 778,
    "abilities": [
      {
        "name": "Disguise",
        "isHidden": false,
        "label": "Disguise"
      }
    ],
    "eggMoves": [
      "Nightmare",
      "Curse",
      "Destiny Bond",
      "Grudge"
    ]
  },
  {
    "dexNumber": 779,
    "abilities": [
      {
        "name": "Dazzling",
        "isHidden": false,
        "label": "Dazzling"
      },
      {
        "name": "Strong Jaw",
        "isHidden": false,
        "label": "Strong Jaw"
      },
      {
        "name": "Wonder Skin",
        "isHidden": true,
        "label": "Wonder Skin (HO)"
      }
    ],
    "eggMoves": [
      "Rage",
      "Poison Fang",
      "Water Pulse",
      "Ice Fang",
      "Super Fang"
    ]
  },
  {
    "dexNumber": 780,
    "abilities": [
      {
        "name": "Berserk",
        "isHidden": false,
        "label": "Berserk"
      },
      {
        "name": "Sap Sipper",
        "isHidden": false,
        "label": "Sap Sipper"
      },
      {
        "name": "Cloud Nine",
        "isHidden": true,
        "label": "Cloud Nine (HO)"
      }
    ],
    "eggMoves": [
      "Razor Wind",
      "Mist",
      "Dragon Rush",
      "Hurricane",
      "Play Rough",
      "Tickle"
    ]
  },
  {
    "dexNumber": 781,
    "abilities": [
      {
        "name": "Steelworker",
        "isHidden": false,
        "label": "Steelworker"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 782,
    "abilities": [
      {
        "name": "Bulletproof",
        "isHidden": false,
        "label": "Bulletproof"
      },
      {
        "name": "Soundproof",
        "isHidden": false,
        "label": "Soundproof"
      },
      {
        "name": "Overcoat",
        "isHidden": true,
        "label": "Overcoat (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "Reversal",
      "Dragon Breath",
      "Focus Punch"
    ]
  },
  {
    "dexNumber": 783,
    "abilities": [
      {
        "name": "Bulletproof",
        "isHidden": false,
        "label": "Bulletproof"
      },
      {
        "name": "Soundproof",
        "isHidden": false,
        "label": "Soundproof"
      },
      {
        "name": "Overcoat",
        "isHidden": true,
        "label": "Overcoat (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "Dragon Breath",
      "Focus Punch"
    ]
  },
  {
    "dexNumber": 784,
    "abilities": [
      {
        "name": "Bulletproof",
        "isHidden": false,
        "label": "Bulletproof"
      },
      {
        "name": "Soundproof",
        "isHidden": false,
        "label": "Soundproof"
      },
      {
        "name": "Overcoat",
        "isHidden": true,
        "label": "Overcoat (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "Belly Drum",
      "Dragon Breath",
      "Focus Punch"
    ]
  },
  {
    "dexNumber": 785,
    "abilities": [
      {
        "name": "Electric Surge",
        "isHidden": false,
        "label": "Electric Surge"
      },
      {
        "name": "Telepathy",
        "isHidden": true,
        "label": "Telepathy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 786,
    "abilities": [
      {
        "name": "Psychic Surge",
        "isHidden": false,
        "label": "Psychic Surge"
      },
      {
        "name": "Telepathy",
        "isHidden": true,
        "label": "Telepathy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 787,
    "abilities": [
      {
        "name": "Grassy Surge",
        "isHidden": false,
        "label": "Grassy Surge"
      },
      {
        "name": "Telepathy",
        "isHidden": true,
        "label": "Telepathy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 788,
    "abilities": [
      {
        "name": "Misty Surge",
        "isHidden": false,
        "label": "Misty Surge"
      },
      {
        "name": "Telepathy",
        "isHidden": true,
        "label": "Telepathy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 789,
    "abilities": [
      {
        "name": "Unaware",
        "isHidden": false,
        "label": "Unaware"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 790,
    "abilities": [
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 791,
    "abilities": [
      {
        "name": "Full Metal Body",
        "isHidden": false,
        "label": "Full Metal Body"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 792,
    "abilities": [
      {
        "name": "Shadow Shield",
        "isHidden": false,
        "label": "Shadow Shield"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 793,
    "abilities": [
      {
        "name": "Beast Boost",
        "isHidden": false,
        "label": "Beast Boost"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 794,
    "abilities": [
      {
        "name": "Beast Boost",
        "isHidden": false,
        "label": "Beast Boost"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 795,
    "abilities": [
      {
        "name": "Beast Boost",
        "isHidden": false,
        "label": "Beast Boost"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 796,
    "abilities": [
      {
        "name": "Beast Boost",
        "isHidden": false,
        "label": "Beast Boost"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 797,
    "abilities": [
      {
        "name": "Beast Boost",
        "isHidden": false,
        "label": "Beast Boost"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 798,
    "abilities": [
      {
        "name": "Beast Boost",
        "isHidden": false,
        "label": "Beast Boost"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 799,
    "abilities": [
      {
        "name": "Beast Boost",
        "isHidden": false,
        "label": "Beast Boost"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 800,
    "abilities": [
      {
        "name": "Prism Armor",
        "isHidden": false,
        "label": "Prism Armor"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 801,
    "abilities": [
      {
        "name": "Soul Heart",
        "isHidden": false,
        "label": "Soul Heart"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 802,
    "abilities": [
      {
        "name": "Technician",
        "isHidden": false,
        "label": "Technician"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 803,
    "abilities": [
      {
        "name": "Beast Boost",
        "isHidden": false,
        "label": "Beast Boost"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 804,
    "abilities": [
      {
        "name": "Beast Boost",
        "isHidden": false,
        "label": "Beast Boost"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 805,
    "abilities": [
      {
        "name": "Beast Boost",
        "isHidden": false,
        "label": "Beast Boost"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 806,
    "abilities": [
      {
        "name": "Beast Boost",
        "isHidden": false,
        "label": "Beast Boost"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 807,
    "abilities": [
      {
        "name": "Volt Absorb",
        "isHidden": false,
        "label": "Volt Absorb"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 808,
    "abilities": [
      {
        "name": "Magnet Pull",
        "isHidden": false,
        "label": "Magnet Pull"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 809,
    "abilities": [
      {
        "name": "Iron Fist",
        "isHidden": false,
        "label": "Iron Fist"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 810,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Grassy Surge",
        "isHidden": true,
        "label": "Grassy Surge (HO)"
      }
    ],
    "eggMoves": [
      "Strength",
      "Leech Seed",
      "Growth",
      "Fake Out",
      "Nature Power",
      "Hammer Arm",
      "Worry Seed"
    ]
  },
  {
    "dexNumber": 811,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Grassy Surge",
        "isHidden": true,
        "label": "Grassy Surge (HO)"
      }
    ],
    "eggMoves": [
      "Strength",
      "Leech Seed",
      "Growth",
      "Fake Out",
      "Hammer Arm",
      "Worry Seed"
    ]
  },
  {
    "dexNumber": 812,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Grassy Surge",
        "isHidden": true,
        "label": "Grassy Surge (HO)"
      }
    ],
    "eggMoves": [
      "Strength",
      "Leech Seed",
      "Growth",
      "Fake Out",
      "Hammer Arm",
      "Worry Seed"
    ]
  },
  {
    "dexNumber": 813,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Libero",
        "isHidden": true,
        "label": "Libero (HO)"
      }
    ],
    "eggMoves": [
      "Sand Attack",
      "High Jump Kick",
      "Super Fang",
      "Sucker Punch"
    ]
  },
  {
    "dexNumber": 814,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Libero",
        "isHidden": true,
        "label": "Libero (HO)"
      }
    ],
    "eggMoves": [
      "Sand Attack",
      "High Jump Kick",
      "Super Fang",
      "Sucker Punch"
    ]
  },
  {
    "dexNumber": 815,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Libero",
        "isHidden": true,
        "label": "Libero (HO)"
      }
    ],
    "eggMoves": [
      "Sand Attack",
      "High Jump Kick",
      "Super Fang",
      "Sucker Punch"
    ]
  },
  {
    "dexNumber": 816,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Sniper",
        "isHidden": true,
        "label": "Sniper (HO)"
      }
    ],
    "eggMoves": [
      "Mist",
      "Double Team",
      "Haze",
      "Aqua Ring",
      "Ice Shard",
      "Aqua Jet",
      "Fell Stinger"
    ]
  },
  {
    "dexNumber": 817,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Sniper",
        "isHidden": true,
        "label": "Sniper (HO)"
      }
    ],
    "eggMoves": [
      "Mist",
      "Double Team",
      "Haze",
      "Aqua Ring",
      "Ice Shard",
      "Aqua Jet",
      "Fell Stinger"
    ]
  },
  {
    "dexNumber": 818,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Sniper",
        "isHidden": true,
        "label": "Sniper (HO)"
      }
    ],
    "eggMoves": [
      "Mist",
      "Double Team",
      "Haze",
      "Aqua Ring",
      "Ice Shard",
      "Aqua Jet",
      "Fell Stinger"
    ]
  },
  {
    "dexNumber": 819,
    "abilities": [
      {
        "name": "Cheek Pouch",
        "isHidden": false,
        "label": "Cheek Pouch"
      },
      {
        "name": "Gluttony",
        "isHidden": true,
        "label": "Gluttony (HO)"
      }
    ],
    "eggMoves": [
      "Defense Curl",
      "Belly Drum",
      "Rollout",
      "Last Resort"
    ]
  },
  {
    "dexNumber": 820,
    "abilities": [
      {
        "name": "Cheek Pouch",
        "isHidden": false,
        "label": "Cheek Pouch"
      },
      {
        "name": "Gluttony",
        "isHidden": true,
        "label": "Gluttony (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 821,
    "abilities": [
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Unnerve",
        "isHidden": false,
        "label": "Unnerve"
      },
      {
        "name": "Big Pecks",
        "isHidden": true,
        "label": "Big Pecks (HO)"
      }
    ],
    "eggMoves": [
      "Sand Attack",
      "Sky Attack",
      "Spite",
      "Rock Smash",
      "Roost",
      "Tailwind",
      "Defog"
    ]
  },
  {
    "dexNumber": 822,
    "abilities": [
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Unnerve",
        "isHidden": false,
        "label": "Unnerve"
      },
      {
        "name": "Big Pecks",
        "isHidden": true,
        "label": "Big Pecks (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 823,
    "abilities": [
      {
        "name": "Pressure",
        "isHidden": false,
        "label": "Pressure"
      },
      {
        "name": "Unnerve",
        "isHidden": false,
        "label": "Unnerve"
      },
      {
        "name": "Mirror Armor",
        "isHidden": true,
        "label": "Mirror Armor (HO)"
      }
    ],
    "eggMoves": [
      "Sand Attack",
      "Sky Attack",
      "Spite",
      "Rock Smash",
      "Roost",
      "Tailwind",
      "Defog"
    ]
  },
  {
    "dexNumber": 824,
    "abilities": [
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      },
      {
        "name": "Compound Eyes",
        "isHidden": false,
        "label": "Compound Eyes"
      },
      {
        "name": "Telepathy",
        "isHidden": true,
        "label": "Telepathy (HO)"
      }
    ],
    "eggMoves": [
      "Supersonic",
      "Recover",
      "Sticky Web",
      "Infestation"
    ]
  },
  {
    "dexNumber": 825,
    "abilities": [
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      },
      {
        "name": "Compound Eyes",
        "isHidden": false,
        "label": "Compound Eyes"
      },
      {
        "name": "Telepathy",
        "isHidden": true,
        "label": "Telepathy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 826,
    "abilities": [
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      },
      {
        "name": "Frisk",
        "isHidden": false,
        "label": "Frisk"
      },
      {
        "name": "Telepathy",
        "isHidden": true,
        "label": "Telepathy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 827,
    "abilities": [
      {
        "name": "Run Away",
        "isHidden": false,
        "label": "Run Away"
      },
      {
        "name": "Unburden",
        "isHidden": false,
        "label": "Unburden"
      },
      {
        "name": "Stakeout",
        "isHidden": true,
        "label": "Stakeout (HO)"
      }
    ],
    "eggMoves": [
      "Torment",
      "Knock Off",
      "Howl",
      "Quick Guard"
    ]
  },
  {
    "dexNumber": 828,
    "abilities": [
      {
        "name": "Run Away",
        "isHidden": false,
        "label": "Run Away"
      },
      {
        "name": "Unburden",
        "isHidden": false,
        "label": "Unburden"
      },
      {
        "name": "Stakeout",
        "isHidden": true,
        "label": "Stakeout (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 829,
    "abilities": [
      {
        "name": "Cotton Down",
        "isHidden": false,
        "label": "Cotton Down"
      },
      {
        "name": "Regenerator",
        "isHidden": false,
        "label": "Regenerator"
      },
      {
        "name": "Effect Spore",
        "isHidden": true,
        "label": "Effect Spore (HO)"
      }
    ],
    "eggMoves": [
      "Leech Seed",
      "Growth",
      "Poison Powder",
      "Stun Spore",
      "Sleep Powder",
      "Worry Seed"
    ]
  },
  {
    "dexNumber": 830,
    "abilities": [
      {
        "name": "Cotton Down",
        "isHidden": false,
        "label": "Cotton Down"
      },
      {
        "name": "Regenerator",
        "isHidden": false,
        "label": "Regenerator"
      },
      {
        "name": "Effect Spore",
        "isHidden": true,
        "label": "Effect Spore (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 831,
    "abilities": [
      {
        "name": "Fluffy",
        "isHidden": false,
        "label": "Fluffy"
      },
      {
        "name": "Run Away",
        "isHidden": false,
        "label": "Run Away"
      },
      {
        "name": "Bulletproof",
        "isHidden": true,
        "label": "Bulletproof (HO)"
      }
    ],
    "eggMoves": [
      "Stomp",
      "Counter",
      "Swagger"
    ]
  },
  {
    "dexNumber": 832,
    "abilities": [
      {
        "name": "Fluffy",
        "isHidden": false,
        "label": "Fluffy"
      },
      {
        "name": "Steadfast",
        "isHidden": false,
        "label": "Steadfast"
      },
      {
        "name": "Bulletproof",
        "isHidden": true,
        "label": "Bulletproof (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 833,
    "abilities": [
      {
        "name": "Strong Jaw",
        "isHidden": false,
        "label": "Strong Jaw"
      },
      {
        "name": "Shell Armor",
        "isHidden": false,
        "label": "Shell Armor"
      },
      {
        "name": "Swift Swim",
        "isHidden": true,
        "label": "Swift Swim (HO)"
      }
    ],
    "eggMoves": [
      "Skull Bash",
      "Gastro Acid",
      "Dragon Tail",
      "Shell Smash"
    ]
  },
  {
    "dexNumber": 834,
    "abilities": [
      {
        "name": "Strong Jaw",
        "isHidden": false,
        "label": "Strong Jaw"
      },
      {
        "name": "Shell Armor",
        "isHidden": false,
        "label": "Shell Armor"
      },
      {
        "name": "Swift Swim",
        "isHidden": true,
        "label": "Swift Swim (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 835,
    "abilities": [
      {
        "name": "Ball Fetch",
        "isHidden": false,
        "label": "Ball Fetch"
      },
      {
        "name": "Rattled",
        "isHidden": true,
        "label": "Rattled (HO)"
      }
    ],
    "eggMoves": [
      "Sand Attack",
      "Double Edge",
      "Howl",
      "Discharge",
      "Flame Charge"
    ]
  },
  {
    "dexNumber": 836,
    "abilities": [
      {
        "name": "Strong Jaw",
        "isHidden": false,
        "label": "Strong Jaw"
      },
      {
        "name": "Competitive",
        "isHidden": true,
        "label": "Competitive (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 837,
    "abilities": [
      {
        "name": "Steam Engine",
        "isHidden": false,
        "label": "Steam Engine"
      },
      {
        "name": "Heatproof",
        "isHidden": false,
        "label": "Heatproof"
      },
      {
        "name": "Flash Fire",
        "isHidden": true,
        "label": "Flash Fire (HO)"
      }
    ],
    "eggMoves": [
      "Explosion",
      "Mud Slap",
      "Block"
    ]
  },
  {
    "dexNumber": 838,
    "abilities": [
      {
        "name": "Steam Engine",
        "isHidden": false,
        "label": "Steam Engine"
      },
      {
        "name": "Flame Body",
        "isHidden": false,
        "label": "Flame Body"
      },
      {
        "name": "Flash Fire",
        "isHidden": true,
        "label": "Flash Fire (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 839,
    "abilities": [
      {
        "name": "Steam Engine",
        "isHidden": false,
        "label": "Steam Engine"
      },
      {
        "name": "Flame Body",
        "isHidden": false,
        "label": "Flame Body"
      },
      {
        "name": "Flash Fire",
        "isHidden": true,
        "label": "Flash Fire (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 840,
    "abilities": [
      {
        "name": "Ripen",
        "isHidden": false,
        "label": "Ripen"
      },
      {
        "name": "Gluttony",
        "isHidden": false,
        "label": "Gluttony"
      },
      {
        "name": "Bulletproof",
        "isHidden": true,
        "label": "Bulletproof (HO)"
      }
    ],
    "eggMoves": [
      "Defense Curl",
      "Rollout",
      "Recycle",
      "Sucker Punch"
    ]
  },
  {
    "dexNumber": 841,
    "abilities": [
      {
        "name": "Ripen",
        "isHidden": false,
        "label": "Ripen"
      },
      {
        "name": "Gluttony",
        "isHidden": false,
        "label": "Gluttony"
      },
      {
        "name": "Hustle",
        "isHidden": true,
        "label": "Hustle (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 842,
    "abilities": [
      {
        "name": "Ripen",
        "isHidden": false,
        "label": "Ripen"
      },
      {
        "name": "Gluttony",
        "isHidden": false,
        "label": "Gluttony"
      },
      {
        "name": "Thick Fat",
        "isHidden": true,
        "label": "Thick Fat (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 843,
    "abilities": [
      {
        "name": "Sand Spit",
        "isHidden": false,
        "label": "Sand Spit"
      },
      {
        "name": "Shed Skin",
        "isHidden": false,
        "label": "Shed Skin"
      },
      {
        "name": "Sand Veil",
        "isHidden": true,
        "label": "Sand Veil (HO)"
      }
    ],
    "eggMoves": [
      "Mud Slap",
      "Poison Tail",
      "Last Resort",
      "Dragon Rush",
      "Belch"
    ]
  },
  {
    "dexNumber": 844,
    "abilities": [
      {
        "name": "Sand Spit",
        "isHidden": false,
        "label": "Sand Spit"
      },
      {
        "name": "Shed Skin",
        "isHidden": false,
        "label": "Shed Skin"
      },
      {
        "name": "Sand Veil",
        "isHidden": true,
        "label": "Sand Veil (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 845,
    "abilities": [
      {
        "name": "Gulp Missile",
        "isHidden": false,
        "label": "Gulp Missile"
      }
    ],
    "eggMoves": [
      "Feather Dance",
      "Aerial Ace",
      "Roost",
      "Aqua Ring",
      "Defog",
      "Belch",
      "Aqua Cutter"
    ]
  },
  {
    "dexNumber": 846,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Propeller Tail",
        "isHidden": true,
        "label": "Propeller Tail (HO)"
      }
    ],
    "eggMoves": [
      "Thrash",
      "Slash",
      "Acupressure",
      "Night Slash"
    ]
  },
  {
    "dexNumber": 847,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Propeller Tail",
        "isHidden": true,
        "label": "Propeller Tail (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 848,
    "abilities": [
      {
        "name": "Rattled",
        "isHidden": false,
        "label": "Rattled"
      },
      {
        "name": "Static",
        "isHidden": false,
        "label": "Static"
      },
      {
        "name": "Klutz",
        "isHidden": true,
        "label": "Klutz (HO)"
      }
    ],
    "eggMoves": [
      "Endeavor",
      "Metal Sound",
      "Power Up Punch"
    ]
  },
  {
    "dexNumber": 849,
    "abilities": [
      {
        "name": "Punk Rock",
        "isHidden": false,
        "label": "Punk Rock"
      },
      {
        "name": "Plus",
        "isHidden": false,
        "label": "Plus"
      },
      {
        "name": "Technician",
        "isHidden": true,
        "label": "Technician (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 850,
    "abilities": [
      {
        "name": "Flash Fire",
        "isHidden": false,
        "label": "Flash Fire"
      },
      {
        "name": "White Smoke",
        "isHidden": false,
        "label": "White Smoke"
      },
      {
        "name": "Flame Body",
        "isHidden": true,
        "label": "Flame Body (HO)"
      }
    ],
    "eggMoves": [
      "Defense Curl",
      "Rollout",
      "Knock Off",
      "Struggle Bug"
    ]
  },
  {
    "dexNumber": 851,
    "abilities": [
      {
        "name": "Flash Fire",
        "isHidden": false,
        "label": "Flash Fire"
      },
      {
        "name": "White Smoke",
        "isHidden": false,
        "label": "White Smoke"
      },
      {
        "name": "Flame Body",
        "isHidden": true,
        "label": "Flame Body (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 852,
    "abilities": [
      {
        "name": "Limber",
        "isHidden": false,
        "label": "Limber"
      },
      {
        "name": "Technician",
        "isHidden": true,
        "label": "Technician (HO)"
      }
    ],
    "eggMoves": [
      "Seismic Toss",
      "Pain Split",
      "Sucker Punch",
      "Soak",
      "Circle Throw",
      "Power Up Punch"
    ]
  },
  {
    "dexNumber": 853,
    "abilities": [
      {
        "name": "Limber",
        "isHidden": false,
        "label": "Limber"
      },
      {
        "name": "Technician",
        "isHidden": true,
        "label": "Technician (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 854,
    "abilities": [
      {
        "name": "Weak Armor",
        "isHidden": false,
        "label": "Weak Armor"
      },
      {
        "name": "Cursed Body",
        "isHidden": true,
        "label": "Cursed Body (HO)"
      }
    ],
    "eggMoves": [
      "Ally Switch"
    ]
  },
  {
    "dexNumber": 855,
    "abilities": [
      {
        "name": "Weak Armor",
        "isHidden": false,
        "label": "Weak Armor"
      },
      {
        "name": "Cursed Body",
        "isHidden": true,
        "label": "Cursed Body (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 856,
    "abilities": [
      {
        "name": "Healer",
        "isHidden": false,
        "label": "Healer"
      },
      {
        "name": "Anticipation",
        "isHidden": false,
        "label": "Anticipation"
      },
      {
        "name": "Magic Bounce",
        "isHidden": true,
        "label": "Magic Bounce (HO)"
      }
    ],
    "eggMoves": [
      "After You",
      "Quash",
      "Aromatic Mist",
      "Nuzzle",
      "Mystical Fire"
    ]
  },
  {
    "dexNumber": 857,
    "abilities": [
      {
        "name": "Healer",
        "isHidden": false,
        "label": "Healer"
      },
      {
        "name": "Anticipation",
        "isHidden": false,
        "label": "Anticipation"
      },
      {
        "name": "Magic Bounce",
        "isHidden": true,
        "label": "Magic Bounce (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 858,
    "abilities": [
      {
        "name": "Healer",
        "isHidden": false,
        "label": "Healer"
      },
      {
        "name": "Anticipation",
        "isHidden": false,
        "label": "Anticipation"
      },
      {
        "name": "Magic Bounce",
        "isHidden": true,
        "label": "Magic Bounce (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 859,
    "abilities": [
      {
        "name": "Prankster",
        "isHidden": false,
        "label": "Prankster"
      },
      {
        "name": "Frisk",
        "isHidden": false,
        "label": "Frisk"
      },
      {
        "name": "Pickpocket",
        "isHidden": true,
        "label": "Pickpocket (HO)"
      }
    ],
    "eggMoves": [
      "Parting Shot"
    ]
  },
  {
    "dexNumber": 860,
    "abilities": [
      {
        "name": "Prankster",
        "isHidden": false,
        "label": "Prankster"
      },
      {
        "name": "Frisk",
        "isHidden": false,
        "label": "Frisk"
      },
      {
        "name": "Pickpocket",
        "isHidden": true,
        "label": "Pickpocket (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 861,
    "abilities": [
      {
        "name": "Prankster",
        "isHidden": false,
        "label": "Prankster"
      },
      {
        "name": "Frisk",
        "isHidden": false,
        "label": "Frisk"
      },
      {
        "name": "Pickpocket",
        "isHidden": true,
        "label": "Pickpocket (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 862,
    "abilities": [
      {
        "name": "Reckless",
        "isHidden": false,
        "label": "Reckless"
      },
      {
        "name": "Guts",
        "isHidden": false,
        "label": "Guts"
      },
      {
        "name": "Defiant",
        "isHidden": true,
        "label": "Defiant (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 863,
    "abilities": [
      {
        "name": "Battle Armor",
        "isHidden": false,
        "label": "Battle Armor"
      },
      {
        "name": "Tough Claws",
        "isHidden": false,
        "label": "Tough Claws"
      },
      {
        "name": "Steely Spirit",
        "isHidden": true,
        "label": "Steely Spirit (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 864,
    "abilities": [
      {
        "name": "Weak Armor",
        "isHidden": false,
        "label": "Weak Armor"
      },
      {
        "name": "Perish Body",
        "isHidden": true,
        "label": "Perish Body (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 865,
    "abilities": [
      {
        "name": "Steadfast",
        "isHidden": false,
        "label": "Steadfast"
      },
      {
        "name": "Scrappy",
        "isHidden": true,
        "label": "Scrappy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 866,
    "abilities": [
      {
        "name": "Tangled Feet",
        "isHidden": false,
        "label": "Tangled Feet"
      },
      {
        "name": "Screen Cleaner",
        "isHidden": false,
        "label": "Screen Cleaner"
      },
      {
        "name": "Ice Body",
        "isHidden": true,
        "label": "Ice Body (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 867,
    "abilities": [
      {
        "name": "Wandering Spirit",
        "isHidden": false,
        "label": "Wandering Spirit"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 868,
    "abilities": [
      {
        "name": "Sweet Veil",
        "isHidden": false,
        "label": "Sweet Veil"
      },
      {
        "name": "Aroma Veil",
        "isHidden": true,
        "label": "Aroma Veil (HO)"
      }
    ],
    "eggMoves": [
      "Last Resort",
      "Baby Doll Eyes"
    ]
  },
  {
    "dexNumber": 869,
    "abilities": [
      {
        "name": "Sweet Veil",
        "isHidden": false,
        "label": "Sweet Veil"
      },
      {
        "name": "Aroma Veil",
        "isHidden": true,
        "label": "Aroma Veil (HO)"
      }
    ],
    "eggMoves": [
      "Last Resort",
      "Baby Doll Eyes"
    ]
  },
  {
    "dexNumber": 870,
    "abilities": [
      {
        "name": "Battle Armor",
        "isHidden": false,
        "label": "Battle Armor"
      },
      {
        "name": "Defiant",
        "isHidden": true,
        "label": "Defiant (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 871,
    "abilities": [
      {
        "name": "Lightning Rod",
        "isHidden": false,
        "label": "Lightning Rod"
      },
      {
        "name": "Electric Surge",
        "isHidden": true,
        "label": "Electric Surge (HO)"
      }
    ],
    "eggMoves": [
      "Memento",
      "Sucker Punch"
    ]
  },
  {
    "dexNumber": 872,
    "abilities": [
      {
        "name": "Shield Dust",
        "isHidden": false,
        "label": "Shield Dust"
      },
      {
        "name": "Ice Scales",
        "isHidden": true,
        "label": "Ice Scales (HO)"
      }
    ],
    "eggMoves": [
      "Mirror Coat",
      "Bug Bite",
      "Fairy Wind"
    ]
  },
  {
    "dexNumber": 873,
    "abilities": [
      {
        "name": "Shield Dust",
        "isHidden": false,
        "label": "Shield Dust"
      },
      {
        "name": "Ice Scales",
        "isHidden": true,
        "label": "Ice Scales (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 874,
    "abilities": [
      {
        "name": "Power Spot",
        "isHidden": false,
        "label": "Power Spot"
      }
    ],
    "eggMoves": [
      "Curse",
      "Ancient Power"
    ]
  },
  {
    "dexNumber": 875,
    "abilities": [
      {
        "name": "Ice Face",
        "isHidden": false,
        "label": "Ice Face"
      }
    ],
    "eggMoves": [
      "Double Edge",
      "Belly Drum",
      "Aqua Ring",
      "Head Smash",
      "Soak",
      "Icicle Crash"
    ]
  },
  {
    "dexNumber": 876,
    "abilities": [
      {
        "name": "Inner Focus",
        "isHidden": false,
        "label": "Inner Focus"
      },
      {
        "name": "Synchronize",
        "isHidden": false,
        "label": "Synchronize"
      },
      {
        "name": "Psychic Surge",
        "isHidden": true,
        "label": "Psychic Surge (HO)"
      }
    ],
    "eggMoves": [
      "Psych Up",
      "Fake Out",
      "Extrasensory"
    ]
  },
  {
    "dexNumber": 877,
    "abilities": [
      {
        "name": "Hunger Switch",
        "isHidden": false,
        "label": "Hunger Switch"
      }
    ],
    "eggMoves": [
      "Super Fang",
      "Swagger",
      "Rapid Spin",
      "Fake Out",
      "Charge",
      "Tickle",
      "Quash",
      "Parting Shot"
    ]
  },
  {
    "dexNumber": 878,
    "abilities": [
      {
        "name": "Sheer Force",
        "isHidden": false,
        "label": "Sheer Force"
      },
      {
        "name": "Heavy Metal",
        "isHidden": true,
        "label": "Heavy Metal (HO)"
      }
    ],
    "eggMoves": [
      "Whirlwind",
      "Slam",
      "Double Edge",
      "Fissure",
      "Defense Curl",
      "Curse",
      "Swagger",
      "Belch"
    ]
  },
  {
    "dexNumber": 879,
    "abilities": [
      {
        "name": "Sheer Force",
        "isHidden": false,
        "label": "Sheer Force"
      },
      {
        "name": "Heavy Metal",
        "isHidden": true,
        "label": "Heavy Metal (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 880,
    "abilities": [
      {
        "name": "Volt Absorb",
        "isHidden": false,
        "label": "Volt Absorb"
      },
      {
        "name": "Hustle",
        "isHidden": false,
        "label": "Hustle"
      },
      {
        "name": "Sand Rush",
        "isHidden": true,
        "label": "Sand Rush (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 881,
    "abilities": [
      {
        "name": "Volt Absorb",
        "isHidden": false,
        "label": "Volt Absorb"
      },
      {
        "name": "Static",
        "isHidden": false,
        "label": "Static"
      },
      {
        "name": "Slush Rush",
        "isHidden": true,
        "label": "Slush Rush (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 882,
    "abilities": [
      {
        "name": "Water Absorb",
        "isHidden": false,
        "label": "Water Absorb"
      },
      {
        "name": "Strong Jaw",
        "isHidden": false,
        "label": "Strong Jaw"
      },
      {
        "name": "Sand Rush",
        "isHidden": true,
        "label": "Sand Rush (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 883,
    "abilities": [
      {
        "name": "Water Absorb",
        "isHidden": false,
        "label": "Water Absorb"
      },
      {
        "name": "Ice Body",
        "isHidden": false,
        "label": "Ice Body"
      },
      {
        "name": "Slush Rush",
        "isHidden": true,
        "label": "Slush Rush (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 884,
    "abilities": [
      {
        "name": "Light Metal",
        "isHidden": false,
        "label": "Light Metal"
      },
      {
        "name": "Heavy Metal",
        "isHidden": false,
        "label": "Heavy Metal"
      },
      {
        "name": "Stalwart",
        "isHidden": true,
        "label": "Stalwart (HO)"
      }
    ],
    "eggMoves": [
      "Slash",
      "Mirror Coat",
      "Night Slash"
    ]
  },
  {
    "dexNumber": 885,
    "abilities": [
      {
        "name": "Clear Body",
        "isHidden": false,
        "label": "Clear Body"
      },
      {
        "name": "Infiltrator",
        "isHidden": false,
        "label": "Infiltrator"
      },
      {
        "name": "Cursed Body",
        "isHidden": true,
        "label": "Cursed Body (HO)"
      }
    ],
    "eggMoves": [
      "Disable",
      "Double Team",
      "Confuse Ray",
      "Curse",
      "Grudge",
      "Sucker Punch",
      "Dragon Tail"
    ]
  },
  {
    "dexNumber": 886,
    "abilities": [
      {
        "name": "Clear Body",
        "isHidden": false,
        "label": "Clear Body"
      },
      {
        "name": "Infiltrator",
        "isHidden": false,
        "label": "Infiltrator"
      },
      {
        "name": "Cursed Body",
        "isHidden": true,
        "label": "Cursed Body (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 887,
    "abilities": [
      {
        "name": "Clear Body",
        "isHidden": false,
        "label": "Clear Body"
      },
      {
        "name": "Infiltrator",
        "isHidden": false,
        "label": "Infiltrator"
      },
      {
        "name": "Cursed Body",
        "isHidden": true,
        "label": "Cursed Body (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 888,
    "abilities": [
      {
        "name": "Intrepid Sword",
        "isHidden": false,
        "label": "Intrepid Sword"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 889,
    "abilities": [
      {
        "name": "Dauntless Shield",
        "isHidden": false,
        "label": "Dauntless Shield"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 890,
    "abilities": [
      {
        "name": "Pressure",
        "isHidden": false,
        "label": "Pressure"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 891,
    "abilities": [
      {
        "name": "Inner Focus",
        "isHidden": false,
        "label": "Inner Focus"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 892,
    "abilities": [
      {
        "name": "Unseen Fist",
        "isHidden": false,
        "label": "Unseen Fist"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 893,
    "abilities": [
      {
        "name": "Leaf Guard",
        "isHidden": false,
        "label": "Leaf Guard"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 894,
    "abilities": [
      {
        "name": "Transistor",
        "isHidden": false,
        "label": "Transistor"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 895,
    "abilities": [
      {
        "name": "Dragons Maw",
        "isHidden": false,
        "label": "Dragons Maw"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 896,
    "abilities": [
      {
        "name": "Chilling Neigh",
        "isHidden": false,
        "label": "Chilling Neigh"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 897,
    "abilities": [
      {
        "name": "Grim Neigh",
        "isHidden": false,
        "label": "Grim Neigh"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 898,
    "abilities": [
      {
        "name": "Unnerve",
        "isHidden": false,
        "label": "Unnerve"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 899,
    "abilities": [
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Frisk",
        "isHidden": false,
        "label": "Frisk"
      },
      {
        "name": "Sap Sipper",
        "isHidden": true,
        "label": "Sap Sipper (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 900,
    "abilities": [
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      },
      {
        "name": "Sheer Force",
        "isHidden": false,
        "label": "Sheer Force"
      },
      {
        "name": "Sharpness",
        "isHidden": true,
        "label": "Sharpness (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 901,
    "abilities": [
      {
        "name": "Guts",
        "isHidden": false,
        "label": "Guts"
      },
      {
        "name": "Bulletproof",
        "isHidden": false,
        "label": "Bulletproof"
      },
      {
        "name": "Unnerve",
        "isHidden": true,
        "label": "Unnerve (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 902,
    "abilities": [
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Adaptability",
        "isHidden": false,
        "label": "Adaptability"
      },
      {
        "name": "Mold Breaker",
        "isHidden": true,
        "label": "Mold Breaker (HO)"
      }
    ],
    "eggMoves": [
      "Endeavor",
      "Last Respects"
    ]
  },
  {
    "dexNumber": 903,
    "abilities": [
      {
        "name": "Pressure",
        "isHidden": false,
        "label": "Pressure"
      },
      {
        "name": "Unburden",
        "isHidden": false,
        "label": "Unburden"
      },
      {
        "name": "Poison Touch",
        "isHidden": true,
        "label": "Poison Touch (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 904,
    "abilities": [
      {
        "name": "Poison Point",
        "isHidden": false,
        "label": "Poison Point"
      },
      {
        "name": "Swift Swim",
        "isHidden": false,
        "label": "Swift Swim"
      },
      {
        "name": "Intimidate",
        "isHidden": true,
        "label": "Intimidate (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 905,
    "abilities": [
      {
        "name": "Cute Charm",
        "isHidden": false,
        "label": "Cute Charm"
      },
      {
        "name": "Contrary",
        "isHidden": true,
        "label": "Contrary (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 906,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Protean",
        "isHidden": true,
        "label": "Protean (HO)"
      }
    ],
    "eggMoves": [
      "Leech Seed",
      "Copycat",
      "Sucker Punch",
      "Ally Switch",
      "Petal Blizzard"
    ]
  },
  {
    "dexNumber": 907,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Protean",
        "isHidden": true,
        "label": "Protean (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 908,
    "abilities": [
      {
        "name": "Overgrow",
        "isHidden": false,
        "label": "Overgrow"
      },
      {
        "name": "Protean",
        "isHidden": true,
        "label": "Protean (HO)"
      }
    ],
    "eggMoves": [
      "Double Team",
      "Trick"
    ]
  },
  {
    "dexNumber": 909,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Unaware",
        "isHidden": true,
        "label": "Unaware (HO)"
      }
    ],
    "eggMoves": [
      "Curse",
      "Encore",
      "Slack Off",
      "Belch"
    ]
  },
  {
    "dexNumber": 910,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Unaware",
        "isHidden": true,
        "label": "Unaware (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 911,
    "abilities": [
      {
        "name": "Blaze",
        "isHidden": false,
        "label": "Blaze"
      },
      {
        "name": "Unaware",
        "isHidden": true,
        "label": "Unaware (HO)"
      }
    ],
    "eggMoves": [
      "Sing"
    ]
  },
  {
    "dexNumber": 912,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Moxie",
        "isHidden": true,
        "label": "Moxie (HO)"
      }
    ],
    "eggMoves": [
      "Detect",
      "Rapid Spin",
      "Roost",
      "Last Resort"
    ]
  },
  {
    "dexNumber": 913,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Moxie",
        "isHidden": true,
        "label": "Moxie (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 914,
    "abilities": [
      {
        "name": "Torrent",
        "isHidden": false,
        "label": "Torrent"
      },
      {
        "name": "Moxie",
        "isHidden": true,
        "label": "Moxie (HO)"
      }
    ],
    "eggMoves": [
      "Counter"
    ]
  },
  {
    "dexNumber": 915,
    "abilities": [
      {
        "name": "Aroma Veil",
        "isHidden": false,
        "label": "Aroma Veil"
      },
      {
        "name": "Gluttony",
        "isHidden": false,
        "label": "Gluttony"
      },
      {
        "name": "Thick Fat",
        "isHidden": true,
        "label": "Thick Fat (HO)"
      }
    ],
    "eggMoves": [
      "Stockpile",
      "Spit Up",
      "Swallow",
      "Endeavor",
      "Stuff Cheeks"
    ]
  },
  {
    "dexNumber": 916,
    "abilities": [
      {
        "name": "Lingering Aroma",
        "isHidden": false,
        "label": "Lingering Aroma"
      },
      {
        "name": "Gluttony",
        "isHidden": false,
        "label": "Gluttony"
      },
      {
        "name": "Thick Fat",
        "isHidden": true,
        "label": "Thick Fat (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 917,
    "abilities": [
      {
        "name": "Insomnia",
        "isHidden": false,
        "label": "Insomnia"
      },
      {
        "name": "Stakeout",
        "isHidden": true,
        "label": "Stakeout (HO)"
      }
    ],
    "eggMoves": [
      "Memento",
      "Sucker Punch",
      "First Impression",
      "Lunge"
    ]
  },
  {
    "dexNumber": 918,
    "abilities": [
      {
        "name": "Insomnia",
        "isHidden": false,
        "label": "Insomnia"
      },
      {
        "name": "Stakeout",
        "isHidden": true,
        "label": "Stakeout (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 919,
    "abilities": [
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      },
      {
        "name": "Tinted Lens",
        "isHidden": true,
        "label": "Tinted Lens (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "Skitter Smack"
    ]
  },
  {
    "dexNumber": 920,
    "abilities": [
      {
        "name": "Swarm",
        "isHidden": false,
        "label": "Swarm"
      },
      {
        "name": "Tinted Lens",
        "isHidden": true,
        "label": "Tinted Lens (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 921,
    "abilities": [
      {
        "name": "Static",
        "isHidden": false,
        "label": "Static"
      },
      {
        "name": "Natural Cure",
        "isHidden": false,
        "label": "Natural Cure"
      },
      {
        "name": "Iron Fist",
        "isHidden": true,
        "label": "Iron Fist (HO)"
      }
    ],
    "eggMoves": [
      "Mach Punch",
      "Sweet Kiss",
      "Fake Out",
      "Wish"
    ]
  },
  {
    "dexNumber": 922,
    "abilities": [
      {
        "name": "Volt Absorb",
        "isHidden": false,
        "label": "Volt Absorb"
      },
      {
        "name": "Natural Cure",
        "isHidden": false,
        "label": "Natural Cure"
      },
      {
        "name": "Iron Fist",
        "isHidden": true,
        "label": "Iron Fist (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 923,
    "abilities": [
      {
        "name": "Volt Absorb",
        "isHidden": false,
        "label": "Volt Absorb"
      },
      {
        "name": "Natural Cure",
        "isHidden": false,
        "label": "Natural Cure"
      },
      {
        "name": "Iron Fist",
        "isHidden": true,
        "label": "Iron Fist (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 924,
    "abilities": [
      {
        "name": "Run Away",
        "isHidden": false,
        "label": "Run Away"
      },
      {
        "name": "Pickup",
        "isHidden": false,
        "label": "Pickup"
      },
      {
        "name": "Own Tempo",
        "isHidden": true,
        "label": "Own Tempo (HO)"
      }
    ],
    "eggMoves": [
      "Bite",
      "Baton Pass",
      "Tickle",
      "Feint",
      "Switcheroo",
      "After You"
    ]
  },
  {
    "dexNumber": 925,
    "abilities": [
      {
        "name": "Friend Guard",
        "isHidden": false,
        "label": "Friend Guard"
      },
      {
        "name": "Cheek Pouch",
        "isHidden": false,
        "label": "Cheek Pouch"
      },
      {
        "name": "Technician",
        "isHidden": true,
        "label": "Technician (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 926,
    "abilities": [
      {
        "name": "Own Tempo",
        "isHidden": false,
        "label": "Own Tempo"
      },
      {
        "name": "Klutz",
        "isHidden": true,
        "label": "Klutz (HO)"
      }
    ],
    "eggMoves": [
      "Sweet Scent",
      "Wish",
      "Yawn",
      "Howl",
      "Copycat"
    ]
  },
  {
    "dexNumber": 927,
    "abilities": [
      {
        "name": "Well Baked Body",
        "isHidden": false,
        "label": "Well Baked Body"
      },
      {
        "name": "Aroma Veil",
        "isHidden": true,
        "label": "Aroma Veil (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 928,
    "abilities": [
      {
        "name": "Early Bird",
        "isHidden": false,
        "label": "Early Bird"
      },
      {
        "name": "Harvest",
        "isHidden": true,
        "label": "Harvest (HO)"
      }
    ],
    "eggMoves": [
      "Synthesis",
      "Memento",
      "Weather Ball",
      "Strength Sap"
    ]
  },
  {
    "dexNumber": 929,
    "abilities": [
      {
        "name": "Early Bird",
        "isHidden": false,
        "label": "Early Bird"
      },
      {
        "name": "Harvest",
        "isHidden": true,
        "label": "Harvest (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 930,
    "abilities": [
      {
        "name": "Seed Sower",
        "isHidden": false,
        "label": "Seed Sower"
      },
      {
        "name": "Harvest",
        "isHidden": true,
        "label": "Harvest (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 931,
    "abilities": [
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Hustle",
        "isHidden": false,
        "label": "Hustle"
      },
      {
        "name": "Guts",
        "isHidden": true,
        "label": "Guts (HO)"
      }
    ],
    "eggMoves": [
      "Double Edge",
      "Flatter",
      "Final Gambit",
      "Parting Shot"
    ]
  },
  {
    "dexNumber": 932,
    "abilities": [
      {
        "name": "Purifying Salt",
        "isHidden": false,
        "label": "Purifying Salt"
      },
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Clear Body",
        "isHidden": true,
        "label": "Clear Body (HO)"
      }
    ],
    "eggMoves": [
      "Fissure",
      "Curse",
      "Ancient Power",
      "Power Gem"
    ]
  },
  {
    "dexNumber": 933,
    "abilities": [
      {
        "name": "Purifying Salt",
        "isHidden": false,
        "label": "Purifying Salt"
      },
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Clear Body",
        "isHidden": true,
        "label": "Clear Body (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 934,
    "abilities": [
      {
        "name": "Purifying Salt",
        "isHidden": false,
        "label": "Purifying Salt"
      },
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Clear Body",
        "isHidden": true,
        "label": "Clear Body (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 935,
    "abilities": [
      {
        "name": "Flash Fire",
        "isHidden": false,
        "label": "Flash Fire"
      },
      {
        "name": "Flame Body",
        "isHidden": true,
        "label": "Flame Body (HO)"
      }
    ],
    "eggMoves": [
      "Disable",
      "Spite",
      "Destiny Bond"
    ]
  },
  {
    "dexNumber": 936,
    "abilities": [
      {
        "name": "Flash Fire",
        "isHidden": false,
        "label": "Flash Fire"
      },
      {
        "name": "Weak Armor",
        "isHidden": true,
        "label": "Weak Armor (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 937,
    "abilities": [
      {
        "name": "Flash Fire",
        "isHidden": false,
        "label": "Flash Fire"
      },
      {
        "name": "Weak Armor",
        "isHidden": true,
        "label": "Weak Armor (HO)"
      }
    ],
    "eggMoves": [
      "Night Slash",
      "Shadow Sneak",
      "Quick Guard",
      "Solar Blade"
    ]
  },
  {
    "dexNumber": 938,
    "abilities": [
      {
        "name": "Own Tempo",
        "isHidden": false,
        "label": "Own Tempo"
      },
      {
        "name": "Static",
        "isHidden": false,
        "label": "Static"
      },
      {
        "name": "Damp",
        "isHidden": true,
        "label": "Damp (HO)"
      }
    ],
    "eggMoves": [
      "Muddy Water",
      "Soak",
      "Parabolic Charge"
    ]
  },
  {
    "dexNumber": 939,
    "abilities": [
      {
        "name": "Electromorphosis",
        "isHidden": false,
        "label": "Electromorphosis"
      },
      {
        "name": "Static",
        "isHidden": false,
        "label": "Static"
      },
      {
        "name": "Damp",
        "isHidden": true,
        "label": "Damp (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 940,
    "abilities": [
      {
        "name": "Wind Power",
        "isHidden": false,
        "label": "Wind Power"
      },
      {
        "name": "Volt Absorb",
        "isHidden": false,
        "label": "Volt Absorb"
      },
      {
        "name": "Competitive",
        "isHidden": true,
        "label": "Competitive (HO)"
      }
    ],
    "eggMoves": [
      "Stockpile",
      "Spit Up",
      "Swallow",
      "Endeavor",
      "Feather Dance",
      "Weather Ball"
    ]
  },
  {
    "dexNumber": 941,
    "abilities": [
      {
        "name": "Wind Power",
        "isHidden": false,
        "label": "Wind Power"
      },
      {
        "name": "Volt Absorb",
        "isHidden": false,
        "label": "Volt Absorb"
      },
      {
        "name": "Competitive",
        "isHidden": true,
        "label": "Competitive (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 942,
    "abilities": [
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Run Away",
        "isHidden": false,
        "label": "Run Away"
      },
      {
        "name": "Stakeout",
        "isHidden": true,
        "label": "Stakeout (HO)"
      }
    ],
    "eggMoves": [
      "Destiny Bond",
      "Endeavor",
      "Retaliate",
      "Play Rough"
    ]
  },
  {
    "dexNumber": 943,
    "abilities": [
      {
        "name": "Intimidate",
        "isHidden": false,
        "label": "Intimidate"
      },
      {
        "name": "Guard Dog",
        "isHidden": false,
        "label": "Guard Dog"
      },
      {
        "name": "Stakeout",
        "isHidden": true,
        "label": "Stakeout (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 944,
    "abilities": [
      {
        "name": "Unburden",
        "isHidden": false,
        "label": "Unburden"
      },
      {
        "name": "Pickpocket",
        "isHidden": false,
        "label": "Pickpocket"
      },
      {
        "name": "Prankster",
        "isHidden": true,
        "label": "Prankster (HO)"
      }
    ],
    "eggMoves": [
      "Toxic",
      "Super Fang",
      "Swagger",
      "Copycat",
      "Cross Poison",
      "Parting Shot"
    ]
  },
  {
    "dexNumber": 945,
    "abilities": [
      {
        "name": "Unburden",
        "isHidden": false,
        "label": "Unburden"
      },
      {
        "name": "Poison Touch",
        "isHidden": false,
        "label": "Poison Touch"
      },
      {
        "name": "Prankster",
        "isHidden": true,
        "label": "Prankster (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 946,
    "abilities": [
      {
        "name": "Wind Rider",
        "isHidden": false,
        "label": "Wind Rider"
      },
      {
        "name": "Infiltrator",
        "isHidden": true,
        "label": "Infiltrator (HO)"
      }
    ],
    "eggMoves": [
      "Leech Seed",
      "Beat Up",
      "Block",
      "Shadow Sneak",
      "Strength Sap"
    ]
  },
  {
    "dexNumber": 947,
    "abilities": [
      {
        "name": "Wind Rider",
        "isHidden": false,
        "label": "Wind Rider"
      },
      {
        "name": "Infiltrator",
        "isHidden": true,
        "label": "Infiltrator (HO)"
      }
    ],
    "eggMoves": [
      "Leech Seed",
      "Beat Up",
      "Block",
      "Shadow Sneak",
      "Strength Sap"
    ]
  },
  {
    "dexNumber": 948,
    "abilities": [
      {
        "name": "Mycelium Might",
        "isHidden": false,
        "label": "Mycelium Might"
      }
    ],
    "eggMoves": [
      "Leech Seed",
      "Toxic",
      "Rapid Spin",
      "Mirror Coat",
      "Knock Off",
      "Tickle",
      "Acupressure",
      "Rage Powder"
    ]
  },
  {
    "dexNumber": 949,
    "abilities": [
      {
        "name": "Mycelium Might",
        "isHidden": false,
        "label": "Mycelium Might"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 950,
    "abilities": [
      {
        "name": "Anger Shell",
        "isHidden": false,
        "label": "Anger Shell"
      },
      {
        "name": "Shell Armor",
        "isHidden": false,
        "label": "Shell Armor"
      },
      {
        "name": "Regenerator",
        "isHidden": true,
        "label": "Regenerator (HO)"
      }
    ],
    "eggMoves": [
      "Crabhammer",
      "Ancient Power",
      "Knock Off",
      "Endeavor"
    ]
  },
  {
    "dexNumber": 951,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Insomnia",
        "isHidden": false,
        "label": "Insomnia"
      },
      {
        "name": "Klutz",
        "isHidden": true,
        "label": "Klutz (HO)"
      }
    ],
    "eggMoves": [
      "Leech Seed",
      "Rollout",
      "Ingrain",
      "Worry Seed",
      "Rage Powder"
    ]
  },
  {
    "dexNumber": 952,
    "abilities": [
      {
        "name": "Chlorophyll",
        "isHidden": false,
        "label": "Chlorophyll"
      },
      {
        "name": "Insomnia",
        "isHidden": false,
        "label": "Insomnia"
      },
      {
        "name": "Moody",
        "isHidden": true,
        "label": "Moody (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 953,
    "abilities": [
      {
        "name": "Compound Eyes",
        "isHidden": false,
        "label": "Compound Eyes"
      },
      {
        "name": "Shed Skin",
        "isHidden": true,
        "label": "Shed Skin (HO)"
      }
    ],
    "eggMoves": [
      "Recover",
      "Memento",
      "Weather Ball",
      "Cosmic Power"
    ]
  },
  {
    "dexNumber": 954,
    "abilities": [
      {
        "name": "Synchronize",
        "isHidden": false,
        "label": "Synchronize"
      },
      {
        "name": "Telepathy",
        "isHidden": true,
        "label": "Telepathy (HO)"
      }
    ],
    "eggMoves": [
      "Safeguard",
      "Psych Up"
    ]
  },
  {
    "dexNumber": 955,
    "abilities": [
      {
        "name": "Anticipation",
        "isHidden": false,
        "label": "Anticipation"
      },
      {
        "name": "Frisk",
        "isHidden": false,
        "label": "Frisk"
      },
      {
        "name": "Speed Boost",
        "isHidden": true,
        "label": "Speed Boost (HO)"
      }
    ],
    "eggMoves": [
      "Hypnosis",
      "Roost",
      "Ally Switch"
    ]
  },
  {
    "dexNumber": 956,
    "abilities": [
      {
        "name": "Opportunist",
        "isHidden": false,
        "label": "Opportunist"
      },
      {
        "name": "Frisk",
        "isHidden": false,
        "label": "Frisk"
      },
      {
        "name": "Speed Boost",
        "isHidden": true,
        "label": "Speed Boost (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 957,
    "abilities": [
      {
        "name": "Mold Breaker",
        "isHidden": false,
        "label": "Mold Breaker"
      },
      {
        "name": "Own Tempo",
        "isHidden": false,
        "label": "Own Tempo"
      },
      {
        "name": "Pickpocket",
        "isHidden": true,
        "label": "Pickpocket (HO)"
      }
    ],
    "eggMoves": [
      "Feint",
      "Quash",
      "Ice Hammer"
    ]
  },
  {
    "dexNumber": 958,
    "abilities": [
      {
        "name": "Mold Breaker",
        "isHidden": false,
        "label": "Mold Breaker"
      },
      {
        "name": "Own Tempo",
        "isHidden": false,
        "label": "Own Tempo"
      },
      {
        "name": "Pickpocket",
        "isHidden": true,
        "label": "Pickpocket (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 959,
    "abilities": [
      {
        "name": "Mold Breaker",
        "isHidden": false,
        "label": "Mold Breaker"
      },
      {
        "name": "Own Tempo",
        "isHidden": false,
        "label": "Own Tempo"
      },
      {
        "name": "Pickpocket",
        "isHidden": true,
        "label": "Pickpocket (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 960,
    "abilities": [
      {
        "name": "Gooey",
        "isHidden": false,
        "label": "Gooey"
      },
      {
        "name": "Rattled",
        "isHidden": false,
        "label": "Rattled"
      },
      {
        "name": "Sand Veil",
        "isHidden": true,
        "label": "Sand Veil (HO)"
      }
    ],
    "eggMoves": [
      "Memento",
      "Final Gambit"
    ]
  },
  {
    "dexNumber": 961,
    "abilities": [
      {
        "name": "Gooey",
        "isHidden": false,
        "label": "Gooey"
      },
      {
        "name": "Rattled",
        "isHidden": false,
        "label": "Rattled"
      },
      {
        "name": "Sand Veil",
        "isHidden": true,
        "label": "Sand Veil (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 962,
    "abilities": [
      {
        "name": "Big Pecks",
        "isHidden": false,
        "label": "Big Pecks"
      },
      {
        "name": "Keen Eye",
        "isHidden": false,
        "label": "Keen Eye"
      },
      {
        "name": "Rocky Payload",
        "isHidden": true,
        "label": "Rocky Payload (HO)"
      }
    ],
    "eggMoves": [
      "Sky Attack",
      "Feather Dance",
      "Roost",
      "Sucker Punch",
      "Power Trip"
    ]
  },
  {
    "dexNumber": 963,
    "abilities": [
      {
        "name": "Water Veil",
        "isHidden": false,
        "label": "Water Veil"
      }
    ],
    "eggMoves": [
      "Counter",
      "Haze",
      "Tickle",
      "Bounce",
      "Boomburst"
    ]
  },
  {
    "dexNumber": 964,
    "abilities": [
      {
        "name": "Zero To Hero",
        "isHidden": false,
        "label": "Zero To Hero"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 965,
    "abilities": [
      {
        "name": "Overcoat",
        "isHidden": false,
        "label": "Overcoat"
      },
      {
        "name": "Slow Start",
        "isHidden": true,
        "label": "Slow Start (HO)"
      }
    ],
    "eggMoves": [
      "Toxic",
      "Haze",
      "Self Destruct",
      "Torment",
      "Parting Shot"
    ]
  },
  {
    "dexNumber": 966,
    "abilities": [
      {
        "name": "Overcoat",
        "isHidden": false,
        "label": "Overcoat"
      },
      {
        "name": "Filter",
        "isHidden": true,
        "label": "Filter (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 967,
    "abilities": [
      {
        "name": "Shed Skin",
        "isHidden": false,
        "label": "Shed Skin"
      },
      {
        "name": "Regenerator",
        "isHidden": true,
        "label": "Regenerator (HO)"
      }
    ],
    "eggMoves": [
      "Iron Tail",
      "Knock Off",
      "Aqua Tail",
      "Power Whip"
    ]
  },
  {
    "dexNumber": 968,
    "abilities": [
      {
        "name": "Earth Eater",
        "isHidden": false,
        "label": "Earth Eater"
      },
      {
        "name": "Sand Veil",
        "isHidden": true,
        "label": "Sand Veil (HO)"
      }
    ],
    "eggMoves": [
      "Curse",
      "Metal Burst",
      "Coil"
    ]
  },
  {
    "dexNumber": 969,
    "abilities": [
      {
        "name": "Toxic Debris",
        "isHidden": false,
        "label": "Toxic Debris"
      },
      {
        "name": "Corrosion",
        "isHidden": true,
        "label": "Corrosion (HO)"
      }
    ],
    "eggMoves": [
      "Toxic",
      "Explosion",
      "Memento"
    ]
  },
  {
    "dexNumber": 970,
    "abilities": [
      {
        "name": "Toxic Debris",
        "isHidden": false,
        "label": "Toxic Debris"
      },
      {
        "name": "Corrosion",
        "isHidden": true,
        "label": "Corrosion (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 971,
    "abilities": [
      {
        "name": "Pickup",
        "isHidden": false,
        "label": "Pickup"
      },
      {
        "name": "Fluffy",
        "isHidden": true,
        "label": "Fluffy (HO)"
      }
    ],
    "eggMoves": [
      "Disable",
      "Destiny Bond",
      "Memento",
      "Yawn",
      "Howl",
      "Shadow Sneak",
      "Ally Switch"
    ]
  },
  {
    "dexNumber": 972,
    "abilities": [
      {
        "name": "Sand Rush",
        "isHidden": false,
        "label": "Sand Rush"
      },
      {
        "name": "Fluffy",
        "isHidden": true,
        "label": "Fluffy (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 973,
    "abilities": [
      {
        "name": "Scrappy",
        "isHidden": false,
        "label": "Scrappy"
      },
      {
        "name": "Tangled Feet",
        "isHidden": false,
        "label": "Tangled Feet"
      },
      {
        "name": "Costar",
        "isHidden": true,
        "label": "Costar (HO)"
      }
    ],
    "eggMoves": [
      "Double Team",
      "Sky Attack",
      "Quick Guard"
    ]
  },
  {
    "dexNumber": 974,
    "abilities": [
      {
        "name": "Thick Fat",
        "isHidden": false,
        "label": "Thick Fat"
      },
      {
        "name": "Snow Cloak",
        "isHidden": false,
        "label": "Snow Cloak"
      },
      {
        "name": "Sheer Force",
        "isHidden": true,
        "label": "Sheer Force (HO)"
      }
    ],
    "eggMoves": [
      "Belly Drum",
      "Superpower",
      "Yawn",
      "Entrainment",
      "Icicle Crash"
    ]
  },
  {
    "dexNumber": 975,
    "abilities": [
      {
        "name": "Thick Fat",
        "isHidden": false,
        "label": "Thick Fat"
      },
      {
        "name": "Slush Rush",
        "isHidden": false,
        "label": "Slush Rush"
      },
      {
        "name": "Sheer Force",
        "isHidden": true,
        "label": "Sheer Force (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 976,
    "abilities": [
      {
        "name": "Mold Breaker",
        "isHidden": false,
        "label": "Mold Breaker"
      },
      {
        "name": "Sharpness",
        "isHidden": true,
        "label": "Sharpness (HO)"
      }
    ],
    "eggMoves": [
      "Thrash",
      "Recover"
    ]
  },
  {
    "dexNumber": 977,
    "abilities": [
      {
        "name": "Unaware",
        "isHidden": false,
        "label": "Unaware"
      },
      {
        "name": "Oblivious",
        "isHidden": false,
        "label": "Oblivious"
      },
      {
        "name": "Water Veil",
        "isHidden": true,
        "label": "Water Veil (HO)"
      }
    ],
    "eggMoves": [
      "Thrash",
      "Fissure",
      "Curse",
      "Yawn"
    ]
  },
  {
    "dexNumber": 978,
    "abilities": [
      {
        "name": "Commander",
        "isHidden": false,
        "label": "Commander"
      },
      {
        "name": "Storm Drain",
        "isHidden": true,
        "label": "Storm Drain (HO)"
      }
    ],
    "eggMoves": [
      "Counter",
      "Baton Pass",
      "Rapid Spin"
    ]
  },
  {
    "dexNumber": 979,
    "abilities": [
      {
        "name": "Vital Spirit",
        "isHidden": false,
        "label": "Vital Spirit"
      },
      {
        "name": "Inner Focus",
        "isHidden": false,
        "label": "Inner Focus"
      },
      {
        "name": "Defiant",
        "isHidden": true,
        "label": "Defiant (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 980,
    "abilities": [
      {
        "name": "Poison Point",
        "isHidden": false,
        "label": "Poison Point"
      },
      {
        "name": "Water Absorb",
        "isHidden": false,
        "label": "Water Absorb"
      },
      {
        "name": "Unaware",
        "isHidden": true,
        "label": "Unaware (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 981,
    "abilities": [
      {
        "name": "Cud Chew",
        "isHidden": false,
        "label": "Cud Chew"
      },
      {
        "name": "Armor Tail",
        "isHidden": false,
        "label": "Armor Tail"
      },
      {
        "name": "Sap Sipper",
        "isHidden": true,
        "label": "Sap Sipper (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 982,
    "abilities": [
      {
        "name": "Serene Grace",
        "isHidden": false,
        "label": "Serene Grace"
      },
      {
        "name": "Run Away",
        "isHidden": false,
        "label": "Run Away"
      },
      {
        "name": "Rattled",
        "isHidden": true,
        "label": "Rattled (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 983,
    "abilities": [
      {
        "name": "Defiant",
        "isHidden": false,
        "label": "Defiant"
      },
      {
        "name": "Supreme Overlord",
        "isHidden": false,
        "label": "Supreme Overlord"
      },
      {
        "name": "Pressure",
        "isHidden": true,
        "label": "Pressure (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 984,
    "abilities": [
      {
        "name": "Protosynthesis",
        "isHidden": false,
        "label": "Protosynthesis"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 985,
    "abilities": [
      {
        "name": "Protosynthesis",
        "isHidden": false,
        "label": "Protosynthesis"
      }
    ],
    "eggMoves": [
      "Sunny Day"
    ]
  },
  {
    "dexNumber": 986,
    "abilities": [
      {
        "name": "Protosynthesis",
        "isHidden": false,
        "label": "Protosynthesis"
      }
    ],
    "eggMoves": [
      "Sunny Day"
    ]
  },
  {
    "dexNumber": 987,
    "abilities": [
      {
        "name": "Protosynthesis",
        "isHidden": false,
        "label": "Protosynthesis"
      }
    ],
    "eggMoves": [
      "Sunny Day"
    ]
  },
  {
    "dexNumber": 988,
    "abilities": [
      {
        "name": "Protosynthesis",
        "isHidden": false,
        "label": "Protosynthesis"
      }
    ],
    "eggMoves": [
      "Sunny Day"
    ]
  },
  {
    "dexNumber": 989,
    "abilities": [
      {
        "name": "Protosynthesis",
        "isHidden": false,
        "label": "Protosynthesis"
      }
    ],
    "eggMoves": [
      "Sunny Day"
    ]
  },
  {
    "dexNumber": 990,
    "abilities": [
      {
        "name": "Quark Drive",
        "isHidden": false,
        "label": "Quark Drive"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 991,
    "abilities": [
      {
        "name": "Quark Drive",
        "isHidden": false,
        "label": "Quark Drive"
      }
    ],
    "eggMoves": [
      "Electric Terrain"
    ]
  },
  {
    "dexNumber": 992,
    "abilities": [
      {
        "name": "Quark Drive",
        "isHidden": false,
        "label": "Quark Drive"
      }
    ],
    "eggMoves": [
      "Electric Terrain"
    ]
  },
  {
    "dexNumber": 993,
    "abilities": [
      {
        "name": "Quark Drive",
        "isHidden": false,
        "label": "Quark Drive"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 994,
    "abilities": [
      {
        "name": "Quark Drive",
        "isHidden": false,
        "label": "Quark Drive"
      }
    ],
    "eggMoves": [
      "Electric Terrain"
    ]
  },
  {
    "dexNumber": 995,
    "abilities": [
      {
        "name": "Quark Drive",
        "isHidden": false,
        "label": "Quark Drive"
      }
    ],
    "eggMoves": [
      "Electric Terrain"
    ]
  },
  {
    "dexNumber": 996,
    "abilities": [
      {
        "name": "Thermal Exchange",
        "isHidden": false,
        "label": "Thermal Exchange"
      },
      {
        "name": "Ice Body",
        "isHidden": true,
        "label": "Ice Body (HO)"
      }
    ],
    "eggMoves": [
      "Icicle Spear",
      "Aqua Tail",
      "Dragon Rush",
      "Freeze Dry"
    ]
  },
  {
    "dexNumber": 997,
    "abilities": [
      {
        "name": "Thermal Exchange",
        "isHidden": false,
        "label": "Thermal Exchange"
      },
      {
        "name": "Ice Body",
        "isHidden": true,
        "label": "Ice Body (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 998,
    "abilities": [
      {
        "name": "Thermal Exchange",
        "isHidden": false,
        "label": "Thermal Exchange"
      },
      {
        "name": "Ice Body",
        "isHidden": true,
        "label": "Ice Body (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 999,
    "abilities": [
      {
        "name": "Rattled",
        "isHidden": false,
        "label": "Rattled"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 1000,
    "abilities": [
      {
        "name": "Good As Gold",
        "isHidden": false,
        "label": "Good As Gold"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 1001,
    "abilities": [
      {
        "name": "Tablets Of Ruin",
        "isHidden": false,
        "label": "Tablets Of Ruin"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 1002,
    "abilities": [
      {
        "name": "Sword Of Ruin",
        "isHidden": false,
        "label": "Sword Of Ruin"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 1003,
    "abilities": [
      {
        "name": "Vessel Of Ruin",
        "isHidden": false,
        "label": "Vessel Of Ruin"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 1004,
    "abilities": [
      {
        "name": "Beads Of Ruin",
        "isHidden": false,
        "label": "Beads Of Ruin"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 1005,
    "abilities": [
      {
        "name": "Protosynthesis",
        "isHidden": false,
        "label": "Protosynthesis"
      }
    ],
    "eggMoves": [
      "Sunny Day",
      "Jaw Lock",
      "Breaking Swipe",
      "Scale Shot"
    ]
  },
  {
    "dexNumber": 1006,
    "abilities": [
      {
        "name": "Quark Drive",
        "isHidden": false,
        "label": "Quark Drive"
      }
    ],
    "eggMoves": [
      "Electric Terrain"
    ]
  },
  {
    "dexNumber": 1007,
    "abilities": [
      {
        "name": "Orichalcum Pulse",
        "isHidden": false,
        "label": "Orichalcum Pulse"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 1008,
    "abilities": [
      {
        "name": "Hadron Engine",
        "isHidden": false,
        "label": "Hadron Engine"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 1009,
    "abilities": [
      {
        "name": "Protosynthesis",
        "isHidden": false,
        "label": "Protosynthesis"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 1010,
    "abilities": [
      {
        "name": "Quark Drive",
        "isHidden": false,
        "label": "Quark Drive"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 1011,
    "abilities": [
      {
        "name": "Supersweet Syrup",
        "isHidden": false,
        "label": "Supersweet Syrup"
      },
      {
        "name": "Gluttony",
        "isHidden": false,
        "label": "Gluttony"
      },
      {
        "name": "Sticky Hold",
        "isHidden": true,
        "label": "Sticky Hold (HO)"
      }
    ],
    "eggMoves": [
      "Defense Curl",
      "Rollout",
      "Recycle",
      "Sucker Punch",
      "Infestation"
    ]
  },
  {
    "dexNumber": 1012,
    "abilities": [
      {
        "name": "Hospitality",
        "isHidden": false,
        "label": "Hospitality"
      },
      {
        "name": "Heatproof",
        "isHidden": true,
        "label": "Heatproof (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 1013,
    "abilities": [
      {
        "name": "Hospitality",
        "isHidden": false,
        "label": "Hospitality"
      },
      {
        "name": "Heatproof",
        "isHidden": true,
        "label": "Heatproof (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 1014,
    "abilities": [
      {
        "name": "Toxic Chain",
        "isHidden": false,
        "label": "Toxic Chain"
      },
      {
        "name": "Guard Dog",
        "isHidden": true,
        "label": "Guard Dog (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 1015,
    "abilities": [
      {
        "name": "Toxic Chain",
        "isHidden": false,
        "label": "Toxic Chain"
      },
      {
        "name": "Frisk",
        "isHidden": true,
        "label": "Frisk (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 1016,
    "abilities": [
      {
        "name": "Toxic Chain",
        "isHidden": false,
        "label": "Toxic Chain"
      },
      {
        "name": "Technician",
        "isHidden": true,
        "label": "Technician (HO)"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 1017,
    "abilities": [
      {
        "name": "Defiant",
        "isHidden": false,
        "label": "Defiant"
      }
    ],
    "eggMoves": [
      "Double Kick",
      "Counter",
      "Retaliate",
      "Horn Leech"
    ]
  },
  {
    "dexNumber": 1018,
    "abilities": [
      {
        "name": "Stamina",
        "isHidden": false,
        "label": "Stamina"
      },
      {
        "name": "Sturdy",
        "isHidden": false,
        "label": "Sturdy"
      },
      {
        "name": "Stalwart",
        "isHidden": true,
        "label": "Stalwart (HO)"
      }
    ],
    "eggMoves": [
      "Slash",
      "Mirror Coat",
      "Night Slash"
    ]
  },
  {
    "dexNumber": 1019,
    "abilities": [
      {
        "name": "Supersweet Syrup",
        "isHidden": false,
        "label": "Supersweet Syrup"
      },
      {
        "name": "Regenerator",
        "isHidden": false,
        "label": "Regenerator"
      },
      {
        "name": "Sticky Hold",
        "isHidden": true,
        "label": "Sticky Hold (HO)"
      }
    ],
    "eggMoves": [
      "Defense Curl",
      "Rollout",
      "Recycle",
      "Yawn",
      "Sucker Punch",
      "Double Hit",
      "Infestation"
    ]
  },
  {
    "dexNumber": 1020,
    "abilities": [
      {
        "name": "Protosynthesis",
        "isHidden": false,
        "label": "Protosynthesis"
      }
    ],
    "eggMoves": [
      "Double Kick",
      "Ancient Power",
      "Noble Roar"
    ]
  },
  {
    "dexNumber": 1021,
    "abilities": [
      {
        "name": "Protosynthesis",
        "isHidden": false,
        "label": "Protosynthesis"
      }
    ],
    "eggMoves": [
      "Ancient Power"
    ]
  },
  {
    "dexNumber": 1022,
    "abilities": [
      {
        "name": "Quark Drive",
        "isHidden": false,
        "label": "Quark Drive"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 1023,
    "abilities": [
      {
        "name": "Quark Drive",
        "isHidden": false,
        "label": "Quark Drive"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 1024,
    "abilities": [
      {
        "name": "Tera Shift",
        "isHidden": false,
        "label": "Tera Shift"
      }
    ],
    "eggMoves": []
  },
  {
    "dexNumber": 1025,
    "abilities": [
      {
        "name": "Poison Puppeteer",
        "isHidden": false,
        "label": "Poison Puppeteer"
      }
    ],
    "eggMoves": [
      "Defense Curl",
      "Rollout",
      "Mean Look"
    ]
  }
];

export const SPECIES_ABILITIES_MAP: Record<number, SpeciesAbilitiesAndEggMoves> = {};
SPECIES_ABILITIES_AND_EGG_MOVES.forEach(item => {
  SPECIES_ABILITIES_MAP[item.dexNumber] = item;
});

export function getAbilitiesAndEggMovesForDex(dexNumber: number): SpeciesAbilitiesAndEggMoves {
  return SPECIES_ABILITIES_MAP[dexNumber] || {
    dexNumber,
    abilities: [{ name: 'Habilidad Estándar', isHidden: false, label: 'Habilidad Estándar' }],
    eggMoves: []
  };
}
