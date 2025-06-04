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
(_____)         Last Modification : 1.3.7         (_____)

*/

ServerEvents.recipes(event => {

    //Recipes
    let recipes = [
        //Cast Iron Plate
        {
            id: "plate_cast_iron",
            output: parseIngredient("#forge:plates/cast_iron"),
            input: parseIngredient("#forge:ingots/cast_iron"),
            mold: "immersiveengineering:mold_plate"
        },
        //Netherite Plate
        {
            id: "plate_netherite",
            output: parseIngredient("#forge:plates/netherite"),
            input: parseIngredient("#forge:ingots/netherite"),
            mold: "immersiveengineering:mold_plate"
        },
        //Diamond Plate
        {
            id: "plate_diamond",
            output: parseIngredient("#forge:plates/diamond"),
            input: parseIngredient("#forge:gems/diamond"),
            mold: "immersiveengineering:mold_plate"
        },
        //Overcharged Iron Plate
        {
            id: "plate_overcharged_iron",
            output: parseIngredient("create_new_age:overcharged_iron_sheet"),
            input: parseIngredient("create_new_age:overcharged_iron"),
            mold: "immersiveengineering:mold_plate"
        },
        //Overcharged Golden Plate
        {
            id: "plate_overcharged_golden",
            output: parseIngredient("create_new_age:overcharged_golden_sheet"),
            input: parseIngredient("create_new_age:overcharged_gold"),
            mold: "immersiveengineering:mold_plate"
        },
        //Experience Plate
        {
            id: "plate_experience",
            output: parseIngredient("create_things_and_misc:experience_sheet"),
            input: parseIngredient("create:experience_nugget"),
            mold: "immersiveengineering:mold_plate"
        },
        //Rose Quartz Plate
        {
            id: "plate_rose_quartz",
            output: parseIngredient("create_things_and_misc:rose_quartz_sheet"),
            input: parseIngredient("create:polished_rose_quartz"),
            mold: "immersiveengineering:mold_plate"
        },
        //Blue Quartz Plate
        {
            id: "plate_blue_quartz",
            output: parseIngredient("create_things_and_misc:blue_quartz_sheet"),
            input: parseIngredient("create:polished_blue_quartz"),
            mold: "immersiveengineering:mold_plate"
        },
        //Source Quartz Plate
        {
            id: "plate_source_quartz",
            output: parseIngredient("create_things_and_misc:source_quartz_sheet"),
            input: parseIngredient("create:polished_source_quartz"),
            mold: "immersiveengineering:mold_plate"
        },
        //Psi Quartz Plate
        {
            id: "plate_psi_quartz",
            output: parseIngredient("create_things_and_misc:psi_quartz_sheet"),
            input: parseIngredient("create:polished_psi_quartz"),
            mold: "immersiveengineering:mold_plate"
        },
        //Diamond Gear
        {
            id: "gear_diamond",
            output: parseIngredient("#forge:gears/diamond"),
            input: IEChanceOrCountIngredient("#forge:gems/diamond", 4),
            mold: "immersiveengineering:mold_gear"
        },
        //Diamond Rod
        {
            id: "rod_diamond",
            output: IEChanceOrCountIngredient("#forge:rods/diamond", 2),
            input: parseIngredient("#forge:gems/diamond"),
            mold: "immersiveengineering:mold_rod"
        },
        //Compressed Steel Gear
        {
            id: "gear_compressed_iron",
            output: parseIngredient("#forge:gears/compressed_iron"),
            input: IEChanceOrCountIngredient("#forge:ingots/compressed_iron", 4),
            mold: "immersiveengineering:mold_gear"
        },
        //Netherite Gear
        {
            id: "gear_netherite",
            output: parseIngredient("#forge:gears/netherite"),
            input: IEChanceOrCountIngredient("#forge:ingots/netherite", 4),
            mold: "immersiveengineering:mold_gear"
        },
        //Lapis Gear
        {
            id: "gear_lapis",
            output: parseIngredient("#forge:gears/lapis"),
            input: IEChanceOrCountIngredient("#forge:gems/lapis", 4),
            mold: "immersiveengineering:mold_gear"
        },
        //Emerald Gear
        {
            id: "gear_emerald",
            output: parseIngredient("#forge:gears/emerald"),
            input: IEChanceOrCountIngredient("#forge:gems/emerald", 4),
            mold: "immersiveengineering:mold_gear"
        },
        //Quartz Gear
        {
            id: "gear_quartz",
            output: parseIngredient("#forge:gears/quartz"),
            input: IEChanceOrCountIngredient("#forge:gems/quartz", 4),
            mold: "immersiveengineering:mold_gear"
        },
        //Spell Bullet
        {
            id: "spell_bullet",
            output: parseIngredient("psi:spell_bullet"),
            input: parseIngredient("create_things_and_misc:psi_quartz_sheet"),
            mold: "immersiveengineering:mold_bullet_casing"
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
                id: `plate_${ingot}`,
                output: parseIngredient(`#forge:plates/${ingot}`),
                input: parseIngredient(`#forge:ingots/${ingot}`),
                mold: "immersiveengineering:mold_plate"
            },
            //Special Ingots Gears
            {
                id: `gear_${ingot}`,
                output: parseIngredient(`#forge:gears/${ingot}`),
                input: IEChanceOrCountIngredient(`#forge:ingots/${ingot}`, 4),
                mold: "immersiveengineering:mold_gear"
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
                id: `rod_${mat}`,
                output: IEChanceOrCountIngredient(`#forge:rods/${mat}`, 2),
                input: parseIngredient(`#forge:ingots/${mat}`),
                mold: "immersiveengineering:mold_rod"
            }
        )
    })

   //General Metal Press Function
    recipes.forEach(recipe => {
        let json = {
            type: 'immersiveengineering:metal_press',
            input: recipe.input,
            result: recipe.output,
            mold: recipe.mold,
            energy: recipe.energy || 2400
        }
        event.custom(json).id(`immersiveengineering:metalpress/${recipe.id}`)
    })
})