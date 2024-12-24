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
    ]

    const IngotsToGears = [
        "compressed_iron",
        "brass",
        "steel",
        "zinc",
        "uranium",
        "platinum",
        "osmium",
        "iridium",
        "aluminum"
    ].forEach((ingot) => {
        recipes.push(
            {
                id: ingot + "_ingot_to_gear",
                output: Ingredient.of("#forge:gears/" + ingot),
                inputs: [Ingredient.of("#forge:ingots/" + ingot, 4), Ingredient.of('thermal:press_gear_die')],
                energy: 2400
            }
        )
    });

    const GemsToGears = [
        "quartz",
        "emerald",
        "lapis",
        "diamond"
    ].forEach((gem) => {
        recipes.push(
            {
                id: gem + "_gem_to_gear",
                output: Ingredient.of("#forge:gears/" + gem),
                inputs: [Ingredient.of("#forge:gems/" + gem, 4), Ingredient.of('thermal:press_gear_die')],
                energy: 2400
            }
        )
    });

    const IngotsToPlates = [
        "brass",
        "steel",
        "zinc",
        "uranium",
        "platinum",
        "osmium",
        "iridium",
        "aluminum"
    ].forEach((ingot) => {
        recipes.push(
            {
                id: ingot + "_ingot_to_plate",
                output: Ingredient.of("#forge:plates/" + ingot),
                inputs: Ingredient.of("#forge:ingots/" + ingot),
                energy: 2400
            }
        )
    });

    const GemsToPlates = [
        "diamond"
    ].forEach((gem) => {
        recipes.push(
            {
                id: gem + "_gem_to_plate",
                output: Ingredient.of("#forge:plates/" + gem),
                inputs: Ingredient.of("#forge:gems/" + gem),
                energy: 2400
            }
        )
    });
 
    //General Press Function
    recipes.forEach((recipe) => {
    event.recipes.thermal.press(recipe.output, recipe.inputs).energy(recipe.energy).id("thermal:machines/press/press_" + recipe.id);
    });
})