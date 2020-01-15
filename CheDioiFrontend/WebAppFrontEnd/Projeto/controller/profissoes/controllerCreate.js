var myControllersProfissoesCreate = angular.module("myControllersProfissoesCreate", []);

myControllersProfissoesCreate.controller('profissoesControllersCreate', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
        

        //para incluir a pagina modalCreate na tela de lista de municipios
        $scope.modalCreate = {
            template: "modalCreate.html"
        };

        // função global
        $rootScope.create = function () {
            $('#modal-create').modal('show');
        }

        $scope.cadastrar = function (profissaoDescricao) {
            let cad = {
                IdProfissao: $rootScope.profissoes.length + 1,
                Descricao: profissaoDescricao
            }
            $rootScope.profissoes.push(cad)
        }

    }
]);