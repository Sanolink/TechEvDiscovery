//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {

    //Remove
    event.remove([{ output: '#alltheores:ore_hammers'} ,{ input: '#alltheores:ore_hammers'}])
    event.remove({ output: '#forge:gears', mod: 'alltheores'})
    
    //Recipes
})