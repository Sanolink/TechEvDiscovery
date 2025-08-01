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
            id: "hypermatter",
            duration: 10,
            fluidInput: FluidWithCount("mekanism:hyperphasium", 10),
            gasInput: MekaGas("mekanism:plutonium", 10000),
            gasOutput: MekaGas("mekanism:hypermatter", 10),
            itemInput: parseIngredient('ae2:matter_ball')
        }
    ]

    //General Reaction Function
    recipes.forEach(recipe => {
        let json = {
            type: 'mekanism:reaction',
            duration: recipe.duration || 100,
            fluidInput: recipe.fluidInput,
            gasInput: recipe.gasInput,
            gasOutput: recipe.gasOutput,
            itemInput: { ingredient: recipe.itemInput }
        }
        if (recipe.itemOutput) json.itemOutput = recipe.itemOutput
        event.custom(json).id(`mekanism:reaction/${recipe.id}`)
    })
})

