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


StartupEvents.registry('fluid', e => {

    e.create("create:molten_lapis").thickTexture(0x345ec3).bucketColor(0x345ec3).noBlock().displayName("Molten Lapis")
    e.create("create:molten_redstone").thickTexture(0xaa0f01).bucketColor(0xaa0f01).noBlock().displayName("Molten Redstone")
    e.create("create:molten_source").thickTexture(0xcc66ff).bucketColor(0xcc66ff).noBlock().displayName("Molten Source")

    e.create('hostilenetworks:polymer_clay')
      .displayName('Liquid Polymer Clay')
      .stillTexture('hostilenetworks:fluid/polymer_clay_still')
      .flowingTexture('hostilenetworks:fluid/polymer_clay_flow')

    e.create('botania:synthetic_mana_diamond')
      .displayName('Synthetic Mana Diamond')
      .stillTexture('botania:fluid/synthetic_mana_diamond_still')
      .flowingTexture('botania:fluid/synthetic_mana_diamond_flow')
  })