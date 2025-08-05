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

const $InfuseType = Java.loadClass('mekanism.api.chemical.infuse.InfuseType')
const $InfuseTypeBuilder = Java.loadClass('mekanism.api.chemical.infuse.InfuseTypeBuilder')

StartupEvents.registry('mekanism:infuse_type', event => {
    event.createCustom('mekanism:ionium', () => new $InfuseType($InfuseTypeBuilder.builder().color(0xDAC5A8)))
    event.createCustom('mekanism:iridium', () => new $InfuseType($InfuseTypeBuilder.builder().color(0xF0FBFB)))
    event.createCustom('mekanism:lapis_lazuli', () => new $InfuseType($InfuseTypeBuilder.builder().color(0x1B37B8)))
    event.createCustom('mekanism:psimetal', () => new $InfuseType($InfuseTypeBuilder.builder().color(0x928BFC)))
    event.createCustom('mekanism:source', () => new $InfuseType($InfuseTypeBuilder.builder().color(0xDA97FC)))
    event.createCustom('mekaevolution:radiance', () => new $InfuseType($InfuseTypeBuilder.builder().color(0xC6C846)))
    event.createCustom('mekaevolution:thermonuclear', () => new $InfuseType($InfuseTypeBuilder.builder().color(0xE54B4C)))
    event.createCustom('mekaevolution:shining', () => new $InfuseType($InfuseTypeBuilder.builder('mekaevolution:infuse_type/shining')))
    event.createCustom('mekaevolution:spectrum', () => new $InfuseType($InfuseTypeBuilder.builder('mekaevolution:infuse_type/spectrum')))
})