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
         //Cosmic Compressor
        {
            output: "ad_astra:compressor",
            pattern: ["NTN", "TMT", "CDC"],
            key: {
                N: 'ad_astra:nephryx_gear',
                T: 'thermal_extra:machine_speed_augment_4',
                M: 'thermal:machine_press',
                C: 'pneumaticcraft:compressed_iron_gear',
                D: 'thermal_extra:upgrade_augment'
            }
        },
        //Nephryx
        {
            output: 'ad_astra:raw_nephryx_block',
            pattern: ["NNN", "NNN", "NNN"],
            key: {
                N: 'ad_astra:raw_nephryx'
            }
        },
        {
            output: 'ad_astra:nephryx_block',
            pattern: ["NNN", "NNN", "NNN"],
            key: {
                N: 'ad_astra:nephryx_ingot'
            }
        },
        {
            output: 'ad_astra:nephryx_ingot',
            pattern: ["NNN", "NNN", "NNN"],
            key: {
                N: 'ad_astra:nephryx_nugget'
            }
        }
    ]

    const shapeless = [
        //Nephryx
        {
            output: '9x ad_astra:raw_nephryx',
            input: 'ad_astra:raw_nephryx_block'
        },
        {
            output: '9x ad_astra:nephryx_ingot',
            input: 'ad_astra:nephryx_block'
        },
        {
            output: '9x ad_astra:nephryx_nugget',
            input: 'ad_astra:nephryx_ingot'
        }
    ]

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.output)
    })

    shapeless.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.input).id(recipe.output.split(":")[1])
    })
 })