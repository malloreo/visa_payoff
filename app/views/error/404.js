'use strict';

angular.module('myApp.404', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/404', {
    templateUrl: 'views/error/404.html',
    controller: 'NotFoundController'
  });
}])

.controller('NotFoundController', ['$scope', function($scope) {

}]);