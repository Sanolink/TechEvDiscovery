/* 
Code By SanoLink For TechEV - Discovery
Last Modification : 1.1.0 
*/

#ignoreBracketErrors
import mods.create.SequencedAssemblyManager;
import crafttweaker.api.item.IItemStack;

#Engineer's Hammer
craftingTable.remove(<item:immersiveengineering:hammer>);
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_immersive_hammer")
 .transitionTo(<item:kubejs:incomplete_hammer>)
 .require(<tag:items:forge:rods/wooden>)
 .loops(2)
 .addOutput(<item:immersiveengineering:hammer>, 100)
 .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<tag:items:forge:plates/iron>))
 .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:create_things_and_misc:slime> * 100))
 .addStep<mods.createtweaker.PressingRecipe>((rb1) => rb1.duration(500))
 .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:createdeco:cast_iron_sheet>))
 .addStep<mods.createtweaker.PressingRecipe>((rb1) => rb1.duration(500)));

#Engineer's Wire Cutters
craftingTable.remove(<item:immersiveengineering:wirecutter>);
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_immersive_wire_cutters")
 .transitionTo(<item:kubejs:incomplete_wirecutter>)
 .require(<tag:items:forge:rods/wooden>)
 .loops(1)
 .addOutput(<item:immersiveengineering:wirecutter>, 100)
 .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<tag:items:forge:rods/wooden>))
 .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:create_things_and_misc:slime> * 100))
 .addStep<mods.createtweaker.PressingRecipe>((rb1) => rb1.duration(500))
 .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:createdeco:cast_iron_sheet>))
 .addStep<mods.createtweaker.CuttingRecipe>((rb) => rb.duration(50)));

#Fishing Rod
craftingTable.remove(<item:minecraft:fishing_rod>);
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_fishing_rod")
 .transitionTo(<item:kubejs:fishing_rod_cast>)
 .require(<tag:items:forge:rods/wooden>)
 .loops(1)
 .addOutput(<item:minecraft:fishing_rod>, 100)
 .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:aquaculture:fishing_line>))
 .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:aquaculture:iron_hook>)));