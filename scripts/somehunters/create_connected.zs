var modId = "create_connected";

craftingTable.remove(<item:${modId}:item_silo>);
craftingTable.addShapeless(
    recipeId(modId, "item_silo"),
    <item:${modId}:item_silo>,
    [
        <item:create:item_vault>
    ]
);