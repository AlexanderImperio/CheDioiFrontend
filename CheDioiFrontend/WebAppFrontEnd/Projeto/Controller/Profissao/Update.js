var myControllersProfissoesUpdate = angular.module("myControllersProfissoesUpdate", []);

myControllersProfissoesUpdate.controller('Update', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
        $scope.descricao;


        $rootScope.modalUpdate = function (profissao) {
            $rootScope.profissaoAtual = profissao;          
        }

        $rootScope.alterar = function () {
            const profissaoDescricao = $scope.validacao();
            const alterarDescricao = newValue => $('#updateDescricao').prop('value', newValue);
            if (profissaoDescricao) {
                $rootScope.profissoes.forEach(function (element) {
                    if ($rootScope.profissaoAtual.IdProfissao == element.IdProfissao) {
                        element.Descricao = profissaoDescricao;
                    }
                });
                messageUpdate(false);
                alterarDescricao(profissaoDescricao);
            } else if (profissaoDescricao == false) {
                duplicidate();
            } else {
                campoVazil();
                alterarDescricao('');
            }

        }

        $scope.validacao = function () {
            let profissao = $('#updateDescricao').prop('value');
            if (profissao) {
                const profissaoArr = profissao.split(' ');
                let removeEspaco;

                profissaoArr.forEach(element => {
                    if (element) {
                        if (element.length > 3) {
                            element = element.charAt(0).toUpperCase() + element.slice(1);
                        }

                        if (removeEspaco == null) {
                            removeEspaco = element;
                        } else {
                            removeEspaco += ' ' + element;
                        }
                    }

                });
                profissao = removeEspaco;

                //Se o input só tiver espaços em branco.
                if (profissao) {
                    /* Função "validacao()" para verificar se ja existe 
                    *  um registro igual ao que esta sendo cadastrado.
                    **/
                    let validacao = () => {
                        let retorno = true;
                        $rootScope.profissoes.forEach(element => {
                            if (profissao.toLowerCase() == element.Descricao.toLowerCase()) {
                                retorno = false;
                            }
                        });

                        return retorno
                    }

                    //Se tiver tudo serto inserir novo registro no array.
                    if (validacao()) {
                        return profissao;
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