import mods.jei.JEI;

var modId = "somepotter";

craftingTable.addShapeless(
    recipeId(modId, "floo_powder"),
    <item:${modId}:floo_powder>,
    [<item:minecraft:blaze_powder>, <item:the_vault:extraordinary_larimar>]
);
<block:${modId}:floo_fire>.addDrop("larimar", <item:the_vault:extraordinary_larimar>);

craftingTable.addShapeless(
    recipeId(modId, "spell_book"),
    <item:patchouli:guide_book>.withTag({ "patchouli:book": "somepotter:spell_book" }),
    [<item:minecraft:book>, <item:minecraft:amethyst_shard>]
);
JEI.addIngredient(<item:patchouli:guide_book>.withTag({ "patchouli:book": "somepotter:spell_book" }));
