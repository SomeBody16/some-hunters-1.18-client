var modId = "somevhaddons";

// Experience Nugget II
craftingTable.addShapeless(
    recipeId(modId, "experience_nugget_2"),
    <item:${modId}:experience_nugget_2>,
    [<item:create:experience_nugget>, <item:create:experience_nugget>, <item:create:experience_nugget>,
     <item:create:experience_nugget>, <item:create:experience_nugget>, <item:create:experience_nugget>,
     <item:create:experience_nugget>, <item:create:experience_nugget>, <item:create:experience_nugget>]
);

craftingTable.addShapeless(
    recipeId(modId, "experience_nugget_2_reverse"),
    <item:${modId}:experience_nugget_2> * 9,
    [<item:${modId}:experience_nugget_3>]
);

// Experience Nugget III
craftingTable.addShapeless(
    recipeId(modId, "experience_nugget_3"),
    <item:${modId}:experience_nugget_3>,
    [<item:${modId}:experience_nugget_2>, <item:${modId}:experience_nugget_2>, <item:${modId}:experience_nugget_2>,
     <item:${modId}:experience_nugget_2>, <item:${modId}:experience_nugget_2>, <item:${modId}:experience_nugget_2>,
     <item:${modId}:experience_nugget_2>, <item:${modId}:experience_nugget_2>, <item:${modId}:experience_nugget_2>]
);

craftingTable.addShapeless(
    recipeId(modId, "experience_nugget_3_reverse"),
    <item:${modId}:experience_nugget_3> * 9,
    [<item:${modId}:experience_nugget_4>]
);

// Experience Nugget IV
craftingTable.addShapeless(
    recipeId(modId, "experience_nugget_4"),
    <item:${modId}:experience_nugget_4>,
    [<item:${modId}:experience_nugget_3>, <item:${modId}:experience_nugget_3>, <item:${modId}:experience_nugget_3>,
     <item:${modId}:experience_nugget_3>, <item:${modId}:experience_nugget_3>]
);
