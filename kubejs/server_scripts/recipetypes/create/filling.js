//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {

    // Remove

    //Recipes 
    const recipes = [
        {
            id: 'molten_redstone',
            output: 'create:rose_quartz',
            input: [Fluid.of("create:molten_redstone", 200), 'minecraft:quartz']
        },
        {
            id: 'molten_lapis',
            output: 'create:blue_quartz',
            input: [Fluid.of("create:molten_lapis", 200), 'minecraft:quartz']
        },
        {
            id: 'molten_source',
            output: 'create:source_quartz',
            input: [Fluid.of("create:molten_source", 200), 'minecraft:quartz']
        }
    ]
    //General Filling Function
    recipes.forEach(recipe => {

        event.recipes.create.filling(recipe.output, recipe.input).id("create:filling/" + recipe.id)

    })
})
