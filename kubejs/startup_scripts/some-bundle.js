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

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar common_1 = __webpack_require__(/*! ./common */ \"./kubejs/plugin/krem0wka/common.ts\");\r\nonEvent('item.registry', function (event) {\r\n    event\r\n        .create(common_1.id.ciast0)\r\n        .displayName('§fCiast0')\r\n        .texture('farmersdelight:item/wheat_dough');\r\n    event\r\n        .create(common_1.id.krem0wka)\r\n        .displayName('§aKrem0wka')\r\n        .tooltip('§7ID: 2137')\r\n        .food(function (food) {\r\n        food.hunger(7) //\r\n            .saturation(7)\r\n            .meat()\r\n            .eaten(function (ctx) {\r\n            var rand = Math.random();\r\n            if (rand <= 0.075) {\r\n                ctx.player.tell((0, common_1.randMessage)());\r\n                ctx.player.potionEffects.add('regeneration', 5, 2);\r\n                ctx.player.potionEffects.add('strength', 60, 5);\r\n            }\r\n        });\r\n    });\r\n});\r\nonEvent('fluid.registry', function (event) {\r\n    var kremColor = 0xaaaaaa;\r\n    var smietanaColor = 0xcccccc;\r\n    event //\r\n        .create(common_1.id.kr3m)\r\n        .thinTexture(kremColor)\r\n        .bucketColor(kremColor)\r\n        .displayName('§fKr3m');\r\n    event //\r\n        .create(common_1.id.smi3tana)\r\n        .thinTexture(smietanaColor)\r\n        .bucketColor(smietanaColor)\r\n        .displayName('§fŚmi3tana');\r\n});\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/plugin/krem0wka/startup.ts?");

/***/ }),

/***/ "./kubejs/plugin/thermal/common.ts":
/*!*****************************************!*\
  !*** ./kubejs/plugin/thermal/common.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __read = (this && this.__read) || function (o, n) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\r\n    if (!m) return o;\r\n    var i = m.call(o), r, ar = [], e;\r\n    try {\r\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\r\n    }\r\n    catch (error) { e = { error: error }; }\r\n    finally {\r\n        try {\r\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\r\n        }\r\n        finally { if (e) throw e.error; }\r\n    }\r\n    return ar;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ID = exports.FLUID = void 0;\r\nexports.FLUID = {\r\n    redstone: {\r\n        display: 'Destabilized Redstone',\r\n        luminosity: 6,\r\n        density: 3000,\r\n        temperature: 1300,\r\n        viscosity: 6000,\r\n    },\r\n    glowstone: {\r\n        display: 'Energized Glowstone',\r\n        luminosity: 15,\r\n        density: 3000,\r\n        temperature: 300,\r\n        viscosity: 6000,\r\n    },\r\n    ender: {\r\n        display: 'Resonant Ender',\r\n        luminosity: 4,\r\n        density: 3000,\r\n        temperature: 300,\r\n        viscosity: 6000,\r\n    },\r\n    sap: {\r\n        display: 'Sap',\r\n        luminosity: 0,\r\n        density: 3000,\r\n        temperature: 300,\r\n        viscosity: 6000,\r\n    },\r\n    syrup: {\r\n        display: 'Syrup',\r\n        luminosity: 0,\r\n        density: 3000,\r\n        temperature: 300,\r\n        viscosity: 6000,\r\n    },\r\n    resin: {\r\n        display: 'Resin',\r\n        luminosity: 0,\r\n        density: 3000,\r\n        temperature: 300,\r\n        viscosity: 6000,\r\n    },\r\n    tree_oil: {\r\n        display: 'Tree Oil',\r\n        luminosity: 0,\r\n        density: 3000,\r\n        temperature: 300,\r\n        viscosity: 6000,\r\n    },\r\n    latex: {\r\n        display: 'Latex',\r\n        luminosity: 0,\r\n        density: 3000,\r\n        temperature: 300,\r\n        viscosity: 6000,\r\n    },\r\n    creosote: {\r\n        display: 'Creosote',\r\n        luminosity: 0,\r\n        density: 3000,\r\n        temperature: 300,\r\n        viscosity: 6000,\r\n    },\r\n    crude_oil: {\r\n        display: 'Crude',\r\n        luminosity: 0,\r\n        density: 3000,\r\n        temperature: 300,\r\n        viscosity: 6000,\r\n    },\r\n    heavy_oil: {\r\n        display: 'Heavy Oil',\r\n        luminosity: 2,\r\n        density: 3000,\r\n        temperature: 1300,\r\n        viscosity: 6000,\r\n    },\r\n    light_oil: {\r\n        display: 'Light Oil',\r\n        luminosity: 3,\r\n        density: 3000,\r\n        temperature: 300,\r\n        viscosity: 6000,\r\n    },\r\n    refined_fuel: {\r\n        display: 'Refined Fuel',\r\n        luminosity: 4,\r\n        density: 3000,\r\n        temperature: 1300,\r\n        viscosity: 6000,\r\n    },\r\n};\r\nexports.ID = {\r\n    fluid: (function () {\r\n        var result = {};\r\n        Object.entries(exports.FLUID).forEach(function (_a) {\r\n            var _b = __read(_a, 2), id = _b[0], data = _b[1];\r\n            result[id] = \"\".concat(id);\r\n        });\r\n        return result;\r\n    })(),\r\n    bucket: (function () {\r\n        var result = {};\r\n        Object.entries(exports.FLUID).forEach(function (_a) {\r\n            var _b = __read(_a, 2), id = _b[0], data = _b[1];\r\n            result[id] = \"\".concat(id, \"_bucket\");\r\n        });\r\n        return result;\r\n    })(),\r\n};\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/plugin/thermal/common.ts?");

/***/ }),

