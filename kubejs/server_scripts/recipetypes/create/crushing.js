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
        //Crushing Tuff
        {
            id: "tuff_recycling",
            input: [parseIngredient("minecraft:tuff")],
            output: [
                ChanceOrCountItem("minecraft:flint", 0.25),
                ChanceOrCountItem("minecraft:iron_nugget", 0.1),
                ChanceOrCountItem("minecraft:gold_nugget", 0.1),
                ChanceOrCountItem("alltheores:copper_nugget", 0.1),
                ChanceOrCountItem("alltheores:zinc_nugget", 0.1),
                ChanceOrCountItem("minecraft:diamond_nugget", 0.0225)
            ]
        },
        //Crushing Polished Blackstone
        {
            id: "polished_blackstone_recycling",
            input: [parseIngredient("minecraft:polished_blackstone")],
            output: [
                ChanceOrCountItem("create:cinder_flour", 0.1),
                ChanceOrCountItem("minecraft:quartz", 0.05),
                ChanceOrCountItem("minecraft:gold_nugget", 0.02),
                ChanceOrCountItem("createdeco:netherite_nugget", 0.01)
            ]
        }
    ]

    //General Crushing Function
    recipes.forEach(recipe => {
        let json = {
            type: 'create:crushing',
            ingredients: recipe.input,
            results: recipe.output,
            processingTime: recipe.processingTime || 100
        }
        event.custom(json).id(`create:crushing/${recipe.id}`)
    })
})
