/* 
Code By SanoLink For TechEV - Discovery
Last Modification : 1.1.0 
*/

import crafttweaker.api.tag.MCTag;

#Portal Activator : 
<tag:items:twilightforest:portal/activator>.remove(<item:minecraft:diamond>);
<tag:items:twilightforest:portal/activator>.add(<item:ars_nouveau:jar_of_light>);

#Portal Edges and Deco : 
<tag:blocks:twilightforest:portal/edge>.remove(<tag:blocks:twilightforest:portal/edge>);
<tag:blocks:twilightforest:portal/decoration>.remove(<tag:blocks:twilightforest:portal/decoration>);
<tag:blocks:twilightforest:portal/edge>.add(<block:farmersdelight:rich_soil>);
<tag:blocks:twilightforest:portal/decoration>.add(<tag:blocks:ars_nouveau:magic_plants>);