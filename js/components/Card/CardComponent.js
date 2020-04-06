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

function CardController() {
    const vm = this;
}