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
        id : 'resonant_machine_frame',
        input : [
            'botania:third_eye', 'thermal:machine_frame', 'botania:third_eye',
            'thermal_extra:dragonsteel_ingot', 'thermal_extra:dragonsteel_ingot',
            'thermalendergy:stellarium_gear', 'immersiveengineering:component_electronic_adv', 'thermalendergy:stellarium_gear'
        ],
        fluid : Fluid.of('thermal:ender', 1000),
        output : 'kubejs:resonant_machine_frame',
        time : 300,
    }
]

    //General Dissolution Chamber Function
    recipes.forEach((recipe) => {
        event.recipes.industrialforegoing.dissolution_chamber(recipe.input, recipe.fluid, recipe.output, recipe.time).id("industrialforegoing:dissolution_chamber/" + recipe.id)
    })
})