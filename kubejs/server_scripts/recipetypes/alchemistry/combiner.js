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
    const recipes = [
        {
            id: "low_covalence_dust",
            input: [
                ChemCountIngredient('chemlib:copper_chloride', 4),
                ChemParseIngredient('chemlib:beryllium_chloride'),
                ChemCountIngredient('chemlib:nickel_chloride', 4),
            ],
            output: ChanceOrCountItem('projecte:low_covalence_dust', 4)
        },
        {
            id: "medium_covalence_dust",
            input: [
                ChemCountIngredient('chemlib:strontium_carbonate', 4),
                ChemParseIngredient('chemlib:cobalt_carbonate'),
                ChemCountIngredient('chemlib:calcium_carbonate', 4),
            ],
            output: ChanceOrCountItem('projecte:medium_covalence_dust', 4)
        },
        {
            id: "high_covalence_dust",
            input: [
                ChemCountIngredient('chemlib:lead_iodide', 4),
                ChemParseIngredient('chemlib:antimony_trisulfide'),
                ChemCountIngredient('chemlib:arsenic_sulfide', 4),
            ],
            output: ChanceOrCountItem('projecte:high_covalence_dust', 4)
        },
        {
            id: "fluorite",
            input: [
                ChemCountIngredient('chemlib:fluorine', 8),
                ChemCountIngredient('chemlib:calcium', 4)
            ],
            output: parseIngredient('mekanism:fluorite_gem')
        }
    ]

    //General Combiner Function
    recipes.forEach(recipe => {
        let json = {
            type: 'alchemistry:combiner',
            group: 'alchemistry:combiner',
            input: recipe.input,
            result: recipe.output,
        }
        event.custom(json).id(`alchemistry:combiner/${recipe.id}`)
    })
})