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
    compressing("diamond_plate_from_compressing_diamond_gem", "forge:gems/diamond", "alltheores:diamond_plate", 1)

    var CompressingPlates = [
        'alltheores:aluminum_plate',
        'alltheores:iridium_plate',
        'alltheores:lead_plate',
        'alltheores:nickel_plate',
        'alltheores:osmium_plate',
        'alltheores:platinum_plate',
        'alltheores:silver_plate',
        'alltheores:tin_plate',
        'alltheores:uranium_plate',
        'alltheores:zinc_plate',
        'alltheores:invar_plate',
        'alltheores:electrum_plate',
        'alltheores:bronze_plate',
        'alltheores:gold_plate',
        'alltheores:copper_plate',
        'alltheores:enderium_plate',
        'alltheores:lumium_plate',
        'alltheores:signalum_plate',
        'alltheores:constantan_plate',
        'alltheores:brass_plate',
        'thermalendergy:prismalium_plate',
        'thermalendergy:melodium_plate',
        'thermalendergy:stellarium_plate',
        'thermal:netherite_plate',
        'thermal_extra:soul_infused_plate',
        'thermal_extra:shellite_plate',
        'thermal_extra:twinite_plate',
        'thermal_extra:dragonsteel_plate',
        'botania:elementium_plate',
        'ad_astra:nephryx_plate'
    ].forEach(plate => {
        let mat = plate.split(":")[1].replace("_plate", "")
        let id = mat + "_plate_from_compressing_" + mat + "_ingot"
        let input = "forge:ingots/" + mat
        compressing(id, input, plate, 1)
        }
    );

    //General Compressing Function
    function compressing(id, input, output, count) {
        let recipe = {
            type: "ad_astra:compressing",
            input: { tag: input},
            output: {
                id: output,
                count: count
            },
            time: 1
        }
        event.custom(recipe).id("ad_astra:compressing/" + id)
    }
    
})
