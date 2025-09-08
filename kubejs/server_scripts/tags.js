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

/*********************************************/
//SECOND FILE OF UNIFICATION, PLEASE DON'T TOUCH
/*********************************************/

ServerEvents.tags('item', e => {

    /*********************UNIFICATION*********************/
    //Ores
    e.remove('forge:ores/aluminum', 'immersiveengineering:ore_aluminum', 'ftbic:aluminum_ore')
    e.remove('forge:ores/iridium', 'ftbic:iridium_ore')
    e.remove('forge:ores/lead', 'eidolon:lead_ore', 'immersiveengineering:ore_lead', 'thermal:lead_ore', 'mekanism:lead_ore', 'ftbic:lead_ore')
    e.remove('forge:ores/nickel', 'immersiveengineering:ore_nickel', 'thermal:nickel_ore')
    e.remove('forge:ores/osmium', 'mekanism:osmium_ore')
    e.remove('forge:ores/ruby', 'thermal:ruby_ore')
    e.remove('forge:ores/sapphire', 'iceandfire:sapphire_ore', 'thermal:sapphire_ore')
    e.remove('forge:ores/silver', 'eidolon:silver_ore', 'immersiveengineering:ore_silver', 'darkerdepths:limestone_silver_ore', 'darkerdepths:aridrock_silver_ore', 'darkerdepths:silver_ore', 'iceandfire:silver_ore', 'occultism:silver_ore', 'thermal:silver_ore')
    e.remove('forge:ores/tin', 'thermal:tin_ore', 'mekanism:tin_ore', 'ftbic:tin_ore')
    e.remove('forge:ores/uranium', 'immersiveengineering:ore_uranium', 'mekanism:uranium_ore', 'ftbic:uranium_ore')
    e.remove('forge:ores/zinc', 'create:zinc_ore', 'regen:zinc_ore')
    
    //Deepslate Ores
    e.remove('forge:ores/aluminum', 'immersiveengineering:deepslate_ore_aluminum', 'ftbic:deepslate_aluminum_ore')
    e.remove('forge:ores/iridium', 'ftbic:deepslate_iridium_ore')
    e.remove('forge:ores/lead', 'eidolon:deep_lead_ore', 'immersiveengineering:deepslate_ore_lead', 'thermal:deepslate_lead_ore', 'mekanism:deepslate_lead_ore', 'ftbic:deepslate_lead_ore')
    e.remove('forge:ores/nickel', 'immersiveengineering:deepslate_ore_nickel', 'thermal:deepslate_nickel_ore')
    e.remove('forge:ores/osmium', 'mekanism:deepslate_osmium_ore')
    e.remove('forge:ores/ruby', 'thermal:deepslate_ruby_ore')
    e.remove('forge:ores/sapphire', 'iceandfire:sapphire_ore', 'thermal:deepslate_sapphire_ore')
    e.remove('forge:ores/silver', 'eidolon:deep_silver_ore', 'immersiveengineering:deepslate_ore_silver', 'iceandfire:deepslate_silver_ore', 'occultism:silver_ore_deepslate', 'thermal:deepslate_silver_ore')
    e.remove('forge:ores/tin', 'thermal:deepslate_tin_ore', 'mekanism:deepslate_tin_ore', 'ftbic:deepslate_tin_ore')
    e.remove('forge:ores/uranium', 'immersiveengineering:deepslate_ore_uranium', 'mekanism:deepslate_uranium_ore', 'ftbic:deepslate_uranium_ore')
    e.remove('forge:ores/zinc', 'create:deepslate_zinc_ore', 'regen:deepslate_zinc_ore')

    //Raw Materials
    e.remove('forge:raw_materials/aluminum', 'immersiveengineering:raw_aluminum', 'ftbic:aluminum_chunk')
    e.remove('forge:raw_materials/iridium', 'ftbic:iridium_chunk')
    e.remove('forge:raw_materials/lead', 'eidolon:raw_lead', 'immersiveengineering:raw_lead', 'thermal:raw_lead', 'mekanism:raw_lead', 'ftbic:lead_chunk')
    e.remove('forge:raw_materials/nickel', 'immersiveengineering:raw_nickel', 'thermal:raw_nickel')
    e.remove('forge:raw_materials/osmium', 'mekanism:raw_osmium')
    e.remove('forge:raw_materials/silver', 'eidolon:raw_silver', 'immersiveengineering:raw_silver', 'darkerdepths:raw_silver', 'occultism:raw_silver', 'thermal:raw_silver')
    e.remove('forge:raw_materials/tin', 'thermal:raw_tin', 'mekanism:raw_tin', 'ftbic:tin_chunk')
    e.remove('forge:raw_materials/uranium', 'immersiveengineering:raw_uranium', 'mekanism:raw_uranium', 'ftbic:uranium_chunk')
    e.remove('forge:raw_materials/zinc', 'create:raw_zinc')
    
    //Raw Storage Blocks
    e.remove('forge:storage_blocks/raw_aluminum', 'immersiveengineering:raw_block_aluminum')
    e.remove('forge:storage_blocks/raw_lead', 'eidolon:raw_lead_block', 'immersiveengineering:raw_block_lead', 'thermal:raw_lead_block', 'mekanism:block_raw_lead')
    e.remove('forge:storage_blocks/raw_nickel', 'immersiveengineering:raw_block_nickel', 'thermal:raw_nickel_block')
    e.remove('forge:storage_blocks/raw_osmium', 'mekanism:block_raw_osmium')
    e.remove('forge:storage_blocks/raw_silver', 'eidolon:raw_silver_block', 'immersiveengineering:raw_block_silver', 'darkerdepths:raw_silver_block', 'thermal:raw_silver_block')
    e.remove('forge:storage_blocks/raw_tin', 'thermal:raw_tin_block', 'mekanism:block_raw_tin')
    e.remove('forge:storage_blocks/raw_uranium', 'immersiveengineering:raw_block_uranium', 'mekanism:block_raw_uranium')
    e.remove('forge:storage_blocks/raw_zinc', 'create:raw_zinc_block')

    //Ingots
    e.remove('forge:ingots/aluminum', 'immersiveengineering:ingot_aluminum', 'chemlib:aluminum_ingot', 'ftbic:aluminum_ingot')
    e.remove('forge:ingots/brass', 'create:brass_ingot')
    e.remove('forge:ingots/bronze', 'thermal:bronze_ingot', 'mekanism:ingot_bronze', 'ftbic:bronze_ingot')
    e.remove('forge:ingots/constantan', 'immersiveengineering:ingot_constantan', 'thermal:constantan_ingot')
    e.remove('forge:ingots/electrum', 'immersiveengineering:ingot_electrum', 'createaddition:electrum_ingot', 'thermal:electrum_ingot')
    e.remove('forge:ingots/enderium', 'thermal:enderium_ingot', 'ftbic:enderium_ingot')
    e.remove('forge:ingots/invar', 'thermal:invar_ingot')
    e.remove('forge:ingots/iridium', 'chemlib:iridium_ingot', 'ftbic:iridium_ingot')
    e.remove('forge:ingots/lead', 'eidolon:lead_ingot', 'immersiveengineering:ingot_lead', 'thermal:lead_ingot', 'mekanism:ingot_lead', 'chemlib:lead_ingot', 'ftbic:lead_ingot')
    e.remove('forge:ingots/lumium', 'thermal:lumium_ingot')
    e.remove('forge:ingots/nickel', 'immersiveengineering:ingot_nickel', 'thermal:nickel_ingot', 'chemlib:nickel_ingot')
    e.remove('forge:ingots/osmium', 'mekanism:ingot_osmium', 'chemlib:osmium_ingot')
    e.remove('forge:ingots/platinum', 'chemlib:platinum_ingot')
    e.remove('forge:ingots/signalum', 'thermal:signalum_ingot')
    e.remove('forge:ingots/silver', 'eidolon:silver_ingot', 'immersiveengineering:ingot_silver', 'darkerdepths:silver_ingot', 'iceandfire:silver_ingot', 'occultism:silver_ingot', 'thermal:silver_ingot', 'chemlib:silver_ingot')
    e.remove('forge:ingots/steel', 'immersiveengineering:ingot_steel', 'ad_astra:steel_ingot', 'mekanism:ingot_steel')
    e.remove('forge:ingots/tin', 'thermal:tin_ingot', 'mekanism:ingot_tin', 'chemlib:tin_ingot', 'ftbic:tin_ingot')
    e.remove('forge:ingots/uranium', 'immersiveengineering:ingot_uranium', 'mekanism:ingot_uranium', 'chemlib:uranium_ingot', 'ftbic:uranium_ingot')
    e.remove('forge:ingots/zinc', 'create:zinc_ingot', 'chemlib:zinc_ingot', 'regen:zinc')

    //Plates
    e.remove('forge:plates/aluminum', 'immersiveengineering:plate_aluminum', 'ftbic:aluminum_plate')
    e.remove('forge:plates/brass', 'create:brass_sheet')
    e.remove('forge:plates/bronze', 'thermal:bronze_plate', 'ftbic:bronze_plate')
    e.remove('forge:plates/constantan', 'immersiveengineering:plate_constantan', 'thermal:constantan_plate')
    e.remove('forge:plates/copper', 'create:copper_sheet', 'immersiveengineering:plate_copper', 'thermal:copper_plate', 'ftbic:copper_plate')
    e.remove('forge:plates/electrum', 'immersiveengineering:plate_electrum', 'createaddition:electrum_sheet', 'thermal:electrum_plate')
    e.remove('forge:plates/enderium', 'thermal:enderium_plate', 'ftbic:enderium_plate')
    e.remove('forge:plates/gold', 'create:golden_sheet', 'immersiveengineering:plate_gold', 'thermal:gold_plate', 'ftbic:gold_plate')
    e.remove('forge:plates/invar', 'thermal:invar_plate')
    e.remove('forge:plates/iridium', 'ftbic:iridium_plate')
    e.remove('forge:plates/iron', 'create:iron_sheet', 'immersiveengineering:plate_iron', 'thermal:iron_plate', 'ad_astra:iron_plate', 'ftbic:iron_plate')
    e.remove('forge:plates/lead', 'immersiveengineering:plate_lead', 'thermal:lead_plate', 'ftbic:lead_plate')
    e.remove('forge:plates/lumium', 'thermal:lumium_plate')
    e.remove('forge:plates/netherite', 'createdeco:netherite_sheet')
    e.remove('forge:plates/nickel', 'immersiveengineering:plate_nickel', 'thermal:nickel_plate')
    e.remove('forge:plates/signalum', 'thermal:signalum_plate')
    e.remove('forge:plates/silver', 'immersiveengineering:plate_silver', 'thermal:silver_plate')
    e.remove('forge:plates/steel', 'immersiveengineering:plate_steel', 'ad_astra:steel_plate')
    e.remove('forge:plates/tin', 'thermal:tin_plate', 'ftbic:tin_plate')
    e.remove('forge:plates/uranium', 'immersiveengineering:plate_uranium', 'ftbic:uranium_plate')
    e.remove('forge:plates/zinc', 'createdeco:zinc_sheet', 'createaddition:zinc_sheet')
    
    //Gears
    e.remove('forge:gears/aluminum', 'ftbic:aluminum_gear')
    e.remove('forge:gears/bronze', 'thermal:bronze_gear', 'ftbic:bronze_gear')
    e.remove('forge:gears/constantan', 'thermal:constantan_gear')
    e.remove('forge:gears/copper', 'thermal:copper_gear', 'ftbic:copper_gear')
    e.remove('forge:gears/diamond', 'industrialforegoing:diamond_gear', 'thermal:diamond_gear')
    e.remove('forge:gears/electrum', 'thermal:electrum_gear')
    e.remove('forge:gears/enderium', 'thermal:enderium_gear', 'ftbic:enderium_gear')
    e.remove('forge:gears/gold', 'industrialforegoing:gold_gear', 'thermal:gold_gear', 'ftbic:gold_gear')
    e.remove('forge:gears/invar', 'thermal:invar_gear')
    e.remove('forge:gears/iridium', 'ftbic:iridium_gear')
    e.remove('forge:gears/iron', 'industrialforegoing:iron_gear', 'thermal:iron_gear', 'ftbic:iron_gear')
    e.remove('forge:gears/lead', 'thermal:lead_gear', 'ftbic:lead_gear')
    e.remove('forge:gears/lumium', 'thermal:lumium_gear')
    e.remove('forge:gears/nickel', 'thermal:nickel_gear')
    e.remove('forge:gears/signalum', 'thermal:signalum_gear')
    e.remove('forge:gears/silver', 'thermal:silver_gear')
    e.remove('forge:gears/tin', 'thermal:tin_gear', 'ftbic:tin_gear')
    e.remove('forge:gears/uranium', 'ftbic:uranium_gear')
    
    //Rods
    e.remove('forge:rods/aluminum', 'immersiveengineering:stick_aluminum', 'ftbic:aluminum_rod')
    e.remove('forge:rods/brass', 'createaddition:brass_rod')
    e.remove('forge:rods/bronze', 'ftbic:bronze_rod')
    e.remove('forge:rods/copper', 'createaddition:copper_rod', 'ftbic:copper_rod')
    e.remove('forge:rods/electrum', 'createaddition:electrum_rod')
    e.remove('forge:rods/enderium', 'ftbic:enderium_rod')
    e.remove('forge:rods/gold', 'createaddition:gold_rod', 'ftbic:gold_rod')
    e.remove('forge:rods/iridium', 'ftbic:iridium_rod')
    e.remove('forge:rods/iron', 'createaddition:iron_rod', 'immersiveengineering:stick_iron', 'ad_astra:iron_rod', 'ftbic:iron_rod')
    e.remove('forge:rods/lead', 'ftbic:lead_rod')
    e.remove('forge:rods/steel', 'immersiveengineering:stick_steel')
    e.remove('forge:rods/tin', 'ftbic:tin_rod')
    e.remove('forge:rods/uranium', 'ftbic:uranium_rod')
    
    //Nuggets
    e.remove('forge:nuggets/aluminum', 'immersiveengineering:nugget_aluminum', 'chemlib:aluminum_nugget', 'ftbic:aluminum_nugget')
    e.remove('forge:nuggets/brass', 'create:brass_nugget')
    e.remove('forge:nuggets/bronze', 'thermal:bronze_nugget', 'mekanism:nugget_bronze', 'ftbic:bronze_nugget')
    e.remove('forge:nuggets/constantan', 'immersiveengineering:nugget_constantan', 'thermal:constantan_nugget')
    e.remove('forge:nuggets/copper', 'create:copper_nugget', 'immersiveengineering:nugget_copper', 'iceandfire:copper_nugget', 'thermal:copper_nugget', 'skilltree:copper_nugget', 'ftbic:copper_nugget')
    e.remove('forge:nuggets/electrum', 'createaddition:electrum_nugget', 'immersiveengineering:nugget_electrum')
    e.remove('forge:nuggets/electrum', 'thermal:electrum_nugget')
    e.remove('forge:nuggets/enderium', 'thermal:enderium_nugget', 'ftbic:enderium_nugget')
    e.remove('forge:nuggets/invar', 'thermal:invar_nugget')
    e.remove('forge:nuggets/iridium', 'chemlib:iridium_nugget', 'ftbic:iridium_nugget')
    e.remove('forge:nuggets/lead', 'eidolon:lead_nugget', 'immersiveengineering:nugget_lead', 'thermal:lead_nugget', 'mekanism:nugget_lead', 'chemlib:lead_nugget', 'ftbic:lead_nugget')
    e.remove('forge:nuggets/lumium', 'thermal:lumium_nugget')
    e.remove('forge:nuggets/netherite', 'thermal:netherite_nugget')
    e.remove('forge:nuggets/nickel', 'immersiveengineering:nugget_nickel', 'thermal:nickel_nugget', 'chemlib:nickel_nugget')
    e.remove('forge:nuggets/osmium', 'mekanism:nugget_osmium', 'chemlib:osmium_nugget')
    e.remove('forge:nuggets/platinum', 'chemlib:platinum_nugget')
    e.remove('forge:nuggets/signalum', 'thermal:signalum_nugget')
    e.remove('forge:nuggets/silver', 'eidolon:silver_nugget', 'immersiveengineering:nugget_silver', 'iceandfire:silver_nugget', 'occultism:silver_nugget', 'thermal:silver_nugget', 'chemlib:silver_nugget')
    e.remove('forge:nuggets/steel', 'immersiveengineering:nugget_steel', 'ad_astra:steel_nugget', 'mekanism:nugget_steel')
    e.remove('forge:nuggets/tin', 'thermal:tin_nugget', 'mekanism:nugget_tin', 'chemlib:tin_nugget', 'ftbic:tin_nugget')
    e.remove('forge:nuggets/uranium', 'immersiveengineering:nugget_uranium', 'mekanism:nugget_uranium', 'chemlib:uranium_nugget', 'ftbic:uranium_nugget')
    e.remove('forge:nuggets/zinc', 'create:zinc_nugget', 'chemlib:zinc_nugget')

    //Dusts
    e.remove('forge:dusts/aluminum', 'immersiveengineering:dust_aluminum', 'chemlib:aluminum_dust', 'ftbic:aluminum_dust')
    e.remove('forge:dusts/bronze', 'thermal:bronze_dust', 'mekanism:dust_bronze', 'ftbic:bronze_dust')
    e.remove('forge:dusts/charcoal', 'ftbic:charcoal_dust')
    e.remove('forge:dusts/coal', 'ftbic:coal_dust')
    e.remove('forge:dusts/constantan', 'immersiveengineering:dust_constantan', 'thermal:constantan_dust')
    e.remove('forge:dusts/copper', 'immersiveengineering:dust_copper', 'occultism:copper_dust', 'thermal:copper_dust', 'mekanism:dust_copper', 'chemlib:copper_dust', 'ftbic:copper_dust')
    e.remove('forge:dusts/diamond', 'createaddition:diamond_grit', 'thermal:diamond_dust', 'mekanism:dust_diamond', 'ftbic:diamond_dust')
    e.remove('forge:dusts/electrum', 'immersiveengineering:dust_electrum', 'thermal:electrum_dust')
    e.remove('forge:dusts/ender', 'ftbic:ender_dust')
    e.remove('forge:dusts/ender_pearl', 'ae2:ender_dust')
    e.remove('forge:dusts/enderium', 'thermal:enderium_dust', 'ftbic:enderium_dust')
    e.remove('forge:dusts/emerald', 'mekanism:dust_emerald')
    e.remove('forge:dusts/gold', 'immersiveengineering:dust_gold', 'occultism:gold_dust', 'thermal:gold_dust', 'mekanism:dust_gold', 'chemlib:gold_dust', 'ftbic:gold_dust')
    e.remove('forge:dusts/invar', 'thermal:invar_dust')
    e.remove('forge:dusts/iridium', 'chemlib:iridium_dust', 'ftbic:iridium_dust')
    e.remove('forge:dusts/iron', 'immersiveengineering:dust_iron', 'occultism:iron_dust', 'thermal:iron_dust', 'mekanism:dust_iron', 'chemlib:iron_dust', 'ftbic:iron_dust')
    e.remove('forge:dusts/lapis', 'mekanism:dust_lapis_lazuli')
    e.remove('forge:dusts/lead', 'immersiveengineering:dust_lead', 'thermal:lead_dust', 'mekanism:dust_lead', 'chemlib:lead_dust', 'ftbic:lead_dust')
    e.remove('forge:dusts/lithium', 'chemlib:lithium_dust')
    e.remove('forge:dusts/lumium', 'thermal:lumium_dust')
    e.remove('forge:dusts/netherite', 'thermal:netherite_dust', 'mekanism:dust_netherite')
    e.remove('forge:dusts/nickel', 'immersiveengineering:dust_nickel', 'thermal:nickel_dust', 'chemlib:nickel_dust')
    e.remove('forge:dusts/obsidian', 'occultism:obsidian_dust', 'mekanism:dust_obsidian', 'ftbic:obsidian_dust')
    e.remove('forge:dusts/osmium', 'mekanism:dust_osmium', 'chemlib:osmium_dust')
    e.remove('forge:dusts/platinum', 'chemlib:platinum_dust')
    e.remove('forge:dusts/quartz', 'mekanism:dust_quartz')
    e.remove('forge:dusts/signalum', 'thermal:signalum_dust')
    e.remove('forge:dusts/silver', 'immersiveengineering:dust_silver', 'occultism:silver_dust', 'thermal:silver_dust', 'chemlib:silver_dust')
    e.remove('forge:dusts/steel', 'immersiveengineering:dust_steel', 'mekanism:dust_steel')
    e.remove('forge:dusts/sulfur', 'immersiveengineering:dust_sulfur', 'eidolon:sulfur', 'mekanism:dust_sulfur', 'chemlib:sulfur_dust')
    e.remove('forge:dusts/tin', 'thermal:tin_dust', 'mekanism:dust_tin', 'chemlib:tin_dust', 'ftbic:tin_dust')
    e.remove('forge:dusts/uranium', 'immersiveengineering:dust_uranium', 'mekanism:dust_uranium', 'chemlib:uranium_dust', 'ftbic:uranium_dust')
    e.remove('forge:dusts/wood', 'immersiveengineering:dust_wood', 'mekanism:sawdust')
    e.remove('forge:dusts/zinc', 'chemlib:zinc_dust')
    
    //Blocks
    e.remove('forge:storage_blocks/aluminum', 'immersiveengineering:storage_aluminum', 'chemlib:aluminum_metal_block', 'ftbic:aluminum_block')
    e.remove('forge:storage_blocks/brass', 'create:brass_block')
    e.remove('forge:storage_blocks/bronze', 'thermal:bronze_block', 'mekanism:block_bronze', 'ftbic:bronze_block')
    e.remove('forge:storage_blocks/charcoal', 'quark:charcoal_block', 'mekanism:block_charcoal')
    e.remove('forge:storage_blocks/coal_coke', 'thermal:coal_coke_block')
    e.remove('forge:storage_blocks/constantan', 'immersiveengineering:storage_constantan', 'thermal:constantan_block')
    e.remove('forge:storage_blocks/electrum', 'immersiveengineering:storage_electrum', 'thermal:electrum_block')
    e.remove('forge:storage_blocks/enderium', 'thermal:enderium_block', 'ftbic:enderium_block')
    e.remove('forge:storage_blocks/invar', 'thermal:invar_block')
    e.remove('forge:storage_blocks/iridium', 'chemlib:iridium_metal_block', 'ftbic:iridium_block')
    e.remove('forge:storage_blocks/lead', 'immersiveengineering:storage_lead', 'eidolon:lead_block', 'thermal:lead_block', 'mekanism:block_lead', 'chemlib:lead_metal_block', 'ftbic:lead_block')
    e.remove('forge:storage_blocks/lumium', 'thermal:lumium_block')
    e.remove('forge:storage_blocks/nickel', 'immersiveengineering:storage_nickel', 'thermal:nickel_block', 'chemlib:nickel_metal_block')
    e.remove('forge:storage_blocks/osmium', 'mekanism:block_osmium', 'chemlib:osmium_metal_block')
    e.remove('forge:storage_blocks/platinum', 'chemlib:platinum_metal_block')
    e.remove('forge:storage_blocks/sapphire', 'iceandfire:sapphire_block')
    e.remove('forge:storage_blocks/signalum', 'thermal:signalum_block')
    e.remove('forge:storage_blocks/silver', 'immersiveengineering:storage_silver', 'eidolon:silver_block', 'darkerdepths:silver_block', 'iceandfire:silver_block', 'occultism:silver_block', 'thermal:silver_block', 'chemlib:silver_metal_block')
    e.remove('forge:storage_blocks/steel', 'immersiveengineering:storage_steel', 'ad_astra:steel_block', 'mekanism:block_steel')
    e.remove('forge:storage_blocks/tin', 'thermal:tin_block', 'mekanism:block_tin', 'chemlib:tin_metal_block', 'ftbic:tin_block')
    e.remove('forge:storage_blocks/uranium', 'immersiveengineering:storage_uranium', 'mekanism:block_uranium', 'chemlib:uranium_metal_block', 'ftbic:uranium_block')
    e.remove('forge:storage_blocks/zinc', 'create:zinc_block', 'chemlib:zinc_metal_block')

    //Wires
    e.remove('forge:wires/aluminum', 'ftbic:aluminum_wire')
    e.remove('forge:wires/copper', 'createaddition:copper_wire', 'ftbic:copper_wire')
    e.remove('forge:wires/electrum', 'createaddition:electrum_wire')
    e.remove('forge:wires/gold', 'ftbic:gold_wire')
    
    //Gems
    e.remove('forge:gems/sapphire', 'iceandfire:sapphire_gem', 'thermal:sapphire')
    e.remove('forge:gems/ruby', 'thermal:ruby')
   
    //Others
    e.remove('forge:crops/rice', 'sushigocrafting:rice')
    e.remove('forge:plastic', 'industrialforegoing:plastic')
    e.remove('forge:coal_coke', 'thermal:coal_coke')
    e.remove('forge:bitumen', 'immersivepetroleum:bitumen')
    e.remove('forge:slag', 'immersivepetroleum:slag')
    e.remove('forge:silicon', 'ftbic:silicon')

    /*********************OTHERS**************************/
    e.remove('pneumaticcraft:upgrade_components', 'minecraft:lapis_lazuli')
    e.remove('forbidden_arcanus:clibano/creates_soul_fire', 'forbidden_arcanus:soul')
    e.remove('forge:ores_in_ground/stone', 'mekanism:osmium_ore', 'mekanism:tin_ore', 'immersiveengineering:ore_aluminum', 'immersiveengineering:ore_lead', 'immersiveengineering:ore_silver', 'immersiveengineering:ore_nickel', 'immersiveengineering:ore_uranium', 'create:zinc_ore', 'eidolon:lead_ore', 'eidolon:silver_ore', 'mekanism:uranium_ore', 'mekanism:lead_ore', 'mekanism:fluorite_ore')

    /********************DISABLE**************************/
    const DISABLED_ITEMS = [
        'sushigocrafting:rice',
        'sushigocrafting:rice_seeds',
        'alltheores:other_aluminum_ore',
        'alltheores:other_coal_ore',
        'alltheores:other_copper_ore',
        'alltheores:other_diamond_ore',
        'alltheores:other_emerald_ore',
        'alltheores:other_gold_ore',
        'alltheores:other_iridium_ore',
        'alltheores:other_iron_ore',
        'alltheores:other_lapis_ore',
        'alltheores:other_lead_ore',
        'alltheores:other_nickel_ore',
        'alltheores:other_osmium_ore',
        'alltheores:other_platinum_ore',
        'alltheores:other_quartz_ore',
        'alltheores:other_redstone_ore',
        'alltheores:other_silver_ore',
        'alltheores:other_tin_ore',
        'alltheores:other_uranium_ore',
        'alltheores:other_zinc_ore',
        'createaddition:electrum_sheet',
        'create:iron_sheet',
        'create:golden_sheet',
        'create:copper_sheet',
        'create:brass_sheet',
        'createaddition:zinc_sheet',
        'create:dough',
        'immersiveengineering:slag',
        'quark:carrot_crate',
        'thermal:carrot_block',
        'quark:gunpowder_sack',
        'mekanism:dust_sulfur',
        'mysticalagradditions:end_prosperity_ore',
        'mysticalagradditions:nether_prosperity_ore',
        'ad_astra:mercury_iron_ore',
        'mysticalagriculture:rubber_seeds',
        'mysticalagriculture:mithril_seeds',
        'mysticalagriculture:graphite_seeds',
        'mysticalagriculture:tungsten_seeds',
        'mysticalagriculture:titanium_seeds',
        'mysticalagriculture:chrome_seeds',
        'productivebees:honey_bucket',
        'chemlib:lithium_plate',
        'chemlib:beryllium_plate',
        'chemlib:sodium_plate',
        'chemlib:magnesium_plate',
        'chemlib:aluminum_plate',
        'chemlib:potassium_plate',
        'chemlib:calcium_plate',
        'chemlib:scandium_plate',
        'chemlib:titanium_plate',
        'chemlib:vanadium_plate',
        'chemlib:chromium_plate',
        'chemlib:manganese_plate',
        'chemlib:iron_plate',
        'chemlib:cobalt_plate',
        'chemlib:nickel_plate',
        'chemlib:copper_plate',
        'chemlib:zinc_plate',
        'chemlib:gallium_plate',
        'chemlib:rubidium_plate',
        'chemlib:strontium_plate',
        'chemlib:yttrium_plate',
        'chemlib:zirconium_plate',
        'chemlib:niobium_plate',
        'chemlib:molybdenum_plate',
        'chemlib:ruthenium_plate',
        'chemlib:rhodium_plate',
        'chemlib:palladium_plate',
        'chemlib:silver_plate',
        'chemlib:cadmium_plate',
        'chemlib:indium_plate',
        'chemlib:tin_plate',
        'chemlib:cesium_plate',
        'chemlib:barium_plate',
        'chemlib:lanthanum_plate',
        'chemlib:cerium_plate',
        'chemlib:praseodymium_plate',
        'chemlib:neodymium_plate',
        'chemlib:samarium_plate',
        'chemlib:europium_plate',
        'chemlib:gadolinium_plate',
        'chemlib:terbium_plate',
        'chemlib:dysprosium_plate',
        'chemlib:holmium_plate',
        'chemlib:erbium_plate',
        'chemlib:thulium_plate',
        'chemlib:ytterbium_plate',
        'chemlib:lutetium_plate',
        'chemlib:hafnium_plate',
        'chemlib:tantalum_plate',
        'chemlib:tungsten_plate',
        'chemlib:rhenium_plate',
        'chemlib:osmium_plate',
        'chemlib:iridium_plate',
        'chemlib:platinum_plate',
        'chemlib:gold_plate',
        'chemlib:thallium_plate',
        'chemlib:lead_plate',
        'chemlib:bismuth_plate',
        'chemlib:polonium_plate',
        'chemlib:francium_plate',
        'chemlib:radium_plate',
        'chemlib:actinium_plate',
        'chemlib:thorium_plate',
        'chemlib:protactinium_plate',
        'chemlib:uranium_plate',
        'myrtrees:latex'
        ].forEach(item => {e.removeAllTagsFrom(item)})

    /**********************ADD****************************/
    e.add('botania:apothecary', ['botania:apothecary_mesa', 'botania:apothecary_taiga', 'botania:apothecary_desert', 'botania:apothecary_swamp', 'botania:apothecary_fungal', 'botania:apothecary_mountain', 'botania:apothecary_plains', 'botania:apothecary_forest', 'botania:apothecary_default', 'botania:apothecary_mossy'])
    e.add('forge:plastic', 'pneumaticcraft:plastic')
    e.add('powah:ender_cell', ['powah:ender_cell_nitro', 'powah:ender_cell_spirited', 'powah:ender_cell_niotic', 'powah:ender_cell_blazing', 'powah:ender_cell_hardened', 'powah:ender_cell_basic', 'powah:ender_cell_starter'])
    e.add('powah:ender_gate', ['powah:ender_gate_nitro', 'powah:ender_gate_spirited', 'powah:ender_gate_niotic', 'powah:ender_gate_blazing', 'powah:ender_gate_hardened', 'powah:ender_gate_basic', 'powah:ender_gate_starter'])
    e.add('powah:energizing_rod', ['powah:energizing_rod_nitro', 'powah:energizing_rod_spirited', 'powah:energizing_rod_niotic', 'powah:energizing_rod_blazing', 'powah:energizing_rod_hardened', 'powah:energizing_rod_basic', 'powah:energizing_rod_starter'])
    e.add('powah:energy_cable', ['powah:energy_cable_nitro', 'powah:energy_cable_spirited', 'powah:energy_cable_niotic', 'powah:energy_cable_blazing', 'powah:energy_cable_hardened', 'powah:energy_cable_basic', 'powah:energy_cable_starter'])
    e.add('powah:energy_cell', ['powah:energy_cell_nitro', 'powah:energy_cell_spirited', 'powah:energy_cell_niotic', 'powah:energy_cell_blazing', 'powah:energy_cell_hardened', 'powah:energy_cell_basic', 'powah:energy_cell_starter'])
    e.add('powah:energy_discharger', ['powah:energy_discharger_nitro', 'powah:energy_discharger_spirited', 'powah:energy_discharger_niotic', 'powah:energy_discharger_blazing', 'powah:energy_discharger_hardened', 'powah:energy_discharger_basic', 'powah:energy_discharger_starter'])
    e.add('powah:energy_hopper', ['powah:energy_hopper_nitro', 'powah:energy_hopper_spirited', 'powah:energy_hopper_niotic', 'powah:energy_hopper_blazing', 'powah:energy_hopper_hardened', 'powah:energy_hopper_basic', 'powah:energy_hopper_starter'])
    e.add('powah:furnator', ['powah:furnator_nitro', 'powah:furnator_spirited', 'powah:furnator_niotic', 'powah:furnator_blazing', 'powah:furnator_hardened', 'powah:furnator_basic', 'powah:furnator_starter'])
    e.add('powah:magmator', ['powah:magmator_nitro', 'powah:magmator_spirited', 'powah:magmator_niotic', 'powah:magmator_blazing', 'powah:magmator_hardened', 'powah:magmator_basic', 'powah:magmator_starter'])
    e.add('powah:player_transmitter', ['powah:player_transmitter_nitro', 'powah:player_transmitter_spirited', 'powah:player_transmitter_niotic', 'powah:player_transmitter_blazing', 'powah:player_transmitter_hardened', 'powah:player_transmitter_basic', 'powah:player_transmitter_starter'])
    e.add('powah:reactor', ['powah:reactor_nitro', 'powah:reactor_spirited', 'powah:reactor_niotic', 'powah:reactor_blazing', 'powah:reactor_hardened', 'powah:reactor_basic', 'powah:reactor_starter'])
    e.add('powah:solar_panel', ['powah:solar_panel_nitro', 'powah:solar_panel_spirited', 'powah:solar_panel_niotic', 'powah:solar_panel_blazing', 'powah:solar_panel_hardened', 'powah:solar_panel_basic', 'powah:solar_panel_starter'])
    e.add('powah:thermo_generator', ['powah:thermo_generator_nitro', 'powah:thermo_generator_spirited', 'powah:thermo_generator_niotic', 'powah:thermo_generator_blazing', 'powah:thermo_generator_hardened', 'powah:thermo_generator_basic', 'powah:thermo_generator_starter'])
    e.add('ae2:inscriber_presses', 'ae2:elemental_processor_press')
    e.add('thermal:crafting/dies', 'thermal:press_rod_die')
    e.add('lychee:lightning_immune', 'powah:steel_energized')
    e.add('lychee:lightning_fire_immune', 'powah:steel_energized')
    e.add('psi:psimetal_assemblies', ['psi:cad_assembly_psimetal', 'psi:cad_assembly_ivory_psimetal', 'psi:cad_assembly_ebony_psimetal'])
    e.add('industrialforegoing:sludge_containors', ['industrialforegoing:sludge_bucket', 'industrialforegoing:sludge_bottle'])
    e.add('matc:inferium', ["matc:prudentium_crystal", "matc:tertium_crystal", "matc:imperium_crystal", "matc:supremium_crystal"])
    e.add('matc:prudentium', ["matc:tertium_crystal", "matc:imperium_crystal", "matc:supremium_crystal"])
    e.add('matc:tertium', ["matc:imperium_crystal", "matc:supremium_crystal"])
    e.add('matc:imperium', ["matc:supremium_crystal"])
    e.add('industrialforegoing:basic_laser_lens', [laserLens.black, laserLens.blue, laserLens.brown, laserLens.cyan, laserLens.gray, laserLens.green, laserLens.light_blue, laserLens.light_gray, laserLens.lime, laserLens.magenta, laserLens.orange, laserLens.pink, laserLens.purple, laserLens.red, laserLens.white, laserLens.yellow])
    e.add('iceandfire:dragonsteels', ['iceandfire:dragonsteel_fire_ingot', 'iceandfire:dragonsteel_ice_ingot', 'iceandfire:dragonsteel_lightning_ingot'])
    
    // Common Tags
    e.add('forge:raw_materials', 'ad_astra:raw_nephryx')
    e.add('forge:ingots', 'ad_astra:nephryx_ingot')
    e.add('forge:nuggets', 'ad_astra:nephryx_nugget')
    e.add('forge:dusts', 'alltheores:netherite_dust', 'ad_astra:desh_dust', 'ad_astra:ostrum_dust', 'ad_astra:calorite_dust', 'ad_astra:nephryx_dust', 'eidolon:arcane_gold_dust')
    e.add('forge:plates', 'botania:elementium_plate', 'ad_astra:nephryx_plate', 'eidolon:arcane_gold_plate')
    e.add('forge:gears', 'botania:elementium_gear', 'ad_astra:nephryx_gear', 'ad_astra:desh_gear', 'ad_astra:ostrum_gear', 'ad_astra:calorite_gear', 'eidolon:arcane_gold_gear')
    e.add('forge:rods', 'ad_astra:nephryx_rod', 'ad_astra:desh_rod', 'ad_astra:ostrum_rod', 'ad_astra:calorite_rod')

    e.add('forge:raw_materials/nephryx', 'ad_astra:raw_nephryx')
    e.add('forge:raw_materials/elementium', "mythicbotany:raw_elementium")
    e.add('forge:storage_blocks/raw_elementium', "mythicbotany:raw_elementium_block")
    e.add('forge:storage_blocks/insanium_ingot', "mysticalagradditions:insanium_ingot_block")
    e.add('forge:ingots/nephryx', 'ad_astra:nephryx_ingot')
    e.add('forge:nuggets/nephryx', 'ad_astra:nephryx_nugget')
    e.add('forge:dusts/netherite', 'alltheores:netherite_dust')
    e.add('forge:dusts/desh', 'ad_astra:desh_dust')
    e.add('forge:dusts/ostrum', 'ad_astra:ostrum_dust')
    e.add('forge:dusts/calorite', 'ad_astra:calorite_dust')
    e.add('forge:dusts/nephryx', 'ad_astra:nephryx_dust')
    e.add('forge:dusts/arcane_gold', 'eidolon:arcane_gold_dust')
    e.add('forge:plates/elementium', 'botania:elementium_plate')
    e.add('forge:plates/nephryx', 'ad_astra:nephryx_plate')
    e.add('forge:plates/arcane_gold', 'eidolon:arcane_gold_plate')
    e.add('forge:rods/nephryx', 'ad_astra:nephryx_rod')
    e.add('forge:rods/desh', 'ad_astra:desh_rod')
    e.add('forge:rods/ostrum', 'ad_astra:ostrum_rod')
    e.add('forge:rods/calorite', 'ad_astra:calorite_rod')
    e.add('forge:gears/elementium', 'botania:elementium_gear')
    e.add('forge:gears/nephryx', 'ad_astra:nephryx_gear')
    e.add('forge:gears/desh', 'ad_astra:desh_gear')
    e.add('forge:gears/ostrum', 'ad_astra:ostrum_gear')
    e.add('forge:gears/calorite', 'ad_astra:calorite_gear')
    e.add('forge:gears/arcane_gold', 'eidolon:arcane_gold_gear')

    const BlueSkiesMissingTags = ['aquite', 'charoite', 'falsite', 'ventium', 'horizonite'].forEach(mat => {
        e.add(`forge:raw_materials/${mat}`, `blue_skies:raw_${mat}`)
        e.add(`forge:storage_blocks/raw_${mat}`, `blue_skies:raw_${mat}_block`)
    })

    // Mystical Farmlands
    let cropTiers = CropRegistryInstance.getTiers()
    let tiers = []
    for (const tier of cropTiers) { tiers[tier.getValue() - 1] = tier.getFarmland() }
    for (let i = 0; i < tiers.length; i++) {
        let farmland = tiers[i]
        let farmlandNext = tiers[i + 1]
        let tier = farmland.getIdLocation().getPath().replace('_farmland', '')
        e.add(`forge:soil_tier/${tier}`, farmland.getId())

        if (farmlandNext && !farmland.equals(farmlandNext)) {
            let tierNext = farmlandNext.getIdLocation().getPath().replace('_farmland', '')
            e.add(`forge:soil_tier/${tier}`, `#forge:soil_tier/${tierNext}`)
        } else if (!farmlandNext) { break }
    }
})

