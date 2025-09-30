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
(_____)         Last Modification : 1.4.12        (_____)

*/

ServerEvents.recipes(event => {

    //Recipes
    const recipes = [
        {
            id: "obsidian_ingot",
            cooking_time: 100,
            experience: 0.35,
            ingredient: parseIngredient("forbidden_arcanus:obsidian_with_iron"),
            result: "forbidden_arcanus:obsidian_ingot"
        },
        {
            id: "soul_steel",
            cooking_time: 150,
            experience: 1.0,
            fire_type: "soul_fire",
            ingredient: parseIngredient("alltheores:steel_ingot"),
            result: "spirit:soul_steel_ingot"
        },
        {
            id: "soul_steel_block",
            cooking_time: 150,
            experience: 1.0,
            fire_type: "soul_fire",
            ingredient: parseIngredient("alltheores:steel_block"),
            result: "spirit:soul_steel_block"
        },
        {
            id: "soul_glass",
            cooking_time: 150,
            experience: 1.0,
            fire_type: "soul_fire",
            ingredient: parseIngredient("minecraft:tinted_glass"),
            result: "spirit:soul_glass"
        },
        {
            id: "soul_slate",
            cooking_time: 150,
            experience: 1.0,
            fire_type: "soul_fire",
            ingredient: parseIngredient("minecraft:deepslate"),
            result: "spirit:soul_slate"
        },
        {
            id: "soul_powder",
            cooking_time: 150,
            experience: 1.0,
            fire_type: "soul_fire",
            ingredient: parseIngredient("minecraft:glowstone_dust"),
            result: ChanceOrCountItem("spirit:soul_powder", 2)
        },
        {
            id: "soul_powder_block",
            cooking_time: 150,
            experience: 1.0,
            fire_type: "soul_fire",
            ingredient: parseIngredient("minecraft:glowstone"),
            result: ChanceOrCountItem("spirit:soul_powder", 8)
        }
        
    ]

    //General Clibano Combustion Function
    recipes.forEach((recipe) => {
        recipe.type = "forbidden_arcanus:clibano_combustion"
        if (!recipe.residue) recipe.residue = {chance: 0, name: "nothing"}
        event.custom(recipe).id("forbidden_arcanus:clibano_combustion/" + recipe.id)
    })

    //No Residue
    event.custom(
        {
            type: "forbidden_arcanus:combine_residues",
            residue_amount: 0,
            residue_name: "nothing",
            result: {
                item: "minecraft:string"
            }
        }
    ).id("forbidden_arcanus:combine_residues/nothing")

})