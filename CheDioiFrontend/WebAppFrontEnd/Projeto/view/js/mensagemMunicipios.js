function showInputMessage(validator, municipio) {
    //Funcao de mensagens para a criação de estado.

    if (validator == false) {
        $.notify({
            //options
            message: "municipio "+municipio+" cadastrado com sucesso!"
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
            message: "Erro ao cadastrar municipio"
        }, {
                //settings
                type: "danger",

                allow_dismiss: true,
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


function showUpdateMessage(validator, municipio) {
    //Funcao de mensagens para a alteração de estados.

    if (validator == false) {
        $.notify({
            //options
            message: "Municipio "+municipio+" alterado com sucesso!"
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
            message: "Erro ao alterar o municipio"
        }, {
                //settings
                type: "danger",
                allow_dismiss: true,
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


function showDeleteMessage(validator,  municipio) {
    //Funcao de mensagens para a exclusão de estados.

    if (validator == false) {
        $.notify({
            //options
            message: "Municipio " + municipio + " deletado com sucesso!"
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
            message: "Erro ao deletar "+municipio+" Municipio"
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

function siglaErrada() {

    $.notify({
        //options
        message: "Essa sigla já foi cadastrada."
    }, {
            //settings
            type: "danger",
            allow_dismiss: true,
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

function nomeIgual() {

    $.notify({
        //options
        message: "Faça alguma alteração!"
    }, {
            //settings
            type: "danger",
            allow_dismiss: true,
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

function nomeCreateIgual() {

    $.notify({
        //options
        message: "Este municipio já está cadastrado!"
    }, {
        //settings
        type: "danger",
        allow_dismiss: true,
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

function nomeVazil() {

    $.notify({
        //options
        message: "Preencha todos os campos"
    }, {
            //settings
            type: "danger",
            allow_dismiss: true,
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

function seletorVazil() {

    $.notify({
        //options
        message: "Selecione um estado!"
    }, {
        //settings
        type: "danger",
        allow_dismiss: true,
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

