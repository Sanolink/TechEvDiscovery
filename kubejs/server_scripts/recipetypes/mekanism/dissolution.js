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
(_____)         Last Modification : 1.4.10        (_____)

*/

ServerEvents.recipes(event => {

    //Recipes 
    const recipes = [
        {
            id: "hydrofluoric_acid_from_block_apatite",
            gasInput: MekaGas("mekanism:sulfuric_acid", 9),
            itemInput: MekaParseIngredient("thermal:apatite_block"),
            output: MekaGas("mekanism:hydrofluoric_acid", 2250)
        },
        {
            id: "hydrofluoric_acid_apatite",
            gasInput: MekaGas("mekanism:sulfuric_acid", 1),
            itemInput: MekaParseIngredient("thermal:apatite"),
            output: MekaGas("mekanism:hydrofluoric_acid", 250)
        },
    ]

    const DirtySlurries = ['desh', 'ostrum', 'calorite', 'nephryx'].forEach(mat => {
        recipes.push(
            {
                id: `${mat}/slurry/dirty/from_ore`,
                gasInput: MekaGas("mekanism:sulfuric_acid", 1),
                itemInput: MekaParseIngredient(`#forge:ores/${mat}`),
                output: MekaSlurry(`mekanism:dirty_${mat}`, 1000)
            },
            {
                id: `${mat}/slurry/dirty/from_raw_ore`,
                gasInput: MekaGas("mekanism:sulfuric_acid", 1),
                itemInput: MekaCountIngredient(`#forge:raw_materials/${mat}`, 3),
                output: MekaSlurry(`mekanism:dirty_${mat}`, 2000)
            },
            {
                id: `${mat}/slurry/dirty/from_raw_block`,
                gasInput: MekaGas("mekanism:sulfuric_acid", 2),
                itemInput: MekaParseIngredient(`#forge:storage_blocks/raw_${mat}`),
                output: MekaSlurry(`mekanism:dirty_${mat}`, 6000)
            }
        )
    })
    
    const FermentedDusts = ['desh', 'ostrum', 'calorite', 'nephryx', 'iron', 'gold', 'copper', 'osmium', 'tin', 'lead', 'uranium'].forEach(mat => {
        recipes.push({
            id: `${mat}/slurry/dirty/from_fermented_dust`,
            gasInput: MekaGas("mekanism:sulfuric_acid", 1),
            itemInput: MekaCountIngredient(`#industrialforegoing:fermented_dusts/${mat}`, 3),
            output: MekaSlurry(`mekanism:dirty_${mat}`, 2000)
        })
    })

    const ATOFermentedDusts = ['aluminum', 'nickel', 'platinum', 'silver', 'zinc'].forEach(mat => {
        recipes.push({
            id: `${mat}/slurry/dirty/from_fermented_dust`,
            gasInput: MekaGas("mekanism:sulfuric_acid", 1),
            itemInput: MekaCountIngredient(`#industrialforegoing:fermented_dusts/${mat}`, 3),
            output: MekaSlurry(`alltheores:dirty_${mat}`, 2000)
        })
    })

    //General Dissolution Function
    recipes.forEach(recipe => {
        let json = {
            type: 'mekanism:dissolution',
            gasInput: recipe.gasInput,
            itemInput: recipe.itemInput,
            output: recipe.output
        }
        event.custom(json).id(`mekanism:dissolution/${recipe.id}`)
    })
})
