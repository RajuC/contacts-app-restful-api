/**
 * Created by raju on 7/31/16.
 */

'use strict'

// always define the module and the controller
// controller will have access to scope object
angular
    .module('core')
        .controller('ContactsCntrl',function ($scope) {
            $scope.names = 'rajj';

        });
