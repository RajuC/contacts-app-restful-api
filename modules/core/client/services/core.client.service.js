/**
 * Created by raju on 8/3/16.
 */
'use strict'
var url ='/api/contact';

angular
    .module('ContactsApp')  // before was core
    .factory('ContactsService',function($http) {   // get the required service to the service
        var _getContacts = function () {
            var promise = $http.get(url);
            return promise;
        },
        _saveContact = function(contact) {
            console.log("you want to save contact ??")
            var savePromise = $http.post(url, contact);
            return savePromise
        }; 
        return {
            _getContacts : _getContacts,
            _saveContact : _saveContact
        };
    });
