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
           
        $scope.pageSize = 5;
        $scope.currentPage = 1;

                   // To sort contacts
        $scope.sortContacts = function(keyname){
            $scope.sortKey = keyname;   //set the sortKey to the param passed
            $scope.sortSign = !$scope.sortSign; //if true make it false and vice versa
        };

        var getAllContacts = function() {
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

        };
        getAllContacts();
        // redirect to edit template
        $scope.editContact = function (contact) {
            $state.go('edit',{contactId: contact._id});
        };

        //delete contacts
        $scope.deleteContact = function (contact) {
            var deletePromise = ContactsService._deleteContact(contact._id);

            var successCallBack = function (response) {
                $scope.message = response;
                getAllContacts();
            };

            var failureCallBack = function (err) {
                $scope.message = err;
            };
            deletePromise
                .success(successCallBack)
                .error(failureCallBack);
        };

        }]) 
        .controller('SaveCtrl',['$scope', 'ContactsService', function($scope, ContactsService){
            $scope.saveContact = function(contact){
                console.log("saving the contact...");
                console.log(contact);
                var savePromise = ContactsService._saveContact(contact);
                var successCallback = function(response){
                    $scope.contact = '';
                    $scope.message = response;
                };
                var failureCallback = function(err) {
                    $scope.message = err;
                };

            savePromise
                   .success(successCallback)
                   .error(failureCallback);
             };       

            }]
            );
