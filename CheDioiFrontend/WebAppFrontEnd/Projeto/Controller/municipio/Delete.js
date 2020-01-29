var myControllerDelete = angular.module("Delete", []);

myControllerDelete.controller('Delete', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
       

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