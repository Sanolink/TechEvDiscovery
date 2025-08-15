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
(_____)         Last Modification : 1.4.3         (_____)

*/

ServerEvents.recipes(event => {


    //Replace
    let excludedIds = [
        "productivebees:centrifuge/spirit/honeycomb_spirit",
        "productivebees:centrifuge/honeycomb_prismarine"
    ]
    event.forEachRecipe({ type: "productivebees:centrifuge" }, recipe => {
        let outputs = recipe.json.get("outputs").getAsJsonArray()
        let newOutputs = []
        let parsedFluid = false
        outputs.forEach((/** @type {Internal.JsonObject} */ output) => {
            newOutputs.push(output)
            if (output.has("item")) {
                output.remove("chance")
                if (output.has("min") && output.has("max")) {
                    output.add("min", output.get("max"))
                }
            }
            if (output.has("fluid")) {
                parsedFluid = true
                let fluid = output.get("fluid").getAsJsonObject()
                if (fluid.has("fluid") && fluid.get("fluid").getAsString() == "productivebees:honey") {
                    fluid.add("fluid", "create:honey");
                    if (recipe.getId() != "productivebees:centrifuge/honeycomb") {
                        output.add("amount", 50);
                    }
                }
            }
        })

        if (!parsedFluid && !excludedIds.includes(recipe.getId())) {
            newOutputs.push(BeeFluidWithCount("create:honey", 50))
            recipe.json.add("outputs", newOutputs);
        }

        event.remove({ id: recipe.getId() });
        event.custom(recipe.json).id(recipe.getId());
    })

    //Recipes 
    let recipes = []

    basicComb("aeric", 'botania:ender_air_bottle')
    basicComb("aquatic", 'minecraft:snowball')
    basicComb("chicken", 'minecraft:chicken')
    basicComb("fiery", 'twilightforest:fiery_ingot')
    basicComb("fishy", 'minecraft:pufferfish')
    basicComb("gaia", 'botania:life_essence')
    basicComb("geotic", 'minecraft:clay_ball')
    basicComb("hop_graphite", 'immersiveengineering:ingot_hop_graphite')
    basicComb("ironwood", 'twilightforest:raw_ironwood')
    basicComb("knightmetal", 'twilightforest:knightmetal_ingot')
    basicComb("nephryx", 'ad_astra:raw_nephryx')
    basicComb("piggy", 'minecraft:porkchop')
    basicComb("rabbit", 'minecraft:rabbit_foot')
    basicComb("sheep", 'minecraft:mutton')
    basicComb("squid", 'minecraft:ink_sac')
    basicComb("steeleaf", 'twilightforest:steeleaf_ingot')
    basicComb("turtle", 'minecraft:scute')

    function basicComb(type, output) {
        recipes.push(
            {
                id: `honeycomb_${type}`,
                ingredient: BeeConfigurableComb(type),
                outputs: [
                    BeeParseIngredient(output),
                    BeeParseIngredient("productivebees:wax"),
                    BeeFluidWithCount("create:honey", 50)
                ]
            }
        )
    }

    //General Centrifuge Function (TO DO)
    recipes.forEach(recipe => {
        let json = {
            type: 'productivebees:centrifuge',
            ingredient: recipe.ingredient,
            outputs: recipe.outputs
        }
        event.custom(json).id(`productivebees:centrifuge/${recipe.id}`)
    })
})

/*
{
    "type": "productivebees:centrifuge",
    "ingredient": {
        "type": "forge:nbt",
        "item": "productivebees:configurable_honeycomb",
        "nbt": {
            "EntityTag": {
                "type": "productivebees:arcane"
            }
        }
    },
    "outputs": [
        {
            "item": {
                "tag": "forge:gems/source"
            },
            "chance": 50
        },
        {
            "item": {
                "tag": "forge:wax"
            }
        },
        {
            "fluid": {
                "fluid": "productivebees:honey"
            },
            "amount": 50
        }
    ],
    "conditions": [
        {
            "type": "forge:mod_loaded",
            "modid": "ars_nouveau"
        }
    ]
}
*/