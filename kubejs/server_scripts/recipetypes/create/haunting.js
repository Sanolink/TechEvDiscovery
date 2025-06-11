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
    const recipes = [
        {
            id: "gravel",
            input: [parseIngredient("minecraft:gravel")],
            output: [parseIngredient("minecraft:tuff")]
        },
        {
            id: "soulless_sand",
            input: [parseIngredient("forbidden_arcanus:soulless_sand")],
            output: [parseIngredient("minecraft:soul_sand")]
        }
    ]

   //General Haunting Function
    recipes.forEach(recipe => {
        let json = {
            type: 'create:haunting',
            ingredients: recipe.input,
            results: recipe.output
        }
        event.custom(json).id(`create:haunting/${recipe.id}`)
    })
})
