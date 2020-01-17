function messageCreate(validator, areaConhecimento) {
    if (validator == false) {
        $.notify({
            //options
            message: "Area de conhecimento " + areaConhecimento + " criado com sucesso!"
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
            delay: 3000,
            timer: 2000,
            z_index: 9999

        });
    } else {
        $.notify({
            //options
            message: "Erro ao criar nova area de conhecimento" + areaConhecimento
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
            delay: 3000,
            timer: 2000,
            z_index: 9999

        });
    }
}

function messageUpdate(validator) {
    console.log(validator);
    if (validator == false) {
        $.notify({
            //options
            message: "Area de conhecimento alterado com sucesso!"
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
            delay: 3000,
            timer: 2000,
            z_index: 9999

        });
    } else {
        $.notify({
            //options
            message: "Erro ao alterar área de conhecimento"
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
            delay: 3000,
            timer: 2000,
            z_index: 9999

        });
    }
}

function messageDelete(validator, areaConhecimento) {
    if (!validator) {
        $.notify({
            //options
            message: "Area de conhecimento " + areaConhecimento + " deletado com sucesso!"
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
            delay: 3000,
            timer: 2000,
            z_index: 9999

        });
    } else {
        $.notify({
            //options
            message: "Erro ao deletar " + areaConhecimento
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
            delay: 3000,
            timer: 2000,
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