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
        }
        return {
            _getContacts : _getContacts
        };
    })
    .factory('SaveContactsService',function ($http) {
        var _saveContact = function (contact) {
            var promise = $http.post(url,contact);
            return promise;
        }
    })

