/**
 * Created by raju on 7/31/16.
 */

'use strict'

// always define the module and the controller
// controller will have access to scope object
angular
    .module('ContactsApp')  // before was core
        .controller('ContactsCtrl',['$scope','ContactsService', '$state' ,function ($scope, ContactsService, $state) {
           // handle the success and failure promise from service
            console.log("getting all the contacts..");
            var contactsPromise = ContactsService._getContacts();
            var successCallback = function(response){
                console.log(response);
                $scope.contacts = response;
                $scope.fields = Object.keys($scope.contacts[0]) || [];
            };
            var failureCallback = function (err) {
                console.log("Error while getting:" + err);
            };

            contactsPromise
                .success(successCallback)
                .error(failureCallback);

        }])
        .controller('SaveCtrl',['$scope', 'ContactsService', function($scope, ContactsService){
            $scope.saveContact = function(contact){
                console.log("raja raja raja....")
                console.log(contact);}
            }]
            );