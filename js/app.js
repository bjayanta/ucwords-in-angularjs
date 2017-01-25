/**
 * Auth: Jayanta Biswas
 * remove underscore, dash ... etc in Angular js
 * 
 */
var app = angular.module('MainApp', []);

// test controller
app.controller('TestCtrl', ['$scope', function($scope){
	// some string
	$scope.dataset = [
		'jayanta biswas', 
		'rony debnath', 
		'md araf karim', 
		'any other text goes to here'
	];

}])

// custom filter
app.filter('ucwords', function() {
	return function(input) {
		return input.toLowerCase().replace(/\b[a-z]/g, function(letter) {
			return letter.toUpperCase();
		});
	}
});