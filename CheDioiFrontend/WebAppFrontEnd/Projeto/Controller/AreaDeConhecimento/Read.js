var myControllers = angular.module("ControllerRead", []);

myControllers.controller('ControllerRead', ['$rootScope', '$scope', '$http', '$location',
    async function ($rootScope, $scope, $http, $location) {
        $rootScope.AreasDeConhecimento;

        if (!$rootScope.AreasDeConhecimento) {
            $rootScope.AreasDeConhecimento = [
                { IdArea: 1, Descricao: "Ciências Exatas e da Terra" },
                { IdArea: 2, Descricao: "Matemática" },
                { IdArea: 3, Descricao: "Álgebra" },
                { IdArea: 4, Descricao: "Conjuntos" },
                { IdArea: 5, Descricao: "Lógica Matemática" },
                { IdArea: 6, Descricao: "Teoria dos Números" },
                { IdArea: 7, Descricao: "Grupos de Álgebra Não - Comutaviva" },
                { IdArea: 8, Descricao: "Álgebra Comutativa" },
                { IdArea: 9, Descricao: "Geometria Algébrica" },
                { IdArea: 10, Descricao: "Análise" },
                { IdArea: 11, Descricao: "Análise Complexa" },
                { IdArea: 12, Descricao: "Análise Funcional" },
                { IdArea: 13, Descricao: "Análise Funcional Não - Linear" },
                { IdArea: 14, Descricao: "Equações Diferenciais Ordinárias" },
                { IdArea: 15, Descricao: "Equações Diferenciais Parciais" },
                { IdArea: 16, Descricao: "Equações Diferenciais Funcionais" },
                { IdArea: 17, Descricao: "Geometria e Topologia" },
                { IdArea: 18, Descricao: "Geometria Diferencial" },
                { IdArea: 19, Descricao: "Topologia Algébrica" },
                { IdArea: 20, Descricao: "Topologia das Variedades" },
            ];
        }

        $rootScope.DefineAreaDeConhecimentoAtual = function (AreaDeConhecimentoAtual) {
            $rootScope.AreaDeConhecimentoAtual = AreaDeConhecimentoAtual;
        }

        $rootScope.CarregarPagina = function (url) {
            $location.path(url);
        }

        $scope.Sort = function (KeyName) {
            $scope.SortKey = KeyName;
            $scope.Reverse = !$scope.Reverse;
        }


        $scope.Deletar = function (AreaConhecimento) {
            if (confirm('Deseja realmente deletar ' + AreaConhecimento.Descricao + '?')) {
                $rootScope.AreasDeConhecimento.map((value, index) => {
                    if (value.IdArea == AreaConhecimento.IdArea) {
                        $rootScope.AreasDeConhecimento.splice(index, 1);
                        alert(AreaConhecimento.Descricao + ' deletado com sucesso!');
                    }
                });
            }
        }

    }
]);





