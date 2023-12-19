/* 
Code By SanoLink For TechEV - Discovery
Last Modification : 1.1.0 
*/

#Experience Bottle
craftingTable.addShaped("expbottle", <item:minecraft:experience_bottle>, [
    [I.air,<item:create:experience_nugget>,I.air],
    [<item:create:experience_nugget>,<item:minecraft:glass_bottle>,<item:create:experience_nugget>],
    [I.air,<item:create:experience_nugget>,I.air]]);

#Golden Apple
craftingTable.remove(<item:minecraft:enchanted_golden_apple>);
craftingTable.addShaped("enchanted_golden_apple", <item:minecraft:enchanted_golden_apple>, [
    [<item:minecraft:experience_bottle>,<item:minecraft:gold_block>,<item:minecraft:experience_bottle>],
    [<item:minecraft:gold_block>,<item:minecraft:golden_apple>,<item:minecraft:gold_block>],
    [<item:minecraft:experience_bottle>,<item:minecraft:gold_block>,<item:minecraft:experience_bottle>]]);





