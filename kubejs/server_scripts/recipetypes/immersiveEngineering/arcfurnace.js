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
            id: 'deep_learner',
            input: parseIngredient('occultism:otherstone_tablet'),
            additives: [parseIngredient('ae2:engineering_processor'), parseIngredient('ae2:wireless_receiver'), parseIngredient('thermal:flux_capacitor')],
            output: [parseIngredient('hostilenetworks:deep_learner')],
            time: 600,
            energy: 307200
        },
        {
            id: 'slag_glass',
            input: parseIngredient('thermal:slag'),
            output: [parseIngredient('immersiveengineering:slag_glass')],
            energy: 25600
        }
    ]

   //General Arc Furnace Function
    recipes.forEach(recipe => {
        let json = {
            type: 'immersiveengineering:arc_furnace',
            input: recipe.input,
            additives: recipe.additives || [],
            results: recipe.output,
            time: recipe.time || 100,
            energy: recipe.energy || 51200
        }
        if (recipe.secondaries) { json.secondaries = recipe.secondaries}
        if (recipe.slag) { json.slag = recipe.slag}
        event.custom(json).id(`immersiveengineering:arc_furnace/${recipe.id}`)
    })
})