var myControllerProfissaoDelete = angular.module("myControllerProfissaoDelete", []);

myControllerProfissaoDelete.controller('Delete', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
        $scope.Descricao = $rootScope.ProfissaoAtual.Descricao;

        $scope.Delete = function () {
            console.log($rootScope.ProfissaoAtual.IdDescricao);
            messageDelete(false, $rootScope.ProfissaoAtual.Descricao);
        }

        $scope.Cancelar = function () {
            $location.path('/Profissao');
        }
    }]);