app.factory('Api', Api);

Api.$inject = ['$http'];

function Api(http) {
    return {
        get url() {
            return 'https://servicodados.ibge.gov.br/api/v1/'
        },
        estadoList: [],
        listAllEstados: function () {
            return http.get(`${this.url}localidades/estados`)
                .then(response => response.data)
                .then(estadoList => {
                    this.estadoList = estadoList;
                    return estadoList;
                })
        },
        newEstado: function (newEstado) {
            this.estadoList.push(newEstado);
        },

    }
}