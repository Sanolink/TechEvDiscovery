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
        {
            id: "overcharged_iron_to_plate",
            output: parseIngredient(TagToItem('create_new_age:overcharged_iron_sheet')),
            ingredients: parseIngredient('create_new_age:overcharged_iron')
        },
        {
            id: "overcharged_golden_to_plate",
            output: parseIngredient(TagToItem('create_new_age:overcharged_golden_sheet')),
            ingredients: parseIngredient('create_new_age:overcharged_gold')
        },
        {
            id: "experience_to_plate",
            output: parseIngredient(TagToItem('create_things_and_misc:experience_sheet')),
            ingredients: parseIngredient('create:experience_nugget')
        },
        {
            id: "rose_quartz_to_plate",
            output: parseIngredient(TagToItem('create_things_and_misc:rose_quartz_sheet')),
            ingredients: parseIngredient('create:polished_rose_quartz')
        },
        {
            id: "blue_quartz_to_plate",
            output: parseIngredient(TagToItem('create_things_and_misc:blue_quartz_sheet')),
            ingredients: parseIngredient('create:polished_blue_quartz')
        },
        {
            id: "source_quartz_to_plate",
            output: parseIngredient(TagToItem('create_things_and_misc:source_quartz_sheet')),
            ingredients: parseIngredient('create:polished_source_quartz')
        },
        {
            id: "psi_quartz_to_plate",
            output: parseIngredient(TagToItem('create_things_and_misc:psi_quartz_sheet')),
            ingredients: parseIngredient('create:polished_psi_quartz')
        },
        {
            id: "prismalium_nugget_packing",
            output: parseIngredient(TagToItem("#forge:ingots/prismalium")),
            ingredients: [ChanceOrCountTag("#forge:nuggets/prismalium", 9), parseIngredient('thermal:press_packing_3x3_die')],
            energy: 400
        },
        {
            id: "prismalium_nugget_unpacking",
            output: ChanceOrCountItem(TagToItem("#forge:nuggets/prismalium"), 9),
            ingredients: [parseIngredient("#forge:ingots/prismalium"), parseIngredient('thermal:press_unpacking_die')],
            energy: 400
        },
        {
            id: "melodium_nugget_packing",
            output: parseIngredient(TagToItem("#forge:ingots/melodium")),
            ingredients: [ChanceOrCountTag("#forge:nuggets/melodium", 9), parseIngredient('thermal:press_packing_3x3_die')],
            energy: 400
        },
        {
            id: "melodium_nugget_unpacking",
            output: ChanceOrCountItem(TagToItem("#forge:nuggets/melodium"), 9),
            ingredients: [parseIngredient("#forge:ingots/melodium"), parseIngredient('thermal:press_unpacking_die')],
            energy: 400
        },
        {
            id: "stellarium_nugget_packing",
            output: parseIngredient(TagToItem("#forge:ingots/stellarium")),
            ingredients: [ChanceOrCountTag("#forge:nuggets/stellarium", 9), parseIngredient('thermal:press_packing_3x3_die')],
            energy: 400
        },
        {
            id: "stellarium_nugget_unpacking",
            output: ChanceOrCountItem(TagToItem("#forge:nuggets/stellarium"), 9),
            ingredients: [parseIngredient("#forge:ingots/stellarium"), parseIngredient('thermal:press_unpacking_die')],
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
        'froststeel',
        'desh',
        'ostrum',
        'calorite',
        'nephryx'
    ].forEach((mat) => {
        recipes.push(
            {
                id: `raw_${mat}_packing`,
                output: parseIngredient(TagToItem(`#forge:storage_blocks/raw_${mat}`)),
                ingredients: [ChanceOrCountTag(`#forge:raw_materials/${mat}`, 9), parseIngredient('thermal:press_packing_3x3_die')],
                energy: 400
            },
            {
                id: `raw_${mat}_unpacking`,
                output: ChanceOrCountItem(TagToItem(`#forge:raw_materials/${mat}`), 9),
                ingredients: [parseIngredient(`#forge:storage_blocks/raw_${mat}`), parseIngredient('thermal:press_packing_3x3_die')],
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
                id: `${mat}_nugget_packing`,
                output: parseIngredient(TagToItem(`#forge:ingots/${mat}`)),
                ingredients: [ChanceOrCountTag(`#forge:nuggets/${mat}`, 9), parseIngredient('thermal:press_packing_3x3_die')],
                energy: 400
            },
            {
                id: `${mat}_packing`,
                output: parseIngredient(TagToItem(`#forge:storage_blocks/${mat}`)),
                ingredients: [ChanceOrCountTag(`#forge:ingots/${mat}`, 9), parseIngredient('thermal:press_packing_3x3_die')],
                energy: 400
            },
            {
                id: `${mat}_unpacking`,
                output: ChanceOrCountItem(TagToItem(`#forge:ingots/${mat}`), 9),
                ingredients: [parseIngredient(`#forge:storage_blocks/${mat}`), parseIngredient('thermal:press_unpacking_die')],
                energy: 400
            },
            {
                id: `${mat}_nugget_unpacking`,
                output: ChanceOrCountItem(TagToItem(`#forge:nuggets/${mat}`), 9),
                ingredients: [parseIngredient(`#forge:ingots/${mat}`), parseIngredient('thermal:press_unpacking_die')],
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
        "elementium",
        "desh",
        "ostrum",
        "calorite",
        "nephryx"
    ].forEach((ingot) => {
        recipes.push(
            {
                id: `${ingot}_ingot_to_gear`,
                output: parseIngredient(TagToItem(`#forge:gears/${ingot}`)),
                ingredients: [ChanceOrCountTag(`#forge:ingots/${ingot}`, 4), parseIngredient('thermal:press_gear_die')]
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
        "elementium",
        "cast_iron",
        "nephryx"
    ].forEach((ingot) => {
        recipes.push(
            {
                id: `${ingot}_ingot_to_plate`,
                output: parseIngredient(TagToItem(`#forge:plates/${ingot}`)),
                ingredients: parseIngredient(`#forge:ingots/${ingot}`)
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
        'brass',
        'desh',
        'ostrum',
        'calorite',
        'nephryx'
    ].forEach((mat) => {
        recipes.push(
            {
                id: `${mat}_ingot_to_rod`,
                output: ChanceOrCountItem(TagToItem(`#forge:rods/${mat}`), 2),
                ingredients: [parseIngredient(`#forge:ingots/${mat}`), parseIngredient('thermal:press_rod_die')]
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
                id: `${gem}_gem_to_gear`,
                output: parseIngredient(TagToItem(`#forge:gears/${gem}`)),
                ingredients: [ChanceOrCountTag(`#forge:gems/${gem}`, 4), parseIngredient('thermal:press_gear_die')]
            }
        )
    });

    // Gems -> Plates
    const GemsToPlates = [
        "diamond"
    ].forEach((gem) => {
        recipes.push(
            {
                id: `${gem}_gem_to_plate`,
                output: parseIngredient(TagToItem(`#forge:plates/${gem}`)),
                ingredients: parseIngredient(`#forge:gems/${gem}`)
            }
        )
    });

    // Gems -> Rods
    const GemsToRods = [
        'diamond'
    ].forEach((mat) => {
        recipes.push(
            {
                id: `${mat}_gem_to_rod`,
                output: ChanceOrCountItem(TagToItem(`#forge:rods/${mat}`), 2),
                ingredients: [parseIngredient(`#forge:gems/${mat}`), parseIngredient('thermal:press_rod_die')]
            }
        )
    });    
 
    //General Press Function
    recipes.forEach(recipe => {
        let json = {
            type: 'thermal:press',
            ingredients: recipe.ingredients,
            result: recipe.output,
            experience: recipe.experience || 0.0,
            energy: recipe.energy || 2400
        }
        event.custom(json).id(`thermal:machines/press/press_${recipe.id}`)
    })
})