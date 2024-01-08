//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {

    //Remove

    //Recipes
    const recipes = [
        //Fishing Rod
        {
            id:"fishing_rod",
            input:"#forge:rods/wooden",
            transition:"immersiveengineering:incomplete_wirecutter",
            output:["minecraft:fishing_rod"],
            loops: 1,
            sequence: [
                {type: 'deploying', item:"aquaculture:fishing_line"},
                {type: 'deploying', item:"aquaculture:iron_hook"}
            ]
        },
        //Engineer's Hammer
        {
            id:"hammer",
            input:"#forge:rods/wooden",
            transition:"immersiveengineering:incomplete_hammer",
            output:["immersiveengineering:hammer"],
            loops: 2,
            sequence: [
                {type: 'deploying', item:"#twilightforest:fiery_vial"},
                {type: 'filling',  fluid:Fluid.of("create_things_and_misc:slime", 100)},
                {type: 'pressing'},
                {type: 'deploying', item:"createdeco:cast_iron_sheet"},
                {type: 'pressing'}

            ]
        },
        //Engineer's Wire Cutters
        {
            id:"wirecutter",
            input:"#forge:rods/wooden",
            transition:"immersiveengineering:incomplete_wirecutter",
            output:["immersiveengineering:wirecutter"],
            loops: 1,
            sequence: [
                {type: 'deploying', item:"#forge:rods/wooden"},
                {type: 'filling',  fluid:Fluid.of("create_things_and_misc:slime", 100)},
                {type: 'pressing'},
                {type: 'deploying', item:"createdeco:cast_iron_sheet"},
                {type: 'cutting'}
            ]
        }
    ]

    //General Sequenced Assembly Function
    recipes.forEach(recipe => {
        let sequence = []
        let transition = recipe.transition
        recipe.sequence.forEach(step => {
            if (step.type == 'cutting'){sequence.push(event.recipes.create.cutting(transition, transition))}
            if (step.type == 'pressing'){sequence.push(event.recipes.create.pressing(transition, transition))}
            if (step.type == 'deploying'){sequence.push(event.recipes.create.deploying(transition, [transition, step.item]))}
            if (step.type == 'filling') {sequence.push(event.recipes.create.filling(transition, [transition, step.fluid]))}
        })
        event.recipes.create.sequenced_assembly(recipe.output, recipe.input, sequence).transitionalItem(recipe.transition).loops(recipe.loops).id("create:sequenced_assembly/" + recipe.id)
    })

})
