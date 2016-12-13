/**
 * Created by raju on 7/31/16.
 */

'use strict'

// always define the module and the controller
// controller will have access to scope object
angular
    .module('ContactsApp')  // before was core
        .controller('ContactsCtrl',function ($scope,ContactsService) {
           // handle the success and failure promise from service
            var contactsPromise = ContactsService._getContacts();
            var successCallback = function(response){
                $scope.contacts = response;
                $scope.fields = Object.keys($scope.contacts[0]) || [];
            };
            var failureCallback = function (err) {
                console.log("Error while getting:" + err);
            };

            contactsPromise
                .success(successCallback)
                .error(failureCallback);

        })
        .controller('saveCtrl', function($scope,SaveContactsService){
            $scope.saveContact = function(contact){
                console.log("raja raja raja....")
                console.log(contact);}
            });