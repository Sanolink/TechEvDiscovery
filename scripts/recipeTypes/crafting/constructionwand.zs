/* 
Code By SanoLink For TechEV - Discovery
Last Modification : 1.1.0 
*/

#Stone Core

craftingTable.addShaped("core_stone", <item:kubejs:core_stone>, [
    [I.air,<item:minecraft:stone>,<item:minecraft:stone>],
    [<item:minecraft:stone>,<item:minecraft:cobblestone>,<item:minecraft:stone>],
    [<item:minecraft:stone>,<item:minecraft:stone>,I.air]]);

#Iron Core
craftingTable.addShaped("core_iron", <item:kubejs:core_iron>, [
    [I.air,<item:minecraft:iron_ingot>,<item:minecraft:iron_ingot>],
    [<item:minecraft:iron_ingot>,<item:minecraft:iron_nugget>,<item:minecraft:iron_ingot>],
    [<item:minecraft:iron_ingot>,<item:minecraft:iron_ingot>,I.air]]);

#Diamond Core
craftingTable.addShaped("core_diamond", <item:kubejs:core_diamond>, [
    [I.air,<item:minecraft:diamond>,<item:minecraft:diamond>],
    [<item:minecraft:diamond>,<item:diamond_nuggets:diamond_nugget>,<item:minecraft:diamond>],
    [<item:minecraft:diamond>,<item:minecraft:diamond>,I.air]]);

#Infinity Core
craftingTable.addShaped("core_infinity", <item:kubejs:core_infinity>, [
    [I.air,<item:byg:pendorite_ingot>,<item:apotheosis:infused_breath>],
    [<item:byg:pendorite_ingot>,<item:minecraft:nether_star>,<item:byg:pendorite_ingot>],
    [<item:apotheosis:infused_breath>,<item:byg:pendorite_ingot>,I.air]]);
