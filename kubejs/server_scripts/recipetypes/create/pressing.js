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
(_____)         Last Modification : 1.4.0         (_____)

*/

ServerEvents.recipes(event => {

    //Recipes
    let recipes = [
        //Pressing Diamond
        {
            id: "diamond",
            input: "#forge:gems/diamond",
            output: "#forge:plates/diamond"
        },
        //Pressing Sand Paper
        {
            id: "sand_paper",
            input: "minecraft:sand",
            output: "create:sand_paper"
        },
        //Pressing Red Sand Paper
        {
            id: "red_sand_paper",
            input: "minecraft:red_sand",
            output: "create:red_sand_paper"
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
        'elementium',
        'desh',
        'ostrum',
        'calorite',
        'nephryx'
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