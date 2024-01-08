//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {

    //Remove
    event.remove({ input: 'minecraft:tuff', type: 'create:crushing' })
    event.remove({ input: 'minecraft:diamond', type: 'create:crushing' })
    event.remove({ input: '#forge:ingots/steel', type: 'create:crushing' })
    
    //Recipes 
    const recipes = [
        //Crushing Tuff
        {
            id : "tuff",
            input: "minecraft:tuff",
            output: [
                { item: "minecraft:flint", chance: 0.25 },
                { item: "minecraft:iron_nugget", chance: 0.1 },
                { item: "minecraft:gold_nugget", chance: 0.1 },
                { item: "alltheores:copper_nugget", chance: 0.1 },
                { item: "alltheores:zinc_nugget", chance: 0.1 },
                { item: "diamond_nuggets:diamond_nugget", chance: 0.0225 }
            ]
        },
        //Crushing Polished Blackstone
        {
            id : "polished_blackstone",
            input: "minecraft:polished_blackstone",
            output: [
                { item: "create:cinder_flour", chance: 0.1 },
                { item: "minecraft:quartz", chance: 0.05 },
                { item: "minecraft:gold_nugget", chance: 0.02 },
                { item: "createdeco:netherite_nugget", chance: 0.01 }
            ]
        }
    ]

    //General Crushing Function
    recipes.forEach(recipe => {
        const itemOutputs = recipe.output.map(item => {
            return Item.of(item.item).withChance(item.chance)
        })
        event.recipes.create.crushing(itemOutputs, recipe.input).id("create:crushing/" + recipe.id)
    })
})
