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
        {
            id: "experience_to_plate",
            output: parseIngredient('create_things_and_misc:experience_sheet'),
            ingredients: parseIngredient('create:experience_nugget')
        },
        {
            id: "experience_to_gear",
            output: parseIngredient('create_things_and_misc:experience_gear'),
            ingredients: [ChanceOrCountItem('create:experience_nugget', 4), parseIngredient('thermal:press_gear_die')]
        },
        {
            id: `experience_to_rod`,
            output: ChanceOrCountItem('create_things_and_misc:experience_rod', 2),
            ingredients: [parseIngredient('create:experience_nugget'), parseIngredient('thermal:press_rod_die')]
        },
        {
            id: "carbon_to_plate",
            output: parseIngredient("ftbic:carbon_plate"),
            ingredients: parseIngredient("ftbic:carbon_fiber_mesh")
        },
        {
            id: "carbon_to_gear",
            output: parseIngredient("ftbic:carbon_gear"),
            ingredients: [ChanceOrCountItem("ftbic:carbon_fiber_mesh", 4), parseIngredient('thermal:press_gear_die')]
        },
        {
            id: `carbon_to_rod`,
            output: ChanceOrCountItem('ftbic:carbon_rod', 2),
            ingredients:[parseIngredient('ftbic:carbon_fiber_mesh'), parseIngredient('thermal:press_rod_die')]
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
        'nephryx',
        'iesnium'
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
        'elementium',
        'desh',
        'ostrum',
        'calorite',
        'nephryx',
        'refined_glowstone',
        'refined_obsidian',
        'the_ultimate',
        'crystaltine',
        'enhanced_ender_ingot',
        'ender_ingot',
        'enhanced_redstone_ingot',
        'redstone_ingot',
        'black_iron'
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
    
    const MysticalIngotsPackingUnpacking = [
        'soulium',
        'awakened_supremium',
        'supremium',
        'imperium',
        'tertium',
        'prudentium',
        'inferium',
        'prosperity',
        'insanium'
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
                output: parseIngredient(TagToItem(`#forge:storage_blocks/${mat}_ingot`)),
                ingredients: [ChanceOrCountTag(`#forge:ingots/${mat}`, 9), parseIngredient('thermal:press_packing_3x3_die')],
                energy: 400
            },
            {
                id: `${mat}_unpacking`,
                output: ChanceOrCountItem(TagToItem(`#forge:ingots/${mat}`), 9),
                ingredients: [parseIngredient(`#forge:storage_blocks/${mat}_ingot`), parseIngredient('thermal:press_unpacking_die')],
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
        "nephryx",
        "arcane_gold",
        "falsite",
        "ventium",
        "horizonite",
        "cast_iron",
        "iesnium",
        "cloggrum",
        "froststeel",
        "overcharged_iron",
        "overcharged_gold"
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
        "nephryx",
        "arcane_gold",
        "ventium",
        "falsite",
        "horizonite",
        "iesnium",
        "cloggrum",
        "froststeel",
        "compressed_iron",
        "overcharged_iron",
        "overcharged_gold"
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

    // Quartz -> Plates / Rods / Gears
    const QuartzToPlatesRodsGears = [
        'rose',
        'blue',
        'source',
        'psi',
        'antimatter'
    ].forEach((mat) => {
        recipes.push(
            {
                id: `${mat}_quartz_to_plate`,
                output: parseIngredient(TagToItem(`#forge:plates/${mat}_quartz`)),
                ingredients: parseIngredient(`#forge:polished_quartz/${mat}`)
            },
            {
                id: `${mat}_quartz_to_rod`,
                output: ChanceOrCountItem(TagToItem(`#forge:rods/${mat}_quartz`), 2),
                ingredients: [parseIngredient(`#forge:polished_quartz/${mat}`), parseIngredient('thermal:press_rod_die')]
            },
            {
                id: `${mat}_quartz_to_gear`,
                output: parseIngredient(TagToItem(`#forge:gears/${mat}_quartz`)),
                ingredients: [ChanceOrCountTag(`#forge:polished_quartz/${mat}`, 4), parseIngredient('thermal:press_gear_die')]
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