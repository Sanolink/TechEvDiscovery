/* 
Code By SanoLink For TechEV - Discovery
Last Modification : 1.1.0 
*/

#Remove All Recipes
craftingTable.removeByRegex("recipestages:botanypots_botanypots/crafting/.*");

#Botany Pot
    mods.recipestages.Recipes.addShaped("two", "terracotta_botany_pot", <item:botanypots:terracotta_botany_pot>, [
    [<item:ars_nouveau:earth_essence>,<item:farmersdelight:rich_soil>,<item:ars_nouveau:earth_essence>],
    [<item:minecraft:terracotta>,<item:minecraft:flower_pot>,<item:minecraft:terracotta>],
    [<item:minecraft:terracotta>,<item:minecraft:terracotta>,<item:minecraft:terracotta>]]);
    mods.recipestages.Recipes.addShaped("two", "terracotta_hopper_botany_pot", <item:botanypots:terracotta_hopper_botany_pot>, [
    [<item:create:mechanical_drill>,<item:create_things_and_misc:vibration_mechanism>,<item:create:mechanical_saw>],
    [<item:create:mechanical_harvester>,<item:botanypots:terracotta_botany_pot>,<item:create:mechanical_plough>],
    [<item:create:cogwheel>,<item:minecraft:hopper>,<item:create:cogwheel>]]);

#Botany Pot Variants
for dye in I.dyes {
var botanyBlocks = [
    dye + "_terracotta",
    dye + "_glazed_terracotta",
    dye + "_concrete"];
for block in botanyBlocks {
    mods.recipestages.Recipes.addShaped("two", block + "_botany_pot", <item:botanypots:${block}_botany_pot>, [
    [<item:ars_nouveau:earth_essence>,<item:farmersdelight:rich_soil>,<item:ars_nouveau:earth_essence>],
    [<item:minecraft:${block}>,<item:minecraft:flower_pot>,<item:minecraft:${block}>],
    [<item:minecraft:${block}>,<item:minecraft:${block}>,<item:minecraft:${block}>]]);
    mods.recipestages.Recipes.addShaped("two", block + "_hopper_botany_pot", <item:botanypots:${block}_hopper_botany_pot>, [
    [<item:create:mechanical_drill>,<item:create_things_and_misc:vibration_mechanism>,<item:create:mechanical_saw>],
    [<item:create:mechanical_harvester>,<item:botanypots:${block}_botany_pot>,<item:create:mechanical_plough>],
    [<item:create:cogwheel>,<item:minecraft:hopper>,<item:create:cogwheel>]]);
}}

