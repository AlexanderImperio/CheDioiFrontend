var myControllersProfissoesUpdate = angular.module("myControllersProfissoesUpdate", []);

myControllersProfissoesUpdate.controller('profissaoControllerUpdate', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
        $scope.modalUpdate = {
            template: "modalUpdate.html"
        };

        $rootScope.modalUpdate = function (profissao) {
            $rootScope.profissaoAtual = profissao;
            console.log(profissao + ' Teste');
           //$('#modal-update').modal('show');
        }

        $rootScope.teste = function () {
            console.log("Teste");
        }
    }
]);
