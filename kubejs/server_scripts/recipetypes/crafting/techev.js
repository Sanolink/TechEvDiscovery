//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {

    //Recipes
    let recipes = [
    ]

    let shapeless = [
    ]

    var compact = ['auricargentum', 'cuperzinate', 'leadosnite', 'uratinumal'].forEach(item => {
        recipes.push(
            {
                output: "kubejs:raw_"+item+"_block",
                pattern: ["III", "III", "III"],
                key: {
                    I: "kubejs:raw_"+item,
                }
            },
        )
        shapeless.push(
            {   
                output: "kubejs:raw_"+item,
                count: '9x ',
                input: "kubejs:raw_"+item+"_block"
            }
        )
    })

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.output)
    })

    shapeless.forEach((recipe) => {
        event.shapeless(recipe.count + recipe.output, recipe.input).id(recipe.output)
    })
})