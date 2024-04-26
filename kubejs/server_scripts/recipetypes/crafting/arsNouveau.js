//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.recipes(event => {
    
    //Replace 
    event.replaceInput({ id: 'ars_nouveau:arcane_core'}, 'ars_nouveau:source_gem', 'create:source_tube')
    event.replaceInput({ id: 'ars_nouveau:sourcestone'}, 'ars_nouveau:source_gem', 'create:polished_source_quartz')
    event.replaceInput({ id: 'ars_nouveau:jar_of_light'}, 'minecraft:glass_bottle', 'ars_nouveau:mob_jar')
    event.replaceInput({ id: 'ars_nouveau:void_jar'}, 'minecraft:glass_bottle', 'ars_nouveau:mob_jar')

    //Recipes
    const recipes = [
        //Novice Spell Book
        {
            output: "ars_nouveau:novice_spell_book",
            pattern: ["GSG", "HBP", "GAG"],
            key: {
                G: "create:polished_source_quartz",
                S: "minecraft:diamond_sword",
                H: "minecraft:diamond_shovel",
                B: "minecraft:book",
                P: "minecraft:diamond_pickaxe",
                A: "minecraft:diamond_axe"
            }
        },
        //Apprentice Spell Book
        {
            output: "ars_nouveau:apprentice_spell_book",
            pattern: ["FOA", "RBM", "WSE"],
            key: {
                F: "ars_nouveau:fire_essence",
                O: "ars_nouveau:bombegranate_pod",
                A: "ars_nouveau:air_essence",
                R: "ars_nouveau:frostaya_pod",
                B: "ars_nouveau:novice_spell_book",
                M: "ars_nouveau:mendosteen_pod",
                W: "ars_nouveau:water_essence",
                S: "ars_nouveau:bastion_pod",
                E: "ars_nouveau:earth_essence"
            }
        },
        //Archmage Spell Book
        {
            output: "ars_nouveau:archmage_spell_book",
            pattern: ["FSO", "CBM", "VAL"],
            key: {
                F: "ars_nouveau:summon_focus",
                S: "minecraft:nether_star",
                O: "ars_nouveau:shapers_focus",
                C: "ars_nouveau:conjuration_essence",
                B: "ars_nouveau:apprentice_spell_book",
                M: "ars_nouveau:manipulation_essence",
                V: "ars_nouveau:void_jar",
                A: "ars_nouveau:abjuration_essence",
                L: "ars_nouveau:jar_of_light",
            }
        }
    ]

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.output)
    })
})