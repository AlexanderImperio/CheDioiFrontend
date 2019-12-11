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

            });
    } else {
        $.notify({
            //options
            message: "Erro ao cadastrar estado"
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

            });
    } else {
        $.notify({
            //options
            message: "Erro ao alterar o estado"
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

            });

    }
}


function showDeleteMessage(validator,  municipio) {
    //Funcao de mensagens para a exclusão de estados.

    if (validator == false) {
        $.notify({
            //options
            message: "Municipio "+municipio+" deletado com sucesso!"
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

        });
}

function nomeErrado() {

    $.notify({
        //options
        message: "Esse nome de estado já foi cadastrado."
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

        });
}

function estadoESiglaErrados() {

    $.notify({
        //options
        message: "O Estado e o UF já foram cadastrados."
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

        });
}

