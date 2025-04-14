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
            inputs: ['thermal:resonant_machine_frame', 'thermal:ender_servo', 'thermalendergy:vibrating_core'],
            energy: 4800
        },
        {
            id:  "loot_fabricator",
            outputs: 'hostilenetworks:loot_fabricator',
            inputs: ['thermal:resonant_machine_frame', 'thermal:redstone_servo', 'thermal:rf_coil'],
            energy: 4800
        },
        {
            id:  "dielectric_paste",
            outputs: '24x powah:dielectric_paste',
            inputs: ['4x thermal:tar', '4x thermal:compost', '4x thermal_extra:sticky_ball'],
            energy: 4800
        },
        {
            id:  "machine_frame",
            outputs: 'thermal:machine_frame',
            inputs: ['2x thermal_extra:dragonsteel_glass', 'industrialforegoing:machine_frame_supreme', 'thermal:redstone_servo'],
            energy: 4800
        }
    ]
    
    //General Smelter Function
    recipes.forEach((recipe) => {
        event.recipes.thermal.smelter(recipe.outputs, recipe.inputs).energy(recipe.energy).id("thermal:machines/smelter/smelter_" + recipe.id)
    });
})