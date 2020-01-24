var myControllerDelete = angular.module("myControllerDelete", []);

myControllerDelete.controller('controllerDelete', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {

        $scope.modalDelete = {
            template: "modalDelete.html"
        };

        $rootScope.openModalDelete = function (areaDeConhecimento) {
            $rootScope.areaDeConhecimentoAtual = areaDeConhecimento;
            $('#modal-delete').modal('show');
            $scope.conhecimentoDescricao = $rootScope.areaDeConhecimentoAtual.descricao;
        }


        $scope.Delete = (areaDeConhecimentoAtual) => {            
            $('#remove-' + areaDeConhecimentoAtual.idArea).hide();
            messageDelete(false, $rootScope.areaDeConhecimentoAtual.descricao);
        }

    }]);