//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.3.0

ServerEvents.recipes(event => {
    
    //Recipes
    const recipes = [
        //Thermal Machine Frame
        miniaturization("industrialforegoing:machine_frame_supreme", 1, "thermal:machine_frame", 1, [
            [
                ["W", "I", "I", "I", "W"],
                ["I", "O", "O", "O", "I"],
                ["I", "O", "O", "O", "I"],
                ["I", "O", "O", "O", "I"],
                ["W", "I", "I", "I", "W"]
            ],
            [
                ["I", "O", "O", "O", "I"],
                ["O", "R", "R", "R", "O"],
                ["O", "R", "O", "R", "O"],
                ["O", "R", "R", "R", "O"],
                ["I", "O", "O", "O", "I"]
            ],
            [
                ["S", "O", "O", "O", "S"],
                ["O", "R", "O", "R", "O"],
                ["O", "O", "O", "O", "O"],
                ["O", "R", "O", "R", "O"],
                ["S", "O", "O", "O", "S"]
            ],
            [
                ["E", "O", "O", "O", "E"],
                ["O", "R", "R", "R", "O"],
                ["O", "R", "O", "R", "O"],
                ["O", "R", "R", "R", "O"],
                ["E", "O", "O", "O", "E"]
            ],
            [
                ["B", "E", "E", "E", "B"],
                ["E", "O", "O", "O", "E"],
                ["E", "O", "O", "O", "E"],
                ["E", "O", "O", "O", "E"],
                ["B", "E", "E", "E", "B"]
            ]
        ], 
        {
            "I": "psi:ivory_psimetal_block",
            "E": "psi:ebony_psimetal_block",
            "W": "thermal:white_rockwool",
            "B": "thermal:black_rockwool",
            "R": "compactmachines:wall",
            "S": "immersiveengineering:sheetmetal_steel",
            "O": "minecraft:air"   
        }, "machine_frame")
    ]

    function miniaturization(catalyst, incount, output, outcount, shape, key, id) {
        const components = {};
        for (const symbol in key) { components[symbol] = { "type": "compactcrafting:block", "block": key[symbol] }}
        return {
            json: {
                "type": "compactcrafting:miniaturization",
                "recipeSize": shape.length,
                "layers": shape.map(layer => ({
                    "type": "compactcrafting:mixed",
                    "pattern": layer
                })),
                "catalyst": {
                    "id": catalyst,
                    "Count": incount
                },
                "components": components,
                "outputs": [
                    {
                        "id": output,
                        "Count": outcount
                    }
                ]
            },
            id: id
        }
    }

    //General Miniaturization Function
    recipes.forEach(recipe => {
        event.custom(recipe.json).id("compactcrafting:miniaturization/" + recipe.id)
    })
})

