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
(_____)         Last Modification : 1.4.11        (_____)

*/

ServerEvents.recipes(event => {

    //Recipes 
    const recipes = [
        {
            id: "enriched_radiance",
            input: MekaParseIngredient('mekanism:dust_refined_glowstone'),
            output: parseIngredient('mekaevolution:enriched_radiance'),
        },
        {
            id: "enriched_thermonuclear",
            input: MekaParseIngredient('mekanism:crystal_hypernitro'),
            output: parseIngredient('mekaevolution:enriched_thermonuclear'),
        },
        {
            id: "enriched_ionium",
            input: MekaParseIngredient('mekanism:dust_lithium'),
            output: parseIngredient('mekanism:enriched_ionium'),
        },
        {
            id: "enriched_iridium",
            input: MekaParseIngredient('alltheores:iridium_dust'),
            output: parseIngredient('mekanism:enriched_iridium'),
        },
        {
            id: "enriched_shining",
            input: MekaParseIngredient('mekanism:antispark_dust'),
            output: parseIngredient('mekaevolution:enriched_shining'),
        },
        {
            id: "enriched_spectrum",
            input: MekaParseIngredient('mysticalagriculture:ultimate_essence'),
            output: parseIngredient('mekaevolution:enriched_spectrum'),
        },
        {
            id: "enriched_lapis_lazuli",
            input: MekaParseIngredient('minecraft:lapis_lazuli'),
            output: parseIngredient('mekanism:enriched_lapis_lazuli'),
        },
        {
            id: "enriched_psimetal",
            input: MekaParseIngredient('psi:psimetal'),
            output: parseIngredient('mekanism:enriched_psimetal'),
        },
        {
            id: "enriched_source",
            input: MekaParseIngredient('ars_nouveau:source_gem'),
            output: parseIngredient('mekanism:enriched_source'),
        },
        {
            id: "polished_blue_quartz",
            input: MekaParseIngredient('create:blue_quartz'),
            output: parseIngredient('create:polished_blue_quartz'),
        },
        {
            id: "polished_psi_quartz",
            input: MekaParseIngredient('create:psi_quartz'),
            output: parseIngredient('create:polished_psi_quartz'),
        },
        {
            id: "polished_source_quartz",
            input: MekaParseIngredient('create:source_quartz'),
            output: parseIngredient('create:polished_source_quartz'),
        },
        {
            id: "polished_antimatter_quartz",
            input: MekaParseIngredient('create:antimatter_quartz'),
            output: parseIngredient('create:polished_antimatter_quartz'),
        }
    ]

    const DirtyDusts = ['desh', 'ostrum', 'calorite', 'nephryx', 'iridium', 'iesnium', 'elementium', 'cloggrum', 'froststeel', 'falsite', 'ventium', 'horizonite'].forEach(mat => {
        recipes.push({
            id: `${mat}/dust/from_dirty_dust`,
            input: MekaParseIngredient(`#mekanism:dirty_dusts/${mat}`),
            output: parseIngredient(TagToItem(`#forge:dusts/${mat}`))
        })
    })

    const RawOresToCrushed = [ 
        'desh',
        'ostrum',
        'calorite',
        'nephryx',
        'iridium',
        'iesnium',
        'elementium',
        'cloggrum',
        'froststeel',
        'falsite',
        'ventium',
        'horizonite'
    ].forEach(mat => {
        recipes.push(
            {
                id: `${mat}_dust_from_ore`,
                input: MekaParseIngredient(`#forge:ores/${mat}`),
                output: ChanceOrCountItem(TagToItem(`#create:crushed_raw_materials/${mat}`), 2),
            },
            {
                id: `${mat}_dust_from_raw`,
                input: MekaCountIngredient(`#forge:raw_materials/${mat}`, 3),
                output: ChanceOrCountItem(TagToItem(`#create:crushed_raw_materials/${mat}`), 4),
            },
            {
                id: `${mat}_dust_from_raw_block`,
                input: MekaParseIngredient(`#forge:storage_blocks/raw_${mat}`),
                output: ChanceOrCountItem(TagToItem(`#create:crushed_raw_materials/${mat}`), 12),
            }
        )
    })

    //General Enriching Function
    recipes.forEach(recipe => {
        let json = {
            type: 'mekanism:enriching',
            input: recipe.input,
            output: recipe.output
        }
        event.custom(json).id(`mekanism:enriching/${recipe.id}`)
    })
})