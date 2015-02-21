var ejemploA2Module = angular.module('ejemploA2', [ 'ngRoute', 'ngCookies',
		'ui.bootstrap' ]);

ejemploA2Module.factory('authentication', function($cookies, $location) {

	return ({
		login : function(userName, password) {
			if (typeof (userName) == 'undefined') {
				alert("Ingrese un correo válido");

				return;
			}

			if (typeof (password) == 'undefined') {
				alert("Ingrese una contraseña");

				return;
			}

			$cookies.userName = userName;
			$cookies.password = password;

			$location.url('/pages/empty');
		}
	});
});

// / *** CONFIGURATIONS *** / //
ejemploA2Module.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : './pages/login.html',
		controller : 'loginController'
	});

	$routeProvider.when('/pages/empty', {
		templateUrl : './pages/empty.html'
	});
} ]);

// / *** RUNNERS *** / //
ejemploA2Module.run(function($rootScope, authentication) {
	$rootScope.$on('$routeChangeStart', function() {

	});
});

// / *** CONTROLLERS *** / //
ejemploA2Module.controller('loginController', function($scope, authentication) {
	$scope.login = function() {
		authentication.login($scope.userName, $scope.password);
	};
});