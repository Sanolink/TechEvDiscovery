/* 
 _____                                             _____ 
( ___ ) © SanoLink 2024/2026. All rights reserved.( ___ )
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
(_____)         Last Modification : 1.5.2         (_____)

*/

ServerEvents.recipes(event => {

    //Recipes
    let shapeless = []

    global.TechEvCreateDecoCoinsMat.forEach(mat => {
        shapeless.push(
            {
                output: `createdeco:${mat}_coinstack`,
                input: `4x #forge:coins/${mat}`
            },
            {
                output: `4x #forge:coins/${mat}`,
                input: `createdeco:${mat}_coinstack`
            }
        )
    })

    shapeless.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.input).id(`createdeco:${recipe.output.split(":")[1]}`)
    })

})