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
(_____)         Last Modification : 1.4.12        (_____)

*/

ServerEvents.recipes(event => {

    //Recipes 
    const recipes = [
        {
            id: "ender_ingot",
            mainInput: MekaParseIngredient('minecraft:iron_ingot'),
            extraInput: MekaParseIngredient('minecraft:ender_pearl'),
            output: parseIngredient('extendedcrafting:ender_ingot')
        },
        {
            id: "redstone_ingot",
            mainInput: MekaParseIngredient('minecraft:iron_ingot'),
            extraInput: MekaParseIngredient('minecraft:redstone'),
            output: parseIngredient('extendedcrafting:redstone_ingot')
        }
    ]

    const ATORawOresToOres = [
        'nickel',
        'platinum',
        'silver',
        'zinc',
        'iridium'
    ].forEach(ore => {
        recipes.push(
            {
                id: `${ore}/ore/from_raw`,
                mainInput: MekaCountIngredient(`#forge:raw_materials/${ore}`, 8),
                extraInput: MekaParseIngredient('minecraft:cobblestone'),
                output: parseIngredient(`alltheores:${ore}_ore`)
            },
            {
                id: `${ore}/ore/deepslate_from_raw`, 
                mainInput: MekaCountIngredient(`#forge:raw_materials/${ore}`, 8),
                extraInput: MekaParseIngredient('minecraft:cobbled_deepslate'),
                output: parseIngredient(`alltheores:deepslate_${ore}_ore`)
            }
        )
    })

    //General Combining Function
    recipes.forEach(recipe => {
        let json = {
            type: 'mekanism:combining',
            mainInput: recipe.mainInput,
            extraInput: recipe.extraInput,
            output: recipe.output
        }
        event.custom(json).id(`mekanism:combining/${recipe.id}`)
    })
})
