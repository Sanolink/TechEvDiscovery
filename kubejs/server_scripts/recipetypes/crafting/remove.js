//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.2.0

ServerEvents.recipes(event => {

    //allTheOres
    event.remove([{ output: '#alltheores:ore_hammers'} ,{ input: '#alltheores:ore_hammers'}])
    event.remove({ output: '#forge:gears', mod: 'alltheores'})
    event.remove({ output: '#forge:dusts', mod: 'alltheores', type: "crafting_shapeless"})

    //Aquaculture
    event.remove({ output: 'aquaculture:neptunium_fillet_knife', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'aquaculture:iron_fishing_rod', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'aquaculture:gold_fishing_rod', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'aquaculture:diamond_fishing_rod', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'aquaculture:neptunium_fishing_rod', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'aquaculture:wooden_fillet_knife', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'aquaculture:stone_fillet_knife', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'aquaculture:iron_fillet_knife', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'aquaculture:gold_fillet_knife', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'aquaculture:diamond_fillet_knife', type: 'minecraft:crafting_shaped' })

    //Ars Nouveau
    event.remove({ id: 'ars_nouveau:novice_spell_book'})
    event.remove({ id: 'ars_nouveau:apprentice_spell_book_upgrade'})
    event.remove({ id: 'ars_nouveau:archmage_spell_book_upgrade'})

    //Blue Skies
    event.remove({ id: 'blue_skies:zeal_lighter'})

    //Botany Pots
    event.remove({ output: '#botanypots:all_botany_pots'})

    //Compact Machines
    event.remove({ id: 'compactmachines:machine_tiny'})
    event.remove({ id: 'compactmachines:machine_small'})
    event.remove({ id: 'compactmachines:machine_normal'})
    event.remove({ id: 'compactmachines:machine_large'})
    event.remove({ id: 'compactmachines:machine_giant'})
    event.remove({ id: 'compactmachines:machine_maximum'})

    //Construction Wand
    event.remove({ output: 'constructionwand:stone_wand', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'constructionwand:iron_wand', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'constructionwand:diamond_wand', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'constructionwand:infinity_wand', type: 'minecraft:crafting_shaped' })

    //Create
    event.remove({ output: 'create:red_sand_paper', type: 'minecraft:crafting_shapeless' })
    event.remove({ output: 'create:sand_paper', type: 'minecraft:crafting_shapeless' })
    event.remove({ id: 'create:crafting/materials/rose_quartz'})
    event.remove({ id: 'create:crafting/materials/andesite_alloy'})
    event.remove({ id: 'create:crafting/materials/andesite_alloy_from_zinc'})

    //Eidolon
    event.remove({ output: 'eidolon:pewter_blend', type: 'minecraft:crafting_shapeless' })

    //Farmer's Delight
    event.remove({ output: 'farmersdelight:iron_knife'})
    event.remove({ output: 'farmersdelight:golden_knife'})
    event.remove({ output: 'farmersdelight:diamond_knife'})

    //Immersive Engineering 
    event.remove({ id: 'immersiveengineering:crafting/stick_iron'})
    event.remove({ id: 'immersiveengineering:crafting/stick_aluminum'})
    event.remove({ id: 'immersiveengineering:crafting/stick_steel'})
    event.remove({ id: 'immersiveengineering:crafting/treated_wood_horizontal'})
    event.remove({ id: 'immersiveengineering:crafting/component_iron'})
    event.remove({ id: 'immersiveengineering:crafting/component_steel'})
    event.remove({ id: 'immersiveengineering:crafting/radiator'})
    event.remove({ id: 'immersiveengineering:crafting/rs_engineering'})
    event.remove({ id: 'immersiveengineering:crafting/light_engineering'})
    event.remove({ id: 'immersiveengineering:crafting/heavy_engineering'})
    event.remove({ input: 'immersiveengineering:hammer', output: "#forge:plates" })
    event.remove({ input: 'immersiveengineering:hammer', output: "#forge:dusts" })
    event.remove({ input: 'immersiveengineering:wirecutter', output: '#forge:wires', type: 'minecraft:crafting_shapeless' })
    event.remove({ output: 'immersiveengineering:hammer', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'immersiveengineering:wirecutter', type: 'minecraft:crafting_shaped' })

    //Minecraft
    event.remove({ output: 'minecraft:fishing_rod', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'minecraft:enchanted_golden_apple', type: 'minecraft:crafting_shaped' })

    //Occultism
    event.remove({ id: 'undergarden:catalyst'})
    
    //Pneumatic Craft
    event.remove({ id: 'pneumaticcraft:compressed_iron_gear'})

    //Simple Storage
    event.remove({ output: 'storagenetwork:inventory_remote', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'storagenetwork:crafting_remote', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'storagenetwork:master', type: 'minecraft:crafting_shaped' })

    //Thermal Series 
    event.remove({ id: 'thermal:machine_frame'})

    //Time In A Bottle
    event.remove({ id: 'tiab:time_in_a_bottle'})

    //Twilight Forest
    event.remove({ output: 'twilightforest:uncrafting_table'})
    
})