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
(_____)         Last Modification : 1.5.0         (_____)

*/

ServerEvents.recipes(event => {


    //Replace
    let excludedIds = [
        "productivebees:create/mixing/spirit/honeycomb_spirit",
        "productivebees:create/mixing/honeycomb_prismarine",
        "productivebees:create/mixing/iceandfire/honeycomb_fire_dragonsteel",
        "productivebees:create/mixing/iceandfire/honeycomb_ice_dragonsteel",
        "productivebees:create/mixing/iceandfire/honeycomb_lightning_dragonsteel"
    ]
    event.forEachRecipe({ type: "create:mixing" }, recipe => {
        if (recipe.getId().includes("productivebees:create/")) {
            let foundWax = false
            let parsedFluid = false
            let newResults = []
            let results = recipe.json.get("results")
            results.forEach((/** @type {Internal.JsonObject} */ result) => {
                newResults.push(result)
                if (result.has("item") && result.get("item").getAsString() == "productivebees:wax") foundWax = true
                if (result.has("fluid")) {
                    parsedFluid = true
                    if (result.get("fluid").getAsString() == "productivebees:honey") {
                        result.add("fluid", "create:honey");
                        if (recipe.getId() != "productivebees:create/mixing/honeycomb") {
                            result.add("amount", 50);
                        } else result.add("amount", 250)
                    } else if (recipe.getId() != "productivebees:create/mixing/honeycomb_experience") result.add("amount", 250)
                }
                if (recipe.getId().includes("honeycomb")) {
                    result.remove("chance")
                }
            })
            if (!foundWax) newResults.push(parseIngredient("productivebees:wax"))
            if (!parsedFluid && !excludedIds.includes(recipe.getId())) newResults.push(FluidWithCount("create:honey", 50))
            if (!parsedFluid || !foundWax) recipe.json.add("results", newResults)

            event.remove({ id: recipe.getId() });
            event.custom(recipe.json).id(recipe.getId());
        }
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
        {
            id: "fusion_prudentium",
            input: [parseIngredient("#matc:prudentium"), FluidWithCount("mysticalagradditions:molten_prudentium", 250), FluidWithCount("mysticalagradditions:molten_inferium", 750)],
            output: [FluidWithCount("mysticalagradditions:molten_prudentium", 500)]
        },
        {
            id: "fusion_tertium",
            input: [parseIngredient("#matc:tertium"), FluidWithCount("mysticalagradditions:molten_tertium", 250), FluidWithCount("mysticalagradditions:molten_prudentium", 750)],
            output: [FluidWithCount("mysticalagradditions:molten_tertium", 500)]
        },
        {
            id: "fusion_imperium",
            input: [parseIngredient("#matc:imperium"), FluidWithCount("mysticalagradditions:molten_imperium", 250), FluidWithCount("mysticalagradditions:molten_tertium", 750)],
            output: [FluidWithCount("mysticalagradditions:molten_imperium", 500)]
        },
        {
            id: "fusion_supremium",
            input: [parseIngredient("#matc:supremium"), FluidWithCount("mysticalagradditions:molten_supremium", 250), FluidWithCount("mysticalagradditions:molten_imperium", 750)],
            output: [FluidWithCount("mysticalagradditions:molten_supremium", 500)]
        },
        {
            id: "fusion_insanium",
            input: [parseIngredient("mysticalagriculture:master_infusion_crystal"), FluidWithCount("mysticalagradditions:molten_insanium", 250), FluidWithCount("mysticalagradditions:molten_supremium", 750)],
            output: [FluidWithCount("mysticalagradditions:molten_insanium", 500)]
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
        {
            id: "molten_inferium",
            heat: 'heated',
            input: [parseIngredient("mysticalagriculture:inferium_essence")],
            output: [FluidWithCount("mysticalagradditions:molten_inferium", 250)]
        },
        {
            id: "molten_prudentium",
            heat: 'heated',
            input: [parseIngredient("mysticalagriculture:prudentium_essence")],
            output: [FluidWithCount("mysticalagradditions:molten_prudentium", 250)]
        },
        {
            id: "molten_tertium",
            heat: 'heated',
            input: [parseIngredient("mysticalagriculture:tertium_essence")],
            output: [FluidWithCount("mysticalagradditions:molten_tertium", 250)]
        },
        {
            id: "molten_imperium",
            heat: 'heated',
            input: [parseIngredient("mysticalagriculture:imperium_essence")],
            output: [FluidWithCount("mysticalagradditions:molten_imperium", 250)]
        },
        {
            id: "molten_supremium",
            heat: 'heated',
            input: [parseIngredient("mysticalagriculture:supremium_essence")],
            output: [FluidWithCount("mysticalagradditions:molten_supremium", 250)]
        },
        {
            id: "molten_insanium",
            heat: 'heated',
            input: [parseIngredient("mysticalagradditions:insanium_essence")],
            output: [FluidWithCount("mysticalagradditions:molten_insanium", 250)]
        },
        {
            id: "mixed_metal_blend",
            heat: 'heated',
            input: [
                parseIngredient("alchemistry:titanium_dust"), parseIngredient("alchemistry:titanium_dust"), parseIngredient("alchemistry:titanium_dust"),
                parseIngredient("alchemistry:tungsten_dust"), parseIngredient("alchemistry:tungsten_dust"), parseIngredient("alchemistry:tungsten_dust"),
                parseIngredient("alchemistry:chromium_dust"), parseIngredient("alchemistry:chromium_dust"), parseIngredient("alchemistry:chromium_dust")
            ],
            output: [ChanceOrCountItem("ftbic:mixed_metal_blend", 3)]
        },
        //Superheated Recipes
        {
            id: "destabilized_redstone",
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
        },
        {
            id: "energized_glowstone",
            heat: 'superheated',
            input: [parseIngredient("minecraft:glowstone_dust"), parseIngredient("minecraft:glowstone_dust"), parseIngredient("minecraft:glowstone_dust"), parseIngredient("minecraft:glowstone_dust")],
            output: [FluidWithCount("thermal:glowstone", 250)]
        },
        {
            id: "resonant_ender",
            heat: 'superheated',
            input: [parseIngredient("minecraft:ender_pearl"), parseIngredient("minecraft:ender_pearl"), parseIngredient("minecraft:ender_pearl"), parseIngredient("minecraft:ender_pearl")],
            output: [FluidWithCount("thermal:ender", 250)]
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
    basicComb("desh", 'ad_astra:raw_desh')
    basicComb("ostrum", 'ad_astra:raw_ostrum')
    basicComb("calorite", 'ad_astra:raw_calorite')
    basicComb("platinum", 'alltheores:raw_platinum')
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
    basicComb("ironwood", 'twilightforest:raw_ironwood')
    basicComb("knightmetal", 'twilightforest:knightmetal_ingot')
    basicComb("nephryx", 'ad_astra:raw_nephryx')
    basicComb("piggy", 'minecraft:porkchop')
    basicComb("rabbit", 'minecraft:rabbit_foot')
    basicComb("sheep", 'minecraft:mutton')
    basicComb("squid", 'minecraft:ink_sac')
    basicComb("starry", 'mysticalagradditions:nether_star_shard')
    basicComb("steeleaf", 'twilightforest:steeleaf_ingot')
    basicComb("turtle", 'minecraft:scute')

    function fluidEssence(essence, fluid) {
        recipes.push(
            {
                id: essence.replace(":", "/"),
                input: [parseIngredient(essence)],
                output: [FluidWithCount(fluid, 100)]
            }
        )
    }

    fluidEssence('mysticalagriculture:chocolate_essence', "create:chocolate")
    fluidEssence('mysticalagriculture:destabilized_redstone_essence', "thermal:redstone")
    fluidEssence('mysticalagriculture:energized_glowstone_essence', "thermal:glowstone")
    fluidEssence('mysticalagriculture:oil_essence', "immersivepetroleum:crudeoil")
    fluidEssence('mysticalagriculture:pink_slime_essence', "industrialforegoing:pink_slime")
    fluidEssence('mysticalagriculture:resonant_ender_essence', "thermal:ender")
    fluidEssence('mysticalagriculture:tea_essence', "create:tea")

    //Eidolon Crucible -> Mixing 
    event.forEachRecipe({ type: "eidolon:crucible" }, recipe => {
        let input = []
        recipe.json.get("steps").forEach(step => {
            if (step.has("items")) {
                step.get("items").forEach(item => {
                    input.push(item)
                })
            }
        })
        recipes.push(
            {
                id: recipe.getId().split(":")[1],
                heat: "heated",
                input: input,
                output: [recipe.json.get("result")]
            }
        )
    })

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