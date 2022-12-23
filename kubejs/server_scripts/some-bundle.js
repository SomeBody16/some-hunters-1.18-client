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

/***/ "./kubejs/core/Command.ts":
/*!********************************!*\
  !*** ./kubejs/core/Command.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Command = void 0;\r\nvar Command = /** @class */ (function () {\r\n    function Command() {\r\n        var _this = this;\r\n        onEvent('command.registry', function (event) {\r\n            var command = _this.register(event.commands, event.arguments, event);\r\n            event.register(command);\r\n        });\r\n    }\r\n    return Command;\r\n}());\r\nexports.Command = Command;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/core/Command.ts?");

/***/ }),

/***/ "./kubejs/core/EventListener.ts":
/*!**************************************!*\
  !*** ./kubejs/core/EventListener.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.EventListener = void 0;\r\nvar EventListener = /** @class */ (function () {\r\n    function EventListener() {\r\n    }\r\n    return EventListener;\r\n}());\r\nexports.EventListener = EventListener;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/core/EventListener.ts?");

/***/ }),

/***/ "./kubejs/core/Plugin.ts":
/*!*******************************!*\
  !*** ./kubejs/core/Plugin.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Plugin = void 0;\r\nvar Plugin = /** @class */ (function () {\r\n    function Plugin() {\r\n        this.listeners = [];\r\n        this.commands = [];\r\n    }\r\n    return Plugin;\r\n}());\r\nexports.Plugin = Plugin;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/core/Plugin.ts?");

/***/ }),

/***/ "./kubejs/core/event-filter/playerFilter.ts":
/*!**************************************************!*\
  !*** ./kubejs/core/event-filter/playerFilter.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.playerFilter = void 0;\r\nvar playerFilter = function (callback) {\r\n    return function (event) {\r\n        var _a;\r\n        if ((_a = event === null || event === void 0 ? void 0 : event.entity) === null || _a === void 0 ? void 0 : _a.isPlayer()) {\r\n            callback(event, event.entity.player);\r\n        }\r\n    };\r\n};\r\nexports.playerFilter = playerFilter;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/core/event-filter/playerFilter.ts?");

/***/ }),

/***/ "./kubejs/server/banner-claim/index.ts":
/*!*********************************************!*\
  !*** ./kubejs/server/banner-claim/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.BannerClaimPlugin = void 0;\r\nvar Plugin_1 = __webpack_require__(/*! ../../core/Plugin */ \"./kubejs/core/Plugin.ts\");\r\nvar PatternRemoveListener_1 = __webpack_require__(/*! ./listener/PatternRemoveListener */ \"./kubejs/server/banner-claim/listener/PatternRemoveListener.ts\");\r\nvar PatternSaveListener_1 = __webpack_require__(/*! ./listener/PatternSaveListener */ \"./kubejs/server/banner-claim/listener/PatternSaveListener.ts\");\r\nvar ProtectionListener_1 = __webpack_require__(/*! ./listener/ProtectionListener */ \"./kubejs/server/banner-claim/listener/ProtectionListener.ts\");\r\nvar BannerClaimPlugin = /** @class */ (function (_super) {\r\n    __extends(BannerClaimPlugin, _super);\r\n    function BannerClaimPlugin() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.listeners = [new PatternSaveListener_1.PatternSaveListener(), new PatternRemoveListener_1.PatternRemoveListener(), new ProtectionListener_1.ProtectionListener()];\r\n        return _this;\r\n    }\r\n    BannerClaimPlugin.prototype.init = function () { };\r\n    return BannerClaimPlugin;\r\n}(Plugin_1.Plugin));\r\nexports.BannerClaimPlugin = BannerClaimPlugin;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/banner-claim/index.ts?");

/***/ }),

/***/ "./kubejs/server/banner-claim/lib/PlayerBanner.ts":
/*!********************************************************!*\
  !*** ./kubejs/server/banner-claim/lib/PlayerBanner.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.PlayerBanner = void 0;\r\nvar json_wrapper_1 = __webpack_require__(/*! ../../util/json-wrapper */ \"./kubejs/server/util/json-wrapper.ts\");\r\nvar PlayerBanner = /** @class */ (function () {\r\n    function PlayerBanner(player, patternPath) {\r\n        if (patternPath === void 0) { patternPath = \"kubejs/config/banner-claim/player/\".concat(player.id, \".json\"); }\r\n        var _a;\r\n        this.player = player;\r\n        this.patternPath = patternPath;\r\n        this.pattern = (_a = json_wrapper_1.JsonIOWrapper.read(patternPath)) === null || _a === void 0 ? void 0 : _a.pattern;\r\n    }\r\n    PlayerBanner.prototype.exists = function () {\r\n        return !!this.pattern;\r\n    };\r\n    PlayerBanner.prototype.compare = function (blockPattern) {\r\n        return this.pattern === blockPattern;\r\n    };\r\n    PlayerBanner.prototype.save = function (pattern) {\r\n        json_wrapper_1.JsonIOWrapper.write(this.patternPath, { pattern: pattern });\r\n    };\r\n    return PlayerBanner;\r\n}());\r\nexports.PlayerBanner = PlayerBanner;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/banner-claim/lib/PlayerBanner.ts?");

/***/ }),

