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
    let recipes = [
        {
            id: "experience",
            input: Item.of('create:experience_nugget'),
            output: Item.of('create_things_and_misc:experience_rod')
        },
        {
            id: "carbon",
            input: Item.of('ftbic:carbon_fiber_mesh'),
            output: Item.of('ftbic:carbon_rod')
        }
    ]

    // Ingots -> Rods
    const IngotsToRods = [
        'lead',
        'nickel',
        'osmium',
        'platinum',
        'silver',
        'tin',
        'uranium',
        'zinc',
        'invar',
        'bronze',
        'constantan',
        'iridium',
        'enderium',
        'lumium',
        'signalum',
        'desh',
        'ostrum',
        'calorite',
        'nephryx',
        'falsite',
        'ventium',
        'horizonite',
        'elementium',
        'cast_iron',
        'arcane_gold',
        'iesnium',
        'cloggrum',
        'froststeel',
        'prismalium',
        'melodium',
        'stellarium',
        'netherite',
        'soul_infused',
        'shellite',
        'twinite',
        'dragonsteel',
        'overcharged_iron',
        'overcharged_gold',
        'compressed_iron'
    ].forEach((mat) => {
        recipes.push(
            {
                id: mat + "_ingot",
                input: Ingredient.of("#forge:ingots/" + mat),
                output: Item.of("#forge:rods/" + mat)
            }
        )
    });

    // Quartz -> Rods
    const QuartzToRods = [
        'rose',
        'blue',
        'source',
        'psi',
        'antimatter'
    ].forEach((mat) => {
        recipes.push(
            {
                id: mat + "_quartz",
                input: Ingredient.of(`#forge:polished_quartz/${mat}`),
                output: Item.of(`#forge:rods/${mat}_quartz`)
            }
        )
    });

    // Gems -> Rods
    const GemsToRods = [
        'diamond'
    ].forEach((mat) => {
        recipes.push(
            {
                id: mat + "_gem",
                input: Ingredient.of("#forge:gems/" + mat),
                output: Item.of("#forge:rods/" + mat)
            }
        )
    });

    //General Splashing Function
    recipes.forEach(recipe => {
        event.custom(
            {
                "type": "createaddition:rolling",
                "input": recipe.input,
                "result": recipe.output
            }
        ).id("createaddition:rolling/" + recipe.id)
    })
})