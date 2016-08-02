/**
 * Created by raju on 7/31/16.
 */

'use strict'

// always define the module and the controller
// controller will have access to scope object
angular
    .module('ContactsApp')  // before was core
        .controller('ContactsCtrl',function ($scope) {
            $scope.contacts = [
                {
                    "firstName": "Ethan",
                    "lastName": "Arnold",
                    "id": "510dc9a7-97d9-5131-9456-f339ac85bfb7",
                    "zip": "96363",
                    "email": "posawle@si.ac",
                    "address": "1150 Oruoju Grove"
                },
                {
                    "firstName": "Elijah",
                    "lastName": "Olson",
                    "id": "a6160800-9555-5361-bdd6-33531e8cdf77",
                    "zip": "02067",
                    "email": "zopirpi@vaetku.ci",
                    "address": "1061 Povu Circle"
                },
                {
                    "firstName": "Alvin",
                    "lastName": "McGuire",
                    "id": "36c60b86-bfdc-50ed-9d26-37df7da2fc17",
                    "zip": "82380",
                    "email": "melucor@osogi.kh",
                    "address": "1743 Bafus Boulevard"
                },
                {
                    "firstName": "Peter",
                    "lastName": "Myers",
                    "id": "27a1356d-4eec-5b63-941b-6b8f0f82fa0e",
                    "zip": "38600",
                    "email": "hebopis@wipurel.ba",
                    "address": "452 Ucmar Center"
                },
                {
                    "firstName": "Herbert",
                    "lastName": "Richards",
                    "id": "f9bb7dd9-2711-52e3-9c8c-7a4e47628ee5",
                    "zip": "83692",
                    "email": "lanfa@feidle.td",
                    "address": "1505 Rasgum Path"
                },
                {
                    "firstName": "Cody",
                    "lastName": "Blair",
                    "id": "449d9539-cc03-5c3a-ad65-2892e07073cd",
                    "zip": "03048",
                    "email": "inuleafo@miloc.com",
                    "address": "253 Wopa Park"
                },
                {
                    "firstName": "Derek",
                    "lastName": "Terry",
                    "id": "b6c39f24-468e-5799-be7f-aac5b9d1f990",
                    "zip": "18972",
                    "email": "cisef@ipi.fm",
                    "address": "56 Fozsaf Way"
                },
                {
                    "firstName": "Ronnie",
                    "lastName": "Wright",
                    "id": "3218deb9-6c43-5264-9cb3-a89ad2d61403",
                    "zip": "03948",
                    "email": "hohzi@hez.mq",
                    "address": "1799 Ibbo Place"
                },
                {
                    "firstName": "Caroline",
                    "lastName": "Hoffman",
                    "id": "e539aed4-985b-582c-93be-21acaf06c835",
                    "zip": "74410",
                    "email": "here@refgeg.ax",
                    "address": "1243 Voon Center"
                },
                {
                    "firstName": "Hallie",
                    "lastName": "Reyes",
                    "id": "c36a2cc8-b7eb-503e-aaae-ce158bf2f3c3",
                    "zip": "35020",
                    "email": "osutiwme@buknumito.gy",
                    "address": "1070 Baban Heights"
                }
            ];
            $scope.fields = Object.keys($scope.contacts[0]) || [];

        })
        .controller('saveCtrl', function($scope){
        $scope.saveContact = function(contact){
            console.log("raja raja raja....")
            console.log(contact);
        }
        });