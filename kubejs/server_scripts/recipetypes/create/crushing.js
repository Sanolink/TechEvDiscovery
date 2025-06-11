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
    let recipes = [
        //Crushing Tuff
        {
            id: "tuff_recycling",
            input: [parseIngredient("minecraft:tuff")],
            output: [
                ChanceOrCountItem("minecraft:flint", 0.25),
                ChanceOrCountItem("minecraft:iron_nugget", 0.1),
                ChanceOrCountItem("minecraft:gold_nugget", 0.1),
                ChanceOrCountItem("alltheores:copper_nugget", 0.1),
                ChanceOrCountItem("alltheores:zinc_nugget", 0.1),
                ChanceOrCountItem("minecraft:diamond_nugget", 0.0225)
            ]
        },
        //Crushing Polished Blackstone
        {
            id: "polished_blackstone_recycling",
            input: [parseIngredient("minecraft:polished_blackstone")],
            output: [
                ChanceOrCountItem("create:cinder_flour", 0.1),
                ChanceOrCountItem("minecraft:quartz", 0.05),
                ChanceOrCountItem("minecraft:gold_nugget", 0.02),
                ChanceOrCountItem("createdeco:netherite_nugget", 0.01)
            ]
        }
    ]

    crushedAdAstra("desh", "moon")
    crushedAdAstra("ostrum", "mars")
    crushedAdAstra("calorite", "venus")
    crushedAdAstra("nephryx", "mercury")

    function crushedAdAstra(material, planet) {
        recipes.push(
            {
                id: TagToItem(`#forge:raw_materials/${material}`).split(":")[1],
                input: [parseIngredient(`#forge:raw_materials/${material}`)],
                output: [
                    parseIngredient(`create:crushed_raw_${material}`),
                    ChanceOrCountItem("create:experience_nugget", 0.75)
                ]
            },
            {
                id: TagToItem(`#forge:storage_blocks/raw_${material}`).split(":")[1],
                input: [parseIngredient(`#forge:storage_blocks/raw_${material}`)],
                output: [
                    ChanceOrCountItem(`create:crushed_raw_${material}`, 9),
                    ChanceAndCountItem("create:experience_nugget", 0.75, 9)
                ]
            },
            {
                id: `${planet}_${material}_ore`,
                input: [parseIngredient(`ad_astra:${planet}_${material}_ore`)],
                output: [
                    parseIngredient(`create:crushed_raw_${material}`),
                    ChanceOrCountItem(`create:crushed_raw_${material}`, 0.75),
                    ChanceOrCountItem("create:experience_nugget", 0.75),
                    ChanceOrCountItem(`ad_astra:${planet}_cobblestone`, 0.12)
                ]
            }
        )
        if (Item.exists(`ad_astra:deepslate_${material}_ore`)) {
            recipes.push(
                {
                    id: `deepslate_${material}_ore`,
                    input: [parseIngredient(`ad_astra:deepslate_${material}_ore`)],
                    output: [
                        ChanceOrCountItem(`create:crushed_raw_${material}`, 2),
                        ChanceOrCountItem(`create:crushed_raw_${material}`, 0.75),
                        ChanceOrCountItem("create:experience_nugget", 0.75),
                        ChanceOrCountItem("minecraft:cobbled_deepslate", 0.12)
                    ]
                }
            )
        }
    }

    //General Crushing Function
    recipes.forEach(recipe => {
        let json = {
            type: 'create:crushing',
            ingredients: recipe.input,
            results: recipe.output,
            processingTime: recipe.processingTime || 100
        }
        event.custom(json).id(`create:crushing/${recipe.id}`)
    })
})
