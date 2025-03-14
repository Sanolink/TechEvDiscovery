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

    //Remove
    event.remove({ id: 'immersiveengineering:blueprint/graphite_electrode'})

    //Recipes
    let recipes = [
        {
            output: 'appbot:mana_cell_housing',
            inputs: ['3x botania:manasteel_ingot', '3x botania:life_essence', '2x ae2:quartz_glass'],
            blueprint: "appliedComponents"
        },
        {
            output: 'ae2:fluid_cell_housing',
            inputs: ['3x minecraft:copper_ingot', '3x ae2:silicon', '2x ae2:quartz_glass'],
            blueprint: "appliedComponents"
        },
        {
            output: 'arseng:source_cell_housing',
            inputs: ['3x minecraft:gold_ingot', '3x ars_nouveau:source_gem', '2x ae2:quartz_glass'],
            blueprint: "appliedComponents"
        },
        {
            output: 'ae2:item_cell_housing',
            inputs: ['3x minecraft:iron_ingot', '3x ae2:silicon', '2x ae2:quartz_glass'],
            blueprint: "appliedComponents"
        },
        {
            output: 'ae2things:disk_housing',
            inputs: ['3x minecraft:netherite_ingot', 'forbidden_arcanus:dark_nether_star', '2x ae2:quartz_glass'],
            blueprint: "appliedComponents"
        }
    ]

    //General Blueprint Function
    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.blueprint(recipe.output, recipe.inputs, recipe.blueprint)
    })
})