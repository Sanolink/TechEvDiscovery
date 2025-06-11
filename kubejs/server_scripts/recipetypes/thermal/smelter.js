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
(_____)         Last Modification : 1.3.7         (_____)

*/

ServerEvents.recipes(event => {

    //Recipes
    let recipes = [
        {
            id:  "glass_soul_infused",
            outputs: ChanceOrCountItem('thermal_extra:soul_infused_glass', 2),
            ingredients: [ChanceOrCountItem('thermal:obsidian_glass', 2), parseIngredient('thermal_extra:soul_infused_ingot')],
            energy: 4800
        },
        {
            id:  "glass_shellite",
            outputs: ChanceOrCountItem('thermal_extra:shellite_glass', 2),
            ingredients: [ChanceOrCountItem('thermal:obsidian_glass', 2), parseIngredient('thermal_extra:shellite_ingot')],
            energy: 4800
        },
        {
            id:  "glass_twinite",
            outputs: ChanceOrCountItem('thermal_extra:twinite_glass', 2),
            ingredients: [ChanceOrCountItem('thermal:obsidian_glass', 2), parseIngredient('thermal_extra:twinite_ingot')],
            energy: 4800
        },
        {
            id:  "glass_dragonsteel",
            outputs: ChanceOrCountItem('thermal_extra:dragonsteel_glass', 2),
            ingredients: [ChanceOrCountItem('thermal:obsidian_glass', 2), parseIngredient('thermal_extra:dragonsteel_ingot')],
            energy: 4800
        },
        {
            id:  "sim_chamber",
            outputs: parseIngredient('hostilenetworks:sim_chamber'),
            ingredients: [parseIngredient('thermal:resonant_machine_frame'), parseIngredient('thermal:ender_servo'), parseIngredient('thermalendergy:vibrating_core')],
            energy: 4800
        },
        {
            id:  "loot_fabricator",
            outputs: parseIngredient('hostilenetworks:loot_fabricator'),
            ingredients: [parseIngredient('thermal:resonant_machine_frame'), parseIngredient('thermal:redstone_servo'), parseIngredient('thermal:rf_coil')],
            energy: 4800
        },
        {
            id:  "dielectric_paste",
            outputs: ChanceOrCountItem('powah:dielectric_paste', 24),
            ingredients: [ChanceOrCountItem('thermal:tar', 4), ChanceOrCountItem('thermal:compost', 4), ChanceOrCountItem('thermal_extra:sticky_ball', 4)],
            energy: 4800
        },
        {
            id:  "machine_frame",
            outputs: parseIngredient('thermal:machine_frame'),
            ingredients: [parseIngredient('industrialforegoing:machine_frame_supreme'), ChanceOrCountItem('thermal_extra:dragonsteel_glass', 2), parseIngredient('thermal:redstone_servo')],
            energy: 4800
        },
        {
            id:  "rf_coil",
            outputs: parseIngredient('thermal:rf_coil'),
            ingredients: [parseIngredient('alltheores:signalum_rod'), parseIngredient('alltheores:electrum_gear'), parseIngredient('alltheores:lumium_gear')],
            energy: 4800
        },
        {
            id:  "vibrating_core",
            outputs: parseIngredient('thermalendergy:vibrating_core'),
            ingredients: [parseIngredient('deeperdarker:reinforced_echo_shard'), parseIngredient('alltheores:electrum_gear'), parseIngredient('alltheores:lumium_gear')],
            energy: 4800
        },
        {
            id:  "ultimate_trash_can",
            outputs: parseIngredient('trashcans:ultimate_trash_can'),
            ingredients: [parseIngredient('trashcans:item_trash_can'), parseIngredient('trashcans:liquid_trash_can'), parseIngredient('trashcans:energy_trash_can')],
            energy: 4800
        }
    ]
    
    //General Smelter Function
    recipes.forEach(recipe => {
        let json = {
            type: 'thermal:smelter',
            ingredients: recipe.ingredients,
            result: recipe.outputs,
            experience: recipe.experience || 0,
            energy: recipe.energy || 3200
        }
        if (recipe.below) { json.below = recipe.below}
        event.custom(json).id(`thermal:machines/smelter/smelter_${recipe.id}`)
    })
})