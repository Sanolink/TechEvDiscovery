//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0 

Platform.mods.kubejs.name = 'TechEv || Discovery'

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
    e.create('create:netherite_sandpaper', 'create:sandpaper').maxDamage(2048).displayName("Netherite Sandpaper")

    e.create('kubejs:techevium').displayName("Techevium")
    e.create('kubejs:raw_cuperzinate').displayName("Raw Cuperzinate")
    e.create('kubejs:raw_auricargentum').displayName("Raw Auricargentum")
    e.create('kubejs:raw_uratinumal').displayName("Raw Uratinumal")
    e.create('kubejs:raw_leadosnite').displayName("Raw Leadosnite")
    e.create('kubejs:compressed_iron_bottle').displayName("Compressed Bottle")
    e.create('kubejs:flowing_time').displayName("Flowing Time")
  })