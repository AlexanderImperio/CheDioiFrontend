var myControllers = angular.module("ReadController", []);

myControllers.controller('ReadController', ['$rootScope', '$scope', '$http', '$location',
    async function ($rootScope, $scope, $http, $location) {

        $scope.funcrionarios = [1,2,3,4,5,6,7,8,9,10];

        
    }
]);

