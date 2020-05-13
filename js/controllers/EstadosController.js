app.controller('EstadosController', EstadosController);
app.controller('EstadosControllerRead', EstadosControllerRead);
app.controller('EstadosControllerCreate', EstadosControllerCreate);
app.controller('EstadosControllerUpdate', EstadosControllerUpdate);

let estadoAtual;
function EstadosController() {
    const vm = this;
}


EstadosControllerRead.$inject = ['Api', '$location'];
function EstadosControllerRead(api, $location) {
    const vm = this;

    vm.estadoList = [];

    vm.estadoAtual;

    vm.toUpdatePage = function (estado) {
        estadoAtual = estado;
        $location.path('estados/atualizar');
    }

    vm.deleteEstado = function (id) {
        const deleteConfirm = confirm('Deseja realmente deletar este estado');
        if (deleteConfirm) {
            console.log('deletado com sucesso!');
            api.estadoList.map((item, index) => {
                item.id == id && api.estadoList.splice(index, 1);
            });
        }
    }

    vm.tableAcoes = [
        {
            nome: "Deletar",
            class: "btn-danger",
            function: vm.deleteEstado

        },
        {
            nome: "Editar",
            class: "btn-primary",
            function: vm.toUpdatePage,
        },
    ]

    if (api.estadoList.length) {
        vm.estadoList = api.estadoList;
    } else {
        api.listAllEstados()
            .then(estadoList => {
                vm.estadoList = estadoList;
            });
    }

}

EstadosControllerCreate.$inject = ['Api'];
function EstadosControllerCreate(api) {
    const vm = this;

    vm.newEstado = {
        nome: '',
        sigla: '',
    }

    vm.create = function () {

        function newEstado() {
            api.newEstado(vm.newEstado);
            alert('Estado criado com sucesso!');
        }

        if (!(vm.newEstado.nome == '' || vm.newEstado.sigla == '')) {
            if (api.estadoList.length) {
                newEstado();
            } else {
                api.listAllEstados()
                    .then(() => {
                        newEstado();
                    });
            }
        } else {
            alert('todos os campos são obrigatorios!');
        }

    }

}

EstadosControllerUpdate.$inject = ['$location'];
function EstadosControllerUpdate($location) {
    vm = this;
    vm.estadoAtual = estadoAtual;

    if (vm.estadoAtual === undefined || !vm.estadoAtual) {
        $location.path('/estados');
    }
}