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

/***/ "./kubejs/plugin/krem0wka/common.ts":
/*!******************************************!*\
  !*** ./kubejs/plugin/krem0wka/common.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.id = exports.randMessage = void 0;\r\nvar messages = [\r\n    'Jesteś moją kremóweczką ;)',\r\n    'Kremówkuj z tym B)',\r\n    'Gdy się człowiek śpieszy to się papież cieszy',\r\n    'Toż to żarcik apetyczny, papież polak magnetyczny',\r\n    'Jeszcze jak',\r\n    'Mały chłopcze trzymaj toster, papież polak to imposter',\r\n    'Toż to rzecz nie spotykana, papież polak je banana',\r\n    'Żarcik troche nieetyczny, papież polak elektryczny 2137 Volt',\r\n    'Chować dzieci papież leci',\r\n    'Toć to jest zupełnie nowy papież polak cytrynowy',\r\n    'Rewelacja znad bałtyku, papież polak na patyku',\r\n    'Toż to sprawa niebywała, papież polak małpia skała',\r\n];\r\nvar randMessage = function () { return messages[Math.floor(Math.random() * messages.length)]; };\r\nexports.randMessage = randMessage;\r\nexports.id = {\r\n    krem0wka: 'kubejs:krem0wka',\r\n    ciast0: 'kubejs:krem0wka_ciast0',\r\n    kr3m: 'kubejs:krem0wka_kr3m',\r\n    smi3tana: 'kubejs:krem0wka_smi3tana',\r\n};\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/plugin/krem0wka/common.ts?");

/***/ }),

/***/ "./kubejs/plugin/krem0wka/startup.ts":
/*!*******************************************!*\
  !*** ./kubejs/plugin/krem0wka/startup.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar common_1 = __webpack_require__(/*! ./common */ \"./kubejs/plugin/krem0wka/common.ts\");\r\nonEvent('item.registry', function (event) {\r\n    event\r\n        .create(common_1.id.ciast0)\r\n        .displayName('§fCiast0')\r\n        .texture('farmersdelight:item/wheat_dough');\r\n    event\r\n        .create(common_1.id.krem0wka)\r\n        .displayName('§aKrem0wka')\r\n        .tooltip('§7ID: 2137')\r\n        .food(function (food) {\r\n        food.hunger(7) //\r\n            .saturation(7)\r\n            .meat()\r\n            .eaten(function (ctx) {\r\n            var rand = Math.random();\r\n            if (rand <= 0.05) {\r\n                ctx.player.tell((0, common_1.randMessage)());\r\n                ctx.player.potionEffects.add('regeneration', 5, 2);\r\n                ctx.player.potionEffects.add('strength', 60, 5);\r\n            }\r\n        });\r\n    });\r\n});\r\nonEvent('fluid.registry', function (event) {\r\n    var kremColor = 0xaaaaaa;\r\n    var smietanaColor = 0xcccccc;\r\n    event //\r\n        .create(common_1.id.kr3m)\r\n        .thinTexture(kremColor)\r\n        .bucketColor(kremColor)\r\n        .displayName('§fKr3m');\r\n    event //\r\n        .create(common_1.id.smi3tana)\r\n        .thinTexture(smietanaColor)\r\n        .bucketColor(smietanaColor)\r\n        .displayName('§fŚmi3tana');\r\n});\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/plugin/krem0wka/startup.ts?");

/***/ }),

/***/ "./kubejs/startup/CCItems.ts":
/*!***********************************!*\
  !*** ./kubejs/startup/CCItems.ts ***!
  \***********************************/
/***/ (() => {

eval("\r\nonEvent('item.registry', function (event) {\r\n    event.create('cc_antenna');\r\n    event.create('cc_display');\r\n    event.create('cc_lense');\r\n    event.create('cc_magnetic_coated_disk');\r\n    event.create('cc_metal_plate');\r\n    event.create('cc_metal_wire');\r\n    event.create('cc_wooden_board');\r\n});\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/startup/CCItems.ts?");

/***/ }),

/***/ "./kubejs/startup/CompressedSoulShard.ts":
/*!***********************************************!*\
  !*** ./kubejs/startup/CompressedSoulShard.ts ***!
  \***********************************************/
/***/ (() => {

eval("\r\nonEvent('item.registry', function (event) {\r\n    event.create('compressed_soul_shard_x1').displayName('§bCommon soul shard');\r\n    event.create('compressed_soul_shard_x2').displayName('§eRare soul shard');\r\n    event.create('compressed_soul_shard_x3').displayName('§dEpic soul shard');\r\n    event.create('compressed_soul_shard_x4').displayName('§aOmega soul shard');\r\n});\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/startup/CompressedSoulShard.ts?");

/***/ }),

/***/ "./kubejs/startup/index.ts":
/*!*********************************!*\
  !*** ./kubejs/startup/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n__webpack_require__(/*! ./CCItems */ \"./kubejs/startup/CCItems.ts\");\r\n__webpack_require__(/*! ./CompressedSoulShard */ \"./kubejs/startup/CompressedSoulShard.ts\");\r\n__webpack_require__(/*! ../plugin/krem0wka/startup */ \"./kubejs/plugin/krem0wka/startup.ts\");\r\nconsole.log('HELLO STARTUP SCRIPT');\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/startup/index.ts?");

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