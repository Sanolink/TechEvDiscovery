/* 
Code By SanoLink For TechEV - Discovery
Last Modification : 1.1.0 
*/

#Remove All Recipes
craftingTable.removeByRegex("botanypots:botanypots/crafting/.*");

#Botany Pot
    craftingTable.addShaped("terracotta_botany_pot", <item:botanypots:terracotta_botany_pot>, [
    [<item:ars_nouveau:earth_essence>,<item:farmersdelight:rich_soil>,<item:ars_nouveau:earth_essence>],
    [<item:minecraft:terracotta>,<item:minecraft:flower_pot>,<item:minecraft:terracotta>],
    [<item:minecraft:terracotta>,<item:minecraft:terracotta>,<item:minecraft:terracotta>]]);
    craftingTable.addShaped("terracotta_hopper_botany_pot", <item:botanypots:terracotta_hopper_botany_pot>, [
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
    craftingTable.addShaped(block + "_botany_pot", <item:botanypots:${block}_botany_pot>, [
    [<item:ars_nouveau:earth_essence>,<item:farmersdelight:rich_soil>,<item:ars_nouveau:earth_essence>],
    [<item:minecraft:${block}>,<item:minecraft:flower_pot>,<item:minecraft:${block}>],
    [<item:minecraft:${block}>,<item:minecraft:${block}>,<item:minecraft:${block}>]]);
    craftingTable.addShaped(block + "_hopper_botany_pot", <item:botanypots:${block}_hopper_botany_pot>, [
    [<item:create:mechanical_drill>,<item:create_things_and_misc:vibration_mechanism>,<item:create:mechanical_saw>],
    [<item:create:mechanical_harvester>,<item:botanypots:${block}_botany_pot>,<item:create:mechanical_plough>],
    [<item:create:cogwheel>,<item:minecraft:hopper>,<item:create:cogwheel>]]);
}}

