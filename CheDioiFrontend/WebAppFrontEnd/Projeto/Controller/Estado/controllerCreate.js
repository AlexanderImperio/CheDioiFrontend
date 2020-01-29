var myControllers = angular.module("myControllerCreate", []);

myControllers.controller('controllerCreate', ['$rootScope', '$scope', '$http', '$location',
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
