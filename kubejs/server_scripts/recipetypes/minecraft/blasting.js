//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0 

ServerEvents.recipes(event => {

    //Remove
    event.remove([{ type: 'minecraft:blasting', input: '#create:crushed_raw_materials' }])
    event.remove({ id: 'coinsje:blasting/copper_ingot_to_copper_coin' })
    event.remove({ id: 'coinsje:blasting/iron_ingot_to_iron_coin' })
    event.remove({ id: 'coinsje:blasting/gold_ingot_to_gold_coin' })
    event.remove({ id: 'forbidden_arcanus:blasting/arcane_crystal_dust_from_blasting' })
    event.remove({ id: 'forbidden_arcanus:obsidian_ingot_from_blasting'})

    //Recipes
    const recipes = [
        {
            id: 'raw_andesite_alloy',
            in: 'create:raw_andesite_alloy',
            out: 'create:andesite_alloy'
        }
    ]

    //General Blasting Function
    recipes.forEach((recipe) => {
        event.blasting(recipe.out, recipe.in).id('minecraft:blasting/' + recipe.id)
    })
})
