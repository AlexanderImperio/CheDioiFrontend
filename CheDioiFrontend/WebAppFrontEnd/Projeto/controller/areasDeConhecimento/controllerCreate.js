var myControllerCreate = angular.module("myControllerCreate", []);

myControllerCreate.controller('controllerCreate', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {

        //para incluir a pagina modalCreate na tela de lista de municipios
        $scope.modalCreate = {
            template: "modalCreate.html"
        };

        //funcação para abrir o modal com bootstrap.
        $rootScope.create = function () {
            $('#modal-create').modal('show');
        }


        $scope.create = function () {            
            areaConhecimento = $scope.validacao();
            const linpaDescricao = $('#createDescricao').prop('value', '');            

            if (areaConhecimento) {
                $rootScope.areasDeConhecimento.push(areaConhecimento);
                linpaDescricao;
                messageCreate(false, areaConhecimento.descricao);

            } else if (areaConhecimento == false) {
                duplicidate();
            } else {
                campoVazil();
                linpaDescricao;
            }
        }

        $scope.validacao = function () {
            let areaConhecimento = $('#createDescricao').prop('value');
            if (areaConhecimento) {
                const areaConhecimentoArr = areaConhecimento.split(' ');
                let removeSpaço;

                areaConhecimentoArr.forEach(element => {
                    if (element) {
                        if (element.length > 3) {
                            element = element.charAt(0).toUpperCase() + element.slice(1);
                        }

                        if (removeSpaço == null) {
                            removeSpaço = element;
                        } else {
                            removeSpaço += ' ' + element;
                        }
                    }

                });
                areaConhecimento = removeSpaço;

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
                        let cad = {
                            idArea: $rootScope.areasDeConhecimento.length + 1,
                            descricao: areaConhecimento
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