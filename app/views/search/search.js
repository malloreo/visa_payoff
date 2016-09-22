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

	console.log(searchWord);
	switch (searchWord) {
		case "hadoop":
			break;
		case "amrit":
			$http.get("json/list_of_projects_amrit.json").success(function(data) {
				console.log(data)
				console.log("mike");
				$scope.list = data.list;
			})
			break;
		default:
			break;
	}
	// $http.get("json/departments.json").success(function(data) {

 //        $scope.deps = data;

 //    }).error(function(data, status, headers, config) {
 //        $location.url('/404');
 //    });

}]);