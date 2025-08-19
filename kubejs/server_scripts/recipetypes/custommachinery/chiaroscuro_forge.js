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


    Chiaroscuro('create:chromatic_compound', Fluid.of("thermal:glowstone", 250), '2x create:refined_radiance')
    Chiaroscuro('create:chromatic_compound', Fluid.of("thermal:ender", 250), '2x create:shadow_steel')

    //General Chiaroscuro Forge Function
    function Chiaroscuro(input, fluid, output) {
        event.recipes.custommachinery
            .custom_machine("custommachinery:chiaroscuro_forge", 100)
            .requireItem(input)
            .requireFluid(fluid)
            .produceItem(output)
            .requireStructure(
                [
                    [
                        "srs",
                        "r r",
                        "srs"
                    ],
                    [
                        "r r",
                        " m ",
                        "r r"
                    ],
                    [
                        "srs",
                        "r r",
                        "srs"
                    ]
                ],
                {
                    "s":"create:shadow_steel_casing",
                    "r":"create:refined_radiance_casing"
                }
            )
            .id(`custommachinery:chiaroscuro_forge/${output.split(":")[1]}`)
    }
})
