/* 
 _____                                             _____ 
( ___ ) © SanoLink 2024/2026. All rights reserved.( ___ )
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
(_____)         Last Modification : 1.6.0         (_____)

*/

const $ProductiveBeesJeiPlugin = Java.loadClass("cy.jdkdigital.productivebees.integrations.jei.ProductiveBeesJeiPlugin")
const $BeeIngredient = Java.loadClass("cy.jdkdigital.productivebees.integrations.jei.ingredients.BeeIngredient")
const $FluidStack = Java.loadClass("net.minecraftforge.fluids.FluidStack");
const $ForgeTypes = Java.loadClass('mezz.jei.api.forge.ForgeTypes');

JEIEvents.hideCustom(event => {
    let beeToRemove = [
        "nomad_bee",
        "blue_banded_bee",
        "sweat_bee",
        "reed_bee",
        "mason_bee",
        "yellow_black_carpenter_bee",
        "neon_cuckoo_bee",
        "green_carpenter_bee",
        "digger_bee",
        "ashy_mining_bee",
        "chocolate_mining_bee",
        "resin_bee",
        "leafcutter_bee"
    ]
    let beeIngredients = event.get($ProductiveBeesJeiPlugin.BEE_INGREDIENT).getAllIngredients()
    beeIngredients.forEach((/** @type {$BeeIngredient} */ bee) => {
        beeToRemove.forEach(toRemove => {
            if (bee.toString().includes(toRemove)) {
                event.get($ProductiveBeesJeiPlugin.BEE_INGREDIENT).hide(bee)
            }
        })
    })
    event.get($ForgeTypes.FLUID_STACK).hide(new $FluidStack(Fluid.of('productivebees:honey').getFluid(), 1000, 'compound'))
})

