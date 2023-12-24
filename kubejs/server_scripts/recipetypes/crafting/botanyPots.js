//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {

    //Remove
    
    event.remove({ output: '#botanypots:all_botany_pots'})

    //Recipes
    const recipes = [
        //Botany Pot
        {
            output: "botanypots:terracotta_botany_pot",
            pattern: ["ERE", "TPT", "TTT"],
            key: {
                E: "ars_nouveau:earth_essence",
                R: "farmersdelight:rich_soil",
                T: "#minecraft:terracotta",
                P: "minecraft:flower_pot"
            }
        },
        //Hopper Botany Pot
        {
            output: "botanypots:terracotta_hopper_botany_pot",
            pattern: ["DVS", "HBP", "COC"],
            key: {
                D: "create:mechanical_drill",
                V: "create_things_and_misc:vibration_mechanism",
                S: "create:mechanical_saw",
                H: "create:mechanical_harvester",
                B: "botanypots:terracotta_botany_pot",
                P: "create:mechanical_plough",
                C: "create:cogwheel",
                O: "minecraft:hopper"
            }
        },
    ]

    recipes.forEach(recipe => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.output)
    })
})