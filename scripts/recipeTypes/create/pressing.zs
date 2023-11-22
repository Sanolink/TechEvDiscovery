/* 
Code By SanoLink For TechEV - Discovery
Last Modification : 1.1.0 
*/

import mods.create.PressingManager;
import crafttweaker.api.item.IItemStack;

#Sheets 
<recipetype:create:pressing>.removeByRegex("minecraft:pressing/.*_sheet");
<recipetype:create:pressing>.removeByRegex("create:pressing/.*_ingot");
<recipetype:create:pressing>.addRecipe("pressing_plate_copper", [<item:create:copper_sheet> % 50], <tag:items:forge:ingots/copper>);
<recipetype:create:pressing>.addRecipe("pressing_plate_iron", [<item:create:iron_sheet> % 50], <tag:items:forge:ingots/iron>);
<recipetype:create:pressing>.addRecipe("pressing_plate_brass", [<item:create:brass_sheet> % 50], <tag:items:forge:ingots/brass>);
<recipetype:create:pressing>.addRecipe("pressing_plate_gold", [<item:create:golden_sheet> % 50], <tag:items:forge:ingots/gold>);
<recipetype:create:pressing>.addRecipe("pressing_plate_netherite", [<item:createdeco:netherite_sheet> % 50], <tag:items:forge:ingots/netherite>);
<recipetype:create:pressing>.addRecipe("pressing_plate_cast_iron", [<item:createdeco:cast_iron_sheet> % 50], <tag:items:forge:ingots/cast_iron>);

#Plates
<recipetype:create:pressing>.removeByRegex("createaddition:pressing/.*_ingot");
<recipetype:create:pressing>.addRecipe("pressing_plate_diamond", [<item:alltheores:diamond_plate> % 50], <tag:items:forge:gems/diamond>);

var ingotPlate = ["aluminum","iridium","lead","nickel","osmium","platinum","silver","tin","uranium","zinc","steel","invar","electrum","bronze","enderium","lumium","signalum","constantan"];
for ingot in ingotPlate {
    <recipetype:create:pressing>.addRecipe("pressing_plate_" + ingot, [<item:alltheores:${ingot}_plate> % 50], <tagmanager:items>.tag("forge:ingots/" + ingot));
}


