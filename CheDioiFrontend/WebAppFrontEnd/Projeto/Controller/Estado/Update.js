var myControllers = angular.module("ControllerUpdate", []);

myControllers.controller('ControllerUpdate', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {

        $scope.NomeEstado = $rootScope.EstadoAtual.nome;
        $scope.SiglaEstado = $rootScope.EstadoAtual.sigla;

        $scope.Atualizar = function () {
            if(confirm(`Deseja realmente alterar ${$rootScope.EstadoAtual.nome}?`))
            $rootScope.Estados.map(value => {
                if (value.id == $rootScope.EstadoAtual.id) {
                    value.nome = $scope.NomeEstado;
                    value.sigla = $scope.SiglaEstado;
                    alert('Estado alterado com sucesso!');
                }
            });
        }
    }
]);
