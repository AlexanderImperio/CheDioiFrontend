app.component('tableComponent', {
    templateUrl: './js/components/Table/TableComponent.html',
    controller: TableController,
    controllerAs: 'vm',
    bindings: {
        header: '=',
        body: '=',
        orderby: '@',
        campos: '=',
        acoes: '=',
    }
});

function TableController() {
    const vm = this;

    vm.$onInit = function () {
    }
}