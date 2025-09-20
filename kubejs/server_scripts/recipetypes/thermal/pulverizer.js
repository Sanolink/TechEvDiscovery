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
(_____)         Last Modification : 1.4.10        (_____)

*/

ServerEvents.recipes(event => {

    //Recipes
    let recipes = [
        {
            id:  "coal_coke_to_dust",
            output: parseIngredient(TagToItem("#forge:dusts/coal_coke")),
            ingredients: parseIngredient("#forge:coal_coke"),
            energy: 2000
        },
        {
            id:  "coke_block_to_dust",
            output: ChanceOrCountItem("immersiveengineering:dust_coke", 9),
            ingredients: parseIngredient("#forge:storage_blocks/coal_coke"),
            energy: 2000
        },
        {
            id:  "petcoke_to_dust",
            output: parseIngredient(TagToItem("#forge:dusts/coal_petcoke")),
            ingredients: parseIngredient("#forge:coal_petcoke"),
            energy: 2000
        },
        {
            id:  "petcoke_block_to_dust",
            output: ChanceOrCountItem("immersivepetroleum:petcoke_dust", 9),
            ingredients: parseIngredient("#forge:storage_blocks/coal_petcoke"),
            energy: 2000
        },
        {
            id:  "obsidian_to_dust",
            output: [parseIngredient(TagToItem("#forge:dusts/obsidian")), ThermalChanceItem("minecraft:obsidian", 0.75)],
            ingredients: parseIngredient("minecraft:obsidian"),
            energy: 2000
        },
        {
            id:  "sky_stone_to_dust",
            output: parseIngredient('ae2:sky_dust'),
            ingredients: parseIngredient("ae2:sky_stone_block"),
            energy: 2000
        }
    ]

    const IngotsToDusts = [
        "brass",
        "iridium",
        "uranium",
        "aluminum",
        "iesnium",
        "steel",
        'desh',
        'ostrum',
        'calorite',
        'nephryx',
        'arcane_gold'
    ].forEach((mat) => {
        recipes.push(
            {
                id: `${mat}_ingot_to_dust`,
                output: parseIngredient(TagToItem(`#forge:dusts/${mat}`)),
                ingredients: parseIngredient(`#forge:ingots/${mat}`),
                energy: 2000
            }
        )
    });

    const RawMat_OresToCrushed = [
        {main: "aluminum", crushed: 'create:crushed_raw_aluminum', secCrushed: 'create:crushed_raw_osmium'},
        {main: "osmium", crushed: 'create:crushed_raw_osmium', secCrushed: 'create:crushed_raw_aluminum'},
        {main: "uranium", crushed: 'create:crushed_raw_uranium', secCrushed: 'create:crushed_raw_lead'},
        {main: "iridium", crushed: 'create:crushed_raw_iridium', secCrushed: 'create:crushed_raw_uranium'},
        {main: "zinc", crushed: 'create:crushed_raw_zinc', secCrushed: 'create:crushed_raw_copper', excludeore: true},
        {main: "platinum", crushed: 'create:crushed_raw_platinum', secCrushed: 'create:crushed_raw_copper', excludeore: true},
        {main: "iesnium", crushed: 'occultism:iesnium_dust'},
        {main: "desh", crushed: 'create:crushed_raw_desh'},
        {main: "ostrum", crushed: 'create:crushed_raw_ostrum'},
        {main: "calorite", crushed: 'create:crushed_raw_calorite'},
        {main: "nephryx", crushed: 'create:crushed_raw_nephryx'}
    ].forEach((mat) => {
        recipes.push(
            {
                id: `raw_${mat.main}` ,
                output: [ThermalChanceItem(mat.crushed, 1, false), ThermalChanceItem(mat.secCrushed || "minecraft:air", 0.05)],
                ingredients: parseIngredient(`#forge:raw_materials/${mat.main}`),
                energy: 2000
            }
        )
        if (mat.excludeore == true) {return}
        recipes.push(
            {
                id: `${mat.main}_ore`,
                output: [ThermalChanceItem(mat.crushed, 2), ThermalChanceItem(mat.secCrushed || "minecraft:air", 0.1), ThermalChanceItem("minecraft:gravel", 0.2)],
                ingredients: parseIngredient(`#forge:ores/${mat.main}`),
                energy: 2000
            }
        )
    });

    const PlatesToDusts = [
        "aluminum",
        "osmium",
        "uranium",
        "zinc",
        "iridium",
        "diamond",
        "steel",
        "brass",
        "soul_infused",
        "shellite",
        "twinite",
        "dragonsteel",
        "prismalium",
        "melodium",
        "stellarium",
        'desh',
        'ostrum',
        'calorite',
        'nephryx',
        'arcane_gold'
    ].forEach((mat) => {
        recipes.push(
            {
                id: `${mat}_plate_to_dust`,
                output: parseIngredient(TagToItem(`#forge:dusts/${mat}`)),
                ingredients: parseIngredient(`#forge:plates/${mat}`),
                energy: 2000
            }
        )
    });

    const GemsToDusts = [
        "fluix",
        "certus_quartz",
        "sapphire",
        "peridot",
        "ruby"
    ].forEach((mat) => {
        recipes.push(
            {
                id: `${mat}_gem_to_dust`,
                output: parseIngredient(TagToItem(`#forge:dusts/${mat}`)),
                ingredients: parseIngredient(`#forge:gems/${mat}`),
                energy: 2000
            }
        )
    });

    //General Pulverizer Function
    recipes.forEach(recipe => {
        let json = {
            type: 'thermal:pulverizer',
            ingredient: recipe.ingredients,
            result: recipe.output,
            experience: recipe.experience || 0.0,
            energy: recipe.energy || 4000
        }
        event.custom(json).id(`thermal:machines/pulverizer/pulverizer_${recipe.id}`)
    })

    //Catalysts 
    let catalysts = [
        {
            item: 'thermal:blitz_powder',
            primary_mod: 1.25,
            secondary_mod: 3.0,
            energy_mod: 0.25,
            min_chance: 0.20,
            use_chance: 0.50
        },
        {
            item: 'thermal:blizz_powder',
            primary_mod: 1.25,
            secondary_mod: 3.0,
            energy_mod: 0.25,
            min_chance: 0.20,
            use_chance: 0.50
        },
        {
            item: 'thermal:trizz_powder',
            primary_mod: 3,
            secondary_mod: 5.0,
            energy_mod: 0.10,
            min_chance: 0.10,
            use_chance: 0.25
        }
    ]

    //General Pulverizer Catalyst Function
    catalysts.forEach(catalyst => {
        let json = {
            type: 'thermal:pulverizer_catalyst',
            ingredient: { item: catalyst.item },
            primary_mod: catalyst.primary_mod,
            secondary_mod: catalyst.secondary_mod,
            energy_mod: catalyst.energy_mod,
            min_chance: catalyst.min_chance,
            use_chance: catalyst.use_chance
        }
        event.custom(json).id(`thermal:machines/pulverizer/pulverizer_catalyst_${catalyst.item.split(":")[1]}`)
    })

})