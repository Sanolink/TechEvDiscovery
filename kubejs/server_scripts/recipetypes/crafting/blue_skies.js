//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.2.0

ServerEvents.recipes(event => {

    //Recipes
    const recipes = [
        //Blue Journal
        {
            output: "blue_skies:blue_journal",
            pattern: ["MBM"],
            key: {
                M: "blue_skies:moonstone_shard",
                B: "minecraft:book"
            }
        },
        //Everstone
        {
            output: "blue_skies:everstone",
            pattern: ["NP", "PN"],
            key: {
                N: "blue_skies:nature_stone",
                P: "blue_skies:poison_stone"
            }
        }
    ]

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.output)
    })
})