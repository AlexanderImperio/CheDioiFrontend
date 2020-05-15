app.controller('ProfissoesController', ProfissoesController);
app.controller('ProfissoesControllerRead', ProfissoesControllerRead);
app.controller('ProfissoesControllerUpdate', ProfissoesControllerUpdate);
app.controller('ProfissoesControllerCreate', ProfissoesControllerCreate);

let profissaoAtual;

function ProfissoesController() {
    const vm = this;
}

ProfissoesControllerRead.$inject = ['Api', '$location'];
function ProfissoesControllerRead(api, $location) {
    const vm = this;
    vm.profissoesList = [];

    vm.toUpdatePage = function (profissao) {
        profissaoAtual = profissao;
        $location.path('/profissoes/atualizar');
    }

    vm.deleteProfissao = function (id) {
        const confirmDelete = confirm('Deseja realmente deletar esta profição ?');
        if (confirmDelete) {
            api.profissoesList.map((proficao, index) => {
                if (proficao.id === id) {
                    api.profissoesList.splice(index, 1);
                }
            });
        }
    }

    vm.tableActions = [
        {
            nome: "Deletar",
            class: "btn-danger",
            function: vm.deleteProfissao,
        },
        {
            nome: "Editar",
            class: "btn-primary",
            function: vm.toUpdatePage,
        },
    ]

    if (api.profissoesList[0] === undefined) {
        api.listAllProfissoes()
            .then(response => {
                vm.profissoesList = response;
            });
    } else {
        vm.profissoesList = api.profissoesList;
    }
}

function ProfissoesControllerUpdate() {
    const vm = this;
}

function ProfissoesControllerCreate() {
    const vm = this;
}