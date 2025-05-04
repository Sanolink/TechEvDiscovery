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
        //Neptunium Fillet Knife
        {
            id: "neptunium_fillet_knife",
            input: "farmersdelight:netherite_knife",
            output: "aquaculture:neptunium_fillet_knife",
            upgrade: "aquaculture:neptunium_ingot"
        },
        //Stone Wand
        {
            id: "stone_wand",
            input: "minecraft:stick",
            output: "constructionwand:stone_wand",
            upgrade: "constructionwand:core_stone"
        },
        //Iron Wand
        {
            id: "iron_wand",
            input: "constructionwand:stone_wand",
            output: "constructionwand:iron_wand",
            upgrade: "constructionwand:core_iron"
        },
        //Diamond Wand
        {
            id: "diamond_wand",
            input: "constructionwand:iron_wand",
            output: "constructionwand:diamond_wand",
            upgrade: "constructionwand:core_diamond"
        },
        //Infinity Wand
        {
            id: "infinity_wand",
            input: "constructionwand:diamond_wand",
            output: "constructionwand:infinity_wand",
            upgrade: "constructionwand:core_infinity"
        },
        //Netherite Sandpaper
        {
            id: "netherite_sandpaper",
            input: "createaddition:diamond_grit_sandpaper",
            output: "create:netherite_sandpaper",
            upgrade: "minecraft:netherite_ingot"
        },
        //Zeal Lighter
        {
            id: "zeal_lighter",
            input: "blue_skies:moonstone_shard",
            output: "blue_skies:zeal_lighter",
            upgrade: "blue_skies:charoite"
        }
    ]

    //General Smithing Function
    recipes.forEach(recipe => {
        event.smithing(recipe.output, recipe.input, recipe.upgrade).id("minecraft:smithing/" + recipe.id)
    })
})