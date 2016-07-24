/**
 * Created by raju on 7/17/16.
 */

'use strict'

var mongoose = require('mongoose'),
    Contact = mongoose.model('Contact');

//https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications

module.exports.saveContact = function (ContactToSave,callback) {
    var contact = new Contact(ContactToSave);  // creates a new object whch is of model
    contact.save(function (err) {
        callback(err,contact);
    })
}


module.exports.getAllContacts = function (callback){
    // get all the contacts
    Contact.find({}, function(err,contacts) {
            callback(err,contacts);
    });
}


module.exports.findContactById = function (id,callback) {
    Contact.findById(id, function(err, contact) {
        callback(err,contact);
    });
}


module.exports.updateContact = function (id, contactToUpdate,callback) {
    console.log(contactToUpdate);
    Contact.findByIdAndUpdate(id,contactToUpdate, function(err, contact) {
            callback(err,contact);
    });
}


module.exports.deleteContactById = function (id,callback) {
    Contact.findByIdAndRemove(id, function(err) {
        callback(err,{"status":"successfully deleted " + id});
    });

}
