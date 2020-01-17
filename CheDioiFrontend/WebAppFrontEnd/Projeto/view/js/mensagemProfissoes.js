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

function messageUpdate(validator) {
    if (!validator) {
        $.notify({
            //options
            message: "Profissão alterada com sucesso!"
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
            message: "Erro ao alterar profissão "
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

function campoVazil() {
    $.notify({
        //options
        message: "Preencha todos os campos"
    }, {
        //settings
        type: "warning",
        allow_dismiss: false,
        placement: {
            from: "top",
            align: "right"
        },
        animate: {
            enter: 'animated bounceInDown',
            exit: 'animated fadeOutUp'
        },
        delay: 3000,
        timer: 2000,
        z_index: 9999

    });
}

function duplicidate() {
    $.notify({
        //options
        message: "Este registro já foi cadastrado anteriormente!"
    }, {
        //settings
        type: "warning",
        allow_dismiss: false,
        placement: {
            from: "top",
            align: "right"
        },
        animate: {
            enter: 'animated bounceInDown',
            exit: 'animated fadeOutUp'
        },
        delay: 3000,
        timer: 2000,
        z_index: 9999

    });
}