var myApp = angular.module('myApp', ['ngRoute', 'Read',
    'Update','Create','ControllerHeader', 'angularUtils.directives.dirPagination']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/Municipio', { templateUrl: endereco + 'Municipio/Municipio.html' }).
        when('/Atualizar', { templateUrl: endereco + 'Municipio/Update.html' }).
        when('/Criar', { templateUrl: endereco + 'Municipio/Create.html' }).
        otherwise({ redirectTo: '/Municipio', controller: 'Read'});
}]);