"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var APP_BRIDGE = {
    getData: function () { return electron_1.ipcRenderer.invoke("GET/data"); } //returns a promise   
};
exports["default"] = APP_BRIDGE;
//window-api
electron_1.contextBridge.exposeInMainWorld("bridge", APP_BRIDGE);
//# sourceMappingURL=preload.js.map