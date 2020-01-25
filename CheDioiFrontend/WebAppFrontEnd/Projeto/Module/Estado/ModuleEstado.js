var myApp = angular.module('myApp', ['ngRoute', 'myControllers']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/estado', { templateUrl: endereco + 'Estado/Estado.html'}).
        when('/atualizar', { templateUrl: endereco + 'Estado/Update.html'}).
        when('/deletar', { templateUrl: endereco + 'Estado/Delete.html'}).
        when('/criar', { templateUrl: endereco + 'Estado/Create.html'}).
        otherwise({ redirectTo: '/estado' });
}]);