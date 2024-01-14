var modId = "darkutils";

craftingTable.remove(<item:${modId}:vector_plate_ultra>);
craftingTable.addShaped(
    recipeId(modId, "vector_plate_ultra"),
    <item:${modId}:vector_plate_ultra>,
    [
        [<item:${modId}:vector_plate_extreme>,  <item:${modId}:vector_plate_extreme>,   <item:${modId}:vector_plate_extreme>],
        [<item:${modId}:blank_plate>,           <item:${modId}:blank_plate>,            <item:${modId}:blank_plate>],
        [<item:${modId}:vector_plate_extreme>,  <item:${modId}:vector_plate_extreme>,   <item:${modId}:vector_plate_extreme>]
    ]
);