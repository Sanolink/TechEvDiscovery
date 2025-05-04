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
(_____)         Last Modification : 1.3.0         (_____)

*/

ServerEvents.recipes(event => {
    
    //Recipes
    const recipes = [
        //Amethyst Block
        {
            id: "amethyst",
            catalyst: "industrialforegoing:laser_lens10",
            output: "minecraft:amethyst_block",
            rarity: [
                {
                    blacklist: {
                    type: "minecraft:worldgen/biome",
                    values: [
                        "minecraft:the_end",
                        "minecraft:the_void",
                        "minecraft:small_end_islands",
                        "minecraft:end_barrens",
                        "minecraft:end_highlands",
                        "minecraft:end_midlands"
                        ]
                    },
                    depth_max: 26,
                    depth_min: 0,
                    weight: 8,
                    whitelist: {}
                },
                {
                    blacklist: {
                    type: "minecraft:worldgen/biome",
                    values: [
                        "minecraft:the_end",
                        "minecraft:the_void",
                        "minecraft:small_end_islands",
                        "minecraft:end_barrens",
                        "minecraft:end_highlands",
                        "minecraft:end_midlands"
                        ]
                    },
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1,
                    whitelist: {}
                }
            ]
        }
    ]

    //General Laser Drill Ore Function
    recipes.forEach((recipe) => {
        event.recipes.industrialforegoing.laser_drill_ore(recipe.output, recipe.catalyst, recipe.rarity).id("industrialforegoing:laser_drill_ore/" + recipe.id)
    })
})