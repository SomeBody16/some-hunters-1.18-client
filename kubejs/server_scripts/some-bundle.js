/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./kubejs/core/Command.ts":
/*!********************************!*\
  !*** ./kubejs/core/Command.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Command = void 0;
var Command = /** @class */ (function () {
    function Command() {
        var _this = this;
        onEvent('command.registry', function (event) {
            var command = _this.register(event.commands, event.arguments, event);
            event.register(command);
        });
    }
    return Command;
}());
exports.Command = Command;


/***/ }),

/***/ "./kubejs/core/EventListener.ts":
/*!**************************************!*\
  !*** ./kubejs/core/EventListener.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventListener = void 0;
var EventListener = /** @class */ (function () {
    function EventListener() {
    }
    return EventListener;
}());
exports.EventListener = EventListener;


/***/ }),

/***/ "./kubejs/core/Plugin.ts":
/*!*******************************!*\
  !*** ./kubejs/core/Plugin.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Plugin = void 0;
var Plugin = /** @class */ (function () {
    function Plugin() {
        this.listeners = [];
        this.commands = [];
    }
    return Plugin;
}());
exports.Plugin = Plugin;


/***/ }),

/***/ "./kubejs/core/event-filter/playerFilter.ts":
/*!**************************************************!*\
  !*** ./kubejs/core/event-filter/playerFilter.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.playerFilter = void 0;
var playerFilter = function (callback) {
    return function (event) {
        var _a;
        if ((_a = event === null || event === void 0 ? void 0 : event.entity) === null || _a === void 0 ? void 0 : _a.isPlayer()) {
            callback(event, event.entity.player);
        }
    };
};
exports.playerFilter = playerFilter;


/***/ }),

/***/ "./kubejs/server/banner-claim/index.ts":
/*!*********************************************!*\
  !*** ./kubejs/server/banner-claim/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BannerClaimPlugin = void 0;
var Plugin_1 = __webpack_require__(/*! ../../core/Plugin */ "./kubejs/core/Plugin.ts");
var PatternRemoveListener_1 = __webpack_require__(/*! ./listener/PatternRemoveListener */ "./kubejs/server/banner-claim/listener/PatternRemoveListener.ts");
var PatternSaveListener_1 = __webpack_require__(/*! ./listener/PatternSaveListener */ "./kubejs/server/banner-claim/listener/PatternSaveListener.ts");
var ProtectionListener_1 = __webpack_require__(/*! ./listener/ProtectionListener */ "./kubejs/server/banner-claim/listener/ProtectionListener.ts");
var BannerClaimPlugin = /** @class */ (function (_super) {
    __extends(BannerClaimPlugin, _super);
    function BannerClaimPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listeners = [new PatternSaveListener_1.PatternSaveListener(), new PatternRemoveListener_1.PatternRemoveListener(), new ProtectionListener_1.ProtectionListener()];
        return _this;
    }
    BannerClaimPlugin.prototype.init = function () { };
    return BannerClaimPlugin;
}(Plugin_1.Plugin));
exports.BannerClaimPlugin = BannerClaimPlugin;


/***/ }),

/***/ "./kubejs/server/banner-claim/lib/PlayerBanner.ts":
/*!********************************************************!*\
  !*** ./kubejs/server/banner-claim/lib/PlayerBanner.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerBanner = void 0;
var json_wrapper_1 = __webpack_require__(/*! ../../util/json-wrapper */ "./kubejs/server/util/json-wrapper.ts");
var PlayerBanner = /** @class */ (function () {
    function PlayerBanner(player, patternPath) {
        if (patternPath === void 0) { patternPath = "kubejs/config/banner-claim/player/".concat(player.id, ".json"); }
        var _a;
        this.player = player;
        this.patternPath = patternPath;
        this.pattern = (_a = json_wrapper_1.JsonIOWrapper.read(patternPath)) === null || _a === void 0 ? void 0 : _a.pattern;
    }
    PlayerBanner.prototype.exists = function () {
        return !!this.pattern;
    };
    PlayerBanner.prototype.compare = function (blockPattern) {
        return this.pattern === blockPattern;
    };
    PlayerBanner.prototype.save = function (pattern) {
        json_wrapper_1.JsonIOWrapper.write(this.patternPath, { pattern: pattern });
    };
    return PlayerBanner;
}());
exports.PlayerBanner = PlayerBanner;


/***/ }),

/***/ "./kubejs/server/banner-claim/lib/PlayerClaim.ts":
/*!*******************************************************!*\
  !*** ./kubejs/server/banner-claim/lib/PlayerClaim.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerClaim = void 0;
var util_1 = __webpack_require__(/*! ../../util */ "./kubejs/server/util/index.ts");
var json_wrapper_1 = __webpack_require__(/*! ../../util/json-wrapper */ "./kubejs/server/util/json-wrapper.ts");
var PlayerClaim = /** @class */ (function () {
    function PlayerClaim(blockPos) {
        var _a;
        var id = (0, util_1.chunkPos)(blockPos).id;
        this.claimPath = "kubejs/config/banner-claim/chunk/".concat(id, ".json");
        this.claim = (_a = json_wrapper_1.JsonIOWrapper.read(this.claimPath)) === null || _a === void 0 ? void 0 : _a.claim;
    }
    PlayerClaim.prototype.exists = function () {
        return !!this.claim;
    };
    PlayerClaim.prototype.save = function (player, _a) {
        var x = _a.x, y = _a.y, z = _a.z;
        var claim = {
            playerId: player.id.toString(),
            bannerPos: { x: x, y: y, z: z },
        };
        json_wrapper_1.JsonIOWrapper.write(this.claimPath, { claim: claim });
    };
    PlayerClaim.prototype.havePermissions = function (otherPlayer) {
        var _a;
        return (!this.exists() ||
            ((_a = this.claim) === null || _a === void 0 ? void 0 : _a.playerId) === otherPlayer.id.toString() ||
            otherPlayer.isCreativeMode());
    };
    PlayerClaim.prototype.remove = function (bannerPos) {
        var _a;
        if ((0, util_1.comparePos)(bannerPos, (_a = this.claim) === null || _a === void 0 ? void 0 : _a.bannerPos)) {
            json_wrapper_1.JsonIOWrapper.write(this.claimPath, {});
            return true;
        }
        return false;
    };
    return PlayerClaim;
}());
exports.PlayerClaim = PlayerClaim;


/***/ }),

/***/ "./kubejs/server/banner-claim/lib/getBannerPattern.ts":
/*!************************************************************!*\
  !*** ./kubejs/server/banner-claim/lib/getBannerPattern.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getBlockBannerPattern = void 0;
var getBlockBannerPattern = function (block) {
    var nbtString = block.item.nbtString;
    if (block.hasTag('minecraft:banners') && nbtString.includes('Patterns')) {
        return nbtString;
    }
    return undefined;
};
exports.getBlockBannerPattern = getBlockBannerPattern;


/***/ }),

/***/ "./kubejs/server/banner-claim/listener/PatternRemoveListener.ts":
/*!**********************************************************************!*\
  !*** ./kubejs/server/banner-claim/listener/PatternRemoveListener.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PatternRemoveListener = void 0;
var playerFilter_1 = __webpack_require__(/*! ../../../core/event-filter/playerFilter */ "./kubejs/core/event-filter/playerFilter.ts");
var EventListener_1 = __webpack_require__(/*! ../../../core/EventListener */ "./kubejs/core/EventListener.ts");
var util_1 = __webpack_require__(/*! ../../util */ "./kubejs/server/util/index.ts");
var particle_1 = __webpack_require__(/*! ../../util/particle */ "./kubejs/server/util/particle.ts");
var getBannerPattern_1 = __webpack_require__(/*! ../lib/getBannerPattern */ "./kubejs/server/banner-claim/lib/getBannerPattern.ts");
var PlayerClaim_1 = __webpack_require__(/*! ../lib/PlayerClaim */ "./kubejs/server/banner-claim/lib/PlayerClaim.ts");
var PatternRemoveListener = /** @class */ (function (_super) {
    __extends(PatternRemoveListener, _super);
    function PatternRemoveListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PatternRemoveListener.prototype.register = function () {
        onEvent('block.break', (0, playerFilter_1.playerFilter)(function (event, player) {
            var blockPattern = (0, getBannerPattern_1.getBlockBannerPattern)(event.block);
            if (!blockPattern) {
                return; // Not a banner with pattern
            }
            var claim = new PlayerClaim_1.PlayerClaim(event.block.pos);
            if (!claim.exists() || !claim.havePermissions(player)) {
                return;
            }
            if (claim.remove(event.block.pos)) {
                util_1.title.show(player.profile.name, 'actionbar', 'Claim removed', 'red');
                player.playSound('block.amethyst_cluster.break');
                particle_1.particle.dragonBreath(event.block.pos);
            }
        }));
    };
    return PatternRemoveListener;
}(EventListener_1.EventListener));
exports.PatternRemoveListener = PatternRemoveListener;


/***/ }),

/***/ "./kubejs/server/banner-claim/listener/PatternSaveListener.ts":
/*!********************************************************************!*\
  !*** ./kubejs/server/banner-claim/listener/PatternSaveListener.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PatternSaveListener = void 0;
var playerFilter_1 = __webpack_require__(/*! ../../../core/event-filter/playerFilter */ "./kubejs/core/event-filter/playerFilter.ts");
var EventListener_1 = __webpack_require__(/*! ../../../core/EventListener */ "./kubejs/core/EventListener.ts");
var util_1 = __webpack_require__(/*! ../../util */ "./kubejs/server/util/index.ts");
var particle_1 = __webpack_require__(/*! ../../util/particle */ "./kubejs/server/util/particle.ts");
var getBannerPattern_1 = __webpack_require__(/*! ../lib/getBannerPattern */ "./kubejs/server/banner-claim/lib/getBannerPattern.ts");
var PlayerBanner_1 = __webpack_require__(/*! ../lib/PlayerBanner */ "./kubejs/server/banner-claim/lib/PlayerBanner.ts");
var PlayerClaim_1 = __webpack_require__(/*! ../lib/PlayerClaim */ "./kubejs/server/banner-claim/lib/PlayerClaim.ts");
var PatternSaveListener = /** @class */ (function (_super) {
    __extends(PatternSaveListener, _super);
    function PatternSaveListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PatternSaveListener.prototype.register = function () {
        onEvent('block.right_click', (0, playerFilter_1.playerFilter)(function (event, player) {
            var blockPattern = (0, getBannerPattern_1.getBlockBannerPattern)(event.block);
            if (!blockPattern) {
                return; // Not a banner with pattern
            }
            var playerBanner = new PlayerBanner_1.PlayerBanner(player);
            if (playerBanner.exists() && !playerBanner.compare(blockPattern)) {
                util_1.title.show(player.profile.name, 'actionbar', 'This is not your pattern!', 'red');
                return;
            }
            if (!playerBanner.exists()) {
                player.tell(Component.string('Saved as your banner pattern'));
                playerBanner.save(blockPattern);
            }
            var claim = new PlayerClaim_1.PlayerClaim(event.block.pos);
            if (claim.exists()) {
                return;
            }
            claim.save(player, event.block.pos);
            util_1.title.show(player.profile.name, 'actionbar', 'Chunk claimed', 'green');
            player.playSound('block.amethyst_cluster.place');
            particle_1.particle.dragonBreath(event.block.pos);
        }));
    };
    return PatternSaveListener;
}(EventListener_1.EventListener));
exports.PatternSaveListener = PatternSaveListener;


/***/ }),

/***/ "./kubejs/server/banner-claim/listener/ProtectionListener.ts":
/*!*******************************************************************!*\
  !*** ./kubejs/server/banner-claim/listener/ProtectionListener.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProtectionListener = void 0;
var playerFilter_1 = __webpack_require__(/*! ../../../core/event-filter/playerFilter */ "./kubejs/core/event-filter/playerFilter.ts");
var EventListener_1 = __webpack_require__(/*! ../../../core/EventListener */ "./kubejs/core/EventListener.ts");
var util_1 = __webpack_require__(/*! ../../util */ "./kubejs/server/util/index.ts");
var PlayerClaim_1 = __webpack_require__(/*! ../lib/PlayerClaim */ "./kubejs/server/banner-claim/lib/PlayerClaim.ts");
var ProtectionListener = /** @class */ (function (_super) {
    __extends(ProtectionListener, _super);
    function ProtectionListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProtectionListener.prototype.register = function () {
        var _this = this;
        onEvent('block.right_click', (0, playerFilter_1.playerFilter)(function (event, player) {
            var claim = new PlayerClaim_1.PlayerClaim(event.block);
            if (!claim.havePermissions(player) && event.block.hasTag('minecraft:buttons')) {
                _this.punish(player);
                util_1.particle.dragonBreath(event.block);
                event.cancel();
                return;
            }
        }));
        onEvent('block.place', (0, playerFilter_1.playerFilter)(function (event, player) {
            var claim = new PlayerClaim_1.PlayerClaim(event.block);
            if (claim.havePermissions(player)) {
                return;
            }
            _this.punish(player);
            util_1.particle.dragonBreath(event.block);
            event.cancel();
        }));
        onEvent('block.break', (0, playerFilter_1.playerFilter)(function (event, player) {
            var claim = new PlayerClaim_1.PlayerClaim(event.block);
            if (claim.havePermissions(player)) {
                return;
            }
            _this.punish(player);
            util_1.particle.dragonBreath(event.block);
            event.cancel();
        }));
        onEvent('level.explosion.pre', function (event) {
            if (!event.exploder.isPlayer()) {
                return;
            }
            var player = event.exploder;
            var claim = new PlayerClaim_1.PlayerClaim(event);
            if (claim.havePermissions(player)) {
                return;
            }
            _this.punish(player);
            util_1.particle.dragonBreath(event);
            event.cancel();
        });
    };
    ProtectionListener.prototype.punish = function (player) {
        util_1.effect.instantDamage(player.profile.name);
    };
    return ProtectionListener;
}(EventListener_1.EventListener));
exports.ProtectionListener = ProtectionListener;