/***/ "./kubejs/server/banner-claim/lib/PlayerClaim.ts":
/*!*******************************************************!*\
  !*** ./kubejs/server/banner-claim/lib/PlayerClaim.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.PlayerClaim = void 0;\r\nvar util_1 = __webpack_require__(/*! ../../util */ \"./kubejs/server/util/index.ts\");\r\nvar json_wrapper_1 = __webpack_require__(/*! ../../util/json-wrapper */ \"./kubejs/server/util/json-wrapper.ts\");\r\nvar PlayerClaim = /** @class */ (function () {\r\n    function PlayerClaim(blockPos) {\r\n        var _a;\r\n        var id = (0, util_1.chunkPos)(blockPos).id;\r\n        this.claimPath = \"kubejs/config/banner-claim/chunk/\".concat(id, \".json\");\r\n        this.claim = (_a = json_wrapper_1.JsonIOWrapper.read(this.claimPath)) === null || _a === void 0 ? void 0 : _a.claim;\r\n    }\r\n    PlayerClaim.prototype.exists = function () {\r\n        return !!this.claim;\r\n    };\r\n    PlayerClaim.prototype.save = function (player, _a) {\r\n        var x = _a.x, y = _a.y, z = _a.z;\r\n        var claim = {\r\n            playerId: player.id.toString(),\r\n            bannerPos: { x: x, y: y, z: z },\r\n        };\r\n        json_wrapper_1.JsonIOWrapper.write(this.claimPath, { claim: claim });\r\n    };\r\n    PlayerClaim.prototype.havePermissions = function (otherPlayer) {\r\n        var _a;\r\n        return (!this.exists() ||\r\n            ((_a = this.claim) === null || _a === void 0 ? void 0 : _a.playerId) === otherPlayer.id.toString() ||\r\n            otherPlayer.isCreativeMode());\r\n    };\r\n    PlayerClaim.prototype.remove = function (bannerPos) {\r\n        var _a;\r\n        if ((0, util_1.comparePos)(bannerPos, (_a = this.claim) === null || _a === void 0 ? void 0 : _a.bannerPos)) {\r\n            json_wrapper_1.JsonIOWrapper.write(this.claimPath, {});\r\n            return true;\r\n        }\r\n        return false;\r\n    };\r\n    return PlayerClaim;\r\n}());\r\nexports.PlayerClaim = PlayerClaim;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/banner-claim/lib/PlayerClaim.ts?");

/***/ }),

/***/ "./kubejs/server/banner-claim/lib/getBannerPattern.ts":
/*!************************************************************!*\
  !*** ./kubejs/server/banner-claim/lib/getBannerPattern.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getBlockBannerPattern = void 0;\r\nvar getBlockBannerPattern = function (block) {\r\n    var nbtString = block.item.nbtString;\r\n    if (block.hasTag('minecraft:banners') && nbtString.includes('Patterns')) {\r\n        return nbtString;\r\n    }\r\n    return undefined;\r\n};\r\nexports.getBlockBannerPattern = getBlockBannerPattern;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/banner-claim/lib/getBannerPattern.ts?");

/***/ }),

/***/ "./kubejs/server/banner-claim/listener/PatternRemoveListener.ts":
/*!**********************************************************************!*\
  !*** ./kubejs/server/banner-claim/listener/PatternRemoveListener.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.PatternRemoveListener = void 0;\r\nvar playerFilter_1 = __webpack_require__(/*! ../../../core/event-filter/playerFilter */ \"./kubejs/core/event-filter/playerFilter.ts\");\r\nvar EventListener_1 = __webpack_require__(/*! ../../../core/EventListener */ \"./kubejs/core/EventListener.ts\");\r\nvar util_1 = __webpack_require__(/*! ../../util */ \"./kubejs/server/util/index.ts\");\r\nvar particle_1 = __webpack_require__(/*! ../../util/particle */ \"./kubejs/server/util/particle.ts\");\r\nvar getBannerPattern_1 = __webpack_require__(/*! ../lib/getBannerPattern */ \"./kubejs/server/banner-claim/lib/getBannerPattern.ts\");\r\nvar PlayerClaim_1 = __webpack_require__(/*! ../lib/PlayerClaim */ \"./kubejs/server/banner-claim/lib/PlayerClaim.ts\");\r\nvar PatternRemoveListener = /** @class */ (function (_super) {\r\n    __extends(PatternRemoveListener, _super);\r\n    function PatternRemoveListener() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    PatternRemoveListener.prototype.register = function () {\r\n        onEvent('block.break', (0, playerFilter_1.playerFilter)(function (event, player) {\r\n            var dimensionId = (0, util_1.getPlayerDimensionId)(player.minecraftPlayer);\r\n            if (dimensionId !== 'minecraft:overworld')\r\n                return;\r\n            var blockPattern = (0, getBannerPattern_1.getBlockBannerPattern)(event.block);\r\n            if (!blockPattern) {\r\n                return; // Not a banner with pattern\r\n            }\r\n            var claim = new PlayerClaim_1.PlayerClaim(event.block.pos);\r\n            if (!claim.exists() || !claim.havePermissions(player)) {\r\n                return;\r\n            }\r\n            if (claim.remove(event.block.pos)) {\r\n                util_1.title.show(player.profile.name, 'actionbar', 'Claim removed', 'red');\r\n                player.playSound('block.amethyst_cluster.break');\r\n                particle_1.particle.dragonBreath(event.block.pos);\r\n            }\r\n        }));\r\n    };\r\n    return PatternRemoveListener;\r\n}(EventListener_1.EventListener));\r\nexports.PatternRemoveListener = PatternRemoveListener;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/banner-claim/listener/PatternRemoveListener.ts?");

/***/ }),

