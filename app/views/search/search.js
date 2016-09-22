'use strict';

angular.module('myApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:dep/search', {
    templateUrl: 'views/search/search.html',
    controller: 'SearchController'
  });
}])

.controller('SearchController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {

	var searchWord = $routeParams.dep;
	$scope.searchWord = searchWord;

	switch (searchWord) {
		case "hadoop":
			break;
		case "amrit":
			$http.get("json/list_of_projects_amrit.json").success(function(data) {
				$scope.list = data.list;
			})
			break;
		default:
			break;
	}

}]);