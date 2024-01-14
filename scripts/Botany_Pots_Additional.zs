/**
 * Additional recipes for Botany Pots
 * - VH: 3.11
 * - Updated: 2023-07-15
 */

// This list should be same as in Botany_Pots.zs
var materials = {
  // terracotta
  "terracotta": "terracotta",
  "white_terracotta": "white",
  "red_terracotta": "red",
  "lime_terracotta": "lime",
  "light_gray_terracotta": "light_gray",
  "gray_terracotta": "gray",
  "black_terracotta": "black",
  "orange_terracotta": "orange",
  "yellow_terracotta": "yellow",
  "cyan_terracotta": "cyan",
  "purple_terracotta": "purple",
  "blue_terracotta": "blue",
  "light_blue_terracotta": "light_blue",
  "brown_terracotta": "brown",
  "pink_terracotta": "pink",
  "green_terracotta": "green",
  "magenta_terracotta": "magenta",
  // glazed terracotta
  "white_glazed_terracotta": "white_glazed",
  "red_glazed_terracotta": "red_glazed",
  "lime_glazed_terracotta": "lime_glazed",
  "light_gray_glazed_terracotta": "light_gray_glazed",
  "gray_glazed_terracotta": "gray_glazed",
  "black_glazed_terracotta": "black_glazed",
  "orange_glazed_terracotta": "orange_glazed",
  "yellow_glazed_terracotta": "yellow_glazed",
  "cyan_glazed_terracotta": "cyan_glazed",
  "purple_glazed_terracotta": "purple_glazed",
  "blue_glazed_terracotta": "blue_glazed",
  "light_blue_glazed_terracotta": "light_blue_glazed",
  "brown_glazed_terracotta": "brown_glazed",
  "pink_glazed_terracotta": "pink_glazed",
  "green_glazed_terracotta": "green_glazed",
  "magenta_glazed_terracotta": "magenta_glazed",
  // concrete
  "white_concrete": "white_concrete",
  "red_concrete": "red_concrete",
  "lime_concrete": "lime_concrete",
  "light_gray_concrete": "light_gray_concrete",
  "gray_concrete": "gray_concrete",
  "black_concrete": "black_concrete",
  "orange_concrete": "orange_concrete",
  "yellow_concrete": "yellow_concrete",
  "cyan_concrete": "cyan_concrete",
  "purple_concrete": "purple_concrete",
  "blue_concrete": "blue_concrete",
  "light_blue_concrete": "light_blue_concrete",
  "brown_concrete": "brown_concrete",
  "pink_concrete": "pink_concrete",
  "magenta_concrete": "magenta_concrete",
  "green_concrete": "green_concrete",
  "magenta_concrete": "magenta_concrete",
};

for materialId, materialName in materials {
  if (materialName != "terracotta") {
    craftingTable.addShaped("botanypots_dyed_" + materialName + "_botany_pot", <item:botanypots:${materialId}_botany_pot>, [
      [<item:botanypots:terracotta_botany_pot>, <item:minecraft:${materialId}>],
      [],
      []
    ]);

    craftingTable.addShaped("botanypots_dyed_" + materialName + "_hopper_botany_pot", <item:botanypots:${materialId}_hopper_botany_pot>, [
      [<item:botanypots:terracotta_hopper_botany_pot>, <item:minecraft:${materialId}>],
      [],
      []
    ]);
  }
}

craftingTable.addShaped("botanypots_decolor_botany_pot", <item:botanypots:terracotta_botany_pot>, [
  [<tag:items:botanypots:basic_botany_pots>, <item:supplementaries:soap>],
  [],
  []
]);

craftingTable.addShaped("botanypots_decolor_hopper_botany_pot", <item:botanypots:terracotta_hopper_botany_pot>, [
  [<tag:items:botanypots:hopper_botany_pots>, <item:supplementaries:soap>],
  [],
  []
]);