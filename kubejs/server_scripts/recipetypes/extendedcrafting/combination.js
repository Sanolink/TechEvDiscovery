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
    const recipes = [
        //Prudentium Essence
        {
            input: 'mysticalagriculture:inferium_essence',
            ingredients: [
                'mysticalagriculture:air_essence',
                'mysticalagriculture:earth_essence',
                'mysticalagriculture:water_essence',
                'mysticalagriculture:fire_essence'
            ],
            result: 'mysticalagriculture:prudentium_essence'
        },
        //Tertium Essence
        {
            input: 'mysticalagriculture:prudentium_essence',
            energy: 100000,
            ingredients: [
                'mysticalagriculture:coal_essence',
                'mysticalagriculture:honey_essence',
                'mysticalagriculture:pig_essence',
                'mysticalagriculture:chicken_essence',
                'mysticalagriculture:cow_essence',
                'mysticalagriculture:sheep_essence',
                'mysticalagriculture:sulfur_essence',
                'mysticalagriculture:aluminum_essence',
                'mysticalagriculture:saltpeter_essence',
                'mysticalagriculture:copper_essence',
                'mysticalagriculture:glowstone_essence',
                'mysticalagriculture:redstone_essence',
                'mysticalagriculture:obsidian_essence',
                'mysticalagriculture:prismarine_essence',
                'mysticalagriculture:rabbit_essence',
                'mysticalagriculture:tin_essence',
                'mysticalagriculture:zinc_essence',
                'mysticalagriculture:silver_essence',
                'mysticalagriculture:lead_essence',
                'mysticalagriculture:gold_essence',
                'mysticalagriculture:lapis_lazuli_essence',
                'mysticalagriculture:uranium_essence',
                'mysticalagriculture:osmium_essence',
                'mysticalagriculture:platinum_essence',
                'mysticalagriculture:nickel_essence',
                'mysticalagriculture:iron_essence'
            ],
            result: 'mysticalagriculture:tertium_essence'
        },
        //Imperium Essence
        {
            input: 'mysticalagriculture:tertium_essence',
            energy: 150000,
            ingredients: [
                'mysticalagriculture:amethyst_essence',
                'mysticalagriculture:squid_essence',
                'mysticalagriculture:fish_essence',
                'mysticalagriculture:slime_essence',
                'mysticalagriculture:turtle_essence',
                'mysticalagriculture:silicon_essence',
                'mysticalagriculture:apatite_essence',
                'mysticalagriculture:peridot_essence',
                'mysticalagriculture:nether_quartz_essence',
                'mysticalagriculture:zombie_essence',
                'mysticalagriculture:skeleton_essence',
                'mysticalagriculture:steeleaf_essence',
                'mysticalagriculture:ironwood_essence',
                'mysticalagriculture:certus_quartz_essence',
                'mysticalagriculture:experience_essence',
                'mysticalagriculture:ruby_essence',
                'mysticalagriculture:sapphire_essence',
                'mysticalagriculture:hop_graphite_essence',
                'mysticalagriculture:knightmetal_essence',
                'mysticalagriculture:fiery_ingot_essence',
                'mysticalagriculture:chocolate_essence',
                'mysticalagriculture:cinnabar_essence',
                'mysticalagriculture:oil_essence',
                'mysticalagriculture:soul_steel_essence',
                'mysticalagriculture:source_gem_essence',
                'mysticalagriculture:tea_essence'
            ],
            result: 'mysticalagriculture:imperium_essence'
        },
        //Supremium Essence
        {
            input: 'mysticalagriculture:imperium_essence',
            energy: 200000,
            ingredients: [
                'mysticalagriculture:creeper_essence',
                'mysticalagriculture:spider_essence',
                'mysticalagriculture:bronze_essence',
                'mysticalagriculture:brass_essence',
                'mysticalagriculture:manasteel_essence',
                'mysticalagriculture:ghast_essence',
                'mysticalagriculture:enderman_essence',
                'mysticalagriculture:steel_essence',
                'mysticalagriculture:resonant_ender_essence',
                'mysticalagriculture:constantan_essence',
                'mysticalagriculture:electrum_essence',
                'mysticalagriculture:invar_essence',
                'mysticalagriculture:signalum_essence',
                'mysticalagriculture:lumium_essence',
                'mysticalagriculture:fluorite_essence',
                'mysticalagriculture:refined_glowstone_essence',
                'mysticalagriculture:refined_obsidian_essence',
                'mysticalagriculture:compressed_iron_essence',
                'mysticalagriculture:energized_steel_essence',
                'mysticalagriculture:blazing_crystal_essence',
                'mysticalagriculture:desh_essence',
                'mysticalagriculture:destabilized_redstone_essence',
                'mysticalagriculture:energized_glowstone_essence',
                'mysticalagriculture:ostrum_essence',
                'mysticalagriculture:pink_slime_essence',
                'mysticalagriculture:wither_skeleton_essence'
            ],
            result: 'mysticalagriculture:supremium_essence'
        },
        //Insanium Essence
        {
            input: 'mysticalagriculture:supremium_essence',
            energy: 250000,
            ingredients: [
                'mysticalagriculture:awakened_supremium_essence',
                'mysticalagriculture:blizz_essence',
                'mysticalagriculture:blitz_essence',
                'mysticalagriculture:basalz_essence',
                'mysticalagriculture:blaze_essence',
                'mysticalagriculture:elementium_essence',
                'mysticalagriculture:fluix_essence',
                'mysticalagriculture:diamond_essence',
                'mysticalagriculture:emerald_essence',
                'mysticalagriculture:netherite_essence',
                'mysticalagriculture:iridium_essence',
                'mysticalagriculture:enderium_essence',
                'mysticalagriculture:terrasteel_essence',
                'mysticalagriculture:niotic_crystal_essence',
                'mysticalagriculture:spirited_crystal_essence',
                'mysticalagriculture:uraninite_essence',
                'mysticalagriculture:alfsteel_essence',
                'mysticalagriculture:calorite_essence',
                'mysticalagriculture:dragonsteel_fire_essence',
                'mysticalagriculture:dragonsteel_ice_essence',
                'mysticalagriculture:dragonsteel_lightning_essence',
                'mysticalagriculture:echo_essence',
                'mysticalagriculture:iesnium_essence',
                'mysticalagriculture:nephryx_essence',
                'mysticalagriculture:plastic_essence',
                'mysticalagriculture:wasted_radioactive_essence'
            ],
            result: 'mysticalagradditions:insanium_essence'
        },
        //Ultimate Essence
        {
            input: 'mysticalagradditions:insanium_essence',
            energy: 300000,
            ingredients: [
                'mysticalagriculture:nether_star_essence',
                'mysticalagriculture:dragon_egg_essence',
                'mysticalagriculture:gaia_spirit_essence',
                'mysticalagriculture:nitro_crystal_essence'
            ],
            result: 'mysticalagriculture:ultimate_essence'
        }
    ]

    //General Combination Function
    recipes.forEach((recipe) => {
        let json = {
            type: 'extendedcrafting:combination',
            powerCost: recipe.energy || 50000,
            input: parseIngredient(recipe.input),
            ingredients: recipe.ingredients.map(ingredient => { return parseIngredient(ingredient)}),
            result: parseIngredient(recipe.result)
        }
        event.custom(json).id(`extendedcrafting:combination/${recipe.result.split(":")[1]}`)
    })
})
