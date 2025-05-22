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
        //Overcharged Iron Plate
        {
            id: "plate_overcharged_iron",
            output: "create_new_age:overcharged_iron_sheet",
            input: "create_new_age:overcharged_iron",
            mold: "immersiveengineering:mold_plate",
            energy: 2400
        },
        //Overcharged Golden Plate
        {
            id: "plate_overcharged_golden",
            output: "create_new_age:overcharged_golden_sheet",
            input: "create_new_age:overcharged_gold",
            mold: "immersiveengineering:mold_plate",
            energy: 2400
        },
        //Experience Plate
        {
            id: "plate_experience",
            output: "create_things_and_misc:experience_sheet",
            input: "create:experience_nugget",
            mold: "immersiveengineering:mold_plate",
            energy: 2400
        },
        //Rose Quartz Plate
        {
            id: "plate_rose_quartz",
            output: "create_things_and_misc:rose_quartz_sheet",
            input: "create:polished_rose_quartz",
            mold: "immersiveengineering:mold_plate",
            energy: 2400
        },
        //Blue Quartz Plate
        {
            id: "plate_blue_quartz",
            output: "create_things_and_misc:blue_quartz_sheet",
            input: "create:polished_blue_quartz",
            mold: "immersiveengineering:mold_plate",
            energy: 2400
        },
        //Source Quartz Plate
        {
            id: "plate_source_quartz",
            output: "create_things_and_misc:source_quartz_sheet",
            input: "create:polished_source_quartz",
            mold: "immersiveengineering:mold_plate",
            energy: 2400
        },
        //Psi Quartz Plate
        {
            id: "plate_psi_quartz",
            output: "create_things_and_misc:psi_quartz_sheet",
            input: "create:polished_psi_quartz",
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
        //Desh Gear
        {
            id: "gear_desh",
            output: "#forge:gears/desh",
            input: Item.of("#forge:ingots/desh", 4),
            mold: "immersiveengineering:mold_gear",
            energy: 2400
        },
        //Ostrum Gear
        {
            id: "gear_ostrum",
            output: "#forge:gears/ostrum",
            input: Item.of("#forge:ingots/ostrum", 4),
            mold: "immersiveengineering:mold_gear",
            energy: 2400
        },
        //Calorite Gear
        {
            id: "gear_calorite",
            output: "#forge:gears/calorite",
            input: Item.of("#forge:ingots/calorite", 4),
            mold: "immersiveengineering:mold_gear",
            energy: 2400
        },
        //Spell Bullet
        {
            id: "spell_bullet",
            output: "psi:spell_bullet",
            input: "create_things_and_misc:psi_quartz_sheet",
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
        "elementium",
        "nephryx"
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
        'signalum',
        'desh',
        'ostrum',
        'calorite',
        'nephryx'
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