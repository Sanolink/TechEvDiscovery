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
    let recipes = []

    basicProduce("aquatic")
    basicProduce("geotic")
    basicProduce("aeric")
    basicProduce("rabbit")
    basicProduce("sheep")
    basicProduce("chicken")
    basicProduce("piggy")
    basicProduce("fiery")
    basicProduce("knightmetal")
    basicProduce("hop_graphite")
    basicProduce("ironwood")
    basicProduce("steeleaf")
    basicProduce("turtle")
    basicProduce("fishy")
    basicProduce("squid")
    basicProduce("nephryx")
    basicProduce("gaia")

    function basicProduce(type) {
        recipes.push(
            {
                bee: type,
                results: [
                    { item: BeeConfigurableComb(type) },
                    BeeChanceIngredient("#forge:pollen", 5)
                ]
            }
        )
    }

    //General Bee Produce Function
    recipes.forEach(recipe => {
        let json = {
            type: 'productivebees:advanced_beehive',
            ingredient: `productivebees:${recipe.bee}`,
            results: recipe.results
        }
        event.custom(json).id(`productivebees:bee_produce/${recipe.bee}`)
    })

})