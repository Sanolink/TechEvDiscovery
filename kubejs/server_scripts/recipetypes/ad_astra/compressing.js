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
(_____)         Last Modification : 1.5.0         (_____)

*/

ServerEvents.recipes(event => {

    //Recipes  
    compressing("diamond_plate_from_compressing_diamond_gem", "#forge:gems/diamond", "alltheores:diamond_plate", 1)
    compressing("cast_iron_plate_from_compressing_cast_iron_ingot", "createdeco:cast_iron_ingot", "createdeco:cast_iron_sheet", 1)
    compressing("overcharged_iron_plate_from_compressing_overcharged_iron", "create_new_age:overcharged_iron", "create_new_age:overcharged_iron_sheet", 1)
    compressing("overcharged_gold_plate_from_compressing_overcharged_gold", "create_new_age:overcharged_gold", "create_new_age:overcharged_golden_sheet", 1)
    compressing("rose_quartz_plate_from_compressing_polished_rose_quartz", "create:polished_rose_quartz", "create_things_and_misc:rose_quartz_sheet", 1)
    compressing("experience_plate_from_compressing_experience_nugget", "create:experience_nugget", "create_things_and_misc:experience_sheet", 1)
    compressing("blue_quartz_plate_from_compressing_polished_blue_quartz", "create:polished_blue_quartz", "create_things_and_misc:blue_quartz_sheet", 1)
    compressing("psi_quartz_plate_from_compressing_polished_psi_quartz", "create:polished_psi_quartz", "create_things_and_misc:psi_quartz_sheet", 1)
    compressing("source_quartz_plate_from_compressing_polished_source_quartz", "create:polished_source_quartz", "create_things_and_misc:source_quartz_sheet", 1)
    compressing("antimatter_quartz_plate_from_compressing_polished_antimatter_quartz", "create:polished_antimatter_quartz", "create_things_and_misc:antimatter_quartz_sheet", 1)
    compressing("flux_dust_from_compressing_redstone", "minecraft:redstone", "fluxnetworks:flux_dust", 1)
    compressing("carbon_plate_from_compressing_carbon_fiber_mesh", "ftbic:carbon_fiber_mesh", "ftbic:carbon_plate", 1)

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
        'ad_astra:nephryx_plate',
        'eidolon:arcane_gold_plate',
        'blue_skies:ventium_plate',
        'blue_skies:horizonite_plate',
        'blue_skies:falsite_plate',
        'undergarden:froststeel_plate',
        'undergarden:cloggrum_plate',
        'occultism:iesnium_plate',
        'pneumaticcraft:compressed_iron_plate'
    ].forEach(plate => {
        let mat = plate.split(":")[1].replace("_plate", "")
        let id = mat + "_plate_from_compressing_" + mat + "_ingot"
        let input = "#forge:ingots/" + mat
        compressing(id, input, plate, 1)
        }
    );

    //General Compressing Function
    function compressing(id, input, output, count) {
        let recipe = {
            type: "ad_astra:compressing",
            input: parseIngredient(input),
            output: {
                id: output,
                count: count
            },
            time: 1
        }
        event.custom(recipe).id("ad_astra:compressing/" + id)
    }
    
})
