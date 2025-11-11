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
            result: 'javd:portal_block',
            pattern: [
                " E ",
                "EVE",
                " E "
            ],
            key: {
                "E": 'extendedcrafting:enhanced_ender_ingot',
                "V": 'ars_nouveau:void_prism'
            }
        },
        {
            result: 'custommachinery:dimensional_stabilizer',
            pattern: [
                "ADA",
                "OSO",
                "ACA"
            ],
            key: {
                "A": 'forbidden_arcanus:arcane_chiseled_polished_darkstone',
                "D": 'forbidden_arcanus:dark_nether_star',
                "O": 'mekaevolution:cosmic_control_circuit',
                "S": 'mekanism:dimensional_stabilizer',
                "C": 'techev_additions:chromatic',
            }
        }
    ]
    //General Shaped Ender Function
    recipes.forEach((recipe) => {
        for (let k in recipe.key) recipe.key[k] = parseIngredient(recipe.key[k])
        let json = {
            type: 'extendedcrafting:shaped_ender_crafter',
            pattern: recipe.pattern,
            key: recipe.key,
            result: parseIngredient(recipe.result)
        }
        event.custom(json).id(`extendedcrafting:${recipe.result.split(":")[1]}`)
    })
})