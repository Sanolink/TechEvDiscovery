//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {

    //Remove
    event.remove({ output: 'storagenetwork:inventory_remote', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'storagenetwork:crafting_remote', type: 'minecraft:crafting_shaped' })
    
    //Recipes
    const recipes = [
        //Inventory Remote
        {
            output: "storagenetwork:inventory_remote",
            pattern: ["SPS", "GMG", "SDS"],
            key: {
                S: "#forge:slimeballs",
                P: "upgradednetherite_items:ender_upgraded_netherite_pearl",
                G: "#forge:ingots/gold",
                M: "storagenetwork:master",
                D: "minecraft:diamond"
            }
        },
        //Crafting Remote
        {
            output: "storagenetwork:crafting_remote",
            pattern: ["CEC", "GRG", "CDC"],
            key: {
                C: "minecraft:crafting_table",
                E: "minecraft:ender_chest",
                G: "#forge:storage_blocks/gold",
                R: "storagenetwork:inventory_remote",
                D: "minecraft:diamond_block"
            }
        }
    ]

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.output)
    })
})