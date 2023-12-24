//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {

    //Remove

    //Recipes
    let recipes = [
        //Pressing Diamond
        {
            id: "diamond",
            input: "#forge:gems/diamond",
            output: "#forge:plates/diamond"
        },
        //Pressing Sand Paper
        {
            id: "sand_paper",
            input: "minecraft:sand",
            output: "create:sand_paper"
        },
        //Pressing Red Sand Paper
        {
            id: "red_sand_paper",
            input: "minecraft:red_sand",
            output: "create:red_sand_paper"
        }
    ]
    const specialIngots = [
        'iridium', 
        'enderium', 
        'signalum', 
        'lumium', 
        'bronze', 
        'invar', 
        'osmium', 
        'platinum', 
        'tin'
    ]
    specialIngots.forEach(ingot => {
        recipes.push(
            {
                id: ingot + "_ingot",
                input: "#forge:ingots/" + ingot,
                output: "#forge:plates/" + ingot
            }
        )
    })
    //General Pressing Function
    recipes.forEach(recipe => {
        event.recipes.create.pressing(recipe.output, recipe.input).id("create:pressing/" + recipe.id)
    })
})