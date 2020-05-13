app.controller('MunicipiosController', MunicipiosController);
app.controller('MunicipiosControllerRead', MunicipiosControllerRead);
app.controller('MunicipiosControllerCreate', MunicipiosControllerCreate);
app.controller('MunicipiosControllerUpdate', MunicipiosControllerUpdate);

let municipioAtual;

function MunicipiosController() {
    const vm = this;
}

MunicipiosControllerRead.$inject = ['Api', '$location'];
function MunicipiosControllerRead(api, $location) {
    const vm = this

    vm.municipioList = [];

    vm.deleteMunicipio = function (id) {
        const confirmDelete = confirm('Deseja realmente deletar este município ?');
        if (confirmDelete) {
            api.municipioList.map((municipio, index) => {
                if (municipio.id === id) {
                    api.municipioList.splice(index, 1);
                }
            });
        }
    }

    vm.toUpdatePage = function (municipio) {
        municipioAtual = municipio
        $location.path('/municipios/atualizar');
    }

    vm.tableAcoes = [
        {
            nome: "Deletar",
            class: "btn-danger",
            function: vm.deleteMunicipio,
        },
        {
            nome: "Editar",
            class: "btn-primary",
            function: vm.toUpdatePage,
        },
    ];

    if (api.municipioList.length) {
        vm.municipioList = api.municipioList;
    } else {
        api.listAllMunicipios()
            .then(municipioList => {
                vm.municipioList = municipioList;
            });
    }
}

MunicipiosControllerUpdate.$inject = ['Api', '$location'];
function MunicipiosControllerUpdate(api, $location) {

    const vm = this;

    vm.municipioAtual = municipioAtual;

    if (vm.municipioAtual === undefined || !vm.municipioAtual) {
        $location.path('/municipios');
    }
}

MunicipiosControllerCreate.$inject = ['Api'];
function MunicipiosControllerCreate(api) {
    const vm = this;

    function initMunicipio() {
        return {
            nome: '',
            uf: '',
        }
    };

    vm.newMunicipio = initMunicipio();;


    vm.createNewMunicipio = function () {
        vm.validateNewMunicipio = function () {
            if (vm.newMunicipio.nome || vm.newMunicipio.uf) {
                if (vm.newMunicipio.uf.length <= 2) {
                    const newId = api.municipioList[api.municipioList.length - 1].id + 1;
                    vm.newMunicipio.id = newId;
                    vm.newMunicipio.uf = vm.newMunicipio.uf.toUpperCase();
                    return { response: true, message: 'Municipio criado com sucesso' };
                } else {
                    return { response: false, message: 'Somente a sigla do estado!' };
                }
            } else {
                return { response: false, message: 'Todos os campos são obrigatorios' };
            }
        }

        const validate = vm.validateNewMunicipio();

        if (validate.response) {
            api.municipioList.push(vm.newMunicipio);
            vm.newMunicipio = initMunicipio();
            alert(validate.message);
        } else {
            alert(`ERRO: ${validate.message}`);
        }
    }

} 
