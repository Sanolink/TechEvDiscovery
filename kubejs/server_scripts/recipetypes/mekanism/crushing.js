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
    const recipes = [
        {
            id: "ender_pearl/to_dust",
            input: MekaParseIngredient("minecraft:ender_pearl"),
            output: parseIngredient("thermal:ender_pearl_dust")
        },
        {
            id: "petcoke/to_dust",
            input: MekaParseIngredient("immersivepetroleum:petcoke"),
            output: parseIngredient("immersivepetroleum:petcoke_dust")
        },
        {
            id: "soul_sand/to_dust",
            input: MekaParseIngredient("minecraft:soul_sand"),
            output: parseIngredient("thermal_extra:soul_sand_dust")
        },
        {
            id: "coal_coke/to_dust",
            input: MekaParseIngredient("immersiveengineering:coal_coke"),
            output: parseIngredient("immersiveengineering:dust_coke")
        },
        {
            id: `experience/to_dust`,
            input: MekaParseIngredient('create:experience_nugget'),
            output: parseIngredient('create_things_and_misc:experience_dust')
        },
        {
            id: `carbon/to_dust`,
            input: MekaParseIngredient('ftbic:carbon_fiber_mesh'),
            output: parseIngredient('ftbic:carbon_dust')
        }
    ]

    const DirtyDusts = ['desh', 'ostrum', 'calorite', 'nephryx', 'iridium', 'iesnium', 'elementium', 'cloggrum', 'froststeel', 'falsite', 'ventium', 'horizonite'].forEach(mat => {
        recipes.push({
            id: `${mat}/dirty_dust/from_clump`,
            input: MekaParseIngredient(`#mekanism:clumps/${mat}`),
            output: parseIngredient(`mekanism:dirty_dust_${mat}`)
        })
    })

    const IngotsToDusts = [
        'invar',
        'signalum',
        'lumium',
        'enderium',
        'iridium',
        'brass',
        'constantan',
        'electrum',
        'iesnium',
        'stellarium',
        'melodium',
        'prismalium',
        'dragonsteel',
        'soul_infused',
        'desh',
        'ostrum',
        'calorite',
        'nephryx',
        'arcane_gold',
        'elementium',
        'cloggrum',
        'froststeel',
        'falsite',
        'ventium',
        'horizonite',
        'hop_graphite',
        'cast_iron',
        'shellite',
        'twinite',
        'overcharged_iron',
        'overcharged_gold',
        'compressed_iron',
        'tungsten',
        'chromium',
        'titanium'
    ].forEach(mat => {
        recipes.push(
            {
                id: `${mat}/to_dust`,
                input: MekaParseIngredient(`#forge:ingots/${mat}`),
                output: parseIngredient(TagToItem(`#forge:dusts/${mat}`))
            }
        )
    })

    const QuartzToDusts = [
        'rose',
        'blue',
        'psi',
        'source',
        'antimatter'
    ].forEach(mat => {
        recipes.push(
            {
                id: `${mat}_quartz/to_dust`,
                input: MekaParseIngredient(`#forge:polished_quartz/${mat}`),
                output: parseIngredient(TagToItem(`#forge:dusts/${mat}_quartz`))
            }
        )
    })

    const GemsToDusts = [
        'cinnabar',
        'apatite',
        'sulfur',
        'amethyst',
        'niter'
    ].forEach(mat => {
        recipes.push(
            {
                id: `${mat}/to_dust`,
                input: MekaParseIngredient(`#forge:gems/${mat}`),
                output: parseIngredient(TagToItem(`#forge:dusts/${mat}`))
            }
        )
    })

    //General Crushing Function
    recipes.forEach(recipe => {
        let json = {
            type: 'mekanism:crushing',
            input: recipe.input,
            output: recipe.output
        }
        event.custom(json).id(`mekanism:crushing/${recipe.id}`)
    })
})
