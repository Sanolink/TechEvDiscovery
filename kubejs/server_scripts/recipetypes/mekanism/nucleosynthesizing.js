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
    const recipes = [
        {
            id: "antispark_dust",
            gasInput: MekaGas("mekanism:antimatter", 200),
            itemInput: parseIngredient('enigmaticlegacy:astral_dust'),
            output: parseIngredient('mekanism:antispark_dust')
        },
        {
            id: "antimatter_quartz",
            gasInput: MekaGas("mekanism:antimatter", 1000),
            itemInput: parseIngredient('minecraft:quartz'),
            output: parseIngredient('create:antimatter_quartz')
        },
        {
            id: "antimatter",
            gasInput: MekaGas("mekanism:antimatter", 100),
            itemInput: parseIngredient('ftbic:antimatter'),
            output: ChanceOrCountItem('ftbic:antimatter', 2)
        },
        {
            id: "dimensional_stabilizer_obelisk",
            gasInput: MekaGas("mekanism:antimatter", 2000),
            itemInput: parseIngredient('forbidden_arcanus:arcane_crystal_obelisk'),
            output: parseIngredient('techev_additions:dimensional_stabilizer_obelisk')
        }
    ]

    //General Nucleosynthesizing Function
    recipes.forEach(recipe => {
        let json = {
            type: 'mekanism:nucleosynthesizing',
            duration: recipe.duration || 200,
            gasInput: recipe.gasInput,
            itemInput: { "ingredient": recipe.itemInput },
            output: recipe.output
        }
        event.custom(json).id(`mekanism:nucleosynthesizing/${recipe.id}`)
    })
})