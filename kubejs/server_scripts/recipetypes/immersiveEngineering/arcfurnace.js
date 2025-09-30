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
(_____)         Last Modification : 1.4.12        (_____)

*/

ServerEvents.recipes(event => {

    //Recipes
    let recipes = [
        {
            id: 'deep_learner',
            input: parseIngredient('occultism:otherstone_tablet'),
            additives: [parseIngredient('ae2:engineering_processor'), parseIngredient('ae2:wireless_receiver'), parseIngredient('thermal:flux_capacitor')],
            output: [parseIngredient('hostilenetworks:deep_learner')],
            time: 600,
            energy: 307200
        },
        {
            id: 'slag_glass',
            input: parseIngredient('thermal:slag'),
            output: [parseIngredient('immersiveengineering:slag_glass')],
            energy: 25600
        },
        {
            id: 'basic_microship',
            input: parseIngredient('immersiveengineering:component_electronic'),
            additives: [parseIngredient('create:refined_radiance'), parseIngredient('alltheores:uranium_plate'), parseIngredient('alltheores:invar_dust'), IEChanceOrCountIngredient('eidolon:arcane_gold_nugget', 4)],
            output: [parseIngredient('pneumaticcraft:basic_microchip')],
        },
        {
            id: 'advanced_microship',
            input: parseIngredient('immersiveengineering:material_component_oscillating'),
            additives: [parseIngredient('create:shadow_steel'), parseIngredient('alltheores:platinum_plate'), parseIngredient('alltheores:constantan_dust'), IEChanceOrCountIngredient('eidolon:arcane_gold_nugget', 4)],
            output: [parseIngredient('pneumaticcraft:advanced_microchip')],
        },
        {
            id: 'processing_microship',
            input: parseIngredient('immersiveengineering:component_electronic_adv'),
            additives: [parseIngredient('createqol:shadow_radiance'), parseIngredient('thermal:netherite_plate'), parseIngredient('occultism:iesnium_dust'), IEChanceOrCountIngredient('eidolon:arcane_gold_nugget', 4)],
            output: [parseIngredient('pneumaticcraft:processing_microchip')],
        }
    ]

    const DustsToIngots = [
        "iridium",
        "desh",
        "ostrum",
        "calorite",
        "nephryx",
        "iesnium",
        "elementium",
        "cloggrum",
        "froststeel",
        "falsite",
        "ventium",
        "horizonite",
        "netherite",
        "enderium",
        "lumium",
        "signalum",
        "soul_infused",
        "shellite",
        "twinite",
        "dragonsteel",
        "hop_graphite",
        "prismalium",
        "melodium",
        "stellarium"
    ].forEach(mat => {
        recipes.push(
            {
                id: `dust_${mat}`,
                input: parseIngredient(`#forge:dusts/${mat}`),
                output: [parseIngredient(TagToItem(`#forge:ingots/${mat}`))],
            }
        )
    })

    const RawMatBlocksToIngots = [
        'iridium',
        'falsite',
        'ventium',
        'horizonite',
        'elementium',
        'iesnium',
        'cloggrum',
        'froststeel',
        'desh',
        'ostrum',
        'calorite',
        'nephryx'
    ].forEach(mat => {
        recipes.push(
            {
                id: `raw_block_${mat}`,
                input: parseIngredient(`#forge:storage_blocks/raw_${mat}`),
                output: [IEChanceOrCountIngredient((`#forge:ingots/${mat}`), 13)],
                secondaries: [IEChanceOrCountIngredient((`#forge:ingots/${mat}`), 0.5)],
                time: 900,
                energy: 230400
            }
        )
    })

   //General Arc Furnace Function
    recipes.forEach(recipe => {
        let json = {
            type: 'immersiveengineering:arc_furnace',
            input: recipe.input,
            additives: recipe.additives || [],
            results: recipe.output,
            time: recipe.time || 100,
            energy: recipe.energy || 51200
        }
        if (recipe.secondaries) { json.secondaries = recipe.secondaries}
        if (recipe.slag) { json.slag = recipe.slag}
        event.custom(json).id(`immersiveengineering:arc_furnace/${recipe.id}`)
    })
})