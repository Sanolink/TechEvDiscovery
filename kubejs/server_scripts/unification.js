//priority: 10000
//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.2

/*********************************************/
//MAIN FILE OF UNIFICATION, PLEASE DON'T TOUCH
/*********************************************/

ServerEvents.recipes(e => {

    function replaceIO(input, output) {
        e.replaceInput({}, input, output)
        e.replaceOutput({}, input, output)
    }

    //Ores
    ['immersiveengineering:ore_aluminum'].forEach(I => {replaceIO(I, 'alltheores:aluminum_ore')});
    ['eidolon:lead_ore', 'immersiveengineering:ore_lead'].forEach(I => {replaceIO(I, 'alltheores:lead_ore')});
    ['eidolon:silver_ore', 'immersiveengineering:ore_silver', 'darkerdepths:limestone_silver_ore', 'darkerdepths:aridrock_silver_ore', 'darkerdepths:silver_ore', 'iceandfire:silver_ore'].forEach(I => {replaceIO(I, 'alltheores:silver_ore')});
    ['immersiveengineering:ore_nickel'].forEach(I => {replaceIO(I, 'alltheores:nickel_ore')});
    ['immersiveengineering:ore_uranium'].forEach(I => {replaceIO(I, 'alltheores:uranium_ore')});
    ['create:zinc_ore'].forEach(I => {replaceIO(I, 'alltheores:zinc_ore')});
    ['iceandfire:sapphire_ore'].forEach(I => {replaceIO(I, 'alltheores:sapphire_ore')});
    //Deepslate Ores
    ['immersiveengineering:deepslate_ore_aluminum'].forEach(I => {replaceIO(I, 'alltheores:deepslate_aluminum_ore')});
    ['eidolon:deep_lead_ore', 'immersiveengineering:deepslate_ore_lead'].forEach(I => {replaceIO(I, 'alltheores:deepslate_lead_ore')});
    ['eidolon:deep_silver_ore', 'immersiveengineering:deepslate_ore_silver', 'iceandfire:deepslate_silver_ore'].forEach(I => {replaceIO(I, 'alltheores:deepslate_silver_ore')});
    ['immersiveengineering:deepslate_ore_nickel'].forEach(I => {replaceIO(I, 'alltheores:deepslate_nickel_ore')});
    ['immersiveengineering:deepslate_ore_uranium'].forEach(I => {replaceIO(I, 'alltheores:deepslate_uranium_ore')});
    ['create:deepslate_zinc_ore'].forEach(I => {replaceIO(I, 'alltheores:deepslate_zinc_ore')});
    //Raw Materials
    ['#forge:raw_materials/zinc', 'create:raw_zinc'].forEach(I => {replaceIO(I, 'alltheores:raw_zinc')});
    ['#forge:raw_materials/aluminum', 'immersiveengineering:raw_aluminum'].forEach(I => {replaceIO(I, 'alltheores:raw_aluminum')});
    ['#forge:raw_materials/lead', 'eidolon:raw_lead', 'immersiveengineering:raw_lead'].forEach(I => {replaceIO(I, 'alltheores:raw_lead')});
    ['#forge:raw_materials/silver', 'eidolon:raw_silver', 'immersiveengineering:raw_silver', 'darkerdepths:raw_silver'].forEach(I => {replaceIO(I, 'alltheores:raw_silver')});
    ['#forge:raw_materials/nickel', 'immersiveengineering:raw_nickel', 'alltheores:raw_nickel'].forEach(I => {replaceIO(I, 'alltheores:raw_nickel')});
    ['#forge:raw_materials/uranium', 'immersiveengineering:raw_uranium'].forEach(I => {replaceIO(I, 'alltheores:raw_uranium')});
    //Raw Storage Blocks
    ['#forge:storage_blocks/raw_zinc', 'create:raw_zinc_block'].forEach(I => {replaceIO(I, 'alltheores:raw_zinc_block')});
    ['#forge:storage_blocks/raw_aluminum', 'immersiveengineering:raw_block_aluminum'].forEach(I => {replaceIO(I, 'alltheores:raw_aluminum_block')});
    ['#forge:storage_blocks/raw_lead', 'eidolon:raw_lead_block', 'immersiveengineering:raw_block_lead'].forEach(I => {replaceIO(I, 'alltheores:raw_lead_block')});
    ['#forge:storage_blocks/raw_silver', 'eidolon:raw_silver_block', 'immersiveengineering:raw_block_silver', 'darkerdepths:raw_silver_block'].forEach(I => {replaceIO(I, 'alltheores:raw_silver_block')});
    ['#forge:storage_blocks/raw_nickel', 'immersiveengineering:raw_block_nickel'].forEach(I => {replaceIO(I, 'alltheores:raw_nickel_block')});
    ['#forge:storage_blocks/raw_uranium', 'immersiveengineering:raw_block_uranium'].forEach(I => {replaceIO(I, 'alltheores:raw_uranium_block')});
    //Ingots
    ['#forge:ingots/zinc', 'create:zinc_ingot'].forEach(I => {replaceIO(I, 'alltheores:zinc_ingot')});
    ['#forge:ingots/brass', 'create:brass_ingot'].forEach(I => {replaceIO(I, 'alltheores:brass_ingot')});
    ['#forge:ingots/lead', 'eidolon:lead_ingot', 'immersiveengineering:ingot_lead'].forEach(I => {replaceIO(I, 'alltheores:lead_ingot')});
    ['#forge:ingots/silver', 'eidolon:silver_ingot', 'immersiveengineering:ingot_silver', 'darkerdepths:silver_ingot', 'iceandfire:silver_ingot'].forEach(I => {replaceIO(I, 'alltheores:silver_ingot')});
    ['#forge:ingots/nickel', 'immersiveengineering:ingot_nickel'].forEach(I => {replaceIO(I, 'alltheores:nickel_ingot')});
    ['#forge:ingots/uranium', 'immersiveengineering:ingot_uranium'].forEach(I => {replaceIO(I, 'alltheores:uranium_ingot')});
    ['#forge:ingots/aluminum', 'immersiveengineering:ingot_aluminum'].forEach(I => {replaceIO(I, 'alltheores:aluminum_ingot')});
    ['#forge:ingots/constantan', 'immersiveengineering:ingot_constantan'].forEach(I => {replaceIO(I, 'alltheores:constantan_ingot')});
    ['#forge:ingots/steel', 'immersiveengineering:ingot_steel'].forEach(I => {replaceIO(I, 'alltheores:steel_ingot')});
    ['#forge:ingots/electrum', 'immersiveengineering:ingot_electrum', 'createaddition:electrum_ingot'].forEach(I => {replaceIO(I, 'alltheores:electrum_ingot')});
    //Plates
    ['#forge:plates/iron', 'create:iron_sheet', 'immersiveengineering:plate_iron'].forEach(I => {replaceIO(I, 'alltheores:iron_plate')});
    ['#forge:plates/gold', 'create:golden_sheet', 'immersiveengineering:plate_gold'].forEach(I => {replaceIO(I, 'alltheores:gold_plate')});
    ['#forge:plates/copper', 'immersiveengineering:plate_copper', 'create:copper_sheet'].forEach(I => {replaceIO(I, 'alltheores:copper_plate')});
    ['#forge:plates/lead', 'immersiveengineering:plate_lead'].forEach(I => {replaceIO(I, 'alltheores:lead_plate')});
    ['#forge:plates/silver', 'immersiveengineering:plate_silver'].forEach(I => {replaceIO(I, 'alltheores:silver_plate')});
    ['#forge:plates/nickel', 'immersiveengineering:plate_nickel'].forEach(I => {replaceIO(I, 'alltheores:nickel_plate')});
    ['#forge:plates/uranium', 'immersiveengineering:plate_uranium'].forEach(I => {replaceIO(I, 'alltheores:uranium_plate')});
    ['#forge:plates/aluminum', 'immersiveengineering:plate_aluminum'].forEach(I => {replaceIO(I, 'alltheores:aluminum_plate')});
    ['#forge:plates/constantan', 'immersiveengineering:plate_constantan'].forEach(I => {replaceIO(I, 'alltheores:constantan_plate')});
    ['#forge:plates/steel', 'immersiveengineering:plate_steel'].forEach(I => {replaceIO(I, 'alltheores:steel_plate')});
    ['#forge:plates/electrum', 'immersiveengineering:plate_electrum', 'createaddition:electrum_sheet'].forEach(I => {replaceIO(I, 'alltheores:electrum_plate')});
    ['#forge:plates/brass', 'create:brass_sheet'].forEach(I => {replaceIO(I, 'alltheores:brass_plate')});
    ['#forge:plates/zinc', 'zinc_sheet', 'createaddition:zinc_sheet'].forEach(I => {replaceIO(I, 'alltheores:zinc_plate')});
    //Gears

    //Rods
    ['#forge:rods/copper', 'createaddition:copper_rod'].forEach(I => {replaceIO(I, 'alltheores:copper_rod')});
    ['#forge:rods/iron', 'createaddition:iron_rod', 'immersiveengineering:stick_iron'].forEach(I => {replaceIO(I, 'alltheores:iron_rod')});
    ['#forge:rods/gold', 'createaddition:gold_rod'].forEach(I => {replaceIO(I, 'alltheores:gold_rod')});
    ['#forge:rods/brass', 'createaddition:brass_rod'].forEach(I => {replaceIO(I, 'alltheores:brass_rod')});
    ['#forge:rods/electrum', 'createaddition:electrum_rod'].forEach(I => {replaceIO(I, 'alltheores:electrum_rod')});
    ['#forge:rods/steel', 'immersiveengineering:stick_steel'].forEach(I => {replaceIO(I, 'alltheores:steel_rod')});
    ['#forge:rods/aluminum', 'immersiveengineering:stick_aluminum'].forEach(I => {replaceIO(I, 'alltheores:aluminum_rod')});
    //Nuggets
    ['#forge:nuggets/brass', 'create:brass_nugget'].forEach(I => {replaceIO(I, 'alltheores:brass_nugget')});
    ['#forge:nuggets/zinc', 'create:zinc_nugget'].forEach(I => {replaceIO(I, 'alltheores:zinc_nugget')});
    ['#forge:nuggets/copper', 'create:copper_nugget', 'immersiveengineering:nugget_copper', 'iceandfire:copper_nugget'].forEach(I => {replaceIO(I, 'alltheores:copper_nugget')});
    ['#forge:nuggets/electrum', 'createaddition:electrum_nugget', 'immersiveengineering:nugget_electrum'].forEach(I => {replaceIO(I, 'alltheores:electrum_nugget')});
    ['#forge:nuggets/lead', 'eidolon:lead_nugget', 'immersiveengineering:nugget_lead'].forEach(I => {replaceIO(I, 'alltheores:lead_nugget')});
    ['#forge:nuggets/silver', 'eidolon:silver_nugget', 'immersiveengineering:nugget_silver', 'iceandfire:silver_nugget'].forEach(I => {replaceIO(I, 'alltheores:silver_nugget')});
    ['#forge:nuggets/aluminum', 'immersiveengineering:nugget_aluminum'].forEach(I => {replaceIO(I, 'alltheores:aluminum_nugget')});
    ['#forge:nuggets/steel', 'immersiveengineering:nugget_steel'].forEach(I => {replaceIO(I, 'alltheores:steel_nugget')});
    ['#forge:nuggets/nickel', 'immersiveengineering:nugget_nickel'].forEach(I => {replaceIO(I, 'alltheores:nickel_nugget')});
    ['#forge:nuggets/uranium', 'immersiveengineering:nugget_uranium'].forEach(I => {replaceIO(I, 'alltheores:uranium_nugget')});
    ['#forge:nuggets/constantan', 'immersiveengineering:nugget_constantan'].forEach(I => {replaceIO(I, 'alltheores:constantan_nugget')});
    //Dusts
    ['#forge:dusts/nickel', 'immersiveengineering:dust_nickel'].forEach(I => {replaceIO(I, 'alltheores:nickel_dust')});
    ['#forge:dusts/silver', 'immersiveengineering:dust_silver'].forEach(I => {replaceIO(I, 'alltheores:silver_dust')});
    ['#forge:dusts/lead', 'immersiveengineering:dust_lead'].forEach(I => {replaceIO(I, 'alltheores:lead_dust')});
    ['#forge:dusts/aluminum', 'immersiveengineering:dust_aluminum'].forEach(I => {replaceIO(I, 'alltheores:aluminum_dust')});
    ['#forge:dusts/copper', 'immersiveengineering:dust_copper'].forEach(I => {replaceIO(I, 'alltheores:copper_dust')});
    ['#forge:dusts/gold', 'immersiveengineering:dust_gold'].forEach(I => {replaceIO(I, 'alltheores:gold_dust')});
    ['#forge:dusts/iron', 'immersiveengineering:dust_iron'].forEach(I => {replaceIO(I, 'alltheores:iron_dust')});
    ['#forge:dusts/steel', 'immersiveengineering:dust_steel'].forEach(I => {replaceIO(I, 'alltheores:steel_dust')});
    ['#forge:dusts/electrum', 'immersiveengineering:dust_electrum'].forEach(I => {replaceIO(I, 'alltheores:electrum_dust')});
    ['#forge:dusts/constantan', 'immersiveengineering:dust_constantan'].forEach(I => {replaceIO(I, 'alltheores:constantan_dust')});
    ['#forge:dusts/uranium', 'immersiveengineering:dust_uranium'].forEach(I => {replaceIO(I, 'alltheores:uranium_dust')});
    ['#forge:dusts/sulfur', 'immersiveengineering:dust_sulfur'].forEach(I => {replaceIO(I, 'eidolon:sulfur')});
    ['#forge:dusts/diamond', 'createaddition:diamond_grit'].forEach(I => {replaceIO(I, 'alltheores:diamond_dust')});
    //Blocks
    ['#forge:storage_blocks/brass', 'create:brass_block'].forEach(I => {replaceIO(I, 'alltheores:brass_block')});
    ['#forge:storage_blocks/zinc', 'create:zinc_block'].forEach(I => {replaceIO(I, 'alltheores:zinc_block')});
    ['#forge:storage_blocks/aluminum', 'immersiveengineering:storage_aluminum'].forEach(I => {replaceIO(I, 'alltheores:aluminum_block')});
    ['#forge:storage_blocks/nickel', 'immersiveengineering:storage_nickel'].forEach(I => {replaceIO(I, 'alltheores:nickel_block')});
    ['#forge:storage_blocks/uranium', 'immersiveengineering:storage_uranium'].forEach(I => {replaceIO(I, 'alltheores:uranium_block')});
    ['#forge:storage_blocks/constantan', 'immersiveengineering:storage_constantan'].forEach(I => {replaceIO(I, 'alltheores:constantan_block')});
    ['#forge:storage_blocks/electrum', 'immersiveengineering:storage_electrum'].forEach(I => {replaceIO(I, 'alltheores:electrum_block')});
    ['#forge:storage_blocks/steel', 'immersiveengineering:storage_steel'].forEach(I => {replaceIO(I, 'alltheores:steel_block')});
    ['#forge:storage_blocks/lead', 'immersiveengineering:storage_lead', 'eidolon:lead_block'].forEach(I => {replaceIO(I, 'alltheores:lead_block')});
    ['#forge:storage_blocks/silver', 'immersiveengineering:storage_silver', 'eidolon:silver_block', 'darkerdepths:silver_block', 'iceandfire:silver_block'].forEach(I => {replaceIO(I, 'alltheores:silver_block')});
    ['#forge:storage_blocks/sapphire', 'iceandfire:sapphire_block'].forEach(I => {replaceIO(I, 'alltheores:sapphire_block')});
    //Wires
    ['#forge:wires/copper', 'createaddition:copper_wire'].forEach(I => {replaceIO(I, 'immersiveengineering:wire_copper')});
    ['#forge:wires/electrum', 'createaddition:electrum_wire'].forEach(I => {replaceIO(I, 'immersiveengineering:wire_electrum')});
    //Gems
    ['#forge:gems/sapphire', 'iceandfire:sapphire_gem'].forEach(I => {replaceIO(I, 'alltheores:sapphire')});
    //Others
    ['#forge:crops/rice', 'sushigocrafting:rice'].forEach(I => {replaceIO(I, 'farmersdelight:rice')});
    ['#forge:bones/wither', 'bhc:wither_bone'].forEach(I => {replaceIO(I, 'iceandfire:witherbone')});


    //Remove CRAFTING Repetitive Recipes
    e.remove({ output: '#forge:storage_blocks/brass', type: 'minecraft:crafting_shaped', mod: "create" })
    e.remove({ output: '#forge:nuggets/brass', type: 'minecraft:crafting_shapeless', mod: "create" })
    e.remove({ output: '#forge:nuggets/zinc', type: 'minecraft:crafting_shapeless', mod: "create" })
    e.remove({ output: '#forge:nuggets/copper', type: 'minecraft:crafting_shapeless', mod: "create" })
    e.remove({ output: '#forge:storage_blocks/zinc', type: 'minecraft:crafting_shaped', mod: "create" })
    e.remove({ input: '#forge:storage_blocks/zinc', type: 'minecraft:crafting_shapeless', mod: "create" })
    e.remove({ id: 'create:crafting/materials/brass_ingot_from_compacting'})
    e.remove({ id: 'create:crafting/materials/zinc_ingot_from_compacting'})
    e.remove({ id: 'create:crafting/materials/copper_ingot'})
    e.remove({ id: 'create:crafting/materials/raw_zinc'})
    e.remove({ id: 'create:crafting/materials/raw_zinc_block'})
    e.remove({ id: 'createaddition:crafting/electrum_nugget'})
    e.remove({ id: 'createaddition:crafting/electrum_ingot'})
    const RAW_BLOCKS_IE = ['alltheores:raw_aluminum_block', 'alltheores:raw_zinc_block', 'alltheores:raw_lead_block', 'alltheores:raw_silver_block', 'alltheores:raw_nickel_block', 'alltheores:raw_uranium_block']
    const BLOCKS_IE = ['alltheores:silver_block', 'alltheores:lead_block', 'alltheores:steel_block', 'alltheores:electrum_block', 'alltheores:constantan_block', 'alltheores:uranium_block', 'alltheores:nickel_block', 'alltheores:aluminum_block']
    const INGOTS_IE = ['alltheores:constantan_ingot', 'alltheores:steel_ingot', 'alltheores:electrum_ingot', 'alltheores:aluminum_ingot', 'alltheores:uranium_ingot', 'alltheores:nickel_ingot', 'alltheores:silver_ingot', 'alltheores:lead_ingot']
    const NUGGETS_IE = ['alltheores:constantan_nugget', 'alltheores:uranium_nugget', 'alltheores:nickel_nugget', 'alltheores:steel_nugget', 'alltheores:aluminum_nugget', 'alltheores:silver_nugget', 'alltheores:lead_nugget', 'alltheores:copper_nugget', 'alltheores:electrum_nugget']
    RAW_BLOCKS_IE.forEach(I => {e.remove({ input: I, type: 'minecraft:crafting_shapeless', mod: "immersiveengineering" })})
    RAW_BLOCKS_IE.forEach(I => {e.remove({ output: I, type: 'minecraft:crafting_shaped', mod: "immersiveengineering" })})
    BLOCKS_IE.forEach(I => {e.remove({ input: I, type: 'minecraft:crafting_shapeless', mod: "immersiveengineering" })})
    BLOCKS_IE.forEach(I => {e.remove({ output: I, type: 'minecraft:crafting_shaped', mod: "immersiveengineering" })})
    INGOTS_IE.forEach(I => {e.remove({ output: I, type: 'minecraft:crafting_shaped', mod: "immersiveengineering" })})
    NUGGETS_IE.forEach(I => {e.remove({ output: I, type: 'minecraft:crafting_shapeless', mod: "immersiveengineering" })})
    e.remove({ id: "minecraft:copper_ingot"})
    e.remove({ output: 'alltheores:electrum_dust', type: 'minecraft:crafting_shapeless', mod: "immersiveengineering" })
    e.remove({ output: 'alltheores:constantan_dust', type: 'minecraft:crafting_shapeless', mod: "immersiveengineering" })
    const BLOCKS_EIDOLON = ['alltheores:lead_block', 'alltheores:silver_block']
    BLOCKS_EIDOLON.forEach(I => {e.remove({ input: I, type: 'minecraft:crafting_shapeless', mod: "eidolon" })})
    BLOCKS_EIDOLON.forEach(I => {e.remove({ output: I, type: 'minecraft:crafting_shaped', mod: "eidolon" })})
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
    e.remove({ id: 'darkerdepths:silver_ingot_from_smelting_aridrock_silver_ore'})
    e.remove({ id: 'darkerdepths:silver_ingot_from_smelting_limestone_silver_ore'})
    e.remove({ id: 'darkerdepths:silver_ingot_from_blasting_aridrock_silver_ore'})
    e.remove({ id: 'darkerdepths:silver_ingot_from_blasting_limestone_silver_ore'})
    e.remove({ id: 'iceandfire:silver_block_to_silver_ingot'})
    e.remove({ id: 'iceandfire:silver_ingot_to_silver_block'})
    e.remove({ id: 'iceandfire:silver_ingot_to_silver_nugget'})
    e.remove({ id: 'iceandfire:silver_nugget_to_silver_ingot'})
    e.remove({ id: 'iceandfire:copper_nuggets_to_ingot'})
    e.remove({ id: 'iceandfire:copper_ingot_to_nuggets'})
    e.remove({ id: 'iceandfire:sapphire_gem_to_sapphire_block'})
    e.remove({ id: 'iceandfire:sapphire_block_to_sapphire_gem'})
    //Remove SMELTING Repetitive Recipes
    const SMELT_ITEMS = ["lead", "silver", "nickel", "uranium", "aluminum", "iron", "constantan", "steel", "electrum", "platinum", "tin", "osmium", "iridium", "brass", "zinc", "copper", "gold", "iron"] 
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'immersiveengineering:smelting/'+I+'_ingot_from_dust'})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'immersiveengineering:smelting/'+I+'_ingot_from_dust_from_blasting'})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'immersiveengineering:smelting/ingot_'+I+'_from_dust'})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'immersiveengineering:smelting/ingot_'+I+'_from_dust_from_blasting'})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'immersiveengineering:smelting/ingot_'+I+'_from_blasting'})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'immersiveengineering:smelting/ingot_'+I+'_from_blasting2'})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'immersiveengineering:smelting/ingot_'+I+'_from_blasting3'})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'immersiveengineering:smelting/ingot_'+I})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'immersiveengineering:smelting/ingot_'+I+'2'})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'immersiveengineering:smelting/ingot_'+I+'3'})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'alltheores:'+I+'_ingot_from_ore'})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'alltheores:'+I+'_ingot_from_slate_ore'})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'alltheores:'+I+'_ingot_from_ore_blasting'})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'alltheores:'+I+'_ingot_from_slate_ore_blasting'})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'minecraft:'+I+'_ingot_from_smelting_'+I+'_ore'})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'minecraft:'+I+'_ingot_from_blasting_'+I+'_ore'})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'minecraft:'+I+'_ingot_from_smelting_deepslate_'+I+'_ore'})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'minecraft:'+I+'_ingot_from_blasting_deepslate_'+I+'_ore'})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'eidolon:smelt_raw_'+I})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'eidolon:blast_raw_'+I})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'eidolon:smelt_'+I+'_dust'})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'eidolon:blast_'+I+'_dust'})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'eidolon:smelt_'+I+'_ore'})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'eidolon:blast_'+I+'_ore'})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'create:smelting/'+I+'_ingot_from_ore'})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'create:blasting/'+I+'_ingot_from_ore'})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'create:smelting/'+I+'_ingot_from_raw_ore'})})
    SMELT_ITEMS.forEach(I => {e.remove({ id: 'create:blasting/'+I+'_ingot_from_raw_ore'})})
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
    //Add Unified SMELTING Recipes
    const SMELT_ORES = ["gold", "copper", "iron", "platinum", "tin", "aluminum", "uranium", "nickel", "silver", "lead", "osmium", "iridium", "zinc"]
    const SMELT_DUSTS = ["tin", "uranium", "lead", "osmium"]
    SMELT_ORES.forEach(I => {
        e.smelting('#forge:ingots/'+I, '#forge:ores/'+I).id("alltheores:"+I+"_ingot_from_ore").xp(0.15)
        e.blasting('#forge:ingots/'+I, '#forge:ores/'+I).id("alltheores:"+I+"_ingot_from_ore_blasting").xp(0.15)
    })
    SMELT_DUSTS.forEach(I => {e.blasting('#forge:ingots/'+I, '#forge:dusts/'+I).id("alltheores:"+I+"_ingot_from_dust_blasting").xp(0.3);})
    //Remove OTHERS Repetitive Recipes
    e.remove({id: "createaddition:pressing/zinc_ingot"})
})
