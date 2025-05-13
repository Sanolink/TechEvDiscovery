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
(_____)         Last Modification : 1.3.4         (_____)

*/

ServerEvents.recipes(event => {

    //Recipes
    let recipes = [
        {
            output: 'undergarden:shiverstone',
            adjacent: "undergarden:virulent_mix"
        }
    ]

    const waterBased = [
        'blue_skies:nature_stone',
        'blue_skies:poison_stone',
        'ae2:sky_stone_block',
        'minecraft:calcite',
        'minecraft:tuff',
        'minecraft:diorite',
        'minecraft:andesite',
        'minecraft:granite',
        'blue_skies:turquoise_cobblestone',
        'byg:cobbled_ether_stone',
        'byg:purpur_stone',
        'create:limestone',
        'quark:permafrost',
        'quark:myalite',
        'quark:shale',
        'quark:jasper',
        'quark:limestone',
        'byg:cryptic_stone'
    ].forEach(output => {
        recipes.push(
            {
                output: output,
                below: output,
                adjacent: "minecraft:water"
            }
        )
    })


    //General Rock Gen Function
    recipes.forEach((recipe) => {
    event.recipes.thermal.rock_gen(recipe.output, recipe.below || "minecraft:air", recipe.adjacent).id("thermal:devices/rock_gen/rock_gen_" + recipe.output.split(":")[1]);
    });
})