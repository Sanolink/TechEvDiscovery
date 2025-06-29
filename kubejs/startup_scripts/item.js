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

StartupEvents.registry('item', e => {

    //Java Class
    const $SequencedAssemblyItem = Java.loadClass('com.simibubi.create.content.processing.sequenced.SequencedAssemblyItem')
    const $SandPaperItem = Java.loadClass('com.simibubi.create.content.equipment.sandPaper.SandPaperItem')
    const $ItemProperties = Java.loadClass('net.minecraft.world.item.Item$Properties');

    //Basic Items
    function BasicItem(id, displayName) {
      return e.create(id).displayName(displayName)
    }

    BasicItem('ae2:elemental_processor_press', "Inscriber Elemental Press")
    BasicItem('ae2:elemental_processor', "Elemental Processor")
    BasicItem('ae2:printed_elemental_processor', "Printed Elemental Circuit")

    BasicItem('botania:elementium_gear', "Elementium Gear")
    BasicItem('botania:elementium_plate', "Elementium Plate")

    BasicItem('constructionwand:core_diamond', "Diamond Wand Core")
    BasicItem('constructionwand:core_infinity', "Infinity Wand Core")
    BasicItem('constructionwand:core_iron', "Iron Wand Core")
    BasicItem('constructionwand:core_stone', "Stone Wand Core")

    BasicItem('create_things_and_misc:blue_quartz_sheet', "Blue Quartz Plate").texture('create_things_and_misc:items/blue_quartz_sheet')
    BasicItem('create_things_and_misc:psi_quartz_sheet', "Psi Quartz Plate").texture('create_things_and_misc:items/psi_quartz_sheet')
    BasicItem('create_things_and_misc:source_quartz_sheet', "Source Quartz Plate").texture('create_things_and_misc:items/source_quartz_sheet')

    BasicItem('create:blue_quartz', "Blue Quartz")
    BasicItem('create:brass_alloy', "Brass Alloy")
    BasicItem('create:copper_alloy', "Copper Alloy")
    BasicItem('create:polished_blue_quartz', "Polished Blue Quartz")
    BasicItem('create:polished_psi_quartz', "Polished Psi Quartz")
    BasicItem('create:polished_source_quartz', "Polished Source Quartz")
    BasicItem('create:positron_tube', "Positron Tube")
    BasicItem('create:psi_quartz', "Psi Quartz")
    BasicItem('create:psi_tube', "Psi Tube")
    BasicItem('create:raw_andesite_alloy', "Raw Andesite Alloy")
    BasicItem('create:source_quartz', "Source Quartz")
    BasicItem('create:source_tube', "Source Tube")

    BasicItem('hostilenetworks:blue_skies_prediction', "Generalized Blue Skies Prediction")
    BasicItem('hostilenetworks:inert_data_model', "Inert Model Framework")
    BasicItem('hostilenetworks:undergarden_prediction', "Generalized Undergarden Prediction")

    BasicItem('industrialforegoing:sludge_bottle', "Sludge Bottle")

    BasicItem('minecraft:diamond_nugget', "Diamond Nugget")

    BasicItem('thermal:ender_servo', "Ender Servo")
    BasicItem('thermal:press_rod_die', "Rodworking Die")

    BasicItem('tiab:compressed_iron_bottle', "Compressed Bottle")
    BasicItem('tiab:flowing_time', "Flowing Time")
    
    //Sequenced Assembly Items
    function SequencedAssemblyItem(id, displayName) {
      return e.createCustom(id, () => new $SequencedAssemblyItem(new $ItemProperties())).displayName(displayName)
    }

    SequencedAssemblyItem('bhc:incomplete_heart_amulet', "Incomplete Heart Amulet")

    SequencedAssemblyItem('create:incomplete_copper_alloy', "Incomplete Copper Alloy")

    SequencedAssemblyItem('immersiveengineering:incomplete_hammer', "Incomplete Engineer's Hammer")
    SequencedAssemblyItem('immersiveengineering:incomplete_wirecutter', "Incomplete Engineer's Wire Cutters")

    SequencedAssemblyItem('minecraft:fishing_rod_cast', "Fishing Rod Cast")

    SequencedAssemblyItem('psi:incomplete_cad_assembly_psimetal', "Incomplete Psimetal CAD Assembly")

    //Sand Paper Items
    function SandPaperItem(id, displayName, durability) {
      return e.createCustom(id, () => new $SandPaperItem(new $ItemProperties().defaultDurability(durability))).displayName(displayName).tag("create:sandpaper")
    }

    SandPaperItem('create:netherite_sandpaper', "Netherite Sandpaper", 2048)

  })