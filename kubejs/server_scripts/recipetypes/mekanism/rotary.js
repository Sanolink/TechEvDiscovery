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
            id: "hyperphasium",
            fluid: FluidWithCount("mekanism:hyperphasium", 1),
            gas: MekaGas("mekanism:hyperphasium", 1),
        }
    ]

    //General Rotary Function
    recipes.forEach(recipe => {
        let json = {
            type: 'mekanism:rotary',
            fluidInput: recipe.fluid,
            fluidOutput: recipe.fluid,
            gasInput: recipe.gas,
            gasOutput: recipe.gas
        }
        event.custom(json).id(`mekanism:rotary/${recipe.id}`)
    })
})
