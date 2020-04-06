app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../pages/Home.html',
            controller: 'HomeController as vm'
        })
        .when('/estados', {
            templateUrl: '../pages/Estados/Read.html',
            controller: 'EstadosController as vm'
        })
        .when('/estados/novo', {
            templateUrl: '../pages/Estados/Create.html',
            controller: 'EstadosController as vm'
        })
        .when('/estados/atualizar', {
            templateUrl: '../pages/Estados/Update.html',
            controller: 'EstadosController as vm'
        })
        .otherwise({
            redirectTo: '/',
        })
}]);