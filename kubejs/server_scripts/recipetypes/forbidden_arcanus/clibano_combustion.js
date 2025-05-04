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
        {
            id: "obsidian_ingot",
            cooking_time: 100,
            experience: 0.35,
            ingredient: {item: "forbidden_arcanus:obsidian_with_iron"},
            result: "forbidden_arcanus:obsidian_ingot"
        },
        {
            id: "soul_steel",
            cooking_time: 150,
            experience: 1.0,
            fire_type: "soul_fire",
            ingredient: {item: "alltheores:steel_ingot"},
            result: "spirit:soul_steel_ingot"
        },
        {
            id: "soul_steel_block",
            cooking_time: 150,
            experience: 1.0,
            fire_type: "soul_fire",
            ingredient: {item: "alltheores:steel_block"},
            result: "spirit:soul_steel_block"
        }
        
    ]

    //General Clibano Combustion Function
    recipes.forEach((recipe) => {
        recipe.type = "forbidden_arcanus:clibano_combustion",
        event.custom(recipe).id("forbidden_arcanus:clibano_combustion/" + recipe.id)
    })
})