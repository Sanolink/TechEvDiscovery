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
        //Thermal Machine Frame
        miniaturization('industrialforegoing:machine_frame_supreme', 1, 'thermal:machine_frame', 1, [
            [
                ['W', 'I', 'I', 'I', 'W'],
                ['I', 'O', 'O', 'O', 'I'],
                ['I', 'O', 'O', 'O', 'I'],
                ['I', 'O', 'O', 'O', 'I'],
                ['W', 'I', 'I', 'I', 'W']
            ],
            [
                ['I', 'O', 'O', 'O', 'I'],
                ['O', 'R', 'R', 'R', 'O'],
                ['O', 'R', 'O', 'R', 'O'],
                ['O', 'R', 'R', 'R', 'O'],
                ['I', 'O', 'O', 'O', 'I']
            ],
            [
                ['S', 'O', 'O', 'O', 'S'],
                ['O', 'R', 'O', 'R', 'O'],
                ['O', 'O', 'O', 'O', 'O'],
                ['O', 'R', 'O', 'R', 'O'],
                ['S', 'O', 'O', 'O', 'S']
            ],
            [
                ['E', 'O', 'O', 'O', 'E'],
                ['O', 'R', 'R', 'R', 'O'],
                ['O', 'R', 'O', 'R', 'O'],
                ['O', 'R', 'R', 'R', 'O'],
                ['E', 'O', 'O', 'O', 'E']
            ],
            [
                ['B', 'E', 'E', 'E', 'B'],
                ['E', 'O', 'O', 'O', 'E'],
                ['E', 'O', 'O', 'O', 'E'],
                ['E', 'O', 'O', 'O', 'E'],
                ['B', 'E', 'E', 'E', 'B']
            ]
        ], 
        {
            'I': 'psi:ivory_psimetal_block',
            'E': 'psi:ebony_psimetal_block',
            'W': 'thermal:white_rockwool',
            'B': 'thermal:black_rockwool',
            'R': 'compactmachines:wall',
            'S': 'immersiveengineering:sheetmetal_steel',
            'O': 'minecraft:air'   
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
        }, "mana_pool")
    ]

    function miniaturization(catalyst, incount, output, outcount, shape, key, id) {
        const components = {};
        for (const symbol in key) { components[symbol] = { 'type': 'compactcrafting:block', 'block': key[symbol] }}
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

    //General Miniaturization Function
    recipes.forEach(recipe => {
        event.custom(recipe.json).id('compactcrafting:miniaturization/' + recipe.id)
    })
})

