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
(_____)         Last Modification : 1.5.1         (_____)

*/

ServerEvents.recipes(event => {

    //Recipes
    let recipes = [
        {
            output: 'custommachinery:precision_assembler',
            pattern: ["ABA", "DPD", "ABA"],
            key: {
                A: "create:andesite_casing",
                B: "create:brass_alloy",
                D: "create:deployer",
                P: "create:precision_mechanism"
            },
        },
        {
            output: 'custommachinery:chiaroscuro_forge',
            pattern: ["SRS", "HAH", "SRS"],
            key: {
                S: "create:shadow_steel_casing",
                R: "create:refined_radiance_casing",
                H: "blue_skies:horizonite_forge",
                A: "createqol:chiaroscuro_actuator"
            },
        },
        {
            output: 'custommachinery:circuit_etcher',
            pattern: ["WGW", "ECE", "WPW"],
            key: {
                W: "pneumaticcraft:pressure_chamber_wall",
                G: "pneumaticcraft:pressure_gauge",
                E: "ad_astra:engine_fan",
                C: "pneumaticcraft:assembly_controller",
                P: "pneumaticcraft:pressure_chamber_interface"
            },
        },
        {
            output: 'custommachinery:soul_harvester',
            pattern: ["WRW", "CSC", "FPF"],
            key: {
                W: "eidolon:warped_sprouts",
                R: "eidolon:reaper_scythe",
                C: "eidolon:crimson_gem",
                S: "eidolon:smooth_stone_arch",
                F: "eidolon:fungus_sprouts",
                P: "create:precision_mechanism"
            },
        }
    ]

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.output)
    })
})