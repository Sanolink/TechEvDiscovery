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
(_____)         Last Modification : 1.4.2         (_____)

*/

ServerEvents.recipes(event => {


    excavator("amethyst_crevasse", Item.of('minecraft:amethyst_block', 40), Item.of('minecraft:calcite', 30), Item.of('minecraft:smooth_basalt', 30), Item.of('minecraft:cobblestone', 50), Item.of('minecraft:cobbled_deepslate', 30), Item.of('minecraft:gravel', 20))
    excavator("ancient_seabed", Item.of('minecraft:calcite', 65), Item.of('minecraft:dripstone_block', 30), Item.of('minecraft:bone_block', 5), Item.of('minecraft:sandstone', 60), Item.of('minecraft:gravel', 30), Item.of('minecraft:sand', 10))
    excavator("auricargentum", Item.of('techev_additions:raw_auricargentum', 90), Item.of('techev_additions:raw_auricargentum_block', 10), Item.of('minecraft:cobblestone', 65), Item.of('minecraft:gravel', 35))
    excavator("cuperzinate", Item.of('techev_additions:raw_cuperzinate', 90), Item.of('techev_additions:raw_cuperzinate_block', 10), Item.of('minecraft:cobblestone', 65), Item.of('minecraft:gravel', 35))
    excavator("hardened_clay_pan", Item.of('minecraft:terracotta', 60), Item.of('minecraft:red_sandstone', 30), Item.of('minecraft:red_sand', 10), Item.of('minecraft:cobblestone', 50), Item.of('minecraft:gravel', 30), Item.of('minecraft:coarse_dirt', 20))
    excavator("leadosnite", Item.of('techev_additions:raw_leadosnite', 90), Item.of('techev_additions:raw_leadosnite_block', 10), Item.of('minecraft:cobblestone', 65), Item.of('minecraft:gravel', 35))
    excavator("uratinumal", Item.of('techev_additions:raw_uratinumal', 90), Item.of('techev_additions:raw_uratinumal_block', 10), Item.of('minecraft:cobblestone', 65), Item.of('minecraft:gravel', 35))

    // Create Addition Exception
    event.recipes.custommachinery
        .custom_machine("custommachinery:excavator_jei", 100)
        .requireItem(Item.of("immersiveengineering:coresample").withNBT("{display:{Name:'{\"text\":\"§lSphalerite§r Vein\"}'},mineralInfo:[{mineral:\"createaddition:compat/immersiveengineering/sphalerite\"}]}"), "sample")
        .produceItem(Item.of('alltheores:deepslate_zinc_ore', 60), "1")
        .produceItem(Item.of('thermal:sulfur_dust', 20), "2")
        .produceItem(Item.of('minecraft:deepslate_iron_ore', 20), "3")
        .produceItem(Item.of('minecraft:cobblestone', 50), "4")
        .produceItem(Item.of('minecraft:cobbled_deepslate', 30), "5")
        .produceItem(Item.of('minecraft:gravel', 20), "6")
        .id("custommachinery:excavator/sphalerite")

    //General Excavator Function
    function excavator(sample, o1, o2, o3, o4, o5, o6) {
        event.recipes.custommachinery
            .custom_machine("custommachinery:excavator_jei", 100)
            .requireItem(Item.of("immersiveengineering:coresample").withNBT("{display:{Name:'{\"text\":\"§l" + sample.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + "§r Vein\"}'},mineralInfo:[{mineral:\"immersiveengineering:mineral/" + sample + "\"}]}"), "sample")
            .produceItem(o1, "1")
            .produceItem(o2 || "minecraft:air", "2")
            .produceItem(o3 || "minecraft:air", "3")
            .produceItem(o4 || "minecraft:air", "4")
            .produceItem(o5 || "minecraft:air", "5")
            .produceItem(o6 || "minecraft:air", "6")
            .id("custommachinery:excavator/" + sample)
    }
})