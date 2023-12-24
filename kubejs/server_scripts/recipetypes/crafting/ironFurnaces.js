//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {

    //Remove
    
    //Recipes
    const recipes = [
        //Rainbow Coal
        {
            output: "ironfurnaces:rainbow_coal",
            pattern: ["RMR", "MCM", "RMR"],
            key: {
                R: "ironfurnaces:rainbow_core",
                M: "ironfurnaces:million_furnace",
                C: "minecraft:coal_block"
            }
        },
    ]

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.output)
    })
})