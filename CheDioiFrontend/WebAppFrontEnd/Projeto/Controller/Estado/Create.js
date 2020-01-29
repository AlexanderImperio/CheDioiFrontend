var myControllers = angular.module("ControllerCreate", []);

myControllers.controller('ControllerCreate', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {

        $scope.Criar = function () {
            const Index = $rootScope.Estados.length -1;
            const NovaId = $rootScope.Estados[Index].id + 1;
                        
            const NovoEstado = {
                id: NovaId,
                nome: $scope.NomeEstado,
                sigla: $scope.SiglaEstado,
            }

            $rootScope.Estados.push(NovoEstado);
            alert(`Estado ${$scope.NomeEstado} cadastrado com sucesso!`);

            $scope.NomeEstado = '';
            $scope.SiglaEstado = '';
        };

    }
]);
