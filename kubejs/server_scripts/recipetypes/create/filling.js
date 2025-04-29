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
        {
            id: 'molten_redstone',
            output: 'create:rose_quartz',
            input: [Fluid.of("thermal:redstone", 200), 'minecraft:quartz']
        },
        {
            id: 'molten_lapis',
            output: 'create:blue_quartz',
            input: [Fluid.of("create:molten_lapis", 200), 'minecraft:quartz']
        },
        {
            id: 'molten_source',
            output: 'create:source_quartz',
            input: [Fluid.of("create:molten_source", 200), 'minecraft:quartz']
        },
        {
            id: 'molten_psi',
            output: 'create:psi_quartz',
            input: [Fluid.of("psi:destabilized_psimetal", 200), 'minecraft:quartz']
        }
    ]
    //General Filling Function
    recipes.forEach(recipe => {

        event.recipes.create.filling(recipe.output, recipe.input).id("create:filling/" + recipe.id)

    })
})
