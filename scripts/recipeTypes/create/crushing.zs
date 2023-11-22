/* 
Code By SanoLink For TechEV - Discovery
Last Modification : 1.1.0 
*/

#Tuff crushed for minerals.
<recipetype:create:crushing>.removeByName("create:crushing/tuff");
<recipetype:create:crushing>.removeByName("create:crushing/tuff_recycling");
<recipetype:create:crushing>.addJsonRecipe("ct_crushing_tuff", {
  "ingredients": [
    {
      "item": "minecraft:tuff"
    }
  ],
  "processingTime": 400,
  "results": [
    {
      "chance": 0.25,
      "item": "minecraft:flint"
    },
    {
      "chance": 0.1,
      "item": "minecraft:gold_nugget"
    },
    {
      "chance": 0.1,
      "item": "create:copper_nugget"
    },
    {
      "chance": 0.1,
      "item": "create:zinc_nugget"
    },
    {
      "chance": 0.1,
      "item": "minecraft:iron_nugget"
    },
    {
      "chance": 0.0225,
      "item": "diamond_nuggets:diamond_nugget"
    },
  ]
});

#Polished Blackstone crushed for Netherite.
<recipetype:create:crushing>.addJsonRecipe("ct_crushing_polished_blackstone", {
  "ingredients": [
    {
      "item": "minecraft:polished_blackstone"
    }
  ],
  "processingTime": 400,
  "results": [
    {
      "chance": 0.10,
      "item": "create:cinder_flour"
    },
    {
      "chance": 0.05,
      "item": "minecraft:quartz"
    },
    {
      "chance": 0.02,
      "item": "minecraft:gold_nugget"
    },
    {
      "chance": 0.01,
      "item": "createdeco:netherite_nugget"
    },
  ]
});