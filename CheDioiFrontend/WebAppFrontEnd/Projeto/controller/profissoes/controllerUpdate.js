var myControllersProfissoesUpdate = angular.module("myControllersProfissoesUpdate", []);

myControllersProfissoesUpdate.controller('profissaoControllerUpdate', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
        $scope.descricao;

        $scope.modalUpdate = {
            template: "modalUpdate.html"
        };

        $rootScope.modalUpdate = function (profissao) {
            $rootScope.profissaoAtual = profissao;
            $scope.descricao = profissao.Descricao;
           $('#modal-update').modal('show');
        }

        $rootScope.alterar = function (profissaoDescricao) {
            $rootScope.profissoes.forEach(function (element) {
                if ($rootScope.profissaoAtual.IdProfissao == element.IdProfissao) {
                    element.Descricao = profissaoDescricao;
                }
            });
            messageUpdate(false, $rootScope.profissaoAtual.Descricao);
        }
    }
]);
