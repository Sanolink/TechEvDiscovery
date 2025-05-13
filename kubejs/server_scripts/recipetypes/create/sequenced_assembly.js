/* 
 _____                                             _____ 
( ___ ) © SanoLink 2024/2025. All rights reserved.( ___ )
 |   |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|   | 
 |   |  _____         _     _____        ______    |   | 
 |   | |_   _|__  ___| |__ | ____|_   __ \ \ \ \   |   | 
 |   |   | |/ _ \/ __| '_ \|  _| \ \ / /  \ \ \ \  |   | 
 |   |   | |  __/ (__| | | | |___ \ V /   / / / /  |   | 
 |   |  _|_|\___|\___|_| |_|_____| \_/   /_/_/_/   |   | 
 |   | |  _ \(_)___  ___ _____   _____ _ __ _   _  |   | 
 |   | | | | | / __|/ __/ _ \ \ / / _ \ '__| | | | |   | 
 |   | | |_| | \__ \ (_| (_) \ V /  __/ |  | |_| | |   | 
 |   | |____/|_|___/\___\___/ \_/ \___|_|   \__, | |   | 
 |   |                                      |___/  |   | 
 |___|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|___| 
(_____)         Last Modification : 1.3.4         (_____)

*/

ServerEvents.recipes(event => {

    //Recipes
    const recipes = [
        //Fishing Rod
        {
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
        },
        //Psimetal CAD Assembly
        {
            input:"psi:cad_assembly_gold",
            transition:"psi:incomplete_cad_assembly_psimetal",
            output:["psi:cad_assembly_psimetal"],
            loops: 1,
            sequence: [
                {type: 'cutting'},
                {type: 'deploying', item:"psi:spell_bullet"},
                {type: 'pressing'},
                {type: 'filling',  fluid:Fluid.of("psi:destabilized_psimetal", 400)},
            ]
        },
        //Iron CAD Assembly
        {
            input:"reliquary:hammer_assembly",
            transition:"reliquary:hammer_assembly",
            output:["psi:cad_assembly_iron"],
            loops: 1,
            sequence: [
                {type: 'deploying', item:"reliquary:grip_assembly"},
                {type: 'pressing'},
                {type: 'deploying', item:"reliquary:barrel_assembly"},
                {type: 'pressing'},
            ]
        },
        //Heart Amulet
        {
            input:"eidolon:void_amulet",
            transition:"bhc:incomplete_heart_amulet",
            output:["bhc:heart_amulet"],
            loops: 1,
            sequence: [
                {type: 'cutting'},
                {type: 'deploying', item:"#forge:heart"},
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
        event.recipes.create.sequenced_assembly(recipe.output, recipe.input, sequence).transitionalItem(recipe.transition).loops(recipe.loops).id("create:sequenced_assembly/" + recipe.output[0].split(":")[1])
    })

})
