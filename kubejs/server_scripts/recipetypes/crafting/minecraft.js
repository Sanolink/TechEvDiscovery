//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {

    //Remove
    event.remove({ output: 'minecraft:fishing_rod', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'minecraft:enchanted_golden_apple', type: 'minecraft:crafting_shaped' })
    
    //Recipes
    const recipes = [
        //Experience Bottle
        {
            output: "minecraft:experience_bottle",
            pattern: [" E ", "EBE", " E "],
            key: {
                E: "create:experience_nugget",
                B: "minecraft:glass_bottle"
            }
        },
        //Golden Apple
        {
            output: "minecraft:enchanted_golden_apple",
            pattern: ["EGE", "GAG", "EGE"],
            key: {
                E: "minecraft:experience_bottle",
                G: "minecraft:gold_block",
                A: "minecraft:golden_apple"
            }
        }
    ]

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.output)
    })
})