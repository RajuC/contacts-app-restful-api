
'use strict';

 angular
        .module(ApplicationConfiguration.applicationModuleName)
	         .filter('startFrom',function () {   //filter will always return a function
		         return function(data, start){
		             return data.slice(start);        // To slice data for pagination
		         };
		         })
	     	.filter('filterContacts', function() {
		         return function (contact) {
		             var cont = {};
		             for(var key in contact) {
		                 if (key != '_id') {
		                   if (key != '__v')
		                     cont[key] = contact[key];
		                 }
		             }
		             return cont;
		         };
		     })
	     	.filter('filterFields', function() {
		         return function (fields) {
		             var cont = {};
		             for(var key in fields) {
		                 if (fields[key] != '_id') {
		                     if (fields[key] != '__v'){
		                       var reg = fields[key]
		                     // insert a space before all caps
		                         .replace(/([A-Z])/g, ' $1')
		                         // uppercase the first character
		                         .replace(/^./, function(str){ return str.toUpperCase(); });
		                       cont[key] = reg;
		                     }
		                 }
		             }
		             return cont;
		         };
		     });