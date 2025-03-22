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
    
    const recipes = [
        {
            id: "gjallar_horn_empty",
            ingredients: [{item:"botania:horn_grass"}],
            output: [{item:"mythicbotany:gjallar_horn_empty"}]
        },
        {
            id: "kvasir_mead",
            ingredients: [{item:"mythicbotany:kvasir_blood"}, {item:"minecraft:honey_bottle"}],
            output: [{item:"mythicbotany:kvasir_mead"}]
        },
    ]

    //General Dark Elven Trade Function
    recipes.forEach((recipe) => {
        recipe.type = "techev_additions:dark_elven_trade",
        event.custom(recipe).id("techev_additions:dark_elven_trade/" + recipe.id)
    })
})
