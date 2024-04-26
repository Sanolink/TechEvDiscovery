//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {

    //Remove

    //Recipes
    let recipes = [
        //Cast Iron Plate
        {
            id: "plate_cast_iron",
            output: "#forge:plates/cast_iron",
            input: "#forge:ingots/cast_iron",
            mold: "immersiveengineering:mold_plate",
            energy: 2400
        },
        //Netherite Plate
        {
            id: "plate_netherite",
            output: "#forge:plates/netherite",
            input: "#forge:ingots/netherite",
            mold: "immersiveengineering:mold_plate",
            energy: 2400
        },
        //Diamond Plate
        {
            id: "plate_diamond",
            output: "#forge:plates/diamond",
            input: "#forge:gems/diamond",
            mold: "immersiveengineering:mold_plate",
            energy: 2400
        },
        //Diamond Gear
        {
            id: "gear_diamond",
            output: "#forge:gears/diamond",
            input: Item.of("#forge:gems/diamond", 4),
            mold: "immersiveengineering:mold_gear",
            energy: 2400
        },
        //Diamond Rod
        {
            id: "rod_diamond",
            output: Item.of("#forge:rods/diamond", 2),
            input: "#forge:gems/diamond",
            mold: "immersiveengineering:mold_rod",
            energy: 2400
        },
        //Compressed Steel Gear
        {
            id: "gear_compressed_iron",
            output: "#forge:gears/compressed_iron",
            input: Item.of("#forge:ingots/compressed_iron", 4),
            mold: "immersiveengineering:mold_gear",
            energy: 2400
        }
    ]

    // Ingots -> Plates / Gears / Rods
    const specialIngots = [
        "signalum",
        "lumium",
        "enderium",
        "iridium"
    ]
    specialIngots.forEach(ingot => {
        recipes.push(
            //Special Ingots Plates
            {
                id: "plate_" + ingot,
                output: "#forge:plates/" + ingot,
                input: "#forge:ingots/" + ingot,
                mold: "immersiveengineering:mold_plate",
                energy: 2400
            },
            //Special Ingots Gears
            {
                id: "gear_" + ingot,
                output: "#forge:gears/" + ingot,
                input: Item.of("#forge:ingots/" + ingot, 4),
                mold: "immersiveengineering:mold_gear",
                energy: 2400
            },
            //Special Ingots Rods
            {
                id: "rod_" + ingot,
                output: Item.of("#forge:rods/" + ingot, 2),
                input: "#forge:ingots/" + ingot,
                mold: "immersiveengineering:mold_rod",
                energy: 2400
            }
        )
    })

    //General Metal Press Function
    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, recipe.mold, recipe.energy).id("immersiveengineering:metalpress/" + recipe.id)
    })

})