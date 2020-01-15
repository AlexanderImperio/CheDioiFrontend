var myControllerDelete = angular.module("myControllerDelete", []);

myControllerDelete.controller('controllerDelete', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {

        console.log('asdasdasdasd');

        $scope.modalDelete = {
            template: "modalDelete.html"            
        };

        $rootScope.confirDelete = function (areaDeConhecimento){            
            $rootScope.areaDeConhecimentoAtual = areaDeConhecimento;
            $('#modal-delete').modal('show');
            $scope.nomeMunicipio = $rootScope.areaDeConhecimentoAtual.descricao;            
        }

        

        $scope.fakeDelete = (areaDeConhecimentoAtual)=>{           
            $('#remove-' + areaDeConhecimentoAtual.idArea).hide();
            showDeleteMessage(false, areaDeConhecimentoAtual.descricao);
        }
        
}]);