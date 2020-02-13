var myControllers = angular.module("Read", []);

myControllers.controller('Read', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
        var urlMunicipios = "https://servicodados.ibge.gov.br/api/v1/localidades/municipios";
        var urlEstados = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

        $rootScope.CarregarPagina = function (url) {
            $location.path(url);
        }

         $http.get(urlEstados).then(function (retorno) {
             $rootScope.Estados = retorno.data;
        });
        
        $http.get(urlMunicipios).then(function (retorno) {
            $rootScope.Municipios = retorno.data;
        });  

        $rootScope.DefineMunicipioAtual = function (MunicipioAtual) {
            $rootScope.MunicipioAtual = MunicipioAtual;
        }

        $scope.Deletar = function (MunicipioAtual) {
            if (confirm('Deseja realmente deletar ' + MunicipioAtual.nome + '?')) {
                $rootScope.Municipios.map((value, index) => {
                    if (value.id == MunicipioAtual.id) {
                        $rootScope.Municipios.splice(index, 1);
                        alert(MunicipioAtual.nome + ' deletado com sucesso!');
                    }
                });
            }
        }

        $scope.Sort = function (KeyName) {
            $scope.SortKey = KeyName;
            $scope.Reverse = !$scope.Reverse;
        }

        

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





