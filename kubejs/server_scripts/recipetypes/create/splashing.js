//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {

    //Remove
    event.remove({type:'create:splashing', input: '#create:crushed_raw_materials'})

    //Recipes
    let recipes = []

    //Crushed Raw List to Splash
    const crushed = [
        {mat: "zinc", sec: "#forge:gunpowder"},
        {mat: "copper", sec: "#forge:clay"},
        {mat: "gold", sec: "#forge:gems/quartz"},
        {mat: "iron", sec: "#forge:dusts/redstone"},
        {mat: "osmium", sec: "#forge:gems/lapis"},
        {mat: "silver", sec: "#forge:gems/amethyst"},
        {mat: "tin", sec: "minecraft:flint"},
        {mat: "uranium", sec: "byg:emeraldite_shards"},
        {mat: "lead", sec: "minecraft:coal"},
        {mat: "aluminum"},
        {mat: "nickel"},
        {mat: "platinum"}
    ]
    //Splashing Crushed Raw 
    crushed.forEach(material => {
        if (material.sec != undefined) {recipes.push({
                    id: "crushed_raw_" + material.mat,
                    input: "create:crushed_raw_" + material.mat,
                    output: [Item.of("#forge:nuggets/" + material.mat, 9), Item.of(material.sec).withChance(0.5)]
                })} else {recipes.push({
                    id: "crushed_raw_" + material.mat,
                    input: "create:crushed_raw_" + material.mat,
                    output: Item.of("#forge:nuggets/" + material.mat, 9)
                })}
    })

    //General Splashing Function
    recipes.forEach(recipe => {
        event.recipes.create.splashing(recipe.output, recipe.input).id("create:splashing/" + recipe.id)
    })
})