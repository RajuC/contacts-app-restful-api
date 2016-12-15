/**
 * Created by raju on 7/10/16.
 */
'use strict';

var Chance = require('chance'),
    _ = require('lodash');


var contacts = genMockContacts();


module.exports.saveContact = function (contact){
    var chance = new Chance();
    var cloneContact = _.clone(contact);
    cloneContact.id = chance.guid();
    contacts.push(cloneContact);
    return cloneContact;
};


module.exports.getContacts = contacts;

// generate the mock contacts  get all the mock contacts
function genMockContacts () {
    var chance = new Chance();
    var contacts = [];

    for(var i =0;i<10;i++){
        var contact = {};
        var name = chance.name().split(' ');
        contact.id = chance.guid();
        contact.firstName = name[0];
        contact.lastName = name[1];
        contact.zip = chance.zip();
        contact.email = chance.email();
        contacts.push(contact);
    }
//    console.log(contacts);
    return contacts;
}

// update the whole object
module.exports.updateContact = function(index, updatedContact){
    contacts[index] = updatedContact;
    return updatedContact;
};


// not using here
//To update contact by each field
module.exports.updateContactByEachField = function (id,reqContact) {
    var updatedContact;
    contacts.some(function (contact) {
        if (contact.id == id) {
            updatedContact = {};
            updatedContact.id = id;
            updatedContact.firstName = reqContact.firstName;
            updatedContact.lastName = reqContact.lastName;
            updatedContact.zip = reqContact.zip;
            updatedContact.email = reqContact.email;
            return updatedContact;
        }
    });
    return updatedContact;
};



//To fetch contact by id
module.exports.getContactById = function (id) {
    var foundContact;
    contacts.some(function(contact,index){
        if (contact.id == id) {
            foundContact = {}
            console.log("mock service : get contact by id " );
            console.log(contact);
            foundContact.contact = contact;
            foundContact.index = index;
            return foundContact;
        }
        });
    return foundContact;
};


//To delete contact by id
module.exports.deleteContact = function (id) {
    var bool = false;
    for (var j in contacts) {
        if (contacts[j].id == id) {
            contacts.splice(j,1);
            bool = true;
            return bool;
        }
    }
};