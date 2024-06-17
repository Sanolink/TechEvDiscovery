//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.3.0

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
                id: "thermal:machines/press/press_" + ingot + "_ingot_to_gear",
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
                id: "thermal:machines/press/press_" + gem + "_gem_to_gear",
                output: Ingredient.of("#forge:gears/" + gem),
                inputs: [Ingredient.of("#forge:gems/" + gem, 4), Ingredient.of('thermal:press_gear_die')],
                energy: 2400
            }
        )
    });

 

    recipes.forEach((recipe) => {
    event.recipes.thermal.press(recipe.output, recipe.inputs).energy(recipe.energy).id(recipe.id);
    });
})