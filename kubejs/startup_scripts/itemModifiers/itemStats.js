//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.1.0

ItemEvents.modification(event => {

    const items = [
        {id: "aquaculture:iron_fishing_rod", maxDamage: 128},
        {id: "aquaculture:gold_fishing_rod", maxDamage: 256},
        {id: "aquaculture:diamond_fishing_rod", maxDamage: 512},
        {id: "aquaculture:neptunium_fishing_rod", maxDamage: 1024},
        //{id: "aquaculture:neptunium_fillet_knife", attackSpeed: 2.2, attackDamage: 6}, (Not working cause of a mixin)
        {id: "farmersdelight:flint_knife", maxDamage: 128},
        {id: "farmersdelight:iron_knife", maxDamage: 256},
        {id: "farmersdelight:golden_knife", maxDamage: 512, attackDamage: 3},
        {id: "farmersdelight:diamond_knife", maxDamage: 1024},
        {id: "farmersdelight:netherite_knife", maxDamage: 2048}
    ]
   
    
    items.forEach(initem => {
        event.modify(initem.id, item => {
            if (initem.maxDamage !== undefined) {item.maxDamage = initem.maxDamage}
            if (initem.attackSpeed !== undefined) {
                let attribute = item.getAttributes("minecraft:generic.attack_speed").get(0)
                item.removeAttribute("minecraft:generic.attack_speed", attribute.id) 
                item.addAttribute("minecraft:generic.attack_speed", attribute.id, attribute.name, initem.attackSpeed, attribute.operation)
                attribute = item.getAttributes("minecraft:generic.attack_speed").get(0)}
            if (initem.attackDamage !== undefined) {
                let attribute2 = item.getAttributes("minecraft:generic.attack_damage").get(0)
                item.removeAttribute("minecraft:generic.attack_damage", attribute2.id) 
                item.addAttribute("minecraft:generic.attack_damage", attribute2.id, attribute2.name, initem.attackDamage, attribute2.operation)
                attribute2 = item.getAttributes("minecraft:generic.attack_damage").get(0)}  
                          
        })
    })
})
