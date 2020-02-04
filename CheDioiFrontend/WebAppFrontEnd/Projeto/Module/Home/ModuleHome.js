var myApp = angular.module('myApp', ['ngRoute', 'ControllerHeader']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/Home', { templateUrl: endereco + 'home/Menu.html' }).
        otherwise({ redirectTo: '/Home' });
}]);

