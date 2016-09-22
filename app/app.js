'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.departments',
  'myApp.projects',
  'myApp.detail',
  'myApp.404',
  'myApp.version',
  'myApp.search'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/departments'});

}]);

$(document).ready(function() {
	$("#srch-term").on("keyup", function() {
		var text = $("#srch-term").val().toLowerCase();
		text = text.replace(/ /g,'');
		var allowable = ["amrit", "kafka", "coreconfig", "java"];
		if (allowable.indexOf(text) != -1){
			$("#srch-term").val("");
			var url = "http://localhost:8000/index.html#!/" + text + "/search";
			window.location = url;
		}
	});

});