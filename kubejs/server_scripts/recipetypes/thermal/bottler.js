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
            id : 'blank_data_model',
            ingredients : [parseIngredient('hostilenetworks:inert_data_model'), FluidWithCount('industrialforegoing:ether_gas', 100)],
            output : parseIngredient('hostilenetworks:blank_data_model')
        },
        {
            id : 'sludge_bottle',
            ingredients : [parseIngredient('minecraft:glass_bottle'), FluidWithCount("industrialforegoing:sludge", 250)],
            output : parseIngredient('industrialforegoing:sludge_bottle')
        }
    ]

    //General Bottler Function
    recipes.forEach(recipe => {
        let json = {
            type: 'thermal:bottler',
            ingredients: recipe.ingredients,
            result: recipe.output,
            experience: recipe.experience || 0.0,
            energy: recipe.energy || 400
        }
        event.custom(json).id(`thermal:machines/bottler/bottler_${recipe.id}`)
    })
})