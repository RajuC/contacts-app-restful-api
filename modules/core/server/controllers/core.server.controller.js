/**
 * Created by raju on 7/10/16.
 */

'use strict';


var mockService = require('../utils/core.server.mock');
var contactService =  require('../services/contact.server.service.js');


// post a contact
module.exports.createContact = function (req,res) {
    var contact = req.body;
    if (!contact) {
        res.status(400);
        res.end("error undefined in posting the contact..");
    }

    contactService.saveContact(contact, function (err, contact) {
        if (err) {
            console.log("server controller :save contact error : ");
            console.log(err);
            res
                .status(400)
                .json([{message: "error in saving data"}]);
        } else {
            res.status(200);
            res.json(contact);
        }

    })

    }

// get contacts
module.exports.getContacts = function(req,res){
    res.status(200);
//    res.json(mockService.getContacts);
    contactService.getAllContacts(function (err,contacts) {
        if (err) {
            console.log("server controller :Error in getting all contacts: " );
            console.log(err);
            res
                .status(400)
                .json([{message:"error in getting all contacts data"}]);
        } else {
            res.status(200);
            res.json(contacts);
        }

    })
}


//get contact by id
module.exports.getContactById = function (req,res) {
    var id = req.params.id;
    contactService.findContactById(id, function (err, contact) {
        if (err) {
            console.log("server controller :get contact by id error : ");
            console.log(err);
            res
                .status(400)
                .json([{message: "error in getting contact by id"}]);
        } else {
            res.status(200);
            res.json(contact);
        }

    })
}



//To update contact
module.exports.updateContact = function(req,res){
    var contactToUpdate = req.body;
    var id = req.metadata.id;
    contactService.updateContact(id, contactToUpdate, function (err, contact) {
        if (err) {
            console.log("server controller :update contact by id error : ");
            console.log(err);
            res
                .status(400)
                .json([{message: "error in update contact by id"}]);
        } else {
            res.status(200);
            res.json(contact);
        }

    })
}



//To delete contact by id
module.exports.deleteContact = function(req,res){
    var id = req.params.id;
    contactService.deleteContactById(id, function (err, contact) {
        if (err) {
            console.log("server controller :delete contact by id error : ");
            console.log(err);
            res
                .status(400)
                .json([{message: "error in delete contact by id"}]);
        } else {
            res.status(200);
            res.json(contact);
        }

    })

}

// validate the contact id and forwarding it to required request (getcontactbyid and update)
module.exports.validateContactId = function(req,res,next,id){
    var metadata =req.metadata = {};
    metadata.id = id;
    contactService.findContactById(id,function (err,contact) {
        if (err) {
            console.log("server validate controller :get contact by id error : " );
            console.log(err);
            res
                .status(400)
                .json([{message:"validate error in getting contact by id"}]);
        } else {
            metadata.model = contact;
        }

    })
    next();
}





// not using here
//To update contact by each field (used if any new field is not added or only existing field wants to be updated)
module.exports.updateContactByParam = function(req,res){
    var contact = req.body;
    var id = req.metadata.id;
    console.log(contact);
    if (!contact){
        res.status(400);
        res.end([{error:"UpdateError-provide valid contact Id details"}]);
    }
    contact = mockService.updateContactByEachField(id,contact);
    if (contact){
        res.status(200);
        res.json(contact);
    }
}









