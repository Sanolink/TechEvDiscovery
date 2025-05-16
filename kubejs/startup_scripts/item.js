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
(_____)         Last Modification : 1.3.4         (_____)

*/

StartupEvents.registry('item', e => {

    e.create('minecraft:fishing_rod_cast', 'create:sequenced_assembly').displayName("Fishing Rod Cast")

    e.create('immersiveengineering:incomplete_hammer', 'create:sequenced_assembly').displayName("Incomplete Engineer's Hammer")
    e.create('immersiveengineering:incomplete_wirecutter', 'create:sequenced_assembly').displayName("Incomplete Engineer's Wire Cutters")

    e.create('constructionwand:core_stone').displayName("Stone Wand Core")
    e.create('constructionwand:core_iron').displayName("Iron Wand Core")
    e.create('constructionwand:core_diamond').displayName("Diamond Wand Core")
    e.create('constructionwand:core_infinity').displayName("Infinity Wand Core")

    e.create('create:raw_andesite_alloy').displayName("Raw Andesite Alloy")
    e.create('create:blue_quartz').displayName("Blue Quartz")
    e.create('create:polished_blue_quartz').displayName("Polished Blue Quartz")
    e.create('create:positron_tube').displayName("Positron Tube")
    e.create('create:source_quartz').displayName("Source Quartz")
    e.create('create:polished_source_quartz').displayName("Polished Source Quartz")
    e.create('create:source_tube').displayName("Source Tube")
    e.create('create:psi_quartz').displayName("Psi Quartz")
    e.create('create:polished_psi_quartz').displayName("Polished Psi Quartz")
    e.create('create:psi_tube').displayName("Psi Tube")
    e.create('create:netherite_sandpaper', 'create:sandpaper').maxDamage(2048).displayName("Netherite Sandpaper")

    e.create('tiab:compressed_iron_bottle').displayName("Compressed Bottle")
    e.create('tiab:flowing_time').displayName("Flowing Time")

    e.create('thermal:ender_servo').displayName("Ender Servo")
    e.create('thermal:press_rod_die').displayName("Rodworking Die")

    e.create('hostilenetworks:blue_skies_prediction').displayName("Generalized Blue Skies Prediction")
    e.create('hostilenetworks:undergarden_prediction').displayName("Generalized Undergarden Prediction")
    e.create('hostilenetworks:inert_data_model').displayName("Inert Model Framework")

    e.create('ae2:elemental_processor_press').displayName("Inscriber Elemental Press")
    e.create('ae2:elemental_processor').displayName("Elemental Processor")
    e.create('ae2:printed_elemental_processor').displayName("Printed Elemental Circuit")

    e.create('botania:elementium_plate').displayName("Elementium Plate")
    e.create('botania:elementium_gear').displayName("Elementium Gear")

    e.create('psi:incomplete_cad_assembly_psimetal', 'create:sequenced_assembly').displayName("Incomplete Psimetal CAD Assembly")

    e.create('industrialforegoing:sludge_bottle').displayName("Sludge Bottle")

    e.create('minecraft:diamond_nugget').displayName("Diamond Nugget")

    e.create('bhc:incomplete_heart_amulet', 'create:sequenced_assembly').displayName("Incomplete Heart Amulet")

    e.create('ad_astra:desh_gear').displayName("Desh Gear")
    e.create('ad_astra:desh_rod').displayName("Desh Rod")
    e.create('ad_astra:desh_dust').displayName("Desh Dust")
    e.create('ad_astra:ostrum_gear').displayName("Ostrum Gear")
    e.create('ad_astra:ostrum_rod').displayName("Ostrum Rod")
    e.create('ad_astra:ostrum_dust').displayName("Ostrum Dust")
    e.create('ad_astra:calorite_gear').displayName("Calorite Gear")
    e.create('ad_astra:calorite_rod').displayName("Calorite Rod")
    e.create('ad_astra:calorite_dust').displayName("Calorite Dust")

    e.create('mekaevolution:enriched_radiance').displayName("Enriched Radiance")
    e.create('mekaevolution:enriched_thermonuclear').displayName("Enriched Thermonuclear")
    e.create('mekaevolution:enriched_shining').displayName("Enriched Shining")
    e.create('mekaevolution:enriched_spectrum').displayName("Enriched Spectrum")
    e.create('mekaevolution:alloy_radiance').displayName("§aRadiance Alloy")
    e.create('mekaevolution:alloy_thermonuclear').displayName("§4Thermonuclear Alloy")
    e.create('mekaevolution:alloy_shining').displayName("§3Shining Alloy")
    e.create('mekaevolution:alloy_spectrum').displayName("§5Spectrum Alloy")
  })