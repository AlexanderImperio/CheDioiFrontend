app.controller('EstadosController', EstadosController);
app.controller('EstadosControllerRead', EstadosControllerRead);
app.controller('EstadosControllerCreate', EstadosControllerCreate);
app.controller('EstadosControllerUpdate', EstadosControllerUpdate);

EstadosControllerRead.$inject = ['Api'];
EstadosControllerCreate.$inject = ['Api'];

function EstadosController() {
    const vm = this;

}

function EstadosControllerRead(api) {
    const vm = this;

    vm.estadoList = [];

    if (api.estadoList.length) {
        vm.estadoList = api.estadoList;
    } else {
        api.listAllEstados()
            .then(estadoList => {
                vm.estadoList = estadoList;
            });
    }

}

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

function EstadosControllerUpdate() {
    vm = this;

    vm.estado = '';

}