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
(_____)         Last Modification : 1.3.4         (_____)

*/

ServerEvents.recipes(event => {

    const recipes = [
        {
            output : 'psi:cad_assembly_gold',
            input : ['psi:cad_assembly_iron', 'alltheores:gold_gear']

        },
        {
            output : 'bhc:soul_heart_amulet',
            input : ['bhc:heart_amulet', 'bhc:soul_heart_crystal']
        }
    ]
    
    //General Deploying Function
    recipes.forEach(recipe => {
        event.recipes.create.deploying(recipe.output, recipe.input,).id("create:deploying/" + recipe.output.split(":")[1])
    })

})
