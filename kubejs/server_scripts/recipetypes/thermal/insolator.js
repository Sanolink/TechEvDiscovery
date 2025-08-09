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
            id: "end_flower",
            ingredient: parseIngredient("naturesaura:end_flower"),
            result: ThermalChanceItem("naturesaura:end_flower", 2)
        }
    ]

    mysticalCrops.enabled.forEach(cropName => {
        let crop = CropRegistryInstance.getCropByName(cropName)
        recipes.push(
            {
                id: `essence_${cropName}`,
                ingredient: parseIngredient(crop.getSeedsItem().getId()),
                result: [ 
                    ThermalChanceItem(crop.getEssenceItem().getId(), 1 + SecondarySeedChance),
                    {
                      item: crop.getSeedsItem().getId(),
                      chance: crop.getTier().hasSecondarySeedDrop() ? (1 + SecondarySeedChance) : 1,
                      locked: true
                    }
                ]
            }
        )
    })

   //General Insolator Function
    recipes.forEach(recipe => {
        let json = {
            type: 'thermal:insolator',
            ingredient: recipe.ingredient,
            result: recipe.result
        }
        event.custom(json).id(`thermal:insolator/insolator_${recipe.id}`)
    })
})