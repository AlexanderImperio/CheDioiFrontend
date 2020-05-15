app.factory('Api', Api);

Api.$inject = ['$http'];

function Api(http) {
    return {
        get url() {
            return 'https://servicodados.ibge.gov.br/api/v1/'
        },
        estadoList: [],
        municipioList: [],
        areasConhecimentoList: [],
        profissoesList: [],
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

        listAllAreasConhecimento: async function () {

            this.areasConhecimentoList = [
                { id: 1, descricao: "Ciências Exatas e da Terra" },
                { id: 2, descricao: "Matemática" },
                { id: 3, descricao: "Álgebra" },
                { id: 4, descricao: "Conjuntos" },
                { id: 5, descricao: "Lógica Matemática" },
                { id: 6, descricao: "Teoria dos Números" },
                { id: 7, descricao: "Grupos de Álgebra Não - Comutaviva" },
                { id: 8, descricao: "Álgebra Comutativa" },
                { id: 9, descricao: "Geometria Algébrica" },
                { id: 10, descricao: "Análise" },
                { id: 11, descricao: "Análise Complexa" },
                { id: 12, descricao: "Análise Funcional" },
                { id: 13, descricao: "Análise Funcional Não - Linear" },
                { id: 14, descricao: "Equações Diferenciais Ordinárias" },
                { id: 15, descricao: "Equações Diferenciais Parciais" },
                { id: 16, descricao: "Equações Diferenciais Funcionais" },
                { id: 17, descricao: "Geometria e Topologia" },
                { id: 18, descricao: "Geometria Diferencial" },
                { id: 19, descricao: "Topologia Algébrica" },
                { id: 20, descricao: "Topologia das Variedades" },
            ];

            return this.areasConhecimentoList;
        },

        listAllProfissoes: async function () {
            this.profissoesList = [
                { id: 1, descricao: "Investigador particular" },
                { id: 2, descricao: "Gestor público" },
                { id: 3, descricao: "Ginasta artística" },
                { id: 4, descricao: "Ginasta rítmica" },
                { id: 5, descricao: "Ginecologista" },
                { id: 6, descricao: "Gourmet" },
                { id: 7, descricao: "Governador" },
                { id: 8, descricao: "Governanta" },
                { id: 9, descricao: "Grafologista" },
                { id: 10, descricao: "Gravurista" },
                { id: 11, descricao: "Guarda ou policial rodoviário" },
                { id: 12, descricao: "Guarda roupeiro" },
                { id: 13, descricao: "Guardador de veículos" },
                { id: 14, descricao: "Guia turistico" },
                { id: 15, descricao: "Guincheiro" },
                { id: 16, descricao: "Guitarrista" },
                { id: 17, descricao: "Harpista" },
                { id: 18, descricao: "Headhunter" },
                { id: 19, descricao: "Hematologista" },
                { id: 20, descricao: "Historiador" },
                { id: 21, descricao: "Homeopata" },
                { id: 22, descricao: "Hostess" },
                { id: 23, descricao: "Ilustrador" },
                { id: 24, descricao: "Implantodontista" },
                { id: 25, descricao: "Impressor" },
                { id: 26, descricao: "Imunologista" },
                { id: 27, descricao: "Infectologista" },
                { id: 28, descricao: "Inspetor" },
                { id: 29, descricao: "Instalador de linha telefônica" },
                { id: 30, descricao: "Instalador de painéis" }];

            return this.profissoesList;
        },

    }
}