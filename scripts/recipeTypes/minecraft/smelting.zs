/* 
Code By SanoLink For TechEV - Discovery
Last Modification : 1.1.0 
*/

#Duck Cooked Egg Unification 
<recipetype:minecraft:campfire_cooking>.removeByName("naturalist:cooked_egg_from_campfire_cooking");
<recipetype:minecraft:smoking>.removeByName("naturalist:cooked_egg_from_smoking");
<recipetype:minecraft:smelting>.removeByName("naturalist:cooked_egg");

#Remove Smelting Crushed Ores
<recipetype:minecraft:blasting>.removeByRegex("create:blasting/.*_ingot_from_crushed");
<recipetype:minecraft:smelting>.removeByRegex("create:smelting/.*_ingot_from_crushed");
<recipetype:minecraft:blasting>.removeByRegex("create:blasting/ingot.*compat.*");
<recipetype:minecraft:smelting>.removeByRegex("create:smelting/ingot.*compat.*");