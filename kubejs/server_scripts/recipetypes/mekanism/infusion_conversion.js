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
            id: "radiance/from_enriched",
            input: parseIngredient('mekaevolution:enriched_radiance'),
            output: MekaInfuseType("mekaevolution:radiance", 80)
        },
        {
            id: "radiance/from_dust",
            input: parseIngredient('mekanism:dust_refined_glowstone'),
            output: MekaInfuseType("mekaevolution:radiance", 10)
        },
        {
            id: "thermonuclear/from_enriched",
            input: parseIngredient('mekaevolution:enriched_thermonuclear'),
            output: MekaInfuseType("mekaevolution:thermonuclear", 80)
        },
        {
            id: "thermonuclear/from_crystal",
            input: parseIngredient('mekanism:crystal_hypernitro'),
            output: MekaInfuseType("mekaevolution:thermonuclear", 10)
        },
        {
            id: "shining/from_dust",
            input: parseIngredient('mekanism:antispark_dust'),
            output: MekaInfuseType("mekaevolution:shining", 10)
        },
        {
            id: "shining/from_enriched",
            input: parseIngredient('mekaevolution:enriched_shining'),
            output: MekaInfuseType("mekaevolution:shining", 80)
        },
        {
            id: "spectrum/from_enriched",
            input: parseIngredient('mekaevolution:enriched_spectrum'),
            output: MekaInfuseType("mekaevolution:spectrum", 80)
        },
        {
            id: "ionium/from_dust",
            input: parseIngredient('mekanism:dust_lithium'),
            output: MekaInfuseType("mekanism:ionium", 10)
        },
        {
            id: "ionium/from_enriched",
            input: parseIngredient('mekanism:enriched_ionium'),
            output: MekaInfuseType("mekanism:ionium", 80)
        },
        {
            id: "iridium/from_dust",
            input: parseIngredient('alltheores:iridium_dust'),
            output: MekaInfuseType("mekanism:iridium", 10)
        },
        {
            id: "iridium/from_enriched",
            input: parseIngredient('mekanism:enriched_iridium'),
            output: MekaInfuseType("mekanism:iridium", 80)
        },
        {
            id: "lapis_lazuli/from_gem",
            input: parseIngredient('minecraft:lapis_lazuli'),
            output: MekaInfuseType("mekanism:lapis_lazuli", 10)
        },
        {
            id: "lapis_lazuli/from_enriched",
            input: parseIngredient('mekanism:enriched_lapis_lazuli'),
            output: MekaInfuseType("mekanism:lapis_lazuli", 80)
        },
        {
            id: "psimetal/from_ingot",
            input: parseIngredient('psi:psimetal'),
            output: MekaInfuseType("mekanism:psimetal", 10)
        },
        {
            id: "psimetal/from_enriched",
            input: parseIngredient('mekanism:enriched_psimetal'),
            output: MekaInfuseType("mekanism:psimetal", 80)
        },
        {
            id: "source/from_gem",
            input: parseIngredient('ars_nouveau:source_gem'),
            output: MekaInfuseType("mekanism:source", 10)
        },
        {
            id: "source/from_enriched",
            input: parseIngredient('mekanism:enriched_source'),
            output: MekaInfuseType("mekanism:source", 80)
        }
    ]

    //General Infusion Cnversion Function
    recipes.forEach(recipe => {
        let json = {
            type: 'mekanism:infusion_conversion',
            input: { "ingredient": recipe.input },
            output: recipe.output
        }
        event.custom(json).id(`mekanism:infusion_conversion/${recipe.id}`)
    })
})