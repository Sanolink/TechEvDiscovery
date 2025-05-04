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
    
        //Inert Data Model
        {
            output: 'hostilenetworks:inert_data_model',
            pattern: ["UMU", "AEB", "UMU"],
            key: {
                U: 'undergarden:utherium_crystal',
                M: 'pneumaticcraft:module_expansion_card',
                A: 'ae2:advanced_card',
                E: 'powah:ender_core',
                B: 'ae2:basic_card'
            }
        },
    ]

    const shapeless = [
        {
            id: 'undergarden:depthrock_pebble',
            output: '64x undergarden:depthrock_pebble',
            input: ['hostilenetworks:undergarden_prediction', '#forge:cobblestone']
        },
        {
            id: 'undergarden:gloomgourd',
            output: '4x undergarden:gloomgourd',
            input: ['hostilenetworks:undergarden_prediction', 'minecraft:pumpkin']
        },
        {
            id: 'undergarden:gloomgourd_pie',
            output: '4x undergarden:gloomgourd_pie',
            input: ['hostilenetworks:undergarden_prediction', 'minecraft:pumpkin_pie']
        },
        {
            id: 'blue_skies:cherry',
            output: '8x blue_skies:cherry',
            input: ['hostilenetworks:blue_skies_prediction', 'minecraft:sweet_berries']
        },
        {
            id: 'blue_skies:blinding_stone',
            output: '8x blue_skies:blinding_stone',
            input: ['hostilenetworks:blue_skies_prediction', '#forge:stone']
        },
        {
            id: 'blue_skies:soul_fragment',
            output: '16x blue_skies:soul_fragment',
            input: ['hostilenetworks:blue_skies_prediction', 'forbidden_arcanus:soul']
        },
        {
            id: 'blue_skies:snowcap_pinhead',
            output: '8x blue_skies:snowcap_pinhead',
            input: ['hostilenetworks:blue_skies_prediction', '#forge:mushrooms']
        }
    ]

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.output)
    })

    shapeless.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.input).id(recipe.id)
    })
})