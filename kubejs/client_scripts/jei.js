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

JEIEvents.hideItems(event => {

    event.hide([
        '#alltheores:ore_hammers',
        'aquaculture:diamond_fillet_knife',
        'aquaculture:gold_fillet_knife',
        'aquaculture:iron_fillet_knife',
        'aquaculture:stone_fillet_knife',
        'aquaculture:wooden_fillet_knife',
        /botanypots:.+_(terracotta|concrete)(_hopper)?_botany_pot/,
        
        //Ores
        'create:zinc_ore', 
        'eidolon:lead_ore', 'immersiveengineering:ore_lead', 'thermal:lead_ore',
        'eidolon:silver_ore', 'immersiveengineering:ore_silver', 'darkerdepths:limestone_silver_ore', 'darkerdepths:aridrock_silver_ore', 'darkerdepths:silver_ore', 'iceandfire:silver_ore', 'occultism:silver_ore', 'thermal:silver_ore',
        'iceandfire:sapphire_ore',
        'immersiveengineering:ore_aluminum',
        'immersiveengineering:ore_nickel', 'thermal:nickel_ore',
        'immersiveengineering:ore_uranium', 
        'thermal:tin_ore',
        
        //Deepslate Ores
        'create:deepslate_zinc_ore', 
        'eidolon:deep_lead_ore', 'immersiveengineering:deepslate_ore_lead', 'thermal:deepslate_lead_ore',
        'eidolon:deep_silver_ore', 'immersiveengineering:deepslate_ore_silver', 'iceandfire:deepslate_silver_ore', 'occultism:silver_ore_deepslate', 'thermal:deepslate_silver_ore',
        'immersiveengineering:deepslate_ore_aluminum',
        'immersiveengineering:deepslate_ore_nickel', 'thermal:deepslate_nickel_ore',
        'immersiveengineering:deepslate_ore_uranium', 
        'thermal:deepslate_tin_ore',
        
        //Raw Materials
        'create:raw_zinc',
        'eidolon:raw_lead', 'immersiveengineering:raw_lead', 'thermal:raw_lead',
        'eidolon:raw_silver', 'immersiveengineering:raw_silver', 'darkerdepths:raw_silver', 'occultism:raw_silver', 'thermal:raw_silver',
        'immersiveengineering:raw_aluminum', 
        'immersiveengineering:raw_nickel', 'thermal:raw_nickel',
        'immersiveengineering:raw_uranium', 
        'thermal:raw_tin',
        
        //Raw Storage Blocks
        'create:raw_zinc_block', 
        'eidolon:raw_lead_block', 'immersiveengineering:raw_block_lead', 'thermal:raw_lead_block',
        'eidolon:raw_silver_block', 'immersiveengineering:raw_block_silver', 'darkerdepths:raw_silver_block', 'thermal:raw_silver_block',
        'immersiveengineering:raw_block_aluminum',
        'immersiveengineering:raw_block_nickel', 'thermal:raw_nickel_block', 
        'immersiveengineering:raw_block_uranium', 
        'thermal:raw_tin_block',
        
        //Ingots
        'create:brass_ingot', 
        'create:zinc_ingot', 
        'eidolon:lead_ingot', 'immersiveengineering:ingot_lead', 'thermal:lead_ingot',
        'eidolon:silver_ingot', 'immersiveengineering:ingot_silver', 'darkerdepths:silver_ingot', 'iceandfire:silver_ingot', 'occultism:silver_ingot', 'thermal:silver_ingot',
        'immersiveengineering:ingot_aluminum', 
        'immersiveengineering:ingot_constantan', 'thermal:constantan_ingot',
        'immersiveengineering:ingot_electrum', 'createaddition:electrum_ingot', 'thermal:electrum_ingot',
        'immersiveengineering:ingot_nickel', 'thermal:nickel_ingot',
        'immersiveengineering:ingot_steel',
        'immersiveengineering:ingot_uranium', 
        'thermal:bronze_ingot', 
        'thermal:enderium_ingot',
        'thermal:invar_ingot', 
        'thermal:lumium_ingot', 
        'thermal:signalum_ingot', 
        'thermal:tin_ingot',

        //Plates
        'create:brass_sheet', 
        'createdeco:netherite_sheet',
        'createdeco:zinc_sheet', 'createaddition:zinc_sheet', 
        'immersiveengineering:plate_aluminum', 
        'immersiveengineering:plate_constantan', 'thermal:constantan_plate',
        'immersiveengineering:plate_copper', 'create:copper_sheet', 'thermal:copper_plate',
        'immersiveengineering:plate_electrum', 'createaddition:electrum_sheet', 'thermal:electrum_plate',
        'immersiveengineering:plate_gold', 'create:golden_sheet', 'thermal:gold_plate',
        'immersiveengineering:plate_iron', 'create:iron_sheet', 'thermal:iron_plate',
        'immersiveengineering:plate_lead', 'thermal:lead_plate',
        'immersiveengineering:plate_nickel', 'thermal:nickel_plate',
        'immersiveengineering:plate_silver', 'thermal:silver_plate',
        'immersiveengineering:plate_steel',
        'immersiveengineering:plate_uranium', 
        'thermal:bronze_plate',
        'thermal:enderium_plate',
        'thermal:invar_plate',
        'thermal:lumium_plate',
        'thermal:signalum_plate',
        'thermal:tin_plate',
        
        //Gears
        'industrialforegoing:diamond_gear', 'thermal:diamond_gear',
        'industrialforegoing:gold_gear', 'thermal:gold_gear', 
        'industrialforegoing:iron_gear', 'thermal:iron_gear',
        'thermal:bronze_gear',
        'thermal:constantan_gear',
        'thermal:copper_gear',
        'thermal:electrum_gear',
        'thermal:enderium_gear',
        'thermal:invar_gear',
        'thermal:lead_gear',
        'thermal:lumium_gear',
        'thermal:nickel_gear',
        'thermal:signalum_gear',
        'thermal:silver_gear',
        'thermal:tin_gear',
        
        //Rods
        'createaddition:brass_rod', 
        'createaddition:copper_rod', 
        'createaddition:electrum_rod', 
        'createaddition:gold_rod', 
        'immersiveengineering:stick_aluminum', 
        'immersiveengineering:stick_iron', 'createaddition:iron_rod', 
        'immersiveengineering:stick_steel', 
        
        //Nuggets
        'create:brass_nugget',
        'create:zinc_nugget',
        'immersiveengineering:nugget_aluminum', 
        'immersiveengineering:nugget_constantan', 'thermal:constantan_nugget',
        'immersiveengineering:nugget_copper', 'create:copper_nugget', 'iceandfire:copper_nugget', 'thermal:copper_nugget',
        'immersiveengineering:nugget_electrum', 'createaddition:electrum_nugget', 'thermal:electrum_nugget',
        'immersiveengineering:nugget_lead', 'eidolon:lead_nugget', 'thermal:lead_nugget',
        'immersiveengineering:nugget_nickel', 'thermal:nickel_nugget',
        'immersiveengineering:nugget_silver', 'eidolon:silver_nugget', 'iceandfire:silver_nugget', 'occultism:silver_nugget', 'thermal:silver_nugget',
        'immersiveengineering:nugget_steel', 
        'immersiveengineering:nugget_uranium', 
        'thermal:bronze_nugget', 
        'thermal:enderium_nugget', 
        'thermal:invar_nugget', 
        'thermal:lumium_nugget', 
        'thermal:netherite_nugget',
        'thermal:signalum_nugget', 
        'thermal:tin_nugget',

        //Dusts
        'ae2:ender_dust',
        'createaddition:diamond_grit', 'thermal:diamond_dust',
        'immersiveengineering:dust_aluminum', 
        'immersiveengineering:dust_constantan', 'thermal:constantan_dust',
        'immersiveengineering:dust_copper', 'occultism:copper_dust', 'thermal:copper_dust',
        'immersiveengineering:dust_electrum', 'thermal:electrum_dust',
        'immersiveengineering:dust_gold', 'occultism:gold_dust', 'thermal:gold_dust',
        'immersiveengineering:dust_iron', 'occultism:iron_dust', 'thermal:iron_dust',
        'immersiveengineering:dust_lead', 'thermal:lead_dust',
        'immersiveengineering:dust_nickel', 'thermal:nickel_dust',
        'immersiveengineering:dust_silver', 'occultism:silver_dust', 'thermal:silver_dust',
        'immersiveengineering:dust_steel', 
        'immersiveengineering:dust_sulfur', 'eidolon:sulfur',
        'immersiveengineering:dust_uranium', 
        'immersiveengineering:dust_wood',
        'occultism:obsidian_dust',
        'thermal:bronze_dust',
        'thermal:enderium_dust',
        'thermal:invar_dust',
        'thermal:lumium_dust',
        'thermal:netherite_dust',
        'thermal:signalum_dust',
        'thermal:tin_dust',
        
        //Blocks
        'create:brass_block', 
        'create:zinc_block', 
        'iceandfire:sapphire_block',
        'immersiveengineering:storage_aluminum', 
        'immersiveengineering:storage_constantan', 'thermal:constantan_block',
        'immersiveengineering:storage_electrum', 'thermal:electrum_block',
        'immersiveengineering:storage_lead', 'eidolon:lead_block', 'thermal:lead_block',
        'immersiveengineering:storage_nickel', 'thermal:nickel_block',
        'immersiveengineering:storage_silver', 'eidolon:silver_block', 'darkerdepths:silver_block', 'iceandfire:silver_block', 'occultism:silver_block', 'thermal:silver_block',
        'immersiveengineering:storage_steel',
        'immersiveengineering:storage_uranium', 
        'thermal:bronze_block', 
        'thermal:coal_coke_block',
        'thermal:enderium_block',
        'thermal:invar_block', 
        'thermal:lumium_block', 
        'thermal:signalum_block', 
        'thermal:tin_block',

        //Wires
        'createaddition:copper_wire',
        'createaddition:electrum_wire', 
        
        //Gems
        'iceandfire:sapphire_gem',
        
        //Others
        'ae2:facade',
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
        'bhc:wither_bone',
        'immersivepetroleum:bitumen',
        'immersivepetroleum:slag',
        Item.of('immersiveengineering:blueprint', '{blueprint:"electrode"}'),
        'industrialforegoing:plastic',
        'sushigocrafting:rice_seeds',
        'sushigocrafting:rice',
        'thermal:coal_coke',
        'ars_nouveau:bucket_of_source',
        'createaddition:seed_oil_bucket',
        'immersiveengineering:biodiesel_bucket',
        'immersivepetroleum:diesel_bucket',
        'immersivepetroleum:gasoline_bucket',
        'immersivepetroleum:kerosene_bucket',
        'immersivepetroleum:lubricant_bucket',
        'pneumaticcraft:ethanol_bucket',
        'pneumaticcraft:oil_bucket',
        'pneumaticcraft:vegetable_oil_bucket',
        'thermal:crude_oil_bucket',
        'thermal:creosote_bucket'
    ])
})

