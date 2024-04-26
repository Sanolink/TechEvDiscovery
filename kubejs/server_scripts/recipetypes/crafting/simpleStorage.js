//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {

    //Recipes
    const recipes = [
        //Storage ?etwork Root
        {
            output: "storagenetwork:master",
            pattern: ["PHP", "HSH", "PHP"],
            key: {
                P:'alltheores:steel_plate',
                H:'immersiveengineering:heavy_engineering',
                S:'create_sa:steam_engine'
            }
        },
        //Inventory Remote
        {
            output: "storagenetwork:inventory_remote",
            pattern: ["SPS", "CMC", "SNS"],
            key: {
                S: "#forge:slimeballs",
                P: "upgradednetherite_items:ender_upgraded_netherite_pearl",
                C: 'create:linked_controller',
                M: "storagenetwork:master",
                N: 'upgradednetherite_items:ultimate_upgraded_netherite_totem'
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