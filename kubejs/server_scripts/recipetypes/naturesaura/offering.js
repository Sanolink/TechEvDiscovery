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
            id: 'astral_laser_lens',
            input: parseIngredient('#industrialforegoing:basic_laser_lens'),
            start_item: parseIngredient('naturesaura:calling_spirit'),
            output: parseIngredient('industrialforegoing:laser_lens16')
        },
        {
            id: 'megatorch',
            input: parseIngredient('reliquary:interdiction_torch'),
            start_item: parseIngredient('naturesaura:calling_spirit'),
            output: parseIngredient('torchmaster:megatorch')
        }
    ]

    //General Offering Function
    recipes.forEach((recipe) => {
        event
            .custom({
                type: "naturesaura:offering",
                input: recipe.input,
                start_item: recipe.start_item,
                output: recipe.output,
            })
            .id("naturesaura:offering/" + recipe.id)
    })
})