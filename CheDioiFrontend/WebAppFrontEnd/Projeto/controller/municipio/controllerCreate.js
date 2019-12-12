var myControllerCreate = angular.module("myControllerCreate", []);

myControllerCreate.controller('municipioControllerCreate', ['$rootScope', '$scope', '$http', '$location',
function ($rootScope, $scope, $http, $location) {
    $scope.modalCreate = {
        template:"modalCreate.html"
    };

    $rootScope.create = function(){                
        $('#modal-create').modal('show');
    }
    let cont = 1;

    $scope.removeInput = function(){
        let contMunicipios = $rootScope.municipios.length;
        cont +=1;
        let Municipio = document.getElementById("nomeMunicipio").value;
        let municipioEstado = document.getElementById("estadoSigla").value;
        let municipioList = {
            'id':contMunicipios+cont,
            'nome': Municipio,
            'microrregiao':{
                'mesorregiao':{
                    'UF':{
                        'sigla':municipioEstado
                    }
                }
            }
        }
        $rootScope.municipios.push(municipioList);        
        $('#modal-create .modal-body input[type=text]').prop('value','');
        showInputMessage(false, Municipio);
        
    }
    
}]);