var myControllers = angular.module("ControllerCreate", []);

myControllers.controller('ControllerCreate', ['$rootScope', '$scope', '$http', '$location',
    async function ($rootScope, $scope, $http, $location) {
        $scope.hellow = 'Hellow to create controller';
    }
]);

