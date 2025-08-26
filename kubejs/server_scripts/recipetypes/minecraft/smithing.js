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
(_____)         Last Modification : 1.4.7         (_____)

*/

ServerEvents.recipes(event => {

    //Recipes 
    const recipes = [
        //Neptunium Fillet Knife
        {
            input: "farmersdelight:netherite_knife",
            output: "aquaculture:neptunium_fillet_knife",
            upgrade: "aquaculture:neptunium_ingot"
        },
        //Stone Wand
        {
            input: "minecraft:stick",
            output: "constructionwand:stone_wand",
            upgrade: "constructionwand:core_stone"
        },
        //Iron Wand
        {
            input: "constructionwand:stone_wand",
            output: "constructionwand:iron_wand",
            upgrade: "constructionwand:core_iron"
        },
        //Diamond Wand
        {
            input: "constructionwand:iron_wand",
            output: "constructionwand:diamond_wand",
            upgrade: "constructionwand:core_diamond"
        },
        //Infinity Wand
        {
            input: "constructionwand:diamond_wand",
            output: "constructionwand:infinity_wand",
            upgrade: "constructionwand:core_infinity"
        },
        //Netherite Sandpaper
        {
            input: "createaddition:diamond_grit_sandpaper",
            output: "create:netherite_sandpaper",
            upgrade: "minecraft:netherite_ingot"
        },
        //Zeal Lighter
        {
            input: "blue_skies:moonstone_shard",
            output: "blue_skies:zeal_lighter",
            upgrade: "blue_skies:charoite"
        },
        //Dragonseeker
        {
            input: "iceandfire:dragon_stick", 
            output: "dragonseeker:dragonseeker",
            upgrade: "minecraft:netherite_ingot"
        },
        //Legendary Dragonseeker
        {
            input: "dragonseeker:epic_dragonseeker",
            output: "dragonseeker:legendary_dragonseeker",
            upgrade: "#iceandfire:dragon_bloods"
        },
        //Godly Dragonseeker
        {
            input: "dragonseeker:legendary_dragonseeker",
            output: "dragonseeker:godly_dragonseeker",
            upgrade: "#iceandfire:dragonsteels"
        }
    ]

    //General Smithing Function
    recipes.forEach(recipe => {
        event.smithing(recipe.output, recipe.input, recipe.upgrade).id(`minecraft:smithing/${recipe.output.split(":")[1]}`)
    })
})