/***/ }),

/***/ "./kubejs/server/end-journey/index.ts":
/*!********************************************!*\
  !*** ./kubejs/server/end-journey/index.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EndJourneyPlugin = void 0;
var Plugin_1 = __webpack_require__(/*! ../../core/Plugin */ "./kubejs/core/Plugin.ts");
var DimensionProtectionListener_1 = __webpack_require__(/*! ./listener/DimensionProtectionListener */ "./kubejs/server/end-journey/listener/DimensionProtectionListener.ts");
var EndJourneyPlugin = /** @class */ (function (_super) {
    __extends(EndJourneyPlugin, _super);
    function EndJourneyPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listeners = [new DimensionProtectionListener_1.DimensionProtectionListener()];
        return _this;
    }
    EndJourneyPlugin.prototype.init = function () { };
    return EndJourneyPlugin;
}(Plugin_1.Plugin));
exports.EndJourneyPlugin = EndJourneyPlugin;


/***/ }),

/***/ "./kubejs/server/end-journey/listener/DimensionProtectionListener.ts":
/*!***************************************************************************!*\
  !*** ./kubejs/server/end-journey/listener/DimensionProtectionListener.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DimensionProtectionListener = void 0;
var EventListener_1 = __webpack_require__(/*! ../../../core/EventListener */ "./kubejs/core/EventListener.ts");
var util_1 = __webpack_require__(/*! ../../util */ "./kubejs/server/util/index.ts");
var protections_1 = __webpack_require__(/*! ../protections */ "./kubejs/server/end-journey/protections.ts");
var DimensionProtectionListener = /** @class */ (function (_super) {
    __extends(DimensionProtectionListener, _super);
    function DimensionProtectionListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DimensionProtectionListener.prototype.register = function () {
        var _this = this;
        onEvent('player.tick', function (_a) {
            var player = _a.player, minecraftPlayer = _a.minecraftPlayer;
            var dimensionId = (0, util_1.getPlayerDimensionId)(minecraftPlayer);
            var requiredTag = protections_1.protections[dimensionId];
            if (requiredTag && !player.tags.contains(requiredTag) && player.isAlive()) {
                player.kill();
                _this.emitProtectionMessage(player);
                return;
            }
        });
    };
    DimensionProtectionListener.prototype.emitProtectionMessage = function (player) {
        var message = Component.join(Component.string(''), [
            Component.string('Hey '),
            Component.string(player.profile.name).darkGreen(),
            Component.string('! Please follow the '),
            Component.string('End Journey').darkPurple(),
            Component.string(' quests. lol'),
        ]);
        player.server.tell(message);
    };
    return DimensionProtectionListener;
}(EventListener_1.EventListener));
exports.DimensionProtectionListener = DimensionProtectionListener;


/***/ }),

/***/ "./kubejs/server/end-journey/protections.ts":
/*!**************************************************!*\
  !*** ./kubejs/server/end-journey/protections.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.protections = void 0;
exports.protections = {
    'minecraft:the_nether': 'OverworldCompleted',
    'minecraft:the_end': 'NetherCompleted',
    '???the_vault???': 'EndCompleted',
};


/***/ }),

/***/ "./kubejs/server/login-particles/index.ts":
/*!************************************************!*\
  !*** ./kubejs/server/login-particles/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginParticlesPlugin = void 0;
var Plugin_1 = __webpack_require__(/*! ../../core/Plugin */ "./kubejs/core/Plugin.ts");
var SpawnParticleListener_1 = __webpack_require__(/*! ./listener/SpawnParticleListener */ "./kubejs/server/login-particles/listener/SpawnParticleListener.ts");
var LoginParticlesPlugin = /** @class */ (function (_super) {
    __extends(LoginParticlesPlugin, _super);
    function LoginParticlesPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listeners = [new SpawnParticleListener_1.SpawnParticleListener()];
        return _this;
    }
    LoginParticlesPlugin.prototype.init = function () { };
    return LoginParticlesPlugin;
}(Plugin_1.Plugin));
exports.LoginParticlesPlugin = LoginParticlesPlugin;


/***/ }),

/***/ "./kubejs/server/login-particles/listener/SpawnParticleListener.ts":
/*!*************************************************************************!*\
  !*** ./kubejs/server/login-particles/listener/SpawnParticleListener.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpawnParticleListener = void 0;
var EventListener_1 = __webpack_require__(/*! ../../../core/EventListener */ "./kubejs/core/EventListener.ts");
var util_1 = __webpack_require__(/*! ../../util */ "./kubejs/server/util/index.ts");
var SpawnParticleListener = /** @class */ (function (_super) {
    __extends(SpawnParticleListener, _super);
    function SpawnParticleListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpawnParticleListener.prototype.register = function () {
        onEvent('player.logged_in', function (_a) {
            var player = _a.player;
            util_1.particle.totemOfUndying(player);
        });
        onEvent('player.logged_out', function (_a) {
            var player = _a.player;
            util_1.particle.totemOfUndying(player);
        });
    };
    return SpawnParticleListener;
}(EventListener_1.EventListener));
exports.SpawnParticleListener = SpawnParticleListener;


/***/ }),

/***/ "./kubejs/server/plugins.ts":
/*!**********************************!*\
  !*** ./kubejs/server/plugins.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.plugins = void 0;
var banner_claim_1 = __webpack_require__(/*! ./banner-claim */ "./kubejs/server/banner-claim/index.ts");
var end_journey_1 = __webpack_require__(/*! ./end-journey */ "./kubejs/server/end-journey/index.ts");
var login_particles_1 = __webpack_require__(/*! ./login-particles */ "./kubejs/server/login-particles/index.ts");
var some_vault_1 = __webpack_require__(/*! ./some-vault */ "./kubejs/server/some-vault/index.ts");
exports.plugins = [
    //
    new banner_claim_1.BannerClaimPlugin(),
    new end_journey_1.EndJourneyPlugin(),
    new some_vault_1.SomeVaultPlugin(),
    new login_particles_1.LoginParticlesPlugin(),
];


/***/ }),

/***/ "./kubejs/server/some-vault/command/SomeVaultCommand.ts":
/*!**************************************************************!*\
  !*** ./kubejs/server/some-vault/command/SomeVaultCommand.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SomeVaultCommand = void 0;
var Command_1 = __webpack_require__(/*! ../../../core/Command */ "./kubejs/core/Command.ts");
var Banishment_1 = __webpack_require__(/*! ../lib/Banishment */ "./kubejs/server/some-vault/lib/Banishment.ts");
var arg = function (Arguments) { return ({
    playerSource: function (ctx) { return ctx.source.getPlayerOrException().asKJS(); },
    player: function (ctx, name) {
        return Arguments.PLAYER.getResult(ctx, name).asKJS();
    },
}); };
var SomeVaultCommand = /** @class */ (function (_super) {
    __extends(SomeVaultCommand, _super);
    function SomeVaultCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SomeVaultCommand.prototype.register = function (Commands, Arguments, event) {
        return Commands.literal('some_vault')
            .requires(function (source) { return source.hasPermission(2); })
            .then(this.registerUnban(Commands, Arguments, event));
    };
    SomeVaultCommand.prototype.registerUnban = function (Commands, Arguments, event) {
        var argPlayer = Commands.argument('player', Arguments.PLAYER.create(event)).executes(function (ctx) {
            var caller = arg(Arguments).playerSource(ctx);
            var player = arg(Arguments).player(ctx, 'player');
            var banishment = new Banishment_1.Banishment(player);
            if (banishment.isBanned()) {
                banishment.unban();
                return 1;
            }
            var message = Component.join(Component.string(' '), [
                Component.string(caller.profile.name).green(),
                Component.string('is not vault-banned'),
            ]);
            caller.tell(message);
            return 0;
        });
        return Commands.literal('unban').then(argPlayer);
    };
    return SomeVaultCommand;
}(Command_1.Command));
exports.SomeVaultCommand = SomeVaultCommand;


/***/ }),

/***/ "./kubejs/server/some-vault/config.ts":
/*!********************************************!*\
  !*** ./kubejs/server/some-vault/config.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.banSeconds = exports.banDimensions = void 0;
exports.banDimensions = ['???vault???'];
var banSeconds = function (level) {
    var minute = 60;
    var hour = 60 * minute;
    var banMap = {
        0: 15 * minute,
        1: 30 * minute,
        2: 1 * hour,
        3: 2 * hour,
        4: 4 * hour,
        5: 8 * hour,
        6: 12 * hour,
        7: 16 * hour,
        8: 20 * hour,
        9: 24 * hour,
    };
    return banMap[level] || banMap[9];
};
exports.banSeconds = banSeconds;


/***/ }),

/***/ "./kubejs/server/some-vault/index.ts":
/*!*******************************************!*\
  !*** ./kubejs/server/some-vault/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SomeVaultPlugin = void 0;
var Plugin_1 = __webpack_require__(/*! ../../core/Plugin */ "./kubejs/core/Plugin.ts");
var SomeVaultCommand_1 = __webpack_require__(/*! ./command/SomeVaultCommand */ "./kubejs/server/some-vault/command/SomeVaultCommand.ts");
var BanishOnDeathListener_1 = __webpack_require__(/*! ./listener/banishment/BanishOnDeathListener */ "./kubejs/server/some-vault/listener/banishment/BanishOnDeathListener.ts");
var LoginCheckBanishmentListener_1 = __webpack_require__(/*! ./listener/banishment/LoginCheckBanishmentListener */ "./kubejs/server/some-vault/listener/banishment/LoginCheckBanishmentListener.ts");
var SomeVaultPlugin = /** @class */ (function (_super) {
    __extends(SomeVaultPlugin, _super);
    function SomeVaultPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listeners = [new BanishOnDeathListener_1.BanishOnDeathListener(), new LoginCheckBanishmentListener_1.LoginCheckBanishmentListener()];
        _this.commands = [new SomeVaultCommand_1.SomeVaultCommand()];
        return _this;
    }
    SomeVaultPlugin.prototype.init = function () { };
    return SomeVaultPlugin;
}(Plugin_1.Plugin));
exports.SomeVaultPlugin = SomeVaultPlugin;


/***/ }),

/***/ "./kubejs/server/some-vault/lib/Banishment.ts":
/*!****************************************************!*\
  !*** ./kubejs/server/some-vault/lib/Banishment.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Banishment = void 0;
var util_1 = __webpack_require__(/*! ../../util */ "./kubejs/server/util/index.ts");
var config_1 = __webpack_require__(/*! ../config */ "./kubejs/server/some-vault/config.ts");
var banPath = function (playerId) {
    return "kubejs/config/vault-death-ban/ban-entry/".concat(playerId.toString(), ".json");
};
var Banishment = /** @class */ (function () {
    function Banishment(player) {
        this.player = player;
        this.level = 0;
        this.until = new Date();
        this.load();
    }
    Banishment.prototype.isBanned = function () {
        return Date.now() < this.until.getTime();
    };
    Banishment.prototype.kick = function () {
        var leftSeconds = (this.until.getTime() - Date.now()) / 1000;
        var cmd = "kick ".concat(this.player.profile.name, " You're banished from this world\n").concat((0, util_1.secondsForHumans)(leftSeconds), " left");
        Utils.server.runCommandSilent(cmd);
    };
    Banishment.prototype.ban = function (seconds) {
        this.sendBanAnnoucment(seconds);
        this.until = new Date(Date.now() + seconds * 1000);
        this.save();
        Utils.server.scheduleInTicks((0, util_1.secondsToTicks)(15), this, function (_a) {
            var data = _a.data;
            return data.kick();
        });
    };
    Banishment.prototype.unban = function () {
        var _this = this;
        this.until = new Date();
        this.save();
        Utils.server.scheduleInTicks(1, null, function () {
            var message = Component.join(Component.string(' '), [
                Component.string('Sins of'),
                Component.string(_this.player.profile.name).green(),
                Component.string('has been forgiven. He shall now return.'),
            ]);
            Utils.server.tell(message);
        });
    };
    Banishment.prototype.nextBan = function () {
        var nextSeconds = (0, config_1.banSeconds)(++this.level);
        this.ban(nextSeconds);
    };
    Banishment.prototype.sendBanAnnoucment = function (seconds) {
        var message = Component.join(Component.string(' '), [
            Component.string(this.player.profile.name).green(),
            Component.string('failed in'),
            Component.string('The Vault').gold(),
            Component.string('and is banished from this world for'),
            Component.string((0, util_1.secondsForHumans)(seconds)).red(),
        ]);
        Utils.server.tell(message);
    };
    Banishment.prototype.load = function () {
        var _a = util_1.JsonIOWrapper.read(banPath(this.player.id)) || {}, level = _a.level, until = _a.until;
        if (level && until) {
            this.level = level || 0;
            this.until = until ? new Date(until) : new Date();
        }
    };
    Banishment.prototype.save = function () {
        util_1.JsonIOWrapper.write(banPath(this.player.id), {
            level: this.level,
            until: this.until.toString(),
        });
    };
    return Banishment;
}());
exports.Banishment = Banishment;


/***/ }),

