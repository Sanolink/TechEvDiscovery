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
(_____)         Last Modification : 1.4.0         (_____)

*/

ServerEvents.recipes(event => {

    //Recipes
    let recipes = [
        //Splashing Pewter Blend
        {
            id: "pewter_blend",
            input: [parseIngredient("eidolon:pewter_blend")],
            output: [
                ChanceOrCountItem(TagToItem("#forge:nuggets/pewter"), 9),
                ChanceAndCountItem(TagToItem("#forge:nuggets/pewter"), 0.55, 4)
            ]
        },
        //Splashing Raw Andesite Alloy
        {
            id: "raw_andesite_alloy",
            input: [parseIngredient("create:raw_andesite_alloy")],
            output: [
                parseIngredient("create:andesite_alloy"),
                ChanceOrCountItem("create:andesite_alloy", 0.5)
            ]
        }
    ]

    //Crushed Raw List to Splash
    const crushed = [
        {mat: "zinc", sec: "#forge:gunpowder"},
        {mat: "copper", sec: "#forge:clay"},
        {mat: "gold", sec: "#forge:gems/quartz"},
        {mat: "iron", sec: "#forge:dusts/redstone"},
        {mat: "osmium", sec: "#forge:gems/lapis"},
        {mat: "silver", sec: "#forge:gems/amethyst"},
        {mat: "tin", sec: "minecraft:flint"},
        {mat: "uranium", sec: "byg:emeraldite_shards"},
        {mat: "lead", sec: "minecraft:coal"},
        {mat: "aluminum"},
        {mat: "nickel"},
        {mat: "platinum"},
        {mat: "desh"},
        {mat: "ostrum"},
        {mat: "calorite"},
        {mat: "nephryx"}
    ]
    //Splashing Crushed Raw 
    crushed.forEach(material => {
        if (material.sec != undefined) {recipes.push({
                    id: `crushed_raw_${material.mat}`,
                    input: [parseIngredient(`create:crushed_raw_${material.mat}`)],
                    output: [
                        ChanceOrCountItem(TagToItem(`#forge:nuggets/${material.mat}`), 9),
                        ChanceAndCountItem(TagToItem(`#forge:nuggets/${material.mat}`), 0.5, 4),
                        parseChanceOrCountIngredient(TagToItem(material.sec), 0.5)
                    ]
                })} else {recipes.push({
                    id: `crushed_raw_${material.mat}`,
                    input: [parseIngredient(`create:crushed_raw_${material.mat}`)],
                    output: [
                        ChanceOrCountItem(TagToItem(`#forge:nuggets/${material.mat}`), 9),
                        ChanceAndCountItem(TagToItem(`#forge:nuggets/${material.mat}`), 0.5, 4)
                    ]
                })}
    })

   //General Splashing Function
    recipes.forEach(recipe => {
        let json = {
            type: 'create:splashing',
            ingredients: recipe.input,
            results: recipe.output
        }
        event.custom(json).id(`create:splashing/${recipe.id}`)
    })
})