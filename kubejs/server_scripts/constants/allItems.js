//priority: 11000
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
(_____)         Last Modification : 1.3.9         (_____)

*/

const allItems = Ingredient.all.getItemIds()

const plankExceptions = {
    'ars_nouveau:stripped_blue_archwood_log': 'ars_nouveau:archwood_planks',
    'ars_nouveau:stripped_blue_archwood_wood': 'ars_nouveau:archwood_planks',
    'ars_nouveau:stripped_red_archwood_log': 'ars_nouveau:archwood_planks',
    'ars_nouveau:stripped_red_archwood_wood': 'ars_nouveau:archwood_planks',
    'ars_nouveau:stripped_green_archwood_log': 'ars_nouveau:archwood_planks',
    'ars_nouveau:stripped_green_archwood_wood': 'ars_nouveau:archwood_planks',
    'ars_nouveau:stripped_purple_archwood_log': 'ars_nouveau:archwood_planks',
    'ars_nouveau:stripped_purple_archwood_wood': 'ars_nouveau:archwood_planks',
    'byg:stripped_palo_verde_log': 'minecraft:birch_planks',
    'byg:stripped_palo_verde_wood': 'minecraft:birch_planks'
}