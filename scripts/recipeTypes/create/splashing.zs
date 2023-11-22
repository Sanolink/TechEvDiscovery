/* 
Code By SanoLink For TechEV - Discovery
Last Modification : 1.1.0 
*/

import mods.create.SplashingManager;
import crafttweaker.api.item.IItemStack;

#Crushed Raw Items into Nuggets
<recipetype:create:splashing>.removeByRegex("create:splashing/.*crushed_raw_.*");

for id, matList in I.materials {
    for mat in matList {
<recipetype:create:splashing>.addRecipe("splashing/crushed_raw_" + mat, [<item:${id}${mat}_nugget>*9,(<item:${id}${mat}_nugget>*5) % 75], <item:create:crushed_raw_${mat}>, 100);
}}
