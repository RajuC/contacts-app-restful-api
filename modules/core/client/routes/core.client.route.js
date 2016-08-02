/**
 * Created by raju on 7/31/16.
 */
'use strict'

// coming from angular-ui
angular
    .module('ContactsApp')
    .config(function ($stateProvider) {
       $stateProvider
            .state('display',{
                url : '/display', // basic route
                templateUrl: 'modules/core/client/views/display.client.tpl.html'
            })
            .state('create',{
                url : '/create', // basic route
                templateUrl: 'modules/core/client/views/create.client.tpl.html'
            });

    });
