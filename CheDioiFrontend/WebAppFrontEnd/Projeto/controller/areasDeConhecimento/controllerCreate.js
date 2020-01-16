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
            let areaConhecimento = $('#createDescricao').prop('value');
            //validando para ver se esta vazil!.
            if (areaConhecimento) {
                const areaConhecimentoArr = areaConhecimento.split(' ').map(a => a.trim());

                let removeSpaço;

                //Removendo os espaços em branco.
                areaConhecimentoArr.forEach(element => {
                    if (element.length > 3) {
                        element = element.charAt(0).toUpperCase() + element.slice(1);
                    }

                    if (removeSpaço == null) {
                        removeSpaço = element;
                    } else {
                        removeSpaço += ' ' + element;
                    }

                });
                areaConhecimento = removeSpaço;

                /* Função "validacao()" para verificar se ja existe 
                *  um registro igual ao que esta sendo cadastrado.
                **/
                let validacao = () => {
                    let retorno = true;
                    $rootScope.areasDeConhecimento.forEach(element => {
                        if (areaConhecimento.toLowerCase() == element.descricao.toLowerCase()) {
                            alert('Esta area do conhecimento ja existe');
                            retorno = false;
                        }
                    });

                    return retorno
                }

                //Se tiver tudo serto inserir novo registro no array.
                if (validacao()) {
                    const cad = {
                        idArea: $rootScope.areasDeConhecimento.length + 1,
                        descricao: areaConhecimento
                    }
                    $rootScope.areasDeConhecimento.push(cad);

                }
                alert(areaConhecimento + ' cadastrado com sucesso');
                $('#createDescricao').prop('value', '');

            } else {
                //caso teja vazil.
                alert('compo vazil');
            }
        }
    }
]);