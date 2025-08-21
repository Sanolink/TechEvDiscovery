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

    CircuitEtcher('pneumaticcraft:unassembled_pcb', ['pneumaticcraft:basic_microchip', 'pneumaticcraft:transistor', 'pneumaticcraft:capacitor'], 'pneumaticcraft:printed_circuit_board')
    CircuitEtcher('pneumaticcraft:printed_circuit_board', ['pneumaticcraft:advanced_microchip', 'pneumaticcraft:transistor', 'pneumaticcraft:capacitor'], 'pneumaticcraft:advanced_printed_circuit_board')
    CircuitEtcher('pneumaticcraft:advanced_printed_circuit_board', ['pneumaticcraft:processing_microchip', 'pneumaticcraft:transistor', 'pneumaticcraft:capacitor'], 'pneumaticcraft:processing_printed_circuit_board')

    //General Circuit Etcher Function
    function CircuitEtcher(input, inputs, output, time) {
        let recipe = event.recipes.custommachinery
            .custom_machine("custommachinery:circuit_etcher", time || 100)
            .requireItem(input, "input")
            .produceItem(output)
            .requireStructure(
                [
                    [
                        "aaaaa",
                        "aceca",
                        "aecea",
                        "accca",
                        "aaaaa",
                        "  m  "
                    ],
                    [
                        "abbba",
                        "bfdgb",
                        "bdjdb",
                        "bhkib",
                        "abbba",
                        "     "
                    ],
                    [
                        "abbba",
                        "b d b",
                        "bd db",
                        "b   b",
                        "abbba",
                        "     "
                    ],
                    [
                        "abbba",
                        "b d b",
                        "bdldb",
                        "b   b",
                        "abbba",
                        "     "
                    ],
                    [
                        "aaaaa",
                        "aceca",
                        "aecea",
                        "accca",
                        "aaaaa",
                        "     "
                    ]
                ],
                {
                    "a": "pneumaticcraft:smooth_plastic_brick_gray",
                    "b": "pneumaticcraft:pressure_chamber_glass",
                    "c": "pneumaticcraft:pressure_chamber_wall",
                    "d": "pneumaticcraft:drill_pipe",
                    "e": "pneumaticcraft:pressure_chamber_valve",
                    "f": "pneumaticcraft:assembly_drill",
                    "g": "pneumaticcraft:assembly_laser",
                    "h": "pneumaticcraft:assembly_io_unit_import",
                    "i": "pneumaticcraft:assembly_io_unit_export",
                    "j": "pneumaticcraft:assembly_platform",
                    "k": "pneumaticcraft:display_shelf{Item:{Count:1b,id:\"pneumaticcraft:assembly_program_drill_laser\"},Items:{Items:[{Count:1b,Slot:0,id:\"pneumaticcraft:assembly_program_drill_laser\"}],Size:1},id:\"pneumaticcraft:display_table\"}",
                    "l": "pneumaticcraft:wall_lamp_inverted_red"
                },
            )

        inputs.forEach(input => {
            recipe.requireItem(input)
        })

        recipe.id(`custommachinery:circuit_etcher/${output.split(":")[1]}`)
    }
})