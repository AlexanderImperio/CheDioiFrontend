app.component('cardComponent', {
    templateUrl: './js/components/Card/CardComponent.html',
    controller: CardController,
    controllerAs: 'vm',
    bindings: {
        icon: '@',
        title: '@',
        link: '@',
    }
});

CardController.$inject = ['$location']

function CardController($location) {
    const vm = this;

    vm.changePage = function (path) {
        $location.path(path)
    }
}