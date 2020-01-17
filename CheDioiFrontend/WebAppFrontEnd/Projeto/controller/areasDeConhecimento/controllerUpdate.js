var myControllersUpdate = angular.module("myControllersUpdate", []);

myControllersUpdate.controller('controllerUpdate', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {


        $scope.limparDescricao = function () {
            console.log('chamada com sucesso!');
            $scope.descricao = "teste";
        }

        $scope.modalUpdate = {
            template: "modalUpdate.html"
        };

        $rootScope.modalUpdate = function (atual) {
            $rootScope.areaConhecimentoAtual = atual;
            $('#updateDescricao').prop('value', atual.descricao);

            $('#modal-update').modal('show');
        }

        $scope.update = function () {            
            areaConhecimento = $scope.validacao();

            if (areaConhecimento) {
                $rootScope.areasDeConhecimento.forEach(element => {
                    if (element.idArea == $rootScope.areaConhecimentoAtual.idArea) {
                        element.descricao = areaConhecimento;
                    }
                });
                $('#updateDescricao').prop('value', areaConhecimento);
                messageUpdate(false);
            } else if (areaConhecimento == false) {                
                duplicidate();
            } else {
                campoVazil()
                $('#updateDescricao').prop('value', $rootScope.areaConhecimentoAtual.descricao);
            }
        }

        $scope.validacao = function () {
            let areaConhecimento = $('#updateDescricao').prop('value');
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

                    //Se tiver tudo serto inserir novo registro no array.
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
