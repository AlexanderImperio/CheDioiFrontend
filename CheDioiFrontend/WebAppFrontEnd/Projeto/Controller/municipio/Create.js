var myControllerCreate = angular.module("Create", []);

myControllerCreate.controller('Create', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {

        $scope.Cadastrar = function () {
            const Index = $rootScope.Municipios.length - 1;
            const NovaId = $rootScope.Municipios[Index].id + 1;

            const NovoMunicipio = {
                id: NovaId,
                nome: $scope.NomeMunicipio,
                microregiao: {
                    mesoregiao: {
                        UF: {
                            sigla: $scope.SiglaEstado
                        }
                    }
                }
            }
            $rootScope.Municipios.push(NovoMunicipio);
            alert(`Municipio ${$scope.NomeMunicipio} cadastrado com sucesso!`);

            $scope.NomeMunicipio = '';
            $scope.SiglaEstado = '';

        }
    }
]);