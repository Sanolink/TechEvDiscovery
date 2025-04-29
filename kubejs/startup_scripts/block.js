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
(_____)         Last Modification : 1.3.0         (_____)

*/

StartupEvents.registry('block', e => {

    e.create('create:blue_quartz_block').displayName("Block Of Blue Quartz").soundType("deepslate").property(BlockProperties.AXIS).placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis)).hardness(1.5).tagBlock("mineable/pickaxe").requiresTool(true)
    e.create('create:blue_quartz_tiles').displayName("Blue Quartz Tiles").soundType("deepslate").hardness(3).tagBlock("mineable/pickaxe").requiresTool(true)
    e.create('create:small_blue_quartz_tiles').displayName("Small Blue Quartz Tiles").soundType("deepslate").hardness(3).tagBlock("mineable/pickaxe").requiresTool(true)
    e.create('create:source_quartz_block').displayName("Block Of Source Quartz").soundType("deepslate").property(BlockProperties.AXIS).placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis)).hardness(1.5).tagBlock("mineable/pickaxe").requiresTool(true)
    e.create('create:source_quartz_tiles').displayName("Source Quartz Tiles").soundType("deepslate").hardness(3).tagBlock("mineable/pickaxe").requiresTool(true)
    e.create('create:small_source_quartz_tiles').displayName("Small Source Quartz Tiles").soundType("deepslate").hardness(3).tagBlock("mineable/pickaxe").requiresTool(true)
    e.create('create:psi_quartz_block').displayName("Block Of Psi Quartz").soundType("deepslate").property(BlockProperties.AXIS).placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis)).hardness(1.5).tagBlock("mineable/pickaxe").requiresTool(true)
    e.create('create:psi_quartz_tiles').displayName("Psi Quartz Tiles").soundType("deepslate").hardness(3).tagBlock("mineable/pickaxe").requiresTool(true)
    e.create('create:small_psi_quartz_tiles').displayName("Small Psi Quartz Tiles").soundType("deepslate").hardness(3).tagBlock("mineable/pickaxe").requiresTool(true)

    e.create('blue_skies:everstone').displayName("Everstone").soundType("deepslate").hardness(3).tagBlock("mineable/pickaxe").requiresTool(true)

    e.create('botania:floral_catalyst').displayName("Floral Catalyst").soundType("stone").hardness(2).tagBlock("mineable/pickaxe").requiresTool(true)
    e.create('botania:abjuration_catalyst').displayName("Abjuration Catalyst").soundType("stone").hardness(2).tagBlock("mineable/pickaxe").requiresTool(true)

    e.create('thermal:resonant_machine_frame').displayName("Resonant Machine Frame").soundType("lantern").hardness(2).tagBlock("mineable/pickaxe").notSolid()
})