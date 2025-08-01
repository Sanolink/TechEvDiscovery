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
    const recipes = [
        {
            id: "honeycomb_ultimate",
            fromColor: 9284864,
            toColor: 7602360,
            ingredients: [
                parseIngredient('productivebees:honeycomb_impertium'),
                parseIngredient('productivebees:honeycomb_safenium'),
                parseIngredient('productivebees:honeycomb_sudentium')
            ],
            output: parseIngredient('productivebees:honeycomb_ultimate')
        }
    ]

    //General Infuser Function
    recipes.forEach((recipe) => {
        let json = {
            type: 'mythicbotany:infuser',
            fromColor: recipe.fromColor, 
            toColor: recipe.toColor,
            group: "infuser",
            mana: recipe.mana || 1000000,
            ingredients: recipe.ingredients,
            output: recipe.output
        }
        event.custom(json).id(`mythicbotany:infuser/${recipe.id}`)
    })
})

