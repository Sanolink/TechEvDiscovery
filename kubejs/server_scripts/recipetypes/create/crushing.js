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
(_____)         Last Modification : 1.3.0         (_____)

*/

ServerEvents.recipes(event => {

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
        },
        //Crushing Brass Ingot
        {
            id : "brass_ingot",
            input: "alltheores:brass_ingot",
            output: [ { item: "alltheores:brass_dust", chance: 1 } ]
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