/***/ "./kubejs/server/banner-claim/listener/PatternSaveListener.ts":
/*!********************************************************************!*\
  !*** ./kubejs/server/banner-claim/listener/PatternSaveListener.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.PatternSaveListener = void 0;\r\nvar playerFilter_1 = __webpack_require__(/*! ../../../core/event-filter/playerFilter */ \"./kubejs/core/event-filter/playerFilter.ts\");\r\nvar EventListener_1 = __webpack_require__(/*! ../../../core/EventListener */ \"./kubejs/core/EventListener.ts\");\r\nvar util_1 = __webpack_require__(/*! ../../util */ \"./kubejs/server/util/index.ts\");\r\nvar particle_1 = __webpack_require__(/*! ../../util/particle */ \"./kubejs/server/util/particle.ts\");\r\nvar getBannerPattern_1 = __webpack_require__(/*! ../lib/getBannerPattern */ \"./kubejs/server/banner-claim/lib/getBannerPattern.ts\");\r\nvar PlayerBanner_1 = __webpack_require__(/*! ../lib/PlayerBanner */ \"./kubejs/server/banner-claim/lib/PlayerBanner.ts\");\r\nvar PlayerClaim_1 = __webpack_require__(/*! ../lib/PlayerClaim */ \"./kubejs/server/banner-claim/lib/PlayerClaim.ts\");\r\nvar PatternSaveListener = /** @class */ (function (_super) {\r\n    __extends(PatternSaveListener, _super);\r\n    function PatternSaveListener() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    PatternSaveListener.prototype.register = function () {\r\n        onEvent('block.right_click', (0, playerFilter_1.playerFilter)(function (event, player) {\r\n            var dimensionId = (0, util_1.getPlayerDimensionId)(player.minecraftPlayer);\r\n            if (dimensionId !== 'minecraft:overworld')\r\n                return;\r\n            var blockPattern = (0, getBannerPattern_1.getBlockBannerPattern)(event.block);\r\n            if (!blockPattern) {\r\n                return; // Not a banner with pattern\r\n            }\r\n            var playerBanner = new PlayerBanner_1.PlayerBanner(player);\r\n            if (playerBanner.exists() && !playerBanner.compare(blockPattern)) {\r\n                util_1.title.show(player.profile.name, 'actionbar', 'This is not your pattern!', 'red');\r\n                return;\r\n            }\r\n            if (!playerBanner.exists()) {\r\n                player.tell(Component.string('Saved as your banner pattern'));\r\n                playerBanner.save(blockPattern);\r\n            }\r\n            var claim = new PlayerClaim_1.PlayerClaim(event.block.pos);\r\n            if (claim.exists()) {\r\n                return;\r\n            }\r\n            claim.save(player, event.block.pos);\r\n            util_1.title.show(player.profile.name, 'actionbar', 'Chunk claimed', 'green');\r\n            player.playSound('block.amethyst_cluster.place');\r\n            particle_1.particle.dragonBreath(event.block.pos);\r\n        }));\r\n    };\r\n    return PatternSaveListener;\r\n}(EventListener_1.EventListener));\r\nexports.PatternSaveListener = PatternSaveListener;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/banner-claim/listener/PatternSaveListener.ts?");

/***/ }),

/***/ "./kubejs/server/banner-claim/listener/ProtectionListener.ts":
/*!*******************************************************************!*\
  !*** ./kubejs/server/banner-claim/listener/ProtectionListener.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ProtectionListener = void 0;\r\nvar playerFilter_1 = __webpack_require__(/*! ../../../core/event-filter/playerFilter */ \"./kubejs/core/event-filter/playerFilter.ts\");\r\nvar EventListener_1 = __webpack_require__(/*! ../../../core/EventListener */ \"./kubejs/core/EventListener.ts\");\r\nvar util_1 = __webpack_require__(/*! ../../util */ \"./kubejs/server/util/index.ts\");\r\nvar PlayerClaim_1 = __webpack_require__(/*! ../lib/PlayerClaim */ \"./kubejs/server/banner-claim/lib/PlayerClaim.ts\");\r\nvar ProtectionListener = /** @class */ (function (_super) {\r\n    __extends(ProtectionListener, _super);\r\n    function ProtectionListener() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    ProtectionListener.prototype.register = function () {\r\n        var _this = this;\r\n        onEvent('block.right_click', (0, playerFilter_1.playerFilter)(function (event, player) {\r\n            var dimensionId = (0, util_1.getPlayerDimensionId)(player.minecraftPlayer);\r\n            if (dimensionId !== 'minecraft:overworld')\r\n                return;\r\n            var claim = new PlayerClaim_1.PlayerClaim(event.block);\r\n            if (!claim.havePermissions(player) && event.block.hasTag('minecraft:buttons')) {\r\n                _this.punish(player);\r\n                util_1.particle.dragonBreath(event.block);\r\n                event.cancel();\r\n                return;\r\n            }\r\n        }));\r\n        onEvent('block.place', (0, playerFilter_1.playerFilter)(function (event, player) {\r\n            var dimensionId = (0, util_1.getPlayerDimensionId)(player.minecraftPlayer);\r\n            if (dimensionId !== 'minecraft:overworld')\r\n                return;\r\n            var claim = new PlayerClaim_1.PlayerClaim(event.block);\r\n            if (claim.havePermissions(player)) {\r\n                return;\r\n            }\r\n            _this.punish(player);\r\n            util_1.particle.dragonBreath(event.block);\r\n            event.cancel();\r\n        }));\r\n        onEvent('block.break', (0, playerFilter_1.playerFilter)(function (event, player) {\r\n            var dimensionId = (0, util_1.getPlayerDimensionId)(player.minecraftPlayer);\r\n            if (dimensionId !== 'minecraft:overworld')\r\n                return;\r\n            var claim = new PlayerClaim_1.PlayerClaim(event.block);\r\n            if (claim.havePermissions(player)) {\r\n                return;\r\n            }\r\n            _this.punish(player);\r\n            util_1.particle.dragonBreath(event.block);\r\n            event.cancel();\r\n        }));\r\n        // onEvent('level.explosion.pre' as any, (event: any) => {\r\n        //     if (!event.exploder.isPlayer()) {\r\n        //         return\r\n        //     }\r\n        //     const dimensionId = getPlayerDimensionId(event.exploder.minecraftPlayer)\r\n        //     if (dimensionId !== 'minecraft:overworld') return\r\n        //     const player = event.exploder\r\n        //     const claim = new PlayerClaim(event)\r\n        //     if (claim.havePermissions(player)) {\r\n        //         return\r\n        //     }\r\n        //     this.punish(player)\r\n        //     particle.dragonBreath(event)\r\n        //     event.cancel()\r\n        // })\r\n    };\r\n    ProtectionListener.prototype.punish = function (player) {\r\n        util_1.effect.instantDamage(player.profile.name);\r\n    };\r\n    return ProtectionListener;\r\n}(EventListener_1.EventListener));\r\nexports.ProtectionListener = ProtectionListener;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/banner-claim/listener/ProtectionListener.ts?");

