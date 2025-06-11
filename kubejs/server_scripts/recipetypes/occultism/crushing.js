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
(_____)         Last Modification : 1.3.7         (_____)

*/


ServerEvents.recipes(event => {

    //Recipes
    let recipes = [
        {
            id:  "coal_coke_dust",
            output: parseIngredient("#forge:dusts/coal_coke"),
            input: parseIngredient("#forge:coal_coke"),
            ignore_crushing_multiplier: false
        },
        {
            id:  "coal_coke_dust_from_block",
            output: ChanceOrCountItem("immersiveengineering:dust_coke", 9),
            input: parseIngredient("#forge:storage_blocks/coal_coke"),
            ignore_crushing_multiplier: false
        },
        {
            id:  "petcoke_dust",
            output: parseIngredient("#forge:dusts/coal_petcoke"),
            input: parseIngredient("#forge:coal_petcoke"),
            ignore_crushing_multiplier: false
        },
        {
            id:  "petcoke_dust_from_block",
            output: ChanceOrCountItem("immersivepetroleum:petcoke_dust", 9),
            input: parseIngredient("#forge:storage_blocks/coal_petcoke"),
            ignore_crushing_multiplier: false
        },
        {
            id:  "niter_dust",
            output: ChanceOrCountItem("thermal:niter_dust", 2),
            input: parseIngredient("#forge:ores/niter")
        },
        {
            id: "soul_sand_dust",
            output: parseIngredient("#forge:dusts/soul_sand"),
            input: parseIngredient("minecraft:soul_sand"),
            ignore_crushing_multiplier: false
        },
        {
            id: "sky_stone_dust",
            output: parseIngredient("ae2:sky_dust"),
            input: parseIngredient("ae2:sky_stone_block")
        },
        {
            id: "ender_pearl_dust",
            output: parseIngredient("#forge:dusts/ender_pearl"),
            input: parseIngredient("#forge:ender_pearls"),
            ignore_crushing_multiplier: false
        }
    ]

    const IngotsToDusts = [
        "shellite",
        "soul_infused",
        "twinite",
        "dragonsteel",
        "prismalium",
        "melodium",
        "stellarium"
    ].forEach((mat) => {
        recipes.push(
            {
                id: `${mat}_dust_from_ingot`,
                output: parseIngredient(`#forge:dusts/${mat}`),
                input: parseIngredient(`#forge:ingots/${mat}`),
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
                id: `${mat}_dust_from_gem`,
                output: parseIngredient(`#forge:dusts/${mat}`),
                input: parseIngredient(`#forge:gems/${mat}`)
            }
        )
    });

   //General Crushing Function
    recipes.forEach(recipe => {
        let json = {
            type: 'occultism:crushing',
            ingredient: recipe.input,
            result: recipe.output,
            min_tier: recipe.tier || -1,
            crushing_time: recipe.time || 200,
            ignore_crushing_multiplier: recipe.ignore_crushing_multiplier || true
        }
        event.custom(json).id(`occultism:crushing/${recipe.id}`)
    })
})