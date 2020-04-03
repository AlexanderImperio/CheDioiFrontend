var myControllers = angular.module("ControllerUpdate", []);

myControllers.controller('ControllerUpdate', ['$rootScope', '$scope', '$http', '$location',
    async function ($rootScope, $scope, $http, $location) {
        $scope.hellow = 'Hellow to update controller';

    }
]);

