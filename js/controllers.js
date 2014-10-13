

var uiModule = angular.module("mineSweeperJs", []);

uiModule.controller("gameBoard", function($scope) {
	$scope.items = { 
		"a-0": {
			"cleared": false,
			"mine": true 
		}, 
		"a-1": {
			"cleared": false,
			"mine": true 
		},
		"a-2": {
			"cleared": false,
			"mine": true 
		},
		"a-3": {
			"cleared": false,
			"mine": true 
		},
		"a-4": {
			"cleared": false,
			"mine": true 
		},
		"a-5": {
			"cleared": false,
			"mine": true 
		},
		"a-6": {
			"cleared": false,
			"mine": true 
		},
		"a-7": {
			"cleared": false,
			"mine": true 
		},
		"a-8": {
			"cleared": false,
			"mine": true 
		},
		"a-9": {
			"cleared": false,
			"mine": true 
		},
		"b-0": {
			"cleared": false,
			"mine": true 
		}, 
		"b-1": {
			"cleared": false,
			"mine": true 
		},
		"b-2": {
			"cleared": false,
			"mine": true 
		},
		"b-3": {
			"cleared": false,
			"mine": true 
		},
		"b-4": {
			"cleared": false,
			"mine": true 
		},
		"b-5": {
			"cleared": false,
			"mine": true 
		},
		"b-6": {
			"cleared": false,
			"mine": true 
		},
		"b-7": {
			"cleared": false,
			"mine": true 
		},
		"b-8": {
			"cleared": false,
			"mine": true 
		},
		"b-9": {
			"cleared": false,
			"mine": true 
		}
	};
	$scope.text = {
		link: " More"
	}
})
