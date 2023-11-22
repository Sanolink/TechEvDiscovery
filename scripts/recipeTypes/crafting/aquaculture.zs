/* 
Code By SanoLink For TechEV - Discovery
Last Modification : 1.1.0 
*/

#Iron Fishing Rod
craftingTable.remove(<item:aquaculture:iron_fishing_rod>);
mods.recipestages.Recipes.addShaped("two", "iron_fishing_rod", <item:aquaculture:iron_fishing_rod>, [
    [I.air,I.air,<item:minecraft:iron_ingot>],
    [I.air,<item:minecraft:fishing_rod>,I.air],
    [<item:minecraft:iron_ingot>,I.air,I.air]]);

#Gold Fishing Rod
craftingTable.remove(<item:aquaculture:gold_fishing_rod>);
mods.recipestages.Recipes.addShaped("two", "gold_fishing_rod", <item:aquaculture:gold_fishing_rod>, [
    [I.air,I.air,<item:minecraft:gold_ingot>],
    [I.air,<item:aquaculture:iron_fishing_rod>,I.air],
    [<item:minecraft:gold_ingot>,I.air,I.air]]);

#Diamond Fishing Rod
craftingTable.remove(<item:aquaculture:diamond_fishing_rod>);
mods.recipestages.Recipes.addShaped("two", "diamond_fishing_rod", <item:aquaculture:diamond_fishing_rod>, [
    [I.air,I.air,<item:minecraft:diamond>],
    [I.air,<item:aquaculture:gold_fishing_rod>,I.air],
    [<item:minecraft:diamond>,I.air,I.air]]);

#Neptunium Fishing Rod
craftingTable.remove(<item:aquaculture:neptunium_fishing_rod>);
mods.recipestages.Recipes.addShaped("two", "neptunium_fishing_rod", <item:aquaculture:neptunium_fishing_rod>, [
    [I.air,I.air,<item:aquaculture:neptunium_ingot>],
    [I.air,<item:aquaculture:diamond_fishing_rod>,I.air],
    [<item:aquaculture:neptunium_ingot>,I.air,I.air]]);

