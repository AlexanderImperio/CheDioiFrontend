var myApp = angular.module('myApp', ['ngRoute', 'myControllersProfissoesRead', 'myControllersProfissoesCreate', 'myControllersProfissoesUpdate', "myControllersProfissoesDelete", 'angularUtils.directives.dirPagination']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/Profissao', { templateUrl: endereco + 'Profissao/profissoes.html' }).
        otherwise({ redirectTo: '/Profissao', controller: 'profissoesControllerRead' });
}]);