'use strict';
const mergeJSON = require('merge-json');

module.exports = class xrequire {
    constructor(config = {}) {
        if (!global.hasOwnProperty("extendedrequirer")) {
            var defaultConfig = {
                "currentConfig" : "PRO",
                "DEV": ".."
            };
            var _conf = "PRO";
            global.extendedrequirer  = mergeJSON.merge(defaultConfig, config)
        }
    }

    require(module) {
        if (global.extendedrequirer.currentConfig == "PRO")
            return require(module);
        return require(global.extendedrequirer[global.extendedrequirer.currentConfig] + "/" + module + "/index.js");
    }
}