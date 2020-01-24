var myApp = angular.module('myApp', ['ngRoute', 'myControllers']);
var myControllers = angular.module("myControllers", []);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/Home', { templateUrl: endereco + 'home/Menu.html' }).
        otherwise({ redirectTo: '/Home' });
}]);