/***/ "./kubejs/server/some-vault/listener/banishment/BanishOnDeathListener.ts":
/*!*******************************************************************************!*\
  !*** ./kubejs/server/some-vault/listener/banishment/BanishOnDeathListener.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BanishOnDeathListener = void 0;
var playerFilter_1 = __webpack_require__(/*! ../../../../core/event-filter/playerFilter */ "./kubejs/core/event-filter/playerFilter.ts");
var EventListener_1 = __webpack_require__(/*! ../../../../core/EventListener */ "./kubejs/core/EventListener.ts");
var util_1 = __webpack_require__(/*! ../../../util */ "./kubejs/server/util/index.ts");
var config_1 = __webpack_require__(/*! ../../config */ "./kubejs/server/some-vault/config.ts");
var Banishment_1 = __webpack_require__(/*! ../../lib/Banishment */ "./kubejs/server/some-vault/lib/Banishment.ts");
var BanishOnDeathListener = /** @class */ (function (_super) {
    __extends(BanishOnDeathListener, _super);
    function BanishOnDeathListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BanishOnDeathListener.prototype.register = function () {
        onEvent('entity.death', (0, playerFilter_1.playerFilter)(function (_a, player) {
            var server = _a.server;
            var dimensionId = (0, util_1.getPlayerDimensionId)(player.minecraftPlayer);
            if (config_1.banDimensions.includes(dimensionId) || true) {
                server.scheduleInTicks(1, player, function (callback) {
                    var banishment = new Banishment_1.Banishment(callback.data.player);
                    banishment.nextBan();
                    return;
                });
            }
        }));
    };
    return BanishOnDeathListener;
}(EventListener_1.EventListener));
exports.BanishOnDeathListener = BanishOnDeathListener;


/***/ }),

/***/ "./kubejs/server/some-vault/listener/banishment/LoginCheckBanishmentListener.ts":
/*!**************************************************************************************!*\
  !*** ./kubejs/server/some-vault/listener/banishment/LoginCheckBanishmentListener.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginCheckBanishmentListener = void 0;
var EventListener_1 = __webpack_require__(/*! ../../../../core/EventListener */ "./kubejs/core/EventListener.ts");
var Banishment_1 = __webpack_require__(/*! ../../lib/Banishment */ "./kubejs/server/some-vault/lib/Banishment.ts");
var LoginCheckBanishmentListener = /** @class */ (function (_super) {
    __extends(LoginCheckBanishmentListener, _super);
    function LoginCheckBanishmentListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginCheckBanishmentListener.prototype.register = function () {
        onEvent('player.logged_in', function (_a) {
            var player = _a.player;
            var banEntry = new Banishment_1.Banishment(player);
            banEntry.isBanned() && banEntry.kick();
        });
    };
    return LoginCheckBanishmentListener;
}(EventListener_1.EventListener));
exports.LoginCheckBanishmentListener = LoginCheckBanishmentListener;


/***/ }),

/***/ "./kubejs/server/util/chunkPos.ts":
/*!****************************************!*\
  !*** ./kubejs/server/util/chunkPos.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.chunkPos = void 0;
var chunkPos = function (pos) {
    var x = Math.floor(pos.x / 16);
    var z = Math.floor(pos.z / 16);
    var id = "chunk_".concat(x, "_").concat(z);
    return { x: x, z: z, id: id };
};
exports.chunkPos = chunkPos;


/***/ }),

/***/ "./kubejs/server/util/comparePos.ts":
/*!******************************************!*\
  !*** ./kubejs/server/util/comparePos.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.comparePos = void 0;
var comparePos = function (pos1, pos2) {
    return !!pos1 && !!pos2 && pos1.x === pos2.x && pos1.y === pos2.y && pos1.z === pos2.z;
};
exports.comparePos = comparePos;


/***/ }),

/***/ "./kubejs/server/util/effect.ts":
/*!**************************************!*\
  !*** ./kubejs/server/util/effect.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.effect = void 0;
exports.effect = {
    give: function (selector, effectName, seconds, amplifier) {
        if (seconds === void 0) { seconds = 1; }
        if (amplifier === void 0) { amplifier = 1; }
        Utils.server.runCommandSilent("effect give ".concat(selector, " ").concat(effectName, " ").concat(seconds, " ").concat(amplifier));
    },
    instantDamage: function (selector, seconds, amplifier) {
        if (seconds === void 0) { seconds = 1; }
        if (amplifier === void 0) { amplifier = 1; }
        return exports.effect.give(selector, 'minecraft:instant_damage', seconds, amplifier);
    },
};


/***/ }),

/***/ "./kubejs/server/util/getPlayerDimensionId.ts":
/*!****************************************************!*\
  !*** ./kubejs/server/util/getPlayerDimensionId.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPlayerDimensionId = void 0;
var getPlayerDimensionId = function (minecraftPlayer) {
    return minecraftPlayer.level.dimension().location().toString();
};
exports.getPlayerDimensionId = getPlayerDimensionId;


/***/ }),

/***/ "./kubejs/server/util/index.ts":
/*!*************************************!*\
  !*** ./kubejs/server/util/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./chunkPos */ "./kubejs/server/util/chunkPos.ts"), exports);
__exportStar(__webpack_require__(/*! ./comparePos */ "./kubejs/server/util/comparePos.ts"), exports);
__exportStar(__webpack_require__(/*! ./effect */ "./kubejs/server/util/effect.ts"), exports);
__exportStar(__webpack_require__(/*! ./getPlayerDimensionId */ "./kubejs/server/util/getPlayerDimensionId.ts"), exports);
__exportStar(__webpack_require__(/*! ./json-wrapper */ "./kubejs/server/util/json-wrapper.ts"), exports);
__exportStar(__webpack_require__(/*! ./particle */ "./kubejs/server/util/particle.ts"), exports);
__exportStar(__webpack_require__(/*! ./secondsForHumans */ "./kubejs/server/util/secondsForHumans.ts"), exports);
__exportStar(__webpack_require__(/*! ./secondsToTicks */ "./kubejs/server/util/secondsToTicks.ts"), exports);
__exportStar(__webpack_require__(/*! ./title */ "./kubejs/server/util/title.ts"), exports);


/***/ }),

/***/ "./kubejs/server/util/json-wrapper.ts":
/*!********************************************!*\
  !*** ./kubejs/server/util/json-wrapper.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JsonIOWrapper = void 0;
exports.JsonIOWrapper = {
    read: function (path) { return JsonIO.read(path); },
    write: function (path, data) {
        JsonIO.write(path, data);
    },
};


/***/ }),

/***/ "./kubejs/server/util/particle.ts":
/*!****************************************!*\
  !*** ./kubejs/server/util/particle.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.particle = void 0;
exports.particle = {
    show: function (name, pos, speed, delta, count, type) {
        if (speed === void 0) { speed = 1; }
        if (delta === void 0) { delta = 1; }
        if (count === void 0) { count = 100; }
        if (type === void 0) { type = 'normal'; }
        Utils.server.runCommandSilent("particle ".concat(name, " ").concat(pos.x, " ").concat(pos.y, " ").concat(pos.z, " ").concat(delta, " ").concat(delta, " ").concat(delta, " ").concat(speed, " ").concat(count, " ").concat(type));
    },
    dragonBreath: function (pos) {
        return exports.particle.show('minecraft:dragon_breath', pos, 0.01);
    },
    totemOfUndying: function (pos) {
        return exports.particle.show('minecraft:totem_of_undying', pos, 0.25, 1, 1000);
    },
};


/***/ }),

/***/ "./kubejs/server/util/secondsForHumans.ts":
/*!************************************************!*\
  !*** ./kubejs/server/util/secondsForHumans.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.secondsForHumans = void 0;
/**
 * Translates seconds into human readable format of seconds, minutes, hours, days, and years
 */
function secondsForHumans(seconds) {
    var minute = 60;
    var hour = 60 * minute;
    var day = 24 * hour;
    var year = 365 * day;
    var floorCeil = function (value) { return (value >= 0.5 ? 'ceil' : 'floor'); };
    var inMinutes = function (seconds) { return Math[floorCeil(seconds / 60)](seconds / minute); };
    var inHours = function (seconds) {
        return Math[floorCeil(inMinutes(seconds) / 60)](inMinutes(seconds) / 60);
    };
    var inDays = function (seconds) {
        return Math[floorCeil(inHours(seconds) / 24)](inHours(seconds) / 24);
    };
    var inYears = function (seconds) {
        return Math[floorCeil(inDays(seconds) / 365)](inDays(seconds) / 365);
    };
    switch (true) {
        case seconds < 60:
            return "".concat(seconds, " seconds");
        case seconds < hour:
            return "".concat(inMinutes(seconds), " minutes");
        case seconds < day:
            return "".concat(inHours(seconds), " hours");
        case seconds < year:
            return "".concat(inDays(seconds), " days");
        default:
            return "".concat(inYears(seconds), " years");
    }
}
exports.secondsForHumans = secondsForHumans;


/***/ }),

/***/ "./kubejs/server/util/secondsToTicks.ts":
/*!**********************************************!*\
  !*** ./kubejs/server/util/secondsToTicks.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.secondsToTicks = void 0;
var secondsToTicks = function (ticks) { return ticks * 20; };
exports.secondsToTicks = secondsToTicks;


/***/ }),

/***/ "./kubejs/server/util/title.ts":
/*!*************************************!*\
  !*** ./kubejs/server/util/title.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.title = void 0;
exports.title = {
    show: function (selector, type, text, color, bold, italic) {
        if (color === void 0) { color = 'white'; }
        if (bold === void 0) { bold = false; }
        if (italic === void 0) { italic = false; }
        Utils.server.runCommandSilent("title ".concat(selector, " ").concat(type, " ").concat(JSON.stringify({
            text: text,
            bold: bold,
            italic: italic,
            color: color,
        })));
    },
};


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************************!*\
  !*** ./kubejs/server/index.ts ***!
  \********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var plugins_1 = __webpack_require__(/*! ./plugins */ "./kubejs/server/plugins.ts");