/***/ "./kubejs/plugin/thermal/startup.ts":
/*!******************************************!*\
  !*** ./kubejs/plugin/thermal/startup.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __read = (this && this.__read) || function (o, n) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\r\n    if (!m) return o;\r\n    var i = m.call(o), r, ar = [], e;\r\n    try {\r\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\r\n    }\r\n    catch (error) { e = { error: error }; }\r\n    finally {\r\n        try {\r\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\r\n        }\r\n        finally { if (e) throw e.error; }\r\n    }\r\n    return ar;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar common_1 = __webpack_require__(/*! ./common */ \"./kubejs/plugin/thermal/common.ts\");\r\nvar FluidBucketItemBuilder = java('dev.latvian.mods.kubejs.fluid.FluidBucketItemBuilder');\r\nvar createThermalFluid = function (props) {\r\n    var stillTexture = \"thermal:block/fluids/\".concat(props.id, \"_still\");\r\n    var flowingTexture = \"thermal:block/fluids/\".concat(props.id, \"_flow\");\r\n    var fluid = props.event //\r\n        .create(\"\".concat(props.id, \"_decorative\"))\r\n        .stillTexture(stillTexture)\r\n        .flowingTexture(flowingTexture)\r\n        .luminosity(props.luminosity)\r\n        .density(props.density)\r\n        .temperature(props.temperature)\r\n        .viscosity(props.viscosity);\r\n    fluid.bucketItem.textureJson({\r\n        parent: 'minecraft:item/generated',\r\n        textures: {\r\n            layer0: \"thermal:item/\".concat(props.id, \"_bucket\"),\r\n        },\r\n    });\r\n};\r\nonEvent('fluid.registry', function (event) {\r\n    Object.entries(common_1.FLUID).forEach(function (_a) {\r\n        var _b = __read(_a, 2), id = _b[0], data = _b[1];\r\n        createThermalFluid(__assign({ event: event, id: id }, data));\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/plugin/thermal/startup.ts?");

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

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n__webpack_require__(/*! ./CCItems */ \"./kubejs/startup/CCItems.ts\");\r\n__webpack_require__(/*! ./CompressedSoulShard */ \"./kubejs/startup/CompressedSoulShard.ts\");\r\n__webpack_require__(/*! ../plugin/krem0wka/startup */ \"./kubejs/plugin/krem0wka/startup.ts\");\r\n__webpack_require__(/*! ../plugin/thermal/startup */ \"./kubejs/plugin/thermal/startup.ts\");\r\nconsole.log('HELLO STARTUP SCRIPT');\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/startup/index.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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