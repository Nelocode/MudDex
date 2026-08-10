import { AUTHENTIC_POKEMON_DATA } from './authenticPokedexData';

export type EggGroup =
  | 'monster'
  | 'water1'
  | 'bug'
  | 'flying'
  | 'field'
  | 'fairy'
  | 'grass'
  | 'humanlike'
  | 'water3'
  | 'mineral'
  | 'amorphous'
  | 'water2'
  | 'dragon'
  | 'undiscovered'
  | 'ditto';

export interface EggGroupInfo {
  id: EggGroup;
  nameEs: string;
  icon: string;
  description: string;
}

export const EGG_GROUPS_INFO: Record<EggGroup, EggGroupInfo> = {
  monster: { id: 'monster', nameEs: 'Monstruo (Monster)', icon: '🦖', description: 'Pokémon de apariencia sauria o reptiliana.' },
  water1: { id: 'water1', nameEs: 'Agua 1 (Water 1)', icon: '🌊', description: 'Pokémon anfibios y semi-acuáticos.' },
  bug: { id: 'bug', nameEs: 'Bicho (Bug)', icon: '🐛', description: 'Insectos, arácnidos e invertebrados.' },
  flying: { id: 'flying', nameEs: 'Volador (Flying)', icon: '🦅', description: 'Aves y criaturas aladas.' },
  field: { id: 'field', nameEs: 'Campo (Field)', icon: '🦊', description: 'Mamíferos y criaturas terrestres (El grupo más numeroso).' },
  fairy: { id: 'fairy', nameEs: 'Hada (Fairy)', icon: '🧚', description: 'Pokémon pequeños, místico o encantadores.' },
  grass: { id: 'grass', nameEs: 'Planta (Grass)', icon: '🌿', description: 'Plantas, flores y criaturas fotosintéticas.' },
  humanlike: { id: 'humanlike', nameEs: 'Humanoide (Human-Like)', icon: '🥋', description: 'Bípedos y criaturas de apariencia humana.' },
  water3: { id: 'water3', nameEs: 'Agua 3 (Water 3)', icon: '🦀', description: 'Crustáceos, fósiles marinos e invertebrados acuáticos.' },
  mineral: { id: 'mineral', nameEs: 'Mineral', icon: '💎', description: 'Rocas, cristales, objetos animados y construcciones.' },
  amorphous: { id: 'amorphous', nameEs: 'Amorfo (Amorphous)', icon: '👻', description: 'Espíritus, fluidos, gases y masas amorfas.' },
  water2: { id: 'water2', nameEs: 'Agua 2 (Water 2)', icon: '🐟', description: 'Peces y grandes criaturas marinas.' },
  dragon: { id: 'dragon', nameEs: 'Dragón (Dragon)', icon: '🐲', description: 'Dragones y serpientes místicas.' },
  undiscovered: { id: 'undiscovered', nameEs: 'No Descubierto (Bebés/Legendarios)', icon: '🚫', description: 'No pueden criar (Bebés, Paradoja, Legendarios mayoritarios).' },
  ditto: { id: 'ditto', nameEs: 'Ditto', icon: '🫠', description: 'Puede criar con cualquier grupo excepto No Descubierto y Ditto.' }
};

