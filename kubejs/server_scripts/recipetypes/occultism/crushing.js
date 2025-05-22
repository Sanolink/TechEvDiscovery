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
(_____)         Last Modification : 1.3.5         (_____)

*/


ServerEvents.recipes(event => {

    //Recipes
    let recipes = [
        {
            id:  "coal_coke_dust",
            output: Ingredient.of("#forge:dusts/coal_coke"),
            input: Ingredient.of("#forge:coal_coke")
        },
        {
            id:  "coal_coke_dust_from_block",
            output: Item.of("immersiveengineering:dust_coke", 9),
            input: Ingredient.of("#forge:storage_blocks/coal_coke")
        },
        {
            id:  "petcoke_dust",
            output: Ingredient.of("#forge:dusts/coal_petcoke"),
            input: Ingredient.of("#forge:coal_petcoke")
        },
        {
            id:  "petcoke_dust_from_block",
            output: Item.of("immersivepetroleum:petcoke_dust", 9),
            input: Ingredient.of("#forge:storage_blocks/coal_petcoke")
        },
        {
            id:  "niter_dust",
            output: Item.of("thermal:niter_dust", 2),
            input: Ingredient.of("#forge:ores/niter")
        },
        {
            id: "soul_sand_dust",
            output: Ingredient.of("#forge:dusts/soul_sand"),
            input: "minecraft:soul_sand"
        },
        {
            id: "sky_stone_dust",
            output: "ae2:sky_dust",
            input: "ae2:sky_stone_block"
        },
        {
            id: "ender_pearl_dust",
            output: Ingredient.of("#forge:dusts/ender_pearl"),
            input: Ingredient.of("#forge:ender_pearls")
        }
    ]

    const IngotsToDusts = [
        "shellite",
        "soul_infused",
        "twinite",
        "dragonsteel",
        "prismalium",
        "melodium",
        "stellarium",
        "brass"
    ].forEach((mat) => {
        recipes.push(
            {
                id: mat + "_dust_from_ingot",
                output: Ingredient.of("#forge:dusts/" + mat),
                input: Ingredient.of("#forge:ingots/" + mat),
            }
        )
    });

    const GemsToDusts = [
        "fluix",
        "certus_quartz",
        "amethyst",
        "quartz",
        "diamond",
        "emerald",
        "lapis",
        "apatite",
        "sulfur",
        "cinnabar",
        "niter"
    ].forEach((mat) => {
        recipes.push(
            {
                id: mat + "_dust_from_gem",
                output: Ingredient.of("#forge:dusts/" + mat),
                input: Ingredient.of("#forge:gems/" + mat)
            }
        )
    });

    //General Crushing Function
    recipes.forEach((recipe) => {
        event.recipes.occultism.crushing(recipe.output, recipe.input).id("occultism:crushing/" + recipe.id);
        });
    })