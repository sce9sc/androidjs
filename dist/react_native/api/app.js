"use strict";
exports.__esModule = true;
var NativeModules = require('react-native').NativeModules;
function getPath(name) {
    return NativeModules.App.getPath(name);
}
exports.getPath = getPath;
function loadURL(url) {
    location.href = url;
}
exports.loadURL = loadURL;
function reload() {
    location.reload();
}
exports.reload = reload;
function exec(cmd, args) {
    if (args === void 0) { args = []; }
    return JSON.parse(NativeModules.App.exec([cmd].concat(args)));
}
exports.exec = exec;
