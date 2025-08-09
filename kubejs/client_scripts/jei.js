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
(_____)         Last Modification : 1.4.0         (_____)

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
        'eidolon:lead_ore', 'immersiveengineering:ore_lead', 'thermal:lead_ore', 'mekanism:lead_ore',
        'eidolon:silver_ore', 'immersiveengineering:ore_silver', 'darkerdepths:limestone_silver_ore', 'darkerdepths:aridrock_silver_ore', 'darkerdepths:silver_ore', 'iceandfire:silver_ore', 'occultism:silver_ore', 'thermal:silver_ore',
        'iceandfire:sapphire_ore',
        'immersiveengineering:ore_aluminum',
        'immersiveengineering:ore_nickel', 'thermal:nickel_ore',
        'immersiveengineering:ore_uranium', 'mekanism:uranium_ore',
        'mekanism:osmium_ore',
        'thermal:tin_ore', 'mekanism:tin_ore',

        //Deepslate Ores
        'create:deepslate_zinc_ore',
        'eidolon:deep_lead_ore', 'immersiveengineering:deepslate_ore_lead', 'thermal:deepslate_lead_ore', 'mekanism:deepslate_lead_ore',
        'eidolon:deep_silver_ore', 'immersiveengineering:deepslate_ore_silver', 'iceandfire:deepslate_silver_ore', 'occultism:silver_ore_deepslate', 'thermal:deepslate_silver_ore',
        'immersiveengineering:deepslate_ore_aluminum',
        'immersiveengineering:deepslate_ore_nickel', 'thermal:deepslate_nickel_ore',
        'immersiveengineering:deepslate_ore_uranium', 'mekanism:deepslate_uranium_ore',
        'mekanism:deepslate_osmium_ore',
        'thermal:deepslate_tin_ore', 'mekanism:deepslate_tin_ore',

        //Raw Materials
        'create:raw_zinc',
        'eidolon:raw_lead', 'immersiveengineering:raw_lead', 'thermal:raw_lead', 'mekanism:raw_lead',
        'eidolon:raw_silver', 'immersiveengineering:raw_silver', 'darkerdepths:raw_silver', 'occultism:raw_silver', 'thermal:raw_silver',
        'immersiveengineering:raw_aluminum',
        'immersiveengineering:raw_nickel', 'thermal:raw_nickel',
        'mekanism:block_raw_osmium',
        'immersiveengineering:raw_uranium', 'mekanism:raw_uranium',
        'mekanism:raw_osmium',
        'thermal:raw_tin', 'mekanism:raw_tin',

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
        'create:zinc_ingot',
        'eidolon:lead_ingot', 'immersiveengineering:ingot_lead', 'thermal:lead_ingot', 'mekanism:ingot_lead',
        'eidolon:silver_ingot', 'immersiveengineering:ingot_silver', 'darkerdepths:silver_ingot', 'iceandfire:silver_ingot', 'occultism:silver_ingot', 'thermal:silver_ingot',
        'immersiveengineering:ingot_aluminum',
        'immersiveengineering:ingot_constantan', 'thermal:constantan_ingot',
        'immersiveengineering:ingot_electrum', 'createaddition:electrum_ingot', 'thermal:electrum_ingot',
        'immersiveengineering:ingot_nickel', 'thermal:nickel_ingot',
        'immersiveengineering:ingot_steel', 'ad_astra:steel_ingot', 'mekanism:ingot_steel',
        'immersiveengineering:ingot_uranium', 'mekanism:ingot_uranium',
        'mekanism:ingot_osmium',
        'thermal:bronze_ingot', 'mekanism:ingot_bronze',
        'thermal:enderium_ingot',
        'thermal:invar_ingot',
        'thermal:lumium_ingot',
        'thermal:signalum_ingot',
        'thermal:tin_ingot', 'mekanism:ingot_tin',

        //Plates
        'create:brass_sheet',
        'createdeco:netherite_sheet',
        'createdeco:zinc_sheet', 'createaddition:zinc_sheet',
        'immersiveengineering:plate_aluminum',
        'immersiveengineering:plate_constantan', 'thermal:constantan_plate',
        'immersiveengineering:plate_copper', 'create:copper_sheet', 'thermal:copper_plate',
        'immersiveengineering:plate_electrum', 'createaddition:electrum_sheet', 'thermal:electrum_plate',
        'immersiveengineering:plate_gold', 'create:golden_sheet', 'thermal:gold_plate',
        'immersiveengineering:plate_iron', 'create:iron_sheet', 'thermal:iron_plate', 'ad_astra:iron_plate',
        'immersiveengineering:plate_lead', 'thermal:lead_plate',
        'immersiveengineering:plate_nickel', 'thermal:nickel_plate',
        'immersiveengineering:plate_silver', 'thermal:silver_plate',
        'immersiveengineering:plate_steel', 'ad_astra:steel_plate',
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
        'immersiveengineering:stick_iron', 'createaddition:iron_rod', 'ad_astra:iron_rod',
        'immersiveengineering:stick_steel',

        //Nuggets
        'create:brass_nugget',
        'create:zinc_nugget',
        'immersiveengineering:nugget_aluminum',
        'immersiveengineering:nugget_constantan', 'thermal:constantan_nugget',
        'immersiveengineering:nugget_copper', 'create:copper_nugget', 'iceandfire:copper_nugget', 'thermal:copper_nugget', 'skilltree:copper_nugget',
        'immersiveengineering:nugget_electrum', 'createaddition:electrum_nugget', 'thermal:electrum_nugget',
        'immersiveengineering:nugget_lead', 'eidolon:lead_nugget', 'thermal:lead_nugget', 'mekanism:nugget_lead',
        'immersiveengineering:nugget_nickel', 'thermal:nickel_nugget',
        'immersiveengineering:nugget_silver', 'eidolon:silver_nugget', 'iceandfire:silver_nugget', 'occultism:silver_nugget', 'thermal:silver_nugget',
        'immersiveengineering:nugget_steel', 'ad_astra:steel_nugget', 'mekanism:nugget_steel',
        'immersiveengineering:nugget_uranium', 'mekanism:nugget_uranium',
        'mekanism:nugget_osmium',
        'thermal:bronze_nugget', 'mekanism:nugget_bronze',
        'thermal:enderium_nugget',
        'thermal:invar_nugget',
        'thermal:lumium_nugget',
        'thermal:netherite_nugget',
        'thermal:signalum_nugget',
        'thermal:tin_nugget', 'mekanism:nugget_tin',

        //Dusts
        'ae2:ender_dust',
        'createaddition:diamond_grit', 'thermal:diamond_dust', 'mekanism:dust_diamond',
        'immersiveengineering:dust_aluminum',
        'immersiveengineering:dust_constantan', 'thermal:constantan_dust',
        'immersiveengineering:dust_copper', 'occultism:copper_dust', 'thermal:copper_dust', 'mekanism:dust_copper',
        'immersiveengineering:dust_electrum', 'thermal:electrum_dust',
        'immersiveengineering:dust_gold', 'occultism:gold_dust', 'thermal:gold_dust', 'mekanism:dust_gold',
        'immersiveengineering:dust_iron', 'occultism:iron_dust', 'thermal:iron_dust', 'mekanism:dust_iron',
        'immersiveengineering:dust_lead', 'thermal:lead_dust', 'mekanism:dust_lead',
        'immersiveengineering:dust_nickel', 'thermal:nickel_dust',
        'immersiveengineering:dust_silver', 'occultism:silver_dust', 'thermal:silver_dust',
        'immersiveengineering:dust_steel', 'mekanism:dust_steel',
        'immersiveengineering:dust_sulfur', 'eidolon:sulfur', 'mekanism:dust_sulfur',
        'immersiveengineering:dust_uranium', 'mekanism:dust_uranium',
        'immersiveengineering:dust_wood', 'mekanism:sawdust',
        'mekanism:dust_emerald',
        'mekanism:dust_lapis_lazuli',
        'mekanism:dust_osmium',
        'mekanism:dust_quartz',
        'occultism:obsidian_dust', 'mekanism:dust_obsidian',
        'thermal:bronze_dust', 'mekanism:dust_bronze',
        'thermal:enderium_dust',
        'thermal:invar_dust',
        'thermal:lumium_dust',
        'thermal:netherite_dust', 'mekanism:dust_netherite',
        'thermal:signalum_dust',
        'thermal:tin_dust', 'mekanism:dust_tin',

        //Blocks
        'create:brass_block',
        'create:zinc_block',
        'iceandfire:sapphire_block',
        'immersiveengineering:storage_aluminum',
        'immersiveengineering:storage_constantan', 'thermal:constantan_block',
        'immersiveengineering:storage_electrum', 'thermal:electrum_block',
        'immersiveengineering:storage_lead', 'eidolon:lead_block', 'thermal:lead_block', 'mekanism:block_lead',
        'immersiveengineering:storage_nickel', 'thermal:nickel_block',
        'immersiveengineering:storage_silver', 'eidolon:silver_block', 'darkerdepths:silver_block', 'iceandfire:silver_block', 'occultism:silver_block', 'thermal:silver_block',
        'immersiveengineering:storage_steel', 'ad_astra:steel_block', 'mekanism:block_steel',
        'immersiveengineering:storage_uranium', 'mekanism:block_uranium',
        'mekanism:block_osmium',
        'thermal:bronze_block', 'mekanism:block_bronze',
        'thermal:coal_coke_block',
        'thermal:enderium_block',
        'thermal:invar_block',
        'thermal:lumium_block',
        'thermal:signalum_block',
        'thermal:tin_block', 'mekanism:block_tin',
        'quark:charcoal_block', 'mekanism:block_charcoal',
        'quark:carrot_crate', 'thermal:carrot_block',
        'quark:gunpowder_sack',

        //Wires
        'createaddition:copper_wire',
        'createaddition:electrum_wire',

        //Gems
        'iceandfire:sapphire_gem',

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
        'balancedflight:ascended_flight_ring'
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
    event.hide('ad_astra:oil')
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