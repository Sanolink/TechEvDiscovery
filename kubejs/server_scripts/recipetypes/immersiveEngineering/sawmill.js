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
(_____)         Last Modification : 1.3.9         (_____)

*/

ServerEvents.recipes(event => {

    //Recipes
    let recipes = []


    allItems.forEach(id => {
        if (!Item.of(id).hasTag('minecraft:logs') || !id.includes("stripped")) {return}
        console.log(id);
        let [modID, name] = id.split(":")
        let [beg, end] = name.split("stripped_")
        let splittedType = end.split("_")
        if (!(splittedType.length == 1)) {splittedType.pop()}
        let type = splittedType.join("_")
        recipes.push(
            {
                id: `${modID}_${beg}${end}`,
                input: parseIngredient(`${modID}:${beg}${end}`),
                result: ChanceOrCountItem(`${modID}:${type}_planks`, 6),
                secondaries: [
                    {
                        "output":
                        {
                            "tag": "forge:dusts/wood"
                        },
                        "stripping": true
                    },
                    {
                        "output":
                        {
                            "tag": "forge:dusts/wood"
                        },
                        "stripping": false
                    }
                ],
                stripped: parseIngredient(id),
                energy: 1600
            },
            {
                id: `${modID}_${name}`,
                input: parseIngredient(id),
                result: ChanceOrCountItem(`${modID}:${type}_planks`, 6),
                secondaries: [
                    {
                        "output":
                        {
                            "tag": "forge:dusts/wood"
                        },
                        "stripping": false
                    }
                ],
                energy: 800
            }

        )
    })


   //General Sawmill Function
    recipes.forEach(recipe => {
        let json = {
            type: 'immersiveengineering:sawmill',
            input: recipe.input,
            result: recipe.result,
            secondaries: recipe.secondaries,
            energy: recipe.energy || 1600
        }
        if (recipe.stripped) { json.stripped = recipe.stripped}
        event.custom(json).id(`immersiveengineering:sawmill/${recipe.id}`)
    })
})