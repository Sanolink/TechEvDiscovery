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
(_____)         Last Modification : 1.3.0         (_____)

*/

ServerEvents.recipes(event => {
    
    //Recipes
    let recipes = []

    CreateQuartz("blue")
    CreateQuartz("source")
    CreateQuartz("psi")

    function CreateQuartz(type) {
        recipes.push(
            {
                id: type + "_quartz_block_from_" + type + "_quartz",
                output: "2x create:" + type + "_quartz_block",
                input: "create:" + type + "_quartz"
            },
            {
                id: "small_" + type + "_quartz_tiles_from_polished_" + type + "_quartz", 
                output: "2x create:small_" + type + "_quartz_tiles",
                input: "create:polished_" + type + "_quartz"
            },
            {
                id: type + "_quartz_tiles_from_polished_" + type + "_quartz",
                output: "2x create:" + type + "_quartz_tiles",
                input: "create:polished_" + type + "_quartz"
            }
        )
    }
    //General Smithing Function
    recipes.forEach(recipe => {
        event.stonecutting(recipe.output, recipe.input).id("minecraft:stonecutting/" + recipe.id)
    })
})