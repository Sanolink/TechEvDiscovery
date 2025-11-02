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
//THIRD FILE OF UNIFICATION, PLEASE DON'T TOUCH
/*********************************************/

LootJS.modifiers((event) => {

    const LT = 
    [
        LootType.ADVANCEMENT_ENTITY, 
        LootType.ADVANCEMENT_REWARD, 
        LootType.BLOCK, 
        LootType.CHEST, 
        LootType.ENTITY, 
        LootType.FISHING, 
        LootType.GIFT, 
        LootType.PIGLIN_BARTER,
        LootType.UNKNOWN
    ]

    function replaceLT(input, output) {
        event.addLootTypeModifier(LT).replaceLoot(input, output, true);
    }

    //Ores
    replaceLT(['immersiveengineering:ore_aluminum', 'ftbic:aluminum_ore'], 'alltheores:aluminum_ore')
    replaceLT(['ftbic:iridium_ore'], 'alltheores:iridium_ore')
    replaceLT(['eidolon:lead_ore', 'immersiveengineering:ore_lead', 'thermal:lead_ore', 'mekanism:lead_ore', 'ftbic:lead_ore'], 'alltheores:lead_ore')
    replaceLT(['immersiveengineering:ore_nickel', 'alltheores:nickel_ore'], 'thermal:nickel_ore')
    replaceLT(['mekanism:osmium_ore'], 'alltheores:osmium_ore')
    replaceLT(['iceandfire:sapphire_ore'], 'alltheores:sapphire_ore')
    replaceLT(['eidolon:silver_ore', 'immersiveengineering:ore_silver', 'darkerdepths:limestone_silver_ore', 'darkerdepths:aridrock_silver_ore', 'darkerdepths:silver_ore', 'iceandfire:silver_ore', 'occultism:silver_ore', 'thermal:silver_ore'], 'alltheores:silver_ore')
    replaceLT(['thermal:tin_ore', 'mekanism:tin_ore', 'ftbic:tin_ore'], 'alltheores:tin_ore')
    replaceLT(['immersiveengineering:ore_uranium', 'mekanism:uranium_ore', 'ftbic:uranium_ore'], 'alltheores:uranium_ore')
    replaceLT(['create:zinc_ore'], 'alltheores:zinc_ore')
    
    //Deepslate Ores
    replaceLT(['immersiveengineering:deepslate_ore_aluminum', 'ftbic:deepslate_aluminum_ore'], 'alltheores:deepslate_aluminum_ore')
    replaceLT(['ftbic:deepslate_iridium_ore'], 'alltheores:deepslate_iridium_ore')
    replaceLT(['eidolon:deep_lead_ore', 'immersiveengineering:deepslate_ore_lead', 'thermal:deepslate_lead_ore', 'mekanism:deepslate_lead_ore', 'ftbic:deepslate_lead_ore'], 'alltheores:deepslate_lead_ore')
    replaceLT(['immersiveengineering:deepslate_ore_nickel', 'thermal:deepslate_nickel_ore'], 'alltheores:deepslate_nickel_ore')
    replaceLT(['mekanism:deepslate_osmium_ore'], 'alltheores:deepslate_osmium_ore')
    replaceLT(['eidolon:deep_silver_ore', 'immersiveengineering:deepslate_ore_silver', 'iceandfire:deepslate_silver_ore', 'occultism:silver_ore_deepslate', 'thermal:deepslate_silver_ore'], 'alltheores:deepslate_silver_ore')
    replaceLT(['thermal:deepslate_tin_ore', 'mekanism:deepslate_tin_ore', 'ftbic:deepslate_tin_ore'], 'alltheores:deepslate_tin_ore')
    replaceLT(['immersiveengineering:deepslate_ore_uranium', 'mekanism:deepslate_uranium_ore', 'ftbic:deepslate_uranium_ore'], 'alltheores:deepslate_uranium_ore')
    replaceLT(['create:deepslate_zinc_ore'], 'alltheores:deepslate_zinc_ore')

    //Raw Materials
    replaceLT(['create:raw_zinc'], 'alltheores:raw_zinc')
    replaceLT(['ftbic:iridium_chunk'], 'alltheores:raw_iridium')
    replaceLT(['eidolon:raw_lead', 'immersiveengineering:raw_lead', 'thermal:raw_lead', 'mekanism:raw_lead', 'ftbic:lead_chunk'], 'alltheores:raw_lead')
    replaceLT(['eidolon:raw_silver', 'immersiveengineering:raw_silver', 'darkerdepths:raw_silver', 'occultism:raw_silver', 'thermal:raw_silver'], 'alltheores:raw_silver')
    replaceLT(['immersiveengineering:raw_aluminum', 'ftbic:aluminum_chunk'], 'alltheores:raw_aluminum')
    replaceLT(['immersiveengineering:raw_nickel', 'thermal:raw_nickel'], 'alltheores:raw_nickel')
    replaceLT(['immersiveengineering:raw_uranium', 'mekanism:raw_uranium', 'ftbic:uranium_chunk'], 'alltheores:raw_uranium')
    replaceLT(['mekanism:raw_osmium'], 'alltheores:raw_osmium')
    replaceLT(['thermal:raw_tin', 'mekanism:raw_tin', 'ftbic:tin_chunk'], 'alltheores:raw_tin')
    
    //Raw Storage Blocks
    replaceLT(['#forge:storage_blocks/raw_aluminum', 'immersiveengineering:raw_block_aluminum'], 'alltheores:raw_aluminum_block')
    replaceLT(['#forge:storage_blocks/raw_lead', 'eidolon:raw_lead_block', 'immersiveengineering:raw_block_lead', 'thermal:raw_lead_block', 'mekanism:block_raw_lead'], 'alltheores:raw_lead_block')
    replaceLT(['#forge:storage_blocks/raw_nickel', 'immersiveengineering:raw_block_nickel', 'thermal:raw_nickel_block'], 'alltheores:raw_nickel_block')
    replaceLT(['#forge:storage_blocks/raw_osmium', 'mekanism:block_raw_osmium'], 'alltheores:raw_osmium_block')
    replaceLT(['#forge:storage_blocks/raw_silver', 'eidolon:raw_silver_block', 'immersiveengineering:raw_block_silver', 'darkerdepths:raw_silver_block', 'thermal:raw_silver_block'], 'alltheores:raw_silver_block')
    replaceLT(['#forge:storage_blocks/raw_tin', 'thermal:raw_tin_block', 'mekanism:block_raw_tin'], 'alltheores:raw_tin_block')
    replaceLT(['#forge:storage_blocks/raw_uranium', 'immersiveengineering:raw_block_uranium', 'mekanism:block_raw_uranium'], 'alltheores:raw_uranium_block')
    replaceLT(['#forge:storage_blocks/raw_zinc', 'create:raw_zinc_block'], 'alltheores:raw_zinc_block')
    
    //Ingots
    replaceLT(['#forge:ingots/aluminum', 'immersiveengineering:ingot_aluminum', 'chemlib:aluminum_ingot', 'ftbic:aluminum_ingot'], 'alltheores:aluminum_ingot')
    replaceLT(['#forge:ingots/brass', 'create:brass_ingot'], 'alltheores:brass_ingot')
    replaceLT(['#forge:ingots/bronze', 'thermal:bronze_ingot', 'mekanism:ingot_bronze', 'ftbic:bronze_ingot'], 'alltheores:bronze_ingot')
    replaceLT(['#forge:ingots/chromium', 'chemlib:chromium_ingot'], 'alchemistry:chromium_ingot')
    replaceLT(['#forge:ingots/constantan', 'immersiveengineering:ingot_constantan', 'thermal:constantan_ingot'], 'alltheores:constantan_ingot')
    replaceLT(['#forge:ingots/electrum', 'immersiveengineering:ingot_electrum', 'createaddition:electrum_ingot', 'thermal:electrum_ingot'], 'alltheores:electrum_ingot')
    replaceLT(['#forge:ingots/enderium', 'thermal:enderium_ingot', 'ftbic:enderium_ingot'], 'alltheores:enderium_ingot')
    replaceLT(['#forge:ingots/invar', 'thermal:invar_ingot'], 'alltheores:invar_ingot')
    replaceLT(['#forge:ingots/iridium', 'chemlib:iridium_ingot', 'ftbic:iridium_ingot'], 'alltheores:iridium_ingot')
    replaceLT(['#forge:ingots/lead', 'eidolon:lead_ingot', 'immersiveengineering:ingot_lead', 'thermal:lead_ingot', 'mekanism:ingot_lead', 'chemlib:lead_ingot', 'ftbic:lead_ingot'], 'alltheores:lead_ingot')
    replaceLT(['#forge:ingots/lumium', 'thermal:lumium_ingot'], 'alltheores:lumium_ingot')
    replaceLT(['#forge:ingots/nickel', 'immersiveengineering:ingot_nickel', 'thermal:nickel_ingot', 'chemlib:nickel_ingot'], 'alltheores:nickel_ingot')
    replaceLT(['#forge:ingots/osmium', 'mekanism:ingot_osmium', 'chemlib:osmium_ingot'], 'alltheores:osmium_ingot')
    replaceLT(['#forge:ingots/platinum', 'chemlib:platinum_ingot'], 'alltheores:platinum_ingot')
    replaceLT(['#forge:ingots/signalum', 'thermal:signalum_ingot'], 'alltheores:signalum_ingot')
    replaceLT(['#forge:ingots/silver', 'eidolon:silver_ingot', 'immersiveengineering:ingot_silver', 'darkerdepths:silver_ingot', 'iceandfire:silver_ingot', 'occultism:silver_ingot', 'thermal:silver_ingot', 'chemlib:silver_ingot'], 'alltheores:silver_ingot')
    replaceLT(['#forge:ingots/steel', 'immersiveengineering:ingot_steel', 'ad_astra:steel_ingot', 'mekanism:ingot_steel'], 'alltheores:steel_ingot')
    replaceLT(['#forge:ingots/tin', 'thermal:tin_ingot', 'mekanism:ingot_tin', 'chemlib:tin_ingot', 'ftbic:tin_ingot'], 'alltheores:tin_ingot')
    replaceLT(['#forge:ingots/titanium', 'chemlib:titanium_ingot'], 'alchemistry:titanium_ingot')
    replaceLT(['#forge:ingots/tungsten', 'chemlib:tungsten_ingot'], 'alchemistry:tungsten_ingot')
    replaceLT(['#forge:ingots/uranium', 'immersiveengineering:ingot_uranium', 'mekanism:ingot_uranium', 'chemlib:uranium_ingot', 'ftbic:uranium_ingot'], 'alltheores:uranium_ingot')
    replaceLT(['#forge:ingots/zinc', 'create:zinc_ingot', 'chemlib:zinc_ingot'], 'alltheores:zinc_ingot')

    //Plates
    replaceLT(['#forge:plates/aluminum', 'immersiveengineering:plate_aluminum', 'ftbic:aluminum_plate'], 'alltheores:aluminum_plate')
    replaceLT(['#forge:plates/brass', 'create:brass_sheet'], 'alltheores:brass_plate')
    replaceLT(['#forge:plates/bronze', 'thermal:bronze_plate', 'ftbic:bronze_plate'], 'alltheores:bronze_plate')
    replaceLT(['#forge:plates/constantan', 'immersiveengineering:plate_constantan', 'thermal:constantan_plate'], 'alltheores:constantan_plate')
    replaceLT(['#forge:plates/copper', 'create:copper_sheet', 'immersiveengineering:plate_copper', 'thermal:copper_plate', 'ftbic:copper_plate'], 'alltheores:copper_plate')
    replaceLT(['#forge:plates/electrum', 'immersiveengineering:plate_electrum', 'createaddition:electrum_sheet', 'thermal:electrum_plate'], 'alltheores:electrum_plate')
    replaceLT(['#forge:plates/enderium', 'thermal:enderium_plate', 'ftbic:enderium_plate'], 'alltheores:enderium_plate')
    replaceLT(['#forge:plates/gold', 'create:golden_sheet', 'immersiveengineering:plate_gold', 'thermal:gold_plate', 'ftbic:gold_plate'], 'alltheores:gold_plate')
    replaceLT(['#forge:plates/invar', 'thermal:invar_plate'], 'alltheores:invar_plate')
    replaceLT(['#forge:plates/iridium', 'ftbic:iridium_plate'], 'alltheores:iridium_plate')
    replaceLT(['#forge:plates/iron', 'create:iron_sheet', 'immersiveengineering:plate_iron', 'thermal:iron_plate', 'ad_astra:iron_plate', 'ftbic:iron_plate'], 'alltheores:iron_plate')
    replaceLT(['#forge:plates/lead', 'immersiveengineering:plate_lead', 'thermal:lead_plate', 'ftbic:lead_plate'], 'alltheores:lead_plate')
    replaceLT(['#forge:plates/lumium', 'thermal:lumium_plate'], 'alltheores:lumium_plate')
    replaceLT(['#forge:plates/netherite', 'createdeco:netherite_sheet'], 'thermal:netherite_plate')
    replaceLT(['#forge:plates/nickel', 'immersiveengineering:plate_nickel', 'thermal:nickel_plate'], 'alltheores:nickel_plate')
    replaceLT(['#forge:plates/signalum', 'thermal:signalum_plate'], 'alltheores:signalum_plate')
    replaceLT(['#forge:plates/silver', 'immersiveengineering:plate_silver', 'thermal:silver_plate'], 'alltheores:silver_plate')
    replaceLT(['#forge:plates/steel', 'immersiveengineering:plate_steel', 'ad_astra:steel_plate'], 'alltheores:steel_plate')
    replaceLT(['#forge:plates/tin', 'thermal:tin_plate', 'ftbic:tin_plate'], 'alltheores:tin_plate')
    replaceLT(['#forge:plates/uranium', 'immersiveengineering:plate_uranium', 'ftbic:uranium_plate'], 'alltheores:uranium_plate')
    replaceLT(['#forge:plates/zinc', 'createdeco:zinc_sheet', 'createaddition:zinc_sheet'], 'alltheores:zinc_plate')
    
    //Gears
    replaceLT(['#forge:gears/aluminum', 'ftbic:aluminum_gear'], 'alltheores:aluminum_gear')
    replaceLT(['#forge:gears/bronze', 'thermal:bronze_gear', 'ftbic:bronze_gear'], 'alltheores:bronze_gear')
    replaceLT(['#forge:gears/constantan', 'thermal:constantan_gear'], 'alltheores:constantan_gear')
    replaceLT(['#forge:gears/copper', 'thermal:copper_gear', 'ftbic:copper_gear'], 'alltheores:copper_gear')
    replaceLT(['#forge:gears/diamond', 'industrialforegoing:diamond_gear', 'thermal:diamond_gear'], 'alltheores:diamond_gear')
    replaceLT(['#forge:gears/electrum', 'thermal:electrum_gear'], 'alltheores:electrum_gear')
    replaceLT(['#forge:gears/enderium', 'thermal:enderium_gear', 'ftbic:enderium_gear'], 'alltheores:enderium_gear')
    replaceLT(['#forge:gears/gold', 'industrialforegoing:gold_gear', 'thermal:gold_gear', 'ftbic:gold_gear'], 'alltheores:gold_gear')
    replaceLT(['#forge:gears/invar', 'thermal:invar_gear'], 'alltheores:invar_gear')
    replaceLT(['#forge:gears/iridium', 'ftbic:iridium_gear'], 'alltheores:iridium_gear')
    replaceLT(['#forge:gears/iron', 'industrialforegoing:iron_gear', 'thermal:iron_gear', 'ftbic:iron_gear'], 'alltheores:iron_gear')
    replaceLT(['#forge:gears/lead', 'thermal:lead_gear', 'ftbic:lead_gear'], 'alltheores:lead_gear')
    replaceLT(['#forge:gears/lumium', 'thermal:lumium_gear'], 'alltheores:lumium_gear')
    replaceLT(['#forge:gears/nickel', 'thermal:nickel_gear'], 'alltheores:nickel_gear')
    replaceLT(['#forge:gears/signalum', 'thermal:signalum_gear'], 'alltheores:signalum_gear')
    replaceLT(['#forge:gears/silver', 'thermal:silver_gear'], 'alltheores:silver_gear')
    replaceLT(['#forge:gears/tin', 'thermal:tin_gear', 'ftbic:tin_gear'], 'alltheores:tin_gear')
    replaceLT(['#forge:gears/uranium', 'ftbic:uranium_gear'], 'alltheores:uranium_gear')
    
    //Rods
    replaceLT(['#forge:rods/aluminum', 'immersiveengineering:stick_aluminum', 'ftbic:aluminum_rod'], 'alltheores:aluminum_rod')
    replaceLT(['#forge:rods/brass', 'createaddition:brass_rod'], 'alltheores:brass_rod')
    replaceLT(['#forge:rods/bronze', 'ftbic:bronze_rod'], 'alltheores:bronze_rod')
    replaceLT(['#forge:rods/copper', 'createaddition:copper_rod', 'ftbic:copper_rod'], 'alltheores:copper_rod')
    replaceLT(['#forge:rods/electrum', 'createaddition:electrum_rod'], 'alltheores:electrum_rod')
    replaceLT(['#forge:rods/enderium', 'ftbic:enderium_rod'], 'alltheores:enderium_rod')
    replaceLT(['#forge:rods/gold', 'createaddition:gold_rod', 'ftbic:gold_rod'], 'alltheores:gold_rod')
    replaceLT(['#forge:rods/iridium', 'ftbic:iridium_rod'], 'alltheores:iridium_rod')
    replaceLT(['#forge:rods/iron', 'createaddition:iron_rod', 'immersiveengineering:stick_iron', 'ad_astra:iron_rod', 'ftbic:iron_rod'], 'alltheores:iron_rod')
    replaceLT(['#forge:rods/lead', 'ftbic:lead_rod'], 'alltheores:lead_rod')
    replaceLT(['#forge:rods/steel', 'immersiveengineering:stick_steel'], 'alltheores:steel_rod')
    replaceLT(['#forge:rods/tin', 'ftbic:tin_rod'], 'alltheores:tin_rod')
    replaceLT(['#forge:rods/uranium', 'ftbic:uranium_rod'], 'alltheores:uranium_rod')
    
    //Nuggets
    replaceLT(['#forge:nuggets/aluminum', 'immersiveengineering:nugget_aluminum', 'chemlib:aluminum_nugget', 'ftbic:aluminum_nugget'], 'alltheores:aluminum_nugget')
    replaceLT(['#forge:nuggets/brass', 'create:brass_nugget'], 'alltheores:brass_nugget')
    replaceLT(['#forge:nuggets/bronze', 'thermal:bronze_nugget', 'mekanism:nugget_bronze', 'ftbic:bronze_nugget'], 'alltheores:bronze_nugget')
    replaceLT(['#forge:nuggets/chromium', 'chemlib:chromium_nugget'], 'alchemistry:chromium_nugget')
    replaceLT(['#forge:nuggets/constantan', 'immersiveengineering:nugget_constantan', 'thermal:constantan_nugget'], 'alltheores:constantan_nugget')
    replaceLT(['#forge:nuggets/copper', 'create:copper_nugget', 'immersiveengineering:nugget_copper', 'iceandfire:copper_nugget', 'thermal:copper_nugget', 'skilltree:copper_nugget', 'ftbic:copper_nugget'], 'alltheores:copper_nugget')
    replaceLT(['#forge:nuggets/electrum', 'createaddition:electrum_nugget', 'immersiveengineering:nugget_electrum'], 'alltheores:electrum_nugget')
    replaceLT(['#forge:nuggets/electrum', 'thermal:electrum_nugget'], 'alltheores:electrum_nugget')
    replaceLT(['#forge:nuggets/enderium', 'thermal:enderium_nugget', 'ftbic:enderium_nugget'], 'alltheores:enderium_nugget')
    replaceLT(['#forge:nuggets/invar', 'thermal:invar_nugget'], 'alltheores:invar_nugget')
    replaceLT(['#forge:nuggets/iridium', 'chemlib:iridium_nugget', 'ftbic:iridium_nugget'], 'alltheores:iridium_nugget')
    replaceLT(['#forge:nuggets/lead', 'eidolon:lead_nugget', 'immersiveengineering:nugget_lead', 'thermal:lead_nugget', 'mekanism:nugget_lead', 'chemlib:lead_nugget', 'ftbic:lead_nugget'], 'alltheores:lead_nugget')
    replaceLT(['#forge:nuggets/lumium', 'thermal:lumium_nugget'], 'alltheores:lumium_nugget')
    replaceLT(['#forge:nuggets/netherite', 'thermal:netherite_nugget'], 'createdeco:netherite_nugget')
    replaceLT(['#forge:nuggets/nickel', 'immersiveengineering:nugget_nickel', 'thermal:nickel_nugget', 'chemlib:nickel_nugget'], 'alltheores:nickel_nugget')
    replaceLT(['#forge:nuggets/osmium', 'mekanism:nugget_osmium', 'chemlib:osmium_nugget'], 'alltheores:osmium_nugget')
    replaceLT(['#forge:nuggets/platinum', 'chemlib:platinum_nugget'], 'alltheores:platinum_nugget')
    replaceLT(['#forge:nuggets/signalum', 'thermal:signalum_nugget'], 'alltheores:signalum_nugget')
    replaceLT(['#forge:nuggets/silver', 'eidolon:silver_nugget', 'immersiveengineering:nugget_silver', 'iceandfire:silver_nugget', 'occultism:silver_nugget', 'thermal:silver_nugget', 'chemlib:silver_nugget'], 'alltheores:silver_nugget')
    replaceLT(['#forge:nuggets/steel', 'immersiveengineering:nugget_steel', 'ad_astra:steel_nugget', 'mekanism:nugget_steel'], 'alltheores:steel_nugget')
    replaceLT(['#forge:nuggets/tin', 'thermal:tin_nugget', 'mekanism:nugget_tin', 'chemlib:tin_nugget', 'ftbic:tin_nugget'], 'alltheores:tin_nugget')
    replaceLT(['#forge:nuggets/titanium', 'chemlib:titanium_nugget'], 'alchemistry:titanium_nugget')
    replaceLT(['#forge:nuggets/tungsten', 'chemlib:tungsten_nugget'], 'alchemistry:tungsten_nugget')
    replaceLT(['#forge:nuggets/uranium', 'immersiveengineering:nugget_uranium', 'mekanism:nugget_uranium', 'chemlib:uranium_nugget', 'ftbic:uranium_nugget'], 'alltheores:uranium_nugget')
    replaceLT(['#forge:nuggets/zinc', 'create:zinc_nugget', 'chemlib:zinc_nugget'], 'alltheores:zinc_nugget')

    //Dusts
    replaceLT(['#forge:dusts/aluminum', 'immersiveengineering:dust_aluminum', 'chemlib:aluminum_dust', 'ftbic:aluminum_dust'], 'alltheores:aluminum_dust')
    replaceLT(['#forge:dusts/bronze', 'thermal:bronze_dust', 'mekanism:dust_bronze', 'ftbic:bronze_dust'], 'alltheores:bronze_dust')
    replaceLT(['forge:dusts/charcoal', 'ftbic:charcoal_dust'], 'mekanism:dust_charcoal')
    replaceLT(['#forge:dusts/chromium', 'chemlib:chromium_dust'], 'alchemistry:chromium_dust')
    replaceLT(['forge:dusts/coal', 'ftbic:coal_dust'], 'mekanism:dust_coal')
    replaceLT(['#forge:dusts/constantan', 'immersiveengineering:dust_constantan', 'thermal:constantan_dust'], 'alltheores:constantan_dust')
    replaceLT(['#forge:dusts/copper', 'immersiveengineering:dust_copper', 'occultism:copper_dust', 'thermal:copper_dust', 'mekanism:dust_copper', 'chemlib:copper_dust', 'ftbic:copper_dust'], 'alltheores:copper_dust')
    replaceLT(['#forge:dusts/diamond', 'createaddition:diamond_grit', 'thermal:diamond_dust', 'mekanism:dust_diamond', 'ftbic:diamond_dust'], 'alltheores:diamond_dust')
    replaceLT(['#forge:dusts/electrum', 'immersiveengineering:dust_electrum', 'thermal:electrum_dust'], 'alltheores:electrum_dust')
    replaceLT(['#forge:dusts/ender_pearl', 'ae2:ender_dust', 'ftbic:ender_dust'], 'thermal:ender_pearl_dust')
    replaceLT(['#forge:dusts/enderium', 'thermal:enderium_dust', 'ftbic:enderium_dust'], 'alltheores:enderium_dust')
    replaceLT(['#forge:dusts/emerald', 'mekanism:dust_emerald'], 'thermal:emerald_dust')
    replaceLT(['#forge:dusts/gold', 'immersiveengineering:dust_gold', 'occultism:gold_dust', 'thermal:gold_dust', 'mekanism:dust_gold', 'chemlib:gold_dust', 'ftbic:gold_dust'], 'alltheores:gold_dust')
    replaceLT(['#forge:dusts/invar', 'thermal:invar_dust'], 'alltheores:invar_dust')
    replaceLT(['#forge:dusts/iridium', 'chemlib:iridium_dust', 'ftbic:iridium_dust'], 'alltheores:iridium_dust')
    replaceLT(['#forge:dusts/iron', 'immersiveengineering:dust_iron', 'occultism:iron_dust', 'thermal:iron_dust', 'mekanism:dust_iron', 'chemlib:iron_dust', 'ftbic:iron_dust'], 'alltheores:iron_dust')
    replaceLT(['#forge:dusts/lapis', 'mekanism:dust_lapis_lazuli'], 'thermal:lapis_dust')
    replaceLT(['#forge:dusts/lead', 'immersiveengineering:dust_lead', 'thermal:lead_dust', 'mekanism:dust_lead', 'chemlib:lead_dust', 'ftbic:lead_dust'], 'alltheores:lead_dust')
    replaceLT(['#forge:dusts/lithium', 'chemlib:lithium_dust'], 'mekanism:dust_lithium')
    replaceLT(['#forge:dusts/lumium', 'thermal:lumium_dust'], 'alltheores:lumium_dust')
    replaceLT(['#forge:dusts/netherite', 'thermal:netherite_dust', 'mekanism:dust_netherite'], 'alltheores:netherite_dust')
    replaceLT(['#forge:dusts/nickel', 'immersiveengineering:dust_nickel', 'thermal:nickel_dust', 'chemlib:nickel_dust'], 'alltheores:nickel_dust')
    replaceLT(['#forge:dusts/obsidian', 'occultism:obsidian_dust', 'mekanism:dust_obsidian', 'ftbic:obsidian_dust'], 'occultism:obsidian_dust')
    replaceLT(['#forge:dusts/osmium', 'mekanism:dust_osmium', 'chemlib:osmium_dust'], 'alltheores:osmium_dust')
    replaceLT(['#forge:dusts/platinum', 'chemlib:platinum_dust'], 'alltheores:platinum_dust')
    replaceLT(['#forge:dusts/quartz', 'mekanism:dust_quartz'], 'thermal:quartz_dust')
    replaceLT(['#forge:dusts/signalum', 'thermal:signalum_dust'], 'alltheores:signalum_dust')
    replaceLT(['#forge:dusts/silver', 'immersiveengineering:dust_silver', 'occultism:silver_dust', 'thermal:silver_dust', 'chemlib:silver_dust'], 'alltheores:silver_dust')
    replaceLT(['#forge:dusts/steel', 'immersiveengineering:dust_steel', 'mekanism:dust_steel'], 'alltheores:steel_dust')
    replaceLT(['#forge:dusts/sulfur', 'immersiveengineering:dust_sulfur', 'eidolon:sulfur', 'mekanism:dust_sulfur', 'chemlib:sulfur_dust'], 'thermal:sulfur_dust')
    replaceLT(['#forge:dusts/tin', 'thermal:tin_dust', 'mekanism:dust_tin', 'chemlib:tin_dust', 'ftbic:tin_dust'], 'alltheores:tin_dust')
    replaceLT(['#forge:dusts/titanium', 'chemlib:titanium_dust'], 'alchemistry:titanium_dust')
    replaceLT(['#forge:dusts/tungsten', 'chemlib:tungsten_dust'], 'alchemistry:tungsten_dust')
    replaceLT(['#forge:dusts/uranium', 'immersiveengineering:dust_uranium', 'mekanism:dust_uranium', 'chemlib:uranium_dust', 'ftbic:uranium_dust'], 'alltheores:uranium_dust')
    replaceLT(['#forge:dusts/wood', 'immersiveengineering:dust_wood', 'mekanism:sawdust'], 'thermal:sawdust')
    replaceLT(['#forge:dusts/zinc', 'chemlib:zinc_dust'], 'alltheores:zinc_dust')
    
    //Blocks
    replaceLT(['#forge:storage_blocks/aluminum', 'immersiveengineering:storage_aluminum', 'chemlib:aluminum_metal_block', 'ftbic:aluminum_block'], 'alltheores:aluminum_block')
    replaceLT(['#forge:storage_blocks/brass', 'create:brass_block'], 'alltheores:brass_block')
    replaceLT(['#forge:storage_blocks/bronze', 'thermal:bronze_block', 'mekanism:block_bronze', 'ftbic:bronze_block'], 'alltheores:bronze_block')
    replaceLT(['#forge:storage_blocks/charcoal', 'quark:charcoal_block', 'mekanism:block_charcoal'], 'thermal:charcoal_block')
    replaceLT(['#forge:storage_blocks/chromium', 'chemlib:chromium_metal_block'], 'alchemistry:chromium_block')
    replaceLT(['#forge:storage_blocks/coal_coke', 'thermal:coal_coke_block'], 'immersiveengineering:coke')
    replaceLT(['#forge:storage_blocks/constantan', 'immersiveengineering:storage_constantan', 'thermal:constantan_block'], 'alltheores:constantan_block')
    replaceLT(['#forge:storage_blocks/electrum', 'immersiveengineering:storage_electrum', 'thermal:electrum_block'], 'alltheores:electrum_block')
    replaceLT(['#forge:storage_blocks/enderium', 'thermal:enderium_block', 'ftbic:enderium_block'], 'alltheores:enderium_block')
    replaceLT(['#forge:storage_blocks/invar', 'thermal:invar_block'], 'alltheores:invar_block')
    replaceLT(['#forge:storage_blocks/iridium', 'chemlib:iridium_metal_block', 'ftbic:iridium_block'], 'alltheores:iridium_block')
    replaceLT(['#forge:storage_blocks/lead', 'immersiveengineering:storage_lead', 'eidolon:lead_block', 'thermal:lead_block', 'mekanism:block_lead', 'chemlib:lead_metal_block', 'ftbic:lead_block'], 'alltheores:lead_block')
    replaceLT(['#forge:storage_blocks/lumium', 'thermal:lumium_block'], 'alltheores:lumium_block')
    replaceLT(['#forge:storage_blocks/nickel', 'immersiveengineering:storage_nickel', 'thermal:nickel_block', 'chemlib:nickel_metal_block'], 'alltheores:nickel_block')
    replaceLT(['#forge:storage_blocks/osmium', 'mekanism:block_osmium', 'chemlib:osmium_metal_block'], 'alltheores:osmium_block')
    replaceLT(['#forge:storage_blocks/platinum', 'chemlib:platinum_metal_block'], 'alltheores:platinum_block')
    replaceLT(['#forge:storage_blocks/sapphire', 'iceandfire:sapphire_block'], 'alltheores:sapphire_block')
    replaceLT(['#forge:storage_blocks/signalum', 'thermal:signalum_block'], 'alltheores:signalum_block')
    replaceLT(['#forge:storage_blocks/silver', 'immersiveengineering:storage_silver', 'eidolon:silver_block', 'darkerdepths:silver_block', 'iceandfire:silver_block', 'occultism:silver_block', 'thermal:silver_block', 'chemlib:silver_metal_block'], 'alltheores:silver_block')
    replaceLT(['#forge:storage_blocks/steel', 'immersiveengineering:storage_steel', 'ad_astra:steel_block', 'mekanism:block_steel'], 'alltheores:steel_block')
    replaceLT(['#forge:storage_blocks/tin', 'thermal:tin_block', 'mekanism:block_tin', 'chemlib:tin_metal_block', 'ftbic:tin_block'], 'alltheores:tin_block')
    replaceLT(['#forge:storage_blocks/titanium', 'chemlib:titanium_metal_block'], 'alchemistry:titanium_block')
    replaceLT(['#forge:storage_blocks/tungsten', 'chemlib:tungsten_metal_block'], 'alchemistry:tungsten_block')
    replaceLT(['#forge:storage_blocks/uranium', 'immersiveengineering:storage_uranium', 'mekanism:block_uranium', 'chemlib:uranium_metal_block', 'ftbic:uranium_block'], 'alltheores:uranium_block')
    replaceLT(['#forge:storage_blocks/zinc', 'create:zinc_block', 'chemlib:zinc_metal_block'], 'alltheores:zinc_block')

    //Wires
    replaceLT(['#forge:wires/aluminum', 'ftbic:aluminum_wire'], 'immersiveengineering:wire_aluminum')
    replaceLT(['#forge:wires/copper', 'createaddition:copper_wire', 'ftbic:copper_wire'], 'immersiveengineering:wire_copper')
    replaceLT(['#forge:wires/electrum', 'createaddition:electrum_wire'], 'immersiveengineering:wire_electrum')
    replaceLT(['#forge:wires/gold', 'ftbic:gold_wire'], 'createaddition:gold_wire')
    
    //Gems
    replaceLT(['#forge:gems/sapphire', 'thermal:sapphire', 'iceandfire:sapphire_gem'], 'alltheores:sapphire')
    replaceLT(['#forge:gems/ruby', 'thermal:ruby'], 'alltheores:ruby')
    
    //Others
    replaceLT(['#forge:crops/rice', 'sushigocrafting:rice', 'sushigocrafting:rice_seeds'], 'farmersdelight:rice')
    replaceLT(['#forge:plastic', 'industrialforegoing:plastic'], 'pneumaticcraft:plastic')
    replaceLT(['#forge:coal_coke', 'thermal:coal_coke'], 'immersiveengineering:coal_coke')
    replaceLT(['#forge:bitumen', 'immersivepetroleum:bitumen'], 'thermal:bitumen')
    replaceLT(['#forge:slag', 'immersivepetroleum:slag'], 'thermal:slag')
    replaceLT(['#forge:storage_blocks/carrot', 'quark:carrot_crate', 'thermal:carrot_block'], 'farmersdelight:carrot_crate')
    replaceLT(['#forge:storage_blocks/gunpowder', 'quark:gunpowder_sack'], 'thermal:gunpowder_block')
    replaceLT(['#forge:silicon', 'ftbic:silicon'], 'ae2:silicon')
})