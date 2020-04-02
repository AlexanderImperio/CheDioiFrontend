var myApp = angular.module('myApp', ['ngRoute', 'ControllerHeader', 'ReadController']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/funcionarios', { templateUrl: endereco + 'Funcionario/funcionario.html' }).
        when('/Atualizar', { templateUrl: endereco + 'Funcionario/Update.html' }).
        when('/Cadastrar', { templateUrl: endereco + 'Funcionario/Create.html' }).
        otherwise({ redirectTo: '/funcionarios' });
}]);