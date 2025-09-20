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
(_____)         Last Modification : 1.4.10        (_____)

*/

ServerEvents.recipes(event => {

    //Recipes 
    const recipes = [
        {
            id: "ender_pearl/to_dust",
            input: MekaParseIngredient("minecraft:ender_pearl"),
            output: parseIngredient("thermal:ender_pearl_dust")
        }
    ]

    const DirtyDusts = ['desh', 'ostrum', 'calorite', 'nephryx'].forEach(mat => {
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
        'arcane_gold'
    ].forEach(mat => {
        recipes.push(
            {
                id: `${mat}/to_dust`,
                input: MekaParseIngredient(`#forge:ingots/${mat}`),
                output: parseIngredient(TagToItem(`#forge:dusts/${mat}`))
            }
        )
    })

    const GemsToDusts = [
        'peridot',
        'sapphire',
        'cinnabar',
        'apatite',
        'sulfur',
        'ruby',
        'amethyst'
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
