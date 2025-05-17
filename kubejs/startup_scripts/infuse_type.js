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

StartupEvents.registry("mekanism:infuse_type", e => {

    e.create("mekaevolution:radiance").color(0xC6C846).texture('mekanism:infuse_types/base').displayName("Radiance")
    e.create("mekaevolution:thermonuclear").color(0xE54B4C).texture('mekanism:infuse_types/base').displayName("Thermonuclear")
    e.create("mekaevolution:shining").texture('mekaevolution:infuse_type/shining').displayName("Shining")
    e.create("mekaevolution:spectrum").texture('mekaevolution:infuse_type/spectrum').displayName("Spectrum")
})