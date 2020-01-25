var myControllers = angular.module("myControllers", []);

myControllers.controller('controllerRead', ['$rootScope', '$scope', '$http', '$location',
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
    