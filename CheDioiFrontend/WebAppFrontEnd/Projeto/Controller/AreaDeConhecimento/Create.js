var myControllerCreate = angular.module("ControllerCreate", []);

myControllerCreate.controller('ControllerCreate', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
        $rootScope.AddAreaConhecimento = [];

        $scope.Criar = function () {
            const IndexId = $rootScope.AreasDeConhecimento.length -1;
            const Id = $rootScope.AreasDeConhecimento[IndexId].IdArea + 1;

            const Novo = {
                IdArea: Id,
                Descricao: $scope.NovaAreaConhecimento
            }            
            $rootScope.AreasDeConhecimento.push(Novo);
            $scope.NovaAreaConhecimento = '';
            alert('Area de conhecimento criado com sucesso!');
        }        
    }
]);