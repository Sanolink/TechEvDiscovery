//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.2.0

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
        'eidolon:silver_ore', 'immersiveengineering:ore_silver', 'darkerdepths:limestone_silver_ore', 'darkerdepths:aridrock_silver_ore', 'darkerdepths:silver_ore', 'iceandfire:silver_ore', 'occultism:silver_ore',
        'eidolon:lead_ore', 'immersiveengineering:ore_lead', 
        'immersiveengineering:ore_uranium', 
        'immersiveengineering:ore_nickel', 
        'immersiveengineering:ore_aluminum',
        'create:zinc_ore', 
        'iceandfire:sapphire_ore',
        //Deepslate Ores
        'eidolon:deep_silver_ore', 'immersiveengineering:deepslate_ore_silver', 'iceandfire:deepslate_silver_ore', 'occultism:silver_ore_deepslate',
        'eidolon:deep_lead_ore', 'immersiveengineering:deepslate_ore_lead',
        'immersiveengineering:deepslate_ore_uranium', 
        'immersiveengineering:deepslate_ore_nickel', 
        'immersiveengineering:deepslate_ore_aluminum',
        'create:deepslate_zinc_ore', 
        //Raw Materials
        'eidolon:raw_silver', 'immersiveengineering:raw_silver', 'darkerdepths:raw_silver', 'occultism:raw_silver',
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
        'iceandfire:sapphire_block',
        //Ingots
        'eidolon:silver_ingot', 'immersiveengineering:ingot_silver', 'darkerdepths:silver_ingot', 'iceandfire:silver_ingot', 'occultism:silver_ingot',
        'eidolon:lead_ingot', 'immersiveengineering:ingot_lead', 
        'immersiveengineering:ingot_constantan', 
        'immersiveengineering:ingot_electrum', 'createaddition:electrum_ingot', 
        'immersiveengineering:ingot_aluminum', 
        'immersiveengineering:ingot_uranium', 
        'immersiveengineering:ingot_nickel', 
        'create:zinc_ingot', 
        'create:brass_ingot', 
        'immersiveengineering:ingot_steel',
        //Plates
        'immersiveengineering:plate_constantan', 
        'immersiveengineering:plate_aluminum', 
        'immersiveengineering:plate_uranium', 
        'immersiveengineering:plate_nickel', 
        'immersiveengineering:plate_silver', 
        'immersiveengineering:plate_lead', 
        'immersiveengineering:plate_copper', 'create:copper_sheet',
        'immersiveengineering:plate_gold', 'create:golden_sheet',
        'immersiveengineering:plate_iron', 'create:iron_sheet',
        'immersiveengineering:plate_electrum', 'createaddition:electrum_sheet', 
        'immersiveengineering:plate_steel',
        'createdeco:zinc_sheet', 'createaddition:zinc_sheet', 
        'create:brass_sheet', 
        //Gears
        'industrialforegoing:iron_gear',
        'industrialforegoing:gold_gear',
        'industrialforegoing:diamond_gear',
        //Rods
        'immersiveengineering:stick_iron', 'createaddition:iron_rod', 
        'immersiveengineering:stick_aluminum', 
        'immersiveengineering:stick_steel', 
        'createaddition:electrum_rod', 
        'createaddition:brass_rod', 
        'createaddition:gold_rod', 
        'createaddition:copper_rod', 
        //Nuggets
        'immersiveengineering:nugget_constantan', 
        'immersiveengineering:nugget_uranium', 
        'immersiveengineering:nugget_nickel', 
        'immersiveengineering:nugget_steel', 
        'immersiveengineering:nugget_aluminum', 
        'immersiveengineering:nugget_silver', 'eidolon:silver_nugget', 'iceandfire:silver_nugget', 'occultism:silver_nugget',
        'immersiveengineering:nugget_lead', 'eidolon:lead_nugget', 
        'immersiveengineering:nugget_electrum', 'createaddition:electrum_nugget', 
        'immersiveengineering:nugget_copper', 'create:copper_nugget', 'iceandfire:copper_nugget',
        'create:zinc_nugget', 
        'create:brass_nugget',
        //Dusts
        'immersiveengineering:dust_silver', 'occultism:silver_dust',
        'immersiveengineering:dust_nickel', 
        'immersiveengineering:dust_uranium', 
        'immersiveengineering:dust_constantan', 
        'immersiveengineering:dust_electrum', 
        'immersiveengineering:dust_steel', 
        'immersiveengineering:dust_iron', 'occultism:iron_dust',
        'immersiveengineering:dust_gold', 'occultism:gold_dust',
        'immersiveengineering:dust_sulfur', 
        'immersiveengineering:dust_copper', 'occultism:copper_dust',
        'immersiveengineering:dust_aluminum', 
        'immersiveengineering:dust_lead',
        'createaddition:diamond_grit', 
        'occultism:obsidian_dust',
        //Blocks
        'immersiveengineering:storage_electrum', 
        'immersiveengineering:storage_constantan', 
        'immersiveengineering:storage_uranium', 
        'immersiveengineering:storage_nickel', 
        'immersiveengineering:storage_aluminum', 
        'immersiveengineering:storage_lead', 'eidolon:lead_block', 
        'immersiveengineering:storage_silver', 'eidolon:silver_block', 'darkerdepths:silver_block', 'iceandfire:silver_block', 'occultism:silver_block',
        'immersiveengineering:storage_steel',
        'create:zinc_block', 
        'create:brass_block', 
        //Wires
        'createaddition:electrum_wire', 
        'createaddition:copper_wire',
        //Gems
        'iceandfire:sapphire_gem',
        //Others
        'sushigocrafting:rice',
        'sushigocrafting:rice_seeds',
        'bhc:wither_bone',
        'industrialforegoing:plastic'
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
