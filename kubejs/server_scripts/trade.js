/* 
 _____                                             _____ 
( ___ ) © SanoLink 2024/2025. All rights reserved.( ___ )
 |   |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|   | 
 |   |  _____         _     _____        ______    |   | 
 |   | |_   _|__  ___| |__ | ____|_   __ \ \ \ \   |   | 
 |   |   | |/ _ \/ __| '_ \|  _| \ \ / /  \ \ \ \  |   | 
 |   |   | |  __/ (__| | | | |___ \ V /   / / / /  |   | 
 |   |  _|_|\___|\___|_| |_|_____| \_/   /_/_/_/   |   | 
 |   | |  _ \(_)___  ___ _____   _____ _ __ _   _  |   | 
 |   | | | | | / __|/ __/ _ \ \ / / _ \ '__| | | | |   | 
 |   | | |_| | \__ \ (_| (_) \ V /  __/ |  | |_| | |   | 
 |   | |____/|_|___/\___\___/ \_/ \___|_|   \__, | |   | 
 |   |                                      |___/  |   | 
 |___|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|___| 
(_____)         Last Modification : 1.4.0         (_____)

*/

MoreJSEvents.villagerTrades(event => {

    event.removeModdedTrades("immersiveengineering:electrician", 1)
    event.removeModdedTrades("immersiveengineering:machinist", 1)
    event.removeModdedTrades("pneumaticcraft:mechanic", 1)
    event.removeModdedTrades("ae2:fluix_researcher", 1)

})

MoreJSEvents.playerStartTrading(event => {
    event.forEachOffers((o, i) => {
        if (o.getFirstInput().getId() == "iceandfire:silver_ingot") {
            let count = o.getFirstInput().getCount()
            o.setFirstInput(Item.of("alltheores:silver_ingot", count))
        }
    })
})