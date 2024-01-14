var modId = "create_enchantment_industry";

craftingTable.removeByModid(modId);
<recipetype:create:filling>.removeByModid(modId);

craftingTable.addShapeless(
    recipeId(modId, "disenchanter"),
    <item:${modId}:disenchanter>,
    [
        <item:create:copper_casing>,
        <tag:items:create:sandpaper>
    ]
);