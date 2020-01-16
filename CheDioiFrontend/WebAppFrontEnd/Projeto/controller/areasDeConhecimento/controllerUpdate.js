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
            let areaConhecimento = $('#updateDescricao').prop('value'); 
            
            //validando para ver se esta vazil!.
            if (areaConhecimento) {
                const areaConhecimentoArr = areaConhecimento.split(' ').map(a => a.trim());

                let removeSpaço;

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
                            alert('Já existe uma area de conhecimento cadastrada com esta descrição');
                            retorno = false;
                        }
                    });

                    return retorno
                }

                //Se tiver tudo serto inserir novo registro no array.
                if (validacao()) {
                    $rootScope.areasDeConhecimento.forEach((element, index) => {

                        if (element.idArea == $rootScope.areaConhecimentoAtual.idArea) {
                            $rootScope.areasDeConhecimento[index].descricao = areaConhecimento;
                        }
                    });                    
                    
                    alert('Alteração realizada com sucesso!');                    
                }     

            } else {
                alert('Campo descrição obrigadorio!');                
            }            
        }
    }
]);
