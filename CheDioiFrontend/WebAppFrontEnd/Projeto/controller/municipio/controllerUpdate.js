var myControllersUpdate = angular.module("myControllersUpdate", []);

myControllersUpdate.controller('municipioControllerUpdate', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
        $scope.modalUpdate = {
            template:"modalUpdate.html"
        };

        $rootScope.update = function (municipio){            
            $rootScope.municipioAtual = municipio;
            $('#modal-update').modal('show');
            $scope.nomeMunicipio=$rootScope.municipioAtual.nome;            
        }

        $scope.mensagelUpdate= function(){
            showUpdateMessage(false, $rootScope.municipioAtual.nome);            
        }
    }
]);
