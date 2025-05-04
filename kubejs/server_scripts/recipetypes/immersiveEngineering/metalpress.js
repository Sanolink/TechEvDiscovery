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
(_____)         Last Modification : 1.3.0         (_____)

*/

ServerEvents.recipes(event => {

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
        },
        //Netherite Gear
        {
            id: "gear_netherite",
            output: "#forge:gears/netherite",
            input: Item.of("#forge:ingots/netherite", 4),
            mold: "immersiveengineering:mold_gear",
            energy: 2400
        },
        //Lapis Gear
        {
            id: "gear_lapis",
            output: "#forge:gears/lapis",
            input: Item.of("#forge:gems/lapis", 4),
            mold: "immersiveengineering:mold_gear",
            energy: 2400
        },
        //Emerald Gear
        {
            id: "gear_emerald",
            output: "#forge:gears/emerald",
            input: Item.of("#forge:gems/emerald", 4),
            mold: "immersiveengineering:mold_gear",
            energy: 2400
        },
        //Quartz Gear
        {
            id: "gear_quartz",
            output: "#forge:gears/quartz",
            input: Item.of("#forge:gems/quartz", 4),
            mold: "immersiveengineering:mold_gear",
            energy: 2400
        },
        //Spell Bullet
        {
            id: "spell_bullet",
            output: "psi:spell_bullet",
            input: "psi:psidust",
            mold: "immersiveengineering:mold_bullet_casing",
            energy: 2400
        }
    ]

    // Ingots -> Plates / Gears
    const IngotsPlatesGears = [
        "dragonsteel",
        "enderium",
        "iridium",
        "lumium",
        "melodium",
        "prismalium",
        "shellite",
        "signalum",
        "soul_infused",
        "stellarium",
        "twinite",
        "elementium"
    ].forEach(ingot => {
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
            }
        )
    })

    // Ingots -> Rods
    const IngotsToRods = [
        'iridium',
        'enderium',
        'lumium',
        'signalum'
    ].forEach(mat => {
        recipes.push(
            {
                id: "rod_" + mat,
                output: Item.of("#forge:rods/" + mat, 2),
                input: "#forge:ingots/" + mat,
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