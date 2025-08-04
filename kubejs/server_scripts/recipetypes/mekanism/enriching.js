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