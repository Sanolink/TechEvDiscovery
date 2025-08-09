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
            id: "hydrofluoric_acid_from_block_apatite",
            gasInput: MekaGas("mekanism:sulfuric_acid", 9),
            itemInput: parseIngredient("thermal:apatite_block"),
            output: MekaGas("mekanism:hydrofluoric_acid", 2250)
        },
        {
            id: "hydrofluoric_acid_apatite",
            gasInput: MekaGas("mekanism:sulfuric_acid", 1),
            itemInput: parseIngredient("thermal:apatite"),
            output: MekaGas("mekanism:hydrofluoric_acid", 250)
        },
    ]

    //General Dissolution Function
    recipes.forEach(recipe => {
        let json = {
            type: 'mekanism:dissolution',
            gasInput: recipe.gasInput,
            itemInput: { "ingredient": recipe.itemInput },
            output: recipe.output
        }
        event.custom(json).id(`mekanism:dissolution/${recipe.id}`)
    })
})
