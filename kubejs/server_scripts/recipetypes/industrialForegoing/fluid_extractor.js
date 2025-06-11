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
    const recipes = [
        // Liquid Soul
        {
            id: "soul_sand",
            input: parseIngredient('minecraft:soul_sand'),
            output: 'forbidden_arcanus:soulless_sand',
            breakChance: 0.01,
            fluid: IndustrialFluidWithCount("forbidden_arcanus:liquid_soul", 4)
        }
 ]
 
   //General Fluid Extractor Function
    recipes.forEach(recipe => {
        let json = {
            type: 'industrialforegoing:fluid_extractor',
            input: recipe.input,
            result: recipe.output,
            output: recipe.fluid,
            breakChance: recipe.breakChance,
            defaultRecipe: false
        }
        event.custom(json).id(`industrialforegoing:fluid_extractor/${recipe.id}`)
    })    
 })