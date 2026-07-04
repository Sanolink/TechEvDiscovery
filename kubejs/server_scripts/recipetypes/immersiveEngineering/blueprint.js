/* 
 _____                                             _____ 
( ___ ) © SanoLink 2024/2026. All rights reserved.( ___ )
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
(_____)         Last Modification : 1.5.2         (_____)

*/

ServerEvents.recipes(event => {

    //Recipes
    let recipes = [
        {
            id: "mana_cell_housing",
            output: parseIngredient('appbot:mana_cell_housing'),
            inputs: [
                IEChanceOrCountIngredient('botania:manasteel_ingot', 3),
                IEChanceOrCountIngredient('botania:life_essence', 3),
                IEChanceOrCountIngredient('ae2:quartz_glass', 2)
            ],
            blueprint: "appliedComponents"
        },
        {
            id: "fluid_cell_housing",
            output: parseIngredient('ae2:fluid_cell_housing'),
            inputs: [
                IEChanceOrCountIngredient('minecraft:copper_ingot', 3),
                IEChanceOrCountIngredient('ae2:silicon', 3),
                IEChanceOrCountIngredient('ae2:quartz_glass', 2)
            ],
            blueprint: "appliedComponents"
        },
        {
            id: "source_cell_housing",
            output: parseIngredient('arseng:source_cell_housing'),
            inputs: [
                IEChanceOrCountIngredient('minecraft:gold_ingot', 3),
                IEChanceOrCountIngredient('ars_nouveau:source_gem', 3),
                IEChanceOrCountIngredient('ae2:quartz_glass', 2)
            ],
            blueprint: "appliedComponents"
        },
        {
            id: "item_cell_housing",
            output: parseIngredient('ae2:item_cell_housing'),
            inputs: [
                IEChanceOrCountIngredient('minecraft:iron_ingot', 3),
                IEChanceOrCountIngredient('ae2:silicon', 3),
                IEChanceOrCountIngredient('ae2:quartz_glass', 2)
            ],
            blueprint: "appliedComponents"
        },
        {
            id: "disk_housing",
            output: parseIngredient('ae2things:disk_housing'),
            inputs: [
                IEChanceOrCountIngredient('minecraft:netherite_ingot', 3),
                parseIngredient('forbidden_arcanus:dark_nether_star'),
                IEChanceOrCountIngredient('ae2:quartz_glass', 2)
            ],
            blueprint: "appliedComponents"
        },
        {
            id: "material_component_oscillating",
            output: parseIngredient('immersiveengineering:material_component_oscillating'),
            inputs: [
                parseIngredient('#forge:treated_wood_slab'),
                parseIngredient('minecraft:amethyst_shard'),
                parseIngredient('minecraft:redstone'),
                parseIngredient('immersiveengineering:wire_lead')
            ],
            blueprint: "components"
        },
        {
            id: "mold_coin",
            output: parseIngredient('immersiveengineering:mold_coin'),
            inputs: [
                IEChanceOrCountIngredient('#forge:plates/steel', 3),
                parseIngredient('immersiveengineering:wirecutter')
            ],
            blueprint: "molds"
        }
    ]

   //General Blueprint Function
    recipes.forEach(recipe => {
        let json = {
            type: 'immersiveengineering:blueprint',
            inputs: recipe.inputs,
            result: recipe.output,
            category: recipe.blueprint
        }
        event.custom(json).id(`immersiveengineering:blueprint/${recipe.id}`)
    })
})