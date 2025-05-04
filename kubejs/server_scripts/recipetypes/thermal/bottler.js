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
(_____)         Last Modification : 1.3.0         (_____)

*/

ServerEvents.recipes(event => {
    
    //Recipes
    const recipes = [
        
    //Blank Data Model
    {
        id : 'blank_data_model',
        output : 'hostilenetworks:blank_data_model',
        ingredients : ['hostilenetworks:inert_data_model', Fluid.of('industrialforegoing:ether_gas', 100)]
    },
    {
        id : 'sludge_bottle',
        output : 'industrialforegoing:sludge_bottle',
        ingredients : ['minecraft:glass_bottle', Fluid.of("industrialforegoing:sludge", 250)]
    }
]

    //General Bottler Function
    recipes.forEach((recipe) => {
        event.recipes.thermal.bottler(recipe.output, recipe.ingredients).id("thermal:machines/bottler/bottler_" + recipe.id)
    })
})