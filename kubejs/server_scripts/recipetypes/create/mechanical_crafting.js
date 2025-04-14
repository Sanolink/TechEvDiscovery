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
        //Time In A Bottle
        {
            id: "time_in_a_bottle",
            output: "tiab:time_in_a_bottle",
            shape: [
                ' DDD ',
                ' DCD ',
                '  H  ',
                ' AMA ',
                'AENEA',
                'AUFUA',
                'AESEA',
                ' AAA ',
            ],
            key: {
                D: 'forbidden_arcanus:deorum_block',
                C: 'minecraft:clock',
                H: 'supplementaries:hourglass',
                A: 'blue_skies:aquite_block',
                M: 'occultism:dimensional_matrix',
                E: 'ars_nouveau:manipulation_essence',
                N: 'forbidden_arcanus:dark_nether_star',
                F: 'tiab:flowing_time',
                U: 'forbidden_arcanus:mundabitur_dust',
                S: 'forbidden_arcanus:sanity_meter'
            }
        }
    ]

    //General Mechanical Crafting Function
    recipes.forEach(recipe => {
        event.recipes.create.mechanical_crafting(recipe.output, recipe.shape, recipe.key).id("create:mechanical_crafting/" + recipe.id)
    })

})