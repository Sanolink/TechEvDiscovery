//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0 


Platform.mods.kubejs.name = 'TechEv || Discovery'

StartupEvents.registry('block', e => {

    e.create('create:blue_quartz_block').displayName("Block Of Blue Quartz").soundType("deepslate").property(BlockProperties.AXIS).placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis)).hardness(1.5).tagBlock("mineable/pickaxe").requiresTool(true)
    e.create('create:blue_quartz_tiles').displayName("Blue Quartz Tiles").soundType("deepslate").hardness(3).tagBlock("mineable/pickaxe").requiresTool(true)
    e.create('create:small_blue_quartz_tiles').displayName("Small Blue Quartz Tiles").soundType("deepslate").hardness(3).tagBlock("mineable/pickaxe").requiresTool(true)
    e.create('create:source_quartz_block').displayName("Block Of Source Quartz").soundType("deepslate").property(BlockProperties.AXIS).placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis)).hardness(1.5).tagBlock("mineable/pickaxe").requiresTool(true)
    e.create('create:source_quartz_tiles').displayName("Source Quartz Tiles").soundType("deepslate").hardness(3).tagBlock("mineable/pickaxe").requiresTool(true)
    e.create('create:small_source_quartz_tiles').displayName("Small Source Quartz Tiles").soundType("deepslate").hardness(3).tagBlock("mineable/pickaxe").requiresTool(true)
    
    e.create('blue_skies:everstone').displayName("Everstone").soundType("deepslate").hardness(3).tagBlock("mineable/pickaxe").requiresTool(true)

    e.create('kubejs:raw_auricargentum_block').displayName("Block Of Raw Auricargentum").soundType("tuff").hardness(3).tagBlock("mineable/pickaxe").requiresTool(true)
    e.create('kubejs:raw_cuperzinate_block').displayName("Block Of Raw Cuperzinate").soundType("tuff").hardness(3).tagBlock("mineable/pickaxe").requiresTool(true)
    e.create('kubejs:raw_leadosnite_block').displayName("Block Of Raw Leadosnite").soundType("tuff").hardness(3).tagBlock("mineable/pickaxe").requiresTool(true)
    e.create('kubejs:raw_uratinumal_block').displayName("Block Of Raw Uratinumal").soundType("tuff").hardness(3).tagBlock("mineable/pickaxe").requiresTool(true)

    e.create('kubejs:resonant_machine_frame').displayName("Resonant Machine Frame").soundType("lantern").hardness(2).tagBlock("mineable/pickaxe")
})