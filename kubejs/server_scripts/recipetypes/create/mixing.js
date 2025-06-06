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
(_____)         Last Modification : 1.3.5         (_____)

*/

ServerEvents.recipes(event => {

    //Recipes 
    const recipes = [
        //Basic Recipes
        {
            id: 'andesite_alloy',
            type: 'basic',
            input: ['minecraft:andesite', '#forge:nuggets/pewter'],
            output: 'create:raw_andesite_alloy'
        },
        {
            id: 'brass_alloy',
            type: 'basic',
            input: ['create:andesite_alloy', '#forge:dusts/brass'],
            output: 'create:brass_alloy'
        },
        {
            id: 'soul',
            type: 'basic',
            input: Fluid.of("forbidden_arcanus:liquid_soul", 1000),
            output: 'forbidden_arcanus:soul'
        },
        {
            id: 'resonant_fluix',
            type: 'basic',
            input: [Fluid.of("create_confectionery:ruby_chocolate", 250), Fluid.of("thermal:ender", 250)],
            output: Fluid.of('ae2:resonant_fluix', 500)
        },
        //Heated Recipes
        {
            id: 'pewter_blend',
            type: 'heated',
            input: ["minecraft:iron_ingot", "alltheores:lead_ingot"],
            output: Item.of('eidolon:pewter_blend', 2),
        },
        {
            id: 'polymer_clay',
            type: 'heated',
            input: ['minecraft:clay_ball', Fluid.of("thermal:resin", 125), Fluid.of("pneumaticcraft:plastic", 125)],
            output: Fluid.of("hostilenetworks:polymer_clay", 250)
        },
        {
            id: 'synthetic_mana_diamond',
            type: 'heated',
            input: [Fluid.of("create_enchantment_industry:hyper_experience", 50), Fluid.of("pneumaticcraft:yeast_culture", 1000), "botania:infused_seeds" , "9x minecraft:diamond", "3x forbidden_arcanus:arcane_crystal_dust"],
            output: Fluid.of("botania:synthetic_mana_diamond", 1000),
            time: 1000
        },
        //Superheated Recipes
        {
            id: 'molten_redstone',
            type: 'superheated',
            input: Item.of('minecraft:redstone', 8),
            output: Fluid.of("thermal:redstone", 200)
        },
        {
            id: 'molten_lapis',
            type: 'superheated',
            input: Item.of('minecraft:lapis_lazuli', 8),
            output: Fluid.of("create:molten_lapis", 200)
        },
        {
            id: 'molten_source',
            type: 'superheated',
            input: Item.of('ars_nouveau:source_gem', 4),
            output: Fluid.of("create:molten_source", 200)
        },
        {
            id: 'destabilized_psimetal',
            type: 'superheated',
            input: Item.of('psi:psimetal', 2),
            output: Fluid.of("psi:destabilized_psimetal", 200)
        }
    ]
    //General Mixing Function
    recipes.forEach(recipe => {
        if (recipe.type == 'basic') {
            event.recipes.create.mixing(recipe.output, recipe.input, recipe.time ?? 100).id("create:mixing/" + recipe.id)
        } else if (recipe.type == 'heated') {
            event.recipes.create.mixing(recipe.output, recipe.input, recipe.time ?? 100).id("create:mixing/" + recipe.id).heated()
        } else if (recipe.type == 'superheated') {
            event.recipes.create.mixing(recipe.output, recipe.input, recipe.time ?? 100).id("create:mixing/" + recipe.id).superheated()
        }
    })
})
