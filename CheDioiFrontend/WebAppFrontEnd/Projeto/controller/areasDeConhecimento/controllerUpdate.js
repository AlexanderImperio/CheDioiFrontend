var myControllersUpdate = angular.module("myControllersUpdate", []);

myControllersUpdate.controller('controllerUpdate', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
        $scope.modalUpdate = {
            template:"modalUpdate.html"
        };

        $rootScope.modalUpdate = function (municipio){            
            $rootScope.municipioAtual = municipio;                        
            $('#modal-update').modal('show'); }
        
        $scope.update = function (estado) {
            let municipioAtual = $rootScope.municipioAtual.nome;
            let municipio = document.getElementById("nomeMunicipioUpdate").value;            
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
