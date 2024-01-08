//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0 

ServerEvents.recipes(event => {

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
})

