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
(_____)         Last Modification : 1.3.0         (_____)

*/

ServerEvents.recipes(event => {
    
    //Replace 
    event.replaceInput({id: 'thermal:augments/area_radius_augment'}, 'thermal:redstone_servo', 'thermal:ender_servo')
    event.replaceInput({id: 'thermal:augments/machine_output_augment'}, 'thermal:redstone_servo', 'thermal:ender_servo')
    event.replaceInput({id: 'thermal:augments/machine_catalyst_augment'}, 'thermal:redstone_servo', 'thermal:ender_servo')
    
    //Recipes
    const recipes = [
     
     //Rodworking Die
     {
         output: 'thermal:press_rod_die',
         pattern: [" I ", "IDI", " I "],
         key: {
             I: "alltheores:invar_plate",
             D: "alltheores:diamond_rod"
         }
     },
     //Induction Smelter
     {
        output: 'thermal:machine_smelter',
        pattern: [" R ", "IMI", "PHP"],
        key: {
            R: 'industrialforegoing:resourceful_furnace',
            I: 'immersiveengineering:toolupgrade_powerpack_induction',
            M: 'thermal:machine_frame',
            P: 'alltheores:platinum_gear',
            H: 'create_sa:heat_engine'
        }
    },
 ]
 
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.output)
    })
 })