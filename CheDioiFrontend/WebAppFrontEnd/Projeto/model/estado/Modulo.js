var myApp = angular.module('myApp', ['ngRoute', 'myControllers']);
var myControllers = angular.module("myControllers", []);


myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/estado', { templateUrl: endereco + 'estado/Estados.html', controller: 'estadoController' }).
        when('/atualizar', { templateUrl: endereco + 'estado/PaginaAtualizar.html', controller: 'atualizarController' }).
        when('/deletar', { templateUrl: endereco + 'estado/PaginaDeletar.html', controller: 'deletarController' }).
        when('/criar', { templateUrl: endereco + 'estado/PaginaCriar.html', controller: 'criarController' }).
        when('/menu', { templateUrl: endereco + 'home/Menu.html' }).
        otherwise({ redirectTo: '/menu' });
}]);


myControllers.controller('estadoController', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
        var uri = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

        $http.get(uri).then(function (retorno) {
            $rootScope.Estados = retorno.data;
        });
        $rootScope.estadoSelecionado;

        $scope.deletar = function (estado) {
            $rootScope.estadoSelecionado = estado;
            $location.path('/deletar');

        };

        $scope.atualizar = function (estado) {
            $rootScope.estadoSelecionado = estado;
            $location.path('/atualizar');

        };

        $scope.criar = function () {
            $location.path('/criar');
        };

        $scope.voltar = function () {
            $location.path('/menu');
        }; 

        $scope.sort = function (keyname) {
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        }
    }
]);

myControllers.controller('atualizarController', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {

        $scope.nomeEstado = $rootScope.estadoSelecionado.nome;
        $scope.ufEstado = $rootScope.estadoSelecionado.sigla;

        $scope.voltar = function () {
            $location.path('/estado');
        };

        $scope.atualizar = function (nomeEstado, ufEstado) {
            $scope.error = false;
            angular.forEach($rootScope.Estados, function (value) {
                if (value.nome == nomeEstado && value.sigla == ufEstado) {
                    estadoESiglaErrados();
                    $scope.error = true;
                } else if (value.nome == nomeEstado) {
                    $scope.error = true;
                    nomeErrado();
                } else if (value.sigla == ufEstado) {
                    $scope.error = true;
                    siglaErrada();
                }
            });

            if ($scope.error == false) {
                showUpdateMessage($scope.error);
            }

            
        }
    }
]);

myControllers.controller('deletarController', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {

        $scope.voltar = function () {
            $location.path('/estado');
        };        
    }
]);



myControllers.controller('criarController', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {

        $scope.voltar = function () {
            $location.path('/estado');
        };        

        $scope.criar = function (nomeEstado, ufEstado) {
            $scope.error = false;
            angular.forEach($rootScope.Estados, function (value) {
                if (value.nome == nomeEstado && value.sigla == ufEstado) {
                    $scope.error = true;
                    estadoESiglaErrados();
                } else if (value.nome == nomeEstado) {
                    $scope.error = true;
                    nomeErrado();
                } else if (value.sigla == ufEstado) {
                    $scope.error = true;
                    siglaErrada();
                }
            });

            if ($scope.error == false) {
                showInputMessage(false);
            }

        };

    }
]);