export const AUTHENTIC_SPECIES_EGG_GROUPS: Record<number, EggGroup[]> = {
  "1": [
    "monster",
    "grass"
  ],
  "2": [
    "monster",
    "grass"
  ],
  "3": [
    "monster",
    "grass"
  ],
  "4": [
    "monster",
    "dragon"
  ],
  "5": [
    "monster",
    "dragon"
  ],
  "6": [
    "monster",
    "dragon"
  ],
  "7": [
    "monster",
    "water1"
  ],
  "8": [
    "monster",
    "water1"
  ],
  "9": [
    "monster",
    "water1"
  ],
  "10": [
    "bug"
  ],
  "11": [
    "bug"
  ],
  "12": [
    "bug"
  ],
  "13": [
    "bug"
  ],
  "14": [
    "bug"
  ],
  "15": [
    "bug"
  ],
  "16": [
    "flying"
  ],
  "17": [
    "flying"
  ],
  "18": [
    "flying"
  ],
  "19": [
    "field"
  ],
  "20": [
    "field"
  ],
  "21": [
    "flying"
  ],
  "22": [
    "flying"
  ],
  "23": [
    "field",
    "dragon"
  ],
  "24": [
    "field",
    "dragon"
  ],
  "25": [
    "field",
    "fairy"
  ],
  "26": [
    "field",
    "fairy"
  ],
  "27": [
    "field"
  ],
  "28": [
    "field"
  ],
  "29": [
    "monster",
    "field"
  ],
  "30": [
    "undiscovered"
  ],
  "31": [
    "undiscovered"
  ],
  "32": [
    "monster",
    "field"
  ],
  "33": [
    "monster",
    "field"
  ],
  "34": [
    "monster",
    "field"
  ],
  "35": [
    "fairy"
  ],
  "36": [
    "fairy"
  ],
  "37": [
    "field"
  ],
  "38": [
    "field"
  ],
  "39": [
    "fairy"
  ],
  "40": [
    "fairy"
  ],
  "41": [
    "flying"
  ],
  "42": [
    "flying"
  ],
  "43": [
    "grass"
  ],
  "44": [
    "grass"
  ],
  "45": [
    "grass"
  ],
  "46": [
    "bug",
    "grass"
  ],
  "47": [
    "bug",
    "grass"
  ],
  "48": [
    "bug"
  ],
  "49": [
    "bug"
  ],
  "50": [
    "field"
  ],
  "51": [
    "field"
  ],
  "52": [
    "field"
  ],
  "53": [
    "field"
  ],
  "54": [
    "water1",
    "field"
  ],
  "55": [
    "water1",
    "field"
  ],
  "56": [
    "field"
  ],
  "57": [
    "field"
  ],
  "58": [
    "field"
  ],
  "59": [
    "field"
  ],
  "60": [
    "water1"
  ],
  "61": [
    "water1"
  ],
  "62": [
    "water1"
  ],
  "63": [
    "humanlike"
  ],
  "64": [
    "humanlike"
  ],
  "65": [
    "humanlike"
  ],
  "66": [
    "humanlike"
  ],
  "67": [
    "humanlike"
  ],
  "68": [
    "humanlike"
  ],
  "69": [
    "grass"
  ],
  "70": [
    "grass"
  ],
  "71": [
    "grass"
  ],
  "72": [
    "water3"
  ],
  "73": [
    "water3"
  ],
  "74": [
    "mineral"
  ],
  "75": [
    "mineral"
  ],
  "76": [
    "mineral"
  ],
  "77": [
    "field"
  ],
  "78": [
    "field"
  ],
  "79": [
    "monster",
    "water1"
  ],
  "80": [
    "monster",
    "water1"
  ],
  "81": [
    "mineral"
  ],
  "82": [
    "mineral"
  ],
  "83": [
    "flying",
    "field"
  ],
  "84": [
    "flying"
  ],
  "85": [
    "flying"
  ],
  "86": [
    "water1",
    "field"
  ],
  "87": [
    "water1",
    "field"
  ],
  "88": [
    "amorphous"
  ],
  "89": [
    "amorphous"
  ],
  "90": [
    "water3"
  ],
  "91": [
    "water3"
  ],
  "92": [
    "amorphous"
  ],
  "93": [
    "amorphous"
  ],
  "94": [
    "amorphous"
  ],
  "95": [
    "mineral"
  ],
  "96": [
    "humanlike"
  ],
  "97": [
    "humanlike"
  ],
  "98": [
    "water3"
  ],
  "99": [
    "water3"
  ],
  "100": [
    "mineral"
  ],
  "101": [
    "mineral"
  ],
  "102": [
    "grass"
  ],
  "103": [
    "grass"
  ],
  "104": [
    "monster"
  ],
  "105": [
    "monster"
  ],
  "106": [
    "humanlike"
  ],
  "107": [
    "humanlike"
  ],
  "108": [
    "monster"
  ],
  "109": [
    "amorphous"
  ],
  "110": [
    "amorphous"
  ],
  "111": [
    "monster",
    "field"
  ],
  "112": [
    "monster",
    "field"
  ],
  "113": [
    "fairy"
  ],
  "114": [
    "grass"
  ],
  "115": [
    "monster"
  ],
  "116": [
    "water1",
    "dragon"
  ],
  "117": [
    "water1",
    "dragon"
  ],
  "118": [
    "water2"
  ],
  "119": [
    "water2"
  ],
  "120": [
    "water3"
  ],
  "121": [
    "water3"
  ],
  "122": [
    "humanlike"
  ],
  "123": [
    "bug"
  ],
  "124": [
    "humanlike"
  ],
  "125": [
    "humanlike"
  ],
  "126": [
    "humanlike"
  ],
  "127": [
    "bug"
  ],
  "128": [
    "field"
  ],
  "129": [
    "water2",
    "dragon"
  ],
  "130": [
    "water2",
    "dragon"
  ],
  "131": [
    "monster",
    "water1"
  ],
  "132": [
    "ditto"
  ],
  "133": [
    "field"
  ],
  "134": [
    "field"
  ],
  "135": [
    "field"
  ],
  "136": [
    "field"
  ],
  "137": [
    "mineral"
  ],
  "138": [
    "water1",
    "water3"
  ],
  "139": [
    "water1",
    "water3"
  ],
  "140": [
    "water1",
    "water3"
  ],
  "141": [
    "water1",
    "water3"
  ],
  "142": [
    "flying"
  ],
  "143": [
    "monster"
  ],
  "144": [
    "undiscovered"
  ],
  "145": [
    "undiscovered"
  ],
  "146": [
    "undiscovered"
  ],
  "147": [
    "water1",
    "dragon"
  ],
  "148": [
    "water1",
    "dragon"
  ],
  "149": [
    "water1",
    "dragon"
  ],
  "150": [
    "undiscovered"
  ],
  "151": [
    "undiscovered"
  ],
  "152": [
    "monster",
    "grass"
  ],
  "153": [
    "monster",
    "grass"
  ],
  "154": [
    "monster",
    "grass"
  ],
  "155": [
    "field"
  ],
  "156": [
    "field"
  ],
  "157": [
    "field"
  ],
  "158": [
    "monster",
    "water1"
  ],
  "159": [
    "monster",
    "water1"
  ],
  "160": [
    "monster",
    "water1"
  ],
  "161": [
    "field"
  ],
  "162": [
    "field"
  ],
  "163": [
    "flying"
  ],
  "164": [
    "flying"
  ],
  "165": [
    "bug"
  ],
  "166": [
    "bug"
  ],
  "167": [
    "bug"
  ],
  "168": [
    "bug"
  ],
  "169": [
    "flying"
  ],
  "170": [
    "water2"
  ],
  "171": [
    "water2"
  ],
  "172": [
    "undiscovered"
  ],
  "173": [
    "undiscovered"
  ],
  "174": [
    "undiscovered"
  ],
  "175": [
    "undiscovered"
  ],
  "176": [
    "flying",
    "fairy"
  ],
  "177": [
    "flying"
  ],
  "178": [
    "flying"
  ],
  "179": [
    "monster",
    "field"
  ],
  "180": [
    "monster",
    "field"
  ],
  "181": [
    "monster",
    "field"
  ],
  "182": [
    "grass"
  ],
  "183": [
    "water1",
    "fairy"
  ],
  "184": [
    "water1",
    "fairy"
  ],
  "185": [
    "mineral"
  ],
  "186": [
    "water1"
  ],
  "187": [
    "fairy",
    "grass"
  ],
  "188": [
    "fairy",
    "grass"
  ],
  "189": [
    "fairy",
    "grass"
  ],
  "190": [
    "field"
  ],
  "191": [
    "grass"
  ],
  "192": [
    "grass"
  ],
  "193": [
    "bug"
  ],
  "194": [
    "water1",
    "field"
  ],
  "195": [
    "water1",
    "field"
  ],
  "196": [
    "field"
  ],
  "197": [
    "field"
  ],
  "198": [
    "flying"
  ],
  "199": [
    "monster",
    "water1"
  ],
  "200": [
    "amorphous"
  ],
  "201": [
    "undiscovered"
  ],
  "202": [
    "amorphous"
  ],
  "203": [
    "field"
  ],
  "204": [
    "bug"
  ],
  "205": [
    "bug"
  ],
  "206": [
    "field"
  ],
  "207": [
    "bug"
  ],
  "208": [
    "mineral"
  ],
  "209": [
    "field",
    "fairy"
  ],
  "210": [
    "field",
    "fairy"
  ],
  "211": [
    "water2"
  ],
  "212": [
    "bug"
  ],
  "213": [
    "bug",
    "mineral"
  ],
  "214": [
    "bug"
  ],
  "215": [
    "field"
  ],
  "216": [
    "field"
  ],
  "217": [
    "field"
  ],
  "218": [
    "amorphous"
  ],
  "219": [
    "amorphous"
  ],
  "220": [
    "field"
  ],
  "221": [
    "field"
  ],
  "222": [
    "water1",
    "water3"
  ],
  "223": [
    "water1",
    "water2"
  ],
  "224": [
    "water1",
    "water2"
  ],
  "225": [
    "water1",
    "field"
  ],
  "226": [
    "water1"
  ],
  "227": [
    "flying"
  ],
  "228": [
    "field"
  ],
  "229": [
    "field"
  ],
  "230": [
    "water1",
    "dragon"
  ],
  "231": [
    "field"
  ],
  "232": [
    "field"
  ],
  "233": [
    "mineral"
  ],
  "234": [
    "field"
  ],
  "235": [
    "field"
  ],
  "236": [
    "undiscovered"
  ],
  "237": [
    "humanlike"
  ],
  "238": [
    "undiscovered"
  ],
  "239": [
    "undiscovered"
  ],
  "240": [
    "undiscovered"
  ],
  "241": [
    "field"
  ],
  "242": [
    "fairy"
  ],
  "243": [
    "undiscovered"
  ],
  "244": [
    "undiscovered"
  ],
  "245": [
    "undiscovered"
  ],
  "246": [
    "monster"
  ],
  "247": [
    "monster"
  ],
  "248": [
    "monster"
  ],
  "249": [
    "undiscovered"
  ],
  "250": [
    "undiscovered"
  ],
  "251": [
    "undiscovered"
  ],
  "252": [
    "monster",
    "dragon"
  ],
  "253": [
    "monster",
    "dragon"
  ],
  "254": [
    "monster",
    "dragon"
  ],
  "255": [
    "field"
  ],
  "256": [
    "field"
  ],
  "257": [
    "field"
  ],
  "258": [
    "monster",
    "water1"
  ],
  "259": [
    "monster",
    "water1"
  ],
  "260": [
    "monster",
    "water1"
  ],
  "261": [
    "field"
  ],
  "262": [
    "field"
  ],
  "263": [
    "field"
  ],
  "264": [
    "field"
  ],
  "265": [
    "bug"
  ],
  "266": [
    "bug"
  ],
  "267": [
    "bug"
  ],
  "268": [
    "bug"
  ],
  "269": [
    "bug"
  ],
  "270": [
    "water1",
    "grass"
  ],
  "271": [
    "water1",
    "grass"
  ],
  "272": [
    "water1",
    "grass"
  ],
  "273": [
    "field",
    "grass"
  ],
  "274": [
    "field",
    "grass"
  ],
  "275": [
    "field",
    "grass"
  ],
  "276": [
    "flying"
  ],
  "277": [
    "flying"
  ],
  "278": [
    "water1",
    "flying"
  ],
  "279": [
    "water1",
    "flying"
  ],
  "280": [
    "humanlike",
    "amorphous"
  ],
  "281": [
    "humanlike",
    "amorphous"
  ],
  "282": [
    "humanlike",
    "amorphous"
  ],
  "283": [
    "water1",
    "bug"
  ],
  "284": [
    "water1",
    "bug"
  ],
  "285": [
    "fairy",
    "grass"
  ],
  "286": [
    "fairy",
    "grass"
  ],
  "287": [
    "field"
  ],
  "288": [
    "field"
  ],
  "289": [
    "field"
  ],
  "290": [
    "bug"
  ],
  "291": [
    "bug"
  ],
  "292": [
    "mineral"
  ],
  "293": [
    "monster",
    "field"
  ],
  "294": [
    "monster",
    "field"
  ],
  "295": [
    "monster",
    "field"
  ],
  "296": [
    "humanlike"
  ],
  "297": [
    "humanlike"
  ],
  "298": [
    "undiscovered"
  ],
  "299": [
    "mineral"
  ],
  "300": [
    "field",
    "fairy"
  ],
  "301": [
    "field",
    "fairy"
  ],
  "302": [
    "humanlike"
  ],
  "303": [
    "field",
    "fairy"
  ],
  "304": [
    "monster"
  ],
  "305": [
    "monster"
  ],
  "306": [
    "monster"
  ],
  "307": [
    "humanlike"
  ],
  "308": [
    "humanlike"
  ],
  "309": [
    "field"
  ],
  "310": [
    "field"
  ],
  "311": [
    "fairy"
  ],
  "312": [
    "fairy"
  ],
  "313": [
    "bug",
    "humanlike"
  ],
  "314": [
    "bug",
    "humanlike"
  ],
  "315": [
    "fairy",
    "grass"
  ],
  "316": [
    "amorphous"
  ],
  "317": [
    "amorphous"
  ],
  "318": [
    "water2"
  ],
  "319": [
    "water2"
  ],
  "320": [
    "field",
    "water2"
  ],
  "321": [
    "field",
    "water2"
  ],
  "322": [
    "field"
  ],
  "323": [
    "field"
  ],
  "324": [
    "field"
  ],
  "325": [
    "field"
  ],
  "326": [
    "field"
  ],
  "327": [
    "field",
    "humanlike"
  ],
  "328": [
    "bug",
    "dragon"
  ],
  "329": [
    "bug",
    "dragon"
  ],
  "330": [
    "bug",
    "dragon"
  ],
  "331": [
    "grass",
    "humanlike"
  ],
  "332": [
    "grass",
    "humanlike"
  ],
  "333": [
    "flying",
    "dragon"
  ],
  "334": [
    "flying",
    "dragon"
  ],
  "335": [
    "field"
  ],
  "336": [
    "field",
    "dragon"
  ],
  "337": [
    "mineral"
  ],
  "338": [
    "mineral"
  ],
  "339": [
    "water2"
  ],
  "340": [
    "water2"
  ],
  "341": [
    "water1",
    "water3"
  ],
  "342": [
    "water1",
    "water3"
  ],
  "343": [
    "mineral"
  ],
  "344": [
    "mineral"
  ],
  "345": [
    "water3"
  ],
  "346": [
    "water3"
  ],
  "347": [
    "water3"
  ],
  "348": [
    "water3"
  ],
  "349": [
    "water1",
    "dragon"
  ],
  "350": [
    "water1",
    "dragon"
  ],
  "351": [
    "fairy",
    "amorphous"
  ],
  "352": [
    "field"
  ],
  "353": [
    "amorphous"
  ],
  "354": [
    "amorphous"
  ],
  "355": [
    "amorphous"
  ],
  "356": [
    "amorphous"
  ],
  "357": [
    "monster",
    "grass"
  ],
  "358": [
    "amorphous"
  ],
  "359": [
    "field"
  ],
  "360": [
    "undiscovered"
  ],
  "361": [
    "fairy",
    "mineral"
  ],
  "362": [
    "fairy",
    "mineral"
  ],
  "363": [
    "water1",
    "field"
  ],
  "364": [
    "water1",
    "field"
  ],
  "365": [
    "water1",
    "field"
  ],
  "366": [
    "water1"
  ],
  "367": [
    "water1"
  ],
  "368": [
    "water1"
  ],
  "369": [
    "water1",
    "water2"
  ],
  "370": [
    "water2"
  ],
  "371": [
    "dragon"
  ],
  "372": [
    "dragon"
  ],
  "373": [
    "dragon"
  ],
  "374": [
    "mineral"
  ],
  "375": [
    "mineral"
  ],
  "376": [
    "mineral"
  ],
  "377": [
    "undiscovered"
  ],
  "378": [
    "undiscovered"
  ],
  "379": [
    "undiscovered"
  ],
  "380": [
    "undiscovered"
  ],
  "381": [
    "undiscovered"
  ],
  "382": [
    "undiscovered"
  ],
  "383": [
    "undiscovered"
  ],
  "384": [
    "undiscovered"
  ],
  "385": [
    "undiscovered"
  ],
  "386": [
    "undiscovered"
  ],
  "387": [
    "monster",
    "grass"
  ],
  "388": [
    "monster",
    "grass"
  ],
  "389": [
    "monster",
    "grass"
  ],
  "390": [
    "field",
    "humanlike"
  ],
  "391": [
    "field",
    "humanlike"
  ],
  "392": [
    "field",
    "humanlike"
  ],
  "393": [
    "water1",
    "field"
  ],
  "394": [
    "water1",
    "field"
  ],
  "395": [
    "water1",
    "field"
  ],
  "396": [
    "flying"
  ],
  "397": [
    "flying"
  ],
  "398": [
    "flying"
  ],
  "399": [
    "water1",
    "field"
  ],
  "400": [
    "water1",
    "field"
  ],
  "401": [
    "bug"
  ],
  "402": [
    "bug"
  ],
  "403": [
    "field"
  ],
  "404": [
    "field"
  ],
  "405": [
    "field"
  ],
  "406": [
    "undiscovered"
  ],
  "407": [
    "fairy",
    "grass"
  ],
  "408": [
    "monster"
  ],
  "409": [
    "monster"
  ],
  "410": [
    "monster"
  ],
  "411": [
    "monster"
  ],
  "412": [
    "bug"
  ],
  "413": [
    "bug"
  ],
  "414": [
    "bug"
  ],
  "415": [
    "bug"
  ],
  "416": [
    "bug"
  ],
  "417": [
    "field",
    "fairy"
  ],
  "418": [
    "water1",
    "field"
  ],
  "419": [
    "water1",
    "field"
  ],
  "420": [
    "fairy",
    "grass"
  ],
  "421": [
    "fairy",
    "grass"
  ],
  "422": [
    "water1",
    "amorphous"
  ],
  "423": [
    "water1",
    "amorphous"
  ],
  "424": [
    "field"
  ],
  "425": [
    "amorphous"
  ],
  "426": [
    "amorphous"
  ],
  "427": [
    "field",
    "humanlike"
  ],
  "428": [
    "field",
    "humanlike"
  ],
  "429": [
    "amorphous"
  ],
  "430": [
    "flying"
  ],
  "431": [
    "field"
  ],
  "432": [
    "field"
  ],
  "433": [
    "undiscovered"
  ],
  "434": [
    "field"
  ],
  "435": [
    "field"
  ],
  "436": [
    "mineral"
  ],
  "437": [
    "mineral"
  ],
  "438": [
    "undiscovered"
  ],
  "439": [
    "undiscovered"
  ],
  "440": [
    "undiscovered"
  ],
  "441": [
    "flying"
  ],
  "442": [
    "amorphous"
  ],
  "443": [
    "monster",
    "dragon"
  ],
  "444": [
    "monster",
    "dragon"
  ],
  "445": [
    "monster",
    "dragon"
  ],
  "446": [
    "undiscovered"
  ],
  "447": [
    "undiscovered"
  ],
  "448": [
    "field",
    "humanlike"
  ],
  "449": [
    "field"
  ],
  "450": [
    "field"
  ],
  "451": [
    "bug",
    "water3"
  ],
  "452": [
    "bug",
    "water3"
  ],
  "453": [
    "humanlike"
  ],
  "454": [
    "humanlike"
  ],
  "455": [
    "grass"
  ],
  "456": [
    "water2"
  ],
  "457": [
    "water2"
  ],
  "458": [
    "undiscovered"
  ],
  "459": [
    "monster",
    "grass"
  ],
  "460": [
    "monster",
    "grass"
  ],
  "461": [
    "field"
  ],
  "462": [
    "mineral"
  ],
  "463": [
    "monster"
  ],
  "464": [
    "monster",
    "field"
  ],
  "465": [
    "grass"
  ],
  "466": [
    "humanlike"
  ],
  "467": [
    "humanlike"
  ],
  "468": [
    "flying",
    "fairy"
  ],
  "469": [
    "bug"
  ],
  "470": [
    "field"
  ],
  "471": [
    "field"
  ],
  "472": [
    "bug"
  ],
  "473": [
    "field"
  ],
  "474": [
    "mineral"
  ],
  "475": [
    "humanlike",
    "amorphous"
  ],
  "476": [
    "mineral"
  ],
  "477": [
    "amorphous"
  ],
  "478": [
    "fairy",
    "mineral"
  ],
  "479": [
    "amorphous"
  ],
  "480": [
    "undiscovered"
  ],
  "481": [
    "undiscovered"
  ],
  "482": [
    "undiscovered"
  ],
  "483": [
    "undiscovered"
  ],
  "484": [
    "undiscovered"
  ],
  "485": [
    "undiscovered"
  ],
  "486": [
    "undiscovered"
  ],
  "487": [
    "undiscovered"
  ],
  "488": [
    "undiscovered"
  ],
  "489": [
    "water1",
    "fairy"
  ],
  "490": [
    "water1",
    "fairy"
  ],
  "491": [
    "undiscovered"
  ],
  "492": [
    "undiscovered"
  ],
  "493": [
    "undiscovered"
  ],
  "494": [
    "undiscovered"
  ],
  "495": [
    "field",
    "grass"
  ],
  "496": [
    "field",
    "grass"
  ],
  "497": [
    "field",
    "grass"
  ],
  "498": [
    "field"
  ],
  "499": [
    "field"
  ],
  "500": [
    "field"
  ],
  "501": [
    "field"
  ],
  "502": [
    "field"
  ],
  "503": [
    "field"
  ],
  "504": [
    "field"
  ],
  "505": [
    "field"
  ],
  "506": [
    "field"
  ],
  "507": [
    "field"
  ],
  "508": [
    "field"
  ],
  "509": [
    "field"
  ],
  "510": [
    "field"
  ],
  "511": [
    "field"
  ],
  "512": [
    "field"
  ],
  "513": [
    "field"
  ],
  "514": [
    "field"
  ],
  "515": [
    "field"
  ],
  "516": [
    "field"
  ],
  "517": [
    "field"
  ],
  "518": [
    "field"
  ],
  "519": [
    "flying"
  ],
  "520": [
    "flying"
  ],
  "521": [
    "flying"
  ],
  "522": [
    "field"
  ],
  "523": [
    "field"
  ],
  "524": [
    "mineral"
  ],
  "525": [
    "mineral"
  ],
  "526": [
    "mineral"
  ],
  "527": [
    "field",
    "flying"
  ],
  "528": [
    "field",
    "flying"
  ],
  "529": [
    "field"
  ],
  "530": [
    "field"
  ],
  "531": [
    "fairy"
  ],
  "532": [
    "humanlike"
  ],
  "533": [
    "humanlike"
  ],
  "534": [
    "humanlike"
  ],
  "535": [
    "water1"
  ],
  "536": [
    "water1"
  ],
  "537": [
    "water1"
  ],
  "538": [
    "humanlike"
  ],
  "539": [
    "humanlike"
  ],
  "540": [
    "bug"
  ],
  "541": [
    "bug"
  ],
  "542": [
    "bug"
  ],
  "543": [
    "bug"
  ],
  "544": [
    "bug"
  ],
  "545": [
    "bug"
  ],
  "546": [
    "grass",
    "fairy"
  ],
  "547": [
    "grass",
    "fairy"
  ],
  "548": [
    "grass"
  ],
  "549": [
    "grass"
  ],
  "550": [
    "water2"
  ],
  "551": [
    "field"
  ],
  "552": [
    "field"
  ],
  "553": [
    "field"
  ],
  "554": [
    "field"
  ],
  "555": [
    "field"
  ],
  "556": [
    "grass"
  ],
  "557": [
    "bug",
    "mineral"
  ],
  "558": [
    "bug",
    "mineral"
  ],
  "559": [
    "field",
    "dragon"
  ],
  "560": [
    "field",
    "dragon"
  ],
  "561": [
    "flying"
  ],
  "562": [
    "mineral",
    "amorphous"
  ],
  "563": [
    "mineral",
    "amorphous"
  ],
  "564": [
    "water1",
    "water3"
  ],
  "565": [
    "water1",
    "water3"
  ],
  "566": [
    "flying",
    "water3"
  ],
  "567": [
    "flying",
    "water3"
  ],
  "568": [
    "mineral"
  ],
  "569": [
    "mineral"
  ],
  "570": [
    "field"
  ],
  "571": [
    "field"
  ],
  "572": [
    "field"
  ],
  "573": [
    "field"
  ],
  "574": [
    "humanlike"
  ],
  "575": [
    "humanlike"
  ],
  "576": [
    "humanlike"
  ],
  "577": [
    "amorphous"
  ],
  "578": [
    "amorphous"
  ],
  "579": [
    "amorphous"
  ],
  "580": [
    "water1",
    "flying"
  ],
  "581": [
    "water1",
    "flying"
  ],
  "582": [
    "mineral"
  ],
  "583": [
    "mineral"
  ],
  "584": [
    "mineral"
  ],
  "585": [
    "field"
  ],
  "586": [
    "field"
  ],
  "587": [
    "field"
  ],
  "588": [
    "bug"
  ],
  "589": [
    "bug"
  ],
  "590": [
    "grass"
  ],
  "591": [
    "grass"
  ],
  "592": [
    "amorphous"
  ],
  "593": [
    "amorphous"
  ],
  "594": [
    "water1",
    "water2"
  ],
  "595": [
    "bug"
  ],
  "596": [
    "bug"
  ],
  "597": [
    "grass",
    "mineral"
  ],
  "598": [
    "grass",
    "mineral"
  ],
  "599": [
    "mineral"
  ],
  "600": [
    "mineral"
  ],
  "601": [
    "mineral"
  ],
  "602": [
    "amorphous"
  ],
  "603": [
    "amorphous"
  ],
  "604": [
    "amorphous"
  ],
  "605": [
    "humanlike"
  ],
  "606": [
    "humanlike"
  ],
  "607": [
    "amorphous"
  ],
  "608": [
    "amorphous"
  ],
  "609": [
    "amorphous"
  ],
  "610": [
    "monster",
    "dragon"
  ],
  "611": [
    "monster",
    "dragon"
  ],
  "612": [
    "monster",
    "dragon"
  ],
  "613": [
    "field"
  ],
  "614": [
    "field"
  ],
  "615": [
    "mineral"
  ],
  "616": [
    "bug"
  ],
  "617": [
    "bug"
  ],
  "618": [
    "water1",
    "amorphous"
  ],
  "619": [
    "field",
    "humanlike"
  ],
  "620": [
    "field",
    "humanlike"
  ],
  "621": [
    "dragon",
    "monster"
  ],
  "622": [
    "mineral"
  ],
  "623": [
    "mineral"
  ],
  "624": [
    "humanlike"
  ],
  "625": [
    "humanlike"
  ],
  "626": [
    "field"
  ],
  "627": [
    "flying"
  ],
  "628": [
    "flying"
  ],
  "629": [
    "flying"
  ],
  "630": [
    "flying"
  ],
  "631": [
    "field"
  ],
  "632": [
    "bug"
  ],
  "633": [
    "dragon"
  ],
  "634": [
    "dragon"
  ],
  "635": [
    "dragon"
  ],
  "636": [
    "bug"
  ],
  "637": [
    "bug"
  ],
  "638": [
    "undiscovered"
  ],
  "639": [
    "undiscovered"
  ],
  "640": [
    "undiscovered"
  ],
  "641": [
    "undiscovered"
  ],
  "642": [
    "undiscovered"
  ],
  "643": [
    "undiscovered"
  ],
  "644": [
    "undiscovered"
  ],
  "645": [
    "undiscovered"
  ],
  "646": [
    "undiscovered"
  ],
  "647": [
    "undiscovered"
  ],
  "648": [
    "undiscovered"
  ],
  "649": [
    "undiscovered"
  ],
  "650": [
    "field"
  ],
  "651": [
    "field"
  ],
  "652": [
    "field"
  ],
  "653": [
    "field"
  ],
  "654": [
    "field"
  ],
  "655": [
    "field"
  ],
  "656": [
    "water1"
  ],
  "657": [
    "water1"
  ],
  "658": [
    "water1"
  ],
  "659": [
    "field"
  ],
  "660": [
    "field"
  ],
  "661": [
    "flying"
  ],
  "662": [
    "flying"
  ],
  "663": [
    "flying"
  ],
  "664": [
    "bug"
  ],
  "665": [
    "bug"
  ],
  "666": [
    "bug"
  ],
  "667": [
    "field"
  ],
  "668": [
    "field"
  ],
  "669": [
    "fairy"
  ],
  "670": [
    "fairy"
  ],
  "671": [
    "fairy"
  ],
  "672": [
    "field"
  ],
  "673": [
    "field"
  ],
  "674": [
    "field",
    "humanlike"
  ],
  "675": [
    "field",
    "humanlike"
  ],
  "676": [
    "field"
  ],
  "677": [
    "field"
  ],
  "678": [
    "field"
  ],
  "679": [
    "mineral"
  ],
  "680": [
    "mineral"
  ],
  "681": [
    "mineral"
  ],
  "682": [
    "fairy"
  ],
  "683": [
    "fairy"
  ],
  "684": [
    "fairy"
  ],
  "685": [
    "fairy"
  ],
  "686": [
    "water1",
    "water2"
  ],
  "687": [
    "water1",
    "water2"
  ],
  "688": [
    "water3"
  ],
  "689": [
    "water3"
  ],
  "690": [
    "water1",
    "dragon"
  ],
  "691": [
    "water1",
    "dragon"
  ],
  "692": [
    "water1",
    "water3"
  ],
  "693": [
    "water1",
    "water3"
  ],
  "694": [
    "monster",
    "dragon"
  ],
  "695": [
    "monster",
    "dragon"
  ],
  "696": [
    "monster",
    "dragon"
  ],
  "697": [
    "monster",
    "dragon"
  ],
  "698": [
    "monster"
  ],
  "699": [
    "monster"
  ],
  "700": [
    "field"
  ],
  "701": [
    "flying",
    "humanlike"
  ],
  "702": [
    "field",
    "fairy"
  ],
  "703": [
    "fairy",
    "mineral"
  ],
  "704": [
    "dragon"
  ],
  "705": [
    "dragon"
  ],
  "706": [
    "dragon"
  ],
  "707": [
    "mineral"
  ],
  "708": [
    "grass",
    "amorphous"
  ],
  "709": [
    "grass",
    "amorphous"
  ],
  "710": [
    "amorphous"
  ],
  "711": [
    "amorphous"
  ],
  "712": [
    "monster",
    "mineral"
  ],
  "713": [
    "monster",
    "mineral"
  ],
  "714": [
    "flying",
    "dragon"
  ],
  "715": [
    "flying",
    "dragon"
  ],
  "716": [
    "undiscovered"
  ],
  "717": [
    "undiscovered"
  ],
  "718": [
    "undiscovered"
  ],
  "719": [
    "undiscovered"
  ],
  "720": [
    "undiscovered"
  ],
  "721": [
    "undiscovered"
  ],
  "722": [
    "flying"
  ],
  "723": [
    "flying"
  ],
  "724": [
    "flying"
  ],
  "725": [
    "field"
  ],
  "726": [
    "field"
  ],
  "727": [
    "field"
  ],
  "728": [
    "water1",
    "field"
  ],
  "729": [
    "water1",
    "field"
  ],
  "730": [
    "water1",
    "field"
  ],
  "731": [
    "flying"
  ],
  "732": [
    "flying"
  ],
  "733": [
    "flying"
  ],
  "734": [
    "field"
  ],
  "735": [
    "field"
  ],
  "736": [
    "bug"
  ],
  "737": [
    "bug"
  ],
  "738": [
    "bug"
  ],
  "739": [
    "water3"
  ],
  "740": [
    "water3"
  ],
  "741": [
    "flying"
  ],
  "742": [
    "bug",
    "fairy"
  ],
  "743": [
    "bug",
    "fairy"
  ],
  "744": [
    "field"
  ],
  "745": [
    "field"
  ],
  "746": [
    "water2"
  ],
  "747": [
    "water1"
  ],
  "748": [
    "water1"
  ],
  "749": [
    "field"
  ],
  "750": [
    "field"
  ],
  "751": [
    "water1",
    "bug"
  ],
  "752": [
    "water1",
    "bug"
  ],
  "753": [
    "grass"
  ],
  "754": [
    "grass"
  ],
  "755": [
    "grass"
  ],
  "756": [
    "grass"
  ],
  "757": [
    "monster",
    "dragon"
  ],
  "758": [
    "monster",
    "dragon"
  ],
  "759": [
    "field"
  ],
  "760": [
    "field"
  ],
  "761": [
    "grass"
  ],
  "762": [
    "grass"
  ],
  "763": [
    "grass"
  ],
  "764": [
    "grass"
  ],
  "765": [
    "field"
  ],
  "766": [
    "field"
  ],
  "767": [
    "bug",
    "water3"
  ],
  "768": [
    "bug",
    "water3"
  ],
  "769": [
    "amorphous"
  ],
  "770": [
    "amorphous"
  ],
  "771": [
    "water1"
  ],
  "772": [
    "undiscovered"
  ],
  "773": [
    "undiscovered"
  ],
  "774": [
    "mineral"
  ],
  "775": [
    "field"
  ],
  "776": [
    "monster",
    "dragon"
  ],
  "777": [
    "field",
    "fairy"
  ],
  "778": [
    "amorphous"
  ],
  "779": [
    "water2"
  ],
  "780": [
    "monster",
    "dragon"
  ],
  "781": [
    "mineral"
  ],
  "782": [
    "dragon"
  ],
  "783": [
    "dragon"
  ],
  "784": [
    "dragon"
  ],
  "785": [
    "undiscovered"
  ],
  "786": [
    "undiscovered"
  ],
  "787": [
    "undiscovered"
  ],
  "788": [
    "undiscovered"
  ],
  "789": [
    "undiscovered"
  ],
  "790": [
    "undiscovered"
  ],
  "791": [
    "undiscovered"
  ],
  "792": [
    "undiscovered"
  ],
  "793": [
    "undiscovered"
  ],
  "794": [
    "undiscovered"
  ],
  "795": [
    "undiscovered"
  ],
  "796": [
    "undiscovered"
  ],
  "797": [
    "undiscovered"
  ],
  "798": [
    "undiscovered"
  ],
  "799": [
    "undiscovered"
  ],
  "800": [
    "undiscovered"
  ],
  "801": [
    "undiscovered"
  ],
  "802": [
    "undiscovered"
  ],
  "803": [
    "undiscovered"
  ],
  "804": [
    "undiscovered"
  ],
  "805": [
    "undiscovered"
  ],
  "806": [
    "undiscovered"
  ],
  "807": [
    "undiscovered"
  ],
  "808": [
    "undiscovered"
  ],
  "809": [
    "undiscovered"
  ],
  "810": [
    "field",
    "grass"
  ],
  "811": [
    "field",
    "grass"
  ],
  "812": [
    "field",
    "grass"
  ],
  "813": [
    "field",
    "humanlike"
  ],
  "814": [
    "field",
    "humanlike"
  ],
  "815": [
    "field",
    "humanlike"
  ],
  "816": [
    "water1",
    "field"
  ],
  "817": [
    "water1",
    "field"
  ],
  "818": [
    "water1",
    "field"
  ],
  "819": [
    "field"
  ],
  "820": [
    "field"
  ],
  "821": [
    "flying"
  ],
  "822": [
    "flying"
  ],
  "823": [
    "flying"
  ],
  "824": [
    "bug"
  ],
  "825": [
    "bug"
  ],
  "826": [
    "bug"
  ],
  "827": [
    "field"
  ],
  "828": [
    "field"
  ],
  "829": [
    "grass"
  ],
  "830": [
    "grass"
  ],
  "831": [
    "field"
  ],
  "832": [
    "field"
  ],
  "833": [
    "monster",
    "water1"
  ],
  "834": [
    "monster",
    "water1"
  ],
  "835": [
    "field"
  ],
  "836": [
    "field"
  ],
  "837": [
    "mineral"
  ],
  "838": [
    "mineral"
  ],
  "839": [
    "mineral"
  ],
  "840": [
    "grass",
    "dragon"
  ],
  "841": [
    "grass",
    "dragon"
  ],
  "842": [
    "grass",
    "dragon"
  ],
  "843": [
    "field",
    "dragon"
  ],
  "844": [
    "field",
    "dragon"
  ],
  "845": [
    "water1",
    "flying"
  ],
  "846": [
    "water2"
  ],
  "847": [
    "water2"
  ],
  "848": [
    "undiscovered"
  ],
  "849": [
    "humanlike"
  ],
  "850": [
    "bug"
  ],
  "851": [
    "bug"
  ],
  "852": [
    "water1",
    "humanlike"
  ],
  "853": [
    "water1",
    "humanlike"
  ],
  "854": [
    "mineral",
    "amorphous"
  ],
  "855": [
    "mineral",
    "amorphous"
  ],
  "856": [
    "fairy"
  ],
  "857": [
    "fairy"
  ],
  "858": [
    "fairy"
  ],
  "859": [
    "fairy",
    "humanlike"
  ],
  "860": [
    "fairy",
    "humanlike"
  ],
  "861": [
    "fairy",
    "humanlike"
  ],
  "862": [
    "field"
  ],
  "863": [
    "field"
  ],
  "864": [
    "water1",
    "water3"
  ],
  "865": [
    "flying",
    "field"
  ],
  "866": [
    "humanlike"
  ],
  "867": [
    "mineral",
    "amorphous"
  ],
  "868": [
    "fairy",
    "amorphous"
  ],
  "869": [
    "fairy",
    "amorphous"
  ],
  "870": [
    "fairy",
    "mineral"
  ],
  "871": [
    "water1",
    "amorphous"
  ],
  "872": [
    "bug"
  ],
  "873": [
    "bug"
  ],
  "874": [
    "mineral"
  ],
  "875": [
    "water1",
    "field"
  ],
  "876": [
    "fairy"
  ],
  "877": [
    "field",
    "fairy"
  ],
  "878": [
    "field",
    "mineral"
  ],
  "879": [
    "field",
    "mineral"
  ],
  "880": [
    "undiscovered"
  ],
  "881": [
    "undiscovered"
  ],
  "882": [
    "undiscovered"
  ],
  "883": [
    "undiscovered"
  ],
  "884": [
    "mineral",
    "dragon"
  ],
  "885": [
    "amorphous",
    "dragon"
  ],
  "886": [
    "amorphous",
    "dragon"
  ],
  "887": [
    "amorphous",
    "dragon"
  ],
  "888": [
    "undiscovered"
  ],
  "889": [
    "undiscovered"
  ],
  "890": [
    "undiscovered"
  ],
  "891": [
    "undiscovered"
  ],
  "892": [
    "undiscovered"
  ],
  "893": [
    "undiscovered"
  ],
  "894": [
    "undiscovered"
  ],
  "895": [
    "undiscovered"
  ],
  "896": [
    "undiscovered"
  ],
  "897": [
    "undiscovered"
  ],
  "898": [
    "undiscovered"
  ],
  "899": [
    "field"
  ],
  "900": [
    "bug"
  ],
  "901": [
    "field"
  ],
  "902": [
    "water2"
  ],
  "903": [
    "field"
  ],
  "904": [
    "water2"
  ],
  "905": [
    "undiscovered"
  ],
  "906": [
    "field",
    "grass"
  ],
  "907": [
    "field",
    "grass"
  ],
  "908": [
    "field",
    "grass"
  ],
  "909": [
    "field"
  ],
  "910": [
    "field"
  ],
  "911": [
    "field"
  ],
  "912": [
    "flying",
    "water1"
  ],
  "913": [
    "flying",
    "water1"
  ],
  "914": [
    "flying",
    "water1"
  ],
  "915": [
    "field"
  ],
  "916": [
    "field"
  ],
  "917": [
    "bug"
  ],
  "918": [
    "bug"
  ],
  "919": [
    "bug"
  ],
  "920": [
    "bug"
  ],
  "921": [
    "field"
  ],
  "922": [
    "field"
  ],
  "923": [
    "field"
  ],
  "924": [
    "field",
    "fairy"
  ],
  "925": [
    "field",
    "fairy"
  ],
  "926": [
    "field",
    "mineral"
  ],
  "927": [
    "field",
    "mineral"
  ],
  "928": [
    "grass"
  ],
  "929": [
    "grass"
  ],
  "930": [
    "grass"
  ],
  "931": [
    "flying"
  ],
  "932": [
    "mineral"
  ],
  "933": [
    "mineral"
  ],
  "934": [
    "mineral"
  ],
  "935": [
    "humanlike"
  ],
  "936": [
    "humanlike"
  ],
  "937": [
    "humanlike"
  ],
  "938": [
    "water1"
  ],
  "939": [
    "water1"
  ],
  "940": [
    "water1",
    "flying"
  ],
  "941": [
    "water1",
    "flying"
  ],
  "942": [
    "field"
  ],
  "943": [
    "field"
  ],
  "944": [
    "field"
  ],
  "945": [
    "field"
  ],
  "946": [
    "grass"
  ],
  "947": [
    "grass"
  ],
  "948": [
    "grass"
  ],
  "949": [
    "grass"
  ],
  "950": [
    "water3"
  ],
  "951": [
    "grass"
  ],
  "952": [
    "grass"
  ],
  "953": [
    "bug"
  ],
  "954": [
    "bug"
  ],
  "955": [
    "flying"
  ],
  "956": [
    "flying"
  ],
  "957": [
    "fairy"
  ],
  "958": [
    "fairy"
  ],
  "959": [
    "fairy"
  ],
  "960": [
    "water3"
  ],
  "961": [
    "water3"
  ],
  "962": [
    "flying"
  ],
  "963": [
    "field",
    "water2"
  ],
  "964": [
    "field",
    "water2"
  ],
  "965": [
    "mineral"
  ],
  "966": [
    "mineral"
  ],
  "967": [
    "field"
  ],
  "968": [
    "field"
  ],
  "969": [
    "mineral"
  ],
  "970": [
    "mineral"
  ],
  "971": [
    "field"
  ],
  "972": [
    "field"
  ],
  "973": [
    "flying"
  ],
  "974": [
    "field"
  ],
  "975": [
    "field"
  ],
  "976": [
    "water2"
  ],
  "977": [
    "water2"
  ],
  "978": [
    "water2"
  ],
  "979": [
    "field"
  ],
  "980": [
    "water1",
    "field"
  ],
  "981": [
    "field"
  ],
  "982": [
    "field"
  ],
  "983": [
    "humanlike"
  ],
  "984": [
    "undiscovered"
  ],
  "985": [
    "undiscovered"
  ],
  "986": [
    "undiscovered"
  ],
  "987": [
    "undiscovered"
  ],
  "988": [
    "undiscovered"
  ],
  "989": [
    "undiscovered"
  ],
  "990": [
    "undiscovered"
  ],
  "991": [
    "undiscovered"
  ],
  "992": [
    "undiscovered"
  ],
  "993": [
    "undiscovered"
  ],
  "994": [
    "undiscovered"
  ],
  "995": [
    "undiscovered"
  ],
  "996": [
    "dragon",
    "mineral"
  ],
  "997": [
    "dragon",
    "mineral"
  ],
  "998": [
    "dragon",
    "mineral"
  ],
  "999": [
    "undiscovered"
  ],
  "1000": [
    "undiscovered"
  ],
  "1001": [
    "undiscovered"
  ],
  "1002": [
    "undiscovered"
  ],
  "1003": [
    "undiscovered"
  ],
  "1004": [
    "undiscovered"
  ],
  "1005": [
    "undiscovered"
  ],
  "1006": [
    "undiscovered"
  ],
  "1007": [
    "undiscovered"
  ],
  "1008": [
    "undiscovered"
  ],
  "1009": [
    "undiscovered"
  ],
  "1010": [
    "undiscovered"
  ],
  "1011": [
    "grass",
    "dragon"
  ],
  "1012": [
    "mineral",
    "amorphous"
  ],
  "1013": [
    "mineral",
    "amorphous"
  ],
  "1014": [
    "undiscovered"
  ],
  "1015": [
    "undiscovered"
  ],
  "1016": [
    "undiscovered"
  ],
  "1017": [
    "undiscovered"
  ],
  "1018": [
    "mineral",
    "dragon"
  ],
  "1019": [
    "grass",
    "dragon"
  ],
  "1020": [
    "undiscovered"
  ],
  "1021": [
    "undiscovered"
  ],
  "1022": [
    "undiscovered"
  ],
  "1023": [
    "undiscovered"
  ],
  "1024": [
    "undiscovered"
  ],
  "1025": [
    "undiscovered"
  ]
};

export function getEggGroupsForDex(dexNumber: number): EggGroup[] {
  return AUTHENTIC_SPECIES_EGG_GROUPS[dexNumber] || ['field'];
}

export interface PokemonEggData {
  pokemonId: string;
  pokemonName: string;
  dexNumber: number;
  spriteUrl: string;
  types: string[];
  eggGroups: EggGroup[];
}

export const POKEMON_EGG_DATASET: PokemonEggData[] = AUTHENTIC_POKEMON_DATA.map(p => {
  const pId = p.name.toLowerCase().replace(/[^a-z0-9]/g, '');
  return {
    pokemonId: pId,
    pokemonName: p.name,
    dexNumber: p.dexNumber,
    spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${p.dexNumber}.gif`,
    types: p.types,
    eggGroups: getEggGroupsForDex(p.dexNumber)
  };
});
