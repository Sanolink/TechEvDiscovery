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
(_____)         Last Modification : 1.4.11        (_____)

*/

StartupEvents.registry('block', e => {

    //Basic Blocks
    function BasicBlock(id, displayName) {
      global.TechEvBlocks.push(id)
      return e.create(id).displayName(displayName)
    }

    BasicBlock('ad_astra:mercury_nephryx_ore', "Mercury Nephryx Ore").soundType(SoundType.STONE).hardness(3).tagBlock("mineable/pickaxe").tagBlock("minecraft:needs_iron_tool").tagBoth("forge:ores").tagBoth("forge:ores/nephryx").requiresTool(true)
    BasicBlock('ad_astra:raw_nephryx_block', "Raw Nephryx Block").soundType(SoundType.STONE).hardness(5).tagBlock("mineable/pickaxe").tagBlock("minecraft:needs_iron_tool").tagBoth("forge:storage_blocks").tagBoth("forge:storage_blocks/raw_nephryx").requiresTool(true)
    BasicBlock('ad_astra:nephryx_block', "Nephryx Block").soundType(SoundType.METAL).hardness(5).tagBlock("mineable/pickaxe").tagBlock("minecraft:needs_stone_tool").tagBoth("forge:storage_blocks").tagBoth("forge:storage_blocks/nephryx").requiresTool(true)
    
    BasicBlock('blue_skies:everstone', "Everstone").soundType("deepslate").hardness(3).tagBlock("mineable/pickaxe").requiresTool(true)
    
    BasicBlock('botania:floral_catalyst', "Floral Catalyst").soundType("stone").hardness(2).tagBlock("mineable/pickaxe").requiresTool(true)
    BasicBlock('botania:abjuration_catalyst', "Abjuration Catalyst").soundType("stone").hardness(2).tagBlock("mineable/pickaxe").requiresTool(true)
    
    BasicBlock('create:blue_quartz_block', "Block Of Blue Quartz").soundType("deepslate").property(BlockProperties.AXIS).placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis)).hardness(1.5).tagBlock("mineable/pickaxe").requiresTool(true)
    BasicBlock('create:blue_quartz_tiles', "Blue Quartz Tiles").soundType("deepslate").hardness(3).tagBlock("mineable/pickaxe").requiresTool(true)
    BasicBlock('create:small_blue_quartz_tiles', "Small Blue Quartz Tiles").soundType("deepslate").hardness(3).tagBlock("mineable/pickaxe").requiresTool(true)
    BasicBlock('create:source_quartz_block', "Block Of Source Quartz").soundType("deepslate").property(BlockProperties.AXIS).placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis)).hardness(1.5).tagBlock("mineable/pickaxe").requiresTool(true)
    BasicBlock('create:source_quartz_tiles', "Source Quartz Tiles").soundType("deepslate").hardness(3).tagBlock("mineable/pickaxe").requiresTool(true)
    BasicBlock('create:small_source_quartz_tiles', "Small Source Quartz Tiles").soundType("deepslate").hardness(3).tagBlock("mineable/pickaxe").requiresTool(true)
    BasicBlock('create:psi_quartz_block', "Block Of Psi Quartz").soundType("deepslate").property(BlockProperties.AXIS).placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis)).hardness(1.5).tagBlock("mineable/pickaxe").requiresTool(true)
    BasicBlock('create:psi_quartz_tiles', "Psi Quartz Tiles").soundType("deepslate").hardness(3).tagBlock("mineable/pickaxe").requiresTool(true)
    BasicBlock('create:small_psi_quartz_tiles', "Small Psi Quartz Tiles").soundType("deepslate").hardness(3).tagBlock("mineable/pickaxe").requiresTool(true)
    BasicBlock('create:antimatter_quartz_block', "Block Of Antimatter Quartz").soundType("deepslate").property(BlockProperties.AXIS).placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis)).hardness(1.5).tagBlock("mineable/pickaxe").requiresTool(true)
    BasicBlock('create:antimatter_quartz_tiles', "Antimatter Quartz Tiles").soundType("deepslate").hardness(3).tagBlock("mineable/pickaxe").requiresTool(true)
    BasicBlock('create:small_antimatter_quartz_tiles', "Small Antimatter Quartz Tiles").soundType("deepslate").hardness(3).tagBlock("mineable/pickaxe").requiresTool(true)
    
    BasicBlock('immersiveengineering:hop_graphite_block', "Block of HOP Graphite").soundType(SoundType.METAL).hardness(5).tagBlock("mineable/pickaxe").tagBlock("minecraft:needs_stone_tool").tagBoth("forge:storage_blocks").tagBoth("forge:storage_blocks/hop_graphite").requiresTool(true)
    
    BasicBlock('occultism:raw_iesnium_block', "Raw Iesnium Block").soundType(SoundType.STONE).hardness(5).tagBlock("mineable/pickaxe").tagBlock("minecraft:needs_iron_tool").tagBoth("forge:storage_blocks").tagBoth("forge:storage_blocks/raw_iesnium").requiresTool(true)
    
    BasicBlock('productivebees:comb_ultimate', "Ultimate Comb Block").soundType(SoundType.CORAL_BLOCK).hardness(0.6).tagBoth("forge:storage_blocks").tagBoth("forge:storage_blocks/honeycombs")
    
    BasicBlock('thermal:resonant_machine_frame', "Resonant Machine Frame").soundType("lantern").hardness(2).tagBlock("mineable/pickaxe").notSolid()

  })