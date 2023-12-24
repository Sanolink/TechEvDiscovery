//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ServerEvents.tags('item', event => {
    //Zinc
    event.removeAll("forge:nuggets/zinc")
    event.add('forge:nuggets/zinc', 'create:zinc_nugget')
    //Copper
    event.removeAll('forge:nuggets/copper')
    event.add('forge:nuggets/copper', 'create:copper_nugget')
    //Silver
    event.removeAll('forge:nuggets/silver')
    event.add('forge:nuggets/silver', 'alltheores:silver_nugget')
    //Uranium
    event.removeAll('forge:nuggets/uranium')
    event.add('forge:nuggets/uranium', 'alltheores:uranium_nugget')
    //Lead
    event.removeAll('forge:nuggets/lead')
    event.add('forge:nuggets/lead', 'alltheores:lead_nugget')
    //Aluminum
    event.removeAll('forge:nuggets/aluminum')
    event.add('forge:nuggets/aluminum', 'alltheores:aluminum_nugget')
    //Nickel
    event.removeAll('forge:nuggets/nickel')
    event.add('forge:nuggets/nickel', 'alltheores:nickel_nugget')
})