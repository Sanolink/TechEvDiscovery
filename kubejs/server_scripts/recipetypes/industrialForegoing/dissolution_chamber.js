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
    {
        id : 'resonant_machine_frame',
        input : [
            'botania:third_eye', 'thermal:machine_frame', 'botania:third_eye',
            'thermal_extra:dragonsteel_ingot', 'thermal_extra:dragonsteel_ingot',
            'thermalendergy:stellarium_gear', 'immersiveengineering:component_electronic_adv', 'thermalendergy:stellarium_gear'
        ],
        fluid : IndustrialFluidWithCount('thermal:ender', 1000),
        output : parseIngredient('thermal:resonant_machine_frame')
    },
    {
        id : 'psi_infuser',
        input : [
            'psi:ivory_psimetal_block', 'thermal:machine_smelter', 'psi:ivory_psimetal_block',
            'create:shadow_steel', 'create:shadow_steel',
            'psi:ebony_psimetal_block', 'thermalendergy:melodium_gear', 'psi:ebony_psimetal_block'
        ],
        fluid : IndustrialFluidWithCount('psi:destabilized_psimetal', 1000),
        output : NBTItem('custommachinery:custom_machine_item', "{machine:\"custommachinery:psi_infuser\"}")
    }
]

   //General Dissolution Chamber Function
    recipes.forEach(recipe => {
        let json = {
            type: 'industrialforegoing:dissolution_chamber',
            input: recipe.input.map(i => parseIngredient(i)),
            inputFluid: recipe.fluid,
            output: recipe.output,
            processingTime: recipe.time || 300
        }
        event.custom(json).id(`industrialforegoing:dissolution_chamber/${recipe.id}`)
    })    
})