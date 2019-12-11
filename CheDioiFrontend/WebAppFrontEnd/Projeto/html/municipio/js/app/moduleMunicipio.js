var myApp = angular.module('myApp', ['ngRoute', 'myControllers', 'myControllerDelete',
'myControllersUpdate','angularUtils.directives.dirPagination']);
myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/municipio', { templateUrl: 'municipio.html'}).
        otherwise({ redirectTo: '/municipio', controller: 'municipioControllerRead'});
}]);

