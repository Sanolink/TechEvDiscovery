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
(_____)         Last Modification : 1.4.11        (_____)

*/

ServerEvents.recipes(event => {
    
    //Recipes 
    const recipes = [
        {
            id: "crystal_hypernitro",
            chemicalInput: MekaGas("mekanism:hypermatter", 1),
            input: MekaParseIngredient('powah:crystal_nitro'),
            output: parseIngredient('mekanism:crystal_hypernitro')
        }
    ]

    const Shards = ['desh', 'ostrum', 'calorite', 'nephryx', 'iridium', 'iesnium', 'elementium', 'cloggrum', 'froststeel', 'falsite', 'ventium', 'horizonite'].forEach(mat => {
        recipes.push(
            {
                id: `${mat}/shard/from_crystal`,
                chemicalInput: MekaGas("mekanism:hydrogen_chloride", 1),
                input: MekaParseIngredient(`#mekanism:crystals/${mat}`),
                output: parseIngredient(`mekanism:shard_${mat}`)
            },
            {
                id: `${mat}/shard/from_ore`,
                chemicalInput: MekaGas("mekanism:hydrogen_chloride", 1),
                input: MekaParseIngredient(`#forge:ores/${mat}`),
                output: ChanceOrCountItem(`mekanism:shard_${mat}`, 4)
            },
            {
                id: `${mat}/shard/from_raw_ore`,
                chemicalInput: MekaGas("mekanism:hydrogen_chloride", 1),
                input: MekaCountIngredient(`#forge:raw_materials/${mat}`, 3),
                output: ChanceOrCountItem(`mekanism:shard_${mat}`, 8)
            },
            {
                id: `${mat}/shard/from_raw_block`,
                chemicalInput: MekaGas("mekanism:hydrogen_chloride", 2),
                input: MekaParseIngredient(`#forge:storage_blocks/raw_${mat}`),
                output: ChanceOrCountItem(`mekanism:shard_${mat}`, 24)
            }
        )
    })

    const FermentedDusts = ['desh', 'ostrum', 'calorite', 'nephryx', 'iron', 'gold', 'copper', 'osmium', 'tin', 'lead', 'uranium', 'aluminum', 'nickel', 'platinum', 'silver', 'zinc', 'iridium', 'iesnium', 'elementium', 'cloggrum', 'froststeel', 'falsite', 'ventium', 'horizonite'].forEach(mat => {
        recipes.push({
            id: `${mat}/shard/from_fermented_dust`,
            chemicalInput: MekaGas("mekanism:hydrogen_chloride", 1),
            input: MekaCountIngredient(`#industrialforegoing:fermented_dusts/${mat}`, 3),
            output: ChanceOrCountItem(TagToItem(`#mekanism:shards/${mat}`), 8)
        })
    })

    //General Injecting Function
    recipes.forEach(recipe => {
        let json = {
            type: 'mekanism:injecting',
            chemicalInput: recipe.chemicalInput,
            itemInput: recipe.input,
            output: recipe.output
        }
        event.custom(json).id(`mekanism:injecting/${recipe.id}`)
    })
})