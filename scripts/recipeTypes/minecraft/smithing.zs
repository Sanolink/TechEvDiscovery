/* 
Code By SanoLink For TechEV - Discovery
Last Modification : 1.1.0 
*/
import crafttweaker.api.recipe.SmithingRecipeManager;

#Neptunium Knife
craftingTable.remove(<item:aquaculture:neptunium_fillet_knife>);
smithing.addRecipe("smithing_neptunium_fillet_knife", <item:aquaculture:neptunium_fillet_knife>, <item:farmersdelight:netherite_knife>, <item:aquaculture:neptunium_ingot>);

#Stone Wand
craftingTable.remove(<item:constructionwand:stone_wand>);
smithing.addRecipe("smithing_stone_wand", <item:constructionwand:stone_wand>, <item:minecraft:stick>, <item:kubejs:core_stone>);

#Iron Wand
craftingTable.remove(<item:constructionwand:iron_wand>);
smithing.addRecipe("smithing_iron_wand", <item:constructionwand:iron_wand>, <item:constructionwand:stone_wand>, <item:kubejs:core_iron>);

#Diamond Wand
craftingTable.remove(<item:constructionwand:diamond_wand>);
smithing.addRecipe("smithing_diamond_wand", <item:constructionwand:diamond_wand>, <item:constructionwand:iron_wand>, <item:kubejs:core_diamond>);

#Infinity Wand
craftingTable.remove(<item:constructionwand:infinity_wand>);
smithing.addRecipe("smithing_infinity_wand", <item:constructionwand:infinity_wand>, <item:constructionwand:diamond_wand>, <item:kubejs:core_infinity>);
