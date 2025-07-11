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
            newOutputs.push({
                fluid: { fluid: "create:honey" },
                amount: 50
            })
            recipe.json.add("outputs", newOutputs);
        }
    })

    //Recipes 
    let recipes = []

    //General Centrifuge Function (TO DO)
    recipes.forEach(recipe => {
        let json = {
            type: 'productivebees:centrifuge',
        }
        event.custom(json).id(`productivebees:centrifuge/${recipe.id || recipe.output.split(":")[1]}`)
    })
    
})