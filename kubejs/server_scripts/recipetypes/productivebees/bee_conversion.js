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

ServerEvents.recipes(event => {

    //Recipes
    let recipes = []

    const ProsperityBased = [
        { result: "inferium", item: "mysticalagriculture:inferium_block" },
        { result: "prudentium", item: "mysticalagriculture:prudentium_block" },
        { result: "tertium", item: "mysticalagriculture:tertium_block" },
        { result: "imperium", item: "mysticalagriculture:imperium_block" },
        { result: "supremium", item: "mysticalagriculture:supremium_block" },
        { result: "insanium", item: "mysticalagradditions:insanium_block" },
        { result: "bumble_bee", item: "minecraft:saddle" },
        { result: "dye_bee", item: "#forge:dyes" },
        { result: "sponge", item: "minecraft:sponge" },
        { result: "cupid_bee", item: "skilltree:healing_quiver" },
        { result: "lumber_bee", item: "#forge:tools/axes" },
        { result: "pure", item: "botania:pure_daisy" },
        { result: "sugarbag", item: "minecraft:sugar" },
        { result: "hoarder_bee", item: "minecraft:hopper" },
        { result: "collector_bee", item: "mob_grinding_utils:absorption_hopper" },
        { result: "mana", item: "botania:mana_bottle" },
        { result: "farmer_bee", item: "#forge:tools/hoes" },
        { result: "quarry_bee", item: "#forge:tools/pickaxes" },
        { result: "emeraldite", item: "byg:emeraldite_shards" },
        { result: "pendorite", item: "byg:pendorite_block" },
        { result: "grave", item: "tombstone:grave_dust" },
        { result: "pepto_bismol", item: NBTItem('botania:brew_vial', '{brewKey:"botania:healing"}') },
        { result: "ametrine", item: "byg:ametrine_block" },
        { result: "soulium", item: "mysticalagriculture:soulium_block" },
    ]
    const InferiumBased = [
        { result: "geotic", item: "mysticalagriculture:earth_agglomeratio" },
        { result: "magmatic", item: "mysticalagriculture:fire_agglomeratio" },
        { result: "aquatic", item: "mysticalagriculture:water_agglomeratio" },
        { result: "aeric", item: "mysticalagriculture:air_agglomeratio" }
    ]
    const PrudentiumBased = [
        { result: "coal", item: "minecraft:coal_block" },
        { result: "piggy", item: "farmersdelight:carrot_crate" },
        { result: "chicken", item: "minecraft:wheat_seeds" },
        { result: "rancher_bee", item: "minecraft:hay_block" },
        { result: "sheep", item: "minecraft:white_wool" },
        { result: "sulfur", item: "thermal:sulfur_block" },
        { result: "aluminum", item: "alltheores:aluminum_block" },
        { result: "niter", item: "thermal:niter_block" },
        { result: "copper", item: "minecraft:copper_block" },
        { result: "glowing", item: "minecraft:glowstone" },
        { result: "redstone", item: "minecraft:redstone_block" },
        { result: "obsidian", item: "minecraft:obsidian" },
        { result: "prismarine", item: "minecraft:prismarine" },
        { result: "rabbit", item: "minecraft:rabbit_foot" },
        { result: "tin", item: "alltheores:tin_block" },
        { result: "zinc", item: "alltheores:zinc_block" },
        { result: "silver", item: "alltheores:silver_block" },
        { result: "lead", item: "alltheores:lead_block" },
        { result: "gold", item: "minecraft:gold_block" },
        { result: "lapis", item: "minecraft:lapis_block" },
        { result: "radioactive", item: "alltheores:uranium_block" },
        { result: "osmium", item: "alltheores:osmium_block" },
        { result: "platinum", item: "alltheores:platinum_block" },
        { result: "nickel", item: "alltheores:nickel_block" },
        { result: "iron", item: "minecraft:iron_block" }
    ]
    const TertiumBased = [
        { result: "amethyst", item: "minecraft:amethyst_block" },
        { result: "squid", item: "minecraft:ink_sac" },
        { result: "fishy", item: "minecraft:pufferfish" },
        { result: "slimy", item: "minecraft:slime_block" },
        { result: "turtle", item: "minecraft:scute" },
        { result: "silicon", item: "ae2:silicon" },
        { result: "apatite", item: "thermal:apatite_block" },
        { result: "peridot", item: "alltheores:peridot_block" },
        { result: "crystalline", item: "minecraft:quartz_block" },
        { result: "zombie", item: "minecraft:rotten_flesh" },
        { result: "skeletal", item: "eidolon:bone_pile" },
        { result: "steeleaf", item: "twilightforest:steeleaf_block" },
        { result: "ironwood", item: "twilightforest:ironwood_block" },
        { result: "spacial", item: "ae2:quartz_block" },
        { result: "experience", item: "create:experience_block" },
        { result: "ruby", item: "alltheores:ruby_block" },
        { result: "sapphire", item: "alltheores:sapphire_block" },
        { result: "hop_graphite", item: "immersiveengineering:hop_graphite_block" },
        { result: "knightmetal", item: "twilightforest:knightmetal_block" },
        { result: "fiery", item: "twilightforest:fiery_block" },
        { result: "chocolate", item: "create:chocolate_bucket" },
        { result: "cinnabar", item: "thermal:cinnabar_block" },
        { result: "oily", item: "immersivepetroleum:crudeoil_bucket" },
        { result: "spirit", item: "spirit:soul_steel_block" },
        { result: "arcane", item: "ars_nouveau:source_gem_block" },
        { result: "tea", item: "create:builders_tea" }
    ]
    const ImperiumBased = [
        { result: "creeper_bee", item: "quark:gunpowder_sack" },
        { result: "silky", item: "minecraft:cobweb" },
        { result: "bronze", item: "alltheores:bronze_block" },
        { result: "brass", item: "alltheores:brass_block" },
        { result: "manasteel", item: "botania:manasteel_block" },
        { result: "ghostly", item: "minecraft:ghast_tear" },
        { result: "ender", item: "minecraft:ender_pearl" },
        { result: "steel", item: "alltheores:steel_block" },
        { result: "resonant_ender", item: "thermal:ender_bucket" },
        { result: "constantan", item: "alltheores:constantan_block" },
        { result: "electrum", item: "alltheores:electrum_block" },
        { result: "invar", item: "alltheores:invar_block" },
        { result: "signalum", item: "alltheores:signalum_block" },
        { result: "lumium", item: "alltheores:lumium_block" },
        { result: "fluorite", item: "mekanism:block_fluorite" },
        { result: "refined_glowstone", item: "mekanism:block_refined_glowstone" },
        { result: "refined_obsidian", item: "mekanism:block_refined_obsidian" },
        { result: "compressed_iron", item: "pneumaticcraft:compressed_iron_block" },
        { result: "energized_steel", item: "powah:energized_steel_block" },
        { result: "blazing_crystal", item: "powah:blazing_crystal_block" },
        { result: "desh", item: "ad_astra:desh_block" },
        { result: "destabilized_redstone", item: "thermal:redstone_bucket" },
        { result: "energized_glowstone", item: "thermal:glowstone_bucket" },
        { result: "ostrum", item: "ad_astra:ostrum_block" },
        { result: "pink_slimy", item: "industrialforegoing:pink_slime_bucket" },
        { result: "withered", item: "minecraft:wither_skeleton_skull" }
    ]
    const SupremiumBased = [
        { result: "awakened_supremium", item: "mysticalagriculture:cognizant_dust" },
        { result: "blizz", item: "thermal:blizz_rod" },
        { result: "blitz", item: "thermal:blitz_rod" },
        { result: "basalz", item: "thermal:basalz_rod" },
        { result: "blazing", item: "minecraft:blaze_rod" },
        { result: "elementium", item: "botania:elementium_block" },
        { result: "fluix", item: "ae2:fluix_block" },
        { result: "diamond", item: "minecraft:diamond_block" },
        { result: "emerald", item: "minecraft:emerald_block" },
        { result: "netherite", item: "minecraft:netherite_block" },
        { result: "iridium", item: "alltheores:iridium_block" },
        { result: "enderium", item: "alltheores:enderium_block" },
        { result: "terrasteel", item: "botania:terrasteel_block" },
        { result: "niotic_crystal", item: "powah:niotic_crystal_block" },
        { result: "spirited_crystal", item: "powah:spirited_crystal_block" },
        { result: "uraninite", item: "powah:uraninite_block" },
        { result: "alfsteel", item: "mythicbotany:alfsteel_block" },
        { result: "calorite", item: "ad_astra:calorite_block" },
        { result: "fire_dragonsteel", item: "iceandfire:dragonsteel_fire_block" },
        { result: "ice_dragonsteel", item: "iceandfire:dragonsteel_ice_block" },
        { result: "lightning_dragonsteel", item: "iceandfire:dragonsteel_lightning_block" },
        { result: "sculk", item: "deeperdarker:reinforced_echo_shard" },
        { result: "iesnium", item: "occultism:iesnium_block" },
        { result: "nephryx", item: "ad_astra:nephryx_block" },
        { result: "plastic", item: "pneumaticcraft:plastic_bucket" },
        { result: "wasted_radioactive", item: "mekanism:pellet_polonium" }
    ]
    const InsaniumBased = [
        { result: "starry", item: "minecraft:nether_star" },
        { result: "draconic", item: "minecraft:dragon_egg" },
        { result: "gaia", item: "botania:gaia_ingot" },
        { result: "nitro_crystal", item: "powah:nitro_crystal_block" }
    ]

    ProsperityBased.forEach(bee => { tieredBee("prosperity", bee.result, bee.item) })
    InferiumBased.forEach(bee => { tieredBee("inferium", bee.result, bee.item)})
    PrudentiumBased.forEach(bee => { tieredBee("prudentium", bee.result, bee.item)})
    TertiumBased.forEach(bee => { tieredBee("tertium", bee.result, bee.item)})
    ImperiumBased.forEach(bee => { tieredBee("imperium", bee.result, bee.item)})
    SupremiumBased.forEach(bee => { tieredBee("supremium", bee.result, bee.item)})
    InsaniumBased.forEach(bee => { tieredBee("insanium", bee.result, bee.item)})

    function tieredBee(source, result, item) {
        recipes.push(
            {
                source: source,
                result: result,
                item: item
            }
        )
    }

    //General Bee Conversion Function
    recipes.forEach(recipe => {
        let item
        if (recipe.item.type) {
            item = recipe.item
        } else {
            item = parseIngredient(recipe.item)
        }
        let json = {
            type: 'productivebees:bee_conversion',
            source: `productivebees:${recipe.source}`,
            result: `productivebees:${recipe.result}`,
            item: item
        }
        event.custom(json).id(`productivebees:bee_conversion/${recipe.result}`)
    })

})