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
    let recipes = [
        {
            entityInput: "minecraft:bee",
            itemInputs: [
                "mysticalagriculture:prosperity_block",
                "mekaevolution:cosmic_control_circuit",
                "mysticalagriculture:prosperity_block",
                "mekaevolution:alloy_shining",
                "mysticalagriculture:prosperity_block",
                "mekaevolution:cosmic_control_circuit",
                "mysticalagriculture:prosperity_block",
                "mekaevolution:alloy_shining"
            ],
            entityOutput: "productivebees:configurable_bee",
            outputNbt: "productivebees:prosperity"
        }
    ]

    //General Soul Transmutation Function
    recipes.forEach(recipe => {
        let json = {
            type: 'spirit:soul_transmutation',
            entityInput: recipe.entityInput,
            consumesActivator: recipe.consumesActivator || false,
            itemInputs: [],
            entityOutput: recipe.entityOutput,
            duration: recipe.duration || 30,
            shouldSummonMob: recipe.shouldSummonMob || true 
        }
        
        if (recipe.outputNbt) {json.outputNbt = { type: recipe.outputNbt }}
        recipe.itemInputs.forEach(input => {json.itemInputs.push(parseIngredient(input))})
        event.custom(json).id(`spirit:soul_transmutation/${recipe.outputNbt.replace(":", "_") || recipe.entityOutput.replace(":", "_")}`)
    })
})