/***/ }),

/***/ "./kubejs/server/discord-chat/index.ts":
/*!*********************************************!*\
  !*** ./kubejs/server/discord-chat/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.DiscordChatPlugin = void 0;\r\nvar Plugin_1 = __webpack_require__(/*! ../../core/Plugin */ \"./kubejs/core/Plugin.ts\");\r\nvar DiscordChatPlugin = /** @class */ (function (_super) {\r\n    __extends(DiscordChatPlugin, _super);\r\n    function DiscordChatPlugin() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.listeners = []; // TODO: API Mod for network packets\r\n        return _this;\r\n    }\r\n    DiscordChatPlugin.prototype.init = function () { };\r\n    return DiscordChatPlugin;\r\n}(Plugin_1.Plugin));\r\nexports.DiscordChatPlugin = DiscordChatPlugin;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/discord-chat/index.ts?");

/***/ }),

/***/ "./kubejs/server/end-journey/index.ts":
/*!********************************************!*\
  !*** ./kubejs/server/end-journey/index.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.EndJourneyPlugin = void 0;\r\nvar Plugin_1 = __webpack_require__(/*! ../../core/Plugin */ \"./kubejs/core/Plugin.ts\");\r\nvar DimensionProtectionListener_1 = __webpack_require__(/*! ./listener/DimensionProtectionListener */ \"./kubejs/server/end-journey/listener/DimensionProtectionListener.ts\");\r\nvar EndJourneyPlugin = /** @class */ (function (_super) {\r\n    __extends(EndJourneyPlugin, _super);\r\n    function EndJourneyPlugin() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.listeners = [new DimensionProtectionListener_1.DimensionProtectionListener()];\r\n        return _this;\r\n    }\r\n    EndJourneyPlugin.prototype.init = function () { };\r\n    return EndJourneyPlugin;\r\n}(Plugin_1.Plugin));\r\nexports.EndJourneyPlugin = EndJourneyPlugin;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/end-journey/index.ts?");

/***/ }),

/***/ "./kubejs/server/end-journey/listener/DimensionProtectionListener.ts":
/*!***************************************************************************!*\
  !*** ./kubejs/server/end-journey/listener/DimensionProtectionListener.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.DimensionProtectionListener = void 0;\r\nvar EventListener_1 = __webpack_require__(/*! ../../../core/EventListener */ \"./kubejs/core/EventListener.ts\");\r\nvar util_1 = __webpack_require__(/*! ../../util */ \"./kubejs/server/util/index.ts\");\r\nvar DimensionProtectionListener = /** @class */ (function (_super) {\r\n    __extends(DimensionProtectionListener, _super);\r\n    function DimensionProtectionListener() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    DimensionProtectionListener.prototype.register = function () {\r\n        var _this = this;\r\n        onEvent('player.tick', function (_a) {\r\n            var player = _a.player, minecraftPlayer = _a.minecraftPlayer;\r\n            var dimensionId = (0, util_1.getPlayerDimensionId)(minecraftPlayer);\r\n            if (!_this.isPlayerAllowed(player, dimensionId) && player.isAlive()) {\r\n                player.kill();\r\n                _this.emitProtectionMessage(player);\r\n                return;\r\n            }\r\n        });\r\n    };\r\n    DimensionProtectionListener.prototype.emitProtectionMessage = function (player) {\r\n        var message = Component.join(Component.string(''), [\r\n            Component.string('Hey '),\r\n            Component.string(player.profile.name).darkGreen(),\r\n            Component.string('! Please follow the '),\r\n            Component.string('End Journey').darkPurple(),\r\n            Component.string(' quests. lol'),\r\n        ]);\r\n        player.server.tell(message);\r\n    };\r\n    DimensionProtectionListener.prototype.isPlayerAllowed = function (player, dimensionId) {\r\n        switch (true) {\r\n            case dimensionId === 'minecraft:the_nether':\r\n                return player.tags.contains('OverworldCompleted');\r\n            case dimensionId === 'minecraft:the_end':\r\n                return player.tags.contains('NetherCompleted');\r\n            case dimensionId.includes('the_vault'):\r\n                return player.tags.contains('EndCompleted');\r\n            default:\r\n                return true;\r\n        }\r\n    };\r\n    return DimensionProtectionListener;\r\n}(EventListener_1.EventListener));\r\nexports.DimensionProtectionListener = DimensionProtectionListener;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/end-journey/listener/DimensionProtectionListener.ts?");

