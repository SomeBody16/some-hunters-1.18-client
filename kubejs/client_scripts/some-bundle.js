/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./kubejs/client/index.ts":
/*!********************************!*\
  !*** ./kubejs/client/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n__webpack_require__(/*! ./vault-ability-event */ \"./kubejs/client/vault-ability-event.ts\");\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/client/index.ts?");

/***/ }),

/***/ "./kubejs/client/vault-ability-event.ts":
/*!**********************************************!*\
  !*** ./kubejs/client/vault-ability-event.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar custom_packet_1 = __webpack_require__(/*! ../core/custom-packet */ \"./kubejs/core/custom-packet.ts\");\r\nvar KeyMapping = java('net.minecraft.client.KeyMapping');\r\nvar keyMappings = [\r\n    'key.the_vault.ability_key',\r\n    'key.the_vault.quickselect.heal',\r\n    'key.the_vault.quickselect.farmer',\r\n    'key.the_vault.quickselect.mana_shield',\r\n    'key.the_vault.quickselect.nova',\r\n    'key.the_vault.quickselect.taunt',\r\n    'key.the_vault.quickselect.dash',\r\n    'key.the_vault.quickselect.execute',\r\n    'key.the_vault.quickselect.ghost_walk',\r\n    'key.the_vault.quickselect.mega_jump',\r\n    'key.the_vault.quickselect.rampage',\r\n    'key.the_vault.quickselect.summon_eternal',\r\n    'key.the_vault.quickselect.tank',\r\n    'key.the_vault.quickselect.vein_miner',\r\n    'key.the_vault.quickselect.hunter',\r\n    'key.the_vault.quickselect.stonefall',\r\n].map(function (keyMap) { return new KeyMapping(keyMap, -1, 'key.category.the_vault'); });\r\nvar isKeyDown = {};\r\nonEvent('client.tick', function (event) {\r\n    keyMappings.forEach(function (mapping) {\r\n        var key = mapping.getName();\r\n        if (mapping.isDown() && !isKeyDown[key]) {\r\n            isKeyDown[key] = true;\r\n            (0, custom_packet_1.sendCustomPacket)(event.player, 'vault_ability', { key: key });\r\n        }\r\n        else {\r\n            isKeyDown[key] = false;\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/client/vault-ability-event.ts?");

/***/ }),

/***/ "./kubejs/core/custom-packet.ts":
/*!**************************************!*\
  !*** ./kubejs/core/custom-packet.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.onCustomPacket = exports.sendCustomPacket = void 0;\r\nvar sendCustomPacket = function (player, channel, data) {\r\n    player.sendData(channel, data);\r\n};\r\nexports.sendCustomPacket = sendCustomPacket;\r\nvar onCustomPacket = function (channel, listener) {\r\n    onEvent(\"player.data_from_client.\".concat(channel), listener);\r\n};\r\nexports.onCustomPacket = onCustomPacket;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/core/custom-packet.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./kubejs/client/index.ts");
/******/ 	
/******/ })()
;