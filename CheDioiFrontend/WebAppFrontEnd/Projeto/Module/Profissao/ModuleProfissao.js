var myApp = angular.module('myApp', ['ngRoute', 'myControllerProfissaoRead', 'myControllerProfissaoCreate', 'myControllerProfissaoUpdate','ControllerHeader', 'angularUtils.directives.dirPagination']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/Profissao', { templateUrl: endereco + 'Profissao/Profissao.html' }).
        when('/Atualizar', { templateUrl: endereco + 'Profissao/Update.html' }).
        when('/Criar', { templateUrl: endereco + 'Profissao/Create.html' }).
        otherwise({ redirectTo: '/Profissao', controller: 'Read' });
}]);