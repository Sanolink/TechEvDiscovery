//priority: 12000
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
(_____)         Last Modification : 1.3.7         (_____)

*/

/***************** JSON RECIPES HELPER *****************/

//Parse
function parseIngredient(str) {
    if (str.startsWith("#")) {
        return { tag: str.slice(1) }
    } else {
        return { item: str }
    }
}

function parseChanceOrCountIngredient(str, ChanceOrCount) {
    if (str.startsWith("#")) {
        return ChanceOrCountTag(str, ChanceOrCount)
    } else {
        return ChanceOrCountItem(str, ChanceOrCount)
    }
}

function parseChanceAndCountIngredient(str, chance, count) {
    if (str.startsWith("#")) {
        return ChanceAndCountTag(str, chance, count)
    } else {
        return ChanceAndCountItem(str, chance, count)
    }
}

//Chance Or Count
function ChanceOrCountItem(item, ChanceOrCount) {
    if (ChanceOrCount < 1) {
        return { item: item, chance: ChanceOrCount}
    } else {
        return { item: item, count: ChanceOrCount}
    }
}

function ChanceOrCountTag(tag, ChanceOrCount) {
    if (ChanceOrCount < 1) {
        return { tag: tag.slice(1), chance: ChanceOrCount}
    } else {
        return { tag: tag.slice(1), count: ChanceOrCount}
    }
}

function IEChanceOrCountIngredient(str, ChanceOrCount) {
    if (ChanceOrCount < 1) {
        return { output: parseIngredient(str), chance: ChanceOrCount}
    } else {
        return { base_ingredient: parseIngredient(str), count: ChanceOrCount}
    }
}

function ThermalChanceItem(item, chance) {
    return { item: item, chance: chance}
}

//Chance And Count
function ChanceAndCountItem(item, chance, count) {
    return { item: item, chance: chance, count: count}
}

function ChanceAndCountTag(tag, chance, count) {
    return { tag: tag.slice(1), chance: chance, count: count}
}

function IEChanceAndCountIngredient(str, chance, count) {
    return { output: parseChanceOrCountIngredient(str, count), chance: chance}
}

//Fluid With Count
function FluidWithCount(fluid, count) {
    return { amount: count, fluid: fluid}
}

function IndustrialFluidWithCount(fluid, count) {
    return `{Amount:${count},FluidName:\"${fluid}\"}`
}

//NBT Items
function NBTItem(item, nbt) {
    return { item: item, nbt: nbt}
}

//Get Item With Tag
function TagToItem(tag) {
    return Item.of(tag).getId()
}