"use strict";
var NativeModules = require('react-native').NativeModules;
var deeplink = /** @class */ (function () {
    function deeplink() {
    }
    deeplink.prototype.getLink = function () {
        return NativeModules.DeepLink.getDeepLink();
    };
    deeplink.prototype.openLink = function () {
        return NativeModules.DeepLink.openDeepLink();
    };
    return deeplink;
}());
module.exports = new deeplink();
