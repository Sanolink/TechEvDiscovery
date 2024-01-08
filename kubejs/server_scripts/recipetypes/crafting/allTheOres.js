//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {

    //Remove
    event.remove([{ output: '#alltheores:ore_hammers'} ,{ input: '#alltheores:ore_hammers'}])
    event.remove({ output: '#forge:gears', mod: 'alltheores'})
    event.remove({ output: '#forge:dusts', mod: 'alltheores', type: "crafting_shapeless"})
    //Recipes
})