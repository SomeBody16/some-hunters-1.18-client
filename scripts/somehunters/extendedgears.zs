var modId = "extendedgears";

craftingTable.removeByModid(modId);
<recipetype:create:deploying>.removeByModid(modId);

stoneCutter.addRecipe(recipeId(modId, "half_shaft_cogwheel"), <item:${modId}:half_shaft_cogwheel>, <item:create:cogwheel>);
stoneCutter.addRecipe(recipeId(modId, "shaftless_cogwheel"), <item:${modId}:shaftless_cogwheel>, <item:create:cogwheel>);

stoneCutter.addRecipe(recipeId(modId, "large_half_shaft_cogwheel"), <item:${modId}:large_half_shaft_cogwheel>, <item:create:large_cogwheel>);
stoneCutter.addRecipe(recipeId(modId, "large_shaftless_cogwheel"), <item:${modId}:shaftless_cogwheel>, <item:create:large_cogwheel>);
