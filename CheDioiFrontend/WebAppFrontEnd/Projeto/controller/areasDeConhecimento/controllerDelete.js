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


        $scope.Delete = () => {
            let validar = false;
            $rootScope.areasDeConhecimento.forEach((element, index) => {
                if (element == $rootScope.areaDeConhecimentoAtual.idArea) {
                    $rootScope.areasDeConhecimento.splice(index);
                    validar = true;
                }
            });

            if (validar) {
                alert('Deletado com sucesso!');
            } else {
                alert(`Erro tente novamente. Se o problema persistir entre em contato com a equipe de suporte!`);
            }

        }

    }]);