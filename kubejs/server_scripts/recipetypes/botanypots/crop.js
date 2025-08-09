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

    //Replace
    let parsedSeed = []
    event.forEachRecipe({ type: 'botanypots:crop' }, recipe => {
        let seed = Ingredient.of(recipe.json.get('seed')).getFirst()
        if (seed.getMod().includes('mystical')) {
            let seedName = seed.getIdLocation().getPath().replace('_seeds', '')
            let crop = CropRegistryInstance.getCropByName(seedName)
            let newCategory = `${crop.getTier().getFarmland().getIdLocation().getPath().replace('_farmland', '')}`
            let newDrops = []
            let crux = crop.getCruxBlock()
            if (crux) {
                recipe.json.add('categories', [`${crux.getIdLocation().getPath()}`])
            }
            for (const drop of recipe.json.get('drops')) {
                if (Ingredient.of(drop.get('output')).test(seed)) {
                    if (SecondarySeedChance > 0 && crop.getTier().hasSecondarySeedDrop()) {
                        drop.add('chance', SecondarySeedChance)
                        newDrops.push(drop)
                    }
                } else {
                    newDrops.push(drop)
                }
            }
            recipe.json.add('categories', [newCategory])
            recipe.json.add('drops', newDrops)
            parsedSeed.push(seedName)
        }
    })

    //Recipes
    let recipes = [
        {
            id: `naturesaura/end_flower`,
            seed: parseIngredient('naturesaura:end_flower'),
            categories: ["end_stone"],
            growthTicks: 1200,
            display: {
                type: 'botanypots:aging',
                block: 'naturesaura:end_flower'
            },
            drops: BotanyChanceIngredient('naturesaura:end_flower', 1)
        }
    ]
    
    //Mystical Crops
    for (const seed of mysticalCrops.enabled) {
        if (!parsedSeed.includes(seed)) {
            let crop = CropRegistryInstance.getCropByName(seed)

            let category = `${crop.getTier().getFarmland().getIdLocation().getPath().replace('_farmland', '')}`
            let crux = crop.getCruxBlock()
            if (crux) { category = `${crux.getIdLocation().getPath()}` }

            let drops = [{ chance: 1.0, output: parseIngredient(crop.getEssenceItem().getId()) }]
            if (SecondarySeedChance > 0 && crop.getTier().hasSecondarySeedDrop()) {
                drops.push({ chance: SecondarySeedChance, output: parseIngredient(crop.getSeedsItem().getId()) })
            }
            drops.push({ chance: 0.01, output: parseIngredient("mysticalagriculture:fertilized_essence"), minRolls: 1, maxRolls: 1 })

            recipes.push(
                {
                    id: `mysticalagriculture/${seed}`,
                    seed: parseIngredient(crop.getSeedsItem().getId()),
                    categories: [category],
                    growthTicks: 1200 + (600 * crop.getTier().getValue()),
                    display: {
                        type: 'botanypots:aging',
                        block: crop.getCropBlock().getId()
                    },
                    drops: drops
                }
            )
        }
    }

   //General Crop Function
    recipes.forEach(recipe => {
        let json = {
            type: 'botanypots:crop',
            seed: recipe.seed,
            categories: recipe.categories,
            growthTicks: recipe.growthTicks,
            display: recipe.display,
            drops: recipe.drops
        }
        event.custom(json).id(`botanypots:${recipe.id}`)
    })
})