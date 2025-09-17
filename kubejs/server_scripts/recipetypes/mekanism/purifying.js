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
    const recipes = []

    const Clumps = ['desh', 'ostrum', 'calorite', 'nephryx'].forEach(mat => {
        recipes.push(
            {
                id: `${mat}/clump/from_shard`,
                input: MekaParseIngredient(`#mekanism:shards/${mat}`),
                output: parseIngredient(`mekanism:clump_${mat}`)
            },
                        {
                id: `${mat}/clump/from_ore`,
                input: MekaParseIngredient(`#forge:ores/${mat}`),
                output: ChanceOrCountItem(`mekanism:clump_${mat}`, 3)
            },
            {
                id: `${mat}/clump/from_raw_ore`,
                input: MekaParseIngredient(`#forge:raw_materials/${mat}`),
                output: ChanceOrCountItem(`mekanism:clump_${mat}`, 2)
            },
            {
                id: `${mat}/clump/from_raw_block`,
                oxygen: 2,
                input: MekaParseIngredient(`#forge:storage_blocks/raw_${mat}`),
                output: ChanceOrCountItem(`mekanism:clump_${mat}`, 18)
            }
        )
    })

    const FermentedDusts = ['desh', 'ostrum', 'calorite', 'nephryx', 'iron', 'gold', 'copper', 'osmium', 'tin', 'lead', 'uranium', 'aluminum', 'nickel', 'platinum', 'silver', 'zinc'].forEach(mat => {
        recipes.push({
            id: `${mat}/clump/from_fermented_dust`,
            input: MekaParseIngredient(`#industrialforegoing:fermented_dusts/${mat}`),
            output: ChanceOrCountItem(TagToItem(`#mekanism:clumps/${mat}`), 2)
        })
    })
    
    function productiveGene(attribute, input, output) {
        recipes.push({
            id: `gene_${attribute}_${input}_${output}`,
            input: { "ingredient": NBTItem('productivebees:gene', `{productivebees_gene_attribute:"${attribute}",productivebees_gene_purity:100,productivebees_gene_value:${input}}`)},
            output: NBTItem('productivebees:gene', `{productivebees_gene_attribute:"${attribute}",productivebees_gene_purity:100,productivebees_gene_value:${output}}`)
        })
    }

    productiveGene("productivity", 0, 1)
    productiveGene("productivity", 1, 2)
    productiveGene("productivity", 2, 3)
    productiveGene("endurance", 0, 1)
    productiveGene("endurance", 1, 2)
    productiveGene("endurance", 2, 3)
    productiveGene("temper", 3, 2)
    productiveGene("temper", 2, 1)
    productiveGene("temper", 1, 0)
    productiveGene("weather_tolerance", 0, 1)
    productiveGene("weather_tolerance", 1, 2)
    productiveGene("behavior", 0, 1)
    productiveGene("behavior", 1, 2)

    //General Purifying Function
    recipes.forEach(recipe => {
        let json = {
            type: 'mekanism:purifying',
            chemicalInput: MekaGas("mekanism:oxygen", recipe.oxygen || 1),
            itemInput: recipe.input,
            output: recipe.output
        }
        event.custom(json).id(`mekanism:purifying/${recipe.id}`)
    })
})