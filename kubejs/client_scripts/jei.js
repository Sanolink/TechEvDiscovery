//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.3.0

JEIEvents.hideItems(event => {

    event.hide([
        '#alltheores:ore_hammers',
        /botanypots:.+_(terracotta|concrete)(_hopper)?_botany_pot/,
        'aquaculture:wooden_fillet_knife',
        'aquaculture:stone_fillet_knife',
        'aquaculture:iron_fillet_knife',
        'aquaculture:gold_fillet_knife',
        'aquaculture:diamond_fillet_knife',
        
        //Ores
        'eidolon:silver_ore', 'immersiveengineering:ore_silver', 'darkerdepths:limestone_silver_ore', 'darkerdepths:aridrock_silver_ore', 'darkerdepths:silver_ore', 'iceandfire:silver_ore', 'occultism:silver_ore', 'thermal:silver_ore',
        'eidolon:lead_ore', 'immersiveengineering:ore_lead', 'thermal:lead_ore',
        'immersiveengineering:ore_uranium', 
        'immersiveengineering:ore_nickel', 'thermal:nickel_ore',
        'immersiveengineering:ore_aluminum',
        'create:zinc_ore', 
        'iceandfire:sapphire_ore',
        'thermal:tin_ore',
        
        //Deepslate Ores
        'eidolon:deep_silver_ore', 'immersiveengineering:deepslate_ore_silver', 'iceandfire:deepslate_silver_ore', 'occultism:silver_ore_deepslate', 'thermal:deepslate_silver_ore',
        'eidolon:deep_lead_ore', 'immersiveengineering:deepslate_ore_lead', 'thermal:deepslate_lead_ore',
        'immersiveengineering:deepslate_ore_uranium', 
        'immersiveengineering:deepslate_ore_nickel', 'thermal:deepslate_nickel_ore',
        'immersiveengineering:deepslate_ore_aluminum',
        'create:deepslate_zinc_ore', 
        'thermal:deepslate_tin_ore',
        
        //Raw Materials
        'eidolon:raw_silver', 'immersiveengineering:raw_silver', 'darkerdepths:raw_silver', 'occultism:raw_silver', 'thermal:raw_silver',
        'eidolon:raw_lead', 'immersiveengineering:raw_lead', 'thermal:raw_lead',
        'immersiveengineering:raw_uranium', 
        'immersiveengineering:raw_nickel', 'thermal:raw_nickel',
        'immersiveengineering:raw_aluminum', 
        'create:raw_zinc',
        'thermal:raw_tin',
        
        //Raw Storage Blocks
        'eidolon:raw_silver_block', 'immersiveengineering:raw_block_silver', 'darkerdepths:raw_silver_block', 'thermal:raw_silver_block',
        'eidolon:raw_lead_block', 'immersiveengineering:raw_block_lead', 'thermal:raw_lead_block',
        'immersiveengineering:raw_block_uranium', 
        'immersiveengineering:raw_block_nickel', 'thermal:raw_nickel_block', 
        'immersiveengineering:raw_block_aluminum',
        'create:raw_zinc_block', 
        'thermal:raw_tin_block',
        
        //Ingots
        'eidolon:silver_ingot', 'immersiveengineering:ingot_silver', 'darkerdepths:silver_ingot', 'iceandfire:silver_ingot', 'occultism:silver_ingot', 'thermal:silver_ingot',
        'eidolon:lead_ingot', 'immersiveengineering:ingot_lead', 'thermal:lead_ingot',
        'immersiveengineering:ingot_constantan', 'thermal:constantan_ingot',
        'immersiveengineering:ingot_electrum', 'createaddition:electrum_ingot', 'thermal:electrum_ingot',
        'immersiveengineering:ingot_aluminum', 
        'immersiveengineering:ingot_uranium', 
        'immersiveengineering:ingot_nickel', 'thermal:nickel_ingot',
        'create:zinc_ingot', 
        'create:brass_ingot', 
        'immersiveengineering:ingot_steel',
        'thermal:tin_ingot',
        'thermal:bronze_ingot', 
        'thermal:invar_ingot', 
        'thermal:signalum_ingot', 
        'thermal:lumium_ingot', 
        'thermal:enderium_ingot',

        //Plates
        'immersiveengineering:plate_constantan', 'thermal:constantan_plate',
        'immersiveengineering:plate_aluminum', 
        'immersiveengineering:plate_uranium', 
        'immersiveengineering:plate_nickel', 'thermal:nickel_plate',
        'immersiveengineering:plate_silver', 'thermal:silver_plate',
        'immersiveengineering:plate_lead', 'thermal:lead_plate',
        'immersiveengineering:plate_copper', 'create:copper_sheet', 'thermal:copper_plate',
        'immersiveengineering:plate_gold', 'create:golden_sheet', 'thermal:gold_plate',
        'immersiveengineering:plate_iron', 'create:iron_sheet', 'thermal:iron_plate',
        'immersiveengineering:plate_electrum', 'createaddition:electrum_sheet', 'thermal:electrum_plate',
        'immersiveengineering:plate_steel',
        'createdeco:zinc_sheet', 'createaddition:zinc_sheet', 
        'create:brass_sheet', 
        'thermal:tin_plate',
        'thermal:bronze_plate',
        'thermal:invar_plate',
        'thermal:lumium_plate',
        'thermal:signalum_plate',
        'thermal:enderium_plate',
        'createdeco:netherite_sheet',
        
        //Gears
        'industrialforegoing:iron_gear', 'thermal:iron_gear',
        'industrialforegoing:gold_gear', 'thermal:gold_gear', 
        'industrialforegoing:diamond_gear', 'thermal:diamond_gear',
        'thermal:copper_gear',
        'thermal:tin_gear',
        'thermal:lead_gear',
        'thermal:silver_gear',
        'thermal:nickel_gear',
        'thermal:bronze_gear',
        'thermal:invar_gear',
        'thermal:electrum_gear',
        'thermal:constantan_gear',
        'thermal:lumium_gear',
        'thermal:signalum_gear',
        'thermal:enderium_gear',
        
        //Rods
        'immersiveengineering:stick_iron', 'createaddition:iron_rod', 
        'immersiveengineering:stick_aluminum', 
        'immersiveengineering:stick_steel', 
        'createaddition:electrum_rod', 
        'createaddition:brass_rod', 
        'createaddition:gold_rod', 
        'createaddition:copper_rod', 
        
        //Nuggets
        'immersiveengineering:nugget_constantan', 'thermal:constantan_nugget',
        'immersiveengineering:nugget_uranium', 
        'immersiveengineering:nugget_nickel', 'thermal:nickel_nugget',
        'immersiveengineering:nugget_steel', 
        'immersiveengineering:nugget_aluminum', 
        'immersiveengineering:nugget_silver', 'eidolon:silver_nugget', 'iceandfire:silver_nugget', 'occultism:silver_nugget', 'thermal:silver_nugget',
        'immersiveengineering:nugget_lead', 'eidolon:lead_nugget', 'thermal:lead_nugget',
        'immersiveengineering:nugget_electrum', 'createaddition:electrum_nugget', 'thermal:electrum_nugget',
        'immersiveengineering:nugget_copper', 'create:copper_nugget', 'iceandfire:copper_nugget', 'thermal:copper_nugget',
        'create:zinc_nugget',
        'create:brass_nugget',
        'thermal:tin_nugget',
        'thermal:bronze_nugget', 
        'thermal:invar_nugget', 
        'thermal:enderium_nugget', 
        'thermal:lumium_nugget', 
        'thermal:signalum_nugget', 
        'thermal:netherite_nugget',

        //Dusts
        'immersiveengineering:dust_silver', 'occultism:silver_dust', 'thermal:silver_dust',
        'immersiveengineering:dust_nickel', 'thermal:nickel_dust',
        'immersiveengineering:dust_uranium', 
        'immersiveengineering:dust_constantan', 'thermal:constantan_dust',
        'immersiveengineering:dust_electrum', 'thermal:electrum_dust',
        'immersiveengineering:dust_steel', 
        'immersiveengineering:dust_iron', 'occultism:iron_dust', 'thermal:iron_dust',
        'immersiveengineering:dust_gold', 'occultism:gold_dust', 'thermal:gold_dust',
        'immersiveengineering:dust_sulfur', 'eidolon:sulfur',
        'immersiveengineering:dust_copper', 'occultism:copper_dust', 'thermal:copper_dust',
        'immersiveengineering:dust_aluminum', 
        'immersiveengineering:dust_lead', 'thermal:lead_dust',
        'createaddition:diamond_grit', 'thermal:diamond_dust',
        'occultism:obsidian_dust',
        'immersiveengineering:dust_wood',
        'ae2:ender_dust',
        'thermal:tin_dust',
        'thermal:bronze_dust',
        'thermal:signalum_dust',
        'thermal:lumium_dust',
        'thermal:enderium_dust',
        'thermal:netherite_dust',
        'thermal:invar_dust',
        
        //Blocks
        'immersiveengineering:storage_electrum', 'thermal:electrum_block',
        'immersiveengineering:storage_constantan', 'thermal:constantan_block',
        'immersiveengineering:storage_uranium', 
        'immersiveengineering:storage_nickel', 'thermal:nickel_block',
        'immersiveengineering:storage_aluminum', 
        'immersiveengineering:storage_lead', 'eidolon:lead_block', 'thermal:lead_block',
        'immersiveengineering:storage_silver', 'eidolon:silver_block', 'darkerdepths:silver_block', 'iceandfire:silver_block', 'occultism:silver_block', 'thermal:silver_block',
        'immersiveengineering:storage_steel',
        'create:zinc_block', 
        'create:brass_block', 
        'iceandfire:sapphire_block',
        'thermal:tin_block',
        'thermal:bronze_block', 
        'thermal:invar_block', 
        'thermal:signalum_block', 
        'thermal:lumium_block', 
        'thermal:enderium_block',

        //Wires
        'createaddition:electrum_wire', 
        'createaddition:copper_wire',
        
        //Gems
        'iceandfire:sapphire_gem',
        
        //Others
        'sushigocrafting:rice',
        'sushigocrafting:rice_seeds',
        'bhc:wither_bone',
        'industrialforegoing:plastic',
        'thermal:coal_coke',
        'immersivepetroleum:bitumen',
        'immersivepetroleum:slag'
    ])
})

JEIEvents.removeCategories(event => {

    event.remove([
        'twilightforest:uncrafting'
    ])
    
})

JEIEvents.addItems(event => {

    event.add([
        'minecraft:dragon_egg'
    ])
})
