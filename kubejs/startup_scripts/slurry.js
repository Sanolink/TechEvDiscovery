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
(_____)         Last Modification : 1.4.11        (_____)

*/

const $Slurry = Java.loadClass('mekanism.api.chemical.slurry.Slurry')
const $SlurryBuilder = Java.loadClass('mekanism.api.chemical.slurry.SlurryBuilder')

StartupEvents.registry('mekanism:slurry', event => {

    function slurry(ore, color) {
        event.createCustom(`mekanism:clean_${ore}`, () => new $Slurry($SlurryBuilder.clean().ore(`forge:ores/${ore}`).color(color))).displayName(`Clean ${ore.charAt(0).toUpperCase() + ore.slice(1)} Slurry`)
        event.createCustom(`mekanism:dirty_${ore}`, () => new $Slurry($SlurryBuilder.dirty().ore(`forge:ores/${ore}`).color(color))).displayName(`Dirty ${ore.charAt(0).toUpperCase() + ore.slice(1)} Slurry`)
    }

    slurry('desh', 0xC57041)
    slurry('ostrum', 0x6C4C5C)
    slurry('calorite', 0x8B1C3C)
    slurry('nephryx', 0x2A4532)
    slurry('iridium', 0x87ABCD)
    slurry('iesnium', 0x345F7C)
    slurry('elementium', 0xC543A8)
    slurry('cloggrum', 0x645144)
    slurry('froststeel', 0x4F5781)
    slurry('falsite', 0x7649E0)
    slurry('ventium', 0xB72020)
    slurry('horizonite', 0xFF6E29)

})