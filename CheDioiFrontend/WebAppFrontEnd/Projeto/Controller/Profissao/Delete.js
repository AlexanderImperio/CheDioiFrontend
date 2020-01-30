var myControllerProfissaoDelete = angular.module("myControllerProfissaoDelete", []);

myControllerProfissaoDelete.controller('Delete', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
        $scope.DescricaoD = $rootScope.ProfissaoAtual.Descricao;

        $scope.Delete = function () {
            messageDelete(false, $rootScope.ProfissaoAtual.Descricao);
        }

        $scope.Cancelar = function () {
            $location.path('/Profissao');
        }
    }]);