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
        //Absolute Control Circuit
        {
            output: 'mekaevolution:absolute_control_circuit',
            pattern: ["LPL", "ACA", "LPL"],
            key: {
                L: '#forge:plates/lumium',
                P: 'ae2:logic_processor',
                A: 'mekaevolution:alloy_radiance',
                C: 'mekanism:ultimate_control_circuit'
            }
        },
        //Supreme Control Circuit
        {
            output: 'mekaevolution:supreme_control_circuit',
            pattern: ["LPL", "ACA", "LPL"],
            key: {
                L: '#forge:plates/calorite',
                P: 'ae2:cosmic_processor',
                A: 'mekaevolution:alloy_thermonuclear',
                C: 'mekaevolution:absolute_control_circuit'
            }
        },
        //Cosmic Control Circuit
        {
            output: 'mekaevolution:cosmic_control_circuit',
            pattern: ["EPE", "ACA", "EPE"],
            key: {
                E: '#forge:plates/elementium',
                P: 'create:psi_tube',
                A: 'mekaevolution:alloy_shining',
                C: 'mekaevolution:supreme_control_circuit'
            }
        }
    ]

    recipes.forEach(recipe => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.output)
    })



})