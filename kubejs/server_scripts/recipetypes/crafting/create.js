//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {
     
    //Remove
    event.remove({ output: 'create:red_sand_paper', type: 'minecraft:crafting_shapeless' })
    event.remove({ output: 'create:sand_paper', type: 'minecraft:crafting_shapeless' })
    event.remove({ id: 'create:crafting/materials/rose_quartz'})
    event.remove({ id: 'create:crafting/materials/andesite_alloy'})
    event.remove({ id: 'create:crafting/materials/andesite_alloy_from_zinc'})
    //Recipes

})