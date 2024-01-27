//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.4

ServerEvents.recipes(event => {

    //Remove

    //Recipes 

    let recipes = [
        {
            id : 'raw_cuperzinate',
            input: 'kubejs:raw_cuperzinate',
            output: 'create:crushed_raw_copper',
            secondaries: [Item.of('create:crushed_raw_zinc').withChance(0.8), Item.of('create:crushed_raw_iron').withChance(0.6)]
        },
        {
            id : 'raw_auricargentum',
            input: 'kubejs:raw_auricargentum',
            output: 'create:crushed_raw_gold',
            secondaries: [Item.of('create:crushed_raw_silver').withChance(0.8), Item.of('create:crushed_raw_platinum').withChance(0.6)]
        },
        {
            id : 'raw_uratinumal',
            input: 'kubejs:raw_uratinumal',
            output: 'create:crushed_raw_uranium',
            secondaries: [Item.of('create:crushed_raw_tin').withChance(0.8), Item.of('create:crushed_raw_aluminum').withChance(0.6)]
        },
        {
            id : 'raw_leadosnite',
            input: 'kubejs:raw_leadosnite',
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
            id : 'netherite_tool_recycling',
            input: '#forge:tools/netherite',
            output: Item.of('createdeco:netherite_nugget').withCount(4),
            secondaries: Item.of('createdeco:netherite_nugget').withChance(0.8)
        }
    ]

    const ingotsDusts = [
        'iridium', 
        'netherite', 
        'enderium', 
        'lumium', 
        'signalum'
    ]
    const gemsDusts = [
        'diamond', 
        'sapphire', 
        'peridot', 
        'ruby'
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














