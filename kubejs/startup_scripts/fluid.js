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

    e.create("create:molten_lapis")
      .displayName("Molten Lapis")
      .thickTexture(0x345ec3)
      
    e.create("create:molten_source")
      .displayName("Molten Source")
      .thickTexture(0xcc66ff)

    e.create('hostilenetworks:polymer_clay')
      .displayName('Liquid Polymer Clay')
      .stillTexture('hostilenetworks:fluid/polymer_clay_still')
      .flowingTexture('hostilenetworks:fluid/polymer_clay_flow')

    e.create('botania:synthetic_mana_diamond')
      .displayName('Synthetic Mana Diamond')
      .stillTexture('botania:fluid/synthetic_mana_diamond_still')
      .flowingTexture('botania:fluid/synthetic_mana_diamond_flow')

    e.create('psi:destabilized_psimetal')
      .displayName('Destabilized Psimetal')
      .stillTexture('psi:fluid/destabilized_psimetal_still')
      .flowingTexture('psi:fluid/destabilized_psimetal_flow')

    e.create('forbidden_arcanus:liquid_soul')
      .displayName('Liquid Soul')
      .stillTexture('forbidden_arcanus:fluid/liquid_soul_still')
      .flowingTexture('forbidden_arcanus:fluid/liquid_soul_flow')

    e.create('ae2:resonant_fluix')
      .displayName('Resonant Fluix')
      .stillTexture('ae2:fluid/resonant_fluix_still')
      .flowingTexture('ae2:fluid/resonant_fluix_flow')
  })