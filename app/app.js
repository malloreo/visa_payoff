'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.departments',
  'myApp.projects',
  'myApp.project',
  'myApp.404',
  'myApp.version',
  'myApp.search'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/departments'});
  $routeProvider.otherwise({redirectTo: '/project'});

}]);

$(document).ready(function() {
	$("#srch-term").on("keyup", function() {
		var text = $("#srch-term").val().toLowerCase();
		switch (text) {
			case "hadoop":
				$("#srch-term").val("");
				window.location = "http://localhost:8000/index.html#!/hadoop/search";
				break;
			case "amrit":
				$("#srch-term").val("");
				window.location = "http://localhost:8000/index.html#!/amrit/search";
				break;
			default:
				break;
		}
	});

});