console.log('Starting SomeServer...');
plugins_1.plugins.forEach(function (plugin) {
    plugin.listeners.forEach(function (listener) { return listener.register(); });
    plugin.init();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdCQUFnQixtQkFBTyxDQUFDLDZDQUFXO0FBQ25DO0FBQ0E7QUFDQSxtREFBbUQsNkJBQTZCO0FBQ2hGO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2t1YmVqcy1kZXYvLi9rdWJlanMvY29yZS9Db21tYW5kLnRzIiwid2VicGFjazovL2t1YmVqcy1kZXYvLi9rdWJlanMvY29yZS9FdmVudExpc3RlbmVyLnRzIiwid2VicGFjazovL2t1YmVqcy1kZXYvLi9rdWJlanMvY29yZS9QbHVnaW4udHMiLCJ3ZWJwYWNrOi8va3ViZWpzLWRldi8uL2t1YmVqcy9jb3JlL2V2ZW50LWZpbHRlci9wbGF5ZXJGaWx0ZXIudHMiLCJ3ZWJwYWNrOi8va3ViZWpzLWRldi8uL2t1YmVqcy9zZXJ2ZXIvYmFubmVyLWNsYWltL2luZGV4LnRzIiwid2VicGFjazovL2t1YmVqcy1kZXYvLi9rdWJlanMvc2VydmVyL2Jhbm5lci1jbGFpbS9saWIvUGxheWVyQmFubmVyLnRzIiwid2VicGFjazovL2t1YmVqcy1kZXYvLi9rdWJlanMvc2VydmVyL2Jhbm5lci1jbGFpbS9saWIvUGxheWVyQ2xhaW0udHMiLCJ3ZWJwYWNrOi8va3ViZWpzLWRldi8uL2t1YmVqcy9zZXJ2ZXIvYmFubmVyLWNsYWltL2xpYi9nZXRCYW5uZXJQYXR0ZXJuLnRzIiwid2VicGFjazovL2t1YmVqcy1kZXYvLi9rdWJlanMvc2VydmVyL2Jhbm5lci1jbGFpbS9saXN0ZW5lci9QYXR0ZXJuUmVtb3ZlTGlzdGVuZXIudHMiLCJ3ZWJwYWNrOi8va3ViZWpzLWRldi8uL2t1YmVqcy9zZXJ2ZXIvYmFubmVyLWNsYWltL2xpc3RlbmVyL1BhdHRlcm5TYXZlTGlzdGVuZXIudHMiLCJ3ZWJwYWNrOi8va3ViZWpzLWRldi8uL2t1YmVqcy9zZXJ2ZXIvYmFubmVyLWNsYWltL2xpc3RlbmVyL1Byb3RlY3Rpb25MaXN0ZW5lci50cyIsIndlYnBhY2s6Ly9rdWJlanMtZGV2Ly4va3ViZWpzL3NlcnZlci9lbmQtam91cm5leS9pbmRleC50cyIsIndlYnBhY2s6Ly9rdWJlanMtZGV2Ly4va3ViZWpzL3NlcnZlci9lbmQtam91cm5leS9saXN0ZW5lci9EaW1lbnNpb25Qcm90ZWN0aW9uTGlzdGVuZXIudHMiLCJ3ZWJwYWNrOi8va3ViZWpzLWRldi8uL2t1YmVqcy9zZXJ2ZXIvZW5kLWpvdXJuZXkvcHJvdGVjdGlvbnMudHMiLCJ3ZWJwYWNrOi8va3ViZWpzLWRldi8uL2t1YmVqcy9zZXJ2ZXIvbG9naW4tcGFydGljbGVzL2luZGV4LnRzIiwid2VicGFjazovL2t1YmVqcy1kZXYvLi9rdWJlanMvc2VydmVyL2xvZ2luLXBhcnRpY2xlcy9saXN0ZW5lci9TcGF3blBhcnRpY2xlTGlzdGVuZXIudHMiLCJ3ZWJwYWNrOi8va3ViZWpzLWRldi8uL2t1YmVqcy9zZXJ2ZXIvcGx1Z2lucy50cyIsIndlYnBhY2s6Ly9rdWJlanMtZGV2Ly4va3ViZWpzL3NlcnZlci9zb21lLXZhdWx0L2NvbW1hbmQvU29tZVZhdWx0Q29tbWFuZC50cyIsIndlYnBhY2s6Ly9rdWJlanMtZGV2Ly4va3ViZWpzL3NlcnZlci9zb21lLXZhdWx0L2NvbmZpZy50cyIsIndlYnBhY2s6Ly9rdWJlanMtZGV2Ly4va3ViZWpzL3NlcnZlci9zb21lLXZhdWx0L2luZGV4LnRzIiwid2VicGFjazovL2t1YmVqcy1kZXYvLi9rdWJlanMvc2VydmVyL3NvbWUtdmF1bHQvbGliL0JhbmlzaG1lbnQudHMiLCJ3ZWJwYWNrOi8va3ViZWpzLWRldi8uL2t1YmVqcy9zZXJ2ZXIvc29tZS12YXVsdC9saXN0ZW5lci9iYW5pc2htZW50L0JhbmlzaE9uRGVhdGhMaXN0ZW5lci50cyIsIndlYnBhY2s6Ly9rdWJlanMtZGV2Ly4va3ViZWpzL3NlcnZlci9zb21lLXZhdWx0L2xpc3RlbmVyL2JhbmlzaG1lbnQvTG9naW5DaGVja0JhbmlzaG1lbnRMaXN0ZW5lci50cyIsIndlYnBhY2s6Ly9rdWJlanMtZGV2Ly4va3ViZWpzL3NlcnZlci91dGlsL2NodW5rUG9zLnRzIiwid2VicGFjazovL2t1YmVqcy1kZXYvLi9rdWJlanMvc2VydmVyL3V0aWwvY29tcGFyZVBvcy50cyIsIndlYnBhY2s6Ly9rdWJlanMtZGV2Ly4va3ViZWpzL3NlcnZlci91dGlsL2VmZmVjdC50cyIsIndlYnBhY2s6Ly9rdWJlanMtZGV2Ly4va3ViZWpzL3NlcnZlci91dGlsL2dldFBsYXllckRpbWVuc2lvbklkLnRzIiwid2VicGFjazovL2t1YmVqcy1kZXYvLi9rdWJlanMvc2VydmVyL3V0aWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8va3ViZWpzLWRldi8uL2t1YmVqcy9zZXJ2ZXIvdXRpbC9qc29uLXdyYXBwZXIudHMiLCJ3ZWJwYWNrOi8va3ViZWpzLWRldi8uL2t1YmVqcy9zZXJ2ZXIvdXRpbC9wYXJ0aWNsZS50cyIsIndlYnBhY2s6Ly9rdWJlanMtZGV2Ly4va3ViZWpzL3NlcnZlci91dGlsL3NlY29uZHNGb3JIdW1hbnMudHMiLCJ3ZWJwYWNrOi8va3ViZWpzLWRldi8uL2t1YmVqcy9zZXJ2ZXIvdXRpbC9zZWNvbmRzVG9UaWNrcy50cyIsIndlYnBhY2s6Ly9rdWJlanMtZGV2Ly4va3ViZWpzL3NlcnZlci91dGlsL3RpdGxlLnRzIiwid2VicGFjazovL2t1YmVqcy1kZXYvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va3ViZWpzLWRldi8uL2t1YmVqcy9zZXJ2ZXIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Db21tYW5kID0gdm9pZCAwO1xyXG52YXIgQ29tbWFuZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbW1hbmQoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBvbkV2ZW50KCdjb21tYW5kLnJlZ2lzdHJ5JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBjb21tYW5kID0gX3RoaXMucmVnaXN0ZXIoZXZlbnQuY29tbWFuZHMsIGV2ZW50LmFyZ3VtZW50cywgZXZlbnQpO1xyXG4gICAgICAgICAgICBldmVudC5yZWdpc3Rlcihjb21tYW5kKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBDb21tYW5kO1xyXG59KCkpO1xyXG5leHBvcnRzLkNvbW1hbmQgPSBDb21tYW5kO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkV2ZW50TGlzdGVuZXIgPSB2b2lkIDA7XHJcbnZhciBFdmVudExpc3RlbmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRXZlbnRMaXN0ZW5lcigpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBFdmVudExpc3RlbmVyO1xyXG59KCkpO1xyXG5leHBvcnRzLkV2ZW50TGlzdGVuZXIgPSBFdmVudExpc3RlbmVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlBsdWdpbiA9IHZvaWQgMDtcclxudmFyIFBsdWdpbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBsdWdpbigpIHtcclxuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29tbWFuZHMgPSBbXTtcclxuICAgIH1cclxuICAgIHJldHVybiBQbHVnaW47XHJcbn0oKSk7XHJcbmV4cG9ydHMuUGx1Z2luID0gUGx1Z2luO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnBsYXllckZpbHRlciA9IHZvaWQgMDtcclxudmFyIHBsYXllckZpbHRlciA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBpZiAoKF9hID0gZXZlbnQgPT09IG51bGwgfHwgZXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50LmVudGl0eSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlzUGxheWVyKCkpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZXZlbnQsIGV2ZW50LmVudGl0eS5wbGF5ZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcbmV4cG9ydHMucGxheWVyRmlsdGVyID0gcGxheWVyRmlsdGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5CYW5uZXJDbGFpbVBsdWdpbiA9IHZvaWQgMDtcclxudmFyIFBsdWdpbl8xID0gcmVxdWlyZShcIi4uLy4uL2NvcmUvUGx1Z2luXCIpO1xyXG52YXIgUGF0dGVyblJlbW92ZUxpc3RlbmVyXzEgPSByZXF1aXJlKFwiLi9saXN0ZW5lci9QYXR0ZXJuUmVtb3ZlTGlzdGVuZXJcIik7XHJcbnZhciBQYXR0ZXJuU2F2ZUxpc3RlbmVyXzEgPSByZXF1aXJlKFwiLi9saXN0ZW5lci9QYXR0ZXJuU2F2ZUxpc3RlbmVyXCIpO1xyXG52YXIgUHJvdGVjdGlvbkxpc3RlbmVyXzEgPSByZXF1aXJlKFwiLi9saXN0ZW5lci9Qcm90ZWN0aW9uTGlzdGVuZXJcIik7XHJcbnZhciBCYW5uZXJDbGFpbVBsdWdpbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhCYW5uZXJDbGFpbVBsdWdpbiwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEJhbm5lckNsYWltUGx1Z2luKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmxpc3RlbmVycyA9IFtuZXcgUGF0dGVyblNhdmVMaXN0ZW5lcl8xLlBhdHRlcm5TYXZlTGlzdGVuZXIoKSwgbmV3IFBhdHRlcm5SZW1vdmVMaXN0ZW5lcl8xLlBhdHRlcm5SZW1vdmVMaXN0ZW5lcigpLCBuZXcgUHJvdGVjdGlvbkxpc3RlbmVyXzEuUHJvdGVjdGlvbkxpc3RlbmVyKCldO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIEJhbm5lckNsYWltUGx1Z2luLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkgeyB9O1xyXG4gICAgcmV0dXJuIEJhbm5lckNsYWltUGx1Z2luO1xyXG59KFBsdWdpbl8xLlBsdWdpbikpO1xyXG5leHBvcnRzLkJhbm5lckNsYWltUGx1Z2luID0gQmFubmVyQ2xhaW1QbHVnaW47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUGxheWVyQmFubmVyID0gdm9pZCAwO1xyXG52YXIganNvbl93cmFwcGVyXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9qc29uLXdyYXBwZXJcIik7XHJcbnZhciBQbGF5ZXJCYW5uZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQbGF5ZXJCYW5uZXIocGxheWVyLCBwYXR0ZXJuUGF0aCkge1xyXG4gICAgICAgIGlmIChwYXR0ZXJuUGF0aCA9PT0gdm9pZCAwKSB7IHBhdHRlcm5QYXRoID0gXCJrdWJlanMvY29uZmlnL2Jhbm5lci1jbGFpbS9wbGF5ZXIvXCIuY29uY2F0KHBsYXllci5pZCwgXCIuanNvblwiKTsgfVxyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLnBhdHRlcm5QYXRoID0gcGF0dGVyblBhdGg7XHJcbiAgICAgICAgdGhpcy5wYXR0ZXJuID0gKF9hID0ganNvbl93cmFwcGVyXzEuSnNvbklPV3JhcHBlci5yZWFkKHBhdHRlcm5QYXRoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBhdHRlcm47XHJcbiAgICB9XHJcbiAgICBQbGF5ZXJCYW5uZXIucHJvdG90eXBlLmV4aXN0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLnBhdHRlcm47XHJcbiAgICB9O1xyXG4gICAgUGxheWVyQmFubmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gKGJsb2NrUGF0dGVybikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhdHRlcm4gPT09IGJsb2NrUGF0dGVybjtcclxuICAgIH07XHJcbiAgICBQbGF5ZXJCYW5uZXIucHJvdG90eXBlLnNhdmUgPSBmdW5jdGlvbiAocGF0dGVybikge1xyXG4gICAgICAgIGpzb25fd3JhcHBlcl8xLkpzb25JT1dyYXBwZXIud3JpdGUodGhpcy5wYXR0ZXJuUGF0aCwgeyBwYXR0ZXJuOiBwYXR0ZXJuIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQbGF5ZXJCYW5uZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUGxheWVyQmFubmVyID0gUGxheWVyQmFubmVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlBsYXllckNsYWltID0gdm9pZCAwO1xyXG52YXIgdXRpbF8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWxcIik7XHJcbnZhciBqc29uX3dyYXBwZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL2pzb24td3JhcHBlclwiKTtcclxudmFyIFBsYXllckNsYWltID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGxheWVyQ2xhaW0oYmxvY2tQb3MpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgdmFyIGlkID0gKDAsIHV0aWxfMS5jaHVua1BvcykoYmxvY2tQb3MpLmlkO1xyXG4gICAgICAgIHRoaXMuY2xhaW1QYXRoID0gXCJrdWJlanMvY29uZmlnL2Jhbm5lci1jbGFpbS9jaHVuay9cIi5jb25jYXQoaWQsIFwiLmpzb25cIik7XHJcbiAgICAgICAgdGhpcy5jbGFpbSA9IChfYSA9IGpzb25fd3JhcHBlcl8xLkpzb25JT1dyYXBwZXIucmVhZCh0aGlzLmNsYWltUGF0aCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFpbTtcclxuICAgIH1cclxuICAgIFBsYXllckNsYWltLnByb3RvdHlwZS5leGlzdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5jbGFpbTtcclxuICAgIH07XHJcbiAgICBQbGF5ZXJDbGFpbS5wcm90b3R5cGUuc2F2ZSA9IGZ1bmN0aW9uIChwbGF5ZXIsIF9hKSB7XHJcbiAgICAgICAgdmFyIHggPSBfYS54LCB5ID0gX2EueSwgeiA9IF9hLno7XHJcbiAgICAgICAgdmFyIGNsYWltID0ge1xyXG4gICAgICAgICAgICBwbGF5ZXJJZDogcGxheWVyLmlkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgIGJhbm5lclBvczogeyB4OiB4LCB5OiB5LCB6OiB6IH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBqc29uX3dyYXBwZXJfMS5Kc29uSU9XcmFwcGVyLndyaXRlKHRoaXMuY2xhaW1QYXRoLCB7IGNsYWltOiBjbGFpbSB9KTtcclxuICAgIH07XHJcbiAgICBQbGF5ZXJDbGFpbS5wcm90b3R5cGUuaGF2ZVBlcm1pc3Npb25zID0gZnVuY3Rpb24gKG90aGVyUGxheWVyKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHJldHVybiAoIXRoaXMuZXhpc3RzKCkgfHxcclxuICAgICAgICAgICAgKChfYSA9IHRoaXMuY2xhaW0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wbGF5ZXJJZCkgPT09IG90aGVyUGxheWVyLmlkLnRvU3RyaW5nKCkgfHxcclxuICAgICAgICAgICAgb3RoZXJQbGF5ZXIuaXNDcmVhdGl2ZU1vZGUoKSk7XHJcbiAgICB9O1xyXG4gICAgUGxheWVyQ2xhaW0ucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChiYW5uZXJQb3MpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgaWYgKCgwLCB1dGlsXzEuY29tcGFyZVBvcykoYmFubmVyUG9zLCAoX2EgPSB0aGlzLmNsYWltKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYmFubmVyUG9zKSkge1xyXG4gICAgICAgICAgICBqc29uX3dyYXBwZXJfMS5Kc29uSU9XcmFwcGVyLndyaXRlKHRoaXMuY2xhaW1QYXRoLCB7fSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFBsYXllckNsYWltO1xyXG59KCkpO1xyXG5leHBvcnRzLlBsYXllckNsYWltID0gUGxheWVyQ2xhaW07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZ2V0QmxvY2tCYW5uZXJQYXR0ZXJuID0gdm9pZCAwO1xyXG52YXIgZ2V0QmxvY2tCYW5uZXJQYXR0ZXJuID0gZnVuY3Rpb24gKGJsb2NrKSB7XHJcbiAgICB2YXIgbmJ0U3RyaW5nID0gYmxvY2suaXRlbS5uYnRTdHJpbmc7XHJcbiAgICBpZiAoYmxvY2suaGFzVGFnKCdtaW5lY3JhZnQ6YmFubmVycycpICYmIG5idFN0cmluZy5pbmNsdWRlcygnUGF0dGVybnMnKSkge1xyXG4gICAgICAgIHJldHVybiBuYnRTdHJpbmc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59O1xyXG5leHBvcnRzLmdldEJsb2NrQmFubmVyUGF0dGVybiA9IGdldEJsb2NrQmFubmVyUGF0dGVybjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUGF0dGVyblJlbW92ZUxpc3RlbmVyID0gdm9pZCAwO1xyXG52YXIgcGxheWVyRmlsdGVyXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY29yZS9ldmVudC1maWx0ZXIvcGxheWVyRmlsdGVyXCIpO1xyXG52YXIgRXZlbnRMaXN0ZW5lcl8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NvcmUvRXZlbnRMaXN0ZW5lclwiKTtcclxudmFyIHV0aWxfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsXCIpO1xyXG52YXIgcGFydGljbGVfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL3BhcnRpY2xlXCIpO1xyXG52YXIgZ2V0QmFubmVyUGF0dGVybl8xID0gcmVxdWlyZShcIi4uL2xpYi9nZXRCYW5uZXJQYXR0ZXJuXCIpO1xyXG52YXIgUGxheWVyQ2xhaW1fMSA9IHJlcXVpcmUoXCIuLi9saWIvUGxheWVyQ2xhaW1cIik7XHJcbnZhciBQYXR0ZXJuUmVtb3ZlTGlzdGVuZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUGF0dGVyblJlbW92ZUxpc3RlbmVyLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUGF0dGVyblJlbW92ZUxpc3RlbmVyKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIFBhdHRlcm5SZW1vdmVMaXN0ZW5lci5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgb25FdmVudCgnYmxvY2suYnJlYWsnLCAoMCwgcGxheWVyRmlsdGVyXzEucGxheWVyRmlsdGVyKShmdW5jdGlvbiAoZXZlbnQsIHBsYXllcikge1xyXG4gICAgICAgICAgICB2YXIgYmxvY2tQYXR0ZXJuID0gKDAsIGdldEJhbm5lclBhdHRlcm5fMS5nZXRCbG9ja0Jhbm5lclBhdHRlcm4pKGV2ZW50LmJsb2NrKTtcclxuICAgICAgICAgICAgaWYgKCFibG9ja1BhdHRlcm4pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjsgLy8gTm90IGEgYmFubmVyIHdpdGggcGF0dGVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBjbGFpbSA9IG5ldyBQbGF5ZXJDbGFpbV8xLlBsYXllckNsYWltKGV2ZW50LmJsb2NrLnBvcyk7XHJcbiAgICAgICAgICAgIGlmICghY2xhaW0uZXhpc3RzKCkgfHwgIWNsYWltLmhhdmVQZXJtaXNzaW9ucyhwbGF5ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNsYWltLnJlbW92ZShldmVudC5ibG9jay5wb3MpKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlsXzEudGl0bGUuc2hvdyhwbGF5ZXIucHJvZmlsZS5uYW1lLCAnYWN0aW9uYmFyJywgJ0NsYWltIHJlbW92ZWQnLCAncmVkJyk7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGxheVNvdW5kKCdibG9jay5hbWV0aHlzdF9jbHVzdGVyLmJyZWFrJyk7XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZV8xLnBhcnRpY2xlLmRyYWdvbkJyZWF0aChldmVudC5ibG9jay5wb3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQYXR0ZXJuUmVtb3ZlTGlzdGVuZXI7XHJcbn0oRXZlbnRMaXN0ZW5lcl8xLkV2ZW50TGlzdGVuZXIpKTtcclxuZXhwb3J0cy5QYXR0ZXJuUmVtb3ZlTGlzdGVuZXIgPSBQYXR0ZXJuUmVtb3ZlTGlzdGVuZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlBhdHRlcm5TYXZlTGlzdGVuZXIgPSB2b2lkIDA7XHJcbnZhciBwbGF5ZXJGaWx0ZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb3JlL2V2ZW50LWZpbHRlci9wbGF5ZXJGaWx0ZXJcIik7XHJcbnZhciBFdmVudExpc3RlbmVyXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY29yZS9FdmVudExpc3RlbmVyXCIpO1xyXG52YXIgdXRpbF8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWxcIik7XHJcbnZhciBwYXJ0aWNsZV8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWwvcGFydGljbGVcIik7XHJcbnZhciBnZXRCYW5uZXJQYXR0ZXJuXzEgPSByZXF1aXJlKFwiLi4vbGliL2dldEJhbm5lclBhdHRlcm5cIik7XHJcbnZhciBQbGF5ZXJCYW5uZXJfMSA9IHJlcXVpcmUoXCIuLi9saWIvUGxheWVyQmFubmVyXCIpO1xyXG52YXIgUGxheWVyQ2xhaW1fMSA9IHJlcXVpcmUoXCIuLi9saWIvUGxheWVyQ2xhaW1cIik7XHJcbnZhciBQYXR0ZXJuU2F2ZUxpc3RlbmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFBhdHRlcm5TYXZlTGlzdGVuZXIsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBQYXR0ZXJuU2F2ZUxpc3RlbmVyKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIFBhdHRlcm5TYXZlTGlzdGVuZXIucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG9uRXZlbnQoJ2Jsb2NrLnJpZ2h0X2NsaWNrJywgKDAsIHBsYXllckZpbHRlcl8xLnBsYXllckZpbHRlcikoZnVuY3Rpb24gKGV2ZW50LCBwbGF5ZXIpIHtcclxuICAgICAgICAgICAgdmFyIGJsb2NrUGF0dGVybiA9ICgwLCBnZXRCYW5uZXJQYXR0ZXJuXzEuZ2V0QmxvY2tCYW5uZXJQYXR0ZXJuKShldmVudC5ibG9jayk7XHJcbiAgICAgICAgICAgIGlmICghYmxvY2tQYXR0ZXJuKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vIE5vdCBhIGJhbm5lciB3aXRoIHBhdHRlcm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcGxheWVyQmFubmVyID0gbmV3IFBsYXllckJhbm5lcl8xLlBsYXllckJhbm5lcihwbGF5ZXIpO1xyXG4gICAgICAgICAgICBpZiAocGxheWVyQmFubmVyLmV4aXN0cygpICYmICFwbGF5ZXJCYW5uZXIuY29tcGFyZShibG9ja1BhdHRlcm4pKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlsXzEudGl0bGUuc2hvdyhwbGF5ZXIucHJvZmlsZS5uYW1lLCAnYWN0aW9uYmFyJywgJ1RoaXMgaXMgbm90IHlvdXIgcGF0dGVybiEnLCAncmVkJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFwbGF5ZXJCYW5uZXIuZXhpc3RzKCkpIHtcclxuICAgICAgICAgICAgICAgIHBsYXllci50ZWxsKENvbXBvbmVudC5zdHJpbmcoJ1NhdmVkIGFzIHlvdXIgYmFubmVyIHBhdHRlcm4nKSk7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJCYW5uZXIuc2F2ZShibG9ja1BhdHRlcm4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBjbGFpbSA9IG5ldyBQbGF5ZXJDbGFpbV8xLlBsYXllckNsYWltKGV2ZW50LmJsb2NrLnBvcyk7XHJcbiAgICAgICAgICAgIGlmIChjbGFpbS5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNsYWltLnNhdmUocGxheWVyLCBldmVudC5ibG9jay5wb3MpO1xyXG4gICAgICAgICAgICB1dGlsXzEudGl0bGUuc2hvdyhwbGF5ZXIucHJvZmlsZS5uYW1lLCAnYWN0aW9uYmFyJywgJ0NodW5rIGNsYWltZWQnLCAnZ3JlZW4nKTtcclxuICAgICAgICAgICAgcGxheWVyLnBsYXlTb3VuZCgnYmxvY2suYW1ldGh5c3RfY2x1c3Rlci5wbGFjZScpO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZV8xLnBhcnRpY2xlLmRyYWdvbkJyZWF0aChldmVudC5ibG9jay5wb3MpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUGF0dGVyblNhdmVMaXN0ZW5lcjtcclxufShFdmVudExpc3RlbmVyXzEuRXZlbnRMaXN0ZW5lcikpO1xyXG5leHBvcnRzLlBhdHRlcm5TYXZlTGlzdGVuZXIgPSBQYXR0ZXJuU2F2ZUxpc3RlbmVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Qcm90ZWN0aW9uTGlzdGVuZXIgPSB2b2lkIDA7XHJcbnZhciBwbGF5ZXJGaWx0ZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb3JlL2V2ZW50LWZpbHRlci9wbGF5ZXJGaWx0ZXJcIik7XHJcbnZhciBFdmVudExpc3RlbmVyXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY29yZS9FdmVudExpc3RlbmVyXCIpO1xyXG52YXIgdXRpbF8xID0gcmVxdWlyZShcIi4uLy4uL3V0aWxcIik7XHJcbnZhciBQbGF5ZXJDbGFpbV8xID0gcmVxdWlyZShcIi4uL2xpYi9QbGF5ZXJDbGFpbVwiKTtcclxudmFyIFByb3RlY3Rpb25MaXN0ZW5lciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhQcm90ZWN0aW9uTGlzdGVuZXIsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBQcm90ZWN0aW9uTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgUHJvdGVjdGlvbkxpc3RlbmVyLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIG9uRXZlbnQoJ2Jsb2NrLnJpZ2h0X2NsaWNrJywgKDAsIHBsYXllckZpbHRlcl8xLnBsYXllckZpbHRlcikoZnVuY3Rpb24gKGV2ZW50LCBwbGF5ZXIpIHtcclxuICAgICAgICAgICAgdmFyIGNsYWltID0gbmV3IFBsYXllckNsYWltXzEuUGxheWVyQ2xhaW0oZXZlbnQuYmxvY2spO1xyXG4gICAgICAgICAgICBpZiAoIWNsYWltLmhhdmVQZXJtaXNzaW9ucyhwbGF5ZXIpICYmIGV2ZW50LmJsb2NrLmhhc1RhZygnbWluZWNyYWZ0OmJ1dHRvbnMnKSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucHVuaXNoKHBsYXllcik7XHJcbiAgICAgICAgICAgICAgICB1dGlsXzEucGFydGljbGUuZHJhZ29uQnJlYXRoKGV2ZW50LmJsb2NrKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LmNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIG9uRXZlbnQoJ2Jsb2NrLnBsYWNlJywgKDAsIHBsYXllckZpbHRlcl8xLnBsYXllckZpbHRlcikoZnVuY3Rpb24gKGV2ZW50LCBwbGF5ZXIpIHtcclxuICAgICAgICAgICAgdmFyIGNsYWltID0gbmV3IFBsYXllckNsYWltXzEuUGxheWVyQ2xhaW0oZXZlbnQuYmxvY2spO1xyXG4gICAgICAgICAgICBpZiAoY2xhaW0uaGF2ZVBlcm1pc3Npb25zKHBsYXllcikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5wdW5pc2gocGxheWVyKTtcclxuICAgICAgICAgICAgdXRpbF8xLnBhcnRpY2xlLmRyYWdvbkJyZWF0aChldmVudC5ibG9jayk7XHJcbiAgICAgICAgICAgIGV2ZW50LmNhbmNlbCgpO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBvbkV2ZW50KCdibG9jay5icmVhaycsICgwLCBwbGF5ZXJGaWx0ZXJfMS5wbGF5ZXJGaWx0ZXIpKGZ1bmN0aW9uIChldmVudCwgcGxheWVyKSB7XHJcbiAgICAgICAgICAgIHZhciBjbGFpbSA9IG5ldyBQbGF5ZXJDbGFpbV8xLlBsYXllckNsYWltKGV2ZW50LmJsb2NrKTtcclxuICAgICAgICAgICAgaWYgKGNsYWltLmhhdmVQZXJtaXNzaW9ucyhwbGF5ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMucHVuaXNoKHBsYXllcik7XHJcbiAgICAgICAgICAgIHV0aWxfMS5wYXJ0aWNsZS5kcmFnb25CcmVhdGgoZXZlbnQuYmxvY2spO1xyXG4gICAgICAgICAgICBldmVudC5jYW5jZWwoKTtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgb25FdmVudCgnbGV2ZWwuZXhwbG9zaW9uLnByZScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBpZiAoIWV2ZW50LmV4cGxvZGVyLmlzUGxheWVyKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcGxheWVyID0gZXZlbnQuZXhwbG9kZXI7XHJcbiAgICAgICAgICAgIHZhciBjbGFpbSA9IG5ldyBQbGF5ZXJDbGFpbV8xLlBsYXllckNsYWltKGV2ZW50KTtcclxuICAgICAgICAgICAgaWYgKGNsYWltLmhhdmVQZXJtaXNzaW9ucyhwbGF5ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMucHVuaXNoKHBsYXllcik7XHJcbiAgICAgICAgICAgIHV0aWxfMS5wYXJ0aWNsZS5kcmFnb25CcmVhdGgoZXZlbnQpO1xyXG4gICAgICAgICAgICBldmVudC5jYW5jZWwoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBQcm90ZWN0aW9uTGlzdGVuZXIucHJvdG90eXBlLnB1bmlzaCA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcclxuICAgICAgICB1dGlsXzEuZWZmZWN0Lmluc3RhbnREYW1hZ2UocGxheWVyLnByb2ZpbGUubmFtZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFByb3RlY3Rpb25MaXN0ZW5lcjtcclxufShFdmVudExpc3RlbmVyXzEuRXZlbnRMaXN0ZW5lcikpO1xyXG5leHBvcnRzLlByb3RlY3Rpb25MaXN0ZW5lciA9IFByb3RlY3Rpb25MaXN0ZW5lcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuRW5kSm91cm5leVBsdWdpbiA9IHZvaWQgMDtcclxudmFyIFBsdWdpbl8xID0gcmVxdWlyZShcIi4uLy4uL2NvcmUvUGx1Z2luXCIpO1xyXG52YXIgRGltZW5zaW9uUHJvdGVjdGlvbkxpc3RlbmVyXzEgPSByZXF1aXJlKFwiLi9saXN0ZW5lci9EaW1lbnNpb25Qcm90ZWN0aW9uTGlzdGVuZXJcIik7XHJcbnZhciBFbmRKb3VybmV5UGx1Z2luID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEVuZEpvdXJuZXlQbHVnaW4sIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBFbmRKb3VybmV5UGx1Z2luKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmxpc3RlbmVycyA9IFtuZXcgRGltZW5zaW9uUHJvdGVjdGlvbkxpc3RlbmVyXzEuRGltZW5zaW9uUHJvdGVjdGlvbkxpc3RlbmVyKCldO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIEVuZEpvdXJuZXlQbHVnaW4ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7IH07XHJcbiAgICByZXR1cm4gRW5kSm91cm5leVBsdWdpbjtcclxufShQbHVnaW5fMS5QbHVnaW4pKTtcclxuZXhwb3J0cy5FbmRKb3VybmV5UGx1Z2luID0gRW5kSm91cm5leVBsdWdpbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuRGltZW5zaW9uUHJvdGVjdGlvbkxpc3RlbmVyID0gdm9pZCAwO1xyXG52YXIgRXZlbnRMaXN0ZW5lcl8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NvcmUvRXZlbnRMaXN0ZW5lclwiKTtcclxudmFyIHV0aWxfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsXCIpO1xyXG52YXIgcHJvdGVjdGlvbnNfMSA9IHJlcXVpcmUoXCIuLi9wcm90ZWN0aW9uc1wiKTtcclxudmFyIERpbWVuc2lvblByb3RlY3Rpb25MaXN0ZW5lciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhEaW1lbnNpb25Qcm90ZWN0aW9uTGlzdGVuZXIsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBEaW1lbnNpb25Qcm90ZWN0aW9uTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgRGltZW5zaW9uUHJvdGVjdGlvbkxpc3RlbmVyLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIG9uRXZlbnQoJ3BsYXllci50aWNrJywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHZhciBwbGF5ZXIgPSBfYS5wbGF5ZXIsIG1pbmVjcmFmdFBsYXllciA9IF9hLm1pbmVjcmFmdFBsYXllcjtcclxuICAgICAgICAgICAgdmFyIGRpbWVuc2lvbklkID0gKDAsIHV0aWxfMS5nZXRQbGF5ZXJEaW1lbnNpb25JZCkobWluZWNyYWZ0UGxheWVyKTtcclxuICAgICAgICAgICAgdmFyIHJlcXVpcmVkVGFnID0gcHJvdGVjdGlvbnNfMS5wcm90ZWN0aW9uc1tkaW1lbnNpb25JZF07XHJcbiAgICAgICAgICAgIGlmIChyZXF1aXJlZFRhZyAmJiAhcGxheWVyLnRhZ3MuY29udGFpbnMocmVxdWlyZWRUYWcpICYmIHBsYXllci5pc0FsaXZlKCkpIHtcclxuICAgICAgICAgICAgICAgIHBsYXllci5raWxsKCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5lbWl0UHJvdGVjdGlvbk1lc3NhZ2UocGxheWVyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIERpbWVuc2lvblByb3RlY3Rpb25MaXN0ZW5lci5wcm90b3R5cGUuZW1pdFByb3RlY3Rpb25NZXNzYWdlID0gZnVuY3Rpb24gKHBsYXllcikge1xyXG4gICAgICAgIHZhciBtZXNzYWdlID0gQ29tcG9uZW50LmpvaW4oQ29tcG9uZW50LnN0cmluZygnJyksIFtcclxuICAgICAgICAgICAgQ29tcG9uZW50LnN0cmluZygnSGV5ICcpLFxyXG4gICAgICAgICAgICBDb21wb25lbnQuc3RyaW5nKHBsYXllci5wcm9maWxlLm5hbWUpLmRhcmtHcmVlbigpLFxyXG4gICAgICAgICAgICBDb21wb25lbnQuc3RyaW5nKCchIFBsZWFzZSBmb2xsb3cgdGhlICcpLFxyXG4gICAgICAgICAgICBDb21wb25lbnQuc3RyaW5nKCdFbmQgSm91cm5leScpLmRhcmtQdXJwbGUoKSxcclxuICAgICAgICAgICAgQ29tcG9uZW50LnN0cmluZygnIHF1ZXN0cy4gbG9sJyksXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgcGxheWVyLnNlcnZlci50ZWxsKG1lc3NhZ2UpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBEaW1lbnNpb25Qcm90ZWN0aW9uTGlzdGVuZXI7XHJcbn0oRXZlbnRMaXN0ZW5lcl8xLkV2ZW50TGlzdGVuZXIpKTtcclxuZXhwb3J0cy5EaW1lbnNpb25Qcm90ZWN0aW9uTGlzdGVuZXIgPSBEaW1lbnNpb25Qcm90ZWN0aW9uTGlzdGVuZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMucHJvdGVjdGlvbnMgPSB2b2lkIDA7XHJcbmV4cG9ydHMucHJvdGVjdGlvbnMgPSB7XHJcbiAgICAnbWluZWNyYWZ0OnRoZV9uZXRoZXInOiAnT3ZlcndvcmxkQ29tcGxldGVkJyxcclxuICAgICdtaW5lY3JhZnQ6dGhlX2VuZCc6ICdOZXRoZXJDb21wbGV0ZWQnLFxyXG4gICAgJz8/P3RoZV92YXVsdD8/Pyc6ICdFbmRDb21wbGV0ZWQnLFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Mb2dpblBhcnRpY2xlc1BsdWdpbiA9IHZvaWQgMDtcclxudmFyIFBsdWdpbl8xID0gcmVxdWlyZShcIi4uLy4uL2NvcmUvUGx1Z2luXCIpO1xyXG52YXIgU3Bhd25QYXJ0aWNsZUxpc3RlbmVyXzEgPSByZXF1aXJlKFwiLi9saXN0ZW5lci9TcGF3blBhcnRpY2xlTGlzdGVuZXJcIik7XHJcbnZhciBMb2dpblBhcnRpY2xlc1BsdWdpbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhMb2dpblBhcnRpY2xlc1BsdWdpbiwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIExvZ2luUGFydGljbGVzUGx1Z2luKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmxpc3RlbmVycyA9IFtuZXcgU3Bhd25QYXJ0aWNsZUxpc3RlbmVyXzEuU3Bhd25QYXJ0aWNsZUxpc3RlbmVyKCldO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIExvZ2luUGFydGljbGVzUGx1Z2luLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkgeyB9O1xyXG4gICAgcmV0dXJuIExvZ2luUGFydGljbGVzUGx1Z2luO1xyXG59KFBsdWdpbl8xLlBsdWdpbikpO1xyXG5leHBvcnRzLkxvZ2luUGFydGljbGVzUGx1Z2luID0gTG9naW5QYXJ0aWNsZXNQbHVnaW47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlNwYXduUGFydGljbGVMaXN0ZW5lciA9IHZvaWQgMDtcclxudmFyIEV2ZW50TGlzdGVuZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb3JlL0V2ZW50TGlzdGVuZXJcIik7XHJcbnZhciB1dGlsXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbFwiKTtcclxudmFyIFNwYXduUGFydGljbGVMaXN0ZW5lciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhTcGF3blBhcnRpY2xlTGlzdGVuZXIsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBTcGF3blBhcnRpY2xlTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgU3Bhd25QYXJ0aWNsZUxpc3RlbmVyLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBvbkV2ZW50KCdwbGF5ZXIubG9nZ2VkX2luJywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHZhciBwbGF5ZXIgPSBfYS5wbGF5ZXI7XHJcbiAgICAgICAgICAgIHV0aWxfMS5wYXJ0aWNsZS50b3RlbU9mVW5keWluZyhwbGF5ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG9uRXZlbnQoJ3BsYXllci5sb2dnZWRfb3V0JywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHZhciBwbGF5ZXIgPSBfYS5wbGF5ZXI7XHJcbiAgICAgICAgICAgIHV0aWxfMS5wYXJ0aWNsZS50b3RlbU9mVW5keWluZyhwbGF5ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTcGF3blBhcnRpY2xlTGlzdGVuZXI7XHJcbn0oRXZlbnRMaXN0ZW5lcl8xLkV2ZW50TGlzdGVuZXIpKTtcclxuZXhwb3J0cy5TcGF3blBhcnRpY2xlTGlzdGVuZXIgPSBTcGF3blBhcnRpY2xlTGlzdGVuZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMucGx1Z2lucyA9IHZvaWQgMDtcclxudmFyIGJhbm5lcl9jbGFpbV8xID0gcmVxdWlyZShcIi4vYmFubmVyLWNsYWltXCIpO1xyXG52YXIgZW5kX2pvdXJuZXlfMSA9IHJlcXVpcmUoXCIuL2VuZC1qb3VybmV5XCIpO1xyXG52YXIgbG9naW5fcGFydGljbGVzXzEgPSByZXF1aXJlKFwiLi9sb2dpbi1wYXJ0aWNsZXNcIik7XHJcbnZhciBzb21lX3ZhdWx0XzEgPSByZXF1aXJlKFwiLi9zb21lLXZhdWx0XCIpO1xyXG5leHBvcnRzLnBsdWdpbnMgPSBbXHJcbiAgICAvL1xyXG4gICAgbmV3IGJhbm5lcl9jbGFpbV8xLkJhbm5lckNsYWltUGx1Z2luKCksXHJcbiAgICBuZXcgZW5kX2pvdXJuZXlfMS5FbmRKb3VybmV5UGx1Z2luKCksXHJcbiAgICBuZXcgc29tZV92YXVsdF8xLlNvbWVWYXVsdFBsdWdpbigpLFxyXG4gICAgbmV3IGxvZ2luX3BhcnRpY2xlc18xLkxvZ2luUGFydGljbGVzUGx1Z2luKCksXHJcbl07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlNvbWVWYXVsdENvbW1hbmQgPSB2b2lkIDA7XHJcbnZhciBDb21tYW5kXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY29yZS9Db21tYW5kXCIpO1xyXG52YXIgQmFuaXNobWVudF8xID0gcmVxdWlyZShcIi4uL2xpYi9CYW5pc2htZW50XCIpO1xyXG52YXIgYXJnID0gZnVuY3Rpb24gKEFyZ3VtZW50cykgeyByZXR1cm4gKHtcclxuICAgIHBsYXllclNvdXJjZTogZnVuY3Rpb24gKGN0eCkgeyByZXR1cm4gY3R4LnNvdXJjZS5nZXRQbGF5ZXJPckV4Y2VwdGlvbigpLmFzS0pTKCk7IH0sXHJcbiAgICBwbGF5ZXI6IGZ1bmN0aW9uIChjdHgsIG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gQXJndW1lbnRzLlBMQVlFUi5nZXRSZXN1bHQoY3R4LCBuYW1lKS5hc0tKUygpO1xyXG4gICAgfSxcclxufSk7IH07XHJcbnZhciBTb21lVmF1bHRDb21tYW5kID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFNvbWVWYXVsdENvbW1hbmQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBTb21lVmF1bHRDb21tYW5kKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIFNvbWVWYXVsdENvbW1hbmQucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKENvbW1hbmRzLCBBcmd1bWVudHMsIGV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIENvbW1hbmRzLmxpdGVyYWwoJ3NvbWVfdmF1bHQnKVxyXG4gICAgICAgICAgICAucmVxdWlyZXMoZnVuY3Rpb24gKHNvdXJjZSkgeyByZXR1cm4gc291cmNlLmhhc1Blcm1pc3Npb24oMik7IH0pXHJcbiAgICAgICAgICAgIC50aGVuKHRoaXMucmVnaXN0ZXJVbmJhbihDb21tYW5kcywgQXJndW1lbnRzLCBldmVudCkpO1xyXG4gICAgfTtcclxuICAgIFNvbWVWYXVsdENvbW1hbmQucHJvdG90eXBlLnJlZ2lzdGVyVW5iYW4gPSBmdW5jdGlvbiAoQ29tbWFuZHMsIEFyZ3VtZW50cywgZXZlbnQpIHtcclxuICAgICAgICB2YXIgYXJnUGxheWVyID0gQ29tbWFuZHMuYXJndW1lbnQoJ3BsYXllcicsIEFyZ3VtZW50cy5QTEFZRVIuY3JlYXRlKGV2ZW50KSkuZXhlY3V0ZXMoZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgICAgICB2YXIgY2FsbGVyID0gYXJnKEFyZ3VtZW50cykucGxheWVyU291cmNlKGN0eCk7XHJcbiAgICAgICAgICAgIHZhciBwbGF5ZXIgPSBhcmcoQXJndW1lbnRzKS5wbGF5ZXIoY3R4LCAncGxheWVyJyk7XHJcbiAgICAgICAgICAgIHZhciBiYW5pc2htZW50ID0gbmV3IEJhbmlzaG1lbnRfMS5CYW5pc2htZW50KHBsYXllcik7XHJcbiAgICAgICAgICAgIGlmIChiYW5pc2htZW50LmlzQmFubmVkKCkpIHtcclxuICAgICAgICAgICAgICAgIGJhbmlzaG1lbnQudW5iYW4oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0gQ29tcG9uZW50LmpvaW4oQ29tcG9uZW50LnN0cmluZygnICcpLCBbXHJcbiAgICAgICAgICAgICAgICBDb21wb25lbnQuc3RyaW5nKGNhbGxlci5wcm9maWxlLm5hbWUpLmdyZWVuKCksXHJcbiAgICAgICAgICAgICAgICBDb21wb25lbnQuc3RyaW5nKCdpcyBub3QgdmF1bHQtYmFubmVkJyksXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBjYWxsZXIudGVsbChtZXNzYWdlKTtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIENvbW1hbmRzLmxpdGVyYWwoJ3VuYmFuJykudGhlbihhcmdQbGF5ZXIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTb21lVmF1bHRDb21tYW5kO1xyXG59KENvbW1hbmRfMS5Db21tYW5kKSk7XHJcbmV4cG9ydHMuU29tZVZhdWx0Q29tbWFuZCA9IFNvbWVWYXVsdENvbW1hbmQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuYmFuU2Vjb25kcyA9IGV4cG9ydHMuYmFuRGltZW5zaW9ucyA9IHZvaWQgMDtcclxuZXhwb3J0cy5iYW5EaW1lbnNpb25zID0gWyc/Pz92YXVsdD8/PyddO1xyXG52YXIgYmFuU2Vjb25kcyA9IGZ1bmN0aW9uIChsZXZlbCkge1xyXG4gICAgdmFyIG1pbnV0ZSA9IDYwO1xyXG4gICAgdmFyIGhvdXIgPSA2MCAqIG1pbnV0ZTtcclxuICAgIHZhciBiYW5NYXAgPSB7XHJcbiAgICAgICAgMDogMTUgKiBtaW51dGUsXHJcbiAgICAgICAgMTogMzAgKiBtaW51dGUsXHJcbiAgICAgICAgMjogMSAqIGhvdXIsXHJcbiAgICAgICAgMzogMiAqIGhvdXIsXHJcbiAgICAgICAgNDogNCAqIGhvdXIsXHJcbiAgICAgICAgNTogOCAqIGhvdXIsXHJcbiAgICAgICAgNjogMTIgKiBob3VyLFxyXG4gICAgICAgIDc6IDE2ICogaG91cixcclxuICAgICAgICA4OiAyMCAqIGhvdXIsXHJcbiAgICAgICAgOTogMjQgKiBob3VyLFxyXG4gICAgfTtcclxuICAgIHJldHVybiBiYW5NYXBbbGV2ZWxdIHx8IGJhbk1hcFs5XTtcclxufTtcclxuZXhwb3J0cy5iYW5TZWNvbmRzID0gYmFuU2Vjb25kcztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuU29tZVZhdWx0UGx1Z2luID0gdm9pZCAwO1xyXG52YXIgUGx1Z2luXzEgPSByZXF1aXJlKFwiLi4vLi4vY29yZS9QbHVnaW5cIik7XHJcbnZhciBTb21lVmF1bHRDb21tYW5kXzEgPSByZXF1aXJlKFwiLi9jb21tYW5kL1NvbWVWYXVsdENvbW1hbmRcIik7XHJcbnZhciBCYW5pc2hPbkRlYXRoTGlzdGVuZXJfMSA9IHJlcXVpcmUoXCIuL2xpc3RlbmVyL2JhbmlzaG1lbnQvQmFuaXNoT25EZWF0aExpc3RlbmVyXCIpO1xyXG52YXIgTG9naW5DaGVja0JhbmlzaG1lbnRMaXN0ZW5lcl8xID0gcmVxdWlyZShcIi4vbGlzdGVuZXIvYmFuaXNobWVudC9Mb2dpbkNoZWNrQmFuaXNobWVudExpc3RlbmVyXCIpO1xyXG52YXIgU29tZVZhdWx0UGx1Z2luID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFNvbWVWYXVsdFBsdWdpbiwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFNvbWVWYXVsdFBsdWdpbigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5saXN0ZW5lcnMgPSBbbmV3IEJhbmlzaE9uRGVhdGhMaXN0ZW5lcl8xLkJhbmlzaE9uRGVhdGhMaXN0ZW5lcigpLCBuZXcgTG9naW5DaGVja0JhbmlzaG1lbnRMaXN0ZW5lcl8xLkxvZ2luQ2hlY2tCYW5pc2htZW50TGlzdGVuZXIoKV07XHJcbiAgICAgICAgX3RoaXMuY29tbWFuZHMgPSBbbmV3IFNvbWVWYXVsdENvbW1hbmRfMS5Tb21lVmF1bHRDb21tYW5kKCldO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFNvbWVWYXVsdFBsdWdpbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHsgfTtcclxuICAgIHJldHVybiBTb21lVmF1bHRQbHVnaW47XHJcbn0oUGx1Z2luXzEuUGx1Z2luKSk7XHJcbmV4cG9ydHMuU29tZVZhdWx0UGx1Z2luID0gU29tZVZhdWx0UGx1Z2luO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkJhbmlzaG1lbnQgPSB2b2lkIDA7XHJcbnZhciB1dGlsXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbFwiKTtcclxudmFyIGNvbmZpZ18xID0gcmVxdWlyZShcIi4uL2NvbmZpZ1wiKTtcclxudmFyIGJhblBhdGggPSBmdW5jdGlvbiAocGxheWVySWQpIHtcclxuICAgIHJldHVybiBcImt1YmVqcy9jb25maWcvdmF1bHQtZGVhdGgtYmFuL2Jhbi1lbnRyeS9cIi5jb25jYXQocGxheWVySWQudG9TdHJpbmcoKSwgXCIuanNvblwiKTtcclxufTtcclxudmFyIEJhbmlzaG1lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCYW5pc2htZW50KHBsYXllcikge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSAwO1xyXG4gICAgICAgIHRoaXMudW50aWwgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHRoaXMubG9hZCgpO1xyXG4gICAgfVxyXG4gICAgQmFuaXNobWVudC5wcm90b3R5cGUuaXNCYW5uZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCkgPCB0aGlzLnVudGlsLmdldFRpbWUoKTtcclxuICAgIH07XHJcbiAgICBCYW5pc2htZW50LnByb3RvdHlwZS5raWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBsZWZ0U2Vjb25kcyA9ICh0aGlzLnVudGlsLmdldFRpbWUoKSAtIERhdGUubm93KCkpIC8gMTAwMDtcclxuICAgICAgICB2YXIgY21kID0gXCJraWNrIFwiLmNvbmNhdCh0aGlzLnBsYXllci5wcm9maWxlLm5hbWUsIFwiIFlvdSdyZSBiYW5pc2hlZCBmcm9tIHRoaXMgd29ybGRcXG5cIikuY29uY2F0KCgwLCB1dGlsXzEuc2Vjb25kc0Zvckh1bWFucykobGVmdFNlY29uZHMpLCBcIiBsZWZ0XCIpO1xyXG4gICAgICAgIFV0aWxzLnNlcnZlci5ydW5Db21tYW5kU2lsZW50KGNtZCk7XHJcbiAgICB9O1xyXG4gICAgQmFuaXNobWVudC5wcm90b3R5cGUuYmFuID0gZnVuY3Rpb24gKHNlY29uZHMpIHtcclxuICAgICAgICB0aGlzLnNlbmRCYW5Bbm5vdWNtZW50KHNlY29uZHMpO1xyXG4gICAgICAgIHRoaXMudW50aWwgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgc2Vjb25kcyAqIDEwMDApO1xyXG4gICAgICAgIHRoaXMuc2F2ZSgpO1xyXG4gICAgICAgIFV0aWxzLnNlcnZlci5zY2hlZHVsZUluVGlja3MoKDAsIHV0aWxfMS5zZWNvbmRzVG9UaWNrcykoMTUpLCB0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBfYS5kYXRhO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YS5raWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQmFuaXNobWVudC5wcm90b3R5cGUudW5iYW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnVudGlsID0gbmV3IERhdGUoKTtcclxuICAgICAgICB0aGlzLnNhdmUoKTtcclxuICAgICAgICBVdGlscy5zZXJ2ZXIuc2NoZWR1bGVJblRpY2tzKDEsIG51bGwsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBDb21wb25lbnQuam9pbihDb21wb25lbnQuc3RyaW5nKCcgJyksIFtcclxuICAgICAgICAgICAgICAgIENvbXBvbmVudC5zdHJpbmcoJ1NpbnMgb2YnKSxcclxuICAgICAgICAgICAgICAgIENvbXBvbmVudC5zdHJpbmcoX3RoaXMucGxheWVyLnByb2ZpbGUubmFtZSkuZ3JlZW4oKSxcclxuICAgICAgICAgICAgICAgIENvbXBvbmVudC5zdHJpbmcoJ2hhcyBiZWVuIGZvcmdpdmVuLiBIZSBzaGFsbCBub3cgcmV0dXJuLicpLFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgVXRpbHMuc2VydmVyLnRlbGwobWVzc2FnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQmFuaXNobWVudC5wcm90b3R5cGUubmV4dEJhbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbmV4dFNlY29uZHMgPSAoMCwgY29uZmlnXzEuYmFuU2Vjb25kcykoKyt0aGlzLmxldmVsKTtcclxuICAgICAgICB0aGlzLmJhbihuZXh0U2Vjb25kcyk7XHJcbiAgICB9O1xyXG4gICAgQmFuaXNobWVudC5wcm90b3R5cGUuc2VuZEJhbkFubm91Y21lbnQgPSBmdW5jdGlvbiAoc2Vjb25kcykge1xyXG4gICAgICAgIHZhciBtZXNzYWdlID0gQ29tcG9uZW50LmpvaW4oQ29tcG9uZW50LnN0cmluZygnICcpLCBbXHJcbiAgICAgICAgICAgIENvbXBvbmVudC5zdHJpbmcodGhpcy5wbGF5ZXIucHJvZmlsZS5uYW1lKS5ncmVlbigpLFxyXG4gICAgICAgICAgICBDb21wb25lbnQuc3RyaW5nKCdmYWlsZWQgaW4nKSxcclxuICAgICAgICAgICAgQ29tcG9uZW50LnN0cmluZygnVGhlIFZhdWx0JykuZ29sZCgpLFxyXG4gICAgICAgICAgICBDb21wb25lbnQuc3RyaW5nKCdhbmQgaXMgYmFuaXNoZWQgZnJvbSB0aGlzIHdvcmxkIGZvcicpLFxyXG4gICAgICAgICAgICBDb21wb25lbnQuc3RyaW5nKCgwLCB1dGlsXzEuc2Vjb25kc0Zvckh1bWFucykoc2Vjb25kcykpLnJlZCgpLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIFV0aWxzLnNlcnZlci50ZWxsKG1lc3NhZ2UpO1xyXG4gICAgfTtcclxuICAgIEJhbmlzaG1lbnQucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9hID0gdXRpbF8xLkpzb25JT1dyYXBwZXIucmVhZChiYW5QYXRoKHRoaXMucGxheWVyLmlkKSkgfHwge30sIGxldmVsID0gX2EubGV2ZWwsIHVudGlsID0gX2EudW50aWw7XHJcbiAgICAgICAgaWYgKGxldmVsICYmIHVudGlsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbCB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLnVudGlsID0gdW50aWwgPyBuZXcgRGF0ZSh1bnRpbCkgOiBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBCYW5pc2htZW50LnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHV0aWxfMS5Kc29uSU9XcmFwcGVyLndyaXRlKGJhblBhdGgodGhpcy5wbGF5ZXIuaWQpLCB7XHJcbiAgICAgICAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxyXG4gICAgICAgICAgICB1bnRpbDogdGhpcy51bnRpbC50b1N0cmluZygpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCYW5pc2htZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLkJhbmlzaG1lbnQgPSBCYW5pc2htZW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5CYW5pc2hPbkRlYXRoTGlzdGVuZXIgPSB2b2lkIDA7XHJcbnZhciBwbGF5ZXJGaWx0ZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9jb3JlL2V2ZW50LWZpbHRlci9wbGF5ZXJGaWx0ZXJcIik7XHJcbnZhciBFdmVudExpc3RlbmVyXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vY29yZS9FdmVudExpc3RlbmVyXCIpO1xyXG52YXIgdXRpbF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxcIik7XHJcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb25maWdcIik7XHJcbnZhciBCYW5pc2htZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vbGliL0JhbmlzaG1lbnRcIik7XHJcbnZhciBCYW5pc2hPbkRlYXRoTGlzdGVuZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQmFuaXNoT25EZWF0aExpc3RlbmVyLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQmFuaXNoT25EZWF0aExpc3RlbmVyKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIEJhbmlzaE9uRGVhdGhMaXN0ZW5lci5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgb25FdmVudCgnZW50aXR5LmRlYXRoJywgKDAsIHBsYXllckZpbHRlcl8xLnBsYXllckZpbHRlcikoZnVuY3Rpb24gKF9hLCBwbGF5ZXIpIHtcclxuICAgICAgICAgICAgdmFyIHNlcnZlciA9IF9hLnNlcnZlcjtcclxuICAgICAgICAgICAgdmFyIGRpbWVuc2lvbklkID0gKDAsIHV0aWxfMS5nZXRQbGF5ZXJEaW1lbnNpb25JZCkocGxheWVyLm1pbmVjcmFmdFBsYXllcik7XHJcbiAgICAgICAgICAgIGlmIChjb25maWdfMS5iYW5EaW1lbnNpb25zLmluY2x1ZGVzKGRpbWVuc2lvbklkKSB8fCB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXIuc2NoZWR1bGVJblRpY2tzKDEsIHBsYXllciwgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhbmlzaG1lbnQgPSBuZXcgQmFuaXNobWVudF8xLkJhbmlzaG1lbnQoY2FsbGJhY2suZGF0YS5wbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhbmlzaG1lbnQubmV4dEJhbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCYW5pc2hPbkRlYXRoTGlzdGVuZXI7XHJcbn0oRXZlbnRMaXN0ZW5lcl8xLkV2ZW50TGlzdGVuZXIpKTtcclxuZXhwb3J0cy5CYW5pc2hPbkRlYXRoTGlzdGVuZXIgPSBCYW5pc2hPbkRlYXRoTGlzdGVuZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkxvZ2luQ2hlY2tCYW5pc2htZW50TGlzdGVuZXIgPSB2b2lkIDA7XHJcbnZhciBFdmVudExpc3RlbmVyXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vY29yZS9FdmVudExpc3RlbmVyXCIpO1xyXG52YXIgQmFuaXNobWVudF8xID0gcmVxdWlyZShcIi4uLy4uL2xpYi9CYW5pc2htZW50XCIpO1xyXG52YXIgTG9naW5DaGVja0JhbmlzaG1lbnRMaXN0ZW5lciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhMb2dpbkNoZWNrQmFuaXNobWVudExpc3RlbmVyLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gTG9naW5DaGVja0JhbmlzaG1lbnRMaXN0ZW5lcigpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBMb2dpbkNoZWNrQmFuaXNobWVudExpc3RlbmVyLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBvbkV2ZW50KCdwbGF5ZXIubG9nZ2VkX2luJywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHZhciBwbGF5ZXIgPSBfYS5wbGF5ZXI7XHJcbiAgICAgICAgICAgIHZhciBiYW5FbnRyeSA9IG5ldyBCYW5pc2htZW50XzEuQmFuaXNobWVudChwbGF5ZXIpO1xyXG4gICAgICAgICAgICBiYW5FbnRyeS5pc0Jhbm5lZCgpICYmIGJhbkVudHJ5LmtpY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTG9naW5DaGVja0JhbmlzaG1lbnRMaXN0ZW5lcjtcclxufShFdmVudExpc3RlbmVyXzEuRXZlbnRMaXN0ZW5lcikpO1xyXG5leHBvcnRzLkxvZ2luQ2hlY2tCYW5pc2htZW50TGlzdGVuZXIgPSBMb2dpbkNoZWNrQmFuaXNobWVudExpc3RlbmVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmNodW5rUG9zID0gdm9pZCAwO1xyXG52YXIgY2h1bmtQb3MgPSBmdW5jdGlvbiAocG9zKSB7XHJcbiAgICB2YXIgeCA9IE1hdGguZmxvb3IocG9zLnggLyAxNik7XHJcbiAgICB2YXIgeiA9IE1hdGguZmxvb3IocG9zLnogLyAxNik7XHJcbiAgICB2YXIgaWQgPSBcImNodW5rX1wiLmNvbmNhdCh4LCBcIl9cIikuY29uY2F0KHopO1xyXG4gICAgcmV0dXJuIHsgeDogeCwgejogeiwgaWQ6IGlkIH07XHJcbn07XHJcbmV4cG9ydHMuY2h1bmtQb3MgPSBjaHVua1BvcztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5jb21wYXJlUG9zID0gdm9pZCAwO1xyXG52YXIgY29tcGFyZVBvcyA9IGZ1bmN0aW9uIChwb3MxLCBwb3MyKSB7XHJcbiAgICByZXR1cm4gISFwb3MxICYmICEhcG9zMiAmJiBwb3MxLnggPT09IHBvczIueCAmJiBwb3MxLnkgPT09IHBvczIueSAmJiBwb3MxLnogPT09IHBvczIuejtcclxufTtcclxuZXhwb3J0cy5jb21wYXJlUG9zID0gY29tcGFyZVBvcztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5lZmZlY3QgPSB2b2lkIDA7XHJcbmV4cG9ydHMuZWZmZWN0ID0ge1xyXG4gICAgZ2l2ZTogZnVuY3Rpb24gKHNlbGVjdG9yLCBlZmZlY3ROYW1lLCBzZWNvbmRzLCBhbXBsaWZpZXIpIHtcclxuICAgICAgICBpZiAoc2Vjb25kcyA9PT0gdm9pZCAwKSB7IHNlY29uZHMgPSAxOyB9XHJcbiAgICAgICAgaWYgKGFtcGxpZmllciA9PT0gdm9pZCAwKSB7IGFtcGxpZmllciA9IDE7IH1cclxuICAgICAgICBVdGlscy5zZXJ2ZXIucnVuQ29tbWFuZFNpbGVudChcImVmZmVjdCBnaXZlIFwiLmNvbmNhdChzZWxlY3RvciwgXCIgXCIpLmNvbmNhdChlZmZlY3ROYW1lLCBcIiBcIikuY29uY2F0KHNlY29uZHMsIFwiIFwiKS5jb25jYXQoYW1wbGlmaWVyKSk7XHJcbiAgICB9LFxyXG4gICAgaW5zdGFudERhbWFnZTogZnVuY3Rpb24gKHNlbGVjdG9yLCBzZWNvbmRzLCBhbXBsaWZpZXIpIHtcclxuICAgICAgICBpZiAoc2Vjb25kcyA9PT0gdm9pZCAwKSB7IHNlY29uZHMgPSAxOyB9XHJcbiAgICAgICAgaWYgKGFtcGxpZmllciA9PT0gdm9pZCAwKSB7IGFtcGxpZmllciA9IDE7IH1cclxuICAgICAgICByZXR1cm4gZXhwb3J0cy5lZmZlY3QuZ2l2ZShzZWxlY3RvciwgJ21pbmVjcmFmdDppbnN0YW50X2RhbWFnZScsIHNlY29uZHMsIGFtcGxpZmllcik7XHJcbiAgICB9LFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmdldFBsYXllckRpbWVuc2lvbklkID0gdm9pZCAwO1xyXG52YXIgZ2V0UGxheWVyRGltZW5zaW9uSWQgPSBmdW5jdGlvbiAobWluZWNyYWZ0UGxheWVyKSB7XHJcbiAgICByZXR1cm4gbWluZWNyYWZ0UGxheWVyLmxldmVsLmRpbWVuc2lvbigpLmxvY2F0aW9uKCkudG9TdHJpbmcoKTtcclxufTtcclxuZXhwb3J0cy5nZXRQbGF5ZXJEaW1lbnNpb25JZCA9IGdldFBsYXllckRpbWVuc2lvbklkO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcclxuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XHJcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY2h1bmtQb3NcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY29tcGFyZVBvc1wiKSwgZXhwb3J0cyk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9lZmZlY3RcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZ2V0UGxheWVyRGltZW5zaW9uSWRcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vanNvbi13cmFwcGVyXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3BhcnRpY2xlXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3NlY29uZHNGb3JIdW1hbnNcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vc2Vjb25kc1RvVGlja3NcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdGl0bGVcIiksIGV4cG9ydHMpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkpzb25JT1dyYXBwZXIgPSB2b2lkIDA7XHJcbmV4cG9ydHMuSnNvbklPV3JhcHBlciA9IHtcclxuICAgIHJlYWQ6IGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBKc29uSU8ucmVhZChwYXRoKTsgfSxcclxuICAgIHdyaXRlOiBmdW5jdGlvbiAocGF0aCwgZGF0YSkge1xyXG4gICAgICAgIEpzb25JTy53cml0ZShwYXRoLCBkYXRhKTtcclxuICAgIH0sXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMucGFydGljbGUgPSB2b2lkIDA7XHJcbmV4cG9ydHMucGFydGljbGUgPSB7XHJcbiAgICBzaG93OiBmdW5jdGlvbiAobmFtZSwgcG9zLCBzcGVlZCwgZGVsdGEsIGNvdW50LCB0eXBlKSB7XHJcbiAgICAgICAgaWYgKHNwZWVkID09PSB2b2lkIDApIHsgc3BlZWQgPSAxOyB9XHJcbiAgICAgICAgaWYgKGRlbHRhID09PSB2b2lkIDApIHsgZGVsdGEgPSAxOyB9XHJcbiAgICAgICAgaWYgKGNvdW50ID09PSB2b2lkIDApIHsgY291bnQgPSAxMDA7IH1cclxuICAgICAgICBpZiAodHlwZSA9PT0gdm9pZCAwKSB7IHR5cGUgPSAnbm9ybWFsJzsgfVxyXG4gICAgICAgIFV0aWxzLnNlcnZlci5ydW5Db21tYW5kU2lsZW50KFwicGFydGljbGUgXCIuY29uY2F0KG5hbWUsIFwiIFwiKS5jb25jYXQocG9zLngsIFwiIFwiKS5jb25jYXQocG9zLnksIFwiIFwiKS5jb25jYXQocG9zLnosIFwiIFwiKS5jb25jYXQoZGVsdGEsIFwiIFwiKS5jb25jYXQoZGVsdGEsIFwiIFwiKS5jb25jYXQoZGVsdGEsIFwiIFwiKS5jb25jYXQoc3BlZWQsIFwiIFwiKS5jb25jYXQoY291bnQsIFwiIFwiKS5jb25jYXQodHlwZSkpO1xyXG4gICAgfSxcclxuICAgIGRyYWdvbkJyZWF0aDogZnVuY3Rpb24gKHBvcykge1xyXG4gICAgICAgIHJldHVybiBleHBvcnRzLnBhcnRpY2xlLnNob3coJ21pbmVjcmFmdDpkcmFnb25fYnJlYXRoJywgcG9zLCAwLjAxKTtcclxuICAgIH0sXHJcbiAgICB0b3RlbU9mVW5keWluZzogZnVuY3Rpb24gKHBvcykge1xyXG4gICAgICAgIHJldHVybiBleHBvcnRzLnBhcnRpY2xlLnNob3coJ21pbmVjcmFmdDp0b3RlbV9vZl91bmR5aW5nJywgcG9zLCAwLjI1LCAxLCAxMDAwKTtcclxuICAgIH0sXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuc2Vjb25kc0Zvckh1bWFucyA9IHZvaWQgMDtcclxuLyoqXHJcbiAqIFRyYW5zbGF0ZXMgc2Vjb25kcyBpbnRvIGh1bWFuIHJlYWRhYmxlIGZvcm1hdCBvZiBzZWNvbmRzLCBtaW51dGVzLCBob3VycywgZGF5cywgYW5kIHllYXJzXHJcbiAqL1xyXG5mdW5jdGlvbiBzZWNvbmRzRm9ySHVtYW5zKHNlY29uZHMpIHtcclxuICAgIHZhciBtaW51dGUgPSA2MDtcclxuICAgIHZhciBob3VyID0gNjAgKiBtaW51dGU7XHJcbiAgICB2YXIgZGF5ID0gMjQgKiBob3VyO1xyXG4gICAgdmFyIHllYXIgPSAzNjUgKiBkYXk7XHJcbiAgICB2YXIgZmxvb3JDZWlsID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiAodmFsdWUgPj0gMC41ID8gJ2NlaWwnIDogJ2Zsb29yJyk7IH07XHJcbiAgICB2YXIgaW5NaW51dGVzID0gZnVuY3Rpb24gKHNlY29uZHMpIHsgcmV0dXJuIE1hdGhbZmxvb3JDZWlsKHNlY29uZHMgLyA2MCldKHNlY29uZHMgLyBtaW51dGUpOyB9O1xyXG4gICAgdmFyIGluSG91cnMgPSBmdW5jdGlvbiAoc2Vjb25kcykge1xyXG4gICAgICAgIHJldHVybiBNYXRoW2Zsb29yQ2VpbChpbk1pbnV0ZXMoc2Vjb25kcykgLyA2MCldKGluTWludXRlcyhzZWNvbmRzKSAvIDYwKTtcclxuICAgIH07XHJcbiAgICB2YXIgaW5EYXlzID0gZnVuY3Rpb24gKHNlY29uZHMpIHtcclxuICAgICAgICByZXR1cm4gTWF0aFtmbG9vckNlaWwoaW5Ib3VycyhzZWNvbmRzKSAvIDI0KV0oaW5Ib3VycyhzZWNvbmRzKSAvIDI0KTtcclxuICAgIH07XHJcbiAgICB2YXIgaW5ZZWFycyA9IGZ1bmN0aW9uIChzZWNvbmRzKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGhbZmxvb3JDZWlsKGluRGF5cyhzZWNvbmRzKSAvIDM2NSldKGluRGF5cyhzZWNvbmRzKSAvIDM2NSk7XHJcbiAgICB9O1xyXG4gICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgY2FzZSBzZWNvbmRzIDwgNjA6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChzZWNvbmRzLCBcIiBzZWNvbmRzXCIpO1xyXG4gICAgICAgIGNhc2Ugc2Vjb25kcyA8IGhvdXI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChpbk1pbnV0ZXMoc2Vjb25kcyksIFwiIG1pbnV0ZXNcIik7XHJcbiAgICAgICAgY2FzZSBzZWNvbmRzIDwgZGF5OlxyXG4gICAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoaW5Ib3VycyhzZWNvbmRzKSwgXCIgaG91cnNcIik7XHJcbiAgICAgICAgY2FzZSBzZWNvbmRzIDwgeWVhcjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGluRGF5cyhzZWNvbmRzKSwgXCIgZGF5c1wiKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoaW5ZZWFycyhzZWNvbmRzKSwgXCIgeWVhcnNcIik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5zZWNvbmRzRm9ySHVtYW5zID0gc2Vjb25kc0Zvckh1bWFucztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5zZWNvbmRzVG9UaWNrcyA9IHZvaWQgMDtcclxudmFyIHNlY29uZHNUb1RpY2tzID0gZnVuY3Rpb24gKHRpY2tzKSB7IHJldHVybiB0aWNrcyAqIDIwOyB9O1xyXG5leHBvcnRzLnNlY29uZHNUb1RpY2tzID0gc2Vjb25kc1RvVGlja3M7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMudGl0bGUgPSB2b2lkIDA7XHJcbmV4cG9ydHMudGl0bGUgPSB7XHJcbiAgICBzaG93OiBmdW5jdGlvbiAoc2VsZWN0b3IsIHR5cGUsIHRleHQsIGNvbG9yLCBib2xkLCBpdGFsaWMpIHtcclxuICAgICAgICBpZiAoY29sb3IgPT09IHZvaWQgMCkgeyBjb2xvciA9ICd3aGl0ZSc7IH1cclxuICAgICAgICBpZiAoYm9sZCA9PT0gdm9pZCAwKSB7IGJvbGQgPSBmYWxzZTsgfVxyXG4gICAgICAgIGlmIChpdGFsaWMgPT09IHZvaWQgMCkgeyBpdGFsaWMgPSBmYWxzZTsgfVxyXG4gICAgICAgIFV0aWxzLnNlcnZlci5ydW5Db21tYW5kU2lsZW50KFwidGl0bGUgXCIuY29uY2F0KHNlbGVjdG9yLCBcIiBcIikuY29uY2F0KHR5cGUsIFwiIFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICB0ZXh0OiB0ZXh0LFxyXG4gICAgICAgICAgICBib2xkOiBib2xkLFxyXG4gICAgICAgICAgICBpdGFsaWM6IGl0YWxpYyxcclxuICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxyXG4gICAgICAgIH0pKSk7XHJcbiAgICB9LFxyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHBsdWdpbnNfMSA9IHJlcXVpcmUoXCIuL3BsdWdpbnNcIik7XHJcbmNvbnNvbGUubG9nKCdTdGFydGluZyBTb21lU2VydmVyLi4uJyk7XHJcbnBsdWdpbnNfMS5wbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xyXG4gICAgcGx1Z2luLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gbGlzdGVuZXIucmVnaXN0ZXIoKTsgfSk7XHJcbiAgICBwbHVnaW4uaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9