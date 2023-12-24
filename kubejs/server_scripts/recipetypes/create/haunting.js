//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {

    //Remove

    //Recipes
    const recipes = [
        //Haunting Gravel
        {
            id: "gravel",
            input: "minecraft:gravel",
            output: "minecraft:tuff"
        }
    ]

    //General Haunting Function
    recipes.forEach(recipe => {
        event.recipes.create.haunting(recipe.output, recipe.input).id("create:haunting/" + recipe.id)
    })

})
