var myControllerProfissaoCreate = angular.module("myControllerProfissaoCreate", []);

myControllerProfissaoCreate.controller('Create', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
        $rootScope.AddProfissao = [];

        $scope.Criar = function () {
            const IndexId = $rootScope.profissoes.length - 1;
            const Id = $rootScope.profissoes[IndexId].IdProfissao + 1;

            const Novo = {
                IdProfissao: Id,
                Descricao: $scope.NovaProfissao
            }
            $rootScope.profissoes.push(Novo);
            $scope.NovaProfissao = '';
            alert('Profissão Criada Com Sucesso!');
        }

        $scope.validacao = function () {
            let profissao = $('#createDescricao').prop('value');
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
                profissao = removerEspaco;
          
                //Se o input só tiver espaços em branco.
                if (profissao) {
                    /* Função "validacao()" para verificar se ja existe 
                    *  um registro igual ao que esta sendo cadastrado.
                    **/
                    let validacao = () => {
                        let retorno = true;
                        $rootScope.profissoes.forEach(element => {
                            if (profissao.toLowerCase() == element.descricao.toLowerCase()) {
                                retorno = false;
                            }
                        });

                        return retorno
                    }

                    //Se Estiver tudo Certo inserir novo registro no array.
                    if (validacao()) {
                        let cad = {
                            IdProfissao: $rootScope.profissoes.length + 1,
                            Descricao: profissao
                        }
                        return cad;
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