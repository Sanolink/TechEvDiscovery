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
            input: "minecraft:tuff",
            output: [
                Item.of("minecraft:flint").withChance(0.25),
                Item.of("minecraft:iron_nugget").withChance(0.1),
                Item.of("minecraft:gold_nugget").withChance(0.1),
                Item.of("alltheores:copper_nugget").withChance(0.1),
                Item.of("alltheores:zinc_nugget").withChance(0.1),
                Item.of("minecraft:diamond_nugget").withChance(0.0225)
            ]
        },
        //Crushing Polished Blackstone
        {
            input: "minecraft:polished_blackstone",
            output: [
                Item.of("create:cinder_flour").withChance(0.1),
                Item.of("minecraft:quartz").withChance(0.05),
                Item.of("minecraft:gold_nugget").withChance(0.02),
                Item.of("createdeco:netherite_nugget").withChance(0.01)
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
                input: `#forge:raw_materials/${material}`,
                output: [
                    `create:crushed_raw_${material}`,
                    Item.of("create:experience_nugget").withChance(0.75)
                ]
            },
            {
                input: `#forge:storage_blocks/raw_${material}`,
                output: [
                    `9x create:crushed_raw_${material}`,
                    Item.of("9x create:experience_nugget").withChance(0.75)
                ]
            },
            {
                input: `ad_astra:${planet}_${material}_ore`,
                output: [
                    `create:crushed_raw_${material}`,
                    Item.of(`create:crushed_raw_${material}`).withChance(0.75),
                    Item.of("create:experience_nugget").withChance(0.75),
                    Item.of(`ad_astra:${planet}_cobblestone`).withChance(0.12)
                ]
            }
        )
        if (Item.exists(`ad_astra:deepslate_${material}_ore`)) {
            recipes.push(
                {
                    input: `ad_astra:deepslate_${material}_ore`,
                    output: [
                        `2x create:crushed_raw_${material}`,
                        Item.of(`create:crushed_raw_${material}`).withChance(0.75),
                        Item.of("create:experience_nugget").withChance(0.75),
                        Item.of("minecraft:cobbled_deepslate").withChance(0.12)
                    ]
                }
            )
        }
    }

    //General Crushing Function
    recipes.forEach(recipe => {
        event.recipes.create.crushing(recipe.output, recipe.input).id(`create:crushing/${recipe.input.split(":")[1]}`)
    })
})
