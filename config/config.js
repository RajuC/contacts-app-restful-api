/**
 * Created by raju on 7/10/16.
 */

'use strict';

var _ = require('lodash');

// self invoking function
var initGlobalConfig = function () {
    var config = {
        server:{},
        client:{}
    };

    var defaultConfig =    require('./env/default');
    //gives the environment which the app is running on
    var environment = process.env.NODE_ENV;
    //extends the two configuration files
    config = _.extend(defaultConfig,require('./env/'+ ( environment || 'development')));
    return config;
};

module.exports = initGlobalConfig();


