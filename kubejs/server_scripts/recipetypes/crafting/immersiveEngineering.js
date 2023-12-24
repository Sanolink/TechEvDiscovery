//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {

    //Remove
    event.remove({ output: 'immersiveengineering:hammer', type: 'minecraft:crafting_shaped' })
    event.remove({ input: 'immersiveengineering:hammer', output: "#forge:plates" })
    event.remove({ input: 'immersiveengineering:hammer', output: "#forge:dusts" })
    event.remove({ output: 'immersiveengineering:wirecutter', type: 'minecraft:crafting_shaped' })
    event.remove({ id: 'immersiveengineering:crafting/stick_iron'})
    event.remove({ id: 'immersiveengineering:crafting/stick_aluminum'})
    event.remove({ id: 'immersiveengineering:crafting/stick_steel'})
    //Recipes

})