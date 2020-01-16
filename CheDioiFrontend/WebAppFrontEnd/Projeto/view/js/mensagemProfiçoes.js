function messageCreate(validator, proficao) {
    if (!validator) {
        $.notify({
            //options
            message: "Profição " + proficao + " cadastrado com sucesso!"
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
            message: "Erro ao criar profição " + proficaol
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