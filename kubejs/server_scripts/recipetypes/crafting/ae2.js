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
         //Printed Cosmic Processor
        {
            output: "ae2:printed_cosmic_processor",
            pattern: ["OCO"],
            key: {
                O: 'ad_astra:ostrum_gear',
                C: 'ae2:printed_calculation_processor'
            }
        }
    ]
    const shapeless = [
        // Meteorite Compass
        {
            output: 'ae2:meteorite_compass',
            input: ['minecraft:compass', 'ae2:charged_certus_quartz_crystal']
        },
        // Guide
        {
            output: 'ae2:guide',
            input: ['minecraft:book', 'ae2:charged_certus_quartz_crystal']
        }
    ]
 
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.output)
    })

    shapeless.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.input).id(recipe.output)
    })
 })