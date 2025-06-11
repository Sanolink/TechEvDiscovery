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
        "steel"
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

    const RawMat_OresToDusts = [
        {main: "aluminum", dust: 'alltheores:aluminum_dust', secdust: 'alltheores:osmium_dust'},
        {main: "osmium", dust: 'alltheores:osmium_dust', secdust: 'alltheores:aluminum_dust'},
        {main: "uranium", dust: 'alltheores:uranium_dust', secdust: 'alltheores:lead_dust'},
        {main: "iridium", dust: 'alltheores:iridium_dust', secdust: 'alltheores:uranium_dust'},
        {main: "zinc", dust: 'alltheores:zinc_dust', secdust: 'alltheores:copper_dust', excludeore: true},
        {main: "iesnium", dust: 'occultism:iesnium_dust'}
    ].forEach((mat) => {
        recipes.push(
            {
                id: `raw_${mat.main}` ,
                output: [ThermalChanceItem(mat.dust, 1.25), ThermalChanceItem(mat.secdust || "minecraft:air", 0.05)],
                ingredients: parseIngredient(`#forge:raw_materials/${mat.main}`),
                energy: 2000
            }
        )
        if (mat.excludeore == true) {return}
        recipes.push(
            {
                id: `${mat.main}_ore`,
                output: [ThermalChanceItem(mat.dust, 2), ThermalChanceItem(mat.secdust || "minecraft:air", 0.1), ThermalChanceItem("minecraft:gravel", 0.2)],
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
        "stellarium"
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
})