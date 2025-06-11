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
        //Diamond
        {
            id: "diamond",
            input: [parseIngredient("#forge:gems/diamond")],
            output: [parseIngredient(TagToItem("#forge:plates/diamond"))]
        },
        //Sand Paper
        {
            id: "sand_paper",
            input: [parseIngredient("minecraft:sand")],
            output: [parseIngredient("create:sand_paper")]
        },
        //Red Sand Paper
        {
            id: "red_sand_paper",
            input: [parseIngredient("minecraft:red_sand")],
            output: [parseIngredient("create:red_sand_paper")]
        },
        //Blue Quartz Plate
        {
            id: "blue_quartz_sheet",
            input: [parseIngredient("create:polished_blue_quartz")],
            output: [parseIngredient("create_things_and_misc:blue_quartz_sheet")]
        },
        //Source Quartz Plate
        {
            id: "source_quartz_sheet",
            input: [parseIngredient("create:polished_source_quartz")],
            output: [parseIngredient("create_things_and_misc:source_quartz_sheet")]
        },
        //Psi Quartz Plate
        {
            id: "psi_quartz_sheet",
            input: [parseIngredient("create:polished_psi_quartz")],
            output: [parseIngredient("create_things_and_misc:psi_quartz_sheet")]
        }
    ]
    
    // Ingots -> Plates
    const IngotsToPlates = [
        'aluminum',
        'brass',
        'bronze', 
        'constantan',
        'copper',
        'dragonsteel',
        'electrum',
        'elementium',
        'enderium', 
        'gold',
        'invar', 
        'iridium',
        'iron',
        'lead',
        'lumium', 
        'melodium',
        'netherite',
        'nickel',
        'osmium', 
        'platinum', 
        'prismalium',
        'shellite',
        'signalum', 
        'silver',
        'soul_infused',
        'steel',
        'stellarium',
        'tin',
        'twinite',
        'uranium',
        'zinc'
    ].forEach(ingot => {
        recipes.push(
            {
                id: `${ingot}_ingot`,
                input: [parseIngredient(`#forge:ingots/${ingot}`)],
                output: [parseIngredient(TagToItem(`#forge:plates/${ingot}`))]
            }
        )
    })
    
   //General Pressing Function
    recipes.forEach(recipe => {
        let json = {
            type: 'create:pressing',
            ingredients: recipe.input,
            results: recipe.output
        }
        event.custom(json).id(`create:pressing/${recipe.id}`)
    })
})