var myControllersUpdate = angular.module("Update", []);

myControllersUpdate.controller('Update', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
        var urlEstados = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
                 
        $scope.Municipio = $rootScope.MunicipioAtual;
        $http.get(urlEstados).then(function (retorno) {
            $rootScope.Estados = retorno.data;
            $rootScope.Estados.forEach(value => {
                if (value.nome == $scope.Municipio.microrregiao.mesorregiao.UF.nome) {
                    $scope.EstadoAtual = $scope.Municipio.microrregiao.mesorregiao.UF.nome;                    
                }
            })
        });
        
        $scope.update = function (estado) {
            let municipioAtual = $rootScope.municipioAtual.nome;           
            let error = false;            
            let keepGoing = true;

            if (municipio == "" || estado == null) {
                if (municipio == "") {
                    nomeVazil()
                }
                if (estado == null){
                    seletorVazil();
                }                
            } else {
                angular.forEach($rootScope.municipios, function (value) {
                    if (keepGoing) {
                        if (value.id == $rootScope.municipioAtual.id) {
                            if (value.nome == municipio && value.microrregiao.mesorregiao.UF.sigla == estado.sigla) {
                                nomeIgual()
                            }
                            else {
                                value.nome = municipio;
                                value.microrregiao.mesorregiao.UF.sigla = estado.sigla;
                                value.microrregiao.mesorregiao.UF.nome = estado.nome;
                                showUpdateMessage(false, municipioAtual);
                            }
                            keepGoing = false;
                            error = false;
                        } else {
                            error = true;
                        }
                    }
                });

                if (error) {
                    showUpdateMessage(error, municipio);
                }
            }            
        }
    }
]);
