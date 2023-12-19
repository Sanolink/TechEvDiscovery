/* 
Code By SanoLink For TechEV - Discovery
Last Modification : 1.1.0 
*/

#Backpack
craftingTable.remove(<item:sophisticatedbackpacks:backpack>);
craftingTable.addShaped("backpack", <item:sophisticatedbackpacks:backpack>, [
    [<item:minecraft:string>,<item:minecraft:shulker_shell>,<item:minecraft:string>],
    [<item:minecraft:string>,<tag:items:forge:chests>,<item:minecraft:string>],
    [<tag:items:forge:leather>,<item:minecraft:shulker_shell>,<tag:items:forge:leather>]]);

craftingTable.addShaped("backpack2", <item:sophisticatedbackpacks:backpack>, [
    [<item:minecraft:string>,I.air,<item:minecraft:string>],
    [<item:minecraft:string>,<tag:items:minecraft:shulker_boxes>,<item:minecraft:string>],
    [<tag:items:forge:leather>,I.air,<tag:items:forge:leather>]]);