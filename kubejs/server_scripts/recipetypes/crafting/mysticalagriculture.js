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
    const recipes = []

    function GeneralEssenceRecipe(output, pattern, key) {
        let [modID, item] = output.split(":")
        let parsedModID = ""
        if (modID.includes(" ")) { parsedModID = modID.split(" ")[1] } else { parsedModID = modID }
        recipes.push(
            {
                id: `mysticalagriculture:essence/${parsedModID}/${item}`,
                output: output,
                pattern: pattern,
                key: key
            }
        )
    }

    GeneralEssenceRecipe("ae2:elemental_processor_press", ["EEE", "EME", "EEE"],
        {
            E: "mysticalagriculture:certus_quartz_essence",
            M: "botania:elementium_ingot"
        }
    )

    function basicEssence(essence, output) { GeneralEssenceRecipe(output, ["EEE", "E E", "EEE"], { E: essence }) }

    basicEssence('mysticalagriculture:alfsteel_essence', '8x mythicbotany:alfsteel_nugget')
    basicEssence('mysticalagriculture:calorite_essence', '8x ad_astra:calorite_ingot')
    basicEssence('mysticalagriculture:cinnabar_essence', '12x thermal:cinnabar')
    basicEssence('mysticalagriculture:desh_essence', '8x ad_astra:desh_ingot')
    basicEssence('mysticalagriculture:dragonsteel_fire_essence', '8x iceandfire:dragonsteel_fire_ingot')
    basicEssence('mysticalagriculture:dragonsteel_ice_essence', '8x iceandfire:dragonsteel_ice_ingot')
    basicEssence('mysticalagriculture:dragonsteel_lightning_essence', '8x iceandfire:dragonsteel_lightning_ingot')
    basicEssence('mysticalagriculture:iesnium_essence', '8x occultism:iesnium_ingot')
    basicEssence('mysticalagriculture:nephryx_essence', '8x ad_astra:nephryx_ingot')
    basicEssence('mysticalagriculture:echo_essence', '6x minecraft:echo_shard')
    basicEssence('mysticalagriculture:ostrum_essence', '8x ad_astra:ostrum_ingot')
    basicEssence('mysticalagriculture:peridot_essence', '6x alltheores:peridot')
    basicEssence('mysticalagriculture:plastic_essence', '6x pneumaticcraft:plastic')
    basicEssence('mysticalagriculture:soul_steel_essence', '8x spirit:soul_steel_ingot')
    basicEssence('mysticalagriculture:source_gem_essence', '6x ars_nouveau:source_gem')

    recipes.forEach(recipe => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id || recipe.output)
    })
})