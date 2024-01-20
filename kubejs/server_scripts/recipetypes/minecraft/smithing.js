//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.2 

ServerEvents.recipes(event => {

    //Remove

    //Recipes 
    const recipes = [
        //Neptunium Fillet Knife
        {
            id: "neptunium_fillet_knife",
            input: "farmersdelight:netherite_knife",
            output: "aquaculture:neptunium_fillet_knife",
            upgrade: "aquaculture:neptunium_ingot"
        },
        //Stone Wand
        {
            id: "stone_wand",
            input: "minecraft:stick",
            output: "constructionwand:stone_wand",
            upgrade: "constructionwand:core_stone"
        },
        //Iron Wand
        {
            id: "iron_wand",
            input: "constructionwand:stone_wand",
            output: "constructionwand:iron_wand",
            upgrade: "constructionwand:core_iron"
        },
        //Diamond Wand
        {
            id: "diamond_wand",
            input: "constructionwand:iron_wand",
            output: "constructionwand:diamond_wand",
            upgrade: "constructionwand:core_diamond"
        },
        //Infinity Wand
        {
            id: "infinity_wand",
            input: "constructionwand:diamond_wand",
            output: "constructionwand:infinity_wand",
            upgrade: "constructionwand:core_infinity"
        },
        //Netherite Sandpaper
        {
            id: "netherite_sandpaper",
            input: "createaddition:diamond_grit_sandpaper",
            output: "create:netherite_sandpaper",
            upgrade: "minecraft:netherite_ingot"
        }
    ]

    //General Smithing Function
    recipes.forEach(recipe => {
        event.smithing(recipe.output, recipe.input, recipe.upgrade).id("minecraft:smithing/" + recipe.id)
    })
})