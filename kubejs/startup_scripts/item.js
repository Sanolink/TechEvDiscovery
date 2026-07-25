//priority: 8000
/* 
 _____                                             _____ 
( ___ ) © SanoLink 2024/2026. All rights reserved.( ___ )
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
(_____)         Last Modification : 1.5.3         (_____)

*/

StartupEvents.registry('item', e => {

    //Java Class
    const $SequencedAssemblyItem = Java.loadClass('com.simibubi.create.content.processing.sequenced.SequencedAssemblyItem')
    const $SandPaperItem = Java.loadClass('com.simibubi.create.content.equipment.sandPaper.SandPaperItem')
    const $ItemProperties = Java.loadClass('net.minecraft.world.item.Item$Properties');
    const $BlockItem = Java.loadClass('net.minecraft.world.item.BlockItem');

    //Basic Items
    function BasicItem(id, displayName) {
      global.TechEvItems.push(id)
      return e.create(id).displayName(displayName)
    }

    BasicItem('ad_astra:calorite_dust', "Calorite Dust").tag("forge:dusts").tag(`forge:dusts/calorite`)
    BasicItem('ad_astra:calorite_gear', "Calorite Gear").tag("forge:gears").tag(`forge:gears/calorite`)
    BasicItem('ad_astra:calorite_rod', "Calorite Rod").tag("forge:rods").tag(`forge:rods/calorite`).tag("forge:rods/metal")
    BasicItem('ad_astra:desh_dust', "Desh Dust").tag("forge:dusts").tag(`forge:dusts/desh`)
    BasicItem('ad_astra:desh_gear', "Desh Gear").tag("forge:gears").tag(`forge:gears/desh`)
    BasicItem('ad_astra:desh_rod', "Desh Rod").tag("forge:rods").tag(`forge:rods/desh`).tag("forge:rods/metal")
    BasicItem('ad_astra:nephryx_dust', "Nephryx Dust").tag("forge:dusts").tag(`forge:dusts/nephryx`)
    BasicItem('ad_astra:nephryx_gear', "Nephryx Gear").tag("forge:gears").tag(`forge:gears/nephryx`)
    BasicItem('ad_astra:nephryx_ingot', "Nephryx Ingot").tag("forge:ingots").tag(`forge:ingots/nephryx`)
    BasicItem('ad_astra:nephryx_nugget', "Nephryx Nugget").tag("forge:nuggets").tag(`forge:nuggets/nephryx`)
    BasicItem('ad_astra:nephryx_plate', "Nephryx Plate").tag("forge:plates").tag(`forge:plates/nephryx`)
    BasicItem('ad_astra:raw_nephryx', "Raw Nephryx").tag("forge:raw_materials").tag(`forge:raw_materials/nephryx`)
    BasicItem('ad_astra:nephryx_rod', "Nephryx Rod").tag("forge:rods").tag(`forge:rods/nephryx`).tag("forge:rods/metal")
    BasicItem('ad_astra:ostrum_dust', "Ostrum Dust").tag("forge:dusts").tag(`forge:dusts/ostrum`)
    BasicItem('ad_astra:ostrum_gear', "Ostrum Gear").tag("forge:gears").tag(`forge:gears/ostrum`)
    BasicItem('ad_astra:ostrum_rod', "Ostrum Rod").tag("forge:rods/metal").tag("forge:rods").tag(`forge:rods/ostrum`)
    BasicItem('ad_astra:desh_rocket_nose_cone', "Desh Rocket Nose Cone")
    BasicItem('ad_astra:ostrum_rocket_nose_cone', "Ostrum Rocket Nose Cone")
    BasicItem('ad_astra:calorite_rocket_nose_cone', "Calorite Rocket Nose Cone")

    BasicItem('ae2:cosmic_processor', "Cosmic Processor")
    BasicItem('ae2:elemental_processor_press', "Inscriber Elemental Press")
    BasicItem('ae2:elemental_processor', "Elemental Processor")
    BasicItem('ae2:printed_cosmic_processor', "Printed Cosmic Circuit")
    BasicItem('ae2:printed_elemental_processor', "Printed Elemental Circuit")

    BasicItem('alchemistry:chromium_ingot', "Chromium Ingot").tag("forge:ingots").tag(`forge:ingots/chromium`)
    BasicItem('alchemistry:chromium_nugget', "Chromium Nugget").tag("forge:nuggets").tag(`forge:nuggets/chromium`)
    BasicItem('alchemistry:chromium_dust', "Chromium Dust").tag("forge:dusts").tag(`forge:dusts/chromium`)
    BasicItem('alchemistry:titanium_ingot', "Titanium Ingot").tag("forge:ingots").tag(`forge:ingots/titanium`)
    BasicItem('alchemistry:titanium_nugget', "Titanium Nugget").tag("forge:nuggets").tag(`forge:nuggets/titanium`)
    BasicItem('alchemistry:titanium_dust', "Titanium Dust").tag("forge:dusts").tag(`forge:dusts/titanium`)
    BasicItem('alchemistry:tungsten_ingot', "Tungsten Ingot").tag("forge:ingots").tag(`forge:ingots/tungsten`)
    BasicItem('alchemistry:tungsten_nugget', "Tungsten Nugget").tag("forge:nuggets").tag(`forge:nuggets/tungsten`)
    BasicItem('alchemistry:tungsten_dust', "Tungsten Dust").tag("forge:dusts").tag(`forge:dusts/tungsten`)

    BasicItem('blue_skies:falsite_dust', "Falsite Dust").tag("forge:dusts").tag(`forge:dusts/falsite`)
    BasicItem('blue_skies:falsite_plate', "Falsite Plate").tag("forge:plates").tag(`forge:plates/falsite`)
    BasicItem('blue_skies:falsite_gear', "Falsite Gear").tag("forge:gears").tag(`forge:gears/falsite`)
    BasicItem('blue_skies:falsite_rod', "Falsite Rod").tag("forge:rods").tag(`forge:rods/falsite`).tag("forge:rods/metal")
    BasicItem('blue_skies:ventium_dust', "Ventium Dust").tag("forge:dusts").tag(`forge:dusts/ventium`)
    BasicItem('blue_skies:ventium_plate', "Ventium Plate").tag("forge:plates").tag(`forge:plates/ventium`)
    BasicItem('blue_skies:ventium_gear', "Ventium Gear").tag("forge:gears").tag(`forge:gears/ventium`)
    BasicItem('blue_skies:ventium_rod', "Ventium Rod").tag("forge:rods").tag(`forge:rods/ventium`).tag("forge:rods/metal")
    BasicItem('blue_skies:horizonite_dust', "Horizonite Dust").tag("forge:dusts").tag(`forge:dusts/horizonite`)
    BasicItem('blue_skies:horizonite_plate', "Horizonite Plate").tag("forge:plates").tag(`forge:plates/horizonite`)
    BasicItem('blue_skies:horizonite_gear', "Horizonite Gear").tag("forge:gears").tag(`forge:gears/horizonite`)
    BasicItem('blue_skies:horizonite_rod', "Horizonite Rod").tag("forge:rods").tag(`forge:rods/horizonite`).tag("forge:rods/metal")

    BasicItem('botania:elementium_dust', "Elementium Dust").tag("forge:dusts").tag(`forge:dusts/elementium`)
    BasicItem('botania:elementium_gear', "Elementium Gear").tag("forge:gears").tag(`forge:gears/elementium`)
    BasicItem('botania:elementium_plate', "Elementium Plate").tag("forge:plates").tag(`forge:plates/elementium`)
    BasicItem('botania:elementium_rod', "Elementium Rod").tag("forge:rods").tag(`forge:rods/elementium`).tag("forge:rods/metal")

    BasicItem('constructionwand:core_diamond', "Diamond Wand Core")
    BasicItem('constructionwand:core_infinity', "Infinity Wand Core")
    BasicItem('constructionwand:core_iron', "Iron Wand Core")
    BasicItem('constructionwand:core_stone', "Stone Wand Core")
    
    BasicItem('create_new_age:overcharged_iron_gear', "Overcharged Iron Gear").tag("forge:gears").tag(`forge:gears/overcharged_iron`)
    BasicItem('create_new_age:overcharged_iron_rod', "Overcharged Iron Rod").tag("forge:rods").tag(`forge:rods/overcharged_iron`).tag("forge:rods/metal")
    BasicItem('create_new_age:overcharged_iron_dust', "Overcharged Iron Dust").tag("forge:dusts").tag(`forge:dusts/overcharged_iron`)
    BasicItem('create_new_age:overcharged_golden_gear', "Overcharged Golden Gear").tag("forge:gears").tag(`forge:gears/overcharged_gold`)
    BasicItem('create_new_age:overcharged_golden_rod', "Overcharged Golden Rod").tag("forge:rods").tag(`forge:rods/overcharged_gold`).tag("forge:rods/metal")
    BasicItem('create_new_age:overcharged_golden_dust', "Overcharged Golden Dust").tag("forge:dusts").tag(`forge:dusts/overcharged_gold`)
    
    BasicItem('create_things_and_misc:rose_quartz_gear', "Rose Quartz Gear").texture('create_things_and_misc:items/rose_quartz_gear').tag("forge:gears").tag(`forge:gears/rose_quartz`)
    BasicItem('create_things_and_misc:rose_quartz_dust', "Rose Quartz Dust").texture('create_things_and_misc:items/rose_quartz_dust').tag("forge:dusts").tag(`forge:dusts/rose_quartz`)
    BasicItem('create_things_and_misc:rose_quartz_rod', "Rose Quartz Rod").texture('create_things_and_misc:items/rose_quartz_rod').tag("forge:rods").tag(`forge:rods/rose_quartz`)
    BasicItem('create_things_and_misc:experience_gear', "Experience Gear").texture('create_things_and_misc:items/experience_gear').tag("forge:gears").tag(`forge:gears/experience`).glow(true)
    BasicItem('create_things_and_misc:experience_dust', "Experience Dust").texture('create_things_and_misc:items/experience_dust').tag("forge:dusts").tag(`forge:dusts/experience`).glow(true)
    BasicItem('create_things_and_misc:experience_rod', "Experience Rod").texture('create_things_and_misc:items/experience_rod').tag("forge:rods").tag(`forge:rods/experience`).glow(true)
    BasicItem('create_things_and_misc:blue_quartz_sheet', "Blue Quartz Plate").texture('create_things_and_misc:items/blue_quartz_sheet').tag("forge:plates").tag("forge:plates/blue_quartz")
    BasicItem('create_things_and_misc:blue_quartz_gear', "Blue Quartz Gear").texture('create_things_and_misc:items/blue_quartz_gear').tag("forge:gears").tag(`forge:gears/blue_quartz`)
    BasicItem('create_things_and_misc:blue_quartz_dust', "Blue Quartz Dust").texture('create_things_and_misc:items/blue_quartz_dust').tag("forge:dusts").tag(`forge:dusts/blue_quartz`)
    BasicItem('create_things_and_misc:blue_quartz_rod', "Blue Quartz Rod").texture('create_things_and_misc:items/blue_quartz_rod').tag("forge:rods").tag(`forge:rods/blue_quartz`)
    BasicItem('create_things_and_misc:psi_quartz_sheet', "Psi Quartz Plate").texture('create_things_and_misc:items/psi_quartz_sheet').tag("forge:plates").tag("forge:plates/psi_quartz")
    BasicItem('create_things_and_misc:psi_quartz_gear', "Psi Quartz Gear").texture('create_things_and_misc:items/psi_quartz_gear').tag("forge:gears").tag(`forge:gears/psi_quartz`)
    BasicItem('create_things_and_misc:psi_quartz_dust', "Psi Quartz Dust").texture('create_things_and_misc:items/psi_quartz_dust').tag("forge:dusts").tag(`forge:dusts/psi_quartz`)
    BasicItem('create_things_and_misc:psi_quartz_rod', "Psi Quartz Rod").texture('create_things_and_misc:items/psi_quartz_rod').tag("forge:rods").tag(`forge:rods/psi_quartz`)
    BasicItem('create_things_and_misc:source_quartz_sheet', "Source Quartz Plate").texture('create_things_and_misc:items/source_quartz_sheet').tag("forge:plates").tag("forge:plates/source_quartz")
    BasicItem('create_things_and_misc:source_quartz_gear', "Source Quartz Gear").texture('create_things_and_misc:items/source_quartz_gear').tag("forge:gears").tag(`forge:gears/source_quartz`)
    BasicItem('create_things_and_misc:source_quartz_dust', "Source Quartz Dust").texture('create_things_and_misc:items/source_quartz_dust').tag("forge:dusts").tag(`forge:dusts/source_quartz`)
    BasicItem('create_things_and_misc:source_quartz_rod', "Source Quartz Rod").texture('create_things_and_misc:items/source_quartz_rod').tag("forge:rods").tag(`forge:rods/source_quartz`)
    BasicItem('create_things_and_misc:antimatter_quartz_sheet', "Antimatter Quartz Plate").texture('create_things_and_misc:items/antimatter_quartz_sheet').tag("forge:plates").tag("forge:plates/antimatter_quartz")
    BasicItem('create_things_and_misc:antimatter_quartz_gear', "Antimatter Quartz Gear").texture('create_things_and_misc:items/antimatter_quartz_gear').tag("forge:gears").tag(`forge:gears/antimatter_quartz`)
    BasicItem('create_things_and_misc:antimatter_quartz_dust', "Antimatter Quartz Dust").texture('create_things_and_misc:items/antimatter_quartz_dust').tag("forge:dusts").tag(`forge:dusts/antimatter_quartz`)
    BasicItem('create_things_and_misc:antimatter_quartz_rod', "Antimatter Quartz Rod").texture('create_things_and_misc:items/antimatter_quartz_rod').tag("forge:rods").tag(`forge:rods/antimatter_quartz`)
    
    BasicItem('createdeco:cast_iron_gear', "Cast Iron Gear").tag("forge:gears").tag(`forge:gears/cast_iron`)
    BasicItem('createdeco:cast_iron_rod', "Cast Iron Rod").tag("forge:rods").tag(`forge:rods/cast_iron`).tag("forge:rods/metal")
    BasicItem('createdeco:cast_iron_dust', "Cast Iron Dust").tag("forge:dusts").tag(`forge:dusts/cast_iron`)
    
    BasicItem('create:raw_andesite_alloy', "Raw Andesite Alloy")
    BasicItem('create:brass_alloy', "Brass Alloy")
    BasicItem('create:copper_alloy', "Copper Alloy")
    const CrushedOres = ['desh', 'ostrum', 'calorite', 'nephryx', 'iridium', 'iesnium', 'elementium', 'cloggrum', 'froststeel', 'falsite', 'ventium', 'horizonite'].forEach(mat => {
      BasicItem(`create:crushed_raw_${mat}`, `Crushed ${mat.charAt(0).toUpperCase() + mat.slice(1)} Ore`).tag('create:crushed_raw_materials')})
    BasicItem('create:electron_shell', "Electron Shell")
    BasicItem('create:blue_quartz', "Blue Quartz")
    BasicItem('create:polished_blue_quartz', "Polished Blue Quartz").tag('forge:polished_quartz').tag('forge:polished_quartz/blue')
    BasicItem('create:positron_shell', "Positron Shell")
    BasicItem('create:positron_tube', "Positron Tube")
    BasicItem('create:psi_quartz', "Psi Quartz")
    BasicItem('create:polished_psi_quartz', "Polished Psi Quartz").tag('forge:polished_quartz').tag('forge:polished_quartz/psi')
    BasicItem('create:psi_shell', "Psi Shell")
    BasicItem('create:psi_tube', "Psi Tube")
    BasicItem('create:source_quartz', "Source Quartz")
    BasicItem('create:polished_source_quartz', "Polished Source Quartz").tag('forge:polished_quartz').tag('forge:polished_quartz/source')
    BasicItem('create:source_shell', "Source Shell")
    BasicItem('create:source_tube', "Source Tube")
    BasicItem('create:antimatter_quartz', "Antimatter Quartz")
    BasicItem('create:polished_antimatter_quartz', "Polished Antimatter Quartz").tag('forge:polished_quartz').tag('forge:polished_quartz/antimatter')
    BasicItem('create:antiproton_shell', "Antiproton Shell")
    BasicItem('create:antiproton_tube', "Antiproton Tube")

    BasicItem('createqol:chiaroscuro_actuator', "Chiaroscuro Actuator").rarity("rare")

    BasicItem('eidolon:arcane_gold_plate', "Arcane Gold Plate").tag("forge:plates").tag(`forge:plates/arcane_gold`)
    BasicItem('eidolon:arcane_gold_gear', "Arcane Gold Gear").tag("forge:gears").tag(`forge:gears/arcane_gold`)
    BasicItem('eidolon:arcane_gold_dust', "Arcane Gold Dust").tag("forge:dusts").tag(`forge:dusts/arcane_gold`)
    BasicItem('eidolon:arcane_gold_rod', "Arcane Gold Rod").tag("forge:rods").tag(`forge:rods/arcane_gold`).tag("forge:rods/metal")
    
    BasicItem('ftbic:carbon_gear', "Carbon Gear").tag("forge:gears").tag(`forge:gears/carbon`)
    BasicItem('ftbic:carbon_rod', "Carbon Rod").tag("forge:rods").tag(`forge:rods/carbon`)
    BasicItem('ftbic:carbon_dust', "Carbon Dust").tag("forge:dusts").tag(`forge:dusts/carbon`)
    BasicItem('ftbic:singularity_ash', "Singularity Ash")
    const DensePlates = ['aluminum', 'calorite', 'cloggrum', 'desh', 'elementium', 'falsite', 'froststeel', 'gold', 'horizonite', 'iesnium', 'iridium', 'iron', 'lead', 'nephryx', 'nickel', 'osmium', 'ostrum', 'platinum', 'silver', 'tin', 'uranium', 'ventium', 'zinc'].forEach(mat => {
      BasicItem(`ftbic:dense_${mat}_plate`, `Dense ${mat.charAt(0).toUpperCase() + mat.slice(1)} Plate`).tag("ftbic:dense_plates").tag(`ftbic:dense_plates/${mat}`)})

    BasicItem('hostilenetworks:blue_skies_prediction', "Generalized Blue Skies Prediction")
    BasicItem('hostilenetworks:inert_data_model', "Inert Model Framework")
    BasicItem('hostilenetworks:undergarden_prediction', "Generalized Undergarden Prediction")

    BasicItem('immersiveengineering:material_component_oscillating', "Oscillating Component")
    BasicItem('immersiveengineering:material_component_quantum', "Quantum Component")
    BasicItem('immersiveengineering:mold_coin', "Metal Press Mold: Coin").unstackable()

    BasicItem('industrialforegoing:sludge_bottle', "Sludge Bottle")
    BasicItem('industrialforegoing:laser_lens16', "Astral Laser Lens")
    const FermentedDusts = ['desh', 'ostrum', 'calorite', 'nephryx', 'iron', 'gold', 'copper', 'zinc', 'osmium', 'platinum', 'silver', 'tin', 'lead', 'aluminum', 'uranium', 'nickel', 'iridium', 'iesnium', 'elementium', 'cloggrum', 'froststeel', 'falsite', 'ventium', 'horizonite'].forEach(mat => {
      BasicItem(`industrialforegoing:fermented_dust_${mat}`, `${mat.charAt(0).toUpperCase() + mat.slice(1)} Fermented Dust`).tag("industrialforegoing:fermented_dusts").tag(`industrialforegoing:fermented_dusts/${mat}`)})

    
    BasicItem('mekaevolution:alloy_radiance', "§aRadiance Alloy")
    BasicItem('mekaevolution:alloy_shining', "§3Shining Alloy")
    BasicItem('mekaevolution:alloy_spectrum', "§5Spectrum Alloy")
    BasicItem('mekaevolution:alloy_thermonuclear', "§4Thermonuclear Alloy")
    BasicItem('mekaevolution:enriched_radiance', "Enriched Radiance")
    BasicItem('mekaevolution:enriched_shining', "Enriched Shining")
    BasicItem('mekaevolution:enriched_spectrum', "Enriched Spectrum")
    BasicItem('mekaevolution:enriched_thermonuclear', "Enriched Thermonuclear")
    
    BasicItem('mekanism:pellet_hypermatter', "§3Hypermatter Pellet")
    BasicItem('mekanism:dust_refined_glowstone', "Refined Glowstone Dust").tag('forge:dusts').tag('forge:dusts/refined_glowstone')
    BasicItem('mekanism:enriched_ionium', "Enriched Ionium")
    BasicItem('mekanism:enriched_iridium', "Enriched Iridium")
    BasicItem('mekanism:enriched_lapis_lazuli', "Enriched Lapis Lazuli")
    BasicItem('mekanism:enriched_osmium', "Enriched Osmium")
    BasicItem('mekanism:enriched_psimetal', "Enriched Psimetal")
    BasicItem('mekanism:enriched_source', "Enriched Source")
    BasicItem('mekanism:crystal_hypernitro', "Hypernitro Crystal")
    BasicItem('mekanism:antispark_dust', "Antispark Dust")
    const CrystalsShardsClumpsDirtyDusts = ['desh', 'ostrum', 'calorite', 'nephryx', 'iridium', 'iesnium', 'elementium', 'cloggrum', 'froststeel', 'falsite', 'ventium', 'horizonite'].forEach(mat => {
      BasicItem(`mekanism:dirty_dust_${mat}`, `Dirty ${mat.charAt(0).toUpperCase() + mat.slice(1)} Dust`).tag("mekanism:dirty_dusts").tag(`mekanism:dirty_dusts/${mat}`)
      BasicItem(`mekanism:crystal_${mat}`, `${mat.charAt(0).toUpperCase() + mat.slice(1)} Crystal`).tag("mekanism:crystals").tag(`mekanism:crystals/${mat}`)
      BasicItem(`mekanism:shard_${mat}`, `${mat.charAt(0).toUpperCase() + mat.slice(1)} Shard`).tag("mekanism:shards").tag(`mekanism:shards/${mat}`)
      BasicItem(`mekanism:clump_${mat}`, `${mat.charAt(0).toUpperCase() + mat.slice(1)} Clump`).tag("mekanism:clumps").tag(`mekanism:clumps/${mat}`)})

    BasicItem('mysticalagriculture:ultimate_essence', "Ultimate Essence").texture("mysticalagriculture/item/essence/ultimate_essence")

    BasicItem('minecraft:diamond_nugget', "Diamond Nugget").tag("forge:nuggets").tag(`forge:nuggets/diamond`)

    BasicItem('occultism:iesnium_plate', "Iesnium Plate").tag("forge:plates").tag(`forge:plates/iesnium`)
    BasicItem('occultism:iesnium_gear', "Iesnium Gear").tag("forge:gears").tag(`forge:gears/iesnium`)
    BasicItem('occultism:iesnium_rod', "Iesnium Rod").tag("forge:rods").tag(`forge:rods/iesnium`).tag("forge:rods/metal")
    
    BasicItem('productivebees:honeycomb_safenium', "Safenium Comb")
    BasicItem('productivebees:honeycomb_sudentium', "Sudentium Comb")
    BasicItem('productivebees:honeycomb_impertium', "Impertium Comb")
    BasicItem('productivebees:honeycomb_ultimate', "Ultimate Comb")

    BasicItem('pneumaticcraft:basic_microchip', "Basic Microchip")
    BasicItem('pneumaticcraft:advanced_microchip', "Advanced Microchip")
    BasicItem('pneumaticcraft:processing_microchip', "Processing Microchip")
    BasicItem('pneumaticcraft:advanced_printed_circuit_board', "Advanced PCB")
    BasicItem('pneumaticcraft:processing_printed_circuit_board', "Processing PCB")
    BasicItem('pneumaticcraft:compressed_iron_dust', "Compressed Steel Dust").tag("forge:dusts").tag(`forge:dusts/compressed_iron`)
    BasicItem('pneumaticcraft:compressed_iron_plate', "Compressed Steel Plate").tag("forge:plates").tag(`forge:plates/compressed_iron`)
    BasicItem('pneumaticcraft:compressed_iron_rod', "Compressed Steel Rod").tag("forge:rods").tag(`forge:rods/compressed_iron`).tag("forge:rods/metal")

    BasicItem('techev_additions:complex_plate', "Complex Plate").rarity("uncommon").tag("forge:plates").tag("forge:plates/complex")
    BasicItem('techev_additions:complex_gear', "Complex Gear").rarity("uncommon").tag("forge:gears").tag("forge:gears/complex")
    BasicItem('techev_additions:complex_rod', "Complex Rod").rarity("uncommon").tag("forge:rods").tag("forge:rods/complex")
    BasicItem('techev_additions:complex_dust', "Complex Dust").rarity("uncommon").tag("forge:dusts").tag("forge:dusts/complex")
    BasicItem('techev_additions:complex_mechanism', "Complex Mechanism").rarity("uncommon")

    BasicItem('thermal:ender_servo', "Ender Servo")
    BasicItem('thermal:netherite_rod', "Netherite Rod").tag("forge:rods").tag(`forge:rods/netherite`).tag("forge:rods/metal")
    BasicItem('thermal:press_plate_die', "Plateworking Die").unstackable()
    BasicItem('thermal:press_rod_die', "Rodworking Die").unstackable()
    BasicItem('thermal:press_wire_die', "Wireworking Die").unstackable()
    BasicItem('thermal:trizz_powder', "Trizz Powder")
    const Coins = ['platinum', 'osmium', 'aluminum', 'uranium', 'zinc', 'iridium', 'steel', 'brass'].forEach(mat => {
      BasicItem(`thermal:${mat}_coin`, `${mat.charAt(0).toUpperCase() + mat.slice(1)} Coin`).tag("forge:coins").tag(`forge:coins/${mat}`)})
    BasicItem('thermal:cast_iron_coin', "Cast Iron Coin").tag("forge:coins").tag("forge:coins/cast_iron")

    BasicItem('thermalendergy:prismalium_rod', "Prismalium Rod").tag("forge:rods").tag(`forge:rods/prismalium`).tag("forge:rods/metal")
    BasicItem('thermalendergy:melodium_rod', "Melodium Rod").tag("forge:rods").tag(`forge:rods/melodium`).tag("forge:rods/metal")
    BasicItem('thermalendergy:stellarium_rod', "Stellarium Rod").tag("forge:rods").tag(`forge:rods/stellarium`).tag("forge:rods/metal")
    
    BasicItem('thermal_extra:soul_infused_rod', "Soul Infused Rod").tag("forge:rods").tag(`forge:rods/soul_infused`).tag("forge:rods/metal")
    BasicItem('thermal_extra:shellite_rod', "Shellite Rod").tag("forge:rods").tag(`forge:rods/shellite`).tag("forge:rods/metal")
    BasicItem('thermal_extra:twinite_rod', "Twinite Rod").tag("forge:rods").tag(`forge:rods/twinite`).tag("forge:rods/metal")
    BasicItem('thermal_extra:dragonsteel_rod', "Dragonsteel Rod").tag("forge:rods").tag(`forge:rods/dragonsteel`).tag("forge:rods/metal")

    BasicItem('tiab:compressed_iron_bottle', "Compressed Bottle")
    BasicItem('tiab:flowing_time', "Flowing Time")
    
    BasicItem('undergarden:cloggrum_plate', "Cloggrum Plate").tag("forge:plates").tag(`forge:plates/cloggrum`)
    BasicItem('undergarden:cloggrum_gear', "Cloggrum Gear").tag("forge:gears").tag(`forge:gears/cloggrum`)
    BasicItem('undergarden:cloggrum_rod', "Cloggrum Rod").tag("forge:rods").tag(`forge:rods/cloggrum`).tag("forge:rods/metal")
    BasicItem('undergarden:cloggrum_dust', "Cloggrum Dust").tag("forge:dusts").tag(`forge:dusts/cloggrum`)
    BasicItem('undergarden:froststeel_plate', "Froststeel Plate").tag("forge:plates").tag(`forge:plates/froststeel`)
    BasicItem('undergarden:froststeel_gear', "Froststeel Gear").tag("forge:gears").tag(`forge:gears/froststeel`)
    BasicItem('undergarden:froststeel_rod', "Froststeel Rod").tag("forge:rods").tag(`forge:rods/froststeel`).tag("forge:rods/metal")
    BasicItem('undergarden:froststeel_dust', "Froststeel Dust").tag("forge:dusts").tag(`forge:dusts/froststeel`)

    //Sequenced Assembly Items
    function SequencedAssemblyItem(id, displayName) {
      global.TechEvItems.push(id)
      return e.createCustom(id, () => new $SequencedAssemblyItem(new $ItemProperties())).displayName(displayName)
    }

    SequencedAssemblyItem('bhc:incomplete_heart_amulet', "Incomplete Heart Amulet")

    SequencedAssemblyItem('create:incomplete_copper_alloy', "Incomplete Copper Alloy")
    
    SequencedAssemblyItem('createqol:incomplete_chiaroscuro_actuator', "Incomplete Chiaroscuro Actuator")

    SequencedAssemblyItem('immersiveengineering:incomplete_hammer', "Incomplete Engineer's Hammer")
    SequencedAssemblyItem('immersiveengineering:incomplete_wirecutter', "Incomplete Engineer's Wire Cutters")

    SequencedAssemblyItem('minecraft:fishing_rod_cast', "Fishing Rod Cast")
    
    SequencedAssemblyItem('psi:incomplete_cad_assembly_psimetal', "Incomplete Psimetal CAD Assembly")
    
    SequencedAssemblyItem('techev_additions:incomplete_complex_mechanism', "Incomplete Complex Mechanism")

    //Sand Paper Items
    function SandPaperItem(id, displayName, durability) {
      global.TechEvItems.push(id)
      return e.createCustom(id, () => new $SandPaperItem(new $ItemProperties().defaultDurability(durability))).displayName(displayName).tag("create:sandpaper")
    }

    SandPaperItem('create:netherite_sandpaper', "Netherite Sandpaper", 2048)

    //Block Items 
    global.TechEvBlockItems.forEach(entry => {
      e.createCustom(entry.id, () => new $BlockItem(entry.block.get(), new $ItemProperties()))
    })
  })