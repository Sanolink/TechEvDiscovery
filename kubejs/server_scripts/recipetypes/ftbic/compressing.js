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
    let recipes = []

    const PlatesToDense = [
        'aluminum',
        'calorite',
        'cloggrum',
        'desh',
        'elementium',
        'falsite',
        'froststeel',
        'gold',
        'horizonite',
        'iesnium',
        'iridium',
        'iron',
        'lead',
        'nephryx',
        'nickel',
        'osmium',
        'ostrum',
        'platinum',
        'silver',
        'tin',
        'uranium',
        'ventium',
        'zinc'
    ].forEach(mat => {
        recipes.push(
            {
                id: `dense_${mat}_plate`,
                ingredients: ChanceOrCountTag(`#forge:plates/${mat}`, 64),
                output: parseIngredient(TagToItem(`#ftbic:dense_plates/${mat}`))
            }
        )
    })

    //General Compressing Function
    recipes.forEach(recipe => {
        let json = {
            type: 'ftbic:compressing',
            inputItems: [recipe.ingredients],
            outputItems: [recipe.output]
        }
        event.custom(json).id(`ftbic:compressing/${recipe.id}`)
    })
})