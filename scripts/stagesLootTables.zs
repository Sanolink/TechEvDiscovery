/* 
Code By SanoLink For TechEV - Discovery
Last Modification : 1.1.0 
*/

import mods.lootstages.LootStages;
import crafttweaker.api.resource.ResourceLocation;

#Aquaculture --------------------------------------------------

#Restrict Aquaculture Entities Drops and FISHING to Age Two
var fishlist = [
    "tuna", 
    "tambaqui", 
    "synodontis",
    "starshell_turtle", 
    "smallmouth_bass",
    "red_shrooma",
    "red_grouper",
    "rainbow_trout",
    "pollock",
    "piranha",
    "pink_salmon",
    "perch",
    "pacific_halibut",
    "muskellunge",
    "minnow",
    "jellyfish",
    "gar",
    "catfish",
    "carp",
    "capitaine",
    "brown_trout",
    "brown_shrooma",
    "box_turtle",
    "boulti",
    "bluegill",
    "blackfish",
    "bayad",
    "atlantic_herring",
    "atlantic_halibut",
    "atlantic_cod",
    "arrau_turtle",
    "arapaima"
];
for fish in fishlist {
LootStages.addEntityTableStage("two", <resource:aquaculture:entities/${fish}>, <item:aquaculture:${fish}>);
}
LootStages.addFishingTableStages("two", <resource:minecraft:gameplay/fishing>);

