'use strict';

angular.module('myApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:dep/search', {
    templateUrl: 'views/search/search.html',
    controller: 'SearchController'
  });
}])

.controller('SearchController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {

	var searchWord = $routeParams.dep.toLowerCase();
	$scope.searchWord = searchWord;

	var url = "json/search_" + searchWord + ".json";

	$http.get(url).success(function(data) {
		$scope.list = data.list;
	})
	

}]);