JEIEvents.hideItems(event => {

    event.hide([
        '#alltheores:ore_hammers',
        'aquaculture:diamond_fillet_knife',
        'aquaculture:gold_fillet_knife',
        'aquaculture:iron_fillet_knife',
        'aquaculture:stone_fillet_knife',
        'aquaculture:wooden_fillet_knife',
        /botanypots:.+_(terracotta|concrete)(_hopper)?_botany_pot/,
        /botanypotstiers:(elite|ultra|creative)_.+_(terracotta|concrete)(_hopper)?_botany_pot/,
        /botanypotstiers:(elite|ultra|creative)_terracotta_botany_pot/,

        //Ores
        'create:zinc_ore',
        'eidolon:lead_ore', 'immersiveengineering:ore_lead', 'thermal:lead_ore', 'mekanism:lead_ore', 'ftbic:lead_ore',
        'eidolon:silver_ore', 'immersiveengineering:ore_silver', 'darkerdepths:limestone_silver_ore', 'darkerdepths:aridrock_silver_ore', 'darkerdepths:silver_ore', 'iceandfire:silver_ore', 'occultism:silver_ore', 'thermal:silver_ore',
        'iceandfire:sapphire_ore',
        'immersiveengineering:ore_aluminum', 'ftbic:aluminum_ore',
        'immersiveengineering:ore_nickel', 'thermal:nickel_ore',
        'immersiveengineering:ore_uranium', 'mekanism:uranium_ore', 'ftbic:uranium_ore',
        'mekanism:osmium_ore',
        'thermal:tin_ore', 'mekanism:tin_ore', 'ftbic:tin_ore',
        'ftbic:iridium_ore',

        //Deepslate Ores
        'create:deepslate_zinc_ore',
        'eidolon:deep_lead_ore', 'immersiveengineering:deepslate_ore_lead', 'thermal:deepslate_lead_ore', 'mekanism:deepslate_lead_ore', 'ftbic:deepslate_lead_ore',
        'eidolon:deep_silver_ore', 'immersiveengineering:deepslate_ore_silver', 'iceandfire:deepslate_silver_ore', 'occultism:silver_ore_deepslate', 'thermal:deepslate_silver_ore',
        'immersiveengineering:deepslate_ore_aluminum', 'ftbic:deepslate_aluminum_ore',
        'immersiveengineering:deepslate_ore_nickel', 'thermal:deepslate_nickel_ore',
        'immersiveengineering:deepslate_ore_uranium', 'mekanism:deepslate_uranium_ore', 'ftbic:deepslate_uranium_ore',
        'mekanism:deepslate_osmium_ore',
        'thermal:deepslate_tin_ore', 'mekanism:deepslate_tin_ore', 'ftbic:deepslate_tin_ore',
        'ftbic:deepslate_iridium_ore',

        //Raw Materials
        'create:raw_zinc',
        'eidolon:raw_lead', 'immersiveengineering:raw_lead', 'thermal:raw_lead', 'mekanism:raw_lead', 'ftbic:lead_chunk',
        'eidolon:raw_silver', 'immersiveengineering:raw_silver', 'darkerdepths:raw_silver', 'occultism:raw_silver', 'thermal:raw_silver',
        'immersiveengineering:raw_aluminum', 'ftbic:aluminum_chunk',
        'immersiveengineering:raw_nickel', 'thermal:raw_nickel',
        'mekanism:block_raw_osmium',
        'immersiveengineering:raw_uranium', 'mekanism:raw_uranium', 'ftbic:uranium_chunk',
        'mekanism:raw_osmium',
        'thermal:raw_tin', 'mekanism:raw_tin', 'ftbic:tin_chunk',
        'ftbic:iridium_chunk', 

        //Raw Storage Blocks
        'create:raw_zinc_block',
        'eidolon:raw_lead_block', 'immersiveengineering:raw_block_lead', 'thermal:raw_lead_block', 'mekanism:block_raw_lead',
        'eidolon:raw_silver_block', 'immersiveengineering:raw_block_silver', 'darkerdepths:raw_silver_block', 'thermal:raw_silver_block',
        'immersiveengineering:raw_block_aluminum',
        'immersiveengineering:raw_block_nickel', 'thermal:raw_nickel_block',
        'immersiveengineering:raw_block_uranium', 'mekanism:block_raw_uranium',
        'thermal:raw_tin_block', 'mekanism:block_raw_tin',

        //Ingots
        'create:brass_ingot',
        'create:zinc_ingot', 'chemlib:zinc_ingot',
        'eidolon:lead_ingot', 'immersiveengineering:ingot_lead', 'thermal:lead_ingot', 'mekanism:ingot_lead', 'chemlib:lead_ingot', 'ftbic:lead_ingot',
        'eidolon:silver_ingot', 'immersiveengineering:ingot_silver', 'darkerdepths:silver_ingot', 'iceandfire:silver_ingot', 'occultism:silver_ingot', 'thermal:silver_ingot', 'chemlib:silver_ingot',
        'immersiveengineering:ingot_aluminum', 'chemlib:aluminum_ingot', 'ftbic:aluminum_ingot',
        'immersiveengineering:ingot_constantan', 'thermal:constantan_ingot',
        'immersiveengineering:ingot_electrum', 'createaddition:electrum_ingot', 'thermal:electrum_ingot',
        'immersiveengineering:ingot_nickel', 'thermal:nickel_ingot', 'chemlib:nickel_ingot',
        'immersiveengineering:ingot_steel', 'ad_astra:steel_ingot', 'mekanism:ingot_steel',
        'immersiveengineering:ingot_uranium', 'mekanism:ingot_uranium', 'chemlib:uranium_ingot', 'ftbic:uranium_ingot',
        'mekanism:ingot_osmium', 'chemlib:osmium_ingot',
        'thermal:bronze_ingot', 'mekanism:ingot_bronze', 'ftbic:bronze_ingot',
        'thermal:enderium_ingot', 'ftbic:enderium_ingot',
        'thermal:invar_ingot',
        'thermal:lumium_ingot',
        'thermal:signalum_ingot',
        'thermal:tin_ingot', 'mekanism:ingot_tin', 'chemlib:tin_ingot', 'ftbic:tin_ingot',
        'chemlib:chromium_ingot',
        'chemlib:iridium_ingot', 'ftbic:iridium_ingot',
        'chemlib:platinum_ingot',
        'chemlib:titanium_ingot',
        'chemlib:tungsten_ingot',

        //Plates
        'create:brass_sheet',
        'createdeco:netherite_sheet',
        'createdeco:zinc_sheet', 'createaddition:zinc_sheet',
        'immersiveengineering:plate_aluminum', 'ftbic:aluminum_plate',
        'immersiveengineering:plate_constantan', 'thermal:constantan_plate',
        'immersiveengineering:plate_copper', 'create:copper_sheet', 'thermal:copper_plate', 'ftbic:copper_plate',
        'immersiveengineering:plate_electrum', 'createaddition:electrum_sheet', 'thermal:electrum_plate',
        'immersiveengineering:plate_gold', 'create:golden_sheet', 'thermal:gold_plate', 'ftbic:gold_plate',
        'immersiveengineering:plate_iron', 'create:iron_sheet', 'thermal:iron_plate', 'ad_astra:iron_plate', 'ftbic:iron_plate',
        'immersiveengineering:plate_lead', 'thermal:lead_plate', 'ftbic:lead_plate',
        'immersiveengineering:plate_nickel', 'thermal:nickel_plate',
        'immersiveengineering:plate_silver', 'thermal:silver_plate',
        'immersiveengineering:plate_steel', 'ad_astra:steel_plate',
        'immersiveengineering:plate_uranium', 'ftbic:uranium_plate',
        'thermal:bronze_plate', 'ftbic:bronze_plate',
        'thermal:enderium_plate', 'ftbic:enderium_plate',
        'thermal:invar_plate',
        'thermal:lumium_plate',
        'thermal:signalum_plate',
        'thermal:tin_plate', 'ftbic:tin_plate',
        'ftbic:iridium_plate',

        //Gears
        'industrialforegoing:diamond_gear', 'thermal:diamond_gear',
        'industrialforegoing:gold_gear', 'thermal:gold_gear', 'ftbic:gold_gear',
        'industrialforegoing:iron_gear', 'thermal:iron_gear', 'ftbic:iron_gear',
        'thermal:bronze_gear', 'ftbic:bronze_gear',
        'thermal:constantan_gear',
        'thermal:copper_gear', 'ftbic:copper_gear',
        'thermal:electrum_gear',
        'thermal:enderium_gear', 'ftbic:enderium_gear',
        'thermal:invar_gear',
        'thermal:lead_gear', 'ftbic:lead_gear',
        'thermal:lumium_gear',
        'thermal:nickel_gear',
        'thermal:signalum_gear',
        'thermal:silver_gear',
        'thermal:tin_gear', 'ftbic:tin_gear',
        'ftbic:iridium_gear',
        'ftbic:uranium_gear',
        'ftbic:aluminum_gear',
        'alltheores:peridot_dust',
        'alltheores:ruby_dust',
        'alltheores:sapphire_dust',

        //Rods
        'createaddition:brass_rod',
        'createaddition:copper_rod', 'ftbic:copper_rod',
        'createaddition:electrum_rod',
        'createaddition:gold_rod', 'ftbic:gold_rod',
        'immersiveengineering:stick_aluminum', 'ftbic:aluminum_rod',
        'immersiveengineering:stick_iron', 'createaddition:iron_rod', 'ad_astra:iron_rod', 'ftbic:iron_rod',
        'immersiveengineering:stick_steel',
        'ftbic:iridium_rod',
        'ftbic:tin_rod',
        'ftbic:lead_rod',
        'ftbic:uranium_rod',
        'ftbic:enderium_rod',
        'ftbic:bronze_rod',

        //Nuggets
        'create:brass_nugget',
        'create:zinc_nugget', 'chemlib:zinc_nugget',
        'immersiveengineering:nugget_aluminum', 'chemlib:aluminum_nugget', 'ftbic:aluminum_nugget',
        'immersiveengineering:nugget_constantan', 'thermal:constantan_nugget',
        'immersiveengineering:nugget_copper', 'create:copper_nugget', 'iceandfire:copper_nugget', 'thermal:copper_nugget', 'skilltree:copper_nugget', 'ftbic:copper_nugget',
        'immersiveengineering:nugget_electrum', 'createaddition:electrum_nugget', 'thermal:electrum_nugget',
        'immersiveengineering:nugget_lead', 'eidolon:lead_nugget', 'thermal:lead_nugget', 'mekanism:nugget_lead', 'chemlib:lead_nugget', 'ftbic:lead_nugget',
        'immersiveengineering:nugget_nickel', 'thermal:nickel_nugget', 'chemlib:nickel_nugget',
        'immersiveengineering:nugget_silver', 'eidolon:silver_nugget', 'iceandfire:silver_nugget', 'occultism:silver_nugget', 'thermal:silver_nugget', 'chemlib:silver_nugget',
        'immersiveengineering:nugget_steel', 'ad_astra:steel_nugget', 'mekanism:nugget_steel',
        'immersiveengineering:nugget_uranium', 'mekanism:nugget_uranium', 'chemlib:uranium_nugget', 'ftbic:uranium_nugget',
        'mekanism:nugget_osmium', 'chemlib:osmium_nugget',
        'thermal:bronze_nugget', 'mekanism:nugget_bronze', 'ftbic:bronze_nugget',
        'thermal:enderium_nugget', 'ftbic:enderium_nugget',
        'thermal:invar_nugget',
        'thermal:lumium_nugget',
        'thermal:netherite_nugget',
        'thermal:signalum_nugget',
        'thermal:tin_nugget', 'mekanism:nugget_tin', 'chemlib:tin_nugget', 'ftbic:tin_nugget',
        'chemlib:chromium_nugget',
        'chemlib:iridium_nugget', 'ftbic:iridium_nugget',
        'chemlib:platinum_nugget',
        'chemlib:titanium_nugget',
        'chemlib:tungsten_nugget',

        //Dusts
        'ae2:ender_dust', 'ftbic:ender_dust',
        'createaddition:diamond_grit', 'thermal:diamond_dust', 'mekanism:dust_diamond', 'ftbic:diamond_dust',
        'immersiveengineering:dust_aluminum', 'chemlib:aluminum_dust', 'ftbic:aluminum_dust',
        'immersiveengineering:dust_constantan', 'thermal:constantan_dust',
        'immersiveengineering:dust_copper', 'occultism:copper_dust', 'thermal:copper_dust', 'mekanism:dust_copper', 'chemlib:copper_dust', 'ftbic:copper_dust',
        'immersiveengineering:dust_electrum', 'thermal:electrum_dust',
        'immersiveengineering:dust_gold', 'occultism:gold_dust', 'thermal:gold_dust', 'mekanism:dust_gold', 'chemlib:gold_dust', 'ftbic:gold_dust',
        'immersiveengineering:dust_iron', 'occultism:iron_dust', 'thermal:iron_dust', 'mekanism:dust_iron', 'chemlib:iron_dust', 'ftbic:iron_dust',
        'immersiveengineering:dust_lead', 'thermal:lead_dust', 'mekanism:dust_lead', 'chemlib:lead_dust', 'ftbic:lead_dust',
        'immersiveengineering:dust_nickel', 'thermal:nickel_dust', 'chemlib:nickel_dust',
        'immersiveengineering:dust_silver', 'occultism:silver_dust', 'thermal:silver_dust', 'chemlib:silver_dust',
        'immersiveengineering:dust_steel', 'mekanism:dust_steel',
        'immersiveengineering:dust_sulfur', 'eidolon:sulfur', 'mekanism:dust_sulfur', 'chemlib:sulfur_dust',
        'immersiveengineering:dust_uranium', 'mekanism:dust_uranium', 'chemlib:uranium_dust', 'ftbic:uranium_dust',
        'immersiveengineering:dust_wood', 'mekanism:sawdust',
        'mekanism:dust_emerald',
        'mekanism:dust_lapis_lazuli',
        'mekanism:dust_osmium', 'chemlib:osmium_dust',
        'mekanism:dust_quartz',
        'occultism:obsidian_dust', 'mekanism:dust_obsidian', 'ftbic:obsidian_dust',
        'thermal:bronze_dust', 'mekanism:dust_bronze', 'ftbic:bronze_dust',
        'thermal:enderium_dust', 'ftbic:enderium_dust',
        'thermal:invar_dust',
        'thermal:lumium_dust',
        'thermal:netherite_dust', 'mekanism:dust_netherite',
        'thermal:signalum_dust',
        'thermal:tin_dust', 'mekanism:dust_tin', 'chemlib:tin_dust', 'ftbic:tin_dust',
        'chemlib:chromium_dust',
        'chemlib:zinc_dust',
        'chemlib:iridium_dust', 'ftbic:iridium_dust',
        'chemlib:platinum_dust',
        'chemlib:lithium_dust',
        'chemlib:titanium_dust',
        'chemlib:tungsten_dust',
        'ftbic:charcoal_dust',
        'ftbic:coal_dust',

        //Blocks
        'create:brass_block',
        'create:zinc_block', 'chemlib:zinc_metal_block',
        'iceandfire:sapphire_block',
        'immersiveengineering:storage_aluminum', 'chemlib:aluminum_metal_block', 'ftbic:aluminum_block',
        'immersiveengineering:storage_constantan', 'thermal:constantan_block',
        'immersiveengineering:storage_electrum', 'thermal:electrum_block',
        'immersiveengineering:storage_lead', 'eidolon:lead_block', 'thermal:lead_block', 'mekanism:block_lead', 'chemlib:lead_metal_block', 'ftbic:lead_block',
        'immersiveengineering:storage_nickel', 'thermal:nickel_block', 'chemlib:nickel_metal_block',
        'immersiveengineering:storage_silver', 'eidolon:silver_block', 'darkerdepths:silver_block', 'iceandfire:silver_block', 'occultism:silver_block', 'thermal:silver_block', 'chemlib:silver_metal_block',
        'immersiveengineering:storage_steel', 'ad_astra:steel_block', 'mekanism:block_steel',
        'immersiveengineering:storage_uranium', 'mekanism:block_uranium', 'chemlib:uranium_metal_block', 'ftbic:uranium_block',
        'mekanism:block_osmium', 'chemlib:osmium_metal_block',
        'thermal:bronze_block', 'mekanism:block_bronze', 'ftbic:bronze_block',
        'thermal:coal_coke_block',
        'thermal:enderium_block', 'ftbic:enderium_block',
        'thermal:invar_block',
        'thermal:lumium_block',
        'thermal:signalum_block',
        'thermal:tin_block', 'mekanism:block_tin', 'chemlib:tin_metal_block', 'ftbic:tin_block',
        'quark:charcoal_block', 'mekanism:block_charcoal',
        'quark:carrot_crate', 'thermal:carrot_block',
        'quark:gunpowder_sack',
        'chemlib:chromium_metal_block',
        'chemlib:iridium_metal_block', 'ftbic:iridium_block',
        'chemlib:platinum_metal_block',
        'chemlib:titanium_metal_block',
        'chemlib:tungsten_metal_block',

        //Wires
        'ftbic:aluminum_wire',
        'immersiveengineering:wire_copper', 'ftbic:copper_wire',
        'immersiveengineering:wire_electrum',
        'ftbic:gold_wire',

        //Gems
        'iceandfire:sapphire_gem',

        //Coins
        'createdeco:zinc_coin',
        'createdeco:copper_coin',
        'createdeco:brass_coin',
        'createdeco:iron_coin',
        'createdeco:gold_coin',
        'createdeco:netherite_coin',
        'createdeco:cast_iron_coin',
        
        //Dirty Materials
        'alltheores:dirty_uranium_dust', 'alltheores:uranium_shard', 'alltheores:uranium_crystal', 'alltheores:uranium_clump',
        'alltheores:dirty_tin_dust', 'alltheores:tin_shard', 'alltheores:tin_crystal', 'alltheores:tin_clump',
        'alltheores:dirty_osmium_dust', 'alltheores:osmium_shard', 'alltheores:osmium_crystal', 'alltheores:osmium_clump',
        'alltheores:dirty_lead_dust', 'alltheores:lead_shard', 'alltheores:lead_crystal', 'alltheores:lead_clump',
        'alltheores:dirty_copper_dust', 'alltheores:copper_shard', 'alltheores:copper_crystal', 'alltheores:copper_clump',

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
        'thermal:creosote_bucket',
        'pneumaticcraft:wheat_flour',
        'create:dough',
        'immersiveengineering:slag',
        'minecraft:decorated_pot',
        'ad_astra:oil_bucket',
        'ad_astra:hammer',
        'mysticalagradditions:nether_prosperity_ore',
        'mysticalagradditions:end_prosperity_ore',
        'ad_astra:mercury_iron_ore',
        'productivebees:spawn_egg_ashy_mining_bee',
        'productivebees:spawn_egg_chocolate_mining_bee',
        'productivebees:spawn_egg_resin_bee',
        'productivebees:spawn_egg_leafcutter_bee',
        'productivebees:spawn_egg_digger_bee',
        'productivebees:spawn_egg_green_carpenter_bee',
        'productivebees:spawn_egg_neon_cuckoo_bee',
        'productivebees:spawn_egg_yellow_black_carpenter_bee',
        'productivebees:spawn_egg_mason_bee',
        'productivebees:spawn_egg_reed_bee',
        'productivebees:spawn_egg_sweat_bee',
        'productivebees:spawn_egg_blue_banded_bee',
        'productivebees:spawn_egg_nomad_bee',
        'productivebees:honey_bucket',
        'mysticalagriculture:infusion_crystal',
        'angelring:energetic_angel_ring',
        'sophisticatedstorage:pump_upgrade',
        'sophisticatedstorage:advanced_pump_upgrade',
        'sophisticatedstorage:xp_pump_upgrade',
        'balancedflight:ascended_flight_ring',
        'mysticalagradditions:dragon_scale',
        'chemlib:lithium_plate',
        'chemlib:beryllium_plate',
        'chemlib:sodium_plate',
        'chemlib:magnesium_plate',
        'chemlib:aluminum_plate',
        'chemlib:potassium_plate',
        'chemlib:calcium_plate',
        'chemlib:scandium_plate',
        'chemlib:titanium_plate',
        'chemlib:vanadium_plate',
        'chemlib:chromium_plate',
        'chemlib:manganese_plate',
        'chemlib:iron_plate',
        'chemlib:cobalt_plate',
        'chemlib:nickel_plate',
        'chemlib:copper_plate',
        'chemlib:zinc_plate',
        'chemlib:gallium_plate',
        'chemlib:rubidium_plate',
        'chemlib:strontium_plate',
        'chemlib:yttrium_plate',
        'chemlib:zirconium_plate',
        'chemlib:niobium_plate',
        'chemlib:molybdenum_plate',
        'chemlib:ruthenium_plate',
        'chemlib:rhodium_plate',
        'chemlib:palladium_plate',
        'chemlib:silver_plate',
        'chemlib:cadmium_plate',
        'chemlib:indium_plate',
        'chemlib:tin_plate',
        'chemlib:cesium_plate',
        'chemlib:barium_plate',
        'chemlib:lanthanum_plate',
        'chemlib:cerium_plate',
        'chemlib:praseodymium_plate',
        'chemlib:neodymium_plate',
        'chemlib:samarium_plate',
        'chemlib:europium_plate',
        'chemlib:gadolinium_plate',
        'chemlib:terbium_plate',
        'chemlib:dysprosium_plate',
        'chemlib:holmium_plate',
        'chemlib:erbium_plate',
        'chemlib:thulium_plate',
        'chemlib:ytterbium_plate',
        'chemlib:lutetium_plate',
        'chemlib:hafnium_plate',
        'chemlib:tantalum_plate',
        'chemlib:tungsten_plate',
        'chemlib:rhenium_plate',
        'chemlib:osmium_plate',
        'chemlib:iridium_plate',
        'chemlib:platinum_plate',
        'chemlib:gold_plate',
        'chemlib:thallium_plate',
        'chemlib:lead_plate',
        'chemlib:bismuth_plate',
        'chemlib:polonium_plate',
        'chemlib:francium_plate',
        'chemlib:radium_plate',
        'chemlib:actinium_plate',
        'chemlib:thorium_plate',
        'chemlib:protactinium_plate',
        'chemlib:uranium_plate',
        'myrtrees:latex',
        'ftbic:rubber',
        'myrtrees:wooden_bucket',
        'myrtrees:tree_tap',
        'ftbic:silicon',
        'ftbic:advanced_powered_furnace',
        'ftbic:advanced_macerator',
        'ftbic:advanced_centrifuge',
        'ftbic:advanced_compressor',
        'ftbic:teleporter',
        'ftbic:powered_crafting_table',
        'projectexpansion:matter_upgrader',
        'projectexpansion:basic_compressed_collector',
        'projectexpansion:dark_compressed_collector',
        'projectexpansion:red_compressed_collector',
        'projectexpansion:magenta_compressed_collector',
        'projectexpansion:pink_compressed_collector',
        'projectexpansion:purple_compressed_collector',
        'projectexpansion:violet_compressed_collector',
        'projectexpansion:blue_compressed_collector',
        'projectexpansion:cyan_compressed_collector',
        'projectexpansion:green_compressed_collector',
        'projectexpansion:lime_compressed_collector',
        'projectexpansion:yellow_compressed_collector',
        'projectexpansion:orange_compressed_collector',
        'projectexpansion:white_compressed_collector',
        'projectexpansion:fading_compressed_collector',
        'projectexpansion:final_compressed_collector',
        'projecte:watch_of_flowing_time',
        'immersivepetroleum:ethylene_bucket',
        'chemlib:ethylene_bucket',
        'chemlib:oxygen_bucket',
        'chemlib:hydrogen_bucket',
        'chemlib:chlorine_bucket',
        'chemlib:sulfur_dioxide_bucket',
        'chemlib:sulfur_trioxide_bucket',
        'chemlib:sulfuric_acid_bucket',
        'chemlib:hydrochloric_acid_bucket',
        'trofers:ae2',
        'tconstruct:dragon_scale',
        'mekanism:creative_fluid_tank',
        'ftbic:fluid_cell',
        'evilcraft:dark_tank',
        'mekanism:creative_chemical_tank'
    ])

    global.TechEvCreateDecoCoinsMat.forEach(mat => event.hide(`createdeco:${mat}_coin`))
    
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
    event.hide('ad_astra:oil')
    event.hide('immersivepetroleum:ethylene')
    event.hide('chemlib:ethylene_fluid')
    event.hide('chemlib:oxygen_fluid')
    event.hide('chemlib:hydrogen_fluid')
    event.hide('chemlib:chlorine_fluid')
    event.hide('chemlib:sulfur_dioxide_fluid')
    event.hide('chemlib:sulfur_trioxide_fluid')
    event.hide('chemlib:sulfuric_acid_fluid')
    event.hide('chemlib:hydrochloric_acid_fluid')
})

