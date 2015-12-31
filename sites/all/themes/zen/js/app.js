/*
'use strict';

var tlsApp = angular.module('tlsApp', ['ngRoute', 'ngResource', 'ngSanitize', 'tlsDirectives']);

tlsApp.run(function($rootScope, $location){
    console.log('tlsApp.run');
});*/


//Services
// step 1 create an app
'use strict';
var tlsApp = angular.module('tlsApp', ['ngRoute', 'ngResource', 'ngSanitize']);
    // tep 2 create factory
    // Service name, function


/*tlsApp.run(function($rootScope, $location){
    jQuery(document).foundation();
    console.log('run');
});

tlsApp.config(function($routerProvider){

    console.log('config');
});*/

tlsApp.controller('MainController',
    function($rootScope, $scope, $route, $location){
        console.log('MainController');
    //$rootScope.variable = "Hello";
});




