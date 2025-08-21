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
(_____)         Last Modification : 1.4.3         (_____)

*/

ServerEvents.recipes(event => {

    const recipes = [
        {
            id: "cad_assembly_gold",
            output : [parseIngredient('psi:cad_assembly_gold')],
            input : [
                parseIngredient('psi:cad_assembly_iron'),
                parseIngredient('alltheores:gold_gear')
            ]
        }
    ]
    
    //General Deploying Function
    recipes.forEach(recipe => {
        let json = {
            type: 'create:deploying',
            ingredients: recipe.input,
            results: recipe.output,
        }
        if (recipe.keep) { json.keepHeldItem = recipe.keep }
        event.custom(json).id(`create:deploying/${recipe.id}`)
    })
})
