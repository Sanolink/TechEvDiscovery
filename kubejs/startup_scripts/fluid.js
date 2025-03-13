//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0 

StartupEvents.registry('fluid', e => {

    e.create("create:molten_lapis").thickTexture(0x345ec3).bucketColor(0x345ec3).noBlock().displayName("Molten Lapis")
    e.create("create:molten_redstone").thickTexture(0xaa0f01).bucketColor(0xaa0f01).noBlock().displayName("Molten Redstone")
    e.create("create:molten_source").thickTexture(0xcc66ff).bucketColor(0xcc66ff).noBlock().displayName("Molten Source")

    e.create('hostilenetworks:polymer_clay')
      .displayName('Liquid Polymer Clay')
      .stillTexture('hostilenetworks:fluid/polymer_clay_still')
      .flowingTexture('hostilenetworks:fluid/polymer_clay_flow')

  })