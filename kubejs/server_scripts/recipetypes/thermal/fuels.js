/* 
 _____                                             _____ 
( ___ ) © SanoLink 2024/2026. All rights reserved.( ___ )
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
(_____)         Last Modification : 1.5.2         (_____)

*/

ServerEvents.recipes(event => {
    
    //Recipes
    const recipes = []

    const Coins = [
        ['platinum', 128000],
        ['osmium', 64000],
        ['aluminum', 16000],
        ['uranium', 128000],
        ['zinc', 32000],
        ['iridium', 144000],
        ['steel', 64000],
        ['cast_iron', 40000],
        ['brass', 40000]
    ].forEach(([mat, energy]) => {
        recipes.push(
            {
                id: `numismatic_${mat}_coin`,
                ingredient: `#forge:coins/${mat}`,
                energy: energy
            }
        )
    })

    //General Crucible Function
    recipes.forEach(recipe => {
        let json = {
            type: 'thermal:numismatic_fuel',
            ingredients: parseIngredient(recipe.ingredient),
            energy: recipe.energy || 32000
        }
        event.custom(json).id(`thermal:fuels/numismatic/${recipe.id}`)
    })
})