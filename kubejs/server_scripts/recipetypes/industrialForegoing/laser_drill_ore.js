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
(_____)         Last Modification : 1.5.3         (_____)

*/

ServerEvents.recipes(event => {
    
    const endBiomes = {
        type: 'minecraft:worldgen/biome',
        values: biomes.minecraft.end
    };

    const netherBiomes = {
        type: 'minecraft:worldgen/biome',
        values: biomes.minecraft.nether
    };

    const everbrightBiomes = {
        type: 'minecraft:worldgen/biome',
        values: biomes.blue_skies.everbright
    };

    const everdawnBiomes = {
        type: 'minecraft:worldgen/biome',
        values: biomes.blue_skies.everdawn
    };

    const blue_skiesBiomes = {
        type: 'minecraft:worldgen/biome',
        values: biomes.blue_skies.everbright.concat(biomes.blue_skies.everdawn)
    };

    const alfheimBiomes = {
        type: 'minecraft:worldgen/biome',
        values: biomes.mythicbotany.alfheim
    };

    const undergardenBiomes = {
        type: 'minecraft:worldgen/biome',
        values: biomes.undergarden
    };

    const glacioBiomes = {
        type:'minecraft:worldgen/biome',
        values: biomes.ad_astra.glacio
    }

    const mercuryBiomes = {
        type: 'minecraft:worldgen/biome',
        values: biomes.ad_astra.mercury
    }

    const moonGlacioMarsBiomes = {
        type: 'minecraft:worldgen/biome',
        values: biomes.ad_astra.moon.concat(biomes.ad_astra.glacio).concat(biomes.ad_astra.mars)
    }

    const orbitBiomes = {
        type:'minecraft:worldgen/biome',
        values: ['ad_astra:orbit']
    }


    //Recipes
    const recipes = [
        //Amethyst
        {
            id: "amethyst",
            catalyst: laserLens.purple,
            output: "minecraft:amethyst_block",
            rarity: [
                {
                    blacklist: endBiomes,
                    depth_max: 26,
                    depth_min: 0,
                    weight: 8,
                    whitelist: {}
                },
                {
                    blacklist: endBiomes,
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1,
                    whitelist: {}
                }
            ]
        },
        //Zinc
        {
            id: "zinc",
            catalyst: laserLens.cyan,
            output: "alltheores:raw_zinc",
            rarity: [
                {
                    blacklist: endBiomes,
                    depth_max: 68,
                    depth_min: 5,
                    weight: 8,
                    whitelist: {}
                },
                {
                    blacklist: endBiomes,
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1,
                    whitelist: {}
                }
            ]
        },
        //Falsite
        {
            id: "falsite",
            catalyst: laserLens.purple,
            output: "blue_skies:raw_falsite",
            rarity: [
                {
                    blacklist: {},
                    depth_max: 68,
                    depth_min: 5,
                    weight: 8,
                    whitelist: everbrightBiomes
                },
                {
                    blacklist: {},
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1,
                    whitelist: everbrightBiomes
                }
            ]
        },
        //Ventium
        {
            id: "ventium",
            catalyst: laserLens.red,
            output: "blue_skies:raw_ventium",
            rarity: [
                {
                    blacklist: {},
                    depth_max: 68,
                    depth_min: 5,
                    weight: 8,
                    whitelist: everbrightBiomes
                },
                {
                    blacklist: {},
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1,
                    whitelist: everbrightBiomes
                }
            ]
        },
        //Horizonite
        {
            id: "horizonite",
            catalyst: laserLens.orange,
            output: "blue_skies:raw_horizonite",
            rarity: [
                {
                    blacklist: {},
                    depth_max: 29,
                    depth_min: 5,
                    weight: 8,
                    whitelist: everdawnBiomes
                },
                {
                    blacklist: {},
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1,
                    whitelist: everdawnBiomes
                }
            ]
        },
        //Diopside
        {
            id: "diopside",
            catalyst: laserLens.green,
            output: "blue_skies:diopside_gem",
            rarity: [
                {
                    blacklist: {},
                    depth_max: 29,
                    depth_min: 5,
                    weight: 8,
                    whitelist: blue_skiesBiomes
                },
                {
                    blacklist: {},
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1,
                    whitelist: blue_skiesBiomes
                }
            ]
        },
        //Aquite
        {
            id: "aquite",
            catalyst: laserLens.light_blue,
            output: "blue_skies:raw_aquite",
            rarity: [
                {
                    blacklist: {},
                    depth_max: 68,
                    depth_min: 5,
                    weight: 8,
                    whitelist: blue_skiesBiomes
                },
                {
                    blacklist: {},
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1,
                    whitelist: blue_skiesBiomes
                }
            ]
        },
        //Charoite
        {
            id: "charoite",
            catalyst: laserLens.purple,
            output: "blue_skies:raw_charoite",
            rarity: [
                {
                    blacklist: {},
                    depth_max: 68,
                    depth_min: 5,
                    weight: 8,
                    whitelist: blue_skiesBiomes
                },
                {
                    blacklist: {},
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1,
                    whitelist: blue_skiesBiomes
                }
            ]
        },
        //Pyrope
        {
            id: "pyrope",
            catalyst: laserLens.pink,
            output: "blue_skies:pyrope_gem",
            rarity: [
                {
                    blacklist: {},
                    depth_max: 68,
                    depth_min: 5,
                    weight: 8,
                    whitelist: blue_skiesBiomes
                },
                {
                    blacklist: {},
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1,
                    whitelist: blue_skiesBiomes
                }
            ]
        },
        //Moonstone
        {
            id: "moonstone",
            catalyst: laserLens.light_gray,
            output: "blue_skies:moonstone_shard",
            rarity: [
                {
                    blacklist: {},
                    depth_max: 68,
                    depth_min: 5,
                    weight: 8,
                    whitelist: blue_skiesBiomes
                },
                {
                    blacklist: {},
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1,
                    whitelist: blue_skiesBiomes
                }
            ]
        },
        //Elementium
        {
            id: "elementium",
            catalyst: laserLens.magenta,
            output: "mythicbotany:raw_elementium",
            rarity: [
                {
                    blacklist: {},
                    depth_max: 68,
                    depth_min: 5,
                    weight: 8,
                    whitelist: alfheimBiomes
                },
                {
                    blacklist: {},
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1,
                    whitelist: alfheimBiomes
                }
            ]
        },
        //Cloggrum
        {
            id: "cloggrum",
            catalyst: laserLens.brown,
            output: "undergarden:raw_cloggrum",
            rarity: [
                {
                    blacklist: {},
                    depth_max: 68,
                    depth_min: 5,
                    weight: 8,
                    whitelist: undergardenBiomes
                },
                {
                    blacklist: {},
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1,
                    whitelist: undergardenBiomes
                }
            ]
        },
        //Froststeel
        {
            id: "froststeel",
            catalyst: laserLens.light_blue,
            output: "undergarden:raw_froststeel",
            rarity: [
                {
                    blacklist: {},
                    depth_max: 68,
                    depth_min: 5,
                    weight: 8,
                    whitelist: undergardenBiomes
                },
                {
                    blacklist: {},
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1,
                    whitelist: undergardenBiomes
                }
            ]
        },
        //Regalium
        {
            id: "regalium",
            catalyst: laserLens.orange,
            output: "undergarden:regalium_crystal",
            rarity: [
                {
                    blacklist: {},
                    depth_max: 28,
                    depth_min: 5,
                    weight: 8,
                    whitelist: undergardenBiomes
                },
                {
                    blacklist: {},
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1,
                    whitelist: undergardenBiomes
                }
            ]
        },
        //Utherium
        {
            id: "utherium",
            catalyst: laserLens.red,
            output: "undergarden:utherium_crystal",
            rarity: [
                {
                    blacklist: {},
                    depth_max: 28,
                    depth_min: 5,
                    weight: 8,
                    whitelist: undergardenBiomes
                },
                {
                    blacklist: {},
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1,
                    whitelist: undergardenBiomes
                }
            ]
        },
        //Nephryx
        {
            id: "nephryx",
            catalyst: laserLens.green,
            output: "ad_astra:raw_nephryx",
            rarity: [
                {
                    blacklist: {},
                    depth_max: 80,
                    depth_min: 0,
                    weight: 10,
                    whitelist: mercuryBiomes
                }
            ]
        },
        //Prosperity
        {
            id: "prosperity",
            catalyst: laserLens.light_blue,
            output: "#forge:ores/prosperity",
            rarity: [
                {
                    blacklist: {},
                    depth_max: 80,
                    depth_min: 0,
                    weight: 10,
                    whitelist: glacioBiomes
                }
            ]
        },
        //Pendorite
        {
            id: "pendorite",
            catalyst: laserLens.purple,
            output: "byg:raw_pendorite",
            rarity: [
                {
                    blacklist: {},
                    depth_max: 255,
                    depth_min: 56,
                    weight: 8,
                    whitelist: netherBiomes
                },
                {
                    blacklist: {},
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1,
                    whitelist: netherBiomes
                }
            ]
        },
        //Ametrine
        {
            id: "ametrine",
            catalyst: laserLens.pink,
            output: "byg:ametrine_ore",
            rarity: [
                {
                    blacklist: {},
                    depth_max: 228,
                    depth_min: 180,
                    weight: 8,
                    whitelist: endBiomes
                },
                {
                    blacklist: {},
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1,
                    whitelist: endBiomes
                }
            ]
        },
        //Emeraldite
        {
            id: "emeraldite",
            catalyst: laserLens.green,
            output: "byg:emeraldite_ore",
            rarity: [
                {
                    blacklist: {},
                    depth_max: 28,
                    depth_min: 5,
                    weight: 8,
                    whitelist: netherBiomes
                },
                {
                    blacklist: {},
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1,
                    whitelist: netherBiomes
                }
            ]
        },
        //Anthracite
        {
            id: "anthracite",
            catalyst: laserLens.black,
            output: "byg:anthracite_ore",
            rarity: [
                {
                    blacklist: {},
                    depth_max: 68,
                    depth_min: 12,
                    weight: 8,
                    whitelist: netherBiomes
                },
                {
                    blacklist: {},
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1,
                    whitelist: netherBiomes
                }
            ]
        },
        //Ice Shard
        {
            id: "ice_shard",
            catalyst: laserLens.light_blue,
            output: "ad_astra:deepslate_ice_shard_ore",
            rarity: [
                {
                    blacklist: {},
                    depth_max: 32,
                    depth_min: -35,
                    weight: 8,
                    whitelist: moonGlacioMarsBiomes
                },
                {
                    blacklist: {},
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1,
                    whitelist: moonGlacioMarsBiomes
                }
            ]
        },
        //Thorium
        {
            id: "thorium",
            catalyst: laserLens.orange,
            output: "create_new_age:thorium",
            rarity: [
                {
                    blacklist: endBiomes,
                    depth_max: 63,
                    depth_min: 19,
                    weight: 8,
                    whitelist: {}
                },
                {
                    blacklist: endBiomes,
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1,
                    whitelist: {}
                }
            ]
        },
        //Xpetrified Ore
        {
            id: "xpetrified_ore",
            catalyst: laserLens.lime,
            output: "forbidden_arcanus:xpetrified_ore",
            rarity: [
                {
                    blacklist: endBiomes,
                    depth_max: 35,
                    depth_min: -7,
                    weight: 8,
                    whitelist: {}
                },
                {
                    blacklist: endBiomes,
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1,
                    whitelist: {}
                }
            ]
        },
        //Stellarite
        {
            id: "stellarite",
            catalyst: laserLens.astral,
            output: "forbidden_arcanus:stellarite_piece",
            rarity: [
                {
                    blacklist: orbitBiomes,
                    depth_max: -34,
                    depth_min: -41,
                    weight: 1,
                    whitelist: {}
                }
            ]
        },
        //Uraninite
        {
            id: "uraninite",
            catalyst: laserLens.green,
            output: "#forge:ores/uraninite",
            rarity: [
                {
                    blacklist: endBiomes,
                    depth_max: 56,
                    depth_min: -32,
                    weight: 8,
                    whitelist: {}
                },
                {
                    blacklist: endBiomes,
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1,
                    whitelist: {}
                }
            ]
        },
        //Astral Dust
        {
            id: "astral_dust",
            catalyst: laserLens.astral,
            output: "enigmaticlegacy:astral_dust",
            rarity: [
                {
                    blacklist: {},
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1,
                    whitelist: orbitBiomes
                }
            ]
        }
    ]
    
    //General Laser Drill Ore Function
    recipes.forEach(recipe => {
        let json = {
            type: 'industrialforegoing:laser_drill_ore',
            catalyst: parseIngredient(recipe.catalyst),
            output: parseIngredient(recipe.output),
            pointer: 0,
            rarity: recipe.rarity,
        }
        event.custom(json).id(`industrialforegoing:laser_drill_ore/${recipe.id}`)
    })   
})