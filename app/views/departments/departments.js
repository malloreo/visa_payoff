'use strict';

angular.module('myApp.departments', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/departments', {
    templateUrl: 'views/departments/departments.html',
    controller: 'DepartmentsController'
  });
}])

.controller('DepartmentsController', ['$scope', '$http', function($scope, $http) {

	$http.get("json/departments.json").success(function(data) {
		// console.log(data);
        $scope.deps = data;
    });

}]);