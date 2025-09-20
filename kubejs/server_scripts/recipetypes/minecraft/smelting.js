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
(_____)         Last Modification : 1.4.10        (_____)

*/

ServerEvents.recipes(event => {

    //Recipes
    const recipes = [
        {
            in: 'create:raw_andesite_alloy',
            out: 'create:andesite_alloy'
        },
        {
            in: 'ad_astra:mercury_nephryx_ore',
            out: 'ad_astra:nephryx_ingot'
        },
        {
            in: 'ad_astra:raw_nephryx',
            out: 'ad_astra:nephryx_ingot'
        },
        {
            in: 'ad_astra:desh_dust',
            out: 'ad_astra:desh_ingot'
        },
        {
            in: 'ad_astra:ostrum_dust',
            out: 'ad_astra:ostrum_ingot'
        },
        {
            in: 'ad_astra:calorite_dust',
            out: 'ad_astra:calorite_ingot'
        },
        {
            in: 'ad_astra:nephryx_dust',
            out: 'ad_astra:nephryx_ingot'
        }
    ]

    //General Smelting Function
    recipes.forEach((recipe) => {
        event.smelting(recipe.out, recipe.in).id(`minecraft:blasting/${recipe.out.split(":")[1]}_smelting_from_${recipe.in.split(":")[1]}`)
    })
})
