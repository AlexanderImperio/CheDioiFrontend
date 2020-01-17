var myApp = angular.module('myApp', ['ngRoute', 'myControllersProfissoesRead', 'myControllersProfissoesCreate', 'myControllersProfissoesUpdate', "myControllersProfissoesDelete", 'angularUtils.directives.dirPagination']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/profissoes', { templateUrl: endereco + 'profissoes/profissoes.html' }).
        otherwise({ redirectTo: '/profissoes', controller: 'profissoesControllerRead' });
}]);