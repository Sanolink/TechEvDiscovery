//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

JEIEvents.hideItems(event => {

    event.hide([
        '#alltheores:ore_hammers',
        /botanypots:.+_(terracotta|concrete)(_hopper)?_botany_pot/,
        'aquaculture:wooden_fillet_knife',
        'aquaculture:stone_fillet_knife',
        'aquaculture:iron_fillet_knife',
        'aquaculture:gold_fillet_knife',
        'aquaculture:diamond_fillet_knife'
    ])
    
})

JEIEvents.removeCategories(event => {

    event.remove([
        'twilightforest:uncrafting'
    ])
    
})
