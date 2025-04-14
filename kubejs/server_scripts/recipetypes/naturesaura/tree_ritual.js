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
            id: 'charoite',
            ingredients: [

                {type: "forge:nbt", item: 'naturesaura:effect_powder', nbt: {effect: "naturesaura:animal"}},
                {type: "forge:nbt", item: 'naturesaura:effect_powder', nbt: {effect: "naturesaura:animal"}},
                {type: "forge:nbt", item: 'naturesaura:effect_powder', nbt: {effect: "naturesaura:animal"}},
                {type: "forge:nbt", item: 'naturesaura:effect_powder', nbt: {effect: "naturesaura:animal"}},
                {type: "forge:nbt", item: 'naturesaura:aura_bottle', nbt: {stored_type: "naturesaura:nether"}},
                {type: "forge:nbt", item: 'naturesaura:aura_bottle', nbt: {stored_type: "naturesaura:nether"}}
            ],
            sapling: {item: 'minecraft:oak_sapling'},
            output: {item: 'blue_skies:charoite'},
        },
        {
            id: 'moonstone_shard',
            ingredients: [
                {type: "forge:nbt", item: 'naturesaura:effect_powder', nbt: {effect: "naturesaura:cache_recharge"}},
                {type: "forge:nbt", item: 'naturesaura:effect_powder', nbt: {effect: "naturesaura:cache_recharge"}},
                {type: "forge:nbt", item: 'naturesaura:effect_powder', nbt: {effect: "naturesaura:cache_recharge"}},
                {type: "forge:nbt", item: 'naturesaura:effect_powder', nbt: {effect: "naturesaura:cache_recharge"}},
                {type: "forge:nbt", item: 'naturesaura:aura_bottle', nbt: {stored_type: "naturesaura:end"}},
                {type: "forge:nbt", item: 'naturesaura:aura_bottle', nbt: {stored_type: "naturesaura:end"}}
            ],
            sapling: {item: 'minecraft:oak_sapling'},
            output: {item: 'blue_skies:moonstone_shard'},
        }
    ]
    
    //General Tree Ritual Function
    recipes.forEach((recipe) => {
        event
            .custom({
                type: "naturesaura:tree_ritual",
                ingredients: recipe.ingredients,
                sapling: recipe.sapling,
                output: recipe.output,
                time: "400",
            })
            .id("naturesaura:tree_ritual/" + recipe.id)
    })
})