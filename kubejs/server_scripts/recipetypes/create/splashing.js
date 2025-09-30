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
(_____)         Last Modification : 1.5.0         (_____)

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

    //Ores List to Splash
    const ores = [
        {mat: "zinc", sec: "#forge:gunpowder"},
        {mat: "copper", sec: "#forge:clay"},
        {mat: "gold", sec: "#forge:gems/quartz"},
        {mat: "iron", sec: "#forge:dusts/redstone"},
        {mat: "osmium", sec: "#forge:gems/lapis"},
        {mat: "silver", sec: "#forge:gems/amethyst"},
        {mat: "tin", sec: "minecraft:flint"},
        {mat: "uranium", sec: "byg:emeraldite_shards"},
        {mat: "lead", sec: "minecraft:coal"},
        {mat: "aluminum", sec: "thermal:apatite"},
        {mat: "nickel", sec: "thermal:sulfur"},
        {mat: "platinum", sec: "forbidden_arcanus:arcane_crystal"},
        {mat: "desh", sec: "minecraft:diamond_nugget"},
        {mat: "ostrum", sec: "thermal:niter"},
        {mat: "calorite", sec: "thermal:cinnabar"},
        {mat: "nephryx", sec: "powah:uraninite_raw"},
        {mat: "iridium", sec: "ae2:certus_quartz_crystal"},
        {mat: "iesnium", sec: "alltheores:sapphire"},
        {mat: "elementium", sec: "botania:dragonstone"},
        {mat: "cloggrum", sec: "undergarden:utheric_shard"},
        {mat: "froststeel", sec: "undergarden:regalium_crystal"},
        {mat: "falsite", sec: "blue_skies:aquite"},
        {mat: "ventium", sec: "blue_skies:pyrope_gem"},
        {mat: "horizonite", sec: "blue_skies:diopside_gem"}
    ]
    //Splashing Ores 
    ores.forEach(material => {
        recipes.push(
            {
                id: `crushed_raw_${material.mat}`,
                input: [parseIngredient(`create:crushed_raw_${material.mat}`)],
                output: [
                    ChanceOrCountItem(TagToItem(`#forge:nuggets/${material.mat}`), 9),
                    ChanceAndCountItem(TagToItem(`#forge:nuggets/${material.mat}`), 0.5, 4),
                    parseChanceOrCountIngredient(TagToItem(material.sec), 0.5)
                ]
            },
            {
                id: `fermented_dust_${material.mat}`,
                input: [parseIngredient(`industrialforegoing:fermented_dust_${material.mat}`)],
                output: [
                    parseIngredient(TagToItem(`#forge:dusts/${material.mat}`)),
                    ChanceOrCountItem(TagToItem(`#forge:dusts/${material.mat}`), 0.25),
                    parseChanceOrCountIngredient(TagToItem(material.sec), 0.5)
                ]
            },
            {
                id: `dirty_dust_${material.mat}`,
                input: [parseIngredient(`#mekanism:dirty_dusts/${material.mat}`)],
                output: [
                    parseIngredient(TagToItem(`#forge:dusts/${material.mat}`)),
                    ChanceOrCountItem(TagToItem(`#forge:dusts/${material.mat}`), 0.25),
                    parseChanceOrCountIngredient(TagToItem(material.sec), 0.5)
                ]
            }
        )
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