JEIEvents.hideFluids(event => {
    event.hide('cofh_core:honey')
    event.hide('createaddition:seed_oil')
    event.hide('immersiveengineering:biodiesel')
    event.hide('immersivepetroleum:diesel')
    event.hide('immersivepetroleum:gasoline')
    event.hide('immersivepetroleum:kerosene')
    event.hide('immersivepetroleum:lubricant')
    event.hide('pneumaticcraft:ethanol')
    event.hide('pneumaticcraft:oil')
    event.hide('pneumaticcraft:vegetable_oil')
    event.hide('thermal:crude_oil')
    event.hide('thermal:creosote')
})

JEIEvents.removeCategories(event => {

    event.remove([
        'twilightforest:uncrafting'
    ])
    
})

JEIEvents.addItems(event => {

    event.add([
        'minecraft:dragon_egg',
        Item.of('immersiveengineering:blueprint', '{blueprint:"specialBullet"}'),
        Item.of('immersiveengineering:blueprint', '{blueprint:"bullet"}'),
        Item.of('immersiveengineering:blueprint', '{blueprint:"molds"}'),
        Item.of('immersiveengineering:blueprint', '{blueprint:"bannerpatterns"}'),
        Item.of('immersiveengineering:blueprint', '{blueprint:"components"}'),
        Item.of('immersiveengineering:blueprint', '{blueprint:"appliedComponents"}')
    ])
})

JEIEvents.information(event => {

    event.addItem('ae2:elemental_processor_press', Component.translatable("gui.ae2.inWorldCraftingPresses"))
})