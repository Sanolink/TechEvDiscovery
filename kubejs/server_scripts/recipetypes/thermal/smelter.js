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
(_____)         Last Modification : 1.3.0         (_____)

*/

ServerEvents.recipes(event => {

    //Remove

    //Recipes
    let recipes = [
        {
            id:  "glass_soul_infused",
            outputs: Item.of('thermal_extra:soul_infused_glass').withCount(2),
            inputs: [Item.of('thermal:obsidian_glass').withCount(2), 'thermal_extra:soul_infused_ingot'],
            energy: 4800
        },
        {
            id:  "glass_shellite",
            outputs: Item.of('thermal_extra:shellite_glass').withCount(2),
            inputs: [Item.of('thermal:obsidian_glass').withCount(2), 'thermal_extra:shellite_ingot'],
            energy: 4800
        },
        {
            id:  "glass_twinite",
            outputs: Item.of('thermal_extra:twinite_glass').withCount(2),
            inputs: [Item.of('thermal:obsidian_glass').withCount(2), 'thermal_extra:twinite_ingot'],
            energy: 4800
        },
        {
            id:  "glass_dragonsteel",
            outputs: Item.of('thermal_extra:dragonsteel_glass').withCount(2),
            inputs: [Item.of('thermal:obsidian_glass').withCount(2), 'thermal_extra:dragonsteel_ingot'],
            energy: 4800
        },
        {
            id:  "sim_chamber",
            outputs: 'hostilenetworks:sim_chamber',
            inputs: ['kubejs:resonant_machine_frame', 'kubejs:ender_servo', 'thermalendergy:vibrating_core'],
            energy: 4800
        },
        {
            id:  "loot_fabricator",
            outputs: 'hostilenetworks:loot_fabricator',
            inputs: ['kubejs:resonant_machine_frame', 'thermal:redstone_servo', 'thermal:rf_coil'],
            energy: 4800
        }
    ]

    //General Smelter Function
    recipes.forEach((recipe) => {
        event.recipes.thermal.smelter(recipe.outputs, recipe.inputs).energy(recipe.energy).id("thermal:machines/smelter/smelter_" + recipe.id)
    });
})