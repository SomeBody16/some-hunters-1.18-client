import mods.jei.JEI;

var modId = "quark";

craftingTable.addShapeless(
    recipeId(modId, "blank_rune"),
    <item:${modId}:blank_rune>,
    [<item:minecraft:stone>, <tag:items:quark:corundum>]
);
