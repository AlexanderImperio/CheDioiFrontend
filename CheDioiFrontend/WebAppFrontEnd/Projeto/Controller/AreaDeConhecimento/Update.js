var myControllersUpdate = angular.module("ControllerUpdate", []);

myControllersUpdate.controller('ControllerUpdate', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
        
        $scope.AreaConhecimento = $rootScope.AreaDeConhecimentoAtual.Descricao;
        
        $scope.Atualizar = function () {
            $rootScope.AreasDeConhecimento.map(element => {

                if (element.IdArea == $rootScope.AreaDeConhecimentoAtual.IdArea) {
                    if ($scope.AreaConhecimento.toLowerCase() == $rootScope.AreaDeConhecimentoAtual.Descricao.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm(`Deseja realmente alterar ${$rootScope.AreaDeConhecimentoAtual.Descricao}?`)) {
                            element.Descricao = $scope.AreaConhecimento;
                            alert('Registro alterado com sucesso!');
                        }

                    }
                }
            
            });
        }       
        
    }
]);
