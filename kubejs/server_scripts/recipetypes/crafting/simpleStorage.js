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
(_____)         Last Modification : 1.3.3         (_____)

*/

ServerEvents.recipes(event => {

    //Recipes
    const recipes = [
        //Storage Network Root
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
                N: 'create_things_and_misc:radar'
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