//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {
    
    //Recipes
    const shapeless = [
        //Iron Knife
        {
            output: "farmersdelight:iron_knife",
            input: ["farmersdelight:flint_knife", "minecraft:iron_ingot"]
        },
        //Golden Knife
        {
            output: "farmersdelight:golden_knife",
            input: ["farmersdelight:iron_knife", "minecraft:gold_ingot"]
        },
        //Diamond Knife
        {
            output: "farmersdelight:diamond_knife",
            input: ["farmersdelight:golden_knife", "minecraft:diamond"]
        },
    ]

    shapeless.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.input).id(recipe.output)
    })
})