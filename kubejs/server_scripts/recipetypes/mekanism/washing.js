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
(_____)         Last Modification : 1.4.10        (_____)

*/

ServerEvents.recipes(event => {

    //Recipes 
    const recipes = []

    const Slurries = ['desh', 'ostrum', 'calorite', 'nephryx'].forEach(mat => {
        recipes.push({
            id: `${mat}/slurry/clean`,
            fluidInput: FluidTagWithCount("minecraft:water", 5),
            slurryInput: MekaSlurry(`mekanism:dirty_${mat}`, 1),
            output: MekaSlurry(`mekanism:clean_${mat}`, 1)
        })
    })

    //General Washing Function
    recipes.forEach(recipe => {
        let json = {
            type: 'mekanism:washing',
            fluidInput: recipe.fluidInput,
            slurryInput: recipe.slurryInput,
            output: recipe.output
        }
        event.custom(json).id(`mekanism:washing/${recipe.id}`)
    })
})
