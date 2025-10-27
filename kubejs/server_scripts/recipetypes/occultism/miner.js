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
(_____)         Last Modification : 1.4.13        (_____)

*/


ServerEvents.recipes(event => {

    //Recipes
    let recipes = []
       
    Deepslate('alltheores:deepslate_aluminum_ore', 422)
    Deepslate('alltheores:deepslate_iridium_ore', 89)
    Deepslate('alltheores:deepslate_lead_ore', 500)
    Deepslate('alltheores:deepslate_nickel_ore', 232)
    Deepslate('alltheores:deepslate_osmium_ore', 203)
    Deepslate('alltheores:deepslate_peridot_ore', 200)
    Deepslate('alltheores:deepslate_platinum_ore', 150)
    Deepslate('alltheores:deepslate_ruby_ore', 200)
    Deepslate('alltheores:deepslate_sapphire_ore', 200)
    Deepslate('alltheores:deepslate_silver_ore', 381)
    Deepslate('alltheores:deepslate_tin_ore', 602)
    Deepslate('alltheores:deepslate_uranium_ore', 140)
    Deepslate('alltheores:deepslate_zinc_ore', 186)
    Deepslate('thermal:deepslate_cinnabar_ore', 190)
    Deepslate('thermal:deepslate_niter_ore', 244)
    Deepslate('thermal:deepslate_sulfur_ore', 222)

    Ores("alltheores:iridium_ore", 89)

    function Deepslate(output, weight) {
        recipes.push(
            {
                id: `deeps/${output.split(":")[1].replace("deepslate_", "").replace("_ore", "")}`,
                ingredient: parseIngredient("#occultism:miners/deeps"),
                result: parseIngredient(output),
                weight: weight
            }
        )
    }

    function Ores(output, weight) {
        recipes.push(
            {
                id: `ores/${output.split(":")[1].replace("_ore", "")}`,
                ingredient: parseIngredient("#occultism:miners/ores"),
                result: parseIngredient(output),
                weight: weight
            }
        )
    }

   //General Miner Function
    recipes.forEach(recipe => {
        let json = {
            type: 'occultism:miner',
            ingredient: recipe.ingredient,
            result: recipe.result,
            weight: recipe.weight
        }
        event.custom(json).id(`occultism:miner/${recipe.id}`)
    })
})