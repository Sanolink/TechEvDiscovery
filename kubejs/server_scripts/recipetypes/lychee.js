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
(_____)         Last Modification : 1.3.0         (_____)

*/

ServerEvents.recipes(event => {

    //Recipes
    event.custom({
        //Exploding Pewter Blend
        "type": "lychee:item_exploding",
        "item_in": [
            {"item": "minecraft:iron_ingot"},
            {"item": "alltheores:lead_ingot"}
        ],
        "post": {
                "type": "drop_item",
                "item": "eidolon:pewter_blend"
            }
    }).id("lychee:item_exploding/pewter_blend")

    event.custom({
        //Exploding Pewter Blend
        "type": "lychee:item_exploding",
        "item_in": {"item": "minecraft:netherrack"},
        "post": {
                "type": "drop_item",
                "item": "create:cinder_flour",
                "contextual": {
                    "type": "chance",
                    "chance": 0.2
                }
            }
    }).id("lychee:item_exploding/cinder_flour")

    event.custom({

        "type": "lychee:lightning_channeling",
        "item_in": [
            {"item": "pneumaticcraft:ingot_iron_compressed"},
            {"item": "alltheores:electrum_ingot"}
        ],
        "post": {
                "type": "drop_item",
                "item": "powah:steel_energized"
            }
    }).id("lychee:lightning_channeling/steel_energized")
})

