
function showInputMessage(validator) {
    //Funcao de mensagens para a criação de estado.

    if (validator == false) {
        $.notify({
            //options
            message: "Estado cadastrado com sucesso!"
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


function showUpdateMessage(validator) {
    //Funcao de mensagens para a alteração de estados.

    if (validator == false) {
        $.notify({
            //options
            message: "Estado alterado com sucesso!"
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


function showDeleteMessage(validator) {
    //Funcao de mensagens para a exclusão de estados.

    if (validator == false) {
        $.notify({
            //options
            message: "Estado deletado com sucesso!"
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
            message: "Erro ao deletar estado"
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
        message: "Essa UF já foi cadastrada."
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
        message: "Esse estado já foi cadastrado."
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

