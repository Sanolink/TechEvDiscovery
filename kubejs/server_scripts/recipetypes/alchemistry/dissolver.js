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
            id: "silicon",
            input: ChemParseIngredient('ae2:silicon'),
            output: ChemProbableResult(100,
                [
                    ChanceOrCountItem('chemlib:silicon', 16)
                ]
            )
        },
        {
            id: "fluorite",
            input: ChemParseIngredient('mekanism:fluorite_gem'),
            output: ChemProbableResult(100,
                [
                    ChanceOrCountItem('chemlib:fluorine', 8),
                    ChanceOrCountItem('chemlib:calcium', 4)
                ]
            )
        },
        {
            id: "dusts/fluorite",
            input: ChemParseIngredient('#forge:dusts/fluorite'),
            output: ChemProbableResult(100,
                [
                    ChanceOrCountItem('chemlib:fluorine', 8),
                    ChanceOrCountItem('chemlib:calcium', 4)
                ]
            )
        },
        {
            id: "ores/fluorite",
            input: ChemParseIngredient('#forge:ores/fluorite'),
            output: ChemProbableResult(100,
                [
                    ChanceOrCountItem('chemlib:fluorine', 16),
                    ChanceOrCountItem('chemlib:calcium', 8)
                ]
            )
        },
        {
            id: "storage_blocks/fluorite",
            input: ChemParseIngredient('#forge:storage_blocks/fluorite'),
            output: ChemProbableResult(100,
                [
                    ChanceOrCountItem('chemlib:fluorine', 64),
                    ChanceOrCountItem('chemlib:fluorine', 8),
                    ChanceOrCountItem('chemlib:calcium', 36)
                ]
            )
        }
    ]

    //General Dissolver Function
    recipes.forEach(recipe => {
        let json = {
            type: 'alchemistry:dissolver',
            group: 'alchemistry:dissolver',
            input: recipe.input,
            output: { 
                groups: [recipe.output],
                rolls: recipe.rolls | 1,
                weighted: recipe.weighted | false
            }
        }
        event.custom(json).id(`alchemistry:dissolver/${recipe.id}`)
    })
})