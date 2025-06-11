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
(_____)         Last Modification : 1.3.7         (_____)

*/

ServerEvents.recipes(event => {

    //Recipes
    let recipes = [
        {
            output: 'botania:fertilizer',
            input: 'minecraft:bone_meal',
            mana: 2500,
            catalyst: 'botania:floral_catalyst'
        }
    ]

    //General Mana Infusion Function
    recipes.forEach(recipe => {
        let json = {
            type: 'botania:mana_infusion',
            input: parseIngredient(recipe.input),
            output: { item: recipe.output },
            mana: recipe.mana,
        }
        if (recipe.catalyst) { json.catalyst = { type: "block", block: recipe.catalyst }}
        if (recipe.count) { json.output.count = recipe.count }
        event.custom(json).id(`botania:mana_infusion/${recipe.output.split(":")[1]}`)
    })
})