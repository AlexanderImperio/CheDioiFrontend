var myApp = angular.module('myApp', ['ngRoute', 'myControllers', 'myControllerDelete',
    'myControllersUpdate','myControllerCreate', 'angularUtils.directives.dirPagination']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/AreaDeConhecimento', { templateUrl: endereco + 'AreaDeConhecimento/AreaDeConhecimento.html' }).
        when('/Atualizar', { templateUrl: endereco + 'AreaDeConhecimento/Update.html' }).
        when('/Deletar', { templateUrl: endereco + 'AreaDeConhecimento/Delete.html' }).
        otherwise({ redirectTo: '/AreaDeConhecimento', controller: 'controllerRead'});
}]);