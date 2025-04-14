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
    const recipes = [
        {
            id: 'flowing_time',
            inputs: [
                { item: 'tiab:compressed_iron_bottle', count: 1 },
                { item: 'naturesaura:clock_hand', count: 1 },
                { item: 'upgradednetherite_ultimate:ultimate_essence', count: 1 },
                { item: 'ars_nouveau:glyph_extend_time', count: 1 }
            ],
            pressure: 4.0,
            results: [{ item: 'tiab:flowing_time', count: 1 }]
        }
    ]

    //General Pressure Chamber Function
    recipes.forEach((recipe) => {
        let inputs = []
        recipe.inputs.forEach((input) => {
            input.type = 'pneumaticcraft:stacked_item'
            inputs.push(input)
        })

        event
            .custom({
                type: 'pneumaticcraft:pressure_chamber',
                inputs: inputs,
                pressure: recipe.pressure,
                results: recipe.results
            })
            .id("pneumaticcraft:pressure_chamber/" + recipe.id)
    });

})



