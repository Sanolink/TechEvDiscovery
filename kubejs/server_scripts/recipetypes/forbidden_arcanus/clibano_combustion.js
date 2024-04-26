//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.2.0

ServerEvents.recipes(event => {

    //Remove

    //Recipes
    const recipes = [
        {
            id: "obsidian_ingot",
            cooking_time: 100,
            experience: 0.35,
            ingredient: {item: "forbidden_arcanus:obsidian_with_iron"},
            result: "forbidden_arcanus:obsidian_ingot"
        }
    ]

    //General Clibano Combustion Function
    recipes.forEach((recipe) => {
        recipe.type = "forbidden_arcanus:clibano_combustion",
        event.custom(recipe).id("forbidden_arcanus:clibano_combustion/" + recipe.id)
    })
})