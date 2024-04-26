//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.2.0

ServerEvents.recipes(event => {
    const recipes = [
        {
            id: 'flowing_time',
            inputs: [
                { item: 'kubejs:compressed_iron_bottle', count: 1 },
                { item: 'naturesaura:clock_hand', count: 1 },
                { item: 'upgradednetherite_ultimate:ultimate_essence', count: 1 },
                { item: 'ars_nouveau:glyph_extend_time', count: 1 }
            ],
            pressure: 4.0,
            results: [{ item: 'kubejs:flowing_time', count: 1 }]
        }
    ]

    //General Pressure Chamber Function
    recipes.forEach((recipe) => {
        let inputs = []
        recipe.inputs.forEach((input) => {
            input.type = 'pneumaticcraft:stacked_item'
            inputs.push(input)
        })

        event
            .custom({
                type: 'pneumaticcraft:pressure_chamber',
                inputs: inputs,
                pressure: recipe.pressure,
                results: recipe.results
            })
            .id("pneumaticcraft:pressure_chamber/" + recipe.id)
    });

})



