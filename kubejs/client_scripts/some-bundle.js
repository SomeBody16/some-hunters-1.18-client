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

/***/ "./kubejs/client/CompressedSoulShard.ts":
/*!**********************************************!*\
  !*** ./kubejs/client/CompressedSoulShard.ts ***!
  \**********************************************/
/***/ (() => {

eval("\r\nonEvent('item.tooltip', function (tooltip) {\r\n    var soulShardTooltip = function (value, color) {\r\n        return \"\\u00A7fValue of \".concat(color).concat(value, \" \\u00A7fsoul shards\");\r\n    };\r\n    var soulShardTooltipSummary = function (value, summary, color) {\r\n        return \"\\u00A7fValue of \".concat(color).concat(value, \" [\").concat(summary, \"] \\u00A7fsoul shards\");\r\n    };\r\n    var advancedTooltip = function (power, color) {\r\n        return function (item, advanced, text) {\r\n            var value = Math.pow(9, power);\r\n            var summary = value * item.count;\r\n            if (!tooltip.shift) {\r\n                text.add(1, \"\\u00A7fValue of \".concat(color).concat(value, \" \\u00A7fsoul shards\"));\r\n            }\r\n            else {\r\n                text.add(1, \"\\u00A7fValue of \".concat(color).concat(value, \" [\").concat(summary, \"] \\u00A7fsoul shards\"));\r\n            }\r\n        };\r\n    };\r\n    tooltip.addAdvanced('kubejs:compressed_soul_shard_x1', advancedTooltip(1, '§b'));\r\n    tooltip.addAdvanced('kubejs:compressed_soul_shard_x2', advancedTooltip(2, '§e'));\r\n    tooltip.addAdvanced('kubejs:compressed_soul_shard_x3', advancedTooltip(3, '§d'));\r\n    tooltip.addAdvanced('kubejs:compressed_soul_shard_x4', advancedTooltip(4, '§a'));\r\n});\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/client/CompressedSoulShard.ts?");

/***/ }),

/***/ "./kubejs/client/index.ts":
/*!********************************!*\
  !*** ./kubejs/client/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n__webpack_require__(/*! ./CompressedSoulShard */ \"./kubejs/client/CompressedSoulShard.ts\");\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/client/index.ts?");

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