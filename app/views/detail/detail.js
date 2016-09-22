'use strict';

angular.module('myApp.detail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:dep/detail', {
    templateUrl: 'views/detail/detail.html',
    controller: 'detailController'
  });
}])

.controller('detailController', ['$scope', '$http', function($scope, $http) {
	$http.get("json/kafka.json").success(function(data) {

        $scope.deps = data;

    }).error(function(data, status, headers, config) {
        $location.url('/404');
    });
}]);