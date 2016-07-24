/**
 * Created by raju on 7/17/16.
 */

'use strict'


var config = require('../config'),
    mongoose = require('mongoose'),
    path = require('path'),
    contact =   require(path.join(process.cwd(),'modules/core/server/models/contact.server.model'));

module.exports.connect = function (callback) {
    mongoose.connect(config.db.uri,config.db.options,function (err) {
        if (err){
            console.error("Mongoose connecting error!!");
            console.log(err);
        } else{
            if (callback){
                callback();
            }
        }
    })
    
}