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
        {
            id: "rose_quartz",
            output: [parseIngredient('create:rose_quartz')],
            input: [parseIngredient('minecraft:quartz')],
            fluid: FluidWithCount("thermal:redstone", 200)
        },
        {
            id: "blue_quartz",
            output: [parseIngredient('create:blue_quartz')],
            input: [parseIngredient('minecraft:quartz')],
            fluid: FluidWithCount("create:molten_lapis", 200)
        },
        {   
            id: "source_quartz",
            output: [parseIngredient('create:source_quartz')],
            input: [parseIngredient('minecraft:quartz')],
            fluid: FluidWithCount("create:molten_source", 200)
        },
        {
            id: "psi_quartz",
            output: [parseIngredient('create:psi_quartz')],
            input: [parseIngredient('minecraft:quartz')],
            fluid: FluidWithCount("psi:destabilized_psimetal", 200)
        },
        {
            id: "sludge_bottle",
            output: [parseIngredient('industrialforegoing:sludge_bottle')],
            input: [parseIngredient('minecraft:glass_bottle')],
            fluid: FluidWithCount("industrialforegoing:sludge", 250)
        }
    ]

   //General Filling Function
    recipes.forEach(recipe => {
        let json = {
            type: 'create:filling',
            ingredients: [recipe.input, recipe.fluid],
            results: recipe.output
        }
        event.custom(json).id(`create:filling/${recipe.id}`)
    })
})
