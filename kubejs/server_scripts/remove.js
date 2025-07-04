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
(_____)         Last Modification : 1.3.9         (_____)

*/

ServerEvents.recipes(event => {

    //allTheOres
    event.remove([{ output: '#alltheores:ore_hammers'} ,{ input: '#alltheores:ore_hammers'}])
    event.remove({ output: '#forge:gears', mod: 'alltheores'})
    event.remove({ output: '#forge:dusts', mod: 'alltheores', type: "crafting_shapeless"})

    //Applied Energistics 
    event.remove({ id: 'ae2:network/cells/view_cell'})
    event.remove({ id: 'ae2:network/cells/item_storage_cell_1k'})
    event.remove({ id: 'ae2:network/cells/item_storage_cell_4k'})
    event.remove({ id: 'ae2:network/cells/item_storage_cell_16k'})
    event.remove({ id: 'ae2:network/cells/item_storage_cell_64k'})
    event.remove({ id: 'ae2:network/cells/item_storage_cell_256k'})
    event.remove({ id: 'ae2:network/cells/fluid_storage_cell_1k'})
    event.remove({ id: 'ae2:network/cells/fluid_storage_cell_4k'})
    event.remove({ id: 'ae2:network/cells/fluid_storage_cell_16k'})
    event.remove({ id: 'ae2:network/cells/fluid_storage_cell_64k'})
    event.remove({ id: 'ae2:network/cells/fluid_storage_cell_256k'})
    event.remove({ id: 'ae2:network/cells/spatial_storage_cell_2_cubed'})
    event.remove({ id: 'ae2:network/cells/spatial_storage_cell_16_cubed'})
    event.remove({ id: 'ae2:network/cells/spatial_storage_cell_128_cubed'})
    event.remove({ id: 'ae2things:cells/disk_housing'})
    event.remove({ id: 'appbot:mana_cell_housing'})
    event.remove({ id: 'arseng:source_cell_housing'})
    event.remove({ id: 'ae2:network/cells/item_cell_housing'})
    event.remove({ id: 'ae2:network/cells/fluid_cell_housing'})
    event.remove({ id: 'createaddition:compat/ae2/charged_certus_quartz'})
    event.remove({ id: 'ae2:network/blocks/controller'})

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

    //Baubley Heart Canisters
    event.remove({ id: 'bhc:heart_amulet'})
    event.remove({ id: 'bhc:soul_heart_amulet'})

    //Blue Skies
    event.remove({ id: 'blue_skies:zeal_lighter'})

    //Botania
    event.remove({ id: 'botania:fertilizer_dye'})
    event.remove({ id: 'mythicbotany:gjallar_horn_empty_mana_infusion'})
    event.remove({ id: 'mythicbotany:kvasir_mead'})
    event.remove({ id: 'botania:petal_apothecary/pure_daisy'})
    event.remove({ id: 'botania:mana_pool'})

    //Botany Pots
    event.remove({ output: '#botanypots:all_botany_pots'})

    //CoinsJE
    event.remove({ id: 'coinsje:blasting/copper_ingot_to_copper_coin' })
    event.remove({ id: 'coinsje:blasting/iron_ingot_to_iron_coin' })
    event.remove({ id: 'coinsje:blasting/gold_ingot_to_gold_coin' })
    event.remove({ id: 'coinsje:furnace/copper_ingot_to_copper_coin' })
    event.remove({ id: 'coinsje:furnace/iron_ingot_to_iron_coin' })
    event.remove({ id: 'coinsje:furnace/gold_ingot_to_gold_coin' })
    
    //Compact Machines
    event.remove({ id: 'compactmachines:machine_tiny'})
    event.remove({ id: 'compactmachines:machine_small'})
    event.remove({ id: 'compactmachines:machine_normal'})
    event.remove({ id: 'compactmachines:machine_large'})
    event.remove({ id: 'compactmachines:machine_giant'})
    event.remove({ id: 'compactmachines:machine_maximum'})
    event.remove({ id: 'compactmachines:wall'})

    //Construction Wand
    event.remove({ output: 'constructionwand:stone_wand', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'constructionwand:iron_wand', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'constructionwand:diamond_wand', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'constructionwand:infinity_wand', type: 'minecraft:crafting_shaped' })

    //Create
    event.remove({ id: 'create:smoking/bread'})
    event.remove({ id: 'create:smelting/bread'})
    event.remove({ id: 'create:crafting/materials/rose_quartz'})
    event.remove({ id: 'create:crafting/materials/andesite_alloy'})
    event.remove({ id: 'create:crafting/materials/andesite_alloy_from_zinc'})
    event.remove({ id: 'create:mixing/andesite_alloy'})
    event.remove({ id: 'create:mixing/andesite_alloy_from_zinc'})
    event.remove({ id: 'create:compat/byg/crushing/lignite_ore'})
    event.remove({ id: 'create:milling/compat/ae2/certus_quartz'})
    event.remove({ id: 'create:milling/compat/ae2/ender_pearl'})
    event.remove({ id: 'create:milling/compat/ae2/fluix_crystal'})
    event.remove({ id: 'createaddition:compat/immersiveengineering/crushing/coke_block'})
    event.remove({ id: 'createaddition:compat/immersiveengineering/crushing/coal_coke'})
    event.remove({ id: 'create:milling/compat/ae2/sky_stone_block'})
    event.remove({ input: 'minecraft:tuff', type: 'create:crushing' })
    event.remove({ input: 'minecraft:diamond', type: 'create:crushing' })
    event.remove({ input: '#forge:ingots/steel', type: 'create:crushing' })
    event.remove({ output: 'create:red_sand_paper', type: 'minecraft:crafting_shapeless' })
    event.remove({ output: 'create:sand_paper', type: 'minecraft:crafting_shapeless' })
    event.remove([{ type: 'minecraft:blasting', input: '#create:crushed_raw_materials' }])
    event.remove([{ type: 'minecraft:smelting', input: '#create:crushed_raw_materials' }])
    event.remove([{ type:'create:splashing', input: '#create:crushed_raw_materials'}])

    //Eidolon
    event.remove({ output: 'eidolon:pewter_blend', type: 'minecraft:crafting_shapeless' })

    //Farmer's Delight
    event.remove({ output: 'farmersdelight:iron_knife'})
    event.remove({ output: 'farmersdelight:golden_knife'})
    event.remove({ output: 'farmersdelight:diamond_knife'})

    //Forbidden Arcanus
    event.remove({ id: 'forbidden_arcanus:blasting/arcane_crystal_dust_from_blasting' })
    event.remove({ id: 'forbidden_arcanus:obsidian_ingot_from_blasting'})
    event.remove({ id: 'forbidden_arcanus:smelting/arcane_crystal_dust_from_smelting' })
    event.remove({ id: 'forbidden_arcanus:obsidian_ingot'})
    event.remove({ id: 'forbidden_arcanus:arcane_crystal_dust'})

    //Functional Storage 
    event.remove({ id: 'functionalstorage:oak_drawer_alternate_x1'})
    event.remove({ id: 'functionalstorage:oak_drawer_alternate_x2'})
    event.remove({ id: 'functionalstorage:oak_drawer_alternate_x4'})

    //Hostile Neural Networks 
    event.remove({ output: 'hostilenetworks:blank_data_model'})
    event.remove({ output: 'hostilenetworks:empty_prediction'})
    event.remove({ output: 'hostilenetworks:sim_chamber'})
    event.remove({ output: 'hostilenetworks:loot_fabricator'})
    event.remove({ output: "hostilenetworks:deep_learner"})
    
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
    event.remove({ id: 'immersiveengineering:squeezer/graphite_dust'})
    event.remove({ id: 'immersiveengineering:refinery/acetaldehyde'})
    event.remove({ id: 'immersiveengineering:blueprint/graphite_electrode'})
    event.remove({ id: 'immersiveengineering:smelting/slag_glass'})
    event.remove({ id: 'immersiveengineering:sawmill/acacia_log'})
    event.remove({ id: 'immersiveengineering:sawmill/birch_log'})
    event.remove({ id: 'immersiveengineering:sawmill/crimson_log'})
    event.remove({ id: 'immersiveengineering:sawmill/dark_oak_log'})
    event.remove({ id: 'immersiveengineering:sawmill/jungle_log'})
    event.remove({ id: 'immersiveengineering:sawmill/mangrove_log'})
    event.remove({ id: 'immersiveengineering:sawmill/oak_log'})
    event.remove({ id: 'immersiveengineering:sawmill/spruce_log'})
    event.remove({ id: 'immersiveengineering:sawmill/warped_log'})
    event.remove({ id: 'immersiveengineering:sawmill/stripped_acacia_log'})
    event.remove({ id: 'immersiveengineering:sawmill/stripped_birch_log'})
    event.remove({ id: 'immersiveengineering:sawmill/stripped_crimson_log'})
    event.remove({ id: 'immersiveengineering:sawmill/stripped_dark_oak_log'})
    event.remove({ id: 'immersiveengineering:sawmill/stripped_jungle_log'})
    event.remove({ id: 'immersiveengineering:sawmill/stripped_mangrove_log'})
    event.remove({ id: 'immersiveengineering:sawmill/stripped_oak_log'})
    event.remove({ id: 'immersiveengineering:sawmill/stripped_spruce_log'})
    event.remove({ id: 'immersiveengineering:sawmill/stripped_warped_log'})
    event.remove({ input: 'immersiveengineering:hammer', output: "#forge:plates" })
    event.remove({ input: 'immersiveengineering:hammer', output: "#forge:dusts" })
    event.remove({ input: 'immersiveengineering:wirecutter', output: '#forge:wires', type: 'minecraft:crafting_shapeless' })
    event.remove({ output: 'immersiveengineering:hammer', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'immersiveengineering:wirecutter', type: 'minecraft:crafting_shaped' })

    //Immersive Petroleum
    event.remove({ id: 'immersivepetroleum:hydrotreater/propylene_plastic'})
    event.remove({ id: 'immersivepetroleum:hydrotreater/ethylene_plastic'})
    event.remove({ id: 'immersivepetroleum:arcfurnace/steel'})

    //Minecraft
    event.remove({ output: 'minecraft:fishing_rod', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'minecraft:enchanted_golden_apple', type: 'minecraft:crafting_shaped' })
    event.remove({ id: 'minecraft:bread' })
    event.remove({ id: 'minecraft:cookie' })
    event.remove({ id: 'minecraft:decorations/decorated_pot_simple' })

    //Naturalist
    event.remove({ id: 'naturalist:cooked_egg_from_campfire_cooking' })
    event.remove({ id: 'naturalist:cooked_egg' })
    event.remove({ id: 'naturalist:cooked_egg_from_smoking' })

    //Occultism
    event.remove({ id: 'undergarden:catalyst'})
    
    //Pneumatic Craft
    event.remove({ id: 'pneumaticcraft:compressed_iron_gear'})
    event.remove({ id: 'pneumaticcraft:block_heat_properties/immersiveengineering/uranium'})

    //Powah 
    event.remove({ id: 'powah:crafting/dielectric_paste'})
    event.remove({ id: 'powah:crafting/dielectric_paste_2'})
    event.remove({ id: 'powah:crafting/energy_cell_basic_2'})
    event.remove({ id: 'powah:crafting/cable_basic_2'})
    event.remove({ id: 'powah:crafting/cable_hardened_2'})
    event.remove({ id: 'powah:crafting/cable_blazing_2'})
    event.remove({ id: 'powah:crafting/cable_niotic_2'})
    event.remove({ id: 'powah:crafting/cable_spirited_2'})
    event.remove({ id: 'powah:crafting/cable_nitro_2'})
    
    //Psi 
    event.remove({ id: 'psi:gold_to_psimetal_assembly_upgrade'})
    event.remove({ id: 'psi:cad_assembly_psimetal'})
    event.remove({ id: 'psi:cad_assembly_iron'})
    event.remove({ id: 'psi:cad_assembly_gold'})
    event.remove({ id: 'psi:spell_bullet_loopcast'})
    event.remove({ id: 'psi:spell_bullet_circle'})
    event.remove({ id: 'psi:spell_bullet_grenade'})
    event.remove({ id: 'psi:spell_bullet_charge'})
    event.remove({ id: 'psi:spell_bullet_projectile'})
    event.remove({ id: 'psi:spell_bullet_mine'})
    event.remove({ id: 'psi:spell_bullet_basic'})


    //Quark
    event.remove({ id: 'quark:tweaks/smelting/bone_meal_utility' })

    //Simple Storage
    event.remove({ output: 'storagenetwork:inventory_remote', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'storagenetwork:crafting_remote', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'storagenetwork:master', type: 'minecraft:crafting_shaped' })

    //Thermal Series 
    event.remove({ input: 'thermal:earth_charge', output: '#forge:dusts', not: {output: '#forge:dusts/prismarine'}})
    event.remove({ id: 'thermal:earth_charge/ender_pearl_dust_from_ender_pearl'})
    event.remove({ id: 'thermal_extra:dragonsteel_dust'})
    event.remove({ id: 'thermal_extra:parts/dragonsteel_gear'})
    event.remove({ id: 'thermal_extra:parts/shellite_gear'})
    event.remove({ id: 'thermal_extra:parts/soul_infused_gear'})
    event.remove({ id: 'thermal_extra:parts/twinite_gear'})
    event.remove({ id: 'thermal_extra:shellite_dust'})
    event.remove({ id: 'thermal_extra:soul_infused_dust'})
    event.remove({ id: 'thermal_extra:twinite_dust'})
    event.remove({ id: 'thermal:bronze_dust_4'})
    event.remove({ id: 'thermal:constantan_dust_2'})
    event.remove({ id: 'thermal:electrum_dust_2'})
    event.remove({ id: 'thermal:enderium_dust_2'})
    event.remove({ id: 'thermal:invar_dust_3'})
    event.remove({ id: 'thermal:lumium_dust_4'})
    event.remove({ id: 'thermal:machine_frame'})
    event.remove({ id: 'thermal:signalum_dust_4'})
    event.remove({ id: 'thermalendergy:melodium_gear'})
    event.remove({ id: 'thermalendergy:prismalium_gear'})
    event.remove({ id: 'thermalendergy:stellarium_gear'})
    event.remove({ id: 'thermal:fire_charge/lumium_ingot_4'})
    event.remove({ id: 'thermal:fire_charge/constantan_ingot_2'})
    event.remove({ id: 'thermal:fire_charge/invar_ingot_3'})
    event.remove({ id: 'thermal:fire_charge/enderium_ingot_2'})
    event.remove({ id: 'thermal:fire_charge/electrum_ingot_2'})
    event.remove({ id: 'thermal:fire_charge/bronze_ingot_4'})
    event.remove({ id: 'thermal:fire_charge/signalum_ingot_4'})
    event.remove({ id: 'thermalendergy:vibrating_core'})
    event.remove({ id: 'thermal:redstone_servo'})
    event.remove({ id: 'thermal:rf_coil'})
    event.remove({ id: 'thermal:machine_smelter'})
    event.remove({ id: 'thermal:machines/centrifuge/centrifuge_invar_dust'})
    event.remove({ id: 'thermal:machines/centrifuge/centrifuge_bronze_dust'})
    event.remove({ id: 'thermal:machines/centrifuge/centrifuge_constantan_dust'})
    event.remove({ id: 'thermal:machines/centrifuge/centrifuge_electrum_dust'})
    event.remove({ output: '#thermal:glass/hardened', type: "crafting_shapeless"})
    
    //Time In A Bottle
    event.remove({ id: 'tiab:time_in_a_bottle'})

    //Trash Cans
    event.remove({ id: 'trashcans:ultimate_trash_can'})
    
    //Twilight Forest
    event.remove({ output: 'twilightforest:uncrafting_table'})
    
})