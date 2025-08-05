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
        {
            input: parseIngredient('naturesaura:end_flower'),
            output: [parseIngredient('naturesaura:end_flower')],
            soil: parseIngredient('minecraft:end_stone'),
            time: 480,
            render: { type: 'generic', block: 'naturesaura:end_flower'}
        }
    ]

    mysticalCrops.enabled.forEach(cropName => {
        let crop = CropRegistryInstance.getCropByName(cropName)
        let crux = crop.getCruxBlock()
        recipes.push(
            {
                id: `mysticalagriculture/${cropName}`,
                input: parseIngredient(crop.getSeedsItem().getId()),
                output: [ChanceOrCountItem(crop.getEssenceItem().getId(), 2)],
                soil: parseIngredient(crux ? crux.getId() : `#forge:soil_tier/${crop.getTier().getFarmland().getIdLocation().getPath().replace('_farmland', '')}`),
                time: 250 + (125 * crop.getTier().getValue()),
                render: {
                  type: 'crop',
                  block: crop.getCropBlock().getId()
                }
            }
        )
    })

   //General Cloche Function
    recipes.forEach(recipe => {
        let json = {
            type: 'immersiveengineering:cloche',
            input: recipe.input,
            results: recipe.output,
            soil: recipe.soil,
            time: recipe.time,
            render: recipe.render
        }
        event.custom(json).id(`immersiveengineering:cloche/${recipe.id}`)
    })
})