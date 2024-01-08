//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0 

ServerEvents.recipes(event => {

    //Remove
    event.remove([{ type: 'minecraft:blasting', input: '#create:crushed_raw_materials' }])

    //Recipes
    const recipes = [
        {
            id: 'raw_andesite_alloy',
            in: 'create:raw_andesite_alloy',
            out: 'create:andesite_alloy'
        }
    ]

    //General Blasting Function
    recipes.forEach((recipe) => {
        event.blasting(recipe.out, recipe.in).id('minecraft:blasting/' + recipe.id)
    })
})
