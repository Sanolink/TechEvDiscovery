/* 
Code By SanoLink For TechEV - Discovery
Last Modification : 1.1.0 
*/
    
#AllIngot Plate / Gear / Rod
var allIngot = [
    "signalum",
    "lumium",
    "enderium",
    "iridium",
];

for ingot in allIngot {
<recipetype:immersiveengineering:metal_press>.addJsonRecipe("metalpress/plate_" + ingot, {
    "energy":2400,"input":{"tag":"forge:ingots/" + ingot},
    "mold":"immersiveengineering:mold_plate",
    "result":{"tag":"forge:plates/" + ingot}});
<recipetype:immersiveengineering:metal_press>.addJsonRecipe("metalpress/gear_" + ingot, {
    "energy":2400,"input":{"base_ingredient":{"tag":"forge:ingots/" + ingot},"count":4},
    "mold":"immersiveengineering:mold_gear",
    "result":{"tag":"forge:gears/" + ingot}});
<recipetype:immersiveengineering:metal_press>.addJsonRecipe("metalpress/rod_" + ingot, {
    "energy":2400,"input":{"tag":"forge:ingots/" + ingot},
    "mold":"immersiveengineering:mold_rod",
    "result":{"base_ingredient":{"tag":"forge:rods/" + ingot},"count":2}});
}

#Diamond Plate / Gear / Rod
<recipetype:immersiveengineering:metal_press>.addJsonRecipe("metalpress/plate_diamond", {
    "energy":2400,"input":{"tag":"forge:gems/diamond"},
    "mold":"immersiveengineering:mold_plate",
    "result":{"tag":"forge:plates/diamond"}});
<recipetype:immersiveengineering:metal_press>.addJsonRecipe("metalpress/gear_diamond", {
    "energy":2400,"input":{"base_ingredient":{"tag":"forge:gems/diamond"},"count":4},
    "mold":"immersiveengineering:mold_gear",
    "result":{"tag":"forge:gears/diamond"}});
<recipetype:immersiveengineering:metal_press>.addJsonRecipe("metalpress/rod_diamond", {
    "energy":2400,"input":{"tag":"forge:gems/diamond"},
    "mold":"immersiveengineering:mold_rod",
    "result":{"base_ingredient":{"tag":"forge:rods/diamond"},"count":2}});

#Cast Iron Plate
<recipetype:immersiveengineering:metal_press>.addJsonRecipe("metalpress/plate_cast_iron", {
    "energy":2400,"input":{"tag":"forge:ingots/cast_iron"},
    "mold":"immersiveengineering:mold_plate",
    "result":{"tag":"forge:plates/cast_iron"}});

#Netherite Plate
<recipetype:immersiveengineering:metal_press>.addJsonRecipe("metalpress/plate_netherite", {
    "energy":2400,"input":{"tag":"forge:ingots/netherite"},
    "mold":"immersiveengineering:mold_plate",
    "result":{"tag":"forge:plates/netherite"}});