JEIEvents.addFluids(event => {
    event.add([
        "create:tea"
    ])
})
JEIEvents.removeCategories(event => {

    event.remove([
        'twilightforest:uncrafting'
    ])

})

JEIEvents.addItems(event => {

    event.add([
        'minecraft:dragon_egg',
        'create:netherite_sandpaper',
        'minecraft:powder_snow_bucket',
        Item.of('immersiveengineering:blueprint', '{blueprint:"specialBullet"}'),
        Item.of('immersiveengineering:blueprint', '{blueprint:"bullet"}'),
        Item.of('immersiveengineering:blueprint', '{blueprint:"molds"}'),
        Item.of('immersiveengineering:blueprint', '{blueprint:"bannerpatterns"}'),
        Item.of('immersiveengineering:blueprint', '{blueprint:"components"}'),
        Item.of('immersiveengineering:blueprint', '{blueprint:"appliedComponents"}'),
        'dustydecorations:bucket_o_coins_bucket',
        'mekanism:creative_fluid_tank',
        'ftbic:fluid_cell',
        'evilcraft:dark_tank',
        'mekanism:creative_chemical_tank'
    ])

    global.TechEvBlockItems.forEach(entry => {
        event.add(entry.id)
    })
})

JEIEvents.information(event => {

    event.addItem('ae2:elemental_processor_press', Component.translatable("gui.ae2.inWorldCraftingPresses"))
    event.addItem('eidolon:merammer_root', "Merammer Roots are obtained by breaking White Flowers with Athame.")
    event.addItem('eidolon:oanna_bloom', "Flowering Oannas are obtained by breaking Lily Pads with Athame.")
})