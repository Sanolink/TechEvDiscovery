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
(_____)         Last Modification : 1.4.0         (_____)

*/

const combTier = {
    1: [
        "inferium",
        "frosty"
    ],
    2: [
        "prudentium",
        "coal",
        "amethyst",
        "slimy",
        "silicon",
        "sulfur",
        "aluminum",
        "niter",
        "apatite"
    ],
    3: [
        "tertium",
        "iron",
        "copper",
        "crystalline",
        "glowing",
        "redstone",
        "obsidian",
        "prismarine",
        "zombie",
        "skeletal",
        'honeycomb_powdery',
        "silky",
        "tin",
        "bronze",
        "zinc",
        "brass",
        "silver",
        "lead",
        "blizz",
        "blitz",
        "basalz",
        "manasteel",
        "spacial"
    ],
    4: [
        "imperium",
        "gold",
        "lapis",
        "experience",
        "blazing",
        "ender",
        "steel",
        "nickel",
        "constantan",
        "electrum",
        "invar",
        "radioactive",
        "ruby",
        "sapphire",
        "signalum",
        "lumium",
        "elementium",
        "osmium",
        "fluorite",
        "refined_glowstone",
        "refined_obsidian",
        "compressed_iron",
        "fluix",
        "energized_steel",
        "blazing_crystal"
    ],
    5: [
        "supremium",
        "diamond",
        "emerald",
        "netherite",
        "withered",
        "platinum",
        "iridium",
        "enderium",
        "terrasteel",
        "niotic_crystal",
        "spirited_crystal",
        "uraninite"
    ], 
    6: [
        "insanium",
        "draconic",
        "nitro_crystal"
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
            case 1: return "§e1";
            case 2: return "§a2";
            case 3: return "§63";
            case 4: return "§b4";
            case 5: return "§c5";
            case 6: return "§56";
            default: return "§7Unknown";
        }
    }
};