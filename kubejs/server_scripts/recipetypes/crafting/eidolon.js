//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {

    //Remove
    event.remove({ output: 'eidolon:pewter_blend', type: 'minecraft:crafting_shapeless' })
    //Recipes
    const recipes = [
    ]

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.output)
    })
})