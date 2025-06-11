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
(_____)         Last Modification : 1.3.7         (_____)

*/

ServerEvents.recipes(event => {

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