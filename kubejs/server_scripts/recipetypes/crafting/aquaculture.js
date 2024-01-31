//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {

    //Recipes
    const recipes = [
        //Iron Fishing Rod
        {
            output: "aquaculture:iron_fishing_rod",
            pattern: ["  I", " R ", "I  "],
            key: {
                I: "minecraft:iron_ingot",
                R: "minecraft:fishing_rod"
            }
        },
        //Gold Fishing Rod
        {
            output: "aquaculture:gold_fishing_rod",
            pattern: ["  I", " R ", "I  "],
            key: {
                I: "minecraft:gold_ingot",
                R: "aquaculture:iron_fishing_rod"
            }
        },
        //Diamond Fishing Rod
        {
            output: "aquaculture:diamond_fishing_rod",
            pattern: ["  D", " R ", "D  "],
            key: {
                D: "minecraft:diamond",
                R: "aquaculture:gold_fishing_rod"
            }
        },
        //Neptunium Fishing Rod
        {
            output: "aquaculture:neptunium_fishing_rod",
            pattern: ["  I", " R ", "I  "],
            key: {
                I: "aquaculture:neptunium_ingot",
                R: "aquaculture:diamond_fishing_rod"
            }
        }
    ]

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.output)
    })
})