//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.2.0

ServerEvents.recipes(event => {

    const recipes = [
        {
            id: 'compressed_iron_bottle',
            input: [
                { item: 'minecraft:glass_bottle', count: 1 }
            ],
            output: { item: 'tiab:compressed_iron_bottle', count: 1 },
            program: 'laser',
        }
    ]

    //General Assembly Function
    recipes.forEach((recipe) => {
        event
            .custom({
                type: "pneumaticcraft:assembly_" + recipe.program,
                input: recipe.input,
                result: recipe.output,
                program: recipe.program
            })
            .id("pneumaticcraft:assembly/" + recipe.id)
    })
})
