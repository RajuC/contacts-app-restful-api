/**
 * Created by raju on 7/31/16.
 */

'use strict';

var ApplicationConfiguration  = (function(){

    var _applicationModuleName = 'ContactsApp',
        _applicationDependencies = [];

    var _registerModule = function(moduleName, dependencies){
        // create angular module
        angular.module(applicationModuleName, dependencies || []);
        angular.module(applicationModuleName).requires.push(moduleName);
    }

    return {
        applicationModuleName: _applicationModuleName,
        applicationDependencies: _applicationDependencies,
        registerModule: _registerModule
    }
})();