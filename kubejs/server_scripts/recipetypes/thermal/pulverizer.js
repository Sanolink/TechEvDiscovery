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
            id:  "coal_coke_to_dust",
            output: Ingredient.of("#forge:dusts/coal_coke"),
            inputs: Ingredient.of("#forge:coal_coke"),
            energy: 2000
        },
        {
            id:  "coke_block_to_dust",
            output: Item.of("immersiveengineering:dust_coke").withCount(9),
            inputs: Ingredient.of("#forge:storage_blocks/coal_coke"),
            energy: 2000
        },
        {
            id:  "petcoke_to_dust",
            output: Ingredient.of("#forge:dusts/coal_petcoke"),
            inputs: Ingredient.of("#forge:coal_petcoke"),
            energy: 2000
        },
        {
            id:  "petcoke_block_to_dust",
            output: Item.of("immersivepetroleum:petcoke_dust").withCount(9),
            inputs: Ingredient.of("#forge:storage_blocks/coal_petcoke"),
            energy: 2000
        },
        {
            id:  "obsidian_to_dust",
            output: [Ingredient.of("#forge:dusts/obsidian"), Item.of("minecraft:obsidian").withChance(0.75)],
            inputs: "minecraft:obsidian",
            energy: 2000
        },
        {
            id:  "sky_stone_to_dust",
            output: 'ae2:sky_dust',
            inputs: "ae2:sky_stone_block",
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
                id: mat + "_ingot_to_dust",
                output: Ingredient.of("#forge:dusts/" + mat),
                inputs: Ingredient.of("#forge:ingots/" + mat),
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
                id: "raw_" + mat.main ,
                output: [Item.of(mat.dust).withChance(1.25), Item.of(mat.secdust).withChance(0.05)],
                inputs: Ingredient.of("#forge:raw_materials/" + mat.main),
                energy: 2000
            }
        )
        if (mat.excludeore == true) {return}
        recipes.push(
            {
                id: mat.main + "_ore",
                output: [Item.of(mat.dust).withChance(2), Item.of(mat.secdust).withChance(0.1), Item.of("minecraft:gravel").withChance(0.2)],
                inputs: Ingredient.of("#forge:ores/" + mat.main),
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
                id: mat + "_plate_to_dust",
                output: Ingredient.of("#forge:dusts/" + mat),
                inputs: Ingredient.of("#forge:plates/" + mat),
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
                id: mat + "_gem_to_dust",
                output: Ingredient.of("#forge:dusts/" + mat),
                inputs: Ingredient.of("#forge:gems/" + mat),
                energy: 2000
            }
        )
    });

    //General Pulverizer Function
    recipes.forEach((recipe) => {
        event.recipes.thermal.pulverizer(recipe.output, recipe.inputs).energy(recipe.energy).id("thermal:machines/pulverizer/pulverizer_" + recipe.id);
        });
    })