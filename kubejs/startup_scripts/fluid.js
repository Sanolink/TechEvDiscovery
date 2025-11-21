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
(_____)         Last Modification : 1.5.0         (_____)

*/

StartupEvents.registry('fluid', e => {

    //Basic Fluids
    function BasicFluid(id, displayName) {
      global.TechEvItems.push(`${id}_bucket`)
      return e.create(id).displayName(displayName)
    }

    function ThickFluid(id, displayName, color) {
      return BasicFluid(id, displayName).thickTexture(color)
    }

    function ThinFluid(id, displayName, color) {
      return BasicFluid(id, displayName).thinTexture(color)
    }

    function FlowingFluid(id, displayName, still, flow) {
      return BasicFluid(id, displayName).stillTexture(still).flowingTexture(flow)
    }

    // Thick Fluids
    ThickFluid('create:molten_lapis', 'Molten Lapis', 0x345ec3)

    ThickFluid('create:molten_source', 'Molten Source', 0xcc66ff)

    // Thin Fluids
    ThinFluid('mekanism:hyperphasium', 'Liquid Hyperphasium', 0x6976C7)

    // Flowing Fluids
    FlowingFluid('hostilenetworks:polymer_clay', 'Liquid Polymer Clay',
      'hostilenetworks:fluid/polymer_clay_still', 'hostilenetworks:fluid/polymer_clay_flow')

    FlowingFluid('botania:synthetic_mana_diamond', 'Synthetic Mana Diamond',
      'botania:fluid/synthetic_mana_diamond_still','botania:fluid/synthetic_mana_diamond_flow')

    FlowingFluid('psi:destabilized_psimetal', 'Destabilized Psimetal',
      'psi:fluid/destabilized_psimetal_still', 'psi:fluid/destabilized_psimetal_flow')

    FlowingFluid('forbidden_arcanus:liquid_soul', 'Liquid Soul',
      'forbidden_arcanus:fluid/liquid_soul_still', 'forbidden_arcanus:fluid/liquid_soul_flow')

    FlowingFluid('ae2:resonant_fluix', 'Resonant Fluix',
      'ae2:fluid/resonant_fluix_still', 'ae2:fluid/resonant_fluix_flow')

    FlowingFluid('mysticalagradditions:molten_insanium', 'Molten Insanium',
      'mysticalagradditions:block/molten_still', 'mysticalagradditions:block/molten_flowing').color(0x50007B)

    FlowingFluid('industrialforegoing:echoplasm', 'Echoplasm',
      'industrialforegoing:blocks/fluids/echoplasm_still', 'industrialforegoing:blocks/fluids/echoplasm_flow')

    FlowingFluid('rftoolsbase:dimensional_matrix', 'Dimensional Matrix',
      'rftoolsbase:fluid/dimensional_matrix_still', 'rftoolsbase:fluid/dimensional_matrix_flow')
  })