var myApp = angular.module('myApp', ['ngRoute', 'myControllers', 'myControllerDelete',
    'myControllersUpdate','myControllerCreate', 'angularUtils.directives.dirPagination']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/AreaDeConhecimento', { templateUrl: endereco +'AreaDeConhecimento/AreaDeConhecimento.html'}).
        otherwise({ redirectTo: '/AreaDeConhecimento', controller: 'controllerRead'});
}]);