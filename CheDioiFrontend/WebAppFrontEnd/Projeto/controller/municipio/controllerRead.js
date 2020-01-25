var myControllers = angular.module("myControllers", []);

myControllers.controller('municipioControllerRead', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
        var urlMunicipios = "https://servicodados.ibge.gov.br/api/v1/localidades/municipios";
        var urlEstados = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

        $scope.modalDelete = {
            template:"modalDelete.html"
        };
        
         $http.get(urlEstados).then(function (retorno) {
            $rootScope.estados = retorno.data;            
        });
        
        $http.get(urlMunicipios).then(function (retorno) {
            $rootScope.municipios = retorno.data;            
        });

        $scope.change = function(pesquisa){
            if($scope.buscaPorEstado == undefined){
                return true;
            }else{                
                if(pesquisa.microrregiao.mesorregiao.UF.sigla.indexOf($scope.buscaPorEstado.sigla) != -1){
                    return true;
                }
            }
            return false;            
        }
    }
]);





