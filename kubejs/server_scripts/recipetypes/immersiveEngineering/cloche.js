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
(_____)         Last Modification : 1.4.8         (_____)

*/

ServerEvents.recipes(event => {

    //Recipes
    let recipes = [
        {
            id: "naturesaura/end_flower",
            input: parseIngredient('naturesaura:end_flower'),
            output: [parseIngredient('naturesaura:end_flower')],
            soil: parseIngredient('minecraft:end_stone'),
            time: 480,
            render: { type: 'generic', block: 'naturesaura:end_flower'}
        },
        {
            id: "nethersdelight/propelplant_cane",
            input: parseIngredient('nethersdelight:propelplant_cane'),
            output: [IEChanceOrCountIngredient('nethersdelight:propelpearl', 2), parseIngredient('nethersdelight:propelplant_cane')],
            soil: parseIngredient('minecraft:crimson_nylium'),
            time: 480,
            render: { type: 'generic', block: "nethersdelight:propelplant_berry_stem" }
        },
        {
            id: "forbidden_arcanus/nipa",
            input: parseIngredient('forbidden_arcanus:nipa'),
            output: [IEChanceOrCountIngredient('forbidden_arcanus:arcane_crystal_dust_speck', 2), parseIngredient('forbidden_arcanus:nipa')],
            soil: parseIngredient('minecraft:dirt'),
            time: 480,
            render: { type: 'generic', block: "forbidden_arcanus:nipa" }
        }
    ]

    mysticalCrops.enabled.forEach(cropName => {
        let crop = CropRegistryInstance.getCropByName(cropName)
        let crux = crop.getCruxBlock()
        recipes.push(
            {
                id: `mysticalagriculture/${cropName}`,
                input: parseIngredient(crop.getSeedsItem().getId()),
                output: [ChanceOrCountItem(crop.getEssenceItem().getId(), 2)],
                soil: parseIngredient(crux ? crux.getId() : `#forge:soil_tier/${crop.getTier().getFarmland().getIdLocation().getPath().replace('_farmland', '')}`),
                time: 250 + (125 * crop.getTier().getValue()),
                render: {
                  type: 'crop',
                  block: crop.getCropBlock().getId()
                }
            }
        )
    })

   //General Cloche Function
    recipes.forEach(recipe => {
        let json = {
            type: 'immersiveengineering:cloche',
            input: recipe.input,
            results: recipe.output,
            soil: recipe.soil,
            time: recipe.time,
            render: recipe.render
        }
        event.custom(json).id(`immersiveengineering:cloche/${recipe.id}`)
    })
})