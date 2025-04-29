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
        
    //Prediction Matrix
    {
        id : 'empty_prediction',
        output : Item.of('hostilenetworks:empty_prediction', 4),
        ingredients : ['thermal:chiller_ball_cast', Fluid.of('hostilenetworks:polymer_clay', 250)]
    },
    {
        id : 'lapis_block',
        output : 'minecraft:lapis_block',
        ingredients : Fluid.of('create:molten_lapis', 900)
    },
    {
        id : 'source_gem_block',
        output : 'ars_nouveau:source_gem_block',
        ingredients : Fluid.of('create:molten_source', 800)
    },
    {
        id : 'psimetal_block',
        output : 'psi:psimetal_block',
        ingredients : Fluid.of('psi:destabilized_psimetal', 900)
    }
]

    //General Chiller Function
    recipes.forEach((recipe) => {
        event.recipes.thermal.chiller(recipe.output, recipe.ingredients).id("thermal:machines/chiller/chiller_" + recipe.id)
    })
})