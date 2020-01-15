var myControllers = angular.module("myControllers", []);

myControllers.controller('controllerRead', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {

        $rootScope.areasDeConhecimento = [
            { idArea: 1, descricao: "Ciências Exatas e da Terra"},
            { idArea: 2, descricao: "Matemática"},
            { idArea: 3, descricao: "Álgebra"},
            { idArea: 4, descricao: "Conjuntos"},
            { idArea: 5, descricao: "Lógica Matemática"},
            { idArea: 6, descricao: "Teoria dos Números"},
            { idArea: 7, descricao: "Grupos de Álgebra Não - Comutaviva"},
            { idArea: 8, descricao: "Álgebra Comutativa"},
            { idArea: 9, descricao: "Geometria Algébrica"},
            { idArea: 10, descricao: "Análise"},
            { idArea: 11, descricao: "Análise Complexa"},
            { idArea: 12, descricao: "Análise Funcional"},
            { idArea: 13, descricao: "Análise Funcional Não - Linear"},
            { idArea: 14, descricao: "Equações Diferenciais Ordinárias"},
            { idArea: 15, descricao: "Equações Diferenciais Parciais"},
            { idArea: 16, descricao: "Equações Diferenciais Funcionais"},
            { idArea: 17, descricao: "Geometria e Topologia"},
            { idArea: 18, descricao: "Geometria Diferencial"},
            { idArea: 19, descricao: "Topologia Algébrica"},
            { idArea: 20, descricao: "Topologia das Variedades"},
        ];

        $scope.modalDelete = {
            template:"modalDelete.html"
        };       

   
    }
]);





