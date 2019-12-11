var myControllerDelete = angular.module("myControllerDelete", []);

myControllerDelete.controller('municipioControllerDelete', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
        $scope.modalDelete = {
            template:"modalDelete.html"
        };

        $rootScope.confirDelete = function (municipio){            
            $rootScope.municipioAtual = municipio;
            $('#modal-delete').modal('show');
            $scope.nomeMunicipio=$rootScope.municipioAtual.nome;            
        }

        

        $scope.fakeDelete = (municipioAtual)=>{           
            $('#remove-'+municipioAtual.id).hide();
            showDeleteMessage(false, municipioAtual.nome);
        }
        
}]);