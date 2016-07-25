/**
 * Created by raju on 7/10/16.
 */

'use strict';

var express = require('express'), // web server framework
    bodyParser = require('body-parser'),
    path = require('path'),
    consolidate = require('consolidate'),
    swig = require('swig');  // 3rd party library




// provides the interface to communicate with other modules ; how to use this in other modules is ->  require('./express');
module.exports.init = function () {
    var app = express();
    //integrating body parser middleware//
    this.initMakePublicDirStatic(app);
    this.initBodyParser(app);
    this.initViewEngine(app);
    return app;
}


module.exports.initBodyParser = function (app) {
// parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
    app.use(bodyParser.json())

}

module.exports.initViewEngine = function (app) {
    app.engine('server.view.html',consolidate['swig']); // it will expect index at server.view.html
    app.set('view engine', 'server.view.html');
    app.set('views',path.join(process.cwd(),'/modules/core/server/views/'));
}
// all the html are a part of views folder


module.exports.initMakePublicDirStatic = function (app) {
    //app.use(express.static('public'));   // make the public folder static

    app.use("/public/", express.static(path.resolve('./public/')));
}