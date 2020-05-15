app.controller('AreasConhecimentoController', AreasConhecimentoController);
app.controller('AreasConhecimentoControllerRead', AreasConhecimentoControllerRead);
app.controller('AreasConhecimentoControllerUpdate', AreasConhecimentoControllerUpdate);
app.controller('AreasConhecimentoControllerCreate', AreasConhecimentoControllerCreate);

let areaConhecimentoAtual;

function AreasConhecimentoController() {
    const vm = this;
}

AreasConhecimentoControllerRead.$inject = ['Api', '$location'];
function AreasConhecimentoControllerRead(api, $location) {
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

    vm.toUpdatePage = function (areaConhecimento) {
        areaConhecimentoAtual = areaConhecimento;
        $location.path('areas-de-conhecimento/atualizar');
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
            function: vm.toUpdatePage,
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

AreasConhecimentoControllerUpdate.$inject = ['$location']
function AreasConhecimentoControllerUpdate($location) {
    const vm = this;

    vm.areaConhecimentoAtual = areaConhecimentoAtual;

    if (vm.areaConhecimentoAtual === undefined) {
        $location.path('/areas-de-conhecimento');
    }
}

AreasConhecimentoControllerCreate.$inject = ['Api'];
function AreasConhecimentoControllerCreate(api) {
    const vm = this;

    vm.newAreaConhecimento = {
        descricao: '',
    };

    vm.createNewAreaConhecimento = async function () {
        if (vm.newAreaConhecimento.descricao) {
            vm.newAreaConhecimento.id = await newId();
            api.areasConhecimentoList.push(vm.newAreaConhecimento);
        } else {
            alert('Todos os campos são obrigatorios!');
        }
    }
    async function newId() {
        let newId;
        if (api.areasConhecimentoList[0] === undefined) {
            await api.listAllAreasConhecimento();
            newId = api.areasConhecimentoList[api.areasConhecimentoList.length - 1].id + 1;
        } else {
            newId = api.areasConhecimentoList[api.areasConhecimentoList.length - 1].id + 1;
        }

        return newId;
    }

}