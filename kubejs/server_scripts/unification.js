//priority: 10000
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
//MAIN FILE OF UNIFICATION, PLEASE DON'T TOUCH
/*********************************************/

ServerEvents.recipes(e => {

    function replaceIO(input, output) {
        e.replaceInput({}, input, output)
        e.replaceOutput({}, input, output)
    }

    //Ores
    ['immersiveengineering:ore_aluminum', 'ftbic:aluminum_ore'].forEach(I => {replaceIO(I, 'alltheores:aluminum_ore')});
    ['ftbic:iridium_ore'].forEach(I => {replaceIO(I, 'alltheores:iridium_ore')});
    ['eidolon:lead_ore', 'immersiveengineering:ore_lead', 'thermal:lead_ore', 'mekanism:lead_ore', 'ftbic:lead_ore'].forEach(I => {replaceIO(I, 'alltheores:lead_ore')});
    ['immersiveengineering:ore_nickel', 'thermal:nickel_ore'].forEach(I => {replaceIO(I, 'alltheores:nickel_ore')});
    ['mekanism:osmium_ore'].forEach(I => {replaceIO(I, 'alltheores:osmium_ore')});
    ['iceandfire:sapphire_ore'].forEach(I => {replaceIO(I, 'alltheores:sapphire_ore')});
    ['eidolon:silver_ore', 'immersiveengineering:ore_silver', 'darkerdepths:limestone_silver_ore', 'darkerdepths:aridrock_silver_ore', 'darkerdepths:silver_ore', 'iceandfire:silver_ore', 'occultism:silver_ore', 'thermal:silver_ore'].forEach(I => {replaceIO(I, 'alltheores:silver_ore')});
    ['thermal:tin_ore', 'mekanism:tin_ore', 'ftbic:tin_ore'].forEach(I => {replaceIO(I, 'alltheores:tin_ore')});
    ['immersiveengineering:ore_uranium', 'mekanism:uranium_ore', 'ftbic:uranium_ore'].forEach(I => {replaceIO(I, 'alltheores:uranium_ore')});
    ['create:zinc_ore'].forEach(I => {replaceIO(I, 'alltheores:zinc_ore')});
    
    //Deepslate Ores
    ['immersiveengineering:deepslate_ore_aluminum', 'ftbic:deepslate_aluminum_ore'].forEach(I => {replaceIO(I, 'alltheores:deepslate_aluminum_ore')});
    ['ftbic:deepslate_iridium_ore'].forEach(I => {replaceIO(I, 'alltheores:deepslate_iridium_ore')});
    ['eidolon:deep_lead_ore', 'immersiveengineering:deepslate_ore_lead', 'thermal:deepslate_lead_ore', 'mekanism:deepslate_lead_ore', 'ftbic:deepslate_lead_ore'].forEach(I => {replaceIO(I, 'alltheores:deepslate_lead_ore')});
    ['immersiveengineering:deepslate_ore_nickel', 'thermal:deepslate_nickel_ore'].forEach(I => {replaceIO(I, 'alltheores:deepslate_nickel_ore')});
    ['mekanism:deepslate_osmium_ore'].forEach(I => {replaceIO(I, 'alltheores:deepslate_osmium_ore')});
    ['eidolon:deep_silver_ore', 'immersiveengineering:deepslate_ore_silver', 'iceandfire:deepslate_silver_ore', 'occultism:silver_ore_deepslate', 'thermal:deepslate_silver_ore'].forEach(I => {replaceIO(I, 'alltheores:deepslate_silver_ore')});
    ['thermal:deepslate_tin_ore', 'mekanism:deepslate_tin_ore', 'ftbic:deepslate_tin_ore'].forEach(I => {replaceIO(I, 'alltheores:deepslate_tin_ore')});
    ['immersiveengineering:deepslate_ore_uranium', 'mekanism:deepslate_uranium_ore', 'ftbic:deepslate_uranium_ore'].forEach(I => {replaceIO(I, 'alltheores:deepslate_uranium_ore')});
    ['create:deepslate_zinc_ore'].forEach(I => {replaceIO(I, 'alltheores:deepslate_zinc_ore')});

    //Raw Materials
    ['immersiveengineering:raw_aluminum', 'ftbic:aluminum_chunk'].forEach(I => {replaceIO(I, 'alltheores:raw_aluminum')});
    ['ftbic:iridium_chunk'].forEach(I => {replaceIO(I, 'alltheores:raw_iridium')});
    ['eidolon:raw_lead', 'immersiveengineering:raw_lead', 'thermal:raw_lead', 'mekanism:raw_lead', 'ftbic:lead_chunk'].forEach(I => {replaceIO(I, 'alltheores:raw_lead')});
    ['immersiveengineering:raw_nickel', 'alltheores:raw_nickel', 'thermal:raw_nickel'].forEach(I => {replaceIO(I, 'alltheores:raw_nickel')});
    ['mekanism:raw_osmium'].forEach(I => {replaceIO(I, 'alltheores:raw_osmium')});
    ['eidolon:raw_silver', 'immersiveengineering:raw_silver', 'darkerdepths:raw_silver', 'occultism:raw_silver', 'thermal:raw_silver'].forEach(I => {replaceIO(I, 'alltheores:raw_silver')});
    ['thermal:raw_tin', 'mekanism:raw_tin', 'ftbic:tin_chunk'].forEach(I => {replaceIO(I, 'alltheores:raw_tin')});
    ['immersiveengineering:raw_uranium', 'mekanism:raw_uranium', 'ftbic:uranium_chunk'].forEach(I => {replaceIO(I, 'alltheores:raw_uranium')});
    ['create:raw_zinc'].forEach(I => {replaceIO(I, 'alltheores:raw_zinc')});

    //Raw Storage Blocks
    ['immersiveengineering:raw_block_aluminum'].forEach(I => {replaceIO(I, 'alltheores:raw_aluminum_block')});
    ['eidolon:raw_lead_block', 'immersiveengineering:raw_block_lead', 'thermal:raw_lead_block', 'mekanism:block_raw_lead'].forEach(I => {replaceIO(I, 'alltheores:raw_lead_block')});
    ['immersiveengineering:raw_block_nickel', 'thermal:raw_nickel_block'].forEach(I => {replaceIO(I, 'alltheores:raw_nickel_block')});
    ['mekanism:block_raw_osmium'].forEach(I => {replaceIO(I, 'alltheores:raw_osmium_block')});
    ['eidolon:raw_silver_block', 'immersiveengineering:raw_block_silver', 'darkerdepths:raw_silver_block', 'thermal:raw_silver_block'].forEach(I => {replaceIO(I, 'alltheores:raw_silver_block')});
    ['thermal:raw_tin_block', 'mekanism:block_raw_tin'].forEach(I => {replaceIO(I, 'alltheores:raw_tin_block')});
    ['immersiveengineering:raw_block_uranium', 'mekanism:block_raw_uranium'].forEach(I => {replaceIO(I, 'alltheores:raw_uranium_block')});
    ['create:raw_zinc_block'].forEach(I => {replaceIO(I, 'alltheores:raw_zinc_block')});

    //Ingots
    ['immersiveengineering:ingot_aluminum', 'chemlib:aluminum_ingot', 'ftbic:aluminum_ingot'].forEach(I => {replaceIO(I, 'alltheores:aluminum_ingot')});
    ['create:brass_ingot'].forEach(I => {replaceIO(I, 'alltheores:brass_ingot')});
    ['thermal:bronze_ingot', 'mekanism:ingot_bronze', 'ftbic:bronze_ingot'].forEach(I => {replaceIO(I, 'alltheores:bronze_ingot')});
    ['immersiveengineering:ingot_constantan', 'thermal:constantan_ingot'].forEach(I => {replaceIO(I, 'alltheores:constantan_ingot')});
    ['immersiveengineering:ingot_electrum', 'createaddition:electrum_ingot', 'thermal:electrum_ingot'].forEach(I => {replaceIO(I, 'alltheores:electrum_ingot')});
    ['thermal:enderium_ingot', 'ftbic:enderium_ingot'].forEach(I => {replaceIO(I, 'alltheores:enderium_ingot')});
    ['thermal:invar_ingot'].forEach(I => {replaceIO(I, 'alltheores:invar_ingot')});
    ['chemlib:iridium_ingot', 'ftbic:iridium_ingot'].forEach(I => {replaceIO(I, 'alltheores:iridium_ingot')});
    ['eidolon:lead_ingot', 'immersiveengineering:ingot_lead', 'thermal:lead_ingot', 'mekanism:ingot_lead', 'chemlib:lead_ingot', 'ftbic:lead_ingot'].forEach(I => {replaceIO(I, 'alltheores:lead_ingot')});
    ['thermal:lumium_ingot'].forEach(I => {replaceIO(I, 'alltheores:lumium_ingot')});
    ['immersiveengineering:ingot_nickel', 'thermal:nickel_ingot', 'chemlib:nickel_ingot'].forEach(I => {replaceIO(I, 'alltheores:nickel_ingot')});
    ['mekanism:ingot_osmium', 'chemlib:osmium_ingot'].forEach(I => {replaceIO(I, 'alltheores:osmium_ingot')});
    ['chemlib:platinum_ingot'].forEach(I => {replaceIO(I, 'alltheores:platinum_ingot')});
    ['thermal:signalum_ingot'].forEach(I => {replaceIO(I, 'alltheores:signalum_ingot')});
    ['eidolon:silver_ingot', 'immersiveengineering:ingot_silver', 'darkerdepths:silver_ingot', 'iceandfire:silver_ingot', 'occultism:silver_ingot', 'thermal:silver_ingot', 'chemlib:silver_ingot'].forEach(I => {replaceIO(I, 'alltheores:silver_ingot')});
    ['immersiveengineering:ingot_steel', 'ad_astra:steel_ingot', 'mekanism:ingot_steel'].forEach(I => {replaceIO(I, 'alltheores:steel_ingot')});
    ['thermal:tin_ingot', 'mekanism:ingot_tin', 'chemlib:tin_ingot', 'ftbic:tin_ingot'].forEach(I => {replaceIO(I, 'alltheores:tin_ingot')});
    ['immersiveengineering:ingot_uranium', 'mekanism:ingot_uranium', 'chemlib:uranium_ingot', 'ftbic:uranium_ingot'].forEach(I => {replaceIO(I, 'alltheores:uranium_ingot')});
    ['create:zinc_ingot', 'chemlib:zinc_ingot'].forEach(I => {replaceIO(I, 'alltheores:zinc_ingot')});
        
    //Plates
    ['immersiveengineering:plate_aluminum', 'ftbic:aluminum_plate'].forEach(I => {replaceIO(I, 'alltheores:aluminum_plate')});
    ['create:brass_sheet'].forEach(I => {replaceIO(I, 'alltheores:brass_plate')});
    ['thermal:bronze_plate', 'ftbic:bronze_plate'].forEach(I => {replaceIO(I, 'alltheores:bronze_plate')});
    ['immersiveengineering:plate_constantan', 'thermal:constantan_plate'].forEach(I => {replaceIO(I, 'alltheores:constantan_plate')});
    ['immersiveengineering:plate_copper', 'create:copper_sheet', 'thermal:copper_plate', 'ftbic:copper_plate'].forEach(I => {replaceIO(I, 'alltheores:copper_plate')});
    ['immersiveengineering:plate_electrum', 'createaddition:electrum_sheet', 'thermal:electrum_plate'].forEach(I => {replaceIO(I, 'alltheores:electrum_plate')});
    ['thermal:enderium_plate', 'ftbic:enderium_plate'].forEach(I => {replaceIO(I, 'alltheores:enderium_plate')});
    ['create:golden_sheet', 'immersiveengineering:plate_gold', 'thermal:gold_plate', 'ftbic:gold_plate'].forEach(I => {replaceIO(I, 'alltheores:gold_plate')});
    ['thermal:invar_plate'].forEach(I => {replaceIO(I, 'alltheores:invar_plate')});
    ['ftbic:iridium_plate'].forEach(I => {replaceIO(I, 'alltheores:iridium_plate')});
    ['create:iron_sheet', 'immersiveengineering:plate_iron', 'thermal:iron_plate', 'ad_astra:iron_plate', 'ftbic:iron_plate'].forEach(I => {replaceIO(I, 'alltheores:iron_plate')});
    ['immersiveengineering:plate_lead', 'thermal:lead_plate', 'ftbic:lead_plate'].forEach(I => {replaceIO(I, 'alltheores:lead_plate')});
    ['thermal:lumium_plate'].forEach(I => {replaceIO(I, 'alltheores:lumium_plate')});
    ['createdeco:netherite_sheet'].forEach(I => {replaceIO(I, 'thermal:netherite_plate')});
    ['immersiveengineering:plate_nickel', 'thermal:nickel_plate'].forEach(I => {replaceIO(I, 'alltheores:nickel_plate')});
    ['thermal:signalum_plate'].forEach(I => {replaceIO(I, 'alltheores:signalum_plate')});
    ['immersiveengineering:plate_silver', 'thermal:silver_plate'].forEach(I => {replaceIO(I, 'alltheores:silver_plate')});
    ['immersiveengineering:plate_steel', 'ad_astra:steel_plate'].forEach(I => {replaceIO(I, 'alltheores:steel_plate')});
    ['thermal:tin_plate', 'ftbic:tin_plate'].forEach(I => {replaceIO(I, 'alltheores:tin_plate')});
    ['immersiveengineering:plate_uranium', 'ftbic:uranium_plate'].forEach(I => {replaceIO(I, 'alltheores:uranium_plate')});
    ['createdeco:zinc_sheet', 'createaddition:zinc_sheet'].forEach(I => {replaceIO(I, 'alltheores:zinc_plate')});
    
    //Gears
    ['ftbic:aluminum_gear'].forEach(I => {replaceIO(I, 'alltheores:aluminum_gear')});
    ['thermal:bronze_gear', 'ftbic:bronze_gear'].forEach(I => {replaceIO(I, 'alltheores:bronze_gear')});
    ['thermal:constantan_gear'].forEach(I => {replaceIO(I, 'alltheores:constantan_gear')});
    ['thermal:copper_gear', 'ftbic:copper_gear'].forEach(I => {replaceIO(I, 'alltheores:copper_gear')});
    ['industrialforegoing:diamond_gear', 'thermal:diamond_gear'].forEach(I => {replaceIO(I, 'alltheores:diamond_gear')});
    ['thermal:electrum_gear'].forEach(I => {replaceIO(I, 'alltheores:electrum_gear')});
    ['thermal:enderium_gear', 'ftbic:enderium_gear'].forEach(I => {replaceIO(I, 'alltheores:enderium_gear')});
    ['industrialforegoing:gold_gear', 'thermal:gold_gear', 'ftbic:gold_gear'].forEach(I => {replaceIO(I, 'alltheores:gold_gear')});
    ['thermal:invar_gear'].forEach(I => {replaceIO(I, 'alltheores:invar_gear')});
    ['ftbic:iridium_gear'].forEach(I => {replaceIO(I, 'alltheores:iridium_gear')});
    ['industrialforegoing:iron_gear', 'thermal:iron_gear', 'ftbic:iron_gear'].forEach(I => {replaceIO(I, 'alltheores:iron_gear')});
    ['thermal:lead_gear', 'ftbic:lead_gear'].forEach(I => {replaceIO(I, 'alltheores:lead_gear')});
    ['thermal:lumium_gear'].forEach(I => {replaceIO(I, 'alltheores:lumium_gear')});
    ['thermal:nickel_gear'].forEach(I => {replaceIO(I, 'alltheores:nickel_gear')});
    ['thermal:signalum_gear'].forEach(I => {replaceIO(I, 'alltheores:signalum_gear')});
    ['thermal:silver_gear'].forEach(I => {replaceIO(I, 'alltheores:silver_gear')});
    ['thermal:tin_gear', 'ftbic:tin_gear'].forEach(I => {replaceIO(I, 'alltheores:tin_gear')});
    ['ftbic:uranium_gear'].forEach(I => {replaceIO(I, 'alltheores:uranium_gear')});
    
    //Rods
    ['immersiveengineering:stick_aluminum', 'ftbic:aluminum_rod'].forEach(I => {replaceIO(I, 'alltheores:aluminum_rod')});
    ['createaddition:brass_rod'].forEach(I => {replaceIO(I, 'alltheores:brass_rod')});
    ['ftbic:bronze_rod'].forEach(I => {replaceIO(I, 'alltheores:bronze_rod')});
    ['createaddition:copper_rod', 'ftbic:copper_rod'].forEach(I => {replaceIO(I, 'alltheores:copper_rod')});
    ['createaddition:electrum_rod'].forEach(I => {replaceIO(I, 'alltheores:electrum_rod')});
    ['ftbic:enderium_rod'].forEach(I => {replaceIO(I, 'alltheores:enderium_rod')});
    ['createaddition:gold_rod', 'ftbic:gold_rod'].forEach(I => {replaceIO(I, 'alltheores:gold_rod')});
    ['ftbic:iridium_rod'].forEach(I => {replaceIO(I, 'alltheores:iridium_rod')});
    ['createaddition:iron_rod', 'immersiveengineering:stick_iron', 'ad_astra:iron_rod', 'ftbic:iron_rod'].forEach(I => {replaceIO(I, 'alltheores:iron_rod')});
    ['ftbic:lead_rod'].forEach(I => {replaceIO(I, 'alltheores:lead_rod')});
    ['immersiveengineering:stick_steel'].forEach(I => {replaceIO(I, 'alltheores:steel_rod')});
    ['ftbic:tin_rod'].forEach(I => {replaceIO(I, 'alltheores:tin_rod')});
    ['ftbic:uranium_rod'].forEach(I => {replaceIO(I, 'alltheores:uranium_rod')});
    
    //Nuggets
    ['immersiveengineering:nugget_aluminum', 'chemlib:aluminum_nugget', 'ftbic:aluminum_nugget'].forEach(I => {replaceIO(I, 'alltheores:aluminum_nugget')});
    ['create:brass_nugget'].forEach(I => {replaceIO(I, 'alltheores:brass_nugget')});
    ['thermal:bronze_nugget', 'mekanism:nugget_bronze', 'ftbic:bronze_nugget'].forEach(I => {replaceIO(I, 'alltheores:bronze_nugget')});
    ['immersiveengineering:nugget_constantan', 'thermal:constantan_nugget'].forEach(I => {replaceIO(I, 'alltheores:constantan_nugget')});
    ['create:copper_nugget', 'immersiveengineering:nugget_copper', 'iceandfire:copper_nugget', 'thermal:copper_nugget', 'skilltree:copper_nugget', 'ftbic:copper_nugget'].forEach(I => {replaceIO(I, 'alltheores:copper_nugget')});
    ['createaddition:electrum_nugget', 'immersiveengineering:nugget_electrum', 'thermal:electrum_nugget'].forEach(I => {replaceIO(I, 'alltheores:electrum_nugget')});
    ['thermal:enderium_nugget', 'ftbic:enderium_nugget'].forEach(I => {replaceIO(I, 'alltheores:enderium_nugget')});
    ['thermal:invar_nugget'].forEach(I => {replaceIO(I, 'alltheores:invar_nugget')});
    ['chemlib:iridium_nugget', 'ftbic:iridium_nugget'].forEach(I => {replaceIO(I, 'alltheores:iridium_nugget')});
    ['eidolon:lead_nugget', 'immersiveengineering:nugget_lead', 'thermal:lead_nugget', 'mekanism:nugget_lead', 'chemlib:lead_nugget', 'ftbic:lead_nugget'].forEach(I => {replaceIO(I, 'alltheores:lead_nugget')});
    ['thermal:lumium_nugget'].forEach(I => {replaceIO(I, 'alltheores:lumium_nugget')});
    ['thermal:netherite_nugget'].forEach(I => {replaceIO(I, 'createdeco:netherite_nugget')});
    ['immersiveengineering:nugget_nickel', 'thermal:nickel_nugget', 'chemlib:nickel_nugget'].forEach(I => {replaceIO(I, 'alltheores:nickel_nugget')});
    ['mekanism:nugget_osmium', 'chemlib:osmium_nugget'].forEach(I => {replaceIO(I, 'alltheores:osmium_nugget')});
    ['chemlib:platinum_nugget'].forEach(I => {replaceIO(I, 'alltheores:platinum_nugget')});
    ['thermal:signalum_nugget'].forEach(I => {replaceIO(I, 'alltheores:signalum_nugget')});
    ['eidolon:silver_nugget', 'immersiveengineering:nugget_silver', 'iceandfire:silver_nugget', 'occultism:silver_nugget', 'thermal:silver_nugget', 'chemlib:silver_nugget'].forEach(I => {replaceIO(I, 'alltheores:silver_nugget')});
    ['immersiveengineering:nugget_steel', 'ad_astra:steel_nugget', 'mekanism:nugget_steel'].forEach(I => {replaceIO(I, 'alltheores:steel_nugget')});
    ['thermal:tin_nugget', 'mekanism:nugget_tin', 'chemlib:tin_nugget', 'ftbic:tin_nugget'].forEach(I => {replaceIO(I, 'alltheores:tin_nugget')});
    ['immersiveengineering:nugget_uranium', 'mekanism:nugget_uranium', 'chemlib:uranium_nugget', 'ftbic:uranium_nugget'].forEach(I => {replaceIO(I, 'alltheores:uranium_nugget')});
    ['create:zinc_nugget', 'chemlib:zinc_nugget'].forEach(I => {replaceIO(I, 'alltheores:zinc_nugget')});

    //Dusts
    ['immersiveengineering:dust_aluminum', 'chemlib:aluminum_dust', 'ftbic:aluminum_dust'].forEach(I => {replaceIO(I, 'alltheores:aluminum_dust')});
    ['thermal:bronze_dust', 'mekanism:dust_bronze', 'ftbic:bronze_dust'].forEach(I => {replaceIO(I, 'alltheores:bronze_dust')});
    ['ftbic:charcoal_dust'].forEach(I => {replaceIO(I, 'mekanism:dust_charcoal')});
    ['ftbic:coal_dust'].forEach(I => {replaceIO(I, 'mekanism:dust_coal')});
    ['immersiveengineering:dust_constantan', 'thermal:constantan_dust'].forEach(I => {replaceIO(I, 'alltheores:constantan_dust')});
    ['immersiveengineering:dust_copper', 'occultism:copper_dust', 'thermal:copper_dust', 'mekanism:dust_copper', 'chemlib:copper_dust', 'ftbic:copper_dust'].forEach(I => {replaceIO(I, 'alltheores:copper_dust')});
    ['createaddition:diamond_grit', 'thermal:diamond_dust', 'mekanism:dust_diamond', 'ftbic:diamond_dust'].forEach(I => {replaceIO(I, 'alltheores:diamond_dust')});
    ['immersiveengineering:dust_electrum', 'thermal:electrum_dust'].forEach(I => {replaceIO(I, 'alltheores:electrum_dust')});
    ['mekanism:dust_emerald'].forEach(I => {replaceIO(I, 'thermal:emerald_dust')});
    ['ae2:ender_dust', 'ftbic:ender_dust'].forEach(I => {replaceIO(I, 'thermal:ender_pearl_dust')});
    ['thermal:enderium_dust', 'ftbic:enderium_dust'].forEach(I => {replaceIO(I, 'alltheores:enderium_dust')});
    ['immersiveengineering:dust_gold', 'occultism:gold_dust', 'thermal:gold_dust', 'mekanism:dust_gold', 'chemlib:gold_dust', 'ftbic:gold_dust'].forEach(I => {replaceIO(I, 'alltheores:gold_dust')});
    ['thermal:invar_dust'].forEach(I => {replaceIO(I, 'alltheores:invar_dust')});
    ['chemlib:iridium_dust', 'ftbic:iridium_dust'].forEach(I => {replaceIO(I, 'alltheores:iridium_dust')});
    ['immersiveengineering:dust_iron', 'occultism:iron_dust', 'thermal:iron_dust', 'mekanism:dust_iron', 'chemlib:iron_dust', 'ftbic:iron_dust'].forEach(I => {replaceIO(I, 'alltheores:iron_dust')});
    ['mekanism:dust_lapis_lazuli'].forEach(I => {replaceIO(I, 'thermal:lapis_dust')});
    ['immersiveengineering:dust_lead', 'thermal:lead_dust', 'mekanism:dust_lead', 'chemlib:lead_dust', 'ftbic:lead_dust'].forEach(I => {replaceIO(I, 'alltheores:lead_dust')});
    ['chemlib:lithium_dust'].forEach(I => {replaceIO(I, 'mekanism:dust_lithium')});
    ['thermal:lumium_dust'].forEach(I => {replaceIO(I, 'alltheores:lumium_dust')});
    ['thermal:netherite_dust', 'mekanism:dust_netherite'].forEach(I => {replaceIO(I, 'alltheores:netherite_dust')});
    ['immersiveengineering:dust_nickel', 'thermal:nickel_dust', 'chemlib:nickel_dust'].forEach(I => {replaceIO(I, 'alltheores:nickel_dust')});
    ['occultism:obsidian_dust', 'mekanism:dust_obsidian', 'ftbic:obsidian_dust'].forEach(I => {replaceIO(I, 'create:powdered_obsidian')});
    ['mekanism:dust_osmium', 'chemlib:osmium_dust'].forEach(I => {replaceIO(I, 'alltheores:osmium_dust')});
    ['chemlib:platinum_dust'].forEach(I => {replaceIO(I, 'alltheores:platinum_dust')});
    ['mekanism:dust_quartz'].forEach(I => {replaceIO(I, 'thermal:quartz_dust')});
    ['thermal:signalum_dust'].forEach(I => {replaceIO(I, 'alltheores:signalum_dust')});
    ['immersiveengineering:dust_silver', 'occultism:silver_dust', 'thermal:silver_dust', 'chemlib:silver_dust'].forEach(I => {replaceIO(I, 'alltheores:silver_dust')});
    ['immersiveengineering:dust_steel', 'mekanism:dust_steel'].forEach(I => {replaceIO(I, 'alltheores:steel_dust')});
    ['immersiveengineering:dust_sulfur', 'eidolon:sulfur', 'mekanism:dust_sulfur', 'chemlib:sulfur_dust'].forEach(I => {replaceIO(I, 'thermal:sulfur_dust')});
    ['thermal:tin_dust', 'mekanism:dust_tin', 'chemlib:tin_dust', 'ftbic:tin_dust'].forEach(I => {replaceIO(I, 'alltheores:tin_dust')});
    ['immersiveengineering:dust_uranium', 'mekanism:dust_uranium', 'chemlib:uranium_dust', 'ftbic:uranium_dust'].forEach(I => {replaceIO(I, 'alltheores:uranium_dust')});
    ['immersiveengineering:dust_wood', 'mekanism:sawdust'].forEach(I => {replaceIO(I, 'thermal:sawdust')});
    ['chemlib:zinc_dust'].forEach(I => {replaceIO(I, 'alltheores:zinc_dust')});
    
    //Blocks
    ['immersiveengineering:storage_aluminum', 'chemlib:aluminum_metal_block', 'ftbic:aluminum_block'].forEach(I => {replaceIO(I, 'alltheores:aluminum_block')});
    ['create:brass_block'].forEach(I => {replaceIO(I, 'alltheores:brass_block')});
    ['thermal:bronze_block', 'mekanism:block_bronze', 'ftbic:bronze_block'].forEach(I => {replaceIO(I, 'alltheores:bronze_block')});
    ['quark:charcoal_block', 'mekanism:block_charcoal'].forEach(I => {replaceIO(I, 'thermal:charcoal_block')});
    ['thermal:coal_coke_block'].forEach(I => {replaceIO(I, 'immersiveengineering:coke')});
    ['immersiveengineering:storage_constantan', 'thermal:constantan_block'].forEach(I => {replaceIO(I, 'alltheores:constantan_block')});
    ['immersiveengineering:storage_electrum', 'thermal:electrum_block'].forEach(I => {replaceIO(I, 'alltheores:electrum_block')});
    ['thermal:enderium_block', 'ftbic:enderium_block'].forEach(I => {replaceIO(I, 'alltheores:enderium_block')});
    ['thermal:invar_block'].forEach(I => {replaceIO(I, 'alltheores:invar_block')});
    ['chemlib:iridium_metal_block', 'ftbic:iridium_block'].forEach(I => {replaceIO(I, 'alltheores:iridium_block')});
    ['immersiveengineering:storage_lead', 'eidolon:lead_block', 'thermal:lead_block', 'mekanism:block_lead', 'chemlib:lead_metal_block', 'ftbic:lead_block'].forEach(I => {replaceIO(I, 'alltheores:lead_block')});
    ['thermal:lumium_block'].forEach(I => {replaceIO(I, 'alltheores:lumium_block')});
    ['immersiveengineering:storage_nickel', 'thermal:nickel_block', 'chemlib:nickel_metal_block'].forEach(I => {replaceIO(I, 'alltheores:nickel_block')});
    ['mekanism:block_osmium', 'chemlib:osmium_metal_block'].forEach(I => {replaceIO(I, 'alltheores:osmium_block')});
    ['chemlib:platinum_metal_block'].forEach(I => {replaceIO(I, 'alltheores:platinum_block')});
    ['iceandfire:sapphire_block'].forEach(I => {replaceIO(I, 'alltheores:sapphire_block')});
    ['thermal:signalum_block'].forEach(I => {replaceIO(I, 'alltheores:signalum_block')});
    ['immersiveengineering:storage_silver', 'eidolon:silver_block', 'darkerdepths:silver_block', 'iceandfire:silver_block', 'occultism:silver_block', 'thermal:silver_block', 'chemlib:silver_metal_block'].forEach(I => {replaceIO(I, 'alltheores:silver_block')});
    ['immersiveengineering:storage_steel', 'ad_astra:steel_block', 'mekanism:block_steel'].forEach(I => {replaceIO(I, 'alltheores:steel_block')});
    ['thermal:tin_block', 'mekanism:block_tin', 'chemlib:tin_metal_block', 'ftbic:tin_block'].forEach(I => {replaceIO(I, 'alltheores:tin_block')});
    ['immersiveengineering:storage_uranium', 'mekanism:block_uranium', 'chemlib:uranium_metal_block', 'ftbic:uranium_block'].forEach(I => {replaceIO(I, 'alltheores:uranium_block')});
    ['create:zinc_block', 'chemlib:zinc_metal_block'].forEach(I => {replaceIO(I, 'alltheores:zinc_block')});

    //Wires
    ['ftbic:aluminum_wire'].forEach(I => {replaceIO(I, 'immersiveengineering:wire_aluminum')});
    ['createaddition:copper_wire', 'ftbic:copper_wire'].forEach(I => {replaceIO(I, 'immersiveengineering:wire_copper')});
    ['createaddition:electrum_wire'].forEach(I => {replaceIO(I, 'immersiveengineering:wire_electrum')});
    ['ftbic:gold_wire'].forEach(I => {replaceIO(I, 'createaddition:gold_wire')});
    
    //Gems
    ['iceandfire:sapphire_gem', 'thermal:sapphire'].forEach(I => {replaceIO(I, 'alltheores:sapphire')});
    ['thermal:ruby'].forEach(I => {replaceIO(I, 'alltheores:ruby')});
    
    //Others
    ['sushigocrafting:rice'].forEach(I => {replaceIO(I, 'farmersdelight:rice')});
    ['bhc:wither_bone'].forEach(I => {replaceIO(I, 'iceandfire:witherbone')});
    ['industrialforegoing:plastic'].forEach(I => {replaceIO(I, 'pneumaticcraft:plastic')});
    ['thermal:coal_coke'].forEach(I => {replaceIO(I, 'immersiveengineering:coal_coke')});
    ['immersivepetroleum:bitumen'].forEach(I => {replaceIO(I, 'thermal:bitumen')});
    ['immersiveengineering:slag'].forEach(I => {replaceIO(I, 'thermal:slag')});
    ['pneumaticcraft:wheat_flour'].forEach(I => {replaceIO(I, 'create:wheat_flour')});
    ['create:dough'].forEach(I => {replaceIO(I, 'farmersdelight:wheat_dough')});
    ['quark:carrot_crate', 'thermal:carrot_block'].forEach(I => {replaceIO(I, 'farmersdelight:carrot_crate')});
    ['quark:gunpowder_sack'].forEach(I => {replaceIO(I, 'thermal:gunpowder_block')});
    ['myrtrees:latex'].forEach(I => {replaceIO(I, 'thermal:rubber')});
    ['ftbic:rubber'].forEach(I => {replaceIO(I, 'thermal:cured_rubber')});
    ['ftbic:silicon'].forEach(I => {replaceIO(I, 'ae2:silicon')});

    //Remove CRAFTING Repetitive Recipes
    e.remove({ output: '#forge:storage_blocks/brass', type: 'minecraft:crafting_shaped', mod: "create" })
    e.remove({ output: '#forge:nuggets/brass', type: 'minecraft:crafting_shapeless', mod: "create" })
    e.remove({ output: '#forge:nuggets/zinc', type: 'minecraft:crafting_shapeless', mod: "create" })
    e.remove({ output: '#forge:nuggets/copper', type: 'minecraft:crafting_shapeless', mod: "create" })
    e.remove({ output: '#forge:storage_blocks/zinc', type: 'minecraft:crafting_shaped', mod: "create" })
    e.remove({ output: '#forge:gears', type: 'minecraft:crafting_shaped', mod: "thermal" })
    e.remove({ output: 'alltheores:electrum_dust', type: 'minecraft:crafting_shapeless', mod: "immersiveengineering" })
    e.remove({ output: 'alltheores:constantan_dust', type: 'minecraft:crafting_shapeless', mod: "immersiveengineering" })
    e.remove({ input: '#forge:storage_blocks/zinc', type: 'minecraft:crafting_shapeless', mod: "create" })
    e.remove({ id: "minecraft:copper_ingot"})
    e.remove({ id: 'create:crafting/materials/brass_ingot_from_compacting'})
    e.remove({ id: 'create:crafting/materials/zinc_ingot_from_compacting'})
    e.remove({ id: 'create:crafting/materials/copper_ingot'})
    e.remove({ id: 'create:crafting/materials/raw_zinc'})
    e.remove({ id: 'create:crafting/materials/raw_zinc_block'})
    e.remove({ id: 'createaddition:crafting/electrum_nugget'})
    e.remove({ id: 'createaddition:crafting/electrum_ingot'})
    e.remove({ id: 'eidolon:decompress_lead_ingot'})
    e.remove({ id: 'eidolon:decompress_silver_ingot'}) 
    e.remove({ id: 'eidolon:decompress_raw_lead_block'})
    e.remove({ id: 'eidolon:decompress_raw_silver_block'})
    e.remove({ id: 'eidolon:raw_lead_block'})
    e.remove({ id: 'eidolon:raw_silver_block'})
    e.remove({ id: 'eidolon:lead_ingot'})
    e.remove({ id: 'eidolon:silver_ingot'})
    e.remove({ id: 'darkerdepths:raw_silver'})
    e.remove({ id: 'darkerdepths:silver_ingot'})
    e.remove({ id: 'darkerdepths:silver_block'})
    e.remove({ id: 'iceandfire:silver_block_to_silver_ingot'})
    e.remove({ id: 'iceandfire:silver_ingot_to_silver_block'})
    e.remove({ id: 'iceandfire:silver_ingot_to_silver_nugget'})
    e.remove({ id: 'iceandfire:silver_nugget_to_silver_ingot'})
    e.remove({ id: 'iceandfire:copper_nuggets_to_ingot'})
    e.remove({ id: 'iceandfire:copper_ingot_to_nuggets'})
    e.remove({ id: 'iceandfire:sapphire_gem_to_sapphire_block'})
    e.remove({ id: 'iceandfire:sapphire_block_to_sapphire_gem'})
    e.remove({ id: 'occultism:crafting/silver_nugget'})
    e.remove({ id: 'occultism:crafting/silver_block'})
    e.remove({ id: 'occultism:crafting/silver_ingot_from_nuggets'})
    e.remove({ id: 'occultism:crafting/silver_ingot_from_block'})
    e.remove({ id: 'industrialforegoing:iron_gear'})
    e.remove({ id: 'industrialforegoing:gold_gear'})
    e.remove({ id: 'industrialforegoing:diamond_gear'})
    e.remove({ id: 'skilltree:copper_nugget'})
    e.remove({ id: 'skilltree:copper_ingot'})
    e.remove({ id: 'quark:building/crafting/compressed/charcoal_block'})
    e.remove({ id: 'quark:building/crafting/compressed/charcoal_block_uncompress'})
    e.remove({ id: 'quark:building/crafting/compressed/gunpowder_sack'})
    e.remove({ id: 'quark:building/crafting/compressed/gunpowder_sack_uncompress'})
    e.remove({ id: 'quark:building/crafting/compressed/carrot_crate'})
    e.remove({ id: 'thermal:storage/carrot_block'})
    e.remove({ id: 'thermal:storage/carrot_from_block'})
    e.remove({ id: 'quark:building/crafting/compressed/carrot_crate_uncompress'})
    e.remove({ id: 'ad_astra:recipes/steel_ingot_from_nuggets'})
    e.remove({ id: 'ad_astra:recipes/steel_ingot'})
    e.remove({ id: 'ad_astra:recipes/steel_block'})
    e.remove({ id: 'ad_astra:recipes/steel_nugget'})
    e.remove({ id: 'mekanism:storage_blocks/charcoal'})
    e.remove({ id: 'mekanism:charcoal'})

    const RAW_BLOCKS_IE = ['alltheores:raw_aluminum_block', 'alltheores:raw_zinc_block', 'alltheores:raw_lead_block', 'alltheores:raw_silver_block', 'alltheores:raw_nickel_block', 'alltheores:raw_uranium_block']
    const BLOCKS_IE = ['alltheores:silver_block', 'alltheores:lead_block', 'alltheores:steel_block', 'alltheores:electrum_block', 'alltheores:constantan_block', 'alltheores:uranium_block', 'alltheores:nickel_block', 'alltheores:aluminum_block']
    const INGOTS_IE = ['alltheores:constantan_ingot', 'alltheores:steel_ingot', 'alltheores:electrum_ingot', 'alltheores:aluminum_ingot', 'alltheores:uranium_ingot', 'alltheores:nickel_ingot', 'alltheores:silver_ingot', 'alltheores:lead_ingot']
    const NUGGETS_IE = ['alltheores:constantan_nugget', 'alltheores:uranium_nugget', 'alltheores:nickel_nugget', 'alltheores:steel_nugget', 'alltheores:aluminum_nugget', 'alltheores:silver_nugget', 'alltheores:lead_nugget', 'alltheores:copper_nugget', 'alltheores:electrum_nugget']
    const BLOCKS_EIDOLON = ['alltheores:lead_block', 'alltheores:silver_block']
    const RAW_BLOCKS_THERMAL = ['alltheores:raw_lead_block', 'alltheores:raw_silver_block', 'alltheores:raw_nickel_block', 'alltheores:raw_tin_block']
    const BLOCKS_THERMAL = ['alltheores:signalum_block', 'alltheores:lumium_block', 'alltheores:enderium_block', 'alltheores:bronze_block', 'alltheores:tin_block', 'alltheores:invar_block', 'alltheores:electrum_block', 'alltheores:constantan_block', 'alltheores:nickel_block', 'alltheores:lead_block', 'alltheores:silver_block']
    const INGOTS_THERMAL = ['alltheores:bronze_ingot', 'alltheores:invar_ingot', 'alltheores:signalum_ingot', 'alltheores:lumium_ingot', 'alltheores:enderium_ingot', 'alltheores:tin_ingot', 'alltheores:electrum_ingot', 'alltheores:constantan_ingot', 'alltheores:nickel_ingot', 'alltheores:silver_ingot', 'alltheores:lead_ingot', 'minecraft:copper_ingot', 'minecraft:netherite_ingot']
    const NUGGETS_THERMAL = ['alltheores:bronze_nugget', 'alltheores:invar_nugget', 'alltheores:signalum_nugget', 'alltheores:lumium_nugget', 'alltheores:enderium_nugget', 'alltheores:tin_nugget', 'alltheores:electrum_nugget', 'alltheores:constantan_nugget', 'alltheores:nickel_nugget', 'alltheores:silver_nugget', 'alltheores:lead_nugget', 'alltheores:copper_nugget', 'createdeco:netherite_nugget']
    const RAW_BLOCKS_MEKANISM = ['alltheores:raw_lead_block', 'alltheores:raw_osmium_block', 'alltheores:raw_uranium_block', 'alltheores:raw_tin_block']
    const BLOCKS_MEKANISM = ['alltheores:lead_block', 'alltheores:osmium_block', 'alltheores:uranium_block', 'alltheores:tin_block', 'alltheores:steel_block', 'alltheores:bronze_block']
    const INGOTS_MEKANISM = ['alltheores:lead_ingot', 'alltheores:osmium_ingot', 'alltheores:uranium_ingot', 'alltheores:tin_ingot', 'alltheores:steel_ingot', 'alltheores:bronze_ingot']
    const NUGGETS_MEKANISM = ['alltheores:lead_nugget', 'alltheores:osmium_nugget', 'alltheores:uranium_nugget', 'alltheores:tin_nugget', 'alltheores:steel_nugget', 'alltheores:bronze_nugget']

    RAW_BLOCKS_IE.forEach(I => {e.remove({ input: I, type: 'minecraft:crafting_shapeless', mod: "immersiveengineering" })
                                e.remove({ output: I, type: 'minecraft:crafting_shaped', mod: "immersiveengineering" })})
    BLOCKS_IE.forEach(I => {e.remove({ input: I, type: 'minecraft:crafting_shapeless', mod: "immersiveengineering" })
                            e.remove({ output: I, type: 'minecraft:crafting_shaped', mod: "immersiveengineering" })})
    INGOTS_IE.forEach(I => {e.remove({ output: I, type: 'minecraft:crafting_shaped', mod: "immersiveengineering" })})
    NUGGETS_IE.forEach(I => {e.remove({ output: I, type: 'minecraft:crafting_shapeless', mod: "immersiveengineering" })})

    BLOCKS_EIDOLON.forEach(I => {e.remove({ input: I, type: 'minecraft:crafting_shapeless', mod: "eidolon" })
                                 e.remove({ output: I, type: 'minecraft:crafting_shaped', mod: "eidolon" })})
    
    RAW_BLOCKS_THERMAL.forEach(I => {e.remove({ input: I, type: 'minecraft:crafting_shapeless', mod: "thermal" })
                                     e.remove({ output: I, type: 'minecraft:crafting_shaped', mod: "thermal" })})
    BLOCKS_THERMAL.forEach(I => {e.remove({ input: I, type: 'minecraft:crafting_shapeless', mod: "thermal" })
                                 e.remove({ output: I, type: 'minecraft:crafting_shaped', mod: "thermal" })})
    INGOTS_THERMAL.forEach(I => {e.remove({ output: I, type: 'minecraft:crafting_shaped', mod: "thermal" })})
    NUGGETS_THERMAL.forEach(I => {e.remove({ output: I, type: 'minecraft:crafting_shapeless', mod: "thermal" })})

    RAW_BLOCKS_MEKANISM.forEach(I => {e.remove({ input: I, type: 'minecraft:crafting_shapeless', mod: "mekanism" })
                                     e.remove({ output: I, type: 'minecraft:crafting_shaped', mod: "mekanism" })})
    BLOCKS_MEKANISM.forEach(I => {e.remove({ input: I, type: 'minecraft:crafting_shapeless', mod: "mekanism" })
                                 e.remove({ output: I, type: 'minecraft:crafting_shaped', mod: "mekanism" })})
    INGOTS_MEKANISM.forEach(I => {e.remove({ output: I, type: 'minecraft:crafting_shaped', mod: "mekanism" })})
    NUGGETS_MEKANISM.forEach(I => {e.remove({ output: I, type: 'minecraft:crafting_shapeless', mod: "mekanism" })})

    //Remove SMELTING Repetitive Recipes
    const SMELT_ITEMS = [
        "aluminum", 
        "brass", 
        "bronze",
        "constantan", 
        "copper", 
        "electrum", 
        "enderium",
        "gold", 
        "invar",
        "iridium", 
        "iron",
        "iron", 
        "lead", 
        "lumium",
        "netherite",
        "nickel", 
        "osmium", 
        "platinum", 
        "signalum",
        "silver", 
        "steel", 
        "tin", 
        "uranium", 
        "zinc"
    ].forEach(I => {
            e.remove({ id: 'immersiveengineering:smelting/'+I+'_ingot_from_dust'});
            e.remove({ id: 'immersiveengineering:smelting/'+I+'_ingot_from_dust_from_blasting'})
            e.remove({ id: 'immersiveengineering:smelting/ingot_'+I+'_from_dust'})
            e.remove({ id: 'immersiveengineering:smelting/ingot_'+I+'_from_dust_from_blasting'})
            e.remove({ id: 'immersiveengineering:smelting/ingot_'+I+'_from_blasting'})
            e.remove({ id: 'immersiveengineering:smelting/ingot_'+I+'_from_blasting2'})
            e.remove({ id: 'immersiveengineering:smelting/ingot_'+I+'_from_blasting3'})
            e.remove({ id: 'immersiveengineering:smelting/ingot_'+I})
            e.remove({ id: 'immersiveengineering:smelting/ingot_'+I+'2'})
            e.remove({ id: 'immersiveengineering:smelting/ingot_'+I+'3'})
            e.remove({ id: 'alltheores:'+I+'_ingot_from_ore'})
            e.remove({ id: 'alltheores:'+I+'_ingot_from_slate_ore'})
            e.remove({ id: 'alltheores:'+I+'_ingot_from_ore_blasting'})
            e.remove({ id: 'alltheores:'+I+'_ingot_from_slate_ore_blasting'})
            e.remove({ id: 'minecraft:'+I+'_ingot_from_smelting_'+I+'_ore'})
            e.remove({ id: 'minecraft:'+I+'_ingot_from_blasting_'+I+'_ore'})
            e.remove({ id: 'minecraft:'+I+'_ingot_from_smelting_deepslate_'+I+'_ore'})
            e.remove({ id: 'minecraft:'+I+'_ingot_from_blasting_deepslate_'+I+'_ore'})
            e.remove({ id: 'eidolon:smelt_raw_'+I})
            e.remove({ id: 'eidolon:blast_raw_'+I})
            e.remove({ id: 'eidolon:smelt_'+I+'_dust'})
            e.remove({ id: 'eidolon:blast_'+I+'_dust'})
            e.remove({ id: 'eidolon:smelt_'+I+'_ore'})
            e.remove({ id: 'eidolon:blast_'+I+'_ore'})
            e.remove({ id: 'create:smelting/'+I+'_ingot_from_ore'})
            e.remove({ id: 'create:blasting/'+I+'_ingot_from_ore'})
            e.remove({ id: 'create:smelting/'+I+'_ingot_from_raw_ore'})
            e.remove({ id: 'create:blasting/'+I+'_ingot_from_raw_ore'})
            e.remove({ id: 'thermal:smelting/'+I+'_ingot_from_deepslate_ore_smelting'})
            e.remove({ id: 'thermal:smelting/'+I+'_ingot_from_deepslate_ore_blasting'})
            e.remove({ id: 'thermal:smelting/'+I+'_ingot_from_ore_smelting'})
            e.remove({ id: 'thermal:smelting/'+I+'_ingot_from_ore_blasting'})
            e.remove({ id: 'thermal:smelting/'+I+'_ingot_from_raw_smelting'})
            e.remove({ id: 'thermal:smelting/'+I+'_ingot_from_raw_blasting'})
            e.remove({ id: 'thermal:smelting/'+I+'_ingot_from_dust_smelting'})
            e.remove({ id: 'thermal:smelting/'+I+'_ingot_from_dust_blasting'})
            e.remove({ id: 'mekanism:processing/'+I+'/ingot/from_dust_smelting'})
            e.remove({ id: 'mekanism:processing/'+I+'/ingot/from_dust_blasting'})
            e.remove({ id: 'mekanism:processing/'+I+'/ingot/from_raw_blasting'})
            e.remove({ id: 'mekanism:processing/'+I+'/ingot/from_raw_smelting'})
            e.remove({ id: 'mekanism:processing/'+I+'/ingot/from_ore_blasting'})
            e.remove({ id: 'mekanism:processing/'+I+'/ingot/from_ore_smelting'})
        })

    e.remove({ id: 'minecraft:gold_ingot_from_smelting_nether_gold_ore'})
    e.remove({ id: 'minecraft:gold_ingot_from_blasting_nether_gold_ore'})
    e.remove({ id: 'byg:gold_ingot_from_smelting_blue_nether_gold_ore'})
    e.remove({ id: 'byg:gold_ingot_from_blasting_blue_nether_gold_ore'})
    e.remove({ id: 'byg:gold_ingot_from_smelting_brimstone_nether_gold_ore'})
    e.remove({ id: 'byg:gold_ingot_from_blasting_brimstone_nether_gold_ore'})
    e.remove({ id: 'iceandfire:furnace/silver_ingot'})
    e.remove({ id: 'iceandfire:furnace/silver_ingot_blasting'})
    e.remove({ id: 'iceandfire:furnace/deepslate_silver_ingot'})
    e.remove({ id: 'iceandfire:furnace/deepslate_silver_ingot_blasting'})
    e.remove({ id: 'occultism:blasting/silver_ingot_from_raw'})
    e.remove({ id: 'occultism:smelting/silver_ingot_from_raw'})
    e.remove({ id: 'occultism:blasting/silver_ingot'})
    e.remove({ id: 'occultism:smelting/silver_ingot'})
    e.remove({ id: 'occultism:blasting/silver_ingot_from_dust'})
    e.remove({ id: 'occultism:smelting/silver_ingot_from_dust'})
    e.remove({ id: 'occultism:blasting/iron_ingot_from_dust'})
    e.remove({ id: 'occultism:smelting/iron_ingot_from_dust'})
    e.remove({ id: 'occultism:blasting/gold_ingot_from_dust'})
    e.remove({ id: 'occultism:smelting/gold_ingot_from_dust'})
    e.remove({ id: 'occultism:blasting/copper_ingot_from_dust'})
    e.remove({ id: 'occultism:smelting/copper_ingot_from_dust'})
    e.remove({ id: 'darkerdepths:silver_ingot_from_smelting_aridrock_silver_ore'})
    e.remove({ id: 'darkerdepths:silver_ingot_from_smelting_limestone_silver_ore'})
    e.remove({ id: 'darkerdepths:silver_ingot_from_blasting_aridrock_silver_ore'})
    e.remove({ id: 'darkerdepths:silver_ingot_from_blasting_limestone_silver_ore'})
    e.remove({ id: 'thermal:storage/coal_coke_block'})
    e.remove({ id: 'thermal:storage/coal_coke_from_block'})
    e.remove({ id: 'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot'})
    
    //Add Unified SMELTING Recipes
    const SMELT_ORES = ["gold", "copper", "iron", "platinum", "tin", "aluminum", "uranium", "nickel", "silver", "lead", "osmium", "iridium", "zinc"]
    const SMELT_DUSTS = ["tin", "uranium", "lead", "osmium"]
    SMELT_ORES.forEach(I => {e.smelting('#forge:ingots/'+I, '#forge:ores/'+I).id("alltheores:"+I+"_ingot_from_ore").xp(0.15)
                             e.blasting('#forge:ingots/'+I, '#forge:ores/'+I).id("alltheores:"+I+"_ingot_from_ore_blasting").xp(0.15)})
    SMELT_DUSTS.forEach(I => {e.blasting('#forge:ingots/'+I, '#forge:dusts/'+I).id("alltheores:"+I+"_ingot_from_dust_blasting").xp(0.3);})

    //Remove OTHERS Repetitive Recipes
    e.remove({id: "createaddition:pressing/zinc_ingot"})
    e.remove({id: "createaddition:pressing/lead_ingot"})
    e.remove({id: "createaddition:pressing/silver_ingot"})
    e.remove({id: "createaddition:pressing/nickel_ingot"})
    e.remove({id: "createaddition:pressing/uranium_ingot"})
    e.remove({id: "createaddition:pressing/aluminum_ingot"})
    e.remove({id: "createaddition:pressing/constantan_ingot"})
    e.remove({id: "createaddition:pressing/steel_ingot"})
    e.remove({id: "createaddition:pressing/electrum_ingot"})
    e.remove({id: "minecraft:pressing/netherite_sheet"})
    e.remove({id: "minecraft:pressing/zinc_sheet"})
    e.remove({id: "minecraft:pressing/zinc_sheet"})
    e.remove({id: "createaddition:mixing/electrum"})
    e.remove({id: "createaddition:compat/immersiveengineering/constantan"})
    e.remove({id: "occultism:miner/deeps/deepslate_lead_ore"})
    e.remove({id: "occultism:miner/deeps/deepslate_silver_ore"})
    e.remove({id: "createaddition:compat/immersiveengineering/constantan"})
    e.remove({id: "createaddition:mixing/electrum"})

    e.remove({id: "eidolon:bonelord_greaves"})
    e.remove({id: "eidolon:bonelord_chestplate"})
    e.remove({id: "eidolon:bonelord_helm"})

})
