/* 
Code By SanoLink For TechEV - Discovery
Last Modification : 1.1.0 
*/

#priority 10000
import mods.itemstages.ItemStages;

function Restriction(modid as string, stage as string) as void{
    var mstage = stage.toUpperCase();
    ItemStages.createModRestriction(modid, stage).hiddenName("§cUnlocked in Age §b§l[" + mstage + "]");
    mods.recipestages.Recipes.setRecipeStageByMod(stage, modid);
}

Restriction("custommachinery", "admin");

#Stage Zero : --------------------------------

Restriction("itemfilters", "zero");
Restriction("tombstone", "zero");
Restriction("alltheores", "zero");

#Stage One : --------------------------------

Restriction("quark", "one");
Restriction("byg", "one");
Restriction("biomesoplenty", "one");
Restriction("artifacts", "one");
Restriction("diamond_nuggets", "one");
Restriction("explorerscompass", "one");
Restriction("immersive_melodies", "one");
Restriction("naturescompass", "one");
Restriction("xercapaint", "one");
Restriction("immersive_paintings", "one");
Restriction("create", "one");
Restriction("waystones", "one");
Restriction("cfm", "one");
Restriction("farmersdelight", "one");
Restriction("naturalist", "one");
Restriction("minecraft", "one");
Restriction("comforts", "one");
Restriction("constructionwand", "one");
Restriction("toolbelt", "one");
Restriction("mcwbridges", "one");
Restriction("mcwdoors", "one");
Restriction("mcwfences", "one");
Restriction("mcwlights", "one");
Restriction("mcwroofs", "one");
Restriction("mcwtrpdoors", "one");
Restriction("mcwwindows", "one");
Restriction("apotheosis", "one");
Restriction("simplylight", "one");
Restriction("waystones", "one");

#Stage Two : --------------------------------
ItemStages.restrict(<item:minecraft:fishing_rod>, "two").preventInventory(false).preventPickup(false);
Restriction("twilightforest", "two");  // à faire 

Restriction("botanypots", "two");
Restriction("aquaculture", "two");

Restriction("ars_nouveau", "two");

Restriction("create_confectionery", "two");  // à faire 
Restriction("createaddition", "two");  // à faire
Restriction("createdeco", "two");  // à faire 
Restriction("createplus", "two");  // à faire 
Restriction("create_sa", "two");  // à faire 
Restriction("create_things_and_misc", "two");  // à faire 
Restriction("create_crystal_clear", "two");  // à faire 
Restriction("creategoggles", "two");  // à faire 
Restriction("create_enchantment_industry", "two");  // à faire 
Restriction("create_factory", "one");  // à faire 
Restriction("extendedflywheels", "two");  // à faire 

Restriction("immersiveengineering", "two");  // à faire 

Restriction("storagenetwork", "two");
Restriction("ironchest", "two");
Restriction("ironfurnaces", "two");
Restriction("sophisticatedbackpacks", "two");
Restriction("framedcompactdrawers", "two");
Restriction("storagedrawers", "two");

Restriction("itemcollectors", "two");
Restriction("mob_grinding_utils", "two");
Restriction("glassential", "two");
Restriction("upgradednetherite", "two");
Restriction("upgradednetherite_items", "two");
Restriction("trashcans", "two");
