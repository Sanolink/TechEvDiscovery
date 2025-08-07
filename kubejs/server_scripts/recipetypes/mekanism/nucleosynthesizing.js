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
            id: "antispark_dust",
            gasInput: MekaGas("mekanism:antimatter", 200),
            itemInput: parseIngredient('enigmaticlegacy:astral_dust'),
            output: parseIngredient('mekanism:antispark_dust')
        },
        {
            id: "antimatter_quartz",
            gasInput: MekaGas("mekanism:antimatter", 1000),
            itemInput: parseIngredient('minecraft:quartz'),
            output: parseIngredient('create:antimatter_quartz')
        }
    ]

    //General Nucleosynthesizing Function
    recipes.forEach(recipe => {
        let json = {
            type: 'mekanism:nucleosynthesizing',
            duration: recipe.duration || 200,
            gasInput: recipe.gasInput,
            itemInput: { "ingredient": recipe.itemInput },
            output: recipe.output
        }
        event.custom(json).id(`mekanism:nucleosynthesizing/${recipe.id}`)
    })
})