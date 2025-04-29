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
    let shapeless = []

    Quartz("blue", "create:positron_tube")
    Quartz("source", "create:source_tube")
    Quartz("psi", "create:psi_tube")

    function Quartz(type, tube) {
        //Create Tubes
        recipes.push(
            {
                output: tube,
                pattern: ["I", "I", "P"],
                key: {
                    I: "create:polished_" + type + "_quartz",
                    P: "#forge:plates/iron"
                }
            }
        )
        //Quartz Tiles
        shapeless.push(
            {
                output: "create:" + type + "_quartz_tiles",
                input: "create:small_" + type + "_quartz_tiles"
            },
            {
                output: "create:small_" + type + "_quartz_tiles",
                input: "create:" + type + "_quartz_tiles"
            }
        )
    }

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.output)
    })

    shapeless.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.input).id(recipe.output)
    })

})