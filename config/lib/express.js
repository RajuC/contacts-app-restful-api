/**
 * Created by raju on 7/10/16.
 */

'use strict';

var express = require('express'), // web server framework
    bodyParser = require('body-parser')


// provides the interface to communicate with other modules ; how to use this in other modules is ->  require('./express');
module.exports.init = function () {
    var app = express();
    //integrating body parser middleware//
    this.initBodyParser(app);
    return app;
}


module.exports.initBodyParser = function (app) {
// parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
    app.use(bodyParser.json())

}