/***/ }),

/***/ "./kubejs/server/index.ts":
/*!********************************!*\
  !*** ./kubejs/server/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar plugins_1 = __webpack_require__(/*! ./plugins */ \"./kubejs/server/plugins.ts\");\r\nconsole.log('Starting SomeServer...');\r\nplugins_1.plugins.forEach(function (plugin) {\r\n    plugin.listeners.forEach(function (listener) { return listener.register(); });\r\n    plugin.init();\r\n});\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/index.ts?");

/***/ }),

/***/ "./kubejs/server/login-particles/index.ts":
/*!************************************************!*\
  !*** ./kubejs/server/login-particles/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.LoginParticlesPlugin = void 0;\r\nvar Plugin_1 = __webpack_require__(/*! ../../core/Plugin */ \"./kubejs/core/Plugin.ts\");\r\nvar SpawnParticleListener_1 = __webpack_require__(/*! ./listener/SpawnParticleListener */ \"./kubejs/server/login-particles/listener/SpawnParticleListener.ts\");\r\nvar LoginParticlesPlugin = /** @class */ (function (_super) {\r\n    __extends(LoginParticlesPlugin, _super);\r\n    function LoginParticlesPlugin() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.listeners = [new SpawnParticleListener_1.SpawnParticleListener()];\r\n        return _this;\r\n    }\r\n    LoginParticlesPlugin.prototype.init = function () { };\r\n    return LoginParticlesPlugin;\r\n}(Plugin_1.Plugin));\r\nexports.LoginParticlesPlugin = LoginParticlesPlugin;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/login-particles/index.ts?");

/***/ }),

/***/ "./kubejs/server/login-particles/listener/SpawnParticleListener.ts":
/*!*************************************************************************!*\
  !*** ./kubejs/server/login-particles/listener/SpawnParticleListener.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.SpawnParticleListener = void 0;\r\nvar EventListener_1 = __webpack_require__(/*! ../../../core/EventListener */ \"./kubejs/core/EventListener.ts\");\r\nvar util_1 = __webpack_require__(/*! ../../util */ \"./kubejs/server/util/index.ts\");\r\nvar SpawnParticleListener = /** @class */ (function (_super) {\r\n    __extends(SpawnParticleListener, _super);\r\n    function SpawnParticleListener() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    SpawnParticleListener.prototype.register = function () {\r\n        onEvent('player.logged_in', function (_a) {\r\n            var player = _a.player;\r\n            util_1.particle.totemOfUndying(player);\r\n        });\r\n        onEvent('player.logged_out', function (_a) {\r\n            var player = _a.player;\r\n            util_1.particle.totemOfUndying(player);\r\n        });\r\n    };\r\n    return SpawnParticleListener;\r\n}(EventListener_1.EventListener));\r\nexports.SpawnParticleListener = SpawnParticleListener;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/login-particles/listener/SpawnParticleListener.ts?");

/***/ }),

/***/ "./kubejs/server/plugins.ts":
/*!**********************************!*\
  !*** ./kubejs/server/plugins.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.plugins = void 0;\r\nvar banner_claim_1 = __webpack_require__(/*! ./banner-claim */ \"./kubejs/server/banner-claim/index.ts\");\r\nvar discord_chat_1 = __webpack_require__(/*! ./discord-chat */ \"./kubejs/server/discord-chat/index.ts\");\r\nvar end_journey_1 = __webpack_require__(/*! ./end-journey */ \"./kubejs/server/end-journey/index.ts\");\r\nvar login_particles_1 = __webpack_require__(/*! ./login-particles */ \"./kubejs/server/login-particles/index.ts\");\r\nvar some_vault_1 = __webpack_require__(/*! ./some-vault */ \"./kubejs/server/some-vault/index.ts\");\r\nexports.plugins = [\r\n    //\r\n    new banner_claim_1.BannerClaimPlugin(),\r\n    new end_journey_1.EndJourneyPlugin(),\r\n    new some_vault_1.SomeVaultPlugin(),\r\n    new login_particles_1.LoginParticlesPlugin(),\r\n    new discord_chat_1.DiscordChatPlugin(),\r\n];\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/plugins.ts?");

/***/ }),

