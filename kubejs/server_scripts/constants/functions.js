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
(_____)         Last Modification : 1.4.8         (_____)

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

function BeeParseIngredient(str) {
    return {item: parseIngredient(str)}
}

//Chance Or Count
function ChanceOrCountItem(item, ChanceOrCount) {
    if (ChanceOrCount < 1) {
        return { item: item, chance: ChanceOrCount }
    } else {
        return { item: item, count: ChanceOrCount }
    }
}

function ChanceOrCountTag(tag, ChanceOrCount) {
    if (ChanceOrCount < 1) {
        return { tag: tag.slice(1), chance: ChanceOrCount }
    } else {
        return { tag: tag.slice(1), count: ChanceOrCount }
    }
}

function IEChanceOrCountIngredient(str, ChanceOrCount) {
    if (ChanceOrCount < 1) {
        return { output: parseIngredient(str), chance: ChanceOrCount }
    } else {
        return { base_ingredient: parseIngredient(str), count: ChanceOrCount }
    }
}

function ThermalChanceItem(item, chance, locked) {
    if (!locked) {
        return { item: item, chance: chance }
    } else {
        return { item: item, chance: chance, locked: true }
    }

}

function BeeChanceIngredient(ingredient, chance) {
    return { item: parseIngredient(ingredient), chance: chance }
}

function BotanyChanceIngredient(ingredient, chance) {
    return { output: parseIngredient(ingredient), chance: chance}
}

//Chance And Count
function ChanceAndCountItem(item, chance, count) {
    return { item: item, chance: chance, count: count }
}

function ChanceAndCountTag(tag, chance, count) {
    return { tag: tag.slice(1), chance: chance, count: count }
}

function IEChanceAndCountIngredient(str, chance, count) {
    return { output: parseChanceOrCountIngredient(str, count), chance: chance }
}

//Fluid With Count
function FluidWithCount(fluid, count) {
    return { amount: count, fluid: fluid }
}

function IndustrialFluidWithCount(fluid, count) {
    return `{Amount:${count},FluidName:\"${fluid}\"}`
}

function BeeFluidWithCount(fluid, count) {
    return {fluid: {fluid: fluid}, amount: count
    }
}

//NBT Items
function NBTItem(item, nbt) {
    return { type: "forge:nbt", item: item, nbt: nbt }
}

//Get Item With Tag
function TagToItem(tag) {
    return Item.of(tag).getId()
}

//Configurable Comb
function BeeConfigurableComb(type) {
    return NBTItem("productivebees:configurable_honeycomb", {"EntityTag": {"type": `productivebees:${type}`}})
}

//Mystical Soul
function MysticalSoul(type, count) {
    return { type: type, souls: count }
}

//Infuse Type
function MekaInfuseType(type, amount) {
    return { infuse_type: type, amount: amount }
}

//Gas
function MekaGas(type, amount) {
    return { gas: type, chemicalType: "gas", amount: amount }
}

//Pigment
function MekaPigment(type, amount) {
    return { pigment: type, chemicalType: "pigment", amount: amount }
}