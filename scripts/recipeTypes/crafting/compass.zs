/* 
Code By SanoLink For TechEV - Discovery
Last Modification : 1.1.0 
*/

#ignoreBracketErrors
import crafttweaker.api.item.IItemStack;

#Nature's Compass
craftingTable.remove(<item:naturescompass:naturescompass>);
mods.recipestages.Recipes.addShaped("one", "naturescompass", <item:naturescompass:naturescompass>, [
    [<item:naturalist:glow_goop>,<tag:items:minecraft:saplings>,<item:naturalist:snail_shell>],
    [<tag:items:minecraft:saplings>,<item:minecraft:compass>,<tag:items:minecraft:saplings>],
    [<item:naturalist:antler>,<tag:items:minecraft:saplings>,<item:naturalist:chrysalis>]]);

#Explorer's Compass
craftingTable.remove(<item:explorerscompass:explorerscompass>);
mods.recipestages.Recipes.addShaped("one", "explorerscompass", <item:explorerscompass:explorerscompass>, [
    [<item:minecraft:cobweb>,<item:minecraft:wither_rose>,<item:minecraft:cobweb>],
    [<item:minecraft:cracked_stone_bricks>,<item:minecraft:recovery_compass>,<item:minecraft:cracked_stone_bricks>],
    [<item:minecraft:cobweb>,<item:minecraft:cracked_stone_bricks>,<item:minecraft:cobweb>]]);













