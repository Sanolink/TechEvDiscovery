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
    const recipes = [
        {
            in: 'create:raw_andesite_alloy',
            out: 'create:andesite_alloy'
        },
        {
            in: 'ad_astra:mercury_nephryx_ore',
            out: 'ad_astra:nephryx_ingot'
        },
        {
            in: 'ad_astra:raw_nephryx',
            out: 'ad_astra:nephryx_ingot'
        }
    ]

    const DustToIngot = [
        "desh",
        "ostrum",
        "calorite",
        "nephryx",
        "elementium",
        "cloggrum",
        "froststeel",
        "falsite",
        "ventium",
        "horizonite",
        "arcane_gold"
    ].forEach(mat => {
        recipes.push(
            {
                id: `minecraft:smelting/${mat}_ingot_smelting_from_${mat}_dust`,
                in: Item.of(`#forge:dusts/${mat}`),
                out: Item.of(`#forge:ingots/${mat}`)
            }
        )
    })

    const RawMatBlocksToIngotBlocks = [
        'aluminum',
        'lead',
        'nickel',
        'osmium',
        'platinum',
        'silver',
        'tin',
        'uranium',
        'zinc',
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
                id: `minecraft:smelting/${mat}_block_smelting_from_raw_${mat}_block`,
                in: Item.of(`#forge:storage_blocks/raw_${mat}`),
                out: Item.of(`#forge:storage_blocks/${mat}`)
            }
        )
    })

    //General Smelting Function
    recipes.forEach((recipe) => {
        event.smelting(recipe.out, recipe.in).id(recipe.id || `minecraft:smelting/${recipe.out.split(":")[1]}_smelting_from_${recipe.in.split(":")[1]}`)
    })
})
