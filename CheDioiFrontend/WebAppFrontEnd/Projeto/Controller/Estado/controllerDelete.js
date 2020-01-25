var myControllers = angular.module("myControllers", []);

myControllers.controller('controllerDelete', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {

        $scope.voltar = function () {
            $location.path('/estado');
        };
    }
]);