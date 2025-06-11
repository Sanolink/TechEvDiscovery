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
(_____)         Last Modification : 1.3.7         (_____)

*/

ServerEvents.recipes(event => {

    //Recipes 
    let recipes = [
        {
            id : 'raw_cuperzinate',
            input: parseIngredient('techev_additions:raw_cuperzinate'),
            output: parseIngredient('create:crushed_raw_copper'),
            secondaries: [
                IEChanceOrCountIngredient('create:crushed_raw_zinc', 0.8),
                IEChanceOrCountIngredient('create:crushed_raw_iron', 0.6)
            ]
        },
        {
            id : 'raw_auricargentum',
            input: parseIngredient('techev_additions:raw_auricargentum'),
            output: parseIngredient('create:crushed_raw_gold'),
            secondaries: [
                IEChanceOrCountIngredient('create:crushed_raw_silver', 0.8),
                IEChanceOrCountIngredient('create:crushed_raw_platinum', 0.6)
            ]
        },
        {
            id : 'raw_uratinumal',
            input: parseIngredient('techev_additions:raw_uratinumal'),
            output: parseIngredient('create:crushed_raw_uranium'),
            secondaries: [
                IEChanceOrCountIngredient('create:crushed_raw_tin', 0.8),
                IEChanceOrCountIngredient('create:crushed_raw_aluminum', 0.6)
            ]
        },
        {
            id : 'raw_leadosnite',
            input: parseIngredient('techev_additions:raw_leadosnite'),
            output: parseIngredient('create:crushed_raw_lead'),
            secondaries: [
                IEChanceOrCountIngredient('create:crushed_raw_osmium', 0.8),
                IEChanceOrCountIngredient('create:crushed_raw_nickel', 0.6)
            ]
        },
        {
            id : 'netherite_armor_recycling',
            input: parseIngredient('#forge:armor/netherite'),
            output: IEChanceOrCountIngredient('createdeco:netherite_nugget', 4),
            secondaries: [IEChanceOrCountIngredient('createdeco:netherite_nugget', 0.8)]
        },
        {
            id : 'obsidian',
            input: parseIngredient('minecraft:obsidian'),
            output: parseIngredient('create:powdered_obsidian'),
            secondaries: [IEChanceOrCountIngredient('minecraft:obsidian', 0.75)]
        },
        {
            id : 'soul_sand',
            input: parseIngredient('minecraft:soul_sand'),
            output: parseIngredient('thermal_extra:soul_sand_dust')
        },
        {
            id : 'ender_pearl',
            input: parseIngredient('minecraft:ender_pearl'),
            output: parseIngredient('thermal:ender_pearl_dust')
        },
        {
            id : 'sky_stone',
            input: parseIngredient('ae2:sky_stone_block'),
            output: parseIngredient('ae2:sky_dust')
        }
    ]

    const ingotsDusts = [
        'dragonsteel',
        'enderium',
        'iridium',
        'lumium',
        'melodium',
        'netherite',
        'prismalium',
        'shellite',
        'signalum',
        'soul_infused',
        'stellarium',
        'twinite'
    ]
    const gemsDusts = [
        'amethyst',
        'apatite',
        'certus_quartz',
        'cinnabar',
        'diamond',
        'emerald',
        'fluix',
        'lapis',
        'niter',
        'peridot',
        'quartz',
        'ruby',
        'sapphire',
        'sulfur'
    ]
    ingotsDusts.forEach(type => {
        recipes.push(
        {
            id : `${type}_dust`,
            input: parseIngredient(`#forge:ingots/${type}`),
            output: parseIngredient(`#forge:dusts/${type}`)
        }
    )})
    gemsDusts.forEach(type => {
        recipes.push(
        {
            id : `${type}_dust`,
            input: parseIngredient(`#forge:gems/${type}`),
            output: parseIngredient(`#forge:dusts/${type}`)
        }
    )})

   //General Crusher Function
    recipes.forEach(recipe => {
        let json = {
            type: 'immersiveengineering:crusher',
            input: recipe.input,
            result: recipe.output,
            secondaries: recipe.secondaries || [],
            energy: recipe.energy || 3000
        }
        event.custom(json).id(`immersiveengineering:crusher/${recipe.id}`)
    })
})