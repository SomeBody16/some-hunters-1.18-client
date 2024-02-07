import mods.jei.JEI;

var modId = "create_enchantment_industry";

craftingTable.removeByModid(modId);
<recipetype:create:filling>.removeByModid(modId);
<recipetype:create:mixing>.removeByModid(modId);

JEI.hideMod(modId);
JEI.addIngredient(<item:${modId}:disenchanter>);

craftingTable.addShapeless(
    recipeId(modId, "disenchanter"),
    <item:${modId}:disenchanter>,
    [
        <item:create:copper_casing>,
        <tag:items:create:sandpaper>
    ]
);