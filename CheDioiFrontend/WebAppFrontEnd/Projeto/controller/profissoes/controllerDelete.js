var myControllersProfissoesDelete = angular.module("myControllersProfissoesDelete", []);

myControllersProfissoesDelete.controller('profissaoControllerDelete', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
        $scope.modalDelete = {
            template: "modalDelete.html"
        };

        $rootScope.confirDelete = function (profissao) {
            $rootScope.profissaoAtual = profissao;
            $('#modal-delete').modal('show');
            $scope.descricaoProfissao = $rootScope.profissaoAtual.Descricao;
        }



        $scope.fakeDelete = (profissaoAtual) => {
            $('#remove-' + profissaoAtual.id).hide();
            showDeleteMessage(false, profissaoAtual.Descricao);
        }

    }]);