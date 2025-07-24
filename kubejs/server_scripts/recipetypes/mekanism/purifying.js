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
    const recipes = []

    function productiveGene(attribute, input, output) {
        recipes.push({
            id: `gene_${attribute}_${input}_${output}`,
            input: NBTItem('productivebees:gene', `{productivebees_gene_attribute:"${attribute}",productivebees_gene_purity:100,productivebees_gene_value:${input}}`),
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
            chemicalInput: { "amount": recipe.oxygen || 1, "gas": "mekanism:oxygen" },
            itemInput: { "ingredient": recipe.input },
            output: recipe.output
        }
        event.custom(json).id(`mekanism:purifying/${recipe.id}`)
    })
})