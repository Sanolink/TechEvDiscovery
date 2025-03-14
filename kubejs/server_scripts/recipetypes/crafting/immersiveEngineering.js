//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.4

ServerEvents.recipes(event => {

    //Recipes

    const recipes = [
        //Light Engineering
        {
            id: "immersiveengineering:light_engineering",
            output: '2x immersiveengineering:light_engineering',
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
            id: "immersiveengineering:radiator",
            output: '4x immersiveengineering:radiator',
            pattern: ["SCS", "CHC", "SCS"],
            key: {
                S:'immersiveengineering:sheetmetal_steel',
                C:'immersiveengineering:coil_lv',
                H:'create_sa:heat_engine'
            }
        },
        //Heavy Engineering 
        {
            id: "immersiveengineering:heavy_engineering",
            output: '2x immersiveengineering:heavy_engineering',
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
            id: "immersiveengineering:rs_engineering",
            output: '2x immersiveengineering:rs_engineering',
            pattern: ["SES", "RCR", "SES"],
            key: {
                S:'immersiveengineering:sheetmetal_iron',
                R:'immersiveengineering:wirecoil_redstone',
                E:'create:electron_tube',
                C:'immersiveengineering:coil_hv',
            }
        },
        //Applied Components Blueprint
        {
            id: "immersiveengineering:blueprint_applied_components",
            output: Item.of('immersiveengineering:blueprint', '{blueprint:"appliedComponents"}'),
            pattern: [" C ", "BBB", "PPP"],
            key: {
                C:'ae2:charged_certus_quartz_crystal',
                B:'minecraft:blue_dye',
                P:'minecraft:paper',
            }
        }
    ]

    recipes.forEach(recipe => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
    })



})