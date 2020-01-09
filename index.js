'use strict';
const mergeJSON = require('merge-json');

module.exports = class xrequire {
    constructor(conf, config) {
        var defaultConfig = {
            "PRO" : true,   // If false logs won't do anything
            "DEV" : ".."
        };
        this._c = mergeJSON.merge(defaultConfig, config);
        if (!this._c.hasOwnProperty(conf))
            this._conf = PRO;
        else
            this._conf = conf;

    }

    require(module){
        if (this._conf == "PRO")
            return require(module);
        return require( this._c[this._conf] + "/" + module + "/index.js");
    }
}