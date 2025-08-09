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
    const recipes = []

    function basicSoulExtraction(mysticalType, beeType) {
        recipes.push({
            id: beeType,
            input: BeeConfigurableComb(beeType),
            output: MysticalSoul(mysticalType, 500)
        })
    }
    function combExceptionSoulExtraction(mysticalType, comb) {
        recipes.push({
            id: comb,
            input: parseIngredient(`productivebees:honeycomb_${comb}`),
            output: MysticalSoul(mysticalType, 500)
        })
    }

    basicSoulExtraction("mysticalagriculture:basalz", "basalz")
    basicSoulExtraction("mysticalagriculture:blaze", "blazing")
    basicSoulExtraction("mysticalagriculture:blitz", "blitz")
    basicSoulExtraction("mysticalagriculture:blizz", "blizz")
    basicSoulExtraction("mysticalagriculture:chicken", "chicken")
    basicSoulExtraction("mysticalagriculture:enderman", "ender")
    basicSoulExtraction("mysticalagriculture:fish", "fishy")
    basicSoulExtraction("mysticalagriculture:pig", "piggy")
    basicSoulExtraction("mysticalagriculture:rabbit", "rabbit")
    basicSoulExtraction("mysticalagriculture:sheep", "sheep")
    basicSoulExtraction("mysticalagriculture:skeleton", "skeletal")
    basicSoulExtraction("mysticalagriculture:slime", "slimy")
    basicSoulExtraction("mysticalagriculture:spider", "silky")
    basicSoulExtraction("mysticalagriculture:squid", "squid")
    basicSoulExtraction("mysticalagriculture:turtle", "turtle")
    basicSoulExtraction("mysticalagriculture:wither_skeleton", "withered")
    basicSoulExtraction("mysticalagriculture:zombie", "zombie")
    basicSoulExtraction("mysticalcustomization:echo", "sculk")
    basicSoulExtraction("mysticalcustomization:pink_slime", "pink_slimy")

    combExceptionSoulExtraction("mysticalagriculture:cow", "milky")
    combExceptionSoulExtraction("mysticalagriculture:creeper", "powdery")
    combExceptionSoulExtraction("mysticalagriculture:ghast", "ghostly")

    //General Soul Extraction Function
    recipes.forEach((recipe) => {
        let json = {
            type: 'mysticalagriculture:soul_extraction',
            input: recipe.input,
            output: recipe.output
        }
        event.custom(json).id(`mysticalagriculture:souls/${recipe.id}`)
    })
})

