//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {

    //Remove
    event.remove({ output: 'constructionwand:stone_wand', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'constructionwand:iron_wand', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'constructionwand:diamond_wand', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'constructionwand:infinity_wand', type: 'minecraft:crafting_shaped' })
    
    //Recipes
    const recipes = [
        //Stone Core
        {
            output: "constructionwand:core_stone",
            pattern: [" SS", "SCS", "SS "],
            key: {
                S: "minecraft:stone",
                C: "minecraft:cobblestone"
            }
        },
        //Iron Core
        {
            output: "constructionwand:core_iron",
            pattern: [" II", "INI", "II "],
            key: {
                I: "minecraft:iron_ingot",
                N: "minecraft:iron_nugget"
            }
        },
        //Diamond Core
        {
            output: "constructionwand:core_diamond",
            pattern: [" DD", "DND", "DD "],
            key: {
                D: "minecraft:diamond",
                N: "diamond_nuggets:diamond_nugget"
            }
        },
        //Infinity Core
        {
            output: "constructionwand:core_infinity",
            pattern: [" PI", "PNP", "IP "],
            key: {
                P: "byg:pendorite_ingot",
                I: "apotheosis:infused_breath",
                N: "minecraft:nether_star"
            }
        }
    ]

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.output)
    })
})