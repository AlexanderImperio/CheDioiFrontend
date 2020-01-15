var myControllers = angular.module("myControllers", []);

myControllers.controller('controllerRead', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {

        $rootScope.areasDeConhecimento = [
            { idArea: 1, descricao: "Ci�ncias Exatas e da Terra"},
            { idArea: 2, descricao: "Matem�tica"},
            { idArea: 3, descricao: "�lgebra"},
            { idArea: 4, descricao: "Conjuntos"},
            { idArea: 5, descricao: "L�gica Matem�tica"},
            { idArea: 6, descricao: "Teoria dos N�meros"},
            { idArea: 7, descricao: "Grupos de �lgebra N�o - Comutaviva"},
            { idArea: 8, descricao: "�lgebra Comutativa"},
            { idArea: 9, descricao: "Geometria Alg�brica"},
            { idArea: 10, descricao: "An�lise"},
            { idArea: 11, descricao: "An�lise Complexa"},
            { idArea: 12, descricao: "An�lise Funcional"},
            { idArea: 13, descricao: "An�lise Funcional N�o - Linear"},
            { idArea: 14, descricao: "Equa��es Diferenciais Ordin�rias"},
            { idArea: 15, descricao: "Equa��es Diferenciais Parciais"},
            { idArea: 16, descricao: "Equa��es Diferenciais Funcionais"},
            { idArea: 17, descricao: "Geometria e Topologia"},
            { idArea: 18, descricao: "Geometria Diferencial"},
            { idArea: 19, descricao: "Topologia Alg�brica"},
            { idArea: 20, descricao: "Topologia das Variedades"},
        ];

        $scope.modalDelete = {
            template:"modalDelete.html"
        };       

   
    }
]);





