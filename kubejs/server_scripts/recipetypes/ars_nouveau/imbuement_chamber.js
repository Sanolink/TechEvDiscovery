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
(_____)         Last Modification : 1.3.7         (_____)

*/

ServerEvents.recipes(event => {

    //Recipes
    let recipes = [
        //Pure Daisy
        {
            input: 'minecraft:oxeye_daisy',
            output: 'botania:pure_daisy',
            source: 2000,
            pedestalItems: ['eidolon:oanna_bloom', 'forbidden_arcanus:purifying_soap'],
        }
    ]

    //General Imbuement Chamber Function
    recipes.forEach((recipe) => {
        let json = {
            type: 'ars_nouveau:imbuement',
            input: parseIngredient(recipe.input),
            output: recipe.output,
            count: recipe.count || 1,
            source: recipe.source,
            pedestalItems: recipe.pedestalItems.map(i => ({ item: parseIngredient(i) })),
        }
        event.custom(json).id(`ars_nouveau:imbuement_${recipe.output.split(":")[1]}`)
    })
})