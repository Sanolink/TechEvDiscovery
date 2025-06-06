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
        //Diamond
        {
            id: "diamond",
            input: "#forge:gems/diamond",
            output: "#forge:plates/diamond"
        },
        //Sand Paper
        {
            id: "sand_paper",
            input: "minecraft:sand",
            output: "create:sand_paper"
        },
        //Red Sand Paper
        {
            id: "red_sand_paper",
            input: "minecraft:red_sand",
            output: "create:red_sand_paper"
        },
        //Blue Quartz Plate
        {
            id: "blue_quartz_sheet",
            input: "create:polished_blue_quartz",
            output: "create_things_and_misc:blue_quartz_sheet"
        },
        //Source Quartz Plate
        {
            id: "source_quartz_sheet",
            input: "create:polished_source_quartz",
            output: "create_things_and_misc:source_quartz_sheet"
        },
        //Psi Quartz Plate
        {
            id: "psi_quartz_sheet",
            input: "create:polished_psi_quartz",
            output: "create_things_and_misc:psi_quartz_sheet"
        }
    ]
    
    // Ingots -> Plates
    const IngotsToPlates = [
        'iridium', 
        'enderium', 
        'signalum', 
        'lumium', 
        'bronze', 
        'invar', 
        'osmium', 
        'platinum', 
        'tin',
        'dragonsteel',
        'soul_infused',
        'shellite',
        'twinite',
        'prismalium',
        'melodium',
        'stellarium',
        'elementium'
    ].forEach(ingot => {
        recipes.push(
            {
                id: ingot + "_ingot",
                input: "#forge:ingots/" + ingot,
                output: "#forge:plates/" + ingot
            }
        )
    })

    //General Pressing Function
    recipes.forEach(recipe => {
        event.recipes.create.pressing(recipe.output, recipe.input).id("create:pressing/" + recipe.id)
    })
})