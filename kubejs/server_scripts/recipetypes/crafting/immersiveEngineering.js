//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.4

ServerEvents.recipes(event => {

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
            pattern: ["SCS", "CHC", "SCS"],
            key: {
                S:'immersiveengineering:sheetmetal_steel',
                C:'immersiveengineering:coil_lv',
                H:'create_sa:heat_engine'
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