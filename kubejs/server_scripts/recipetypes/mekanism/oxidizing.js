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
            id: "hypermatter",
            input: parseIngredient("mekanism:pellet_hypermatter"),
            output: MekaGas("mekanism:hypermatter", 1000)
        },
        {
            id: "essence_wasted_radioactive",
            input: parseIngredient("mysticalagriculture:wasted_radioactive_essence"),
            output: MekaGas("mekanism:nuclear_waste", 500)
        },
        {
            id: "antimatter",
            input: parseIngredient("ftbic:antimatter"),
            output: MekaGas("mekanism:antimatter", 100)
        }
    ]

    //General Oxidizing Function
    recipes.forEach(recipe => {
        let json = {
            type: 'mekanism:oxidizing',
            input: { "ingredient": recipe.input },
            output: recipe.output
        }
        event.custom(json).id(`mekanism:oxidizing/${recipe.id}`)
    })
})
