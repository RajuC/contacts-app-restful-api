/**
 * Created by raju on 7/17/16.
 */

'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    validator = require('validator');

var validateFieldStrategy = function (property){
    return property.length;

};
var validateEmailStrategy = function (property){
    return validator.isEmail(property);
};

var ContactSchema = new Schema({
    firstName: {
        type : String,
        default: '',
        trim:true,
        validate: [validateFieldStrategy,'Please fill the first name, cannot be empty']
    },
    lastName: {
        type : String,
        default: '',
        trim:true,
        validate: [validateFieldStrategy,'Please fill the last name, cannot be empty']
    },
    email : {
        type : String,
        default: '',
        trim:true,
        unique:true,
        lowercase:true,
        validate: [validateEmailStrategy,'Please enter the valid email id -- example@ex.com']
    },
    zip: {
        type : String,
        default: '',
        trim:true,
        validate: [validateFieldStrategy,'Please fill the zip, cannot be empty']
    },
    address: {
        type : String,
        default: '',
        trim:true,
        unique:false,        
        validate: [validateFieldStrategy,'Please fill the address, cannot be empty']
    },

});

var Contact = mongoose.model('Contact',ContactSchema);
