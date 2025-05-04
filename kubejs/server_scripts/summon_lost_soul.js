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
(_____)         Last Modification : 1.3.0         (_____)

*/

//Allows the player to summon a Lost Soul with a Soul of Forbidden And Arcanus

BlockEvents.rightClicked(event => {
    if (event.player.getHeldItem('main_hand') == 'forbidden_arcanus:soul' && event.block.entityId == "minecraft:air") {
        let {x, y, z} = event.block.offset(event.facing, 1)
        if (!event.player.swinging) {
            event.player.swing()
            event.level.runCommandSilent(`summon forbidden_arcanus:lost_soul ${x} ${y} ${z}`)
            if (!event.player.isCreative()) {event.item.count--}
        }
    }
})


