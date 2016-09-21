'use strict';

angular.module('myApp.departments', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/departments', {
    templateUrl: 'views/departments/departments.html',
    controller: 'DepartmentsController'
  });
}])

.controller('DepartmentsController', ['$scope', function($scope) {
	$scope.name = "mike";
}]);