var myApp = angular.module('myApp', ['ngRoute', 'ControllerCreate', 'ControllerRead',
    'ControllerUpdate']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/Estado', { templateUrl: endereco + 'Estado/Estado.html'}).
        when('/Atualizar', { templateUrl: endereco + 'Estado/Update.html'}).
        when('/Criar', { templateUrl: endereco + 'Estado/Create.html'}).
        otherwise({ redirectTo: '/Estado' });
}]);