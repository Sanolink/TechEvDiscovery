//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {

    //Remove
    event.remove({ output: 'eidolon:pewter_blend', type: 'minecraft:crafting_shapeless' })
    //Recipes
    const recipes = [
      //Raw Andesite Alloy
        {
            id: "raw_andesite_alloy",
            steps: 
            [
                {
                  "items": [
                    {"item": "minecraft:andesite"},
                    {"item": "eidolon:pewter_nugget"},
                  ]
                },
                {
                  "items": [
                    {"item": "minecraft:andesite"},
                    {"item": "minecraft:andesite"},
                    {"item": "eidolon:pewter_nugget"},
                    {"item": "eidolon:pewter_nugget"}
                  ]
                },
                {
                  "items": [
                    {"item": "minecraft:andesite"},
                    {"item": "minecraft:andesite"},
                    {"item": "minecraft:andesite"},
                    {"item": "eidolon:pewter_nugget"},
                    {"item": "eidolon:pewter_nugget"},
                    {"item": "eidolon:pewter_nugget"}
                  ]
                },
                {
                  "stirs": 1,
                  "items": [{"tag": "eidolon:patron_symbol"}]
                },
            ],
            result: {"item": "create:raw_andesite_alloy", "count": 6}
        }
    ]

    recipes.forEach((recipe) => {
        event.custom({
          "type": "eidolon:crucible",
          "steps": recipe.steps,
          "result": recipe.result
        }).id("eidolon:crucible/" + recipe.id)
    })
})

