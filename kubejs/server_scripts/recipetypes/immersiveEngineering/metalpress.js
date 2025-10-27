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
    let recipes = [
        //Experience Plate
        {
            id: "plate_experience",
            output: parseIngredient("create_things_and_misc:experience_sheet"),
            input: parseIngredient("create:experience_nugget"),
            mold: "immersiveengineering:mold_plate"
        },
        //Experience Gear
        {
            id: "gear_experience",
            output: parseIngredient("create_things_and_misc:experience_gear"),
            input: IEChanceOrCountIngredient("create:experience_nugget", 4),
            mold: "immersiveengineering:mold_gear"
        },
        //Experience Rod
        {
            id: "rod_experience",
            output: IEChanceOrCountIngredient("create_things_and_misc:experience_rod", 2),
            input: parseIngredient("create:experience_nugget"),
            mold: "immersiveengineering:mold_rod"
        },
        //Carbon Plate
        {
            id: "plate_carbon",
            output: parseIngredient("ftbic:carbon_plate"),
            input: parseIngredient("ftbic:carbon_fiber_mesh"),
            mold: "immersiveengineering:mold_plate"
        },
        //Carbon Gear
        {
            id: "gear_carbon",
            output: parseIngredient("ftbic:carbon_gear"),
            input: IEChanceOrCountIngredient("ftbic:carbon_fiber_mesh", 4),
            mold: "immersiveengineering:mold_gear"
        },
        //Carbon Rod
        {
            id: "rod_carbon",
            output: IEChanceOrCountIngredient("ftbic:carbon_rod", 2),
            input: parseIngredient("ftbic:carbon_fiber_mesh"),
            mold: "immersiveengineering:mold_rod"
        },
        //Diamond Plate
        {
            id: "plate_diamond",
            output: parseIngredient("#forge:plates/diamond"),
            input: parseIngredient("#forge:gems/diamond"),
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
        //Desh Gear
        {
            id: "gear_desh",
            output: parseIngredient("#forge:gears/desh"),
            input: IEChanceOrCountIngredient("#forge:ingots/desh", 4),
            mold: "immersiveengineering:mold_gear"
        },
        //Ostrum Gear
        {
            id: "gear_ostrum",
            output: parseIngredient("#forge:gears/ostrum"),
            input: IEChanceOrCountIngredient("#forge:ingots/ostrum", 4),
            mold: "immersiveengineering:mold_gear"
        },
        //Calorite Gear
        {
            id: "gear_calorite",
            output: parseIngredient("#forge:gears/calorite"),
            input: IEChanceOrCountIngredient("#forge:ingots/calorite", 4),
            mold: "immersiveengineering:mold_gear"
        },
        //Spell Bullet
        {
            id: "spell_bullet",
            output: parseIngredient("psi:spell_bullet"),
            input: parseIngredient("psi:psidust"),
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
        "elementium",
        "nephryx",
        "arcane_gold",
        "falsite",
        "ventium",
        "horizonite",
        "cast_iron",
        "iesnium",
        "cloggrum",
        "netherite",
        "froststeel",
        "overcharged_iron",
        "overcharged_gold",
        "compressed_iron"
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
        'signalum',
        'desh',
        'ostrum',
        'calorite',
        'nephryx',
        'falsite',
        'ventium',
        'horizonite',
        'elementium',
        'cast_iron',
        'arcane_gold',
        'iesnium',
        'cloggrum',
        'froststeel',
        'prismalium',
        'melodium',
        'stellarium',
        'netherite',
        'soul_infused',
        'shellite',
        'twinite',
        'dragonsteel',
        'overcharged_iron',
        'overcharged_gold',
        'compressed_iron'
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

    // Quartz -> Plates / Gears / Rods
    const QuartzToPlatesGearsRods = [
        'rose',
        'blue',
        'source',
        'psi',
        'antimatter'
    ].forEach((mat) => {
        recipes.push(
            {
                id: `plate_${mat}_quartz`,
                output: parseIngredient(`#forge:plates/${mat}_quartz`),
                input: parseIngredient(`#forge:polished_quartz/${mat}`),
                mold: "immersiveengineering:mold_plate"
            },
            {
                id: `gear_${mat}_quartz`,
                output: parseIngredient(`#forge:gears/${mat}_quartz`),
                input: IEChanceOrCountIngredient(`#forge:polished_quartz/${mat}`, 4),
                mold: "immersiveengineering:mold_gear"
            },
            {
                id: `rod_${mat}_quartz`,
                output: IEChanceOrCountIngredient(`#forge:rods/${mat}_quartz`, 2),
                input: parseIngredient(`#forge:polished_quartz/${mat}`),
                mold: "immersiveengineering:mold_rod"
            }
        )
    });

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