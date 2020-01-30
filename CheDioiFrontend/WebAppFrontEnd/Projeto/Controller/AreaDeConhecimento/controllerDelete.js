var myControllerDelete = angular.module("myControllerDelete", []);

myControllerDelete.controller('controllerDelete', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {  

        $scope.Descricao = $rootScope.AreaDeConhecimentoAtual.descricao;

        $scope.Delete = function () { 
            messageDelete(false, $rootScope.areaDeConhecimentoAtual.descricao);
        }

        $scope.Cancelar = function () {
            $location.path('/AreaDeConhecimento');
        }
    }]);