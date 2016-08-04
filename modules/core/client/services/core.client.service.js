/**
 * Created by raju on 8/3/16.
 */
'use strict'
angular
    .module('ContactsApp')  // before was core
    .factory('ContactsService',function($http) {   // get the required service to the service
        var _getContacts = function () {
            var promise = $http.get('/api/contact');
            return promise;
        }
        return {
            _getContacts : _getContacts
        };
    })
    .factory('SaveContactsService',function () {
        // TO DO ::
        
    })

