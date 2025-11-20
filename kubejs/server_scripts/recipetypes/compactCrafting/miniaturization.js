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

ServerEvents.recipes(event => {

    //Recipes
    const recipes = [
        //Thermal Machine Frame
        miniaturization('industrialforegoing:machine_frame_supreme', 1, 'thermal:machine_frame', 1, [
            [
                ['W', 'I', 'I', 'I', 'W'],
                ['I', ' ', ' ', ' ', 'I'],
                ['I', ' ', ' ', ' ', 'I'],
                ['I', ' ', ' ', ' ', 'I'],
                ['W', 'I', 'I', 'I', 'W']
            ],
            [
                ['I', ' ', ' ', ' ', 'I'],
                [' ', 'R', 'R', 'R', ' '],
                [' ', 'R', ' ', 'R', ' '],
                [' ', 'R', 'R', 'R', ' '],
                ['I', ' ', ' ', ' ', 'I']
            ],
            [
                ['S', ' ', ' ', ' ', 'S'],
                [' ', 'R', ' ', 'R', ' '],
                [' ', ' ', ' ', ' ', ' '],
                [' ', 'R', ' ', 'R', ' '],
                ['S', ' ', ' ', ' ', 'S']
            ],
            [
                ['E', ' ', ' ', ' ', 'E'],
                [' ', 'R', 'R', 'R', ' '],
                [' ', 'R', ' ', 'R', ' '],
                [' ', 'R', 'R', 'R', ' '],
                ['E', ' ', ' ', ' ', 'E']
            ],
            [
                ['B', 'E', 'E', 'E', 'B'],
                ['E', ' ', ' ', ' ', 'E'],
                ['E', ' ', ' ', ' ', 'E'],
                ['E', ' ', ' ', ' ', 'E'],
                ['B', 'E', 'E', 'E', 'B']
            ]
        ],
            {
                'I': 'psi:ivory_psimetal_block',
                'E': 'psi:ebony_psimetal_block',
                'W': 'thermal:white_rockwool',
                'B': 'thermal:black_rockwool',
                'R': 'compactmachines:wall',
                'S': 'immersiveengineering:sheetmetal_steel'
            }, "machine_frame"),

        //Machine Tiny
        miniaturization('minecraft:copper_ingot', 1, 'compactmachines:machine_tiny', 1, [
            [
                ['C', 'C', 'C'],
                ['C', 'B', 'C'],
                ['C', 'C', 'C']
            ],
            [
                ['C', 'B', 'C'],
                ['B', 'O', 'B'],
                ['C', 'B', 'C']
            ],
            [
                ['C', 'C', 'C'],
                ['C', 'B', 'C'],
                ['C', 'C', 'C']
            ]
        ],
            {
                'C': 'compactmachines:wall',
                'B': 'minecraft:copper_block',
                'O': 'minecraft:air'
            }, "machine_tiny"),

        //Machine Small
        miniaturization('minecraft:iron_ingot', 1, 'compactmachines:machine_small', 1, [
            [
                ['C', 'C', 'C'],
                ['C', 'B', 'C'],
                ['C', 'C', 'C']
            ],
            [
                ['C', 'B', 'C'],
                ['B', 'O', 'B'],
                ['C', 'B', 'C']
            ],
            [
                ['C', 'C', 'C'],
                ['C', 'B', 'C'],
                ['C', 'C', 'C']
            ]
        ],
            {
                'C': 'compactmachines:wall',
                'B': 'minecraft:iron_block',
                'O': 'compactmachines:machine_tiny'
            }, "machine_small"),

        //Machine Normal
        miniaturization('minecraft:gold_ingot', 1, 'compactmachines:machine_normal', 1, [
            [
                ['C', 'C', 'C'],
                ['C', 'B', 'C'],
                ['C', 'C', 'C']
            ],
            [
                ['C', 'B', 'C'],
                ['B', 'O', 'B'],
                ['C', 'B', 'C']
            ],
            [
                ['C', 'C', 'C'],
                ['C', 'B', 'C'],
                ['C', 'C', 'C']
            ]
        ],
            {
                'C': 'compactmachines:wall',
                'B': 'minecraft:gold_block',
                'O': 'compactmachines:machine_small'
            }, "machine_normal"),

        //Machine Large
        miniaturization('forbidden_arcanus:obsidian_ingot', 1, 'compactmachines:machine_large', 1, [
            [
                ['C', 'C', 'C'],
                ['C', 'B', 'C'],
                ['C', 'C', 'C']
            ],
            [
                ['C', 'B', 'C'],
                ['B', 'O', 'B'],
                ['C', 'B', 'C']
            ],
            [
                ['C', 'C', 'C'],
                ['C', 'B', 'C'],
                ['C', 'C', 'C']
            ]
        ],
            {
                'C': 'compactmachines:wall',
                'B': 'forbidden_arcanus:processed_obsidian_block',
                'O': 'compactmachines:machine_normal'
            }, "machine_large"),

        //Machine Giant
        miniaturization('minecraft:diamond', 1, 'compactmachines:machine_giant', 1, [
            [
                ['C', 'C', 'C'],
                ['C', 'B', 'C'],
                ['C', 'C', 'C']
            ],
            [
                ['C', 'B', 'C'],
                ['B', 'O', 'B'],
                ['C', 'B', 'C']
            ],
            [
                ['C', 'C', 'C'],
                ['C', 'B', 'C'],
                ['C', 'C', 'C']
            ]
        ],
            {
                'C': 'compactmachines:wall',
                'B': 'minecraft:diamond_block',
                'O': 'compactmachines:machine_large'
            }, "machine_giant"),

        //Machine Maximum
        miniaturization('minecraft:netherite_ingot', 1, 'compactmachines:machine_maximum', 1, [
            [
                ['C', 'C', 'C'],
                ['C', 'B', 'C'],
                ['C', 'C', 'C']
            ],
            [
                ['C', 'B', 'C'],
                ['B', 'O', 'B'],
                ['C', 'B', 'C']
            ],
            [
                ['C', 'C', 'C'],
                ['C', 'B', 'C'],
                ['C', 'C', 'C']
            ]
        ],
            {
                'C': 'compactmachines:wall',
                'B': 'minecraft:netherite_block',
                'O': 'compactmachines:machine_giant'
            }, "machine_maximum"),

        //Mana Pool
        miniaturization('botania:spark', 1, 'botania:mana_pool', 1, [
            [
                ['L', 'L', 'L', 'L', 'L'],
                ['L', 'S', 'S', 'S', 'L'],
                ['L', 'S', 'D', 'S', 'L'],
                ['L', 'S', 'S', 'S', 'L'],
                ['L', 'L', 'L', 'L', 'L']
            ]
        ],
            {
                'L': 'botania:livingrock',
                'S': 'botania:livingrock_slab',
                'D': 'botania:diluted_pool'
            }, "mana_pool"),

        //Transmutation Table
        miniaturization('projecte:philosophers_stone', 1, 'projecte:transmutation_table', 1, [
            [
                ['S', 'S', 'O', ' ', ' ', ' ', 'O', 'S', 'S'],
                ['S', 'O', ' ', ' ', ' ', ' ', ' ', 'O', 'S'],
                ['O', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'O'],
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                ['O', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'O'],
                ['S', 'O', ' ', ' ', ' ', ' ', ' ', 'O', 'S'],
                ['S', 'S', 'O', ' ', ' ', ' ', 'O', 'S', 'S']
            ],
            [
                ['D', 'D', 'B', 'T', 'W', 'T', 'B', 'D', 'D'],
                ['D', 'T', 'F', 'F', 'F', 'H', 'Y', 'T', 'D'],
                ['B', 'Y', 'F', 'F', 'H', 'Y', 'F', 'F', 'B'],
                ['T', 'H', 'Y', 'P', 'Y', 'P', 'F', 'F', 'T'],
                ['W', 'F', 'H', 'Y', 'I', 'Y', 'H', 'F', 'W'],
                ['T', 'F', 'F', 'P', 'Y', 'P', 'Y', 'H', 'T'],
                ['B', 'F', 'F', 'Y', 'H', 'F', 'F', 'Y', 'B'],
                ['D', 'T', 'Y', 'H', 'F', 'F', 'F', 'T', 'D'],
                ['D', 'D', 'B', 'T', 'W', 'T', 'B', 'D', 'D']
            ],
            [
                ['D', 'B', 'T', 'W', 'W', 'W', 'T', 'B', 'D'],
                ['B', 'A', 'A', 'D', 'D', 'D', 'A', 'A', 'B'],
                ['T', 'A', 'D', 'A', 'A', 'A', 'D', 'A', 'T'],
                ['W', 'D', 'A', 'A', 'R', 'A', 'A', 'D', 'W'],
                ['W', 'D', 'A', 'R', 'C', 'R', 'A', 'D', 'W'],
                ['W', 'D', 'A', 'A', 'R', 'A', 'A', 'D', 'W'],
                ['T', 'A', 'D', 'A', 'A', 'A', 'D', 'A', 'T'],
                ['B', 'A', 'A', 'D', 'D', 'D', 'A', 'A', 'B'],
                ['D', 'B', 'T', 'W', 'W', 'W', 'T', 'B', 'D']
            ],
            [
                ['D', 'D', 'B', 'T', 'W', 'T', 'B', 'D', 'D'],
                ['D', 'T', 'F', 'F', 'F', 'F', 'F', 'T', 'D'],
                ['B', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'B'],
                ['T', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'T'],
                ['W', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'W'],
                ['T', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'T'],
                ['B', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'B'],
                ['D', 'T', 'F', 'F', 'F', 'F', 'F', 'T', 'D'],
                ['D', 'D', 'B', 'T', 'W', 'T', 'B', 'D', 'D']
            ]
        ],
            {
                "D": "projecte:dark_matter_block",
                "B": "sons_of_sins:soul_steel_block",
                "T": "sons_of_sins:soul_steel_tiles",
                "W": "mysticalagriculture:witherproof_block",
                "F": "mekanism:block_fluorite",
                "A": "projecte:aeternalis_fuel_block",
                "R": "projecte:red_matter_block",
                "C": "ae2:condenser",
                "Y": "chemlib:yttrium_metal_block",
                "H": "alchemistry:chromium_block",
                "P": "mekanismadditions:purple_plastic",
                "I": "mysticalagradditions:insanium_block",
                "S": "ftbic:rubber_sheet",
                "O": "immersiveengineering:concrete_sheet"
            }, "transmutation_table")
    ]

    function miniaturization(catalyst, incount, output, outcount, shape, key, id) {
        const components = {};
        for (const symbol in key) { components[symbol] = { 'type': 'compactcrafting:block', 'block': key[symbol] } }
        return {
            json: {
                'type': 'compactcrafting:miniaturization',
                'recipeSize': shape.length,
                'layers': shape.map(layer => ({
                    'type': 'compactcrafting:mixed',
                    'pattern': layer
                })),
                'catalyst': {
                    'id': catalyst,
                    'Count': incount
                },
                'components': components,
                'outputs': [
                    {
                        'id': output,
                        'Count': outcount
                    }
                ]
            },
            id: id
        }
    }

    const powerFlower = [
        'basic',
        'dark',
        'red',
        'magenta',
        'pink',
        'purple',
        'violet',
        'blue',
        'cyan',
        'green',
        'lime',
        'yellow',
        'orange',
        'white',
        'fading',
        'final'
    ]
    for (let index = 0; index < powerFlower.length; index++) {
        let curTier = powerFlower[index]
        let catalyst = `projectexpansion:${powerFlower[index - 1]}_power_flower`
        if (index == 0) catalyst = 'projecte:collector_mk1'
        recipes.push(miniaturization(catalyst, 1, `projectexpansion:${curTier}_power_flower`, 1, [
            [
                [' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' '],
                [' ', ' ', 'C', ' ', ' '],
                [' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ']
            ],
            [
                [' ', ' ', ' ', ' ', ' '],
                [' ', ' ', 'C', ' ', ' '],
                [' ', 'C', 'R', 'C', ' '],
                [' ', ' ', 'C', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ']
            ],
            [
                [' ', ' ', 'C', ' ', ' '],
                [' ', 'C', 'R', 'C', ' '],
                ['C', 'R', 'L', 'R', 'C'],
                [' ', 'C', 'R', 'C', ' '],
                [' ', ' ', 'C', ' ', ' ']
            ],
            [
                [' ', ' ', ' ', ' ', ' '],
                [' ', ' ', 'C', ' ', ' '],
                [' ', 'C', 'R', 'C', ' '],
                [' ', ' ', 'C', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ']
            ],
            [
                [' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' '],
                [' ', ' ', 'C', ' ', ' '],
                [' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ']
            ],
        ],
            {
                "C": `projectexpansion:${curTier}_collector`,
                "R": `projectexpansion:${curTier}_relay`,
                "L": `projectexpansion:${curTier}_emc_link`,
            }, `power_flower/${curTier}`))
    }

    //General Miniaturization Function
    recipes.forEach(recipe => {
        event.custom(recipe.json).id('compactcrafting:miniaturization/' + recipe.id)
    })
})
