app.component('headerComponent', {
    templateUrl: './js/components/Header/HeaderComponent.html',
    controller: HeaderController,
    controllerAs: 'vm',
    bindings: {
        ishomepage: '='
    }
});

function HeaderController() {
    const vm = this;
}

