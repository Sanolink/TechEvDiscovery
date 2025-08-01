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
            id: "radiance/from_enriched",
            input: parseIngredient('mekaevolution:enriched_radiance'),
            output: MekaInfuseType("mekaevolution:radiance", 80)
        },
        {
            id: "thermonuclear/from_enriched",
            input: parseIngredient('mekaevolution:enriched_thermonuclear'),
            output: MekaInfuseType("mekaevolution:thermonuclear", 80)
        },
        {
            id: "shining/from_enriched",
            input: parseIngredient('mekaevolution:enriched_shining'),
            output: MekaInfuseType("mekaevolution:shining", 80)
        },
        {
            id: "spectrum/from_enriched",
            input: parseIngredient('mekaevolution:enriched_spectrum'),
            output: MekaInfuseType("mekaevolution:spectrum", 80)
        },
    ]

    //General Infusion Cnversion Function
    recipes.forEach(recipe => {
        let json = {
            type: 'mekanism:infusion_conversion',
            input: { "ingredient": recipe.input },
            output: recipe.output
        }
        event.custom(json).id(`mekanism:infusion_conversion/${recipe.id}`)
    })
})