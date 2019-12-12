var myControllerCreate = angular.module("myControllerCreate", []);

myControllerCreate.controller('municipioControllerCreate', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {

        //para incluir a pagina modalCreate na tela de lista de municipios
        $scope.modalCreate = {
            template:"modalCreate.html"
        };

        //funca��o para abrir o modal com bootstrap.
        $rootScope.create = function (){                
            $('#modal-create').modal('show');
        }

        //variavel para criar novos Id's para municipio.
        let idMunicipio = 1;

        //funca��o para criar novo municipio.
        $scope.removeInput = function (selecaoEstado) {
            let contMunicipios = $rootScope.municipios.length;            
            let Municipio = document.getElementById("nomeMunicipio").value;
            let municipioEstado = selecaoEstado.nome;
            let municipioEstadoSigla = selecaoEstado.sigla;

            //valida��o para ver se o campo esta vazil.
            if (Municipio == "") {
                alert("Prencha todos os campos");
            } else {
                idMunicipio += 1;
                let municipioList = {
                    'id': contMunicipios + idMunicipio,
                    'nome': Municipio,
                    'microrregiao': {
                        'mesorregiao': {
                            'UF': {
                                'sigla': municipioEstadoSigla,
                                'nome': municipioEstado
                            }
                        }
                    }
                }

                $rootScope.municipios.push(municipioList);            
                $('#modal-create .modal-body input[type=text]').prop('value', '');
                showInputMessage(false, Municipio);

            }
        
    }

        
    
}]);