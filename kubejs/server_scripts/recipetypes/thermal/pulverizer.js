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

    //Remove

    //Recipes
    let recipes = [
        {
            id:  "coal_coke_to_dust",
            output: Ingredient.of("#forge:dusts/coal_coke"),
            inputs: Ingredient.of("#forge:coal_coke"),
            energy: 2000
        },
        {
            id:  "coke_block_to_dust",
            output: Item.of("immersiveengineering:dust_coke").withCount(9),
            inputs: Ingredient.of("#forge:storage_blocks/coal_coke"),
            energy: 2000
        },
        {
            id:  "obsidian_to_dust",
            output: [Ingredient.of("#forge:dusts/obsidian"), Item.of("minecraft:obsidian").withChance(0.75)],
            inputs: "minecraft:obsidian",
            energy: 2000
        }
    ]

    const IngotsToDusts = [
        "brass",
        "iridium",
        "uranium",
        "aluminum"
    ].forEach((ingot) => {
        recipes.push(
            {
                id: ingot + "_ingot_to_dust",
                output: Ingredient.of("#forge:dusts/" + ingot),
                inputs: Ingredient.of("#forge:ingots/" + ingot),
                energy: 2000
            }
        )
    });

    const GemsToDusts = [
        "fluix",
        "certus_quartz",
        "sapphire",
        "peridot",
        "ruby"
    ].forEach((gem) => {
        recipes.push(
            {
                id: gem + "_gem_to_dust",
                output: Ingredient.of("#forge:dusts/" + gem),
                inputs: Ingredient.of("#forge:gems/" + gem),
                energy: 2000
            }
        )
    });

    //General Pulverizer Function
    recipes.forEach((recipe) => {
        event.recipes.thermal.pulverizer(recipe.output, recipe.inputs).energy(recipe.energy).id("thermal:machines/pulverizer/pulverizer_" + recipe.id);
        });
    })