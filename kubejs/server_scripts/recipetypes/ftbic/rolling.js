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
(_____)         Last Modification : 1.5.0         (_____)

*/

ServerEvents.recipes(event => {

    //Recipes
    let recipes = [
            {
                id: `experience_plate`,
                ingredients: ChanceOrCountItem('create:experience_nugget', 64),
                output: ChanceOrCountItem('create_things_and_misc:experience_sheet', 64)
            },
            {
                id: `diamond_plate`,
                ingredients: ChanceOrCountItem('minecraft:diamond', 64),
                output: ChanceOrCountItem('alltheores:diamond_plate', 64)
            },
            {
                id: `carbon_plate`,
                ingredients: ChanceOrCountItem('ftbic:carbon_fiber_mesh', 64),
                output: ChanceOrCountItem('ftbic:carbon_plate', 64)
            },
    ]

    const IngotsToPlates = [
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
                id: `ingots/${mat}_to_${mat}_plate`,
                ingredients: ChanceOrCountTag(`#forge:ingots/${mat}`, 64),
                output: ChanceOrCountItem(TagToItem(`#forge:plates/${mat}`), 64)
            }
        )
    })

    const QuartzToPlates = [
        'rose',
        'blue',
        'psi',
        'source',
        'antimatter'
    ].forEach(mat => {
        recipes.push(
            {
                id: `quartz/${mat}_to_${mat}_plate`,
                ingredients: ChanceOrCountTag(`#forge:polished_quartz/${mat}`, 32),
                output: ChanceOrCountItem(TagToItem(`#forge:plates/${mat}_quartz`), 64)
            }
        )
    })

    const RodsToWires = [
        'iron',
        'electrum',
        'steel',
        'lead'
    ].forEach(mat => {
        recipes.push(
            {
                id: `rods/${mat}_to_${mat}_wire`,
                ingredients: ChanceOrCountTag(`#forge:rods/${mat}`, 32),
                output: ChanceOrCountItem(TagToItem(`#forge:wires/${mat}`), 64)
            }
        )
    })

    //General Rolling Function
    recipes.forEach(recipe => {
        let json = {
            type: 'ftbic:rolling',
            inputItems: [recipe.ingredients],
            outputItems: [recipe.output]
        }
        event.custom(json).id(`ftbic:rolling/${recipe.id}`)
    })
})