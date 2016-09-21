'use strict';

angular.module('myApp.projects', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:dep/projects', {
    templateUrl: 'views/projects/projects.html',
    controller: 'ProjectsController'
  });
}])

.controller('ProjectsController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {

	$scope.depName = $routeParams.dep;
	$http.get("json/departments.json").success(function(data) {

        $scope.deps = data;

    }).error(function(data, status, headers, config) {
        $location.url('/404');
    });

}]);