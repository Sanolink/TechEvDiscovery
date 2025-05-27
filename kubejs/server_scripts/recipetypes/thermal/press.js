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
(_____)         Last Modification : 1.3.6         (_____)

*/

ServerEvents.recipes(event => {

    //Recipes
    let recipes = [
        {
            id: "overcharged_iron_to_plate",
            output: 'create_new_age:overcharged_iron_sheet',
            inputs: 'create_new_age:overcharged_iron',
            energy: 2400
        },
        {
            id: "overcharged_golden_to_plate",
            output: 'create_new_age:overcharged_golden_sheet',
            inputs: 'create_new_age:overcharged_gold',
            energy: 2400
        },
        {
            id: "experience_to_plate",
            output: 'create_things_and_misc:experience_sheet',
            inputs: 'create:experience_nugget',
            energy: 2400
        },
        {
            id: "rose_quartz_to_plate",
            output: 'create_things_and_misc:rose_quartz_sheet',
            inputs: 'create:polished_rose_quartz',
            energy: 2400
        },
        {
            id: "blue_quartz_to_plate",
            output: 'create_things_and_misc:blue_quartz_sheet',
            inputs: 'create:polished_blue_quartz',
            energy: 2400
        },
        {
            id: "source_quartz_to_plate",
            output: 'create_things_and_misc:source_quartz_sheet',
            inputs: 'create:polished_source_quartz',
            energy: 2400
        },
        {
            id: "psi_quartz_to_plate",
            output: 'create_things_and_misc:psi_quartz_sheet',
            inputs: 'create:polished_psi_quartz',
            energy: 2400
        },
        {
            id: "prismalium_nugget_packing",
            output: Ingredient.of("#forge:ingots/prismalium"),
            inputs: [Ingredient.of("#forge:nuggets/prismalium", 9), Ingredient.of('thermal:press_packing_3x3_die')],
            energy: 400
        },
        {
            id: "prismalium_nugget_unpacking",
            output: Item.of("#forge:nuggets/prismalium").withCount(9),
            inputs: [Ingredient.of("#forge:ingots/prismalium"), Ingredient.of('thermal:press_unpacking_die')],
            energy: 400
        },
        {
            id: "melodium_nugget_packing",
            output: Ingredient.of("#forge:ingots/melodium"),
            inputs: [Ingredient.of("#forge:nuggets/melodium", 9), Ingredient.of('thermal:press_packing_3x3_die')],
            energy: 400
        },
        {
            id: "melodium_nugget_unpacking",
            output: Item.of("#forge:nuggets/melodium").withCount(9),
            energy: 400
        },
        {
            id: "stellarium_nugget_packing",
            output: Ingredient.of("#forge:ingots/stellarium"),
            inputs: [Ingredient.of("#forge:nuggets/stellarium", 9), Ingredient.of('thermal:press_packing_3x3_die')],
            energy: 400
        },
        {
            id: "stellarium_nugget_unpacking",
            output: Item.of("#forge:nuggets/stellarium").withCount(9),
            inputs: [Ingredient.of("#forge:ingots/stellarium"), Ingredient.of('thermal:press_unpacking_die')],
            energy: 400
        }
    ]

    const RawPackingUnpacking = [
        'zinc',
        'aluminum',
        'osmium',
        'uranium',
        'platinum',
        'iridium',
        'aquite',
        'charoite',
        'falsite',
        'ventium',
        'horizonite',
        'elementium',
        'cloggrum',
        'froststeel'
    ].forEach((mat) => {
        recipes.push(
            {
                id: `raw_${mat}_packing`,
                output: Ingredient.of(`#forge:storage_blocks/raw_${mat}`),
                inputs: [Ingredient.of(`#forge:raw_materials/${mat}`, 9), Ingredient.of('thermal:press_packing_3x3_die')],
                energy: 400
            },
            {
                id: `raw_${mat}_unpacking`,
                output: Item.of(`#forge:raw_materials/${mat}`).withCount(9),
                inputs: [Ingredient.of(`#forge:storage_blocks/raw_${mat}`), Ingredient.of('thermal:press_packing_3x3_die')],
                energy: 400
            },
        )
    });

    const IngotsPackingUnpacking = [
        "aluminum",
        'osmium',
        'platinum',
        'uranium',
        'zinc',
        'iridium',
        'steel',
        'brass',
        'neptunium',
        'pewter',
        'cast_iron',
        'cloggrum',
        'froststeel',
        'forgotten_metal',
        'soul_infused',
        'shellite',
        'twinite',
        'dragonsteel',
        'arcane_gold',
        'falsite',
        'ventium',
        'horizonite',
        'deorum',
        'iesnium',
        'manasteel',
        'terrasteel',
        'elementium'
    ].forEach((mat) => {
        recipes.push(
            {
                id: mat + "_nugget_packing",
                output: Ingredient.of("#forge:ingots/" + mat),
                inputs: [Ingredient.of("#forge:nuggets/" + mat, 9), Ingredient.of('thermal:press_packing_3x3_die')],
                energy: 400
            },
            {
                id: mat + "_packing",
                output: Ingredient.of("#forge:storage_blocks/" + mat),
                inputs: [Ingredient.of("#forge:ingots/" + mat, 9), Ingredient.of('thermal:press_packing_3x3_die')],
                energy: 400
            },
            {
                id: mat + "_unpacking",
                output: Item.of("#forge:ingots/" + mat).withCount(9),
                inputs: [Ingredient.of("#forge:storage_blocks/" + mat), Ingredient.of('thermal:press_unpacking_die')],
                energy: 400
            },
            {
                id: mat + "_nugget_unpacking",
                output: Item.of("#forge:nuggets/" + mat).withCount(9),
                inputs: [Ingredient.of("#forge:ingots/" + mat), Ingredient.of('thermal:press_unpacking_die')],
                energy: 400
            }
        )
    });
    
    // Ingots -> Gears
    const IngotsToGears = [
        "compressed_iron",
        "brass",
        "steel",
        "zinc",
        "uranium",
        "platinum",
        "osmium",
        "iridium",
        "aluminum",
        "elementium"
    ].forEach((ingot) => {
        recipes.push(
            {
                id: ingot + "_ingot_to_gear",
                output: Ingredient.of("#forge:gears/" + ingot),
                inputs: [Ingredient.of("#forge:ingots/" + ingot, 4), Ingredient.of('thermal:press_gear_die')],
                energy: 2400
            }
        )
    });

    // Gems -> Plates
    const GemsToGears = [
        "quartz",
        "emerald",
        "lapis",
        "diamond"
    ].forEach((gem) => {
        recipes.push(
            {
                id: gem + "_gem_to_gear",
                output: Ingredient.of("#forge:gears/" + gem),
                inputs: [Ingredient.of("#forge:gems/" + gem, 4), Ingredient.of('thermal:press_gear_die')],
                energy: 2400
            }
        )
    });

    // Ingots -> Plates
    const IngotsToPlates = [
        "brass",
        "steel",
        "zinc",
        "uranium",
        "platinum",
        "osmium",
        "iridium",
        "aluminum",
        "elementium"
    ].forEach((ingot) => {
        recipes.push(
            {
                id: ingot + "_ingot_to_plate",
                output: Ingredient.of("#forge:plates/" + ingot),
                inputs: Ingredient.of("#forge:ingots/" + ingot),
                energy: 2400
            }
        )
    });

    // Ingots -> Rods
    const IngotsToRods = [
        'aluminum',
        'iridium',
        'lead',
        'nickel',
        'osmium',
        'platinum',
        'silver',
        'tin',
        'uranium',
        'zinc',
        'steel',
        'invar',
        'electrum',
        'bronze',
        'iron',
        'gold',
        'copper',
        'enderium',
        'lumium',
        'signalum',
        'constantan',
        'brass'
    ].forEach((mat) => {
        recipes.push(
            {
                id: mat + "_ingot_to_rod",
                output: Item.of("#forge:rods/" + mat, 2),
                inputs: [Ingredient.of("#forge:ingots/" + mat), Ingredient.of('thermal:press_rod_die')],
                energy: 2400
            }
        )
    });

    // Gems -> Rods
    const GemsToRods = [
        'diamond'
    ].forEach((mat) => {
        recipes.push(
            {
                id: mat + "_gem_to_rod",
                output: Item.of("#forge:rods/" + mat, 2),
                inputs: [Ingredient.of("#forge:gems/" + mat), Ingredient.of('thermal:press_rod_die')],
                energy: 2400
            }
        )
    });    

    // Gems -> Plates
    const GemsToPlates = [
        "diamond"
    ].forEach((gem) => {
        recipes.push(
            {
                id: gem + "_gem_to_plate",
                output: Ingredient.of("#forge:plates/" + gem),
                inputs: Ingredient.of("#forge:gems/" + gem),
                energy: 2400
            }
        )
    });
 
    //General Press Function
    recipes.forEach((recipe) => {
    event.recipes.thermal.press(recipe.output, recipe.inputs).energy(recipe.energy).id("thermal:machines/press/press_" + recipe.id);
    });
})