ServerEvents.tags("block", e => {

    /********************DISABLE**************************/
    const DISABLED_BLOCKS = [
        'eidolon:silver_block',
        'immersiveengineering:storage_silver',
        'thermal:silver_block',
        'iceandfire:silver_block',
        'occultism:silver_block',
        'darkerdepths:silver_block',
        'immersiveengineering:storage_lead',
        'eidolon:lead_block',
        'thermal:lead_block',
        'mekanism:block_lead',
        'mekanism:block_charcoal',
        'quark:charcoal_block',
        'thermal:tin_block',
        'mekanism:block_tin',
        'immersiveengineering:storage_nickel',
        'thermal:nickel_block',
        'thermal:bronze_block',
        'mekanism:block_bronze',
        'immersiveengineering:storage_steel',
        'mekanism:block_steel',
        'ad_astra:steel_block',
        'immersiveengineering:storage_constantan',
        'thermal:constantan_block',
        'immersiveengineering:storage_electrum',
        'thermal:electrum_block',
        'immersiveengineering:storage_uranium',
        'mekanism:block_uranium',
        'create:zinc_block',
        'mekanism:block_osmium',
        'immersiveengineering:storage_aluminum',
        'create:brass_block',
        'thermal:coal_coke_block',
        'thermal:invar_block',
        'thermal:enderium_block',
        'thermal:signalum_block',
        'thermal:lumium_block',
        'iceandfire:sapphire_block',
        'quark:gunpowder_sack',
        'thermal:carrot_block',
        'quark:carrot_crate',
        'mekanism:uranium_ore',
        'mekanism:deepslate_uranium_ore',
        'chemlib:iridium_metal_block',
        'chemlib:zinc_metal_block',
        'chemlib:aluminum_metal_block',
        'chemlib:nickel_metal_block',
        'chemlib:silver_metal_block',
        'chemlib:tin_metal_block',
        'chemlib:osmium_metal_block',
        'chemlib:platinum_metal_block',
        'chemlib:lead_metal_block',
        'chemlib:uranium_metal_block',
        'ftbic:iridium_block',
        'ftbic:tin_block',
        'ftbic:lead_block',
        'ftbic:uranium_block',
        'ftbic:aluminum_block',
        'ftbic:enderium_block',
        'ftbic:bronze_block',
        'ftbic:iridium_ore',
        'ftbic:deepslate_iridium_ore',
        'ftbic:tin_ore',
        'ftbic:deepslate_tin_ore',
        'ftbic:lead_ore',
        'ftbic:deepslate_lead_ore',
        'ftbic:uranium_ore',
        'ftbic:deepslate_uranium_ore',
        'ftbic:aluminum_ore',
        'ftbic:deepslate_aluminum_ore'
    ].forEach(block => {e.removeAllTagsFrom(block)})
    
})

ServerEvents.tags("fluid", e => {

    /**********************ADD****************************/
    e.add('ae2:resonant_fluix', 'ae2:resonant_fluix')
})