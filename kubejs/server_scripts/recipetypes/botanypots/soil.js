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
    let recipes = []

    //Mystical Crops Soils
    let crux = []
    for (const seed of mysticalCrops.enabled) {
        let crop = CropRegistryInstance.getCropByName(seed)
        let cruxBlock = crop.getCruxBlock()
        if (cruxBlock) {
            crux[cruxBlock.getId()] = cruxBlock.getIdLocation().getPath()
        }
    }
    for (const block in crux) {
        let category = crux[block]
        recipes.push(
            {
                id: `mysticalagriculture/${category}`,
                input: { item: block },
                display: { block: block },
                categories: [category],
                growthModifier: 1.0
            }
        )
    }

   //General Soil Function
    recipes.forEach(recipe => {
        let json = {
            type: 'botanypots:soil',
            input: recipe.input,
            display: recipe.display,
            categories: recipe.categories,
            growthModifier: recipe.growthModifier
        }
        event.custom(json).id(`botanypots:soil/${recipe.id}`)
    })
})