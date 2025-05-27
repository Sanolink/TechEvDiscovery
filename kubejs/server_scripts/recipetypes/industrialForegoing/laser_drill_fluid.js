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
(_____)         Last Modification : 1.3.6         (_____)

*/

ServerEvents.recipes(event => {

    //Recipes
    const recipes = [
        //Liquid Soul
        {
            id: "liquid_soul",
            catalyst: laserLens.white,
            entity: "forbidden_arcanus:lost_soul",
            output: Fluid.of("forbidden_arcanus:liquid_soul", 20),
            rarity: [
                {
                    blacklist: {},
                    depth_max: 256,
                    depth_min: -64,
                    weight: 8,
                    whitelist: {}
                }
            ]
        }
    ]

    //General Laser Drill Ore Function
    recipes.forEach((recipe) => {
        event.recipes.industrialforegoing.laser_drill_fluid(recipe.output, recipe.catalyst, recipe.rarity, recipe.entity).id(`industrialforegoing:laser_drill_ore/${recipe.id}`)
    })
})