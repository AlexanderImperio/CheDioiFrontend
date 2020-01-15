var myApp = angular.module('myApp', ['ngRoute', 'myControllers', 'myControllerDelete',
    'myControllersUpdate','myControllerCreate', 'angularUtils.directives.dirPagination']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/areasDeConhecimento', { templateUrl: endereco +'areasDeConhecimento/areasDeConhecimento.html'}).
        otherwise({ redirectTo: '/areasDeConhecimento', controller: 'controllerRead'});
}]);