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

    //Recipes
    thermo_plant("mana_diamond_block", 10, false, "botania:synthetic_mana_diamond", 1000, undefined, false, "botania:mana_diamond_block", 1, undefined, undefined, 7.5, 0, 273, 0.1)

    //General Thermo Plant Function
    function thermo_plant(id, air_use_multiplier, exothermic, f_input, f_input_amount, i_input, i_input_tag, i_output, i_output_count, f_output, f_output_amount, pressure, min_temp, max_temp, speed) {
        let recipe = {}
        recipe.type = "pneumaticcraft:thermo_plant"
        if (air_use_multiplier !== undefined) {
            recipe.air_use_multiplier = air_use_multiplier
        }
        recipe.exothermic = exothermic
        if (f_input !== undefined) { 
            let fluid_input = {}
            fluid_input.type = "pneumaticcraft:fluid"
            fluid_input.amount = f_input_amount
            fluid_input.fluid = f_input            
            recipe.fluid_input = fluid_input
        }
        if (i_input !== undefined) {
            let item_input = {}
            if (i_input_tag) {
                item_input.tag = i_input
            } else {
                item_input.item = i_input
            }
            recipe.item_input = item_input
        }
        if (i_output !== undefined) {
            let item_output = {}
            item_output.item = i_output
            item_output.count = i_output_count
            recipe.item_output = item_output
        }
        if (f_output !== undefined) {
            let fluid_output = {}
            fluid_output.amount = f_output_amount
            fluid_output.fluid = f_output
            recipe.fluid_output = fluid_output
        }
        if (pressure !== undefined) {
            recipe.pressure = pressure
        }
        if (min_temp !== undefined) {
            let temperature = {}
            temperature.min_temp = min_temp
            if (max_temp !== undefined) {
                temperature.max_temp = max_temp
            }
            recipe.temperature = temperature
        }
        if (speed !== undefined) {
            recipe.speed = speed
        }
        event.custom(recipe).id("pneumaticcraft:thermo_plant/" + id)
    }
    
})
