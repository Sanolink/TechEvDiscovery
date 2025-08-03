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
            id: 'raw_andesite_alloy',
            in: 'create:raw_andesite_alloy',
            out: 'create:andesite_alloy'
        },
        {
            id: 'mercury_nephryx_ore',
            in: 'ad_astra:mercury_nephryx_ore',
            out: 'ad_astra:nephryx_ingot'
        },
        {
            id: 'raw_nephryx',
            in: 'ad_astra:raw_nephryx',
            out: 'ad_astra:nephryx_ingot'
        }
    ]

    //General Blasting Function
    recipes.forEach((recipe) => {
        event.blasting(recipe.out, recipe.in).id('minecraft:blasting/' + recipe.id)
    })
})
