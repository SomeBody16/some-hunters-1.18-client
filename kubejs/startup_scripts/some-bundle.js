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

/***/ "./kubejs/startup/CompressedSoulShard.ts":
/*!***********************************************!*\
  !*** ./kubejs/startup/CompressedSoulShard.ts ***!
  \***********************************************/
/***/ (() => {

eval("\r\nonEvent('item.registry', function (event) {\r\n    var tooltip = function (value, color) {\r\n        return Component.join(Component.string(' '), [\r\n            Component.string('Value of').white(),\r\n            Component.string(value.toString()).withStyle(color),\r\n            Component.string('soul shards'),\r\n        ]);\r\n    };\r\n    event.create('compressed_soul_shard_x1').tooltip(tooltip(9, Internal.ChatFormatting.AQUA));\r\n    event.create('compressed_soul_shard_x2').tooltip(tooltip(9 * 9, Internal.ChatFormatting.YELLOW));\r\n    event\r\n        .create('compressed_soul_shard_x3')\r\n        .tooltip(tooltip(9 * 9 * 9, Internal.ChatFormatting.LIGHT_PURPLE));\r\n    event\r\n        .create('compressed_soul_shard_x4')\r\n        .tooltip(tooltip(9 * 9 * 9 * 9, Internal.ChatFormatting.GREEN));\r\n});\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/startup/CompressedSoulShard.ts?");

/***/ }),

/***/ "./kubejs/startup/index.ts":
/*!*********************************!*\
  !*** ./kubejs/startup/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n__webpack_require__(/*! ./CompressedSoulShard */ \"./kubejs/startup/CompressedSoulShard.ts\");\r\nconsole.log('HELLO STARTUP SCRIPT');\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/startup/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./kubejs/startup/index.ts");
/******/ 	
/******/ })()
;