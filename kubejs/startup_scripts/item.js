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

StartupEvents.registry('item', e => {

    e.create('minecraft:fishing_rod_cast', 'create:sequenced_assembly').displayName("Fishing Rod Cast")

    e.create('immersiveengineering:incomplete_hammer', 'create:sequenced_assembly').displayName("Incomplete Engineer's Hammer")
    e.create('immersiveengineering:incomplete_wirecutter', 'create:sequenced_assembly').displayName("Incomplete Engineer's Wire Cutters")

    e.create('constructionwand:core_stone').displayName("Stone Wand Core")
    e.create('constructionwand:core_iron').displayName("Iron Wand Core")
    e.create('constructionwand:core_diamond').displayName("Diamond Wand Core")
    e.create('constructionwand:core_infinity').displayName("Infinity Wand Core")

    e.create('create:raw_andesite_alloy').displayName("Raw Andesite Alloy")
    e.create('create:brass_alloy').displayName("Brass Alloy")
    e.create('create:incomplete_copper_alloy', 'create:sequenced_assembly').displayName("Incomplete Copper Alloy")
    e.create('create:incomplete_optimized_copper_alloy', 'create:sequenced_assembly').displayName("Incomplete Copper Alloy")
    e.create('create:copper_alloy').displayName("Copper Alloy")
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
    e.create('create:crushed_raw_desh').displayName("Crushed Desh Ore").tag("create:crushed_raw_materials")
    e.create('create:crushed_raw_ostrum').displayName("Crushed Ostrum Ore").tag("create:crushed_raw_materials")
    e.create('create:crushed_raw_calorite').displayName("Crushed Calorite Ore").tag("create:crushed_raw_materials")
    e.create('create:crushed_raw_nephryx').displayName("Crushed Nephryx Ore").tag("create:crushed_raw_materials")

    e.create('create_things_and_misc:blue_quartz_sheet').displayName("Blue Quartz Plate").texture('create_things_and_misc:items/blue_quartz_sheet')
    e.create('create_things_and_misc:source_quartz_sheet').displayName("Source Quartz Plate").texture('create_things_and_misc:items/source_quartz_sheet')
    e.create('create_things_and_misc:psi_quartz_sheet').displayName("Psi Quartz Plate").texture('create_things_and_misc:items/psi_quartz_sheet')

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
    e.create('ae2:cosmic_processor').displayName("Cosmic Processor")
    e.create('ae2:printed_cosmic_processor').displayName("Printed Cosmic Circuit")

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
    e.create('ad_astra:raw_nephryx').displayName("Raw Nephryx")
    e.create('ad_astra:nephryx_ingot').displayName("Nephryx Ingot")
    e.create('ad_astra:nephryx_nugget').displayName("Nephryx Nugget")
    e.create('ad_astra:nephryx_plate').displayName("Nephryx Plate")
    e.create('ad_astra:nephryx_gear').displayName("Nephryx Gear")
    e.create('ad_astra:nephryx_rod').displayName("Nephryx Rod")
    e.create('ad_astra:nephryx_dust').displayName("Nephryx Dust")

    e.create('mekaevolution:enriched_radiance').displayName("Enriched Radiance")
    e.create('mekaevolution:enriched_thermonuclear').displayName("Enriched Thermonuclear")
    e.create('mekaevolution:enriched_shining').displayName("Enriched Shining")
    e.create('mekaevolution:enriched_spectrum').displayName("Enriched Spectrum")
    e.create('mekaevolution:alloy_radiance').displayName("§aRadiance Alloy")
    e.create('mekaevolution:alloy_thermonuclear').displayName("§4Thermonuclear Alloy")
    e.create('mekaevolution:alloy_shining').displayName("§3Shining Alloy")
    e.create('mekaevolution:alloy_spectrum').displayName("§5Spectrum Alloy")
  })