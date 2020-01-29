var myControllerProfissaoUpdate = angular.module("myControllerProfissaoUpdate", []);

myControllerProfissaoUpdate.controller('Update', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
        $scope.Profissao = $rootScope.ProfissaoAtual.Descricao;

        $scope.Atualizar = function () {
            $rootScope.profissoes.map(element => {
                if (element.IdProfissao == $rootScope.ProfissaoAtual.IdProfissao) {
                    if ($scope.Profissao.toLowerCase() == $rootScope.ProfissaoAtual.Descricao.toLowerCase()) {
                        alert('Não foi feita nenhuma alteração.');
                    } else {
                        if (confirm('Deseja realmente alterar este registro?')) {
                            element.Descricao = $scope.Profissao;
                            alert('Registro alterado com sucesso!');
                        }

                    }
                }
            });
        }
        $scope.validacao = function () {
            if (profissao) {
                const profissaoArr = profissao.split(' ');
                let removerEspaco;

                profissaoArr.forEach(element => {
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

                    //Se Estiver tudo Certo inserir novo registro no array.
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