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
            id: `experience_rod`,
            ingredients: ChanceOrCountItem('create:experience_nugget', 32),
            output: ChanceOrCountItem('create_things_and_misc:experience_rod', 64)
        },
        {
            id: `experience_gear`,
            ingredients: ChanceOrCountTag('#forge:plates/experience', 64),
            output: ChanceOrCountItem('create_things_and_misc:experience_gear', 16)
        },
        {
            id: `diamond_rod`,
            ingredients: ChanceOrCountItem('minecraft:diamond', 32),
            output: ChanceOrCountItem('alltheores:diamond_rod', 64)
        },
        {
            id: `diamond_gear`,
            ingredients: ChanceOrCountTag('#forge:plates/diamond', 64),
            output: ChanceOrCountItem('alltheores:diamond_gear', 16)
        },
        {
            id: `carbon_rod`,
            ingredients: ChanceOrCountItem('ftbic:carbon_fiber_mesh', 32),
            output: ChanceOrCountItem('ftbic:carbon_rod', 64)
        },
        {
            id: `carbon_gear`,
            ingredients: ChanceOrCountTag('#forge:plates/carbon', 64),
            output: ChanceOrCountItem('ftbic:carbon_gear', 16)
        }
    ]

    const IngotsToRods = [
        'desh',
        'ostrum',
        'calorite',
        'nephryx',
        'nickel',
        'osmium',
        'platinum',
        'silver',
        'zinc',
        'steel',
        'invar',
        'electrum',
        'lumium',
        'signalum',
        'constantan',
        'brass',
        'falsite',
        'ventium',
        'horizonite',
        'elementium',
        'cast_iron',
        'arcane_gold',
        'iesnium',
        'cloggrum',
        'froststeel',
        'prismalium',
        'melodium',
        'stellarium',
        'netherite',
        'soul_infused',
        'shellite',
        'twinite',
        'dragonsteel',
        'overcharged_iron',
        'overcharged_gold',
        'compressed_iron'
    ].forEach(mat => {
        recipes.push(
            {
                id: `ingots/${mat}_to_${mat}_rod`,
                ingredients: ChanceOrCountTag(`#forge:ingots/${mat}`, 32),
                output: ChanceOrCountItem(TagToItem(`#forge:rods/${mat}`), 64)
            }
        )
    })

    const PlatesToGears = [
        'desh',
        'ostrum',
        'calorite',
        'nephryx',
        'nickel',
        'osmium',
        'platinum',
        'silver',
        'zinc',
        'steel',
        'invar',
        'electrum',
        'lumium',
        'signalum',
        'constantan',
        'brass',
        'falsite',
        'ventium',
        'horizonite',
        'elementium',
        'cast_iron',
        'arcane_gold',
        'iesnium',
        'cloggrum',
        'froststeel',
        'prismalium',
        'melodium',
        'stellarium',
        'netherite',
        'soul_infused',
        'shellite',
        'twinite',
        'dragonsteel',
        'overcharged_iron',
        'overcharged_gold',
        'compressed_iron'
    ].forEach(mat => {
        recipes.push(
            {
                id: `plates/${mat}_to_${mat}_gear`,
                ingredients: ChanceOrCountTag(`#forge:plates/${mat}`, 64),
                output: ChanceOrCountItem(TagToItem(`#forge:gears/${mat}`), 16)
            }
        )
    })

    const QuartzToRodsGears = [
        'rose',
        'blue',
        'psi',
        'source',
        'antimatter'
    ].forEach(mat => {
        recipes.push(
            {
                id: `quartz/${mat}_to_${mat}_rod`,
                ingredients: ChanceOrCountTag(`#forge:polished_quartz/${mat}`, 32),
                output: ChanceOrCountItem(TagToItem(`#forge:rods/${mat}_quartz`), 64)
            },
            {
                id: `plates/${mat}_to_${mat}_gear`,
                ingredients: ChanceOrCountTag(`#forge:plates/${mat}_quartz`, 64),
                output: ChanceOrCountItem(TagToItem(`#forge:gears/${mat}_quartz`), 16)
            }
        )
    })

    //General Extruding Function
    recipes.forEach(recipe => {
        let json = {
            type: 'ftbic:extruding',
            inputItems: [recipe.ingredients],
            outputItems: [recipe.output]
        }
        event.custom(json).id(`ftbic:extruding/${recipe.id}`)
    })
})