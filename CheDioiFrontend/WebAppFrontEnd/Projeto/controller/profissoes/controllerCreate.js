var myControllersProfissoesCreate = angular.module("myControllersProfissoesCreate", []);

myControllersProfissoesCreate.controller('profissoesControllersCreate', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {


        //para incluir a pagina modalCreate na tela de lista de municipios
        $scope.modalCreate = {
            template: "modalCreate.html"
        };

        // função global
        $rootScope.create = function () {
            $('#modal-create').modal('show');
        }

        $scope.cadastrar = function () {
            const profissaoDescricao = $scope.validacao();
            const linpaDescricao = () => $('#createDescricao').prop('value', '');

            if (profissaoDescricao) {
                $rootScope.profissoes.push(profissaoDescricao)
                messageCreate(false, profissaoDescricao.Descricao);
                linpaDescricao()
            } else if (profissaoDescricao == false) {
                duplicidate();
            } else {
                campoVazil()
            }
        }

        $scope.validacao = function () {
            let profissao = $('#createDescricao').prop('value');
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