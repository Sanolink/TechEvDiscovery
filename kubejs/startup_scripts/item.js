/* 
Code By SanoLink For TechEV - Discovery
Last Modification : 1.1.0 
*/

Platform.mods.kubejs.name = 'TechEv || Discovery'

StartupEvents.registry('item', e => {

    e.create('incomplete_hammer').maxStackSize(1).displayName("Incomplete Engineer's Hammer")
    e.create('incomplete_wirecutter').maxStackSize(1).displayName("Incomplete Engineer's Wire Cutters")
    e.create('fishing_rod_cast').maxStackSize(1).displayName("Fishing Rod Cast")
    e.create('core_stone').displayName("Stone Wand Core")
    e.create('core_iron').displayName("Iron Wand Core")
    e.create('core_diamond').displayName("Diamond Wand Core")
    e.create('core_infinity').displayName("Infinity Wand Core")

  })

