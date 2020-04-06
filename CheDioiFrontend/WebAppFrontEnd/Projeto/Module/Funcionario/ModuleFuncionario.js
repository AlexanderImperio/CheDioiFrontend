var myApp = angular.module('myApp',['ngRoute', 'ControllerHeader',
        'ControllerRead', 'ControllerCreate', 'ControllerUpdate']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/Funcionario', { templateUrl: endereco + 'Funcionario/Funcionario.html' }).
        when('/Atualizar', { templateUrl: endereco + 'Funcionario/Update.html' }).
        when('/Cadastrar', { templateUrl: endereco + 'Funcionario/Create.html' }).
        otherwise({ redirectTo: '/Funcionario', controller: 'Read' });
}]);