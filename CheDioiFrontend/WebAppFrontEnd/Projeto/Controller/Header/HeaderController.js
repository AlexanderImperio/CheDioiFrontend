var ControllerHeader = angular.module("ControllerHeader", []);

ControllerHeader.controller('ControllerHeader', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
        $scope.header = {
            name: 'header',
            url: endereco + 'home/header.html',
        }
    }
]);