'use strict';

angular
       .module(ApplicationConfiguration.applicationModuleName)
         .value('ContactForm',{
             fields: ['firstName','lastName','email','zip','address']
         })
         .directive('contactForm',function () {
             return {
                 restrict: 'E',
                 templateUrl: 'modules/core/client/views/contact-form.client.tpl.html',
                 scope: false,
                 link: function ($scope, element, attrs) {
                     $scope.fields = $scope.fields || ContactForm.fields;
                 }
             };
         });
    