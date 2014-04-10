var app = angular.module('app', [])
	.config(function($routeProvider) {
			$routeProvider
			.when('/', {
				templateUrl: '/app/views/main.html',
				controller: 'MainCtrl'
			});
	});

app.controller('MainCtrl', function($scope) {
	$scope.message = 'Welcome to myApp!';
});