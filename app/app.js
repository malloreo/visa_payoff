'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.departments',
  'myApp.projects',
  'myApp.project',
  'myApp.404',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/departments'});
  $routeProvider.otherwise({redirectTo: '/project'});
}]);
