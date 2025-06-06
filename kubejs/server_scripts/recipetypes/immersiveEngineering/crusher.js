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
(_____)         Last Modification : 1.3.5         (_____)

*/

ServerEvents.recipes(event => {

    //Recipes 
    let recipes = [
        {
            id : 'raw_cuperzinate',
            input: 'techev_additions:raw_cuperzinate',
            output: 'create:crushed_raw_copper',
            secondaries: [Item.of('create:crushed_raw_zinc').withChance(0.8), Item.of('create:crushed_raw_iron').withChance(0.6)]
        },
        {
            id : 'raw_auricargentum',
            input: 'techev_additions:raw_auricargentum',
            output: 'create:crushed_raw_gold',
            secondaries: [Item.of('create:crushed_raw_silver').withChance(0.8), Item.of('create:crushed_raw_platinum').withChance(0.6)]
        },
        {
            id : 'raw_uratinumal',
            input: 'techev_additions:raw_uratinumal',
            output: 'create:crushed_raw_uranium',
            secondaries: [Item.of('create:crushed_raw_tin').withChance(0.8), Item.of('create:crushed_raw_aluminum').withChance(0.6)]
        },
        {
            id : 'raw_leadosnite',
            input: 'techev_additions:raw_leadosnite',
            output: 'create:crushed_raw_lead',
            secondaries: [Item.of('create:crushed_raw_osmium').withChance(0.8), Item.of('create:crushed_raw_nickel').withChance(0.6)]
        },
        {
            id : 'netherite_armor_recycling',
            input: '#forge:armor/netherite',
            output: Item.of('createdeco:netherite_nugget').withCount(4),
            secondaries: Item.of('createdeco:netherite_nugget').withChance(0.8)
        },
        {
            id : 'obsidian',
            input: 'minecraft:obsidian',
            output: 'create:powdered_obsidian',
            secondaries: Item.of('minecraft:obsidian').withChance(0.75)
        },
        {
            id : 'soul_sand',
            input: 'minecraft:soul_sand',
            output: 'thermal_extra:soul_sand_dust',
            secondaries: []
        },
        {
            id : 'ender_pearl',
            input: 'minecraft:ender_pearl',
            output: 'thermal:ender_pearl_dust',
            secondaries: []
        },
        {
            id : 'sky_stone',
            input: 'ae2:sky_stone_block',
            output: 'ae2:sky_dust',
            secondaries: []
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
            id : type + '_dust',
            input: '#forge:ingots/' + type,
            output: '#forge:dusts/' + type,
            secondaries: []
        }
    )})
    gemsDusts.forEach(type => {
        recipes.push(
        {
            id : type + '_dust',
            input: '#forge:gems/' + type,
            output: '#forge:dusts/' + type,
            secondaries: []
        }
    )})

    //General Crusher Function
    recipes.forEach(recipe => {
        event.recipes.immersiveengineeringCrusher(recipe.output, recipe.input, recipe.secondaries).id("immersiveengineering:crusher/" + recipe.id)
    })
})














