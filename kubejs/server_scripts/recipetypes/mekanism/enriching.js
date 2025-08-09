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
            id: "enriched_radiance",
            input: parseIngredient('mekanism:dust_refined_glowstone'),
            output: parseIngredient('mekaevolution:enriched_radiance'),
        },
        {
            id: "enriched_thermonuclear",
            input: parseIngredient('mekanism:crystal_hypernitro'),
            output: parseIngredient('mekaevolution:enriched_thermonuclear'),
        },
        {
            id: "enriched_ionium",
            input: parseIngredient('mekanism:dust_lithium'),
            output: parseIngredient('mekanism:enriched_ionium'),
        },
        {
            id: "enriched_iridium",
            input: parseIngredient('alltheores:iridium_dust'),
            output: parseIngredient('mekanism:enriched_iridium'),
        },
        {
            id: "enriched_shining",
            input: parseIngredient('mekanism:antispark_dust'),
            output: parseIngredient('mekaevolution:enriched_shining'),
        },
        {
            id: "enriched_spectrum",
            input: parseIngredient('mysticalagriculture:ultimate_essence'),
            output: parseIngredient('mekaevolution:enriched_spectrum'),
        },
        {
            id: "enriched_lapis_lazuli",
            input: parseIngredient('minecraft:lapis_lazuli'),
            output: parseIngredient('mekanism:enriched_lapis_lazuli'),
        },
        {
            id: "enriched_psimetal",
            input: parseIngredient('psi:psimetal'),
            output: parseIngredient('mekanism:enriched_psimetal'),
        },
        {
            id: "enriched_source",
            input: parseIngredient('ars_nouveau:source_gem'),
            output: parseIngredient('mekanism:enriched_source'),
        },
        {
            id: "polished_blue_quartz",
            input: parseIngredient('create:blue_quartz'),
            output: parseIngredient('create:polished_blue_quartz'),
        },
        {
            id: "polished_psi_quartz",
            input: parseIngredient('create:psi_quartz'),
            output: parseIngredient('create:polished_psi_quartz'),
        },
        {
            id: "polished_source_quartz",
            input: parseIngredient('create:source_quartz'),
            output: parseIngredient('create:polished_source_quartz'),
        },
        {
            id: "polished_antimatter_quartz",
            input: parseIngredient('create:antimatter_quartz'),
            output: parseIngredient('create:polished_antimatter_quartz'),
        },
        {
            id: `iridium_dust_from_ore`,
            input: parseIngredient(`#forge:ores/iridium`),
            output: ChanceOrCountItem(TagToItem(`#forge:dusts/iridium`), 2),
        },
        {
            id: `iridium_dust_from_raw`,
            input: ChanceOrCountTag(`#forge:raw_materials/iridium`, 3),
            output: ChanceOrCountItem(TagToItem(`#forge:dusts/iridium`), 4),
        },
    ]

    const RawMat_OresToDusts = [ 
        'desh',
        'ostrum',
        'calorite',
        'nephryx'
    ].forEach(mat => {
        recipes.push(
            {
                id: `${mat}_dust_from_ore`,
                input: parseIngredient(`#forge:ores/${mat}`),
                output: ChanceOrCountItem(TagToItem(`#forge:dusts/${mat}`), 2),
            },
            {
                id: `${mat}_dust_from_raw`,
                input: ChanceOrCountTag(`#forge:raw_materials/${mat}`, 3),
                output: ChanceOrCountItem(TagToItem(`#forge:dusts/${mat}`), 4),
            },
            {
                id: `${mat}_dust_from_raw_block`,
                input: parseIngredient(`#forge:storage_blocks/raw_${mat}`),
                output: ChanceOrCountItem(TagToItem(`#forge:dusts/${mat}`), 12),
            }
        )
    })

    //General Enriching Function
    recipes.forEach(recipe => {
        let json = {
            type: 'mekanism:enriching',
            input: { "ingredient": recipe.input },
            output: recipe.output
        }
        event.custom(json).id(`mekanism:enriching/${recipe.id}`)
    })
})