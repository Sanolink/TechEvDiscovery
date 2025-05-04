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
        //Floral Catalyst
        {
            output: "botania:floral_catalyst",
            pattern: ["LIL", "CSC", "LIL"],
            key: {
                L: "botania:livingrock",
                I: "naturesaura:infused_iron",
                C: "botania:cell_block",
                S: "botania:spark"
            }
        },
        //Abjuration Catalyst
        {
            output: "botania:abjuration_catalyst",
            pattern: ["LIL", "MRM", "LIL"],
            key: {
                L: "botania:livingrock",
                I: "occultism:iesnium_ingot",
                M: "botania:mana_diamond",
                R: "ars_nouveau:ritual_sanctuary"
            }
        },
        //Dark Elven Gateway Core
        {
            output: "techev_additions:svartalfheim_portal",
            pattern: ["LGL", "LIL", "LGL"],
            key: {
                L: "#botania:dreamwood_logs",
                G: "botania:elementium_gear",
                I: "botania:gaia_ingot"
            }
        }
    ]

    recipes.forEach(recipe => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.output)
    })
})