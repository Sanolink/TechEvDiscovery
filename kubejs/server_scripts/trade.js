//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.2.0

MoreJSEvents.villagerTrades(event => {

    event.removeModdedTrades("immersiveengineering:electrician", 1)
    event.removeModdedTrades("immersiveengineering:machinist", 1)
    event.removeModdedTrades("pneumaticcraft:mechanic", 1)

})

MoreJSEvents.playerStartTrading(event => {
    event.forEachOffers((o, i) => {
        if (o.getFirstInput().getId() == "iceandfire:silver_ingot") {
            let count = o.getFirstInput().getCount()
            o.setFirstInput(Item.of("alltheores:silver_ingot", count))
        }
    })
})