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

ServerEvents.recipes(event => {

    //Recipes 
    const recipes = [
        {
            id: "ender_ingot",
            mainInput: parseIngredient('minecraft:iron_ingot'),
            extraInput: parseIngredient('minecraft:ender_pearl'),
            output: parseIngredient('extendedcrafting:ender_ingot')
        },
        {
            id: "redstone_ingot",
            mainInput: parseIngredient('minecraft:iron_ingot'),
            extraInput: parseIngredient('minecraft:redstone'),
            output: parseIngredient('extendedcrafting:redstone_ingot')
        }
    ]

    //General Combining Function
    recipes.forEach(recipe => {
        let json = {
            type: 'mekanism:combining',
            mainInput: { ingredient: recipe.mainInput },
            extraInput: { ingredient: recipe.extraInput },
            output: recipe.output
        }
        event.custom(json).id(`mekanism:combining/${recipe.id}`)
    })
})
