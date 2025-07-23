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
    const recipes = [
        {
            id : 'empty_prediction',
            output : ChanceOrCountItem('hostilenetworks:empty_prediction', 4),
            ingredients : ['thermal:chiller_ball_cast', FluidWithCount('hostilenetworks:polymer_clay', 250)]
        },
        {
            id : 'lapis_block',
            output : parseIngredient('minecraft:lapis_block'),
            ingredients : FluidWithCount('create:molten_lapis', 900)
        },
        {
            id : 'source_gem_block',
            output : parseIngredient('ars_nouveau:source_gem_block'),
            ingredients : FluidWithCount('create:molten_source', 800)
        },
        {
            id : 'psimetal_block',
            output : parseIngredient('psi:psimetal_block'),
            ingredients : FluidWithCount('psi:destabilized_psimetal', 900)
        },
        {
            id : 'inferium_essence',
            output : parseIngredient('mysticalagriculture:inferium_essence'),
            ingredients : [FluidWithCount("mysticalagradditions:molten_inferium", 250), parseIngredient('mysticalagriculture:fertilized_essence')] 
        },
        {
            id : 'prudentium_essence',
            output : parseIngredient('mysticalagriculture:prudentium_essence'),
            ingredients : [FluidWithCount("mysticalagradditions:molten_prudentium", 250), parseIngredient('mysticalagriculture:fertilized_essence')] 
        },
        {
            id : 'tertium_essence',
            output : parseIngredient('mysticalagriculture:tertium_essence'),
            ingredients : [FluidWithCount("mysticalagradditions:molten_tertium", 250), parseIngredient('mysticalagriculture:fertilized_essence')] 
        },
        {
            id : 'imperium_essence',
            output : parseIngredient('mysticalagriculture:imperium_essence'),
            ingredients : [FluidWithCount("mysticalagradditions:molten_imperium", 250), parseIngredient('mysticalagriculture:fertilized_essence')] 
        },
        {
            id : 'supremium_essence',
            output : parseIngredient('mysticalagriculture:supremium_essence'),
            ingredients : [FluidWithCount("mysticalagradditions:molten_supremium", 250), parseIngredient('mysticalagriculture:fertilized_essence')] 
        },
        {
            id : 'insanium_essence',
            output : parseIngredient('mysticalagradditions:insanium_essence'),
            ingredients : [FluidWithCount("mysticalagradditions:molten_insanium", 250), parseIngredient('mysticalagriculture:fertilized_essence')] 
        }
    ]

    //General Chiller Function
    recipes.forEach(recipe => {
        let json = {
            type: 'thermal:chiller',
            ingredients: recipe.ingredients,
            result: recipe.output,
            experience: recipe.experience || 0.0,
            energy: recipe.energy || 4000
        }
        event.custom(json).id(`thermal:machines/chiller/chiller_${recipe.id}`)
    })
})