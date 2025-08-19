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
(_____)         Last Modification : 1.4.4         (_____)

*/

ServerEvents.recipes(event => {

    Chiaroscuro('create:electron_shell', 'create:electron_tube')
    Chiaroscuro('create:positron_shell', 'create:positron_tube')
    Chiaroscuro('create:source_shell', 'create:source_tube')
    Chiaroscuro('create:psi_shell', 'create:psi_tube')
    Chiaroscuro('create:antiproton_shell', 'create:antiproton_tube')
    Chiaroscuro('createqol:shadow_radiance', 'createqol:incomplete_chiaroscuro_actuator', 100)

    //General Precision Assembler Function
    function Chiaroscuro(input, output, time) {
        event.recipes.custommachinery
            .custom_machine("custommachinery:precision_assembler", time || 20)
            .requireItem(input)
            .produceItem(output)
            .requireStructure(
                [
                    [
                        "aaaaaaa",
                        "abbibba",
                        "abbbbba",
                        "abbbbba",
                        "aaaaaaa"
                    ],
                    [
                        "abbbbba",
                        "b eee b",
                        "dddbddd",
                        "b     b",
                        "accccca"
                    ],
                    [
                        "abbbbba",
                        "b hjh b",
                        "f gmg f",
                        "b     b",
                        "accccca"
                    ],
                    [
                        "abbbbba",
                        "b     b",
                        "b     b",
                        "b     b",
                        "accccca"
                    ],
                    [
                        "aaaaaaa",
                        "accccca",
                        "accccca",
                        "accccca",
                        "aaaaaaa"
                    ]
                ],
                {
                    "a": "create:copper_casing",
                    "b": "create:andesite_casing",
                    "c": "create:framed_glass",
                    "d": "create:belt",
                    "e": "create:gearbox",
                    "f": "create:andesite_tunnel",
                    "g": "create:andesite_belt_funnel",
                    "h": "create:mechanical_arm",
                    "i": "create:andesite_encased_shaft",
                    "j": "create:andesite_encased_cogwheel",
                }
            )
            .id(`custommachinery:precision_assembler/${output.split(":")[1]}`)
    }
})