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
        //Time In A Bottle
        {
            id: "time_in_a_bottle",
            output: parseIngredient("tiab:time_in_a_bottle"),
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
        },
        //ME Controller
        {
            id: "me_controller",
            output: parseIngredient("ae2:controller"),
            shape: [
                ' AYA ',
                'ALECA',
                'RNING',
                'ACELA',
                ' ABA ',
            ],
            key: {
                Y: 'ae2:yellow_lumen_paint_ball', 
                R: 'ae2:red_lumen_paint_ball',
                G: 'ae2:green_lumen_paint_ball',
                B: 'ae2:blue_lumen_paint_ball',
                A: 'create_new_age:reactor_casing',
                L: 'ae2:logic_processor',
                E: 'ae2:elemental_processor',
                C: 'ae2:calculation_processor',
                N: 'ae2:engineering_processor',
                I: 'botania:corporea_index'
            }
        },
        {
            id: "redstone_servo",
            output: parseIngredient("thermal:redstone_servo"),
            shape: [
                'C C',
                ' S ',
                'C C',
            ],
            key: {
                S: 'powah:steel_energized', 
                C: 'thermal:signalum_coin',
            }
        },
        {
            id: "ender_servo",
            output: parseIngredient("thermal:ender_servo"),
            shape: [
                'C C',
                ' S ',
                'C C',
            ],
            key: {
                S: 'thermal_extra:shellite_ingot', 
                C: 'thermal:enderium_coin',
            }
        },
    ]

    //General Mechanical Crafting Function
    recipes.forEach(recipe => {
        let parsedKey = {}
        for (let key in recipe.key) {
            parsedKey[key] = parseIngredient(recipe.key[key])
        }

        let json = {
            type: 'create:mechanical_crafting',
            key: parsedKey,
            pattern: recipe.shape,
            result: recipe.output
        }
        event.custom(json).id(`create:mechanical_crafting/${recipe.id}`)
    })
})
