import crafttweaker.api.villagers.VillagerTrades;

var villagerProfession = <profession:morevillagers:netherian>;
var villagerLevelRequired = 5; // 1 - [Novice], 2 - [Apprentice], 3 - [Journeyman], 4 - [Expert], 5 - [Master]

var priceInEmeralds = 10;
var itemForSale = <item:bygonenether:withered_debris>;
var quantityForSale = 1;

var maxTradesPerCycle = 3; // usually 3, 12 or 16
var villagerXpGainPerTrade = 20; // this is NOT player xp
var priceDiscountMultiplier = 0.05; // usually 0.2 or 0.05

villagerTrades.addTrade(
    villagerProfession,
    villagerLevelRequired,
    priceInEmeralds,
    itemForSale * quantityForSale,
    maxTradesPerCycle,
    villagerXpGainPerTrade,
    priceDiscountMultiplier
);

/*/

NOTE:
Balancewise, this trade will allow to gain an average of 0.7 Netherite Scrap Nuggets per cycle, which is roughly 2% of a Netherite Ingot

/*/
