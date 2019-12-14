var myControllerCreate = angular.module("myControllerCreate", []);

myControllerCreate.controller('municipioControllerCreate', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {

        //para incluir a pagina modalCreate na tela de lista de municipios
        $scope.modalCreate = {
            template: "modalCreate.html"
        };

        //funcação para abrir o modal com bootstrap.
        $rootScope.create = function () {
            $('#modal-create').modal('show');
        }

        //variavel para criar novos Id's para municipio.
        let idMunicipio = 1;

        //funcação para criar novo municipio.
        $scope.removeInput = function (selecaoEstado) {
            let contMunicipios = $rootScope.municipios.length;
            let Municipio = document.getElementById("nomeMunicipio").value;            
            let municipioEstado; 
            let municipioEstadoSigla;
            let keepGoing = true;
            let igual = false;

            //validação para ver se o campo esta vazil.
            if (selecaoEstado == null || Municipio == "") {
                if (selecaoEstado == null) {
                    seletorVazil();
                }
                if (Municipio == "") {
                    nomeVazil();
                }
                
            } else {
                municipioEstado = selecaoEstado.id;
                municipioEstadoSigla = selecaoEstado.sigla;
                 
                angular.forEach($rootScope.municipios, function (value) {
                    if (keepGoing) {
                        if (value.nome.toLowerCase() == Municipio.toLowerCase() && value.microrregiao.mesorregiao.UF.sigla == municipioEstadoSigla) {
                            nomeCreateIgual()
                            igual = true;
                            keepGoing = false;
                        }
                    }
                });

                if (igual == false) {
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
                    keepGoing = false;
                }                

            }
            
        }
    
    }
]);