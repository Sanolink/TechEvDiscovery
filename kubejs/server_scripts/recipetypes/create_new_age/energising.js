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
        {
            id: "magnetite_block",
            input: [parseIngredient("createdeco:cast_iron_sheet_metal")],
            output: [parseIngredient("create_new_age:magnetite_block")]
        },
        {
            id: "overcharged_iron_gear",
            energy: 4000,
            input: [parseIngredient("alltheores:iron_gear")],
            output: [parseIngredient("create_new_age:overcharged_iron_gear")]
        },
        {
            id: "overcharged_iron_rod",
            energy: 500,
            input: [parseIngredient("alltheores:iron_rod")],
            output: [parseIngredient("create_new_age:overcharged_iron_rod")]
        },
        {
            id: "overcharged_iron_dust",
            energy: 1000,
            input: [parseIngredient("alltheores:iron_dust")],
            output: [parseIngredient("create_new_age:overcharged_iron_dust")]
        },
        {
            id: "overcharged_golden_gear",
            energy: 8000,
            input: [parseIngredient("alltheores:gold_gear")],
            output: [parseIngredient("create_new_age:overcharged_golden_gear")]
        },
        {
            id: "overcharged_golden_rod",
            energy: 1000,
            input: [parseIngredient("alltheores:gold_rod")],
            output: [parseIngredient("create_new_age:overcharged_golden_rod")]
        },
        {
            id: "overcharged_golden_dust",
            energy: 2000,
            input: [parseIngredient("alltheores:gold_dust")],
            output: [parseIngredient("create_new_age:overcharged_golden_dust")]
        }
    ]

   //General Energising Function
    recipes.forEach(recipe => {
        let json = {
            type: 'create_new_age:energising',
            energy_needed: recipe.energy || 2000,
            ingredients: recipe.input,
            results: recipe.output
        }
        event.custom(json).id(`create_new_age:energising/${recipe.id}`)
    })
})
