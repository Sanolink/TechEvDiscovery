//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.2.0

ServerEvents.recipes(event => {

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