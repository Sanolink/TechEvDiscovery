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
    let recipes = [
        {
            id: 'nature_stone',
            output: 'blue_skies:nature_stone',
            below: 'blue_skies:nature_stone',
            adjacent: "minecraft:water"
        },
        {
            id: 'poison_stone',
            output: 'blue_skies:poison_stone',
            below: 'blue_skies:poison_stone',
            adjacent: "minecraft:water"
        },
        {
            id: 'sky_stone',
            output: 'ae2:sky_stone_block',
            below: 'ae2:sky_stone_block',
            adjacent: "minecraft:water"
        },
        {
            id: 'shiverstone',
            output: 'undergarden:shiverstone',
            adjacent: "undergarden:virulent_mix"
        }
    ]

    //General Rock Gen Function
    recipes.forEach((recipe) => {
    event.recipes.thermal.rock_gen(recipe.output, recipe.below || "minecraft:air", recipe.adjacent).id("thermal:devices/rock_gen/rock_gen_" + recipe.id);
    });
})