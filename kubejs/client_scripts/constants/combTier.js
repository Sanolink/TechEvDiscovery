//priority: 11000
/* 
 _____                                             _____ 
( ___ ) © SanoLink 2024/2025. All rights reserved.( ___ )
 |   |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|   | 
 |   |  _____         _     _____        ______    |   | 
 |   | |_   _|__  ___| |__ | ____|_   __ \ \ \ \   |   | 
 |   |   | |/ _ \/ __| '_ \|  _| \ \ / /  \ \ \ \  |   | 
 |   |   | |  __/ (__| | | | |___ \ V /   / / / /  |   | 
 |   |  _|_|\___|\___|_| |_|_____| \_/   /_/_/_/   |   | 
 |   | |  _ \(_)___  ___ _____   _____ _ __ _   _  |   | 
 |   | | | | | / __|/ __/ _ \ \ / / _ \ '__| | | | |   | 
 |   | | |_| | \__ \ (_| (_) \ V /  __/ |  | |_| | |   | 
 |   | |____/|_|___/\___\___/ \_/ \___|_|   \__, | |   | 
 |   |                                      |___/  |   | 
 |___|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|___| 
(_____)         Last Modification : 1.5.0         (_____)

*/

const combTier = {
    1: [
        "inferium",
        
        "aeric",
        "aquatic",
        "geotic",
        "magmatic",
        "prosperity",
        "soulium",
    ],
    2: [
        "prudentium",

        "aluminum",
        "chicken",
        "coal",
        "copper",
        "glowing",
        "gold",
        "iron",
        "lapis",
        "lead",
        "nickel",
        "niter",
        "obsidian",
        "osmium",
        "piggy",
        "platinum",
        "prismarine",
        "rabbit",
        "radioactive",
        "redstone",
        "sheep",
        "silver",
        "sulfur",
        "tin",
        "zinc"
    ],
    3: [
        "tertium",

        "amethyst",
        "apatite",
        "arcane",
        "chocolate",
        "cinnabar",
        "crystalline",
        "experience",
        "fiery",
        "fishy",
        "hop_graphite",
        "ironwood",
        "knightmetal",
        "oily",
        "peridot",
        "ruby",
        "sapphire",
        "silicon",
        "skeletal",
        "slimy",
        "spacial",
        "spirit",
        "squid",
        "steeleaf",
        "tea",
        "turtle",
        "zombie"
    ],
    4: [
        "imperium",

        "blazing_crystal",
        "brass",
        "bronze",
        "compressed_iron",
        "constantan",
        "desh",
        "destabilized_redstone",
        "electrum",
        "ender",
        "energized_glowstone",
        "energized_steel",
        "fluorite",
        "invar",
        "lumium",
        "manasteel",
        "ostrum",
        "pink_slimy",
        "refined_glowstone",
        "refined_obsidian",
        "resonant_ender",
        "signalum",
        "silky",
        "steel",
        "withered"
    ],
    5: [
        "supremium",

        "alfsteel",
        "awakened_supremium",
        "basalz",
        "blazing",
        "blitz",
        "blizz",
        "calorite",
        "diamond",
        "elementium",
        "emerald",
        "enderium",
        "fire_dragonsteel",
        "fluix",
        "ice_dragonsteel",
        "iesnium",
        "iridium",
        "lightning_dragonsteel",
        "nephryx",
        "netherite",
        "niotic_crystal",
        "plastic",
        "sculk",
        "spirited_crystal",
        "terrasteel",
        "uraninite",
        "wasted_radioactive"
    ], 
    6: [
        "insanium",

        "draconic",
        "gaia",
        "nitro_crystal",
        "starry"
    ],
    "TechEv": [
        "aeric",
        "aquatic",
        "chicken",
        "fiery",
        "fishy",
        "gaia",
        "geotic",
        "hop_graphite",
        "ironwood",
        "knightmetal",
        "nephryx",
        "piggy",
        "rabbit",
        "sheep",
        "squid",
        "starry",
        "steeleaf",
        "turtle"
    ],
    getTier(mat) {
        for (let tier in this) {
            if (!isNaN(tier) && Array.isArray(this[tier]) && this[tier].includes(mat)) {
                return parseInt(tier);
            }
        }
        return null;
    },
    getColor(tier) {
        switch (parseInt(tier)) {
            case 1: return "§eElemental";
            case 2: return "§a2";
            case 3: return "§63";
            case 4: return "§b4";
            case 5: return "§c5";
            case 6: return "§56";
            case 7: return "§1U§3l§2t§ai§em§6a§4t§5e";
            default: return "§7Optional";
        }
    }
};