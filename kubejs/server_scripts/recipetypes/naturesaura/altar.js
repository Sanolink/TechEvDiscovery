//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.2.0

ServerEvents.recipes(event => {

    const recipes = [
        {
            id: 'datura_seeds',
            input: { item: 'minecraft:wheat_seeds'},
            output: { item: 'occultism:datura_seeds'},
            catalyst: { item: 'naturesaura:generator_limit_remover'},
            aura: 5000,
            time: 50
        },
        {
            id: 'arcane_crystal_dust',
            input: { item: 'forbidden_arcanus:arcane_crystal'},
            output: { item: 'forbidden_arcanus:arcane_crystal_dust'},
            catalyst: { item: 'naturesaura:crushing_catalyst'},
            aura: 5000,
            time: 50
        }

    ]

    //General Altar Function
    recipes.forEach((recipe) => {
        recipe.type = "naturesaura:altar"
        event.custom(recipe).id("naturesaura:altar/" + recipe.id)
    })
})