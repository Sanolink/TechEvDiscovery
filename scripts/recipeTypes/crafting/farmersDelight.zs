/* 
Code By SanoLink For TechEV - Discovery
Last Modification : 1.1.0 
*/

#Iron Knife 
craftingTable.remove(<item:farmersdelight:iron_knife>);
mods.recipestages.Recipes.addShaped("one", "ironknife", <item:farmersdelight:iron_knife>, [
    [<item:minecraft:iron_ingot>],
    [<item:farmersdelight:flint_knife>]]);

#Golden Knife
craftingTable.remove(<item:farmersdelight:golden_knife>);
mods.recipestages.Recipes.addShaped("one", "goldenknife", <item:farmersdelight:golden_knife>, [
    [<item:minecraft:gold_ingot>],
    [<item:farmersdelight:iron_knife>]]);

#Diamond Knife
craftingTable.remove(<item:farmersdelight:diamond_knife>);
mods.recipestages.Recipes.addShaped("one", "diamondknife", <item:farmersdelight:diamond_knife>, [
    [<item:minecraft:diamond>],
    [<item:farmersdelight:golden_knife>]]);