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
(_____)         Last Modification : 1.4.8         (_____)

*/

ServerEvents.recipes(event => {

    //Recipes
    const recipes = [
        //Experience Bottle
        {
            output: "minecraft:experience_bottle",
            pattern: [" E ", "EBE", " E "],
            key: {
                E: "create:experience_nugget",
                B: "minecraft:glass_bottle"
            }
        },
        //Golden Apple
        {
            output: "minecraft:enchanted_golden_apple",
            pattern: ["EGE", "GAG", "EGE"],
            key: {
                E: "minecraft:experience_bottle",
                G: "minecraft:gold_block",
                A: "minecraft:golden_apple"
            }
        },
        //Dragon Egg
        {
            output: "minecraft:dragon_egg",
            pattern: [" D ", "DED", "DDD"],
            key: {
                D: "forbidden_arcanus:dragon_scale",
                E: "#forge:eggs",
            }
        },
        //Crimson Nylium
        {
            output: "minecraft:crimson_nylium",
            pattern: [" F ", "FNF", " F "],
            key: {
                N: "minecraft:netherrack",
                F: "minecraft:crimson_fungus",
            }
        },
        //Warped Nylium
        {
            output: "minecraft:warped_nylium",
            pattern: [" F ", "FNF", " F "],
            key: {
                N: "minecraft:netherrack",
                F: "minecraft:warped_fungus",
            }
        }
    ]

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.output)
    })
})