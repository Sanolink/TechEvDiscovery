//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.2

ServerEvents.recipes(event => {

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

    const shapeless = [
        //Dragon Egg
        {   
            output: "minecraft:dragon_egg",
            count: "",
            input: ["quark:dragon_scale", "#forge:eggs"]
        }
    ]

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.output)
    })

    shapeless.forEach((recipe) => {
        event.shapeless(recipe.count + recipe.output, recipe.input).id(recipe.output)
    })
})