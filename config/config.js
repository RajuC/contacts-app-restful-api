/**
 * Created by raju on 7/10/16.
 */

'use strict';

var _ = require('lodash'),
    chalk = require('chalk'),
    glob = require('glob'),
    fs = require('fs'),
    path = require('path');

// self invoking function
var initGlobalConfig = function () {
    var config = {
        server:{},
        client:{}
    };
    // get the port
    var defaultConfig =    require('./env/default');
    //get the asset config path
    var defaultAssetConfig = require('./assets/default');
    //gives the environment which the app is running on
    var environment = process.env.NODE_ENV;
    //extends the two configuration files
    config = _.extend(defaultConfig,defaultAssetConfig,require('./env/'+ ( environment || 'development')));

    config.client.files = getGlobbedPaths(path.join(process.cwd(),config.client.location),
        process.cwd().replace(new RegExp(/\\/g),'/'));
    // console.log(config.client.files); //  [ '/modules/core/client/' ]

    return config;
};

var getGlobbedPaths = function (globPatterns, excludes) {
    // URL paths regex
    var urlRegex = new RegExp('^(?:[a-z]+:)?\/\/', 'i');

    // The output array
    var output = [];

    // If glob pattern is array then we use each pattern in a recursive way, otherwise we use glob
    if (_.isArray(globPatterns)) {
        globPatterns.forEach(function (globPattern) {
            output = _.union(output, getGlobbedPaths(globPattern, excludes));
        });
    } else if (_.isString(globPatterns)) {
        if (urlRegex.test(globPatterns)) {
            output.push(globPatterns);
        } else {
            var files = glob.sync(globPatterns);
            if (excludes) {
                files = files.map(function (file) {
                    if (_.isArray(excludes)) {
                        for (var i in excludes) {
                            file = file.replace(excludes[i], '');
                        }
                    } else {
                        file = file.replace(excludes, '');
                    }
                    return file;
                });
            }
            output = _.union(output, files);
        }
    }

    return output;
}

var validateEnvironmentVariable = function () {
    var environmentFiles = glob.sync('./config/env/' + process.env.NODE_ENV + '.js');
    console.log();
    if (!environmentFiles.length) {
        if (process.env.NODE_ENV) {
            console.error(chalk.red('+ Error: No configuration file found for "' + process.env.NODE_ENV + '" environment using development instead'));
        } else {
            console.error(chalk.red('+ Error: NODE_ENV is not defined! Using default development environment'));
        }
        process.env.NODE_ENV = 'development';
    }
    // Reset console color
    console.log(chalk.white(''));
};

module.exports = initGlobalConfig();


