//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {

    //Remove

    //Recipes 

    let recipes = [
    ]

    const ingotsDusts = [
        'iridium', 
        'netherite', 
        'enderium', 
        'lumium', 
        'signalum'
    ]
    const gemsDusts = [
        'diamond', 
        'sapphire', 
        'peridot', 
        'ruby'
    ]
    ingotsDusts.forEach(type => {
        recipes.push(
        {
            id : type + '_dust',
            input: '#forge:ingots/' + type,
            output: '#forge:dusts/' + type,
            secondaries: []
        }
    )})
    gemsDusts.forEach(type => {
        recipes.push(
        {
            id : type + '_dust',
            input: '#forge:gems/' + type,
            output: '#forge:dusts/' + type,
            secondaries: []
        }
    )})

    //General Crusher Function
    recipes.forEach(recipe => {
        event.recipes.immersiveengineeringCrusher(recipe.output, recipe.input, recipe.secondaries).id("immersiveengineering:crusher/" + recipe.id)
    })
})














