app.factory('Api', Api);

Api.$inject = ['$http'];

function Api(http) {
    return {
        get url() {
            return 'https://servicodados.ibge.gov.br/api/v1/'
        },
        estadoList: [],
        municipioList: [],
        listAllEstados: function () {
            return http.get(`${this.url}localidades/estados`)
                .then(response => response.data)
                .then(estadoList => {
                    this.estadoList = estadoList;
                    return estadoList;
                });
        },
        newEstado: function (newEstado) {
            this.estadoList.push(newEstado);
        },
        listAllMunicipios: function () {
            return http.get(`${this.url}localidades/municipios`)
                .then(response => {
                    return response.data.map(municipio => ({
                        id: municipio.id,
                        nome: municipio.nome,
                        uf: municipio.microrregiao.mesorregiao.UF.sigla,
                    }));
                })
                .then(municipioList => {
                    this.municipioList = municipioList
                    return municipioList;
                });
        },

    }
}