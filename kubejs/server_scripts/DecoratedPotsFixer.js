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
(_____)         Last Modification : 1.3.8         (_____)

*/

// TO REMOVE When Cataclysm fixes the method of looting Decorated Pots
MoreJSEvents.structureLoad(event => {
    event.forEachPalettes(palette => {
        palette.removeIf(blockData => {
            if (blockData.id === "minecraft:decorated_pot") {
                return true;
            }
            return false;
        });
    });
});

BlockEvents.leftClicked('minecraft:decorated_pot', event => {
    event.player.tell(Text.red('This block currently has a bug, please do not use it!'))
    event.cancel()
    event.block.set('minecraft:air')
})

BlockEvents.rightClicked('minecraft:decorated_pot', event => {
    event.player.tell(Text.red('This block currently has a bug, please do not use it!'))
    event.cancel()
    event.block.set('minecraft:air')
})

BlockEvents.broken('minecraft:decorated_pot', event => {
    event.cancel()
    event.block.set('minecraft:air')
})
