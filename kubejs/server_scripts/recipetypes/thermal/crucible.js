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
        
    //Molten Plastic
    {
        id : 'molten_plastic',
        output : Fluid.of("pneumaticcraft:plastic", 500),
        ingredients : "pneumaticcraft:plastic"
    },
    //Molten Lapis
    {
        id : 'molten_lapis',
        output : Fluid.of("create:molten_lapis", 100),
        ingredients : 'minecraft:lapis_lazuli'
    },
    {
        id : 'molten_lapis_from_block',
        output : Fluid.of("create:molten_lapis", 900),
        ingredients : 'minecraft:lapis_block'
    },
    //Molten Source
    {
        id : 'molten_source',
        output : Fluid.of("create:molten_source", 200),
        ingredients : 'ars_nouveau:source_gem'
    },
    {
        id : 'molten_source_from_block',
        output : Fluid.of("create:molten_source", 800),
        ingredients : 'ars_nouveau:source_gem_block'
    }
]

    //General Crucible Function
    recipes.forEach((recipe) => {
        event.recipes.thermal.crucible(recipe.output, recipe.ingredients).id("thermal:machines/crucible/crucible_" + recipe.id)
    })
})
