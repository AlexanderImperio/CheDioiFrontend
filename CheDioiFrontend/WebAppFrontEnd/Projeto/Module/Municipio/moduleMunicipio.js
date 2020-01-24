var myApp = angular.module('myApp', ['ngRoute', 'myControllers', 'myControllerDelete',
    'myControllersUpdate','myControllerCreate', 'angularUtils.directives.dirPagination']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/municipio', { templateUrl: endereco+'municipio/municipio.html'}).
        otherwise({ redirectTo: '/municipio', controller: 'municipioControllerRead'});
}]);