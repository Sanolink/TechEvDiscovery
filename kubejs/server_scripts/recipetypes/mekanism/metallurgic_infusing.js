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
        {
            id: "alloy/radiance",
            chemicalInput: MekaInfuseType("mekaevolution:radiance", 40),
            itemInput: parseIngredient('mekanism:alloy_atomic'),
            output: parseIngredient('mekaevolution:alloy_radiance')
        },
        {
            id: "alloy/thermonuclear",
            chemicalInput: MekaInfuseType("mekaevolution:thermonuclear", 40),
            itemInput: parseIngredient('mekaevolution:alloy_radiance'),
            output: parseIngredient('mekaevolution:alloy_thermonuclear')
        },
        {
            id: "alloy/shining",
            chemicalInput: MekaInfuseType("mekaevolution:shining", 80),
            itemInput: parseIngredient('mekaevolution:alloy_thermonuclear'),
            output: parseIngredient('mekaevolution:alloy_shining')
        },
        {
            id: "alloy/spectrum",
            chemicalInput: MekaInfuseType("mekaevolution:spectrum", 80),
            itemInput: parseIngredient('mekaevolution:alloy_shining'),
            output: parseIngredient('mekaevolution:alloy_spectrum')
        },
        {
            id: "dust/from_glowstone_dust",
            chemicalInput: MekaInfuseType("mekanism:ionium", 10),
            itemInput: parseIngredient('minecraft:glowstone_dust'),
            output: parseIngredient('mekanism:dust_refined_glowstone')
        },
        {
            id: "steel_casing",
            chemicalInput: MekaInfuseType("mekanism:carbon", 40),
            itemInput: parseIngredient('thermal:machine_frame'),
            output: parseIngredient('mekanism:steel_casing')
        },
        {
            id: "blue_quartz",
            chemicalInput: MekaInfuseType("mekanism:lapis_lazuli", 10),
            itemInput: parseIngredient('minecraft:quartz'),
            output: parseIngredient('create:blue_quartz')
        },
        {
            id: "psi_quartz",
            chemicalInput: MekaInfuseType("mekanism:psimetal", 10),
            itemInput: parseIngredient('minecraft:quartz'),
            output: parseIngredient('create:psi_quartz')
        },
        {
            id: "source_quartz",
            chemicalInput: MekaInfuseType("mekanism:source", 10),
            itemInput: parseIngredient('minecraft:quartz'),
            output: parseIngredient('create:source_quartz')
        }
    ]

    //General Metallurgic Infusing Function
    recipes.forEach(recipe => {
        let json = {
            type: 'mekanism:metallurgic_infusing',
            chemicalInput: recipe.chemicalInput,
            itemInput: { "ingredient": recipe.itemInput },
            output: recipe.output
        }
        event.custom(json).id(`mekanism:metallurgic_infusing/${recipe.id}`)
    })
})