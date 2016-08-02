/**
 * Created by raju on 7/31/16.
 */

'use strict';

var ApplicationConfiguration  = (function(){

    var _applicationModuleName = 'ContactsApp',
        _applicationDependencies = ['ui.router'];

    var _registerModule = function(moduleName, dependencies){
        // create angular module
        angular.module(moduleName, dependencies || []);
        angular.module(_applicationModuleName).requires.push(moduleName);
    };

    return {
        applicationModuleName: _applicationModuleName,
        applicationDependencies: _applicationDependencies,
        registerModule: _registerModule
    }
})();