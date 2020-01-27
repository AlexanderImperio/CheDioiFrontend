var myControllersUpdate = angular.module("myControllersUpdate", []);

myControllersUpdate.controller('controllerUpdate', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
        
        $scope.AreaConhecimento = $rootScope.AreaDeConhecimentoAtual.descricao;
        
        $scope.Atualizar = function () {
            $rootScope.areasDeConhecimento.map(element => {

                if (element.idArea == $rootScope.AreaDeConhecimentoAtual.idArea) {
                    if ($scope.AreaConhecimento.toLowerCase() == $rootScope.AreaDeConhecimentoAtual.descricao.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração');
                    } else {
                        if (confirm('Deseja realmente alterar este registro?')) {
                            element.descricao = $scope.AreaConhecimento;
                            alert('Registro alterado com sucesso!');
                        }

                    }
                }
            
            });
        }
        
        $scope.validacao = function () {
            if (areaConhecimento) {
                const areaConhecimentoArr = areaConhecimento.split(' ');
                let removerEspaco;

                areaConhecimentoArr.forEach(element => {
                    if (element) {
                        if (element.length > 3) {
                            element = element.charAt(0).toUpperCase() + element.slice(1);
                        }

                        if (removerEspaco == null) {
                            removerEspaco = element;
                        } else {
                            removerEspaco += ' ' + element;
                        }
                    }

                });
                areaConhecimento = removerEspaco;

                //Se o input só tiver espaços em branco.
                if (areaConhecimento) {
                    /* Função "validacao()" para verificar se ja existe 
                    *  um registro igual ao que esta sendo cadastrado.
                    **/
                    let validacao = () => {
                        let retorno = true;
                        $rootScope.areasDeConhecimento.forEach(element => {
                            if (areaConhecimento.toLowerCase() == element.descricao.toLowerCase()) {
                                retorno = false;
                            }
                        });

                        return retorno
                    }

                    //Se tiver tudo certo inserir novo registro no array.
                    if (validacao()) {
                        return areaConhecimento;
                    } else {
                        return false;
                    }

                } else {
                    return null;
                }
            } else {
                return null;
            }
        }
    }
]);
