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
    
    //Catalysts
    const SPIRIT_FIRE = { 
        id: "spirit_fire", 
        cat: [
            { block: "occultism:spirit_fire", color: "#7D15AF"},
            { block: "occultism:spirit_campfire", color: "#7D15AF"}
        ]
    }

    const SINS_BLOOD = { 
        id: "sins_blood", 
        cat: [
            { fluid: "sons_of_sins:blood", color: "#794159"}
        ]
    }

    const DIMENSIONAL_MATRIX = { 
        id: "dimensional_matrix", 
        cat: [
            { fluid: "rftoolsbase:dimensional_matrix", color: "#7EBDBB"}
        ]
    }

    //Recipes
    let recipes = [
        {
            id: "infused_diamond",
            input: [parseIngredient('minecraft:diamond')],
            output: [parseIngredient('rftoolsbase:infused_diamond')],
            catalysts: DIMENSIONAL_MATRIX
        },
        {
            id: "infused_enderpearl",
            input: [parseIngredient('minecraft:ender_pearl')],
            output: [parseIngredient('rftoolsbase:infused_enderpearl')],
            catalysts: DIMENSIONAL_MATRIX
        }
    ]

    //Occultism Spirit Fire
    event.forEachRecipe({ type: 'occultism:spirit_fire' }, recipe => {
        recipes.push({
            id: recipe.getId().split("/")[1],
            input: [recipe.json.get("ingredient")],
            output: [recipe.json.get("result")],
            catalysts: SPIRIT_FIRE
        })
    })

    //Sons Of Sins Etheric Blood Imbibation
    event.forEachRecipe({ type: 'sons_of_sins:etheric_blood_imbibation' }, recipe => {
        recipes.push({
            id: recipe.getId().split(":")[1].split("_recipe")[0],
            input: [recipe.json.get("ingredients")],
            output: [recipe.json.get("output")],
            catalysts: SINS_BLOOD
        })
    })

    //General TechEv Fan Function
    recipes.forEach((recipe) => {
        let json = {
            type: 'techev_additions:techev_fan',
            ingredients: recipe.input,
            results: recipe.output,
            catalysts : recipe.catalysts.cat
        }
        event.custom(json).id(`techev_additions:techev_fan/${recipe.catalysts.id}/${recipe.id}`)
    })
})
