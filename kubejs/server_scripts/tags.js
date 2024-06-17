//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.3.0

/*********************************************/
//SECOND FILE OF UNIFICATION, PLEASE DON'T TOUCH
/*********************************************/

ServerEvents.tags('item', e => {

    /*********************UNIFICATION*********************/
    //Ores
    e.remove('forge:ores/aluminum', 'immersiveengineering:ore_aluminum')
    e.remove('forge:ores/lead', 'eidolon:lead_ore', 'immersiveengineering:ore_lead', 'thermal:lead_ore')
    e.remove('forge:ores/silver', 'eidolon:silver_ore', 'immersiveengineering:ore_silver', 'darkerdepths:limestone_silver_ore', 'darkerdepths:aridrock_silver_ore', 'darkerdepths:silver_ore', 'iceandfire:silver_ore', 'occultism:silver_ore', 'thermal:silver_ore')
    e.remove('forge:ores/nickel', 'immersiveengineering:ore_nickel', 'thermal:nickel_ore')
    e.remove('forge:ores/uranium', 'immersiveengineering:ore_uranium')
    e.remove('forge:ores/zinc', 'create:zinc_ore')
    e.remove('forge:ores/sapphire', 'iceandfire:sapphire_ore')
    e.remove('forge:ores/tin', 'thermal:tin_ore')
    
    //Deepslate Ores
    e.remove('forge:ores/aluminum', 'immersiveengineering:deepslate_ore_aluminum')
    e.remove('forge:ores/lead', 'eidolon:deep_lead_ore', 'immersiveengineering:deepslate_ore_lead', 'thermal:deepslate_lead_ore')
    e.remove('forge:ores/silver', 'eidolon:deep_silver_ore', 'immersiveengineering:deepslate_ore_silver', 'iceandfire:deepslate_silver_ore', 'occultism:silver_ore_deepslate', 'thermal:deepslate_silver_ore')
    e.remove('forge:ores/nickel', 'immersiveengineering:deepslate_ore_nickel', 'thermal:deepslate_nickel_ore')
    e.remove('forge:ores/uranium', 'immersiveengineering:deepslate_ore_uranium')
    e.remove('forge:ores/zinc', 'create:deepslate_zinc_ore')
    e.remove('forge:ores/tin', 'thermal:deepslate_tin_ore')

    //Raw Materials
    e.remove('forge:raw_materials/zinc', 'create:raw_zinc')
    e.remove('forge:raw_materials/aluminum', 'immersiveengineering:raw_aluminum')
    e.remove('forge:raw_materials/lead', 'eidolon:raw_lead', 'immersiveengineering:raw_lead', 'thermal:raw_lead')
    e.remove('forge:raw_materials/silver', 'eidolon:raw_silver', 'immersiveengineering:raw_silver', 'darkerdepths:raw_silver', 'occultism:raw_silver', 'thermal:raw_silver')
    e.remove('forge:raw_materials/nickel', 'immersiveengineering:raw_nickel', 'thermal:raw_nickel')
    e.remove('forge:raw_materials/uranium', 'immersiveengineering:raw_uranium')
    e.remove('forge:raw_materials/tin', 'thermal:raw_tin')
    
    //Raw Storage Blocks
    e.remove('forge:storage_blocks/raw_zinc', 'create:raw_zinc_block')
    e.remove('forge:storage_blocks/raw_aluminum', 'immersiveengineering:raw_block_aluminum')
    e.remove('forge:storage_blocks/raw_lead', 'eidolon:raw_lead_block', 'immersiveengineering:raw_block_lead', 'thermal:raw_lead_block')
    e.remove('forge:storage_blocks/raw_silver', 'eidolon:raw_silver_block', 'immersiveengineering:raw_block_silver', 'darkerdepths:raw_silver_block', 'thermal:raw_silver_block')
    e.remove('forge:storage_blocks/raw_nickel', 'immersiveengineering:raw_block_nickel', 'thermal:raw_nickel_block')
    e.remove('forge:storage_blocks/raw_uranium', 'immersiveengineering:raw_block_uranium')
    e.remove('forge:storage_blocks/raw_tin', 'thermal:raw_tin_block')
    
    //Ingots
    e.remove('forge:ingots/zinc', 'create:zinc_ingot')
    e.remove('forge:ingots/brass', 'create:brass_ingot')
    e.remove('forge:ingots/lead', 'eidolon:lead_ingot', 'immersiveengineering:ingot_lead', 'thermal:lead_ingot')
    e.remove('forge:ingots/silver', 'eidolon:silver_ingot', 'immersiveengineering:ingot_silver', 'darkerdepths:silver_ingot', 'iceandfire:silver_ingot', 'occultism:silver_ingot', 'thermal:silver_ingot')
    e.remove('forge:ingots/nickel', 'immersiveengineering:ingot_nickel', 'thermal:nickel_ingot')
    e.remove('forge:ingots/uranium', 'immersiveengineering:ingot_uranium')
    e.remove('forge:ingots/aluminum', 'immersiveengineering:ingot_aluminum')
    e.remove('forge:ingots/constantan', 'immersiveengineering:ingot_constantan', 'thermal:constantan_ingot')
    e.remove('forge:ingots/steel', 'immersiveengineering:ingot_steel')
    e.remove('forge:ingots/electrum', 'immersiveengineering:ingot_electrum', 'createaddition:electrum_ingot', 'thermal:electrum_ingot')
    e.remove('forge:ingots/tin', 'thermal:tin_ingot')
    e.remove('forge:ingots/bronze', 'thermal:bronze_ingot')
    e.remove('forge:ingots/invar', 'thermal:invar_ingot')
    e.remove('forge:ingots/signalum', 'thermal:signalum_ingot')
    e.remove('forge:ingots/lumium', 'thermal:lumium_ingot')
    e.remove('forge:ingots/enderium', 'thermal:enderium_ingot')

    //Plates
    e.remove('forge:plates/iron', 'create:iron_sheet', 'immersiveengineering:plate_iron', 'thermal:iron_plate')
    e.remove('forge:plates/gold', 'create:golden_sheet', 'immersiveengineering:plate_gold', 'thermal:gold_plate')
    e.remove('forge:plates/copper', 'create:copper_sheet', 'immersiveengineering:plate_copper', 'thermal:copper_plate')
    e.remove('forge:plates/lead', 'immersiveengineering:plate_lead', 'thermal:lead_plate')
    e.remove('forge:plates/silver', 'immersiveengineering:plate_silver', 'thermal:silver_plate')
    e.remove('forge:plates/nickel', 'immersiveengineering:plate_nickel', 'thermal:nickel_plate')
    e.remove('forge:plates/uranium', 'immersiveengineering:plate_uranium')
    e.remove('forge:plates/aluminum', 'immersiveengineering:plate_aluminum')
    e.remove('forge:plates/constantan', 'immersiveengineering:plate_constantan', 'thermal:constantan_plate')
    e.remove('forge:plates/steel', 'immersiveengineering:plate_steel')
    e.remove('forge:plates/electrum', 'immersiveengineering:plate_electrum', 'createaddition:electrum_sheet', 'thermal:electrum_plate')
    e.remove('forge:plates/brass', 'create:brass_sheet')
    e.remove('forge:plates/zinc', 'zinc_sheet', 'createaddition:zinc_sheet')
    e.remove('forge:plates/tin', 'thermal:tin_plate')
    e.remove('forge:plates/bronze', 'thermal:bronze_plate')
    e.remove('forge:plates/invar', 'thermal:invar_plate')
    e.remove('forge:plates/lumium', 'thermal:lumium_plate')
    e.remove('forge:plates/signalum', 'thermal:signalum_plate')
    e.remove('forge:plates/enderium', 'thermal:enderium_plate')
    e.remove('forge:plates/netherite', 'createdeco:netherite_sheet')
    
    //Gears
    e.remove('forge:gears/iron', 'industrialforegoing:iron_gear', 'thermal:iron_gear')
    e.remove('forge:gears/gold', 'industrialforegoing:gold_gear', 'thermal:gold_gear')
    e.remove('forge:gears/diamond', 'industrialforegoing:diamond_gear', 'thermal:diamond_gear')
    e.remove('forge:gears/copper', 'thermal:copper_gear')
    e.remove('forge:gears/tin', 'thermal:tin_gear')
    e.remove('forge:gears/lead', 'thermal:lead_gear')
    e.remove('forge:gears/silver', 'thermal:silver_gear')
    e.remove('forge:gears/nickel', 'thermal:nickel_gear')
    e.remove('forge:gears/bronze', 'thermal:bronze_gear')
    e.remove('forge:gears/invar', 'thermal:invar_gear')
    e.remove('forge:gears/electrum', 'thermal:electrum_gear')
    e.remove('forge:gears/constantan', 'thermal:constantan_gear')
    e.remove('forge:gears/lumium', 'thermal:lumium_gear')
    e.remove('forge:gears/signalum', 'thermal:signalum_gear')
    e.remove('forge:gears/enderium', 'thermal:enderium_gear')
    
    //Rods
    e.remove('forge:rods/copper', 'createaddition:copper_rod')
    e.remove('forge:rods/iron', 'createaddition:iron_rod', 'immersiveengineering:stick_iron')
    e.remove('forge:rods/gold', 'createaddition:gold_rod')
    e.remove('forge:rods/brass', 'createaddition:brass_rod')
    e.remove('forge:rods/electrum', 'createaddition:electrum_rod')
    e.remove('forge:rods/steel', 'immersiveengineering:stick_steel')
    e.remove('forge:rods/aluminum', 'immersiveengineering:stick_aluminum')
    
    //Nuggets
    e.remove('forge:nuggets/brass', 'create:brass_nugget')
    e.remove('forge:nuggets/zinc', 'create:zinc_nugget')
    e.remove('forge:nuggets/copper', 'create:copper_nugget', 'immersiveengineering:nugget_copper', 'iceandfire:copper_nugget', 'thermal:copper_nugget')
    e.remove('forge:nuggets/electrum', 'createaddition:electrum_nugget', 'immersiveengineering:nugget_electrum')
    e.remove('forge:nuggets/lead', 'eidolon:lead_nugget', 'immersiveengineering:nugget_lead', 'thermal:lead_nugget')
    e.remove('forge:nuggets/silver', 'eidolon:silver_nugget', 'immersiveengineering:nugget_silver', 'iceandfire:silver_nugget', 'occultism:silver_nugget', 'thermal:silver_nugget')
    e.remove('forge:nuggets/aluminum', 'immersiveengineering:nugget_aluminum')
    e.remove('forge:nuggets/steel', 'immersiveengineering:nugget_steel')
    e.remove('forge:nuggets/nickel', 'immersiveengineering:nugget_nickel', 'thermal:nickel_nugget')
    e.remove('forge:nuggets/uranium', 'immersiveengineering:nugget_uranium')
    e.remove('forge:nuggets/constantan', 'immersiveengineering:nugget_constantan', 'thermal:constantan_nugget')
    e.remove('forge:nuggets/tin', 'thermal:tin_nugget')
    e.remove('forge:nuggets/bronze', 'thermal:bronze_nugget')
    e.remove('forge:nuggets/electrum', 'thermal:electrum_nugget')
    e.remove('forge:nuggets/invar', 'thermal:invar_nugget')
    e.remove('forge:nuggets/enderium', 'thermal:enderium_nugget')
    e.remove('forge:nuggets/lumium', 'thermal:lumium_nugget')
    e.remove('forge:nuggets/signalum', 'thermal:signalum_nugget')
    e.remove('forge:nuggets/netherite', 'thermal:netherite_nugget')

    //Dusts
    e.remove('forge:dusts/nickel', 'immersiveengineering:dust_nickel', 'thermal:nickel_dust')
    e.remove('forge:dusts/silver', 'immersiveengineering:dust_silver', 'occultism:silver_dust', 'thermal:silver_dust')
    e.remove('forge:dusts/lead', 'immersiveengineering:dust_lead', 'thermal:lead_dust')
    e.remove('forge:dusts/aluminum', 'immersiveengineering:dust_aluminum')
    e.remove('forge:dusts/copper', 'immersiveengineering:dust_copper', 'occultism:copper_dust', 'thermal:copper_dust')
    e.remove('forge:dusts/gold', 'immersiveengineering:dust_gold', 'occultism:gold_dust', 'thermal:gold_dust')
    e.remove('forge:dusts/iron', 'immersiveengineering:dust_iron', 'occultism:iron_dust', 'thermal:iron_dust')
    e.remove('forge:dusts/steel', 'immersiveengineering:dust_steel')
    e.remove('forge:dusts/electrum', 'immersiveengineering:dust_electrum', 'thermal:electrum_dust')
    e.remove('forge:dusts/constantan', 'immersiveengineering:dust_constantan', 'thermal:constantan_dust')
    e.remove('forge:dusts/uranium', 'immersiveengineering:dust_uranium')
    e.remove('forge:dusts/sulfur', 'immersiveengineering:dust_sulfur', 'eidolon:sulfur')
    e.remove('forge:dusts/diamond', 'createaddition:diamond_grit', 'thermal:diamond_dust')
    e.remove('forge:dusts/obsidian', 'occultism:obsidian_dust')
    e.remove('forge:dusts/wood', 'immersiveengineering:dust_wood')
    e.remove('forge:dusts/ender_pearl', 'ae2:ender_dust')
    e.remove('forge:dusts/tin', 'thermal:tin_dust')
    e.remove('forge:dusts/bronze', 'thermal:bronze_dust')
    e.remove('forge:dusts/signalum', 'thermal:signalum_dust')
    e.remove('forge:dusts/lumium', 'thermal:lumium_dust')
    e.remove('forge:dusts/enderium', 'thermal:enderium_dust')
    e.remove('forge:dusts/netherite', 'thermal:netherite_dust')
    e.remove('forge:dusts/invar', 'thermal:invar_dust')
    
    //Blocks
    e.remove('forge:storage_blocks/brass', 'create:brass_block')
    e.remove('forge:storage_blocks/zinc', 'create:zinc_block')
    e.remove('forge:storage_blocks/aluminum', 'immersiveengineering:storage_aluminum')
    e.remove('forge:storage_blocks/nickel', 'immersiveengineering:storage_nickel', 'thermal:nickel_block')
    e.remove('forge:storage_blocks/uranium', 'immersiveengineering:storage_uranium')
    e.remove('forge:storage_blocks/constantan', 'immersiveengineering:storage_constantan', 'thermal:constantan_block')
    e.remove('forge:storage_blocks/electrum', 'immersiveengineering:storage_electrum', 'thermal:electrum_block')
    e.remove('forge:storage_blocks/steel', 'immersiveengineering:storage_steel')
    e.remove('forge:storage_blocks/lead', 'immersiveengineering:storage_lead', 'eidolon:lead_block', 'thermal:lead_block')
    e.remove('forge:storage_blocks/silver', 'immersiveengineering:storage_silver', 'eidolon:silver_block', 'darkerdepths:silver_block', 'iceandfire:silver_block', 'occultism:silver_block', 'thermal:silver_block')
    e.remove('forge:storage_blocks/sapphire', 'iceandfire:sapphire_block')
    e.remove('forge:storage_blocks/tin', 'thermal:tin_block')
    e.remove('forge:storage_blocks/bronze', 'thermal:bronze_block')
    e.remove('forge:storage_blocks/invar', 'thermal:invar_block')
    e.remove('forge:storage_blocks/signalum', 'thermal:signalum_block')
    e.remove('forge:storage_blocks/lumium', 'thermal:lumium_block')
    e.remove('forge:storage_blocks/enderium', 'thermal:enderium_block')

    //Wires
    e.remove('forge:wires/copper', 'createaddition:copper_wire')
    e.remove('forge:wires/electrum', 'createaddition:electrum_wire')
    
    //Gems
    e.remove('forge:gems/sapphire', 'iceandfire:sapphire_gem')
   
    //Others
    e.remove('forge:crops/rice', 'sushigocrafting:rice')
    e.remove('forge:plastic', 'industrialforegoing:plastic')
    e.remove('forge:coal_coke', 'thermal:coal_coke')
    e.remove('forge:bitumen', 'immersivepetroleum:bitumen')
    e.remove('forge:slag', 'immersivepetroleum:slag')

    /*********************OTHERS**************************/
    e.remove('pneumaticcraft:upgrade_components', 'minecraft:lapis_lazuli')

    /********************DISABLE**************************/
    const DISABLED_ITEMS = [
        'sushigocrafting:rice',
        'sushigocrafting:rice_seeds'
    ].forEach(item => {e.removeAllTagsFrom(item)})

    /**********************ADD****************************/
    e.add('forge:dusts', 'alltheores:netherite_dust')
    e.add('forge:dusts/netherite', 'alltheores:netherite_dust')
    e.add('forge:plastic', 'pneumaticcraft:plastic')

})