'use strict';

angular.module('myApp.projects', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:dep/projects', {
    templateUrl: 'views/projects/projects.html',
    controller: 'ProjectsController'
  });
}])

.controller('ProjectsController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {

 	var dep = $routeParams.dep;
 	if (dep != 'Data Platform' && dep != 'Network Processing') {
 		$location.url('/404');
 	}

 	var dataUrl;
 	if (dep == 'Network Processing') {
 		dataUrl = "json/list_of_projects_networkprocessing.json";
 	} else if (dep == 'Data Platform') {
 		dataUrl = "json/list_of_projects_dataplatform.json";
 	}

 	$scope.depName = dep;
	$http.get(dataUrl).success(function(data) {

        $scope.list = data.list;

    }).error(function(data, status, headers, config) {
        $location.url('/404');
    });

}]);