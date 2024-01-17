//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {

    //Recipes
    let recipes = [
        {
            output: "twilightforest:twilight_portal_miniature_structure",
            pattern: ["LMH", "NBK", "UAS"],
            key: {
                L: 'twilightforest:lich_trophy',
                M: 'twilightforest:minoshroom_trophy',
                H: 'twilightforest:hydra_trophy',
                N: 'twilightforest:naga_trophy',
                B: 'twilightforest:magic_map',
                K: 'twilightforest:knight_phantom_trophy',
                U: 'twilightforest:snow_queen_trophy',
                A: 'twilightforest:alpha_yeti_trophy',
                S: 'twilightforest:ur_ghast_trophy'
            }
        }
    ]

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.output)
    })
})