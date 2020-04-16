app.controller('MunicipiosController', MunicipiosController);

function MunicipiosController() {
    const vm = this;
}

app.controller('MunicipiosControllerRead', MunicipiosControllerRead);
MunicipiosControllerRead.$inject = ['Api'];
function MunicipiosControllerRead(api) {
    const vm = this

    vm.municipioList = [];

    vm.printName = function () {
        console.log('Thiago');
    }
    
    vm.tableAcoes = [
        {
            nome: "deletar",
            class: "btn-danger",
            function: vm.printName,
        },
        {
            nome: "Editar",
            class: "btn-primary",
        },
    ]

    if (api.municipioList.length) {
        vm.municipioList = api.municipioList;
    } else {
        api.listAllMunicipios()
            .then(municipioList => {
                vm.municipioList = municipioList;
            });
    }
}