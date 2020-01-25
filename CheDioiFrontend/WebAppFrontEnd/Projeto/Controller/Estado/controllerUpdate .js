var myControllers = angular.module("myControllers", []);

myControllers.controller('controllerUpdate', ['$rootScope', '$scope', '$http', '$location',
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
