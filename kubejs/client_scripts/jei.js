//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

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
        'eidolon:silver_ore', 'immersiveengineering:ore_silver', 'darkerdepths:limestone_silver_ore', 'darkerdepths:aridrock_silver_ore', 'darkerdepths:silver_ore',
        'eidolon:lead_ore', 'immersiveengineering:ore_lead', 
        'immersiveengineering:ore_uranium', 
        'immersiveengineering:ore_nickel', 
        'immersiveengineering:ore_aluminum',
        'create:zinc_ore', 
        //Deepslate Ores
        'eidolon:deep_silver_ore', 'immersiveengineering:deepslate_ore_silver', 
        'eidolon:deep_lead_ore', 'immersiveengineering:deepslate_ore_lead',
        'immersiveengineering:deepslate_ore_uranium', 
        'immersiveengineering:deepslate_ore_nickel', 
        'immersiveengineering:deepslate_ore_aluminum',
        'create:deepslate_zinc_ore', 
        //Raw Materials
        'eidolon:raw_silver', 'immersiveengineering:raw_silver', 'darkerdepths:raw_silver',
        'eidolon:raw_lead', 'immersiveengineering:raw_lead', 
        'immersiveengineering:raw_uranium', 
        'immersiveengineering:raw_nickel', 
        'immersiveengineering:raw_aluminum', 
        'create:raw_zinc',
        //Raw Storage Blocks
        'eidolon:raw_silver_block', 'immersiveengineering:raw_block_silver', 'darkerdepths:raw_silver_block',
        'eidolon:raw_lead_block', 'immersiveengineering:raw_block_lead',
        'immersiveengineering:raw_block_uranium', 
        'immersiveengineering:raw_block_nickel', 
        'immersiveengineering:raw_block_aluminum',
        'create:raw_zinc_block', 
        //Ingots
        'immersiveengineering:ingot_constantan', 
        'eidolon:silver_ingot', 
        'darkerdepths:silver_ingot',
        'eidolon:lead_ingot', 
        'immersiveengineering:ingot_aluminum', 
        'immersiveengineering:ingot_uranium', 
        'immersiveengineering:ingot_nickel', 
        'immersiveengineering:ingot_silver', 
        'immersiveengineering:ingot_lead', 
        'create:zinc_ingot', 
        'immersiveengineering:ingot_electrum', 
        'create:brass_ingot', 
        'createaddition:electrum_ingot', 
        'immersiveengineering:ingot_steel',
        //Plates
        'immersiveengineering:plate_constantan', 
        'immersiveengineering:plate_aluminum', 
        'immersiveengineering:plate_uranium', 
        'immersiveengineering:plate_nickel', 
        'immersiveengineering:plate_silver', 
        'immersiveengineering:plate_lead', 
        'immersiveengineering:plate_copper', 
        'immersiveengineering:plate_gold', 
        'immersiveengineering:plate_iron', 
        'createdeco:zinc_sheet', 'createaddition:zinc_sheet', 
        'create:brass_sheet', 
        'createaddition:electrum_sheet', 
        'create:copper_sheet', 
        'create:golden_sheet', 
        'create:iron_sheet', 
        'immersiveengineering:plate_electrum', 
        'immersiveengineering:plate_steel',
        //Gears
        //Rods
        'immersiveengineering:stick_iron', 
        'immersiveengineering:stick_aluminum', 
        'immersiveengineering:stick_steel', 
        'createaddition:electrum_rod', 
        'createaddition:brass_rod', 
        'createaddition:gold_rod', 
        'createaddition:iron_rod', 
        'createaddition:copper_rod',
        //Nuggets
        'immersiveengineering:nugget_constantan', 
        'immersiveengineering:nugget_uranium', 
        'immersiveengineering:nugget_nickel', 
        'immersiveengineering:nugget_steel', 
        'immersiveengineering:nugget_aluminum', 
        'immersiveengineering:nugget_silver', 
        'immersiveengineering:nugget_lead', 
        'immersiveengineering:nugget_electrum', 
        'immersiveengineering:nugget_copper', 
        'eidolon:silver_nugget', 
        'eidolon:lead_nugget', 
        'createaddition:electrum_nugget', 
        'create:copper_nugget', 
        'create:zinc_nugget', 
        'create:brass_nugget',
        //Dusts
        'immersiveengineering:dust_silver', 
        'immersiveengineering:dust_nickel', 
        'immersiveengineering:dust_uranium', 
        'immersiveengineering:dust_constantan', 
        'immersiveengineering:dust_electrum', 
        'immersiveengineering:dust_steel', 
        'immersiveengineering:dust_iron', 
        'immersiveengineering:dust_gold', 
        'createaddition:diamond_grit', 
        'immersiveengineering:dust_sulfur', 
        'immersiveengineering:dust_copper', 
        'immersiveengineering:dust_aluminum', 
        'immersiveengineering:dust_lead',
        //Blocks
        'immersiveengineering:storage_electrum', 
        'immersiveengineering:storage_constantan', 
        'immersiveengineering:storage_uranium', 
        'immersiveengineering:storage_nickel', 
        'immersiveengineering:storage_aluminum', 
        'create:zinc_block', 
        'create:brass_block', 
        'immersiveengineering:storage_lead', 
        'immersiveengineering:storage_silver', 
        'eidolon:lead_block', 
        'eidolon:silver_block', 'darkerdepths:silver_block',
        'immersiveengineering:storage_steel',
        //Wires
        'createaddition:electrum_wire', 
        'createaddition:copper_wire'
    ])
})

JEIEvents.removeCategories(event => {

    event.remove([
        'twilightforest:uncrafting'
    ])
    
})
