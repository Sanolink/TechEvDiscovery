/* 
Code By SanoLink For TechEV - Discovery
Last Modification : 1.1.0 
*/
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.entity.attribute.AttributeOperation;
import crafttweaker.api.entity.equipment.EquipmentSlot;

#Aquaculture ---------------------------------- :

#Fishing Rods
<item:aquaculture:iron_fishing_rod>.maxDamage = 128; 
<item:aquaculture:gold_fishing_rod>.maxDamage = 256; 
<item:aquaculture:diamond_fishing_rod>.maxDamage = 512;
<item:aquaculture:neptunium_fishing_rod>.maxDamage = 1024;

#Farmer's Delight ----------------------------- :

#Knifes
<item:farmersdelight:flint_knife>.maxDamage = 125; 
<item:farmersdelight:iron_knife>.maxDamage = 250;
<item:farmersdelight:golden_knife>.maxDamage = 500; 
<item:farmersdelight:diamond_knife>.maxDamage = 1000; 
<item:farmersdelight:netherite_knife>.maxDamage = 2000; 
<item:aquaculture:neptunium_fillet_knife>.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_speed>, "Extra Speed", 0.4, <constant:minecraft:attribute/operation:addition>, [<constant:minecraft:equipmentslot:mainhand>]);
<item:aquaculture:neptunium_fillet_knife>.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "Extra Power", 3.25, <constant:minecraft:attribute/operation:addition>, [<constant:minecraft:equipmentslot:mainhand>]);

