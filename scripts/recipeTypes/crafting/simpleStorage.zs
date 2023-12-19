/* 
Code By SanoLink For TechEV - Discovery
Last Modification : 1.1.0 
*/

import crafttweaker.api.item.IItemStack;

#Inventory Remote
craftingTable.remove(<item:storagenetwork:inventory_remote>);
craftingTable.addShaped("ct_inventory_remote", <item:storagenetwork:inventory_remote>, [
    [<tag:items:forge:slimeballs>,<item:upgradednetherite_items:ender_upgraded_netherite_pearl>,<tag:items:forge:slimeballs>],
    [<tag:items:forge:ingots/gold>,<item:storagenetwork:master>,<tag:items:forge:ingots/gold>],
    [<tag:items:forge:slimeballs>,<item:minecraft:diamond>,<tag:items:forge:slimeballs>]]);

#Crafting Remote
craftingTable.remove(<item:storagenetwork:crafting_remote>);
craftingTable.addShaped("ct_crafting_remote", <item:storagenetwork:crafting_remote>, [
    [<item:minecraft:crafting_table>, <item:minecraft:ender_chest>, <item:minecraft:crafting_table>], 
    [<tag:items:forge:storage_blocks/gold>, <item:storagenetwork:inventory_remote>, <tag:items:forge:storage_blocks/gold>], 
    [<item:minecraft:crafting_table>, <item:minecraft:diamond_block>, <item:minecraft:crafting_table>]]);