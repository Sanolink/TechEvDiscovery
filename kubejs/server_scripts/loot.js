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
    replaceLT(['create:zinc_ore'], 'alltheores:zinc_ore')
    replaceLT(['eidolon:lead_ore', 'immersiveengineering:ore_lead', 'thermal:lead_ore'], 'alltheores:lead_ore')
    replaceLT(['eidolon:silver_ore', 'immersiveengineering:ore_silver', 'darkerdepths:limestone_silver_ore', 'darkerdepths:aridrock_silver_ore', 'darkerdepths:silver_ore', 'iceandfire:silver_ore', 'occultism:silver_ore', 'thermal:silver_ore'], 'alltheores:silver_ore')
    replaceLT(['iceandfire:sapphire_ore'], 'alltheores:sapphire_ore')
    replaceLT(['immersiveengineering:ore_aluminum'], 'alltheores:aluminum_ore')
    replaceLT(['immersiveengineering:ore_nickel'], 'alltheores:nickel_ore', 'thermal:nickel_ore')
    replaceLT(['immersiveengineering:ore_uranium'], 'alltheores:uranium_ore')
    replaceLT(['thermal:tin_ore'], 'alltheores:tin_ore')
    
    //Deepslate Ores
    replaceLT(['create:deepslate_zinc_ore'], 'alltheores:deepslate_zinc_ore')
    replaceLT(['eidolon:deep_lead_ore', 'immersiveengineering:deepslate_ore_lead', 'thermal:deepslate_lead_ore'], 'alltheores:deepslate_lead_ore')
    replaceLT(['eidolon:deep_silver_ore', 'immersiveengineering:deepslate_ore_silver', 'iceandfire:deepslate_silver_ore', 'occultism:silver_ore_deepslate', 'thermal:deepslate_silver_ore'], 'alltheores:deepslate_silver_ore')
    replaceLT(['immersiveengineering:deepslate_ore_aluminum'], 'alltheores:deepslate_aluminum_ore')
    replaceLT(['immersiveengineering:deepslate_ore_nickel', 'thermal:deepslate_nickel_ore'], 'alltheores:deepslate_nickel_ore')
    replaceLT(['immersiveengineering:deepslate_ore_uranium'], 'alltheores:deepslate_uranium_ore')
    replaceLT(['thermal:deepslate_tin_ore'], 'alltheores:deepslate_tin_ore')

    //Raw Materials
    replaceLT(['create:raw_zinc'], 'alltheores:raw_zinc')
    replaceLT(['eidolon:raw_lead', 'immersiveengineering:raw_lead', 'thermal:raw_lead'], 'alltheores:raw_lead')
    replaceLT(['eidolon:raw_silver', 'immersiveengineering:raw_silver', 'darkerdepths:raw_silver', 'occultism:raw_silver', 'thermal:raw_silver'], 'alltheores:raw_silver')
    replaceLT(['immersiveengineering:raw_aluminum'], 'alltheores:raw_aluminum')
    replaceLT(['immersiveengineering:raw_nickel', 'thermal:raw_nickel'], 'alltheores:raw_nickel')
    replaceLT(['immersiveengineering:raw_uranium'], 'alltheores:raw_uranium')
    replaceLT(['thermal:raw_tin'], 'alltheores:raw_tin')
    
    //Raw Storage Blocks
    replaceLT(['#forge:storage_blocks/raw_aluminum', 'immersiveengineering:raw_block_aluminum'], 'alltheores:raw_aluminum_block')
    replaceLT(['#forge:storage_blocks/raw_lead', 'eidolon:raw_lead_block', 'immersiveengineering:raw_block_lead', 'thermal:raw_lead_block'], 'alltheores:raw_lead_block')
    replaceLT(['#forge:storage_blocks/raw_nickel', 'immersiveengineering:raw_block_nickel', 'thermal:raw_nickel_block'], 'alltheores:raw_nickel_block')
    replaceLT(['#forge:storage_blocks/raw_silver', 'eidolon:raw_silver_block', 'immersiveengineering:raw_block_silver', 'darkerdepths:raw_silver_block', 'thermal:raw_silver_block'], 'alltheores:raw_silver_block')
    replaceLT(['#forge:storage_blocks/raw_tin', 'thermal:raw_tin_block'], 'alltheores:raw_tin_block')
    replaceLT(['#forge:storage_blocks/raw_uranium', 'immersiveengineering:raw_block_uranium'], 'alltheores:raw_uranium_block')
    replaceLT(['#forge:storage_blocks/raw_zinc', 'create:raw_zinc_block'], 'alltheores:raw_zinc_block')
    
    //Ingots
    replaceLT(['#forge:ingots/aluminum', 'immersiveengineering:ingot_aluminum'], 'alltheores:aluminum_ingot')
    replaceLT(['#forge:ingots/brass', 'create:brass_ingot'], 'alltheores:brass_ingot')
    replaceLT(['#forge:ingots/bronze', 'thermal:bronze_ingot'], 'alltheores:bronze_ingot')
    replaceLT(['#forge:ingots/constantan', 'immersiveengineering:ingot_constantan', 'thermal:constantan_ingot'], 'alltheores:constantan_ingot')
    replaceLT(['#forge:ingots/electrum', 'immersiveengineering:ingot_electrum', 'createaddition:electrum_ingot', 'thermal:electrum_ingot'], 'alltheores:electrum_ingot')
    replaceLT(['#forge:ingots/enderium', 'thermal:enderium_ingot'], 'alltheores:enderium_ingot')
    replaceLT(['#forge:ingots/invar', 'thermal:invar_ingot'], 'alltheores:invar_ingot')
    replaceLT(['#forge:ingots/lead', 'eidolon:lead_ingot', 'immersiveengineering:ingot_lead', 'thermal:lead_ingot'], 'alltheores:lead_ingot')
    replaceLT(['#forge:ingots/lumium', 'thermal:lumium_ingot'], 'alltheores:lumium_ingot')
    replaceLT(['#forge:ingots/nickel', 'immersiveengineering:ingot_nickel', 'thermal:nickel_ingot'], 'alltheores:nickel_ingot')
    replaceLT(['#forge:ingots/signalum', 'thermal:signalum_ingot'], 'alltheores:signalum_ingot')
    replaceLT(['#forge:ingots/silver', 'eidolon:silver_ingot', 'immersiveengineering:ingot_silver', 'darkerdepths:silver_ingot', 'iceandfire:silver_ingot', 'occultism:silver_ingot', 'thermal:silver_ingot'], 'alltheores:silver_ingot')
    replaceLT(['#forge:ingots/steel', 'immersiveengineering:ingot_steel'], 'alltheores:steel_ingot')
    replaceLT(['#forge:ingots/tin', 'thermal:tin_ingot'], 'alltheores:tin_ingot')
    replaceLT(['#forge:ingots/uranium', 'immersiveengineering:ingot_uranium'], 'alltheores:uranium_ingot')
    replaceLT(['#forge:ingots/zinc', 'create:zinc_ingot'], 'alltheores:zinc_ingot')

    //Plates
    replaceLT(['#forge:plates/aluminum', 'immersiveengineering:plate_aluminum'], 'alltheores:aluminum_plate')
    replaceLT(['#forge:plates/brass', 'create:brass_sheet'], 'alltheores:brass_plate')
    replaceLT(['#forge:plates/bronze', 'thermal:bronze_plate'], 'alltheores:bronze_plate')
    replaceLT(['#forge:plates/constantan', 'immersiveengineering:plate_constantan', 'thermal:constantan_plate'], 'alltheores:constantan_plate')
    replaceLT(['#forge:plates/copper', 'create:copper_sheet', 'immersiveengineering:plate_copper', 'thermal:copper_plate'], 'alltheores:copper_plate')
    replaceLT(['#forge:plates/electrum', 'immersiveengineering:plate_electrum', 'createaddition:electrum_sheet', 'thermal:electrum_plate'], 'alltheores:electrum_plate')
    replaceLT(['#forge:plates/enderium', 'thermal:enderium_plate'], 'alltheores:enderium_plate')
    replaceLT(['#forge:plates/gold', 'create:golden_sheet', 'immersiveengineering:plate_gold', 'thermal:gold_plate'], 'alltheores:gold_plate')
    replaceLT(['#forge:plates/invar', 'thermal:invar_plate'], 'alltheores:invar_plate')
    replaceLT(['#forge:plates/iron', 'create:iron_sheet', 'immersiveengineering:plate_iron', 'thermal:iron_plate'], 'alltheores:iron_plate')
    replaceLT(['#forge:plates/lead', 'immersiveengineering:plate_lead', 'thermal:lead_plate'], 'alltheores:lead_plate')
    replaceLT(['#forge:plates/lumium', 'thermal:lumium_plate'], 'alltheores:lumium_plate')
    replaceLT(['#forge:plates/netherite', 'createdeco:netherite_sheet'], 'thermal:netherite_plate')
    replaceLT(['#forge:plates/nickel', 'immersiveengineering:plate_nickel', 'thermal:nickel_plate'], 'alltheores:nickel_plate')
    replaceLT(['#forge:plates/signalum', 'thermal:signalum_plate'], 'alltheores:signalum_plate')
    replaceLT(['#forge:plates/silver', 'immersiveengineering:plate_silver', 'thermal:silver_plate'], 'alltheores:silver_plate')
    replaceLT(['#forge:plates/steel', 'immersiveengineering:plate_steel'], 'alltheores:steel_plate')
    replaceLT(['#forge:plates/tin', 'thermal:tin_plate'], 'alltheores:tin_plate')
    replaceLT(['#forge:plates/uranium', 'immersiveengineering:plate_uranium'], 'alltheores:uranium_plate')
    replaceLT(['#forge:plates/zinc', 'createdeco:zinc_sheet', 'createaddition:zinc_sheet'], 'alltheores:zinc_plate')
    
    //Gears
    replaceLT(['#forge:gears/bronze', 'thermal:bronze_gear'], 'alltheores:bronze_gear')
    replaceLT(['#forge:gears/constantan', 'thermal:constantan_gear'], 'alltheores:constantan_gear')
    replaceLT(['#forge:gears/copper', 'thermal:copper_gear'], 'alltheores:copper_gear')
    replaceLT(['#forge:gears/diamond', 'industrialforegoing:diamond_gear', 'thermal:diamond_gear'], 'alltheores:diamond_gear')
    replaceLT(['#forge:gears/electrum', 'thermal:electrum_gear'], 'alltheores:electrum_gear')
    replaceLT(['#forge:gears/enderium', 'thermal:enderium_gear'], 'alltheores:enderium_gear')
    replaceLT(['#forge:gears/gold', 'industrialforegoing:gold_gear', 'thermal:gold_gear'], 'alltheores:gold_gear')
    replaceLT(['#forge:gears/invar', 'thermal:invar_gear'], 'alltheores:invar_gear')
    replaceLT(['#forge:gears/iron', 'industrialforegoing:iron_gear', 'thermal:iron_gear'], 'alltheores:iron_gear')
    replaceLT(['#forge:gears/lead', 'thermal:lead_gear'], 'alltheores:lead_gear')
    replaceLT(['#forge:gears/lumium', 'thermal:lumium_gear'], 'alltheores:lumium_gear')
    replaceLT(['#forge:gears/nickel', 'thermal:nickel_gear'], 'alltheores:nickel_gear')
    replaceLT(['#forge:gears/signalum', 'thermal:signalum_gear'], 'alltheores:signalum_gear')
    replaceLT(['#forge:gears/silver', 'thermal:silver_gear'], 'alltheores:silver_gear')
    replaceLT(['#forge:gears/tin', 'thermal:tin_gear'], 'alltheores:tin_gear')
    
    //Rods
    replaceLT(['#forge:rods/aluminum', 'immersiveengineering:stick_aluminum'], 'alltheores:aluminum_rod')
    replaceLT(['#forge:rods/brass', 'createaddition:brass_rod'], 'alltheores:brass_rod')
    replaceLT(['#forge:rods/copper', 'createaddition:copper_rod'], 'alltheores:copper_rod')
    replaceLT(['#forge:rods/electrum', 'createaddition:electrum_rod'], 'alltheores:electrum_rod')
    replaceLT(['#forge:rods/gold', 'createaddition:gold_rod'], 'alltheores:gold_rod')
    replaceLT(['#forge:rods/iron', 'createaddition:iron_rod', 'immersiveengineering:stick_iron'], 'alltheores:iron_rod')
    replaceLT(['#forge:rods/steel', 'immersiveengineering:stick_steel'], 'alltheores:steel_rod')
    
    //Nuggets
    replaceLT(['#forge:nuggets/aluminum', 'immersiveengineering:nugget_aluminum'], 'alltheores:aluminum_nugget')
    replaceLT(['#forge:nuggets/brass', 'create:brass_nugget'], 'alltheores:brass_nugget')
    replaceLT(['#forge:nuggets/bronze', 'thermal:bronze_nugget'], 'alltheores:bronze_nugget')
    replaceLT(['#forge:nuggets/constantan', 'immersiveengineering:nugget_constantan', 'thermal:constantan_nugget'], 'alltheores:constantan_nugget')
    replaceLT(['#forge:nuggets/copper', 'create:copper_nugget', 'immersiveengineering:nugget_copper', 'iceandfire:copper_nugget', 'thermal:copper_nugget'], 'alltheores:copper_nugget')
    replaceLT(['#forge:nuggets/electrum', 'createaddition:electrum_nugget', 'immersiveengineering:nugget_electrum'], 'alltheores:electrum_nugget')
    replaceLT(['#forge:nuggets/electrum', 'thermal:electrum_nugget'], 'alltheores:electrum_nugget')
    replaceLT(['#forge:nuggets/enderium', 'thermal:enderium_nugget'], 'alltheores:enderium_nugget')
    replaceLT(['#forge:nuggets/invar', 'thermal:invar_nugget'], 'alltheores:invar_nugget')
    replaceLT(['#forge:nuggets/lead', 'eidolon:lead_nugget', 'immersiveengineering:nugget_lead', 'thermal:lead_nugget'], 'alltheores:lead_nugget')
    replaceLT(['#forge:nuggets/lumium', 'thermal:lumium_nugget'], 'alltheores:lumium_nugget')
    replaceLT(['#forge:nuggets/netherite', 'thermal:netherite_nugget'], 'createdeco:netherite_nugget')
    replaceLT(['#forge:nuggets/nickel', 'immersiveengineering:nugget_nickel', 'thermal:nickel_nugget'], 'alltheores:nickel_nugget')
    replaceLT(['#forge:nuggets/signalum', 'thermal:signalum_nugget'], 'alltheores:signalum_nugget')
    replaceLT(['#forge:nuggets/silver', 'eidolon:silver_nugget', 'immersiveengineering:nugget_silver', 'iceandfire:silver_nugget', 'occultism:silver_nugget', 'thermal:silver_nugget'], 'alltheores:silver_nugget')
    replaceLT(['#forge:nuggets/steel', 'immersiveengineering:nugget_steel'], 'alltheores:steel_nugget')
    replaceLT(['#forge:nuggets/tin', 'thermal:tin_nugget'], 'alltheores:tin_nugget')
    replaceLT(['#forge:nuggets/uranium', 'immersiveengineering:nugget_uranium'], 'alltheores:uranium_nugget')
    replaceLT(['#forge:nuggets/zinc', 'create:zinc_nugget'], 'alltheores:zinc_nugget')

    //Dusts
    replaceLT(['#forge:dusts/aluminum', 'immersiveengineering:dust_aluminum'], 'alltheores:aluminum_dust')
    replaceLT(['#forge:dusts/bronze', 'thermal:bronze_dust'], 'alltheores:bronze_dust')
    replaceLT(['#forge:dusts/constantan', 'immersiveengineering:dust_constantan', 'thermal:constantan_dust'], 'alltheores:constantan_dust')
    replaceLT(['#forge:dusts/copper', 'immersiveengineering:dust_copper', 'occultism:copper_dust', 'thermal:copper_dust'], 'alltheores:copper_dust')
    replaceLT(['#forge:dusts/diamond', 'createaddition:diamond_grit', 'thermal:diamond_dust'], 'alltheores:diamond_dust')
    replaceLT(['#forge:dusts/electrum', 'immersiveengineering:dust_electrum', 'thermal:electrum_dust'], 'alltheores:electrum_dust')
    replaceLT(['#forge:dusts/ender_pearl', 'ae2:ender_dust'], 'thermal:ender_pearl_dust')
    replaceLT(['#forge:dusts/enderium', 'thermal:enderium_dust'], 'alltheores:enderium_dust')
    replaceLT(['#forge:dusts/gold', 'immersiveengineering:dust_gold', 'occultism:gold_dust', 'thermal:gold_dust'], 'alltheores:gold_dust')
    replaceLT(['#forge:dusts/invar', 'thermal:invar_dust'], 'alltheores:invar_dust')
    replaceLT(['#forge:dusts/iron', 'immersiveengineering:dust_iron', 'occultism:iron_dust', 'thermal:iron_dust'], 'alltheores:iron_dust')
    replaceLT(['#forge:dusts/lead', 'immersiveengineering:dust_lead', 'thermal:lead_dust'], 'alltheores:lead_dust')
    replaceLT(['#forge:dusts/lumium', 'thermal:lumium_dust'], 'alltheores:lumium_dust')
    replaceLT(['#forge:dusts/netherite', 'thermal:netherite_dust'], 'alltheores:netherite_dust')
    replaceLT(['#forge:dusts/nickel', 'immersiveengineering:dust_nickel', 'thermal:nickel_dust'], 'alltheores:nickel_dust')
    replaceLT(['#forge:dusts/obsidian', 'occultism:obsidian_dust'], 'occultism:obsidian_dust')
    replaceLT(['#forge:dusts/signalum', 'thermal:signalum_dust'], 'alltheores:signalum_dust')
    replaceLT(['#forge:dusts/silver', 'immersiveengineering:dust_silver', 'occultism:silver_dust', 'thermal:silver_dust'], 'alltheores:silver_dust')
    replaceLT(['#forge:dusts/steel', 'immersiveengineering:dust_steel'], 'alltheores:steel_dust')
    replaceLT(['#forge:dusts/sulfur', 'immersiveengineering:dust_sulfur', 'eidolon:sulfur'], 'thermal:sulfur_dust')
    replaceLT(['#forge:dusts/tin', 'thermal:tin_dust'], 'alltheores:tin_dust')
    replaceLT(['#forge:dusts/uranium', 'immersiveengineering:dust_uranium'], 'alltheores:uranium_dust')
    replaceLT(['#forge:dusts/wood', 'immersiveengineering:dust_wood'], 'thermal:sawdust')
    
    //Blocks
    replaceLT(['#forge:storage_blocks/aluminum', 'immersiveengineering:storage_aluminum'], 'alltheores:aluminum_block')
    replaceLT(['#forge:storage_blocks/brass', 'create:brass_block'], 'alltheores:brass_block')
    replaceLT(['#forge:storage_blocks/bronze', 'thermal:bronze_block'], 'alltheores:bronze_block')
    replaceLT(['#forge:storage_blocks/coal_coke', 'thermal:coal_coke_block'], 'immersiveengineering:coke')
    replaceLT(['#forge:storage_blocks/constantan', 'immersiveengineering:storage_constantan', 'thermal:constantan_block'], 'alltheores:constantan_block')
    replaceLT(['#forge:storage_blocks/electrum', 'immersiveengineering:storage_electrum', 'thermal:electrum_block'], 'alltheores:electrum_block')
    replaceLT(['#forge:storage_blocks/enderium', 'thermal:enderium_block'], 'alltheores:enderium_block')
    replaceLT(['#forge:storage_blocks/invar', 'thermal:invar_block'], 'alltheores:invar_block')
    replaceLT(['#forge:storage_blocks/lead', 'immersiveengineering:storage_lead', 'eidolon:lead_block', 'thermal:lead_block'], 'alltheores:lead_block')
    replaceLT(['#forge:storage_blocks/lumium', 'thermal:lumium_block'], 'alltheores:lumium_block')
    replaceLT(['#forge:storage_blocks/nickel', 'immersiveengineering:storage_nickel', 'thermal:nickel_block'], 'alltheores:nickel_block')
    replaceLT(['#forge:storage_blocks/sapphire', 'iceandfire:sapphire_block'], 'alltheores:sapphire_block')
    replaceLT(['#forge:storage_blocks/signalum', 'thermal:signalum_block'], 'alltheores:signalum_block')
    replaceLT(['#forge:storage_blocks/silver', 'immersiveengineering:storage_silver', 'eidolon:silver_block', 'darkerdepths:silver_block', 'iceandfire:silver_block', 'occultism:silver_block', 'thermal:silver_block'], 'alltheores:silver_block')
    replaceLT(['#forge:storage_blocks/steel', 'immersiveengineering:storage_steel'], 'alltheores:steel_block')
    replaceLT(['#forge:storage_blocks/tin', 'thermal:tin_block'], 'alltheores:tin_block')
    replaceLT(['#forge:storage_blocks/uranium', 'immersiveengineering:storage_uranium'], 'alltheores:uranium_block')
    replaceLT(['#forge:storage_blocks/zinc', 'create:zinc_block'], 'alltheores:zinc_block')

    //Wires
    replaceLT(['#forge:wires/copper', 'createaddition:copper_wire'], 'immersiveengineering:wire_copper')
    replaceLT(['#forge:wires/electrum', 'createaddition:electrum_wire'], 'immersiveengineering:wire_electrum')
    
    //Gems
    replaceLT(['#forge:gems/sapphire', 'thermal:sapphire', 'iceandfire:sapphire_gem'], 'alltheores:sapphire')
    replaceLT(['#forge:gems/ruby', 'thermal:ruby'], 'alltheores:ruby')
    
    //Others
    replaceLT(['#forge:crops/rice', 'sushigocrafting:rice', 'sushigocrafting:rice_seeds'], 'farmersdelight:rice')
    replaceLT(['#forge:plastic', 'industrialforegoing:plastic'], 'pneumaticcraft:plastic')
    replaceLT(['#forge:coal_coke', 'thermal:coal_coke'], 'immersiveengineering:coal_coke')
    replaceLT(['#forge:bitumen', 'immersivepetroleum:bitumen'], 'thermal:bitumen')
    replaceLT(['#forge:slag', 'immersivepetroleum:slag'], 'thermal:slag')
})