/***/ "./kubejs/server/some-vault/command/SomeVaultCommand.ts":
/*!**************************************************************!*\
  !*** ./kubejs/server/some-vault/command/SomeVaultCommand.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.SomeVaultCommand = void 0;\r\nvar Command_1 = __webpack_require__(/*! ../../../core/Command */ \"./kubejs/core/Command.ts\");\r\nvar Banishment_1 = __webpack_require__(/*! ../lib/Banishment */ \"./kubejs/server/some-vault/lib/Banishment.ts\");\r\nvar arg = function (Arguments) { return ({\r\n    playerSource: function (ctx) { return ctx.source.getPlayerOrException().asKJS(); },\r\n    player: function (ctx, name) {\r\n        return Arguments.PLAYER.getResult(ctx, name).asKJS();\r\n    },\r\n}); };\r\nvar SomeVaultCommand = /** @class */ (function (_super) {\r\n    __extends(SomeVaultCommand, _super);\r\n    function SomeVaultCommand() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    SomeVaultCommand.prototype.register = function (Commands, Arguments, event) {\r\n        return Commands.literal('some_vault')\r\n            .requires(function (source) { return source.hasPermission(2); })\r\n            .then(this.registerUnban(Commands, Arguments, event));\r\n    };\r\n    SomeVaultCommand.prototype.registerUnban = function (Commands, Arguments, event) {\r\n        var argPlayer = Commands.argument('player', Arguments.PLAYER.create(event)).executes(function (ctx) {\r\n            var caller = arg(Arguments).playerSource(ctx);\r\n            var player = arg(Arguments).player(ctx, 'player');\r\n            var banishment = new Banishment_1.Banishment(player);\r\n            if (banishment.isBanned()) {\r\n                banishment.unban();\r\n                return 1;\r\n            }\r\n            var message = Component.join(Component.string(' '), [\r\n                Component.string(caller.profile.name).green(),\r\n                Component.string('is not vault-banned'),\r\n            ]);\r\n            caller.tell(message);\r\n            return 0;\r\n        });\r\n        return Commands.literal('unban').then(argPlayer);\r\n    };\r\n    return SomeVaultCommand;\r\n}(Command_1.Command));\r\nexports.SomeVaultCommand = SomeVaultCommand;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/some-vault/command/SomeVaultCommand.ts?");

/***/ }),

/***/ "./kubejs/server/some-vault/config.ts":
/*!********************************************!*\
  !*** ./kubejs/server/some-vault/config.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.banSeconds = exports.isBanDimenstion = void 0;\r\nvar isBanDimenstion = function (id) {\r\n    return id.includes('the_vault');\r\n};\r\nexports.isBanDimenstion = isBanDimenstion;\r\nvar banSeconds = function (level) {\r\n    var minute = 60;\r\n    var hour = 60 * minute;\r\n    var banMap = {\r\n        0: 15 * minute,\r\n        1: 30 * minute,\r\n        2: 1 * hour,\r\n        3: 2 * hour,\r\n        4: 4 * hour,\r\n        5: 8 * hour,\r\n        6: 12 * hour,\r\n        7: 16 * hour,\r\n        8: 20 * hour,\r\n        9: 24 * hour,\r\n    };\r\n    return banMap[level] || banMap[9];\r\n};\r\nexports.banSeconds = banSeconds;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/some-vault/config.ts?");

/***/ }),

/***/ "./kubejs/server/some-vault/index.ts":
/*!*******************************************!*\
  !*** ./kubejs/server/some-vault/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.SomeVaultPlugin = void 0;\r\nvar Plugin_1 = __webpack_require__(/*! ../../core/Plugin */ \"./kubejs/core/Plugin.ts\");\r\nvar SomeVaultCommand_1 = __webpack_require__(/*! ./command/SomeVaultCommand */ \"./kubejs/server/some-vault/command/SomeVaultCommand.ts\");\r\nvar RemoveRecipeListener_1 = __webpack_require__(/*! ./listener/recipe/RemoveRecipeListener */ \"./kubejs/server/some-vault/listener/recipe/RemoveRecipeListener.ts\");\r\nvar SomeVaultPlugin = /** @class */ (function (_super) {\r\n    __extends(SomeVaultPlugin, _super);\r\n    function SomeVaultPlugin() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.listeners = [\r\n            // new BanishOnDeathListener(),\r\n            // new LoginCheckBanishmentListener(),\r\n            new RemoveRecipeListener_1.RemoveRecipeListener(),\r\n        ];\r\n        _this.commands = [new SomeVaultCommand_1.SomeVaultCommand()];\r\n        return _this;\r\n    }\r\n    SomeVaultPlugin.prototype.init = function () { };\r\n    return SomeVaultPlugin;\r\n}(Plugin_1.Plugin));\r\nexports.SomeVaultPlugin = SomeVaultPlugin;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/some-vault/index.ts?");

/***/ }),

