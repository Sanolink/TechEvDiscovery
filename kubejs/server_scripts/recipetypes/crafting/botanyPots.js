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
(_____)         Last Modification : 1.4.0         (_____)

*/

ServerEvents.recipes(event => {

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
        //Elite Hopper Botany Pot
        {
            output: "botanypotstiers:elite_terracotta_hopper_botany_pot",
            pattern: ["SCS", "PBP", "SIS"],
            key: {
                S: 'create_things_and_misc:psi_quartz_sheet',
                C: 'mekanism:ultimate_control_circuit',
                P: 'ae2:engineering_processor',
                B: 'botanypots:terracotta_hopper_botany_pot',
                I: 'immersiveengineering:cloche'

            }
        },
        //Ultra Hopper Botany Pot
        {
            output: "botanypotstiers:ultra_terracotta_hopper_botany_pot",
            pattern: ["SCS", "PBP", "SIS"],
            key: {
                S: 'create_things_and_misc:antimatter_quartz_sheet',
                C: 'mekaevolution:infinite_control_circuit',
                P: 'mekanism:pellet_hypermatter',
                B: 'botanypotstiers:elite_terracotta_hopper_botany_pot',
                I: 'thermal:machine_insolator'
            }
        },
    ]

    recipes.forEach(recipe => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.output)
    })
})