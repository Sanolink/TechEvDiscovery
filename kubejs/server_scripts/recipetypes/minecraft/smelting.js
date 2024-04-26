//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.2

ServerEvents.recipes(event => {

    //Remove
    event.remove([{ type: 'minecraft:smelting', input: '#create:crushed_raw_materials' }])
    event.remove({ id: 'naturalist:cooked_egg' })
    event.remove({ id: 'quark:tweaks/smelting/bone_meal_utility' })
    event.remove({ id: 'coinsje:furnace/copper_ingot_to_copper_coin' })
    event.remove({ id: 'coinsje:furnace/iron_ingot_to_iron_coin' })
    event.remove({ id: 'coinsje:furnace/gold_ingot_to_gold_coin' })
    event.remove({ id: 'forbidden_arcanus:smelting/arcane_crystal_dust_from_smelting' })
    event.remove({ id: 'forbidden_arcanus:obsidian_ingot'})

    //Recipes
    const recipes = [
        {
            id: 'raw_andesite_alloy',
            in: 'create:raw_andesite_alloy',
            out: 'create:andesite_alloy'
        }
    ]

    //General Smelting Function
    recipes.forEach((recipe) => {
        event.smelting(recipe.out, recipe.in).id('minecraft:smelting/' + recipe.id)
    })
})
