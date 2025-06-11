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
(_____)         Last Modification : 1.3.7         (_____)

*/

ServerEvents.recipes(event => {
    
    //Recipes
    const recipes = [
        //Molten Plastic
        {
            id : 'molten_plastic',
            output : FluidWithCount("pneumaticcraft:plastic", 500),
            ingredients : parseIngredient('pneumaticcraft:plastic')
        },
        //Molten Lapis
        {
            id : 'molten_lapis',
            output : FluidWithCount("create:molten_lapis", 100),
            ingredients : parseIngredient('minecraft:lapis_lazuli')
        },
        {
            id : 'molten_lapis_from_block',
            output : FluidWithCount("create:molten_lapis", 900),
            ingredients : parseIngredient('minecraft:lapis_block')
        },
        //Molten Source
        {
            id : 'molten_source',
            output : FluidWithCount("create:molten_source", 200),
            ingredients : parseIngredient('ars_nouveau:source_gem')
        },
        {
            id : 'molten_source_from_block',
            output : FluidWithCount("create:molten_source", 800),
            ingredients : parseIngredient('ars_nouveau:source_gem_block')
        },
        //Destabilized Psimetal
        {
            id : 'destabilized_psimetal',
            output : FluidWithCount("psi:destabilized_psimetal", 100),
            ingredients : parseIngredient('psi:psimetal')
        },
        {
            id : 'destabilized_psimetal_from_block',
            output : FluidWithCount("psi:destabilized_psimetal", 900),
            ingredients : parseIngredient('psi:psimetal_block')
        }
    ]

    //General Crucible Function
    recipes.forEach(recipe => {
        let json = {
            type: 'thermal:crucible',
            ingredients: recipe.ingredients,
            result: recipe.output,
            experience: recipe.experience || 0.0,
            energy: recipe.energy || 40000
        }
        event.custom(json).id(`thermal:machines/crucible/crucible_${recipe.id}`)
    })
})