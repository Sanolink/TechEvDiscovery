//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {

    //Remove
    event.remove({ id: 'immersiveengineering:crafting/stick_iron'})
    event.remove({ id: 'immersiveengineering:crafting/stick_aluminum'})
    event.remove({ id: 'immersiveengineering:crafting/stick_steel'})
    event.remove({ id: 'immersiveengineering:crafting/treated_wood_horizontal'})
    event.remove({ id: 'immersiveengineering:crafting/component_iron'})
    event.remove({ id: 'immersiveengineering:crafting/component_steel'})
    event.remove({ id: 'immersiveengineering:crafting/radiator'})
    event.remove({ id: 'immersiveengineering:crafting/rs_engineering'})
    event.remove({ id: 'immersiveengineering:crafting/light_engineering'})
    event.remove({ id: 'immersiveengineering:crafting/heavy_engineering'})
    event.remove({ input: 'immersiveengineering:hammer', output: "#forge:plates" })
    event.remove({ input: 'immersiveengineering:hammer', output: "#forge:dusts" })
    event.remove({ input: 'immersiveengineering:wirecutter', output: '#forge:wires', type: 'minecraft:crafting_shapeless' })
    event.remove({ output: 'immersiveengineering:hammer', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'immersiveengineering:wirecutter', type: 'minecraft:crafting_shaped' })

    //Recipes

    const recipes = [
        //Light Engineering
        {
            output: 'immersiveengineering:light_engineering',
            count: '2x ',
            pattern: ["SPS", "CGC", "SPS"],
            key: {
                S:'immersiveengineering:sheetmetal_iron',
                P:'create:positron_tube',
                C:'immersiveengineering:component_iron',
                G:'immersiveengineering:generator'
            }
        },
        //Radiator
        {
            output: 'immersiveengineering:radiator',
            count: '4x ',
            pattern: ["SCS", "CWC", "SCS"],
            key: {
                S:'immersiveengineering:sheetmetal_steel',
                C:'immersiveengineering:coil_lv',
                W:'minecraft:water_bucket'
            }
        },
        //Heavy Engineering 
        {
            output: 'immersiveengineering:heavy_engineering',
            count: '2x ',
            pattern: ["SPS", "CRC", "SPS"],
            key: {
                S:'immersiveengineering:sheetmetal_steel',
                P:'create:positron_tube',
                C:'immersiveengineering:component_steel',
                R:'immersiveengineering:radiator'
            }
        },
        //Redstone Engineering
        {
            output: 'immersiveengineering:rs_engineering',
            count: '2x ',
            pattern: ["SES", "RCR", "SES"],
            key: {
                S:'immersiveengineering:sheetmetal_iron',
                R:'immersiveengineering:wirecoil_redstone',
                E:'create:electron_tube',
                C:'immersiveengineering:coil_hv',
            }
        }
    ]

    recipes.forEach(recipe => {
        event.shaped(recipe.count + recipe.output, recipe.pattern, recipe.key).id(recipe.output)
    })



})