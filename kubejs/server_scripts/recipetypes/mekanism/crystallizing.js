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
(_____)         Last Modification : 1.4.11        (_____)

*/

ServerEvents.recipes(event => {
    
    //Recipes 
    const recipes = [
        {
            id: "hypermatter_pellet",
            input: MekaGas("mekanism:hypermatter", 1000),
            output: parseIngredient("mekanism:pellet_hypermatter")
        }
    ]

    const Crystals = ['desh', 'ostrum', 'calorite', 'nephryx', 'iridium', 'iesnium', 'elementium', 'cloggrum', 'froststeel', 'falsite', 'ventium', 'horizonite'].forEach(mat => {
        recipes.push({
            id: `${mat}/crystal/from_slurry`,
            chemicalType: 'slurry',
            input: MekaSlurry(`mekanism:clean_${mat}`, 200),
            output: parseIngredient(`mekanism:crystal_${mat}`)
        })
    })

    //General Crystallizing Function
    recipes.forEach(recipe => {
        let json = {
            type: 'mekanism:crystallizing',
            chemicalType: recipe.chemicalType || 'gas',
            input: recipe.input,
            output: recipe.output
        }
        event.custom(json).id(`mekanism:crystallizing/${recipe.id}`)
    })
})
