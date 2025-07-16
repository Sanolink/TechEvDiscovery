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


    //Replace
    event.forEachRecipe({ type: "create:mixing" }, recipe => {
        let results = recipe.json.get("results")
        results.forEach((/** @type {Internal.JsonObject} */ result) => {
            if (result.has("fluid") && result.get("fluid").getAsString() == "productivebees:honey") {
                result.add("fluid", "create:honey");
                if (recipe.getId() != "productivebees:create/mixing/honeycomb") {
                    result.add("amount", 50);
                }
            }
            if (recipe.getId().includes("honeycomb")) {
                result.remove("chance")
            }
        })
    })

    //Recipes 
    const recipes = [
        //Basic Recipes
        {
            id: "raw_andesite_alloy",
            input: [
                parseIngredient('minecraft:andesite'),
                parseIngredient('#forge:nuggets/pewter')
            ],
            output: [parseIngredient('create:raw_andesite_alloy')]
        },
        {
            id: "brass_alloy",
            input: [
                parseIngredient('create:andesite_alloy'),
                parseIngredient('#forge:dusts/brass')
            ],
            output: [parseIngredient('create:brass_alloy')]
        },
        {
            id: "soul",
            input: [FluidWithCount("forbidden_arcanus:liquid_soul", 1000)],
            output: [parseIngredient('forbidden_arcanus:soul')]
        },
        {
            id: "resonant_fluix",
            input: [
                FluidWithCount("create_confectionery:ruby_chocolate", 250),
                FluidWithCount("thermal:ender", 250)
            ],
            output: [FluidWithCount('ae2:resonant_fluix', 500)]
        },
        {
            id: "copper_alloy",
            input: [
                parseIngredient("create:andesite_alloy"),
                parseIngredient("alltheores:copper_plate"), parseIngredient("alltheores:copper_plate"), parseIngredient("alltheores:copper_plate"), parseIngredient("alltheores:copper_plate"),
            ],
            output: [parseIngredient("create:copper_alloy")]
        },
        //Heated Recipes
        {
            id: "pewter_blend",
            heat: 'heated',
            input: [
                parseIngredient("minecraft:iron_ingot"),
                parseIngredient("alltheores:lead_ingot")
            ],
            output: [ChanceOrCountItem('eidolon:pewter_blend', 2)],
        },
        {
            id: "polymer_clay",
            heat: 'heated',
            input: [
                parseIngredient('minecraft:clay_ball'),
                FluidWithCount("thermal:resin", 125),
                FluidWithCount("pneumaticcraft:plastic", 125)
            ],
            output: [FluidWithCount("hostilenetworks:polymer_clay", 250)]
        },
        {
            id: "synthetic_mana_diamond",
            heat: 'heated',
            input: [
                FluidWithCount("create_enchantment_industry:hyper_experience", 50),
                FluidWithCount("pneumaticcraft:yeast_culture", 1000),
                parseIngredient("botania:infused_seeds"),
                parseIngredient("minecraft:diamond"), parseIngredient("minecraft:diamond"), parseIngredient("minecraft:diamond"), parseIngredient("minecraft:diamond"), parseIngredient("minecraft:diamond"), parseIngredient("minecraft:diamond"), parseIngredient("minecraft:diamond"), parseIngredient("minecraft:diamond"), parseIngredient("minecraft:diamond"),
                parseIngredient("forbidden_arcanus:arcane_crystal_dust"), parseIngredient("forbidden_arcanus:arcane_crystal_dust"), parseIngredient("forbidden_arcanus:arcane_crystal_dust")
            ],
            output: [FluidWithCount("botania:synthetic_mana_diamond", 1000)],
        },
        //Superheated Recipes
        {
            id: "molten_redstone",
            heat: 'superheated',
            input: [parseIngredient("minecraft:redstone"), parseIngredient("minecraft:redstone"), parseIngredient("minecraft:redstone"), parseIngredient("minecraft:redstone"), parseIngredient("minecraft:redstone"), parseIngredient("minecraft:redstone"), parseIngredient("minecraft:redstone"), parseIngredient("minecraft:redstone")],
            output: [FluidWithCount("thermal:redstone", 200)]
        },
        {
            id: "molten_lapis",
            heat: 'superheated',
            input: [parseIngredient("minecraft:lapis_lazuli"), parseIngredient("minecraft:lapis_lazuli"), parseIngredient("minecraft:lapis_lazuli"), parseIngredient("minecraft:lapis_lazuli"), parseIngredient("minecraft:lapis_lazuli"), parseIngredient("minecraft:lapis_lazuli"), parseIngredient("minecraft:lapis_lazuli"), parseIngredient("minecraft:lapis_lazuli")],
            output: [FluidWithCount("create:molten_lapis", 200)]
        },
        {
            id: "molten_source",
            heat: 'superheated',
            input: [parseIngredient("ars_nouveau:source_gem"), parseIngredient("ars_nouveau:source_gem"), parseIngredient("ars_nouveau:source_gem"), parseIngredient("ars_nouveau:source_gem")],
            output: [FluidWithCount("create:molten_source", 200)]
        },
        {
            id: "destabilized_psimetal",
            heat: 'superheated',
            input: [parseIngredient("psi:psimetal"), parseIngredient("psi:psimetal")],
            output: [FluidWithCount("psi:destabilized_psimetal", 200)]
        }
    ]

    function basicComb(combType, result) {
        recipes.push(
            {
                id: `productivebees/honeycomb_${combType}`,
                heat: 'heated',
                input: [BeeConfigurableComb(combType)],
                output: [parseIngredient(result), FluidWithCount("create:honey", 50), parseIngredient('productivebees:wax')]
            }
        )
    }

    basicComb("fluix", 'ae2:fluix_crystal')
    basicComb("peridot", 'alltheores:peridot')
    basicComb("desh", 'ad_astra:desh_ingot')
    basicComb("ostrum", 'ad_astra:ostrum_ingot')
    basicComb("calorite", 'ad_astra:calorite_ingot')
    basicComb("platinum", 'alltheores:platinum_ingot')
    basicComb("fluorite", 'mekanism:fluorite_gem')
    basicComb("ametrine", 'byg:ametrine_gems')
    basicComb("aeric", 'botania:ender_air_bottle')
    basicComb("aquatic", 'minecraft:snowball')
    basicComb("chicken", 'minecraft:chicken')
    basicComb("fiery", 'twilightforest:fiery_ingot')
    basicComb("fishy", 'minecraft:pufferfish')
    basicComb("gaia", 'botania:life_essence')
    basicComb("geotic", 'minecraft:clay_ball')
    basicComb("hop_graphite", 'immersiveengineering:ingot_hop_graphite')
    basicComb("ironwood", 'twilightforest:ironwood_ingot')
    basicComb("knightmetal", 'twilightforest:knightmetal_ingot')
    basicComb("nephryx", 'ad_astra:nephryx_ingot')
    basicComb("piggy", 'minecraft:porkchop')
    basicComb("rabbit", 'minecraft:rabbit_foot')
    basicComb("sheep", 'minecraft:mutton')
    basicComb("squid", 'minecraft:ink_sac')
    basicComb("steeleaf", 'twilightforest:steeleaf_ingot')
    basicComb("turtle", 'minecraft:scute')

    //General Mixing Function
    recipes.forEach(recipe => {
        let json = {
            type: 'create:mixing',
            ingredients: recipe.input,
            results: recipe.output,
        }
        if (recipe.heat) { json.heatRequirement = recipe.heat }
        event.custom(json).id(`create:mixing/${recipe.id || recipe.output.split(":")[1]}`)
    })
    
})