'use strict';

angular.module('myApp.project', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/project', {
    templateUrl: 'views/project/project.html',
    controller: 'ProjectController'
  });
}])

.controller('ProjectController', ['$scope', '$http', function($scope, $http) {

	$http.get("json/project.json").success(function(data) {
		// console.log(data);
        $scope.deps = data;
    });

}]);