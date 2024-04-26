//Code By SanoLink For TechEV - Discovery
//Last Modification : 1.2.0 

//Allows the player to summon a Lost Soul with a Soul of Forbidden And Arcanus

BlockEvents.rightClicked(event => {
    if (event.player.getHeldItem('main_hand') == 'forbidden_arcanus:soul') {
        let {x, y, z} = event.block.offset(event.facing, 1)
        if (!event.player.swinging) {
            event.player.swing()
            event.level.runCommandSilent(`summon forbidden_arcanus:lost_soul ${x} ${y} ${z}`)
            if (!event.player.isCreative()) {event.item.count--}
        }
    }
})


