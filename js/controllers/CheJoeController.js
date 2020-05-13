app.controller('CheJoeController', CheJoeController);

CheJoeController.$inject = ['$location']

function CheJoeController($location) {
    vm = this;
    vm.isHomePage = function () {
        if ($location.path() === '/') {
            return true;
        }

        return false;
    }

    vm.toPage = function (path) {
        $location.path(path);
    }
}