/***/ "./kubejs/server/some-vault/lib/Banishment.ts":
/*!****************************************************!*\
  !*** ./kubejs/server/some-vault/lib/Banishment.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Banishment = void 0;\r\nvar util_1 = __webpack_require__(/*! ../../util */ \"./kubejs/server/util/index.ts\");\r\nvar config_1 = __webpack_require__(/*! ../config */ \"./kubejs/server/some-vault/config.ts\");\r\nvar banPath = function (playerId) {\r\n    return \"kubejs/config/vault-death-ban/ban-entry/\".concat(playerId.toString(), \".json\");\r\n};\r\nvar Banishment = /** @class */ (function () {\r\n    function Banishment(player) {\r\n        this.player = player;\r\n        this.level = 0;\r\n        this.until = new Date();\r\n        this.load();\r\n    }\r\n    Banishment.prototype.isBanned = function () {\r\n        return Date.now() < this.until.getTime();\r\n    };\r\n    Banishment.prototype.kick = function () {\r\n        var leftSeconds = (this.until.getTime() - Date.now()) / 1000;\r\n        var cmd = \"kick \".concat(this.player.profile.name, \" You're banished from this world\\n\").concat((0, util_1.secondsForHumans)(leftSeconds), \" left\");\r\n        Utils.server.runCommandSilent(cmd);\r\n    };\r\n    Banishment.prototype.ban = function (seconds) {\r\n        this.sendBanAnnoucment(seconds);\r\n        this.until = new Date(Date.now() + seconds * 1000);\r\n        this.save();\r\n        Utils.server.scheduleInTicks((0, util_1.secondsToTicks)(15), this, function (_a) {\r\n            var data = _a.data;\r\n            return data.kick();\r\n        });\r\n    };\r\n    Banishment.prototype.unban = function () {\r\n        var _this = this;\r\n        this.until = new Date();\r\n        this.save();\r\n        Utils.server.scheduleInTicks(1, null, function () {\r\n            var message = Component.join(Component.string(' '), [\r\n                Component.string('Sins of'),\r\n                Component.string(_this.player.profile.name).green(),\r\n                Component.string('has been forgiven. He shall now return.'),\r\n            ]);\r\n            Utils.server.tell(message);\r\n        });\r\n    };\r\n    Banishment.prototype.nextBan = function () {\r\n        var nextSeconds = (0, config_1.banSeconds)(++this.level);\r\n        this.ban(nextSeconds);\r\n    };\r\n    Banishment.prototype.sendBanAnnoucment = function (seconds) {\r\n        var message = Component.join(Component.string(' '), [\r\n            Component.string(this.player.profile.name).green(),\r\n            Component.string('failed in'),\r\n            Component.string('The Vault').gold(),\r\n            Component.string('and is banished from this world for'),\r\n            Component.string((0, util_1.secondsForHumans)(seconds)).red(),\r\n        ]);\r\n        Utils.server.tell(message);\r\n    };\r\n    Banishment.prototype.load = function () {\r\n        var _a = util_1.JsonIOWrapper.read(banPath(this.player.id)) || {}, level = _a.level, until = _a.until;\r\n        if (level && until) {\r\n            this.level = level || 0;\r\n            this.until = until ? new Date(until) : new Date();\r\n        }\r\n    };\r\n    Banishment.prototype.save = function () {\r\n        util_1.JsonIOWrapper.write(banPath(this.player.id), {\r\n            level: this.level,\r\n            until: this.until.toString(),\r\n        });\r\n    };\r\n    return Banishment;\r\n}());\r\nexports.Banishment = Banishment;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/some-vault/lib/Banishment.ts?");

/***/ }),

/***/ "./kubejs/server/some-vault/listener/recipe/RemoveRecipeListener.ts":
/*!**************************************************************************!*\
  !*** ./kubejs/server/some-vault/listener/recipe/RemoveRecipeListener.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.RemoveRecipeListener = void 0;\r\nvar EventListener_1 = __webpack_require__(/*! ../../../../core/EventListener */ \"./kubejs/core/EventListener.ts\");\r\nvar RemoveRecipeListener = /** @class */ (function (_super) {\r\n    __extends(RemoveRecipeListener, _super);\r\n    function RemoveRecipeListener() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    RemoveRecipeListener.prototype.register = function () {\r\n        onEvent('recipes', function (event) {\r\n            event.remove({ id: 'the_vault:vault_altar' });\r\n        });\r\n    };\r\n    return RemoveRecipeListener;\r\n}(EventListener_1.EventListener));\r\nexports.RemoveRecipeListener = RemoveRecipeListener;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/some-vault/listener/recipe/RemoveRecipeListener.ts?");

/***/ }),

/***/ "./kubejs/server/util/chunkPos.ts":
/*!****************************************!*\
  !*** ./kubejs/server/util/chunkPos.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.chunkPos = void 0;\r\nvar chunkPos = function (pos) {\r\n    var x = Math.floor(pos.x / 16);\r\n    var z = Math.floor(pos.z / 16);\r\n    var id = \"chunk_\".concat(x, \"_\").concat(z);\r\n    return { x: x, z: z, id: id };\r\n};\r\nexports.chunkPos = chunkPos;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/util/chunkPos.ts?");

/***/ }),

/***/ "./kubejs/server/util/comparePos.ts":
/*!******************************************!*\
  !*** ./kubejs/server/util/comparePos.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.comparePos = void 0;\r\nvar comparePos = function (pos1, pos2) {\r\n    return !!pos1 && !!pos2 && pos1.x === pos2.x && pos1.y === pos2.y && pos1.z === pos2.z;\r\n};\r\nexports.comparePos = comparePos;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/util/comparePos.ts?");

/***/ }),

/***/ "./kubejs/server/util/effect.ts":
/*!**************************************!*\
  !*** ./kubejs/server/util/effect.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.effect = void 0;\r\nexports.effect = {\r\n    give: function (selector, effectName, seconds, amplifier) {\r\n        if (seconds === void 0) { seconds = 1; }\r\n        if (amplifier === void 0) { amplifier = 1; }\r\n        Utils.server.runCommandSilent(\"effect give \".concat(selector, \" \").concat(effectName, \" \").concat(seconds, \" \").concat(amplifier));\r\n    },\r\n    instantDamage: function (selector, seconds, amplifier) {\r\n        if (seconds === void 0) { seconds = 1; }\r\n        if (amplifier === void 0) { amplifier = 1; }\r\n        return exports.effect.give(selector, 'minecraft:instant_damage', seconds, amplifier);\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/util/effect.ts?");

/***/ }),

/***/ "./kubejs/server/util/getPlayerDimensionId.ts":
/*!****************************************************!*\
  !*** ./kubejs/server/util/getPlayerDimensionId.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getPlayerDimensionId = void 0;\r\nvar getPlayerDimensionId = function (minecraftPlayer) {\r\n    return minecraftPlayer.level.dimension().location().toString();\r\n};\r\nexports.getPlayerDimensionId = getPlayerDimensionId;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/util/getPlayerDimensionId.ts?");

/***/ }),

