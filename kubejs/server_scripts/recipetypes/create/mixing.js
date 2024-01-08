//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {

    //Remove
    event.remove({ id: 'create:mixing/andesite_alloy'})
    event.remove({ id: 'create:mixing/andesite_alloy_from_zinc'})
    //Recipes 
    const recipes = [
        //Basic Recipes
        {
            id: 'andesite_alloy',
            type: 'basic',
            input: ['minecraft:andesite', '#forge:nuggets/pewter'],
            output: 'create:raw_andesite_alloy'
        },
        //Heated Recipes
        {
            id: 'pewter_blend',
            type: 'heated',
            input: ["minecraft:iron_ingot", "alltheores:lead_ingot"],
            output: Item.of('eidolon:pewter_blend', 2),
        },
        //Superheated Recipes
        {
            id: 'molten_redstone',
            type: 'superheated',
            input: Item.of('minecraft:redstone', 8),
            output: Fluid.of("create:molten_redstone", 200)
        },
        {
            id: 'molten_lapis',
            type: 'superheated',
            input: Item.of('minecraft:lapis_lazuli', 8),
            output: Fluid.of("create:molten_lapis", 200)
        },
        {
            id: 'molten_source',
            type: 'superheated',
            input: Item.of('ars_nouveau:source_gem', 4),
            output: Fluid.of("create:molten_source", 200)
        }
    ]
    //General Mixing Function
    recipes.forEach(recipe => {
        if (recipe.type == 'basic') {
            event.recipes.create.mixing(recipe.output, recipe.input).id("create:mixing/" + recipe.id)
        } else if (recipe.type == 'heated') {
            event.recipes.create.mixing(recipe.output, recipe.input).id("create:mixing/" + recipe.id).heated()
        } else if (recipe.type == 'superheated') {
            event.recipes.create.mixing(recipe.output, recipe.input).id("create:mixing/" + recipe.id).superheated()
        }
    })
})
