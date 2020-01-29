var myApp = angular.module('myApp', ['ngRoute', 'myControllers',
    'myControllersUpdate','myControllerCreate', 'angularUtils.directives.dirPagination']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/AreaDeConhecimento', { templateUrl: endereco + 'AreaDeConhecimento/AreaDeConhecimento.html' }).
        when('/Atualizar', { templateUrl: endereco + 'AreaDeConhecimento/Update.html' }).
        when('/Criar', { templateUrl: endereco + 'AreaDeConhecimento/Create.html' }).
        otherwise({ redirectTo: '/AreaDeConhecimento', controller: 'myControllers'});
}]);