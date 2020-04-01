var myApp = angular.module('myApp', ['ngRoute', 'ControllerHeader', 'ReadController']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/funcionarios', { templateUrl: endereco + 'Funcionario/funcionario.html' }).
        otherwise({ redirectTo: '/funcionarios' });
}]);