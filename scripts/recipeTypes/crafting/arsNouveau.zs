/* 
Code By SanoLink For TechEV - Discovery
Last Modification : 1.1.0 
*/

#ignoreBracketErrors
import crafttweaker.api.item.IItemStack;

#Novice Spell Book
craftingTable.remove(<item:ars_nouveau:novice_spell_book>);
craftingTable.addShaped("novice_spell_book", <item:ars_nouveau:novice_spell_book>, [
    [<item:ars_nouveau:source_gem>,<item:minecraft:diamond_sword>,<item:ars_nouveau:source_gem>],
    [<item:minecraft:diamond_shovel>,<item:minecraft:book>,<item:minecraft:diamond_pickaxe>],
    [<item:ars_nouveau:source_gem>,<item:minecraft:diamond_axe>,<item:ars_nouveau:source_gem>]]);

#Apprentice Spell Book
craftingTable.remove(<item:ars_nouveau:apprentice_spell_book>);
craftingTable.addShaped("apprentice_spell_book", <item:ars_nouveau:apprentice_spell_book>, [
    [<item:ars_nouveau:fire_essence>,<item:ars_nouveau:bombegranate_pod>,<item:ars_nouveau:air_essence>],
    [<item:ars_nouveau:frostaya_pod>,<item:ars_nouveau:novice_spell_book>,<item:ars_nouveau:mendosteen_pod>],
    [<item:ars_nouveau:water_essence>,<item:ars_nouveau:bastion_pod>,<item:ars_nouveau:earth_essence>]]);
    
#Archmage Spell Book
craftingTable.remove(<item:ars_nouveau:archmage_spell_book>);
craftingTable.addShaped("archmage_spell_book", <item:ars_nouveau:archmage_spell_book>, [
    [<item:ars_nouveau:summon_focus>,<item:minecraft:nether_star>,<item:ars_nouveau:shapers_focus>],
    [<item:ars_nouveau:conjuration_essence>,<item:ars_nouveau:apprentice_spell_book>,<item:ars_nouveau:manipulation_essence>],
    [<item:ars_nouveau:void_jar>,<item:ars_nouveau:abjuration_essence>,<item:ars_nouveau:jar_of_light>]]);