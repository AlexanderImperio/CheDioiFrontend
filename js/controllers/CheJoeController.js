app.controller('CheJoeController', CheJoeController);

CheJoeController.$inject = ['$location']

function CheJoeController($location) {
    vm = this;
    vm.isHomePage = function () {
        return $location.path() === '/' ? true : false;
    }
    vm.title = "CheJoe Controller Success Created"
}