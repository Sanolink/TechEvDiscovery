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
(_____)         Last Modification : 1.4.5         (_____)

*/

ServerEvents.recipes(event => {

    //Recipes
    const makeSequence = (transition, steps) =>
        steps.map(step => step(transition))

    const Cutting = () => transition => ({
        type: 'create:cutting',
        ingredients: [parseIngredient(transition)],
        results: [parseIngredient(transition)]
    })

    const Pressing = () => transition => ({
        type: 'create:pressing',
        ingredients: [parseIngredient(transition)],
        results: [parseIngredient(transition)]
    })

    const Deploying = item => transition => ({
        type: 'create:deploying',
        ingredients: [
            parseIngredient(transition),
            parseIngredient(item)
        ],
        results: [parseIngredient(transition)]
    })

    const Filling = fluid => transition => ({
        type: 'create:filling',
        ingredients: [
            parseIngredient(transition),
            fluid
        ],
        results: [parseIngredient(transition)]
    })

    const Energising = energy => transition => ({
        type: 'create_new_age:energising',
        ingredients : [parseIngredient(transition)],
        energy_needed: energy,
        results: [parseIngredient(transition)]
    })

    const recipes = [
        //Fishing Rod
        {
            id: "fishing_rod",
            input: [parseIngredient("#forge:rods/wooden")],
            output: [parseIngredient("minecraft:fishing_rod")],
            transition: "minecraft:fishing_rod_cast",
            sequence: makeSequence("minecraft:fishing_rod_cast", [
                Deploying("aquaculture:fishing_line"),
                Deploying("aquaculture:iron_hook")
            ])
        },
        //Engineer's Hammer
        {
            id: "hammer",
            input: [parseIngredient("#forge:rods/wooden")],
            output: [parseIngredient("immersiveengineering:hammer")],
            loops: 2,
            transition: "immersiveengineering:incomplete_hammer",
            sequence: makeSequence("immersiveengineering:incomplete_hammer", [
                Deploying("#twilightforest:fiery_vial"),
                Filling(FluidWithCount("create_things_and_misc:slime", 100)),
                Pressing(),
                Deploying("createdeco:cast_iron_sheet"),
                Pressing()
            ])
        },
        //Engineer's Wire Cutters
        {
            id: "incomplete_wirecutter",
            input: [parseIngredient("#forge:rods/wooden")],
            output: [parseIngredient("immersiveengineering:wirecutter")],
            transition: "immersiveengineering:incomplete_wirecutter",
            sequence: makeSequence("immersiveengineering:incomplete_wirecutter", [
                Deploying("#forge:rods/wooden"),
                Filling(FluidWithCount("create_things_and_misc:slime", 100)),
                Pressing(),
                Deploying("createdeco:cast_iron_sheet"),
                Cutting()
            ])
        },
        //Psimetal CAD Assembly
        {
            id: "cad_assembly_psimetal",
            input: [parseIngredient("psi:cad_assembly_gold")],
            output: [parseIngredient("psi:cad_assembly_psimetal")],
            transition: "psi:incomplete_cad_assembly_psimetal",
            sequence: makeSequence("psi:incomplete_cad_assembly_psimetal", [
                Cutting(),
                Deploying("psi:spell_bullet"),
                Pressing(),
                Filling(FluidWithCount("psi:destabilized_psimetal", 400))
            ])
        },
        //Iron CAD Assembly
        {
            id: "cad_assembly_iron",
            input: [parseIngredient("reliquary:hammer_assembly")],
            output: [parseIngredient("psi:cad_assembly_iron")],
            transition: "reliquary:hammer_assembly",
            sequence: makeSequence("reliquary:hammer_assembly", [
                Deploying("reliquary:grip_assembly"),
                Pressing(),
                Deploying("reliquary:barrel_assembly"),
                Pressing()
            ])
        },
        //Heart Amulet
        {
            id: "heart_amulet",
            input: [parseIngredient("eidolon:void_amulet")],
            output: [parseIngredient("bhc:heart_amulet")],
            transition: "bhc:incomplete_heart_amulet",
            sequence: makeSequence("bhc:incomplete_heart_amulet", [
                Cutting(),
                Deploying("#forge:heart")
            ])
        },
        // Copper Alloy
        {
            id: "copper_alloy",
            input: [parseIngredient("create:andesite_alloy")],
            output: [parseIngredient("create:copper_alloy")],
            transition: "create:incomplete_copper_alloy",
            sequence: makeSequence("create:incomplete_copper_alloy", [
                Filling(FluidWithCount("minecraft:water", 250)),
                Deploying("#forge:plates/copper")
            ])
        },
        // Reactor Casing
        {
            id: "reactor_casing",
            input: [parseIngredient("ae2:smooth_sky_stone_block")],
            output: [parseIngredient("create_new_age:reactor_casing")],
            transition: "create_new_age:incomplete_casing",
            sequence: makeSequence("create_new_age:incomplete_casing", [
                Deploying("#forge:plates/cast_iron"),
                Deploying("#forge:plates/cast_iron"),
                Deploying("#forge:plates/cast_iron"),
                Deploying("#forge:plates/cast_iron"),
                Pressing()
            ])
        },
        // Chiaroscuro Actuator
        {
            id: "chiaroscuro_actuator",
            input: [parseIngredient("createqol:incomplete_chiaroscuro_actuator")],
            output: [parseIngredient("createqol:chiaroscuro_actuator")],
            loops: 3,
            transition: "createqol:incomplete_chiaroscuro_actuator",
            sequence: makeSequence("createqol:incomplete_chiaroscuro_actuator", [
                Deploying("createaddition:large_connector"),
                Deploying("pneumaticcraft:compressed_iron_gear"),
                Pressing()
            ])
        },
        // PCB
        {
            id: "printed_circuit_board",
            input: [parseIngredient("pneumaticcraft:unassembled_pcb")],
            output: [parseIngredient("pneumaticcraft:printed_circuit_board")],
            loops: 2,
            transition: "pneumaticcraft:unassembled_pcb",
            sequence: makeSequence("pneumaticcraft:unassembled_pcb", [
                Filling(FluidWithCount("pneumaticcraft:etching_acid", 125)),
                Deploying("pneumaticcraft:basic_microchip"),
                Deploying("pneumaticcraft:transistor"),
                Deploying("pneumaticcraft:capacitor"),
                Energising(5000)
            ])
        }
    ]

    function createTubes(type) {
        recipes.push(
            {
                id: `${type}_tube`,
                input: [parseIngredient(`create:${type}_shell`)],
                output: [ThermalChanceItem(`create:${type}_tube`, 20), ThermalChanceItem(`create:${type}_shell`, 80)],
                transition: `create:${type}_shell`,
                sequence: makeSequence(`create:${type}_shell`, [
                    Filling(FluidWithCount("create_things_and_misc:slime", 100)),
                    Pressing(),
                    Pressing(),
                ])
            }
        )
    }

    createTubes("electron")
    createTubes("positron")
    createTubes("source")
    createTubes("psi")
    createTubes("antiproton")

   //General Sequenced Assembly Function
    recipes.forEach(recipe => {
        let json = {
            type: 'create:sequenced_assembly',
            ingredient: recipe.input,
            results: recipe.output,
            loops: recipe.loops || 1,
            transitionalItem: parseIngredient(recipe.transition),
            sequence: recipe.sequence
        }
        event.custom(json).id(`create:sequenced_assembly/${recipe.id}`)
    })
})
