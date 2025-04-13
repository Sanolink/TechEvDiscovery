//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.2.0

ServerEvents.recipes(event => {

    //Remove

    //Recipes
    const recipes = [
        //Time In A Bottle
        {
            id: "time_in_a_bottle",
            output: "tiab:time_in_a_bottle",
            shape: [
                ' DDD ',
                ' DCD ',
                '  H  ',
                ' AMA ',
                'AENEA',
                'AUFUA',
                'AESEA',
                ' AAA ',
            ],
            key: {
                D: 'forbidden_arcanus:deorum_block',
                C: 'minecraft:clock',
                H: 'supplementaries:hourglass',
                A: 'blue_skies:aquite_block',
                M: 'occultism:dimensional_matrix',
                E: 'ars_nouveau:manipulation_essence',
                N: 'forbidden_arcanus:dark_nether_star',
                F: 'tiab:flowing_time',
                U: 'forbidden_arcanus:mundabitur_dust',
                S: 'forbidden_arcanus:sanity_meter'
            }
        }
    ]

    //General Mechanical Crafting Function
    recipes.forEach(recipe => {
        event.recipes.create.mechanical_crafting(recipe.output, recipe.shape, recipe.key).id("create:mechanical_crafting/" + recipe.id)
    })

})