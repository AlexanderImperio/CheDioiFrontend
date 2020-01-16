function messageCreate(validator, profissao) {
    if (!validator) {
        $.notify({
            //options
            message: "Profissão " + profissao + " cadastrado com sucesso!"
        }, {
            //settings
            type: "success",
            allow_dismiss: false,
            placement: {
                from: "top",
                align: "right"
            },
            animate: {
                enter: 'animated bounceInDown',
                exit: 'animated fadeOutUp'
            },
            z_index: 9999

        });
    } else {
        $.notify({
            //options
            message: "Erro ao criar profissão " + profissao
        }, {
            //settings
            type: "danger",
            allow_dismiss: false,
            placement: {
                from: "top",
                align: "right"
            },
            animate: {
                enter: 'animated bounceInDown',
                exit: 'animated fadeOutUp'
            },
            z_index: 9999
        });
    }
}

function messageUpdate(validator, profissao) {
    if (!validator) {
        $.notify({
            //options
            message: "Profissão " + profissao + " modificada com sucesso!"
        }, {
            //settings
            type: "success",
            allow_dismiss: false,
            placement: {
                from: "top",
                align: "right"
            },
            animate: {
                enter: 'animated bounceInDown',
                exit: 'animated fadeOutUp'
            },
            z_index: 9999

        });
    } else {
        $.notify({
            //options
            message: "Erro ao modificar profissão " + profissao
        }, {
            //settings
            type: "danger",
            allow_dismiss: false,
            placement: {
                from: "top",
                align: "right"
            },
            animate: {
                enter: 'animated bounceInDown',
                exit: 'animated fadeOutUp'
            },
            z_index: 9999
        });
    }
}

function messageDelete(validator, profissao) {
    if (!validator) {
        $.notify({
            //options
            message: "Profissão " + profissao + " deletada com sucesso!"
        }, {
            //settings
            type: "success",
            allow_dismiss: false,
            placement: {
                from: "top",
                align: "right"
            },
            animate: {
                enter: 'animated bounceInDown',
                exit: 'animated fadeOutUp'
            },
            z_index: 9999

        });
    } else {
        $.notify({
            //options
            message: "Erro ao deletar profissão " + profissao
        }, {
            //settings
            type: "danger",
            allow_dismiss: false,
            placement: {
                from: "top",
                align: "right"
            },
            animate: {
                enter: 'animated bounceInDown',
                exit: 'animated fadeOutUp'
            },
            z_index: 9999
        });
    }
}