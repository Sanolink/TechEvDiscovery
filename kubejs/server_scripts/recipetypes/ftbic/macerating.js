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
            id: `experience_to_dust`,
            output: [ChanceOrCountItem('create_things_and_misc:experience_dust', 64)],
            ingredients: ChanceOrCountItem('create:experience_nugget', 64)
        },
        {
            id: `carbon_to_dust`,
            output: [ChanceOrCountItem('ftbic:carbon_dust', 64)],
            ingredients: ChanceOrCountItem('ftbic:carbon_fiber_mesh', 64)
        }
    ]

    // Ingots -> Dusts
    const IngotsToDusts = [
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
        'ventium',
        'falsite',
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
    ].forEach((mat) => {
        recipes.push(
            {
                id: `ingots/${mat}_to_dust`,
                output: [ChanceOrCountItem(TagToItem(`#forge:dusts/${mat}`), 64)],
                ingredients: ChanceOrCountTag(`#forge:ingots/${mat}`, 64)
            }
        )
    });

    // Raw Ores -> Crushed
    const RawOresToCrushed = [
        "desh",
        'ostrum',
        'calorite',
        'nephryx',
        'nickel',
        'osmium',
        'platinum',
        'silver',
        'zinc',
        'falsite',
        'ventium',
        'horizonite',
        'elementium',
        'iesnium',
        'cloggrum',
        'froststeel'
    ].forEach((mat) => {
        recipes.push(
            {
                id: `raw_materials/${mat}_to_dust`,
                output: [parseIngredient(TagToItem(`#create:crushed_raw_materials/${mat}`)), ChanceOrCountItem(TagToItem(`#create:crushed_raw_materials/${mat}`), 0.35)],
                ingredients: parseIngredient(`#forge:raw_materials/${mat}`)
            }
        )
    });

    // Ores -> Crushed
    const OresToCrushed = [
        "desh",
        'ostrum',
        'calorite',
        'nephryx',
        'nickel',
        'osmium',
        'platinum',
        'silver',
        'zinc',
        'falsite',
        'ventium',
        'horizonite',
        'elementium',
        'iesnium',
        'cloggrum',
        'froststeel'
    ].forEach((mat) => {
        recipes.push(
            {
                id: `ores/${mat}_to_dust`,
                output: [ChanceOrCountItem(TagToItem(`#create:crushed_raw_materials/${mat}`), 64)],
                ingredients: ChanceOrCountTag(`#forge:ores/${mat}`, 32)
            }
        )
    });

    // Quartz -> Dusts
    const QuartzToDusts = [
        'rose',
        'blue',
        'psi',
        'source',
        'antimatter'
    ].forEach((mat) => {
        recipes.push(
            {
                id: `quartz/${mat}_to_dust`,
                output: [ChanceOrCountItem(TagToItem(`#forge:dusts/${mat}_quartz`), 64)],
                ingredients: ChanceOrCountTag(`#forge:polished_quartz/${mat}`, 64)
            }
        )
    });

    //General Macerating Function
    recipes.forEach(recipe => {
        let json = {
            type: 'ftbic:macerating',
            inputItems: [recipe.ingredients],
            outputItems: recipe.output
        }
        event.custom(json).id(`ftbic:macerating/${recipe.id}`)
    })
})