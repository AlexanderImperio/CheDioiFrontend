﻿var myApp = angular.module('myApp', ['ngRoute', 'myControllersProfissoesRead', 'myControllersProfissoesCreate', 'myControllersProfissoesUpdate', "myControllersProfissoesDelete", 'angularUtils.directives.dirPagination']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/Profissao', { templateUrl: endereco + 'Profissao/Profissao.html' }).
        when('/Atualizar', { templateUrl: endereco + 'Profissao/Update.html' }).
        when('/Deletar', { templateUrl: endereco + 'Profissao/Delete.html' }).
        when('/Criar', { templateUrl: endereco + 'Profissao/Create.html' }).
        otherwise({ redirectTo: '/Profissao', controller: 'profissoesControllerRead' });
}]);