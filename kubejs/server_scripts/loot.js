//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

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
        event.addLootTypeModifier(LT).replaceLoot(input, output);
    }

    //Ores
    replaceLT(['immersiveengineering:ore_aluminum'], 'alltheores:aluminum_ore')
    replaceLT(['eidolon:lead_ore', 'immersiveengineering:ore_lead'], 'alltheores:lead_ore')
    replaceLT(['eidolon:silver_ore', 'immersiveengineering:ore_silver'], 'alltheores:silver_ore')
    replaceLT(['immersiveengineering:ore_nickel'], 'alltheores:nickel_ore')
    replaceLT(['immersiveengineering:ore_uranium'], 'alltheores:uranium_ore')
    replaceLT(['create:zinc_ore'], 'alltheores:zinc_ore')
    //Deepslate Ores
    replaceLT(['immersiveengineering:deepslate_ore_aluminum'], 'alltheores:deepslate_aluminum_ore')
    replaceLT(['eidolon:deep_lead_ore', 'immersiveengineering:deepslate_ore_lead'], 'alltheores:deepslate_lead_ore')
    replaceLT(['eidolon:deep_silver_ore', 'immersiveengineering:deepslate_ore_silver'], 'alltheores:deepslate_silver_ore')
    replaceLT(['immersiveengineering:deepslate_ore_nickel'], 'alltheores:deepslate_nickel_ore')
    replaceLT(['immersiveengineering:deepslate_ore_uranium'], 'alltheores:deepslate_uranium_ore')
    replaceLT(['create:deepslate_zinc_ore'], 'alltheores:deepslate_zinc_ore')
    //Raw Materials
    replaceLT(['create:raw_zinc'], 'alltheores:raw_zinc')
    replaceLT(['immersiveengineering:raw_aluminum'], 'alltheores:raw_aluminum')
    replaceLT(['eidolon:raw_lead', 'immersiveengineering:raw_lead'], 'alltheores:raw_lead')
    replaceLT(['eidolon:raw_silver', 'immersiveengineering:raw_silver'], 'alltheores:raw_silver')
    replaceLT(['immersiveengineering:raw_nickel'], 'alltheores:raw_nickel')
    replaceLT(['immersiveengineering:raw_uranium'], 'alltheores:raw_uranium')
    //Raw Storage Blocks
    replaceLT(['#forge:storage_blocks/raw_zinc', 'create:raw_zinc_block'], 'alltheores:raw_zinc_block')
    replaceLT(['#forge:storage_blocks/raw_aluminum', 'immersiveengineering:raw_block_aluminum'], 'alltheores:raw_aluminum_block')
    replaceLT(['#forge:storage_blocks/raw_lead', 'eidolon:raw_lead_block', 'immersiveengineering:raw_block_lead'], 'alltheores:raw_lead_block')
    replaceLT(['#forge:storage_blocks/raw_silver', 'eidolon:raw_silver_block', 'immersiveengineering:raw_block_silver'], 'alltheores:raw_silver_block')
    replaceLT(['#forge:storage_blocks/raw_nickel', 'immersiveengineering:raw_block_nickel'], 'alltheores:raw_nickel_block')
    replaceLT(['#forge:storage_blocks/raw_uranium', 'immersiveengineering:raw_block_uranium'], 'alltheores:raw_uranium_block')
    //Ingots
    replaceLT(['#forge:ingots/zinc', 'create:zinc_ingot'], 'alltheores:zinc_ingot')
    replaceLT(['#forge:ingots/brass', 'create:brass_ingot'], 'alltheores:brass_ingot')
    replaceLT(['#forge:ingots/lead', 'eidolon:lead_ingot', 'immersiveengineering:ingot_lead'], 'alltheores:lead_ingot')
    replaceLT(['#forge:ingots/silver', 'eidolon:silver_ingot', 'immersiveengineering:ingot_silver'], 'alltheores:silver_ingot')
    replaceLT(['#forge:ingots/nickel', 'immersiveengineering:ingot_nickel'], 'alltheores:nickel_ingot')
    replaceLT(['#forge:ingots/uranium', 'immersiveengineering:ingot_uranium'], 'alltheores:uranium_ingot')
    replaceLT(['#forge:ingots/aluminum', 'immersiveengineering:ingot_aluminum'], 'alltheores:aluminum_ingot')
    replaceLT(['#forge:ingots/constantan', 'immersiveengineering:ingot_constantan'], 'alltheores:constantan_ingot')
    replaceLT(['#forge:ingots/steel', 'immersiveengineering:ingot_steel'], 'alltheores:steel_ingot')
    replaceLT(['#forge:ingots/electrum', 'immersiveengineering:ingot_electrum', 'createaddition:electrum_ingot'], 'alltheores:electrum_ingot')
    //Plates
    replaceLT(['#forge:plates/iron', 'create:iron_sheet', 'immersiveengineering:plate_iron'], 'alltheores:iron_plate')
    replaceLT(['#forge:plates/gold', 'create:golden_sheet', 'immersiveengineering:plate_gold'], 'alltheores:gold_plate')
    replaceLT(['#forge:plates/copper', 'create:copper_sheet', 'immersiveengineering:plate_copper'], 'alltheores:copper_plate')
    replaceLT(['#forge:plates/lead', 'immersiveengineering:plate_lead'], 'alltheores:lead_plate')
    replaceLT(['#forge:plates/silver', 'immersiveengineering:plate_silver'], 'alltheores:silver_plate')
    replaceLT(['#forge:plates/nickel', 'immersiveengineering:plate_nickel'], 'alltheores:nickel_plate')
    replaceLT(['#forge:plates/uranium', 'immersiveengineering:plate_uranium'], 'alltheores:uranium_plate')
    replaceLT(['#forge:plates/aluminum', 'immersiveengineering:plate_aluminum'], 'alltheores:aluminum_plate')
    replaceLT(['#forge:plates/constantan', 'immersiveengineering:plate_constantan'], 'alltheores:constantan_plate')
    replaceLT(['#forge:plates/steel', 'immersiveengineering:plate_steel'], 'alltheores:steel_plate')
    replaceLT(['#forge:plates/electrum', 'immersiveengineering:plate_electrum', 'createaddition:electrum_sheet'], 'alltheores:electrum_plate')
    replaceLT(['#forge:plates/brass', 'create:brass_sheet'], 'alltheores:brass_plate')
    replaceLT(['#forge:plates/zinc', 'zinc_sheet', 'createaddition:zinc_sheet'], 'alltheores:zinc_plate')
    //Gears

    //Rods
    replaceLT(['#forge:rods/copper', 'createaddition:copper_rod'], 'alltheores:copper_rod')
    replaceLT(['#forge:rods/iron', 'createaddition:iron_rod', 'immersiveengineering:stick_iron'], 'alltheores:iron_rod')
    replaceLT(['#forge:rods/gold', 'createaddition:gold_rod'], 'alltheores:gold_rod')
    replaceLT(['#forge:rods/brass', 'createaddition:brass_rod'], 'alltheores:brass_rod')
    replaceLT(['#forge:rods/electrum', 'createaddition:electrum_rod'], 'alltheores:electrum_rod')
    replaceLT(['#forge:rods/steel', 'immersiveengineering:stick_steel'], 'alltheores:steel_rod')
    replaceLT(['#forge:rods/aluminum', 'immersiveengineering:stick_aluminum'], 'alltheores:aluminum_rod')
    //Nuggets
    replaceLT(['#forge:nuggets/brass', 'create:brass_nugget'], 'alltheores:brass_nugget')
    replaceLT(['#forge:nuggets/zinc', 'create:zinc_nugget'], 'alltheores:zinc_nugget')
    replaceLT(['#forge:nuggets/copper', 'create:copper_nugget', 'immersiveengineering:nugget_copper'], 'alltheores:copper_nugget')
    replaceLT(['#forge:nuggets/electrum', 'createaddition:electrum_nugget', 'immersiveengineering:nugget_electrum'], 'alltheores:electrum_nugget')
    replaceLT(['#forge:nuggets/lead', 'eidolon:lead_nugget', 'immersiveengineering:nugget_lead'], 'alltheores:lead_nugget')
    replaceLT(['#forge:nuggets/silver', 'eidolon:silver_nugget', 'immersiveengineering:nugget_silver'], 'alltheores:silver_nugget')
    replaceLT(['#forge:nuggets/aluminum', 'immersiveengineering:nugget_aluminum'], 'alltheores:aluminum_nugget')
    replaceLT(['#forge:nuggets/steel', 'immersiveengineering:nugget_steel'], 'alltheores:steel_nugget')
    replaceLT(['#forge:nuggets/nickel', 'immersiveengineering:nugget_nickel'], 'alltheores:nickel_nugget')
    replaceLT(['#forge:nuggets/uranium', 'immersiveengineering:nugget_uranium'], 'alltheores:uranium_nugget')
    replaceLT(['#forge:nuggets/constantan', 'immersiveengineering:nugget_constantan'], 'alltheores:constantan_nugget')
    //Dusts
    replaceLT(['#forge:dusts/nickel', 'immersiveengineering:dust_nickel'], 'alltheores:nickel_dust')
    replaceLT(['#forge:dusts/silver', 'immersiveengineering:dust_silver'], 'alltheores:silver_dust')
    replaceLT(['#forge:dusts/lead', 'immersiveengineering:dust_lead'], 'alltheores:lead_dust')
    replaceLT(['#forge:dusts/aluminum', 'immersiveengineering:dust_aluminum'], 'alltheores:aluminum_dust')
    replaceLT(['#forge:dusts/copper', 'immersiveengineering:dust_copper'], 'alltheores:copper_dust')
    replaceLT(['#forge:dusts/gold', 'immersiveengineering:dust_gold'], 'alltheores:gold_dust')
    replaceLT(['#forge:dusts/iron', 'immersiveengineering:dust_iron'], 'alltheores:iron_dust')
    replaceLT(['#forge:dusts/steel', 'immersiveengineering:dust_steel'], 'alltheores:steel_dust')
    replaceLT(['#forge:dusts/electrum', 'immersiveengineering:dust_electrum'], 'alltheores:electrum_dust')
    replaceLT(['#forge:dusts/constantan', 'immersiveengineering:dust_constantan'], 'alltheores:constantan_dust')
    replaceLT(['#forge:dusts/uranium', 'immersiveengineering:dust_uranium'], 'alltheores:uranium_dust')
    replaceLT(['#forge:dusts/sulfur', 'immersiveengineering:dust_sulfur'], 'eidolon:sulfur')
    replaceLT(['#forge:dusts/diamond', 'createaddition:diamond_grit'], 'alltheores:diamond_dust')
    //Blocks
    replaceLT(['#forge:storage_blocks/brass', 'create:brass_block'], 'alltheores:brass_block')
    replaceLT(['#forge:storage_blocks/zinc', 'create:zinc_block'], 'alltheores:zinc_block')
    replaceLT(['#forge:storage_blocks/aluminum', 'immersiveengineering:storage_aluminum'], 'alltheores:aluminum_block')
    replaceLT(['#forge:storage_blocks/nickel', 'immersiveengineering:storage_nickel'], 'alltheores:nickel_block')
    replaceLT(['#forge:storage_blocks/uranium', 'immersiveengineering:storage_uranium'], 'alltheores:uranium_block')
    replaceLT(['#forge:storage_blocks/constantan', 'immersiveengineering:storage_constantan'], 'alltheores:constantan_block')
    replaceLT(['#forge:storage_blocks/electrum', 'immersiveengineering:storage_electrum'], 'alltheores:electrum_block')
    replaceLT(['#forge:storage_blocks/steel', 'immersiveengineering:storage_steel'], 'alltheores:steel_block')
    replaceLT(['#forge:storage_blocks/lead', 'immersiveengineering:storage_lead', 'eidolon:lead_block'], 'alltheores:lead_block')
    replaceLT(['#forge:storage_blocks/silver', 'immersiveengineering:storage_silver', 'eidolon:silver_block'], 'alltheores:silver_block')
    //Wires
    replaceLT(['#forge:wires/copper', 'createaddition:copper_wire'], 'immersiveengineering:wire_copper')
    replaceLT(['#forge:wires/electrum', 'createaddition:electrum_wire'], 'immersiveengineering:wire_electrum')
})



















