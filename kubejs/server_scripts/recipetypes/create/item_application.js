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
(_____)         Last Modification : 1.3.10        (_____)

*/

ServerEvents.recipes(event => {

    //Recipes
    const recipes = [
        {
            id: "energizer",
            input: [parseIngredient("create_new_age:reactor_casing"), parseIngredient("minecraft:lightning_rod")],
            output: [parseIngredient("create_new_age:energiser_t1")]
        }
    ]

   //General Item Application Function
    recipes.forEach(recipe => {
        let json = {
            type: 'create:item_application',
            ingredients: recipe.input,
            results: recipe.output
        }
        event.custom(json).id(`create:item_application/${recipe.id}`)
    })
})
