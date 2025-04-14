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
    const recipes = [
        {
            id: 'datura_seeds',
            input: { item: 'minecraft:wheat_seeds'},
            output: { item: 'occultism:datura_seeds'},
            catalyst: { item: 'naturesaura:generator_limit_remover'},
            aura: 5000,
            time: 50
        },
        {
            id: 'arcane_crystal_dust',
            input: { item: 'forbidden_arcanus:arcane_crystal'},
            output: { item: 'forbidden_arcanus:arcane_crystal_dust'},
            catalyst: { item: 'naturesaura:crushing_catalyst'},
            aura: 5000,
            time: 50
        }

    ]

    //General Altar Function
    recipes.forEach((recipe) => {
        recipe.type = "naturesaura:altar"
        event.custom(recipe).id("naturesaura:altar/" + recipe.id)
    })
})