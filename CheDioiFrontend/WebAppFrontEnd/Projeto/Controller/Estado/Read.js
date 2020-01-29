var myControllers = angular.module("ControllerRead", []);

myControllers.controller('ControllerRead', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
        var uri = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

        $rootScope.Estados;
        $rootScope.EstadoAtual;

        $scope.CerregarEstados = function () {
            $http.get(uri).then(function (retorno) {
                $rootScope.Estados = retorno.data;
            });
        }

        if (!$rootScope.Estados) {
            $scope.CerregarEstados();
        }

        $scope.DefineEstadoAtual = function (Estado) {
            $rootScope.EstadoAtual = Estado;
        }


        $scope.Deletar = function (estado) {
            if (confirm(`Deseja Realmente deletar ${estado.nome}?`)) {
                $rootScope.Estados.map((value, index) => {
                    if (value.id == estado.id) {
                        $rootScope.Estados.splice(index, 1);
                    }
                });
            }
        };


        $rootScope.CarregarPagina = function (url) {
            $location.path(url);
        };

        $scope.Sort = function (KeyName) {
            $scope.SortKey = KeyName;
            $scope.Reverse = !$scope.Reverse;
        }
    }
]);