/***/ "./kubejs/server/util/index.ts":
/*!*************************************!*\
  !*** ./kubejs/server/util/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n__exportStar(__webpack_require__(/*! ./chunkPos */ \"./kubejs/server/util/chunkPos.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./comparePos */ \"./kubejs/server/util/comparePos.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./effect */ \"./kubejs/server/util/effect.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./getPlayerDimensionId */ \"./kubejs/server/util/getPlayerDimensionId.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./json-wrapper */ \"./kubejs/server/util/json-wrapper.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./particle */ \"./kubejs/server/util/particle.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./secondsForHumans */ \"./kubejs/server/util/secondsForHumans.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./secondsToTicks */ \"./kubejs/server/util/secondsToTicks.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./title */ \"./kubejs/server/util/title.ts\"), exports);\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/util/index.ts?");

/***/ }),

/***/ "./kubejs/server/util/json-wrapper.ts":
/*!********************************************!*\
  !*** ./kubejs/server/util/json-wrapper.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.JsonIOWrapper = void 0;\r\nexports.JsonIOWrapper = {\r\n    read: function (path) { return JsonIO.read(path); },\r\n    write: function (path, data) {\r\n        JsonIO.write(path, data);\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/util/json-wrapper.ts?");

/***/ }),

/***/ "./kubejs/server/util/particle.ts":
/*!****************************************!*\
  !*** ./kubejs/server/util/particle.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.particle = void 0;\r\nexports.particle = {\r\n    show: function (name, pos, speed, delta, count, type) {\r\n        if (speed === void 0) { speed = 1; }\r\n        if (delta === void 0) { delta = 1; }\r\n        if (count === void 0) { count = 100; }\r\n        if (type === void 0) { type = 'normal'; }\r\n        Utils.server.runCommandSilent(\"particle \".concat(name, \" \").concat(pos.x, \" \").concat(pos.y, \" \").concat(pos.z, \" \").concat(delta, \" \").concat(delta, \" \").concat(delta, \" \").concat(speed, \" \").concat(count, \" \").concat(type));\r\n    },\r\n    dragonBreath: function (pos) {\r\n        return exports.particle.show('minecraft:dragon_breath', pos, 0.01);\r\n    },\r\n    totemOfUndying: function (pos) {\r\n        return exports.particle.show('minecraft:totem_of_undying', pos, 0.25, 1, 1000);\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/util/particle.ts?");

/***/ }),

/***/ "./kubejs/server/util/secondsForHumans.ts":
/*!************************************************!*\
  !*** ./kubejs/server/util/secondsForHumans.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.secondsForHumans = void 0;\r\n/**\r\n * Translates seconds into human readable format of seconds, minutes, hours, days, and years\r\n */\r\nfunction secondsForHumans(seconds) {\r\n    var minute = 60;\r\n    var hour = 60 * minute;\r\n    var day = 24 * hour;\r\n    var year = 365 * day;\r\n    var floorCeil = function (value) { return (value >= 0.5 ? 'ceil' : 'floor'); };\r\n    var inMinutes = function (seconds) { return Math[floorCeil(seconds / 60)](seconds / minute); };\r\n    var inHours = function (seconds) {\r\n        return Math[floorCeil(inMinutes(seconds) / 60)](inMinutes(seconds) / 60);\r\n    };\r\n    var inDays = function (seconds) {\r\n        return Math[floorCeil(inHours(seconds) / 24)](inHours(seconds) / 24);\r\n    };\r\n    var inYears = function (seconds) {\r\n        return Math[floorCeil(inDays(seconds) / 365)](inDays(seconds) / 365);\r\n    };\r\n    switch (true) {\r\n        case seconds < 60:\r\n            return \"\".concat(seconds, \" seconds\");\r\n        case seconds < hour:\r\n            return \"\".concat(inMinutes(seconds), \" minutes\");\r\n        case seconds < day:\r\n            return \"\".concat(inHours(seconds), \" hours\");\r\n        case seconds < year:\r\n            return \"\".concat(inDays(seconds), \" days\");\r\n        default:\r\n            return \"\".concat(inYears(seconds), \" years\");\r\n    }\r\n}\r\nexports.secondsForHumans = secondsForHumans;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/util/secondsForHumans.ts?");

/***/ }),

/***/ "./kubejs/server/util/secondsToTicks.ts":
/*!**********************************************!*\
  !*** ./kubejs/server/util/secondsToTicks.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.secondsToTicks = void 0;\r\nvar secondsToTicks = function (ticks) { return ticks * 20; };\r\nexports.secondsToTicks = secondsToTicks;\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/util/secondsToTicks.ts?");

/***/ }),

/***/ "./kubejs/server/util/title.ts":
/*!*************************************!*\
  !*** ./kubejs/server/util/title.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.title = void 0;\r\nexports.title = {\r\n    show: function (selector, type, text, color, bold, italic) {\r\n        if (color === void 0) { color = 'white'; }\r\n        if (bold === void 0) { bold = false; }\r\n        if (italic === void 0) { italic = false; }\r\n        Utils.server.runCommandSilent(\"title \".concat(selector, \" \").concat(type, \" \").concat(JSON.stringify({\r\n            text: text,\r\n            bold: bold,\r\n            italic: italic,\r\n            color: color,\r\n        })));\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://kubejs-dev/./kubejs/server/util/title.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./kubejs/server/index.ts");
/******/ 	
/******/ })()
;