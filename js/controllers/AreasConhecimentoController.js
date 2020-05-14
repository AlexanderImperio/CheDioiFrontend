app.controller('AreasConhecimentoController', AreasConhecimentoController);
app.controller('AreasConhecimentoControllerRead', AreasConhecimentoControllerRead);

function AreasConhecimentoController() {
    const vm = this;
}

AreasConhecimentoControllerRead.$inject = ['Api'];
function AreasConhecimentoControllerRead(api) {
    const vm = this;

    vm.areasConhecimentoList = [];

    vm.deleteAreaConhecimento = function (id) {
        const confirmDelete = confirm('deseja realmente deletar esta area de conhecimento ?');

        if (confirmDelete) {
            vm.areasConhecimentoList.map((areaConhecimento, index) => {
                if (areaConhecimento.id === id) {
                    api.areasConhecimentoList.splice(index, 1);
                }
            });
        }
    }

    vm.tableAcoes = [
        {
            nome: "Deletar",
            class: "btn-danger",
            function: vm.deleteAreaConhecimento,
        },
        {
            nome: "Editar",
            class: "btn-primary",
        },
    ]

    if (api.areasConhecimentoList.length === 0) {
        api.listAllAreasConhecimento()
            .then(areasConhecimentoList => {
                vm.areasConhecimentoList = areasConhecimentoList;
            });
    } else {
        vm.areasConhecimentoList = api.areasConhecimentoList;
    }
}